import ChatThreadItem from "./ChatThreadItem.jsx";

export default function ChatThreadsList(props) {

  return (
    <nav className="chat-threads-list" aria-label="Chat threads">
      <ul>
        {props.threads.map((thread) => (
          <li key={thread.id} className="chat-thread-item">
            <ChatThreadItem href={thread.href} title={thread.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
}