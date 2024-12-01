import { ReactNode } from "react";

export default function Wrapper(props: { children: ReactNode }) {
  return (
    <div className="p-4 flex flex-col gap-3 rounded-md bg-[var(--mg)] border border-[var(--border)]">
      {props.children}
    </div>
  );
}
