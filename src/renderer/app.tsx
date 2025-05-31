import { createRoot } from "react-dom/client";

import React from "react";

function App() {
  return (
    <div>
      <h1>Hello from React!</h1>
      <button className="btn">Click me</button>
    </div>
  );
}

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
);
