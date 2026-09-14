import ChatInput from "../components/ChatInput.jsx"
import ChatMessages from "../components/ChatMessages.jsx"

export default function Home() {
  return (
    <main className="chat-container">
      <ChatMessages />
      <ChatInput />
    </main>
  );
}
