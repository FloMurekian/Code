import { Outlet } from "react-router";
import SidebarHeader from "../components/SidebarHeader.jsx";
import SidebarFooter from "../components/SidebarFooter.jsx";
import ChatThreadsList from "../components/ChatThreadsList.jsx";

function Sidebar() {
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

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
