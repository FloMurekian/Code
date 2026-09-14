import ChatThreadItem from "./ChatThreadItem.jsx";

export default function ChatThreadsList() {
  return (
<nav className="chat-threads-list" aria-label="Chat threads">
        <ul>
        <li className="chat-thread-item">
          <ChatThreadItem
            href="/chat/how-to-learn-programming"
            title="How to learn programming?"
          />
        </li>
        <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/best-pizza-toppings"
                title="What are the best pizza toppings?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/explain-quantum-physics"
                title="Can you explain quantum physics?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/morning-routine-ideas"
                title="Help me create a morning routine"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/weekend-activity-suggestions"
                title="What should I do this weekend?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/why-sky-blue"
                title="Why is the sky blue?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/weekend-activity-suggestions"
                title="What should I do this weekend?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/why-sky-blue"
                title="Why is the sky blue?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/learn-new-language"
                title="How do I learn a new language?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/meaning-of-life"
                title="What's the meaning of life?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/funny-joke-please"
                title="Tell me a funny joke"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/healthy-dinner-ideas"
                title="What's a healthy dinner idea?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/good-book-recommendations"
                title="Recommend me a good book"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/creative-writing-prompt"
                title="Give me a creative writing prompt"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/creative-writing-prompt"
                title="Give me a creative writing prompt"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/fix-slow-computer"
                title="My computer is slow, help?"
              />
            </li>
            <li className="chat-thread-item">
              <ChatThreadItem
                href="/chat/interesting-history-fact"
                title="Tell me an interesting history fact"
              />
            </li>
          </ul>
        </nav>
  );
}