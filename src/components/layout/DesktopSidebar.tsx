import DesktopSidebarForm from "../ui/DesktopSidebarForm";
import DesktopSidebarNavList from "../ui/DesktopSidebarNavList";
import Logo from "../ui/Logo";

export default function DesktopSidebar() {
  const desktopSidebarStyles =
    "hidden h-screen w-1/6 border-r border-[rgb(235,235,235)] bg-[rgb(239,241,249)] py-5 xl:block";

  return (
    <aside className={desktopSidebarStyles}>
      <Logo />
      <DesktopSidebarForm />
      <DesktopSidebarNavList />
    </aside>
  );
}
