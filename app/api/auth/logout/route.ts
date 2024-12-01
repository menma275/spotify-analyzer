import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("spotifyAccessToken");
    if (cookie?.value) {
      cookieStore.delete("spotifyAccessToken");
      return NextResponse.json({ status: 200 });
    }
    return NextResponse.json({ status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: 500, error: e });
  }
}
