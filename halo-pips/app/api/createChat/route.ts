import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import bcrypt from "bcrypt";
import { getUserTpbByUsername, getUserHMIFByUsername } from "@/data/user";
import { error } from "console";

function sortThings(
  a: string | null | undefined,
  b: string | null | undefined
) {
  if (!a || !b) return 0;
  a = a.toLowerCase();
  b = b.toLowerCase();

  return a > b ? -1 : b > a ? 1 : 0;
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const { friendUsername } = await req.json();

    const username = session?.user?.name;
    if (!username) {
      return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });
    }

    let sortList = [friendUsername, username];

    // Balik urutan list
    sortList = sortList.sort(sortThings).reverse();

    // Buat chat ID berdasarkan urutan
    const chatID = sortList[0] + sortList[1];

    //validasi apakah chat sudah dibuat
    const chatroom = await db.chatRoom.findUnique({
      where: { chatID: chatID },
    });
    if (chatroom) {
      return NextResponse.json({
        error: "chat already created",
      });
    }

    // Simpan hashed chat id ke database (kalo perlu aja)
    await db.chatRoom.create({
      data: {
        chatID: chatID,
        members: [sortList[0], sortList[1]],
      },
    });
    let user;
    let friendUser;
    let friendshipCreated;
    const role = session.user.role;
    if (role === "TPB") {
      //case TPB add friend ke HMIF
      user = await getUserTpbByUsername(username);
      let userFriend = user?.friends;
      userFriend?.push({ [friendUsername]: "HMIF" });
      db.userTPB.update({
        where: {
          username: user?.username,
        },
        data: {
          friends: userFriend,
        },
      });
      friendUser = await getUserHMIFByUsername(friendUsername);
      let friendUserFriend = user?.friends;
      friendUserFriend?.push({ [username]: "TPB" });
      db.userHMIF.update({
        where: {
          username: user?.username,
        },
        data: {
          friends: userFriend,
        },
      });
    } else {
      //case HMIF add friend ke HMIF
      user = await getUserHMIFByUsername(username);
      let userFriend = user?.friends;
      userFriend?.push({ [friendUsername]: "HMIF" });
      db.userHMIF.update({
        where: {
          username: user?.username,
        },
        data: {
          friends: userFriend,
        },
      });
      friendUser = await getUserHMIFByUsername(friendUsername);
      let friendUserFriend = user?.friends;
      friendUserFriend?.push({ [username]: "HMIF" });
      db.userHMIF.update({
        where: {
          username: user?.username,
        },
        data: {
          friends: userFriend,
        },
      });
    }

    // Kirim respons JSON
    return NextResponse.json(
      {
        chatID: chatID,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating chat and adding friend: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
