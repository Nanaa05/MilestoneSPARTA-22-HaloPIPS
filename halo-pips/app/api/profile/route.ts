import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// handle Get User Profile
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const userType = searchParams.get('userType');

    if (!userId || !userType){
        return NextResponse.json({ error: 'Missing userId or userType' }, { status: 400 });
    }
    
    let userProfile;
    if (userType === 'HMIF') {
        const user = await db.userHMIF.findUnique({ 
            where: { id: userId },
            include: { accounts: true }
            });
    } else if (userType === 'TPB') {
        const user = await db.userTPB.findUnique({
            where: { id: userId },
            include: { accounts: true }
        });
    }

    if (userProfile) {
        return NextResponse.json(userProfile, { status: 200 });
    } else {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
}

// handle Update User Profile
export async function PUT(req: NextRequest) {
    const { userId, userType, updateData } = await req.json()
    
    if (!userId || !userType){
        return NextResponse.json({ error: 'Missing userId or userType' }, { status: 400 });
    }

    let updatedUser;
    if (userType === 'HMIF') {
        const user = await db.userHMIF.update({
            where: { id: userId },
            data: updateData 
        });
    } else if (userType === 'TPB') {
        const user = await db.userTPB.update({
            where: { id: userId },
            data: updateData 
        });
    }

    if (updatedUser) {
        return NextResponse.json(updatedUser, { status: 200 });
    } else {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
}
