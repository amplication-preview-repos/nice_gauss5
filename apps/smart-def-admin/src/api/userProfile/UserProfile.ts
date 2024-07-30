import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserProfile = {
  createdAt: Date;
  id: string;
  settings: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
