import React from "react";
import "./App.scss";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";

import PageHome from "./components/page/Home";
import PageThing from "./components/page/Thing";
import DefaultLayout from "./components/layouts/Default";

import { createUserAccount } from "./api/user";

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

const accountSetup = async (username: any) => {
  const result = await createUserAccount(username);
};

function App({ signOut, user }: WithAuthenticatorProps) {
  accountSetup(user ? user.username : null);

  return <MyRoutes />;
}

export default withAuthenticator(App);
