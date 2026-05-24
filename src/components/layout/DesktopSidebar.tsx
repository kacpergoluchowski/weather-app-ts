import DesktopSidebarForm from "../ui/DesktopSidebarForm"
import DesktopSidebarNavList from "../ui/DesktopSidebarNavList"
import Logo from "../ui/Logo"

export default function DesktopSidebar() {
  const desktopSidebarStyle = 'hidden border-r border-[rgb(235,235,235)] bg-[rgb(239,241,249)] w-1/6 h-screen py-5 xl:block'

  return (
    <section className={desktopSidebarStyle}>
      <Logo />
      <DesktopSidebarForm />
      <DesktopSidebarNavList />
    </section>
  )
}
