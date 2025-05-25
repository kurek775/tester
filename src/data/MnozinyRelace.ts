import type { Test } from "../models/Test.model";

const MnozinyRelace: Test = {
  code: "FIT_CVUT_1",
  title: "Množiny a relace",
  questions: [
    {
      code: "Q1",
      content: "Určete počet různých binárních relací na množině X = {a, b}.",
      options: [
        { code: "A", content: "16", correct: true },
        { code: "B", content: "žádné z uvedených", correct: false },
        { code: "C", content: "9", correct: false },
        { code: "D", content: "8", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Binární relace na množině X = {a, b} je libovolná podmnožina kartézského součinu X × X. Tento součin obsahuje 4 uspořádané dvojice: (a,a), (a,b), (b,a), (b,b). Každou dvojici můžeme buď zahrnout, nebo nezahrnout do relace, tedy máme 2 možnosti pro každý prvek. Celkem tedy existuje 2^4 = 16 různých binárních relací.",
    },
    {
      code: "Q2",
      content:
        "Určete počet různých ireﬂexivních binárních relací na množině X = {a, b, c}.",
      options: [
        { code: "A", content: "64", correct: true },
        { code: "B", content: "žádné z uvedených", correct: false },
        { code: "C", content: "72", correct: false },
        { code: "D", content: "48", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Relace na množině X = {a, b, c} je ireﬂexivní, pokud neobsahuje žádný prvek tvaru (x,x). V kartézském součinu X × X je 9 dvojic. Tři z nich jsou (a,a), (b,b), (c,c) – ty nesmí být v relaci. Zůstává 6 dvojic. Počet všech podmnožin těchto 6 prvků (a tedy ireﬂexivních relací) je 2^6 = 64.",
    },
    {
      code: "Q3",
      content:
        "Označme jako A množinu všech slov délky 2 nad abecedou {a,b,c,d}. Určete počet různých zobrazení f: A → A množiny A na sebe:",
      options: [
        { code: "A", content: "16²", correct: false },
        { code: "B", content: "16!", correct: false },
        { code: "C", content: "16^16", correct: true },
        { code: "D", content: "2^16", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Každé slovo délky 2 nad abecedou {a,b,c,d} lze zapsat jako dvojici. Je jich 4·4 = 16. Počet všech možných zobrazení množiny A do sebe je 16^16, protože pro každý ze 16 prvků máme 16 možností obrazu.",
    },
    {
      code: "Q4",
      content:
        "Uvažujme binární relaci R = {(a,b), (b,a)} na množině X = {a,b,c}. Určete, která z následujících relací je ekvivalencí na X.",
      options: [
        { code: "A", content: "R ∪ R⁻¹", correct: true },
        { code: "B", content: "R⁺", correct: false },
        { code: "C", content: "R ∪ ΔX", correct: true },
        { code: "D", content: "Žádná z uvedených", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Relace R je symetrická, ale neobsahuje žádné reflexivní dvojice (x, x), a tedy není reflexivní. R⁺ je tranzitivní uzávěr, ale stále neobsahuje (c, c). Pouze R ∪ Δ_X obsahuje reflexi, je symetrická a také tranzitivní, takže tvoří úplnou ekvivalenci na celé množině X = {a, b, c}.",
    },
    {
      code: "Q5",
      content:
        "Nechť A je množina o dvou prvcích. Kolik různých (úplných) zobrazení f: A → A splňuje rovnici (f ∘ f) = f?",
      options: [
        { code: "A", content: "0", correct: false },
        { code: "B", content: "4", correct: false },
        { code: "C", content: "3", correct: true },
        { code: "D", content: "2", correct: false },
        { code: "E", content: "1", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Zobrazení splňuje (f ∘ f) = f, pokud je idempotentní. Na množině se dvěma prvky existují 4 úplná zobrazení, z nichž 3 splňují tuto vlastnost. Tedy počet takových funkcí je 3.",
    },
    {
      code: "Q7",
      content:
        "Určete počet různých antisymetrických binárních relací na množině X = {a, b, c}.",
      options: [
        { code: "A", content: "216", correct: true },
        { code: "B", content: "128", correct: false },
        { code: "C", content: "žádné z uvedených", correct: false },
        { code: "D", content: "256", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "V antisymetrické relaci na množině {a, b, c} mohou být všechny tři diagonální prvky (a,a), (b,b), (c,c) — každý má 2 možnosti (v relaci, nebo ne), tj. 2^3 = 8. Každý nediagonální pár (např. (a,b) a (b,a)) má 3 možnosti: žádný prvek, jen první, nebo jen druhý — nikdy oba. Jsou tři takové páry → 3^3 = 27 možností. Celkem tedy 8 · 27 = 216 antisymetrických relací.",
    },
    {
      code: "Q8",
      content:
        "Uvažujme binární relaci R = {(a,b), (b,a)} na množině X = {a,b,c}. Určete, pro které z následujících relací S je relace R ∪ S ekvivalencí na X. (Symbolem ΔX označujeme relaci identita na množině X.)",
      options: [
        { code: "A", content: "S = {(c,b), (b,c)}", correct: false },
        { code: "B", content: "žádná z uvedených", correct: false },
        { code: "C", content: "S = ΔX", correct: true },
        { code: "D", content: "S = {(a,a), (b,b)}", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Relace R = {(a,b), (b,a)} je symetrická, ale není reflexivní. Pokud přidáme S = ΔX, získáme i reflexivní dvojice (a,a), (b,b), (c,c). Tranzitivita se tímto doplněním také zajistí – např. z (a,b) a (b,a) plyne (a,a), která už v množině je. Tato sjednocená relace tedy splňuje všechny tři podmínky ekvivalence na množině X.",
    },
    {
      code: "Q9",
      content:
        "Uvažujme binární relaci R = {(a,b), (b,c), (c,a)} na množině X = {a,b,c}. Určete, která z následujících relací je ekvivalencí na X. (Symbolem ΔX označujeme relaci identita na množině X, symbol R⁺ značí tranzitivní uzávěr relace R.)",
      options: [
        { code: "A", content: "R ∪ ΔX", correct: false },
        { code: "B", content: "žádná z uvedených", correct: false },
        { code: "C", content: "R⁺", correct: true },
        { code: "D", content: "R ∪ R⁻¹", correct: false },
      ],
      category: "Mnoziny relace",
      explanation:
        "Původní relace R = {(a,b), (b,c), (c,a)} není reflexivní ani symetrická. Ale její tranzitivní uzávěr R⁺ zahrnuje všechny potřebné dvojice k vytvoření ekvivalence — včetně (a,a), (b,b), (c,c) a všech kombinací mezi prvky. Proto je právě R⁺ ekvivalencí. Ostatní možnosti reflexivitu nebo tranzitivitu plně nezajišťují.",
    },
    {
      code: "Q10",
      content:
        "Definujme relaci R na množině reálných čísel jako R = {(x, y) ∈ ℝ² : x² - y² je celé číslo}. Které tvrzení je pravdivé?",
      options: [
        {
          code: "A",
          content: "R je reflexivní a antisymetrická.",
          correct: false,
        },
        {
          code: "B",
          content: "R je reflexivní, není tranzitivní.",
          correct: false,
        },
        {
          code: "C",
          content: "R je reflexivní, symetrická a uspořádání.",
          correct: false,
        },
        {
          code: "D",
          content: "R je reflexivní, symetrická, tranzitivní a ekvivalence.",
          correct: true,
        },
        {
          code: "E",
          content:
            "R je reflexivní, antisymetrická, tranzitivní a ekvivalence.",
          correct: false,
        },
      ],
      category: "Relace",
      explanation:
        "Relace R obsahuje dvojici (x,y), pokud x² - y² je celé číslo. Pro (x,x) je rozdíl vždy 0, tedy reflexe platí. Pokud x² - y² je celé, pak y² - x² je také celé (jen změna znaménka) → symetrie. A pokud x² - y² a y² - z² jsou celá čísla, pak i jejich součet x² - z² je celé číslo → tranzitivita. Relace je tedy reflexivní, symetrická, tranzitivní – jde o ekvivalenci.",
    },
    {
      code: "Q29",
      content: "Rozhodněte, které z následujících tvrzení je pravdivé:",
      options: [
        {
          code: "A",
          content:
            "Množina M všech polynomů s nezápornými celočíselnými koeficienty je spočetná. Důkaz použije fakt, že zobrazení T(a₀ + a₁x + a₂x² + …) = a₀ z M na ℕ₀ je bijekce.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Množina M všech čtvercových reálných matic 2×2 je spočetná. Důkaz použije fakt, že zobrazení T([a b; c d]) = [2^a · 3^b · 5^c · 7^d] z M na ℕ je bijekce.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Množina M všech polynomů s nezápornými celočíselnými koeficienty je spočetná. Důkaz použije fakt, že zobrazení T(a₀ + a₁x + a₂x² + … + aₙxⁿ) = 2^{a₀} · 3^{a₁} · 5^{a₂} · … · pₙ^{aₙ} z M na ℕ (kde pₖ je k-té prvočíslo) je prosté.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Množina M všech čtvercových reálných matic 2×2 je spočetná. Důkaz použije fakt, že množina všech uspořádaných čtveřic čísel je spočetná.",
          correct: false,
        },
      ],
      category: "Teorie množin – spočetnost",
      explanation:
        "Správně je možnost C. Každý polynom s nezápornými celočíselnými koeficienty lze zakódovat pomocí součinu prvočísel umocněných na hodnoty koeficientů. Takové zobrazení je injektivní a cílí do ℕ, která je spočetná. Množina reálných čísel není spočetná, takže možnosti B a D jsou chybné. Možnost A uvádí zobrazení pouze na první koeficient – což nestačí pro bijekci celé množiny polynomů.",
    },
    {
      code: "Q30",
      content:
        "Spočítejte, kolik existuje zobrazení T z množiny A = {1,2,...,n_A} do B = {1,2,...,n_B} (kde n_A ≥ 2, n_B ≥ 23), takových že T(1) = 13 nebo T(2) = 23.",
      options: [
        { code: "A", content: "n_B · n_A − 2", correct: false },
        { code: "B", content: "2n_A · n_B", correct: false },
        { code: "C", content: "2n_B^{n_A−1} − n_B^{n_A−2}", correct: true },
        { code: "D", content: "n_B^{n_A−2}", correct: false },
        {
          code: "E",
          content: "2n_A^{n_B−1} − n_A · n_B^{n_A−2} + 1",
          correct: false,
        },
      ],
      category: "Kombinatorika – zobrazení s omezením",
      explanation:
        "Počet funkcí s T(1) = 13 je n_B^{n_A−1}, totéž pro T(2) = 23. Jejich sjednocení má velikost 2n_B^{n_A−1} − n_B^{n_A−2}, protože funkce splňující obě podmínky (T(1) = 13 ∧ T(2) = 23) byly započítány dvakrát.",
    },
  ],
};

export default MnozinyRelace;
