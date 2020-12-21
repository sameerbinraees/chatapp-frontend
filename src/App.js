import io from "socket.io-client";
import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("localhost:8080");
  }, []);

  const dummy = () => {
    console.log("hi");
    socket.emit("connection");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={dummy}>Click</p>
      </header>
    </div>
  );
}

export default App;
