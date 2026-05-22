# Would defeating a GE refrigerator's water-filter authentication be covered by an existing §1201 exemption? Could a tool be distributed?

**Date:** 2026-05-21
**Companion to:** [`2026-05-19__Petitioning-Strategy-for-Smart-Appliance-End-of-Support.md`](2026-05-19__Petitioning-Strategy-for-Smart-Appliance-End-of-Support.md) — that report covers smart-appliance end-of-support generally; this one is the narrower consumable-authentication question.

The triggering question came from the Fulu bounty page at `https://bounties.fulu.org/bounties/ge-refrigerator-water-filter-replacement`, which the archive could not fetch (HTTP 403). The bounty title indicates the work product is a way to defeat the chip-based authentication that locks GE refrigerators to OEM-branded replacement water filters — the typical "supplies lockout" pattern (RFID/handshake chip in the filter housing; the appliance refuses third-party cartridges or surfaces a permanent service indicator). The analysis below assumes that fact pattern. If the bounty actually requires a different deliverable, the analysis below may not be on point.

All citations are to PDF page markers (`[PAGE N]`) in the `.txt` extractions in this archive. Not legal advice.

---

## 1. The bottom line

**No existing §201.40 exemption authorizes what this bounty asks for.** The codified text of every potentially applicable class fails to cover a non-OEM water-filter swap on a working refrigerator:

- The 2024 consumer-device repair class — § 201.40(b)(15) — defines "maintenance" and "repair" against the device's **"original specifications and any changes to those specifications authorized for that device"** (`Final Rules/2024-Final-Rule.txt` PDF p. 12, lines 2553–2569). Substituting a non-OEM filter is the *opposite* of restoring original specifications; the OEM specification is the GE-authenticated filter. There is no malfunction to "diagnose." The TPM is not broken; it is working as designed against a third-party part. (b)(15) is a §117-style repair/maintenance verb and will not stretch to consumable substitution.
- The 3D-printer feedstock class — § 201.40(b)(21) — *is* a consumables-interoperability exemption, and it is the only one in the regulation. By its own terms it is limited to **"Computer programs that operate 3D printers that employ technological measures to limit the use of material"** (`Final Rules/2024-Final-Rule.txt` PDF p. 13, lines 2851–2858). It does not extend to refrigerators or any other appliance.
- The "jailbreaking — interoperability only" classes — (b)(10) smart TVs, (b)(12) routers — are device-specific and address running unauthorized *software*, not third-party physical supplies.
- The unlocking, accessibility, security-research, TDM, vehicle-repair, marine-vessel, food-prep, medical-device, and FOSS-license classes are obviously off-point.

**There is no "general exemption for interoperability"** in § 201.40. The four genuinely interoperability-flavored grants — (b)(10), (b)(12), (b)(21), and the older smartphone-jailbreaking line — are each cabined to specific device categories. The Copyright Office has consistently refused to grant interoperability rights at the category-of-purpose level; it grants them device-by-device on a developed record.

## 2. The 2018 Acting Register addressed this exact pattern — and declined to grant

The 2018 EFF/ORI/ASCDI class-7 expansion proposal asked the Office to extend repair/modification rights to "consumables" — printer toner cartridges, smart light bulbs, the cat-litter-cleaning-fluid example from Mr. Walsh's testimony, and similar supplies authentication. The Acting Register's analysis is the cleanest treatment of this question in the rulemaking record. It is worth quoting carefully because the analysis cuts both ways.

**Likely-noninfringing finding (favorable):**

> *"Proponents' concern here is that device owners are locked into using a manufacturer's replacement cartridges and are unable to use competitive consumable cartridges without modifying their devices. … the purpose of the modification is to make the device accept non-manufacturer-approved component parts. … The Acting Register notes there are some parallels between this proposal and the existing exemption for 3D printers to enable the use of non-manufacturer-approved feedstock. Moreover, the proposed modifications are limited to developing interoperability between products, a use the Office has acknowledged in prior rulemakings is likely fair. As the Section 1201 Report noted, Congress did not intend that 'section 1201 would serve as a sword to inhibit market entrants from offering competing consumer products.'"* (`Reg Recommendation/2018_Section_1201_Acting_Registers_Recommendation.txt` PDF pp. 211–212, lines 9138–9173.)

This is as close as the Office has come to saying that a filter-authentication bypass is the *type of activity* the statute permits. The Sega/Connectix line was cited as the supporting fair-use precedent (`2018_…Recommendation.txt` line 9159), and the Office expressly invoked § 1201(f) as a separate, statutory shield:

> *"in some cases, a regulatory exemption may not be necessary, as the Copyright Office has noted that section 1201(f) should be available to insulate circumvention activities undertaken for the purpose of achieving interoperability of a computer program with other programs."* (`2018_…Recommendation.txt` PDF p. 212, lines 9180–9186.)

**Causation finding (unfavorable):**

> *"With respect to consumables, however, it is not clear from the record whether the prohibition on circumvention is causing any adverse effect on consumers' ability to engage in the proposed activity. Similarly, in the case of computing peripheral devices, the record does not establish that TPMs are consistently controlling access to a copyrighted work within the meaning of the statute."* (`2018_…Recommendation.txt` PDF p. 215, lines 9291–9309.)

So the 2018 Office found the *activity* likely noninfringing under fair-use principles but failed the proponents on two threshold §1201 questions: (1) whether the chip is in fact a "technological measure that effectively controls access" to a copyrighted work, and (2) whether § 1201 itself (rather than market or technical factors) is the proximate barrier to filter substitution. No consumables expansion was granted in 2018, and none has been granted in the 2021 or 2024 cycles. The 3D-printer feedstock class — § 201.40(b)(21) — remains the lone consumables-style exemption in the regulation.

## 3. Two threshold questions before any exemption analysis matters

The 2018 record framed these and they have not been resolved in any later cycle:

**3.1 Is the filter-authentication chip a "TPM" within § 1201?**
§ 1201(a)(1) covers a measure that "effectively controls access to a work." If the authentication handshake on a GE refrigerator filter does not gate access to copyrighted firmware — if it is just a hardware presence test that the refrigerator's firmware checks before turning on the "filter OK" LED — there is a credible argument that § 1201 does not apply at all and no exemption is required. *Lexmark Int'l, Inc. v. Static Control Components* (cited within the 2018 record's consumables discussion via footnote 1300) is the closest published authority for the proposition that supply-authentication chips that merely identify a part, rather than gate access to expressive code, fall outside § 1201. This archive does not contain *Lexmark* or other case law, but the 2018 Recommendation's repeated language that "the record does not establish that TPMs are consistently controlling access to a copyrighted work within the meaning of the statute" (line 9307) reads as a deliberate signpost to the *Lexmark*-style argument.

**Implication:** before invoking any §1201 exemption, the petitioner should consider whether the activity simply falls outside §1201 in the first place. If so, the bounty deliverable is not "circumvention" at all and no exemption is needed.

**3.2 Even if it is a TPM, does circumvention require accessing a copyrighted work?**
If the bypass is implemented by spoofing a single RFID UID — not by reading or modifying the refrigerator's firmware — then arguably the user is not "circumventing" access to a copyrighted program; they are emulating a hardware token. The Office has not squarely addressed this in the consumables context, and the archive's record is thin on the engineering specifics.

These threshold questions are doing real work: they are why no consumables exemption has been granted but also why one has not been *needed* in any clear, documented enforcement context that this archive records.

## 4. The trafficking / distribution question — separate and harder

The user's second question — whether the solver could **distribute** a tool — is governed by an entirely different part of the statute, and the triennial rulemaking does **not** address it.

**4.1 The triennial exemptions only cover § 1201(a)(1).** Every exemption in § 201.40 begins "shall not apply to persons who engage in noninfringing uses of the following classes of copyrighted works." That tracks § 1201(a)(1)(B)–(D), which authorizes the Librarian to exempt the *act* of circumvention. The trafficking prohibitions — § 1201(a)(2) (tools that circumvent access controls) and § 1201(b)(1) (tools that circumvent rights controls) — are **not subject to the triennial rulemaking** and have no exemptions that the Librarian can grant. The Copyright Office's 2024 Final Rule states this at the threshold of its analysis (`Final Rules/2024-Final-Rule.txt` PDF p. 1, footnote 1: "17 U.S.C. 1201(a)(1)(A)"; rulemaking authority cited only as 1201(a)(1)(B)–(D)).

**Implication:** Even if § 201.40(b)(15) or (b)(21) covered the act of bypassing the filter chip — and they don't — a person who *manufactured and sold* a chip-spoofer, a cracked filter cartridge, or a software tool to do the bypass would still face § 1201(a)(2)/(b)(1) trafficking liability. The triennial exemption shields the consumer who performs the circumvention on their own fridge. It does not shield the seller.

**4.2 § 1201(f) — the statutory interoperability provision — is the only place where "tool" creation is permitted, and its scope is narrow.** § 1201(f)(2) and (3) (which this archive does not contain in full, but which the 2018 Recommendation summarizes at PDF p. 212, lines 9180–9186 and at the Section 1201 Report citation in footnote 1301) permit a person to "develop and employ technological means" and even to "make available" such means **for the sole purpose of achieving interoperability of an independently created computer program with other programs.** Four limits matter:

- It applies to circumvention "for the sole purpose of identifying and analyzing those elements of the program necessary to achieve interoperability **of an independently created computer program with other programs**" — i.e., software-to-software interoperability, not software-to-physical-component interoperability.
- The person must have "lawfully obtained the right to use a copy of [the] computer program."
- Sharing under § 1201(f)(3) is limited to sharing with others "for the purpose of enabling interoperability of an independently created computer program with other programs."
- "Interoperability" is defined in § 1201(f)(4) as the ability of computer programs to exchange and use information.

A water-filter authentication bypass is, at best, an awkward fit. The "independently created computer program" would presumably be firmware running on a spoofer/clone-chip — software that communicates with the refrigerator's firmware to satisfy the handshake. Whether that satisfies § 1201(f)(4)'s "ability of computer programs to exchange information" is unsettled, and this archive contains no Office or court analysis that decides the question in this fact pattern. The 2018 Acting Register invoked § 1201(f) only in passing and in the abstract; the Office has never said that § 1201(f) shields the manufacture and sale of a consumable-authentication bypass.

**The realistic answer on distribution:** distribution of a filter-bypass tool faces unresolved § 1201(a)(2)/(b)(1) trafficking exposure that the triennial rulemaking is structurally unable to fix. The § 1201(f) statutory shield exists and is the most plausible defense, but the archive's rulemaking record does not establish that the Office or any court has approved its application to this exact pattern. A solver who built and distributed such a tool would be litigating on the frontier, not relying on settled law.

## 5. What this means for the bounty as the user described it

- **Personal use only, on one's own fridge:** the solver is not within any current § 201.40 exemption. Their best argument is that the chip does not effectively control access to a copyrighted work in the first place (the *Lexmark*-style threshold argument flagged by the 2018 Recommendation at PDF p. 215). That is a § 1201 *applicability* argument, not an exemption-coverage argument, and it is not something the Copyright Office has resolved.
- **Distribution of a tool to others:** materially exposed to § 1201(a)(2)/(b)(1) trafficking liability. § 1201(f) is the only plausible statutory shield, and its application to a hardware-supply authentication bypass is unsettled. The triennial rulemaking provides no shield for trafficking regardless of what (b)(15) or any other class says.
- **Path the Office has signaled it would credit:** a fresh petition in the next cycle proposing a "consumables interoperability" expansion modeled on (b)(21), with the developed record the 2018 Acting Register said was missing — engineering exhibits showing the chip is in fact a TPM controlling access to copyrighted firmware (or, conversely, conceding it is not and explaining why an exemption is still procedurally appropriate), causation evidence that § 1201 (not market or contract terms) is what blocks third-party filters, and an enumerated list of affected appliances. See the companion smart-appliance petitioning report (`2026-05-19__Petitioning-Strategy-for-Smart-Appliance-End-of-Support.md`) for the procedural template.

## 6. What this archive does and does not contain

This analysis draws solely on the §1201 rulemaking record (Final Rules and Register's Recommendations, 2000–2024). It does **not** draw on the Section 1201 Report itself, on *Lexmark*, *Chamberlain v. Skylink*, *Sega*, *Connectix*, or any other published court opinion except where those opinions are cited within the rulemaking record. The statute text (17 U.S.C. § 1201, including § 1201(f) in particular) is not in this archive — § 1201(f)'s exact terms are described from the Acting Register's 2018 summary and from the Section 1201 Report citations in the record, not from primary text.

A complete legal opinion on the bounty would also need to engage with: (a) the *Lexmark* line on whether supply-authentication chips are § 1201 TPMs at all, (b) the *Chamberlain* "nexus to infringement" line, (c) whether GE's filter firmware is a "computer program" within § 1201(f)(4)'s "interoperability" definition, and (d) state right-to-repair laws that may independently authorize the activity or contractually unwind it. None of those are in this archive.

Not legal advice; this documents what the rulemaking record says.
