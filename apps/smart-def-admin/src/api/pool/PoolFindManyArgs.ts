import { PoolWhereInput } from "./PoolWhereInput";
import { PoolOrderByInput } from "./PoolOrderByInput";

export type PoolFindManyArgs = {
  where?: PoolWhereInput;
  orderBy?: Array<PoolOrderByInput>;
  skip?: number;
  take?: number;
};
