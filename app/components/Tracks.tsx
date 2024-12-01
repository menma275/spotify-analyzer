import { ReactNode } from "react";
export default function Tracks(props: { children: ReactNode }) {
  return <div className="w-full flex flex-col gap-3">{props.children}</div>;
}
