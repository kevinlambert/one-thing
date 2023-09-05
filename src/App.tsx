import React from "react";
import "./App.scss";
import PwaInstall from "./util/PwaInstall";

import { withAuthenticator } from "@aws-amplify/ui-react";
import AppRoutes from "./AppRoutes";
import { authEventHook, DataSync } from "./util/launchSetup";
import { addPersitStoreHook } from "./util/persitsStore";
import Loading from "./components/ui/loading/Loading";

authEventHook();
addPersitStoreHook();

const App = () => (
  <>
    <PwaInstall></PwaInstall>
    <Loading />
    <AppRoutes />
  </>
);

export default withAuthenticator(App);
