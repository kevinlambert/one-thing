// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Periods, Thing } = initSchema(schema);

export {
  Periods,
  Thing
};