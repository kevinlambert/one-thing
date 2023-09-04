import { DataStore } from "@aws-amplify/datastore";
import { Account } from "../../models";
import logger from "../../logger";

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
      logger.debug("No account exists. Creating one.");

      existingAccount = await DataStore.save(
        new Account({
          firstName: "",
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

type updateProps = {
  id: string;
  firstName?: string;
  lastName?: string;
  isTourDone?: boolean;
  termsAndConditionsAccepted?: string;
};

const updateUserAccount = async ({
  id,
  firstName,
  lastName,
  isTourDone,
  termsAndConditionsAccepted,
}: updateProps) => {
  const original = await DataStore.query(Account, id);

  if (original) {
    return await DataStore.save(
      Account.copyOf(original, (updated) => {
        if (firstName) updated.firstName = firstName;
        if (lastName) updated.lastName = lastName;
        if (isTourDone) updated.isTourDone = isTourDone;
        if (termsAndConditionsAccepted)
          updated.termsAndConditionsAccepted = termsAndConditionsAccepted;
      })
    );
  }
};

export default {
  getUserAccount,
  createUserAccount,
  updateUserAccount,
};
