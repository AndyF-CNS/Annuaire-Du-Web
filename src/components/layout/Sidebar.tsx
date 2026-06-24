import { LayoutDashboard, Globe, BookOpen, Sparkles, Star, MoreHorizontal, X, Wrench, Newspaper, NotebookPen } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// 🔹 Composant HubSVG (adapté aux couleurs TFH)
const HubSVG = ({ size = 24, primary = "#FFFFFF", accent = "#00B4C8", node = "#FFFFFF", line = "#FFFFFF" }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" className="shrink-0">
    <circle cx="22" cy="22" r="7.5" fill={accent} opacity="0.25" />
    <circle cx="22" cy="22" r="5" fill={accent} />
    <circle cx="22" cy="22" r="3" fill={primary} />
    {([ [22, 5], [37, 13.5], [37, 30.5], [22, 39], [7, 30.5], [7, 13.5] ] as [number, number][]).map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill={node} />
    ))}
    <line x1="22" y1="8.5" x2="22" y2="16" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="33.5" y1="15.5" x2="27.5" y2="19" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="33.5" y1="28.5" x2="27.5" y2="25" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="22" y1="35.5" x2="22" y2="28" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="10.5" y1="28.5" x2="16.5" y2="25" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="10.5" y1="15.5" x2="16.5" y2="19" stroke={line} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const menu = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Annuaire", path: "/annuaire", icon: Globe },
  { label: "Fiches", path: "/fiches", icon: BookOpen },
  { label: "IA", path: "/ia", icon: Sparkles },
  { label: "Favoris", path: "/favoris", icon: Star },
  { label: "TechFacile", path: "/tech-facile", icon: Wrench },
  { label: "Blog", path: "/blog", icon: Newspaper },
  { label: "Ateliers", path: "/ateliers", icon: NotebookPen },
];

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const mainLinks = menu.slice(0, 4);

  return (
    <>
      {/* 🖥️ VERSION DESKTOP (Tailwind gère le responsive) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-60 bg-[#08152B] p-6 flex-col gap-8 border-r border-[#00B4C8]/20">
        {/* Logo + Texte */}
        <div className="flex items-center gap-3">
          <HubSVG size={32} primary="#FFFFFF" accent="#00B4C8" node="#FFFFFF" line="#FFFFFF" />
          <div className="text-base sm:text-lg font-extrabold text-white tracking-tight shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              TechFacile<span className="text-[#00B4C8]">Hub</span>
            </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5">
          {menu.map((item) => {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#1A4FD6] text-white shadow-md shadow-[#1A4FD6]/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                <item.icon size={20} /> {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* 📱 VERSION MOBILE (Floating Dock) */}
      <nav className="md:hidden fixed bottom-4 inset-x-4 z-[60] bg-[#08152B] text-white p-2 rounded-full flex items-center justify-between shadow-2xl border border-slate-700">
        {mainLinks.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 rounded-full p-2 transition-all duration-300 ${
                isActive ? "bg-[#1A4FD6] text-white px-4" : "text-slate-400"
              }`}
            >
              <item.icon size={22} />
              {isActive && <span className="text-xs font-bold whitespace-nowrap">{item.label}</span>}
            </NavLink>
          );
        })}
        <button
          onClick={() => setShowMore(!showMore)}
          className="p-3 text-slate-400"
        >
          {showMore ? <X size={22} /> : <MoreHorizontal size={22} />}
        </button>
      </nav>

      {/* 📱 MODALE "PLUS" PLEIN ÉCRAN */}
      <div
        className={`md:hidden fixed inset-0 bg-[#08152B]/95 backdrop-blur-sm z-50 p-8 pt-20 transition-all duration-500 ease-in-out ${
          showMore ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex justify-end mb-10">
          <button onClick={() => setShowMore(false)} className="p-2 text-white">
            <X size={32} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {menu.slice(4).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setShowMore(false)}
              className="flex flex-col items-center justify-center gap-3 p-6 bg-[#0a1b38] border border-slate-800 rounded-3xl text-slate-300"
            >
              <item.icon size={32} className="text-[#00B4C8]" />
              <span className="font-bold text-sm">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}