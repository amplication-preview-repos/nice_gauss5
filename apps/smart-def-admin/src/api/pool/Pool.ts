import { Investment } from "../investment/Investment";

export type Pool = {
  createdAt: Date;
  description: string | null;
  id: string;
  investments?: Array<Investment>;
  name: string | null;
  totalLiquidity: number | null;
  updatedAt: Date;
};
