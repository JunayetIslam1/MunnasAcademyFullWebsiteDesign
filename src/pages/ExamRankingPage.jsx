import { useEffect } from "react";
import { useAuthModals } from "../components/AuthModals";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, ICONS, IconTile, PAGE_MAIN } from "../components/ui";
import { EXAM_POSTS } from "../data/homeData";

/* /exam-ranking — the original page asks students to log in first */
export default function ExamRankingPage() {
  const { openLogin } = useAuthModals();

  useEffect(() => {
    document.title = "Exam Question / Ranking List | Munna's Academy";
  }, []);

  return (
    <>
      <PageHero title="Exam Question / Ranking List" crumbs={[{ label: "Exam Question / Ranking List" }]} />
      <main className={PAGE_MAIN}>
        <Card className="mx-auto max-w-[820px] px-6 pb-9 pt-11 text-center">
          <div className="flex justify-center">
            <IconTile big>{ICONS.trophy}</IconTile>
          </div>
          <h2 className="mt-5 text-[clamp(20px,3vw,28px)] font-bold leading-snug text-[#0a4d6b]">
            দয়া করে <span className="text-[#e3202c]">Index Number ও Password</span> দ্বারা Login করুন। না থাকলে Office এ
            যোগাযোগ করুন।।
          </h2>
          <button
            type="button"
            onClick={openLogin}
            className="mt-6 rounded-lg bg-black px-7 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
          >
            LOGIN &rsaquo;
          </button>
        </Card>

        <h3 className="mb-4 mt-12 flex items-center gap-3 text-[clamp(20px,3vw,26px)] font-bold text-[#0a4d6b]">
          <span className="h-7 w-1.5 rounded bg-[#e3202c]" />
          Latest posts
        </h3>
        <div className="grid gap-4">
          {EXAM_POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <button
                type="button"
                onClick={openLogin}
                className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 py-5 text-left shadow-[0_6px_22px_rgba(0,0,0,.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.22)] motion-reduce:transition-none"
              >
                <span className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#1a8bbd,#0f6a91)]" />
                <IconTile>{ICONS.file}</IconTile>
                <span className="min-w-0 flex-1 font-semibold leading-snug text-[#0a4d6b]">{p.title}</span>
                <span className="font-['Raleway',sans-serif] text-xs font-extrabold text-[#e3202c]">LOGIN TO OPEN &rsaquo;</span>
              </button>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
