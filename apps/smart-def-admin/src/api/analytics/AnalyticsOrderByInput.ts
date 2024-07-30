import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  analysisDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  investmentId?: SortOrder;
  profit?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
