import { DataStore } from "@aws-amplify/datastore";
import { Account } from "../models";

const getUserAccount = async (userID: string) => {
  const result = await DataStore.query(Account, (item) => {
    return item.userID.eq(userID);
  });

  return result.length ? result[0] : null;
};

const createUserAccount = async (userID: string) => {
  if (userID) {
    let existingAccount = await getUserAccount(userID);

    if (!existingAccount) {
      existingAccount = await DataStore.save(
        new Account({
          firstName: "Kevin",
          lastName: "",
          plan: "",
          userID,
          // AccountSphere: [],
          // AccountThingPeriod: [],
          // AccountGroupMembers: [],
        })
      );
    }

    return existingAccount;
  }
};

export default {
  getUserAccount,
  createUserAccount,
};
