import { PoolWhereUniqueInput } from "./PoolWhereUniqueInput";
import { PoolUpdateInput } from "./PoolUpdateInput";

export type UpdatePoolArgs = {
  where: PoolWhereUniqueInput;
  data: PoolUpdateInput;
};
