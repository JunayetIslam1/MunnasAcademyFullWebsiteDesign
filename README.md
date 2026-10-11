# Munna's Academy — React + Tailwind (full website)

```
npm install
npm run dev          # http://localhost:5173
npm run sync         # copies ALL videos + notice images from munnasacademy.com (run once, then again when the site has new content)
```

Pages: `/`, `/about`, `/videos`, `/videos/:classId`, `/live-class`, `/informational-videos`,
`/notice-board`, `/notice-board/:id`, `/exam-ranking`, `/contact`

Data: `src/data/homeData.js` (built-in content) + `src/data/synced.json` (filled by `npm run sync`).
For a live server make every URL open `index.html` (SPA fallback).
