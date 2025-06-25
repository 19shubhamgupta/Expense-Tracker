import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Side from "./Components/Sidebar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Side />
      <div className="flex-1 md:ml-[200px] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
