import { DataStore } from "@aws-amplify/datastore";
import { Auth } from "aws-amplify";

async function signOut() {
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

export default () => {
  const signOutHandler = async () => {
    await DataStore.clear();
    await signOut();
  };

  return (
    <a style={{ cursor: "pointer" }} onClick={signOutHandler}>
      Sign out
    </a>
  );
};
