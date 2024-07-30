import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
