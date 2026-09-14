import SidebarHeader from "../components/SidebarHeader.jsx";
import SidebarFooter from "../components/SidebarFooter.jsx";
import ChatThreadsList from "../components/ChatThreadsList.jsx";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Sidebar header */}
      <SidebarHeader />
      {/* Chat threads list */}
      <ChatThreadsList />
      {/* Sidebar footer */}
      <SidebarFooter />
    </aside>

  );
}