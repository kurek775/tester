import type { Test } from "../models/Test.model";

const JazykAutomaty: Test = {
  code: "FIT_CVUT_2",
  title: "Jazyky a automaty",
  questions: [
    {
      code: "Q13",
      content: "Jazyk L = { aⁿbⁿ : 0 ≤ n ≤ 8 }. Vyberte, co platí:",
      options: [
        {
          code: "A",
          content: "Lze přijímat konečným automatem.",
          correct: true,
        },
        {
          code: "B",
          content: "Lze generovat gramatikou neobsahující rekurzi.",
          correct: true,
        },
        { code: "C", content: "Obsahuje řetězec aabb.", correct: true },
        { code: "D", content: "Obsahuje řetězec aabbb.", correct: false },
      ],
      category: "Formální jazyky",
      explanation:
        "Jazyk L má omezený počet slov, konkrétně 9 (n = 0 až 8), a každé slovo má tvar aⁿbⁿ. Jelikož je jazyk konečný, lze ho přijímat konečným automatem a generovat bez rekurze. Obsahuje např. aabb (n = 2), ale ne aabbb (to by bylo n = 2, m = 3 – porušuje pravidlo).",
    },
    {
      code: "Q14",
      content:
        "Mějme dva nedeterministické konečné automaty A₁ a A₂. O jejich ekvivalenci platí:",
      options: [
        {
          code: "A",
          content: "O ekvivalenci lze vždy algoritmicky rozhodnout.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Pokud mají tyto automaty různý počet koncových stavů, nemohou být ekvivalentní.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Pokud mají tyto automaty různý počet stavů, nemohou být ekvivalentní.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Pokud je počáteční stav automatu A₁ koncový a žádný počáteční stav automatu A₂ není koncový, pak A₁ a A₂ nemohou být ekvivalentní.",
          correct: true,
        },
      ],
      category: "Automaty a jazyková ekvivalence",
      explanation:
        "O ekvivalenci konečných automatů lze algoritmicky rozhodnout, například převodem na minimální DFA. Různý počet stavů nebo koncových stavů není problém, dokud oba přijímají stejný jazyk. Ale pokud jeden automat přijímá prázdný řetězec (např. počáteční stav je koncový) a druhý ne, pak nemohou být ekvivalentní.",
    },
    {
      code: "Q17",
      content:
        "Jazyk generovaný gramatikou G = ({S, A}, {a, b, c}, {S → aA, S → b, A → cA, A → a}, S). Vyberte, co platí:",
      options: [
        { code: "A", content: "Obsahuje řetězec aca.", correct: true },
        { code: "B", content: "Není regulární.", correct: false },
        {
          code: "C",
          content: "Lze přijímat konečným automatem.",
          correct: true,
        },
        { code: "D", content: "Obsahuje řetězec aaab.", correct: false },
      ],
      category: "Formální gramatiky",
      explanation:
        "Gramatika generuje jazyk {b} ∪ {a cⁿ a | n ≥ 0}. Pravidla odpovídají pravé lineární gramatice, což znamená, že jazyk je regulární. Tedy jej lze přijímat konečným automatem. Obsahuje např. aca, acca, ale ne aaab – takový řetězec nelze odvodit žádnou cestou.",
    },
    {
      code: "Q18",
      content:
        "Je-li nějaká bezkontextová gramatika nejednoznačná, znamená to, že:",
      options: [
        {
          code: "A",
          content:
            "Existuje alespoň jedna věta, která má více než jeden derivační strom v dané gramatice.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Existuje více pravidel se stejným neterminálem na levé straně pravidla.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Existuje alespoň jedna věta, která má více než jednu levou derivaci.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Existuje více derivačních stromů vytvořených pro danou gramatiku.",
          correct: true,
        },
      ],
      category: "Formální gramatiky",
      explanation:
        "Nejednoznačná bezkontextová gramatika je taková, že existuje alespoň jedna věta s více než jedním derivačním stromem. To odpovídá i více levým derivacím. Mít více pravidel se stejným neterminálem vlevo není znak nejednoznačnosti. Správné jsou tedy odpovědi a), c), d).",
    },
    {
      code: "Q19",
      content: "Který z následujících jazyků není regulární?",
      options: [
        { code: "A", content: "L = {a^m b^n c^k : m,n,k ≥ 0}", correct: false },
        { code: "B", content: "L = {a^m b^n : m,n ≥ 0}", correct: false },
        { code: "C", content: "L = {a^n : n ≥ 0}", correct: false },
        { code: "D", content: "L = {a^n b^n : n ≥ 0}", correct: true },
      ],
      category: "Formální jazyky",
      explanation:
        "Jazyk {aⁿbⁿ} není regulární, protože vyžaduje rovnost počtu symbolů a a b. To není možné ověřit pomocí konečného automatu. Ostatní jazyky (např. {a^m b^n}, {a^n}) lze přijmout konečným automatem, protože nevyžadují závislost mezi počty symbolů.",
    },
    {
      code: "Q20",
      content:
        "Mějme gramatiku G = ({S, A, B}, {a,b,c,d}, P, S) s pravidly: S → Aa | bS, A → cA | B, B → ε | dS. Tato gramatika je:",
      options: [
        { code: "A", content: "LL(1) gramatika", correct: false },
        { code: "B", content: "LL(2) gramatika", correct: true },
        { code: "C", content: "regulární gramatika", correct: false },
        {
          code: "D",
          content: "gramatika generující regulární jazyk",
          correct: false,
        },
      ],
      category: "Formální gramatiky",
      explanation:
        "Gramatika obsahuje ε-produkt, levé rekurze a vnořené neterminály. To znemožňuje její zařazení mezi LL(1) nebo regulární gramatiky. S dvěma symboly lookaheadu ale lze rozhodovat mezi pravidly, takže jde o LL(2) gramatiku. Není regulární, protože neterminály nejsou pouze na konci pravidel.",
    },
    {
      code: "Q21",
      content:
        "Je dán regulární výraz V = ab(b + c)*aba. Minimální deterministický konečný automat bez zbytečných stavů, který přijímá jazyk popsaný tímto výrazem, má:",
      options: [
        { code: "A", content: "4 stavy", correct: false },
        { code: "B", content: "6 stavů", correct: true },
        { code: "C", content: "5 stavů", correct: false },
        { code: "D", content: "3 stavy", correct: false },
      ],
      category: "Konečné automaty",
      explanation:
        "Výraz V definuje jazyk, který začíná na 'ab', poté obsahuje libovolný počet b nebo c, a končí na 'aba'. Při konstrukci NFA a následné deterministické minimalizaci vznikne DFA se 6 stavy, což je minimální počet pro rozpoznání tohoto vzoru.",
    },
    {
      code: "Q42",
      content: "Jazyk L = { aⁿbⁿ : n ≥ 0 }",
      options: [
        {
          code: "A",
          content: "lze přijímat konečným automatem.",
          correct: false,
        },
        {
          code: "B",
          content: "je regulární.",
          correct: false,
        },
        {
          code: "C",
          content: "je totožný s jazykem popsaným regulárním výrazem a*b*.",
          correct: false,
        },
        {
          code: "D",
          content: "lze přijímat zásobníkovým automatem.",
          correct: true,
        },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "Jazyk L = { aⁿbⁿ : n ≥ 0 } není regulární, protože vyžaduje vyváženost počtu a a b, což konečný automat neumí. Regulární výraz a*b* popisuje nadmnožinu všech slov s libovolným počtem a následovaným libovolným počtem b, ale ne nutně stejným počtem. Jazyk L lze přijímat zásobníkovým automatem (PDA), protože ten zvládá kontrolovat rovnost počtů symbolů pomocí zásobníku.",
    },
  ],
};

export default JazykAutomaty;
