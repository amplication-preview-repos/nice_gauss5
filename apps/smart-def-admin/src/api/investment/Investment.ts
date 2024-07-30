import { Analytics } from "../analytics/Analytics";
import { Pool } from "../pool/Pool";
import { User } from "../user/User";

export type Investment = {
  amount: number | null;
  analyticsItems?: Array<Analytics>;
  createdAt: Date;
  id: string;
  investmentDate: Date | null;
  pool?: Pool | null;
  updatedAt: Date;
  user?: User | null;
};
