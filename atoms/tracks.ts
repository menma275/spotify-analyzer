import { atom } from "jotai";
import { TrackData } from "@/types/data";

export const groupATrackIdsAtom = atom<string[]>([]);
export const groupBTrackIdsAtom = atom<string[]>([]);
export const recentTracksAtom = atom<TrackData[]>([]);
export const topTracksAtom = atom<TrackData[]>([]);
