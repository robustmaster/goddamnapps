# Goddamn Apps

狗日的 App 档案。记录坑用户的产品、公司和操作，但正文必须有证据。

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
