import { Pool as TPool } from "../api/pool/Pool";

export const POOL_TITLE_FIELD = "name";

export const PoolTitle = (record: TPool): string => {
  return record.name?.toString() || String(record.id);
};
