# Pre-Process Training Online Workbook
UT Health San Antonio · AR And Denial Management · HealthRecon Connect L&D

One link, three views:
- **Learner Workbook**: learners register (full name + HRC email), unlock each day with an access code, type their answers, and download their completed workbook (PDF or Word).
- **Facilitator Workbook**: passcode `UTH-FACI-2026`. Teaching guides, answer keys, private payer replies, scoring, access codes, coaching notes.
- **Presentation View**: same passcode. Looks like the learner workbook; small "Key" button reveals answers on the exercises.

## Put it online (GitHub Pages)
1. Go to github.com → **New repository** → name it e.g. `Pre-Process-Training-Workbook` → **Public** → **Create repository**.
2. Click **uploading an existing file**.
3. Open this folder on your computer, select **everything inside it** (including the `assets` folder) and drag it into the GitHub page. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch" choose **main** and **/(root)** → **Save**.
5. Wait 1–2 minutes. Your link appears at the top of the Pages screen:
   `https://<your-github-name>.github.io/Pre-Process-Training-Workbook/`

Note: `.nojekyll` is a hidden file. If your Mac hides it, it's fine. The site works without it.

## Day access codes
- Day 1: ORBIT-K6T · CEDAR-P99 · HARBOR-YW4 · MAPLE-6J7 · SUMMIT-CU9
- Day 2: RIVER-T7Q · FALCON-9TW · COBALT-FXD · MEADOW-9HY · BEACON-6AM
- Day 3: ATLAS-XDY · EMBER-99D · QUARTZ-WVQ · CANYON-69G · SIERRA-KWP
- You can make your own on the **Access Codes** page in the facilitator workbook.

## Google Sheets tracking
- Already connected. The link to your Apps Script is in `ard-workbook-data.js` (`sheetUrl`).
- Tabs: **Progress** (one row per learner), **Activity Log**, **Capstone Scores**.
- The script code is in `apps-script/Code.gs` (for reference; it already lives in your Google Sheet).

## Where to edit
- Content, answer keys, visuals, access-code words, email rule: `ard-workbook-data.js`
- Restrict registration to HRC emails: set `emailDomains: ['@yourdomain.com']` in `ard-workbook-data.js`.
- Layout and behaviour: `index.html`

## Saving
Answers save in each learner's browser on their own computer. Completion, time and scores go to the Google Sheet. Typed answers do not.

## Font licence
Proxima Nova is a commercial font. Make sure HRC's licence covers web use before publishing publicly.
