# Audit of cycle-2000.json through cycle-2015.json
Date: 2026-05-22

## Summary
- 36 records checked across 6 cycle files (2 + 4 + 6 + 6 + 8 + 10).
- 35 confirmed, 1 flagged (minor — cycle-2015 (b)(1) `source.quote` is not strictly verbatim; uses ellipses to elide repeated sub-paragraph branches. Not a substantive error.).
- 0 unresolved.
- Class counts per cycle match the codified `(b)(N)` paragraphs in every Final Rule.
- The known issue regarding INDEX.md's mislabeling of 2015 (b)(9) is resolved: the JSON's extractor_notes are correct, and INDEX.md is wrong.

## Per-cycle findings

### Cycle 2000 — 2 records, both confirmed
Codified `§ 201.40` (b)(1)–(b)(2) appears entirely on PDF p. 19 (lines 3886–3924 of `2000-Final-Rule.txt`, after `[PAGE 19]` at line 3773). No `[PAGE 20]` marker — the section fits on a single PDF page.

- **(b)(1)** — CONFIRMED. Class number, equipment_or_work, permitted_uses, exclusions (including temporal limit "October 28, 2000 to October 28, 2003"), and definitions_or_conditions all match the codified text at `[PAGE 19]` (lines 3917–3919). The JSON's `source.quote` preserves the codified anomaly `1201(a)(1)A)` (missing parenthesis in the FR original).
- **(b)(2)** — CONFIRMED. "Literary works, including computer programs and databases, protected by access control mechanisms that fail to permit access because of malfunction, damage or obsoleteness" at `[PAGE 19]` (lines 3920–3924).

### Cycle 2003 — 4 records, all confirmed
Codified `(b)` and `(c)` all on PDF p. 8 (lines 1565–1632, after `[PAGE 8]` at line 1439).

- **(b)(1)** — CONFIRMED. Internet-location block-lists at `[PAGE 8]` (lines 1583–1596). `(c)(1)` "Internet locations" definition correctly mapped.
- **(b)(2)** — CONFIRMED. Computer programs protected by obsolete malfunctioning dongles at `[PAGE 8]` (lines 1597–1600). `(c)(2)` "Obsolete" definition included.
- **(b)(3)** — CONFIRMED. Obsolete-format computer programs/video games at `[PAGE 8]` (lines 1601–1611). The format-obsolescence definition is embedded in the class itself.
- **(b)(4)** — CONFIRMED. Literary works in ebook format (read-aloud / screen reader) at `[PAGE 8]` (lines 1612–1620). `(c)(3)` cross-reference to 17 U.S.C. 121 included.

### Cycle 2006 — 6 records, all confirmed
All codified `(b)(1)–(6)` and `(c)` on PDF p. 9 (lines 1672–1754). No `[PAGE 10]` in the codified section.

- **(b)(1)** — CONFIRMED. Audiovisual works in college/university film/media studies department, classroom use by media studies or film professors, at `[PAGE 9]` (lines 1690–1697).
- **(b)(2)** — CONFIRMED. Obsolete-format computer programs and video games, for library/archive preservation, at `[PAGE 9]` (lines 1698–1712).
- **(b)(3)** — CONFIRMED. Obsolete malfunctioning dongles at `[PAGE 9]` (lines 1713–1720).
- **(b)(4)** — CONFIRMED. Literary works in ebook format (accessibility) at `[PAGE 9]` (lines 1721–1729). `(c)` cross-reference (lines 1751–1754) to 17 U.S.C. 121.
- **(b)(5)** — CONFIRMED. Firmware on wireless telephone handsets (the original 2006 cell-phone unlocking exemption) at `[PAGE 9]` (lines 1730–1737).
- **(b)(6)** — CONFIRMED. "Sony rootkit" exemption — CDs with security-flawed TPMs — at `[PAGE 9]` (lines 1738–1750).

### Cycle 2010 — 6 records, all confirmed
All six codified classes on PDF p. 15 (lines 2982–3056), after `[PAGE 15]` at line 2878.

- **(b)(1)** — CONFIRMED. Motion pictures on DVDs/CSS, three downstream user categories (i)–(iii), at `[PAGE 15]` (lines 2982–3001).
- **(b)(2)** — CONFIRMED. Smartphone jailbreaking (handset apps interoperability) at `[PAGE 15]` (lines 3002–3009).
- **(b)(3)** — CONFIRMED. Used-handset unlocking at `[PAGE 15]` (lines 3010–3020).
- **(b)(4)** — CONFIRMED. Video games on PCs (security research) with both cumulative use/maintenance conditions (b)(4)(i)–(ii) at `[PAGE 15]` (lines 3021–3039).
- **(b)(5)** — CONFIRMED. Obsolete dongles + embedded dongle-obsolescence definition at `[PAGE 15]` (lines 3040–3047).
- **(b)(6)** — CONFIRMED. Ebook accessibility (read-aloud / screen readers) at `[PAGE 15]` (lines 3048–3056).
- Drafting anomaly correctly noted: The (b) chapeau says "five classes" but the list contains six. The JSON's extractor_notes flag this — confirmed as a genuine codified-text anomaly, not an extraction error.

### Cycle 2012 — 8 records, all confirmed
Codified classes span PDF p. 19–20 (lines 3744–3974). `[PAGE 19]` at line 3689 and `[PAGE 20]` at line 3892.

- **(b)(1)** — CONFIRMED. Literary works (electronic) accessibility with (i) blind/disabled individuals + (ii) authorized entity at `[PAGE 19]` (lines 3744–3763).
- **(b)(2)** — CONFIRMED. Smartphone jailbreaking at `[PAGE 19]` (lines 3764–3771).
- **(b)(3)** — CONFIRMED. Used wireless handset unlocking, 90-day acquisition window + carrier-failure-to-unlock condition, at `[PAGE 19]` (lines 3772–3795).
- **(b)(4)** — CONFIRMED. Motion pictures on DVD/CSS, four enumerated criticism/comment instances, at `[PAGE 19]` (lines 3796–3831). Includes embedded "noncommercial videos" definition.
- **(b)(5)** — CONFIRMED. Parallel to (b)(4) for motion pictures lawfully acquired via online distribution services, at `[PAGE 19]` (lines 3832–3868).
- **(b)(6)** — CONFIRMED. Screen-capture variant of (b)(4) at PDF p. 19–20 (lines 3869–3910). The JSON correctly notes that (b)(6)(i)(D) omits the "film studies or other courses requiring close analysis" qualifier present in (b)(4)(iv) — verified in source text.
- **(b)(7)** — CONFIRMED. Screen-capture variant of (b)(5) at `[PAGE 20]` (lines 3911–3949).
- **(b)(8)** — CONFIRMED. Accessibility-player R&D exemption at `[PAGE 20]` (lines 3950–3974). "Playhead and/or related time code information" language and the "resulting player does not require circumvention" proviso both captured.

### Cycle 2015 — 10 records, 9 confirmed, 1 minor stylistic flag
Codified classes span PDF p. 18–21 (lines 3786–4247). `[PAGE 18]` line 3604, `[PAGE 19]` line 3806, `[PAGE 20]` line 4016, `[PAGE 21]` line 4227.

- **(b)(1)** — FLAGGED (minor, non-substantive). The codified motion-pictures class (lines 3799–3990) spans PDF p. 18–19 and has eight nested sub-paragraphs (i)–(viii), most with two-branch (A)/(B) structure. The JSON's `source.quote` does not reproduce the entire codified text verbatim — it elides several repeated (A)/(B) branches with `"..."` (e.g., `"(iii) For use in nonfiction multimedia e-books offering film analysis, (A) ..., or (B) ..."`). This is a structural summary, not strict verbatim. The substantive content in permitted_uses/exclusions/definitions_or_conditions accurately reflects the codified rule (verified line-by-line against lines 3799–3990).
- **(b)(2)** — CONFIRMED. Literary works (electronic) accessibility at `[PAGE 19]` (lines 3991–4011).
- **(b)(3)** — CONFIRMED. Wireless device unlocking, four device sub-classes (A)–(D), spans pages 19–20 (lines 4012–4041). The (ii) "used" definition correctly captured.
- **(b)(4)** — CONFIRMED. Smartphones/portable mobile devices jailbreaking + removal-of-software clause at `[PAGE 20]` (lines 4042–4061). Embedded "portable all-purpose mobile computing device" definition captured.
- **(b)(5)** — CONFIRMED. Smart TVs (interoperability only, no removal-of-software clause) at `[PAGE 20]` (lines 4062–4068).
- **(b)(6)** — CONFIRMED. Motorized land vehicles (diagnosis/repair/lawful modification), telematics/entertainment exclusion, 12-month delay, at `[PAGE 20]` (lines 4069–4090).
- **(b)(7)** — CONFIRMED. Good-faith security research on three device classes ((A) consumer devices including voting machines; (B) motorized land vehicles; (C) implanted medical devices), with "good-faith security research" definition, at `[PAGE 20]` (lines 4091–4134).
- **(b)(8)** — CONFIRMED. Video games preservation when authentication server abandoned (local play), spanning (i) gameplay restoration, (ii) library console operation, (iii) four definitions (A)–(D), at `[PAGE 20]` (lines 4135–4205).
- **(b)(9)** — CONFIRMED. 3D printers feedstock TPMs at `[PAGE 20]` (lines 4206–4222). See resolution below.
- **(b)(10)** — CONFIRMED. Implanted medical-device data compilations, patient access to own data, spans pages 20–21 (lines 4223–4247).

## Resolution of 2015 (b)(9) labeling discrepancy

The cycle-2015.json extractor_notes are correct. INDEX.md is wrong.

The codified text of `§ 201.40(b)(9)` in the 2015 Final Rule reads, verbatim from `[PAGE 20]` (lines 4206–4222 of `2015-Final-Rule.txt`):

> "(9) Computer programs that operate 3D printers that employ microchip-reliant technological measures to limit the use of feedstock, when circumvention is accomplished solely for the purpose of using alternative feedstock and not for the purpose of accessing design software, design files or proprietary data; provided, however, that the exemption shall not extend to any computer program on a 3D printer that produces goods or materials for use in commerce the physical production of which is subject to legal or regulatory oversight or a related certification process, or where the circumvention is otherwise unlawful."

INDEX.md (line 86) labels `(b)(9)` as "Computer programs in machines no longer supported — diagnosis/repair/modification by owner [NEW]". That description matches no codified class in the 2015 Final Rule. A "Class 24: Abandoned Software — Music Recording Software" (Ensoniq PARIS) was discussed at line 3705 of `2015-Final-Rule.txt` but was denied ("No evidence or argument to support this exemption was submitted after the initial petition phase" — lines 3725–3727). It never made it into the codified text. INDEX.md's label appears to be a leak of a denied proposal into the index.

The total codified count for 2015 is 10 classes — that count matches INDEX.md, only the label of (b)(9) is wrong.

## Recommended corrections

### A. INDEX.md
- File: `1201/INDEX.md`
- Line 86 — currently: `    - \`(b)(9)\` — Computer programs in machines no longer supported — diagnosis/repair/modification by owner [NEW]`
- Should be: `    - \`(b)(9)\` — 3D printers — circumvent microchip-reliant feedstock TPMs [NEW]`

### B. cycle-2015.json (optional polish — not a substantive error)
- File: `analysis/cycle-2015.json`
- Field: `exemptions[0].source.quote` (the (b)(1) class)
- Issue: Quote uses `"..."` ellipses to elide repeated (A)/(B) sub-branches; it is a structural summary, not a strictly verbatim quote.
- Note: substantive content is accurate; leaving as-is is acceptable for downstream consolidation.

### C. No other JSON edits needed
All other 34 records across the six JSON files are accurate against the codified text — class numbers, permitted_uses, exclusions, definitions_or_conditions, pdf_pages, and source quotes all match the corresponding Final Rule.
