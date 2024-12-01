import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SpotifyAuthApiResponse } from "@/types/data";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const cookieStore = await cookies();

    const baseUrl = "https://accounts.spotify.com/api/token";

    if (code) {
      try {
        const response = await fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${Buffer.from(
              `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.CLIENT_SECRET}`,
            ).toString("base64")}`,
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI as string,
          }),
        });
        const data: SpotifyAuthApiResponse = await response.json();
        const accessToken = data.access_token;
        cookieStore.set({
          name: "spotifyAccessToken",
          value: accessToken,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 3600,
        });
        return NextResponse.redirect(new URL("/", req.url));
      } catch (error) {
        return NextResponse.json({ status: 500, error });
      }
    }
  } catch (error) {
    console.log("Auth error", error);
    return NextResponse.redirect(new URL("/", req.url));
  }
}
