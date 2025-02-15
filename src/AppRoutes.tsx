import React from "react";

import PageHome from "./components/page/home";
import ViewThingPage from "./components/page/thing/ViewThing";
import EditThingPage from "./components/page/thing/EditThing";
import Welcome from "./components/page/onboarding/Welcome";
import TourPage from "./components/page/onboarding/tour";
import MomentPage from "./components/templates/moment/Moment";
import PlansPage from "./components/page/account/PricingTable";
import ManageBillingPage from "./components/page/account/ManageBilling";
import TermsAndConditionsPage from "./components/page/legal/TermsAndConditions";
import DefaultLayout from "./components/layouts/Default";
import AppWrapper from "./AppWrapper";

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

type routePathHelperProps = { periodInterval: string; periodIncrement: number };
type routePathHelperTourProps = { step: number };

export const routePathHelper = {
  focusPeriodThing: () => {
    const periodInterval = "month";
    const periodIncrement = 3;

    return `/thing/${periodInterval}/${periodIncrement}`;
  },

  thing: ({ periodInterval, periodIncrement }: routePathHelperProps) => {
    return `/thing/${periodInterval}/${periodIncrement}`;
  },
  thingEdit: ({ periodInterval, periodIncrement }: routePathHelperProps) => {
    return `/thing/${periodInterval}/${periodIncrement}/edit`;
  },
  tour: ({ step }: routePathHelperTourProps) => {
    return `/onboarding/tour/${step}`;
  },
};

export const routePaths = {
  THING: {
    REFLECT: "/reflect/:periodInterval/:periodIncrement",
    MOMENT: "/moment/:periodInterval/:periodIncrement",
    VIEW: "/thing/:periodInterval/:periodIncrement",
    EDIT: "/thing/:periodInterval/:periodIncrement/edit",
  },
  HOME: "/",
  TERMS_AND_CONDITIONS: "/termsandconditions",
  PLANS: "/plans",
  MANAGEBILLING: "/managebilling",
  ONBOARDING: {
    WELCOME: "/onboarding/welcome",
    TOUR: "/onboarding/tour/:step",
  },
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route path={routePaths.HOME} element={<PageHome />}></Route>
          <Route path={routePaths.PLANS} element={<PlansPage />}></Route>
          <Route
            path={routePaths.MANAGEBILLING}
            element={<ManageBillingPage />}
          ></Route>
          <Route
            path={routePaths.TERMS_AND_CONDITIONS}
            element={<TermsAndConditionsPage />}
          ></Route>
          <Route element={<AnimationLayout />}>
            <Route
              path={routePaths.THING.VIEW}
              element={<ViewThingPage />}
            ></Route>
          </Route>
          <Route path={routePaths.THING.EDIT} element={<EditThingPage />} />
          <Route
            path={routePaths.ONBOARDING.WELCOME}
            element={<Welcome />}
          ></Route>
          <Route
            path={routePaths.THING.MOMENT}
            element={<MomentPage />}
          ></Route>
          <Route
            path={routePaths.ONBOARDING.TOUR}
            element={<TourPage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
