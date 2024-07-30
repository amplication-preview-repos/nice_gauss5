import { Investment } from "../investment/Investment";
import { User } from "../user/User";

export type Analytics = {
  analysisDate: Date | null;
  createdAt: Date;
  id: string;
  investment?: Investment | null;
  profit: number | null;
  updatedAt: Date;
  user?: User | null;
};
