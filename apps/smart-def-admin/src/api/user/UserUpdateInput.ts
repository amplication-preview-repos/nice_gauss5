import { AnalyticsUpdateManyWithoutUsersInput } from "./AnalyticsUpdateManyWithoutUsersInput";
import { InvestmentUpdateManyWithoutUsersInput } from "./InvestmentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { UserProfileUpdateManyWithoutUsersInput } from "./UserProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  analyticsItems?: AnalyticsUpdateManyWithoutUsersInput;
  balance?: number | null;
  email?: string | null;
  firstName?: string | null;
  investments?: InvestmentUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  userProfiles?: UserProfileUpdateManyWithoutUsersInput;
  username?: string;
};
