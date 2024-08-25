import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import bcrypt from "bcrypt";

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

    // Hash ID chat menggunakan bcrypt
    const hashedChatID = await bcrypt.hash(chatID, 10);

    // Simpan hashed chat id ke database (kalo perlu aja)
    await db.chatRoom.create({
      data: {
        chatID: chatID,
        members: [sortList[0], sortList[1]],
      },
    });

    const FriendshipExists1 = await db.friendship.findFirst({
      where: {
        user1: username,
        user2: friendUsername,
      },
    });

    const FriendshipExists2 = await db.friendship.findFirst({
      where: {
        user1: friendUsername,
        user2: username,
      },
    });

    let friendshipCreated = false;
    // cek apakah sudah pernah berteman
    if (!FriendshipExists1 || !FriendshipExists2) {
      await db.friendship.createMany({
        data: [
          {
            user1: username, user2: friendUsername,
          },
          {
            user1: friendUsername, user2: username,
          }
        ],
      })
    };


    // Kirim respons JSON
    return NextResponse.json(
      {
        chatID: chatID,
        hashedChatID: hashedChatID,
        friendshipCreated: friendshipCreated,
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
