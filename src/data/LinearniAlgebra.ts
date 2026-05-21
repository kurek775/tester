import type { Test } from "../models/Test.model";

const LinearniAlgebra: Test = {
  code: "FIT_CVUT_4",
  title: "Lineární algebra",
  questions: [
    {
      code: "Q43",
      content:
        "Součin A·B matic A ∈ ℝ^{m,n} a B ∈ ℝ^{s,t} je definován vždy, když platí:",
      options: [
        { code: "A", content: "m = s a n = t", correct: false },
        { code: "B", content: "m = t", correct: false },
        { code: "C", content: "n = s", correct: true },
        { code: "D", content: "m = n a s = t", correct: false },
      ],
      category: "Lineární algebra – matice",
      explanation:
        "Součin dvou matic A·B je definován tehdy, když počet sloupců první matice (n) je roven počtu řádků druhé matice (s).",
    },
    {
      code: "Q44",
      content: "Který z těchto souborů vektorů je lineárně nezávislý?",
      options: [
        {
          code: "A",
          content: "sin²x, cos 2x, 3 na lineárním prostoru funkcí",
          correct: false,
        },
        {
          code: "B",
          content: "0; 2x; sin x na lineárním prostoru funkcí",
          correct: false,
        },
        {
          code: "C",
          content: "1; 1 + x; x²; x³; x⁴ na lineárním prostoru polynomů",
          correct: true,
        },
        {
          code: "D",
          content: "1 + x; x²; 2 + 2x − x² na lineárním prostoru polynomů",
          correct: false,
        },
      ],
      category: "Lineární algebra – lineární nezávislost",
      explanation:
        "Polynomy 1, 1 + x, x², x³, x⁴ tvoří množinu lineárně nezávislých funkcí, protože každý má jiný stupeň a nelze je navzájem vyjádřit jako lineární kombinace. Ostatní možnosti obsahují buď lineární závislosti nebo nulový vektor.",
    },
    {
      code: "Q45",
      content: "Jakou dimenzi má lineární vektorový prostor matic ℝ^{m×n}?",
      options: [
        { code: "A", content: "m + n", correct: false },
        { code: "B", content: "m · n", correct: true },
        { code: "C", content: "m² + n²", correct: false },
        {
          code: "D",
          content: "Žádná z ostatních odpovědí není správná.",
          correct: false,
        },
      ],
      category: "Lineární algebra – dimenze",
      explanation:
        "Vektorový prostor všech matic typu m×n nad ℝ má dimenzi m · n, protože každý prvek matice může být nezávislým prvkem báze.",
    },
    {
      code: "Q46",
      content: "Hodnost matice je rovna:",
      options: [
        { code: "A", content: "počtu nenulových řádků matice", correct: false },
        {
          code: "B",
          content: "počtu nenulových čísel na diagonále matice",
          correct: false,
        },
        {
          code: "C",
          content: "počtu lineárně závislých řádků matice",
          correct: false,
        },
        { code: "D", content: "hodnosti transponované matice", correct: true },
      ],
      category: "Lineární algebra – hodnost",
      explanation:
        "Hodnost matice je rovna počtu lineárně nezávislých řádků (nebo sloupců). Jelikož hodnost zůstává stejná i po transpozici, platí rank(A) = rank(Aᵀ).",
    },
    {
      code: "Q47",
      content:
        "Mějme vektorový prostor ℝ³ se standardním skalárním součinem a normou. Určete vzdálenost bodů u = (4, 3, −8) a v = (7, 3, −4).",
      options: [
        { code: "A", content: "1", correct: false },
        { code: "B", content: "π", correct: false },
        { code: "C", content: "√31", correct: false },
        { code: "D", content: "5", correct: true },
      ],
      category: "Lineární algebra – normy a vzdálenosti",
      explanation:
        "Použijeme eukleidovskou normu: ||u − v|| = √((4−7)² + (3−3)² + (−8+4)²) = √(9 + 0 + 16) = √25 = 5.",
    },
    {
      code: "Q48",
      content: "Hodnost matice je rovna:",
      options: [
        {
          code: "A",
          content: "počtu lineárně závislých sloupců matice",
          correct: false,
        },
        {
          code: "B",
          content: "dimenzi lineárního obalu sloupců matice",
          correct: false,
        },
        { code: "C", content: "počtu řádků matice", correct: false },
        {
          code: "D",
          content: "dimenzi lineárního obalu řádků matice",
          correct: true,
        },
      ],
      category: "Lineární algebra – hodnost",
      explanation:
        "Hodnost matice je definována jako dimenze vektorového prostoru generovaného řádky matice, tedy dimenze lineárního obalu řádků.",
    },
    {
      code: "Q49",
      content: "Pro součiny čtvercových matic A, B, C ∈ ℝ^{n×n} neplatí:",
      options: [
        { code: "A", content: "(A · B)^T = B^T · A^T", correct: false },
        { code: "B", content: "(A + B) · C = A · C + B · C", correct: false },
        { code: "C", content: "A · (B · C) = (A · B) · C", correct: false },
        { code: "D", content: "A · B = B · A", correct: true },
      ],
      category: "Lineární algebra – vlastnosti matic",
      explanation:
        "Součin matic není obecně komutativní, tj. A·B ≠ B·A. Ostatní vlastnosti (transpozice, distributivita, asociativita) platí.",
    },
    {
      code: "Q50",
      content:
        "Na afinním prostor dimenze 2 mějme homogenní souřadnice vzhledem k počátku O a bázi tvořené vektory b₁ a b₂. Matice\n[[0, -1, 0], [1, 0, α], [0, 0, 1]] vyjadřuje:",
      options: [
        {
          code: "A",
          content:
            "je složením transformací posunu o hodnotu α ve směru b₂ a škálování",
          correct: false,
        },
        {
          code: "B",
          content:
            "nevyjadřuje afinní transformaci neboť její rozměr neodpovídá dimenzi afinního prostoru",
          correct: false,
        },
        {
          code: "C",
          content:
            "vyjadřuje transformaci pootočení souřadné soustavy o 90° a posun o hodnotu α ve směru b₂",
          correct: true,
        },
        {
          code: "D",
          content:
            "vyjadřuje transformaci záměny prvků báze a posun o hodnotu α ve směru b₂",
          correct: false,
        },
      ],
      category: "Afinní transformace – homogenní souřadnice",
      explanation:
        "Blok [[0,−1],[1,0]] odpovídá rotaci o 90° proti směru hodinových ručiček. Posun [0; α] vyjadřuje translaci ve směru vektoru b₂.",
    },
    {
      code: "Q51",
      content:
        "Nechť A a B jsou čtvercové matice se stejným počtem řádků. Která z následujících tvrzení jsou pravdivá?",
      options: [
        {
          code: "A",
          content: "A je regulární právě když det A = det Aᵀ",
          correct: false,
        },
        { code: "B", content: "det A = det Aᵀ", correct: true },
        { code: "C", content: "det(AB) = det A · det B", correct: true },
        {
          code: "D",
          content: "A je regulární právě když det A = 0",
          correct: false,
        },
      ],
      category: "Lineární algebra – determinanty",
      explanation:
        "Determinant součinu je roven součinu determinantů. Determinant transponované matice je stejný jako determinant původní matice. Pravidla o regulárnosti se vztahují na to, zda det A ≠ 0, nikoliv = 0.",
    },
    {
      code: "Q52",
      content:
        "Mějme vektorový prostor ℝ³ se standardním skalárním součinem. Určete úhel vektorů u = (1, 0, 2) a v = (2, π, −1):",
      options: [
        { code: "A", content: "−π", correct: false },
        { code: "B", content: "π", correct: false },
        { code: "C", content: "0", correct: false },
        { code: "D", content: "π / 2", correct: true },
      ],
      category: "Lineární algebra – skalární součin a úhly",
      explanation:
        "Pokud je skalární součin nulový, pak vektory svírají pravý úhel – tedy úhel π/2.",
    },
    {
      code: "Q53",
      content:
        "Je dána skupina pěti vektorů v nějakém lineárním prostoru L. Víme, že žádný vektor není násobkem jiného. Na základě této informace můžeme říci, že:",
      options: [
        {
          code: "A",
          content: "daná skupina je lineárně nezávislá.",
          correct: false,
        },
        {
          code: "B",
          content: "daná skupina je určitě lineárně závislá.",
          correct: false,
        },
        {
          code: "C",
          content:
            "pokud v této skupině není nulový vektor, je lineárně nezávislá.",
          correct: false,
        },
        {
          code: "D",
          content:
            "daná skupina vektorů může být lineárně závislá i nezávislá.",
          correct: true,
        },
        {
          code: "E",
          content:
            "daná skupina vektorů je lineárně nezávislá jen tehdy, když každý vektor obsahuje alespoň pět složek.",
          correct: false,
        },
      ],
      category: "Lineární algebra – lineární závislost",
      explanation:
        "Skutečnost, že žádný vektor není násobkem jiného, vylučuje pouze přímou závislost mezi dvojicemi. Celá skupina ale může být klidně závislá (např. pokud jeden vektor je lineární kombinací tří jiných). Bez další informace nelze rozhodnout – skupina může být závislá i nezávislá.",
    },
    {
      code: "Q54",
      content:
        "V regulární matici A typu (n, n) prohodím první řádek s druhým a dále celou matici vynásobím konstantou p (p ≠ 1). Tím vznikne matice B. Platí:",
      options: [
        { code: "A", content: "det A = −p · det B", correct: false },
        { code: "B", content: "det B = −p · det A", correct: false },
        { code: "C", content: "det B = −(p^n) · det A", correct: true },
        { code: "D", content: "det B = (−1)^n · det A", correct: false },
        {
          code: "E",
          content: "žádná z uvedených rovností neplatí",
          correct: false,
        },
      ],
      category: "Lineární algebra – determinant a úpravy matic",
      explanation:
        "Prohození dvou řádků změní znaménko determinantu. Násobení všech řádků konstantou p znamená násobení determinantu faktorem p^n. Výsledně tedy det(B) = −p^n · det(A).",
    },
    {
      code: "Q55",
      content:
        "Známe hodnoty lineárního zobrazení Z z L₁ do L₂ na bázi B lineárního prostoru L₁. Z toho plyne, že:",
      options: [
        {
          code: "A",
          content:
            "hodnoty lineárního zobrazení jsou jednoznačně určeny pro celý definiční obor L₁.",
          correct: true,
        },
        {
          code: "B",
          content:
            "lze spočítat jádro zobrazení, ale mimo jádro nejsou hodnoty jednoznačně určeny.",
          correct: false,
        },
        {
          code: "C",
          content:
            "máme málo informací, abychom spočítali hodnotu zobrazení v libovolném bodě L₁.",
          correct: false,
        },
        {
          code: "D",
          content:
            "hodnoty zobrazení na celé L₁ jsou jednoznačně určeny jen v případě, že zobrazení je izomorfismus.",
          correct: false,
        },
        {
          code: "E",
          content:
            "pokud zobrazení není prosté, nejsou hodnoty na celém L₁ jednoznačně určeny.",
          correct: false,
        },
      ],
      category: "Lineární algebra – lineární zobrazení",
      explanation:
        "Lineární zobrazení je jednoznačně určeno hodnotami na bázi prostoru. Jakmile známe obrazy bázových vektorů, lze jednoznačně určit obraz libovolného vektoru pomocí linearity.",
    },
    {
      code: "Q56",
      content:
        "Uvažujme matici A = [[30, 9], [4, a]] nad Z₄₂. Určete, jaký je její determinant pro a = 1 a pro které hodnoty a má tato matice nulový determinant.",
      options: [
        {
          code: "A",
          content:
            "Pro a = 1 je |A| = 36. |A| = 0 pro a = 4, 11, 18, 25, 32, 39.",
          correct: false,
        },
        {
          code: "B",
          content: "Pro a = 1 je |A| = -6. |A| = 0 pro a = 38, 17.",
          correct: false,
        },
        {
          code: "C",
          content: "Pro a = 1 je |A| = 6. |A| = 0 pro a = 4, 25.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Pro a = 1 je |A| = 36. |A| = 0 pro a = 4, 11, 18, 25, 32, 39.",
          correct: true,
        },
        {
          code: "E",
          content: "Pro a = 1 je |A| = 36. |A| = 0 pro a = 4, 25.",
          correct: false,
        },
      ],
      category: "Modulární aritmetika – determinanty",
      explanation:
        "Determinant v Z₄₂ je dán výrazem 30a - 36 mod 42. Pro a = 1 je hodnota 36, pro nulový determinant platí kongruence 30a ≡ 36 (mod 42), což odpovídá a ≡ 4 mod 7.",
    },
    {
      code: "Q57",
      content:
        "Matice A má n řádků, k sloupců a její hodnost je h. Jak vypadá dimenze prostoru řešení homogenní soustavy lineárních rovnic s touto maticí?",
      options: [
        { code: "A", content: "dim = n − h", correct: false },
        { code: "B", content: "dim = min(n, k) − h", correct: false },
        { code: "C", content: "dim = k − h", correct: true },
        {
          code: "D",
          content: "pokud k > n pak dim = k − n, jinak dim = 0",
          correct: false,
        },
        {
          code: "E",
          content: "z uvedených informací nelze dimenzi prostoru řešení určit.",
          correct: false,
        },
      ],
      category: "Lineární algebra – jádro a hodnost",
      explanation:
        "Dimenze jádra matice (prostor řešení homogenní soustavy) se rovná počtu proměnných (sloupců) mínus hodnost matice: dim = k − h.",
    },
    {
      code: "Q58",
      content:
        "Vyřeším homogenní soustavu lineárních rovnic s maticí A a bázi prostoru řešení zapíšu do řádků matice B. Dále řeším soustavu Bx = 0 a bázi prostoru řešení zapíšu do řádků matice C. Jaký je vztah mezi řádky matic A, B a C?",
      options: [
        {
          code: "A",
          content:
            "Řádky matice C jsou lineárními kombinacemi řádků matice A, ale může se stát, že nějaký řádek matice A není lineární kombinací řádků matice C.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Řádky matice B jsou lineární kombinací řádků matice A nebo řádků matice C.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Lineární obal řádků matice A je roven lineárnímu obalu řádků matice C.",
          correct: false,
        },
        {
          code: "D",
          content: "Počet řádků matice C je větší než počet řádků matice A.",
          correct: false,
        },
        {
          code: "E",
          content: "Žádné z výše uvedených tvrzení obecně neplatí.",
          correct: false,
        },
      ],
      category: "Lineární algebra – soustavy rovnic a řešení",
      explanation:
        "Řešení soustavy Ax = 0 vede na matici B, jejíž řádky jsou řešení. Řešení soustavy Bx = 0 (druhé jádro) jsou tedy kombinací původních rovnic – ale obecně neplatí rovnost řádkových prostorů.",
    },
  ],
};

export default LinearniAlgebra;
