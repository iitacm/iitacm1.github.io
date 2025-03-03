import { promises as fs } from "fs"
import path from "path"
import { NextResponse } from "next/server"
import type { BoardMember } from "@/lib/interfaces"

export async function GET() {
  try {
    // Read the JSON file using the async version of fs
    const filePath = path.join(process.cwd(), "data", "board_members.json")
    const jsonData = await fs.readFile(filePath, "utf-8")

    // Parse the JSON data
    const boardMembers: BoardMember[] = JSON.parse(jsonData)

    // Return the data as JSON
    return NextResponse.json(boardMembers)
  } catch (error) {
    console.error("Error fetching board members:", error)
    return NextResponse.json({ error: "Failed to fetch board members" }, { status: 500 })
  }
}

