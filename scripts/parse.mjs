/* HTML parsing helpers used by sync-site.mjs */

export const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

/* every video of a class page:  [{ id, img, title }]  (img = file inside videos/allimage/) */
export function parseVideos(html) {
  const hits = [];
  const re = /videoid=(\d+)/g;
  let m;
  while ((m = re.exec(html))) hits.push({ id: m[1], pos: m.index });

  const seen = new Set();
  const out = [];
  hits.forEach((h, i) => {
    if (seen.has(h.id)) return;
    const next = hits.find((x, j) => j > i && x.id !== h.id);
    const win = html.slice(h.pos, Math.min(next ? next.pos : h.pos + 2500, h.pos + 2500));
    const img = win.match(/src=["']([^"']*videos\/allimage\/[^"']+)["']/i);
    const title = win.match(/title=["']([^"']+)["']/i) || win.match(/alt=["']([^"']+)["']/i);
    if (img && title) {
      seen.add(h.id);
      out.push({
        id: Number(h.id),
        img: decode(img[1]).split("videos/allimage/")[1],
        title: decode(title[1]),
      });
    }
  });
  return out;
}

/* notice ids + titles listed on the home page */
export function parseNoticeList(html) {
  const out = [];
  const seen = new Set();
  const re = /notice-board\.php\?id=(\d+)["'][^>]*>\s*([^<]+?)\s*</g;
  let m;
  while ((m = re.exec(html))) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    out.push({ id: Number(m[1]), title: decode(m[2]) });
  }
  return out;
}

/* one notice page -> { img, date } */
export function parseNotice(html) {
  const img = html.match(/cp\/images\/news-notice\/([^"'\s)<>]+)/);
  const date = html.match(/([A-Z][a-z]{2} \d{1,2}, \d{4})/);
  return { img: img ? decode(img[1]) : null, date: date ? date[1] : null };
}
