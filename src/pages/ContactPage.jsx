import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { Card, ICONS, IconTile, PAGE_MAIN, SectionHead } from "../components/ui";
import { CONTACT } from "../data/homeData";

const inputCls =
  "w-full rounded-lg border border-[#cfdde6] bg-white px-3.5 py-2.5 text-base text-[#2b2f33] outline-none transition focus:border-[#1a8bbd] focus:ring-2 focus:ring-[#1a8bbd]/30";
const labelCls = "mb-1 block text-sm font-semibold text-[#0f6a91]";

/* /contact  (Find Us + Contact Us With Any questions) */
export default function ContactPage() {
  const [f, setF] = useState({ name: "", mail: "", phone: "", message: "" });
  useEffect(() => {
    document.title = "Contact | Munna's Academy";
  }, []);
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }));

  // opens the visitor's email app with everything filled in (replace with your API later)
  const onSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nMail: ${f.mail}\nPhone: ${f.phone}\n\n${f.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Message from website")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero title="Contact" crumbs={[{ label: "Contact" }, { label: "Location" }]} />
      <main className={PAGE_MAIN}>
        <Reveal>
          <Card className="p-3 pt-4">
            <iframe
              title="Find Us"
              src={CONTACT.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[320px] w-full rounded-xl border-0 sm:h-[420px]"
            />
          </Card>
        </Reveal>

        <SectionHead>Find Us</SectionHead>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full space-y-6 px-6 pb-8 pt-9">
              <div className="flex items-center gap-4">
                <IconTile>{ICONS.phone}</IconTile>
                <a href={`tel:${CONTACT.phoneIntl}`} className="text-lg font-bold text-[#0a4d6b] hover:underline">
                  {CONTACT.phoneIntl}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <IconTile>{ICONS.pin}</IconTile>
                <span className="text-lg font-bold text-[#0a4d6b]">{CONTACT.area}</span>
              </div>
              <p className="text-[#5c6670]">If you have any questions or query please contact with us.</p>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card className="h-full px-6 pb-8 pt-9">
              <h2 className="mb-5 font-['Raleway',sans-serif] text-2xl font-extrabold text-[#0a4d6b]">
                Contact Us With Any questions
              </h2>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="c-name" className={labelCls}>Your Name :</label>
                  <input id="c-name" required value={f.name} onChange={set("name")} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-mail" className={labelCls}>Your Mail :</label>
                  <input id="c-mail" type="email" value={f.mail} onChange={set("mail")} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-phone" className={labelCls}>Phone Number:</label>
                  <input id="c-phone" type="tel" inputMode="numeric" value={f.phone} onChange={set("phone")} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="c-msg" className={labelCls}>Message</label>
                  <textarea id="c-msg" required rows={4} value={f.message} onChange={set("message")} className={inputCls} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-5 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition hover:bg-[#222]"
                >
                  SEND &rsaquo;
                </button>
              </form>
            </Card>
          </Reveal>
        </div>
      </main>
    </>
  );
}
