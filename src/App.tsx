import React, { useContext, useEffect } from "react";
import "./App.scss";
import { withAuthenticator } from "@aws-amplify/ui-react";

import PageHome from "./components/page/Home";
import PageThing from "./components/page/Thing";
import DefaultLayout from "./components/layouts/Default";
import { AuthEventHook } from "./util/launchSetup";

import Loading from "./components/ui/loading/Loading";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 1,
};

type Props = {
  children: React.ReactNode;
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <DefaultLayout>
      {/* <AnimatePresence> */}
      <motion.div
        className="motion-wrapper"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
      {/* </AnimatePresence> */}
    </DefaultLayout>
  );
};

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route
            path="/thing/:periodInterval/:periodIncrement"
            element={<PageThing />}
          ></Route>
        </Route>
        <Route
          path="/thing/:periodInterval/:periodIncrement/edit"
          element={<PageThing isEdit={true} />}
        />
        <Route path="/" element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

AuthEventHook();

const App = () => (
  <>
    <Loading />
    <MyRoutes />
  </>
);

export default withAuthenticator(App);
