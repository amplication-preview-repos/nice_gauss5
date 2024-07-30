import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  settings?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
