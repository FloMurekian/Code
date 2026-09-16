import SidebarHeader from "../components/SidebarHeader.jsx";
import SidebarFooter from "../components/SidebarFooter.jsx";
import ChatThreadsList from "../components/ChatThreadsList.jsx";

export default function Sidebar(props) {
  return (
    <aside className="sidebar">
      {/* Sidebar header */}
      <SidebarHeader />
      {/* Chat threads list */}
      <ChatThreadsList threads={props.threads} />
      {/* Sidebar footer */}
      <SidebarFooter />
    </aside>

  );
}