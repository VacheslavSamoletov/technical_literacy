import { Button } from "@/components/ui/button";

export interface DoseCardProps {
  medicationName: string;
  dose: string;
  time: string;
  /** Time the dose was given ("HH:MM"); absent if not given yet. */
  givenAt?: string | null;
  onGive?: () => void;
}

export function DoseCard({
  medicationName,
  dose,
  time,
  givenAt,
  onGive,
}: DoseCardProps) {
  return (
    <article className="flex flex-wrap items-center justify-between gap-4 rounded-card border border-line bg-surface p-5 shadow-card">
      <div>
        <p className="text-caption font-semibold text-secondary">{time}</p>
        <h2 className="mt-1 text-title font-semibold">{medicationName}</h2>
        <p className="mt-1 text-body text-secondary">{dose}</p>
      </div>
      {givenAt ? (
        <p className="text-body font-semibold text-success">
          Дано в {givenAt}
        </p>
      ) : (
        <Button type="button" onClick={onGive}>
          Дал
        </Button>
      )}
    </article>
  );
}
