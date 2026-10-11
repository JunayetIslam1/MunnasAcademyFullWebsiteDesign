import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CLASS_OPTIONS } from "../data/homeData";

const AuthContext = createContext({
  openLogin: () => {},
  openRegister: () => {},
});

export const useAuthModals = () => useContext(AuthContext);

const inputCls =
  "w-full rounded-lg border border-[#cfdde6] bg-white px-3.5 py-2.5 text-base text-[#2b2f33] outline-none transition focus:border-[#1a8bbd] focus:ring-2 focus:ring-[#1a8bbd]/30";
const labelCls = "mb-1 block text-sm font-semibold text-[#0f6a91]";
const primaryBtn =
  "w-full rounded-lg bg-black px-5 py-3 font-['Raleway',sans-serif] text-sm font-extrabold text-[#e3202c] transition hover:bg-[#222]";

function ModalShell({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/60 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-[420px] overflow-hidden rounded-2xl bg-white px-6 pb-7 pt-8 shadow-[0_24px_60px_rgba(0,0,0,.4)] sm:px-8"
      >
        <span className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#1a8bbd,#0f6a91)]" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-2xl leading-none text-[#5c6670] transition hover:bg-[#e8f5fb] hover:text-black"
        >
          &times;
        </button>
        <h3 className="mb-5 text-center font-['Raleway',sans-serif] text-2xl font-extrabold text-[#0a4d6b]">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

function LoginForm({ onSwitch }) {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect login API here
      }}
    >
      <div>
        <label htmlFor="login-index" className={labelCls}>
          Index No
        </label>
        <input id="login-index" type="text" autoFocus className={inputCls} />
      </div>
      <div>
        <label htmlFor="login-pass" className={labelCls}>
          Password
        </label>
        <input id="login-pass" type="password" className={inputCls} />
      </div>
      <label className="flex items-center gap-2 text-[15px]">
        <input type="checkbox" className="h-4 w-4 accent-[#1a8bbd]" />
        Remember me
      </label>
      <button type="submit" className={primaryBtn}>
        LOGIN &rsaquo;
      </button>
      <p className="text-center text-[13px] leading-snug text-[#5c6670]">
        By logging in you agree to our Terms and Conditions and Privacy Policy
      </p>
      <p className="text-center text-[15px]">
        New here?{" "}
        <button type="button" onClick={onSwitch} className="font-bold text-[#0f6a91] hover:underline">
          Register
        </button>
      </p>
    </form>
  );
}

function RegisterForm({ onClose, onSwitch }) {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect registration API here
      }}
    >
      <div>
        <label htmlFor="reg-name" className={labelCls}>
          Student Name
        </label>
        <input id="reg-name" type="text" autoFocus className={inputCls} />
      </div>
      <div>
        <label htmlFor="reg-mobile" className={labelCls}>
          Mobile Number
        </label>
        <div className="flex">
          <span className="grid place-items-center rounded-l-lg border border-r-0 border-[#cfdde6] bg-[#e8f5fb] px-3 font-semibold text-[#0f6a91]">
            +88
          </span>
          <input id="reg-mobile" type="tel" inputMode="numeric" className={inputCls + " rounded-l-none"} />
        </div>
      </div>
      <div>
        <label htmlFor="reg-class" className={labelCls}>
          Select Class
        </label>
        <select id="reg-class" className={inputCls} defaultValue="">
          <option value="" disabled>
            Select Class
          </option>
          {CLASS_OPTIONS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="w-full rounded-lg border-2 border-[#1a8bbd] bg-white px-5 py-3 text-sm font-bold text-[#0f6a91] transition hover:bg-[#e8f5fb]"
        >
          Close
        </button>
        <button type="submit" className={primaryBtn}>
          REGISTER
        </button>
      </div>
      <p className="text-center text-[15px]">
        Already registered?{" "}
        <button type="button" onClick={onSwitch} className="font-bold text-[#0f6a91] hover:underline">
          Login
        </button>
      </p>
    </form>
  );
}

export function AuthModalsProvider({ children }) {
  const [open, setOpen] = useState(null); // "login" | "register" | null

  const close = useCallback(() => setOpen(null), []);
  const value = useMemo(
    () => ({ openLogin: () => setOpen("login"), openRegister: () => setOpen("register") }),
    []
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <AuthContext.Provider value={value}>
      {children}
      {open === "login" && (
        <ModalShell title="Login" onClose={close}>
          <LoginForm onSwitch={() => setOpen("register")} />
        </ModalShell>
      )}
      {open === "register" && (
        <ModalShell title="Registration Form" onClose={close}>
          <RegisterForm onClose={close} onSwitch={() => setOpen("login")} />
        </ModalShell>
      )}
    </AuthContext.Provider>
  );
}
