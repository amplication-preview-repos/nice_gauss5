import { AnalyticsListRelationFilter } from "../analytics/AnalyticsListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvestmentListRelationFilter } from "../investment/InvestmentListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type UserWhereInput = {
  analyticsItems?: AnalyticsListRelationFilter;
  balance?: FloatNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  investments?: InvestmentListRelationFilter;
  lastName?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  userProfiles?: UserProfileListRelationFilter;
  username?: StringFilter;
};
