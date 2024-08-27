import { auth } from "@/auth";
import { getUserByID } from "@/data/user";

export const getFriendList = async () => {
  const session = await auth();
  if (!session) return [];
  const role = session.user.role;
  const id = session.user.id;
  const user = await getUserByID(id, role);
  const friendJSON = user?.friends;
  const friendList = friendJSON?.map((x) => {
    if (x != null) {
      return Object.keys(x)[0];
    } else return [];
  });
  return friendList;
};
