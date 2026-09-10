# The Art Garden — Netlify + No-Code Editor

## What this version does
- Uses the supplied transparent Art Garden PNG logo.
- Uses real event photography instead of event poster graphics.
- Keeps the site lightweight and static.
- Adds a Decap CMS editor at `/admin/`.
- Events can be added, removed, reordered, hidden, photographed, priced and linked without editing HTML/JavaScript.
- Phone, email, WhatsApp and social links can be changed from Site Settings.

## One-time CMS setup
This package uses Decap CMS with the GitHub backend and the `lukegap/the-art-garden` repository.

After the site is deployed to Netlify:
1. Configure GitHub as an OAuth authentication provider in Netlify.
2. Visit `https://YOUR-SITE/admin/`.
3. Sign in with the GitHub account that has write access to the repository.
4. Use Events and Site Settings from the left sidebar.
5. Click Publish. Decap writes the change to GitHub and Netlify automatically redeploys the site.

## Netlify build
Build command: blank
Publish directory: `.`

## Current editable event photos
- Neon Nights: `/uploads/neon-nights-event.jpeg`
- Artist(e) Zone: `/uploads/artist-zone-live-music.jpeg`

The event poster graphics are no longer used in the event cards.
