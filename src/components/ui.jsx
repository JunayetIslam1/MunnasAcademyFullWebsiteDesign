import { SITE, THUMB_BASE } from "../data/homeData";

/* Shared UI pieces used by every page */

export const hideBrokenImage = (e) => {
  e.currentTarget.style.display = "none";
};

/* wrapper for the content of inner pages (overlaps the page hero) */
export const PAGE_MAIN =
  "relative z-[2] mx-auto -mt-[60px] w-full max-w-[1180px] flex-1 px-5 pb-[60px]";

/* children of a 24x24 stroke svg */
export const ICONS = {
  live: (
    <>
      <rect x="2" y="6" width="13" height="12" rx="2" />
      <polygon points="22 8 15 12 22 16 22 8" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </>
  ),
  notice: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="14" y2="16" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <polyline points="9 16 11 18 15 14" />
    </>
  ),
  check: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4h6v3H9z" />
      <polyline points="9 14 11 16 15 12" />
    </>
  ),
  sms: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  monitor: (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
};

export function IconTile({ children, big }) {
  return (
    <span
      className={
        "grid flex-none place-items-center bg-black " +
        (big ? "h-12 w-12 rounded-xl" : "h-[38px] w-[38px] rounded-[10px]")
      }
    >
      <svg
        viewBox="0 0 24 24"
        className={big ? "h-6 w-6" : "h-5 w-5"}
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
}

/* centered heading box with side lines (same as the About page) */
export function SectionHead({ id, children }) {
  return (
    <div
      id={id}
      className="mx-auto mb-8 mt-[70px] flex scroll-mt-28 items-center justify-center gap-[18px]"
    >
      <span className="hidden h-[3px] max-w-[150px] flex-1 rounded-sm bg-[linear-gradient(90deg,transparent,#1a8bbd)] sm:block" />
      <span className="inline-block rounded-2xl border-b-[5px] border-black bg-[linear-gradient(135deg,#1a8bbd,#0f6a91)] px-[22px] py-3.5 text-center text-[clamp(19px,3.2vw,28px)] font-bold text-white shadow-[0_12px_28px_rgba(26,139,189,.38)] sm:px-[38px] sm:py-4">
        {children}
      </span>
      <span className="hidden h-[3px] max-w-[150px] flex-1 rounded-sm bg-[linear-gradient(270deg,transparent,#1a8bbd)] sm:block" />
    </div>
  );
}

export function SearchBox({ value, onChange, placeholder, label }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label || placeholder}</span>
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2"
        fill="none"
        stroke="#0f6a91"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {ICONS.search}
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#cfdde6] bg-white py-3 pl-11 pr-4 text-base outline-none transition focus:border-[#1a8bbd] focus:ring-2 focus:ring-[#1a8bbd]/30"
      />
    </label>
  );
}

export function EmptyState({ title, children }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-[#bcd3df] bg-white px-6 py-12 text-center">
      <p className="text-xl font-bold text-[#0f6a91]">{title}</p>
      {children && <p className="mt-2 text-[#5c6670]">{children}</p>}
    </div>
  );
}

/* white card with the blue top strip used all over the site */
export function Card({ children, className = "" }) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white shadow-[0_6px_22px_rgba(0,0,0,.07)] " +
        className
      }
    >
      <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />
      {children}
    </div>
  );
}

/* pulls "Class No: 531/98" and "29.09.26" out of a video title, for small badges */
export function videoMeta(title) {
  const no = title.match(/(?:Class\s*No\.?|ক্লাস\s*নং)\s*[:\-]?\s*(\d+(?:\s*\/\s*\d+)?)/i);
  const date = title.match(/(\d{1,2}\.\d{1,2}\.\d{2})\b/);
  return { no: no ? no[1].replace(/\s/g, "") : null, date: date ? date[1] : null };
}

export function VideoCard({ classId, video, className = "w-[250px] shrink-0 snap-start sm:w-[270px]" }) {
  const meta = videoMeta(video.title);
  return (
    <article
      className={
        "group overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white shadow-[0_6px_22px_rgba(0,0,0,.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.22)] motion-reduce:transition-none " +
        className
      }
    >
      <a
        href={`${SITE}/class-video-youtube.php?classid=${classId}&&videoid=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden bg-[linear-gradient(135deg,#1a8bbd,#0a4d6b)]">
          <img
            src={THUMB_BASE + video.img}
            alt=""
            loading="lazy"
            onError={hideBrokenImage}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />
          {meta.no && (
            <span className="absolute left-2 top-2 rounded-md bg-black/85 px-2 py-0.5 font-['Raleway',sans-serif] text-[11px] font-extrabold leading-5 tracking-wide text-white">
              NO. {meta.no}
            </span>
          )}
          {meta.date && (
            <span className="absolute bottom-2 right-2 rounded-md bg-[#e3202c] px-2 py-0.5 font-['Raleway',sans-serif] text-[11px] font-extrabold leading-5 text-white">
              {meta.date}
            </span>
          )}
          <span className="absolute inset-0 grid place-items-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25">
            <span className="grid h-12 w-12 scale-90 place-items-center rounded-full bg-black/75 opacity-0 transition duration-200 group-hover:scale-100 group-hover:opacity-100">
              <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-px" fill="#fff" aria-hidden="true">
                <polygon points="7,4 20,12 7,20" />
              </svg>
            </span>
          </span>
        </div>
        <h4 className="line-clamp-3 min-h-[5.6rem] px-4 pb-4 pt-3 text-[15px] font-semibold leading-snug text-[#2b2f33]">
          {video.title}
        </h4>
      </a>
    </article>
  );
}
