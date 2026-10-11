/*
  npm run sync

  Copies the data from https://www.munnasacademy.com into src/data/synced.json:
    - EVERY video of every class (not only the latest 8)
    - the notice list + the image/date of every notice (class routine pages)
  Run it any time the original site gets new content, then rebuild.
  Needs Node 18+ (built-in fetch) and internet access.
*/
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseNotice, parseNoticeList, parseVideos } from "./parse.mjs";

const SITE = "https://www.munnasacademy.com";
const CLASS_IDS = [20, 21, 22, 23, 1, 2, 3, 5, 6, 11, 12, 13, 14, 8, 18, 19];
const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/synced.json");

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(path) {
  const res = await fetch(SITE + "/" + path, { headers: { "user-agent": "Mozilla/5.0 (site sync)" } });
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  return res.text();
}

const data = { syncedAt: new Date().toISOString(), videos: {}, notices: {}, noticeList: [] };

console.log("Videos...");
for (const id of CLASS_IDS) {
  try {
    const list = parseVideos(await get(`class-wise-videos.php?class-id=${id}`));
    if (list.length) data.videos[id] = list;
    console.log(`  class ${id}: ${list.length} videos`);
  } catch (e) {
    console.log(`  class ${id}: FAILED (${e.message})`);
  }
  await wait(300);
}

console.log("Notices...");
try {
  data.noticeList = parseNoticeList(await get("index.php"));
  console.log(`  ${data.noticeList.length} notices found on the home page`);
} catch (e) {
  console.log(`  notice list FAILED (${e.message})`);
}
for (const n of data.noticeList) {
  try {
    const info = parseNotice(await get(`notice-board.php?id=${n.id}`));
    if (info.img) data.notices[n.id] = info;
    console.log(`  notice ${n.id}: ${info.img ? "ok" : "no image found"}`);
  } catch (e) {
    console.log(`  notice ${n.id}: FAILED (${e.message})`);
  }
  await wait(250);
}

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(data, null, 2), "utf8");
console.log(`\nSaved ${OUT}`);
