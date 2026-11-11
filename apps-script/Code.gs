/**
 * HRC L&D · Pre-Process Training Online Workbook · Learner Tracker
 * Paste this whole file into the Google Sheet: Extensions → Apps Script → Code.gs (replace everything).
 * Deploy → New deployment → Web app · Execute as: Me · Who has access: Anyone.
 * (Updating later: Deploy → Manage deployments → pencil → Version: New version → Deploy. The URL stays the same.)
 *
 * Tabs it maintains:
 *   Progress         one row per learner (by HRC email), refreshed every couple of minutes while they work
 *   Activity Log     registrations, sessions, unlocks, away / idle prompts, day completions, downloads
 *   Capstone Scores  scores and coaching notes the facilitator enters in the facilitator workbook
 */
const NAVY = '#0B1E3A';

function doGet() {
  return ContentService.createTextOutput('HRC workbook tracker is running.');
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    try { ss.setRecalculationInterval(SpreadsheetApp.RecalculationInterval.MINUTE); } catch (x) {}
    if (d.type === 'coach') writeCoach(ss, d);
    else writeLearner(ss, d);
    return out('ok');
  } catch (err) {
    return out('error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

function sheet(ss, name, index) {
  return ss.getSheetByName(name) || (index == null ? ss.insertSheet(name) : ss.insertSheet(name, index));
}

function styleHeader(sh, n) {
  sh.getRange(1, 1, 1, n).setFontWeight('bold').setBackground(NAVY).setFontColor('#FFFFFF').setWrap(true).setVerticalAlignment('middle');
  sh.setFrozenRows(1);
}

/* d.cols = [{ h: header, v: value, f: number format or '' }]  ·  d.key = header used to find the row */
function upsert(sh, cols, keyHeader, frozenCols) {
  let header = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].filter(String) : [];
  cols.forEach(c => { if (header.indexOf(c.h) < 0) header.push(c.h); });
  sh.getRange(1, 1, 1, header.length).setValues([header]);
  styleHeader(sh, header.length);
  if (frozenCols) sh.setFrozenColumns(frozenCols);
  const keyCol = header.indexOf(keyHeader) + 1;
  const keyVal = String((cols.find(c => c.h === keyHeader) || {}).v || '').toLowerCase();
  const last = sh.getLastRow();
  const keys = last > 1 ? sh.getRange(2, keyCol, last - 1, 1).getValues().map(r => String(r[0]).toLowerCase()) : [];
  const idx = keys.indexOf(keyVal);
  const row = idx < 0 ? last + 1 : idx + 2;
  const cur = idx < 0 ? new Array(header.length).fill('') : sh.getRange(row, 1, 1, header.length).getValues()[0];
  cols.forEach(c => { if (c.keep && c.v === '') return; cur[header.indexOf(c.h)] = c.v; });
  sh.getRange(row, 1, 1, header.length).setValues([cur]);
  cols.forEach(c => { if (c.f) sh.getRange(row, header.indexOf(c.h) + 1).setNumberFormat(c.f); });
  return { row, header };
}

function writeLearner(ss, d) {
  const sh = sheet(ss, 'Progress', 0);
  const cols = d.cols.map(c => ({ ...c, v: c.date ? (c.v ? new Date(c.v) : '') : c.v }));
  const r = upsert(sh, cols, 'HRC Email', 3);
  const lastSeenCol = r.header.indexOf('Last Seen') + 1;
  const statusCol = r.header.indexOf('Status') + 1;
  if (lastSeenCol && statusCol) {
    const ls = sh.getRange(r.row, lastSeenCol).getA1Notation();
    sh.getRange(r.row, statusCol).setFormula('=IF(' + ls + '="","",IF(NOW()-' + ls + '<5/1440,"Active now",IF(NOW()-' + ls + '<60/1440,"Idle","Offline")))');
  }
  if (d.event && d.event !== 'autosave' && d.event !== 'heartbeat') {
    const lg = sheet(ss, 'Activity Log');
    if (!lg.getLastRow()) { lg.appendRow(['Time', 'Full Name', 'HRC Email', 'Cohort', 'Event', 'Detail', 'Overall %', 'Hours Invested']); styleHeader(lg, 8); }
    lg.appendRow([new Date(), d.name, d.email, d.cohort, d.eventLabel || d.event, d.detail || '', (d.overall || 0) / 100, (d.seconds || 0) / 86400]);
    const n = lg.getLastRow();
    lg.getRange(n, 1).setNumberFormat('mmm d, yyyy h:mm am/pm');
    lg.getRange(n, 7).setNumberFormat('0%');
    lg.getRange(n, 8).setNumberFormat('[h]:mm');
  }
}

function writeCoach(ss, d) {
  const sh = sheet(ss, 'Capstone Scores');
  (d.rows || []).forEach(rw => {
    if (!rw.name) return;
    upsert(sh, [
      { h: 'Learner Or Group', v: rw.name },
      { h: 'Case A / 10', v: rw.a === '' ? '' : Number(rw.a) },
      { h: 'Case B / 10', v: rw.b === '' ? '' : Number(rw.b) },
      { h: 'Total / 20', v: (Number(rw.a) || 0) + (Number(rw.b) || 0) },
      { h: 'Demonstrated Strengths', v: rw.str || '' },
      { h: 'Concepts To Practice Again', v: rw.prac || '' },
      { h: 'Coach And Follow-Up Plan', v: rw.plan || '' },
      { h: 'Facilitator', v: d.facilitator || '' },
      { h: 'Updated', v: new Date(), f: 'mmm d, yyyy h:mm am/pm' }
    ], 'Learner Or Group', 1);
  });
}

function out(s) { return ContentService.createTextOutput(s); }
