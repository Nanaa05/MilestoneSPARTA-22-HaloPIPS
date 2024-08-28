import { auth } from "@/auth";
import { getUserByIDFriend } from "@/data/user";

export const getFriendList = async () => {
  const session = await auth();
  if (!session) return [];
  const id = session.user.id;
  const userFriend = await getUserByIDFriend(id);
  const friendList = userFriend?.friendID;
  return friendList;
};
