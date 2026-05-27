export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-xs font-mono tracking-[0.3em] uppercase text-muted-foreground mb-6">
      <span className="text-ember">{number}</span>
      <span className="h-px w-12 bg-ember" />
      {label}
    </div>
  );
}
