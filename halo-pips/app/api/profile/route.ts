import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { error } from "console";

// handle Get User Profile
export async function GET(req: NextRequest) {
    try {
        const session = await auth();
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

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
        const { userId, userType, ...updateData } = await req.json();
        const username = session?.user?.name;

        if (!username) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }

        let userProfile;
        if (session?.user?.role === 'HMIF') {
            userProfile = await db.userHMIF.findUnique({ where: {id: userId} });
        } else if (session?.user?.role === "TPB") {
            userProfile = await db.userTPB.findUnique({ where: {id: userId} });
        }

        if (!userProfile) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        } 

        if (userProfile.username !== username) {
            return NextResponse.json({ error: 'You can only edit your own profile' }, { status: 403 });
        }

        let updatedUser;
        if (session?.user?.role === 'HMIF') {
            updatedUser = await db.userHMIF.findUnique({ where: {id: userId}, data: updateData });
        } else if (session?.user?.role === 'TPB') {
            updatedUser = await db.userTPB.findUnique({ where: {id: userId}, data: updateData });
        }

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error("Error updating profile: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}