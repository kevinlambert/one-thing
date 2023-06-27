import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import PageThing from "./components/page/Thing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageThing />}>
          {/* <Route index element={<PageThing />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <MyRoutes />;
}

export default App;
