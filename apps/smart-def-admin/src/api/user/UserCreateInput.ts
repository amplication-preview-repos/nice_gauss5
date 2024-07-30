import { AnalyticsCreateNestedManyWithoutUsersInput } from "./AnalyticsCreateNestedManyWithoutUsersInput";
import { InvestmentCreateNestedManyWithoutUsersInput } from "./InvestmentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";
import { UserProfileCreateNestedManyWithoutUsersInput } from "./UserProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  analyticsItems?: AnalyticsCreateNestedManyWithoutUsersInput;
  balance?: number | null;
  email?: string | null;
  firstName?: string | null;
  investments?: InvestmentCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  userProfiles?: UserProfileCreateNestedManyWithoutUsersInput;
  username: string;
};
