import { NextResponse } from "next/server"
import boardMembers from "@/data/board_members.json";

export async function GET() {
  return NextResponse.json(boardMembers);
}

