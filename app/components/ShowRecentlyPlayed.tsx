"use client";
import Track from "../components/Track";
import Tracks from "../components/Tracks";
import { SectionHeader } from "../components/SectionHeader";
import useRecentlyPlayed from "../hooks/useRecentlyPlayed";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { RecentItem } from "@/types/data";
import { useAtom } from "jotai";
import { groupATrackIdsAtom } from "@/atoms/tracks";

interface Data {
  items: RecentItem[];
}

export default function ShowRecentlyPlayed() {
  const [, setGroupATrackIds] = useAtom(groupATrackIdsAtom);
  const { data }: { data: Data | null } = useRecentlyPlayed();

  useEffect(() => {
    console.log(data);
    setGroupATrackIds([]);
    data?.items.map((item) => {
      setGroupATrackIds((prev) => [...prev, item.track.id]);
    });
  }, [data, setGroupATrackIds]);

  return (
    <Tracks>
      <SectionHeader title="Recently Played" />
      {data?.items?.map((item: RecentItem, index: number) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: index * 0.1, duration: 0.25 }}
          key={`${index}${item.track.id}`}
        >
          <Track
            name={item.track.name}
            artist={item.track.artists[0].name}
            image={item.track.album.images[0].url}
            index={index + 1}
            url={item.track.external_urls.spotify}
          />
        </motion.div>
      ))}
    </Tracks>
  );
}
