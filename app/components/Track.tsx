import Image from "next/image";
import { TrackData } from "@/types/data";

interface TrackTile extends TrackData {
  index: number;
}

export default function Track({ name, artist, image, index, url }: TrackTile) {
  return (
    <a
      href={url}
      target="_blank"
      className="cursor-pointer relative flex flex-raw gap-7 w-full rounded-lg hover:bg-[var(--bg)]"
    >
      <p className="absolute flex justify-start w-12 left-14 bottom-0 italic font-black text-[var(--subtle)] text-5xl">
        {index}
      </p>
      <div className="z-10 relative w-12 h-12 rounded-sm overflow-hidden flex-shrink-0">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          style={{ aspectRatio: "1", position: "absolute" }}
          alt={name}
        />
      </div>
      <div className="flex flex-col align-center justify-center overflow-hidden z-10">
        <h1 className="font-bold text-md truncate ">{name}</h1>
        {artist && (
          <div className="flex flex-row gap-4 text-xs">
            <p>{artist}</p>
          </div>
        )}
      </div>
    </a>
  );
}
