import { DataStore } from "@aws-amplify/datastore";
import { Account } from "../models";
import logger from "../logger";

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
  firstName: string;
  lastName: string;
};

const updateUserAccount = async ({ id, firstName, lastName }: updateProps) => {
  const original = await DataStore.query(Account, id);
  console.log(id);
  if (original) {
    return await DataStore.save(
      Account.copyOf(original, (updated) => {
        updated.firstName = firstName;
        updated.lastName = lastName;
      })
    );
  }

  // const original = await DataStore.query(Post, id);

  // const updatedPost = await DataStore.save(
  //   Post.copyOf(original, (updated) => {
  //     updated.title = newTitle;
  //   })
  // );
};

export default {
  getUserAccount,
  createUserAccount,
  updateUserAccount,
};
