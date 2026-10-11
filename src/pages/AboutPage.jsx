import { useEffect } from "react";

/*
  About page — "Shadow of Education" (React + Tailwind CSS)

  Colors (same as before, written as Tailwind arbitrary values):
    blue       #1a8bbd      blue-dark  #0f6a91     blue-deep  #0a4d6b
    blue-soft  #e8f5fb      red        #e3202c     black      #000
    page-bg    #f3f7fa      text       #2b2f33

  Fonts: Hind Siliguri + Raleway (add the Google Fonts <link> to index.html)
*/

const INTRO =
  "স্কুলে নিয়মিত পড়াশোনার পাশাপাশি সন্তানের একটু ভালো রেজাল্ট এর প্রত্যাশায় অভিভাবকগণ প্রতিনিয়ত খোঁজ করে চলেছেন কোথায় সন্তানের মেধার বিকাশের পাশাপাশি পড়াশোনা সম্পর্কিত সঠিক দিক-নির্দেশনা মিলবে। এ প্রতিযোগিতামূলক সময়ে নিজের সন্তানকে টিউশন, কোচিং ইত্যাদি জায়গায় ব্যস্ত রাখতে তারা যেনো হুমড়ি খেয়ে পড়েন। সব পিতা-মাতার ই লক্ষ্য কিন্তু একটাই! দিনশেষে সন্তান যেনো ভালো ফলাফল অর্জন করে! Munna's Academy “Shadow of Education” এর মাধ্যমে আপনার সন্তানের জন্য হতে পারে উপযোগী নির্দেশক। কেন উপযোগী? বিস্তারিত জানতে অবশ্যই আপনাকে এখানকার পরিবেশ সম্পর্কে ভালো ধারণা রাখতে হবে। কোচিং সেন্টার বলতেই প্রথমে আমাদের মাথায় আসে একগাদা ভর্তি ফি সাথে অগণিত লেকচার শীট! শিক্ষার্থীরা প্রায়োগিক অর্থে সে শিক্ষাব্যবস্থা কতটুকু গলাধঃকরণ করতে পারে? কিন্তু আপনি জানলে অবাক হবেন। Munna's Academy এই গতানুগতিক চিন্তার উর্ধ্বে আপনাকে ভাবতে বাধ্য করবে। অনেক বন্ধুত্বপূর্ণ পরিবেশ বজায় রেখে এখানে শিক্ষা প্রদান করা হয়, এখানকার শিক্ষার্থীরা শুধু বই কেন্দ্রিক জ্ঞানার্জনের মধ্যে নিজেদের সীমাবদ্ধ না রেখে নিজের সৃজনশীল মেধা বিকাশে ও উদ্বুদ্ধ হয়! তাই বলে কি ভাবছেন? তাদের রেজাল্ট খারাপ হয়! অবশ্যই নয়, বরং অত্যন্ত কৃতিত্বের সাথে এখানকার শিক্ষার্থীরা পরীক্ষায় সাফল্য অর্জন করছে।";

const SERVICES = [
  {
    title: "১। সাপ্তাহিক পরীক্ষাঃ",
    text: "প্রতি সপ্তাহে পাঠের পর শিক্ষার্থীরা অনেকাংশে ভুলে যায়। এ সমস্যা প্রতিহত করতে প্রতি সপ্তাহে পঠিত সে বিষয়ের উপর সাপ্তাহিক পরীক্ষা নেয়া হয়।",
  },
  {
    title: "২। মাসিক পরীক্ষাঃ",
    text: "প্রতি সপ্তাহে আলাদা আলাদা বিষয়ে পাঠদানের পর অনেক বিষয় যখন একসাথে হয়ে যায় তা পুনরায় রিভিশন এর প্রয়োজন হয়। এজন্য মাসিক পরীক্ষার মাধ্যমে শিক্ষার্থীরা পুরোনো পাঠগুলো রিভিউ করার সুযোগ পায়।",
  },
  {
    title: "৩। শীট আকারে মাসিক বইঃ",
    text: "শিক্ষক কর্তৃক ক্লাসে নোট করে দেয়া হলেও অনেকসময় দেখা যায় পরীক্ষার আগে শিক্ষার্থীরা সব পড়া গুছিয়ে অল্প সময়ে পড়া সম্পূর্ণ করতে পারেনা। এ ঝামেলা ঠেকাতে মাসিক শীট প্রদানের ব্যবস্থা রয়েছে এখানে।",
  },
  {
    title: "৪। বাৎসরিক বইঃ",
    text: "বিগত বছরের সফল প্রশ্ন সমাধানসহ বাৎসরিক বইয়ে লিপিবদ্ধ থাকে। এ ছাড়া অতিরিক্ত সৃজনশীল প্রশ্ন দেয়া থাকে যাতে শিক্ষার্থীরা যথাযথ অনুশীলন করতে পারে।",
  },
  {
    title: "৫। উত্তরপত্র নিরীক্ষণের পর অভিভাবকের নিকট প্রদানঃ",
    text: "বছরব্যাপী নেয়া সব পরীক্ষার উত্তরপত্র নিরীক্ষণের পর অভিভাবককে এ ব্যাপারে অবহিত করা হয়। এতে করে অভিভাবক ও বাচ্চার পড়াশোনার প্রতি আরো দায়িত্বশীল ও সচেতন হয়ে উঠেন।",
  },
  {
    title: "৬। মাসিক পরীক্ষার ফলাফলের ভিত্তিতে তালিকাভুক্তঃ",
    text: "বাচ্চারা অনেক অনুকরণ প্রিয়। যখন দেখে তার সমবয়সী কেউ তার চেয়ে ভালো করে সবার আদর-সহমর্মিতা কুড়াচ্ছে তখন তার মধ্যে সে কাজ করার স্পৃহা দ্বিগুণ বেড়ে যায়। তাইতো মাসিক ফলাফল এর ভিত্তিতে তালিকাভুক্ত করার মাধ্যমে শিক্ষার্থীদের আরো মনোযোগী করে তোলা সম্ভব।",
  },
  {
    title: "৭। নোটিশঃ",
    text: "সকল ধরনের ঘোষণা নোটিশ আকারে সবার কাছে পৌঁছানোর ব্যবস্থা আছে।",
  },
  {
    title: "৮। এসএমএস সুবিধাঃ",
    text: "Munna's Academy এর সকল ধরনের নোটিশ এসএমএস আকারে অভিভাবকদের নিকট জানানো হয়।",
  },
  {
    title: "৯। অ্যাসাইনমেন্ট সিস্টেমঃ",
    text: "আপনার সন্তানের নিয়মিত উপস্থিতি পড়াশোনায় মনোনিবেশ করতে অনেকাংশে সহায়ক। প্রতিটা শিক্ষার্থীর এটেনডেন্স তাই লিপিবদ্ধ রাখার সু-ব্যবস্থা আছে এখানে।",
    wide: true,
  },
  {
    title: "১০। ওয়েবসাইটঃ",
    text: "এখনকার সব কিছু অনলাইন ভিত্তিক হয়ে গেছে। যুগের সাথে তাল মিলিয়ে চলতে সবাই বদ্ধ পরিকর। Munna's Academy এ নতুনত্বের সাথে তাল মিলিয়ে অত্যাধুনিক ভাবে সেরা প্রদান করতে সর্বদা সচেষ্ট। অনলাইন-অফলাইন দুটো মাধ্যমেই আপনার সন্তান পেতে পারবে সেবা। অফলাইনে ক্লাস যা নেয়া হবে অনলাইনে ও আপলোড করা হবে এখানকার ওয়েবসাইটে। শিক্ষার্থীরা তাদের ইনডেক্স ও পাসওয়ার্ড ব্যবহারের মাধ্যমে এই সেবা পাবে কোন ঝামেলা ছাড়াই। একজন দুর্বল শিক্ষার্থীকে তার মেধা অনুযায়ী কিভাবে সঠিকভাবে গাইড করা যায় এ বিষয়টি সতর্কতা ও নিষ্ঠার সাথে পালন করা হয়। একজন দুর্বল শিক্ষার্থী ও কঠোর অধ্যবসায়-দৃঢ় মনোবল দিয়ে অসম্ভব কে জয় করার ক্ষমতা রাখে! সে আত্মবিশ্বাস জাগিয়ে তুলতে প্রয়োজন নিয়মিত সুশৃংখল পাঠদান। মেধাবী তুখোড়দের ভীড়ে আপনার সন্তান হারাবেনা কুল! Munna's Academy আপনাকে এই প্রতিশ্রুতি দিতে বদ্ধ পরিকর। প্রাতিষ্ঠানিক শিক্ষার পাশাপাশি পড়াশোনায় মনোনিবেশ করার মাধ্যমে পরীক্ষায় সাফল্য বয়ে আনতে সঠিক দিক-নির্দেশনা, দক্ষ শিক্ষক দ্বারা পাঠদানই পারে আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে।",
    wide: true,
    long: true,
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "Shadow of Education | Munna's Academy";
  }, []);

  return (
    <>
      {/* ===== Hero title ===== */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1a8bbd_0%,#0f6a91_55%,#0a4d6b_100%)] px-4 pb-[110px] pt-14 text-center sm:px-5 sm:pb-[120px] sm:pt-[76px]">
        <span className="pointer-events-none absolute -left-[110px] -top-[170px] h-[380px] w-[380px] rounded-full bg-white/[0.07]" />
        <span className="pointer-events-none absolute -bottom-[150px] -right-[70px] h-[300px] w-[300px] rounded-full bg-white/[0.07]" />

        <h1 className="relative z-[1] break-words font-['Raleway',sans-serif] text-[clamp(28px,8vw,72px)] font-black leading-[1.1] tracking-[.5px] text-white [text-shadow:0_4px_0_rgba(0,0,0,.28),0_14px_34px_rgba(0,0,0,.35)] [text-wrap:balance]">
          <span className="font-extrabold text-white/55">&ldquo;</span>
          Shadow of Education
          <span className="font-extrabold text-white/55">&rdquo;</span>
        </h1>

        <div className="relative z-[1] mx-auto mt-6 h-[7px] w-[130px] rounded bg-[linear-gradient(90deg,#e3202c,#fff,#000)]" />
      </section>

      {/* ===== Main ===== */}
      <main className="relative z-[2] mx-auto -mt-[70px] w-full max-w-[1060px] flex-1 px-5 pb-[50px]">
        {/* Intro card */}
        <section className="relative rounded-[18px] bg-white px-5 py-[30px] text-left shadow-[0_18px_50px_rgba(10,77,107,.18)] sm:px-[26px] sm:py-[34px] sm:text-justify md:px-[46px] md:py-[42px]">
          <span className="absolute left-5 right-5 top-0 h-[5px] rounded-b-md bg-[#1a8bbd] sm:left-[26px] sm:right-[26px] md:left-[46px] md:right-[46px]" />
          <p>{INTRO}</p>
        </section>

        {/* Centered heading box */}
        <div className="mx-auto mb-10 mt-[70px] flex items-center justify-center gap-[18px]">
          <span className="hidden h-[3px] max-w-[150px] flex-1 rounded-sm bg-[linear-gradient(90deg,transparent,#1a8bbd)] sm:block" />
          <span className="inline-block rounded-2xl border-b-[5px] border-black bg-[linear-gradient(135deg,#1a8bbd,#0f6a91)] px-[22px] py-3.5 text-center text-[clamp(19px,3.2vw,28px)] font-bold text-white shadow-[0_12px_28px_rgba(26,139,189,.38)] sm:px-[38px] sm:py-4">
            Munna&apos;s Academy এর ব্যতিক্রমী সেবাঃ
          </span>
          <span className="hidden h-[3px] max-w-[150px] flex-1 rounded-sm bg-[linear-gradient(270deg,transparent,#1a8bbd)] sm:block" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={
                "relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#e1eaf0] bg-white px-5 pb-7 pt-[26px] text-center shadow-[0_6px_22px_rgba(0,0,0,.07)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(26,139,189,.22)] motion-reduce:transition-none sm:px-[30px] sm:pb-8 sm:pt-[30px]" +
                (s.wide ? " md:col-span-2" : "")
              }
            >
              {/* top accent strip */}
              <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />

              <h3 className="relative mb-3 mt-1.5 pb-3 text-[clamp(19px,2.4vw,22px)] font-bold text-[#0f6a91]">
                {s.title}
                {/* red divider under the title */}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-[46px] -translate-x-1/2 rounded-sm bg-[#e3202c]" />
              </h3>

              <p
                className={
                  "break-words " +
                  (s.long
                    ? "max-w-full text-left sm:text-justify"
                    : s.wide
                    ? "max-w-[780px]"
                    : "max-w-[520px]")
                }
              >
                {s.text}
              </p>
            </article>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-[50px] text-center">
          <a
            href="/"
            className="inline-block rounded-full border-2 border-[#1a8bbd] bg-white px-[30px] py-3 font-bold text-[#0f6a91] transition-colors duration-200 hover:bg-[#1a8bbd] hover:text-white motion-reduce:transition-none"
          >
            &lsaquo; Back To Home
          </a>
        </div>
      </main>

    </>
  );
}
