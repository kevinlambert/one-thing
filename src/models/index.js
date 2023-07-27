// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { GroupMember, Group, Account, Sphere, ThingPeriod } = initSchema(schema);

export {
  GroupMember,
  Group,
  Account,
  Sphere,
  ThingPeriod
};