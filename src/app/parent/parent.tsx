"use client";

import { useState } from "react";
import Child from "../child/child";

export default function Parent() {
  const [message, setMessage] = useState("Hello from the parent!");

  return (
    <main
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "32px 16px",
      }}
    >
      <header style={{ marginBottom: "20px" }}>
        <p>React component communication</p>
        <h1>Parent to child with props</h1>
        <p>Change the message in the parent and see the child update.</p>
      </header>
      <label htmlFor="parent-message">Message in parent</label>
      <input
        id="parent-message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        style={{
          display: "block",
          width: "100%",
          margin: "8px 0 20px",
          padding: "8px",
          font: "inherit",
        }}
      />
      <Child message={message} />
    </main>
  );
}