import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthModals } from "../components/AuthModals";
import Reveal from "../components/Reveal";
import { ICONS, IconTile, SectionHead, VideoCard } from "../components/ui";
import {
  BANNERS,
  EXAM_POSTS,
  INTRO_VIDEO,
  NOTICES,
  VIDEO_SECTIONS,
} from "../data/homeData";

/*
  Home page — same colors as the rest of the site:
    blue #1a8bbd | blue-dark #0f6a91 | blue-deep #0a4d6b | red #e3202c | black
*/

/* ---------- full-width banner (shown in full size, never cropped) ---------- */

function BannerSlider() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [failed, setFailed] = useState({});
  const count = BANNERS.length;

  useEffect(() => {
    if (count < 2) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [count]);

  const b = BANNERS[index];
  const waiting = !loaded[index] && !failed[index];

  return (
    <section aria-label="Banner" className="w-full bg-[#0a4d6b]">
      <div className="relative">
        <a
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "block w-full bg-[linear-gradient(135deg,#0f6a91,#0a4d6b)] " +
            (waiting || failed[index] ? "min-h-[180px] sm:min-h-[320px]" : "")
          }
        >
          {failed[index] ? (
            <span className="grid min-h-[180px] place-items-center px-6 text-center font-['Raleway',sans-serif] text-[clamp(26px,5vw,52px)] font-black text-white sm:min-h-[320px]">
              {b.title}
            </span>
          ) : (
            <img
              key={index}
              src={b.img}
              alt={b.title}
              onLoad={() => setLoaded((l) => ({ ...l, [index]: true }))}
              onError={() => setFailed((f) => ({ ...f, [index]: true }))}
              className="block h-auto w-full"
            />
          )}
        </a>

        {count > 1 && (
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Banner ${i + 1}`}
                onClick={() => setIndex(i)}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (i === index ? "w-7 bg-[#e3202c]" : "w-2.5 bg-white/70")
                }
              />
            ))}
          </div>
        )}
      </div>

      {/* caption bar under the image, so the banner itself stays fully visible */}
      <a
        href={b.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 bg-black px-5 py-2.5 text-white sm:px-8"
      >
        <span className="font-['Raleway',sans-serif] text-base font-bold sm:text-xl">{b.title}</span>
        <span className="flex-none font-['Raleway',sans-serif] text-xs font-extrabold text-[#e3202c] sm:text-sm">
          VISIT &rsaquo;
        </span>
      </a>
    </section>
  );
}

/* ---------- welcome band ---------- */

function Hero() {
  const { openRegister } = useAuthModals();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1a8bbd_0%,#0f6a91_55%,#0a4d6b_100%)] px-5 pb-[120px] pt-12 text-center sm:pt-[60px]">
      <span className="pointer-events-none absolute -left-[110px] -top-[170px] h-[380px] w-[380px] rounded-full bg-white/[0.07]" />
      <span className="pointer-events-none absolute -bottom-[150px] -right-[70px] h-[300px] w-[300px] rounded-full bg-white/[0.07]" />
      <span className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-[1] mx-auto max-w-[900px]">
        <h1 className="break-words font-['Raleway',sans-serif] text-[clamp(34px,7vw,68px)] font-black leading-[1.08] tracking-[.5px] text-white [text-shadow:0_4px_0_rgba(0,0,0,.28),0_14px_34px_rgba(0,0,0,.35)] [text-wrap:balance]">
          Munna&apos;s Academy
        </h1>
        <p className="mt-3 font-['Raleway',sans-serif] text-[clamp(18px,2.8vw,28px)] font-bold leading-snug text-white">
          The Largest Coaching Center in Chittagong
        </p>
        <div className="mx-auto mt-5 h-[7px] w-[130px] rounded bg-[linear-gradient(90deg,#e3202c,#fff,#000)]" />
        <p className="mx-auto mt-5 max-w-[600px] text-white/85">
          Dedicated to academic excellence and student success. Join us to achieve your
          goals with expert guidance.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={openRegister}
            className="rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-white hover:text-black motion-reduce:transition-none"
          >
            REGISTER NOW &rsaquo;
          </button>
          <Link
            to="/videos"
            className="rounded-lg border-2 border-white px-6 py-[10px] font-['Raleway',sans-serif] text-sm font-extrabold text-white transition duration-200 hover:bg-white hover:text-[#0f6a91] motion-reduce:transition-none"
          >
            WATCH VIDEOS
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- feature cards (taken from the About page) ---------- */

const FEATURES = [
  { title: "সাপ্তাহিক পরীক্ষা", text: "প্রতি সপ্তাহে পঠিত বিষয়ের উপর পরীক্ষা", icon: ICONS.calendar },
  { title: "মাসিক পরীক্ষা", text: "পুরোনো পাঠ রিভিউ করার সুযোগ", icon: ICONS.check },
  { title: "এসএমএস সুবিধা", text: "সব নোটিশ অভিভাবকের কাছে এসএমএসে", icon: ICONS.sms },
  { title: "অনলাইন + অফলাইন", text: "ক্লাস ওয়েবসাইটেও আপলোড করা হয়", icon: ICONS.monitor },
];

function Features() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {FEATURES.map((f, i) => (
        <Reveal key={f.title} delay={i * 80}>
          <Link
            to="/about"
            className="relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(10,77,107,.16)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.28)] motion-reduce:transition-none"
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />
            <IconTile big>{f.icon}</IconTile>
            <span className="min-w-0">
              <span className="block text-lg font-bold leading-tight text-[#0f6a91]">{f.title}</span>
              <span className="mt-1 block text-[14px] leading-snug text-[#5c6670]">{f.text}</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}

/* ---------- videos ---------- */

function ClassChips() {
  return (
    <nav
      aria-label="Jump to class"
      className="mb-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
    >
      {VIDEO_SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#class-${s.id}`}
          className="shrink-0 rounded-full border-2 border-[#1a8bbd] bg-white px-4 py-1.5 text-sm font-bold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none"
        >
          {s.title}
        </a>
      ))}
    </nav>
  );
}

function VideoRow({ section }) {
  const rowRef = useRef(null);
  const scrollBy = (dir) => rowRef.current?.scrollBy({ left: dir * 560, behavior: "smooth" });

  const arrowBtn =
    "hidden h-9 w-9 place-items-center rounded-full bg-black text-white transition-colors duration-200 hover:bg-[#e3202c] sm:grid";

  return (
    <Reveal>
      <section id={`class-${section.id}`} className="mb-12 scroll-mt-28">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[clamp(20px,3vw,26px)] font-bold leading-tight text-[#0a4d6b]">
            <span className="h-7 w-1.5 rounded bg-[#e3202c]" />
            {section.title}
            {section.isNew && (
              <span className="rounded-md bg-[#e3202c] px-2 py-0.5 font-['Raleway',sans-serif] text-xs font-extrabold leading-5 text-white">
                NEW
              </span>
            )}
          </h3>

          <div className="flex shrink-0 items-center gap-2">
            <button type="button" aria-label="Previous videos" onClick={() => scrollBy(-1)} className={arrowBtn}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button type="button" aria-label="Next videos" onClick={() => scrollBy(1)} className={arrowBtn}>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <Link
              to={`/videos/${section.id}`}
              className="rounded-full border-2 border-[#1a8bbd] bg-white px-4 py-1.5 text-sm font-bold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none"
            >
              See all
            </Link>
          </div>
        </div>

        <div
          ref={rowRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4 pt-1 [scrollbar-width:thin]"
        >
          {section.videos.slice(0, 8).map((v) => (
            <VideoCard key={v.id} classId={section.id} video={v} />
          ))}
        </div>
      </section>
    </Reveal>
  );
}

/* ---------- video that sits under the class rows on the original home page ---------- */

function IntroVideo() {
  return (
    <Reveal className="mx-auto mb-4 max-w-[900px]">
      <div className="overflow-hidden rounded-[20px] border-4 border-white bg-black shadow-[0_24px_60px_rgba(10,77,107,.3)]">
        <video controls preload="none" playsInline className="block aspect-video w-full bg-black" src={INTRO_VIDEO}>
          Your browser does not support the video tag.
        </video>
      </div>
    </Reveal>
  );
}

/* ---------- notice board / exam list (lines scroll bottom -> top) ---------- */

function NoticePanel({ id, title, icon, items, hrefFor, seeAllTo, onItemClick }) {
  const scrolling = items.length > 4;
  const rowCls =
    "flex items-start gap-3 rounded-lg px-2 py-2.5 leading-snug transition-colors duration-150 hover:bg-[#e8f5fb] motion-reduce:transition-none";

  const renderList = (hidden) => (
    <ul aria-hidden={hidden || undefined} className={hidden ? "motion-reduce:hidden" : undefined}>
      {items.map((n) => (
        <li key={n.id}>
          {onItemClick ? (
            <button
              type="button"
              tabIndex={hidden ? -1 : undefined}
              onClick={onItemClick}
              className={rowCls + " w-full text-left"}
            >
              <span className="mt-[9px] h-2 w-2 flex-none rounded-full bg-[#1a8bbd]" />
              <span>{n.title}</span>
            </button>
          ) : (
            <Link to={hrefFor(n.id)} tabIndex={hidden ? -1 : undefined} className={rowCls}>
              <span className="mt-[9px] h-2 w-2 flex-none rounded-full bg-[#1a8bbd]" />
              <span>{n.title}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id={id}
      className="relative scroll-mt-28 overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 pb-6 pt-7 shadow-[0_6px_22px_rgba(0,0,0,.07)] sm:px-7"
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />

      <div className="relative mb-3 flex items-center gap-3 border-b-2 border-[#e1eaf0] pb-4">
        <IconTile>{icon}</IconTile>
        <h3 className="font-['Raleway',sans-serif] text-xl font-bold text-[#0a4d6b]">{title}</h3>
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-[52px] bg-[#e3202c]" />
      </div>

      {scrolling ? (
        <div className="h-[380px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_7%,#000_93%,transparent)] motion-reduce:overflow-y-auto">
          <div className="notice-scroll" style={{ "--dur": `${items.length * 2.4}s` }}>
            {renderList(false)}
            {renderList(true)}
          </div>
        </div>
      ) : (
        renderList(false)
      )}

      <div className="mt-4 text-center">
        <Link
          to={seeAllTo}
          className="inline-block rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
        >
          SEE ALL &rsaquo;
        </Link>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function HomePage() {
  const { openLogin } = useAuthModals();
  useEffect(() => {
    document.title = "Munna's Academy | The Largest Coaching Center in Chittagong";
  }, []);

  return (
    <>
      <BannerSlider />
      <Hero />

      <main className="relative z-[2] mx-auto -mt-[70px] w-full max-w-[1180px] flex-1 px-5 pb-[50px]">
        <Features />

        <SectionHead id="videos">Videos</SectionHead>
        <ClassChips />
        {VIDEO_SECTIONS.map((s) => (
          <VideoRow key={s.id} section={s} />
        ))}

        <IntroVideo />

        <Reveal className="mt-[50px] grid items-start gap-6 md:grid-cols-2">
          <NoticePanel
            id="notice"
            title="Notice Board"
            icon={ICONS.notice}
            items={NOTICES}
            hrefFor={(id) => `/notice-board/${id}`}
            seeAllTo="/notice-board"
          />
          <NoticePanel
            id="exam"
            title="Exam Question / Ranking List"
            icon={ICONS.trophy}
            items={EXAM_POSTS}
            onItemClick={openLogin}
            seeAllTo="/exam-ranking"
          />
        </Reveal>
      </main>
    </>
  );
}
