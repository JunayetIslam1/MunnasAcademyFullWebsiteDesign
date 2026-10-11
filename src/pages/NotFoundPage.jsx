import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page not found | Munna's Academy";
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-[700px] flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-['Raleway',sans-serif] text-[clamp(80px,18vw,160px)] font-black leading-none text-[#1a8bbd] [text-shadow:0_6px_0_rgba(10,77,107,.2)]">
        404
      </p>
      <h1 className="mt-4 text-2xl font-bold text-[#0a4d6b]">Page not found</h1>
      <p className="mt-2 text-[#5c6670]">The page you are looking for does not exist or has moved.</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-black px-6 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition duration-200 hover:-translate-y-px hover:bg-[#222] motion-reduce:transition-none"
      >
        &lsaquo; BACK TO HOME
      </Link>
    </main>
  );
}
