# 狗日的应用

记录应用侵害用户的行为。

## Development

```bash
npm install
npm run dev
```

## Content

案例放在 `src/pages/cases/*.md`。每篇保持短、准、有来源，并按行为打标签：

- `privacy-abuse`
- `malware-like`
- `dark-patterns`
- `subscription-traps`
- `refund-hell`
- `ad-abuse`
- `account-hostage`
- `price-games`

每篇案例都要区分“已确认事实”“公开报道”“待核实说法”。

## Deploy

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`

GitHub Pages also works if needed.
