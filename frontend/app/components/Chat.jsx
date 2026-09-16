
export function ChatInput() {
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

function Message(props) {
    return (
    <div className={`message ${props.type}-message`}>
      <div className="message-content">{props.children}</div>
    </div>
  );
};


export function ChatMessages(props) {

  return (
    <div className="chat-messages">
      {props.messages.map((msg) => (
        <Message key={msg.id} type={msg.type}>
          {msg.content}
        </Message>
      ))}
    </div>
  )
}

