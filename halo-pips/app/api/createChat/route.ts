import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@/auth';
import bcrypt from 'bcrypt';
import { connect } from 'http2';

export async function POST(req: NextRequest) {
    try {
        const session = await auth();
        const { friendUsername } = await req.json();

        const username = session?.user?.name;
        if (!username) {
            return NextResponse.json({ error: "Not Authenticated" }, {status: 401});
        }

        let sortList = [friendUsername, username];

        function sortThings(a: string | null | undefined, b: string | null | undefined) {
            if (!a || !b) return 0;
            a = a.toLowerCase();
            b = b.toLowerCase();

            return a > b ? -1 : b > a ? 1 : 0;
        }

        // Balik urutan list
        sortList = sortList.sort(sortThings).reverse();

        // Buat chat ID berdasarkan urutan
        const chatID = sortList[0] + sortList[1];

        // Hash ID chat menggunakan bcrypt
        const hashedChatID = await bcrypt.hash(chatID, 10);

        // Simpan hashed chat id ke database (kalo perlu aja)
        await db.chat.create ({
            data: {
                id: hashedChatID,
                participants: { connect: [{ username }, { username: friendUsername }] }
            }
        });

        return NextResponse.json({ chatID: hashedChatID }, { status: 200 });

    } catch (error) {
        console.error("Error creating chat: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
    
}