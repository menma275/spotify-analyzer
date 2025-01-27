"use client";
import Track from "../components/Track";
import Tracks from "../components/Tracks";
import { SectionHeader } from "../components/SectionHeader";
import useTopItems from "../hooks/useTopItems";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TopArtist, TopItemQuery } from "@/types/data";

export default function ShowTopArtists() {
  const [timeRange, setTimeRange] =
    useState<TopItemQuery["time_range"]>("short_term");
  const [itemType] = useState<TopItemQuery["items"]>("artists");

  const { data } = useTopItems<TopArtist>({
    items: itemType,
    time_range: timeRange,
    limit: 50,
  });

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeRange(e.target.value as TopItemQuery["time_range"]);
  };

  return (
    <Tracks>
      <SectionHeader title="Top Artists">
        <div className="flex gap-1">
          {["short_term", "medium_term", "long_term"].map((range) => (
            <label
              key={range}
              className={`text-[0.5rem] sm:text-xs font-bold px-3 py-1 rounded-full cursor-pointer hover:bg-[var(--accent-hl)] duration-300 transition-all ${
                timeRange === range
                  ? "bg-[var(--accent)] text-[var(--bg)]"
                  : "bg-[var(--bg)] text-[var(--fg)]"
              }`}
            >
              <input
                type="radio"
                name="timeRange"
                value={range}
                checked={timeRange === range}
                onChange={handleTimeRangeChange}
                className="hidden"
              />
              {range === "short_term"
                ? "1 Month"
                : range === "medium_term"
                  ? "6 Months"
                  : "All Time"}
            </label>
          ))}
        </div>
      </SectionHeader>
      <AnimatePresence mode="wait">
        {data?.items?.map((item: TopArtist, index: number) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: index * 0.05, duration: 0.25 }}
            key={`${index}${item.id}${timeRange}`}
          >
            <Track
              name={item.name}
              image={item.images[0].url}
              index={index + 1}
              url={item.external_urls.spotify}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Tracks>
  );
}
