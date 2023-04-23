import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/home";
import NotFoundpage from "./pages/Notfound/notFound";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>
    </div>
  );
}
export default App;
