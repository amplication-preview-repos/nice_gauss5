import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  settings?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
