# Nishandhinee P — Portfolio

A personal portfolio site for software engineering / IT roles, built with
plain HTML, CSS, and JavaScript (no build tools, no frameworks).

**Live design:** a "circuit trace / signal" identity — brass + signal-green
accents on ink/paper backgrounds, Space Grotesk + Inter + IBM Plex Mono
typefaces, an animated waveform in the hero.

## Files

```
index.html    Page structure and content
style.css     All styling (design tokens, layout, responsive rules)
script.js     All interactivity (theme toggle, animations, nav,
              typewriter effect, skill bars, project filter,
              contact form, toasts, etc.)
```

Your photo and resume PDF are embedded directly inside `index.html`
(base64), so there are no other assets to manage.

## Run locally

No build step needed. Just open `index.html` in a browser, or serve the
folder with any static server, e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

1. Create a new GitHub repository and push these files to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)` folder, then
   **Save**.
4. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`
   (it can take a minute or two to go live the first time).

All asset links in this project use **relative paths**, so it works
correctly whether deployed at the root of a GitHub Pages site or under a
repository subpath — no configuration changes needed.

## Deploy with Vercel

**Option A — via GitHub (recommended, auto-redeploys on every push):**
1. Push this project to a GitHub repository (see steps above).
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Framework Preset: **Other** (this is a plain static site, no build step).
4. Leave Build Command and Output Directory empty — Vercel will serve the
   files as-is. Click **Deploy**.
5. Vercel gives you a live URL immediately (e.g. `your-project.vercel.app`),
   and redeploys automatically every time you push to GitHub.

**Option B — via CLI, no GitHub required:**
```bash
npm install -g vercel
vercel
```
Follow the prompts (first deploy asks a few setup questions, defaults are
fine for a static site). Run `vercel --prod` to publish to your production URL.

A `vercel.json` is included with sensible defaults (clean URLs, no trailing
slashes) — you don't need to edit it.

## Deploy with Netlify

1. Push to GitHub, then go to [app.netlify.com/start](https://app.netlify.com/start)
   and import the repo — or simply drag-and-drop the whole folder at
   [app.netlify.com/drop](https://app.netlify.com/drop) for an instant deploy
   with no GitHub needed.
2. Build command: leave empty. Publish directory: `/` (root).
3. Deploy.


## Editing content

- Text/content → edit `index.html` (each section has a clear `id`, e.g.
  `id="about"`, `id="projects"`, `id="contact"`)
- Colors, spacing, fonts, layout → edit `style.css`
- Behavior/interactivity → edit `script.js`
