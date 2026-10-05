"use client";

import { useState } from "react";
import Child from "../child/child";

export default function Parent() {
  const [message, setMessage] = useState("Hello from the parent!");

  return (
    <main>
        <div>
          <p>React component communication</p>
          <h1>Parent to child with props</h1>
          <p>Change the message in the parent and see the child update.</p>
        </div>
        <label htmlFor="parent-message">
          Message in parent
        </label>
        <input
          id="parent-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <Child message={message} />
    </main>
  );
}