import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
