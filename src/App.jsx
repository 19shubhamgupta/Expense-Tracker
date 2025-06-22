import React from "react";
import { Outlet } from "react-router-dom";
import Side from "./Components/Sidebar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar stays fixed */}
      <Side />

      {/* Main content scrolls */}
      <div className="flex-1 ml-50 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;