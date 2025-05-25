import type { Test } from "../models/Test.model";

const PredikatyLogika: Test = {
  code: "FIT_CVUT_3",
  title: "Predikáty a logika",
  questions: [
    {
      code: "Q23",
      content: "Která z následujících formulí výrokové logiky je kontradikce?",
      options: [
        { code: "A", content: "(A ∨ B) ⇔ (¬A ∨ ¬B)", correct: false },
        { code: "B", content: "(¬A ⇒ B) ⇔ (A ∧ B)", correct: false },
        { code: "C", content: "(A ⇒ ¬B) ⇔ (B ∧ A)", correct: true },
        { code: "D", content: "(A ∧ B) ⇔ (¬A ∧ ¬B)", correct: false },
      ],
      category: "Výroková logika",
      explanation:
        "Formule (A ⇒ ¬B) ⇔ (B ∧ A) je kontradikce, protože nikdy nenastane případ, kdy mají obě strany stejnou pravdivostní hodnotu. Pro všechny kombinace hodnot A a B je výsledkem celého výrazu false, což splňuje definici kontradikce.",
    },
    {
      code: "Q24",
      content:
        "Nalezněte negaci následující formule: (∀x)P(x) ⇒ ((∃y)Q(y) ∨ (∃z)¬R(z))",
      options: [
        {
          code: "A",
          content: "(∃x)¬P(x) ∨ ((∀y)¬Q(y) ∨ (∀z)R(z))",
          correct: false,
        },
        {
          code: "B",
          content: "(∀x)P(x) ⇒ ((∀y)¬Q(y) ∧ (∀z)R(z))",
          correct: false,
        },
        {
          code: "C",
          content: "(∀x)P(x) ∧ (∀y)¬Q(y) ∧ (∀z)R(z)",
          correct: true,
        },
        {
          code: "D",
          content: "(∃x)¬P(x) ∨ ((∀y)¬Q(y) ∧ (∀z)R(z))",
          correct: false,
        },
      ],
      category: "Predikátová logika",
      explanation:
        "Negace implikace A ⇒ B je A ∧ ¬B. Zde tedy dostaneme (∀x)P(x) ∧ ¬((∃y)Q(y) ∨ (∃z)¬R(z)), což dále pomocí De Morganových zákonů přejde na (∀x)P(x) ∧ (∀y)¬Q(y) ∧ (∀z)R(z).",
    },
    {
      code: "Q25",
      content: "Zjednodušte formuli výrokové logiky B ∧ (A ∨ ¬(¬B ∨ A))",
      options: [
        { code: "A", content: "B", correct: true },
        { code: "B", content: "B ∧ A", correct: false },
        { code: "C", content: "B ∧ ¬A", correct: false },
        { code: "D", content: "B ∨ ¬A", correct: false },
      ],
      category: "Výroková logika",
      explanation:
        "Pomocí De Morganových zákonů přepíšeme ¬(¬B ∨ A) jako B ∧ ¬A. Celá formule se pak stane B ∧ (A ∨ (B ∧ ¬A)). Tento výraz je ekvivalentní s B, protože bez ohledu na hodnotu A je výstup určený B. Tedy nejjednodušší tvar celé formule je právě B.",
    },
    {
      code: "Q26",
      content:
        "Které z následujících formulí jsou logickými důsledky formule ¬(∀x)p(x)? (p(x) je unární predikát)",
      options: [
        { code: "A", content: "(∃x)¬p(x)", correct: true },
        { code: "B", content: "(∃y)¬p(y)", correct: true },
        { code: "C", content: "(∀x)¬p(x)", correct: false },
        { code: "D", content: "(∀y)¬p(y)", correct: false },
      ],
      category: "Predikátová logika",
      explanation:
        "Negace univerzální kvantifikace ¬(∀x)p(x) je ekvivalentní s existenciální formulí (∃x)¬p(x). Změna názvu proměnné nemá vliv na význam, proto i (∃y)¬p(y) je správný důsledek. Opačné (∀x)¬p(x) je mnohem silnější výrok, který z původní formule neplyne.",
    },
    {
      code: "Q27",
      content:
        "Nalezněte negaci formule predikátové logiky (∀x)a(x) ⇒ (∃y)b(y):",
      options: [
        { code: "A", content: "(∀x)a(x) ∨ (∃y)¬b(y)", correct: false },
        { code: "B", content: "(∃x)¬a(x) ⇒ (∀y)¬b(y)", correct: false },
        { code: "C", content: "(∀x)a(x) ∧ (∀y)¬b(y)", correct: true },
        { code: "D", content: "(∃x)¬a(x) ∨ (∀y)¬b(y)", correct: false },
      ],
      category: "Predikátová logika",
      explanation:
        "Negace implikace A ⇒ B je A ∧ ¬B. V tomto případě: (∀x)a(x) ∧ ¬(∃y)b(y), což je dále (∀x)a(x) ∧ (∀y)¬b(y).",
    },
    {
      code: "Q29",
      content:
        "Které z následujících formulí jsou logickými důsledky formule (∀x)(∃y)p(x, y)? (p(x, y) je binární predikát):",
      options: [
        { code: "A", content: "¬(∃x)(∀y)¬p(x, y)", correct: true },
        { code: "B", content: "(∃y)(∀x)p(x, y)", correct: false },
        { code: "C", content: "(∃x)(∃y)p(x, y)", correct: true },
        { code: "D", content: "(∃x)(∀y)p(x, y)", correct: false },
      ],
      category: "Predikátová logika",
      explanation:
        "Z výroku (∀x)(∃y)p(x, y) plyne, že neexistuje x, pro které by p(x, y) bylo nepravdivé pro všechna y – tedy ¬(∃x)(∀y)¬p(x, y) je logický důsledek. Také z něj plyne, že aspoň jeden pár (x, y) existuje, tj. (∃x)(∃y)p(x, y). Ostatní formulace jsou silnější a neplynou z původního výroku.",
    },
    {
      code: "Q30",
      content:
        "Které z následujících formulí jsou tautologickým důsledkem tvrzení: 'Umím anglicky tehdy a jen tehdy, když umím francouzsky'?",
      options: [
        {
          code: "A",
          content: "Umím anglicky a umím francouzsky.",
          correct: false,
        },
        {
          code: "B",
          content: "Jestliže umím francouzsky, pak umím i anglicky.",
          correct: true,
        },
        {
          code: "C",
          content: "Jestliže neumím francouzsky, pak neumím ani anglicky.",
          correct: true,
        },
        {
          code: "D",
          content: "Umím anglicky nebo umím francouzsky.",
          correct: false,
        },
      ],
      category: "Výroková logika",
      explanation:
        "Z tvrzení A ⇔ F plyne A ⇒ F i F ⇒ A. Možnosti b) a c) jsou právě tyto dvě směry nebo jejich kontrapozice. Ostatní nejsou nutné důsledky – výrok by mohl být pravdivý i když neumím ani jedno.",
    },
    {
      code: "Q32",
      content:
        "Které z následujících interpretací binárního predikátu p(x, y) jsou modely teorie T = {(∀y)(∃x)p(x, y)} v přirozených číslech s nulou N = {0, 1, 2, ...}?",
      options: [
        { code: "A", content: "x < y", correct: false },
        { code: "B", content: "x > y", correct: true },
        { code: "C", content: "x ≤ y", correct: true },
        { code: "D", content: "x ≥ y", correct: true },
      ],
      category: "Modelová teorie / predikátová logika",
      explanation:
        "Výrok (∀y)(∃x)p(x,y) znamená, že pro každé y ∈ ℕ₀ musí existovat alespoň jedno x ∈ ℕ₀, pro které p(x, y) platí. U relace x < y neexistuje žádné x pro y = 0, proto není modelem. Naopak pro x > y můžeme vždy vzít x = y + 1, pro x ≤ y i x ≥ y vždy existuje vhodné x = y. Proto b), c) i d) jsou modely.",
    },
    {
      code: "Q34",
      content:
        "Která z následujících formulí je negací formule (∀x)A(x) ⇒ ((∃u)¬B(u) ∨ (∃z)¬C(z))?",
      options: [
        {
          code: "A",
          content: "(∃x)¬A(x) ∨ ((∀u)¬B(u) ∨ (∀z)C(z))",
          correct: false,
        },
        {
          code: "B",
          content: "(∀x)A(x) ⇒ ((∀u)¬B(u) ∧ (∀z)C(z))",
          correct: false,
        },
        { code: "C", content: "(∀x)A(x) ∧ (∀u)B(u) ∧ (∀z)C(z)", correct: true },
        {
          code: "D",
          content: "(∃x)¬A(x) ∨ ((∀u)¬B(u) ∧ (∀z)C(z))",
          correct: false,
        },
      ],
      category: "Predikátová logika",
      explanation:
        "Negace implikace A ⇒ B je A ∧ ¬B. Tedy: (∀x)A(x) ∧ ¬((∃u)¬B(u) ∨ (∃z)¬C(z)), což je (∀x)A(x) ∧ (∀u)B(u) ∧ (∀z)C(z) po použití De Morganových zákonů a kvantifikovaných ekvivalencí.",
    },
    {
      code: "Q33",
      content:
        "Shefferův symbol ↑ (NAND) má význam: A ↑ B = ¬(A ∧ B). Které z následujících tvrzení správně vyjadřuje konjunkci pomocí Shefferova symbolu?",
      options: [
        { code: "A", content: "(A ∧ B) ⇔ ((A ↑ A) ↑ B)", correct: false },
        { code: "B", content: "(A ∧ B) ⇔ ((A ↑ B) ↑ A)", correct: false },
        { code: "C", content: "(A ∧ B) ⇔ ((A ↑ A) ↑ (B ↑ B))", correct: false },
        { code: "D", content: "(A ∧ B) ⇔ ((A ↑ B) ↑ (A ↑ B))", correct: true },
      ],
      category: "Výroková logika – Shefferův symbol",
      explanation:
        "Pomocí NAND lze konjunkci A ∧ B vyjádřit jako (A ↑ B) ↑ (A ↑ B), protože NAND je negace konjunkce, a její dvojnásobná negace vrací původní hodnotu. Pravdivostní tabulka to potvrzuje pro všechny kombinace hodnot A a B.",
    },
    {
      code: "Q37",
      content:
        "Rozhodněte, které z následujících dvojic formulí výrokové logiky jsou logicky ekvivalentní:",
      options: [
        { code: "A", content: "A ⇒ B ; A ∨ ¬B", correct: false },
        { code: "B", content: "A ⇒ B ; ¬(A ∧ ¬B)", correct: true },
        { code: "C", content: "A ⇒ B ; ¬B ⇒ ¬A", correct: true },
        { code: "D", content: "A ⇒ B ; ¬A ∨ B", correct: true },
      ],
      category: "Výroková logika",
      explanation:
        "Implikace A ⇒ B je logicky ekvivalentní s ¬A ∨ B, ¬(A ∧ ¬B) a s kontrapozicí ¬B ⇒ ¬A. Naopak A ∨ ¬B je logicky odlišná a s A ⇒ B ekvivalentní není.",
    },
    {
      code: "Q36",
      content: "Nalezněte negaci formule predikátové logiky (∀x)(p(x) ⇒ q(x)):",
      options: [
        { code: "A", content: "(∃x)(p(x) ∧ ¬q(x))", correct: true },
        { code: "B", content: "(∀x)(¬q(x) ⇒ ¬p(x))", correct: false },
        { code: "C", content: "(∀x)(¬p(x) ∨ q(x))", correct: false },
        { code: "D", content: "(∃x)(p(x) ∧ ¬q(x))", correct: true },
      ],
      category: "Predikátová logika",
      explanation:
        "Negace (∀x)(p(x) ⇒ q(x)) se přepíše jako (∃x)¬(p(x) ⇒ q(x)), což je (∃x)(p(x) ∧ ¬q(x)).",
    },
    {
      code: "Q38",
      content:
        "Mějme dvě booleovské funkce f₀(x,y,z) = (x xor z) ∨ (x ∧ z) a f₁(x,y,z) = x ∨ z. Jsou tyto funkce totožné?",
      options: [
        { code: "A", content: "Jsou stejné", correct: true },
        { code: "B", content: "Jsou různé", correct: false },
        { code: "C", content: "Nelze určit", correct: false },
      ],
      category: "Booleovské funkce",
      explanation:
        "Po rozebrání všech čtyř kombinací vstupů (x, z) ∈ {0,1}² zjistíme, že výraz (x xor z) ∨ (x ∧ z) je vždy roven x ∨ z. Funkce jsou tedy ve všech případech totožné.",
    },
    {
      code: "Q39",
      content:
        "Která z následujících formulí γ je pravdivá ve všech ohodnoceních, ve kterých je pravdivá množina formulí {a ⇒ (b ∧ c), b ⇒ (a ∧ c)}? Říkáme, že γ je sémantickým důsledkem této množiny.",
      options: [
        { code: "A", content: "c", correct: false },
        { code: "B", content: "a ⇒ b", correct: true },
        { code: "C", content: "b", correct: false },
        { code: "D", content: "a", correct: false },
        { code: "E", content: "c ⇒ b", correct: false },
      ],
      category: "Výroková logika – sémantický důsledek",
      explanation:
        "Z formule a ⇒ (b ∧ c) plyne a ⇒ b. Zároveň formule b ⇒ (a ∧ c) plyne b ⇒ a, takže dohromady a ⇔ b. Z toho plyne i a ⇒ b. Jiné výroky nelze ze zadání jednoznačně odvodit.",
    },
    {
      code: "Q40",
      content:
        "Jsou dány formule α: ∀x(P(x) ⇒ Q(x)) a β: ∀y ¬Q(y), kde P a Q jsou unární predikáty. Pro kterou formuli γ platí, že množina {α, β, γ} je nesplnitelná?",
      options: [
        { code: "A", content: "∃x P(x)", correct: true },
        { code: "B", content: "∀x(P(x) ∨ ¬P(x))", correct: false },
        { code: "C", content: "¬∃x P(x)", correct: false },
        { code: "D", content: "∀x(Q(x) ⇒ P(x))", correct: false },
        { code: "E", content: "∃x ¬Q(x)", correct: false },
      ],
      category: "Predikátová logika – splnitelnost",
      explanation:
        "Z kombinace α: ∀x(P(x) ⇒ Q(x)) a β: ∀y ¬Q(y) plyne, že P(x) nemůže platit pro žádné x. Pokud k těmto dvěma přidáme ∃x P(x), vznikne kontradikce, protože P(x) by muselo zároveň platit i neplatit.",
    },
  ],
};

export default PredikatyLogika;
