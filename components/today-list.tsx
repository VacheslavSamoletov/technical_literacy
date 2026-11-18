"use client";

import { useState } from "react";
import { DoseCard } from "@/components/dose-card";
import { formatTime, type TodayDose } from "@/lib/today-mock";

export interface TodayListProps {
  doses: TodayDose[];
}

export function TodayList({ doses }: TodayListProps) {
  // dose id -> time it was given ("HH:MM"); kept in memory only.
  const [givenAt, setGivenAt] = useState<Record<string, string>>({});

  function markGiven(id: string) {
    // A mark is never overwritten once set.
    setGivenAt((prev) =>
      prev[id] ? prev : { ...prev, [id]: formatTime(new Date()) },
    );
  }

  return (
    <ul className="grid gap-4">
      {doses.map((dose) => (
        <li key={dose.id}>
          <DoseCard
            medicationName={dose.medicationName}
            dose={dose.dose}
            time={dose.time}
            givenAt={givenAt[dose.id]}
            onGive={() => markGiven(dose.id)}
          />
        </li>
      ))}
    </ul>
  );
}
