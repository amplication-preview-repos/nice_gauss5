import { Analytics } from "../analytics/Analytics";
import { Investment } from "../investment/Investment";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  analyticsItems?: Array<Analytics>;
  balance: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  investments?: Array<Investment>;
  lastName: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  userProfiles?: Array<UserProfile>;
  username: string;
};
