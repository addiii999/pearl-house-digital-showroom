export function DecoLine({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="diamond-fuchsia text-xs">◆</span>
      <div className="deco-line w-40 md:w-64" />
      <span className="diamond-turquoise text-xs">◆</span>
      <div className="deco-line w-40 md:w-64" />
      <span className="diamond-orange text-xs">◆</span>
    </div>
  );
}
