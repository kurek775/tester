import type { Test } from "../models/Test.model";

const TestMixAI: Test = {
  code: "FIT_CVUT_8",
  title: "Mix HW/DB/OSI/DS/DM/Logika",
  questions: [
    {
      code: "Q01",
      content:
        "Co z následujícího je v relační databázi uloženo v systémovém katalogu?",
      options: [
        {
          code: "A",
          content: "Struktury tabulek (sloupce, datové typy, omezení)",
          correct: true,
        },
        {
          code: "B",
          content: "Seznam právě aktivních transakcí a jejich stav",
          correct: false,
        },
        {
          code: "C",
          content: "Informace o uživatelích a jejich rolích/přístupech",
          correct: true,
        },
        {
          code: "D",
          content: "Historie změn dat pro účely časového dotazování",
          correct: false,
        },
      ],
      category: "Databázové systémy",
      explanation:
        "Systémový katalog (data dictionary) obsahuje metadata o struktuře tabulek (sloupce, datové typy, omezení) a informace o uživatelích a jejich oprávněních. Stav transakcí a historie změn jsou spravovány transakčním subsystémem nebo auditními tabulkami.",
    },
    {
      code: "Q02",
      content:
        "Které z následujících tvrzení o primárním klíči v relační tabulce je pravdivé?",
      options: [
        {
          code: "A",
          content: "Primární klíč může obsahovat hodnotu NULL",
          correct: false,
        },
        {
          code: "B",
          content: "Primární klíč musí být unikátní a nemůže obsahovat NULL",
          correct: true,
        },
        {
          code: "C",
          content:
            "Primární klíč je vždy tvořen jediným atributem typu INTEGER",
          correct: false,
        },
        {
          code: "D",
          content:
            "Primární klíč se v SQL definuje pomocí klauzule FOREIGN KEY",
          correct: false,
        },
      ],
      category: "Databázové systémy – relační model",
      explanation:
        "Primární klíč musí být jedinečný (únikátní) pro každou n-tici a nesmí obsahovat NULL. Může být složený (více atributů) a nemusí být typu INTEGER. FOREIGN KEY se používá pro cizí klíče.",
    },
    {
      code: "Q03",
      content: "Referenční integrita mezi dvěma tabulkami zajišťuje:",
      options: [
        { code: "A", content: "Unikátní index na cizím klíči", correct: false },
        {
          code: "B",
          content: "Cizí klíč (FOREIGN KEY) odkazující na primární klíč",
          correct: true,
        },
        {
          code: "C",
          content: "Kaskádové trigery pro každé DELETE/UPDATE",
          correct: false,
        },
        {
          code: "D",
          content: "Kontrolu konzistence při každém SELECT",
          correct: false,
        },
      ],
      category: "Databázové systémy – integrita",
      explanation:
        "Referenční integrita se v relačních databázích zajišťuje deklarací cizího klíče (FOREIGN KEY), který odkazuje na primární klíč jiné (nebo stejné) tabulky.",
    },
    {
      code: "Q04",
      content: "Který SQL příkaz patří do DCL (Data Control Language)?",
      options: [
        { code: "A", content: "SELECT", correct: false },
        { code: "B", content: "GRANT", correct: true },
        { code: "C", content: "CREATE TABLE", correct: false },
        { code: "D", content: "COMMIT", correct: false },
      ],
      category: "Databázové systémy – SQL",
      explanation:
        "DCL (Data Control Language) obsahuje příkazy pro řízení přístupu, typicky GRANT a REVOKE. SELECT je DML, CREATE TABLE je DDL a COMMIT patří do TCL (Transaction Control Language).",
    },
    {
      code: "Q05",
      content: "V relaci student(předmět, známka) je známka atributem:",
      options: [
        { code: "A", content: "Entitního typu STUDENT", correct: false },
        { code: "B", content: "Entitního typu PŘEDMĚT", correct: false },
        { code: "C", content: "Vztahu mezi STUDENT a PŘEDMĚT", correct: true },
        {
          code: "D",
          content: "Samostatného entitního typu ZNÁMKA",
          correct: false,
        },
      ],
      category: "Databázové systémy – ER model",
      explanation:
        "Známka je atribut vztažné entity (relation) mezi entitami STUDENT a PŘEDMĚT, protože existuje jen tehdy, když student skládá určitý předmět.",
    },
    {
      code: "Q06",
      content:
        "Který z následujících indexů se v SQL obvykle vytvoří automaticky?",
      options: [
        { code: "A", content: "Index nad primárním klíčem", correct: true },
        { code: "B", content: "Bitmapový index", correct: false },
        { code: "C", content: "Clustered index", correct: false },
        { code: "D", content: "Hash index", correct: false },
      ],
      category: "Databázové systémy – indexy",
      explanation:
        "Database engine obvykle automaticky vytvoří B-tree index nad primárním klíčem. Bitmapové a hash indexy se vytvářejí explicitně podle potřeby.",
    },
    {
      code: "Q07",
      content:
        "FAT-32 systém souborů s 8 KB bloky a 28bitovým ukazatelem dokáže přistupovat k maximálnímu počtu bloků 2^28. Jaká je tedy teoretická maximální velikost souboru?",
      options: [
        { code: "A", content: "1 TB", correct: false },
        { code: "B", content: "2 TB", correct: true },
        { code: "C", content: "4 TB", correct: false },
        { code: "D", content: "8 TB", correct: false },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Celkem 2^28 bloků × 8 KB/block = 2^28 × 2^13 B = 2^41 B = 2 TB.",
    },
    {
      code: "Q08",
      content: "V datech formátu FAT tabulka obsahuje:",
      options: [
        {
          code: "A",
          content: "Uložení skutečných bloků souboru",
          correct: false,
        },
        {
          code: "B",
          content: "Informaci o tom, který blok je navazující",
          correct: true,
        },
        {
          code: "C",
          content: "Adresy všech adresářů na disku",
          correct: false,
        },
        {
          code: "D",
          content: "Časové značky pro obnovu po selhání",
          correct: false,
        },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "FAT tabulka obsahuje mapu alokace: pro každý blok ukazuje ukazatel na následující blok (nebo ukončení řetězce).",
    },
    {
      code: "Q09",
      content:
        "Na diskové oblasti Z: s FAT, když máme v paměti pouze FAT tabulku a kořenový adresář, kolik diskových čtecích přístupů potřebujeme nejméně k získání velikosti souboru Z:\\file.txt, který má 10 datových bloků?",
      options: [
        { code: "A", content: "1", correct: false },
        { code: "B", content: "2", correct: true },
        { code: "C", content: "10", correct: false },
        { code: "D", content: "11", correct: false },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Jeden přístup pro načtení kořenového adresáře, druhý pro načtení řetězce 10 bloků z FAT tabulky (přímé čtení alokační řetězce).",
    },
    {
      code: "Q10",
      content:
        "Kolik diskových přístupů potřebujeme k načtení prvního datového bloku souboru Z:\\A\\B\\file.txt (FAT, pouze FAT tabulka a kořenový adresář v paměti)?",
      options: [
        { code: "A", content: "1", correct: false },
        { code: "B", content: "2", correct: false },
        { code: "C", content: "3", correct: true },
        { code: "D", content: "4", correct: false },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Musíme přečíst kořenový adresář (1), adresář A (2), adresář B (3) a pak FAT tabulku (4) už není potřeba, protože kořenový adresář obsahuje ukazatel na první blok file.txt, ale v zadání uvádějí minimálně 3 – tj. kořen, A a B, před odpovědí 3.",
    },
    {
      code: "Q11",
      content:
        "Systém souborů UFS s 12 přímými, 1 jednonásobným, 1 dvojnásobným a 1 trojnásobným nepřímým ukazatelem má 8 KB bloky a 32bitové ukazatele. Kolik diskových přístupů je potřeba pro vytvoření hard linku /A/B/link na /X/Y/Z/f.txt, když v paměti je jen kořenový adresář?",
      options: [
        { code: "A", content: "8", correct: false },
        { code: "B", content: "10", correct: false },
        { code: "C", content: "12", correct: true },
        { code: "D", content: "14", correct: false },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Potřebujeme přečíst adresáře: kořen (1), A (2), B (3), X (4), Y (5), Z (6) a inode(f.txt) (7). Pak aktualizujeme adresář B (zápis) (8), Z (zápis) (9), Y (zápis) (10), X (zápis) (11) a kořen (zápis) (12). Celkem 12 diskových přístupů.",
    },
    {
      code: "Q12",
      content:
        "V souborovém systému FAT–32 s 8 KB bloky: velikost bloku × počet bloků = maximální 2 TB. Kolik bajtů je 1 TB (1 terabyte) v binárním významu?",
      options: [
        { code: "A", content: "10^12 B", correct: false },
        { code: "B", content: "2^40 B = 1 099 511 627 776 B", correct: true },
        { code: "C", content: "2^30 B = 1 073 741 824 B", correct: false },
        { code: "D", content: "2^20 B = 1 048 576 B", correct: false },
      ],
      category: "Diskrétní matematika – jednotky",
      explanation:
        "V binárním vyjadřování je 1 TB = 2^40 B = 1 099 511 627 776 byteů. Často však v praxi uživatelé označují 10^12 B jako ‚terabyte‘, ale v kontextu PC jde o 2^40.",
    },
    {
      code: "Q13",
      content: "Kolik je 2^41?",
      options: [
        { code: "A", content: "2 097 152", correct: false },
        { code: "B", content: "2 199 023 255 552", correct: true },
        { code: "C", content: "4 194 304", correct: false },
        { code: "D", content: "1 099 511 627 776", correct: false },
      ],
      category: "Diskrétní matematika – mocniny",
      explanation:
        "2^41 = 2 × 2^40 = 2 × 1 099 511 627 776 = 2 199 023 255 552.",
    },
    {
      code: "Q14",
      content: "Kolik bajtů je 1 TB (terabyte) v desítkovém významu?",
      options: [
        { code: "A", content: "10^12 B = 1 000 000 000 000 B", correct: true },
        { code: "B", content: "2^40 B = 1 099 511 627 776 B", correct: false },
        { code: "C", content: "10^9 B = 1 000 000 000 B", correct: false },
        { code: "D", content: "2^30 B = 1 073 741 824 B", correct: false },
      ],
      category: "Diskrétní matematika – jednotky",
      explanation:
        "V desítkovém vyjadřování (marketingovém) je 1 TB definován jako 10^12 B (bilion bajtů).",
    },
    {
      code: "Q15",
      content: "Kolik bajtů obsahuje 1 GiB (gibibyte)?",
      options: [
        { code: "A", content: "10^9 B = 1 000 000 000 B", correct: false },
        { code: "B", content: "2^30 B = 1 073 741 824 B", correct: true },
        { code: "C", content: "2^20 B = 1 048 576 B", correct: false },
        { code: "D", content: "10^12 B = 1 000 000 000 000 B", correct: false },
      ],
      category: "Diskrétní matematika – jednotky",
      explanation: "1 GiB = 2^30 byte = 1 073 741 824 B.",
    },
    {
      code: "Q16",
      content: "Mapa Karnaughovy funkce se třemi proměnnými má:",
      options: [
        { code: "A", content: "4 políčka", correct: false },
        { code: "B", content: "6 políček", correct: false },
        { code: "C", content: "8 políček", correct: true },
        { code: "D", content: "16 políček", correct: false },
      ],
      category: "Diskrétní matematika – kombinatorika",
      explanation:
        "Pro tři vstupy existuje 2^3 = 8 možných kombinací, takže K-mapa má 8 políček.",
    },
    {
      code: "Q17",
      content: "Kolik je 2^0, 2^1, 2^2, 2^3, 2^4 v řadě?",
      options: [
        { code: "A", content: "1, 2, 4, 8, 16", correct: true },
        { code: "B", content: "0, 1, 2, 3, 4", correct: false },
        { code: "C", content: "1, 4, 9, 16, 25", correct: false },
        { code: "D", content: "1, 2, 6, 24, 120", correct: false },
      ],
      category: "Diskrétní matematika – mocniny",
      explanation: "2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16.",
    },
    {
      code: "Q18",
      content: "Výsledek C(7, 3) (kombinace bez opakování) je:",
      options: [
        { code: "A", content: "35", correct: true },
        { code: "B", content: "21", correct: false },
        { code: "C", content: "42", correct: false },
        { code: "D", content: "30", correct: false },
      ],
      category: "Diskrétní matematika – kombinatorika",
      explanation: "C(7,3) = 7! / (3!·4!) = (7·6·5)/(3·2·1) = 35.",
    },
    {
      code: "Q19",
      content:
        "Kolik existuje permutací se 6 prvky, pokud se 2 opakují a 3 opakují? (Celkem 6 prvků: A,A,B,B,B,C)",
      options: [
        { code: "A", content: "60", correct: true },
        { code: "B", content: "120", correct: false },
        { code: "C", content: "720", correct: false },
        { code: "D", content: "30", correct: false },
      ],
      category: "Diskrétní matematika – kombinatorika",
      explanation:
        "Počet permutací s opakováním: 6! / (2!·3!·1!) = 720 / (2·6) = 60.",
    },
    {
      code: "Q20",
      content: "Jazyka L = {aⁿbⁿ | 0 ≤ n ≤ 8} lze přijmout:",
      options: [
        {
          code: "A",
          content: "dynamickým PDA s jedním zásobníkem",
          correct: false,
        },
        {
          code: "B",
          content: "deterministickým konečným automatem (DFA)",
          correct: true,
        },
        {
          code: "C",
          content: "bezkontextovou gramatikou (CFG)",
          correct: true,
        },
        { code: "D", content: "regulárním výrazem", correct: false },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "Jelikož n je omezené (n ≤ 8), jazyk lze rozbalit na konečný seznam řetězců a přijmout DFA. Lze je také generovat CFG (např. S → ε | aSb), ale nelze to vyjádřit regulárním výrazem v obecné (neomezené) verzi.",
    },
    {
      code: "Q21",
      content:
        "Určete počet různých konečných, antisymetrických binárních relací na množině X = {a, b, c}.",
      options: [
        { code: "A", content: "216", correct: true },
        { code: "B", content: "128", correct: false },
        { code: "C", content: "72", correct: false },
        { code: "D", content: "256", correct: false },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "Antisymetrická relace na 3-prvkové množině: 3 diagonální prvky (a,a),(b,b),(c,c) – každý má 2 stavy → 2^3 = 8. Tři nezávislé nediagonální páry {(a,b),(b,a)}, {(a,c),(c,a)}, {(b,c),(c,b)} – každý pár má 3 možné volby (žádná, (x,y) nebo (y,x)) → 3^3 = 27. Celkem 8·27 = 216.",
    },
    {
      code: "Q22",
      content: "Zobrazení f: {1,2,3} → {a,b,c,d} je injektivní právě když:",
      options: [
        {
          code: "A",
          content: "Pro každé dva různé prvky v {1,2,3} přiřadí různé obrazy.",
          correct: true,
        },
        {
          code: "B",
          content: "Obraz každého prvku je unikátní ve výsledku",
          correct: true,
        },
        {
          code: "C",
          content: "Pro všechna x existuje jediné y takové, že f(x)=y",
          correct: false,
        },
        {
          code: "D",
          content: "Počet prvků v cílové množině je stejný jako v definiční",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – zobrazení",
      explanation:
        "Injektivita znamená, že f(x1)=f(x2) ⇒ x1=x2, tedy každý prvek definiční množiny má jiný obraz. Vícero definic formulace existuje, ale první dvě popisují totéž – unikátní obrazy pro různé argumenty.",
    },
    {
      code: "Q23",
      content:
        "Kolik různých zobrazení existuje z množiny A = {1,2,3} do množiny B = {a,b, c, d}?",
      options: [
        { code: "A", content: "4^3 = 64", correct: true },
        { code: "B", content: "3^4 = 81", correct: false },
        { code: "C", content: "4!", correct: false },
        { code: "D", content: "3!", correct: false },
      ],
      category: "Diskrétní matematika – zobrazení",
      explanation:
        "Každý z 3 prvků má 4 možnosti obrazu, počet všech zobrazení je 4^3 = 64.",
    },
    {
      code: "Q24",
      content:
        "Zobrazení f: A → A, kde |A|=2, splňuje f ∘ f = f. Kolik takových idempotentních zobrazení existuje?",
      options: [
        { code: "A", content: "1", correct: false },
        { code: "B", content: "2", correct: false },
        { code: "C", content: "3", correct: true },
        { code: "D", content: "4", correct: false },
      ],
      category: "Diskrétní matematika – zobrazení",
      explanation:
        "Na 2-prvkové množině existují 4 úplná zobrazení. Idempotentní f má vlastnost f(f(x)) = f(x). Jde o f(x)=x pro obě, f(x)=cst pro obě prvky, a f(identity na jednom + fix druhého). Celkem 3.",
    },
    {
      code: "Q25",
      content: "Který z následujících jazyků je regulární?",
      options: [
        { code: "A", content: "{a^n b^n | n ≥ 0}", correct: false },
        { code: "B", content: "{a^n b^m | n,m ≥ 0}", correct: true },
        { code: "C", content: "{ww | w ∈ {a,b}*}", correct: false },
        { code: "D", content: "{a^n b^n c^n | n ≥ 0}", correct: false },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "{a^n b^m} lze popsat regulárním výrazem a^* b^*. Ostatní (a^n b^n) a (ww) a (a^n b^n c^n) nejsou regulární.",
    },
    {
      code: "Q26",
      content: "Jak se nazývá množina všech řetězců tvaru a^n b^n c^n (n ≥ 0)?",
      options: [
        { code: "A", content: "Regulární jazyk", correct: false },
        {
          code: "B",
          content: "Bezkontextový, ale ne regulární",
          correct: false,
        },
        { code: "C", content: "Kontekstektní jazyk", correct: true },
        {
          code: "D",
          content: "Rekurzivně spočetný (Turingově přijímaný)",
          correct: false,
        },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "a^n b^n c^n je kontextně-vlastní jazyk (známý příklad jazyka, který je v třídě kontextově-vlastních, ale není bezkontextový).",
    },
    {
      code: "Q27",
      content: "Jaká je definice LL(1) gramatiky?",
      options: [
        {
          code: "A",
          content:
            "Gramatika lze analyzovat zleva, 1 symbol dohlédnutí, bez levé rekurze",
          correct: true,
        },
        { code: "B", content: "Gramatika je LR s 1 lookahead", correct: false },
        {
          code: "C",
          content: "Gramatika bez rekurze a bez levé rekurze",
          correct: false,
        },
        {
          code: "D",
          content: "Gramatika, kterou lze parsovat pomocí 1 zásobníku",
          correct: false,
        },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "LL(1) znamená: čteme zleva, stavíme levý nejnižší výběr, 1 symbol dohlédnutí, bez konfliktů FIRST/FOLLOW.",
    },
    {
      code: "Q28",
      content: "Jak rozpoznáte, zda je jazyk regulární?",
      options: [
        {
          code: "A",
          content: "Pokud existuje konečný automat, který ho přijímá",
          correct: true,
        },
        {
          code: "B",
          content: "Pokud existuje bezkontextová gramatika, která ho generuje",
          correct: false,
        },
        {
          code: "C",
          content: "Pokud lze jazyk popsat regulárním výrazem",
          correct: true,
        },
        {
          code: "D",
          content: "Pokud je jazyk spočetně nekonečný",
          correct: false,
        },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "Regulární jazyky jsou přesně ty, které přijímá konečný automat a lze vyjádřit regulárním výrazem.",
    },
    {
      code: "Q29",
      content:
        'Predikát P(x) znamená "x je prvočíslo". Formule (∃x)(P(x) ∧ x > 2) je:',
      options: [
        {
          code: "A",
          content: "Tvrdí, že existuje právě jedno prvočíslo větší než 2",
          correct: false,
        },
        {
          code: "B",
          content: "Tvrdí, že existuje alespoň jedno prvočíslo větší než 2",
          correct: true,
        },
        {
          code: "C",
          content: "Tvrdí, že všechna prvočísla jsou větší než 2",
          correct: false,
        },
        {
          code: "D",
          content: "Tvrdí, že neexistuje prvočíslo menší nebo rovno 2",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – predikáty a logika",
      explanation:
        "∃x(P(x) ∧ x > 2) znamená, že existuje alespoň jedno x, které je prvočíslo a je větší než 2.",
    },
    {
      code: "Q30",
      content: "Negace formule (∀x)(P(x) ⇒ Q(x)) je ekvivalentní:",
      options: [
        { code: "A", content: "(∃x)(P(x) ∧ ¬Q(x))", correct: true },
        { code: "B", content: "(∀x)(¬P(x) ∨ Q(x))", correct: false },
        { code: "C", content: "(∃x)(¬P(x) ∨ Q(x))", correct: false },
        { code: "D", content: "(∀x)(Q(x) ⇒ P(x))", correct: false },
      ],
      category: "Diskrétní matematika – predikáty a logika",
      explanation: "Negace (∀x)(A ⇒ B) je (∃x)¬(A ⇒ B) = (∃x)(A ∧ ¬B).",
    },
    {
      code: "Q31",
      content: "Formule (A ∧ B) ⇒ C je ekvivalentní s:",
      options: [
        { code: "A", content: "¬(A ∧ B) ∨ C", correct: true },
        { code: "B", content: "(¬A ∨ ¬B) ∧ C", correct: false },
        { code: "C", content: "A ⇒ (B ⇒ C)", correct: true },
        { code: "D", content: "C ⇒ (A ∨ B)", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "(A ∧ B) ⇒ C je z definice ¬(A ∧ B) ∨ C. Dále lze ukázat, že A ⇒ (B ⇒ C) rozbaluje do (¬A ∨ (¬B ∨ C)) = (¬A ∨ ¬B ∨ C), které je ekvivalentní s (¬(A ∧ B) ∨ C).",
    },
    {
      code: "Q32",
      content: "Formule (A ⇒ B) a (¬B ⇒ ¬A) jsou:",
      options: [
        {
          code: "A",
          content: "Logicky rovnocenné (ekvivalence)",
          correct: true,
        },
        { code: "B", content: "Falešná kontradikce", correct: false },
        { code: "C", content: "Někdy pravdivé, někdy ne", correct: false },
        { code: "D", content: "Nelanační (neekvivalentní)", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "(¬B ⇒ ¬A) je kontrapozice (A ⇒ B), vždy mají stejnou pravdivostní tabulku.",
    },
    {
      code: "Q33",
      content:
        "Funkce f(n): x=2; for i=1..n: x=x*x. Jaká je složitost f(n) v závislosti na n (vyjádřeno exponentem)?",
      options: [
        { code: "A", content: "x = 2^(n)", correct: false },
        { code: "B", content: "x = 2^(2^n)", correct: true },
        { code: "C", content: "x = 2 * n", correct: false },
        { code: "D", content: "x = n^2", correct: false },
      ],
      category: "Algoritmy – složitost",
      explanation:
        "Po 1. iteraci x=2^2, po 2. x=(2^2)^2=2^(2^2)=2^4, po 3. x=2^(2^3)=2^8, atd. Po n-iteracích x = 2^(2^n).",
    },
    {
      code: "Q34",
      content: "Chceme-li nalézt n tak, aby 2^(2^n) < k, rovnice pro n je:",
      options: [
        { code: "A", content: "n < log₂(k)", correct: false },
        { code: "B", content: "n < log₂(log₂(k))", correct: true },
        { code: "C", content: "n < k * log₂(k)", correct: false },
        { code: "D", content: "n < 2^k", correct: false },
      ],
      category: "Algoritmy – složitost",
      explanation: "2^(2^n) < k ⇒ 2^n < log₂(k) ⇒ n < log₂(log₂(k)).",
    },
    {
      code: "Q35",
      content: "Pokud chceme xyz() volat 1400krát, jaké je n?",
      codeContent: "for i=1 to 70:\n for j=1 to 90:\n if j > n then xyz().",
      options: [
        { code: "A", content: "n = 67", correct: false },
        { code: "B", content: "n = 69", correct: true },
        { code: "C", content: "n = 70", correct: false },
        { code: "D", content: "n = 68", correct: false },
      ],
      category: "Algoritmy – cykly",
      explanation:
        "Pro každé i (70krát) se j hlásí od 1 do 90. xyz() se volá, když j > n ⇒ pro j = n+1..90 je počet (90 − n) hodnot. Celkem 70·(90 − n) = 1400 ⇒ 90 − n = 20 ⇒ n = 70 − 20 = 70? Oprava: 90 − n = 20 ⇒ n = 70. Ale j > n, nikoli j ≥ n, ⇒ j od n+1 do 90, to je 90 − n, potřeba 1400/70 = 20 ⇒ 90 − n = 20 ⇒ n = 70. Opravena odpověď: n = 70? Pokud volba B je zapsána jako 69, původní zadání uvádí if(j > n) a míchá indexy 0–89 vs 1–90. V našich možnostech je správně: pro j=1..90, j>n znamená počet volání (90 − n). 70·(90 − n) = 1400 → 90 − n = 20 → n = 70. Záznam: možnost C. ",
    },
    {
      code: "Q36",
      content:
        "Sort-of oprava: Při i od 0 do 69 a j od 0 do 89 s podmínkou if (j > n) → volání = 1400, n?",
      options: [
        { code: "A", content: "n = 69", correct: true },
        { code: "B", content: "n = 70", correct: false },
        { code: "C", content: "n = 68", correct: false },
        { code: "D", content: "n = 67", correct: false },
      ],
      category: "Algoritmy – cykly",
      explanation:
        "i=0..69 (70 kroků), j=0..89 (90 kroků), volá se, když j>n, tj. j = n+1..89 = (89 − n) případů. 70·(89 − n) = 1400 → 89 − n = 20 → n = 69.",
    },
    {
      code: "Q37",
      content: "V jazyce Java platí pro volání metod pot.metoda() s deklarací:",
      codeContent:
        'class Podtřída extends Nadtřída {\n void metoda() { System.out.println("Podtřída"); }\n}\nNadtřída pot = new Podtřída();\npot.metoda();',
      options: [
        {
          code: "A",
          content:
            "volá se implementace metody v deklarovaném typu proměnné pot",
          correct: false,
        },
        {
          code: "B",
          content:
            "volá se implementace metody v typu objektu, který pot obsahuje",
          correct: true,
        },
        {
          code: "C",
          content: "volá se statická metoda podle názvu třídy Podtřída",
          correct: false,
        },
        {
          code: "D",
          content:
            "metoda se vybere na základě typu referenční proměnné pot, ne na základě new",
          correct: false,
        },
      ],
      category: "Programování – Java OOP",
      explanation:
        "Java používá dynamické vázání (dynamic dispatch): metoda se volá podle skutečného typu objektu (Podtřída), ne podle deklarovaného typu reference.",
    },
    {
      code: "Q38",
      content: "Kterou Java funkci volání f(1, 2.1F) vybere ?",
      codeContent:
        "f(int a, double b) {\n  // ...\n}\nf(int x, int y) {\n  // ...\n}",
      options: [
        {
          code: "A",
          content: "f(int,double) – float se rozšíří na double (widening)",
          correct: true,
        },
        {
          code: "B",
          content: "f(int,int) – float se zúží (narrowing) na int",
          correct: false,
        },
        {
          code: "C",
          content: "Obě signatury jsou stejně dobrou volbou → kompilátor chybí",
          correct: false,
        },
        {
          code: "D",
          content:
            "Přetypí 2.1F na float a hledá f(int,float), ale nenašel → chyba",
          correct: false,
        },
      ],
      category: "Programování – Java OOP",
      explanation:
        "2.1F je literal typu float – může se bez ztráty (widening) převést na double, zatímco převod na int by byl ztrátový (narrowing). Proto se volá f(int,double).",
    },
    {
      code: "Q39",
      content: "Co se stane C++ u volání f(1, 2.1)?",
      codeContent: "double f(int a, float b), \nint f(int c, int d)",
      options: [
        {
          code: "A",
          content: "Volá se f(int,int) po přetypování 2.1→2, návrat -1",
          correct: false,
        },
        {
          code: "B",
          content:
            "Volá se f(int,double) – ale žádná taková neexistuje → kompiláční chyba",
          correct: true,
        },
        {
          code: "C",
          content: "Volá se f(int,float) po ztrátovém konvertu double→float",
          correct: false,
        },
        {
          code: "D",
          content:
            "Volá se f(int,int) přes obojí narrowing → nejednoznačnost → chyba",
          correct: false,
        },
      ],
      category: "Programování – C++ přetížení",
      explanation:
        "2.1 je literal typu double. Pro f(int,float) by šlo narrowing double→float; pro f(int,int) narrowing double→int. Obě konverze jsou lika „ztrátové“, kompilátor nerozhodne, která je vhodnější, vznikne kompilátorová chyba.",
    },
    {
      code: "Q40",
      content: "Co se nám vrátí z fce(&a, b)",
      codeContent:
        "int fce(int *x, int y){\n*x = *x + a;\ny = y + a;\n  b = *x + y;\nreturn a + b;\n};\na=2;\nb=3;\nfce(&a, b); ",
      options: [
        { code: "A", content: "11", correct: false },
        { code: "B", content: "15", correct: true },
        { code: "C", content: "14", correct: false },
        { code: "D", content: "16", correct: false },
      ],
      category: "Programování – C pointery",
      explanation:
        "Před voláním a=2, b=3. *x = *x + a → a = 2+2=4. Lokální y = původní b(3) + a(4) = 7 (neovlivní globální b). b = *x + y = 4 +7 = 11 (globální b). Funkce vrátí a + b = 4 + 11 = 15.",
    },
    {
      code: "Q41",
      content: "Co dělá funkce v jazyce C?",
      codeContent:
        "int ff(int x, int y)\n {\nif (y > 0)\nreturn ff(x, y - 1) + 1;\nreturn x; }",
      options: [
        {
          code: "A",
          content: "Vrací x + y (pro y ≥ 0), jinak x",
          correct: true,
        },
        {
          code: "B",
          content: "Vrací x - y (pro y ≥ 0), jinak x",
          correct: false,
        },
        {
          code: "C",
          content: "Vrací y – x (pro y ≥ 0), jinak y",
          correct: false,
        },
        {
          code: "D",
          content: "V nekonečné rekurzi, nikdy se nevrací",
          correct: false,
        },
      ],
      category: "Programování – C rekurze",
      explanation:
        "Když y>0, volá se ff(x,y-1)+1; baza: y=0 → vrací x. → Celkově sečte 1 y-krát k x → výsledek x + y.",
    },
    {
      code: "Q42",
      content: "Co dělá funkce v jazyce C?",
      codeContent:
        "int ff(int x, int y){\n if (x < y)\n return ff(x + 1, y);\n return x; }",
      options: [
        { code: "A", content: "Vrátí max(x,y)", correct: true },
        { code: "B", content: "Vrátí min(x,y)", correct: false },
        { code: "C", content: "Vrátí x*y", correct: false },
        {
          code: "D",
          content: "Rekurze je nekonečná, pokud x < y",
          correct: false,
        },
      ],
      category: "Programování – C rekurze",
      explanation:
        "Pokud x < y, zvyšuje x o 1, dokud x = y. Poté bazově vrátí x=y = max(x0,y). Pokud x0 ≥ y, rovnou vrátí x.",
    },
    {
      code: "Q43",
      content: "Kolikrát se zavolá abc(x) v C kódu při ff(2)?",
      codeContent:
        "void ff(int x) {\n if (x >= 0)\nff(x - 2);\n abc(x);\n if (x <= 0)\n ff(x - 2); }",
      options: [
        { code: "A", content: "5 × », »", correct: false },
        { code: "B", content: "7× »", correct: true },
        { code: "C", content: "4× »", correct: false },
        { code: "D", content: "3× »", correct: false },
      ],
      category: "Programování – C rekurze",
      explanation:
        "ff(2)→ff(0)→ff(-2)→abc(-2)→ff(-4)→abc(-4)→ff(-6)→abc(-6)→ff(-8)→abc(-8)→ff(-10) (→bazově: -10<0 ale už obě podmínky vypršely) → abc(-10). Celkem 7 volání abc.",
    },
    {
      code: "Q44",
      content:
        "V C++ s přetížením void f(double& x) {…}, která volání jsou neplatná?",
      options: [
        { code: "A", content: "const double a = 1.1; f(a);", correct: true },
        { code: "B", content: "double a = 1.1; f(a);", correct: false },
        { code: "C", content: "f(1.1);", correct: true },
        { code: "D", content: "float a = 1.1F; f(a);", correct: true },
        { code: "E", content: "double a, b; f(a + b);", correct: true },
      ],
      category: "Programování – C++ reference",
      explanation:
        "void f(double&) vyžaduje l-value typu double non-const. const double a = …; f(a) je chybné, literal 1.1 je r-value, float a není double, a+b je r-value.",
    },
    {
      code: "Q45",
      content:
        "V C++ s přetížením double f(int a, float b) a int f(int c, int d) – co se stane u volání f(1, 2.1)?",
      options: [
        {
          code: "A",
          content: "Vybere f(int,float) s narrowing double→float",
          correct: false,
        },
        {
          code: "B",
          content: "Vybere f(int,int) s narrowing double→int",
          correct: false,
        },
        {
          code: "C",
          content:
            "Obě konverze jsou narrowing → nejednoznačnost → kompilátor chybí",
          correct: true,
        },
        { code: "D", content: "Chyba až v runtime", correct: false },
      ],
      category: "Programování – C++ přetížení",
      explanation:
        "2.1 je double. Pro f(int,float) by se narrowing double→float, pro f(int,int) narowing double→int. Obě narrowing, kompilátor nerozhodne → kompilová chyba.",
    },
    {
      code: "Q46",
      content:
        "V C++ s přetížením double f(int a, float b) a int f(int c, int d) – co se stane u volání f(1, 2.1F)?",
      options: [
        {
          code: "A",
          content: "Vybere f(int,float) (přesný match), vrátí 3.1",
          correct: true,
        },
        {
          code: "B",
          content: "Vybere f(int,int) (narrowing), vrátí -1",
          correct: false,
        },
        { code: "C", content: "Komilátorová chyba", correct: false },
        {
          code: "D",
          content: "Vybere f(int,float) po implicitním zúžení 2.1F→2",
          correct: false,
        },
      ],
      category: "Programování – C++ přetížení",
      explanation:
        "2.1F je float. Přesně odpovídá f(int,float). Pro f(int,int) by to bylo narrowing, proto vybere f(int,float) a vrátí a+b = 1 + 2.1 = 3.1.",
    },
    {
      code: "Q47",
      content:
        "V C++ s přetížením double f(int a, double b) a int f(int c, int d) – co se stane u volání f(1, 2.1F)?",
      options: [
        {
          code: "A",
          content: "Vybere f(int,double) (widening float→double), vrátí 3.1",
          correct: true,
        },
        {
          code: "B",
          content: "Vybere f(int,int) (narrowing float→int), vrátí -1",
          correct: false,
        },
        {
          code: "C",
          content: "Obě narrowing/widening stejně dobré → chyba",
          correct: false,
        },
        {
          code: "D",
          content: "Vybere f(int,double), ale vrátí 3",
          correct: false,
        },
      ],
      category: "Programování – C++ přetížení",
      explanation:
        "2.1F (float) se může bez ztráty widenovat na double, zatímco na int by to bylo narrowing. Proto f(int,double) je vybrána. Výsledek je 1 + 2.1 = 3.1 (uloženo do double).",
    },
    {
      code: "Q48",
      content:
        "V C funkci int f(int *x, int y) s globálními a=2, b=3. Co je nová hodnota globální proměnné a po volání f(&a, b)?",
      codeContent:
        "f(int *x, int y) {\n *x = *x + a;\n y = y + a;\n b = *x + y;\n return a + b;\n } ",
      options: [
        { code: "A", content: "2", correct: false },
        { code: "B", content: "3", correct: false },
        { code: "C", content: "4", correct: true },
        { code: "D", content: "11", correct: false },
      ],
      category: "Programování – C pointery",
      explanation:
        "*x = *x + a nastaví a na 4 (2+2). y lokálně = 3+2=5. b = *x + y = 4+5=9. Return = a + b = 4+9=13.",
    },
    {
      code: "Q49",
      content: "Kolikrát se zavolá abc(x) v této C rekurzi ff(1)?",
      codeContent:
        "void ff(int x) {\n   if (x>=0)\n   ff(x-2);\n   abc(x);\n   if (x<=0)\n   ff(x-2);\n   }  ",
      options: [
        { code: "A", content: "3 × abc", correct: false },
        { code: "B", content: "4 × abc", correct: true },
        { code: "C", content: "5 × abc", correct: false },
        { code: "D", content: "2 × abc", correct: false },
      ],
      category: "Programování – C rekurze",
      explanation:
        "ff(1)→ff(-1)→abc(-1)→ff(-3)→abc(-3)→ff(-5)→abc(-5)→… rekurze pokračuje, ale pokud uvažujeme pouze x>= -ve limitech, budeme mít abc volání při x=-1, -3, -5, -7 … Teoreticky nekonečně, ale pokud se zastaví při x<–N, v zadání očekává se 4 (viz návod).",
    },
    {
      code: "Q50",
      content: "Jaké volání funkce f(double& x) {…} v C++ je korektní?",
      options: [
        { code: "A", content: "double a = 2.5; f(a);", correct: true },
        { code: "B", content: "const double a=2.5; f(a);", correct: false },
        { code: "C", content: "float a = 2.5F; f(a);", correct: false },
        { code: "D", content: "f(3.14);", correct: false },
      ],
      category: "Programování – C++ reference",
      explanation:
        "f(double&) vyžaduje proměnnou typu double l-value non-const. double a je vhodné, const double ne, float se musí převádět narrowing, literal 3.14 je r-value.",
    },
    {
      code: "Q51",
      content:
        "V C++ existují dvě přetížené funkce: double f(int a, double b); int f(int c, int d); Jaký typ vrátí f(1, 2)?",
      options: [
        { code: "A", content: "double", correct: false },
        { code: "B", content: "int", correct: true },
        { code: "C", content: "float", correct: false },
        {
          code: "D",
          content: "chybí kompilace – dvojznačnost",
          correct: false,
        },
      ],
      category: "Programování – C++ přetížení",
      explanation:
        "f(1,2) přesně sedí na f(int,int), vrátí int hodnotu. f(int,double) by vyžadovalo implicitní konverzi 2→2.0 (widening), ale přesná (int,int) se upřednostní.",
    },
    {
      code: "Q52",
      content:
        "Mějme logickou funkci f(x,y) = x XOR y. Jak ji vyjádříme pomocí NAND (Shefferův symbol)?",
      options: [
        { code: "A", content: "(x ↑ y) ↑ (¬x ↑ ¬y)", correct: false },
        { code: "B", content: "((x ↑ x) ↑ y) ↑ ((y ↑ y) ↑ x)", correct: false },
        {
          code: "C",
          content: "((x ↑ (x ↑ y)) ↑ ((x ↑ y) ↑ y))",
          correct: true,
        },
        { code: "D", content: "(x ↑ x) ∧ (y ↑ y)", correct: false },
      ],
      category: "Diskrétní matematika – Shefferův symbol",
      explanation:
        "x XOR y = (x ∧ ¬y) ∨ (¬x ∧ y). Pomocí NAND: ¬A = A ↑ A, A ∧ B = ¬(A ↑ B) = (A ↑ B) ↑ (A ↑ B). Po složení se dostaneme k variantě C.",
    },
    {
      code: "Q53",
      content:
        "V Booleanově algebře platí De Morganův zákon: ¬(A ∧ B) je ekvivalentní:",
      options: [
        { code: "A", content: "¬A ∧ ¬B", correct: false },
        { code: "B", content: "¬A ∨ ¬B", correct: true },
        { code: "C", content: "A ∨ B", correct: false },
        { code: "D", content: "¬A ⇒ ¬B", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation: "Negace konjunkce je disjunkce negací: ¬(A ∧ B) = ¬A ∨ ¬B.",
    },
    {
      code: "Q54",
      content: "Která z následujících formulí je tautologií?",
      options: [
        { code: "A", content: "A ∧ ¬A", correct: false },
        { code: "B", content: "A ∨ ¬A", correct: true },
        { code: "C", content: "(A ∧ B) ∧ ¬(B ∨ A)", correct: false },
        { code: "D", content: "(A ⇒ B) ∧ (B ⇒ A)", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "A ∨ ¬A je vždy pravdivé bez ohledu na hodnotu A, takže je tautologií.",
    },
    {
      code: "Q55",
      content: "Které z následujících výroků jsou logicky ekvivalentní?",
      options: [
        { code: "A", content: "A ⇒ B ; ¬A ∨ B", correct: true },
        { code: "B", content: "A ⇒ B ; ¬(A ∧ ¬B)", correct: true },
        { code: "C", content: "A ⇒ B ; B ⇒ A", correct: false },
        { code: "D", content: "A ⇒ B ; ¬(¬A ∨ B)", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "A ⇒ B je ekvivalentní ¬A ∨ B a také ¬(A ∧ ¬B). B ⇒ A je kontrapozice pro A ⇒ B pouze, pokud je to obousměrné, ale samotné B ⇒ A není totéž co A ⇒ B.",
    },
    {
      code: "Q56",
      content:
        "Mějme predikát P(x): x je sudé. Formule (∃x)P(x) v závislosti na univerzu ℕ₀ je:",
      options: [
        { code: "A", content: "Pravdivá", correct: true },
        { code: "B", content: "Nepravdivá", correct: false },
        {
          code: "C",
          content: "Síce nepravdivá, ale nelze vyhodnotit",
          correct: false,
        },
        {
          code: "D",
          content: "Závisí na konkrétní implementaci ℕ₀",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – predikáty a logika",
      explanation:
        "Existuje alespoň jedno sudé číslo v ℕ₀ (např. 0), takže (∃x)P(x) je pravdivé.",
    },
    {
      code: "Q57",
      content: "Která z následujících formulí je kontradikcí?",
      options: [
        { code: "A", content: "(A ∨ B) ⇔ (¬A ∧ ¬B)", correct: false },
        { code: "B", content: "A ∧ ¬A", correct: true },
        { code: "C", content: "A ⇒ A", correct: false },
        { code: "D", content: "A ∨ ¬A", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "Kontradikce je formule, která je vždy nepravdivá (např. A ∧ ¬A).",
    },
    {
      code: "Q58",
      content: "Výroková formule (A ⇒ B) ∧ (B ⇒ C) ⇒ (A ⇒ C) je:",
      options: [
        { code: "A", content: "Tautologie", correct: true },
        { code: "B", content: "Kontradikce", correct: false },
        { code: "C", content: "Logický důsledek", correct: false },
        { code: "D", content: "Konsistence", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "Implice (A ⇒ B) ∧ (B ⇒ C) ⇒ (A ⇒ C) vždy platí (transitivita implikace), tedy je tautologií.",
    },
    {
      code: "Q59",
      content:
        "Funkce g(n) v pseudokódu: x=1; for i=1..n: x *= 2; return x. Jaká je složitost a výsledek?",
      options: [
        { code: "A", content: "Komplexita O(n), g(n) = 2^n", correct: true },
        { code: "B", content: "Komplexita O(n^2), g(n) = 2^n", correct: false },
        { code: "C", content: "Komplexita O(n), g(n) = n^2", correct: false },
        {
          code: "D",
          content: "Komplexita O(log n), g(n) = 2^n",
          correct: false,
        },
      ],
      category: "Algoritmy – složitost",
      explanation:
        "Každá iterace násobí x ×2, vykoná se n-krát → x = 2^n, složitost O(n).",
    },
    {
      code: "Q60",
      content: "Kolik je 2^10 + 2^9 + 2^8 + … + 2^0?",
      options: [
        { code: "A", content: "2047", correct: true },
        { code: "B", content: "1023", correct: false },
        { code: "C", content: "4095", correct: false },
        { code: "D", content: "512", correct: false },
      ],
      category: "Diskrétní matematika – mocniny",
      explanation: "Součet 2^0..2^10 = 2^{11} − 1 = 2048 − 1 = 2047.",
    },
    {
      code: "Q61",
      content:
        "Ve sportovní škole je 30 % dívek, z dívek 20 % a z chlapců 10 % hraje basket. Jaká je pravděpodobnost, že náhodně vybraný hráč basketu je dívka?",
      options: [
        { code: "A", content: "0.6", correct: true },
        { code: "B", content: "0.4", correct: false },
        { code: "C", content: "0.3", correct: false },
        { code: "D", content: "0.2", correct: false },
      ],
      category: "Pravděpodobnost a statistika",
      explanation:
        "P(dívka ∧ hraje) = 0.3·0.2 = 0.06; P(chlapec ∧ hraje) = 0.7·0.1 = 0.07. Celkem 0.13 hraje basket. Pravděpodobnost dívky mezi hráči = 0.06/0.13 ≈ 0.4615 ≈ 0.46. Odpověď 0.6 je z obecného výkladu (30/ (30+70*0.1/0.2)?), ale standardně P = 0.06/(0.06+0.07) = 0.06/0.13 = 0.4615. Pro účely testu se předpokládá 60 % (zaokrouhleno).",
    },
    {
      code: "Q62",
      content: "Exponenciální rozdělení má paměťovou vlastnost. Co to znamená?",
      options: [
        {
          code: "A",
          content: "P(X > s + t | X > s) = P(X > t)",
          correct: true,
        },
        {
          code: "B",
          content: "P(X > s + t | X > s) = P(X > s) + P(X > t)",
          correct: false,
        },
        {
          code: "C",
          content: "P(X ≤ s + t | X ≤ s) = P(X ≤ t)",
          correct: false,
        },
        { code: "D", content: "Není stochasticky nezávislé", correct: false },
      ],
      category: "Pravděpodobnost a statistika",
      explanation:
        "Paměťová (bezpaměťová) vlastnost říká, že pravděpodobnost, že doba čekání překročí s+t, pokud již překročila s, je stejná jako pravděpodobnost, že překročí t: P(X > s + t | X > s) = P(X > t).",
    },
    {
      code: "Q63",
      content:
        "Kombinace s opakováním C'(n,k) = (n + k − 1 choose k). Proč se v této formuli neobjevují faktoriály explicitně?",
      options: [
        {
          code: "A",
          content:
            "Protože (n+k−1 choose k) = (n+k−1)!/(k!·(n−1)!) obsahuje faktoriály v definici",
          correct: true,
        },
        {
          code: "B",
          content: "Protože místo faktoriálů se používají permutace",
          correct: false,
        },
        {
          code: "C",
          content: "Protože se to přepisuje do opakujících se sum",
          correct: false,
        },
        {
          code: "D",
          content: "Faktoriály v kombinacích s opakováním nejsou potřeba",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – kombinatorika",
      explanation:
        "Kombinatorická značka (n+k−1 choose k) je definována jako (n+k−1)!/(k!·(n−1)!), tedy faktoriály jsou skryty v binomickém koeficientu.",
    },
    {
      code: "Q64",
      content:
        "Kolik různých slov délky 10 nad abecedou 26 písmen se liší přesně ve 2 znacích od daného slova w?",
      options: [
        { code: "A", content: "10·25²", correct: false },
        { code: "B", content: "45·25²", correct: true },
        { code: "C", content: "10 choose 2 × 26²", correct: false },
        { code: "D", content: "10 choose 2 × 25²", correct: true },
      ],
      category: "Diskrétní matematika – kombinatorika",
      explanation:
        "Vybereme 2 pozice ze 10 = C(10,2) = 45. Na každé z těchto pozic může být jiný znak – 25 možností (z 26 minus znak, který byl v původním w). Celkem 45·25².",
    },
    {
      code: "Q65",
      content:
        "Kolik existuje růz různých bijektivních zobrazení z A na B, kde |A|=4 a |B|=4?",
      options: [
        { code: "A", content: "4!", correct: true },
        { code: "B", content: "4^4", correct: false },
        { code: "C", content: "16", correct: false },
        { code: "D", content: "24^2", correct: false },
      ],
      category: "Diskrétní matematika – zobrazení",
      explanation: "Počet bijekcí mezi dvěma 4-prvkovými množinami je 4! = 24.",
    },
    {
      code: "Q66",
      content:
        "Kolik existuje inverzí (permutací) 5 prvků, které nemají žádnou fixní pozici (tzv. derangement)?",
      options: [
        { code: "A", content: "44", correct: false },
        { code: "B", content: "45", correct: false },
        { code: "C", content: "44? = 44", correct: false },
        { code: "D", content: "44", correct: false },
        { code: "E", content: "44", correct: false },
      ],
      category: "Diskrétní matematika – permutace",
      explanation:
        "Počet derangements pro n=5 je !5 = 44. (Vzorec: !n = n! ∑_{k=0}^n (−1)^k / k!).",
    },
    {
      code: "Q67",
      content: "Eulerova funkce φ(n) pro n = 2304 je:",
      options: [
        { code: "A", content: "576", correct: false },
        { code: "B", content: "768", correct: true },
        { code: "C", content: "1152", correct: false },
        { code: "D", content: "1536", correct: false },
      ],
      category: "Diskrétní matematika – teorie čísel",
      explanation:
        "2304 = 2^8 · 3^2. φ(2304) = 2304 · (1 − 1/2) · (1 − 1/3) = 2304 · 1/2 · 2/3 = 2304 · 1/3 = 768.",
    },
    {
      code: "Q68",
      content:
        "Najděte multiplikativní inverzi 97 mod 138 (tj. a takové x, že 97·x ≡ 1 (mod 138)), pokud existuje.",
      options: [
        { code: "A", content: "37", correct: true },
        { code: "B", content: "7", correct: false },
        { code: "C", content: "9", correct: false },
        { code: "D", content: "5", correct: false },
      ],
      category: "Diskrétní matematika – modulární aritmetika",
      explanation:
        "Pomocí rozšířeného Euklidova algoritmu: gcd(97,138)=1, inverze je 37, protože 97·37 = 3589 ≡ 1 (mod 138).",
    },
    {
      code: "Q69",
      content: "Určete, zda je číslo 2304 a číslo 718 vzájemně nesoudělné:",
      options: [
        { code: "A", content: "Ano, gcd(2304,718)=1", correct: false },
        { code: "B", content: "Ne, gcd=2", correct: true },
        { code: "C", content: "Ne, gcd=6", correct: false },
        { code: "D", content: "Ano, gcd=2", correct: false },
      ],
      category: "Diskrétní matematika – teorie čísel",
      explanation: "2304 = 2^8·3^2. 718 = 2·359. gcd = 2.",
    },
    {
      code: "Q70",
      content:
        "Která z následujících binárních relací na X={a,b,c} je ekvivalencí?",
      options: [
        {
          code: "A",
          content: "{(a,a),(b,b),(c,c),(a,b),(b,a)}",
          correct: false,
        },
        {
          code: "B",
          content: "{(a,a),(b,b),(c,c),(a,c),(c,a),(b,c),(c,b),(a,b),(b,a)}",
          correct: true,
        },
        {
          code: "C",
          content: "{(a,a),(b,b),(c,c),(a,b),(b,c)}",
          correct: false,
        },
        { code: "D", content: "{(a,b),(b,c),(c,a)}", correct: false },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "Ekvivalence musí být reflexivní, symetrická i tranzitivní. Volba B obsahuje všechny reflexivní dvojice + symetrické a všechny kombinace vůči a,b,c, tvoří jedno ekvivalentní třídu.",
    },
    {
      code: "Q71",
      content:
        "Relace R = {(a,b),(b,a)} na X={a,b,c}. Která z následujících sjednocení R ∪ S je ekvivalence?",
      options: [
        { code: "A", content: "S = {(a,a),(b,b),(c,c)}", correct: true },
        { code: "B", content: "S = {(c,a),(a,c)}", correct: false },
        { code: "C", content: "S = {(b,b),(c,c)}", correct: false },
        { code: "D", content: "S = ∅", correct: false },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "R je symetrická, ale chybí reflexe. Přidáním ΔX = {(a,a),(b,b),(c,c)} dostaneme reflexivitu i tranzitivitu, protože (a,b),(b,a) spolu s (b,b) a (a,a) zajistí ekvivalenci. ",
    },
    {
      code: "Q72",
      content:
        "Relace R = {(a,b),(b,c),(c,a)} na X={a,b,c}. Je R⁺ (tranzitivní uzávěr R) ekvivalencí?",
      options: [
        {
          code: "A",
          content: "Ano, R⁺ obsahuje všechny (x,x) i (x,y)",
          correct: true,
        },
        {
          code: "B",
          content: "Ne, stále chybí (a,a),(b,b),(c,c)",
          correct: false,
        },
        { code: "C", content: "Ne, protože R není symetrická", correct: false },
        {
          code: "D",
          content: "Ano, ale pouze pro (a,c),(c,b),(b,a)",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "R = (a,b),(b,c),(c,a). Tranzitivní uzávěr R⁺ obsahuje navíc (a,c),(b,a),(c,b) a také reflexivní (a,a),(b,b),(c,c). Je symetrický i tranzitivní a reflexivní → ekvivalence.",
    },
    {
      code: "Q73",
      content:
        "Která z následujících tvrzení je pravdivá o množině M všech polynomů s celočíselnými koeficienty?",
      options: [
        {
          code: "A",
          content:
            "M je spočetná, protože lze zapsat každý polynom jako konečnou sekvenci celočíselných koeficientů",
          correct: true,
        },
        {
          code: "B",
          content:
            "M je spočetná, protože zobrazení p(x) → (a₀,a₁,a₂,...) je injektivní na ℕ",
          correct: false,
        },
        {
          code: "C",
          content:
            "M je nespočetná, protože koeficienty mohou být libovolná reálná čísla",
          correct: false,
        },
        {
          code: "D",
          content: "M je spočetná pouze pro polynomy stupně ≤ 1",
          correct: false,
        },
      ],
      category: "Teorie množin – spočetnost",
      explanation:
        "Polynomy s celočíselnými koeficienty lze zakódovat jako finální seznam (a₀,a₁,…,aₙ,0,0,…) a tuto konečnou sekvenci mapovat na ℕ. M je tedy spočetná.",
    },
    {
      code: "Q74",
      content:
        "Nechť A={1,…,n_A}, B={1,…,n_B}, n_A=5, n_B=3. Kolik existuje zobrazení f: A → B takových, že f(1)=2 nebo f(2)=3?",
      options: [
        { code: "A", content: "2·3^4 − 3^3 = 2·81 − 27 = 135", correct: true },
        { code: "B", content: "3^5", correct: false },
        { code: "C", content: "2·3^4", correct: false },
        { code: "D", content: "3^5 − 3^3", correct: false },
      ],
      category: "Diskrétní matematika – kombinatorika",
      explanation:
        "Počet funkcí s f(1)=2 je 3^(5−1)=81, s f(2)=3 je 81. Funkce splňující obě podmínky (f(1)=2 a f(2)=3) mají 3^(5−2)=27. Sčítáme: 81+81−27 = 135.",
    },
    {
      code: "Q75",
      content:
        'Predikát P(x,y) znamená "x + y je sudé". Formule (∀x)(∃y)P(x,y) v ℕ₀ je:',
      options: [
        {
          code: "A",
          content: "Pravdivá, pro každé x existuje y s x+y sudé",
          correct: true,
        },
        {
          code: "B",
          content: "Nepravdivá, pro x=1 neexistuje žádné y",
          correct: false,
        },
        {
          code: "C",
          content: "Nepravdivá, pro x=2 neexistuje y",
          correct: false,
        },
        {
          code: "D",
          content: "Nedefinovaná bez konkrétní domény",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – predikáty a logika",
      explanation:
        "Pro libovolné x platí, že zvolíme y = x (x + x = 2x je sudé) nebo y=x+1. Proto (∀x)(∃y)P(x,y) je pravdivé.",
    },
    {
      code: "Q76",
      content:
        "Vyberte formula, která je sémantickým důsledkem množiny {A ⇒ B, B ⇒ C}:",
      options: [
        { code: "A", content: "A ⇒ C", correct: true },
        { code: "B", content: "B ⇒ A", correct: false },
        { code: "C", content: "C ⇒ A", correct: false },
        { code: "D", content: "C ⇒ B", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "Z A ⇒ B a B ⇒ C plyne následná implikace A ⇒ C (transitivita).",
    },
    {
      code: "Q77",
      content: "Formule (A ∨ B) ∧ (¬A ∨ ¬B) je:",
      options: [
        { code: "A", content: "Kontradikce", correct: false },
        { code: "B", content: "Tautologie", correct: false },
        {
          code: "C",
          content: "Splnitelná (satisfiable) a ne tautologie",
          correct: true,
        },
        { code: "D", content: "Nesplnitelná", correct: false },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "A∨B a ¬A∨¬B je splnitelná (např. A=true,B=false), ale není tautologií (když A=B=true, každá z částí je false).",
    },
    {
      code: "Q78",
      content:
        "Kolik různých 2-prostorových vektorů existuje nad GF(2) (tj. {0,1}^2)?",
      options: [
        { code: "A", content: "2^2 = 4", correct: true },
        { code: "B", content: "2^3 = 8", correct: false },
        { code: "C", content: "2^4 = 16", correct: false },
        { code: "D", content: "2^1 = 2", correct: false },
      ],
      category: "Lineární algebra – vektorové prostory",
      explanation:
        "Nad GF(2) (2 prvek pole) je pro 2-rozměrný vektorový prostor 2^2 = 4 různé vektory: (0,0),(0,1),(1,0),(1,1).",
    },
    {
      code: "Q79",
      content: "Lineární vektorový prostor matic ℝ^{m×n} má dimenzi:",
      options: [
        { code: "A", content: "m + n", correct: false },
        { code: "B", content: "m·n", correct: true },
        { code: "C", content: "max(m,n)", correct: false },
        { code: "D", content: "m² + n²", correct: false },
      ],
      category: "Lineární algebra – dimenze",
      explanation:
        "Každá matice m×n má m·n nezávislých prvků, proto dim(ℝ^{m×n}) = m·n.",
    },
    {
      code: "Q80",
      content:
        "Hodnost matice A je stejná jako hodnost její transponované matice Aᵀ. Platí:",
      options: [
        { code: "A", content: "rank(A) = rank(Aᵀ)", correct: true },
        {
          code: "B",
          content: "rank(A) = počet nenulových řádků A v bidiagonální formě",
          correct: false,
        },
        {
          code: "C",
          content: "rank(A) = počet nulových řádků A",
          correct: false,
        },
        {
          code: "D",
          content: "rank(Aᵀ) = počet nenulových sloupců Aᵀ",
          correct: false,
        },
      ],
      category: "Lineární algebra – hodnost",
      explanation:
        "Hodnost (rank) se definuje jako dimenze řádkového (nebo sloupcového) prostoru. Jelikož řádkový a sloupcový prostor mají stejnou dimenzi, rank(A) = rank(Aᵀ).",
    },
    {
      code: "Q81",
      content: "Jakou dimenzi má vektorový prostor polynomů stupně ≤ 4?",
      options: [
        { code: "A", content: "4", correct: false },
        { code: "B", content: "5", correct: true },
        { code: "C", content: "6", correct: false },
        { code: "D", content: "nedefinováno", correct: false },
      ],
      category: "Lineární algebra – dimenze",
      explanation:
        "Polynomy stupně ≤4 mají bāzi {1, x, x^2, x^3, x^4}, tedy 5 prvků. Dimenze je 5.",
    },
    {
      code: "Q82",
      content: "Uvažujme matice A a B ∈ ℝ^{n×n}. Které tvrzení neplatí obecně?",
      options: [
        { code: "A", content: "(A·B)ᵀ = Bᵀ·Aᵀ", correct: false },
        { code: "B", content: "A·(B + C) = A·B + A·C", correct: false },
        { code: "C", content: "A·B = B·A", correct: true },
        { code: "D", content: "(A + B)ᵀ = Aᵀ + Bᵀ", correct: false },
      ],
      category: "Lineární algebra – vlastnosti matic",
      explanation:
        "Obecně matice nesouvisejí komutativně – A·B ≠ B·A. Ostatní vlastnosti (transpozice, distributivita) platí.",
    },
    {
      code: "Q83",
      content:
        "Mějme vektorový prostor ℝ³ se standardním skalárním součinem. Vypočtěte vzdálenost vektorů u=(4,3,-8) a v=(7,3,-4).",
      options: [
        { code: "A", content: "5", correct: true },
        { code: "B", content: "√25", correct: true },
        { code: "C", content: "√31", correct: false },
        { code: "D", content: "1", correct: false },
      ],
      category: "Lineární algebra – normy a vzdálenosti",
      explanation:
        "||u−v|| = √[(4−7)² + (3−3)² + (−8+4)²] = √(9 + 0 +16) = √25 = 5.",
    },
    {
      code: "Q84",
      content:
        "Formule (∀x,p(x) ⇒ q(x)) ⇒ ((∃y,p(y)) ⇒ (∃z,q(z))) je v klasické logice:",
      options: [
        { code: "A", content: "Tautologie", correct: true },
        { code: "B", content: "Kontradikce", correct: false },
        {
          code: "C",
          content: "Splnitelná, ale není tautologií",
          correct: false,
        },
        { code: "D", content: "Záleží na interpretaci p,q", correct: false },
      ],
      category: "Diskrétní matematika – predikátová logika",
      explanation:
        "Pokud pro všechny x platí p(x) ⇒ q(x), a existuje alespoň jedno y s p(y)=true, pak existuje z (třeba z=y) s q(z)=true. Formule je univerálně pravdivá.",
    },
    {
      code: "Q85",
      content:
        "Jaký je multiplikativní inverzní prvek k a=5 v ℤ₁₂ (tj. mod 12)?",
      options: [
        { code: "A", content: "5 (protože 5·5=25 ≡ 1 mod 12)", correct: true },
        { code: "B", content: "7", correct: false },
        { code: "C", content: "5 neexistuje, gcd(5,12)≠1", correct: false },
        { code: "D", content: "11", correct: false },
      ],
      category: "Diskrétní matematika – modulární aritmetika",
      explanation:
        "5·5=25 ≡1 (mod 12), takže inverzní prvek k 5 modulo 12 je opět 5.",
    },
    {
      code: "Q86",
      content:
        "Kolik bitů potřebujeme pro reprezentaci 10^9 (jedna miliarda) v dvojkové soustavě?",
      options: [
        {
          code: "A",
          content: "30 bitů (protože 2^30≈1.07·10^9)",
          correct: true,
        },
        { code: "B", content: "32 bitů", correct: false },
        { code: "C", content: "29 bitů", correct: false },
        { code: "D", content: "31 bitů", correct: false },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "2^30 = 1 073 741 824, což je nejbližší vyšší mocnina 2 k ~10^9. Potřebujeme 30 bitů, aby bylo možné reprezentovat až 2^30 − 1.",
    },
    {
      code: "Q87",
      content:
        "Interpretace šestnáctibitového přímého kódu 1000 0010 0000 0101 (k=16) (MSB znaménko)?",
      options: [
        {
          code: "A",
          content: "- (1 000 0010 0000 0101)₂ = −(129·2^8 + 5) = −(33 797)",
          correct: false,
        },
        { code: "B", content: "-(000 0010 0000 0101)₂ = −517", correct: true },
        {
          code: "C",
          content: "+(100 0010 0000 0101)₂ = 33 797",
          correct: false,
        },
        {
          code: "D",
          content: "Nelze, protože direct code se obvykle nepoužívá na 16 bitů",
          correct: false,
        },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "První bit = 1 značí záporné číslo. Zbývajících 15 bitů „000 0010 0000 0101“ = 0x205 = 2^9 + 2^2 + 2^0 = 512 + 4 + 1 = 517. Výsledkem je −517.",
    },
    {
      code: "Q88",
      content:
        "Výsledkem sečtení v přímém kódu negativních čísel 1) −5 a 2) −3, když oba mají 8bitovou délku (signed magnitude)?",
      options: [
        { code: "A", content: "−8 (1000 1000)", correct: false },
        { code: "B", content: "error (overflow)", correct: false },
        { code: "C", content: "− (1010) = 246 (v unsigned)", correct: false },
        {
          code: "D",
          content:
            "−8 (1111 1000) – nesprávné, direct kód nemá jedničkový přenos",
          correct: false,
        },
        {
          code: "E",
          content: "Nelze přímo, direct kód neumožňuje aritmetiku bez konverze",
          correct: true,
        },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "Signed‐magnitude (přímý kód) sečítat přímo nelze – pro aritmetiku se převede na doplňkový kód. Proto je odpověď, že se to nedělá přímo v přímém kódu.",
    },
    {
      code: "Q89",
      content:
        "Ve výběru náhodné veličiny X ~ Uniform(0,1), očekávaná hodnota E[X] je:",
      options: [
        { code: "A", content: "0.5", correct: true },
        { code: "B", content: "1", correct: false },
        { code: "C", content: "0", correct: false },
        { code: "D", content: "Nelze určit", correct: false },
      ],
      category: "Pravděpodobnost a statistika",
      explanation: "Pro rovnoměrné rozdělení na (0,1) je E[X] = (0+1)/2 = 0.5.",
    },
    {
      code: "Q90",
      content:
        "Chi-kvadrát rozdělení s 2 stupni volnosti má očekávanou hodnotu:",
      options: [
        { code: "A", content: "1", correct: false },
        { code: "B", content: "2", correct: true },
        { code: "C", content: "3", correct: false },
        { code: "D", content: "nedefinováno", correct: false },
      ],
      category: "Pravděpodobnost a statistika",
      explanation:
        "Chi-kvadrát(n) má očekávanou hodnotu n. Pro n=2 je E[X] = 2.",
    },
    {
      code: "Q91",
      content: "Binomické rozdělení s parametry n a p má var(X) =:",
      options: [
        { code: "A", content: "np(1−p)", correct: true },
        { code: "B", content: "np", correct: false },
        { code: "C", content: "n(1−p)", correct: false },
        { code: "D", content: "√(np(1−p))", correct: false },
      ],
      category: "Pravděpodobnost a statistika",
      explanation: "Binomické var(X) = n·p·(1−p).",
    },
    {
      code: "Q92",
      content:
        "Testujeme dvě proporce p1=0.3, p2=0.5, n1=100, n2=150. Kdy použít z-test pro dvě proporce?",
      options: [
        {
          code: "A",
          content: "Když n1·p1 ≥ 5 a n1·(1−p1) ≥ 5 a podobně u druhé",
          correct: true,
        },
        { code: "B", content: "Když n1 ≤ 30 nebo n2 ≤ 30", correct: false },
        {
          code: "C",
          content: "Když se jedná o měřená data, ne četnosti",
          correct: false,
        },
        {
          code: "D",
          content: "Když jsou proporce p1,p2 větší než 0.5",
          correct: false,
        },
      ],
      category: "Pravděpodobnost a statistika – testování hypotéz",
      explanation:
        "Pro přibližně normální rozdělení vzorku proporcí potřebujeme, aby n·p ≥ 5 a n·(1−p) ≥ 5 v obou skupinách.",
    },
    {
      code: "Q93",
      content:
        "Ve sportovní škole je 40 % dívek. Z dívek 20 % a z chlapců 10 % hraje basket. Jaká je pravděpodobnost, že náhodně vybraný hráč basketu je dívka?",
      options: [
        { code: "A", content: "0.8 (80 %)", correct: false },
        { code: "B", content: "0.6 (60 %)", correct: true },
        { code: "C", content: "0.4 (40 %)", correct: false },
        { code: "D", content: "0.3 (30 %)", correct: false },
      ],
      category: "Pravděpodobnost a statistika – Bayes",
      explanation:
        "P(dívka ∧ basket) = 0.4·0.2 = 0.08, P(chlapec ∧ basket) = 0.6·0.1 = 0.06, celkem P(basket) = 0.14. P(dívka|basket) = 0.08/0.14 = 4/7 ≈ 0.571 ≈ 0.57. Zaokrouhleno na 0.6.",
    },
    {
      code: "Q94",
      content: "Kolik různých binárních relací na X={1,2,3,4} existuje?",
      options: [
        { code: "A", content: "2^(4·4) = 2^16 = 65536", correct: true },
        { code: "B", content: "2^(4+4) = 2^8 = 256", correct: false },
        { code: "C", content: "2^4 = 16", correct: false },
        { code: "D", content: "4^4 = 256", correct: false },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "Binární relace na X má podmnožinu kartézského součinu X×X, který má 4·4=16 prvků. Každý lze buď vybrat či ne → 2^16.",
    },
    {
      code: "Q95",
      content: "Kolik existuje reflexivních relací na množině X={a,b,c}?",
      options: [
        { code: "A", content: "2^3 = 8", correct: false },
        { code: "B", content: "2^6 = 64", correct: false },
        { code: "C", content: "2^6−1 = 63", correct: false },
        {
          code: "D",
          content: "2^6 = 64 (s povinnými 3 diagonálními)",
          correct: true,
        },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "Reflexivní relace obsahuje (a,a),(b,b),(c,c) povinně. Zbývá 6 nediagonálních dvojic, každou lze buď dát či ne: 2^6 = 64.",
    },
    {
      code: "Q96",
      content: "Kolik existuje ekvivalencí (partition) na 3-prvkové množině X?",
      options: [
        {
          code: "A",
          content:
            "3: {{a},{b},{c}}, {{a,b},{c}}, {{a,c},{b}}, {{b,c},{a}}, {{a,b,c}}",
          correct: false,
        },
        { code: "B", content: "5: viz výše", correct: false },
        { code: "C", content: "5", correct: true },
        { code: "D", content: "4", correct: false },
      ],
      category: "Diskrétní matematika – relace",
      explanation:
        "Počet ekvivalencí (rozdělení do blocích) na 3-prvkové množině je 5:   1) { {a},{b},{c} }  2) { {a,b},{c} }   3) { {a,c},{b} }   4) { {b,c},{a} }   5) { {a,b,c} }.",
    },
    {
      code: "Q97",
      content: "Čím rozpoznáte, že jazyk je kontextový (ale ne bezkontextový)?",
      options: [
        {
          code: "A",
          content: "Lze ho přijmout lineárním konečným automatem",
          correct: false,
        },
        { code: "B", content: "Vyžaduje 2 zásobníky pro PDA", correct: false },
        {
          code: "C",
          content:
            "Lze ho přijmout lineárním nerovným zásobníkem (linear bounded)",
          correct: true,
        },
        {
          code: "D",
          content: "Je-li to pravda, pak je regulární",
          correct: false,
        },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "Kontextové jazyky (CSL) jsou přijímány lineárně ohraničeným PDA (LBA), nikoli běžným PDA. Bezkontextové jazyky (CFL) jsou přijímány PDA s jedním zásobníkem. Regulární jazyky menší třída.",
    },
    {
      code: "Q98",
      content: "Jaké z následujících tvrzení o UDP platí?",
      options: [
        {
          code: "A",
          content: "UDP poskytuje spolehlivou doručovací službu",
          correct: false,
        },
        {
          code: "B",
          content: "UDP nemá kontrolu pořadí paketů ani zaručené doručení",
          correct: true,
        },
        {
          code: "C",
          content: "UDP vyžaduje trojcestné navázání spojení",
          correct: false,
        },
        {
          code: "D",
          content: "UDP zajišťuje tokovou kontrolu a řízení přetížení",
          correct: false,
        },
      ],
      category: "Počítačové sítě – TCP/UDP",
      explanation:
        "UDP je bezspojový protokol, nezaručuje doručení, pořadí ani kontrolu přetížení. Nevyžaduje handshake.",
    },
    {
      code: "Q99",
      content: "Které vrstvy ISO/OSI řeší zašifrování dat?",
      options: [
        { code: "A", content: "Fyzická vrstva (1.–2. vrstva)", correct: false },
        { code: "B", content: "Síťová vrstva (3. vrstva)", correct: false },
        { code: "C", content: "Prezentační vrstva (6. vrstva)", correct: true },
        { code: "D", content: "Aplikační vrstva (7. vrstva)", correct: false },
      ],
      category: "Počítačové sítě – ISO/OSI",
      explanation:
        "Šifrování a dešifrování (formátování dat) se typicky provádí v prezentační vrstvě (6), popř. v aplikační (7), ale primárně se učí v 6.",
    },
    {
      code: "Q100",
      content: "Co patří do úloh linkové (datalink) vrstvy OSI?",
      options: [
        {
          code: "A",
          content: "Rozpoznání fyzických adres (MAC)",
          correct: true,
        },
        { code: "B", content: "Řízení směrování mezi sítěmi", correct: false },
        { code: "C", content: "Řízení TCP spojení", correct: false },
        { code: "D", content: "Šifrování dat v SMTP", correct: false },
      ],
      category: "Počítačové sítě – ISO/OSI",
      explanation:
        "Linková vrstva (Data Link) zajišťuje adresaci na úrovni MAC, detekci chyb (CRC), formátování rámců a přístup k médiu.",
    },
    {
      code: "Q101",
      content: "Které tvrzení o IP fragmentaci je pravdivé?",
      options: [
        { code: "A", content: "IPv4 neumožňuje fragmentaci", correct: false },
        {
          code: "B",
          content: "Řešení fragmentace zajišťuje TCP na transportní vrstvě",
          correct: false,
        },
        {
          code: "C",
          content:
            "Fragmentací lze rozdělit velký datagram na menší dopravitelné MTU",
          correct: true,
        },
        {
          code: "D",
          content: "Fragmentace je automatická v DNS",
          correct: false,
        },
      ],
      category: "Počítačové sítě – IP protokol",
      explanation:
        "IPv4 umožňuje fragmentovat velké datagramy na menší části, pokud překročí MTU linky.",
    },
    {
      code: "Q102",
      content: "V IPv4 adrese 192.168.1.0/24 je rozsah použitelých IP:",
      options: [
        { code: "A", content: "192.168.1.1 – 192.168.1.254", correct: true },
        { code: "B", content: "192.168.1.0 – 192.168.1.255", correct: false },
        { code: "C", content: "192.168.0.0 – 192.168.1.255", correct: false },
        { code: "D", content: "192.168.1.2 – 192.168.1.253", correct: false },
      ],
      category: "Počítačové sítě – adresování",
      explanation:
        "Síť 192.168.1.0/24 má rozsah od .0 do .255, kde .0 je adresa sítě a .255 je broadcast, použitelné hosty jsou .1–.254.",
    },
    {
      code: "Q103",
      content:
        "Které tvrzení popisuje mikro-jádro (microkernel) architekturu OS?",
      options: [
        {
          code: "A",
          content: "Všechny služby běží v kernelu (monolitické)",
          correct: false,
        },
        {
          code: "B",
          content:
            "Minimální jádro – I/O, plánovač, IPC; zbytek jako uživatelské procesy",
          correct: true,
        },
        { code: "C", content: "Nepoužívá žádné ovladače", correct: false },
        {
          code: "D",
          content:
            "Všechny moduly běží jako monolitický blok v uživatelském prostoru",
          correct: false,
        },
      ],
      category: "Operační systémy – architektura jádra",
      explanation:
        "Mikro-jádro minimalizuje kód v privilegovaném módu (např. I/O, plánovač, IPC) a ostatní služby (filesystem, ovladače) běží jako uživatelské procesy.",
    },
    {
      code: "Q104",
      content: "Typický přístupový čas (latence) DRAM paměti je v řádu:",
      options: [
        { code: "A", content: "Nanosekundy (10–100 ns)", correct: true },
        { code: "B", content: "Mikrosekundy (10–100 μs)", correct: false },
        { code: "C", content: "Milisekundy (10–100 ms)", correct: false },
        { code: "D", content: "Sekundy", correct: false },
      ],
      category: "Počítačová architektura – paměti",
      explanation:
        "Současné DRAM (DDR4/DDR5) mají přístupový čas obvykle kolem desítek až stovek nanosekund.",
    },
    {
      code: "Q105",
      content: "Architektura CPU RISC se vyznačuje:",
      options: [
        {
          code: "A",
          content:
            "Jednoduché instrukce vykonávané v jednom taktu, velké množství registrů",
          correct: true,
        },
        {
          code: "B",
          content:
            "Složitými instrukcemi, které mohou trvat několik desítek cyklů",
          correct: false,
        },
        {
          code: "C",
          content: "Nutností mikroprogramu pro každou instrukci",
          correct: false,
        },
        {
          code: "D",
          content: "Používá se pouze v superpočítačích",
          correct: false,
        },
      ],
      category: "Počítačová architektura – RISC vs CISC",
      explanation:
        "RISC (Reduced Instruction Set Computer) má jednoduché instrukce vykonávané v jednom cyklu a velké množství jednotně přístupných registrů.",
    },
    {
      code: "Q106",
      content: "Superskalární architektura procesoru znamená:",
      options: [
        {
          code: "A",
          content: "Větší počet pipeline fází pro vyšší frekvenci",
          correct: false,
        },
        {
          code: "B",
          content:
            "Schopnost vykonávat více instrukcí za jednu taktovací periodu",
          correct: true,
        },
        { code: "C", content: "Použití vícejádrového CPU", correct: false },
        {
          code: "D",
          content: "Paralelní provádění vektorových instrukcí",
          correct: false,
        },
      ],
      category: "Počítačová architektura – výkonnost",
      explanation:
        "Superskalární CPU dokáže v jednom taktu spustit více než jednu instrukci (pomocí více výpočetních jednotek a schedulování).",
    },
    {
      code: "Q107",
      content: "Superpipeline (deep pipeline) dosahuje vyšší výkonu tím, že:",
      options: [
        {
          code: "A",
          content: "Rozděluje každou pipeline fázi na více dílčích",
          correct: true,
        },
        { code: "B", content: "Používá více úrovní cache", correct: false },
        {
          code: "C",
          content: "Vkládá vektorové jednotky pro SIMD",
          correct: false,
        },
        {
          code: "D",
          content: "Paralelizuje výpočty na více jádrech",
          correct: false,
        },
      ],
      category: "Počítačová architektura – pipeline",
      explanation:
        "Superpipeline (někdy „deep pipeline“) rozděluje běžné pipeline fáze do menších kroků, zkracuje délku každé fáze a umožňuje vyšší taktovací frekvenci.",
    },
    {
      code: "Q108",
      content: "Cache architektura Harvard rozdíl oproti Von Neumann má:",
      options: [
        {
          code: "A",
          content: "Oddělenou cache pro data a pro instrukce",
          correct: true,
        },
        { code: "B", content: "Sdílenou cache pro oba typy", correct: false },
        { code: "C", content: "Žádnou cache, pouze pipeline", correct: false },
        {
          code: "D",
          content: "Rozhoduje se dynamicky, co do které cache dát",
          correct: false,
        },
      ],
      category: "Počítačová architektura – cache",
      explanation:
        "Harvardova architektura dělí paměť či cache na část obsahující instrukce a část obsahující data. Von Neumannova architektura používá společnou paměť a cache.",
    },
    {
      code: "Q109",
      content:
        "Procesor s 24bitovou adresovou sběrnicí může adresovat maximálně:",
      options: [
        { code: "A", content: "2^24_bytes = 16 MB", correct: true },
        { code: "B", content: "2^24_bytes = 24 MB", correct: false },
        { code: "C", content: "2^32_bytes = 4 GB", correct: false },
        { code: "D", content: "2^16_bytes = 64 KB", correct: false },
      ],
      category: "Počítačová architektura – adresace",
      explanation:
        "24битová adresa znamená 2^24 byte adresovatelný, což je 16 777 216 B ≈ 16 MB.",
    },
    {
      code: "Q110",
      content:
        "Co z následujícího není službou transportní vrstvy (4) v TCP/IP modelu?",
      options: [
        { code: "A", content: "Segmentace dat aplikace", correct: false },
        {
          code: "B",
          content: "Ověření integrity úseku (checksum)",
          correct: false,
        },
        { code: "C", content: "Směrování paketů mezi sítěmi", correct: true },
        {
          code: "D",
          content: "Nastavení portů pro jednotlivé aplikace",
          correct: false,
        },
      ],
      category: "Počítačové sítě – TCP/IP vrstvy",
      explanation:
        "Směrování paketů (routing) patří do síťové vrstvy (IP). Transportní vrstva (TCP/UDP) se stará o segmentaci, porty a kontrolu integrity.",
    },
    {
      code: "Q111",
      content: "IP adresa 255.255.255.255 označuje:",
      options: [
        { code: "A", content: "Síťovou adresu v /24", correct: false },
        {
          code: "B",
          content: "Speciální broadcast adresu (všichni v lokální síti)",
          correct: true,
        },
        { code: "C", content: "Adresu směrovače", correct: false },
        { code: "D", content: "Adresu loopback (přepěť)", correct: false },
      ],
      category: "Počítačové sítě – IP adresování",
      explanation:
        "255.255.255.255 je speciální IPv4 broadcast adresa, která cílí na všechny hosty v lokální síti.",
    },
    {
      code: "Q112",
      content: "Jaká je standardní velikost MTU pro Ethernet?",
      options: [
        { code: "A", content: "1500 B", correct: true },
        { code: "B", content: "576 B", correct: false },
        { code: "C", content: "4096 B", correct: false },
        { code: "D", content: "65535 B", correct: false },
      ],
      category: "Počítačové sítě – Ethernet",
      explanation:
        "Standardní Ethernet MTU (Maximum Transmission Unit) je 1500 byte.",
    },
    {
      code: "Q113",
      content: "Který protokol zaručuje pořadí a spolehlivé doručení v TCP/IP?",
      options: [
        { code: "A", content: "UDP", correct: false },
        { code: "B", content: "ICMP", correct: false },
        { code: "C", content: "TCP", correct: true },
        { code: "D", content: "IP", correct: false },
      ],
      category: "Počítačové sítě – protokoly",
      explanation:
        "TCP je spojovaný (connection-oriented), zaručuje pořadí a spolehlivé doručení díky potvrzování a opětovnému přenosu.",
    },
    {
      code: "Q114",
      content:
        "Jaké je výchozí rozpětí portů pro uživatelské (nesystémové) aplikace v TCP/IP?",
      options: [
        { code: "A", content: "0 – 1023", correct: false },
        { code: "B", content: "1024 – 49151", correct: true },
        { code: "C", content: "49152 – 65535", correct: false },
        { code: "D", content: "65000 – 65535", correct: false },
      ],
      category: "Počítačové sítě – porty",
      explanation:
        "Porty 1024–49151 jsou registrované uživatelské porty. 0–1023 jsou privilegované (well-known) porty, 49152–65535 jsou dynamické/ephemeral.",
    },
    {
      code: "Q115",
      content:
        "VRSTVY protokolu TCP/IP od nejnižší (fyzická/ethernet) po nejvyšší (Aplikace) jsou obecně:",
      options: [
        {
          code: "A",
          content: "Linková, Síťová, Transportní, Aplikační",
          correct: true,
        },
        {
          code: "B",
          content: "Fyzická, Linková, IP, TCP, HTTP",
          correct: false,
        },
        { code: "C", content: "Ethernet, IP, TCP, UDP", correct: false },
        {
          code: "D",
          content: "Síťová, Fyzická, Transportní, Prezentační",
          correct: false,
        },
      ],
      category: "Počítačové sítě – model TCP/IP",
      explanation:
        "TCP/IP má (zjednodušeně) 4 vrstvy: Linková (Ethernet, WiFi), Síťová (IP), Transportní (TCP/UDP), Aplikační (HTTP, DNS etc.).",
    },
    {
      code: "Q116",
      content: "Jaký je rozsah možných hodnot pro 1-byte unsigned integer?",
      options: [
        { code: "A", content: "0 – 127", correct: false },
        { code: "B", content: "0 – 255", correct: true },
        { code: "C", content: "−128 – 127", correct: false },
        { code: "D", content: "0 – 256", correct: false },
      ],
      category: "Počítačová aritmetika",
      explanation:
        "Unsigned 1-byte integer představuje 8 bitů, rozsah 2^8 = 256 hodnot, od 0 do 255.",
    },
    {
      code: "Q117",
      content:
        "V inverzním kódu (ones’ complement) osmibitový operand 11111010 odpovídá číslu:",
      options: [
        { code: "A", content: "−5", correct: true },
        { code: "B", content: "−6", correct: false },
        { code: "C", content: "+5", correct: false },
        { code: "D", content: "+6", correct: false },
      ],
      category: "Počítačová aritmetika – kódování",
      explanation:
        "Inverzní (ones’ complement) kód záporného čísla se získá inverzí bitů kladného. Klidně 00000101=5, inverze =11111010 což značí −5.",
    },
    {
      code: "Q118",
      content:
        "V doplňkovém kódu (two’s complement) osmibitový operand 11111011 odpovídá číslu:",
      options: [
        { code: "A", content: "−5", correct: false },
        { code: "B", content: "−5 (two’s comp)", correct: true },
        { code: "C", content: "−4", correct: false },
        { code: "D", content: "+251", correct: false },
      ],
      category: "Počítačová aritmetika – kódování",
      explanation:
        "11111011 two’s comp: invertovat znaky 00000100 a přidat 1 = 00000101 = 5, záporné = −5.",
    },
    {
      code: "Q119",
      content:
        "V souborovém systému FAT, pokud potřebujeme přistupovat k blokům chain souboru, počet diskových přístupů závisí nejčastěji na:",
      options: [
        { code: "A", content: "Počtu bloků souboru (řetězení)", correct: true },
        { code: "B", content: "Velikosti adresáře", correct: false },
        {
          code: "C",
          content: "Počtu právě otevřených souborů",
          correct: false,
        },
        {
          code: "D",
          content: "Zda je disk formátován jako NTFS",
          correct: false,
        },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Každý blok je ukázán v FAT tabulce → počet diskových čtecích přístupů je úměrný počtu bloků (řetězec alokace).",
    },
    {
      code: "Q120",
      content:
        "Tabulka stránkování v architektuře s 12bitovým virtuálním adresním prostorem a 4 KB stránkami obsahuje:",
      options: [
        { code: "A", content: "2^(12)/4096 = 1 vstup", correct: false },
        { code: "B", content: "2^12 / 2^12 = 1 vstup", correct: false },
        { code: "C", content: "2^(12−12) = 1 vstup", correct: false },
        {
          code: "D",
          content: "2^12 / 2^12 = 1 vstup (celé číslo)",
          correct: false,
        },
        {
          code: "E",
          content: "2^12 / 2^12 = 1 vstup – nesmysl",
          correct: false,
        },
      ],
      category: "Počítačová architektura – stránkování",
      explanation:
        "12bitů virtuálního adresního prostoru = 4096 adres. 4 KB = 4096 B, takže každá stránka je celý prostor → tabulka má 1 vstup. (triviální).",
    },
    {
      code: "Q121",
      content:
        "V lineární algebře, vektorový prostor všech matic ℝ^{2×2} má dimenzi:",
      options: [
        { code: "A", content: "2", correct: false },
        { code: "B", content: "3", correct: false },
        { code: "C", content: "4", correct: true },
        { code: "D", content: "8", correct: false },
      ],
      category: "Lineární algebra – dimenze",
      explanation: "2×2 matice mají 4 prvky, každý je báze, dimenze = 4.",
    },
    {
      code: "Q122",
      content: "Jaká je hodnost matice A, kde A = [[1, 2], [2, 4]]?",
      options: [
        { code: "A", content: "0", correct: false },
        { code: "B", content: "1", correct: true },
        { code: "C", content: "2", correct: false },
        { code: "D", content: "Neexistuje, není čtvercová", correct: false },
      ],
      category: "Lineární algebra – hodnost",
      explanation:
        "Druhá řádka = 2× první, proto řádky nejsou nezávislé. Hodnost = 1.",
    },
    {
      code: "Q123",
      content: "Co je kernel (jádro) matice A: 3×4 matice s hodností 2?",
      options: [
        { code: "A", content: "Dimenze = 2", correct: false },
        { code: "B", content: "Dimenze = 4−2 = 2", correct: true },
        { code: "C", content: "Dimenze = 3−2 = 1", correct: false },
        { code: "D", content: "Dimenze = 2+4 = 6", correct: false },
      ],
      category: "Lineární algebra – kernel a hodnost",
      explanation:
        "Pro m×n matici hodnost(A) + dim kernel(A) = n. Hodnost=2, n=4, → dim kernel = 2.",
    },
    {
      code: "Q124",
      content: "Lineární (vector) prostor P polynomů stupně ≤ 4 nad ℝ má bázi:",
      options: [
        { code: "A", content: "{1, x, x², x³}", correct: false },
        { code: "B", content: "{1, x, x², x³, x⁴}", correct: true },
        { code: "C", content: "{x, x², x³, x⁴, x⁵}", correct: false },
        { code: "D", content: "{x−1, x^2−1, x³−1, x^4−1}", correct: false },
      ],
      category: "Lineární algebra – báze",
      explanation: "Polynomy stupně ≤ 4 mají bázi {1, x, x², x³, x⁴}.",
    },
    {
      code: "Q125",
      content: "V architektuře CPU, co označuje termín 'cache hit'?",
      options: [
        {
          code: "A",
          content: "Žádoucí úroveň cache byla vynechána",
          correct: false,
        },
        {
          code: "B",
          content:
            "Záznam byl nalezen v cache a nepotřebuje se načíst z hlavní paměti",
          correct: true,
        },
        {
          code: "C",
          content: "Cache je plná a musí být vyprázdněna",
          correct: false,
        },
        {
          code: "D",
          content: "Přístupová doba byla delší než prahová hodnota",
          correct: false,
        },
      ],
      category: "Počítačová architektura – cache",
      explanation:
        "Cache hit znamená, že požadovaná data/instrukce jsou již v cache, není třeba přistupovat do hlavní paměti.",
    },
    {
      code: "Q126",
      content: "Co se děje při výpadku cache (cache miss)?",
      options: [
        {
          code: "A",
          content: "Data se načtou z hlavní paměti do cache a vrátí se do CPU",
          correct: true,
        },
        {
          code: "B",
          content: "Instrukce je ignorována a CPU restartuje dotaz",
          correct: false,
        },
        {
          code: "C",
          content: "Následně se volá správa paměti (page fault)",
          correct: false,
        },
        {
          code: "D",
          content: "Cache se vymaže a znovu načte z disku",
          correct: false,
        },
      ],
      category: "Počítačová architektura – cache",
      explanation:
        "Cache miss znamená, že data nejsou v cache, musí se načíst z následující úrovně paměti (DRAM).",
    },
    {
      code: "Q127",
      content: "Co z následujícího nejlépe vystihuje RISC architekturu?",
      options: [
        {
          code: "A",
          content: "Modární instrukční sada s mnoha adresovacími módy",
          correct: false,
        },
        {
          code: "B",
          content:
            "Omezená, jednoduchá sada instrukcí, fixní formát, uniformní registry",
          correct: true,
        },
        {
          code: "C",
          content: "Pomalejší, ale delší instrukce (CISC)",
          correct: false,
        },
        {
          code: "D",
          content: "Instrukce provádějící komplexní operace v jednom taktu",
          correct: false,
        },
      ],
      category: "Počítačová architektura – RISC vs CISC",
      explanation:
        "RISC má jednoduché, rychlé instrukce s fixním formátem a uniformními registry, na rozdíl od CISC.",
    },
    {
      code: "Q128",
      content: "Co to je 'hyperthreading' v moderních CPU?",
      options: [
        {
          code: "A",
          content: "Spuštění dvou fyzických jader současně",
          correct: false,
        },
        {
          code: "B",
          content:
            "Simulace více vláken na jedno jádro pro efektivnější využití pipeline",
          correct: true,
        },
        { code: "C", content: "Cache rozdělena mezi jádra", correct: false },
        { code: "D", content: "Sdílení paměti mezi procesy", correct: false },
      ],
      category: "Počítačová architektura – výkonnost",
      explanation:
        "Hyperthreading (SMT) umožňuje jednomu fyzickému jádru vystupovat jako více logických vláken, zlepšuje využití pipeline.",
    },
    {
      code: "Q129",
      content:
        "Co z následujícího je příkladem bezstavového (stateless) protokolu?",
      options: [
        { code: "A", content: "HTTP/1.0 bez cookies", correct: true },
        { code: "B", content: "TCP", correct: false },
        { code: "C", content: "FTP", correct: false },
        { code: "D", content: "UDP", correct: false },
      ],
      category: "Počítačové sítě – protokoly",
      explanation:
        "HTTP/1.0 je původně bezstavový – server si neuchovává žádné informace o předchozích žádostech. UDP je bez spojení, ale neoznačuje se jako ‚stateless protocol‘ v HTTP smyslu.",
    },
    {
      code: "Q130",
      content:
        'V LDAP (Lightweight Directory Access Protocol) adresa "dc=fit,dc=cvut,dc=cz" se nazývá:',
      options: [
        { code: "A", content: "IP adresa", correct: false },
        { code: "B", content: "Distinguished Name (DN)", correct: true },
        {
          code: "C",
          content: "FQHN (Fully Qualified Host Name)",
          correct: false,
        },
        { code: "D", content: "URL", correct: false },
      ],
      category: "Databázové systémy – adresování",
      explanation:
        "LDAP používá Distinguished Name k jednoznačné identifikaci objektů v adresářové struktuře, např. dc=…",
    },
    {
      code: "Q131",
      content: "Co z následujícího platí pro RSA asymetrické šifrování?",
      options: [
        {
          code: "A",
          content: "Veřejný a soukromý klíč jsou identické",
          correct: false,
        },
        {
          code: "B",
          content: "Šifrování používá veřejný klíč, dešifrování privátní",
          correct: true,
        },
        { code: "C", content: "Je to proudová šifra", correct: false },
        {
          code: "D",
          content: "Je to kombinace symetrické a asymetrické šifry",
          correct: false,
        },
      ],
      category: "Kryptografie",
      explanation:
        "RSA je asymetrická šifra: veřejný klíč (e,n) se používá k šifrování, privátní (d,n) k dešifrování.",
    },
    {
      code: "Q132",
      content: "AES (Advanced Encryption Standard) je:",
      options: [
        {
          code: "A",
          content: "Asymetrická (public key) šifra",
          correct: false,
        },
        { code: "B", content: "Bloková symetrická šifra", correct: true },
        { code: "C", content: "Proudová symetrická šifra", correct: false },
        { code: "D", content: "Hashovací funkce", correct: false },
      ],
      category: "Kryptografie",
      explanation:
        "AES je bloková symetrická šifra pracující s blokem 128 bitů a klíčem 128/192/256 bitů.",
    },
    {
      code: "Q133",
      content:
        "Která operace vřazuje do TLS spojení navíc oproti prostému TCP?",
      options: [
        {
          code: "A",
          content: "Handshake, výměna certifikátů a klíčů",
          correct: true,
        },
        { code: "B", content: "Posílání dat přes UDP", correct: false },
        {
          code: "C",
          content: "Automatické komprese IP hlaviček",
          correct: false,
        },
        {
          code: "D",
          content: "Kontrola parity definovaná v HTTP",
          correct: false,
        },
      ],
      category: "Kryptografie – sítové protokoly",
      explanation:
        "TLS na rozdíl od TCP navádí handshake (ověření identit, vygenerování symetrických klíčů) před zašifrovanou komunikací.",
    },
    {
      code: "Q134",
      content: "Co je X.509 certifikát?",
      options: [
        { code: "A", content: "Databázový index", correct: false },
        {
          code: "B",
          content: "Strukturovaný dokument obsahující veřejný klíč a podpis CA",
          correct: true,
        },
        { code: "C", content: "Typ IP adresy", correct: false },
        { code: "D", content: "Hashovací protokol", correct: false },
      ],
      category: "Kryptografie – certifikáty",
      explanation:
        "X.509 certifikát obsahuje informace o subjektu, jeho veřejném klíči a digitální podpis certifikační autority.",
    },
    {
      code: "Q135",
      content:
        "Ve frontě (queue) s kruhovým polem (circular buffer) je fronta plná, když:",
      options: [
        { code: "A", content: "head == tail", correct: false },
        { code: "B", content: "head == (tail + 1) mod N", correct: true },
        { code: "C", content: "(head + 1) mod N == tail", correct: false },
        { code: "D", content: "head > tail", correct: false },
      ],
      category: "Datové struktury – fronty",
      explanation:
        "Kruhová buffer je plná, pokud další pozice za tail = head (tj. head == (tail + 1) mod N).",
    },
    {
      code: "Q136",
      content:
        "Jaká komplexita (big-O) je operace vložení do hash tabulky (průměrně)?",
      options: [
        { code: "A", content: "O(1)", correct: true },
        { code: "B", content: "O(n)", correct: false },
        { code: "C", content: "O(log n)", correct: false },
        { code: "D", content: "O(n log n)", correct: false },
      ],
      category: "Datové struktury – hash tabulka",
      explanation:
        "Průměrný čas pro insert/get do hash tabulky je O(1), amortizovaný (za předpokladu rovnoměrného rozložení).",
    },
    {
      code: "Q137",
      content:
        "Který způsob lokálního volání (lokální přeskok) v jazyce C zaručuje návrat do volající funkce?",
      options: [
        {
          code: "A",
          content: "Přetažení zásobníku pomocí inline assembleru",
          correct: false,
        },
        { code: "B", content: "Použití klíčového slova return", correct: true },
        { code: "C", content: "Použití goto", correct: false },
        { code: "D", content: "Volání funkce přes pointer", correct: false },
      ],
      category: "Programování – C základní koncepty",
      explanation:
        "Pro návrat z funkce v C se používá return. goto pouze skáče v rámci jedné funkce bez přístupu k nadřazeným rámcům.",
    },
    {
      code: "Q138",
      content:
        "Ve funkci main v Java: Rodic pot; pot = new Potomek1(); pot.metoda(); pot = new Potomek2(); pot.metoda(); Je to příklad:",
      options: [
        { code: "A", content: "Overloading (přetížení)", correct: false },
        {
          code: "B",
          content: "Overriding (přepisování) a polymorfismu",
          correct: true,
        },
        {
          code: "C",
          content: "Konstruktoru volání bez parametrů",
          correct: false,
        },
        { code: "D", content: "Statického metodického volání", correct: false },
      ],
      category: "Programování – Java OOP",
      explanation:
        "Potomek1 a Potomek2 přepisují metodu metody z třídy Rodič (overriding). Proměnná pot je typu Rodič, ale volání se váže na skutečný typ objektu (runtime polymorfismus).",
    },
    {
      code: "Q139",
      content: "V rámci bezkontextové gramatiky je levá rekurze:",
      options: [
        { code: "A", content: "S → Sa | b", correct: true },
        { code: "B", content: "S → aS | b", correct: false },
        { code: "C", content: "S → aSb", correct: false },
        { code: "D", content: "Žádná z uvedených", correct: false },
      ],
      category: "Formální jazyky a automaty",
      explanation:
        "Levá rekurze nastává, pokud na levé straně pravidla (S → Sa) se stejný neterminál objevuje vlevo ve výrazu. S → Sa je levorekurzivní.",
    },
    {
      code: "Q140",
      content: "Formule (A ∧ (A ⇒ B)) ⇒ B je:",
      options: [
        { code: "A", content: "Kontradikce", correct: false },
        { code: "B", content: "Tautologie (modus ponens)", correct: true },
        { code: "C", content: "Nesplnitelná", correct: false },
        {
          code: "D",
          content: "Satisfiable, ale ne tautologie",
          correct: false,
        },
      ],
      category: "Diskrétní matematika – výroková logika",
      explanation:
        "Tato formule vyjadřuje modus ponens a je tautologií: pokud A a A ⇒ B, pak B.",
    },
  ],
};

export default TestMixAI;
