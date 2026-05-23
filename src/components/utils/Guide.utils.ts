import type { Test } from "../../models/Test.model";
import MnozinyRelace from "../../data/MnozinyRelace";
import JazykAutomaty from "../../data/JazykAutomaty";
import PredikatyLogika from "../../data/PredikatyLogika";
import LinearniAlgebra from "../../data/LinearniAlgebra";
import Algoritmizace from "../../data/Algoritmizace";
import Rekurze from "../../data/Rekurze";
import Mix from "../../data/Mix";
import TestMixAI from "../../data/TestMixAI";

// All real tests (Random is derived from these, so it is excluded to avoid
// double-counting).
const TESTS: Test[] = [
  MnozinyRelace,
  JazykAutomaty,
  PredikatyLogika,
  LinearniAlgebra,
  Algoritmizace,
  Rekurze,
  Mix,
  TestMixAI,
];

// Maps a question's granular `category` to a broad study area. First matching
// rule wins, so order matters: more specific / disambiguating rules come first.
const AREA_RULES: { area: string; test: RegExp }[] = [
  { area: "Lineární algebra", test: /lineární algebra|afinní transformace|determinant/i },
  { area: "Formální jazyky a automaty", test: /formální|automat|jazyková ekvivalence/i },
  { area: "Pravděpodobnost a statistika", test: /pravděpodobnost|statistik|bayes|hypotéz|konfidenční/i },
  { area: "Kryptografie", test: /kryptograf|certifikát|šifr/i },
  { area: "Databázové systémy", test: /databáz|relační model|sql|er model|index|integrit|transakční/i },
  { area: "Počítačové sítě", test: /počítačové sítě|síťov|iso\/osi|osi model|tcp|udp|ip protokol|ip adres|ethernet|porty|model tcp/i },
  { area: "Operační systémy", test: /operační systém|souborové systém|správa paměti|architektura jádra|synchronizace|paralel/i },
  { area: "Počítačová architektura", test: /počítačová architektura|architektura počítač|cache|risc|cisc|pipeline|procesor|příznak|paměti|výkonnost|adresace|stránkování|von neumann|harvard/i },
  { area: "Počítačová aritmetika a logické obvody", test: /počítačová aritmetika|kódování|binární|multiplex|klopné|sekvenční logik|digitální logika|logické obvod|zpracování bitů|aritmetika sčítání/i },
  { area: "Datové struktury", test: /datové struktury|zásobník|fronta|fronty|strom|hash|halda/i },
  { area: "Algoritmy a složitost", test: /algoritm|algorithm|asymptotick|složitost|rekurentní rovnice|graf|hledání minima/i },
  { area: "Programování (C/C++/Java)", test: /program|rekurze|c\+\+|java|pointer|reference|overload|procedural|object-oriented|cykly/i },
  { area: "Diskrétní matematika a logika", test: /výrok|predik|booleov|sheffer|sémantick|modelová teorie|množin|mnoziny|relace|kombinatorik|zobrazení|spočetnost|permutace|teorie čísel|číselná teorie|modulární|mocnin|jednotky|zbytkových tříd|inverze modulo/i },
  { area: "Matematická analýza", test: /matematická analýza|funkce více proměnných/i },
];

// Broad prefixes that act as an umbrella in front of the real subtopic
// (e.g. "Diskrétní matematika – relace" → subtopic "relace").
const UMBRELLAS =
  /^(Diskrétní matematika|Lineární algebra|Počítačová architektura|Architektura počítačů|Počítačové sítě|Databázové systémy|Databáze|Operační systémy|Programování|Počítačová aritmetika|Algoritmy|Datové struktury|Teorie množin|Pravděpodobnost a statistika|Statistika|Kryptografie|Matematická analýza|Logické obvody|Teorie čísel|Modulární aritmetika)$/i;

export interface GuideNote {
  questionCode: string;
  source: string;
  content: string;
  codeContent?: string;
  correct: string[];
  explanation: string;
}

export interface GuideSubtopic {
  name: string;
  count: number;
  notes: GuideNote[];
}

export interface GuideArea {
  slug: string;
  name: string;
  total: number;
  subtopics: GuideSubtopic[];
}

function stripDiacritics(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function slugify(s: string): string {
  return stripDiacritics(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normKey(s: string): string {
  return stripDiacritics(s).toLowerCase().trim().replace(/\s+/g, " ");
}

function areaOf(category: string): string {
  for (const rule of AREA_RULES) if (rule.test.test(category)) return rule.area;
  return "Ostatní";
}

function subtopicOf(category: string): string {
  const parts = category.split(/\s*[–-]\s*/);
  if (parts.length >= 2 && UMBRELLAS.test(parts[0].trim())) {
    return parts.slice(1).join(" – ").trim();
  }
  return category.trim();
}

let cache: GuideArea[] | null = null;

export function getGuideAreas(): GuideArea[] {
  if (cache) return cache;

  const areas = new Map<string, Map<string, GuideSubtopic>>();

  for (const test of TESTS) {
    for (const q of test.questions) {
      const rawCat = (q.category && q.category.trim()) || test.title;
      const areaName = areaOf(rawCat);
      const subName = subtopicOf(rawCat);
      const subKey = normKey(subName);

      if (!areas.has(areaName)) areas.set(areaName, new Map());
      const subs = areas.get(areaName)!;
      if (!subs.has(subKey))
        subs.set(subKey, { name: subName, count: 0, notes: [] });

      const sub = subs.get(subKey)!;
      sub.count++;
      sub.notes.push({
        questionCode: q.code,
        source: test.title,
        content: q.content,
        codeContent: q.codeContent,
        correct: q.options
          .filter((o) => o.correct)
          .map((o) => `${o.code}: ${o.content}`),
        explanation: q.explanation ?? "",
      });
    }
  }

  cache = [...areas.entries()]
    .map(([name, subs]) => {
      const subtopics = [...subs.values()].sort((a, b) => b.count - a.count);
      return {
        slug: slugify(name),
        name,
        total: subtopics.reduce((n, s) => n + s.count, 0),
        subtopics,
      };
    })
    .sort((a, b) => b.total - a.total);

  return cache;
}

export function getGuideArea(slug: string): GuideArea | undefined {
  return getGuideAreas().find((a) => a.slug === slug);
}

export function getTotalQuestionCount(): number {
  return getGuideAreas().reduce((n, a) => n + a.total, 0);
}
