import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  settings?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
