import { expect, test } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { DoseCard } from "@/components/dose-card";

const base = {
  medicationName: "Синулокс",
  dose: "1 таблетка 50 мг",
  time: "09:00",
};

test("неотмеченный приём: данные препарата и кнопка «Дал»", () => {
  const html = renderToStaticMarkup(createElement(DoseCard, base));
  expect(html).toContain("Синулокс");
  expect(html).toContain("1 таблетка 50 мг");
  expect(html).toContain("09:00");
  expect(html).toContain("<button");
  expect(html).toContain("Дал");
  expect(html).not.toContain("Дано в");
});

test("отмеченный приём: «Дано в ЧЧ:ММ» и нет кнопки", () => {
  const html = renderToStaticMarkup(
    createElement(DoseCard, { ...base, givenAt: "09:15" }),
  );
  expect(html).toContain("Синулокс");
  expect(html).toContain("Дано в 09:15");
  expect(html).not.toContain("<button");
  expect(html).not.toContain("Дал<");
});
