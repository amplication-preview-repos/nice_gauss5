import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvestmentWhereInput = {
  amount?: FloatNullableFilter;
  analyticsItems?: AnalyticsListRelationFilter;
  id?: StringFilter;
  investmentDate?: DateTimeNullableFilter;
  pool?: PoolWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
