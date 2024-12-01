import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("spotifyAccessToken");
    const hasCookie = cookie ? true : false;
    return NextResponse.json({ status: 200, hasCookie });
  } catch (err) {
    return NextResponse.json({ status: 500, err });
  }
}
