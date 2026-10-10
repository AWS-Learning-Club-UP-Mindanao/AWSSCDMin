# Schedule section — notes for the PR body

Comments were stripped from the code and kept here instead, per the repo's convention.

## Ordering

- One session per timeline entry. The 09:30 sessions are listed as four separate entries
  (Registration, the placeholder workshop, AWS Kiro, and the Room 212 / Room 222 pair) rather
  than stacked under a single marker, matching the design frames. The Room 212 / 222 pair stays
  in one entry because those two run in parallel rooms.

## Collapsed view

- The section opens on five timeslots. `View full timeline` appends the rest and becomes
  `Show less`, which collapses back.
- Hidden rows stay in the DOM, so expanding does not reflow the page.
- The list element carries `data-expanded`; CSS decides what shows and the button only reports
  it, so the two cannot disagree.
- When collapsed the fifth row's spine fades out like the final row's, otherwise it would hang
  a stub of line down into the hidden rows.

## Hover and tap state

- Only the card under the cursor lights up, so when two rooms share a timeslot the other stays
  quiet.
- The lit card takes a `surface-brand-tertiary` border with a 20px box-shadow in the same
  colour; that row's dot and connecting line turn white, with a 20px white halo on the dot.
- Hover is inside `@media (hover: hover)` so a tap cannot leave a card stuck lit on mobile.
  `:focus-within` covers keyboard reach.
- A tap sets `[data-pressed]` on the card under the finger and clears any other; tapping off
  the timeline clears them all.
- `:has()` keeps the dot/line rule on the row, where the connector lives, rather than having
  the card reach sideways into its sibling.

## Mobile

- The vertical line connecting the dots was invisible below 768px because all three spine spans
  carried `hidden md:block`. The list row now has a connector column and the spines are not
  md-gated.
- The star field is tiled at its natural size below `md` instead of being cropped by
  `object-cover`, which was scaling the canvas 2.25x and keeping only the middle ~10% of its
  width — leaving the top 40% of the section with no stars.

## Star trail

- `star_trail_1.svg` replaces the two separate `bright_star.svg` placements; the single
  artwork carries both stars in their designed relationship.
- The trail's greys and whites are recoloured to purple-blue in the asset itself, so the
  artwork paints its own colour and needs no blend pass. A `color-dodge` pass recolours the
  star along with the trail, because dodge divides per channel and the star's yellow has blue
  at zero — that is what produced the red-flushed star earlier.
- The trail spans the full width across the top of the section and sits at `opacity-80`.
- `star_trail_1_original.svg` keeps the unedited artwork alongside the recoloured one.

## Carried over from the review

- `bright_star_group.svg` is no longer referenced by the schedule but is left in the repo.
- The `surface-*` tokens in the theme are `--color-surface-*`; the design export writes
  `--surface-*`, which will not resolve.
