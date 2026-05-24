# Software-Enabled Consumer Products — A Report of the Register of Copyrights (December 2016)

The Copyright Office's study of how copyright law applies to software embedded
in everyday consumer products (cars, appliances, smart devices, etc.). The
study was conducted at the request of Senators Grassley and Leahy (Oct 22,
2015, see `Request-Letter-Grassley-Leahy-2015-10-22.pdf`).

The Office published the Notice of Inquiry in December 2015, accepted public
comments through early 2016, held public roundtables in Los Angeles and
Washington in May 2016, and issued the Full Report in December 2016. The
study ran on the same timeline as the parallel
[Section 1201 of Title 17 study](../Section-1201-of-Title-17-2017/) — many
witnesses appeared in both proceedings.

## What's here

| File / dir | Contents |
|---|---|
| `Full-Report.pdf` / `.txt` | The 2016 Register's Report (94 PDF pages). |
| `Request-Letter-Grassley-Leahy-2015-10-22.pdf` | The Senators' request to the Office. *(Image-only PDF; no embedded text layer — the `.txt` extraction is near-empty as a result.)* |
| `Federal-Register-Notices/` | The NOI and roundtable notice. |
| `Roundtable/` | Public-roundtable agendas and transcripts (Los Angeles 2016-05-18; Washington 2016-05-24). |
| `Comments/` | Every public comment filed in the docket (`COLC-2015-0011`) via regulations.gov — both inline-text submissions and uploaded attachments. `manifest.csv` is the index. |

## Federal Register notices in this docket (in order)

| Filename | Date | Description |
|---|---|---|
| `80fr77668-2015-12-15-NOI.pdf` | 2015-12-15 | Notice of Inquiry inviting written comments. |
| `2016-06925-2016-03-28-Roundtable-Notice.pdf` | 2016-03-28 | Public roundtable announcement (shared with the §1201 study docket). |

## Comments

The `Comments/` directory holds every public comment from the
[regulations.gov docket COLC-2015-0011](https://www.regulations.gov/docket/COLC-2015-0011/comments).

- **Inline text comments** are saved as `<comment-id>_<Submitter>_comment.txt`
  with a small header (id, title, posted date, submitter) followed by the
  submitter's typed text.
- **Attachments** are saved as `<comment-id>_<Submitter>_<attachment-suffix>.<ext>`
  alongside the inline-text file.
- **`manifest.csv`** indexes every comment: id, posted date, submitter,
  organization, last/first name, title, the inline-text filename (if any),
  and a pipe-separated list of attachment filenames.

To re-run the fetch:

```
REG_API_KEY=… python3 tools/fetch-regulations-comments.py \
    --docket COLC-2015-0011 \
    --out "1201/Policy Studies/Software-Enabled-Consumer-Products-2016/Comments" \
    --skip-existing
```

## Subject-matter overlap with the §1201 study

Both studies grew out of the same Grassley/Leahy request and ran concurrently
in 2016. Where the §1201 study focused on the anticircumvention prohibition
and its triennial rulemaking, the software-products study focused on how
copyright in embedded software interacts with ownership of the underlying
product — first-sale doctrine, repair, security research, interoperability.
Many of the same commenters and roundtable participants appear in both
dockets. The repair-rights and right-to-modify themes Kyle / iFixit follow
across the triennial cycles run continuously through the record of both
studies.

## Not legal advice

This archive describes the policy record. The Full Report is the Register's
recommendation; it is not itself a regulation.
