import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("spotifyAccessToken");

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/me/player/recently-played`;
  const params = new URLSearchParams({
    limit: "50",
  });
  const url = `${baseUrl}?${params.toString()}`;
  console.log(url);
  if (accessToken) {
    console.log(accessToken);
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken?.value}`,
        },
      });
      if (!response.ok) {
        return NextResponse.json({ error: response.statusText });
      }
      const data = await response.json();
      return NextResponse.json(data);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e });
    }
  } else {
    return NextResponse.json("no AccessToken");
  }
}
