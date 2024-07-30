import { AnalyticsCreateNestedManyWithoutInvestmentsInput } from "./AnalyticsCreateNestedManyWithoutInvestmentsInput";
import { PoolWhereUniqueInput } from "../pool/PoolWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvestmentCreateInput = {
  amount?: number | null;
  analyticsItems?: AnalyticsCreateNestedManyWithoutInvestmentsInput;
  investmentDate?: Date | null;
  pool?: PoolWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
