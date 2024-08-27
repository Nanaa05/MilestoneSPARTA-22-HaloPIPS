import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";

// handle Get User Profile
export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('id');

        // jika userId tidak ada gunakan id dari session
        const userProfileId = userId || session?.user?.id;
        if (!userProfileId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 })
        }
        
        let userProfile;
        if (session?.user?.role === "HMIF") {
            userProfile = await db.userHMIF.findUnique({ where: {id: userProfileId} });
        } else if (session?.user?.role === "TPB") {
            userProfile = await db.userTPB.findUnique({ where: {id: userProfileId} });
        }

        if (userProfile) {
            return NextResponse.json(userProfile, { status: 200 });
        } else {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching profile: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, {status: 500});
    }
}

// handle Update User Profile
export async function PUT(req: NextRequest) {
    try {
        const session = await auth();
        const { userId, username, instagram, linkedin } = await req.json();

        if (!session || session.user.id !== userId) {
            return NextResponse.json({ error: "Not authenticated or unauthorized" }, { status: 401 });
        }

        let updatedUser;
        if (session.user.role === 'HMIF') {
            updatedUser = await db.userHMIF.update({
                where: { id: userId },
                data: { username, instagram, linkedin }
            });
        } else if (session.user.role === 'TPB') {
            updatedUser = await db.userTPB.update({
                where: { id: userId },
                data: { username, instagram, linkedin }
            });
        } else {
            return NextResponse.json({ error: "Role not supported" }, { status: 403 });
        }

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error("Error updating profile: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}