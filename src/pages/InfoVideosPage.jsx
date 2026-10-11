import { useEffect } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { PAGE_MAIN, SectionHead, VideoCard } from "../components/ui";
import { INFO_VIDEOS } from "../data/homeData";

/* /informational-videos */
export default function InfoVideosPage() {
  useEffect(() => {
    document.title = "Informational Videos | Munna's Academy";
  }, []);

  return (
    <>
      <PageHero title="Informational Videos" crumbs={[{ label: "Informational Videos" }]} />
      <main className={PAGE_MAIN}>
        <SectionHead>Demo Videos</SectionHead>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {INFO_VIDEOS.map((v) => (
            <Reveal key={v.id}>
              <VideoCard classId={v.classId} video={v} className="h-full w-full" />
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
