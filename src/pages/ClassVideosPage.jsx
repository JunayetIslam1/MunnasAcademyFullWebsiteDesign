import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, EmptyState, PAGE_MAIN, SearchBox, VideoCard } from "../components/ui";
import { SITE, VIDEO_SECTIONS } from "../data/homeData";
import NotFoundPage from "./NotFoundPage";

/* /videos/:classId — all videos of one class */
export default function ClassVideosPage() {
  const { classId } = useParams();
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(24);
  const section = VIDEO_SECTIONS.find((s) => String(s.id) === classId);

  useEffect(() => {
    if (section) document.title = `${section.title} Videos | Munna's Academy`;
  }, [section]);

  useEffect(() => {
    setQ("");
    setShown(24);
  }, [classId]);

  if (!section) return <NotFoundPage />;

  const videos = section.videos.filter((v) =>
    v.title.toLowerCase().includes(q.trim().toLowerCase())
  );

  return (
    <>
      <PageHero
        title={section.title}
        subtitle={`${section.videos.length} videos`}
        crumbs={[{ label: "Videos", to: "/videos" }, { label: section.title }]}
      />

      <main className={PAGE_MAIN}>
        <Card className="space-y-4 p-5 pt-6">
          <SearchBox
            value={q}
            onChange={setQ}
            placeholder="Search by subject, chapter or class no."
          />
          <nav aria-label="Other classes" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
            {VIDEO_SECTIONS.map((s) => (
              <Link
                key={s.id}
                to={`/videos/${s.id}`}
                className={
                  "shrink-0 rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-colors duration-200 motion-reduce:transition-none " +
                  (String(s.id) === classId
                    ? "border-[#1a8bbd] bg-[#1a8bbd] text-white"
                    : "border-[#1a8bbd] bg-white text-[#0f6a91] hover:bg-[#e8f5fb]")
                }
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </Card>

        {videos.length === 0 ? (
          <div className="mt-8">
            <EmptyState title="No video found">Try another word.</EmptyState>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videos.slice(0, shown).map((v, i) => (
              <Reveal key={v.id} delay={(i % 4) * 60}>
                <VideoCard classId={section.id} video={v} className="h-full w-full" />
              </Reveal>
            ))}
          </div>
        )}

        {videos.length > shown && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShown((n) => n + 24)}
              className="rounded-lg border-2 border-[#1a8bbd] bg-white px-7 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none"
            >
              LOAD MORE ({videos.length - shown} left)
            </button>
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href={`${SITE}/class-wise-videos.php?class-id=${section.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
          >
            OPEN ON ORIGINAL SITE &rsaquo;
          </a>
        </div>
      </main>
    </>
  );
}
