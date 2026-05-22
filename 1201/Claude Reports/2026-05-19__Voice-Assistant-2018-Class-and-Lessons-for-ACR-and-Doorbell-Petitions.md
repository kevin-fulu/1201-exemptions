# The 2018 voice-assistant jailbreaking class — Register's analysis and what it teaches future petitioners

**Date:** 2026-05-19
**Companion to:** [`2026-05-19__Smart-TV-Jailbreaking-and-ACR-Removal.md`](2026-05-19__Smart-TV-Jailbreaking-and-ACR-Removal.md). That report concluded the smart-TV exemption does not authorize ACR removal. This one expands on the 2018 voice-assistant precedent and asks what it teaches a hypothetical future petition aimed at (a) ACR removal on smart TVs and (b) doorbell cameras that redirect cloud footage to a user-controlled server.

All citations are to `Reg Recommendation/2018_Section_1201_Acting_Registers_Recommendation.txt`, PDF pages 163–187 (Proposed Class 6).

## 1. What was actually proposed

EFF's petition (joined by ORI and ASCDI in supporting comments) asked for **two** things rolled into one class amendment (PDF p. 163–165):

1. **Add voice-assistant devices** (Amazon Echo, Google Home, Apple HomePod) to the existing smartphone jailbreaking class (`§ 201.40(b)(6)` of the 2015 rule).
2. **Add new operative language**: not only "install, run, or remove software," but also "**enable or disable hardware features**" of the device.

Proponents offered three reasons for wanting the access (PDF p. 165–166):

- **Functionality** — install third-party apps; patch security vulnerabilities the manufacturer has not addressed.
- **Privacy** — install firewalls to block always-on transmission of audio commands to manufacturer servers; control the microphone/camera; "selectively limit [the device's] functionality, such as by limiting the reach of the always-on voice recognition, the various wireless interfaces, and the transmission of very personal data."
- **Longevity** — continue using a device after the manufacturer abandons cloud-side support (reducing e-waste).

Opposition came from ACT | The App Association, ESA, Joint Creators II, and RIAA (PDF p. 166). The opposing theme: jailbreaking voice assistants creates **greater piracy risk** than jailbreaking smartphones because the devices are simpler, less hardened, and increasingly central to music streaming.

## 2. The Register's reasoning, factor by factor

The Acting Register's analysis tracks the two-step framework (fair use sub-analysis, then the five `§ 1201(a)(1)(C)` statutory factors).

### Fair use

**Factor 1 — purpose and character (favors fair use).** PDF p. 171–173. The Register relied on two threads of established precedent: (i) reverse engineering to facilitate interoperability is a favored purpose under *Sega v. Accolade* and *Sony Computer Entm't v. Connectix*; (ii) prior rulemakings (2010, 2012, 2015) had already found that enabling a device's operating system to interoperate with third-party programs is a favored purpose. **Crucially, the Register then added a separate enhancement for privacy:**

> Finally, the Acting Register believes it significant that proponents seek to jailbreak voice assistant devices for the additional purpose of safeguarding personal privacy. Section 1201(i) provides a permanent exemption that permits circumvention for the "sole" purpose and effect of disabling technology that collects or disseminates personally identifying information. While proponents' requested exemption is not fully covered by [section] 1201(i), section 1201(i) reflects Congress's recognition that the protection of privacy is a purpose for which circumvention may be warranted under appropriate circumstances. The Acting Register finds that this consideration further tips the first factor in favor of fair use.

(PDF p. 173.) This is the most important sentence in the entire chapter for any privacy-driven petition: **`§ 1201(i)` is treated not as the *exclusive* statutory vehicle for privacy circumvention, but as evidence that privacy is a credit-worthy purpose under the rulemaking factors.** The same paragraph cites the 2018 Flake–Coons letter to Amazon and the NPR story about an Echo recording and transmitting a couple's conversation as contemporary context (PDF p. 173 n.1051).

The Register noted the Federal Circuit's then-recent *Oracle v. Google* decision (886 F.3d 1179 (Fed. Cir. 2018)) in a long footnote (PDF p. 172 n.1048), but held it did not alter the analysis — even if jailbreaking is not transformative, the noncommercial-and-personal-use rationale from the 2015 Recommendation still tips factor 1.

**Factor 2 — nature of the work (favors fair use).** PDF p. 174. The firmware in voice assistants serves the same functional purpose as smartphone firmware ("start up the device, control the hardware, and allow the running of other programs"); often it is literally the same firmware (variants of GNU/Linux for Amazon/Google; iOS for Apple HomePod). Functional code, weak copyright interest, factor favors fair use.

**Factor 3 — amount used (limited relevance, not against fair use).** PDF p. 175. Jailbreaking may reproduce the firmware in its entirety, but the *modification* is de minimis. The Register followed her 2015 articulation that this factor is "of limited relevance" in jailbreaking contexts.

**Factor 4 — market effect (favors fair use).** PDF p. 175–176. Firmware is sold bundled with the device; updates are free downloads; there is no separate market to harm. The Register expressly noted that smartphone sales rose during the period the smartphone jailbreaking exemption was in effect (PDF p. 175). She bracketed opponents' content-piracy argument for analysis under `§ 1201(a)(1)(C)` factor 4 (where it more properly fits) rather than fair use factor 4.

Overall fair use: **favored** (PDF p. 176).

### The `§ 1201(a)(1)(C)` statutory factors

**Factor 1 — availability for use (favors exemption).** PDF p. 177–180. Without the exemption, users cannot install third-party apps; the Apple HomePod permits *no* third-party apps at all. ACT pointed to Raspberry Pi / Arduino as alternatives; the Register rejected this — building one's own device from scratch is more than a "mere inconvenience" and would cost more than the device itself.

The Register also flagged, *sua sponte*, that `§ 1201(f)` (reverse engineering for interoperability) might *already* permit some jailbreaking, but declined to deny the exemption on that basis because the law is unsettled and the Office had previously committed to granting exemptions "in cases where there may be reasonable disagreement as to whether section 1201(f) applies" (PDF p. 179, quoting the Office's Section 1201 Report).

**Factor 2 — archival / preservation / education (neutral).** PDF p. 180. Proponents offered a thin one-sentence theory about preserving audio records; the Register treated it as speculative.

**Factor 3 — criticism / comment / news / scholarship / research (somewhat favors).** PDF p. 180–181. Apps excluded from app stores for content reasons can be studied if installed via jailbreak; security research benefits from lower-level access.

**Factor 4 — effect on the market for or value of copyrighted works (at best neutral; does not tip against).** PDF p. 181–185. This is where the long fight happened. Opponents argued:

- Joint Creators II's expert Christopher Bell (VP at Warner Music Group) opined that root access could allow attachment of peripheral devices to capture sound recordings from a subscription stream, and could bypass per-account device limits via MAC-spoofing-like techniques.
- Counterfeit apps (Spotify, Pandora knockoffs) are widely distributed via Cydia, the jailbreak app store.
- Voice assistants are "relatively simple devices" that lack the hardware/software complexity of PCs, making content extraction easier.
- Licensing for music streaming services assumes that streamed content stays secure on the endpoint.

The Register acknowledged piracy concerns as "legitimate" and "highly significant" but found the evidentiary record insufficient (PDF p. 184–185):

- No evidence that prior jailbreaking exemptions had increased piracy on smartphones.
- Bell himself admitted Warner is "not privy to the precise methods used to securely communicate or store [streaming-service] information" on each voice assistant; "much is unknown to us about the technical measures."
- RIAA's CTO admitted he had "no personal experience researching" the difficulty of extracting music data from a voice-assistant buffer.
- Critically: subscription streaming services use **separate TPMs** (login/password, encrypted streams, server-side anomaly detection, simultaneous-stream caps) that do not depend on locking the device firmware. EFF's expert Seth Schoen drove this point home: server-side enforcement does not require client-side lockdown.
- Cf. 2015 smart-TV analysis: same reasoning — streaming-service TPMs are separate from device-firmware TPMs (PDF p. 185 n.1121).

The Register specifically distinguished video-game consoles, where "access controls on gaming consoles protect not only the console firmware, but the video games and applications that run on the console as well" — that's an integrated-content case, voice assistants are not.

**Factor 5 — other factors (none additional).** PDF p. 186.

### What the Register declined

The "**enable or disable hardware features**" expansion was **denied** (PDF p. 175, 186, 187). The Register's reasons were narrowly procedural rather than substantive:

- Proponents called it a mere clarification ("the ability to enable or disable hardware features is inherent in the ability to install or remove software"), but did not actually develop a fair-use record for the activity as distinct from software install/remove.
- Joint Creators II declined to concede that hardware enable/disable is currently covered.
- No evidence of confusion or actual adverse effect from the absence of the language.
- "Without more information about the specific nature of the activity, the Acting Register cannot determine whether it requires a different fair use analysis from that applicable to jailbreaking as defined under the current exemption."

In short: **the request was killed by lack of evidentiary specificity, not by hostility to the underlying purpose.** That is a teachable failure mode.

## 3. The recommended class — and why it was structured as a *new* class, not an amendment

The Acting Register recommended granting the voice-assistant exemption as a **separate** class (which became `(b)(8)` in the 2018 Final Rule), not as an amendment to the existing smartphone class. The reason (PDF p. 186–187) is operationally important:

The voice-assistant class includes a new condition — circumvention must "not [be] accomplished for the purpose of gaining unauthorized access to other copyrighted works." The Acting Register did not want to retroactively impose that limitation on the already-renewed smartphone class, so the voice-assistant class was severed from the smartphone class. The Office signaled it might revisit alignment in the next rulemaking (PDF p. 187). It did not.

Final regulatory text (PDF p. 187):

> Computer programs that enable voice assistant devices to execute lawfully obtained software applications, where circumvention is accomplished for the sole purpose of enabling interoperability of such applications with computer programs on the device, **or to permit removal of software from the device**, and **is not accomplished for the purpose of gaining unauthorized access to other copyrighted works**. For purposes of this paragraph (b)(8), a "voice assistant device" is a device that is primarily designed to run a wide variety of programs rather than for consumption of a particular type of media content, is designed to take user input primarily by voice, and is designed to be installed in a home or office.

Note what's there and what's not: "**or to permit removal of software**" is in. This is the same removal-of-software language present in the smartphone class but absent from the smart-TV class. Voice assistants got it because EFF asked for it explicitly and developed a record around it (including specifically firewall installation and microphone disabling). Smart TVs in 2015 got the narrower interoperability-only formulation because SFC's record was framed around FLOSS-app installation. **That asymmetry is record-driven, not principled** — a future smart-TV petition with the right record could plausibly get the removal-of-software language added.

## 4. Lessons for an ACR-removal petition

A petition to authorize circumvention for the purpose of disabling ACR on smart televisions could draw substantially on the 2018 voice-assistant playbook. The fair-use factors and several `§ 1201(a)(1)(C)` factors look very similar.

### What is likely to work

- **Privacy as a creditable purpose.** The single most useful sentence in the 2018 Recommendation is the explicit credit given to privacy as a fair-use enhancement (PDF p. 173). A well-pitched ACR petition can cite that paragraph directly. `§ 1201(i)` exists in the background, but the 2018 record establishes that its existence does *not* foreclose a parallel rulemaking exemption — the Office granted one for voice assistants notwithstanding `§ 1201(i)`.
- **Fair use factors 1–4.** Smart-TV firmware is functional (factor 2); the modification needed is small (factor 3); firmware is sold with the device, no separate market (factor 4); and the purpose is the same interoperability-plus-privacy purpose the Office has credited for a decade (factor 1).
- **`§ 1201(a)(1)(C)` factor 1 (availability).** Manufacturers do not provide a "disable ACR" toggle that actually removes the capability (only marketing-level opt-outs whose efficacy is contested). A record showing that no realistic alternative exists is directly parallel to the HomePod analysis (PDF p. 178).
- **Separate-TPM evidence.** This was the *swing point* in 2018. A petition must show, with technical specificity, that streaming-service TPMs (Netflix, Disney+, HBO Max, etc.) are *separate* from the TPM protecting the firmware that ACR runs in. Without that showing, opponents will revive the RIAA piracy theory verbatim. The 2015 smart-TV Recommendation already credits this separation generally (cited at PDF p. 185 n.1121); a 2027/2030 record should make the showing concrete with current evidence.
- **Narrow, concrete activity.** EFF won on voice assistants partly by being specific: install a firewall, disable a microphone. A successful ACR petition should specify the activity at the same level of granularity: remove these specific binaries, disable these specific network endpoints, decline these specific server queries.

### What will fail without more

- **A vague "remove manufacturer software" framing.** This is exactly what killed the "enable or disable hardware features" half of the 2018 EFF proposal (PDF p. 175). The Register said almost in so many words: tell us specifically what you want to do and why, or we cannot analyze it.
- **Relying on the existing smart-TV class.** The current `(b)(10)` is interoperability-only and excludes "unauthorized access to other copyrighted works." ACR removal is software *removal*, which the regulation does not authorize for TVs. A petition must either (i) add "or to permit removal of software from the smart television" to `(b)(10)`, matching the voice-assistant/smartphone language, or (ii) carve out a new class specifically for telemetry/data-collection mitigation. Option (i) is the cleaner ask given existing precedent.
- **Underdeveloped evidence on piracy risk.** The opposition will argue that ACR-removal TPMs are entangled with streaming-content TPMs. The petitioner has to disprove that on a current technical record; the 2015/2018 abstract assurances will not satisfy a sophisticated 2027 opposition.

### A plausible regulatory ask

A drafting suggestion derived from the 2018 voice-assistant template:

> Computer programs that enable smart televisions to execute lawfully obtained software applications, where circumvention is accomplished for the sole purpose of enabling interoperability of such applications with computer programs on the smart television, **or to permit removal of software from the smart television**, and is not accomplished for the purpose of gaining unauthorized access to other copyrighted works. *(For comparison, current `(b)(10)` lacks the bolded clause.)*

That is the minimal language change that would unambiguously cover ACR removal under the existing analytic framework. The 2018 voice-assistant precedent is the natural authority.

## 5. Lessons for a doorbell-camera footage-redirection petition

A petition to authorize circumvention of a doorbell camera (Ring, Nest, Wyze, etc.) for the purpose of redirecting captured footage from the manufacturer's cloud server to a user-controlled server is **a harder case**, for reasons the 2018 record does not solve.

### Where the voice-assistant analogy *does* hold

- **Functional firmware, factor 2.** Doorbell firmware does exactly what voice-assistant firmware does — boots the device, controls hardware, allows applications. Same fair-use factor-2 analysis applies.
- **No separate firmware market, factor 4.** Same as voice assistants: firmware ships with device, updates are free.
- **Privacy as a creditable purpose.** Doorbell footage is among the most privacy-sensitive data a consumer produces. The 2018 Recommendation's privacy framing transplants well — arguably better than for voice assistants, because the data being protected is even more obviously sensitive (faces, neighbors, package deliveries, family activity).
- **No realistic alternative.** If the manufacturer's cloud is the only sink, and the manufacturer does not permit local storage or third-party servers, the "availability for use" analysis under factor 1 mirrors the HomePod scenario almost exactly.

### Where the analogy *breaks down*

- **The activity is not "interoperability of lawfully obtained software applications" or "removal of software."** It is **redirection of a data flow** — making the device do something different from what it was designed to do. Every existing jailbreaking class is framed around running a wide variety of *applications* on the device. Doorbells run essentially one application (the manufacturer's camera/streaming agent). The doctrinal hook of "I want to install third-party apps" is much thinner.
- **The Register has historically required a category that fits.** The 2018 record (PDF p. 169–170) shows opponents and the Register sparring over whether the proposed "voice assistant device" definition was overbroad. The Acting Register accepted proponents' narrowing. A doorbell category would face the same gatekeeping — and the existing categories ("voice assistant device," "smart television," "portable all-purpose mobile computing device," "home appliance or home system") do not naturally include doorbells. "Home appliance or home system" (`§ 201.40(b)(10)` in 2018, now `(b)(15)` in 2024) is a repair class, not a jailbreaking class, and it does not authorize redirection of data flows.
- **Manufacturer service-agreement entanglement.** Doorbell cloud features are typically tied to subscription services (Ring Protect, Nest Aware). Opponents will argue, by analogy to the RIAA's voice-assistant streaming-licensing argument, that redirecting the data flow disrupts a paid service relationship. The 2018 Register rejected this where the streaming TPMs were *separate* from the firmware TPM; doorbell architectures may not have that separation, because the manufacturer's app *is* the entire streaming chain.
- **The "copyrighted work" being made available is the *user's own footage*.** The `§ 1201(a)(1)(C)` framework is about whether circumvention enables noninfringing use of *other people's* copyrighted works that are gated by a TPM. The user's own video is the user's own copyright. The fit is awkward — the petitioner is asking for an exemption to enable use of a work that is not the subject of the TPM the petitioner is circumventing (the TPM protects the firmware, not the footage). The Register has accepted this kind of indirect fit before (e.g., medical-device data exemption, where the work being accessed is the patient's own data) — so the framework is bendable — but the analytic distance is greater than in the ACR or voice-assistant cases.
- **Oracle v. Google risk is higher.** *Oracle* concerns copying code "for substantially the same purpose for which it was designed" (PDF p. 172 n.1048). The Register read *Oracle* narrowly in 2018, but a doorbell-redirection use case more closely resembles using copied firmware for its intended purpose (operate the camera and stream the data) while changing the destination — which is harder to characterize as transformative than installing a third-party privacy firewall.

### What a doorbell petition would need to bring

Drawing on the 2018 record's pain points:

1. **A precisely defined device category** that excludes general-purpose computing devices, gaming consoles, set-top boxes, and devices already covered by other classes. Borrow the structure of the voice-assistant definition. Possible draft: *"a home security camera device, primarily designed to capture audio or video from a fixed location and to transmit that data to a remote storage location, that is intended to be installed in or on a home or office, and is lawfully acquired."*
2. **A specifically articulated noninfringing use** anchored in fair use plus privacy. Frame the activity as "enabling interoperability with the user's own storage or media infrastructure" — i.e., a parallel to smart-TV/voice-assistant jailbreaking for interoperability with the user's chosen software environment. That framing borrows from the favored-purpose precedent rather than asserting a brand-new rationale.
3. **A clean separation showing.** Demonstrate that the firmware TPM is technically distinct from any TPM protecting subscription services (e.g., neighborhood-watch feeds, premium-storage retention windows). If the manufacturer integrates them, the petition is much harder.
4. **A privacy record that mirrors the 2018 voice-assistant record.** Cite analogous press, regulator letters, and incidents where doorbell data was disclosed in ways users did not anticipate or consent to.
5. **A clear "not accomplished for the purpose of gaining unauthorized access to other copyrighted works" carve-out** baked into the proposed language from the start. The Register added this to the 2018 voice-assistant class as a precondition to granting; a doorbell petition that includes it preemptively removes opposition leverage.
6. **Explicit treatment of `§ 1201(i)`** — explain why it does not fully cover the activity (it almost certainly does not, because redirecting footage is not "the sole effect of identifying and disabling" a PII-collection capability). Voice-assistant proponents did this in 2018 (PDF p. 173 n.1050).

### Realistic odds

The voice-assistant record is the best available precedent and it goes most of the way for ACR. For doorbells, the same record goes perhaps half the way — the fair-use and privacy framing transplant well, but the underlying activity (data-flow redirection) is not jailbreaking-as-traditionally-understood, and the Register will likely view it as a more novel category requiring a stronger evidentiary case. A first petition would be a long shot; a second-cycle petition that incorporates the Register's feedback from a first denial would be more credible.

## 6. Drift across the 2021 and 2024 renewal cycles

Citations in this section are to the `.txt` extractions of the 2021 and 2024 Register's Recommendations, with `PDF p. N` referring to the `[PAGE N]` markers preserved in those files. Findings here were spot-verified against the source text.

### 6.1 Procedural drift — the streamlined-renewal track

Beginning in 2018, the Office formalized a **streamlined renewal process**: petitioners summarize the continuing need for an existing class and declare that "there ha[d] not been any material change in the facts, law, or other circumstances," and the class is renewed *as is* unless opponents file "meaningful opposition" sufficient to require fresh record development. 2021 Recommendation, PDF pp. 16–17.

In **2021**, *every* jailbreaking-family class — smartphones, tablets, smart TVs, voice assistants — was renewed via streamlined renewal in a single combined "F. Computer programs – jailbreaking" subsection (2021 Recommendation, PDF p. 29). **No oppositions were filed against any of them.** SFC and EFF supplied petitions; Consumer Reports filed a supporting comment.

In **2024**, the same happened: smartphones, smart TVs, voice assistants, **and** the 2021-vintage routers/dedicated-network-devices class were all renewed under "I. Computer programs—jailbreaking" (2024 Recommendation, PDF p. 36). Again, no oppositions.

This has a hard operational consequence for any future petitioner who wants to *modify* one of these classes (e.g., add "removal of software" to the smart-TV class to authorize ACR removal): **renewal "may be sought only for exemptions in their current form, without modification"** (2021 Recommendation, PDF p. 17). A petition that asks for new operative language is, by definition, a fresh proceeding — not a renewal — and the petitioner must build a full record under the original 2018-style framework. The fact that opponents have not bothered to oppose renewal of the existing classes does not signal weak opposition to an expansion; it signals that the existing language is uncontroversial *as written*.

### 6.2 Doctrinal drift — Warhol and Google v. Oracle

Two Supreme Court fair-use decisions postdate the 2018 voice-assistant analysis: *Google LLC v. Oracle America, Inc.*, 593 U.S. 1 (2021), reversing the Federal Circuit decision the 2018 Acting Register's footnote 1048 had distinguished; and *Andy Warhol Foundation for the Visual Arts v. Goldsmith*, 598 U.S. 508 (2023), which tightened the transformative-use analysis where a secondary use shares the same purpose as the original.

The **2024 Recommendation addressed both head-on** in the renewal of the repair classes (and by parity, the renewal of the jailbreaking classes), at PDF pp. 38–41:

> Because this analysis is part of the record that justified recommending the exemption in 2021, opponents needed to show that the *Warhol* decision constitutes intervening legal precedent rendering the Office's prior fair use analysis invalid. They have failed to do so. The *Warhol* decision does not substantially change how the Office would analyze the uses at issue in this exemption. ... *Warhol* therefore did not overrule [*Campbell* and *Google*], but rather built upon them.

(2024 Recommendation, PDF pp. 40–41.) The Office cited the Eleventh Circuit's post-*Warhol* denial of rehearing in *Apple Inc. v. Corellium, Inc.*, No. 21-cv-12835, 2023 U.S. App. LEXIS 22252, at *3 (11th Cir. Aug. 23, 2023), for the proposition that *Warhol* "did not affect" the transformativeness analysis or the "balance of the four factors" for functional-software use cases (PDF p. 41 n.178).

*Google v. Oracle* is now affirmatively in the Office's fair-use toolkit: the 2024 Recommendation quotes it for the proposition that "the word 'transformative' . . . describe[s] a copying use that adds something new and important" (PDF p. 41, citing *Google*, 593 U.S. at 29–30).

**Bottom line for a future petitioner:** The doctrinal weather has *not* turned against jailbreaking-class petitions. The opponents' best post-2018 case — *Warhol* — has been considered and dismissed by the Office for functional-software contexts. The petitioner's best post-2018 case — *Google v. Oracle* — has been adopted by the Office in jailbreaking-adjacent analysis. The fair-use prong of any new ACR or doorbell petition has *more* doctrinal support in 2024 than it did in 2018, not less.

### 6.3 Substantive drift — the 2024 vehicle-data class as a template

The single most useful new precedent for a doorbell-redirection petition is **2024 Proposed Class 7 (Vehicle Operational Data)**, codified at `§ 201.40(b)(14)`. It is the first §1201 class that authorizes circumvention for the express purpose of "**access[ing], stor[ing], and shar[ing] operational data, including diagnostic and telematics data**" — i.e., for a *data access and portability* purpose distinct from interoperability, repair, or software removal.

How the Register reached fair use on the new purpose (2024 Recommendation, PDF pp. 205–211):

- **Factor 1 (purpose and character).** Proponents (MEMA, joined by SEMA, DOJ Antitrust, and the FTC) framed the activity as "non-commercial or not primarily commercial" personal use to "derive new insight and understanding about their own driving habits and vehicle performance," adding "something new, with a further purpose [or] different character" (PDF pp. 206–207). The Register agreed: "the proposed uses serve a different purpose than the copyrighted works and are either non-commercial or not primarily commercial in nature" (PDF p. 207). The pre-existing favored-purpose case law (*Sega*, *Connectix*, *Google v. Oracle*) carried over to a non-interoperability use.
- **Factor 2.** Standard functional-firmware analysis: vehicle software is "a functional work used for the limited purpose of operating a vehicle, rather than a creative work with expressive or artistic value" (PDF p. 207).
- **Factor 3.** Minimal copying, as in the prior jailbreaking analyses (PDF p. 209).
- **Factor 4.** No separate market for the firmware (PDF p. 209).

The Register handled OEM privacy objections **on the merits**, crediting DOJ Antitrust and FTC's view that "neither consumers nor independent repair shops are more or less responsible than OEMs in protecting data privacy" (2024 Recommendation, PDF p. 215). Safety, private-contract, and regulatory-compliance objections were sidelined as "beyond the scope of this rulemaking" (PDF p. 215), but privacy itself was reached substantively and resolved in the proponents' favor. The Office did **not** retreat from the 2018 framing of privacy as a creditable consideration; it sustained it under a different doctrinal label (factor 1 transformativeness + factor 4 no market harm), with new agency-input support (DOJ/FTC) that was not in the 2018 record.

The codified language adds two conditions:

> Computer programs that are contained in and control the functioning of a lawfully acquired motorized land vehicle or marine vessel ..., **except for programs accessed through a separate subscription service**, to allow vehicle or vessel owners and lessees, or those acting on their behalf, to access, store, and share operational data, including diagnostic and telematics data, **where such circumvention is not accomplished for the purpose of gaining unauthorized access to other copyrighted works**.

(2024 Final Rule, `§ 201.40(b)(14)`.) The "separate subscription service" carve-out and the "no unauthorized access to other copyrighted works" carve-out are now boilerplate the petitioner can expect across all device classes — and which a petitioner can include preemptively to defuse opposition.

### 6.4 Updates to the ACR and doorbell analyses above

- **For the ACR petition (Section 4 above):** the *Warhol*/*Google* discussion in 2024 strengthens the petitioner's fair-use position. The streamlined-renewal context confirms that adding "removal of software" to the smart-TV class is a *fresh-petition* request, not a renewal, and must be supported by a full record.
- **For the doorbell petition (Section 5 above):** the 2024 vehicle-data class is now the closest existing analog — closer than the voice-assistant class. The successful framing was: "non-commercial personal access to data the owner generates on the device, using firmware that is functional and minimally copied, with no separate firmware market." A doorbell petition that mirrors this framing (own footage, own home, own use) has a clearer doctrinal hook than was available in 2018. DOJ/FTC support, if the petition can attract it, is a recent and powerful evidentiary pattern. The remaining hard issue — whether "redirecting" footage to a user-controlled server fits within "access, store, and share" framing — is bridgeable: the 2024 class language *expressly* authorizes "sharing" of data, which is conceptually the same act as redirecting it to a server of the owner's choice.

## 7. Caveats

- This is analysis of the rulemaking record, not legal advice.
- `§ 1201(f)` (reverse-engineering for interoperability) is the unresolved background statutory provision the Register flagged in 2018; depending on its evolution in case law, it could either supersede or supplement a rulemaking petition for any of these activities. The 2021 and 2024 Recommendations did not change that posture.
- Section 6 above is verified against the 2021 and 2024 source text. The 2024 Office's treatment of *Warhol* was not addressed *as to* the jailbreaking classes specifically — the analysis appears in the renewal of the repair classes — but because all the jailbreaking classes were renewed in the same procedural posture and rely on substantially the same fair-use record, the *Warhol* analysis is most reasonably read to apply across both families. A petitioner relying on this should re-verify in the next cycle's record.
