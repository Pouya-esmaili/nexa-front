// "use client";

// import { useLang } from "./LanguageProvider";

// /**
//  * EN / فارسی toggle button. Shows the language you'd switch TO.
//  * Used in the desktop header and the mobile drawer.
//  */
// export default function LangSwitch({ className = "" }: { className?: string }) {
//   const { lang, toggle } = useLang();
//   return (
//     <button
//       type="button"
//       onClick={toggle}
//       aria-label={lang === "en" ? "تغییر زبان به فارسی" : "Switch language to English"}
//       className={`inline-flex items-center gap-1.5 px-3 py-[9px] rounded-full border-[1.5px] border-[#E2E2E2] text-[13px] font-semibold text-[#1a1a1a] hover:border-[#8F27FF] hover:text-[#8F27FF] transition-colors cursor-pointer ${className}`}
//     >
//       <svg
//         className="w-[15px] h-[15px] opacity-70"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth={2}
//       >
//         <circle cx="12" cy="12" r="10" />
//         <line x1="2" y1="12" x2="22" y2="12" />
//         <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//       </svg>
//       <span>{lang === "en" ? "فارسی" : "EN"}</span>
//     </button>
//   );
// }
