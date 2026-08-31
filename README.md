# The Smell Expert — website

A single-page site for **thesmellexpert.com**, built for LACENTA's medico-legal
anosmia practice. Plain HTML/CSS/JS — no build step, no dependencies. Anyone
can open `index.html` in a browser and it works as-is.

## Files

| File | What it does |
|---|---|
| `index.html` | All page content and structure |
| `styles.css` | All styling (colors, layout, responsive rules) |
| `script.js` | Mobile menu, header scroll effect, animated stats |
| `CNAME` | Tells GitHub Pages this site should answer to `thesmellexpert.com` |
| `assets/` | LACENTA logo + favicon files |

## Editing content

Everything visible on the page lives in `index.html` as plain text between
HTML tags — no templating. To change wording, find the text in the file and
edit it directly. Section by section:

- **Hero** — headline, sub-line, and the two buttons near the top
- **Exhibit A** — "Clinical impact" / "Objective methodology" lists
- **Exhibit B** — the 4-step process
- **Exhibit C** — the four "why it matters" cards
- **Exhibit D** — the services pills
- **Contact** — the email address and "what to include" list

## Colors & fonts

Colors are defined once at the top of `styles.css` under `:root` (look for
`--navy-950`, `--blue-600`, etc.) — change a value there and it updates
everywhere it's used. Headings use **Oswald**, body text uses **Manrope**
(both loaded free from Google Fonts in `index.html`).

## Adding a real contact form

Right now "Contact" is a `mailto:` button to `pi@laent.com`. If you'd rather
use a Google Form, see the comment block at the bottom of `script.js` —
it explains exactly where to paste the embed code once you've built the form.

## Publishing it

See the step-by-step GitHub + domain instructions Frank has from Claude, or
in short: push these files to a GitHub repo, turn on GitHub Pages, and point
thesmellexpert.com's DNS at GitHub. Full steps are in the chat that produced
this project.
