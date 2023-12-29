import React from 'react';
// Import your CSS file for styling

// Sample messages data (you can replace this with your actual data)
const messages = [
  { text: 'Hello!', sentByUser: false },
  { text: 'Hi there!', sentByUser: true },
  { text: 'How are you?', sentByUser: true },
  { text: 'I\'m doing great!', sentByUser: false },
  { text: 'That\'s good to hear!', sentByUser: true },
];

function Hello() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="max-w-lg w-full">
      {/* Dynamic rendering of messages */}
      <h2 className="text-lg font-semibold mb-4">Chat with User</h2>
      <div className="flex flex-col">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.sentByUser
                ? 'self-end bg-blue-200 text-white rounded-md p-2 mb-2 max-w-md'
                : 'self-start bg-gray-200 text-gray-800 rounded-md p-2 mb-2 max-w-md'
            }
          >
            <span className="font-bold">
              {message.sentByUser ? 'You:' : 'User:'}
            </span>{' '}
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-1 rounded-l-lg p-2 border border-gray-300"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Send</button>
      </div>
    </div>
  </div>
  );
}

export default Hello;
