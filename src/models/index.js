// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, SaleOrder, User } = initSchema(schema);

export {
  Product,
  SaleOrder,
  User
};