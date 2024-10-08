import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export async function GET(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user){
            return NextResponse.json({ error: "Unauthorized" }, {status: 401});
        }

        const { searchParams } = new URL(req.url);
        const searchName = searchParams.get('name')?.toLowerCase() || '';
        const angkatanString = searchParams.get('angkatan');
        const angkatanInt = angkatanString ? parseInt(angkatanString, 10):null;
        // akses hanya dapat melihat dan mengechat anggota hmif (kating jurusan)
        const members = await db.userHMIF.findMany({
            where: {
                AND: [
                    {
                        name: {
                            contains: searchName,
                            mode: 'insensitive',
                        },
                    },
                    {
                        angkatan: angkatanInt || undefined,
                    }
                ]
            },
            select: {
                id: true,
                name: true,
                angkatan: true,
            },
            orderBy: {
                name: 'asc',
            }
        });

        return NextResponse.json(members, { status: 200 });
    } catch (error) {
        console.error("Error fetching HMIF members list: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}