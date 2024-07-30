import { InvestmentCreateNestedManyWithoutPoolsInput } from "./InvestmentCreateNestedManyWithoutPoolsInput";

export type PoolCreateInput = {
  description?: string | null;
  investments?: InvestmentCreateNestedManyWithoutPoolsInput;
  name?: string | null;
  totalLiquidity?: number | null;
};
