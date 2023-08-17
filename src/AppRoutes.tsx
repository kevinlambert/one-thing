import React from "react";

import PageHome from "./components/page/Home";
import PageThing from "./components/page/Thing";
import Welcome from "./components/page/onboarding/Welcome";
import MomentPage from "./components/page/onboarding/Moment";
import DefaultLayout from "./components/layouts/Default";
import CodeNavigate from "./util/CodeNavigate";

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
  ease: "easeInOut",
  duration: 0.4,
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

export const routePaths = {
  THING: {
    MOMENT: "/moment",
    VIEW: "/thing/:periodInterval/:periodIncrement",
    EDIT: "/thing/:periodInterval/:periodIncrement/edit",
  },
  HOME: "/",
  ONBOARDING: {
    WELCOME: "/onboarding/welcome",
  },
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CodeNavigate />}>
          <Route element={<AnimationLayout />}>
            <Route path={routePaths.THING.VIEW} element={<PageThing />}></Route>
          </Route>
          <Route
            path={routePaths.THING.EDIT}
            element={<PageThing isEdit={true} />}
          />
          <Route path={routePaths.HOME} element={<PageHome />}></Route>
          <Route
            path={routePaths.ONBOARDING.WELCOME}
            element={<Welcome />}
          ></Route>
          <Route
            path={routePaths.THING.MOMENT}
            element={<MomentPage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
