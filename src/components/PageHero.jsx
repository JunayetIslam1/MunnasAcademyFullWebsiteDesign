import { Link } from "react-router-dom";

/* Blue title band used at the top of every inner page */
export default function PageHero({ title, subtitle, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1a8bbd_0%,#0f6a91_55%,#0a4d6b_100%)] px-5 pb-[100px] pt-10 text-center sm:pt-[56px]">
      <span className="pointer-events-none absolute -left-[110px] -top-[170px] h-[380px] w-[380px] rounded-full bg-white/[0.07]" />
      <span className="pointer-events-none absolute -bottom-[150px] -right-[70px] h-[300px] w-[300px] rounded-full bg-white/[0.07]" />
      <span className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-[1] mx-auto max-w-[900px]">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex flex-wrap items-center justify-center gap-x-2 text-sm text-white/80"
        >
          <Link to="/" className="hover:text-white hover:underline">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span aria-hidden="true">&rsaquo;</span>
              {c.to ? (
                <Link to={c.to} className="hover:text-white hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span className="font-semibold text-white" aria-current="page">
                  {c.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="break-words font-['Raleway',sans-serif] text-[clamp(30px,6vw,56px)] font-black leading-[1.1] tracking-[.5px] text-white [text-shadow:0_4px_0_rgba(0,0,0,.28),0_14px_34px_rgba(0,0,0,.35)] [text-wrap:balance]">
          {title}
        </h1>
        <div className="mx-auto mt-5 h-[7px] w-[130px] rounded bg-[linear-gradient(90deg,#e3202c,#fff,#000)]" />
        {subtitle && <p className="mx-auto mt-5 max-w-[620px] text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
