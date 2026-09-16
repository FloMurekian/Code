import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar.jsx";


  const threads = [
    { id: 1, title: "How to learn programming?", href: "/chat/how-to-learn-programming" },
    { id: 2, title: "What are the best pizza toppings?", href: "/chat/best-pizza-toppings" },
    { id: 3, title: "Can you explain quantum physics?", href: "/chat/explain-quantum-physics" },
    { id: 4, title: "Help me create a morning routine", href: "/chat/morning-routine-ideas" },
    { id: 5, title: "What should I do this weekend?", href: "/chat/weekend-activity-suggestions" },
    { id: 6, title: "Why is the sky blue?", href: "/chat/why-sky-blue" },
    { id: 7, title: "How do I learn a new language?", href: "/chat/learn-new-language" },
    { id: 8, title: "What's the meaning of life?", href: "/chat/meaning-of-life" },
    { id: 9, title: "Tell me a funny joke", href: "/chat/funny-joke-please" },
    { id: 10, title: "What's a healthy dinner idea?", href: "/chat/healthy-dinner-ideas" },
    { id: 11, title: "Recommend me a good book", href: "/chat/good-book-recommendations" },
    { id: 12, title: "Give me a creative writing prompt", href: "/chat/creative-writing-prompt" },
    { id: 13, title: "My computer is slow, help?", href: "/chat/fix-slow-computer" },
    { id: 14, title: "Tell me an interesting history fact", href: "/chat/interesting-history-fact" }
  ];

export default function Layout() {
  return (
    <div className="app-layout">
      <Sidebar threads={threads} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
