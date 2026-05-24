# Section 1201 of Title 17 — A Report of the Register of Copyrights (June 2017)

The Copyright Office's comprehensive policy study of §1201 anticircumvention,
conducted at Congress's request (Senators Grassley and Leahy, Oct 22, 2015,
letter under the software study's directory). The study is distinct from the
triennial rulemakings under §1201(a)(1)(C) — it is a policy review and contains
the Register's recommendations to Congress.

The Office published the Notice of Inquiry in late 2015, accepted public
comments, held public roundtables in Los Angeles and Washington in May 2016,
and issued the Full Report in June 2017.

## What's here

| File / dir | Contents |
|---|---|
| `Full-Report.pdf` / `.txt` | The 2017 Register's Report to Congress (195 PDF pages). |
| `Federal-Register-Notices/` | The NOI and subsequent extension / roundtable / additional-comment notices. |
| `Roundtable/` | Public-roundtable agendas and transcripts (Los Angeles 2016-05-19 & 05-20; Washington 2016-05-25). |
| `Comments/` | Every public comment filed in the docket (`COLC-2015-0012`) via regulations.gov — both inline-text submissions (`*_comment.txt`) and uploaded attachments. `manifest.csv` is the index. |

## Federal Register notices in this docket (in order)

| Filename | Date | Description |
|---|---|---|
| `80fr65944-2015-10-26-Study-Notice.pdf` | 2015-10-26 | Notice of public study, with the initial questions. |
| `80fr81369-2015-12-29-NOI.pdf` | 2015-12-29 | Notice of Inquiry inviting written comments. |
| `81fr8545-2016-02-22-Extension.pdf` | 2016-02-22 | Extension of the initial-comment deadline. |
| `2016-06925-2016-03-28-Roundtable-Notice.pdf` | 2016-03-28 | Public roundtable announcement (shared with the software-study docket). |
| `2016-23167-2016-09-27-Additional-Comments.pdf` | 2016-09-27 | Reopening for additional comments after the roundtables. |

## Comments

The `Comments/` directory holds every public comment from the
[regulations.gov docket COLC-2015-0012](https://www.regulations.gov/docket/COLC-2015-0012/comments).

- **Inline text comments** are saved as `<comment-id>_<Submitter>_comment.txt`
  with a small header (id, title, posted date, submitter) followed by the
  submitter's typed text.
- **Attachments** are saved as `<comment-id>_<Submitter>_<attachment-suffix>.<ext>`
  alongside the inline-text file (a comment may have either or both).
- **`manifest.csv`** indexes every comment: id, posted date, submitter,
  organization, last/first name, title, the inline-text filename (if any),
  and a pipe-separated list of attachment filenames.

To re-run the fetch (e.g., if regulations.gov adds late-arriving submissions):

```
REG_API_KEY=… python3 tools/fetch-regulations-comments.py \
    --docket COLC-2015-0012 \
    --out "1201/Policy Studies/Section-1201-of-Title-17-2017/Comments" \
    --skip-existing
```

The free regulations.gov API key is available at
<https://api.data.gov/signup/>.

## Text extraction

PDFs in this directory tree were extracted with `tools/extract-pdf.py` using
pypdf. The convention matches the rest of the archive: one `[PAGE N]` marker
per page at the top of the page's content, with 3+ blank lines collapsed to
2. A handful of older scanned PDFs may produce near-empty `.txt` outputs —
those source PDFs are image-only and would need OCR.

## Relationship to the rest of `1201/`

- **`1201/Final Rules/` and `Reg Recommendation/`** — the triennial rulemaking
  record. The 2017 policy study informs but does not replace those.
- **`1201/Policy Studies/Software-Enabled-Consumer-Products-2016/`** — the
  Office's parallel software-products study running on the same timeline,
  with overlapping subject matter and witnesses.
- **`1201/Claude Reports/`** — Claude's research notes that may cite this
  study.

## Not legal advice

This archive describes the §1201 policy record. The Full Report is the
Register's recommendation to Congress; it is not itself a regulation.
