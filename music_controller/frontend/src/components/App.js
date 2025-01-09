import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";

// Define the App component to render HomePage
const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

const appDiv = document.getElementById("app");

// Use createRoot to initialize the React root
if (!appDiv._reactRootContainer) {
  const root = createRoot(appDiv);
  root.render(<App />);
} else {
  console.warn("Root container already initialized.");
}