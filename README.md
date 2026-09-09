# The Art Garden — Netlify deployment

This package is the cleaned production-ready static site.

## Deploy
Upload the contents of this folder to GitHub (not the ZIP itself). The repository root should contain `index.html`, `styles.css`, `script.js`, `events.json`, `netlify.toml`, and `assets/`.

## Edit events
Edit `events.json` in GitHub. Each event supports:
- title
- subtitle
- date
- time
- location
- price
- image
- bookingUrl
- active (true/false)

Set `active` to `false` to hide an event without deleting it.

## Social links
Replace the three placeholder URLs in `index.html` with your real Instagram, Facebook, and TikTok URLs. WhatsApp is already linked to +1 (868) 290-4271.

## Contact
Phone: +1 (868) 290-4271
Email: theartgardentt@gmail.com

## Netlify
After pushing to GitHub, import the repository into Netlify. Build command: leave blank. Publish directory: `.`. Then connect `theart.garden` under Domain management.
