import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, EmptyState, PAGE_MAIN, SearchBox, hideBrokenImage } from "../components/ui";
import { THUMB_BASE, VIDEO_SECTIONS } from "../data/homeData";

/* /videos — pick a class */
export default function VideosPage() {
  const [q, setQ] = useState("");

  useEffect(() => {
    document.title = "Videos | Munna's Academy";
  }, []);

  const list = VIDEO_SECTIONS.filter((s) =>
    s.title.toLowerCase().includes(q.trim().toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Videos"
        subtitle="Choose your class and watch the latest lessons."
        crumbs={[{ label: "Videos" }]}
      />

      <main className={PAGE_MAIN}>
        <Card className="p-5 pt-6">
          <SearchBox value={q} onChange={setQ} placeholder="Search your class (e.g. Class Nine, SSC, Commerce)" />
        </Card>

        {list.length === 0 ? (
          <div className="mt-8">
            <EmptyState title="No class found">Try another word.</EmptyState>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 70}>
                <Link
                  to={`/videos/${s.id}`}
                  className="group block overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white shadow-[0_6px_22px_rgba(0,0,0,.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.22)] motion-reduce:transition-none"
                >
                  <div className="relative aspect-video overflow-hidden bg-[linear-gradient(135deg,#1a8bbd,#0a4d6b)]">
                    <img
                      src={THUMB_BASE + s.videos[0].img}
                      alt=""
                      loading="lazy"
                      onError={hideBrokenImage}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <span className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.75),transparent_60%)]" />
                    {s.isNew && (
                      <span className="absolute left-3 top-3 rounded-md bg-[#e3202c] px-2 py-0.5 font-['Raleway',sans-serif] text-xs font-extrabold leading-5 text-white">
                        NEW
                      </span>
                    )}
                    <span className="absolute inset-x-0 bottom-0 px-4 pb-3 text-lg font-bold leading-snug text-white">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-[15px] text-[#5c6670]">{s.videos.length} videos</span>
                    <span className="font-['Raleway',sans-serif] text-sm font-extrabold text-[#0f6a91] transition-transform duration-200 group-hover:translate-x-1">
                      OPEN &rsaquo;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
