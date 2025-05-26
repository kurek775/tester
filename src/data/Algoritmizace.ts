import type { Test } from "../models/Test.model";

const Algoritmizace: Test = {
  code: "FIT_CVUT_5",
  title: "Algoritmizace",
  questions: [
    {
      code: "Q59",
      content:
        "Cyklická fronta je implementována pomocí pole F o velikosti n a indexů i (head) a j (tail). Pokud budeme uvažovat nejlepší známý algoritmus pro zjištění aktuálního počtu prvků ve frontě, kam bude patřit jeho složitost?",
      options: [
        { code: "A", content: "Ω(1)", correct: true },
        { code: "B", content: "O(1)", correct: true },
        { code: "C", content: "Ω(n)", correct: false },
        { code: "D", content: "O(n)", correct: false },
      ],
      category: "Datové struktury – fronty",
      explanation:
        "Zjištění počtu prvků ve frontě implementované cyklickým polem lze provést výpočtem (tail - head + n) mod n, což je v konstantním čase, tedy složitost O(1) a zároveň i Ω(1).",
    },
    {
      code: "Q60",
      content: "Jak je možno implementovat frontu?",
      options: [
        {
          code: "A",
          content: "dvousměrně vázaným cyklickým seznamem",
          correct: true,
        },
        {
          code: "B",
          content: "rozšiřitelným polem",
          correct: true,
        },
        {
          code: "C",
          content:
            "jednosměrným zřetězeným seznamem s ukazatelem na čelo fronty",
          correct: false,
        },
        {
          code: "D",
          content:
            "jednosměrným zřetězeným seznamem s ukazatelem na čelo i konec fronty",
          correct: false,
        },
        {
          code: "E",
          content: "polem pevné délky",
          correct: true,
        },
      ],
      category: "Datové struktury – implementace fronty",
      explanation:
        "Fronta se dá implementovat pomocí dynamického pole, pole pevné délky i dvousměrného cyklického seznamu. Jednosměrný seznam s ukazatelem jen na čelo nestačí, protože neumožňuje efektivní přístup na konec fronty.",
    },
    {
      code: "Q16",
      content:
        "Mějme tabulku implementovanou pomocí rozptylování (hash table). Jaké jsou složitosti operací vložení řádku do tabulky, zrušení řádku v tabulce, čtení řádku tabulky za předpokladu, že v tabulce je velmi mnoho synonym?",
      options: [
        { code: "A", content: "O(n), O(n), O(n)", correct: true },
        { code: "B", content: "O(log n), O(n), O(1)", correct: false },
        {
          code: "C",
          content: "O(log n), O(log n), O(log n)",
          correct: false,
        },
        { code: "D", content: "O(1), O(1), O(1)", correct: false },
      ],
      category: "Hash table",
      explanation:
        "Při velkém množství synonym se může časová složitost operací v hašovací tabulce zhoršit až na O(n), protože se v nejhorším případě jedná o lineární průchod kolizním seznamem.",
    },
    {
      code: "Q17",
      content:
        "Multiplikativní inverze čísla a modulo m je takové číslo b, pro které platí",
      options: [
        {
          code: "A",
          content: "a + b je kongruentní s 0 modulo m",
          correct: false,
        },
        {
          code: "B",
          content: "ab je kongruentní s 1 modulo m",
          correct: true,
        },
        {
          code: "C",
          content: "ba je kongruentní s 1 modulo m",
          correct: true,
        },
        {
          code: "D",
          content: "b + a je kongruentní s 0 modulo m",
          correct: false,
        },
      ],
      category: "Modulární aritmetika",
      explanation:
        "Multiplikativní inverze znamená, že součin a·b ≡ 1 (mod m), což je přesně definice uvedená v odpovědích B a C.",
    },
    {
      code: "Q8",
      content:
        "Příznak SF (sign flag – příznak znaménka) se po provedení operace sčítání (u procesoru, který pracuje s čísly bez znaménka a s čísly v doplňkovém kódu) nastaví na 1, když:",
      options: [
        {
          code: "A",
          content: "bude přenos z nejvyššího řádu roven 1",
          correct: false,
        },
        {
          code: "B",
          content: "bude přenos do nejvyššího řádu roven 1",
          correct: false,
        },
        {
          code: "C",
          content: "bude bit v nejvyšším řádu výsledku roven 1",
          correct: true,
        },
        {
          code: "D",
          content:
            "když budou mít oba sčítanci stejné znaménko a výsledek bude mít opačné znaménko",
          correct: false,
        },
      ],
      category: "Procesory a příznaky",
      explanation:
        "Příznak znaménka (SF) indikuje, zda je výsledek aritmetické operace záporný – odpovídá hodnotě nejvyššího bitu výsledku v doplňkovém kódu.",
    },
    {
      code: "Q10",
      content:
        "Které z následujících synchronizačních technik jsou založeny na aktivním čekání a lze jimi synchronizovat procesy i vlákna?",
      options: [
        { code: "A", content: "Monitory", correct: false },
        { code: "B", content: "Podmíněné proměnné", correct: false },
        { code: "C", content: "Instrukce TSL", correct: true },
        { code: "D", content: "Petersonův algoritmus", correct: true },
      ],
      category: "Paralelní programování",
      explanation:
        "TSL (Test and Set Lock) a Petersonův algoritmus používají aktivní čekání – tedy 'busy waiting', kde vlákno aktivně zjišťuje podmínku beze spánku. Lze je použít pro synchronizaci procesů i vláken.",
    },
    {
      code: "Q14",
      content:
        "Cyklická fronta je implementována pomocí pole F o velikosti n a indexů i (head) a j (tail). Pokud budeme uvažovat nejlepší známý algoritmus pro zjištění aktuálního počtu prvků ve frontě, kam bude patřit jeho složitost?",
      options: [
        { code: "A", content: "Ω(1)", correct: true },
        { code: "B", content: "Θ(1)", correct: true },
        { code: "C", content: "Ω(n)", correct: false },
        { code: "D", content: "Θ(n)", correct: false },
      ],
      category: "Datové struktury – fronty",
      explanation:
        "Pokud fronta pracuje v kruhovém bufferu s uloženými indexy, pak je možné zjistit počet prvků v konstantním čase pomocí vzorce závislého na rozdílu mezi indexy (i a j) a velikosti pole n. Proto má algoritmus složitost Θ(1), což zároveň znamená i Ω(1).",
    },
    {
      code: "Q5",
      content:
        "Instrukce skoku se (u procesoru s jednoadresovými instrukcemi) provede tak, že se adresní část instrukce zapíše",
      options: [
        { code: "A", content: "do programového čítače PC", correct: true },
        { code: "B", content: "do ukazatele zásobníku SP", correct: false },
        { code: "C", content: "do jiného registru", correct: false },
        { code: "D", content: "do instrukčního registru IR", correct: false },
      ],
      category: "Architektura počítačů",
      explanation:
        "Při instrukci skoku je cílová adresa zapsána do programového čítače (PC), který určuje adresu další vykonávané instrukce.",
    },

    {
      code: "Q7",
      content: "Pojem „zlepšující cesta“ se používá v popisu algoritmu určení",
      options: [
        {
          code: "A",
          content: "minimální kostry neorientovaného grafu",
          correct: false,
        },
        {
          code: "B",
          content: "nejkratší cesty mezi všemi dvojicemi uzlů grafu",
          correct: false,
        },
        {
          code: "C",
          content: "nejkratší cesty mezi dvěma uzly grafu",
          correct: false,
        },
        { code: "D", content: "maximálního toku v síti", correct: true },
      ],
      category: "Grafové algoritmy",
      explanation:
        "Zlepšující cesta je klíčový pojem v algoritmech pro hledání maximálního toku v síti (např. Ford-Fulkersonův algoritmus). Reprezentuje cestu, po které lze ještě zvýšit tok.",
    },
    {
      code: "Q12",
      content:
        "Jednoduchá pravá rotace v uzlu u. Označte všechny správné odpovědi.",
      options: [
        {
          code: "A",
          content: "sníží hloubku levého syna uzlu u",
          correct: false,
        },
        {
          code: "B",
          content:
            "přemístí vnitřní uzel nalevo od pravého syna uzlu u do kořene",
          correct: false,
        },
        {
          code: "C",
          content: "sníží hloubku pravého syna uzlu u",
          correct: true,
        },
        {
          code: "D",
          content: "vzájemně zamění obsah uzlu u s obsahem jeho levého syna",
          correct: true,
        },
      ],
      category: "Stromy a rotace",
      explanation:
        "Pravá rotace v binárním vyhledávacím stromu posune levého syna uzlu nahoru a samotný uzel dolů doprava. Tím se sníží hloubka pravého syna (bývalý uzel u) a uzly se 'vymění'.",
    },
    {
      code: "Q10",
      content:
        "Které z následujících synchronizačních technik jsou založeny na blokování a lze jimi synchronizovat procesy nebo vlákna?",
      options: [
        { code: "A", content: "Semafory", correct: true },
        {
          code: "B",
          content: "Algoritmus striktního střídání",
          correct: false,
        },
        { code: "C", content: "Pěstroš algoritmus", correct: false },
        { code: "D", content: "Bariéry", correct: true },
      ],
      category: "Synchronizace a paralelismus",
      explanation:
        "Semafory i bariéry fungují na principu blokování – čekání na splnění podmínky. Oproti tomu algoritmy jako Petersonův nebo střídání spoléhají na aktivní čekání (busy waiting).",
    },
    {
      code: "Q11",
      content:
        "Mějme datový typ množina implementovaný charakteristickým vektorem. Jaké jsou složitosti operací test existence prvku, vložení prvku, odebrání prvku pro množinu n prvků?",
      options: [
        { code: "A", content: "Θ(1), Θ(1), Θ(1)", correct: true },
        { code: "B", content: "Θ(n), Θ(n), Θ(n)", correct: false },
        { code: "C", content: "Θ(1), Θ(1), Θ(n)", correct: false },
        { code: "D", content: "Θ(log n), Θ(n), Θ(n)", correct: false },
      ],
      category: "Datové struktury",
      explanation:
        "U charakteristického vektoru je každý prvek reprezentován binární hodnotou na konkrétním indexu. Přístup k indexu je v konstantním čase, tedy Θ(1) pro všechny operace.",
    },
    {
      code: "Q12",
      content: "Pro dva disjunktní jevy platí, že",
      options: [
        { code: "A", content: "jsou vždy nezávislé", correct: false },
        { code: "B", content: "nemohou nikdy být nezávislé", correct: false },
        {
          code: "C",
          content:
            "mohou být nezávislé pouze tehdy, když alespoň jeden z jevů je nemožný",
          correct: true,
        },
        {
          code: "D",
          content: "žádná z ostatních odpovědí není správná",
          correct: false,
        },
      ],
      category: "Pravděpodobnost",
      explanation:
        "Disjunktní (neslučitelné) jevy mají nulový průnik. Aby mohly být zároveň nezávislé (což vyžaduje, aby jejich průnik byl součinem pravděpodobností), musí mít jeden z nich pravděpodobnost nula – tedy být nemožný.",
    },
    {
      code: "Q13",
      content: "Vyberte všechna správná tvrzení o aritmetických posunech:",
      options: [
        {
          code: "A",
          content:
            "aritmetický posuv vlevo o jeden bit odpovídá násobení dvěma",
          correct: true,
        },
        {
          code: "B",
          content:
            "aritmetický posuv vlevo o dva bity odpovídá násobení čtyřmi",
          correct: true,
        },
        {
          code: "C",
          content:
            "aritmetický posuv vpravo o jeden bit odpovídá násobení dvěma",
          correct: false,
        },
        {
          code: "D",
          content: "aritmetický posuv vpravo o jeden bit odpovídá dělení dvěma",
          correct: true,
        },
      ],
      category: "Zpracování bitů a instrukce",
      explanation:
        "Posun vlevo o jeden bit odpovídá násobení dvěma (posune všechny bity o jeden doprava), dva bity odpovídají násobení čtyřmi. Posun vpravo odpovídá dělení dvěma – zaokrouhluje dolů.",
    },
    {
      code: "Q14",
      content:
        "Sečtěte dvě osmibitová čísla FF a 01 vyjádřené v šestnáctkové soustavě pomocí 8bitové sčítačky s interpretací jako čísla v doplňkovém kódu. Jaký bude výsledek?",
      options: [
        { code: "A", content: "256 desítkově", correct: false },
        {
          code: "B",
          content:
            "Součet nelze správně zobrazit, nevejde se do 8 bitů (dochází k přetečení)",
          correct: false,
        },
        { code: "C", content: "0 desítkově", correct: true },
        { code: "D", content: "100 (šestnáctkově)", correct: false },
      ],
      category: "Aritmetika sčítání v binárních číslech",
      explanation:
        "FF (255) v doplňkovém kódu představuje −1, 01 je +1. Součet −1 + 1 = 0. Výsledek je tedy 0, bez přetečení a ve správném rozsahu 8 bitů.",
    },
    {
      code: "Q15",
      content:
        "Nechť A, B, C jsou nějaké množiny. Pokud je to možné, dosaďte za otazník v rovnosti A \\ (B ? C) = (A \\ B) ? C tak, aby rovnost platila (\\ je rozdíl množin).",
      options: [
        { code: "A", content: "\\", correct: false },
        { code: "B", content: "∪", correct: false },
        { code: "C", content: "∩", correct: false },
        {
          code: "D",
          content: "rovnost neplatí pro žádnou z uvedených operací",
          correct: true,
        },
      ],
      category: "Teorie množin",
      explanation:
        "Rovnost A \\ (B ? C) = (A \\ B) ? C neplatí obecně pro žádnou ze základních množinových operací – průnik, sjednocení ani rozdíl – protože se výsledky obou stran mohou lišit v různých případech.",
    },
    {
      code: "Q16",
      content:
        "Předpokládejme implementaci zásobníku pomocí statického pole. Jaké jsou složitosti operací test prázdnosti, vložení do zásobníku, odebrání z vrcholu zásobníku?",
      options: [
        { code: "A", content: "Θ(log n), Θ(n), Θ(n)", correct: false },
        { code: "B", content: "Θ(n), Θ(n), Θ(n)", correct: false },
        { code: "C", content: "Θ(1), Θ(1), Θ(1)", correct: true },
        { code: "D", content: "Θ(n), Θ(1), Θ(n)", correct: false },
      ],
      category: "Zásobníky a složitosti operací",
      explanation:
        "U zásobníku implementovaného statickým polem jsou všechny operace (push, pop, isEmpty) realizovány v konstantním čase Θ(1), protože jde pouze o posuny indexů bez nutnosti přesouvat prvky.",
    },
    {
      code: "Q17",
      content:
        "Sečtěte dvě osmibitová čísla 35 a 87 vyjádřená v šestnáctkové soustavě pomocí 8bitové sčítačky. Interpretace součtu (výstupu ze sčítačky) je:",
      options: [
        {
          code: "A",
          content: "256 (desítkově) za předpokladu, že jde o čísla nezáporná",
          correct: false,
        },
        {
          code: "B",
          content: "102 (desítkově) za předpokladu, že jde o čísla nezáporná",
          correct: true,
        },
        {
          code: "C",
          content:
            "236 (-4 desítkově) za předpokladu, že jde o čísla v doplňkovém kódu",
          correct: false,
        },
        {
          code: "D",
          content:
            "+36 (desítkově) za předpokladu, že jde o čísla v doplňkovém kódu",
          correct: false,
        },
      ],
      category: "Binární sčítání",
      explanation:
        "35 + 87 = 122 (v hexadecimální soustavě odpovídá to 0x23 + 0x57 = 0x7A = 122). Výsledek se vejde do 8 bitů a pokud interpretujeme čísla jako nezáporná (bez doplňkového kódu), výsledek je 102 desítkově.",
    },
    {
      code: "Q18",
      content:
        "Doplňte místo otazníku ten ze symbolů, aby platil vztah (lg n) / n = ?(1/√n):",
      options: [
        { code: "A", content: "O *", correct: false },
        {
          code: "B",
          content: "O (a současně nelze použít ani o ani Θ)",
          correct: false,
        },
        { code: "C", content: "Θ", correct: true },
        {
          code: "D",
          content: "Ω (a současně nelze použít ani Θ ani o)",
          correct: false,
        },
        { code: "E", content: "ω", correct: false },
      ],
      category: "Asymptotická složitost",
      explanation:
        "Funkce (lg n)/n je asymptoticky stejného řádu jako 1/√n (obě klesají pod 1 a jsou menší než 1). Platí (lg n)/n ∈ Θ(1/√n), což vyjadřuje stejnou asymptotickou složitost.",
    },
    {
      code: "Q19",
      content:
        "Sekvenční obvod popsaný konečným automatem typu Moore má 2 vstupy, 3 vnitřní proměnné a 4 výstupy. Na těchto 4 výstupech se mohou objevit nejvýše (vyberte jednu odpověď):",
      options: [
        {
          code: "A",
          content: "4 vzájemně různé čtveřice hodnot",
          correct: false,
        },
        {
          code: "B",
          content: "8 vzájemně různých čtveřic hodnot",
          correct: true,
        },
        {
          code: "C",
          content: "16 vzájemně různých čtveřic hodnot",
          correct: false,
        },
        {
          code: "D",
          content: "32 vzájemně různých čtveřic hodnot",
          correct: false,
        },
      ],
      category: "Konečné automaty a výstupy",
      explanation:
        "3 vnitřní proměnné znamenají 2³ = 8 stavů. U Mooreova automatu závisí výstup jen na stavu, tedy maximálně 8 různých čtveřic výstupů.",
    },
    {
      code: "Q20",
      content:
        "Mějme pole, které má n prvků (např. celých čísel). Pokud zvolíme nejlepší známý algoritmus pro nalezení nejmenšího prvku v poli, jak bude doba nalezení minimálního prvku (tj. počet potřebných operací) záviset na počtu prvků pole n?",
      options: [
        { code: "A", content: "lineárně", correct: true },
        { code: "B", content: "kvadraticky", correct: false },
        { code: "C", content: "logaritmicky", correct: false },
        {
          code: "D",
          content: "doba nalezení nezávisí na počtu prvků",
          correct: false,
        },
      ],
      category: "Algoritmy – hledání minima",
      explanation:
        "Pro nalezení nejmenšího prvku musíme projít celé pole a porovnat každý prvek. To vyžaduje n−1 porovnání, takže složitost je O(n), tedy lineární.",
    },
    {
      code: "Q21",
      content:
        "Výstup multiplexoru se dvěma datovými vstupy D0 a D1 a jedním řídicím vstupem E popíšeme výrazem:",
      options: [
        { code: "A", content: "./D0./E + D1.E", correct: false },
        { code: "B", content: "D0./E + D1.E", correct: true },
        { code: "C", content: "D0.E + D1.E", correct: false },
        { code: "D", content: "D0.D1.E", correct: false },
      ],
      category: "Logické obvody – multiplexory",
      explanation:
        "Multiplexor 2:1 vybírá mezi D0 a D1 na základě řídicího signálu E. Pokud E=0, výstupem je D0, jinak D1. To odpovídá logickému výrazu: D0·¬E + D1·E, což je možnost B.",
    },
    {
      code: "Q03",
      content: "Multiplikativní inverze čísla 3 modulo 6 je",
      options: [
        { code: "A", content: "-2", correct: false },
        { code: "B", content: "neexistuje", correct: true },
        { code: "C", content: "2", correct: false },
        { code: "D", content: "3", correct: false },
      ],
      category: "Teorie čísel – inverze modulo",
      explanation:
        "Multiplikativní inverze existuje pouze, pokud číslo a a modul m jsou nesoudělná čísla. GCD(3, 6) = 3 ≠ 1, proto 3 nemá inverzi modulo 6.",
    },
    {
      code: "Q13",
      content:
        "Zpracování binárního stromu v pořadí preorder se rozumí následující:",
      options: [
        {
          code: "A",
          content:
            "zpracují se prvky stromu ve stejném pořadí, v jakém byly do stromu vloženy",
          correct: false,
        },
        {
          code: "B",
          content:
            "zpracuje se nejprve levý podstrom, pak pravý podstrom a pak kořen",
          correct: false,
        },
        {
          code: "C",
          content: "zpracují se prvky stromu v uspořádání zleva doprava",
          correct: false,
        },
        {
          code: "D",
          content:
            "zpracuje se nejprve kořen, pak jeho levý podstrom a pak pravý podstrom",
          correct: true,
        },
      ],
      category: "Datové struktury – binární stromy",
      explanation:
        "Preorder (prefixový) průchod stromem znamená navštívit nejprve kořen, potom levý podstrom a nakonec pravý podstrom. To odpovídá možnosti D.",
    },
    {
      code: "Q12",
      content:
        "Funkce Ω - omega a O - omikron definují asymptotickou složitost. Které z uvedených tvrzení je pravdivé?",
      options: [
        { code: "A", content: "x^3 ∈ Ω(2^x)", correct: false },
        { code: "B", content: "2^x ∈ O(x^{20000})", correct: false },
        { code: "C", content: "1.8 · x + 600 · log₂(x) ∈ O(x)", correct: true },
      ],
      category: "Asymptotická složitost – notace O, Ω",
      explanation:
        "Výraz 1.8·x + 600·log₂(x) je asymptoticky lineární, protože logaritmický člen je asymptoticky menší než lineární. Celý výraz je tedy v O(x).",
    },
    {
      code: "Q17",
      content:
        "Je dán prostý neorientovaný graf G o n vrcholech a m hranách. Které z následujících tvrzení je pravdivé?",
      options: [
        {
          code: "A",
          content: "Když m > n, pak G je souvislý graf.",
          correct: false,
        },
        {
          code: "B",
          content: "Když m < n, pak G je nesouvislý graf.",
          correct: false,
        },
        {
          code: "C",
          content: "Když m = n, pak G obsahuje kružnici.",
          correct: false,
        },
        {
          code: "D",
          content: "Když m = n, pak G má aspoň dvě komponenty souvislosti.",
          correct: false,
        },
        {
          code: "E",
          content: "Když m < n, pak G nemá kružnici.",
          correct: true,
        },
      ],
      category: "Teorie grafů",
      explanation:
        "Neorientovaný graf bez kružnic je les. Každá komponenta souvislosti v lese se stromem má právě o jednu hranu méně než počet vrcholů. Pokud má graf m < n, nemůže obsahovat kružnici, protože strom má n-1 hran a každá přidaná hrana nad tento počet vytváří kružnici.",
    },
    {
      code: "Q31",
      content:
        "Najděte obecné řešení diferenční (rekursivní) rovnice: T(n + 2) - T(n + 1) - 6T(n) = 0 a určete asymptotickou rychlost jeho růstu (řád).",
      options: [
        { code: "A", content: "T(n) = Θ((-3)^n)", correct: false },
        { code: "B", content: "T(n) = Θ((-2)^n)", correct: false },
        { code: "C", content: "T(n) = Θ(n2^n)", correct: false },
        { code: "D", content: "T(n) = Θ(3^n)", correct: true },
        { code: "E", content: "T(n) = Θ(ln(n)(-2)^n)", correct: false },
      ],
      category: "Rekurentní rovnice",
      explanation:
        "Charakteristická rovnice k T(n + 2) - T(n + 1) - 6T(n) = 0 je r² - r - 6 = 0, s kořeny r = 3 a r = -2. Řešení má tvar T(n) = A·3^n + B·(-2)^n. Dominantní člen je Θ(3^n), protože roste nejrychleji.",
    },
  ],
};

export default Algoritmizace;
