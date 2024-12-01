export default function Comparison() {
  return (
    <div className="flex flex-row gap-3 h-fit items-end">
      <div className="flex flex-row gap-1 items-end">
        <h1 className="text-3xl font-black italic text-[var(--accent)]">+80</h1>
        <p className="text-md font-black text-[var(--accent)]">%</p>
      </div>
      <p className="text-xl font-bold">Energy</p>
    </div>
  );
}
