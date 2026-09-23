# AWSSCDMin

Landing page for AWS Student Community Day Mindanao.

Astro for the build, Tailwind v4 for styling. Output is plain HTML/CSS/JS in `dist/`.

## Setup

Node 22+, and **pnpm — not npm or yarn.** Don't run `npm install`; it ignores
`pnpm-lock.yaml` and writes a `package-lock.json` we don't want.

    pnpm install
    pnpm dev        # localhost:4321
    pnpm build      # -> dist/
    pnpm preview    # serve the build
    pnpm check      # typecheck .astro and .ts files

## Layout

    src/pages/         routes — index.astro is the page
    src/layouts/       shared shells
    src/components/    page sections
    src/styles/        global.css, the Tailwind entry
    public/            served as-is

## Contributing

`main` is protected. Don't commit or push to it directly — everything goes
through a pull request.

Branch off main, one feature per branch:

    git switch main && git pull
    git switch -c charles/feat/speaker-grid

Branch and PR names use the same shape: `<username>/<type>/<short-description>`

    charles/feat/hero-countdown
    charles/fix/mobile-nav-overlap

Commits are conventional, small, and scoped:

    feat(hero): add countdown timer
    fix(speakers): close modal on escape
    chore(deps): bump astro to 7.4.0

Types in use: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `perf`, `test`.
PR titles follow the same convention.

The PR description should cover:

- what changed and why
- how it was tested — viewport, browser, `pnpm check`, and a clean `pnpm build`
- screenshots for anything visual
- anything unfinished or knowingly broken

At least one review before merge. Squash merge, then delete the branch.

Avoid reformatting files you didn't touch, and don't add dependencies without
raising it in the PR first.
