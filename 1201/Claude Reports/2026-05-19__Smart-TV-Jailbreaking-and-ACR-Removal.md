# Does the §1201 smart-TV jailbreaking exemption authorize removing ACR software?

**Date:** 2026-05-19
**Question (as posed):** Do the Final Rules or Register's Recommendations define "application"? And would removing Automatic Content Recognition (ACR) software from a smart television be covered under the §1201 jailbreaking exemptions?
**See also:** [`2026-05-19__Voice-Assistant-2018-Class-and-Lessons-for-ACR-and-Doorbell-Petitions.md`](2026-05-19__Voice-Assistant-2018-Class-and-Lessons-for-ACR-and-Doorbell-Petitions.md) — full walk-through of the 2018 voice-assistant Class 6 analysis, with applied lessons for a future ACR petition and for a hypothetical doorbell-camera footage-redirection petition.

## Bottom line

1. **No.** Neither "application" nor "software application" is formally defined anywhere in the codified regulatory text or in any of the nine Register's Recommendations (2000–2024). The term is used as an undefined primitive in `37 C.F.R. § 201.40`.

2. **Almost certainly no, on the face of the regulation.** The smart-television jailbreaking class (`§ 201.40(b)(10)` in 2024; first granted in 2015) is **expressly limited to "enabling interoperability"** of lawfully obtained applications. Unlike the parallel smartphone class, it contains **no "removal of software" clause**, and it forecloses circumvention "**for the purpose of gaining unauthorized access to other copyrighted works**." Removing ACR — manufacturer-bundled telemetry software — is not "interoperability"; it is software removal directed at a pre-installed manufacturer program. Nothing in the rulemaking record extends the exemption to that use.

3. **The more relevant statutory provision is `17 U.S.C. § 1201(i)`** — the statutory privacy exception for circumvention that "has the sole effect of identifying and disabling" a TPM's personally-identifying-information collection capability. That provision sits in the statute itself, not in the triennial rulemaking. It is **not** part of the "exemptions granted" that the user asked about, but it is the legal path most likely to cover an ACR-disabling act, subject to its own statutory conditions. (This report does not analyze whether ACR removal qualifies under § 1201(i); that is a separate legal question.)

## 1. Is "application" defined?

No.

A search across every Final Rule (2000, 2003, 2006, 2010, 2012, 2015, 2018, 2021, 2024) and every Register's Recommendation for the construction `"application" means / is defined / shall mean / refers to` (and equivalents) returns zero matches. The codified definitions sections at `§ 201.40(c)` define "obsolete," "specialized format," "audio description," "effective security measures," "institution of higher education," "voice assistant device," "dedicated network device," and similar terms — but never "application" or "software application."

The regulation treats "application" as ordinary English. The Recommendations use it the same way: descriptively, contrasted variably with "firmware," "operating system," "system components," or just "software." There is no operative line in any document that says "X counts as an application but Y does not."

## 2. The operative regulatory text for smart TVs

`37 C.F.R. § 201.40(b)(10)` (2024 Final Rule):

> Computer programs that enable smart televisions to execute lawfully obtained software applications, where circumvention is accomplished for the **sole purpose of enabling interoperability** of such applications with computer programs on the smart television, **and is not accomplished for the purpose of gaining unauthorized access to other copyrighted works**. For purposes of this paragraph (b)(10), "smart televisions" includes both internet-enabled televisions, as well as devices that are physically separate from a television and whose primary purpose is to run software applications that stream authorized video from the internet for display on a screen.

Source: `Final Rules/2024-Final-Rule.txt`, PDF p. 12 (the codified section begins on PDF p. 10).

For comparison, the smartphone class — `§ 201.40(b)(9)`, same Final Rule, PDF p. 12 — adds language the TV class omits:

> Computer programs that enable smartphones and portable all-purpose mobile computing devices to execute lawfully obtained software applications, where circumvention is accomplished for the sole purpose of enabling interoperability of such applications with computer programs on the smartphone or device, **or to permit removal of software from the smartphone or device.**

Same with voice assistants (`(b)(11)`): "...for the sole purpose of enabling interoperability... **or to permit removal of software from the device**..." And smart TVs sit between them in the numbering — the omission is deliberate, not a typographical artifact.

## 3. Why ACR removal does not fit within `(b)(10)`

Three reasons, each independent:

**(a) "Sole purpose of enabling interoperability."** ACR is manufacturer-bundled and runs without user intervention; the user is not seeking to make a *third-party application interoperate* with the TV's existing programs. They are seeking to *eliminate one of the TV's existing programs*. That is software removal, not interoperability.

**(b) No "removal of software" clause.** The smartphone and voice-assistant classes expressly permit "removal of software." The smart-TV and router classes do not. This is the Librarian's choice of regulatory language and it cannot be read out of the rule.

**(c) The carve-out: "not accomplished for the purpose of gaining unauthorized access to other copyrighted works."** ACR software is itself a copyrighted computer program owned by the TV manufacturer. Modifying, deleting, or reverse-engineering it to remove it from the device involves access to that program. Whether that constitutes "unauthorized access to other copyrighted works" within the meaning of `(b)(10)` is the kind of question the carve-out exists to flag.

## 4. The asymmetry is intentional, but the record never explains *why*

The Register's 2015 Recommendation (the cycle that first granted the smart-TV class) articulates the Office's own definition of jailbreaking at PDF p. 176:

> "jailbreaking" refers to the process of gaining access to the operating system of a computing device, such as a smartphone or tablet, to install and execute software that could not otherwise be installed or run on that device, **or to remove pre-installed software that could not otherwise be uninstalled**.

So the Office understood from the start that "removal of pre-installed software" is a canonical component of jailbreaking. But when the Office codified the smart-TV class, it did not import that half of the concept into the regulation. The 2015 Recommendation's smart-TV discussion (PDF pp. 202–211) focused almost entirely on the Software Freedom Conservancy's argument that smart-TV firmware is largely FLOSS (Linux/GPL-licensed) and that owners therefore have license rights to modify and reinstall those components. SFC framed the request as installing third-party applications, not as removing manufacturer software. The Register never directly addressed removal-of-software for smart TVs, in 2015 or in any later cycle. Voice assistants (2018) and routers (2021) were added under separate sections; both got the same "interoperability"-centered language as TVs, except voice assistants — for reasons not stated in the Recommendation — additionally received the "removal of software" clause.

The closest the rulemaking record comes to discussing privacy-driven removal:

- **2018 (`Reg Recommendation/2018... .txt`, PDF p. 166):** EFF petitioned to expand the *smartphone* class to add "enabling or disabling hardware features of the relevant device," beyond just install/run/remove software. That proposal was not adopted as written, and it never targeted smart TVs.

- **2021 (`Reg Recommendation/2021... .txt`, PDF pp. 235, 238, 241):** SFC proposed expanding the **security-research** class (Class 13, then `(b)(11)` / now `(b)(16)`) to expressly cover circumvention that "remove[s] software or disable[s] functionality that may expose personal information." After hearings, SFC **dropped** that request once the Office and opponents agreed the existing security-research exemption already covers privacy-related research. Crucially, in the same exchange, SFC observed that **"17 USC § 1201(i) addresses such end-user mitigations and is the more appropriate focus of any proposed expansion to those protections."**

That SFC remark is the only place in the four most recent Recommendations where the privacy-removal use case is squarely identified — and SFC's own position was that the right vehicle is the **statutory** `§ 1201(i)` privacy exception, not a rulemaking exemption.

There are zero references to "automatic content recognition," "ACR," "telemetry," "fingerprinting," "viewing data," or specific TV vendors' tracking features (Vizio, Samsung, LG) anywhere in the four cycles' Recommendations or Final Rules.

## 5. § 1201(i): the more likely legal path, separate from the rulemaking

The user's question was specifically about "the exemptions granted." Strictly answered, no rulemaking exemption covers ACR removal. But the user should know that Congress wrote a parallel privacy exception directly into the statute. `17 U.S.C. § 1201(i)` permits circumvention where:

- the TPM or the protected work has the capability of collecting or disseminating personally identifying information about the user;
- the TPM/work does not conspicuously disclose that capability and offer an opt-out;
- the act of circumvention has the **sole effect** of identifying and disabling that PII-collection capability; and
- the circumvention is carried out **solely** for the purpose of preventing collection or dissemination of PII, and not for any other purpose.

ACR fits the general shape of what `§ 1201(i)` was written for. Whether a given ACR-removal procedure satisfies all four prongs — particularly the "sole effect" prong, which is narrow — is fact-specific and beyond what this rulemaking archive can answer. The 2021 SFC comment above shows that at least one informed proponent treats `§ 1201(i)` as the appropriate vehicle for this category of circumvention.

This is not legal advice.

## 6. What this means in practice

- If someone asks "is jailbreaking my smart TV legal under §1201?", the **rulemaking exemption** authorizes installing third-party apps and modifying the firmware for interoperability — but does not authorize removing manufacturer-bundled software, ACR or otherwise.
- The statutory privacy exception `§ 1201(i)` is a separate, narrower question and is the legal hook most likely to apply to ACR-disabling specifically. It is not a rulemaking exemption; nothing in the Final Rules or Recommendations interprets it for ACR.
- If a future rulemaking petition wanted to authorize ACR removal under the rulemaking framework, the cleanest fix would be to add "or to permit removal of software from the smart television" to `(b)(10)` — matching the smartphone/voice-assistant language. No such petition appears in the 2015, 2018, 2021, or 2024 record.

## Sources cited

- `Final Rules/2024-Final-Rule.txt`, PDF pp. 10–12 — codified `§ 201.40(b)(9)`, `(b)(10)`, `(b)(11)`.
- `Reg Recommendation/2015_Section_1201_Registers_Recommendation.txt`, PDF p. 176 — Office's definition of jailbreaking.
- `Reg Recommendation/2015_Section_1201_Registers_Recommendation.txt`, PDF pp. 202–211 — Proposed Class 20 (smart TVs), SFC's proposal and the Office's analysis.
- `Reg Recommendation/2018_Section_1201_Acting_Registers_Recommendation.txt`, PDF p. 166 — EFF's proposed expansion of smartphone class.
- `Reg Recommendation/2021_Section_1201_Registers_Recommendation.txt`, PDF pp. 235, 238, 241 — SFC's security-research-class proposal; reference to `§ 1201(i)` as appropriate vehicle.
- `17 U.S.C. § 1201(i)` — statutory privacy exception (not in this archive; cited for completeness).

## Caveats

- All Recommendation page numbers refer to the `[PAGE N]` markers in the `.txt` extractions, which match the underlying PDFs.
- This document analyzes the rulemaking record. It is not legal advice and does not analyze state law (e.g., warranty, CFAA-equivalents, consumer-protection statutes) that could independently affect whether removing ACR is lawful.
- The "application is not defined" finding is based on text search of the 18 PDFs in this archive. If the term is defined elsewhere (e.g., in a separately published Copyright Office report, in a court opinion, or in `17 U.S.C. § 101`), that is outside scope.
