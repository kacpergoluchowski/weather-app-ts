import clsx from "clsx";
import { NavLink } from "react-router-dom";
import type { DesktopSidebarNavItemProps } from "../../types/DesktopSidebarNavItemProps";

export default function DesktopSidebarNavItem({
  icon: Icon,
  label,
  path,
}: DesktopSidebarNavItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(
          "mx-auto my-2 flex w-4/5 items-center gap-4 rounded-xl p-3.5 font-medium transition-colors",
          isActive ? "bg-blue-100 text-blue-600 shadow-sm" : "hover:bg-white",
        )
      }
    >
      <Icon className="size-6" aria-hidden="true" />

      <span className="text-[clamp(14px,0.5vw+6px,16px)]">{label}</span>
    </NavLink>
  );
}
