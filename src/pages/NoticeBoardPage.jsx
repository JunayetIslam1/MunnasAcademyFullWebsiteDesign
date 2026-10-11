import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Card, ICONS, IconTile, PAGE_MAIN, SearchBox } from "../components/ui";
import { NOTICES, NOTICE_IMG_BASE, NOTICE_INFO, SITE, groupNotices } from "../data/homeData";
import NotFoundPage from "./NotFoundPage";

/*  /notice-board       -> latest notice
    /notice-board/:id   -> that notice (class routine / schedule page)  */
export default function NoticeBoardPage() {
  const { id } = useParams();
  const [q, setQ] = useState("");
  const groups = useMemo(() => groupNotices(NOTICES), []);
  const current = id ? NOTICES.find((n) => String(n.id) === id) : NOTICES[0];

  useEffect(() => {
    if (current) document.title = `${current.title} | Munna's Academy`;
  }, [current]);

  if (!current) return <NotFoundPage />;

  const idx = NOTICES.indexOf(current);
  const newer = NOTICES[idx - 1];
  const older = NOTICES[idx + 1];
  const info = NOTICE_INFO[current.id];
  const list = groups.filter((g) => g.title.toLowerCase().includes(q.trim().toLowerCase()));

  const navBtn =
    "rounded-lg border-2 border-[#1a8bbd] bg-white px-4 py-2 text-sm font-bold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none";

  return (
    <>
      <PageHero title="Notice Details" crumbs={[{ label: "Notice Board", to: "/notice-board" }, { label: "Notice" }]} />

      <main className={PAGE_MAIN}>
        <div className="grid items-start gap-6 lg:grid-cols-[1fr_340px]">
          {/* ---- the notice ---- */}
          <Card className="px-5 pb-6 pt-8 sm:px-7">
            <h2 className="text-[clamp(20px,3vw,28px)] font-bold leading-snug text-[#0a4d6b]">{current.title}</h2>
            <p className="mt-1 flex flex-wrap items-center gap-x-4 text-sm text-[#5c6670]">
              {info?.date && <span>{info.date}</span>}
              <span>Admin</span>
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-[#e1eaf0] bg-[#f3f7fa]">
              {info?.img ? (
                <a href={NOTICE_IMG_BASE + info.img} target="_blank" rel="noopener noreferrer" title="Open full size">
                  <img src={NOTICE_IMG_BASE + info.img} alt={current.title} className="block h-auto w-full" />
                </a>
              ) : (
                <iframe
                  title={current.title}
                  src={`${SITE}/notice-board.php?id=${current.id}`}
                  className="block h-[900px] w-full border-0 bg-white"
                />
              )}
            </div>
            {!info?.img && (
              <p className="mt-3 text-sm text-[#5c6670]">
                Image link not synced yet. Run <code className="rounded bg-[#e8f5fb] px-1.5">npm run sync</code> once to
                fill it in.{" "}
                <a className="font-bold text-[#0f6a91] hover:underline" href={`${SITE}/notice-board.php?id=${current.id}`} target="_blank" rel="noopener noreferrer">
                  Open original
                </a>
              </p>
            )}

            <div className="mt-5 flex flex-wrap justify-between gap-3">
              {older ? (
                <Link to={`/notice-board/${older.id}`} className={navBtn}>
                  &lsaquo; Older
                </Link>
              ) : (
                <span />
              )}
              {newer && (
                <Link to={`/notice-board/${newer.id}`} className={navBtn}>
                  Newer &rsaquo;
                </Link>
              )}
            </div>
          </Card>

          {/* ---- notice list ---- */}
          <Card className="px-5 pb-5 pt-8 lg:sticky lg:top-28">
            <div className="mb-4 flex items-center gap-3">
              <IconTile>{ICONS.notice}</IconTile>
              <h3 className="font-['Raleway',sans-serif] text-xl font-bold text-[#0a4d6b]">Notice List</h3>
            </div>
            <SearchBox value={q} onChange={setQ} placeholder="Search notice" />
            <div className="mt-4 max-h-[520px] space-y-4 overflow-y-auto pr-1 [scrollbar-width:thin]">
              {list.map((g) => (
                <div key={g.title}>
                  <p className="text-[15px] font-bold leading-snug text-[#0a4d6b]">{g.title}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {g.pages.map((p, i) => (
                      <Link
                        key={p.id}
                        to={`/notice-board/${p.id}`}
                        className={
                          "rounded-md border-2 px-2.5 py-0.5 text-sm font-bold transition-colors duration-200 motion-reduce:transition-none " +
                          (p.id === current.id
                            ? "border-[#e3202c] bg-[#e3202c] text-white"
                            : "border-[#1a8bbd] text-[#0f6a91] hover:bg-[#1a8bbd] hover:text-white")
                        }
                      >
                        {p.page != null ? `Page ${p.page}` : `Open ${i + 1}`}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {list.length === 0 && <p className="text-[#5c6670]">No notice found.</p>}
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
