import React from 'react'
import { Route, Routes } from "react-router-dom";
import Surah from "../pages/Surah";
import Home from "../pages/Home";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/surah/:order" element={<Surah />} />
    </Routes>
  )
}

export default AppRoute