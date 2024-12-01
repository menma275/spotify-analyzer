import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const time_range = searchParams.get("time_range");
  const limit = searchParams.get("limit");
  const items = searchParams.get("items");

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("spotifyAccessToken");
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/me/top/${items}`;
  const params = new URLSearchParams();
  params.append("time_range", time_range as string);
  params.append("limit", limit as string);

  const url = `${baseUrl}?${params.toString()}`;

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
      return NextResponse.json({ error: e });
    }
  } else {
    return NextResponse.json("no AccessToken");
  }
}
