import { AnalyticsUpdateManyWithoutInvestmentsInput } from "./AnalyticsUpdateManyWithoutInvestmentsInput";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvestmentUpdateInput = {
  amount?: number | null;
  analyticsItems?: AnalyticsUpdateManyWithoutInvestmentsInput;
  investmentDate?: Date | null;
  pool?: PoolWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
