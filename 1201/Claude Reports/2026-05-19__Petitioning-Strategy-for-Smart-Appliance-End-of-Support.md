# Petitioning the Copyright Office for a smart-appliance "end-of-support" exemption — what the record teaches

**Date:** 2026-05-19
**Companion to:** [`2026-05-19__Voice-Assistant-2018-Class-and-Lessons-for-ACR-and-Doorbell-Petitions.md`](2026-05-19__Voice-Assistant-2018-Class-and-Lessons-for-ACR-and-Doorbell-Petitions.md) and [`2026-05-19__Smart-TV-Jailbreaking-and-ACR-Removal.md`](2026-05-19__Smart-TV-Jailbreaking-and-ACR-Removal.md), both of which inform Sections 2–4 below.

This report synthesises the §1201 rulemaking record from 2000 through 2024 to answer: how should one petition the Register of Copyrights for an exemption permitting consumers to circumvent TPMs on smart home appliances — thermostats, doorbells, locks, hubs, fridges — in order to keep using those devices after the manufacturer ends cloud-side or server-side support?

All citations are to PDF page markers (`[PAGE N]`) in the `.txt` extractions under `1201/Reg Recommendation/`. Every quoted phrase was verified by `grep` against the source file before inclusion. This is not legal advice.

---

## 1. The gap to be filled

The existing §201.40(b)(15) "consumer devices" repair exemption (2024 Final Rule) covers diagnosis, maintenance, and repair only, and defines both verbs against the device's **"original specifications and any changes to those specifications authorized for that device"** (`2024-Final-Rule.txt` PDF p. 11). That language — borrowed from 17 U.S.C. § 117(d) — is exactly what blocks a Revolv-style fix: if the manufacturer has shut down the cloud the device was designed to talk to, restoring "original specifications" no longer restores function. You need either (a) the right to **modify** the device to point at a user-controlled or third-party endpoint, or (b) the right to **install/remove software** that bypasses the cloud dependency, or both.

The Office has granted analogous rights elsewhere — vehicles get "modification of a vehicle function" (b)(13); voice assistants get "removal of software" (b)(11); video games get a server-abandonment trigger (b)(19). It has not yet stitched these together for general consumer appliances. The petitioning question is whether and how it can be persuaded to do so.

---

## 2. Lessons from successful precedents

### 2.1 The 2015 motorized-vehicle class — the only "modification" win for consumer devices

The vehicle repair exemption is the only one in the entire repair line that contains the word **"modification."** The 2015 Register adopted it because (a) opposition itself conceded "there is no separate market for the computer programs and other works at issue here aside from the vehicle in which they are embedded" (`2015_…Recommendation.txt`, Class 21, with auto-industry concession quoted in the discussion); (b) ECU code was found "essentially functional" with weak copyright interest; and (c) the term was cabined to **"lawful modification of a vehicle function"** — a textual limit that excludes derivative-work-style modifications.

The cabin matters more than the noun. In 2018 the Acting Register expressly declined to grant generalized modification because **"'modification' has not been defined with sufficient precision here"** (`2018_…Recommendation.txt` PDF p. 211). In 2021 the same point was sharpened: *"While it is true that the current exemption for repair of motor vehicles encompasses certain modifications, that language is expressly limited to 'lawful modification of a vehicle function.' Proponents have offered no analogous language to cabin the scope of the modifications contemplated here"* (`2021_…Recommendation.txt` PDF p. 209). That sentence is an explicit invitation: write the cabin.

### 2.2 The 2015 video-game server-abandonment trigger — the "manufacturer abandoned" template

The Office has accepted one and only one general "abandonment" trigger: the 2015 video-game preservation class. The trigger is a two-prong test proposed by EFF/Kendra Albert and adopted verbatim: *"either the developer has announced the end of server support, or there has been no server support for a period of at least six months"* (`2015_…Recommendation.txt` PDF p. 354). The codified text also includes a **restoration clause** — "provided, however, that server support has not since been restored." The six-month period was proposer-supplied, not Register-imposed; ESA opposed on piracy grounds but did not contest the duration. The trigger language has been carried forward unchanged through 2018, 2021, and 2024.

This is the single closest structural precedent for a smart-appliance petition. A petition should propose the same two-prong test, lightly modified for cloud-service shutoff, with the same restoration clause.

### 2.3 The 2003 "obsolete dongle" class — § 108(c) language for unavailability

Although the dongle class lapsed after 2010 from non-participation (`2018_…Recommendation.txt` PDF p. 237 fn. 1444), it established the Office's preferred phrasing for unavailability: *"a [dongle] shall be considered obsolete if [it] is no longer manufactured or is no longer reasonably available in the commercial marketplace"* (`2003_…Recommendation.txt` PDF p. 40). That formulation, drawn from 17 U.S.C. § 108(c), reappears across cycles — most recently in the 2018 software-preservation class for libraries: *"no longer reasonably available in the commercial marketplace"* (`2018_…Recommendation.txt` PDF p. 258). A smart-appliance petition can borrow the same phrasing to describe when the manufacturer's cloud service should be treated as unavailable.

### 2.4 The 2018 voice-assistant class — privacy + interoperability as winning purposes

Per the companion voice-assistant report, the 2018 Acting Register tipped the fair-use analysis on **interoperability** and, crucially, on **privacy**, citing § 1201(i) as evidence that *"the protection of privacy is a purpose for which circumvention may be warranted under appropriate circumstances"* (`2018_…Recommendation.txt` line 7430, fair-use factor 1 discussion). The voice-assistant petition also raised longevity as a third purpose — *"jailbreaking will enable users to continue using voice assistant devices even if the manufacturer discontinues server support, thereby extending the useful life of such devices and mitigating the environmental impact of electronics waste"* (`2018_…Recommendation.txt` PDF p. 168) — but the Acting Register's reasoning did **not** rely on longevity. Privacy and interoperability did the work; longevity was redundant cover.

**Implication:** an end-of-support smart-appliance petition that leans solely on longevity/e-waste is riding on a purpose the Office has not yet treated as independently sufficient. The petition needs to ride on credited purposes — privacy (turn off always-on telemetry that the manufacturer no longer secures), interoperability (talk to a user-controlled server), and repair-extension — with longevity as supporting context, not the load-bearing fair-use argument.

### 2.5 The 2024 commercial food-prep equipment class — a current-cycle playbook

The most recent grant of a fresh repair class (`2024-Final-Rule.txt` (b)(16); analysis at `2024_…Recommendation.txt` PDF pp. ~140–162) shows the modern winning recipe:

- **Index examples.** Public Knowledge / iFixit submitted four discrete sub-categories with named manufacturers and models.
- **The Kytch / McDonald's narrative.** *Kytch, Inc. v. McDonald's Corp.*, No. 3:23-cv-01998 (N.D. Cal.) was cited as concrete evidence of the harm and of TPM-driven barriers (`2024_…Recommendation.txt` line 6261, in the food-prep discussion). A specific lawsuit beats abstract assertion.
- **DOJ Antitrust + FTC joint reply comment.** *"Expanding options for repair of software-enabled commercial and industrial devices can facilitate restoration of these devices' functionality — extending the useful life of commercial and industrial devices as well as increasing availability of the device software itself"* (`2024_…Recommendation.txt` PDF p. 162, quoting DOJ Antitrust & FTC Class 5 Reply at 13). The Office quoted this approvingly. Federal-agency comments are now a high-value record component.
- **Specific TPM mechanics.** The petition described error codes locked behind TPMs, manufacturer-only diagnostic tools, and "extended, undocumented combination[s] of key presses." Engineering specificity beats generalities.

The "useful life" phrase itself appears in the Register's own reasoning across cycles: 2018 PDF p. 224 (*"the proposed uses extend the useful life of the devices by facilitating repair and restoration of device functionality"*), 2021 PDF p. 218 (same locution), and 2024 PDF p. 162. It is Office-endorsed language to use in framing.

---

## 3. Lessons from failures and narrow grants

### 3.1 Vague class definitions get cut down — every time

- **2012 tablets denied.** The Register found *"the contours of this aspect of the proposed class are broad and ill defined"* — an ebook reader, a handheld game device, or a laptop could all be a "tablet" (`2012_…Recommendation.txt` PDF p. 81). EFF's request lost on scope, not on substance.
- **2018 "all software-enabled devices" denied.** The Acting Register cut a generalized proposal down to home appliances, smartphones, and vehicles because *"the rulemaking record lacks a minimum quantity of evidence for a broad panoply of the devices that proponents reference."*
- **2024 commercial/industrial equipment.** Public Knowledge / iFixit asked for the full sweep; the Register granted only retail-level food-prep equipment, denying construction equipment, PLCs, and enterprise IT for evidentiary thinness.

**Implication:** define "smart home appliance" with precision. The voice-assistant definition is the template — designed primarily for a non-content-consumption purpose, designed to be installed in a home, designed to communicate with a remote service. Spell out exclusions: not a game console, not a set-top box, not a DVR, not a media player. Provide a model-by-model index (Revolv, Wink Hub, Insteon, Lowe's Iris, Best Buy Connect, Logitech Harmony Link, Pebble watch, Jibo, Spotify Car Thing, Anova Precision Cooker first-gen, etc.).

### 3.2 "Modification" without a § 117-style cabin loses

The 2018 and 2021 denials of modification rights for consumer devices are paired procedural rejections, not substantive. The 2021 Register wrote: *"Unlike diagnosis, maintenance, and repair, which have been defined for software-enabled devices in this rulemaking partly by drawing on definitions in section 117, 'modification' is undefined by statute. … Proponents have offered no analogous language to cabin the scope of the modifications contemplated here"* (`2021_…Recommendation.txt` PDF p. 209). The Aibo robotic-dog and PlayStation 3 examples from EFF's 2018 brief poisoned the well — ORI's own counsel conceded the Aibo modification "could be creating a derivative work."

**Implication:** any "modification" right in the petition must be statutory-style cabined. Something like:

> *"lawful modification of a device function that is necessary to restore or preserve operation of the device following discontinuation of manufacturer-provided remote services on which the device's operation depends, where such modification does not enable access to other copyrighted works."*

Two § 117-style limits are doing the work: (a) restoration/preservation purpose, (b) the operative TPM/service must be the one whose absence breaks the device.

### 3.3 The Revolv example was explicitly rejected — read this carefully

At the 2018 hearings, Kyle Wiens cited Revolv (a smart-home hub bought by Nest and shut down) as evidence of consumer harm. The Acting Register **rejected the example**:

> *"In the Revolv example, it is not clear whether any security provider allows its customers to obtain service through a device provided by another company, or whether such providers instead require use of their own hardware … any adverse effect is the product of those policies or technical limitations, not section 1201"* (`2018_…Recommendation.txt` PDF p. 161).

This is the single most important cautionary precedent for an end-of-support petition. The Office requires a **causation** showing: it is not enough that the device stops working when the manufacturer leaves. The petitioner must establish that **§ 1201's TPM** — not the manufacturer's contractual policy, not raw technical impossibility — is the proximate cause of the inability to keep using the device. The petition record must therefore include, for each named device, a technical analysis showing:

1. A TPM in the firmware prevents redirection to a user-controlled or third-party endpoint.
2. Circumvention of that TPM is technically feasible.
3. Post-circumvention, a feasible alternative service or local mode exists (open-source firmware available, well-documented protocol, etc.).

Without (3) in particular, the Office will say § 1201 is not the cause.

### 3.4 The "enable/disable hardware features" denial — frame the activity in credited verbs

The 2018 Acting Register denied EFF's request to expand voice-assistant jailbreaking to "enable or disable hardware features": *"Without more information about the specific nature of the activity, the Acting Register cannot determine whether it requires a different fair use analysis from that applicable to jailbreaking as defined under the current exemption."* The denial was procedural — not enough record on the distinct activity — but it teaches that the Office wants requested activities described in **terms it has already credited**: install third-party application, remove pre-installed manufacturer software, interoperate with user's own server. Avoid framings like "disable hardware" that the Office has not yet endorsed.

### 3.5 The console-piracy line — firmware-TPM separation matters

The 2012 and 2015 Recommendations denied video-game-console jailbreaking on the rationale that *"the circumvention of console restrictions — even when initially undertaken for salutary purposes — is inextricably linked to and tends to foster piracy"* (`2015_…Recommendation.txt` PDF p. 203). The distinguishing principle from the 2015 smart-TV analysis: console firmware-TPMs protect both the console software and the games and applications running on it — they are **entangled** with content TPMs. Smart-TV firmware TPMs were treated as **separate** from streaming-service TPMs (Hulu, Netflix have their own login/DRM stack server-side).

**Implication for smart appliances:** affirmatively show that the appliance's firmware TPM is **separate** from any content/subscription TPMs. Most home appliances (thermostats, doorbells, locks) do not carry licensed expressive content at all, so this should be straightforward — but the showing must be made explicitly, with examples, to preempt the console analogy.

### 3.6 Enterprise IT lost on abandonment-record thinness in 2024 — the most recent statement of the bar

In 2024, FreeICT USA testified that manufacturers "abandon" enterprise IT equipment at end-of-service-life. The Register denied the request: *"Proponents' general assertions about enterprise IT equipment failures are insufficiently supported by examples and documentary evidence"* (`2024_…Recommendation.txt` enterprise IT discussion). Anecdotal abandonment loses; **documented cases of users who tried and failed to get manufacturer service** win. The food-prep class won on exactly that record structure — named manufacturers, named failure modes, a lawsuit, federal-agency endorsement.

---

## 4. Recommended petitioning strategy

Putting the above together, a smart-appliance end-of-support petition should be built around these elements:

### 4.1 Class definition

A narrow, precise definition modeled on the 2018 voice-assistant text:

> *"Computer programs that are contained in and control the functioning of a lawfully acquired smart home device — meaning a device that is primarily designed to perform a household function (such as climate control, lighting, security, kitchen appliance operation, or domestic monitoring), is designed for installation in a residence, and depends in normal operation on communication with a remote service operated by or on behalf of the manufacturer."*

With explicit exclusions: no game consoles, no set-top boxes, no media players, no general-purpose computers, no smartphones (covered by (b)(9)), no voice assistants (covered by (b)(11)), no routers (covered by (b)(12)).

### 4.2 Triggering condition

Adopt the 2015 video-game two-prong test, lightly adapted:

> *"For purposes of this paragraph, manufacturer support shall be considered discontinued where (i) the manufacturer or its successor has affirmatively announced the end of the remote services on which the device's operation depends, or (ii) such remote services have been non-functional for a continuous period of at least six months; provided, however, that this exemption shall not apply where such services have since been restored and remain available."*

Belt-and-braces overlay borrowing the 2003 § 108(c) phrasing:

> *"and no equivalent service is reasonably available in the commercial marketplace from the manufacturer, its successor, or an authorized third party."*

### 4.3 Authorized activity

Three verbs, each with its own justification:

1. **Diagnosis, maintenance, and repair** — already permitted under (b)(15); restate to confirm coverage.
2. **Installation of third-party software** — modeled on smartphone (b)(9) and voice-assistant (b)(11), justified by the *Sega*/*Sony Computer Entm't v. Connectix* interoperability line.
3. **Removal of manufacturer software** — modeled on voice-assistant (b)(11), justified by privacy (1201(i) credit) and by interoperability.
4. **Modification of a device function necessary to restore or preserve operation** — modeled on vehicle (b)(13)'s "lawful modification of a vehicle function," with the cabin language proposed in § 3.2 above.

### 4.4 Standard carve-outs (now boilerplate)

- *"is not accomplished for the purpose of gaining unauthorized access to other copyrighted works"* — 2018 voice-assistant and 2018 home-appliance text.
- *"except for programs accessed through a separate subscription service"* — 2018 vehicle text.

### 4.5 Record elements (the petitioner playbook)

- **An index of named, abandoned devices** with shutdown dates and model numbers (Revolv, Insteon, Wink, Lowe's Iris, Best Buy Connect, Jibo, Logitech Harmony Link, Pebble, Spotify Car Thing — and any post-2024 additions). Mirror EFF/Albert's 2014 game-server appendix from the 2015 video-game record.
- **For each device, three technical exhibits:** (i) the TPM that blocks redirection, (ii) the feasibility of circumvention, (iii) the existence of a feasible alternative (open-source firmware, documented protocol, community-maintained server). This is the Revolv-causation showing.
- **Concrete user-loss declarations** — owners who can describe the functionality they lost when the cloud went dark. The 2015 video-game record used "John Doe" declarations; the same technique is available.
- **Federal-agency endorsements.** DOJ Antitrust + FTC, NTIA, and state AGs (28 supported repair in 2024) are the Office's preferred sources. A smart-appliance petition should solicit comments from the same actors. EPA endorsement on e-waste grounds would be novel and high-value.
- **Privacy framing.** Recruit Senator letters (the 2018 Flake–Coons letter to Amazon was cited approvingly in the voice-assistant analysis) and current privacy researchers to document the specific harms of un-patched, manufacturer-abandoned devices that continue to phone home.
- **Cabined-modification proposal in the operative text.** This is the single most important drafting move — directly address the 2021 Register's missing-cabin objection in the proposed language itself.

### 4.6 Coalition

Repeat repair-side participants the Office has credited: EFF, iFixit, Public Knowledge, Repair Association, SecuRepairs, Consumer Reports, U.S. PIRG, FSF, SFC. New voices worth recruiting: a major insurer concerned with home-security-device abandonment; a state attorney general's office (NY, CA, MA, WA have all signed onto repair); a homeowners' association; a sustainability/e-waste research group. Industry support (e.g., an aftermarket smart-home services provider analogous to the auto Aftermarket community) would be the strongest possible record signal.

### 4.7 Opposition to expect

The 2024 record names the players. **AHAM (Association of Home Appliance Manufacturers)** specifically opposed the appliance scope in 2024 (`2024_…Recommendation.txt` line 5600 ff.) — this is the leading industry voice to anticipate. Joint Creators I (the rights-holder coalition) will object on derivative-work grounds; the 2018 PlayStation/Aibo experience shows their playbook. ACT | The App Association will object on developer-economics grounds. ESA may file if the class is at risk of sweeping in any game-console-adjacent device — keep the definition narrow to neutralize this.

---

## 5. Risks and open questions

- **The longevity-only theory has never been the basis for a grant.** Privacy and interoperability were what carried voice assistants in 2018. A petition that depends primarily on longevity/e-waste is testing untrodden ground. Pair it with privacy (post-abandonment security-vulnerability harms) and interoperability (third-party server redirection).
- **Causation is the hardest single element.** The Revolv rejection (`2018_…Recommendation.txt` PDF p. 161) is the controlling precedent. Without a per-device technical showing that § 1201 is the *but-for* cause of the inability to keep using the device, the petition fails on factor-1 of the § 1201(a)(1)(C) analysis regardless of how sympathetic the consumer-harm story is.
- **The six-month period is contestable.** It came from EFF's proposal in 2015 and was not interrogated by the Office. Manufacturers may push back ("six months is too short — cloud services have outages") and the Office has no analytical commitment to that specific number outside the video-game context. Be prepared to justify it on its merits for the smart-home context.
- **The petition cannot lean on § 108.** That statute is for libraries/archives; consumers cannot borrow it. Fair use must do all the work, which means the four-factor analysis needs to be developed independently for each authorized activity.
- **Renewal vs. fresh class.** Smart-appliance modification language is new; this is a fresh class proceeding, not a renewal. That means one full record-development cycle to get the operative language right. If language is omitted from the granted class, it cannot be added during renewal cycles (the 2021 Office made this rule explicit: *"renewal may be sought only for exemptions in their current form, without modification"*). Bundle every needed ask into the initial petition.

---

## 6. What this archive does and does not contain

This analysis draws solely on the §1201 rulemaking record (Final Rules and Register's Recommendations, 2000–2024) housed in this archive. It does **not** draw on court opinions (other than as cited within the rulemaking record), the Copyright Act text itself, the Copyright Office's stand-alone §1201 Report (2017), the §117 software-utilization caselaw, FTC/state right-to-repair litigation, or EPA e-waste regulation. A complete petition will need to ground itself in those sources as well. This report identifies the rulemaking strategy; it does not replace petition drafting.

Not legal advice; this documents what the rulemaking record says.

---

## 7. Quick checklist for petition drafters

- [ ] Class defined narrowly with explicit exclusions
- [ ] Two-prong abandonment trigger with restoration carve-back
- [ ] § 108(c) "no longer reasonably available" overlay
- [ ] Cabined "modification" verb tied to restoration/preservation purpose
- [ ] Removal-of-software verb justified on privacy + interoperability
- [ ] Standard two boilerplate carve-outs ("other copyrighted works"; subscription services)
- [ ] Per-device technical exhibits: TPM identified, circumvention feasible, alternative service exists (the Revolv-causation showing)
- [ ] Numbered owner declarations of post-abandonment loss
- [ ] DOJ Antitrust + FTC + NTIA + state AG solicitation
- [ ] Privacy-researcher and security-researcher record
- [ ] Affirmative firmware-TPM / content-TPM separation showing
- [ ] No PlayStation/Aibo-style examples in the brief
