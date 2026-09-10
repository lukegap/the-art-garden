# The Art Garden — Netlify + No-Code Editor

This is the production-ready static site package.

## Public site
- `index.html` — website
- `styles.css` — design
- `script.js` — content loader and link wiring
- `events.json` — editable event data
- `site-settings.json` — editable contact, social and CTA links
- `uploads/` — event photos
- `art-garden-logo.png` — transparent Art Garden logo
- `admin/` — Decap CMS editor

## Netlify
- Build command: leave blank
- Publish directory: `.`
- Branch: `main`

## No-code editing
Once Decap authentication is configured, visit `/admin/`.
Edit Events or Site Settings, then Publish. Netlify will redeploy from GitHub automatically.

## Editable links
Site Settings controls:
- Book Now
- Private Events
- Corporate
- Academy
- Studio
- Collaboration
- Phone, email, WhatsApp
- Instagram, Facebook, TikTok

The event editor controls each event's own registration/booking URL.


Favicon: The supplied transparent Art Garden logo is used for browser tabs and Apple touch icons.


Photo editing: the CMS includes a Photos & Cropping section. You can replace images and choose the focal area used by the website crop. Event photos also have a Photo Focus control.
