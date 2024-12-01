import { useState, useEffect } from "react";
import { AudioFeatures } from "@/types/data";
import { useAtom } from "jotai";
import { groupATrackIdsAtom, groupBTrackIdsAtom } from "@/atoms/tracks";
interface Data {
  audio_features: AudioFeatures[];
}
interface Group {
  group?: "A" | "B";
}
export default function useRecentlyPlayed({ group = "A" }: Group) {
  const [data, setData] = useState<Data | null>(null);
  const [trackIds] = useAtom(
    group === "A" ? groupATrackIdsAtom : groupBTrackIdsAtom,
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const validTrackIds = trackIds.filter(
          (id) => id !== null && id !== undefined,
        );

        if (validTrackIds.length === 0) {
          setData(null);
          return;
        }
        const response = await fetch(
          `/api/track-features?ids=${validTrackIds.join(",")}`,
        );
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
  }, [trackIds]);

  return { data };
}
