# HVAC Website Audit Landing Page (V1)

One-page, mobile-first landing page for a freelance web designer/developer serving HVAC companies in the UK and Lithuania.

## Local preview

1. Open `index.html` directly in your browser.
2. For a local server preview (recommended), run:
   - `python -m http.server 8000`
3. Visit `http://localhost:8000`.

## GitHub Pages deployment

1. Push this repo to GitHub.
2. In GitHub, open `Settings` > `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` and `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   - `https://kbabic1119.github.io/hvac-website-audit/`

## Project files

- `index.html` - page structure and content
- `styles.css` - responsive styles and color system
- `script.js` - UI behavior + localization-ready content renderer

## Localization-ready structure

English is the default locale. The page is now prepared so Lithuanian can be added without
rewriting HTML sections.

How it works:

- `index.html` uses `data-i18n` keys for single text values.
- Repeated content blocks (problems, examples, benefits, process, trust bullets) are rendered from
  reusable arrays in `script.js`.
- Locale content lives in the `content` object in `script.js`:
  - `content.en` contains the active English copy.
  - `content.lt` is a scaffold for future Lithuanian copy.
- Missing Lithuanian keys automatically fall back to English, so partial translation is safe.
- You can preview a locale by query parameter:
  - `?lang=en`
  - `?lang=lt`

Suggested next step for Lithuanian (`lt`):

1. Fill `content.lt` in `script.js` with translated strings and arrays (same shape as `content.en`).
2. Keep labels and section arrays aligned with English keys.
3. Update `metaTitle` and `metaDescription` in `content.lt`.
4. Optionally add a language toggle later that switches `?lang=en` / `?lang=lt`.
