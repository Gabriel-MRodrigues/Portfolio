import { NextResponse } from 'next/server';
import { getDb } from '@/db/dbConnect';

export async function GET() {
    try {
        const db = await getDb();
        const info = await db
            .collection("info")
            .find({})
            .toArray();

        return NextResponse.json(info, { status: 200 })
    } catch (err) {
        console.error("GET /api/info error: ", err.message);
        return NextResponse.json(
            { error: "Failed to fetch info"},
            { status: 500 }
        )
    }
}