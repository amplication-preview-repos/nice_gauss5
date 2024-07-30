import { SortOrder } from "../../util/SortOrder";

export type InvestmentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  investmentDate?: SortOrder;
  poolId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
