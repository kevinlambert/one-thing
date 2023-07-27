import { DataStore } from "@aws-amplify/datastore";
import { Account } from "../models";

export const getUserAccount = async () => {
  return await DataStore.query(Account);
};
