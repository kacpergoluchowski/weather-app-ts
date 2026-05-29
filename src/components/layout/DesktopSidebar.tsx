import DesktopSidebarForm from "../ui/DesktopSidebarForm";
import DesktopSidebarNavList from "../ui/DesktopSidebarNavList";
import Logo from "../ui/Logo";

type DesktopSidebarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export default function DesktopSidebar({
  searchValue,
  onSearchChange,
}: DesktopSidebarProps) {
  return (
    <aside className="fixed top-0 left-0 hidden h-screen w-72 border-r border-slate-200 bg-slate-100 py-5 xl:block">
      <Logo />

      <DesktopSidebarForm
        searchValue={searchValue}
        onSearchChange={onSearchChange}
      />

      <DesktopSidebarNavList />
    </aside>
  );
}