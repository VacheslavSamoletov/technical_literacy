import { expect, test } from "vitest";
import { formatTime, getTodayDoses, todayCourse } from "@/lib/today-mock";

test("на сегодня 3 приёма по возрастанию времени", () => {
  const doses = getTodayDoses(todayCourse);
  expect(doses.map((d) => d.time)).toEqual(["09:00", "14:00", "21:00"]);
  for (const dose of doses) {
    expect(dose.medicationName).not.toBe("");
    expect(dose.dose).not.toBe("");
  }
});

test("formatTime возвращает ЧЧ:ММ с ведущими нулями", () => {
  expect(formatTime(new Date(2026, 0, 1, 9, 5))).toBe("09:05");
  expect(formatTime(new Date(2026, 0, 1, 21, 30))).toBe("21:30");
});
