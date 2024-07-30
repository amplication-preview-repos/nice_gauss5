import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
