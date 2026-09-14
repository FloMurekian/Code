export default function Message(props) {

    return (
    <div className={`message ${props.sender}-message`}>
      <div className="message-content">{props.content}</div>
    </div>
  );
}