import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Chocolate from "./Chocolate";
import Cookies from "./Cookies";
import IceCream from "./IceCream";

import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/icecream" element={<IceCream />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
