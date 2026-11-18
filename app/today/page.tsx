import Link from "next/link";
import { TodayList } from "@/components/today-list";
import { getTodayDoses, todayCourse } from "@/lib/today-mock";

export default function TodayPage() {
  const doses = getTodayDoses(todayCourse);
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link href="/" className="text-caption text-secondary hover:text-ink">
        ← На главную
      </Link>
      <h1 className="mt-5 text-display font-semibold">Сегодня</h1>
      <p className="mt-3 mb-8 text-body text-secondary">
        Приёмы лекарств: {todayCourse.petName}
      </p>
      <TodayList doses={doses} />
    </main>
  );
}
