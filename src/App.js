import io from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const socket = useRef();

  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.current = io("localhost:8080");
    socket.current.on("message", (text) => {
      console.log(text);
      setMessages((prev) => [...prev, text]);
    });
  }, []);

  const onSend = () => {
    socket.current.emit("message", text);
    setText("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSend()}
        />
        {messages.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
