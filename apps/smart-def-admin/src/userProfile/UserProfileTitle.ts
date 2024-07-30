import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "id";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.id?.toString() || String(record.id);
};
