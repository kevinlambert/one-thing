import React from "react";
import "./App.scss";

import PageHome from "./components/page/Home";
import PageThing from "./components/page/Thing";
import DefaultLayout from "./components/layouts/Default";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 1.5,
};

type Props = {
  children: React.ReactNode;
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <DefaultLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </DefaultLayout>
  );
};

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/thing/:period" element={<PageThing />}></Route>
        </Route>
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
