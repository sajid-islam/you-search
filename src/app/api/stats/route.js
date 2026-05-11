import dbConnect from "@/lib/mongoose";
import { GlobalStats } from "@/models/Analytics";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    let stats = await GlobalStats.findOne({ id: "global_stats" });
    if (!stats) {
      stats = await GlobalStats.create({ id: "global_stats" });
    }
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const { type } = await req.json();
    
    let update = {};
    if (type === "visitor") update = { $inc: { visitors: 1 } };
    if (type === "search") update = { $inc: { searches: 1 } };

    const stats = await GlobalStats.findOneAndUpdate(
      { id: "global_stats" },
      update,
      { upsert: true, new: true }
    );
    
    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
