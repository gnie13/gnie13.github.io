# Gavin Nienke — Portfolio

A single-page personal portfolio site. Plain HTML/CSS/JS, no build step, no dependencies.

## Structure

- `index.html` — page content and structure
- `styles.css` — all styling (dark theme by default, respects light OS preference)
- `script.js` — mobile nav toggle + scroll-reveal animations

## Running locally

Just open `index.html` in a browser, or serve it locally:

```
npx serve .
```

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `gnie13.github.io` for a root-domain site, or any name like `portfolio` for a project page).
2. Push this folder to that repo:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/gnie13/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → Deploy from branch → main / (root)**.
4. Your site will be live at:
   - `https://gnie13.github.io/` (if the repo is named `gnie13.github.io`), or
   - `https://gnie13.github.io/<repo-name>/` (for any other repo name).
5. Add that URL to your LinkedIn profile ("Featured" or "Contact info → Website") and pin the repo on your GitHub profile.

## Things to customize later

- Swap the placeholder GitHub project links for direct links to your Flight Display System and Spotify Tracker repos once they're public.
- Optionally add a downloadable resume PDF (`resume.pdf` in this folder) and link it from the hero section.
- Update copy as your internship search progresses (e.g. once you have a Summer 2027 internship, add it above Empirical Technologies).
