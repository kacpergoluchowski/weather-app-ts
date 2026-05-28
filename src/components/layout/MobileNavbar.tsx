import { NavLink } from "react-router-dom";
import { navItems } from "../../data/mobileNavItems";
import clsx from "clsx";

export default function MobileNavbar() {
  return (
    <nav
      aria-label="Mobilna nawigacja"
      className="fixed bottom-0 z-50 flex h-18 w-full items-center justify-around rounded-t-lg border border-gray-100 bg-white font-medium shadow-xl lg:hidden"
    >
      {navItems.map(({ id, icon: Icon, label, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            clsx(
              "flex flex-col items-center gap-2 text-[clamp(10px,3.95vw,11px)] transition-colors",
              isActive ? "text-blue-500" : "text-gray-500",
            )
          }
        >
          <Icon className="size-5" aria-hidden="true" />

          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
