import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../data/homeData";

/* Shared footer (blue 4-box footer + black copyright bar) */

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Videos", to: "/videos" },
  { label: "Live Class", to: "/live-class" },
  { label: "Notice Board", to: "/notice-board" },
  { label: "Contact Us", to: "/contact" },
];

/* ---------- small icon pieces ---------- */

const IconBox = ({ children }) => (
  <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[10px] bg-black">
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  </span>
);

const FooterBox = ({ icon, title, children }) => (
  <div className="rounded-2xl border border-white/[0.22] bg-white/10 px-[18px] pb-6 pt-[22px] backdrop-blur-[2px] sm:px-6 sm:pb-7 sm:pt-[26px]">
    <div className="relative mb-[18px] flex items-center gap-3 border-b-2 border-white/25 pb-4">
      <IconBox>{icon}</IconBox>
      <h4 className="font-['Raleway',sans-serif] text-xl font-bold leading-[1.2]">
        {title}
      </h4>
      {/* red accent under the heading */}
      <span className="absolute -bottom-0.5 left-0 h-0.5 w-[52px] bg-[#e3202c]" />
    </div>
    {children}
  </div>
);

const SOCIALS = [
  {
    name: "Facebook",
    href: SOCIAL_LINKS.Facebook,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%]" aria-hidden="true">
        <path
          fill="#1877F2"
          d="M13.5 22v-8.5h2.9l.5-3.4h-3.4V8c0-1 .3-1.7 1.8-1.7H17V3.3c-.3 0-1.3-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2v2.8H7.5v3.4h2.9V22h3.1z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: SOCIAL_LINKS.Twitter,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%]" aria-hidden="true">
        <path
          fill="#1DA1F2"
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: SOCIAL_LINKS.Instagram,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%]" aria-hidden="true">
        <defs>
          <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset=".35" stopColor="#FA7E1E" />
            <stop offset=".6" stopColor="#D62976" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#ig)" strokeWidth="2.2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="url(#ig)" strokeWidth="2.2" />
        <circle cx="17.3" cy="6.7" r="1.3" fill="#D62976" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: SOCIAL_LINKS.YouTube,
    svg: (
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%]" aria-hidden="true">
        <rect x="1.5" y="5" width="21" height="14" rx="4.2" fill="#FF0000" />
        <polygon points="10,9 16,12 10,15" fill="#fff" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      {/* ===== Blue footer: 4 boxes in one line ===== */}
      <footer className="bg-[linear-gradient(180deg,#1a8bbd_0%,#0f6a91_100%)] px-6 pb-14 pt-[60px] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Navigation */}
          <FooterBox
            title="Navigation"
            icon={<polygon points="3 11 22 2 13 21 11 13 3 11" />}
          >
            <ul className="list-none">
              {NAV_LINKS.map((l) => (
                <li key={l.label} className="mb-[9px] text-[15px] leading-normal">
                  <Link
                    to={l.to}
                    className="inline-block transition-transform duration-150 hover:translate-x-1 motion-reduce:transition-none"
                  >
                    <span className="opacity-80">&raquo;&nbsp;</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterBox>

          {/* Our Location */}
          <FooterBox
            title="Our Location"
            icon={
              <>
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </>
            }
          >
            <p className="text-[15px] leading-[1.75] [overflow-wrap:anywhere]">
              <span className="opacity-80">Visit us at :</span>
              <br />
              01833424270
              <br />
              01750601237
              <br />
              Panchlaish, Chittagong
              <br />
              Bangladesh.
              <br />
              <span className="opacity-80">Email :</span>
              <br />
              <a href="mailto:munna_mohib@yahoo.com" className="hover:underline">
                munna_mohib@yahoo.com
              </a>
              <br />
              <span className="opacity-80">Web :</span>
              <br />
              <a href="http://www.munnasacademy.com" className="hover:underline">
                www.munnasacademy.com
              </a>
            </p>
          </FooterBox>

          {/* Newsletter */}
          <FooterBox
            title="Newsletter"
            icon={
              <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </>
            }
          >
            <p className="text-[15px] leading-[1.75] [overflow-wrap:anywhere]">
              One stop solution for all your learnings. Until the Launch check out
              my YouTube Channel. Stay Connected with Us by..
            </p>
            <form
              className="mt-4 flex"
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: connect newsletter API here
              }}
            >
              <input
                type="email"
                placeholder="Email...."
                className="min-w-0 flex-1 rounded-l-lg border-0 px-3 py-[11px] text-sm text-black outline-none"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-black px-3.5 py-[11px] font-bold text-white transition-colors hover:bg-[#222]"
              >
                SUBMIT
              </button>
            </form>
          </FooterBox>

          {/* About Us — social icons (always one line) */}
          <FooterBox
            title="About Us"
            icon={
              <>
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
                <circle cx="17.5" cy="9" r="2.5" />
                <path d="M17.5 14c2.4 0 4 1.7 4 4.5" />
              </>
            }
          >
            <div className="flex flex-nowrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid aspect-square max-w-[46px] flex-1 place-items-center rounded-full bg-white shadow-[0_5px_14px_rgba(0,0,0,.22)] transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.06] motion-reduce:transition-none"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </FooterBox>
        </div>
      </footer>

      {/* ===== Black copyright bar (always at the very bottom) ===== */}
      <div className="bg-black px-6 py-[22px] font-['Raleway','Hind_Siliguri',sans-serif] text-[15px] text-white">
        <div className="mx-auto max-w-[1180px]">
          © 2026 Munna&apos;s Academy. All Rights Reserved. || Developed &amp;
           by Belerion Technology
        </div>
      </div>
    </>
  );
}
