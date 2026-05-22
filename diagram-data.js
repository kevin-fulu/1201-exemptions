// Data for diagram.html — the DMCA §1201 exemptions/denials matrix.
// Generated from the previous static-HTML diagram.html; edit this file to
// change the diagram. Loaded by diagram.html via <script src>.
//
// Shape:
//   cycles  : the nine triennial cycle years.
//   matrix  : ordered rows of the matrix table. Each entry is either
//             { type:"category", label, denialCategory? } or
//             { type:"exemption"|"denial", id, name, summary, summaryTitle, cells[9] }.
//             A cell is { status, classNum?, label, note?, partial? }.
//   details : ordered entries of the per-exemption details section. Each is
//             { type:"h3", text } or
//             { type:"detail", id, name, tagKind, tag, summaryRow, timeline[], evo? }.
//   A matrix row and its detail block share the same `id`.
//   summaryRow / timeline / evo are HTML fragments (kept verbatim, inserted raw);
//   all other strings are plain text and are HTML-escaped on render.
window.DMCA1201_DIAGRAM = {
  "cycles": [
    2000,
    2003,
    2006,
    2010,
    2012,
    2015,
    2018,
    2021,
    2024
  ],
  "matrix": [
    {
      "type": "category",
      "label": "Filtering & Internet Content"
    },
    {
      "type": "exemption",
      "id": "filtering-software-block-lists",
      "name": "Filtering software block-lists",
      "summary": "Circumvent TPMs on lists of websites blocked by content-filtering software.",
      "summaryTitle": "Circumvent TPMs on compilations of websites / Internet locations blocked by filtering software, to study or analyze the block-list contents.",
      "cells": [
        {
          "status": "new",
          "classNum": "b(1)",
          "label": "new",
          "note": "2000 (b)(1) — first DMCA §1201 cycle; one of two classes granted."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(1)",
          "label": "renewed",
          "note": "2003 (b)(1) — renewed; refined to 'lists of Internet locations blocked'."
        },
        {
          "status": "not_renewed",
          "label": "dropped",
          "note": "2006 — renewal petition filed but DENIED (B.1) as having no factual showing. Effectively dropped."
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "category",
      "label": "Legacy Access Controls (Obsolete or Broken)"
    },
    {
      "type": "exemption",
      "id": "literary-works-with-malfunctioning-obsolete-access-controls",
      "name": "Literary works with malfunctioning/obsolete access controls",
      "summary": "Circumvent broken/obsolete TPMs on literary works incl. programs & databases.",
      "summaryTitle": "Broad first-cycle grant subsumed in 2003 into more specific dongle and obsolete-format classes.",
      "cells": [
        {
          "status": "new",
          "classNum": "b(2)",
          "label": "new"
        },
        {
          "status": "not_renewed",
          "label": "dropped",
          "note": "Replaced by narrower successor classes."
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "obsolete-dongles",
      "name": "Obsolete dongles",
      "summary": "Circumvent broken/obsolete hardware dongles guarding programs.",
      "summaryTitle": "Circumvent obsolete/broken hardware dongles guarding lawfully obtained computer programs.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(2)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(3)",
          "label": "renewed",
          "note": "2006 (b)(3) — renewed unchanged. PARTIAL DENIAL: a request to expand the class to cover broader incompatibilities/obsolete OS/hardware was rejected as procedurally untimely (made for the first time at the hearing).",
          "partial": true
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(5)",
          "label": "renewed"
        },
        {
          "status": "not_renewed",
          "label": "dropped",
          "note": "2012 — not renewed. Legacy dongle problem became historical."
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "computer-programs-games-in-obsolete-formats",
      "name": "Computer programs/games in obsolete formats",
      "summary": "Programs/games in obsolete formats. Narrowed in 2006 to LAM preservation.",
      "summaryTitle": "Conceptually revived as the separately-tracked software-preservation-lams class in 2018.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(3)",
          "label": "new"
        },
        {
          "status": "renewed_narrowed",
          "classNum": "b(2)",
          "label": "narrowed"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped",
          "note": "The 2018 'software-preservation-lams' class (b)(13) is conceptually related but tracked separately."
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "category",
      "label": "Accessibility"
    },
    {
      "type": "exemption",
      "id": "literary-works-electronic-accessibility-musical-notation-added-2021",
      "name": "Literary works (electronic) — accessibility (musical notation added 2021)",
      "summary": "Read-aloud / screen-reader / assistive-tech access for blind & print-disabled users.",
      "summaryTitle": "Circumvent TPMs that block read-aloud / interfere with screen readers, for blind/disabled users or authorized entities under 17 U.S.C. 121. Expanded in 2021 to include previously published musical notation.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(4)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(4)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(6)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(1)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(2)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(3)",
          "label": "renewed"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(6)",
          "label": "expanded",
          "note": "2021 (b)(6) — expanded: adds 'previously published musical works fixed in text or notation' (musical notation); terminology updated to 'eligible person' (post-Marrakesh)."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(6)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "motion-pictures-captioning-and-audio-description-by-educational-disability-services",
      "name": "Motion pictures — captioning & audio description by educational disability services",
      "summary": "Caption / audio-describe motion pictures for students, faculty, or staff (2021+) with disabilities.",
      "summaryTitle": "Educational disability services may circumvent CSS/AACS/digital TPMs to caption/audio-describe motion pictures.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(2)",
          "label": "new"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(2)",
          "label": "expanded",
          "note": "2021 (b)(2) — expanded to students+faculty+staff; adds 'fair market price' standard; adds explicit reuse permission; adds 'accessible version of sufficient quality' definition."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(2)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "motion-pictures-r-and-d-of-accessibility-players-blind-deaf-hoh",
      "name": "Motion pictures — R&D of accessibility players (blind/deaf/HoH)",
      "summary": "R&D of accessibility-enhanced motion-picture players.",
      "summaryTitle": "Circumvent CSS/online-distribution TPMs for R&D of accessibility-enhanced players. Resulting player must not itself require circumvention.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(8)",
          "label": "new"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "video-games-accessibility-input-methods-for-physical-disabilities",
      "name": "Video games — accessibility input methods for physical disabilities",
      "summary": "Alternative input methods for physically disabled video-game players (PC only).",
      "summaryTitle": "Circumvent video-game TPMs (PC only) for non-keyboard/non-mouse input methods for users with physical disabilities.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(21)",
          "label": "new"
        },
        {
          "status": "not_renewed",
          "label": "no petition",
          "note": "2024 — NO RENEWAL PETITION WAS FILED (per 2024 Final Rule [PAGE 2] n.21). Class lapsed without opposition or denial."
        }
      ]
    },
    {
      "type": "category",
      "label": "Audiovisual Use (Criticism, Comment, Education)"
    },
    {
      "type": "exemption",
      "id": "motion-pictures-short-clips-for-criticism-comment-and-educational-uses",
      "name": "Motion pictures — short clips for criticism, comment, & educational uses",
      "summary": "Short clips from DVDs/Blu-ray/digital for criticism, comment, documentary, noncommercial video, K-12/college/MOOC/digital-literacy education.",
      "summaryTitle": "Make short clips from DVDs/Blu-ray/digital sources for criticism, comment, documentary, noncommercial video, e-book film analysis, K-12/college/MOOC/digital-literacy education.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(1)",
          "label": "new",
          "note": "2006 (b)(1) — first granted; originally limited to film/media studies professors."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(1)",
          "label": "expanded"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(4-7)",
          "label": "expanded",
          "note": "2012 — class expanded to 4 sub-classes (DVD/online × full-circ/screen-cap); added K-12 educators and multimedia e-books. PARTIAL DENIAL: short-clip circumvention for fictional filmmakers was denied (noninfringing use not shown).",
          "partial": true
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(1)",
          "label": "expanded"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(1)",
          "label": "expanded"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(1)",
          "label": "expanded"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(1)",
          "label": "renewed",
          "note": "2024 — class renewed unchanged. PARTIAL DENIALS: (1) OTW's proposed rewrite of the noncommercial-videos subpart was denied (no record/evidence); (2) the proposed MOOC-subpart expansion to for-profit and unaccredited educational entities was denied (noninfringing use not shown).",
          "partial": true
        }
      ]
    },
    {
      "type": "denial",
      "id": "space-shifting-format-shifting-audiovisual-musical-literary",
      "name": "Space-shifting / format-shifting (audiovisual, musical, literary)",
      "summary": "Shift lawfully-acquired works to other devices/formats. Denied: not noninfringing.",
      "summaryTitle": "Recurring proposal to permit users to shift lawfully-acquired works to alternative devices, formats, or platforms. Repeatedly denied because Register has not found space-shifting to be a noninfringing use.",
      "cells": [
        {
          "status": "petitioned_denied",
          "classNum": "E.3",
          "label": "denied",
          "note": "2000 (Proposal E.3 partial) — denied as 'alternatives available' (analog format)."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.8,15",
          "label": "denied",
          "note": "2003 (Classes 8 + 15) — denied: space-shifting not shown to be noninfringing use."
        },
        {
          "status": "petitioned_denied",
          "classNum": "B.2",
          "label": "denied",
          "note": "2006 (B.2) — denied: no legal precedent that space-shifting is noninfringing."
        },
        {
          "status": "petitioned_denied",
          "classNum": "IV.A",
          "label": "denied",
          "note": "2010 (IV.A.1) — denied: mere consumer inconvenience."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.10",
          "label": "denied",
          "note": "2012 (Class 10) — denied: no adverse impact on noninfringing uses shown."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.8,10",
          "label": "denied",
          "note": "2015 (Classes 8 + 10) — denied: 'the law of fair use, as it stands today, does not sanction broad-based space-shifting or format-shifting.'"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.3",
          "label": "denied",
          "note": "2018 (Class 3) — denied: no basis to depart from 2015 fair-use analysis."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.6",
          "label": "denied",
          "note": "2021 (Class 6) — denied: petitioner failed to provide legal arguments or evidence."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "dvd-region-coding-and-os-tethered-playback-linux-dvd",
      "name": "DVD region coding & OS-tethered playback (Linux DVD)",
      "summary": "Bypass DVD region coding or play CSS DVDs on Linux. Denied: alternatives exist.",
      "summaryTitle": "Permit circumvention of CSS to play DVDs on Linux or non-licensed platforms, or to bypass region coding. Repeatedly denied — alternative platforms/copies/region-free players available.",
      "cells": [
        {
          "status": "petitioned_denied",
          "classNum": "E.3",
          "label": "denied",
          "note": "2000 (Proposal E.3) — denied: matter of preference and inconvenience."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.11,16",
          "label": "denied",
          "note": "2003 (Classes 11 + 16) — denied: options exist; mere inconvenience."
        },
        {
          "status": "petitioned_denied_de_minimis",
          "classNum": "B.3,4",
          "label": "de minimis",
          "note": "2006 (B.3 + B.4) — denied as de minimis showing."
        },
        {
          "status": "petitioned_denied",
          "classNum": "IV.A.2",
          "label": "denied",
          "note": "2010 (IV.A.2) — denied: CSS-compatible Linux DVD players in fact available."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "backup-copies-of-optical-media-dvds-cds",
      "name": "Backup copies of optical media (DVDs/CDs)",
      "summary": "Backup copies of lawfully-acquired DVDs/CDs. Denied: not noninfringing.",
      "summaryTitle": "Permit users to make backup copies of lawfully-acquired DVDs/CDs. Denied: not shown to be a noninfringing use.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.8",
          "label": "denied",
          "note": "2003 (Class 8) — denied: backup not shown to be a noninfringing use; DVDs not shown to be fragile."
        },
        {
          "status": "petitioned_denied",
          "classNum": "B.9",
          "label": "denied",
          "note": "2006 (B.9) — denied: no legal authority that backup is noninfringing (apart from §117 for computer programs)."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "broadcast-flag-circumvention",
      "name": "Broadcast flag circumvention",
      "summary": "Bypass FCC-style broadcast flag on analog/digital TV. Denied: speculative regime.",
      "summaryTitle": "Permit circumvention of a (proposed/struck-down) FCC broadcast-flag mandate. Denied across three cycles — first as speculative, then because the FCC rule had been struck down.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.20",
          "label": "denied",
          "note": "2003 (Class 20) — denied: broadcast flag still speculative; broadcast monitoring not shown noninfringing."
        },
        {
          "status": "petitioned_denied",
          "classNum": "B.10",
          "label": "denied",
          "note": "2006 (B.10) — denied: no broadcast flag mandate in effect; speculative."
        },
        {
          "status": "petitioned_denied",
          "classNum": "IV.D",
          "label": "denied",
          "note": "2010 (IV.D) — denied: no DTV broadcast flag mandate; speculative."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "hdcp-hdmi-blu-ray-image-constraint-token-down-conversion",
      "name": "HDCP / HDMI / Blu-ray Image Constraint Token down-conversion",
      "summary": "Bypass HDCP/HDMI / Blu-ray ICT for full-resolution access. Denied: no evidence.",
      "summaryTitle": "Permit circumvention of HDCP/HDMI or Blu-ray ICT to obtain full-resolution playback/recording. Denied for lack of evidence of active deployment.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "IV.E",
          "label": "denied",
          "note": "2010 (IV.E) — denied: no evidence ICTs currently used on Blu-ray to restrict resolution."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.4",
          "label": "denied",
          "note": "2018 (Class 4) — denied: record lacked detail and legal support; overly broad and de minimis impact."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "livestream-recording-audiovisual-works",
      "name": "Livestream recording (audiovisual works)",
      "summary": "Record audiovisual livestreams. Denied procedurally.",
      "summaryTitle": "Permit circumvention of HTTP Live Streaming TPMs to record audiovisual livestreams. Denied 2021 on procedural grounds.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied_procedural",
          "classNum": "C.4",
          "label": "procedural",
          "note": "2021 (Class 4) — denied procedurally: petitioner provided no legal arguments or evidence and did not participate in hearings."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "motion-picture-clips-in-text-messages",
      "name": "Motion picture clips in text messages",
      "summary": "Send short motion-picture clips in text messages. Denied as de minimis.",
      "summaryTitle": "Permit circumvention to enable sending short motion-picture clips in text messages. Denied 2021 as de minimis.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied_de_minimis",
          "classNum": "C.2",
          "label": "de minimis",
          "note": "2021 (Class 2) — denied: de minimis showing; petitioner did not explain noninfringing-use theory."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "copy-protected-cds-and-game-disc-drm-securom-starforce",
      "name": "Copy-protected CDs & game-disc DRM (SecuROM/StarForce)",
      "summary": "Bypass audio-CD TPMs / game-disc DRM. Denied: no evidence of adverse effects.",
      "summaryTitle": "Petitions for circumvention of audio CD TPMs (2003) and computer-game copy-protection (2006). Denied for lack of evidence.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.18",
          "label": "denied",
          "note": "2003 (Class 18) — denied: deployment of CD TPMs has been minimal."
        },
        {
          "status": "petitioned_denied",
          "classNum": "B.6",
          "label": "denied",
          "note": "2006 (B.6) — denied: no evidence that the adverse effect is the result of an access control."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Research (TDM and Security)"
    },
    {
      "type": "exemption",
      "id": "motion-pictures-tdm-research-at-nonprofit-higher-ed",
      "name": "Motion pictures — TDM research at nonprofit higher-ed",
      "summary": "Higher-ed TDM research on motion-picture corpora. 2024 broadens permitted viewing.",
      "summaryTitle": "Higher-ed researchers may circumvent CSS/AACS/digital TPMs to deploy text-and-data-mining on a motion-picture corpus, with security conditions.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(4)",
          "label": "new"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(4)",
          "label": "expanded",
          "note": "2024 (b)(4) — viewing standard broadens; adds trade-association disclosure right; adds secure-connections + authenticated-credentials requirement."
        }
      ]
    },
    {
      "type": "exemption",
      "id": "literary-works-tdm-research-at-nonprofit-higher-ed",
      "name": "Literary works — TDM research at nonprofit higher-ed",
      "summary": "Higher-ed TDM research on literary-work corpora.",
      "summaryTitle": "Higher-ed researchers may circumvent literary-work TPMs to deploy TDM on a corpus. Excludes computer programs and TDM-purpose compilations.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(5)",
          "label": "new"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(5)",
          "label": "expanded"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "video-games-on-pcs-security-research-2010-only",
      "name": "Video games on PCs — security research (2010-only)",
      "summary": "PC video-game security research (subsumed 2015 → general class).",
      "summaryTitle": "Circumvent video-game TPMs on PCs for good-faith security research. Subsumed in 2015 by the broader general security-research class.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(4)",
          "label": "new"
        },
        {
          "status": "not_renewed",
          "label": "dropped",
          "note": "2012 — not renewed; subsumed into the broader good-faith security research class formalized in 2015."
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "good-faith-security-research-general",
      "name": "Good-faith security research (general)",
      "summary": "Good-faith security research; broadest in 2018+ (any device/system/network with auth).",
      "summaryTitle": "Good-faith security research on any device/machine (and on systems/networks with owner authorization). Heavily expanded over three cycles.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "petitioned_denied",
          "label": "denied (broad)",
          "note": "2010 — Halderman's broader security-testing class (sound recordings, AV, non-game literary works) was DENIED as evidence-insufficient; only the narrow video-game-PC subset was granted. This is the conceptual precursor to the 2015 grant."
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(7)",
          "label": "new",
          "note": "2015 (b)(7) — first granted; limited to 3 device classes (consumer incl. voting machines; motorized land vehicles; implanted medical devices); 12-month delayed effective date."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(11)",
          "label": "expanded",
          "note": "2018 (b)(11) — device-class limitation removed; coverage added for computers/systems/networks with owner authorization; 12-month delay dropped."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(16)",
          "label": "expanded",
          "note": "2021 (b)(16) — CFAA-non-violation precondition DROPPED. §1201 exemption no longer denied to researchers who incidentally violate CFAA."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(18)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "sound-recordings-on-cds-with-security-flaw-tpms-sony-rootkit-testing",
      "name": "Sound recordings on CDs with security-flaw TPMs — 'Sony rootkit' testing",
      "summary": "Audio-CD security-flaw testing. Direct response to 2005 Sony BMG rootkit.",
      "summaryTitle": "Single-cycle exemption (2006) responding to Sony BMG rootkit. Audio-CD TPM use case became historical.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(6)",
          "label": "new"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        },
        {
          "status": "not_renewed",
          "label": "dropped"
        }
      ]
    },
    {
      "type": "denial",
      "id": "generative-ai-trustworthiness-research",
      "name": "Generative AI trustworthiness research",
      "summary": "GenAI bias/safety research. Denied: harm arises from ToS, not from §1201.",
      "summaryTitle": "Permit circumvention for research on generative AI systems (bias, hallucination, safety). Denied 2024 — Register found the harm arises from third-party ToS, not from §1201.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.4",
          "label": "denied",
          "note": "2024 (Class 4) — denied: adverse effects arise from third-party online-platform terms, not from §1201, so an exemption would not ameliorate them."
        }
      ]
    },
    {
      "type": "denial",
      "id": "encryption-research-broader-than-1201-g",
      "name": "Encryption research (broader than §1201(g))",
      "summary": "Broaden encryption-research beyond §1201(g). Denied: not a class of works.",
      "summaryTitle": "Broaden encryption-research beyond §1201(g)'s statutory carve-out. Denied 2000, 2003 — defined by purpose/use, not by class of works.",
      "cells": [
        {
          "status": "petitioned_denied",
          "classNum": "E.6",
          "label": "denied",
          "note": "2000 (Proposal E.6) — denied: not focused on a class of works."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.22",
          "label": "denied",
          "note": "2003 (Class 22) — denied for insufficient evidence and failure to explain why existing exemptions are inadequate."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "subsumed",
          "note": "Effectively subsumed by general security-research class granted this cycle."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "reverse-engineering-for-interoperability-broader-than-1201-f",
      "name": "Reverse engineering for interoperability (broader than §1201(f))",
      "summary": "Broaden reverse-engineering beyond §1201(f). Denied: §1201(f) is adequate.",
      "summaryTitle": "Broaden reverse-engineering exemption beyond §1201(f)'s statutory carve-out (e.g., printer toner remanufacturing). Denied: defined by purpose; §1201(f) adequate.",
      "cells": [
        {
          "status": "petitioned_denied",
          "classNum": "E.5",
          "label": "denied",
          "note": "2000 (Proposal E.5) — denied: class cannot be defined by purpose."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.21",
          "label": "denied",
          "note": "2003 (Class 21) — denied: §1201(f) addresses remanufacturers' concerns."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "forensic-investigator-evidence-collection",
      "name": "Forensic investigator evidence collection",
      "summary": "Forensic-investigator evidence collection. Single-cycle denial.",
      "summaryTitle": "Forensic investigators may circumvent TPMs to collect digital evidence. Denied 2010 — proponent failed to describe the proposed class or provide compelling evidence.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "IV.C",
          "label": "denied",
          "note": "2010 (IV.C) — denied: proponent failed to describe the class of works."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Preservation by Libraries / Archives / Museums"
    },
    {
      "type": "exemption",
      "id": "motion-pictures-dvd-blu-ray-preservation-by-lams",
      "name": "Motion pictures (DVD/Blu-ray) — preservation by LAMs",
      "summary": "LAM preservation of damaged/deteriorating DVDs/Blu-rays.",
      "summaryTitle": "Eligible LAMs may circumvent CSS/AACS on damaged/deteriorating DVDs/Blu-rays when no fairly-priced replacement or LAM-accessible streaming alternative exists.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(3)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(3)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "software-preservation-by-lams-non-game-programs",
      "name": "Software preservation by LAMs (non-game programs)",
      "summary": "LAM preservation of non-game programs no longer commercially available.",
      "summaryTitle": "Eligible LAMs may circumvent TPMs on lawfully acquired non-game programs no longer commercially available, for lawful preservation. 2021+ allows offsite electronic lending to one user at a time.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(13)",
          "label": "new"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(18)",
          "label": "expanded",
          "note": "2021 (b)(18) — adds offsite electronic distribution to ONE USER AT A TIME, for a limited time, where LAM has no notice of non-private-study use."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(20)",
          "label": "expanded",
          "note": "2024 (b)(20) — adds explicit 'one user at a time' definition (per-copy basis). PARTIAL DENIAL: the proposal to REMOVE the single-user limitation entirely was rejected (noninfringing use not shown).",
          "partial": true
        }
      ]
    },
    {
      "type": "exemption",
      "id": "video-games-preservation-when-server-abandoned-offline-games-by-lams-from-2018",
      "name": "Video games — preservation when server abandoned (+ offline games by LAMs from 2018)",
      "summary": "Restore local gameplay when server abandoned; LAM preservation of offline games (2018+).",
      "summaryTitle": "When authentication server abandoned, individuals may restore local gameplay on PC/console; LAMs may preserve. 2018+ extends to offline games no longer commercially available.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(8)",
          "label": "new"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(12)",
          "label": "expanded",
          "note": "2018 (b)(12) — adds subpart (ii) for LAM preservation of offline games no longer commercially available; 'complete games' definition expanded."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(17)",
          "label": "renewed",
          "note": "2021 (b)(17) — renewed unchanged. PARTIAL DENIAL: Class 14(b) proposed off-premises LAM access to preserved video games — denied (noninfringing use not shown).",
          "partial": true
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(19)",
          "label": "renewed",
          "note": "2024 (b)(19) — renewed unchanged. PARTIAL DENIAL: Class 6(b) again proposed removing the on-premises limitation for video-game preservation — denied (market harm concerns).",
          "partial": true
        }
      ]
    },
    {
      "type": "denial",
      "id": "drm-authentication-server-shutdown-broad-beyond-video-games",
      "name": "DRM authentication server shutdown (broad — beyond video games)",
      "summary": "Broad DRM-server-shutdown access. Narrower video-game version later granted (2015).",
      "summaryTitle": "General DRM server shutdown across all works. Denied 2010 for insufficient evidence. The narrower video-game-specific version was later granted in 2015.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "IV.B",
          "label": "denied",
          "note": "2010 (IV.B.1 + IV.B.2) — denied: proponent did not sustain the burden of showing adverse effect."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "→ vg-pres",
          "note": "Narrower video-game version granted this cycle as video-games-preservation."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "library-distributed-audiobooks-electronic-audio-format",
      "name": "Library-distributed audiobooks (electronic audio format)",
      "summary": "Library audiobook access. Denied: not really an access-control issue.",
      "summaryTitle": "Library users may circumvent TPMs on electronically-distributed audiobooks. Denied 2006 — held to be a software-incompatibility complaint, not access-control.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "B.7",
          "label": "denied",
          "note": "2006 (B.7) — denied: complaint about software incompatibility, not TPMs."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Wireless Network Connectivity"
    },
    {
      "type": "exemption",
      "id": "wireless-devices-unlocking-to-connect-to-a-different-carrier",
      "name": "Wireless devices — unlocking to connect to a different carrier",
      "summary": "Unlock wireless device to switch carriers. Narrowed twice, expanded three times.",
      "summaryTitle": "Unlock a wireless device to switch carrier networks, where new network operator authorizes the connection. Narrowed twice then expanded three times.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(5)",
          "label": "new"
        },
        {
          "status": "renewed_narrowed",
          "classNum": "b(3)",
          "label": "narrowed",
          "note": "2010 (b)(3) — narrowed to 'used' handsets."
        },
        {
          "status": "renewed_narrowed",
          "classNum": "b(3)",
          "label": "narrowed",
          "note": "2012 (b)(3) — narrowed further: 90-day window post-effective-date; carrier-failure-to-unlock condition."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(3)",
          "label": "expanded",
          "note": "2015 (b)(3) — device classes broadened to cellphones, tablets, mobile hotspots, wearables (all 'used')."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(5)",
          "label": "expanded",
          "note": "2018 (b)(5) — 'used device' requirement DROPPED."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(8)",
          "label": "expanded",
          "note": "2021 (b)(8) — device-class enumeration DROPPED. Any wireless device qualifies."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(8)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Interoperability / Software Installation (Jailbreaking)"
    },
    {
      "type": "exemption",
      "id": "smartphones-and-portable-mobile-devices-jailbreaking-removal-of-software",
      "name": "Smartphones & portable mobile devices — jailbreaking (+ removal of software)",
      "summary": "Install third-party apps; from 2015 also remove software. The 'iPhone class'.",
      "summaryTitle": "Install lawfully obtained third-party apps; from 2015 also remove manufacturer/carrier software. The 'iPhone class' (2010), expanded in 2015 to tablets/removal.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(2)",
          "label": "new",
          "note": "2010 (b)(2) — original 'iPhone class'; handsets only."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(2)",
          "label": "renewed",
          "note": "2012 (b)(2) — renewed; the Register declined to extend it to tablets. PARTIAL DENIAL: tablet expansion proposal denied (category too 'broad and ill-defined'). Tablet expansion later GRANTED in 2015.",
          "partial": true
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(4)",
          "label": "expanded",
          "note": "2015 (b)(4) — adds 'portable all-purpose mobile computing devices' (tablet-like) AND adds removal-of-software clause."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(6)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(9)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(9)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "smart-televisions-jailbreaking-interoperability-only",
      "name": "Smart televisions — jailbreaking (interoperability only)",
      "summary": "Smart-TV apps install. No software-removal. 2021 includes set-top streamers.",
      "summaryTitle": "Install lawfully obtained third-party apps on smart TVs. NO removal-of-software clause (narrower than smartphone). 2021 expansion covers separate streaming devices.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(5)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(7)",
          "label": "renewed"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(10)",
          "label": "expanded",
          "note": "2021 (b)(10) — definition broadened to include devices physically separate from a TV whose primary purpose is to stream authorized video (Roku/Apple TV/Chromecast etc.)."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(10)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "voice-assistant-devices-jailbreaking-removal-of-software",
      "name": "Voice assistant devices — jailbreaking (+ removal of software)",
      "summary": "Voice-assistant app install + software removal.",
      "summaryTitle": "Install lawfully obtained third-party apps on voice-input devices. Includes software removal.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(8)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(11)",
          "label": "renewed"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(11)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "routers-and-dedicated-network-devices-jailbreaking-interoperability-only",
      "name": "Routers & dedicated network devices — jailbreaking (interoperability only)",
      "summary": "Third-party firmware (OpenWrt/DD-WRT) on routers / network devices.",
      "summaryTitle": "Install third-party firmware (OpenWrt, DD-WRT, etc.) on routers and dedicated network devices. NO removal-of-software clause.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(12)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(12)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "video-game-console-jailbreaking",
      "name": "Video game console jailbreaking",
      "summary": "Console jailbreaking. Denied: closely associated with piracy.",
      "summaryTitle": "Jailbreak video game consoles for software interoperability. Denied twice — Register cites strong correlation between console jailbreaking and piracy.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.3",
          "label": "denied",
          "note": "2012 (Class 3) — denied: evidentiary record did not support adverse impact."
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.19",
          "label": "denied",
          "note": "2015 (Class 19) — denied: 'jailbreaking of video game consoles continues to be closely associated with video game piracy.'"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "e-book-reader-jailbreaking",
      "name": "E-book reader jailbreaking",
      "summary": "Kindle/Nook jailbreaking. Single-cycle denial.",
      "summaryTitle": "Jailbreak dedicated e-book readers (Kindle, Nook, etc.) for software interoperability. Denied 2015.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.18",
          "label": "denied",
          "note": "2015 (Class 18) — denied: insufficient factual or legal support."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "personal-computers-os-restricted-programs-secure-boot",
      "name": "Personal computers / OS-restricted programs / secure boot",
      "summary": "General PC / secure-boot circumvention. Two cycles of denial.",
      "summaryTitle": "Circumvent access controls on general-purpose PCs, OS-locked programs, or secure-boot mechanisms. Denied 2006 and 2012.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "B.5",
          "label": "denied",
          "note": "2006 (B.5) — denied: insufficient evidence."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.4",
          "label": "denied",
          "note": "2012 (Class 4) — denied: speculative; no specific compelling evidence."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Repair, Diagnosis, & Modification"
    },
    {
      "type": "exemption",
      "id": "motorized-land-vehicles-marine-vessels-from-2021-diagnosis-repair-lawful-modification",
      "name": "Motorized land vehicles (+ marine vessels from 2021) — diagnosis, repair, lawful modification",
      "summary": "Owner repair/diagnose/modify vehicle ECUs. Excludes subscription programs. Marine vessels added 2021.",
      "summaryTitle": "Owner repair/diagnosis/modification of vehicle ECU/computer programs. Subscription-service programs excluded. Marine vessels added in 2021.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(6)",
          "label": "new",
          "note": "2015 (b)(6) — first granted; 12-month delayed effective date; broad telematics/entertainment carve-out."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(9)",
          "label": "expanded",
          "note": "2018 (b)(9) — 12-month delay DROPPED; telematics/entertainment exclusion replaced with narrower subscription-service exclusion."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(13)",
          "label": "expanded",
          "note": "2021 (b)(13) — adds marine vessels."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(13)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "vehicles-and-marine-vessels-owner-access-to-operational-diagnostic-telematics-data",
      "name": "Vehicles & marine vessels — owner access to operational/diagnostic/telematics data",
      "summary": "Owner access to vehicle/vessel operational, diagnostic, telematics data.",
      "summaryTitle": "Owners/lessees (or agents) may circumvent to access, store, and share vehicle/vessel operational data including diagnostics and telematics.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(14)",
          "label": "new"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "consumer-devices-diagnosis-maintenance-or-repair",
      "name": "Consumer devices — diagnosis, maintenance, or repair",
      "summary": "Right-to-repair for consumer devices (broadened 2021); narrow VG-console optical-drive carve-out.",
      "summaryTitle": "Right-to-repair for consumer devices. 2018 covered smartphones/home appliances/home systems only; 2021 broadened to any consumer device. Video-game console carve-out: optical-drive repair only, must restore TPMs.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(10)",
          "label": "new",
          "note": "2018 (b)(10) — first granted; limited to smartphone/home appliance/home system."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(14)",
          "label": "expanded",
          "note": "2021 (b)(14) — broadened to any 'device primarily designed for use by consumers'."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(15)",
          "label": "renewed",
          "note": "2024 (b)(15) — renewed unchanged. PARTIAL DENIAL: a proposed broader expansion to all commercial and industrial equipment (Class 5 broader scope) was rejected; only retail food-prep equipment was carved out and granted as the separately-tracked (b)(16) class.",
          "partial": true
        }
      ]
    },
    {
      "type": "exemption",
      "id": "medical-devices-and-systems-diagnosis-maintenance-or-repair",
      "name": "Medical devices & systems — diagnosis, maintenance, or repair",
      "summary": "Independent repair of medical devices & systems.",
      "summaryTitle": "Independent repair of lawfully acquired medical devices/systems and related data files.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(15)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(17)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "exemption",
      "id": "retail-commercial-food-prep-equipment-diagnosis-maintenance-or-repair",
      "name": "Retail commercial food prep equipment — diagnosis, maintenance, or repair",
      "summary": "Commercial food-prep equipment repair (the 'McDonald's ice cream' problem).",
      "summaryTitle": "Repair of commercial food-prep equipment (e.g., the McDonald's ice cream machine problem).",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(16)",
          "label": "new"
        }
      ]
    },
    {
      "type": "denial",
      "id": "commercial-and-industrial-equipment-repair-beyond-food-prep",
      "name": "Commercial & industrial equipment repair (beyond food prep)",
      "summary": "Broader commercial/industrial repair. Denied 2024 (only food-prep granted).",
      "summaryTitle": "Repair of all software-enabled commercial and industrial equipment. Denied 2024 — only the narrow food-prep subset granted; broader scope unsupported on record.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.5",
          "label": "denied",
          "note": "2024 (Class 5, broader scope) — denied: insufficient evidence on record beyond the food-prep carve-out."
        }
      ]
    },
    {
      "type": "category",
      "label": "Patient / Owner Data Access"
    },
    {
      "type": "exemption",
      "id": "medical-device-data-patient-access-to-own-data",
      "name": "Medical-device data — patient access to own data",
      "summary": "Patient access to own medical-device data. Major 2021 expansion.",
      "summaryTitle": "Patients (or agents from 2021) may circumvent to access data their own medical devices generate. Originally implanted-only with passive-monitoring requirement; 2021 dropped both restrictions.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(10)",
          "label": "new",
          "note": "2015 (b)(10) — first granted (Hugo Campos's class); implanted devices only; passive monitoring only; patient personally."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(4)",
          "label": "renewed"
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(7)",
          "label": "expanded",
          "note": "2021 (b)(7) — three expansions: 'by or on behalf of' patient; implantation requirement REMOVED; passive-monitoring restriction REMOVED."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(7)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Material / Feedstock Interoperability"
    },
    {
      "type": "exemption",
      "id": "3d-printers-feedstock-material-interoperability",
      "name": "3D printers — feedstock / material interoperability",
      "summary": "Use alternative 3D-printer material. Excludes design software/files/data.",
      "summaryTitle": "Use alternative material in 3D printers locked to manufacturer feedstock. May NOT access design software/files/data.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(9)",
          "label": "new",
          "note": "2015 (b)(9) — first granted; 'microchip-reliant' TPMs only; regulated-commerce exclusion."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(14)",
          "label": "expanded",
          "note": "2018 (b)(14) — regulated-commerce exclusion DROPPED."
        },
        {
          "status": "renewed_expanded",
          "classNum": "b(19)",
          "label": "expanded",
          "note": "2021 (b)(19) — 'microchip-reliant' qualifier DROPPED; 'feedstock' generalized to 'material'."
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(21)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Software License Compliance"
    },
    {
      "type": "exemption",
      "id": "foss-programs-investigation-of-potential-license-infringement",
      "name": "FOSS programs — investigation of potential license infringement",
      "summary": "FOSS license-compliance investigation. Excludes consoles. Standing required.",
      "summaryTitle": "Investigate FOSS license violations (typically GPL compliance) on a lawfully acquired device. Excludes video game consoles. Standing requirement.",
      "cells": [
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "not_yet_proposed",
          "label": "—"
        },
        {
          "status": "new",
          "classNum": "b(20)",
          "label": "new"
        },
        {
          "status": "renewed_unchanged",
          "classNum": "b(22)",
          "label": "renewed"
        }
      ]
    },
    {
      "type": "category",
      "label": "Denied — Class-Definition Disputes & Threshold Issues",
      "denialCategory": true
    },
    {
      "type": "denial",
      "id": "broad-use-based-exemptions-all-fair-use-all-noninfringing-uses",
      "name": "Broad use-based exemptions ('all fair use', 'all noninfringing uses')",
      "summary": "Blanket 'all fair use' exemption. Denied: §1201 requires class-of-works definition.",
      "summaryTitle": "Recurring blanket-exemption petition. Repeatedly denied: §1201's structure requires defining a class by qualities of the WORK, not by use or user. The most-rejected category in history.",
      "cells": [
        {
          "status": "petitioned_denied",
          "classNum": "E.7,9",
          "label": "denied",
          "note": "2000 (Proposals E.7 + E.9) — denied: 'a particular class of work' must be determined by qualities of the work itself, not by users or uses."
        },
        {
          "status": "petitioned_denied_procedural",
          "classNum": "C.1–7",
          "label": "procedural",
          "note": "2003 (Classes 1, 2, 4, 7) — denied procedurally: 'utterly failed to propose a particular class of copyrighted works'."
        },
        {
          "status": "petitioned_denied_procedural",
          "classNum": "B.8",
          "label": "procedural",
          "note": "2006 (B.8) — denied: failed to articulate a cognizable class."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.1",
          "label": "denied",
          "note": "2012 (Class 1) — denied: beyond scope of rulemaking."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "public-domain-works-behind-tpms",
      "name": "Public-domain works behind TPMs",
      "summary": "Public-domain works behind TPMs. Denied: §1201 doesn't apply; no exemption needed.",
      "summaryTitle": "Permit circumvention of TPMs on works in the public domain. Denied multiple cycles: §1201 doesn't apply to non-copyrighted works, so no exemption is needed.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.7",
          "label": "denied",
          "note": "2003 (Class 7) — denied: §1201 not applicable to public-domain works; no exemption needed."
        },
        {
          "status": "petitioned_denied",
          "classNum": "A.2'",
          "label": "denied",
          "note": "2006 (A.2-secondary) — denied: not access controls; no exemption needed."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.1",
          "label": "denied",
          "note": "2012 (Class 1) — denied: beyond scope of rulemaking."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    },
    {
      "type": "denial",
      "id": "avionics-aircraft-data-systems",
      "name": "Avionics / aircraft data systems",
      "summary": "Aircraft data access. Denied: data is facts, not copyrightable.",
      "summaryTitle": "Circumvent access controls on aircraft electronic systems to access flight/operations data. Denied 2018 — the data at issue (flight stats, etc.) are facts, not copyrightable, so §1201 doesn't apply.",
      "cells": [
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "petitioned_denied",
          "classNum": "C.11",
          "label": "denied",
          "note": "2018 (Class 11) — denied: aircraft data are facts, not copyrightable; §1201 doesn't apply."
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        },
        {
          "status": "not_proposed",
          "label": "not proposed"
        }
      ]
    }
  ],
  "details": [
    {
      "type": "h3",
      "text": "Filtering & Internet Content"
    },
    {
      "type": "detail",
      "id": "filtering-software-block-lists",
      "name": "Filtering software block-lists",
      "tagKind": "cat",
      "tag": "first granted 2000",
      "summaryRow": "Circumvent TPMs on lists of websites blocked by content-filtering software.",
      "timeline": [
        "<b>2000</b> (b)(1) — <i>new (first granted)</i> — one of two classes granted in the very first §1201 rulemaking",
        "<b>2003</b> (b)(1) — renewed unchanged — refined to \"lists of Internet locations blocked\"",
        "<b>2006</b> — dropped — renewal petition (B.1) denied for lack of factual showing",
        "<b>2010–2024</b> — not renewed"
      ],
      "evo": "The original filtering-software research justification was overtaken by broader content-filter debate."
    },
    {
      "type": "h3",
      "text": "Legacy Access Controls (Obsolete or Broken)"
    },
    {
      "type": "detail",
      "id": "literary-works-with-malfunctioning-obsolete-access-controls",
      "name": "Literary works with malfunctioning/obsolete access controls",
      "tagKind": "cat",
      "tag": "first granted 2000",
      "summaryRow": "Broad first-cycle grant covering broken/obsolete TPMs on literary works incl. programs and databases.",
      "timeline": [
        "<b>2000</b> (b)(2) — new (first granted)",
        "<b>2003+</b> — replaced by narrower successor classes (obsolete dongles + obsolete-format programs)"
      ]
    },
    {
      "type": "detail",
      "id": "obsolete-dongles",
      "name": "Obsolete dongles",
      "tagKind": "cat",
      "tag": "first granted 2003 · last renewed 2010",
      "summaryRow": "Circumvent obsolete/broken hardware dongles guarding lawfully obtained computer programs.",
      "timeline": [
        "<b>2003</b> (b)(2) — new",
        "<b>2006</b> (b)(3) — renewed unchanged — <span class=\"denial-tag\">partial denial:</span> a request to expand the class to broader incompatibilities/obsolete OS or hardware was rejected as procedurally untimely (made for the first time at the hearing)",
        "<b>2010</b> (b)(5) — renewed unchanged — embedded dongle-obsolescence definition retained",
        "<b>2012+</b> — not renewed; legacy dongle problem became historical"
      ]
    },
    {
      "type": "detail",
      "id": "computer-programs-games-in-obsolete-formats",
      "name": "Computer programs/games in obsolete formats",
      "tagKind": "cat",
      "tag": "first granted 2003 · last renewed 2006",
      "summaryRow": "Programs/games in obsolete formats. Narrowed in 2006 to LAM preservation contexts.",
      "timeline": [
        "<b>2003</b> (b)(3) — new",
        "<b>2006</b> (b)(2) — renewed narrowed — refined to library/archive preservation purposes",
        "<b>2010+</b> — not renewed; conceptually revived as the separately-tracked software-preservation-lams class in 2018"
      ]
    },
    {
      "type": "h3",
      "text": "Accessibility"
    },
    {
      "type": "detail",
      "id": "literary-works-electronic-accessibility-musical-notation-added-2021",
      "name": "Literary works (electronic) — accessibility (musical notation added 2021)",
      "tagKind": "cat",
      "tag": "first granted 2003 · 8 consecutive cycles",
      "summaryRow": "Circumvent TPMs that block read-aloud / interfere with screen readers, for blind/disabled users or authorized entities under 17 U.S.C. 121.",
      "timeline": [
        "<b>2003</b> (b)(4) — new",
        "<b>2006</b> (b)(4), <b>2010</b> (b)(6), <b>2012</b> (b)(1), <b>2015</b> (b)(2), <b>2018</b> (b)(3) — renewed unchanged each cycle",
        "<b>2021</b> (b)(6) — renewed expanded — adds \"previously published musical works fixed in text or notation\" (musical notation); terminology updated to \"eligible person\" (post-Marrakesh Treaty)",
        "<b>2024</b> (b)(6) — renewed unchanged"
      ],
      "evo": "Longest-running renewable exemption (eight consecutive cycles, 2003-2024). Note: in 2010 the Librarian of Congress GRANTED this exemption despite the Register recommending denial — the only known instance of such an override in this archive."
    },
    {
      "type": "detail",
      "id": "motion-pictures-captioning-and-audio-description-by-educational-disability-services",
      "name": "Motion pictures — captioning & audio description by educational disability services",
      "tagKind": "cat",
      "tag": "first granted 2018",
      "summaryRow": "Educational disability services may circumvent CSS/AACS/digital TPMs to caption/audio-describe motion pictures.",
      "timeline": [
        "<b>2018</b> (b)(2) — new — students with disabilities only",
        "<b>2021</b> (b)(2) — renewed expanded — beneficiaries expanded to students, faculty, OR staff with disabilities; \"fair market price\" standard; textbook-bundle scenario; explicit reuse permission; \"accessible version of sufficient quality\" definition added",
        "<b>2024</b> (b)(2) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "motion-pictures-r-and-d-of-accessibility-players-blind-deaf-hoh",
      "name": "Motion pictures — R&D of accessibility players (blind/deaf/HoH)",
      "tagKind": "cat",
      "tag": "first granted 2012 · single cycle",
      "summaryRow": "Circumvent CSS/online-distribution TPMs for R&amp;D of accessibility-enhanced players. Resulting player must not itself require circumvention.",
      "timeline": [
        "<b>2012</b> (b)(8) — new",
        "<b>2015+</b> — not renewed; likely no longer needed if resulting players did not require ongoing circumvention"
      ]
    },
    {
      "type": "detail",
      "id": "video-games-accessibility-input-methods-for-physical-disabilities",
      "name": "Video games — accessibility input methods for physical disabilities",
      "tagKind": "cat",
      "tag": "first granted 2021 · lapsed 2024",
      "summaryRow": "Circumvent video-game TPMs (PC only) to enable alternative input methods (non-keyboard/non-mouse) for users with physical disabilities.",
      "timeline": [
        "<b>2021</b> (b)(21) — new",
        "<b>2024</b> — lapsed; NO renewal petition was filed (per 2024 Final Rule [PAGE 2] footnote 21). Not opposed, not denied — simply not petitioned."
      ]
    },
    {
      "type": "h3",
      "text": "Audiovisual Use (Criticism, Comment, Education) — Granted"
    },
    {
      "type": "detail",
      "id": "motion-pictures-short-clips-for-criticism-comment-and-educational-uses",
      "name": "Motion pictures — short clips for criticism, comment, & educational uses",
      "tagKind": "cat",
      "tag": "first granted 2006 · expanded every cycle",
      "summaryRow": "Make short clips from DVDs/Blu-ray/digital for criticism, comment, documentary, noncommercial video, e-book film analysis, K-12/college/MOOC/digital-literacy education.",
      "timeline": [
        "<b>2006</b> (b)(1) — new — originally limited to film/media studies professors compiling classroom clips from DVDs",
        "<b>2010</b> (b)(1) — expanded to three user categories: college/university educators, documentary filmmakers, noncommercial video creators",
        "<b>2012</b> (b)(4)+(b)(5)+(b)(6)+(b)(7) — restructured into 4 sub-classes (DVD/online × full-circ/screen-cap); added K-12 educators and multimedia e-books — <span class=\"denial-tag\">partial denial:</span> short-clip circumvention for fictional filmmakers denied (noninfringing use not shown)",
        "<b>2015</b> (b)(1) — consolidated back into single class with 8 enumerated sub-uses; added Blu-ray/AACS, MOOCs, K-12 students (screen-cap only), digital/media-literacy programs",
        "<b>2018</b> (b)(1) — adds parody and biographical/historically-significant uses to documentary branch; allows K-12 students (under educator supervision) to use full circumvention",
        "<b>2021</b> (b)(1) — adds \"employees acting at the direction of faculty for the purpose of teaching a course\" to both higher-ed and MOOC subparts",
        "<b>2024</b> (b)(1) — renewed unchanged — <span class=\"denial-tag\">partial denials:</span> (1) OTW's proposed rewrite of noncommercial-videos subpart denied (no record/evidence); (2) MOOC expansion to for-profit/unaccredited entities denied (noninfringing use not shown)"
      ],
      "evo": "Granted in every cycle since 2006 (seven consecutive cycles). The single most consistently broadened exemption in §1201 history."
    },
    {
      "type": "h3",
      "text": "Audiovisual Use — Denied Petitions"
    },
    {
      "type": "detail",
      "id": "space-shifting-format-shifting-audiovisual-musical-literary",
      "name": "Space-shifting / format-shifting",
      "tagKind": "denial",
      "tag": "denied 2000-2021 (8 cycles)",
      "summaryRow": "Recurring proposal: permit users to shift lawfully-acquired works to alternative devices, formats, or platforms.",
      "timeline": [
        "<b>2000</b> Proposal E.3 (partial) — denied — alternatives available (analog format)",
        "<b>2003</b> Classes 8 + 15 — denied — space-shifting not shown to be noninfringing use",
        "<b>2006</b> B.2 — denied — no legal precedent that space-shifting is noninfringing",
        "<b>2010</b> IV.A.1 — denied — mere consumer inconvenience",
        "<b>2012</b> Class 10 — denied — no adverse impact on noninfringing uses shown",
        "<b>2015</b> Classes 8 + 10 — denied — \"law of fair use, as it stands today, does not sanction broad-based space-shifting or format-shifting\"",
        "<b>2018</b> Class 3 — denied — no basis to depart from 2015 fair-use analysis",
        "<b>2021</b> Class 6 — denied — petitioner failed to provide legal arguments or evidence",
        "<b>2024</b> — not proposed"
      ],
      "evo": "The most-denied proposal in §1201 history. The Register's position has been stable: in the absence of fair-use precedent recognizing space-shifting as noninfringing, §1201 cannot create one."
    },
    {
      "type": "detail",
      "id": "dvd-region-coding-and-os-tethered-playback-linux-dvd",
      "name": "DVD region coding & OS-tethered playback (Linux DVDs)",
      "tagKind": "denial",
      "tag": "denied 2000-2010 (4 cycles)",
      "summaryRow": "Recurring proposal: permit circumvention of CSS to play DVDs on Linux or non-licensed platforms, or to bypass region coding.",
      "timeline": [
        "<b>2000</b> Proposal E.3 — denied — matter of preference and inconvenience",
        "<b>2003</b> Classes 11 + 16 — denied — options exist; mere inconvenience",
        "<b>2006</b> B.3 + B.4 — denied as de minimis",
        "<b>2010</b> IV.A.2 — denied — CSS-compatible Linux DVD players are in fact available",
        "<b>2012+</b> — not proposed; Linux DVD playback effectively solved at the technical level"
      ]
    },
    {
      "type": "detail",
      "id": "backup-copies-of-optical-media-dvds-cds",
      "name": "Backup copies of optical media (DVDs/CDs)",
      "tagKind": "denial",
      "tag": "denied 2003, 2006",
      "summaryRow": "Permit users to make backup copies of lawfully-acquired DVDs/CDs in case of physical damage.",
      "timeline": [
        "<b>2003</b> Class 8 — denied — backup not shown to be a noninfringing use; DVDs not shown to be fragile",
        "<b>2006</b> B.9 — denied — no legal authority that backup is noninfringing (apart from §117 for computer programs)",
        "<b>2010+</b> — not proposed"
      ]
    },
    {
      "type": "detail",
      "id": "broadcast-flag-circumvention",
      "name": "Broadcast flag circumvention",
      "tagKind": "denial",
      "tag": "denied 2003, 2006, 2010",
      "summaryRow": "Permit circumvention of a (proposed/struck-down) FCC broadcast-flag mandate that would restrict downstream recording.",
      "timeline": [
        "<b>2003</b> Class 20 — denied — broadcast flag still speculative",
        "<b>2006</b> B.10 — denied — no broadcast flag mandate in effect",
        "<b>2010</b> IV.D — denied — no DTV broadcast flag mandate; speculative"
      ],
      "evo": "Tracks a particular regulatory fight from the 2000s. The FCC broadcast-flag rule was struck down by the D.C. Circuit in <i>American Library Ass'n v. FCC</i> (2005); the topic faded after 2010."
    },
    {
      "type": "detail",
      "id": "hdcp-hdmi-blu-ray-image-constraint-token-down-conversion",
      "name": "HDCP / HDMI / Blu-ray Image Constraint Token down-conversion",
      "tagKind": "denial",
      "tag": "denied 2010, 2018",
      "summaryRow": "Permit circumvention of HDCP/HDMI content-protection or Blu-ray ICT to obtain full-resolution playback/recording.",
      "timeline": [
        "<b>2010</b> IV.E — denied — no evidence ICTs currently used on Blu-ray to restrict resolution",
        "<b>2018</b> Class 4 — denied — record lacked detail and legal support; overly broad and de minimis impact"
      ],
      "evo": "Distinct from the granted motion-pictures-clips class because the HDCP/HDMI proposal would permit full-resolution recording (not just short clips for criticism)."
    },
    {
      "type": "detail",
      "id": "livestream-recording-audiovisual-works",
      "name": "Livestream recording (audiovisual works)",
      "tagKind": "denial",
      "tag": "denied 2021 (procedural)",
      "summaryRow": "Permit circumvention of HTTP Live Streaming TPMs to record audiovisual livestreams.",
      "timeline": [
        "<b>2021</b> Class 4 — denied procedurally — petitioner provided no legal arguments or evidence and did not participate in hearings"
      ]
    },
    {
      "type": "detail",
      "id": "motion-picture-clips-in-text-messages",
      "name": "Motion picture clips in text messages",
      "tagKind": "denial",
      "tag": "denied 2021 (de minimis)",
      "summaryRow": "Permit circumvention to enable sending short motion-picture clips in text messages.",
      "timeline": [
        "<b>2021</b> Class 2 — denied — de minimis showing; petitioner did not explain noninfringing-use theory"
      ]
    },
    {
      "type": "detail",
      "id": "copy-protected-cds-and-game-disc-drm-securom-starforce",
      "name": "Copy-protected CDs & game-disc DRM (SecuROM/StarForce)",
      "tagKind": "denial",
      "tag": "denied 2003, 2006",
      "summaryRow": "Petitions for circumvention of audio CD TPMs (2003) and computer-game copy-protection (2006).",
      "timeline": [
        "<b>2003</b> Class 18 — denied — deployment of CD TPMs has been minimal",
        "<b>2006</b> B.6 — denied — no evidence adverse effect is the result of an access control"
      ],
      "evo": "The Sony rootkit incident later got its own targeted GRANTED exemption in 2006 (cd-security-testing-2006), but the general \"copy-protected CD\" petitions for users were denied."
    },
    {
      "type": "h3",
      "text": "Research (TDM and Security) — Granted"
    },
    {
      "type": "detail",
      "id": "motion-pictures-tdm-research-at-nonprofit-higher-ed",
      "name": "Motion pictures — TDM research at nonprofit higher-ed",
      "tagKind": "cat",
      "tag": "first granted 2021",
      "summaryRow": "Higher-ed researchers may circumvent CSS/AACS/digital TPMs to deploy text-and-data-mining on a motion-picture corpus.",
      "timeline": [
        "<b>2021</b> (b)(4) — new",
        "<b>2024</b> (b)(4) — renewed expanded — viewing standard broadened from \"verification of research findings\" to \"conduct TDM research or teaching\"; trade-association disclosure right added; secure-connections + authenticated-credentials requirement added"
      ]
    },
    {
      "type": "detail",
      "id": "literary-works-tdm-research-at-nonprofit-higher-ed",
      "name": "Literary works — TDM research at nonprofit higher-ed",
      "tagKind": "cat",
      "tag": "first granted 2021",
      "summaryRow": "Higher-ed TDM research on literary-work corpora. Excludes computer programs and TDM-purpose compilations.",
      "timeline": [
        "<b>2021</b> (b)(5) — new",
        "<b>2024</b> (b)(5) — renewed expanded — same expansions as motion-pictures-tdm"
      ]
    },
    {
      "type": "detail",
      "id": "video-games-on-pcs-security-research-2010-only",
      "name": "Video games on PCs — security research",
      "tagKind": "cat",
      "tag": "2010 only · precursor to general class",
      "summaryRow": "Circumvent video-game TPMs (on PCs) for good-faith security research.",
      "timeline": [
        "<b>2010</b> (b)(4) — new",
        "<b>2012+</b> — not renewed; subsumed into the broader good-faith security research class formalized in 2015"
      ]
    },
    {
      "type": "detail",
      "id": "good-faith-security-research-general",
      "name": "Good-faith security research (general)",
      "tagKind": "cat",
      "tag": "first granted 2015 · heavily expanded",
      "summaryRow": "Good-faith security research on any device/machine (and on systems/networks with owner authorization).",
      "timeline": [
        "<b>2010</b> — <span class=\"denial-tag\">precursor petitioned but denied:</span> Halderman's broader security-testing class (covering sound recordings, audiovisual works, and non-game literary works) was DENIED as evidence-insufficient; only the narrow video-game-PC subset was granted that cycle",
        "<b>2015</b> (b)(7) — new (general formulation) — initially limited to 3 device classes (consumer devices incl. voting machines; motorized land vehicles; implanted medical devices); 12-month delayed effective date",
        "<b>2018</b> (b)(11) — renewed expanded — device-class limitation REMOVED; coverage added for computers/systems/networks with owner authorization; 12-month delay dropped",
        "<b>2021</b> (b)(16) — renewed expanded — CFAA-non-violation precondition DROPPED; §1201 exemption no longer denied to researchers who incidentally violate CFAA (separate other-law liability remains possible)",
        "<b>2024</b> (b)(18) — renewed unchanged"
      ],
      "evo": "One of the most-expanded exemptions. Each renewal cycle from 2015 to 2021 substantively broadened the scope."
    },
    {
      "type": "detail",
      "id": "sound-recordings-on-cds-with-security-flaw-tpms-sony-rootkit-testing",
      "name": "Sound recordings on CDs with security-flaw TPMs — 'Sony rootkit' testing",
      "tagKind": "cat",
      "tag": "2006 only",
      "summaryRow": "Audio-CD security-flaw testing — direct response to the 2005 Sony BMG rootkit incident.",
      "timeline": [
        "<b>2006</b> (b)(6) — new",
        "<b>2010+</b> — not renewed; music industry abandoned CD-level TPMs; conceptually subsumed by general security-research class (2015+)"
      ]
    },
    {
      "type": "h3",
      "text": "Research — Denied Petitions"
    },
    {
      "type": "detail",
      "id": "generative-ai-trustworthiness-research",
      "name": "Generative AI trustworthiness research",
      "tagKind": "denial",
      "tag": "denied 2024",
      "summaryRow": "Permit circumvention to enable trustworthiness research on generative AI systems (bias, hallucination, safety).",
      "timeline": [
        "<b>2024</b> Class 4 — denied — adverse effects identified by proponents arise from third-party online-platform terms of service, not from §1201, so an exemption would not ameliorate their concerns"
      ],
      "evo": "Notable because the Register's reasoning was structural (the harm arises from ToS, not from §1201) rather than evidentiary — i.e., even a perfect record would not have changed the outcome."
    },
    {
      "type": "detail",
      "id": "encryption-research-broader-than-1201-g",
      "name": "Encryption research (broader than §1201(g))",
      "tagKind": "denial",
      "tag": "denied 2000, 2003",
      "summaryRow": "Broaden the encryption-research exemption beyond §1201(g)'s statutory carve-out.",
      "timeline": [
        "<b>2000</b> Proposal E.6 — denied — not focused on a class of works",
        "<b>2003</b> Class 22 — denied for insufficient evidence and failure to explain why existing exemptions are inadequate"
      ],
      "evo": "Effectively subsumed in practice by the broad good-faith security-research class first granted in 2015."
    },
    {
      "type": "detail",
      "id": "reverse-engineering-for-interoperability-broader-than-1201-f",
      "name": "Reverse engineering for interoperability (broader than §1201(f))",
      "tagKind": "denial",
      "tag": "denied 2000, 2003",
      "summaryRow": "Broaden reverse-engineering beyond §1201(f)'s statutory carve-out (e.g., printer toner remanufacturing).",
      "timeline": [
        "<b>2000</b> Proposal E.5 — denied — class cannot be defined by purpose",
        "<b>2003</b> Class 21 — denied — §1201(f) is adequate; addresses remanufacturers' concerns"
      ]
    },
    {
      "type": "detail",
      "id": "forensic-investigator-evidence-collection",
      "name": "Forensic investigator evidence collection",
      "tagKind": "denial",
      "tag": "denied 2010",
      "summaryRow": "Permit forensic investigators to circumvent TPMs to collect digital evidence.",
      "timeline": [
        "<b>2010</b> IV.C — denied — proponent failed to describe the class of works or provide compelling evidence"
      ]
    },
    {
      "type": "h3",
      "text": "Preservation by Libraries / Archives / Museums — Granted"
    },
    {
      "type": "detail",
      "id": "motion-pictures-dvd-blu-ray-preservation-by-lams",
      "name": "Motion pictures (DVD/Blu-ray) — preservation by LAMs",
      "tagKind": "cat",
      "tag": "first granted 2021",
      "summaryRow": "Eligible LAMs may circumvent CSS/AACS on damaged or deteriorating DVDs/Blu-rays when no fairly-priced replacement or LAM-accessible streaming alternative exists.",
      "timeline": [
        "<b>2021</b> (b)(3) — new",
        "<b>2024</b> (b)(3) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "software-preservation-by-lams-non-game-programs",
      "name": "Software preservation by LAMs (non-game programs)",
      "tagKind": "cat",
      "tag": "first granted 2018 · expanded twice",
      "summaryRow": "Eligible LAMs may circumvent TPMs on lawfully acquired non-game programs no longer commercially available, for lawful preservation.",
      "timeline": [
        "<b>2018</b> (b)(13) — new — on-premises only",
        "<b>2021</b> (b)(18) — renewed expanded — adds offsite electronic distribution to ONE USER AT A TIME, for a limited time, where LAM has no notice of non-private-study use",
        "<b>2024</b> (b)(20) — renewed expanded — adds explicit \"one user at a time\" definition clarifying that a LAM with multiple lawfully owned copies may lend different copies to different users simultaneously — <span class=\"denial-tag\">partial denial:</span> the proposal to REMOVE the single-user limitation entirely was rejected (noninfringing use not shown)"
      ]
    },
    {
      "type": "detail",
      "id": "video-games-preservation-when-server-abandoned-offline-games-by-lams-from-2018",
      "name": "Video games — preservation when server abandoned (+ offline games by LAMs from 2018)",
      "tagKind": "cat",
      "tag": "first granted 2015 · expanded 2018",
      "summaryRow": "When authentication server abandoned, individuals may restore local gameplay on PC/console; LAMs may preserve.",
      "timeline": [
        "<b>2015</b> (b)(8) — new — only server-failure cases",
        "<b>2018</b> (b)(12) — renewed expanded — adds subpart (ii) for LAM preservation of offline games no longer commercially available; \"complete games\" definition expanded for LAM preservation to include hybrid local/server games",
        "<b>2021</b> (b)(17) — renewed unchanged — <span class=\"denial-tag\">partial denial:</span> Class 14(b) proposed off-premises LAM access to preserved video games — denied (noninfringing use not shown)",
        "<b>2024</b> (b)(19) — renewed unchanged — <span class=\"denial-tag\">partial denial:</span> Class 6(b) again proposed removing the on-premises limitation — denied (market harm concerns)"
      ]
    },
    {
      "type": "h3",
      "text": "Preservation — Denied Petitions"
    },
    {
      "type": "detail",
      "id": "drm-authentication-server-shutdown-broad-beyond-video-games",
      "name": "DRM authentication server shutdown (broad — beyond video games)",
      "tagKind": "denial",
      "tag": "denied 2010",
      "summaryRow": "General DRM server shutdown across all works. The narrower video-game-specific version was later granted in 2015.",
      "timeline": [
        "<b>2010</b> IV.B.1 + IV.B.2 — denied — proponent did not sustain burden of showing adverse effect",
        "<b>2015</b> — narrower video-game version GRANTED this cycle as video-games-preservation (b)(8)"
      ],
      "evo": "Conceptual precursor to the granted video-games-preservation class — the broad cross-work proposal was denied, but a narrower video-game-server-shutdown petition succeeded five years later."
    },
    {
      "type": "detail",
      "id": "library-distributed-audiobooks-electronic-audio-format",
      "name": "Library-distributed audiobooks (electronic audio format)",
      "tagKind": "denial",
      "tag": "denied 2006",
      "summaryRow": "Permit library users to circumvent TPMs on electronically-distributed audiobooks.",
      "timeline": [
        "<b>2006</b> B.7 — denied — complaint was about software incompatibility, not access controls; the technology in question was held to be \"use-facilitating\" rather than \"access-controlling\""
      ]
    },
    {
      "type": "h3",
      "text": "Wireless Network Connectivity"
    },
    {
      "type": "detail",
      "id": "wireless-devices-unlocking-to-connect-to-a-different-carrier",
      "name": "Wireless devices — unlocking to connect to a different carrier",
      "tagKind": "cat",
      "tag": "first granted 2006 · narrowed twice, expanded three times",
      "summaryRow": "Unlock a wireless device to switch carrier networks, where new network operator authorizes the connection.",
      "timeline": [
        "<b>2006</b> (b)(5) — new — cellphone handsets only",
        "<b>2010</b> (b)(3) — renewed narrowed — restricted to \"used\" handsets (previously activated on a network)",
        "<b>2012</b> (b)(3) — renewed narrowed — only handsets acquired within 90 days of the rule's effective date; carrier-failure-to-unlock condition",
        "<b>2015</b> (b)(3) — renewed expanded — device classes broadened: cellphones, tablets, mobile hotspots, wearables (all \"used\")",
        "<b>2018</b> (b)(5) — renewed expanded — \"used device\" requirement DROPPED",
        "<b>2021</b> (b)(8) — renewed expanded — device-class enumeration DROPPED; any wireless device qualifies",
        "<b>2024</b> (b)(8) — renewed unchanged"
      ],
      "evo": "Particularly complex history: narrowed twice under industry pressure (2010, 2012), then broadened three consecutive times (2015, 2018, 2021). Mirrors the Unlocking Consumer Choice and Wireless Competition Act of 2014."
    },
    {
      "type": "h3",
      "text": "Interoperability / Software Installation (Jailbreaking) — Granted"
    },
    {
      "type": "detail",
      "id": "smartphones-and-portable-mobile-devices-jailbreaking-removal-of-software",
      "name": "Smartphones & portable mobile devices — jailbreaking (+ removal of software)",
      "tagKind": "cat",
      "tag": "first granted 2010 · the 'iPhone class'",
      "summaryRow": "Install lawfully obtained third-party apps; from 2015 also remove manufacturer/carrier software.",
      "timeline": [
        "<b>2010</b> (b)(2) — new — the original 'iPhone class'; handsets only, interoperability only",
        "<b>2012</b> (b)(2) — renewed unchanged; the Register declined to extend to tablets this cycle — <span class=\"denial-tag\">partial denial:</span> tablet expansion proposal denied (category too \"broad and ill-defined\") — tablet expansion later granted in 2015",
        "<b>2015</b> (b)(4) — renewed expanded — adds \"portable all-purpose mobile computing devices\" (tablet-like) AND adds removal-of-software clause",
        "<b>2018</b> (b)(6), <b>2021</b> (b)(9), <b>2024</b> (b)(9) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "smart-televisions-jailbreaking-interoperability-only",
      "name": "Smart televisions — jailbreaking (interoperability only)",
      "tagKind": "cat",
      "tag": "first granted 2015",
      "summaryRow": "Install lawfully obtained third-party apps on smart TVs. NO removal-of-software clause (narrower than smartphone class by design).",
      "timeline": [
        "<b>2015</b> (b)(5) — new",
        "<b>2018</b> (b)(7) — renewed unchanged",
        "<b>2021</b> (b)(10) — renewed expanded — \"smart televisions\" definition broadened to include devices physically separate from a TV whose primary purpose is to stream authorized video (set-top streaming boxes like Roku, Apple TV, Chromecast)",
        "<b>2024</b> (b)(10) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "voice-assistant-devices-jailbreaking-removal-of-software",
      "name": "Voice assistant devices — jailbreaking (+ removal of software)",
      "tagKind": "cat",
      "tag": "first granted 2018",
      "summaryRow": "Install lawfully obtained third-party apps on voice-input devices (smart speakers).",
      "timeline": [
        "<b>2018</b> (b)(8) — new",
        "<b>2021</b> (b)(11), <b>2024</b> (b)(11) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "routers-and-dedicated-network-devices-jailbreaking-interoperability-only",
      "name": "Routers & dedicated network devices — jailbreaking (interoperability only)",
      "tagKind": "cat",
      "tag": "first granted 2021",
      "summaryRow": "Install third-party firmware (OpenWrt, DD-WRT, etc.) on routers and dedicated network devices.",
      "timeline": [
        "<b>2021</b> (b)(12) — new",
        "<b>2024</b> (b)(12) — renewed unchanged"
      ]
    },
    {
      "type": "h3",
      "text": "Jailbreaking — Denied Petitions"
    },
    {
      "type": "detail",
      "id": "video-game-console-jailbreaking",
      "name": "Video game console jailbreaking",
      "tagKind": "denial",
      "tag": "denied 2012, 2015",
      "summaryRow": "Permit jailbreaking of video game consoles for software interoperability (parallel to the granted smartphone class).",
      "timeline": [
        "<b>2012</b> Class 3 — denied — evidentiary record did not support adverse impact",
        "<b>2015</b> Class 19 — denied — \"jailbreaking of video game consoles continues to be closely associated with video game piracy\""
      ],
      "evo": "The Register's piracy-correlation reasoning has been consistent. The 2021/2024 codified consumer-device repair class includes a narrow video-game-console carve-out for optical-drive repair only, not for jailbreaking."
    },
    {
      "type": "detail",
      "id": "e-book-reader-jailbreaking",
      "name": "E-book reader jailbreaking",
      "tagKind": "denial",
      "tag": "denied 2015",
      "summaryRow": "Permit jailbreaking of dedicated e-book readers (Kindle, Nook, etc.) for software interoperability.",
      "timeline": [
        "<b>2015</b> Class 18 — denied — insufficient factual or legal support"
      ]
    },
    {
      "type": "detail",
      "id": "personal-computers-os-restricted-programs-secure-boot",
      "name": "Personal computers / OS-restricted programs / secure boot",
      "tagKind": "denial",
      "tag": "denied 2006, 2012",
      "summaryRow": "Circumvent access controls on general-purpose personal computers, OS-locked computer programs, or secure-boot mechanisms.",
      "timeline": [
        "<b>2006</b> B.5 — denied — insufficient evidence",
        "<b>2012</b> Class 4 — denied — speculative; no specific compelling evidence"
      ],
      "evo": "PC jailbreaking has effectively never been on the table — partly because most PCs don't enforce OS lock-in the way mobile devices do."
    },
    {
      "type": "h3",
      "text": "Repair, Diagnosis, & Modification — Granted"
    },
    {
      "type": "detail",
      "id": "motorized-land-vehicles-marine-vessels-from-2021-diagnosis-repair-lawful-modification",
      "name": "Motorized land vehicles (+ marine vessels from 2021) — diagnosis, repair, lawful modification",
      "tagKind": "cat",
      "tag": "first granted 2015 · right-to-repair anchor",
      "summaryRow": "Owner repair/diagnosis/modification of vehicle ECU/computer programs. Subscription-service programs excluded.",
      "timeline": [
        "<b>2015</b> (b)(6) — new — 12-month delayed effective date; broad telematics/entertainment carve-out",
        "<b>2018</b> (b)(9) — renewed expanded — 12-month delay DROPPED; telematics/entertainment exclusion replaced with narrower subscription-service exclusion",
        "<b>2021</b> (b)(13) — renewed expanded — adds marine vessels (boats, commercial vessels, mechanized agricultural vessels)",
        "<b>2024</b> (b)(13) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "vehicles-and-marine-vessels-owner-access-to-operational-diagnostic-telematics-data",
      "name": "Vehicles & marine vessels — owner access to operational/diagnostic/telematics data",
      "tagKind": "cat",
      "tag": "first granted 2024",
      "summaryRow": "Owners/lessees (or agents) may circumvent to access, store, and share vehicle/vessel operational data.",
      "timeline": [
        "<b>2024</b> (b)(14) — new — distinct from (b)(13) repair class"
      ]
    },
    {
      "type": "detail",
      "id": "consumer-devices-diagnosis-maintenance-or-repair",
      "name": "Consumer devices — diagnosis, maintenance, or repair",
      "tagKind": "cat",
      "tag": "first granted 2018 · broadened 2021",
      "summaryRow": "Right-to-repair for consumer devices.",
      "timeline": [
        "<b>2018</b> (b)(10) — new — limited to \"smartphone or home appliance or home system\" (refrigerator, thermostat, HVAC, electrical system)",
        "<b>2021</b> (b)(14) — renewed expanded — broadened to any \"device primarily designed for use by consumers\"; narrow video-game-console carve-out added (optical-drive repair only, must restore TPMs)",
        "<b>2024</b> (b)(15) — renewed unchanged — <span class=\"denial-tag\">partial denial:</span> a proposed broader expansion to all commercial and industrial equipment was rejected; only retail food-prep equipment was carved out and granted as the separately-tracked (b)(16)"
      ]
    },
    {
      "type": "detail",
      "id": "medical-devices-and-systems-diagnosis-maintenance-or-repair",
      "name": "Medical devices & systems — diagnosis, maintenance, or repair",
      "tagKind": "cat",
      "tag": "first granted 2021",
      "summaryRow": "Independent repair of lawfully acquired medical devices/systems and related data files.",
      "timeline": [
        "<b>2021</b> (b)(15) — new",
        "<b>2024</b> (b)(17) — renewed unchanged"
      ]
    },
    {
      "type": "detail",
      "id": "retail-commercial-food-prep-equipment-diagnosis-maintenance-or-repair",
      "name": "Retail commercial food prep equipment — diagnosis, maintenance, or repair",
      "tagKind": "cat",
      "tag": "first granted 2024",
      "summaryRow": "Repair of commercial food-prep equipment (e.g., the McDonald's ice cream machine problem).",
      "timeline": [
        "<b>2024</b> (b)(16) — new — narrow carve-out from a broader proposed Class 5 (the broader scope was denied)"
      ]
    },
    {
      "type": "h3",
      "text": "Repair — Denied Petitions"
    },
    {
      "type": "detail",
      "id": "commercial-and-industrial-equipment-repair-beyond-food-prep",
      "name": "Commercial & industrial equipment repair (beyond food prep)",
      "tagKind": "denial",
      "tag": "denied 2024",
      "summaryRow": "Repair of all software-enabled commercial and industrial equipment.",
      "timeline": [
        "<b>2024</b> Class 5 (broader scope) — denied — insufficient evidence on record beyond the food-prep carve-out"
      ],
      "evo": "Likely to recur in future cycles as right-to-repair advocacy expands beyond consumer devices."
    },
    {
      "type": "h3",
      "text": "Patient / Owner Data Access"
    },
    {
      "type": "detail",
      "id": "medical-device-data-patient-access-to-own-data",
      "name": "Medical-device data — patient access to own data",
      "tagKind": "cat",
      "tag": "first granted 2015 · major 2021 expansion",
      "summaryRow": "Patients (or agents from 2021) may circumvent to access data their own medical devices generate.",
      "timeline": [
        "<b>2015</b> (b)(10) — new (Hugo Campos's class) — implanted devices only; passive monitoring of wireless transmissions only; patient personally must undertake circumvention",
        "<b>2018</b> (b)(4) — renewed unchanged",
        "<b>2021</b> (b)(7) — renewed expanded — three expansions: \"by or on behalf of\" a patient (delegation permitted); implantation requirement REMOVED; passive-monitoring restriction REMOVED",
        "<b>2024</b> (b)(7) — renewed unchanged"
      ]
    },
    {
      "type": "h3",
      "text": "Material / Feedstock Interoperability"
    },
    {
      "type": "detail",
      "id": "3d-printers-feedstock-material-interoperability",
      "name": "3D printers — feedstock / material interoperability",
      "tagKind": "cat",
      "tag": "first granted 2015 · expanded twice",
      "summaryRow": "Circumvent TPMs that limit a 3D printer to manufacturer-approved feedstock/material.",
      "timeline": [
        "<b>2015</b> (b)(9) — new — initially limited to \"microchip-reliant\" TPMs and excluded 3D printers producing regulated-commerce goods",
        "<b>2018</b> (b)(14) — renewed expanded — regulated-commerce exclusion DROPPED",
        "<b>2021</b> (b)(19) — renewed expanded — \"microchip-reliant\" qualifier DROPPED; \"feedstock\" generalized to \"material\"",
        "<b>2024</b> (b)(21) — renewed unchanged"
      ]
    },
    {
      "type": "h3",
      "text": "Software License Compliance"
    },
    {
      "type": "detail",
      "id": "foss-programs-investigation-of-potential-license-infringement",
      "name": "FOSS programs — investigation of potential license infringement",
      "tagKind": "cat",
      "tag": "first granted 2021",
      "summaryRow": "Investigate FOSS license violations (typically GPL compliance) on a lawfully acquired device. Excludes video game consoles. Standing required.",
      "timeline": [
        "<b>2021</b> (b)(20) — new",
        "<b>2024</b> (b)(22) — renewed unchanged"
      ]
    },
    {
      "type": "h3",
      "text": "Denied — Class-Definition Disputes & Threshold Issues"
    },
    {
      "type": "detail",
      "id": "broad-use-based-exemptions-all-fair-use-all-noninfringing-uses",
      "name": "Broad use-based exemptions ('all fair use', 'all noninfringing uses')",
      "tagKind": "denial",
      "tag": "denied 2000-2012 (4 cycles)",
      "summaryRow": "Recurring proposal for a blanket exemption covering all works for noninfringing or fair uses.",
      "timeline": [
        "<b>2000</b> Proposals E.7 + E.9 — denied — \"a particular class of work must be determined primarily by reference to qualities of the work itself. It cannot be defined by reference to the class of users or uses of the work.\"",
        "<b>2003</b> Classes 1, 2, 4, 7 — denied procedurally — \"utterly failed to propose a particular class of copyrighted works\"",
        "<b>2006</b> B.8 — denied procedurally — failed to articulate a cognizable class",
        "<b>2012</b> Class 1 — denied — beyond scope of rulemaking"
      ],
      "evo": "Petitioned and denied in four cycles. After 2012, sophisticated petitioners stopped framing proposals this way — though the recurring petitions before that reflected a persistent advocacy strategy that simply did not match the statute."
    },
    {
      "type": "detail",
      "id": "public-domain-works-behind-tpms",
      "name": "Public-domain works behind TPMs",
      "tagKind": "denial",
      "tag": "denied 2003, 2006, 2012",
      "summaryRow": "Petition to permit circumvention of TPMs on works in the public domain.",
      "timeline": [
        "<b>2003</b> Class 7 — denied — §1201 not applicable to public-domain works; no exemption needed",
        "<b>2006</b> A.2-secondary — denied — not access controls; no exemption needed",
        "<b>2012</b> Class 1 — denied — beyond scope of rulemaking"
      ],
      "evo": "The Register's position is doctrinally clean: §1201 only prohibits circumventing TPMs that effectively control access to copyrighted works. But the practical problem — TPMs sometimes do lock up public-domain content as a side effect of locking up copyrighted content — has not been addressed in the rulemaking."
    },
    {
      "type": "detail",
      "id": "avionics-aircraft-data-systems",
      "name": "Avionics / aircraft data systems",
      "tagKind": "denial",
      "tag": "denied 2018",
      "summaryRow": "Permit circumvention of access controls on aircraft electronic systems to enable access to flight/operations data.",
      "timeline": [
        "<b>2018</b> Class 11 — denied — the data at issue (flight stats, fuel economy, etc.) are facts, which are not copyrightable, so §1201 does not apply"
      ]
    }
  ]
};
