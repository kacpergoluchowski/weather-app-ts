import { NavLink } from "react-router-dom";

export default function DesktopSidebarNavItem({ icon: Icon, label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `mx-auto flex w-8/10 items-center gap-4 rounded-xl p-3.5 font-medium transition-colors ${
          isActive ? "bg-blue-100 text-blue-600 shadow-sm" : "hover:bg-white my-2"
        }`
      }
    >
      <Icon size={25} aria-hidden="true" />

      <span className="text-[clamp(14px,0.5vw+6px,16px)]">{label}</span>
    </NavLink>
  );
}
