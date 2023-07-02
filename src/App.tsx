import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import PageHome from "./components/page/Home";
import PageThing from "./components/page/Thing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/thing/:period" element={<PageThing />}></Route>
        <Route
          path="/thing/:period/edit"
          element={<PageThing isEdit={true} />}
        />
        <Route path="/" element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return <MyRoutes />;
}

export default App;
