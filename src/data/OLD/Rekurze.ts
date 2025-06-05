import type { Test } from "../../models/Test.model";

const Rekurze: Test = {
  code: "FIT_CVUT_6",
  title: "Rekurze, C, Java",
  questions: [
    {
      code: "Q2",
      content:
        "Určete hodnotu funkce pro rek1(3, 4), rek1(3, -4) a pro rek1(-3, 4):",
      codeContent:
        "static int rek1(int s, int t) {\n    int rek1;\n    if (s > 0) rek1 = rek1(s - 1, t) + t;\n    else rek1 = 0;\n    return rek1;\n}",
      options: [
        { code: "A", content: "12, -12, 0", correct: true },
        { code: "B", content: "12, -12, 1", correct: false },
        { code: "C", content: "7, -7, 1", correct: false },
        { code: "D", content: "7, -1, 0", correct: false },
      ],
      category: "Rekurze / C programování",
      explanation:
        "Funkce počítá součet t sčítaný sám se sebou s hodnotou s-krát, pokud s > 0. Pokud s <= 0, vrací 0. Tedy:\nrek1(3,4) = 4+4+4 = 12\nrek1(3,-4) = -4 + (-4) + (-4) = -12\nrek1(-3,4) = 0 (protože s <= 0)",
    },
    {
      code: "Q3",
      content:
        "Určete hodnotu n tak, aby byla procedura xyz() volána právě 1400 krát.",
      codeContent:
        "for (i = 0; i < 70; i++) {\n    j = 0;\n    while (j < 90) {\n        if (j > n) xyz();\n        j++;\n    }\n}",
      options: [
        { code: "A", content: "n = 69", correct: true },
        { code: "B", content: "n = 70", correct: false },
        { code: "C", content: "n = 68", correct: false },
        { code: "D", content: "n = 71", correct: false },
      ],
      category: "Cykly a výpočty",
      explanation:
        "Cyklus for se provede 70krát. Ve vnitřním while je 90 iterací, xyz() se volá, pokud j > n. Tedy počet volání xyz() je 70 × (90 - n - 1). Chceme 1400 volání:\n70 × (89 - n) = 1400 ⇒ 89 - n = 20 ⇒ n = 69\n⇒ správná odpověď je A.",
    },
    {
      code: "Q9",
      content: "Uvažujte následující program. Jaký bude jeho výstup?",
      codeContent:
        'abstract class Rodic {\n  public int i;\n  abstract int znasob();\n  void setI(int novelI) { i = novelI; }\n}\n\nclass Potomek1 extends Rodic {\n  int znasob() { return i * 2; }\n}\n\nclass Potomek2 extends Rodic {\n  int znasob() { return i * 3; }\n}\n\npublic static void main(String[] args) {\n  Rodic pot;\n  pot = new Potomek1();\n  pot.setI(3);\n  System.out.print(pot.znasob()+", ");\n  pot = new Potomek2();\n  pot.setI(3);\n  System.out.println(pot.znasob());\n}',
      options: [
        { code: "A", content: "6, 9", correct: true },
        { code: "B", content: "6, 6", correct: false },
        { code: "C", content: "9, 9", correct: false },
        { code: "D", content: "9, 6", correct: false },
      ],
      category: "Object-Oriented Programming - Java",
      explanation:
        "Potomek1 použije metodu znasob() vracející i*2 a Potomek2 používá i*3. V obou případech je i nastaveno na 3, výsledkem tedy je 6 a 9.",
    },
    {
      code: "Q10",
      content:
        "Mějte následující program v jazyce C:\nJaký je výsledek volání funkce fce(&a, b)?",
      codeContent:
        "int fce(int *x, int y) {\n  *x = (*x) + a;\n  y = y + a;\n  b = (*x) + y;\n  return a + b;\n}\n\na = 2;\nb = 3;",
      options: [
        { code: "A", content: "11", correct: false },
        { code: "B", content: "14", correct: false },
        { code: "C", content: "15", correct: true },
        { code: "D", content: "16", correct: false },
      ],
      category: "Procedural Programming - C",
      explanation:
        "Při volání fce(&a, b) se a změní z 2 na 4, y se lokálně upraví na 7. b se nastaví na 11 (4+7). Funkce vrací a+b = 4+11 = 15.",
    },
    {
      code: "Q25",
      content:
        "Uvažujme tuto funkci f(n). Určete přibližně pro jaká n bude f(n) < k.",
      codeContent:
        "int f(int n) {\n  int x = 2;\n  for (int i = 1; i <= n; i = i + 1) {\n    x *= x;\n  }\n  return x;\n}",
      options: [
        { code: "A", content: "n < log₂(k)", correct: false },
        { code: "B", content: "n < k · log₂(k)", correct: false },
        { code: "C", content: "n < log₂(log₂(k))", correct: true },
        { code: "D", content: "n < 2ᵏ", correct: false },
      ],
      category: "Algorithm Analysis",
      explanation:
        "Funkce opakovaně násobí x * x, čímž exponenciálně zvyšuje hodnotu x: x = 2^(2^n). Aby f(n) < k, musí tedy platit 2^(2^n) < k. Aplikací logaritmu dostáváme 2^n < log₂(k), tedy n < log₂(log₂(k)).",
    },
    {
      code: "Q18",
      content: "Co nastane v tomto fragmentu C++ programu?",
      codeContent:
        "double f(int a, double b) { return a + b; }\nint f(int c, int d) { return c - d; }\n\nint main() {\n  ...\n  int i = f(1, 2.1F);\n  ...\n}",
      options: [
        { code: "A", content: "hodnota i bude -1", correct: false },
        { code: "B", content: "hodnota i bude 3", correct: true },
        { code: "C", content: "hodnota i bude -3.1", correct: false },
        { code: "D", content: "nastane chyba při výpočtu", correct: false },
        { code: "E", content: "nastane chyba při kompilaci", correct: false },
      ],
      category: "C++ Overloading & Type Conversion",
      explanation:
        "Volání f(1, 2.1F) odpovídá přesně typu (int, float), což je možné přetypovat na (int, int), nikoliv (int, double), protože přesnější je přetypování float → int. Volá se tedy int f(int, int), tedy f(1, 2) = -1. ALE výstup je 3, což znamená, že byl použit přetyp na (int, double) a volána byla první verze funkce. Proto výsledek je 1 + 2.1 = 3.1, a to je přetypováno zpět na int (tedy 3).",
    },
    {
      code: "Q13",
      content: "Co dělá následující funkce v jazyce C?",
      codeContent:
        "int ff(int x, int y) {\n    if (x < y) return ff(x+1,y);\n    return x;\n}",
      options: [
        {
          code: "A",
          content: "vrátí maximální hodnotu z obou parametrů",
          correct: true,
        },
        {
          code: "B",
          content: "vrátí x+1",
          correct: false,
        },
        {
          code: "C",
          content:
            "buď hned vrátí první parametr nebo jen „do nekonečna“ volá sama sebe",
          correct: false,
        },
        {
          code: "D",
          content: "vrátí součet svých parametrů",
          correct: false,
        },
      ],
      explanation:
        "Funkce vrací maximum ze dvou čísel. Pokud x < y, zvyšuje x, dokud není rovno y, pak jej vrátí. Jinak rovnou vrací x, což je maximální hodnota.",
    },
    {
      code: "Q15",
      content: "Která volání funkce f jsou chybná v C++?",
      codeContent: "void f (double& x) { ... }",
      options: [
        {
          code: "A",
          content: "const double a=1.1F; ... f(a);",
          correct: true,
        },
        {
          code: "B",
          content: "double a=1.1F; ... f(a);",
          correct: false,
        },
        {
          code: "C",
          content: "double a,b; ... f(a+b);",
          correct: true,
        },
        {
          code: "D",
          content: "f(1.1);",
          correct: true,
        },
        {
          code: "E",
          content: "float a=1.1F; ... f(a);",
          correct: true,
        },
      ],
      explanation:
        "Volání funkce s referencí na výrazy, literály nebo neslučitelné typy (např. float místo double) je v C++ neplatné. Pouze `double a=...; f(a);` je korektní.",
    },
    {
      code: "Q16",
      content: "Co nastane v tomto fragmentu C++ programu?",
      codeContent:
        "double f (int a, float b) { return a + b; }\nint f (int c, int d) { return c - d; }\n\nint main ( ... ) {\n  ...\n  int i = f(1, 2.1);\n  ...\n}",
      options: [
        { code: "A", content: "nastane chyba při výpočtu", correct: false },
        { code: "B", content: "hodnota i bude -1", correct: false },
        { code: "C", content: "nastane chyba při kompilaci", correct: true },
        { code: "D", content: "hodnota i bude -3.1", correct: false },
        { code: "E", content: "hodnota i bude 3", correct: false },
      ],
      explanation:
        "V C++ se nerozlišuje přetěžování funkcí pouze podle rozdílných typů parametrů jako `float` vs `double`. `f(1, 2.1)` je nejednoznačné, protože literál 2.1 může být považován jak za `double`, tak přetypován na `int`. Kompilátor není schopen rozhodnout, kterou funkci zavolat, takže nastane chyba při kompilaci.",
    },
    {
      code: "Q13",
      content: "Kolikrát se zavolá funkce abc(x), pokud ff(2)?",
      codeContent:
        "void ff(int x) {\n  if (x >= 0) ff(x - 2);\n  abc(x);\n  if (x <= 0) ff(x - 2);\n}",
      options: [
        { code: "A", content: "1 krát", correct: false },
        { code: "B", content: "8 krát", correct: false },
        { code: "C", content: "7 krát", correct: true },
        { code: "D", content: "5 krát", correct: false },
      ],
      explanation:
        "Rekurze má dvě větve — před a po volání `abc(x)` — a větví se dál podle hodnoty x. Funkce `ff(2)` rekurzivně volá `ff(0)` a `ff(-2)`, každá z nich dále rekurzivně volá až po `ff(-4)`, ale vždy pouze jedním směrem (větvení se řídí podle `x >= 0` a `x <= 0`). Celkem se `abc(x)` zavolá 7krát.",
    },
    {
      code: "Q12",
      content: "Tato funkce",
      codeContent:
        "int ff(int x, int y) {\n    if (y > 0) return ff(x, y - 1) + 1;\n    return x;\n}",
      options: [
        {
          code: "A",
          content: "spočte rozdíl x−y, je-li y nezáporné",
          correct: false,
        },
        {
          code: "B",
          content: "pro kladná y vrátí y, jinak vrátí x",
          correct: false,
        },
        {
          code: "C",
          content: "vrátí hodnotu svého většího parametru",
          correct: false,
        },
        {
          code: "D",
          content: "sečte x a y, je-li y nezáporné",
          correct: true,
        },
      ],
      explanation:
        "Funkce `ff(x, y)` rekurzivně volá sebe sama, snižuje y a za každou rekurzi přičítá 1. Rekurze končí, když y dosáhne 0, a návratová hodnota je x + y (počáteční y). Tedy výsledek je součet x a y pro y ≥ 0.",
    },
  ],
};

export default Rekurze;
