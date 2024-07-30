import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvestmentWhereUniqueInput } from "../investment/InvestmentWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnalyticsWhereInput = {
  analysisDate?: DateTimeNullableFilter;
  id?: StringFilter;
  investment?: InvestmentWhereUniqueInput;
  profit?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
