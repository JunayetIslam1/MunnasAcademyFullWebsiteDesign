import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { Card, ICONS, IconTile, PAGE_MAIN } from "../components/ui";

/* /live-class — the original page says no class is live right now */
export default function LiveClassPage() {
  useEffect(() => {
    document.title = "Live Class | Munna's Academy";
  }, []);

  return (
    <>
      <PageHero title="Live Class" crumbs={[{ label: "Live Class" }]} />
      <main className={PAGE_MAIN}>
        <Card className="mx-auto max-w-[760px] px-6 pb-10 pt-12 text-center">
          <div className="flex justify-center">
            <IconTile big>{ICONS.live}</IconTile>
          </div>
          <h2 className="mt-5 text-[clamp(24px,4vw,36px)] font-extrabold leading-tight text-[#0a4d6b]">
            <span className="text-[#e3202c]">Sorry!</span> Live Class Not Available Right Now.
          </h2>
          <p className="mt-3 text-[#5c6670]">Please check again later, or watch the recorded classes.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/videos"
              className="rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
            >
              WATCH VIDEOS &rsaquo;
            </Link>
            <Link
              to="/notice-board"
              className="rounded-lg border-2 border-[#1a8bbd] px-6 py-[10px] font-['Raleway',sans-serif] text-sm font-extrabold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none"
            >
              CLASS ROUTINE
            </Link>
          </div>
        </Card>
      </main>
    </>
  );
}
