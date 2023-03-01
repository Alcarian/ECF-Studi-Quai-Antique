import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardMenu from "./pages/CardMenu";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CardMenu" element={<CardMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
