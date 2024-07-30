import { SortOrder } from "../../util/SortOrder";

export type PoolOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  totalLiquidity?: SortOrder;
  updatedAt?: SortOrder;
};
