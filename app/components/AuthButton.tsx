"use client";
import React from "react";
import useHasCookie from "../hooks/useHasCookie";
interface AuthButtonProps {
  width?: "fit" | "full";
}
const AuthButton: React.FC<AuthButtonProps> = ({ width = "fit" }) => {
  const { hasCookie } = useHasCookie();

  const login = () => {
    const scopes = ["user-top-read", "user-read-recently-played"];
    const params = new URLSearchParams();
    params.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID || "");
    params.append("response_type", "code");
    params.append("redirect_uri", process.env.NEXT_PUBLIC_REDIRECT_URI || "");
    params.append("scope", scopes.join(" "));
    params.append("state", "state");
    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = () => {
    if (!hasCookie) {
      login();
    } else if (hasCookie) {
      logout();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${width === "fit" ? "w-fit text-xs py-2" : "w-full text-mdp py-3"} ${hasCookie ? "bg-[var(--mg)] hover:bg-[var(--bg)] text-[var(--fg)]" : "bg-[var(--accent)] hover:bg-[var(--accent-hl)] text-[var(--bg)]"} border border-[var(--border)] hover:border-[var(--accent)] duration-300 px-4 font-bold rounded-full `}
    >
      {hasCookie ? "Sign Out" : "Sign In"}
    </button>
  );
};

export default AuthButton;
