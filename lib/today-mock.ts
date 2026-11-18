export interface Medication {
  id: string;
  name: string;
  dose: string;
}

export interface Dose {
  id: string;
  medicationId: string;
  /** Local time in "HH:MM" format. */
  time: string;
}

export interface Course {
  id: string;
  petName: string;
  medications: Medication[];
  doses: Dose[];
}

export interface TodayDose {
  id: string;
  time: string;
  medicationName: string;
  dose: string;
}

// Mock data until Supabase is connected. Doses are intentionally unsorted.
export const todayCourse: Course = {
  id: "course-1",
  petName: "Барсик",
  medications: [
    { id: "med-1", name: "Синулокс", dose: "1 таблетка 50 мг" },
    { id: "med-2", name: "Мелоксидил", dose: "0,5 мл" },
  ],
  doses: [
    { id: "dose-3", medicationId: "med-1", time: "21:00" },
    { id: "dose-1", medicationId: "med-1", time: "09:00" },
    { id: "dose-2", medicationId: "med-2", time: "14:00" },
  ],
};

export function getTodayDoses(course: Course): TodayDose[] {
  const byId = new Map(course.medications.map((m) => [m.id, m]));
  return course.doses
    .flatMap((dose) => {
      const medication = byId.get(dose.medicationId);
      if (!medication) return [];
      return [
        {
          id: dose.id,
          time: dose.time,
          medicationName: medication.name,
          dose: medication.dose,
        },
      ];
    })
    .sort((a, b) => a.time.localeCompare(b.time));
}

export function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
