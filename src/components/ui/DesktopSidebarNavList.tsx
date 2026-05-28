import { navItems } from "../../data/desktopSidebarNavItems";
import DesktopSidebarNavItem from "./DesktopSidebarNavItem";

export default function DesktopSidebarNavList() {
  return (
    <nav aria-label="główna nawigacja">
      {navItems.map((item) => (
        <DesktopSidebarNavItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </nav>
  );
}
