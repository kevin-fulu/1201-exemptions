# §1201 data-layer build. Requires Node (stdlib only — no npm install).

.PHONY: build check comments

# Regenerate diagram-data.js and diagram-repair-data.js from the data layer
# (analysis/lineages.json + analysis/views/*.json). Also writes analysis/derived/*.
build:
	node analysis/build/build.mjs

# Validate + render + verify against the committed diagrams, without writing.
check:
	node analysis/build/build.mjs --check

# Regenerate analysis/comments.json from the first-round-comments manifests.
# Only needed when those manifests change (once per cycle).
comments:
	node analysis/build/comments.mjs
