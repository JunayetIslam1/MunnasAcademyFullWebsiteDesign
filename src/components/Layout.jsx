import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { AuthModalsProvider, useAuthModals } from "./AuthModals";
import { NOTICES, VIDEO_SECTIONS, groupNotices } from "../data/homeData";

const NAV = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Live Class", to: "/live-class" },
  { label: "Informational Videos", to: "/informational-videos" },
  { label: "Videos", to: "/videos", menu: true },
  { label: "Notice Board", to: "/notice-board" },
  { label: "Exam Question / Ranking List", to: "/exam-ranking" },
  { label: "Contact", to: "/contact" },
];

const navCls = (active) =>
  "shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 font-['Raleway',sans-serif] text-[13px] font-bold transition-colors duration-200 motion-reduce:transition-none " +
  (active ? "bg-white text-[#0f6a91]" : "text-white/90 hover:bg-white/15 hover:text-white");

/* "Videos" menu with every class (like the original site) */
function VideosMenu() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btn = useRef(null);
  const active = pathname.startsWith("/videos");

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  const toggle = () => {
    const r = btn.current.getBoundingClientRect();
    setPos({ top: r.bottom + 6, left: Math.max(8, Math.min(r.left, window.innerWidth - 268)) });
    setOpen((o) => !o);
  };

  return (
    <>
      <button
        ref={btn}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={toggle}
        className={navCls(active || open) + " flex items-center gap-1"}
      >
        Videos
        <svg viewBox="0 0 24 24" className={"h-3.5 w-3.5 transition-transform " + (open ? "rotate-180" : "")} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div
          onMouseDown={(e) => e.stopPropagation()}
          style={{ top: pos.top, left: pos.left }}
          className="fixed z-[70] max-h-[70vh] w-[260px] overflow-y-auto rounded-xl bg-white p-2 shadow-[0_18px_44px_rgba(0,0,0,.3)]"
        >
          <Link to="/videos" className="block rounded-lg px-3 py-2 text-sm font-extrabold text-[#e3202c] hover:bg-[#e8f5fb]">
            All Videos &rsaquo;
          </Link>
          {VIDEO_SECTIONS.map((s) => (
            <Link key={s.id} to={`/videos/${s.id}`} className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#0a4d6b] hover:bg-[#e8f5fb]">
              {s.menu}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

/* Sticky header: main menu on the left, Login / Register on the right */
function Header() {
  const { openLogin, openRegister } = useAuthModals();
  const authBtn =
    "rounded-lg bg-black px-3.5 py-2.5 font-['Raleway',sans-serif] text-[13px] font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-white hover:text-black motion-reduce:transition-none sm:px-5 sm:py-3 sm:text-sm";

  return (
    <header className="sticky top-0 z-50 bg-[#1a8bbd] shadow-[0_3px_14px_rgba(0,0,0,.18)]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-x-4 px-3.5 py-2.5 sm:px-[22px] xl:flex-nowrap">
        <nav
          aria-label="Main menu"
          className="order-2 -mx-1 mt-2 flex w-full gap-1 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:order-1 xl:mt-0 xl:w-auto xl:flex-1 xl:pb-0"
        >
          {NAV.map((n) =>
            n.menu ? (
              <VideosMenu key={n.to} />
            ) : (
              <NavLink key={n.to} to={n.to} end={n.end} className={({ isActive }) => navCls(isActive)}>
                {n.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="order-1 ml-auto flex gap-2 sm:gap-2.5 xl:order-2">
          <button type="button" onClick={openLogin} className={authBtn}>
            LOGIN &rsaquo;
          </button>
          <button type="button" onClick={openRegister} className={authBtn}>
            REGISTER &rsaquo;
          </button>
        </div>
      </div>
    </header>
  );
}

/* Black "LATEST" strip with the newest notices sliding by */
function Ticker() {
  const groups = groupNotices(NOTICES).slice(0, 6);
  const row = (hidden) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {groups.map((g) => (
        <Link
          key={g.title + (hidden ? "-b" : "-a")}
          to={`/notice-board/${g.pages[0].id}`}
          tabIndex={hidden ? -1 : undefined}
          className="whitespace-nowrap px-6 text-[14px] font-semibold text-white/90 hover:text-white hover:underline"
        >
          <span className="mr-3 text-[#e3202c]">&#9679;</span>
          {g.title}
        </Link>
      ))}
    </div>
  );

  return (
    <div className="flex items-stretch overflow-hidden bg-black text-white" aria-label="Latest notices">
      <span className="z-[1] flex flex-none items-center bg-[#e3202c] px-4 font-['Raleway',sans-serif] text-xs font-extrabold tracking-wider sm:px-6">
        LATEST
      </span>
      <div className="relative min-w-0 flex-1 overflow-hidden py-2 motion-reduce:overflow-x-auto">
        <div className="ticker-run flex w-max" style={{ "--dur": `${groups.length * 11}s` }}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={
        "fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-black shadow-[0_8px_22px_rgba(0,0,0,.35)] transition duration-300 hover:bg-[#222] motion-reduce:transition-none " +
        (show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")
      }
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#e3202c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#f3f7fa] font-['Hind_Siliguri','Noto_Sans_Bengali',Arial,sans-serif] text-base leading-[1.85] text-[#2b2f33] sm:text-[17px]">
      <AuthModalsProvider>
        <ScrollManager />
        <Header />
        <Ticker />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
        <Footer />
        <BackToTop />
      </AuthModalsProvider>
    </div>
  );
}
