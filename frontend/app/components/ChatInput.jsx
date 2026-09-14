  export default function ChatInput() {
    return (
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <textarea
            className="chat-input"
            placeholder="Type your message here..."
            rows="1"
          />
          <button className="send-button" type="button">
            Send
          </button>
        </div>
      </div>
    );
  }