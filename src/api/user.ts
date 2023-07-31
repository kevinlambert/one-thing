import { DataStore } from "@aws-amplify/datastore";
import { Account } from "../models";

export const getUserAccount = async (userID: string) => {
  return await DataStore.query(Account, (item) => item.userID.eq(userID));
};

export const createUserAccount = async (userID: string) => {
  if (userID) {
    const existingAccount = await getUserAccount(userID);

    return existingAccount.length === 0
      ? await DataStore.save(
          new Account({
            firstName: "",
            lastName: "",
            plan: "",
            userID,
            AccountSphere: [],
            AccountThingPeriod: [],
            AccountGroupMembers: [],
          })
        )
      : null;
  }
};
