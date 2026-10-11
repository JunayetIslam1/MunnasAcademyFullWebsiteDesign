/*
  Home page data (copied from https://www.munnasacademy.com/index.php).
  Later you can replace these arrays with data from your PHP / API.
*/

import synced from "./synced.json";

export const SITE = "https://www.munnasacademy.com";
export const THUMB_BASE = `${SITE}/videos/allimage/`;

export const BANNER = {
  img: `${SITE}/cp/images/slider/446529284_Untitled-26-02.jpg`,
  href: "https://munnasacademy.com/clc",
  title: "Computer Learning Center",
};

export const CLASS_OPTIONS = [
  "SSC",
  "NC-SSC",
  "C-SSC",
  "Class Five",
  "Class Six",
  "Class Seven",
  "Class Eight",
  "Class Nine",
  "Class Ten",
  "CLASS TEN (NC-ENGLISH VERSION)",
  "Cadet Batch",
  "CLASS SIX (NC-ENGLISH VERSION)",
  "CLASS SEVEN (NC-ENGLISH VERSION)",
  "CLASS EIGHT (NC-ENGLISH VERSION)",
  "CLASS NINE (NC-ENGLISH VERSION)",
  "Class Nine (commerce)",
  "Class Ten (commerce)",
];

const v = (id, img, title) => ({ id, img, title });

const BASE_SECTIONS = [
  {
    id: 20,
    title: "SSC",
    menu: "SSC",
    isNew: true,
    videos: [
      v(17302, "1753878631_ssc-98.jpg", "SSC-27 Special Batch (Morning, Evening) [Clas No: 531/98] সাধারণ গণিত : অনু ৮.৪ বৃত্ত"),
      v(17281, "75857758_E-97.jpg", "SSC-27 Special Batch (Evening) [Clas No: 530/97] পদার্থবিজ্ঞান- অধ্যায় ৯ আলোর প্রতিসরণ"),
      v(17277, "576846007_M-97.jpg", "SSC-27 Special Batch (Morning) [Clas No: 530/97] পদার্থবিজ্ঞান- অধ্যায় ৯ আলোর প্রতিসরণ"),
      v(17265, "821397049_ssc-96.jpg", "SSC-27 Special Batch (Morning - Evening) [Clas No: 529/96] পদার্থবিজ্ঞান- অধ্যায় ৯ আলোর প্রতিসরণ"),
      v(17235, "363998239_ssc-95.jpg", "SSC-27 Special Batch (Morning - Evening) [Clas No: 528/95] পদার্থবিজ্ঞান- অধ্যায় ৯ আলোর প্রতিসরণ"),
      v(17230, "903756998_ssc%2092-94.jpg", "SSC-27 Special Batch (Morning - Evening) [Clas No: 525/92, 526/93, 527/94] রসায়ন - অধ্যায় ১১"),
      v(17218, "163111089_ssc-e-91.jpg", "SSC-27 Special Batch Evening [Clas No: 524/91] রসায়ন - অধ্যায় ৭ রাসায়নিক বিক্রিয়া"),
      v(17211, "1614078868_ssc.png", "SSC-27 Special Batch Morning [Clas No: 524/91] রসায়ন - অধ্যায় ৭ রাসায়নিক বিক্রিয়া"),
    ],
  },
  {
    id: 21,
    title: "NC-SSC",
    menu: "NC-SSC",
    isNew: true,
    videos: [
      v(17280, "60947941_103-63.png", "SSC-27(NC) | Class No: 63/179 | Biology | Chapter:05 | 29.09.26"),
      v(17263, "1955629320_103-62.png", "SSC-27(NC) | Class No: 62/178 | Biology | Chapter:05 | 28.09.26"),
      v(17241, "1091386244_103.png", "SSC-27(NC) | Class No: 61/177 | G.Math | Chapter:08 | 26.09.26"),
      v(17216, "818421595_103-60.png", "SSC-27(NC) | Class No: 60/176 | Chemistry | Chapter:05 | 24.09.26"),
      v(17183, "1712908953_103-59.png", "SSC-27(NC) | Class No: 59/175 | Physics | Chapter:05 | 22.09.26"),
      v(17161, "1567923738_103-58.png", "SSC-27(NC) | Class No: 58/174 | Chemistry | Chapter: 04 & 05 | 21.09.26"),
      v(17130, "1772860648_103.png", "SSC-27(NC) | Class No: 57/173 | Chemistry | Chapter: 04 | 19.09.26"),
      v(17111, "901764672_103-56.png", "SSC-27(NC) | Class No: 56/172 | Physics | Chapter: 06 | 17.09.26"),
    ],
  },
  {
    id: 22,
    title: "Commerce-SSC",
    menu: "Commerce-SSC",
    isNew: true,
    videos: [
      v(17399, "937449488_104+105.png", "SSC 2027 - Commerce [Class No - 76/417] হিসাববিজ্ঞান ; অধ্যায় - ১০ (আর্থিক অবস্থার বিবরণী)"),
      v(17335, "2047295609_104+105.png", "SSC 2027 - Commerce [Class No - 75/416] হিসাববিজ্ঞান ; অধ্যায় - ১০ (আর্থিক অবস্থার বিবরণী)"),
      v(17332, "676060390_104+105.png", "SSC 2027 - Commerce [Class No - 74/415] হিসাববিজ্ঞান ; অধ্যায় - ১০ (আর্থিক অবস্থার বিবরণী)"),
      v(17326, "1662828783_106.png", "SSC 2027 - N.C Commerce [Class No - 78/177] Accounting; Ch - 6 (Journal)"),
      v(17325, "315410442_104+105.png", "SSC 2027 - Commerce [Class No - 73/414] হিসাববিজ্ঞান ; অধ্যায় - ১০ (আর্থিক অবস্থার বিবরণী)"),
      v(17314, "2100218710_106.png", "SSC 2027 - N.C Commerce [Class No - 77/176] Business Studies; Ch - 9 (Marketing)"),
      v(17313, "1286938408_104+105.png", "SSC 2027 - Commerce [Class No - 72/413] হিসাববিজ্ঞান ; অধ্যায় - ১০ (আর্থিক অবস্থার বিবরণী)"),
      v(17312, "174272325_106.png", "SSC 2027 - N.C Commerce [Class No - 76/175] Accounting ; Ch - 06 (Journal)"),
    ],
  },
  {
    id: 23,
    title: "CLASS Five",
    menu: "Class Five",
    isNew: true,
    videos: [
      v(17393, "1085062489_502-112.png", "Class Five (502) | ক্লাস নং: 112 | L.B: 10 | বিষয়: গণিত | অধ্যায়ঃ ০৭ | তারিখ: 08.10.26"),
      v(17392, "310173312_501-112.png", "Class Five (501) | ক্লাস নং: 112 | L.B: 10 | বিষয়: গণিত | অধ্যায়ঃ ০৭ | তারিখ: 07.10.26"),
      v(17365, "177178650_501.png", "Class Five (501) | ক্লাস নং: 111 | L.B: 10 | বিষয়: গণিত | অধ্যায়ঃ ০৬ | তারিখ: 05.10.26"),
      v(17317, "731545845_502+503.png", "Class Five (502+503) | ক্লাস নং: 110 | L.B: 10 | বিষয়: গণিত | অধ্যায়ঃ ০৬ | তারিখ: 01.10.26"),
      v(17294, "1857185151_501-110.png", "Class Five (501) | ক্লাস নং: 110 | L.B: 10 | বিষয়: গণিত | অধ্যায়ঃ ০৬ | তারিখ: 30.09.26"),
      v(17275, "54130174_503-109.png", "Class Five (503) | ক্লাস নং: 109 | L.B: 10 | বিষয়: বিজ্ঞান | অধ্যায়ঃ ১৩ | তারিখ: 29.09.26"),
      v(17274, "809650407_502-109.png", "Class Five (502) | ক্লাস নং: 109 | L.B: 10 | বিষয়: বিজ্ঞান | অধ্যায়ঃ ১৩ | তারিখ: 29.09.26"),
      v(17259, "710979951_501-109.png", "Class Five (501) | ক্লাস নং: 109 | L.B: 10 | বিষয়: বিজ্ঞান | অধ্যায়ঃ ১৩ | তারিখ: 28.09.26"),
    ],
  },
  {
    id: 1,
    title: "CLASS SIX",
    menu: "Class Six",
    isNew: true,
    videos: [
      v(17395, "286455539_6-197.jpg", "Class Six (601, 602)[Class No-197] গণিত- অধ্যায় - ০৭ ব্যবহারিক জ্যামিতি, অধ্যায় - ০৮ তথ্য ও উপাত্ত"),
      v(17376, "496400755_602-196.jpg", "Class SIx (602)[Class No-196] গণিত- অধ্যায় - ০৭ ব্যবহারিক জ্যামিতি, অধ্যায় - ০৮ তথ্য ও উপাত্ত"),
      v(17375, "189937622_601-196.jpg", "Class SIx (601)[Class No-196] গণিত- অধ্যায় - ০৭ ব্যবহারিক জ্যামিতি, অধ্যায় - ০৮ তথ্য ও উপাত্ত"),
      v(17359, "743559929_602-194.jpg", "Class SIx (602)[Class No-194] গণিত- অধ্যায় - ০৭ ব্যবহারিক জ্যামিতি, অধ্যায় - ০৮ তথ্য ও উপাত্ত"),
      v(17350, "525431543_601-194.jpg", "Class SIx (601)[Class No-194] গণিত- অধ্যায় - ০৭ ব্যবহারিক জ্যামিতি, অধ্যায় - ০৮ তথ্য ও উপাত্ত"),
      v(17345, "1689649655_6-193.jpg", "Class SIx (601, 602)[Class No-193] গণিত-অনু ১.৬ (স্বাভাবিক সংখ্যা ও ভগ্নাংশ)অনু ৪.৩ (বীজগণিতীয় রাশি)"),
      v(17320, "506849218_6-192.jpg", "Class SIx (601, 602)[Class No-192] বিজ্ঞান- অধ্যায় : ৬, ৭, ১৩, ১৪-সংবে.., পদার্থে.., খাদ্য..পরিবেশ.."),
      v(17292, "869638221_602-191.jpg", "Class SIx (602)[Class No-191] বিজ্ঞান-অধ্যায় : ৬, ৭, ১৩, ১৪- সংবেদি.., পদার্থের.., খাদ্য.., পরিবেশের.."),
    ],
  },
  {
    id: 2,
    title: "CLASS SEVEN",
    menu: "Class Seven",
    isNew: true,
    videos: [
      v(17394, "789633095_7-197.jpg", "Class Seven(701, 702)[Class No-197] গণিত- অধ্যায় ৭ সরল সমীকরণ ও অধ্যায় ১০ - সর্বসমতা ও সদৃশতা"),
      v(17374, "1847771578_702-196.jpg", "Class Seven(702)[Class No-196] গণিত- অধ্যায় ৭ সরল সমীকরণ ও অধ্যায় ১০ - সর্বসমতা ও সদৃশতা"),
      v(17373, "683896818_7-196.jpg", "Class Seven(701)[Class No-196] গণিত- অধ্যায় ৭ সরল সমীকরণ ও অধ্যায় ১০ - সর্বসমতা ও সদৃশতা"),
      v(17358, "1842231147_702-194.jpg", "Class Seven(702)[Class No-194] গণিত- অধ্যায় ৭ সরল সমীকরণ ও অধ্যায় ১০ - সর্বসমতা ও সদৃশতা"),
      v(17349, "1541688062_701-194.jpg", "Class Seven(701)[Class No-194] গণিত- অধ্যায় ৭ সরল সমীকরণ ও অধ্যায় ১০ - সর্বসমতা ও সদৃশতা"),
      v(17344, "1821649034_7-193.jpg", "Class Seven(701, 702)[Class No-193] গণিত- অধ্যায় ৭ সরল সমীকরণ ও অধ্যায় ১০ - সর্বসমতা ও সদৃশতা"),
      v(17321, "222221494_7-192.jpg", "Class Seven(701, 702)[Class No-192] বিজ্ঞান-অধ্যায় ৪, ৫, ৭, ১৪- শ্বসন., পরিপাকত..., শক্তি...,জল.."),
      v(17299, "1674266956_702-191.jpg", "Class Seven(702)[Class No-191] বিজ্ঞান-অধ্যায় ৪, ৫, ৭, ১৪- শ্বসন., পরিপাকতন্ত্র.., শক্তির..,জলবায়ু."),
    ],
  },
  {
    id: 3,
    title: "CLASS EIGHT",
    menu: "Class Eight",
    isNew: true,
    videos: [
      v(17398, "113424947_8-197.jpg", "Class Eight (801, 802)[Class No-197] গণিত- অধ্যায় ১০ বৃত্ত- অনু ১০.৩"),
      v(17378, "668527594_802-196.jpg", "Class Eight (802)[Class No-196] গণিত- অধ্যায় ০৭ সেট, অধ্যায় ১০ বৃত্ত অনু ১০.৩"),
      v(17377, "612303996_801-196.jpg", "Class Eight (801)[Class No-196] গণিত- অধ্যায় ০৭ সেট, অধ্যায় ১০ বৃত্ত অনু ১০.৩"),
      v(17356, "1836984475_802-194.jpg", "Class Eight (802)[Class No-194] গণিত-অধ্যায় ১০ বৃত্ত"),
      v(17351, "365257132_801-194.jpg", "Class Eight (801)[Class No-194] গণিত-অধ্যায় ১০ বৃত্ত"),
      v(17348, "208632362_8-193.jpg", "Class Eight (801,802)[Class No-193] গণিত-অধ্যায় ১০ বৃত্ত"),
      v(17322, "1855352443_8-192.jpg", "Class Eight (801, 802)[Class No-192] বিজ্ঞান-অধ্যায় ৬, ৮, ৯, ১০ পরমাণুর,,, রাসায়নিক..,বর্তনী..,অম্ল."),
      v(17293, "77641690_802-191.jpg", "Class Eight (802)[Class No-191] বিজ্ঞান-অধ্যায় ৬, ৮, ৯, ১০ পরমাণুর,,, রাসায়নিক.., বর্তনী.., অম্ল.."),
    ],
  },
  {
    id: 5,
    title: "CLASS NINE",
    menu: "Class Nine",
    isNew: true,
    videos: [
      v(17401, "1113201940_9-274.jpg", "Class Nine (901, 902) Class No:274 - উচ্চতর গণিত- অধ্যায় ১০দ্বিপদী ও বিস্তৃতি"),
      v(17400, "1982154352_9-273.jpg", "Class Nine (901, 902) Class No:273 - সাধারণ গণিত অনু ৮.৩ বৃত্ত"),
      v(17382, "1906615598_901-272.jpg", "Class Nine (901) Class No:272 - রসায়ন - অধ্যায় ৮ রসায়ন ও শক্তি"),
      v(17381, "90370396_9-271.jpg", "Class Nine (901, 902) Class No:271 - রসায়ন - অধ্যায় ৮ রসায়ন ও শক্তি"),
      v(17380, "1952163142_9-270.jpg", "Class Nine (901, 902) Class No:270 - রসায়ন - অধ্যায় ৮ রসায়ন ও শক্তি"),
      v(17370, "1222890169_902-269.jpg", "Class Nine (902) Class No:269 - সাধারণ গণিত অনু ৮.২ বৃত্ত"),
      v(17364, "1750928121_901-269.jpg", "Class Nine (901) Class No:269 - সাধারণ গণিত অনু ৮.২ বৃত্ত"),
      v(17363, "573095797_9-268.jpg", "Class Nine (901, 902) Class No:268 - জীববিজ্ঞান - অধ্যায় ৭ গ্যাসীয় বিনিময়"),
    ],
  },
  {
    id: 6,
    title: "CLASS TEN",
    menu: "Class Ten",
    isNew: true,
    videos: [
      v(15519, "1262099198_10-130.jpg", "Class Ten (101, 102) [ Class No:130/433] জীববিজ্ঞান -অধ্যায় ১৪- জীবপ্রযুক্তি"),
      v(15517, "1676539702_10-129.png", "Class Ten (101, 102) [ Class No:129/432] জীববিজ্ঞান- অধ্যায়: ১০ ( সমন্বয় )"),
      v(15486, "328189920_10-128.png", "Class Ten (101, 102) [ Class No:128/431] জীববিজ্ঞান- অধ্যায়: ১০ ( সমন্বয় )"),
      v(15472, "1502699784_102-127.png", "Class Ten (102) [ Class No:127/430 ] উচ্চ.গণিত - ৮.৩ ( ত্রিকোণমিতি )"),
      v(15470, "845227377_101-127.png", "Class Ten (101) [ Class No:127/430 ] উচ্চ.গণিত - ৮.৩ ( ত্রিকোণমিতি )"),
      v(15414, "1234146341_10-126.png", "Class Ten (101,102) [ Class No: 126/429] পদার্থবিজ্ঞান - অধ্যায়: ১৩ ( ইলেক্ট্রনিক্স )"),
      v(15413, "937165335_10-126.png", "Class Ten (101,102) [ Class No: 126/429] পদার্থবিজ্ঞান - অধ্যায়: ১৩ ( ইলেক্ট্রনিক্স )"),
      v(15326, "1635149855_64-101.png", "Class Ten(101) [Class No - 64/367] উচ্চ.গণিত -অনু : ৮.১/৮.২/৮.৩ ( ত্রিকোণমিতি )"),
    ],
  },
  {
    id: 11,
    title: "CLASS SIX (NC-ENGLISH VERSION)",
    menu: "Class Six NC",
    isNew: true,
    videos: [
      v(17388, "677826378_603-182.png", "Class Six (603–NC) | Class No: 182 | Science | Chapter: 13 | Date:07.10.26"),
      v(17385, "351093905_603-181.png", "Class Six (603–NC) | Class No: 181 | Science | Chapter: 13 | Date:06.10.26"),
      v(17369, "311192820_603.png", "Class Six (603–NC) | Class No: 180 | Math | Chapter: 05 | Date:05.10.26"),
      v(17352, "575522353_603.png", "Class Six (603–NC) | Class No: 179 | Math | Chapter: 05 | Date:04.10.26"),
      v(17339, "1798533843_603.png", "Class Six (603–NC) | Class No: 178 | Math | Chapter: 05 | Date:3.10.26"),
      v(17295, "2065021496_603-176.png", "Class Six (603–NC) | Class No: 176 | Science | Chapter: 10 | Date:30.09.26"),
      v(17289, "442375550_603-175.png", "Class Six (603–NC) | Class No: 175 | Math | Chapter: 04(4.3) | Date: 29.09.26"),
      v(17260, "257275643_603-174.png", "Class Six (603–NC) | Class No: 174 | Math | Chapter: 04 | Date: 28.09.26"),
    ],
  },
  {
    id: 12,
    title: "CLASS SEVEN (NC-ENGLISH VERSION)",
    menu: "Class Seven NC",
    isNew: true,
    videos: [
      v(17387, "785388598_703-182.png", "Class Seven (703–NC) | Class No: 182 | Math | Chapter: 07(7.3) | Date: 07.10.26"),
      v(17384, "228431132_703-181.png", "Class Seven (703–NC) | Class No: 181 | Science | Chapter: 11 | Date: 06.10.26"),
      v(17368, "1600409929_703.png", "Class Seven (703–NC) | Class No: 180 | Science | Chapter: 11 | Date: 05.10.26"),
      v(17353, "1661476854_703.png", "Class Seven (703–NC) | Class No: 179 | Math | Chapter: 07(7.3) | Date: 04.10.26"),
      v(17340, "2013330092_703.png", "Class Seven (703–NC) | Class No: 178 | Math | Chapter: 07(7.3) | Date: 3.10.26"),
      v(17296, "1014882299_703-176.png", "Class Seven (703–NC) | Class No: 176 | Science | Chapter: 11 | Date: 30.09.26"),
      v(17288, "15612945_703-175.png", "Class Seven (703–NC) | Class No: 175 | Science | Chapter: 11 | Date: 29.09.26"),
      v(17261, "2097314121_703-174.png", "Class Seven (703–NC) | Class No: 174 | Math | Chapter: 7.3 | Date: 28.09.26"),
    ],
  },
  {
    id: 13,
    title: "CLASS EIGHT (NC-ENGLISH VERSION)",
    menu: "Class Eight NC",
    isNew: true,
    videos: [
      v(17389, "1665318502_803-182.png", "Class Eight (803–NC) | Class No: 182 | Math | Chapter: 10(10.3) | Date: 07.10.26"),
      v(17386, "1046721493_803-181.png", "Class Eight (803–NC) | Class No: 181 | Science | Chapter: 13 | Date: 06.10.26"),
      v(17367, "1838524721_803.png", "Class Eight (803–NC) | Class No: 180 | Science | Chapter: 13 | Date: 05.10.26"),
      v(17354, "2024585692_803.png", "Class Eight (803–NC) | Class No: 179 | Math | Chapter: 10(10.3) | Date: 04.10.26"),
      v(17341, "1020698619_803.png", "Class Eight (803–NC) | Class No: 178 | Science | Chapter: 13 | Date: 3.10.26"),
      v(17297, "1030608084_803-176.png", "Class Eight (803–NC) | Class No: 176 | Math | Chapter: 10 | Date: 30.09.26"),
      v(17290, "6328947_803-175.png", "Class Eight (803–NC) | Class No: 175 | Math | Chapter: 10.2 | Date: 29.09.26"),
      v(17262, "1506324904_803-174.png", "Class Eight (803–NC) | Class No: 174 | Science | Chapter: 13 | Date: 28.09.26"),
    ],
  },
  {
    id: 14,
    title: "CLASS NINE (NC-ENGLISH VERSION)",
    menu: "Class Nine NC",
    isNew: true,
    videos: [
      v(17404, "2026489015_222.png", "Class Nine (903–NC) | Class No: 222 | Physics | Chapter: 8 | Date: 09.10.26"),
      v(17403, "1495363563_221.png", "Class Nine (903–NC) | Class No: 221 | G. Math | Chapter: 8.3 | Date: 09.10.26"),
      v(17391, "1131053723_903-220.png", "Class Nine (903–NC) | Class No: 220 | H. Math | Chapter: 8.2 | Date: 08.10.26"),
      v(17390, "2021562498_903-219.png", "Class Nine (903–NC) | Class No: 219 | Physics | Chapter:07 | Date: 07.10.26"),
      v(17383, "1372323686_903-218.png", "Class Nine (903–NC) | Class No: 218 | Biology | Chapter:07 | Date: 06.10.26"),
      v(17366, "1166505088_903.png", "Class Nine (903–NC) | Class No: 217 | Biology | Chapter:07 | Date: 05.10.26"),
      v(17355, "2068765052_903.png", "Class Nine (903–NC) | Class No: 216 | Chemistry | Chapter:07 | Date: 04.10.26"),
      v(17342, "133411344_903.png", "Class Nine (903–NC) | Class No: 215 | Chemistry | Chapter:07 | Date: 03.10.26"),
    ],
  },
  {
    id: 8,
    title: "Class Ten (NC-English Version)",
    menu: "Class Ten (NC-English Version)",
    isNew: false,
    videos: [
      v(15449, "1926217810_103-24.png", "Class Ten (103-NC) | Class No: 113 | Physics | Chapter - 12| 24.05.26"),
      v(15386, "2050469388_103-23.png", "Class Ten (103-NC) | Class No: 112 | G.Math | Chapter - 03(3.1-3.2)| 23.05.26"),
      v(15184, "2099894067_103-111.png", "Class Ten (103-NC) | Class No: 111 | Chemistry | Chapter - 12 | 21.05.26"),
      v(14916, "1361060639_103-110.png", "Class Ten (103-NC) | Class No: 110 | Chemistry | Chapter - 12 | 20.05.26"),
      v(14750, "1771587786_103-19.png", "Class Ten (103-NC) | Class No: 109 | Physics | Chapter - 12 | 19.05.26"),
      v(14570, "1768196397_103-18.png", "Class Ten (103-NC) | Class No: 108 | Physics | Chapter - 12 | 18.05.26"),
      v(14552, "1400675242_103-17.png", "Class Ten (103-NC) | Class No: 107 | G.math | Chapter - 01 | 17.05.26"),
      v(14530, "1948732672_103-14.png", "Class Ten (103-NC) | Class No: 105 | H.math | Chapter - 14 | 14.05.26"),
    ],
  },
  {
    id: 18,
    title: "Class Nine(commerce)",
    menu: "Class Nine(commerce)",
    isNew: true,
    videos: [
      v(17402, "177527999_904+905.png", "Class Nine - Commerce (904 + 905) [Class No - 201] ব্যবসায় উদ্যাগ ; অধ্যায় - ০৮ (ব্যবসায় প্রতিষ্ঠানের ব্যবস্থাপনা)"),
      v(17397, "560355954_190.jpg", "Class Nine - Commerce (N.C - 906) [Class No - 190] Finance & Banking ; Ch - 06 (Capital Budgeting)"),
      v(17396, "1591827713_200.jpg", "Class Nine - Commerce (904 + 905) [Class No - 200] সাধারণ গণিত ; অধ্যায় - ০৯(ত্রিকোণমিতি)"),
      v(17379, "920117423_199.jpg", "Class Nine - Commerce (904 + 905) [Class No - 199] সাধারণ গণিত ; অধ্যায় - ০৯(ত্রিকোণমিতি)"),
      v(17372, "1481066160_188.jpg", "Class Nine - Commerce (N.C - 906) [Class No - 188] Finance & Banking ; Ch - 12 (Bank & client)"),
      v(17371, "903576348_198.jpg", "Class Nine - Commerce (904 + 905) [Class No - 198] ফিন্যান্স ও ব্যাংকিং; অধ্যায় - ০৬"),
      v(17361, "2066393556_906.png", "Class Nine - Commerce (N.C - 906) [Class No - 186] Accounting; Ch - 06 (Journal)"),
      v(17360, "2143257161_904+905.png", "Class Nine - Commerce (904 + 905) [Class No - 197] ফিন্যান্স ও ব্যাংকিং; অধ্যায় - ০৬ (মূলধন আয়-ব্যয় প্রাক্কলন)"),
    ],
  },
  {
    id: 19,
    title: "Class Ten(commerce)",
    menu: "Class Ten(commerce)",
    isNew: true,
    videos: [
      v(16562, "165437094_904+905.png", "Class Nine - Commerce (904 + 905) [Class No - 147] হিসাববিজ্ঞান ; অধ্যায় - ৭ (খতিয়ান)"),
      v(16005, "2008294907_106.png", "Class Ten - Commerce (N.C - 106) [Class No- 97] General Science, Ch - 02 (Water For Life)"),
      v(16004, "473762796_104+105.png", "Class Ten - Commerce (104 + 105) [Class No - 111] সাধারন গণিত, অধ্যায় - ০৭ (ব্যবহারিক জ্যামিতি)"),
      v(15481, "1121957571_106.png", "Class Ten - Commerce (N.C - 106) [Class No- 96] General Math, Ch - 3 (Algebraic Expressions)"),
      v(15480, "45170376_104+105.png", "Class Ten - Commerce (104 + 105) [Class No - 110] সাধারন গণিত, অধ্যায় - ০৭ (ব্যবহারিক জ্যামিতি)"),
      v(15420, "1286396600_104+105.png", "Class Ten - Commerce (104 + 105) [Class No - 109] সাধারন বিজ্ঞান, অধ্যায় - ১০ (এসো বলকে জানি)"),
      v(15180, "1725110601_106.png", "Class Ten - Commerce (N.C - 106) [Class No- 95] Finance & Banking, Ch - 10 (Commercial Bank)"),
      v(15179, "65680322_104+105.png", "Class Ten - Commerce (104 + 105) [Class No - 108] ফিন্যান্স ও ব্যাংকিং, অধ্যায় - ০৬ (মূলধনি আয়-ব্যয় প্রাক্কলন)"),
    ],
  },
];

const pad = (n) => String(n).padStart(2, "0");
const seq = (startId, count, title) =>
  Array.from({ length: count }, (_, i) => ({ id: startId - i, title: title(i + 1) }));

/* All 50 notices, newest first */
const BUILTIN_NOTICES = [
  ...seq(3967, 10, (n) => `Class Six-Ten Schedule( June - 2026 ) Page-${pad(n)}`),
  ...seq(3957, 5, (n) => `Class Six-Ten Schedule( February - March - 2026 ) Page-${pad(n)}`),
  ...seq(3952, 2, (n) => `Class Six-Ten Schedule( Until - 15 February - 2026 ) Page-${pad(n)}`),
  ...seq(3950, 3, (n) => `Class Six-Ten Schedule( January - 2026 ) Page-${pad(n)}`),
  ...seq(3947, 11, (n) => `Class Six-Nine Schedule(October-November) Page-${pad(n)}`),
  ...seq(3935, 5, (n) => `Class Six-Nine Schedule For - September (Page-${n})`),
  ...seq(3930, 5, (n) => `Class Six to Ten Schedule for - August ( Page-${pad(n)} )`),
  ...seq(3925, 4, (n) => `Class Six to Ten Schedule For - July ( Page-${pad(n)} )`),
  ...seq(3921, 3, (n) => `Schedule For February Class Six-Ten Page-${pad(n)}`),
  ...seq(3918, 2, (n) => `Class Eight Schedule For October and November Page-${pad(n)}`),
];

export const EXAM_POSTS = [
  { id: 3936, title: "২৬ আগস্ট থেকে SSC-2026 স্পেশাল কোর্সের ভর্তি শুরু হচ্ছে ।" },
  { id: 3738, title: "CLASS NINE - কুইজ ১-৬ এর ফাইনা…" },
];

export const INTRO_VIDEO = `${SITE}/videos/allvideo/1353841103_VID-20200504-WA0001.mp4`;

/* ---------- extra data for the full website ---------- */

/* Full-width banner(s) at the top of the home page. Add more objects for a slider. */
export const BANNERS = [BANNER];

export const CONTACT = {
  phones: ["01833424270", "01750601237"],
  address: "Panchlaish, Chittagong, Bangladesh",
  email: "munna_mohib@yahoo.com",
  phoneIntl: "+8801833424270",
  area: "Panchlaish, Chittagong",
  web: "www.munnasacademy.com",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.397740720198!2d91.82789777113514!3d22.359313314685103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad277caa9220cb%3A0xf274740d35824861!2sPanchlaish%2C+Chittagong!5e0!3m2!1sen!2sbd!4v1543868528519",
  webUrl: "http://www.munnasacademy.com",
};

export const INFO_VIDEOS = [
  { classId: 10, id: 2199, img: "2096748363_registration.png", title: "Website Registration Process" },
];

/* Groups notices that belong to the same schedule ("... Page-01", "... Page-02") */
export function groupNotices(items) {
  const map = new Map();
  items.forEach((n) => {
    const m = n.title.match(/^(.*?)\s*\(?\s*Page-?\s*(\d+)\s*\)?\s*$/i);
    const base = (m ? m[1] : n.title)
      .replace(/\s*\(\s*/g, " (")
      .replace(/\s*\)/g, ")")
      .trim();
    if (!map.has(base)) map.set(base, { title: base, pages: [] });
    map.get(base).pages.push({ id: n.id, page: m ? Number(m[2]) : null });
  });
  return [...map.values()].map((g) => ({
    ...g,
    pages: g.pages.sort((a, b) => (a.page ?? 0) - (b.page ?? 0)),
  }));
}

/* All videos of a class: from `npm run sync` when available, else the 8 built-in latest ones */
export const VIDEO_SECTIONS = BASE_SECTIONS.map((sec) => {
  const all = synced.videos?.[sec.id];
  return { ...sec, videos: all && all.length ? all : sec.videos };
});

export const NOTICES =
  synced.noticeList && synced.noticeList.length ? synced.noticeList : BUILTIN_NOTICES;

/* notice id -> { date, img }  (img is a file inside cp/images/news-notice/) */
export const NOTICE_IMG_BASE = `${SITE}/cp/images/news-notice/`;
export const NOTICE_INFO = {
  3967: { date: "Jun 03, 2026", img: "38665287_June-images-0.jpg" },
  ...(synced.notices || {}),
};

export const SOCIAL_LINKS = {
  Facebook: "https://www.facebook.com/memohib",
  Twitter: "#",
  Instagram: "#",
  YouTube: "https://www.youtube.com/channel/UCD44YPwrpN9FOWfDMvdyl6A",
};
