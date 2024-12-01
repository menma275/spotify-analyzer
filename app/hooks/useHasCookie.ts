import { useState, useEffect } from "react";

export default function useRecentlyPlayed() {
  const [hasCookie, setHasCookie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/auth/has-cookie");
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setHasCookie(data.hasCookie);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return { hasCookie };
}
