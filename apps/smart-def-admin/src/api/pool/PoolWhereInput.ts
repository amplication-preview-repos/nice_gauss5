import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvestmentListRelationFilter } from "../investment/InvestmentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PoolWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  investments?: InvestmentListRelationFilter;
  name?: StringNullableFilter;
  totalLiquidity?: FloatNullableFilter;
};
