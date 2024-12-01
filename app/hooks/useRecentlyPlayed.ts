import { useState, useEffect } from "react";
import { RecentItem } from "@/types/data";

interface Data {
  items: RecentItem[];
}
export default function useRecentlyPlayed() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/user/recently-played");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return { data };
}
