import { useState, useEffect } from "react";
import { TopTrack, TopItemQuery } from "@/types/data";

interface Data {
  items: TopTrack[];
}

export default function useTopItems<T>({
  items = "tracks",
  time_range = "short_term",
  limit = 10,
}: TopItemQuery) {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("items", items);
    params.append("time_range", time_range);
    params.append("limit", limit.toString());
    const url = `/api/user/top-items?${params.toString()}`;
    async function fetchData() {
      try {
        const response = await fetch(url);
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
  }, [items, time_range, limit]);

  return { data: data as { items: T[] } | null };
}
