# Goddamn Apps

Apps that screw users, documented with receipts.

## Development

```bash
npm install
npm run dev
```

## Content

Cases live in `src/pages/cases/*.md`. Keep each case short, source-backed, and tagged by behavior:

- `privacy-abuse`
- `malware-like`
- `dark-patterns`
- `subscription-traps`
- `refund-hell`
- `ad-abuse`
- `account-hostage`
- `price-games`

Each case should distinguish confirmed facts from reported or alleged claims.

## Deploy

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

GitHub Pages also works if needed.

