import DesktopSidebarForm from "../ui/DesktopSidebarForm";
import DesktopSidebarNavList from "../ui/DesktopSidebarNavList";
import Logo from "../ui/Logo";

export default function DesktopSidebar() {
  return (
    <aside className="hidden h-screen w-72 border-r border-slate-200 bg-slate-100 py-5 xl:block">
      <Logo />
      <DesktopSidebarForm />
      <DesktopSidebarNavList />
    </aside>
  );
}
