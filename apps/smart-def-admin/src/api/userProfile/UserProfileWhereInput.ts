import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  id?: StringFilter;
  settings?: JsonFilter;
  user?: UserWhereUniqueInput;
};
