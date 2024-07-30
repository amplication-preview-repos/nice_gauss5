import { InvestmentWhereUniqueInput } from "../investment/InvestmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AnalyticsUpdateInput = {
  analysisDate?: Date | null;
  investment?: InvestmentWhereUniqueInput | null;
  profit?: number | null;
  user?: UserWhereUniqueInput | null;
};
