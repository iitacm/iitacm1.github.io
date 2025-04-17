import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(process.env.ACM_IIT_POSTGRES_DATABASE_URL!);
    const data = await sql`SELECT
      b.id,
      b.name,
      b.position,
      b.more_info,
      b.picture,
      b.year,
      b.major,
      b.minor,
      b.category,
      COALESCE(
        (
          SELECT jsonb_object_agg(ms.type, ms.url)
          FROM member_socials ms
          WHERE ms.member_id = b.id
        ),
        '{}'::jsonb
      ) AS socials
    FROM board_members b
    ORDER BY b.name;`;

    // Return the data as JSON
    return NextResponse.json(data);

  } catch (error) {
    console.error("Error fetching board members:", error)
    return NextResponse.json({ error: "Failed to fetch board members" }, { status: 500 })
  }
}

