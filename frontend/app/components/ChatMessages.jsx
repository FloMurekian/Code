import Message from "./Message.jsx";

export default function ChatMessages() {
  return (
    <div className="chat-messages">
      {/* Chat message */}
      <Message sender="user"
      content="Hello! Can you help me understand React Router v7?" />

        <Message sender="bot" 
        content="Of course! React Router v7 is the latest version that introduces several improvements including better data loading, enhanced nested routing, and improved TypeScript support. What specific aspect would you like to learn about?" />

        <Message sender="user" 
        content="How do nested routes work in v7?" />
        <Message sender="bot" 
        content="Nested routes in React Router v7 allow you to create hierarchical UI structures. You define parent routes that contain child routes, and use the <Outlet /> component to render child components. The parent route acts as a layout component that wraps its children." />

        <Message sender="user" 
        content="What's the difference between route() and layout() helpers?" />
        
        <Message sender="bot" 
        content="Great question! The `route()` helper creates routes that add URL segments, while `layout()` creates routes that only provide UI structure without affecting the URL. Layout routes are perfect for shared components like sidebars or headers that should appear across multiple pages." />

        <Message sender="user" 
        content="Can you show me an example of a routes.js configuration?" />

        <Message sender="bot" 
        content="Sure! Here's a basic example: You can use route(), index(), and layout() helpers to create nested route structures. The layout() function creates wrapper components, while route() adds URL segments. This approach gives you clean, hierarchical routing that's easy to maintain." />

        <Message sender="user" 
        content="How do I handle data loading in React Router v7?" />
        <Message sender="bot" 
        content="React Router v7 provides excellent data loading capabilities through loader functions. You can define a `loader` function in your route component that runs before the component renders, ensuring your data is available immediately. You can access the loaded data using the `useLoaderData()` hook within your component." />
</div>
  )
}