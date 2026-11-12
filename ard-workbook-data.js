/* UT Health San Antonio · AR and Denial Management · Online Workbook content
   Learner + facilitator editions share one page list so both stay aligned.
   Blocks: P para · H heading · T table · Q long answer · F short field · D discuss (+notes)
   N callout · O order cards · C classify table · K checklist · U bullets · W worksheet table · S pick one + explain
   g: facilitator-only teaching guide shown under the learner page. */
(function () {
  const P = t => ({ t: 'p', text: t });
  const H = t => ({ t: 'h', text: t });
  const T = (head, rows) => ({ t: 'tbl', head, rows });
  const Q = (id, text, n) => ({ t: 'q', id, text, n: n || 3 });
  const F = (id, label) => ({ t: 'f', id, label });
  const D = (id, text) => ({ t: 'disc', id, text });
  const N = t => ({ t: 'note', text: t });
  const O = (id, cards) => ({ t: 'order', id, cards });
  const C = (id, head, rows, options) => ({ t: 'cls', id, head, rows, options: options || null });
  const K = (id, items) => ({ t: 'chk', id, items });
  const U = items => ({ t: 'ul', items });
  const W = (id, head, rows) => ({ t: 'ws', id, head, rows });
  const S = (id, label, options) => ({ t: 'pick', id, label, options });
  const G = (minutes, studentPage, time, parts) => ({ minutes, studentPage, time, parts });

  const pages = [
    { id: 'welcome', group: 'start', title: 'Welcome', kind: 'Start Here' },
    { id: 'map', group: 'start', title: 'Course Map', kind: 'Find Your Session By Code' },
    { id: 'setup', group: 'start', faciOnly: true, title: 'Facilitator Setup For Virtual Delivery', kind: 'Before The Course', blocks: [
      H('Set Up Before Class'),
      U([
        'Send learners the workbook link and the meeting link. Test screen sharing, chat, breakout rooms, and the private submission channel you will use for the capstone.',
        'Keep this facilitator edition off screen. If you share your own workbook, switch on “Hide facilitator notes” first. Post the session code and page number (for example “1.3 · page 6”) in chat; page numbers are identical in both editions and ask for a quick “I can see it” check.',
        'Release each day’s access code in chat at the start of that day. Learners cannot open a day until they enter its code.',
        'Use the minute blocks to keep seven learning hours per day. Announce break return times separately. Shorten report-outs if needed; preserve practice and feedback.'
      ]),
      H('Run Each Activity'),
      P('Teach from the learner page. Post the case code, task, time allowed, and expected response in chat. Give everyone quiet thinking time, then ask for one answer and its evidence in chat or aloud. Pause before sharing the key.'),
      P('For small-group work, open pairs or trios. Assign a reader, decision maker, and evidence checker or reporter; combine roles in pairs and rotate. Broadcast the return cue. On return, ask each group to post one conclusion and one remaining question.'),
      N('Whole-Group Fallback: If breakout rooms are unavailable, give quiet work time, then have everyone draft a chat response and send together. Invite two learners to explain the evidence. For payer calls, role-play live with one volunteer; everyone else uses the observer checklist.'),
      N('If A Learner Disconnects: Point them to the session code or page number and task when they return. Their answers are saved automatically on their device; they can continue where they left off.'),
      N('Ask After Every Answer: “Which document or field supports that? What is still unknown? What is the next authorized action?”'),
      H('Keep Examples Separate From Production'),
      P('The public UT payer list is a recognition aid, not the team’s payer mix or a guarantee of coverage. Fictional examples use recognizable payer names without assigning real payer turnaround times. Refer local questions to the process owner.'),
      P('Keep a list labeled Questions for the Process Owner (see Coaching And Signoff Notes). Record the topic, document to verify, and owner to confirm. Do not fill gaps with a guessed queue, deadline, template, or responsibility.'),
      H('Record Learning'),
      P('Learners download their completed workbook (PDF or Word) and send it through the private submission channel for individual notes and the Day 3 capstone; reserve group chat for fictional-case discussion. Return scores and coaching privately. The rubric measures classroom learning and does not authorize independent production work.')
    ] },
    { id: 'codes', group: 'start', faciOnly: true, title: 'Access Codes', kind: 'Release One Code Per Day' },

    /* ---------------- DAY 1 ---------------- */
    { id: 'A', day: 1, title: 'Training Account A', kind: 'Practice Sheet', minutes: 'In Session', blocks: [
      P('Use this fictional hospital account throughout Day 1. Amounts and dates are classroom data. For the exercise, assume the ledger and coverage extract below are complete unless a question asks you to consider a different scenario.'),
      T(['Account Field', 'Classroom Record'], [
        ['Patient And Encounter', 'Alex Sample; MRN TR-P-17; encounter TR-E-03; outpatient facility services on October 3, 2026.'],
        ['Hospital Account', 'HAR TR-HB-101; guarantor account TR-G-41; financial class Commercial.'],
        ['Billing Scope', 'Facility claim I-101 (837I). A separate professional bill, P-101, is outside this account.'],
        ['Coverage', 'BCBSTX commercial PPO, active on October 3 in this case; primary; no secondary shown in this complete training extract. Member ID TR-M-41.'],
        ['Claim Identifiers', 'Epic invoice I-101; payer claim number ICN-88401.']
      ]),
      H('Submission And Response History'),
      T(['Date', 'Evidence'], [
        ['October 4', 'Facility claim for $1,000 transmitted.'],
        ['October 5', 'Payer accepted the facility claim for processing.'],
        ['October 12', 'Remittance: billed $1,000; allowed $600; paid $480; CO-45 $400 contractual reduction; PR-2 $120 coinsurance. EFT trace TR-EFT-101.'],
        ['October 13', 'Ledger: $480 insurance payment and $400 adjustment posted and applied to I-101. Remaining insurance bucket balance $0; patient bucket balance $120.']
      ]),
      H('Your First Reading'),
      Q('A.q1', '1. Copy the hospital account number and the payer claim number. What does each identify?'),
      Q('A.q2', '2. Mark the first evidence of a payer decision and the separate evidence of posting.'),
      Q('A.q3', '3. Name one piece of evidence you would need if the ledger did not agree with the remit.')
    ] },
    { id: '1.1', day: 1, title: 'The Hospital Revenue Cycle', kind: 'Learner Lesson And Practice', minutes: 45, blocks: [
      H('Read And Discuss'),
      P('Registration identifies the patient, guarantor, and coverage. Eligibility checks whether coverage was active for the service date. Authorization, when required, is a separate payer review step. After services are provided, charges and coding describe what happened; billing prepares and transmits a claim.'),
      P('A payer can reject the claim at intake or accept it for processing. When it adjudicates the claim, it decides payment, adjustments, and responsibility. Payment posting records and applies transactions. AR follows the balance; denial management investigates an adverse payment decision. Patient billing is a separate step for amounts appropriately assigned to the patient.'),
      P('UT Health San Antonio is an academic health center. A visit may involve a facility, clinicians, and specialty services. One visit can produce a hospital bill (HB) and a professional bill (PB). Follow the bill you are assigned.'),
      H('Exercise 1 · Put The Events In Order'),
      O('1.1.order', [
        ['A', 'A payer remit reports payment and coinsurance.'],
        ['B', 'The facility sends an institutional claim.'],
        ['C', 'Registration records the member ID and plan.'],
        ['D', 'A payment is applied to the facility bill.'],
        ['E', 'Facility services and charges are recorded.'],
        ['F', 'A collector verifies what remains on the account.']
      ]),
      H('Exercise 2 · Explain The Ripple Effect'),
      Q('1.1.q1', 'A plan ID was entered incorrectly before billing. Describe one downstream clue that could expose the mistake and one source you would check.'),
      D('1.1.d1', 'A physician was paid for the same visit. Does that resolve the hospital bill? Explain.')
    ], g: G(45, 4, [
      ['5', 'Open: “What has to happen before a hospital can get paid?” List answers without correcting their order yet.'],
      ['12', 'Teach the lifecycle from the learner page. Point to Training Account A and distinguish I-101 from P-101. Type one row per record in chat or sketch it on a shared whiteboard.'],
      ['12', 'Learners order the six cards independently, then compare in pairs. Ask partners to identify the earliest place a coverage problem could start.'],
      ['10', 'Debrief the card order and the incorrect plan scenario. Invite one learner to explain what AR sees versus where the problem started.'],
      ['6', 'Check understanding: each learner names one upstream event and one document it can produce. Transition to account identifiers.']
    ], [
      ['Answer Guidance', [
        'Cards: C → E → B → A → D → F. Explain that authorization belongs before services when required; this card set deliberately does not establish that a particular service needed authorization. Posting may occur after the payer decision, so the remit is not the ledger.',
        'Wrong plan: A rejection, payer not-on-file response, or eligibility issue could surface. Check the insurance product on the date of service against the plan billed on the actual claim; use the acknowledgement or payer response to narrow the issue.',
        'PB payment does not resolve HB. Check the billing entity, claim, and ledger for I-101. Accept alternative examples if learners distinguish the two records.'
      ]],
      ['Correct This Misconception', ['“AR fixes everything upstream.” AR identifies the issue, gathers evidence, and follows the approved next action or handoff. Charge correction and rebilling are outside this training.']]
    ]) },
    { id: '1.2', day: 1, title: 'Account Records And Billing Terms', kind: 'Learner Lesson And Practice', minutes: 45, blocks: [
      H('Read And Discuss'),
      T(['Record Or Label', 'What It Tells You'], [
        ['MRN And Encounter', 'MRN identifies the patient; encounter identifies a visit or episode.'],
        ['HAR And Guarantor', 'HAR identifies the hospital billing account; the guarantor is responsible for eligible patient balances and may have several linked accounts.'],
        ['Invoice And Payer Claim Number', 'The invoice or internal claim ID identifies the bill in the organization; the ICN or payer claim number identifies it with the payer.'],
        ['Account Class And Financial Class', 'Account class describes the setting or type of account; financial class groups the funding source, such as Commercial or Medicaid.'],
        ['Liability Bucket', 'Portion of the HAR assigned to an insurance payer or self-pay; a bucket balance can differ from the total HAR balance.'],
        ['DNB, Billing Indicator, And WQ', 'DNB means Discharged/Not Billed. A billing indicator flags a condition. A workqueue lists items that meet configured rules. Flags and workqueue membership do not prove a payer decision.']
      ]),
      H('Exercise 1 · Point To The Evidence'),
      P('Using Training Account A, record each identifier.'),
      C('1.2.ids', ['Identifier', 'From Training Account A'], [['HAR', ''], ['MRN', ''], ['Encounter', ''], ['Guarantor Account', ''], ['Date Of Service', ''], ['Invoice', ''], ['Payer Claim Number', '']]),
      H('Exercise 2 · Separate The Records'),
      Q('1.2.q1', 'A classmate reads “Commercial” and says, “That tells us which plan to call.” What field would you use instead? Another classmate sees $120 on the HAR and says, “Insurance owes $120.” Which two fields would you compare?', 4),
      N('Recall: A claim number, a balance, and a status only make sense when you know which record you are looking at.')
    ], g: G(45, 5, [
      ['6', 'Open with “If I give you an MRN, do you know which bill I mean?” Ask learners for an example of one patient with two visits.'],
      ['12', 'Explain the six rows, then model identifying the bill from the HAR, service date, facility context, and invoice in Training Account A.'],
      ['12', 'Have learners label the identifiers independently. Compare answers in pairs; partners must explain one difference rather than just read numbers.'],
      ['10', 'Debrief the two incorrect statements. Give learners the words patient, encounter, account, bucket, claim, and work item; ask what each identifies.'],
      ['5', 'Exit check: learners state which number they would reference internally and which one the payer can use. Transition to payer product.']
    ], [
      ['Answer Guidance', [
        'HAR TR-HB-101; MRN TR-P-17; encounter TR-E-03; guarantor TR-G-41; service date October 3; facility invoice I-101; payer ICN-88401. P-101 is separate.',
        '“Commercial” is a financial category, not the plan. Here the coverage shows BCBSTX commercial PPO. Compare the insurance bucket ($0) and the patient bucket ($120); the total account does not tell you who owes the money.',
        'If learners ask what a flag does, explain that an indicator can support routing, reporting, or a hold depending on its configuration. A workqueue is a list for work, not a payer status. Do not teach a local flag or queue assignment from a file name.'
      ]],
      ['Check Before Moving On', ['Ask a learner to distinguish account status, payer claim status, and denial status using one sentence each. “Billed,” “accepted,” and “denial open” can coexist because they describe different records.']]
    ]) },
    { id: '1.3', day: 1, title: 'UT Health Payer And Product Recognition', kind: 'Learner Lesson And Practice', minutes: 75, blocks: [
      H('Read And Discuss'),
      P('Identify the payer, exact product, billing entity, and service date. One carrier can offer multiple products. Public participation varies by location and product; it does not prove a member’s eligibility, coverage for a service, or the team’s payer volume.'),
      T(['Payer Family', 'Names To Recognize', 'What Matters For Follow-Up'], [
        ['Original Medicare', 'Traditional Medicare; Novitas Solutions, the Texas Jurisdiction H A/B MAC', 'Original Medicare claims use the relevant contractor process. A MAC is a Medicare Administrative Contractor.'],
        ['Medicare Advantage', 'Humana, Aetna, BCBSTX, UnitedHealthcare', 'A private Medicare plan; verify the plan’s requirements rather than assuming the Original Medicare process applies.'],
        ['Texas Medicaid And CHIP', 'Traditional Medicaid; Community First Health Plans, Superior HealthPlan, Molina', 'Identify the product. STAR, STAR Health, STAR Kids, and STAR+PLUS are Texas Medicaid programs. CHIP is a separate children’s coverage program.'],
        ['Commercial And Marketplace', 'BCBSTX, Aetna, Cigna, UnitedHealthcare; selected exchange products such as Blue Advantage', 'PPO, HMO, EPO, and Marketplace/QHP are product clues. Verify the actual plan and facility.'],
        ['Specialty Accounts', 'AG Administrators–Occunet; student/guarantor, research, and Executive Health topics', 'Recognize the exception and consult the approved procedure before acting.']
      ]),
      N('An overnight hospital stay can be outpatient observation. Confirm the documented patient status. HOPD means hospital outpatient department. OPPS is the Outpatient Prospective Payment System; DRG is an inpatient case classification used in certain payment systems.'),
      H('Practice · Sort The Payer Cards'),
      C('1.3.sort', ['Card', 'Payer Family'], [
        ['A', 'BCBSTX commercial PPO'], ['B', 'BCBSTX Medicare Advantage HMO'], ['C', 'Original Medicare Part A'],
        ['D', 'Community First STAR'], ['E', 'Superior CHIP'], ['F', 'BCBSTX Blue Advantage Exchange']
      ], ['Original Medicare', 'Medicare Advantage', 'Texas Medicaid', 'CHIP', 'Commercial', 'Marketplace / Exchange', 'Specialty Account']),
      Q('1.3.q1', 'Which pairs share a brand?', 2),
      Q('1.3.q2', 'Which clues distinguish the products?', 2),
      Q('1.3.q3', 'Which facts would you check on the actual date of service?', 2)
    ], g: G(75, 6, [
      ['10', 'Open by reading cards A and B without the product words, then with them. Ask why the answer changes.'],
      ['20', 'Teach the payer families from the learner table. Explain how a public participation table can show different columns for physicians, surgery center, and hospital.'],
      ['20', 'Have groups classify the six payer cards, then swap with another group to check category and evidence. Ask them to create a seventh card that is deliberately ambiguous.'],
      ['15', 'Debrief. Add a short example: a patient stays overnight without inpatient admission; ask learners whether the duration alone settles billing status.'],
      ['10', 'Check recall: one learner names the Original Medicare contractor for Texas, another explains STAR vs. CHIP, and another names four fields to verify.']
    ], [
      ['Answer Guidance', [
        'A commercial; B Medicare Advantage; C Original Medicare, with Novitas as Texas A/B MAC; D Texas Medicaid managed care; E CHIP; F Marketplace/exchange. A, B, and F share the BCBSTX brand. For follow-up, verify the product, eligibility for the service date, billed entity/location, payer destination and the applicable approved requirements.',
        'Observation is outpatient status in the Medicare example; an overnight stay alone is insufficient. This exercise does not teach when to change an admission or billing status.'
      ]],
      ['Teaching Boundary', ['UT Health’s public payer list is a recognition aid. A listed brand does not prove participation for every product, location or date. Use the approved operational payer reference for production. Do not infer AG/UTSA paper-claim steps, billing ownership, or research handling from the titles.']]
    ]) },
    { id: '1.4', day: 1, title: 'Coverage And Payer Responsibility', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('A payer is the insurer or administrator; a plan is the product; coverage is the member’s enrollment for a period. The subscriber may be someone other than the patient. Eligibility shows enrollment for a date; it does not prove that a particular service is covered or that the claim will pay.'),
      P('Coordination of Benefits (COB) helps determine which coverage processes first. Medicare Secondary Payer (MSP) refers to situations where another payer is responsible before Medicare. Verify order from appropriate evidence; two active coverages do not establish that order. Prior authorization may be required separately from eligibility, and its record must match the service, dates, and provider or facility as applicable.'),
      H('Practice · Compare The Two Coverage Records'),
      T(['Evidence', 'Classroom Record For TR-HB-114'], [
        ['Service', 'Facility outpatient service on October 8, 2026.'],
        ['Coverage A', 'Aetna commercial PPO; active for October 8; patient is a dependent; enrollment response does not state filing order.'],
        ['Coverage B', 'Original Medicare Part A/B; active for October 8; no other-payer determination shown in packet.'],
        ['Account Entry', 'Aetna entered first.'],
        ['Payer Message', 'Aetna asks for other-insurance information. No written determination of payer order is in the packet.']
      ]),
      Q('1.4.q1', '1. What is confirmed about the two coverages? What remains unconfirmed?'),
      Q('1.4.q2', '2. What two sources would you check before asking for a change to the filing order?'),
      Q('1.4.q3', '3. If an authorization number appears in a note, what must you match before treating it as relevant?'),
      D('1.4.d1', 'A payer confirms active enrollment. Does that answer a service-specific no-authorization denial?')
    ], g: G(60, 7, [
      ['8', 'Retrieve Day 1 vocabulary: payer, product, coverage, and subscriber. Ask learners for one fact that an insurance card cannot confirm.'],
      ['15', 'Teach eligibility, COB, MSP, and authorization. Model separating a documented filing order from a verified payer order.'],
      ['18', 'Pairs read TR-HB-114 and answer the three questions. One person must cite a packet fact; the partner names missing evidence.'],
      ['12', 'Debrief the answers. Give a variation: change the service date to outside Coverage A’s verified period and ask what must be checked again.'],
      ['7', 'Exit check: ask for one sentence distinguishing eligibility from authorization. Link to claim submission and payer responses.']
    ], [
      ['Answer Guidance', [
        '1. Both enrollment responses show active coverage on October 8. The order of responsibility is unresolved. The local account entry shows what was recorded, not that the payer order is correct.',
        '2. Accept current payer COB information, approved Medicare/MSP information or questionnaire where applicable, verified employer/group information, or a prior payer adjudication that clarifies the order. Use the approved intake or escalation path; do not change order based on the exercise.',
        '3. Verify patient/member, payer product, service/procedure, dates, approved units if relevant, and provider/facility. Authorization does not guarantee coverage or payment.'
      ]],
      ['Correct This Misconception', ['“Medicare always pays first” and “the first payer listed must be correct” are both unsafe shortcuts. The right answer is to identify the governing facts and verify the order with the approved reference.']]
    ]) },
    { id: '1.5', day: 1, title: 'Claim Evidence And Status', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('The electronic institutional claim is an 837I; UB-04 or CMS-1450 is its paper counterpart. An acknowledgment reports a processing step. A clearinghouse acknowledgment may not show payer acceptance. Payer acceptance means the claim can be processed; the payer remittance shows adjudication. The payer claim number identifies a specific claim record.'),
      T(['Status Evidence', 'What It Supports'], [
        ['Transmitted', 'A send event is recorded. Check the destination and later acknowledgments.'],
        ['Rejected', 'A processing step did not accept the claim. Read the rejection and identify its source.'],
        ['Accepted By Payer', 'The payer accepted it for processing; payment is not yet established.'],
        ['Payer Pending', 'A payer response confirms it is still processing.'],
        ['No Response Found', 'The available records do not show a payer response. The payer may still have received the claim.'],
        ['Adjudicated', 'The payer decided how to process the claim; use the remit to learn the outcome.']
      ]),
      H('Exercise · Read Four Timelines'),
      C('1.5.tl', ['Timeline', 'Evidence To Classify', 'Status Supported'], [
        ['A', 'Sent October 6; clearinghouse accepted; no payer response located.'],
        ['B', 'Sent October 6; payer intake rejects the claim due to member ID formatting.'],
        ['C', 'Payer accepted October 7; portal says processing October 12.'],
        ['D', 'Remit dated October 12 says payer denied the affected service.']
      ], ['Transmitted', 'Rejected', 'Accepted By Payer', 'Payer Pending', 'No Response Found', 'Adjudicated']),
      Q('1.5.q1', 'For A, write the question you would ask before deciding what to do.', 2),
      Q('1.5.q2', 'Use Training Account A to find the separate dates of submission, payer acceptance, and adjudication.', 2)
    ], g: G(60, 8, [
      ['8', 'Open: “The claim says accepted. Who accepted it?” Collect at least two possible sources.'],
      ['14', 'Teach the six stages and institutional claim formats. Explain that the absence of a response in a packet is an evidence gap, not a payer decision.'],
      ['18', 'Learners classify A–D, write one focused question for A, then find the three dates on Training Account A.'],
      ['14', 'Debrief. Ask each group to name the newest relevant evidence rather than read the first history entry. Compare intake rejection with an adjudicated denial.'],
      ['6', 'Ask learners to complete the sentence: “Accepted means ___, and I would look at ___ to know payment.” Transition to remittance.']
    ], [
      ['Answer Guidance', [
        'A: Clearinghouse accepted; no payer response located. Verify destination, member and dates; ask whether the payer received the claim and has assigned an ICN, or seek payer acknowledgment via approved sources. Do not assume “never received” or recommend automatic resubmission.',
        'B: Payer intake rejection; capture the specific message and route for approved review. C: Payer pending; record the latest verified status. D: Adjudicated denial of the affected service; read the remit reason.',
        'Training Account A: October 4 submitted; October 5 accepted; October 12 remittance. October 13 is posting, not adjudication. A 277CA is a claim acknowledgment, not the 835 remittance, if this term arises.'
      ]]
    ]) },
    { id: '1.6', day: 1, title: 'Remittance And Balance Basics', kind: 'Learner Lesson And Practice', minutes: 75, blocks: [
      H('Read And Discuss'),
      P('The remittance is the payer’s explanation of how it processed a claim. An ERA is electronic remittance advice (835); an EOB is a benefits explanation. An EFT is a transfer of funds. A remit can exist even when no payment is due, and payment can be reported before it is applied to the ledger.'),
      P('Read three elements together: the group code classifies the adjustment, the CARC explains the reason, and a RARC adds detail when present. CO is Contractual Obligation; PR is Patient Responsibility on the remit. The remit does not by itself authorize billing a patient; verify secondary coverage and applicable billing rules.'),
      T(['Amount', 'How To Read It'], [
        ['Billed Vs. Allowed', 'Original submitted charge vs. amount the plan recognizes for the service.'],
        ['Payment Vs. Adjustment', 'Money paid vs. accounting reduction or other change to the balance.'],
        ['Deductible, Copay, Coinsurance', 'Patient cost-sharing: amount applied before plan sharing for some benefits, fixed amount, or percentage share.'],
        ['Remaining Balance', 'Verify posted transactions and current responsibility, not the remit alone.']
      ]),
      H('Exercise · Reconcile Training Account A'),
      Q('1.6.q1', '1. Calculate what remains after the posted insurance payment and contractual adjustment. Which bucket carries it in the case?'),
      Q('1.6.q2', '2. Explain the difference between the $600 allowed amount and $480 payer payment.'),
      Q('1.6.q3', '3. What would change in your conclusion if the $480 appeared on the remit but not on the ledger? What if a valid secondary payer were later verified?', 4)
    ], g: G(75, 9, [
      ['10', 'Open by displaying or reading four amounts from Training Account A. Ask learners which number represents cash received.'],
      ['18', 'Teach the remit vs. ledger and explain group code, reason code, and remark. Walk through billed, allowed, plan payment and cost-sharing.'],
      ['22', 'Pairs reconcile the numbers and complete all three prompts. Have each partner explain the calculation without looking at the other’s work.'],
      ['17', 'Debrief and introduce a second hypothetical: the same payer says $480 was issued, but there is no ledger entry. Ask for EFT trace, matching remit and posting review.'],
      ['8', 'Check understanding with a quick example: $500 charges, $200 posted payment, $250 posted adjustment. Ask what arithmetic proves and what it does not.']
    ], [
      ['Answer Guidance', [
        '1. $1,000 – $480 – $400 = $120; in the given ledger it is in the patient bucket. The payer bucket is $0.',
        '2. $600 allowed includes $480 payer payment and $120 coinsurance in this example. CO-45 is the contractual reduction shown here; PR-2 is coinsurance. Read both the group and reason.',
        '3. Payment reported is not proof of posting; compare trace, remit and matching ledger. If secondary coverage is verified, check order and processing before treating the amount as final patient responsibility.',
        'Quick check: $50 remains arithmetically; no information establishes who owes it. Emphasize the difference between the dollar amount and liability.'
      ]]
    ]) },
    { id: '1.7', day: 1, title: 'Day One Case Review', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Independent Case · Training Account B'),
      T(['Record', 'Evidence Available'], [
        ['Account', 'TR-HB-121; facility outpatient claim I-121; service date October 9, 2026. A separate clinician bill is also listed.'],
        ['Coverage', 'UnitedHealthcare Medicare Advantage; active for October 9 in the packet. No secondary shown.'],
        ['Claim', 'Sent October 10; payer acceptance October 11; ICN-99121; payer reports processing on October 14.'],
        ['Balance', '$760 insurance balance. No adjudication, remit, or posting appears in this case packet.']
      ]),
      Q('1.7.q1', '1. Which bill and product are you researching? Identify the record and payer product.', 2),
      Q('1.7.q2', '2. What is the most recent claim status supported by the packet? Cite the evidence.', 2),
      Q('1.7.q3', '3. Does the $760 prove the payer owes exactly that amount? Explain.', 2),
      Q('1.7.q4', '4. Name one additional item to request if the payer later says the claim was paid.', 2),
      H('Pair Review'),
      P('In your breakout pair, read each answer to your partner or paste it in the room chat. Point to the fact that supports it. If the fact is not in the packet, label the conclusion “needs verification.”'),
      Q('1.7.q5', 'Compare with Training Account A and name one difference in processing and one in balance responsibility.'),
      H('My Question For Tomorrow'),
      Q('1.7.q6', 'Write one distinction you can explain and one you want to practice again.')
    ], g: G(60, 10, [
      ['8', 'Ask learners to recall one way HB and PB can differ for the same encounter. Set the rule: every answer names its evidence.'],
      ['15', 'Learners complete the four prompts independently. Do not supply a status label until they have read the latest response.'],
      ['12', 'Open pairs for peer review. Ask each pair to bring back one confirmed fact and one unverified conclusion.'],
      ['17', 'Debrief using the answer guidance. Invite four learners to each explain a different prompt. Ask them to give one plausible but unsupported conclusion.'],
      ['8', 'Collect the two reflection items. Group missed concepts into payer product, status or balance and use the top two for Day 2 retrieval.']
    ], [
      ['Answer Guidance', [
        '1. Facility HAR TR-HB-121, invoice I-121; UnitedHealthcare Medicare Advantage. The clinician bill is outside this case. 2. Payer pending/processing as of October 14, later than payer acceptance October 11. 3. The $760 is an open insurance balance, not a payer allowance or a final payment determination. 4. Ask for payment date and amount, trace/check number, remit or claim-level payment detail, then compare with the ledger.',
        'A is adjudicated and posted, with $120 patient bucket and $0 insurance in the exercise. B is still processing with $760 in insurance. The most important skill is naming the source of the conclusion.'
      ]],
      ['Coaching Check', ['A learner who identifies the right record, payer product, status, and limits of the balance is ready for Day 2 practice. If they confuse status and payment, have them point again to the remit and posting rows in A.']]
    ]) },

    /* ---------------- DAY 2 ---------------- */
    { id: '2.1', day: 2, title: 'Insurance Follow Up Review', kind: 'Learner Lesson And Practice', minutes: 45, blocks: [
      H('Read And Discuss'),
      P('Insurance follow-up starts when a balance or issue remains open. Ask what is known about coverage, submission, adjudication, and posting. The newest entry only matters if it applies to the claim and service you are researching.'),
      P('For each case, identify the bill and payer product, check responsibility, classify the current issue, and choose the next question. Keep a confirmed fact separate from an interpretation. “The payer portal reported processing on October 14” is a fact from a source; “we will be paid” is an unsupported prediction.'),
      H('Retrieval Exercise · Sort The Evidence'),
      P('Use the categories coverage, submission/acknowledgment, adjudication, posting, and follow-up documentation. A category can be used more than once.'),
      C('2.1.sort', ['Evidence', 'Your Classification'], [
        ['A', 'Molina STAR eligibility response for the date of service.'],
        ['B', 'Payer acceptance with an ICN and no remit.'],
        ['C', 'Remit shows PR-2 and a payer payment.'],
        ['D', 'Payment transaction posted and matched to the invoice.'],
        ['E', 'Clearinghouse rejected the file before payer receipt.'],
        ['F', 'Note says “Payer reviewing; Ref TR-240.”']
      ], ['Coverage', 'Submission / Acknowledgment', 'Adjudication', 'Posting', 'Follow-Up Documentation']),
      H('Practice · Repair The Statement'),
      P('Rewrite each statement with the strongest conclusion the evidence supports.'),
      Q('2.1.q1', '1. “Accepted means paid.”', 2),
      Q('2.1.q2', '2. “This is UnitedHealthcare, so I know which product to call.”', 2),
      Q('2.1.q3', '3. “The remit shows a payment, so the balance is resolved.”', 2)
    ], g: G(45, 11, [
      ['5', 'Warm up: invite two learners to share Day 1 questions. Explain that today’s goal is to research and communicate, not transact.'],
      ['10', 'Revisit the lifecycle and model the difference between source fact and inference using Training Account B.'],
      ['12', 'Learners sort A–F independently; then compare classifications and justify one answer in a pair.'],
      ['13', 'Groups repair the three statements. Debrief using the key; ask where they would look for evidence they do not have.'],
      ['5', 'One-minute recall: ask each pair for a fact, a gap, and a next question about an accepted claim.']
    ], [
      ['Answer Guidance', [
        'A coverage; B submission/acknowledgment; C adjudication; D posting; E submission/acknowledgment (rejection, not payer denial); F follow-up documentation of a payer contact. F may support a reported pending status if the note belongs to the correct claim and is current, but it is not a remittance.',
        '1. Accepted for processing by the identified source; payment requires separate evidence. 2. Identify the exact UnitedHealthcare product and date-of-service coverage; the carrier alone is insufficient. 3. The payer reported payment; confirm matching posting and remaining responsibility before calling it resolved.'
      ]],
      ['Coach The Distinction', ['If a learner says “no payer response,” ask where they checked and which claim version they searched. The absence of a record in one view is not proof that no response exists.']]
    ]) },
    { id: '2.2', day: 2, title: 'Prioritizing An AR Worklist', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('An AR worklist groups items that need attention. The reason an item appears in a queue, its current owner, and the payer’s status can all differ. Review the reason, balance, age, latest action, and any verified deadline before deciding what deserves immediate attention.'),
      P('The age of a balance depends on the report’s starting date; compare items using the same definition. A deadline is a verified outside requirement. A follow-up date is your planned review. Deferral changes when the work returns for review, not the outside deadline. Apply the client’s approved priorities in production.'),
      H('Practice · Rank A Mock Worklist'),
      N('Classroom date: October 20, 2026. The dates below apply only to these exercises.'),
      T(['Item', 'Age And Amount', 'Evidence'], [
        ['AR-21', '45 days; $1,100', 'Records request due October 22 per the notice. No handoff documented.'],
        ['AR-22', '96 days; $6,800', 'Payer still processing as of October 19. No deadline shown in packet.'],
        ['AR-23', '30 days; $780', 'Payer says payment issued; no matching posting found.'],
        ['AR-24', '65 days; $2,500', 'No payer acknowledgment; verified initial filing deadline October 24.'],
        ['AR-25', '50 days; $410', 'Coding review acknowledged by owner; next internal review October 27.']
      ]),
      Q('2.2.q1', '1. Which two items would you flag first for deadline review? Why?'),
      Q('2.2.q2', '2. Pick an item to research after those. What fact could move it higher or lower?'),
      Q('2.2.q3', '3. Explain why AR-25 should not be marked resolved from these facts.')
    ], g: G(60, 12, [
      ['8', 'Open: “Would you start with the largest balance or the oldest?” Ask learners what fact is missing from that choice.'],
      ['15', 'Teach aging, balance, workqueue reason, ownership, readiness, and verified deadlines. Model reading a worklist row rather than acting from the age column.'],
      ['20', 'In groups, rank the five cases. Each group must distinguish an outside deadline from a planned follow-up date and justify its top two.'],
      ['12', 'Compare group rankings. Accept alternate order where justified; challenge any ranking that ignores a verified near deadline or assumes local policy.'],
      ['5', 'Exit check: ask whether setting a deferral can extend October 22. Transition to case research.']
    ], [
      ['Answer Guidance', [
        'AR-21 and AR-24 carry verified near deadlines. AR-21 has the earlier deadline and no documented handoff; AR-24 needs verification of receipt or filing evidence and prompt handling under the approved process. No prescribed UT priority is implied.',
        'AR-22 may warrant high attention for exposure/age, but current processing and verified turnaround can affect the plan. AR-23 could be prioritized to trace money already reported. AR-25 has acknowledged ownership and a planned review; the issue remains open until the appropriate evidence or action resolves it.'
      ]],
      ['Variation', ['Tell groups AR-22 now has a documented response deadline of October 21. Ask them to update the ranking and explain the change without relying on the original amounts.']]
    ]) },
    { id: '2.3', day: 2, title: 'Researching A Claim Before Contact', kind: 'Learner Lesson And Practice', minutes: 75, blocks: [
      H('Read And Discuss'),
      P('A good payer inquiry starts with the correct claim. Compare the billing entity, patient or member identifier, date of service, amount billed, product, submitted version, and payer claim number when available. Review prior contact first so you do not repeat questions already answered.'),
      P('Collect only what is needed for the task. Use approved sources and channels for production work. A real account may require more evidence than a practice packet provides.'),
      H('Exercise · Compare Two Account Packets'),
      T(['Evidence', 'Case R1 · TR-HB-232', 'Case R2 · TR-HB-233'], [
        ['Payer And Service', 'BCBSTX commercial PPO; October 7; facility claim I-232.', 'Aetna Medicare Advantage; October 8; facility claim I-233.'],
        ['Last Submission', 'October 8, $860; clearinghouse accepted. No payer ICN in packet.', 'October 9, $1,400; payer accepted October 10; ICN-99233.'],
        ['Latest Status', 'October 18 note: payer representative could not find the claim using the original search details.', 'October 18 portal: still processing. No remit in packet.'],
        ['Open Issue', 'No confirmed payer receipt.', 'Payer receipt confirmed; no decision yet.']
      ]),
      Q('2.3.q1', '1. Identify one confirmed fact and one evidence gap for each case.'),
      Q('2.3.q2', '2. For R1, what identifiers and evidence would you compare before concluding the claim was never received?'),
      Q('2.3.q3', '3. Write a different first question for the payer in each case.'),
      D('2.3.d1', 'What would cause you to stop routine follow-up and consult the approved filing or escalation process?')
    ], g: G(75, 13, [
      ['10', 'Open with two messages: “not on file” and “processing.” Ask whether the same payer question will work for both.'],
      ['18', 'Teach the pre-contact research sequence. Model extracting R1 identifiers and finding the distinction between clearinghouse acceptance and payer receipt.'],
      ['22', 'Pairs complete the exercise. One learner states the facts; the other challenges any conclusion that cannot be tied to the packet.'],
      ['18', 'Debrief both cases. Give a variation in which R1’s member ID was typed incorrectly during the phone search; discuss how the search can fail despite submission.'],
      ['7', 'Have learners read their proposed first question. Rehearse asking for a reference number and a specific next milestone.']
    ], [
      ['Answer Guidance', [
        'R1 confirmed clearinghouse acceptance; no confirmed payer receipt or ICN. Compare the submitted member ID, DOS, billing entity, destination, billed amount, and any later acknowledgment or version. Example: “Can you confirm receipt for this service under the verified member and facility identifiers and provide the payer claim number if located?”',
        'R2 confirmed payer receipt and processing as of October 18. Gap: current stage, outstanding request, or expected decision. Example: “For ICN-99233, is anything needed from the provider, and when should we check again?”',
        'Escalation cues include a verified deadline approaching, contradictory evidence, a rejected transmission requiring authorized review, or missing ownership. Ask for the approved path rather than inventing a workqueue.'
      ]]
    ]) },
    { id: '2.4', day: 2, title: 'Payer Follow Up Role Play', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('State the reason for the inquiry in one sentence. Ask a question specific to the evidence gap. Before ending, repeat the claim identifier, payer response, any required evidence, reference number, and expected milestone. Keep the payer’s words separate from your interpretation.'),
      H('How To Practice'),
      P('In breakout groups of three, take the roles of collector, payer representative, and observer. The facilitator sends the payer reply privately. Use fictional identifiers and rotate roles after each round. In the main room, use the observer checklist while a volunteer practices aloud.'),
      T(['Scenario', 'Collector Opening Facts', 'Goal'], [
        ['Call A', 'R1, TR-HB-232; BCBSTX commercial PPO; service October 7; clearinghouse accepted $860; no payer ICN.', 'Confirm payer receipt or identify what still must be verified.'],
        ['Call B', 'R2, TR-HB-233; Aetna Medicare Advantage; ICN-99233; last known status processing.', 'Learn what is holding up the decision and the next milestone.'],
        ['Call C', 'TR-HB-235; Cigna commercial; facility claim I-235; payer reported a $620 payment but posting is not visible.', 'Obtain payment and remit details for posting research.']
      ]),
      H('Observer Checklist'),
      K('2.4.obs', ['Did the collector confirm the claim and product?', 'Ask one focused question?', 'Capture the exact response and a reference number?', 'Name a next step without promising payment or changing the claim?']),
      H('After Your Round'),
      P('Write the payer response and reference. Then state your next action or handoff in one sentence.'),
      Q('2.4.qa', 'Call A', 3),
      Q('2.4.qb', 'Call B', 3),
      Q('2.4.qc', 'Call C', 3)
    ], g: G(60, 14, [
      ['8', 'Model a focused opening and closing aloud. Use fictional identifiers; remind learners to use approved channels and identity checks in production.'],
      ['7', 'Assign breakout trios and privately message the payer role its reply. Post the three roles, nine-minute cycle, and observer checklist location in chat. Do not post payer replies to everyone.'],
      ['27', 'Run three 9-minute rotations: 5 for the call, 2 for the note, 2 for feedback. Broadcast each rotation and send the next private reply. If rooms are unavailable, use three live main-room volunteers and collect observer feedback in chat.'],
      ['13', 'Debrief and replay one difficult moment. Ask which question generated a useful answer and what remained unresolved.'],
      ['5', 'Ask each learner to write one call habit they will use next time.']
    ], [
      ['Private Payer Replies · Send Privately', [
        'A: “I found the claim under the verified member ID. Received October 10, ICN-99232, in process. No records requested today. Reference SIM-A41.” Release the ICN only if asked to confirm receipt.',
        'B: “We are reviewing the claim. No provider action is requested at this time. We suggest checking again on October 27. Ref SIM-B42.” If asked, clarify that October 27 is a suggested review date, not an appeal or filing deadline.',
        'C: “$620 EFT issued October 17; trace SIM-T235; remit references I-235. Ref SIM-C43.” Provide date and trace when asked. Do not tell the learner it posted.'
      ]],
      ['Acceptable Outcomes', ['A record receipt and ICN; check the appropriate next milestone. B document pending, no current request, next review subject to deadline check. C verify remit and matching posting; use the approved payment research path if still unmatched.']]
    ]) },
    { id: '2.5', day: 2, title: 'Payment And Balance Exceptions', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('A payment report tells you what the payer says it issued. An applied posting tells you what the ledger shows for the specific balance. A suspected underpayment needs comparison against the verified expected reimbursement and any legitimate cost-sharing or adjustments. A credit needs investigation before any refund or transfer.'),
      T(['Term', 'Recognition Clue'], [
        ['Unapplied Or Undistributed Payment', 'Money is recorded but not assigned to the correct account or charge.'],
        ['Suspected Underpayment', 'Payment appears below the verified expectation after accounting for legitimate responsibility and adjustments.'],
        ['Credit Balance', 'Posted credits exceed amounts due at the reviewed record level.'],
        ['Recoupment Or Takeback', 'The payer recovers a prior payment, which may affect the current or another payment.'],
        ['Transfer Of Responsibility', 'Liability moves to another payer or patient bucket. A transfer is not money received.']
      ]),
      H('Practice · Match The Issue And Evidence'),
      P('For each, name the issue and the next evidence to check.'),
      C('2.5.match', ['Case', 'Evidence', 'Issue And Next Evidence To Check'], [
        ['A', 'EFT of $620 reported; no matching posting is visible.'],
        ['B', '$300 is posted as undistributed.'],
        ['C', 'Correctly applied payer payment is $450; verified expected payer payment is $500 after cost-sharing.'],
        ['D', 'Ledger is negative $75 after two patient payments.'],
        ['E', 'A payer remit shows a recovery linked to an earlier payment.']
      ]),
      Q('2.5.q1', 'For C, calculate the potential difference.', 2),
      Q('2.5.q2', 'For D, explain why the credit is not authority to refund.', 2)
    ], g: G(60, 15, [
      ['8', 'Review Call C. Ask why a trace number and the posting ledger are both useful.'],
      ['14', 'Teach the five distinctions. Show how the same dollar figure can mean something different in a remit, ledger, and responsibility bucket.'],
      ['18', 'Teams classify A–E and list the evidence they would check first. Ask another team to challenge one conclusion.'],
      ['15', 'Debrief using the key. Model a neutral handoff for an unapplied payment without prescribing a transfer.'],
      ['5', 'Exit check: “What is the difference between a credit, an underpayment, and a payer takeback?”']
    ], [
      ['Answer Guidance', ['A reported payment without matching posting; verify EFT trace/date/amount, remit, claim match, and ledger. B undistributed; verify intended account and charge before an authorized posting review. C potential $50 underpayment; verify contract expectation, plan, paid line or claim, and adjustments. D credit; check duplication, payer/patient source, allocation, and authorization before refund review. E recoupment; match prior payment and recovery, then reconcile posting and any affected accounts.']],
      ['Correct This Misconception', ['Do not confuse an adjustment, write-off, or liability transfer with reimbursement. A credit or denied amount alone does not authorize a transfer, refund, or patient bill.']]
    ]) },
    { id: '2.6', day: 2, title: 'Documentation And Follow Up Dates', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('A usable note tells the next collector which claim was reviewed, what was confirmed, what happened, and what still needs action. Record the payer/product, evidence source and date, contact or reference number if available, any verified deadline, and the next step. Keep patient information limited to what the approved workflow requires.'),
      P('Initial filing, corrected filing, appeal, and records-response requirements can have different trigger dates and proof. A follow-up or deferral date only schedules internal work. Never treat a suggested callback date as permission to miss a verified deadline.'),
      H('Exercise · Rewrite The Vague Note'),
      N('Original note: “Called insurance. Still pending. Check later.”'),
      P('Use these classroom facts: October 20; TR-HB-233; Aetna Medicare Advantage; claim ICN-99233; service October 8. The payer reports processing, no records requested, reference SIM-B42, and suggests checking October 27. No external deadline is confirmed in this packet.'),
      Q('2.6.q1', '1. Write a short note a colleague could use.', 4),
      Q('2.6.q2', '2. What should you record about the deadline?', 2),
      Q('2.6.q3', '3. Variation: a separate notice confirms a required response by October 23. How would that change your next action?', 3),
      N('Reminder: Use the approved client documentation format in production. The format here is for practice.')
    ], g: G(60, 16, [
      ['8', 'Read the vague note aloud. Ask what a second collector would have to repeat or verify.'],
      ['15', 'Teach the note fields and deadline types. Distinguish evidence of a payer suggestion from evidence of a required response.'],
      ['18', 'Learners rewrite the note and answer the variation, then compare their fictional notes aloud or in breakout chat.'],
      ['14', 'Peer-check notes against the key. Read a concise model note and compare how it separates the payer report from the next action.'],
      ['5', 'Exit check: ask how learners would document a deadline they could not verify.']
    ], [
      ['Model Note', ['“Oct 20 | TR-HB-233 | Aetna Medicare Advantage | ICN-99233, DOS Oct 8. Payer reports claim processing, no provider records requested; ref SIM-B42. Payer suggests status review Oct 27. No external deadline verified in available records; check applicable requirements before setting next review.”']],
      ['Answer Guidance', ['For the variation, verify the October 23 notice belongs to this claim and identify the required response, then use the approved urgent handoff rather than waiting until October 27. Record source, deadline, requested action, and owner or escalation to confirm. Do not write “no deadline” when the only fact is that it was not verified.']],
      ['Peer Criteria', ['Correct claim/product; source and date; clear response/reference; explicit unknown or deadline; concrete next step. Do not treat this model as an approved SmartText template.']]
    ]) },
    { id: '2.7', day: 2, title: 'Day Two Insurance Follow Up Lab', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Independent Case · Payment Reported'),
      T(['Record', 'Evidence Available'], [
        ['Account', 'TR-HB-241; facility claim I-241; service date October 11, 2026.'],
        ['Coverage', 'Cigna commercial, confirmed active for the service date in this case. No secondary shown.'],
        ['Claim And Remit', 'ICN-99241; remit dated October 18 reports $900 billed, $500 allowed, $400 payer payment, $400 contractual adjustment, and $100 coinsurance. EFT trace SIM-241.'],
        ['Posting Snapshot', 'October 20: $400 contractual adjustment posted; no insurance payment posted or applied in the supplied ledger. Open total balance $500.']
      ]),
      Q('2.7.q1', '1. Classify the issue. What do you know from the remit versus the ledger?'),
      Q('2.7.q2', '2. Which evidence should be checked or included in a payment research handoff?'),
      Q('2.7.q3', '3. Write a note stating the next action without telling the patient they owe $500.', 4),
      H('Transfer Of Learning'),
      Q('2.7.q4', 'A colleague suggests resubmitting because the balance is still open. Explain why the packet supports a different research path. Then explain what you would verify if a matching $400 payment later posted.', 4)
    ], g: G(60, 17, [
      ['8', 'Open: ask what evidence distinguishes a balance issue from a transmission issue. Explain the independent exercise and ask learners to show their arithmetic.'],
      ['18', 'Learners complete all prompts independently. Encourage them to separate remit facts from ledger facts in their answers.'],
      ['10', 'In pairs, read the notes and identify one concrete follow-up question. Each partner checks the amount and status.'],
      ['17', 'Debrief using the key. Ask which action would be premature and why. Contrast the case with R1.'],
      ['7', 'Ask learners to submit notes privately for coaching. In group chat, have each learner name one distinction to carry into Day 3.']
    ], [
      ['Answer Guidance', [
        'Adjudicated, payment reported, posting not confirmed. Remit shows $400 payer payment and $100 coinsurance; ledger has only the $400 contractual adjustment, so $900 minus $400 equals the $500 open balance. That amount is not all patient responsibility.',
        'Hand off claim I-241/ICN-99241, product, DOS, remit date/amount, EFT trace, and the October 20 posting gap. Request matching or posting research through the approved workflow. Verify whether the funds were received and applied to the right claim; do not recommend a rebill based on a posting gap.',
        'If $400 later posts correctly with no other changes, $100 remains arithmetically; verify responsibility and any secondary coverage or later activity before patient billing.'
      ]],
      ['Model Handoff', ['“Cigna commercial I-241/ICN-99241: Oct 18 remit reports $400 EFT SIM-241; Oct 20 ledger shows contractual adjustment only, $500 open. Request matching/posting review. Do not treat the open balance as patient liability; verify final responsibility after application.”']]
    ]) },
    { id: 'AR-WS', day: 2, title: 'Reusable Account Review Worksheet', kind: 'Practice Sheet', minutes: 'In Session', blocks: [
      P('Use this worksheet for any fictional account. Complete the fields with what the evidence supports. Use “not verified” where the packet does not establish a fact.'),
      F('ws.case', 'Account Or Case Reviewed'),
      H('Identify The Work'),
      F('ws.har', 'HAR And Facility Claim'),
      F('ws.dos', 'Service Date And Payer Claim Number'),
      F('ws.payer', 'Payer, Product, And Verified Filing Order'),
      H('Record The Evidence'),
      W('ws.ev', ['Check', 'What The Record Says And Where You Found It'], ['Coverage For The Service Date', 'Latest Submission, Status, Or Payer Response', 'Remittance And Applicable Payment Or Denial Detail', 'Posting And Current Balance Or Amount At Risk', 'Prior Work, Contact Reference, Or Missing Evidence']),
      H('Choose The Next Step'),
      Q('ws.issue', 'Issue In One Sentence', 2),
      Q('ws.next', 'Next Question Or Approved Handoff', 2),
      F('ws.deadline', 'Verified Deadline And Source, If Applicable'),
      F('ws.owner', 'Internal Next Review And Owner To Confirm'),
      H('Peer Check'),
      Q('ws.peer', 'Can a second collector tell what was confirmed, what remains open, and what to do next?', 2)
    ] },

    /* ---------------- DAY 3 ---------------- */
    { id: '3.1', day: 3, title: 'From Insurance Follow Up To Denial Review', kind: 'Learner Lesson And Practice', minutes: 45, blocks: [
      H('Read And Discuss'),
      P('Start by naming the issue shown by the latest reliable evidence. An open balance by itself tells you little about the reason. A claim can be accepted but still processing; a record request can precede a payer decision; and an adjudicated claim may have both paid and denied lines.'),
      P('A rejection usually points to a submission or intake problem. A denial is an adverse payment decision about all or part of an adjudicated claim. If the wording is unclear, use the evidence source and the processing stage to classify the work.'),
      H('Retrieval Exercise · Classify The Message'),
      C('3.1.cls', ['Card', 'Latest Evidence', 'Your Classification'], [
        ['A', 'File sent; no payer acknowledgment or status found.'],
        ['B', 'Clearinghouse rejected invalid member ID format.'],
        ['C', 'Payer portal says the claim is still processing.'],
        ['D', 'Medicare contractor requests records; no final decision shown.'],
        ['E', 'Remittance reports no authorization for one billed service.'],
        ['F', 'Remittance shows one line paid and a different line denied.']
      ]),
      Q('3.1.q1', '1. Which cards establish an adjudicated denial?', 2),
      Q('3.1.q2', '2. For D, what facts would you copy from the letter?'),
      Q('3.1.q3', '3. For F, why is “the entire claim was denied” too broad?', 2),
      D('3.1.d1', 'A worklist is named “denials.” Why should you still read the payer evidence?')
    ], g: G(45, 19, [
      ['6', 'Open with a recap: ask what a balance proves and what it cannot prove. Revisit the Day 2 lab.'],
      ['10', 'Explain rejection, denial, records request, and partial adjudication. Model reading the type and date of evidence.'],
      ['12', 'Learners classify the cards alone, then compare with a partner and name the exact phrase supporting each classification.'],
      ['12', 'Debrief the six cards. Ask learners how D would change if a later remit showed a denial after the records deadline.'],
      ['5', 'Exit check: ask for one concise distinction between an ADR and a denial.']
    ], [
      ['Answer Guidance', [
        'A no response found, not proof of nonreceipt; B clearinghouse rejection; C payer pending; D ADR/request, no adjudicated denial in the packet; E adjudicated line denial; F partial payment with one line denied. E and F establish a denial for the affected line or service only.',
        'D: match payer/contractor, claim and service dates, requested records, deadline and its source, and submission instructions. The routing and authority to respond are verified separately.',
        'F: one service paid. Record both outcomes and identify the affected line/amount. A worklist label routes work according to configured criteria; it is not the payer’s decision.'
      ]],
      ['Coach The Distinction', ['Use payer evidence instead of labels such as “hard” or “soft” unless their local meaning has been verified.']]
    ]) },
    { id: '3.2', day: 3, title: 'Denial Categories And First Evidence', kind: 'Learner Lesson And Practice', minutes: 75, blocks: [
      H('Read And Discuss'),
      P('A denial reason tells you what the payer reported. The underlying cause may be different. Start with the exact claim, line, date, and message, then compare the evidence before recommending an action.'),
      T(['Category', 'What You Would Look For First'], [
        ['Eligibility Or COB', 'Coverage for the service date, exact product, subscriber details, payer order, prior payer decision.'],
        ['No Authorization', 'Required service and dates, available authorization, approved units if relevant, and facility or provider match.'],
        ['Medical Necessity Or Level Of Care', 'Payer’s stated reason, level billed, documented status, and records for qualified review.'],
        ['Coding, Drug, Lab Or OPPS', 'Affected line, revenue/HCPCS/CPT or diagnosis information, units, and payer message.'],
        ['Duplicate Or Timely Filing', 'Prior claim IDs, version, acknowledgment or receipt, remit history, and the governing deadline.'],
        ['ADR Or Missing Records', 'Request or denial notice, scope of records, deadline, and evidence of any prior submission.']
      ]),
      H('Practice · Choose The First Useful Evidence'),
      P('For each, record the category, one fact to verify, and one action you would avoid until the right owner reviews it.'),
      C('3.2.ev', ['Case', 'Situation', 'Category · Fact To Verify · Action To Avoid'], [
        ['A', 'Payer says no authorization; a number in the account note has a different date.'],
        ['B', 'An outpatient drug line is disputed; the remainder paid.'],
        ['C', 'The payer says another insurer is primary.'],
        ['D', 'A hospital stay overnight was billed inpatient; the payer questions level of care.'],
        ['E', 'The payer reports a duplicate of an earlier claim.']
      ])
    ], g: G(75, 20, [
      ['10', 'Open: “A no-auth denial means no authorization exists. True or false?” Ask learners what the remit actually establishes.'],
      ['18', 'Teach each category from the table. Briefly explain HCPCS/CPT, revenue code, diagnosis, units, and why AR learners recognize rather than edit these fields.'],
      ['22', 'Groups assign evidence to A–E. Each group selects one ambiguous case and names an alternate cause.'],
      ['18', 'Debrief A–E. Ask who or what function could help, then ask what client document would confirm the actual owner.'],
      ['7', 'Ask learners to write one sentence distinguishing the reported reason from a verified root cause.']
    ], [
      ['Answer Guidance', ['A: authorization issue; match number to member, product, service, date, and facility. Do not treat any number as valid proof. B: drug or coding/coverage issue on a line; check the exact service, units and payer reason. Do not change codes or assume the whole claim denied. C: COB; verify effective coverage and payer order, do not transfer liability based on a verbal statement alone. D: level-of-care/medical necessity review; check documented status/order and payer rationale, do not infer inpatient status from the overnight stay or change level of care. E: duplicate; compare prior claims, versions, and adjudication. Do not rebill to test the denial.']],
      ['Variation', ['For D, change payer from Original Medicare to a Medicare Advantage product. Ask what remains true about evidence and what payer-specific process must be verified.']]
    ]) },
    { id: '3.3', day: 3, title: 'Reading A Denial On The Remittance', kind: 'Learner Lesson And Practice', minutes: 60, blocks: [
      H('Read And Discuss'),
      P('Read the adjustment group, reason, remark, and affected service together. A CARC is the reason code; a RARC can provide further detail. A reason code alone does not tell you whether an authorized person should correct the claim, respond with documents, or appeal.'),
      H('Exercise · Trace Two Lines On The Same Claim'),
      P('Fictional facility claim I-307; HAR TR-HB-307; payer Humana Medicare Advantage; service October 10, 2026. This is a simplified remittance extract, not a statement or a complete 835 file.'),
      T(['Line', 'Billed And Paid', 'Adjustment Evidence'], [
        ['1 · Facility Service', '$700 billed; $400 paid', 'CO-45 $200; PR-2 $100 coinsurance'],
        ['2 · Drug Administration', '$1,200 billed; $0 paid', 'CO-197 $1,200: payer reports required authorization was absent']
      ]),
      N('Ledger on October 20: $400 payment and $200 contractual adjustment applied to line 1. The open $1,200 on line 2 remains under insurance review in this exercise. The ledger also shows $100 patient cost-sharing on line 1.'),
      Q('3.3.q1', '1. Which line was denied? What amount is at issue on that line?', 2),
      Q('3.3.q2', '2. Which entries explain line 1, and why is its $100 different from the line 2 amount?'),
      Q('3.3.q3', '3. What is the total balance after the posted transactions? Which amount is under insurance review?'),
      Q('3.3.q4', '4. Name the first document or fact you would verify for line 2.', 2)
    ], g: G(60, 21, [
      ['8', 'Open by asking a learner to read the claim identifier and product. Tell learners to solve line 1 and line 2 separately before looking at the total.'],
      ['13', 'Teach group code, CARC and RARC. Model reading CO-45 and PR-2 in the paid line. Explain that no RARC is included in this simplified extract.'],
      ['18', 'Learners annotate the two lines and do the reconciliation. Pair partners explain their conclusions aloud.'],
      ['15', 'Debrief the four prompts and compare with the Day 1 remit. Ask what changes if a valid authorization matching line 2 is found.'],
      ['6', 'Exit check: have someone describe the denial using the claim, line, amount, and reason in one sentence.']
    ], [
      ['Answer Guidance', [
        '1. Line 2, $1,200 at issue; CO-197 indicates the payer reports missing required authorization.',
        '2. Line 1 paid $400; $200 contractual reduction and $100 coinsurance explain the rest of $700. $100 is patient cost-sharing in the packet; $1,200 is an unresolved insurance issue.',
        '3. $1,900 billed minus $400 payment minus $200 posted adjustment = $1,300 open: $1,200 insurance review and $100 patient bucket. CO-197 on the remit is not evidence that an adjustment of that amount posted.',
        '4. Match available authorization to the exact payer/product, patient, date, facility, service and units as applicable. Compare payer instructions and approved ownership before deciding on any response.'
      ]],
      ['Correct This Misconception', ['A reported CO-197 does not transfer the disputed amount to the patient. Learners should separate the remittance from the actual ledger.']]
    ]) },
    { id: '3.4', day: 3, title: 'Appeal And Records Response Evidence', kind: 'Learner Lesson And Practice', minutes: 75, blocks: [
      H('Read And Discuss'),
      P('A status inquiry asks what happened. A corrected claim changes submitted information. An appeal or reconsideration asks a payer to review a decision. An ADR response supplies requested records. The appropriate path depends on the issue, payer requirements, and the team’s authority.'),
      P('An appeal record may show a letter draft, supporting documents, submission confirmation, or a later decision. Check the dates and claim identifiers before calling it submitted or resolved. For a records request, verify the notice, requested scope, deadline, authorized submission path, and proof of receipt or submission as applicable.'),
      H('Exercise · Review The Two Packets'),
      T(['Packet', 'Evidence'], [
        ['Appeal Packet A', 'Humana MA, I-307. Payer remit denies line 2 for missing authorization. Draft appeal letter dated October 19. Authorization document is for October 9; billed service is October 10. No submission receipt. A case-specific notice gives an October 28 deadline.'],
        ['Records Request B', 'Original Medicare facility case I-308. Fictional Novitas letter requests records for the October 12 service and lists October 23 as the case deadline. One encounter note is in the packet; completeness and submission have not been confirmed. No denial remit.']
      ]),
      Q('3.4.q1', '1. What stage is each case at? Which dates come from the notices?'),
      Q('3.4.q2', '2. What is missing or mismatched in A? What would show it was submitted?'),
      Q('3.4.q3', '3. What must be checked before B is handed to the approved owner?')
    ], g: G(75, 22, [
      ['10', 'Open: read “appeal letter saved” and ask what is proven. Contrast a draft with a receipt and a payer decision.'],
      ['18', 'Teach response types and evidence trail. Draw four columns: payer issue, required evidence, deadline/source, next owner. Do not supply a generic filing or appeal deadline.'],
      ['22', 'Pairs review A and B. Have them mark every item as confirmed, missing, or mismatched. Ask them to find the deadline source.'],
      ['18', 'Debrief. Give an update: a receipt arrives for a different claim number. Ask whether the appeal status changes and what they would do.'],
      ['7', 'Learners write a one-line handoff naming the claim, issue, gap, deadline, and owner to verify.']
    ], [
      ['Answer Guidance', [
        'A: denial with draft only; deadline October 28 from fictional notice. Verify whether authorization matches October 10 service and relevant scope; October 9 document alone does not resolve it. Confirm authorized response and payer instructions. Proof could be a matching dated portal confirmation, receipt, fax proof where approved, or payer acknowledgment; a saved draft is not proof.',
        'B: records request, not a denial in the packet. Deadline October 23 per fictional notice. Verify claim/date, exactly which documents are requested, packet completeness, approved routing and authorized sender. Do not infer that the single encounter note satisfies the request.',
        'A receipt for another claim is unrelated evidence. Do not mark this appeal submitted based on it.'
      ]]
    ]) },
    { id: '3.5', day: 3, title: 'Routing And Financial Safeguards', kind: 'Learner Lesson And Practice', minutes: 45, blocks: [
      H('Read And Discuss'),
      P('A clear handoff identifies the payer, claim, issue, amount at risk, evidence, any verified deadline, and the specific review needed. The correct function may be evident; the assigned team, queue, and person must still be verified from approved client references.'),
      P('Respect role boundaries. Recognizing a coding error, credit, or patient responsibility issue does not authorize a charge correction, claim change, write-off, refund, or transfer. Use the minimum information necessary under the approved privacy process. Classroom work stays in fictional cases.'),
      H('Practice · Make The Handoff Specific'),
      T(['Case', 'Evidence Available'], [
        ['R3', 'Payer disputes a procedure code on one outpatient lab line. Posted payment covers other lines. No coding review yet; a verified response deadline is October 24.'],
        ['R4', 'Original Medicare claim shows a $210 credit after a reversal and reposting. Prior payment and recovery entries need reconciliation. No refund authorization is in the packet.']
      ]),
      Q('3.5.q1', '1. For each case, state what needs review and the evidence to include.'),
      Q('3.5.q2', '2. Name the client reference you would consult to verify the owner.', 2),
      Q('3.5.q3', '3. Write a two-sentence handoff for one case. Include any verified deadline.'),
      D('3.5.d1', 'Which account or claim information is necessary for the next person, and what can you leave out?')
    ], g: G(45, 23, [
      ['6', 'Open: ask what the words “please fix” fail to communicate. Read one vague example and one specific example.'],
      ['10', 'Teach handoff fields, authority limits, minimum necessary information, and deadline-source documentation.'],
      ['13', 'Pairs write R3 and R4 handoffs. Ask each partner to name a function and a local reference instead of guessing a queue.'],
      ['11', 'Debrief with the key and compare handoff drafts. Ask which financial or billing action would be premature.'],
      ['5', 'Check that learners can say when to escalate a deadline or unclear ownership before the capstone.']
    ], [
      ['Answer Guidance', [
        'R3: coding-related review of the affected lab line; include claim, payer reason, line/amount, relevant service information, posted disposition of other lines and verified October 24 deadline. Confirm the authorized route using Accounts Routing Guide, Team Assignment, and relevant denial scope. Do not modify charges, codes, or claim.',
        'R4: credit and posting reconciliation; include prior payment, reversal, reposting and recovery details, exact claim and $210 credit. Confirm ownership via approved credit balance SOW or routing guide. Do not refund, transfer or write off based on the credit alone.'
      ]],
      ['Model Handoff', ['“Payer disputes the outpatient lab code on the selected line; other lines paid. Request review of the payer message and billed line under the approved route; verified response deadline Oct 24, source attached.”']]
    ]) },
    { id: '3.6', day: 3, title: 'Go Live Case Capstone', kind: 'Learner Lesson And Practice', minutes: 90, blocks: [
      H('Instructions'),
      P('Use practice sheets C-A and C-B for the two cases. Each case has the facts you need for a training recommendation. Do not assume facts or take actions not supported by the packet. Case dates are fictional and do not establish real payer rules.'),
      P('For each case:'),
      U(['1. Identify the hospital claim, payer product, and service date.', '2. Classify the current issue and name the record that supports your classification.', '3. Explain the remaining balance or amount at risk. Separate remit and posting.', '4. Identify one evidence gap and a safe next step, including any verified deadline or ownership to confirm.', '5. Write a concise account note with the facts another collector would need.']),
      H('Self Check Before You Turn It In'),
      K('3.6.self', ['Did I use the right claim and payer product?', 'Did I cite the specific evidence and distinguish what is still unknown?', 'Did I distinguish what the payer reported from what is actually posted?', 'Did I preserve any verified deadline and name a next step within the exercise scope?', 'Could another collector continue from my note?']),
      H('Pair Discussion After Individual Work'),
      P('In your breakout pair, explain which line of the packet supports your decision and what new evidence might change it. Submit your own completed cases privately as directed.'),
      H('My Confidence Check'),
      Q('3.6.q1', 'Which part of the reasoning was strongest?', 2),
      Q('3.6.q2', 'Which part still needs coaching?', 2)
    ], g: G(90, 24, [
      ['8', 'Explain the two case packets and the scoring criteria. Read the student instructions. Remind learners that the dates and payer messages are simulated.'],
      ['30', 'Learners work independently: 15 minutes per case. Post the return cue in chat. Their answers save automatically.'],
      ['15', 'Use breakout pairs to compare evidence and challenge one unsupported conclusion. In the main-room fallback, discuss anonymized fictional responses.'],
      ['25', 'Lead the case debrief. Invite a learner to present A, another to present B, then compare to the key. Use the notes below to coach mistakes.'],
      ['12', 'Ask learners to download their workbook and send it privately. Note a strength and improvement, and return scores privately. Identify one shared concept to reteach in 3.7.']
    ], [
      ['Capstone Key · Case A', ['TR-HB-351/I-351, BCBSTX commercial PPO, Oct 12; payer ICN-99351. Adjudicated Oct 20, $640 payment reported and matched by remit/trace, but no payment applied in Oct 22 ledger. $1,200 minus $400 posted adjustment = $800 open; after a matching $640 posting, $160 remains before other changes. Verify matching receipt and posting via approved payment research; retain trace SIM-T351 and call reference SIM-A351. No payer deadline verified. Do not bill $800 to patient or rebill.']],
      ['Capstone Key · Case B', ['TR-HB-352/I-352, Humana MA, Oct 13; ICN-99352. Line 2 only is denied, $1,200 under review, CO-197; line 1 paid $400 with $200 contractual adjustment and $100 coinsurance. $1,300 open. Authorization covers Oct 12 and does not prove coverage of Oct 13 service. Draft letter does not prove submission. Preserve Oct 26 notice deadline; verify matching authorization and approved owner promptly. No claim change or appeal submission.']],
      ['Classroom Scoring', ['Score each case on the five numbered prompts, 0–2 each (10 per case; 20 total): 2 accurate and evidence-based, 1 partial, 0 missing or unsupported. Mark any missed verified deadline or proposed unauthorized change for coaching regardless of score. This is a classroom rubric, not a production certification threshold. Record scores in Coaching And Signoff Notes.']]
    ]) },
    { id: 'C-A', day: 3, title: 'Capstone Case A · Payment Reported', kind: 'Practice Sheet', minutes: 'In Session', blocks: [
      N('This account packet is fictional. Classroom review date: October 22, 2026.'),
      T(['Evidence', 'What The Packet Shows'], [
        ['Account', 'HAR TR-HB-351; facility invoice I-351; service date October 12.'],
        ['Coverage', 'BCBSTX commercial PPO, active for October 12; primary; no secondary shown.'],
        ['Claim', '837I transmitted October 13; payer accepted October 14; ICN-99351.'],
        ['Payer Remittance', 'Dated October 20. Billed $1,200; allowed $800; payment $640; CO-45 adjustment $400; PR-2 coinsurance $160. Trace SIM-T351.'],
        ['Payer Call', 'Representative confirmed EFT issued October 20. Call reference SIM-A351.'],
        ['Posting Snapshot', 'October 22: contractual adjustment $400 applied. No $640 payer payment in the supplied ledger. Current total open balance $800.'],
        ['Deadline Evidence', 'No payer deadline is verified in this packet.']
      ]),
      H('Your Response'),
      Q('CA.1', '1 · Identify The Claim And Product: Name the claim, payer product, and date of service.', 2),
      Q('CA.2', '2 · Classify And Support: What is the issue? Which two records show it?', 2),
      Q('CA.3', '3 · Explain The Balance: What is open now? What would remain if the matching payment posted?', 2),
      Q('CA.4', '4 · Plan The Next Step: What evidence is missing, and which type of review is appropriate?', 2),
      Q('CA.5', '5 · Write The Note: Capture the evidence, references, and next action.', 4)
    ] },
    { id: 'C-B', day: 3, title: 'Capstone Case B · Partial Denial', kind: 'Practice Sheet', minutes: 'In Session', blocks: [
      N('This account packet is fictional. Classroom review date: October 22, 2026.'),
      T(['Evidence', 'What The Packet Shows'], [
        ['Account', 'HAR TR-HB-352; facility invoice I-352; outpatient services October 13; payer ICN-99352.'],
        ['Coverage', 'Humana Medicare Advantage; verified for the date of service.'],
        ['Line 1', '$700 billed; $400 paid; $200 contractual adjustment; $100 coinsurance. Payment and adjustment applied.'],
        ['Line 2', '$1,200 billed; $0 paid; CO-197 indicates the payer reported missing required authorization. $1,200 remains under insurance review in the classroom ledger.'],
        ['Authorization Evidence', 'A document for October 12 lists a similar service. Nothing in the packet confirms it covers October 13.'],
        ['Appeal Evidence', 'Letter marked Draft dated October 21; no submission confirmation.'],
        ['Deadline Evidence', 'Fictional notice identifies October 26 as the applicable response deadline for the denied service.']
      ]),
      H('Your Response'),
      Q('CB.1', '1 · Identify The Claim And Product: Name the claim, payer product, and date of service.', 2),
      Q('CB.2', '2 · Classify And Support: Which line is affected and what reason is reported?', 2),
      Q('CB.3', '3 · Explain The Balance: Separate the disputed line amount from the cost-sharing.', 2),
      Q('CB.4', '4 · Plan The Next Step: Which evidence is missing, what deadline matters, and whose authority must be verified?', 2),
      Q('CB.5', '5 · Write The Note: State what is confirmed and what you would hand off.', 4)
    ] },
    { id: '3.7', day: 3, title: 'Final Review And Production Handoff', kind: 'Learner Lesson And Practice', minutes: 30, blocks: [
      H('Teach Back'),
      P('Choose one distinction. Explain it in your own words and give one example from the workbook.'),
      S('3.7.pick', 'The distinction I chose', ['Carrier name versus payer product.', 'Clearinghouse acceptance versus payer adjudication.', 'Payer payment issued versus payment posted.', 'Rejection versus denial versus records request.', 'Appeal drafted versus appeal submitted.', 'Internal review date versus payer deadline.']),
      Q('3.7.q1', 'My explanation and one example from the workbook', 4),
      H('Go Live Preparation'),
      P('Before working independently, know where to verify your assigned scope, the appropriate owner, the payer deadline source, and the permitted actions. Use the approved client references. Account research, a handoff, and a billing change are different actions.'),
      T(['Situation', 'Question To Verify'], [
        ['I cannot identify the owner.', 'Which routing guide, workqueue procedure, or team assignment applies?'],
        ['The payer requires a response or a correction.', 'What is the verified deadline and who may perform or submit the action?'],
        ['The evidence or note is incomplete.', 'Which documentation standard applies and where should evidence be recorded?'],
        ['The case involves an adjustment, credit, or specialty account.', 'Which approved financial or specialty workflow applies and who is authorized?']
      ]),
      H('My Next Coaching Step'),
      Q('3.7.q2', 'One concept I can explain clearly:', 2),
      Q('3.7.q3', 'One client-specific question I need answered before working this issue:', 2)
    ], g: G(30, 27, [
      ['5', 'Open with one evidence-based conclusion from the capstone. Explain that the wrap-up is for coaching and process questions.'],
      ['12', 'Run a virtual round-robin aloud or in chat. Ask each learner for a distinction and one example from a fictional case.'],
      ['8', 'Gather the client-specific questions. Sort them into ownership/scope, deadline, documentation, or financial authority and record where each must be confirmed.'],
      ['5', 'Ask each learner for one coaching goal. Close by explaining the approved path for supervision and production authorization. Remind learners to download their completed workbook.']
    ], [
      ['Teach Back Answer Cues', ['Brand names can span different products. Clearinghouse acceptance confirms its stage; adjudication is a payer decision. A remit or EFT report is separate from an applied ledger entry. A rejection is an intake/processing failure; a denial is an adverse adjudication; an ADR requests documentation. A saved draft lacks submission evidence. An internal follow-up date does not change a payer deadline.']],
      ['Close The Loop', ['Review any capstone answer that recommended unauthorized claim changes, refunds, or patient billing, or missed a verified deadline. Ask learners to repair that answer with a clear handoff. Confirm actual roles, queue procedures, templates, deadlines and approval limits through the approved client references before independent work.']]
    ]) },

    /* ---------------- CLOSE ---------------- */
    { id: 'refs', group: 'close', title: 'References And Client Procedure Checks', kind: 'Reference', blocks: [
      H('Public References For Foundational Concepts'),
      T(['Reference', 'Use For'], [
        ['UT Health San Antonio Insurance Participation By Site', 'Payer examples and the distinction between facility and physician participation.'],
        ['UT Health San Antonio Academic Health Center Overview', 'Institutional context.'],
        ['CMS Texas Original Medicare Contractor Jurisdiction', 'Novitas Solutions and Jurisdiction H.'],
        ['Medicare Coverage Options And Hospital Status', 'Original Medicare and Medicare Advantage.'],
        ['Medicare Inpatient And Outpatient Hospital Status', 'Observation does not itself establish inpatient status.'],
        ['Texas Medicaid And CHIP Program Names', 'STAR, STAR Health, STAR Kids, STAR+PLUS, and CHIP.'],
        ['CMS Institutional Billing Guide', '837I, CMS-1450, and institutional claim fields.'],
        ['CMS Remittance Advice And Adjustments', 'Remittance, payment, group codes, CARCs, and RARCs.'],
        ['X12 Claim Adjustment Reason Codes', 'Standard code meanings for classroom examples.'],
        ['CMS Additional Documentation Requests', 'Purpose and nature of an ADR.'],
        ['HHS HIPAA Minimum Necessary Guidance', 'Handling protected information under approved policies.'],
        ['University Of Iowa Resolute Billing Overview', 'HB, PB, and guarantor context; no local navigation path is assumed.']
      ]),
      H('Client Procedures To Verify'),
      P('Accounts Routing Guide, Team Assignment, WQ 1559 workflow, Denial Resolution SOW, Appeal Process SOW, payer filing reference, SmartText and document standards, and the applicable adjustment, credit balance, and specialty workflows.')
    ] },
    { id: 'signoff', group: 'close', faciOnly: true, title: 'Go Live Coaching And Signoff Notes', kind: 'Facilitator Use · Classroom Evidence And Production Questions', blocks: [
      P('Record classroom observations for coaching. Use the client’s approved criteria and authorization process for any production signoff.'),
      { t: 'coach' },
      H('Process Questions To Confirm Before Independent Work'),
      T(['Verify', 'Approved Reference Or Owner To Confirm'], [
        ['Who owns each issue and which queues are in scope?', 'Accounts Routing Guide, Team Assignment, WQ 1559 workflow, relevant SOW'],
        ['Who may change a claim, submit an appeal, or move money?', 'Approved role, applicable SOW, and operational authorization'],
        ['Which date and evidence govern the deadline?', 'Approved payer filing reference, notice, and client procedure'],
        ['Where are work notes and evidence stored?', 'SmartText, scanning, and documentation standards'],
        ['Which productivity, quality, and service expectations apply?', 'Approved client or HealthRecon process owner']
      ]),
      Q('sign.pq', 'Questions For The Process Owner (topic · document to verify · owner to confirm)', 5)
    ] },
    { id: 'download', group: 'close', title: 'Download My Workbook', kind: 'Save And Submit' }
  ];

  const days = {
    1: { title: 'Hospital Billing And Payer Fundamentals', q: 'Who was billed and what happened?' },
    2: { title: 'Insurance Follow-Up And AR Collections', q: 'Why is the balance still open?' },
    3: { title: 'Denial Management And Appeals', q: 'What evidence is needed for the next step?' }
  };

  /* Suggested access codes. Any word + the matching check letters works (see Access Codes page). */
  const codeWords = {
    1: ['ORBIT', 'CEDAR', 'HARBOR', 'MAPLE', 'SUMMIT'],
    2: ['RIVER', 'FALCON', 'COBALT', 'MEADOW', 'BEACON'],
    3: ['ATLAS', 'EMBER', 'QUARTZ', 'CANYON', 'SIERRA']
  };

  window.ARD_WORKBOOK = {
    storeKey: 'hrc-ard-workbook-v1',
    /* Google Sheets tracker: paste the Apps Script Web app URL between the quotes */
    sheetUrl: 'https://script.google.com/macros/s/AKfycbxtmvNc7wkAJH4FDZR6aWJrm-dUGQriPhJqsTxzxVyWu8tWnQjOxqd_ZsP4Qt_MMnhU/exec',
    /* Allowed email endings for registration, e.g. ['@healthreconconnect.com']. Leave empty to accept any email. */
    emailDomains: [],
    /* Auto-scored knowledge checks (exact option values) */
    scoreKeys: { '1.1.order': 'C,E,B,A,D,F', '1.3.sort.A': 'Commercial', '1.3.sort.B': 'Medicare Advantage', '1.3.sort.C': 'Original Medicare', '1.3.sort.D': 'Texas Medicaid', '1.3.sort.E': 'CHIP', '1.3.sort.F': 'Marketplace / Exchange', '1.5.tl.A': 'No Response Found', '1.5.tl.B': 'Rejected', '1.5.tl.C': 'Payer Pending', '1.5.tl.D': 'Adjudicated', '2.1.sort.A': 'Coverage', '2.1.sort.B': 'Submission / Acknowledgment', '2.1.sort.C': 'Adjudication', '2.1.sort.D': 'Posting', '2.1.sort.E': 'Submission / Acknowledgment', '2.1.sort.F': 'Follow-Up Documentation' },
    client: 'UT Health San Antonio',
    title: 'Pre-Process Training Online Workbook',
    subtitle: 'Three Day Virtual Preprocess Training For Hospital Billing',
    meta: '21 Learning Hours · 7 Hours Per Day · Discussion, Practice, And Review',
    days, pages, codeWords
  };
})();

/* Inline answer keys (from the facilitator answer guidance) + visual summaries shared by every edition */
(function () {
  const W = window.ARD_WORKBOOK;
  W.keys = {
    'A.q1': 'HAR TR-HB-101 identifies the hospital billing account. ICN-88401 is the payer claim number; it identifies the claim with the payer.',
    'A.q2': 'Payer decision: the October 12 remittance. Posting: the October 13 ledger entry. Posting is not adjudication.',
    'A.q3': 'Compare the EFT trace (TR-EFT-101), the remit, and the matching ledger entry.',
    '1.1.order': 'C → E → B → A → D → F',
    '1.1.q1': 'A rejection, payer not-on-file response, or eligibility issue could surface. Check the insurance product on the date of service against the plan billed on the actual claim; use the acknowledgement or payer response to narrow the issue.',
    '1.1.d1': 'No. PB payment does not resolve HB. Check the billing entity, claim, and ledger for I-101.',
    '1.2.ids.HAR': 'TR-HB-101', '1.2.ids.MRN': 'TR-P-17', '1.2.ids.Encounter': 'TR-E-03', '1.2.ids.Guarantor Account': 'TR-G-41',
    '1.2.ids.Date Of Service': 'October 3, 2026', '1.2.ids.Invoice': 'I-101 (facility; P-101 is separate)', '1.2.ids.Payer Claim Number': 'ICN-88401',
    '1.2.q1': '“Commercial” is a financial category, not the plan; use the coverage field (BCBSTX commercial PPO). Compare the insurance bucket ($0) and the patient bucket ($120); the total account does not tell you who owes the money.',
    '1.3.sort.A': 'Commercial', '1.3.sort.B': 'Medicare Advantage', '1.3.sort.C': 'Original Medicare (Novitas is the Texas A/B MAC)', '1.3.sort.D': 'Texas Medicaid (managed care)', '1.3.sort.E': 'CHIP', '1.3.sort.F': 'Marketplace / Exchange',
    '1.3.q1': 'A, B, and F share the BCBSTX brand.',
    '1.3.q2': 'The product words: commercial PPO, Medicare Advantage HMO, Blue Advantage Exchange, STAR, CHIP, Part A.',
    '1.3.q3': 'Verify the product, eligibility for the service date, billed entity/location, payer destination, and the applicable approved requirements.',
    '1.4.q1': 'Both enrollment responses show active coverage on October 8. The order of responsibility is unresolved. The account entry shows what was recorded, not that the payer order is correct.',
    '1.4.q2': 'Current payer COB information, approved Medicare/MSP information or questionnaire where applicable, verified employer/group information, or a prior payer adjudication that clarifies the order. Use the approved intake or escalation path.',
    '1.4.q3': 'Patient/member, payer product, service/procedure, dates, approved units if relevant, and provider/facility. Authorization does not guarantee coverage or payment.',
    '1.4.d1': 'No. Eligibility shows enrollment for a date; authorization is a separate payer step that must match the service, dates, and provider or facility.',
    '1.5.tl.A': 'No Response Found (clearinghouse accepted only)', '1.5.tl.B': 'Rejected (payer intake)', '1.5.tl.C': 'Payer Pending', '1.5.tl.D': 'Adjudicated (denial of the affected service)',
    '1.5.q1': 'Did the payer receive the claim, and has it assigned an ICN? Verify destination, member, and dates first. Do not assume “never received” or resubmit automatically.',
    '1.5.q2': 'Submitted October 4; payer accepted October 5; adjudicated (remittance) October 12. October 13 is posting, not adjudication.',
    '1.6.q1': '$1,000 – $480 – $400 = $120. In the given ledger it sits in the patient bucket; the payer bucket is $0.',
    '1.6.q2': 'The $600 allowed amount = $480 payer payment + $120 coinsurance (PR-2). CO-45 is the contractual reduction.',
    '1.6.q3': 'A reported payment is not proof of posting: compare trace, remit, and the matching ledger. If secondary coverage is verified, check order and processing before treating the amount as final patient responsibility.',
    '1.7.q1': 'Facility HAR TR-HB-121, invoice I-121; UnitedHealthcare Medicare Advantage. The clinician bill is outside this case.',
    '1.7.q2': 'Payer pending/processing as of October 14 (later than payer acceptance on October 11).',
    '1.7.q3': 'No. The $760 is an open insurance balance, not a payer allowance or a final payment determination.',
    '1.7.q4': 'Payment date and amount, trace/check number, remit or claim-level payment detail; then compare with the ledger.',
    '1.7.q5': 'A is adjudicated and posted ($120 patient bucket, $0 insurance). B is still processing with $760 in insurance.',
    '2.1.sort.A': 'Coverage', '2.1.sort.B': 'Submission / Acknowledgment', '2.1.sort.C': 'Adjudication', '2.1.sort.D': 'Posting', '2.1.sort.E': 'Submission / Acknowledgment (rejection, not a payer denial)', '2.1.sort.F': 'Follow-Up Documentation (not a remittance)',
    '2.1.q1': 'Accepted for processing by the identified source; payment requires separate evidence.',
    '2.1.q2': 'Identify the exact UnitedHealthcare product and date-of-service coverage; the carrier alone is insufficient.',
    '2.1.q3': 'The payer reported payment; confirm matching posting and remaining responsibility before calling it resolved.',
    '2.2.q1': 'AR-21 and AR-24: both carry verified near deadlines. AR-21 has the earlier deadline (October 22) and no documented handoff; AR-24 needs receipt or filing evidence before October 24.',
    '2.2.q2': 'AR-22 may warrant attention for exposure/age, but current processing and verified turnaround can change the plan. AR-23 could move up to trace money already reported.',
    '2.2.q3': 'Ownership is acknowledged and a review is planned, but the issue stays open until the appropriate evidence or action resolves it.',
    '2.3.q1': 'R1: confirmed clearinghouse acceptance; gap = no confirmed payer receipt or ICN. R2: confirmed payer receipt and processing as of October 18; gap = current stage, outstanding request, or expected decision.',
    '2.3.q2': 'Submitted member ID, DOS, billing entity, destination, billed amount, and any later acknowledgment or version.',
    '2.3.q3': 'R1: “Can you confirm receipt for this service under the verified member and facility identifiers and provide the payer claim number if located?” R2: “For ICN-99233, is anything needed from the provider, and when should we check again?”',
    '2.3.d1': 'A verified deadline approaching, contradictory evidence, a rejected transmission requiring authorized review, or missing ownership.',
    '2.4.qa': 'Record receipt and the ICN; check the appropriate next milestone.',
    '2.4.qb': 'Document pending, no current request; set next review subject to a deadline check (October 27 is a suggestion, not a deadline).',
    '2.4.qc': 'Verify the remit and a matching posting; use the approved payment research path if still unmatched.',
    '2.5.match.A': 'Reported payment, no matching posting. Check EFT trace/date/amount, remit, claim match, and ledger.',
    '2.5.match.B': 'Undistributed payment. Verify intended account and charge before an authorized posting review.',
    '2.5.match.C': 'Potential underpayment. Verify contract expectation, plan, paid line or claim, and adjustments.',
    '2.5.match.D': 'Credit balance. Check duplication, payer/patient source, allocation, and authorization before refund review.',
    '2.5.match.E': 'Recoupment. Match prior payment and recovery, then reconcile posting and any affected accounts.',
    '2.5.q1': '$500 – $450 = $50 potential underpayment.',
    '2.5.q2': 'A credit alone does not authorize a refund: duplication, source, allocation, and authorization must be checked first.',
    '2.6.q1': '“Oct 20 | TR-HB-233 | Aetna Medicare Advantage | ICN-99233, DOS Oct 8. Payer reports claim processing, no provider records requested; ref SIM-B42. Payer suggests status review Oct 27. No external deadline verified in available records; check applicable requirements before setting next review.”',
    '2.6.q2': 'Write “no external deadline verified in available records.” Do not write “no deadline” when it simply was not verified.',
    '2.6.q3': 'Verify the October 23 notice belongs to this claim and identify the required response; use the approved urgent handoff instead of waiting until October 27. Record source, deadline, requested action, and owner to confirm.',
    '2.7.q1': 'Adjudicated, payment reported, posting not confirmed. Remit: $400 payer payment and $100 coinsurance. Ledger: only the $400 contractual adjustment, so $900 – $400 = $500 open. Not all patient responsibility.',
    '2.7.q2': 'Claim I-241/ICN-99241, product, DOS, remit date/amount, EFT trace SIM-241, and the October 20 posting gap.',
    '2.7.q3': '“Cigna commercial I-241/ICN-99241: Oct 18 remit reports $400 EFT SIM-241; Oct 20 ledger shows contractual adjustment only, $500 open. Request matching/posting review. Do not treat the open balance as patient liability; verify final responsibility after application.”',
    '2.7.q4': 'The issue is a posting gap, not a transmission problem, so research the payment instead of rebilling. If $400 later posts, $100 remains; verify responsibility and any secondary coverage before patient billing.',
    '3.1.cls.A': 'No response found (not proof of nonreceipt)', '3.1.cls.B': 'Clearinghouse rejection', '3.1.cls.C': 'Payer pending', '3.1.cls.D': 'ADR / records request (no denial yet)', '3.1.cls.E': 'Adjudicated line denial', '3.1.cls.F': 'Partial payment; one line denied',
    '3.1.q1': 'E and F, for the affected line or service only.',
    '3.1.q2': 'Payer/contractor, claim and service dates, requested records, deadline and its source, and submission instructions.',
    '3.1.q3': 'One service was paid. Record both outcomes and identify the affected line and amount.',
    '3.1.d1': 'A worklist label routes work by configured criteria; it is not the payer’s decision.',
    '3.2.ev.A': 'Authorization · match the number to member, product, service, date, and facility · don’t treat any number as valid proof.',
    '3.2.ev.B': 'Drug or coding/coverage (line) · check the exact service, units, and payer reason · don’t change codes or assume the whole claim denied.',
    '3.2.ev.C': 'COB · verify effective coverage and payer order · don’t transfer liability based on a verbal statement alone.',
    '3.2.ev.D': 'Level of care / medical necessity · check documented status/order and payer rationale · don’t infer inpatient status from the overnight stay or change level of care.',
    '3.2.ev.E': 'Duplicate · compare prior claims, versions, and adjudication · don’t rebill to test the denial.',
    '3.3.q1': 'Line 2; $1,200 at issue (CO-197: payer reports missing required authorization).',
    '3.3.q2': 'Line 1: $400 paid + $200 contractual reduction (CO-45) + $100 coinsurance (PR-2) = $700. The $100 is patient cost-sharing; the $1,200 is an unresolved insurance issue.',
    '3.3.q3': '$1,900 – $400 – $200 = $1,300 open: $1,200 under insurance review and $100 in the patient bucket.',
    '3.3.q4': 'Match available authorization to the exact payer/product, patient, date, facility, service, and units as applicable.',
    '3.4.q1': 'A: denial with a draft appeal only; October 28 deadline from the notice. B: records request, not a denial; October 23 deadline from the Novitas letter.',
    '3.4.q2': 'Authorization is for October 9 but the service is October 10; no submission receipt. Proof would be a matching dated portal confirmation, receipt, approved fax proof, or payer acknowledgment. A saved draft is not proof.',
    '3.4.q3': 'Claim/date, exactly which documents are requested, packet completeness, approved routing, and authorized sender. One encounter note may not satisfy the request.',
    '3.5.q1': 'R3: coding-related review of the lab line; include claim, payer reason, line/amount, service information, other lines’ disposition, and the October 24 deadline. R4: credit and posting reconciliation; include prior payment, reversal, reposting, recovery details, and the $210 credit.',
    '3.5.q2': 'Accounts Routing Guide, Team Assignment, and relevant denial scope (R3); approved credit balance SOW or routing guide (R4).',
    '3.5.q3': '“Payer disputes the outpatient lab code on the selected line; other lines paid. Request review of the payer message and billed line under the approved route; verified response deadline Oct 24, source attached.”',
    'CA.1': 'TR-HB-351 / I-351; BCBSTX commercial PPO; October 12; payer ICN-99351.',
    'CA.2': 'Payment reported but not posted: the October 20 remit and trace (plus call ref SIM-A351) show $640 issued; the October 22 ledger shows no payment applied.',
    'CA.3': '$1,200 – $400 posted adjustment = $800 open. After a matching $640 posting, $160 remains before other changes.',
    'CA.4': 'Matching receipt and posting are missing; use approved payment research. No payer deadline verified. Do not bill $800 to the patient or rebill.',
    'CA.5': 'Include claim, product, DOS, remit $640, trace SIM-T351, call ref SIM-A351, Oct 22 posting gap, $800 open, and the payment research request.',
    'CB.1': 'TR-HB-352 / I-352; Humana Medicare Advantage; October 13; ICN-99352.',
    'CB.2': 'Line 2 only; CO-197 — payer reports missing required authorization. Line 1 paid.',
    'CB.3': '$1,300 open: $1,200 under insurance review (line 2) and $100 coinsurance (line 1).',
    'CB.4': 'Authorization covers October 12, not proven for October 13; the draft letter does not prove submission. Preserve the October 26 deadline; verify matching authorization and the approved owner promptly.',
    'CB.5': 'State what is confirmed (line 1 paid/posted, line 2 CO-197, $1,200 at risk, Oct 26 deadline) and hand off for authorization match and approved appeal ownership. No claim change or appeal submission.',
    '3.7.q1': 'Brand names span products. Clearinghouse acceptance is a stage; adjudication is a payer decision. A remit or EFT report is separate from an applied ledger entry. Rejection = intake failure; denial = adverse adjudication; ADR = request for records. A draft lacks submission evidence. An internal follow-up date does not change a payer deadline.'
  };

  const flow = (title, steps) => ({ t: 'flow', title, steps });
  const cmp = (title, cols) => ({ t: 'compare', title, cols });
  const chips = (title, items) => ({ t: 'chips', title, items });
  const add = [
    ['A', 'Your First Reading', flow('Claim Journey · Training Account A', [['Oct 4', 'Facility claim transmitted'], ['Oct 5', 'Payer accepted for processing'], ['Oct 12', 'Remittance'], ['Oct 13', 'Ledger posting']])],
    ['1.1', 'Exercise 1 · Put The Events In Order', flow('The Hospital Revenue Cycle', [['Registration', 'Patient, guarantor, coverage'], ['Eligibility', 'Active on the service date?'], ['Authorization', 'When required'], ['Charges & Coding', 'What happened'], ['Billing', 'Claim prepared and sent'], ['Payer', 'Rejects or accepts, then adjudicates'], ['Payment Posting', 'Records and applies'], ['AR & Denials', 'Follows the balance'], ['Patient Billing', 'Amounts assigned to patient']])],
    ['1.1', 'Exercise 1 · Put The Events In Order', cmp('One Visit, Two Bills', [['Hospital Bill (HB)', 'Facility services. Training Account A: I-101.', 'cyan'], ['Professional Bill (PB)', 'Clinician services. Training Account A: P-101, outside this account.', 'violet']])],
    ['1.2', 'Exercise 1 · Point To The Evidence', flow('Which Record Am I Looking At?', [['Patient', 'MRN'], ['Visit', 'Encounter'], ['Billing Account', 'HAR · guarantor'], ['Bill', 'Invoice / internal claim ID'], ['At The Payer', 'ICN / payer claim number']])],
    ['1.3', 'Practice · Sort The Payer Cards', chips('Identify Every Time', ['Payer', 'Exact product', 'Billing entity', 'Service date'])],
    ['1.4', 'Practice · Compare The Two Coverage Records', cmp('Three Different Questions', [['Eligibility', 'Was coverage active for the service date?', 'cyan'], ['Authorization', 'Did the payer approve this service, dates, and provider or facility?', 'amber'], ['COB / MSP', 'Which coverage processes first?', 'violet']])],
    ['1.5', 'Exercise · Read Four Timelines', flow('What Each Status Proves', [['Transmitted', 'Send event recorded'], ['Acknowledged', 'A processing step reported'], ['Accepted By Payer', 'Can be processed'], ['Payer Pending', 'Still processing'], ['Adjudicated', 'Decision made · read the remit']])],
    ['1.6', 'Exercise · Reconcile Training Account A', cmp('Read Three Elements Together', [['Group Code', 'Classifies the adjustment. CO = Contractual Obligation · PR = Patient Responsibility.', 'cyan'], ['CARC', 'Explains the reason.', 'violet'], ['RARC', 'Adds detail when present.', 'amber']])],
    ['1.6', 'Exercise · Reconcile Training Account A', cmp('Remit Vs. Ledger', [['Remittance', 'The payer’s explanation of how it processed the claim.', 'amber'], ['Ledger', 'What has actually been posted and applied.', 'green']])],
    ['2.1', 'Retrieval Exercise · Sort The Evidence', flow('Ask What Is Known About…', [['Coverage', ''], ['Submission', ''], ['Adjudication', ''], ['Posting', '']])],
    ['2.1', 'Retrieval Exercise · Sort The Evidence', cmp('Fact Or Prediction?', [['Fact From A Source', '“The payer portal reported processing on October 14.”', 'green'], ['Unsupported Prediction', '“We will be paid.”', 'pink']])],
    ['2.2', 'Practice · Rank A Mock Worklist', chips('Review Before You Prioritize', ['Reason', 'Balance', 'Age', 'Latest action', 'Verified deadline'])],
    ['2.2', 'Practice · Rank A Mock Worklist', cmp('Two Kinds Of Date', [['Deadline', 'A verified outside requirement. Deferral does not move it.', 'pink'], ['Follow-Up Date', 'Your planned review. Deferral changes when the work returns.', 'cyan']])],
    ['2.3', 'Exercise · Compare Two Account Packets', chips('Match The Claim Before Contact', ['Billing entity', 'Patient / member ID', 'Date of service', 'Amount billed', 'Product', 'Submitted version', 'Payer claim number'])],
    ['2.4', 'How To Practice', flow('Call Structure', [['Open', 'Reason in one sentence'], ['Ask', 'One question for the evidence gap'], ['Close', 'Repeat claim ID, response, evidence, reference #, milestone']])],
    ['2.4', 'Observer Checklist', cmp('Roles In Each Trio', [['Collector', 'Runs the call using the opening facts.', 'cyan'], ['Payer Representative', 'Replies using the facilitator’s private message.', 'violet'], ['Observer', 'Uses the checklist below.', 'amber']])],
    ['2.5', 'Practice · Match The Issue And Evidence', cmp('Reported Vs. Applied', [['Payment Report', 'What the payer says it issued.', 'amber'], ['Applied Posting', 'What the ledger shows for the specific balance.', 'green']])],
    ['2.6', 'Exercise · Rewrite The Vague Note', chips('A Usable Note Records', ['Claim reviewed', 'Payer / product', 'Evidence source & date', 'Contact or reference #', 'Verified deadline', 'Next step'])],
    ['2.6', 'Exercise · Rewrite The Vague Note', cmp('Deadlines Vs. Internal Dates', [['Filing, Appeal, Records Deadlines', 'Outside requirements with their own trigger dates and proof.', 'pink'], ['Follow-Up Or Deferral Date', 'Schedules internal work only.', 'cyan']])],
    ['3.1', 'Retrieval Exercise · Classify The Message', cmp('Name The Issue', [['Rejection', 'Usually a submission or intake problem.', 'amber'], ['Denial', 'Adverse payment decision on all or part of an adjudicated claim.', 'pink'], ['Records Request', 'Can come before a payer decision.', 'violet']])],
    ['3.2', 'Practice · Choose The First Useful Evidence', flow('Start With The Exact Detail', [['Claim', ''], ['Line', ''], ['Date', ''], ['Message', ''], ['Compare Evidence', ''], ['Recommend', '']])],
    ['3.3', 'Exercise · Trace Two Lines On The Same Claim', chips('Read Together', ['Adjustment group', 'Reason (CARC)', 'Remark (RARC)', 'Affected service'])],
    ['3.4', 'Exercise · Review The Two Packets', cmp('Four Different Paths', [['Status Inquiry', 'Asks what happened.', 'cyan'], ['Corrected Claim', 'Changes submitted information.', 'amber'], ['Appeal / Reconsideration', 'Asks the payer to review a decision.', 'pink'], ['ADR Response', 'Supplies requested records.', 'violet']])],
    ['3.4', 'Exercise · Review The Two Packets', flow('Appeal Evidence Trail', [['Letter Draft', ''], ['Supporting Documents', ''], ['Submission Confirmation', ''], ['Later Decision', '']])],
    ['3.5', 'Practice · Make The Handoff Specific', chips('A Clear Handoff Names', ['Payer', 'Claim', 'Issue', 'Amount at risk', 'Evidence', 'Verified deadline', 'Specific review needed'])],
    ['3.5', 'Practice · Make The Handoff Specific', cmp('Role Boundary', [['Recognize', 'A coding error, credit, or patient responsibility issue.', 'green'], ['Not Authorized By Recognizing', 'Charge correction, claim change, write-off, refund, or transfer.', 'pink']])]
  ];
  add.forEach(([pid, beforeH, blk]) => {
    const p = W.pages.find(x => x.id === pid); if (!p) return;
    const i = p.blocks.findIndex(b => b.t === 'h' && b.text === beforeH);
    p.blocks.splice(i < 0 ? p.blocks.length : i, 0, blk);
  });
  const cap = W.pages.find(x => x.id === '3.6');
  const ui = cap.blocks.findIndex(b => b.t === 'ul');
  if (ui >= 0) cap.blocks[ui] = flow('', [['Identify', 'Hospital claim, payer product, service date'], ['Classify', 'Current issue + the record that supports it'], ['Explain', 'Remaining balance or amount at risk; separate remit and posting'], ['Plan', 'One evidence gap + a safe next step, deadline, ownership'], ['Write', 'A concise account note another collector can use']]);
})();

/* Plain-language pass: simplified prompts + original term first with plain meaning on first use per page */
(function () {
  const W = window.ARD_WORKBOOK;
  const RW = {
    'A.q1': '1. Copy the hospital account number (HAR) and the payer claim number (ICN). What does each one identify?',
    'A.q2': '2. Which entry first shows the payer’s decision? Which separate entry shows the payment was posted?',
    'A.q3': '3. If the ledger did not match the remit, what one piece of evidence would you ask for?',
    '1.1.q1': 'A plan ID was entered wrong before the claim was sent. Name one sign later in the process that could reveal the mistake, and one place you would check.',
    '1.1.d1': 'A physician was paid for the same visit (professional bill). Does that settle the hospital bill? Why or why not?',
    '1.2.q1': 'A classmate sees “Commercial” and says, “That tells us which plan to call.” Which field shows the actual plan? Another classmate sees $120 on the HAR and says, “Insurance owes $120.” Which two fields would you compare to see who owes it?',
    '1.3.q1': 'Which cards come from the same insurance company (brand)?',
    '1.3.q2': 'Which words on the cards tell you the product is different?',
    '1.3.q3': 'What would you check for the actual date of service?',
    '1.4.q1': '1. What do the two coverage records confirm? What is still not confirmed?',
    '1.4.q2': '2. Before asking to change which payer is billed first (filing order), which two sources would you check?',
    '1.4.q3': '3. An authorization number appears in a note. What must match before you can rely on it?',
    '1.4.d1': 'The payer confirms the patient is enrolled. Does that resolve a “no authorization” denial for a specific service?',
    '1.5.q1': 'For timeline A, what question would you ask before deciding what to do?',
    '1.5.q2': 'Using Training Account A, find three separate dates: when the claim was sent, when the payer accepted it, and when the payer made its decision (adjudication).',
    '1.6.q1': '1. After the posted insurance payment and contractual adjustment, how much is left? Which bucket is it in?',
    '1.6.q2': '2. Why is the allowed amount ($600) different from what the payer paid ($480)?',
    '1.6.q3': '3. How would your answer change if the $480 was on the remit but not on the ledger? And if a valid secondary insurance was confirmed later?',
    '1.7.q1': '1. Which claim are you working on: the hospital claim or the clinician’s claim? Which payer and product is it?',
    '1.7.q2': '2. What is the latest claim status the packet supports? Point to the evidence.',
    '1.7.q3': '3. Does the $760 balance prove the payer owes exactly $760? Explain.',
    '1.7.q4': '4. If the payer later says the claim was paid, what one extra detail would you ask for?',
    '1.7.q5': 'Compare with Training Account A. Name one difference in how the claim was processed, and one difference in who owes the balance.',
    '1.7.q6': 'Write one difference you can now explain, and one you want to practise again.',
    '2.1.q2': '2. “This is UnitedHealthcare, so I know which product to call.”',
    '2.2.q1': '1. Which two items would you flag first because of a deadline? Why?',
    '2.2.q2': '2. Which item would you research next? What fact could move it up or down the list?',
    '2.2.q3': '3. Why shouldn’t AR-25 be marked resolved based on these facts?',
    '2.3.q1': '1. For each case, name one confirmed fact and one missing piece of evidence.',
    '2.3.q2': '2. For R1, which identifiers and evidence would you compare before deciding the payer never received the claim?',
    '2.3.q3': '3. Write a different opening question for the payer in each case.',
    '2.3.d1': 'When would you stop normal follow-up and use the approved filing or escalation process?',
    '2.5.q1': 'For C, how much is the possible underpayment?',
    '2.5.q2': 'For D, why doesn’t the credit balance give you permission to refund?',
    '2.6.q1': '1. Write a short note a colleague could act on.',
    '2.6.q2': '2. What should the note say about the deadline?',
    '2.6.q3': '3. What if a separate notice says a response is required by October 23? How would your next step change?',
    '2.7.q1': '1. What is the issue? What does the remit tell you, and what does the ledger tell you?',
    '2.7.q2': '2. What evidence should you check, or include in a payment research handoff?',
    '2.7.q3': '3. Write a note with the next step. Do not say the patient owes $500.',
    '2.7.q4': 'A colleague wants to resubmit the claim because the balance is still open. Explain why the packet points to a different path. Then: if a matching $400 payment posted later, what would you check?',
    'ws.payer': 'Payer, Product, And Verified Filing Order (Who Is Billed First)',
    'ws.owner': 'Next Internal Review Date And Owner To Confirm',
    'ws.peer': 'Could another collector tell what was confirmed, what is still open, and what to do next?',
    '3.1.q1': '1. Which cards show the payer actually decided to deny (an adjudicated denial)?',
    '3.1.q2': '2. For card D, what details would you copy from the letter?',
    '3.1.q3': '3. For card F, why is it wrong to say “the entire claim was denied”?',
    '3.1.d1': 'A worklist is called “denials.” Why should you still read what the payer actually said?',
    '3.3.q1': '1. Which line was denied, and how much is at stake on that line?',
    '3.3.q2': '2. Which entries explain line 1? Why is its $100 different from the line 2 amount?',
    '3.3.q3': '3. After the posted payment and adjustment, what is the total balance? How much of it is still with insurance?',
    '3.3.q4': '4. For line 2, what is the first document or fact you would check?',
    '3.4.q1': '1. What stage is each case at? Which dates come from the payer notices?',
    '3.4.q2': '2. In packet A, what is missing or doesn’t match? What would prove the appeal was sent?',
    '3.4.q3': '3. What must you check before handing packet B to the approved owner?',
    '3.5.q1': '1. For each case, what needs review, and what evidence should you include?',
    '3.5.q2': '2. Which client reference would you use to confirm who owns it?',
    '3.5.d1': 'What claim information does the next person need, and what can you leave out?',
    '3.6.q1': 'Which part of your thinking was strongest?',
    '3.6.q2': 'Which part do you still need coaching on?',
    'CA.1': '1 · Identify The Claim And Product: Give the claim, the payer and product, and the date of service.',
    'CA.2': '2 · Classify And Support: What is the issue? Which two entries in the packet show it?',
    'CA.3': '3 · Explain The Balance: What is open now? What would be left if the matching payment posted?',
    'CA.4': '4 · Plan The Next Step: What evidence is missing, and what type of review is needed?',
    'CA.5': '5 · Write The Note: Include the evidence, reference numbers, and next step.',
    'CB.1': '1 · Identify The Claim And Product: Give the claim, the payer and product, and the date of service.',
    'CB.2': '2 · Classify And Support: Which line is affected, and what reason did the payer give?',
    'CB.3': '3 · Explain The Balance: Separate the denied line amount from the patient’s cost-sharing.',
    'CB.4': '4 · Plan The Next Step: What evidence is missing, which deadline matters, and whose approval must be confirmed?',
    'CB.5': '5 · Write The Note: Say what is confirmed and what you would hand off.',
    '3.7.q3': 'One client-specific question I need answered before working this type of account:'
  };
  const RP = {
    '2.1': [['For each case, identify the bill and payer product, check responsibility, classify the current issue, and choose the next question.', 'For each case, identify the claim and the payer’s product, check who owes the balance, name the current issue, and choose your next question.'], ['is an unsupported prediction', 'is a guess the evidence does not support'], ['Use the categories coverage, submission/acknowledgment, adjudication, posting, and follow-up documentation. A category can be used more than once.', 'Sort each item into one of these categories: coverage, submission/acknowledgment, adjudication, posting, or follow-up documentation. You can use a category more than once.'], ['Rewrite each statement with the strongest conclusion the evidence supports.', 'Rewrite each statement so it says only what the evidence actually proves.']],
    '2.4': [['Write the payer response and reference. Then state your next action or handoff in one sentence.', 'Write down the payer’s response and reference number. Then write your next step or handoff in one sentence.']],
    '2.5': [['For each, name the issue and the next evidence to check.', 'For each case, name the issue and the next evidence to check.']],
    'AR-WS': [['Use this worksheet for any fictional account. Complete the fields with what the evidence supports. Use “not verified” where the packet does not establish a fact.', 'Use this worksheet for any practice account. Fill in only what the evidence supports. Write “not verified” when the packet doesn’t confirm something.']],
    '3.2': [['For each, record the category, one fact to verify, and one action you would avoid until the right owner reviews it.', 'For each case, write the denial category, one fact to check, and one action to avoid until the right owner reviews it.']],
    '3.6': [['Each case has the facts you need for a training recommendation. Do not assume facts or take actions not supported by the packet. Case dates are fictional and do not establish real payer rules.', 'Each case has everything you need. Don’t assume facts or take actions the packet doesn’t support. Dates are fictional and are not real payer rules.']],
    '3.7': [['Choose one distinction. Explain it in your own words and give one example from the workbook.', 'Choose one difference below. Explain it in your own words and give one example from the workbook.']]
  };
  W.pages.forEach(p => (p.blocks || []).forEach(b => {
    if (b.id && RW[b.id]) { if (b.t === 'f') b.label = RW[b.id]; else b.text = RW[b.id]; }
    if (b.t === 'p' && RP[p.id]) RP[p.id].forEach(([a, c]) => { if (b.text.indexOf(a) >= 0) b.text = b.text.replace(a, c); });
  }));

  const G = [
    ['CO-45', 'charge is above the contracted rate; written off, not billed to the patient'],
    ['CO-197', 'required prior authorization was missing'],
    ['PR-2', 'coinsurance the patient owes'],
    ['CMS-1450', 'paper hospital claim form, same as the UB-04'],
    ['UB-04', 'paper hospital claim form'],
    ['837I', 'electronic hospital claim'],
    ['835', 'electronic remittance file'],
    ['AR', 'accounts receivable: money still owed to the hospital'],
    ['HB', 'hospital bill: facility charges', 'hospital bill (HB)'],
    ['PB', 'professional bill: clinician charges', 'professional bill (PB)'],
    ['MRN', 'medical record number'],
    ['HAR', 'hospital account record'],
    ['ICN', 'the payer’s claim number'],
    ['WQ', 'workqueue: a work list in Epic'],
    ['BCBSTX', 'Blue Cross Blue Shield of Texas'],
    ['MAC', 'Medicare Administrative Contractor', 'Medicare Administrative Contractor'],
    ['MA', 'Medicare Advantage'],
    ['CHIP', 'Children’s Health Insurance Program'],
    ['STAR', 'a Texas Medicaid managed care program', 'Texas Medicaid programs'],
    ['PPO', 'preferred provider organization'],
    ['HMO', 'health maintenance organization'],
    ['EPO', 'exclusive provider organization'],
    ['QHP', 'qualified health plan sold on the Marketplace'],
    ['DRG', 'diagnosis related group'],
    ['COB', 'coordination of benefits: which insurance pays first', 'Coordination of Benefits (COB)'],
    ['MSP', 'Medicare Secondary Payer', 'Medicare Secondary Payer (MSP)'],
    ['ERA', 'electronic remittance advice'],
    ['EOB', 'explanation of benefits'],
    ['EFT', 'electronic funds transfer: payment sent straight to the bank'],
    ['CARC', 'claim adjustment reason code: why the amount changed'],
    ['RARC', 'remittance advice remark code: extra detail'],
    ['CO', 'contractual obligation: the hospital writes it off', 'CO is Contractual Obligation'],
    ['PR', 'patient responsibility: the patient may owe it', 'PR is Patient Responsibility'],
    ['ADR', 'additional documentation request: the payer wants records'],
    ['DOS', 'date of service'],
    ['HCPCS', 'procedure and supply codes'],
    ['CPT', 'procedure codes'],
    ['OPPS', 'Outpatient Prospective Payment System', 'Outpatient Prospective Payment System'],
    ['HOPD', 'hospital outpatient department', 'HOPD means'],
    ['DNB', 'discharged, not billed', 'DNB means'],
    ['SOW', 'client procedure document'],
    ['HIPAA', 'federal patient-privacy law'],
    ['CMS', 'Centers for Medicare & Medicaid Services'],
    ['remittance', 'the payer’s explanation of what it paid and why', null, 'remit'],
    ['remit', 'the payer’s explanation of what it paid and why'],
    ['payer products', 'plan types', null, 'product'], ['payer product', 'plan type', null, 'product'], ['products', 'plan types', null, 'product'], ['product', 'plan type', null, 'product'],
    ['posting', 'recording the payment on the account', null, 'post'], ['posted', 'recorded on the account', null, 'post'],
    ['ledger', 'the account’s record of payments and adjustments'],
    ['bucket', 'who owes it: insurance or patient'],
    ['responsibility', 'who owes it'],
    ['evidence', 'proof in the record'],
    ['handoff', 'referring it to the right team'], ['hand off', 'refer it to the right team', null, 'handoff']
  ];
  const esc = s => s.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&');
  const rx = G.map(g => { const word = /^[a-z ]+$/.test(g[0]); return new RegExp('(?<![\\w(\\-/])(' + esc(g[0]) + ')(?![\\w\\-/])(?!\\s\\()', word ? 'i' : ''); });
  W.glossary = G;
  W.pages.forEach(p => {
    if (!p.blocks) return;
    const all = JSON.stringify(p.blocks);
    const seen = {};
    const ann = s => {
      if (!s || typeof s !== 'string') return s;
      G.forEach((g, i) => {
        const key = g[3] || g[0];
        if (seen[key]) return;
        if (g[2] && all.indexOf(g[2]) >= 0) { seen[key] = 1; return; }
        const m = s.match(rx[i]);
        if (m) { seen[key] = 1; const at = m.index + m[0].length; const after = s.slice(at), before = s.slice(0, m.index); if (/^\s+(is|are|means|refers)\b/.test(after) || /\b(Patient|Contractual)\s$/.test(before)) return; s = before + m[0] + ' (' + g[1] + ')' + after; }
      });
      return s;
    };
    p.blocks.forEach(b => {
      if (b.t === 'p' || b.t === 'note' || b.t === 'q' || b.t === 'disc') b.text = ann(b.text);
      else if (b.t === 'f') b.label = ann(b.label);
      else if (b.t === 'ul') b.items = b.items.map(ann);
      else if (b.t === 'tbl') b.rows = b.rows.map(r => r.map((c, j) => j === 0 ? c : ann(c)));
      else if (b.t === 'cls') b.rows = b.rows.map(r => [r[0], ann(r[1])]);
      else if (b.t === 'order') b.cards = b.cards.map(c => [c[0], ann(c[1])]);
      else if (b.t === 'compare') b.cols = b.cols.map(c => [c[0], ann(c[1]), c[2]]);
    });
  });

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const rows = G.filter(g => ['payer products', 'payer product', 'products', 'posted', 'hand off', 'remittance'].indexOf(g[0]) < 0).map(g => [g[0], cap(g[1])]);
  const ri = W.pages.findIndex(p => p.id === 'refs');
  W.pages.splice(ri + 1, 0, { id: 'glossary', group: 'close', title: 'Glossary Of Terms And Acronyms', kind: 'Reference', blocks: [
    { t: 'p', text: 'Every term below is explained in brackets the first time it appears on a page. Use this list any time you need a reminder.' },
    { t: 'tbl', head: ['Term', 'Plain Meaning'], rows }
  ] });
})();
