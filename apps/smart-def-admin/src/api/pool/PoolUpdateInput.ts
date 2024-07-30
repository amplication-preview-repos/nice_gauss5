import { InvestmentUpdateManyWithoutPoolsInput } from "./InvestmentUpdateManyWithoutPoolsInput";

export type PoolUpdateInput = {
  description?: string | null;
  investments?: InvestmentUpdateManyWithoutPoolsInput;
  name?: string | null;
  totalLiquidity?: number | null;
};
