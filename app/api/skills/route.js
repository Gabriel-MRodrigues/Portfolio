import { NextResponse } from 'next/server';
import { getDb } from '@/db/dbConnect';

export async function GET() {
    try {
        const db = await getDb();
        const skills = await db
            .collection("skills")
            .find({})
            .toArray();

        return NextResponse.json(skills, { status: 200 })
    } catch (err) {
        console.error("GET /api/skills error: ", err.message);
        return NextResponse.json(
            { error: "Failed to fetch skills"},
            { status: 500 }
        )
    }
}