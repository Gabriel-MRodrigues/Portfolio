import { NextResponse } from 'next/server';
import { getDb } from '@/db/dbConnect';

export async function GET() {
    try {
        const db = await getDb();
        const projects = await db
            .collection("projects")
            .find({})
            .toArray();

        return NextResponse.json(projects, { status: 200 })
    } catch (err) {
        console.error("GET /api/projects error: ", err.message);
        return NextResponse.json(
            { error: "Failed to fetch projects"},
            { status: 500 }
        )
    }
}