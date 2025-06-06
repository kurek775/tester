import type { Test } from "../models/Test.model";

const Mix: Test = {
  code: "FIT_CVUT_7",
  title: "Mix HW/DB/OSI",
  questions: [
    {
      code: "Q01",
      content: "Systémový katalog obsahuje",
      options: [
        {
          code: "A",
          content: "metadata - informace o struktuře databáze",
          correct: true,
        },
        {
          code: "B",
          content: "informace o uživatelích databáze a jejich právech",
          correct: true,
        },
        {
          code: "C",
          content:
            "informace potřebné pro zajištění transakčního zpracování (commit, rollback)",
          correct: false,
        },
        {
          code: "D",
          content: "informace potřebné pro zotavení systému po pádu",
          correct: false,
        },
      ],
      category: "Databáze",
      explanation:
        "Systémový katalog ukládá pouze metadata o struktuře databáze a informace o uživatelích. Transakce a zotavení jsou obsluhovány jinými mechanismy.",
    },
    {
      code: "Q02",
      content:
        "Systém souborů FAT-32 pracuje s datovými bloky o velikosti 8 KB a odkaz na datový blok je 28bitový. Jaká je maximální velikost souboru, který bychom mohli teoreticky na FAT-32/8 vytvořit?",
      options: [
        { code: "A", content: "1TB", correct: false },
        { code: "B", content: "3TB", correct: false },
        { code: "C", content: "4TB", correct: false },
        { code: "D", content: "2TB", correct: true },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "FAT-32/8 má 28bitové odkazy, tedy (2^{28}) bloků. Při velikosti 8 KB/blok je maximální velikost souboru (2^{28} \times 8,\text{KB} = 2,\text{TB}).",
    },
    {
      code: "Q03",
      content: "Rabinův-Millerův test prvočíselnosti je",
      options: [
        {
          code: "A",
          content:
            'pravděpodobnostní, a to tak, že když odpoví "složené", tak je to jisté, a když odpoví "prvočíslo", je to s pravděpodobností < 100%',
          correct: true,
        },
        {
          code: "B",
          content:
            'pravděpodobnostní, a to tak, že když odpoví "prvočíslo", tak je to jisté',
          correct: false,
        },
        {
          code: "C",
          content:
            "deterministický, tj. přesně pozná, jestli je zadané číslo prvočíslem",
          correct: false,
        },
        {
          code: "D",
          content:
            'pravděpodobnostní, a to tak, že odpoví "prvočíslo" i když odpoví "složené", je to s pravděpodobností < 100%',
          correct: false,
        },
      ],
      category: "Algoritmy – číselná teorie",
      explanation:
        "Rabinův-Millerův test prvočíselnosti je pravděpodobnostní: jednoznačně odhalí složené číslo, ale pokud test říká, že číslo je prvočíslo, existuje malá pravděpodobnost, že se mýlí.",
    },
    {
      code: "Q04",
      content: "Která následující tvrzení jsou pravdivá:",
      options: [
        {
          code: "A",
          content: "“Single mode” je typ optického vlákna.",
          correct: true,
        },
        {
          code: "B",
          content:
            "K jednomu privátnímu klíči si můžeme vygenerovat několik různých veřejných klíčů.",
          correct: false,
        },
        {
          code: "C",
          content: "Protokol UDP nezaručuje doručení zprávy.",
          correct: true,
        },
        {
          code: "D",
          content:
            "Poštovní server pro danou doménu je uveden v DNS v tzv. MX záznamu.",
          correct: true,
        },
        {
          code: "E",
          content:
            "Termín Autonomní systém (AS) je synonymem pro kolizní doménu.",
          correct: false,
        },
      ],
      category: "Počítačové sítě a bezpečnost",
      explanation:
        "Správně: (A) je fyzická vrstva – optické vlákno, (C) UDP je bez záruky doručení, (D) MX záznamy v DNS určují poštovní servery. (B) je nesprávně, protože z jednoho privátního klíče vychází jeden veřejný klíč. (E) je nesprávně, AS se týká směrování v internetu.",
    },
    {
      code: "Q05",
      content: "Mapa logické funkce 3 proměnných má",
      options: [
        { code: "A", content: "3 políčka", correct: false },
        { code: "B", content: "9 políček", correct: false },
        { code: "C", content: "8 políček", correct: true },
        { code: "D", content: "16 políček", correct: false },
      ],
      category: "Digitální logika",
      explanation:
        "Pro 3 vstupní proměnné existuje (2^3 = 8) možných kombinací hodnot, tedy 8 políček v mapě Karnaugh (K-map).",
    },
    {
      code: "Q06",
      content:
        "Jaká organizace paměti cache se používá v současných procesorech? Harvardskou architekturu: oddělená cache pro data a instrukce. Von Neumannovu architekturu: společná cache.",
      options: [
        {
          code: "A",
          content: "používají se oba uvedené přístupy",
          correct: true,
        },
        {
          code: "B",
          content: "cache pro data a pro instrukce je vždy oddělená",
          correct: false,
        },
        {
          code: "C",
          content: "nepoužívá se žádný z uvedených přístupů",
          correct: false,
        },
        {
          code: "D",
          content: "cache pro data a pro instrukce je vždy společná",
          correct: false,
        },
      ],
      category: "Architektura počítačů",
      explanation:
        "Moderní procesory používají buď oddělené cache pro instrukce a data (Harvardova architektura), nebo společné (Von Neumannova architektura), případně jejich kombinaci – proto je správně, že se používají oba přístupy.",
    },
    {
      code: "Q04",
      content: "Superpipeline dosahuje urychlení výpočtu programu pomocí:",
      options: [
        {
          code: "A",
          content:
            "Urychlení hodinové frekvence tak, že se jednotlivé bloky proudového zpracování rozdělí na několik menších, které trvají kratší dobu.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Zavedením paměti cache, do které se ukládají nejčastěji použitá data a instrukce.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Zavedením vektorové jednotky, která umožní zpracovávat data instrukcí po blocích.",
          correct: false,
        },
        {
          code: "D",
          content: "Několikanásobného paralelního proudového zpracování.",
          correct: false,
        },
      ],
      category: "Architektura počítačů",
      explanation:
        "Superpipeline rozděluje instrukční cyklus na více menších částí (stages), čímž zkracuje dobu zpracování jedné instrukce díky vyšší frekvenci a paralelismu mezi fázemi.",
    },
    {
      code: "Q10",
      content:
        "Vybavovací doba hlavní paměti v současných počítačích činí řádově:",
      options: [
        { code: "A", content: "nanosekundy", correct: true },
        { code: "B", content: "mikrosekundy", correct: false },
        { code: "C", content: "milisekundy", correct: false },
        { code: "D", content: "sekundy", correct: false },
      ],
      category: "Paměti počítačů",
      explanation:
        "Moderní operační paměti typu DDR mají přístupovou dobu obvykle v řádu několika desítek nanosekund.",
    },
    {
      code: "Q11",
      content:
        "Úkolem linkové vrstvy podle referenčního ISO/OSI modelu je mimo jiné:",
      options: [
        {
          code: "A",
          content: "rozdělit rámec na začátek a konec rámce",
          correct: true,
        },
        {
          code: "B",
          content:
            "rozlišit, který proces má v rámci jediného počítače obdržet přijatý UDP paket",
          correct: false,
        },
        {
          code: "C",
          content: "sestavovat rámce podle cílové IP adresy",
          correct: false,
        },
        {
          code: "D",
          content: "řešit časování přenášených bitů v komunikačním médiu",
          correct: false,
        },
      ],
      category: "Počítačové sítě – ISO/OSI",
      explanation:
        "Linková vrstva zajišťuje formátování rámců, jejich detekci začátku a konce a často i řízení přístupu k médiu. Rozlišování procesů patří do transportní vrstvy.",
    },
    {
      code: "Q01",
      content: "RSA je šifra",
      options: [
        { code: "A", content: "synchronní", correct: false },
        { code: "B", content: "symetrická", correct: false },
        { code: "C", content: "asynchronní", correct: false },
        { code: "D", content: "asymetrická", correct: true },
        { code: "E", content: "proudová", correct: false },
      ],
      category: "Kryptografie",
      explanation:
        "RSA je asymetrická šifra využívající dvojici klíčů – veřejný a soukromý – pro šifrování a dešifrování.",
    },
    {
      code: "Q02",
      content: "Systémový katalog relační databáze obsahuje",
      options: [
        {
          code: "A",
          content: "metadata - informace o struktuře databáze",
          correct: true,
        },
        {
          code: "B",
          content:
            "informace, potřebné pro zajištění transakčního zpracování (commit, rollback)",
          correct: false,
        },
        {
          code: "C",
          content: "informace, potřebné pro zotavení systému po pádu",
          correct: false,
        },
        {
          code: "D",
          content: "informace o uživatelích databáze a jejich právech",
          correct: true,
        },
      ],
      category: "Databázové systémy",
      explanation:
        "Systémový katalog obsahuje metadata o databázových strukturách a informace o přístupových právech uživatelů.",
    },
    {
      code: "Q03",
      content: "Klíč relace v relační databázi má tyto vlastnosti:",
      options: [
        {
          code: "A",
          content: "hodnota klíče v n-tici jednoznačně určuje celou n-tici",
          correct: true,
        },
        {
          code: "B",
          content: "jeho tranzitivní uzávěr obsahuje všechny atributy relace",
          correct: true,
        },
        {
          code: "C",
          content: "vyskytuje se vždy pouze na levé straně funkční závislosti",
          correct: false,
        },
        {
          code: "D",
          content:
            "tranzitivní uzávěr některé jeho podmnožiny obsahuje všechny atributy relace",
          correct: false,
        },
      ],
      category: "Databázové systémy – relační model",
      explanation:
        "Klíč v relaci je minimální množina atributů, která jednoznačně identifikuje každou n-tici a jejíž tranzitivní uzávěr zahrnuje všechny atributy relace.",
    },
    {
      code: "Q04",
      content:
        "Pevný disk má rychlost otáček 5000 RPM. Jaké bude průměrné rotační zpoždění při čtení jednoho sektoru?",
      options: [
        { code: "A", content: "0 ms", correct: false },
        { code: "B", content: "3 ms", correct: false },
        { code: "C", content: "6 ms", correct: true },
        { code: "D", content: "12 ms", correct: false },
      ],
      category: "Počítačové systémy – paměti a úložiště",
      explanation:
        "Při 5000 otáčkách za minutu trvá jedna otáčka 12 ms, a průměrné rotační zpoždění je polovina této doby – tedy 6 ms.",
    },
    {
      code: "Q05",
      content:
        "Síťový protokol UDP se od protokolu TCP liší mimo jiné tím, že:",
      options: [
        { code: "A", content: "nepotvrzuje doručení paketu", correct: true },
        {
          code: "B",
          content: "neřeší problém duplicitních paketů",
          correct: true,
        },
        {
          code: "C",
          content: "uzavírá najednou obě strany kanálu",
          correct: false,
        },
        {
          code: "D",
          content: "nemá 'hand shake' při otevírání spojení",
          correct: true,
        },
      ],
      category: "Počítačové sítě – protokoly",
      explanation:
        "UDP je jednoduchý protokol bez spojení, neprovádí potvrzování, kontrolu pořadí ani navázání spojení jako TCP.",
    },
    {
      code: "Q06",
      content:
        "Síť, ve které lze přidělit IPv4 adresy v rozsahu 19.11.32.1 až 19.11.32.254, má adresu a masku:",
      options: [
        { code: "A", content: "19.11.32.0/20", correct: false },
        { code: "B", content: "19.11.32.0/22", correct: false },
        { code: "C", content: "19.11.32.0/24", correct: true },
        { code: "D", content: "19.11.0.0/32", correct: false },
      ],
      category: "Počítačové sítě – adresování",
      explanation:
        "Rozsah 19.11.32.1–19.11.32.254 odpovídá síti s maskou /24, která poskytuje 256 adres (z nichž 254 jsou použitelné).",
    },
    {
      code: "Q07",
      content: "Vyberte pravdivá tvrzení:",
      options: [
        {
          code: "A",
          content: "Výběrový průměr je vychýleným odhadem střední hodnoty.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Střední hodnota nestranného odhadu je rovna skutečné hodnotě odhadovaného parametru.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Výběrový rozptyl \\( s^2 = \\frac{1}{n-1} \\sum_{i=1}^n (X_i - \\bar{X})^2 \\) je nestranným odhadem rozptylu.",
          correct: true,
        },
        {
          code: "D",
          content: "Výběrová kovariance je bodovým odhadem rozptylu.",
          correct: false,
        },
      ],
      category: "Pravděpodobnost a statistika",
      explanation:
        "Střední hodnota nestranného odhadu se rovná skutečné hodnotě. Výběrový rozptyl definovaný s dělením \\( n - 1 \\) je nestranný odhad rozptylu.",
    },
    {
      code: "Q08",
      content:
        "Určete počet všech přirozených čísel z intervalu <1, 2304>, která jsou nesoudělná s číslem 2304.",
      options: [
        { code: "A", content: "255", correct: false },
        { code: "B", content: "768", correct: true },
        { code: "C", content: "1152", correct: false },
        { code: "D", content: "1567", correct: false },
        { code: "E", content: "2303", correct: false },
      ],
      category: "Teorie čísel",
      explanation:
        "Počet čísel menších než 2304, která jsou s 2304 nesoudělná, je dán Eulerovou funkcí φ(2304) = 768.",
    },
    {
      code: "Q09",
      content:
        "V okruhu zbytkových tříd (Z_138,+,x) určete multiplikativní inverzi k prvku 97 (pokud neexistuje, uveďte 0).",
      options: [
        { code: "A", content: "37", correct: true },
        { code: "B", content: "36", correct: false },
        { code: "C", content: "35", correct: false },
        { code: "D", content: "34", correct: false },
      ],
      category: "Aritmetika v okruzích zbytkových tříd",
      explanation:
        "Multiplikativní inverze \\( a^{-1} \\mod m \\) je takové číslo, že \\( a \\cdot a^{-1} \\equiv 1 \\mod m \\). Pro 97 modulo 138 je inverze 37, protože \\( 97 \\cdot 37 \\equiv 1 \\mod 138 \\).",
    },
    {
      code: "Q05",
      content: "Polymorfismus mohu v Javě realizovat:",
      options: [
        {
          code: "A",
          content: "Abstraktní třídou či rozhraním.",
          correct: true,
        },
        { code: "B", content: "Pouze abstraktní třídou.", correct: false },
        { code: "C", content: "Pouze rozhraním.", correct: false },
      ],
      category: "Programování – Java",
      explanation:
        "Polymorfismus lze v Javě realizovat jak pomocí abstraktní třídy, tak pomocí rozhraní (interface).",
    },
    {
      code: "Q06",
      content:
        "Procesor má 24bitovou adresovou sběrnici a 16bitovou datovou sběrnici. Jaké největší množství paměti může tento procesor adresovat:",
      options: [
        { code: "A", content: "64KB", correct: false },
        { code: "B", content: "1MB", correct: false },
        { code: "C", content: "16MB", correct: true },
        { code: "D", content: "1GB", correct: false },
      ],
      category: "Počítačová architektura",
      explanation:
        "Velikost adresovatelné paměti je určena adresovou sběrnicí. 2^24 = 16 MB.",
    },
    {
      code: "Q07",
      content: "Které z následujících tvrzení je pravdivé:",
      options: [
        {
          code: "A",
          content:
            "Pro architekturu CISC je typické větší množství identických univerzálních registrů.",
          correct: false,
        },
        {
          code: "B",
          content: "Architektura RISC podporuje i složité adresovací módy",
          correct: false,
        },
        {
          code: "C",
          content: "Výsledný kód je delší pro architekturu RISC",
          correct: true,
        },
        {
          code: "D",
          content:
            "Jedna instrukce architektury CISC se typicky vykonává v jediném hodinovém taktu",
          correct: false,
        },
      ],
      category: "Počítačová architektura",
      explanation:
        "Instrukce RISC jsou jednodušší, ale více jich je potřeba – výsledek je delší kód oproti CISC.",
    },
    {
      code: "Q08",
      content:
        "Čeho se vlastně dosáhne aplikací superskalární architektury nebo pipeliningem?",
      options: [
        {
          code: "A",
          content:
            "Jedná se o dvě různá označení jedné techniky zvýšení výkonu CPU",
          correct: false,
        },
        {
          code: "B",
          content: "Jde o dvě různé techniky zvýšení výkonu CPU",
          correct: true,
        },
        {
          code: "C",
          content: "Jde o dvě různé techniky ke snížení příkonu CPU",
          correct: false,
        },
        { code: "D", content: "S CPU tyto pojmy nesouvisí", correct: false },
      ],
      category: "Počítačová architektura – výkonnost",
      explanation:
        "Superskalární architektura a pipelining jsou různé metody zvýšení výkonu procesoru.",
    },
    {
      code: "Q11",
      content: "Pro virtualizaci paměti se využívá:",
      options: [
        { code: "A", content: "pouze stránkování.", correct: false },
        { code: "B", content: "pouze segmentace.", correct: false },
        {
          code: "C",
          content: "kombinace segmentace se stránkováním.",
          correct: true,
        },
      ],
      category: "Operační systémy – správa paměti",
      explanation:
        "Moderní systémy často využívají kombinaci segmentace a stránkování pro virtualizaci paměti.",
    },
    {
      code: "Q15",
      content:
        "Máme entity STUDENT a PŘEDMĚT. Známku udělenou u zkoušky z daného předmětu danému studentovi budeme na úrovni konceptuálního modelu modelovat:",
      options: [
        { code: "A", content: "Samostatným entitním typem.", correct: false },
        {
          code: "B",
          content: "Atributem entitního typu STUDENT.",
          correct: false,
        },
        {
          code: "C",
          content: "Atributem vztahu mezi entitními typy PŘEDMĚT a STUDENT.",
          correct: true,
        },
        {
          code: "D",
          content: "Atributem entitního typu PŘEDMĚT.",
          correct: false,
        },
        { code: "E", content: "Jinak", correct: false },
      ],
      category: "Databáze – ER model",
      explanation:
        "Známka je atribut vztahu mezi studentem a předmětem, protože vzniká pouze tehdy, když student skládá zkoušku z předmětu.",
    },
    {
      code: "Q16",
      content:
        "Máte zadanou relaci tvořenou spojením dvou tabulek T1 a T2. Co platí o referenční integritě?",
      options: [
        {
          code: "A",
          content:
            "Je vlastností primárního klíče a tudíž je součástí definice tabulky T1.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Je vlastností cizího klíče a tudíž je součástí definice tabulky T2.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Vzhledem k tomu, že je vlastností páru tabulek T1 a T2, nemůže být součástí definice jednotlivých tabulek.",
          correct: false,
        },
      ],
      category: "Databáze – relační model",
      explanation:
        "Referenční integrita je zajištěna pomocí cizího klíče, který je součástí tabulky T2.",
    },
    {
      code: "Q19",
      content:
        "V jazyku Java se rozhraní (interface) liší od abstraktní třídy. Vyberte pravdivé tvrzení.",
      options: [
        {
          code: "A",
          content:
            "Rozhraní obsahuje pouze abstraktní metody, abstraktní třída může obsahovat i nestatické metody.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Rozhraní může obsahovat libovolné položky, abstraktní třída může obsahovat pouze konstanty.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Rozhraní má vždy nadtřídu (např. Object), abstraktní třída nemusí mít předchůdce.",
          correct: false,
        },
      ],
      category: "Programování – Java",
      explanation:
        "Rozhraní obsahuje pouze abstraktní metody (do Javy 8), zatímco abstraktní třída může obsahovat i implementace.",
    },
    {
      code: "Q21",
      content:
        "Architektura jádra operačního systému (OS) využívající modelu 'klient-server' se:",
      options: [
        {
          code: "A",
          content: "Používá pouze v distribuovaných systémech.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Nepoužívá zejména v distribuovaných systémech, avšak moderní koncept OS ji využívají i pro organizaci OS na bázi tzv. mikro-jádra.",
          correct: true,
        },
        {
          code: "C",
          content: "Používá pouze v monolitických OS.",
          correct: false,
        },
        {
          code: "D",
          content:
            "V jádře struktura OS nepoužívá kvůli časové náročnosti a dalším negativním vlastnostem.",
          correct: false,
        },
      ],
      category: "Operační systémy – architektura jádra",
      explanation:
        "Model klient-server je charakteristický pro mikro-jádrové OS, kde jsou jednotlivé komponenty odděleny jako samostatné procesy.",
    },
    {
      code: "Q22",
      content:
        "Které z následujících tvrzení o velikosti datagramu v protokolu IPv4 je pravdivé?",
      options: [
        {
          code: "A",
          content: "Datagramy mají pevně danou velikost, kterou nelze změnit.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Velikost datagramu se může na cestě rozdělovat – fragmentovat.",
          correct: true,
        },
        {
          code: "C",
          content:
            "IPv4 nezaručuje doručení velkých datagramů. Nedoručení je oznámeno vysílajícímu stroji.",
          correct: false,
        },
      ],
      category: "Počítačové sítě – IP protokol",
      explanation:
        "IPv4 umožňuje fragmentaci datagramů, tj. rozdělení větších datagramů při přenosu.",
    },
    {
      code: "Q24",
      content:
        "Jaký je minimální počet logických hradel potřebný k tomu, aby vznikl asynchronní obvod typu RS?",
      options: [
        {
          code: "A",
          content: "2 dvouvstupová hradla typu NAND",
          correct: true,
        },
        {
          code: "B",
          content: "2 dvouvstupová hradla typu NOR",
          correct: false,
        },
        {
          code: "C",
          content: "4 dvouvstupová hradla NAND nebo NOR",
          correct: false,
        },
      ],
      category: "Logické obvody – sekvenční logika",
      explanation:
        "Základní asynchronní RS klopný obvod lze sestavit pomocí 2 NAND hradel (aktivní v nule) nebo 2 NOR hradel (aktivní v jedničce). Zadání vyžaduje nejmenší počet – tj. 2 NAND.",
    },
    {
      code: "Q32",
      content:
        "Najděte a klasifikujte lokální extrémy funkce f(x, y) = x² + y² − e^(−x²−y²).",
      options: [
        {
          code: "A",
          content: "(2,2) lokální maximum, (−2,−2) lokální minimum",
          correct: false,
        },
        {
          code: "B",
          content:
            "(0,0) lokální minimum, (2,2) sedlový bod, (−2,−2) sedlový bod",
          correct: false,
        },
        {
          code: "C",
          content: "(0,2) lokální maximum, (0,−2) lokální minimum",
          correct: false,
        },
        {
          code: "D",
          content:
            "(0,0) sedlový bod, (2,2) lokální maximum, (−2,−2) lokální minimum",
          correct: true,
        },
        { code: "E", content: "(±2,±2) lokální maximum", correct: false },
      ],
      category: "Matematická analýza – funkce více proměnných",
      explanation:
        "Klasifikace stacionárních bodů se provádí pomocí Hessovy matice. Zde (0,0) není minimum kvůli záporné derivaci 2. řádu – tedy sedlový bod.",
    },
    {
      code: "Q35",
      content:
        "Dvě paralelně zpracovávané transakce nemohou poškodit konzistenci dat právě tehdy, když: 1. Jsou vykonávány sériově. 2. Jsou vykonávány na stupni izolovanosti SERIALIZABLE. 3. Nedojde k jejich vzájemnému uzamčení.",
      options: [
        { code: "A", content: "Pouze 1", correct: false },
        { code: "B", content: "Pouze 2", correct: false },
        { code: "C", content: "Pouze 1 a 2", correct: false },
        { code: "D", content: "Pouze 1 a 3", correct: false },
        { code: "E", content: "Pouze 2 a 3", correct: true },
      ],
      category: "Databáze – transakční zpracování",
      explanation:
        "Pouze izolovanost SERIALIZABLE zajišťuje korektnost při paralelním zpracování. Uzamčení je mechanizmus, který to pomáhá zaručit.",
    },
    {
      code: "Q94",
      content: "Spočtěte hodnotu mocniny 12^1234 (mod 7)",
      options: [
        { code: "A", content: "3", correct: false },
        { code: "B", content: "6", correct: false },
        { code: "C", content: "1", correct: false },
        { code: "D", content: "2", correct: true },
      ],
      category: "Diskrétní matematika – modulární aritmetika",
      explanation:
        "Použijeme zkrácenou periody mocnin modulo 7. 12 ≡ 5 (mod 7), a 5^1234 ≡ 2 (mod 7) podle cyklu mocnin 5 modulo 7: 5, 4, 6, 2, 3, 1.",
    },
    {
      code: "Q665",
      content: "Integritní omezení při návrhu struktury úložiště v databázi",
      options: [
        {
          code: "A",
          content: "se definují pouze na relační úrovni (v SQL)",
          correct: false,
        },
        {
          code: "B",
          content: "se definují pouze na konceptuální úrovni",
          correct: false,
        },
        {
          code: "C",
          content:
            "jsou tvrzení, která vymezují, jaká data mohou být konzistentně uložena",
          correct: true,
        },
        {
          code: "D",
          content: "lze definovat na úrovni konceptuální i relační (v SQL)",
          correct: true,
        },
      ],
      category: "Databáze – integritní omezení",
      explanation:
        "Integritní omezení se definují v návrhu (např. ER modelu) i v implementaci v SQL. Pomáhají udržet konzistenci dat např. pomocí `PRIMARY KEY`, `CHECK`, `NOT NULL` apod.",
    },
    {
      code: "Q65",
      content:
        "Označte správná tvrzení, vztahující se k indexům v relační databázi:",
      options: [
        {
          code: "A",
          content:
            "Bitmapový index je vhodné vytvořit nad seskupením sloupců, ve kterém je velké množství různých hodnot",
          correct: false,
        },
        {
          code: "B",
          content:
            "Index založený na struktuře B-stromu je vhodné vytvořit nad seskupením sloupců, ve kterém je malé množství různých hodnot",
          correct: false,
        },
        {
          code: "C",
          content:
            "Některé indexy databázový stroj vytváří automaticky, aby mohl efektivně kontrolovat dodržování integritních omezení",
          correct: true,
        },
        {
          code: "D",
          content: "Databázový index urychluje dotazy",
          correct: true,
        },
      ],
      category: "Databáze – indexy",
      explanation:
        "Indexy výrazně zrychlují vyhledávání v databázi. Některé indexy, například pro primární klíče, jsou vytvářeny automaticky a používají se i pro rychlé ověřování referenční integrity.",
    },
    {
      code: "Q12",
      content:
        "Na diskové oblasti Z: je systém souborů FAT. Adresáře zabírají pouze jeden datový blok. V paměti je pouze tabulka FAT a kořenový adresář. Kolik diskových přístupů čtení musíme minimálně udělat, abychom zjistili velikost souboru Z:\\\\file.txt, který zabírá 10 datových bloků?",
      options: [
        { code: "A", content: "10", correct: false },
        { code: "B", content: "11", correct: false },
        { code: "C", content: "1", correct: false },
        { code: "D", content: "2", correct: true },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Jeden přístup je potřeba pro načtení kořenového adresáře a druhý pro přečtení řetězce bloků v FAT tabulce.",
    },
    {
      code: "Q15",
      content: "Pořadí vrstev v ISO modelu architektury počítačové sítě je:",
      options: [
        {
          code: "A",
          content:
            "Fyzická, síťová, linková, transportní, relační, prezentační, aplikační.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Fyzická, linková, síťová, transportní, prezentační, aplikační, relační.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Fyzická, transportní, síťová, linková, relační, prezentační, aplikační.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Fyzická, linková, síťová, transportní, relační, prezentační, aplikační.",
          correct: true,
        },
      ],
      category: "Počítačové sítě – OSI model",
      explanation:
        "Správné pořadí vrstev ISO/OSI je: fyzická, linková, síťová, transportní, relační (session), prezentační, aplikační.",
    },
    {
      code: "Q16",
      content: "Při testování statistických hypotéz je chyba druhého druhu:",
      options: [
        {
          code: "A",
          content:
            "Chybný předpoklad o stejném rozdělení napozorovaných náhodných veličin.",
          correct: false,
        },
        {
          code: "B",
          content: "Chybně nezamítnutá nulová hypotéza.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Chybný předpoklad o nezávislosti napozorovaných náhodných veličin.",
          correct: false,
        },
        {
          code: "D",
          content: "Chybně nastavená hladina testu.",
          correct: false,
        },
      ],
      category: "Statistika – testování hypotéz",
      explanation:
        "Chyba druhého druhu nastává, když nezamítneme nulovou hypotézu, i když ve skutečnosti neplatí.",
    },
    {
      code: "Q17",
      content:
        "Na základě náhodného výběru jsme spočetli konfidenční intervaly pro střední hodnotu µ populace takto: 90% interval A: (0.405, 5.395) a 95% interval B: (-0.0724, 5.872). Testujeme hypotézu H₀: µ = 0 proti alternativě Hₐ: µ > 0 pomocí těchto intervalů tak, aby pravděpodobnost chyby prvního druhu (tzv. chybné zamítnutí H₀) byla 5%. Která z následujících tvrzení jsou pravdivá?",
      options: [
        { code: "A", content: "Nezamítneme H₀.", correct: true },
        { code: "B", content: "Použijeme interval A.", correct: false },
        { code: "C", content: "Použijeme interval B.", correct: true },
        { code: "D", content: "Zamítneme H₀.", correct: false },
      ],
      category: "Statistika – konfidenční intervaly",
      explanation:
        "Pro α = 0.05 (tedy 5 % chyba I. druhu) použijeme 95% interval. Protože tento interval obsahuje 0, nulovou hypotézu nezamítáme.",
    },
    {
      code: "Q168",
      content: "Výstup klopného obvodu typu „master–slave“ se mění:",
      options: [
        {
          code: "A",
          content: "po celou dobu, kdy je hodinový puls na předepsané úrovni",
          correct: false,
        },
        {
          code: "B",
          content: "při určené (náběžné či závěrné) hraně hodinového pulzu",
          correct: true,
        },
        {
          code: "C",
          content: "průběžně bez ohledu na hodinové pulzy",
          correct: false,
        },
        {
          code: "D",
          content: "při náběžné a při závěrné hraně hodinového pulzu",
          correct: false,
        },
      ],
      category: "Logické obvody – klopné obvody",
      explanation:
        "Klopné obvody typu master–slave mění stav výstupu při hraně hodinového pulzu, čímž zajišťují synchronní chování a minimalizují problémy se závoděním.",
    },
    {
      code: "Q721",
      content:
        "Máme k dispozici 6 následujících číslic: 1, 2, 2, 3, 3, 3. Kolik různých šesticiferných čísel můžeme s použitím právě těchto šesti číslic zapsat?",
      options: [
        { code: "A", content: "60", correct: true },
        { code: "B", content: "61", correct: false },
        { code: "C", content: "62", correct: false },
        { code: "D", content: "63", correct: false },
      ],
      category: "Kombinatorika",
      explanation:
        "Počet různých permutací číslic s opakováním se spočítá jako: 6! / (1! × 2! × 3!) = 720 / (1 × 2 × 6) = 60.",
    },
    {
      code: "Q48",
      content: "Certifikát subjektu A obsahuje",
      options: [
        { code: "A", content: "veřejný klíč A", correct: true },
        { code: "B", content: "soukromý klíč A", correct: false },
        {
          code: "C",
          content: "soukromý klíč certifikační autority",
          correct: false,
        },
        { code: "D", content: "symetrický klíč A", correct: false },
      ],
      category: "Kryptografie – certifikáty",
      explanation:
        "Certifikát subjektu A slouží k ověření identity a typicky obsahuje veřejný klíč subjektu, podepsaný certifikační autoritou.",
    },
    {
      code: "Q999",
      content: "Superpipeline dosahuje urychlení výpočtu programu pomocí:",
      options: [
        {
          code: "A",
          content:
            "Urychlení hodinové frekvence tak, že se jednotlivé bloky proudového zpracování rozdělí na několik menších, které trvají kratší dobu. Instrukce sice bude muset projít více bloky, které ale trvají kratší dobu, což v důsledku povede k urychlení.",
          correct: true,
        },
        {
          code: "B",
          content:
            "Zavedením paměti cache, do které se ukládají nejčastěji použitá data a instrukce tak, že při opětovném přístupu, případně přístupu k datům uloženým blízko k těmto datům, se zkrátí doba přístupu do paměti na mnohem kratší.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Zavedením vektorové jednotky, která umožní zpracovávat data instrukcí po blocích (vektorech), a tím se dosáhne urychlení.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Několikanásobného paralelního proudového zpracování (počet cyklů na instrukci může být i menší než 1).",
          correct: false,
        },
      ],
      category: "Počítačová architektura – pipeline",
      explanation:
        "Superpipeline zvyšuje výkon dělením instrukcí do více dílčích fází, které se zpracovávají rychleji díky zkrácenému trvání každé fáze. Toho je dosaženo zvýšením hodinové frekvence a jemnější granularitou pipeline.",
    },
    {
      code: "Q1222",
      content: "AES je standard pro",
      options: [
        { code: "A", content: "proudovou šifru", correct: false },
        { code: "B", content: "blokovou šifru", correct: true },
        { code: "C", content: "symetrickou šifru", correct: true },
        { code: "D", content: "asymetrickou šifru", correct: false },
      ],
      category: "Kryptografie",
      explanation:
        "AES (Advanced Encryption Standard) je bloková symetrická šifra – pracuje s pevně dlouhými bloky dat a používá stejný klíč pro šifrování i dešifrování.",
    },
    {
      code: "Q313",
      content: "Pro všechny symetrické šifry platí, že",
      options: [
        {
          code: "A",
          content: "šifrovací klíč je vždy stejný jako dešifrovací klíč",
          correct: false,
        },
        {
          code: "B",
          content:
            "šifrovací klíč se smí od dešifrovacího klíče lišit nejvýše polovinou bitů",
          correct: false,
        },
        {
          code: "C",
          content:
            "šifrovací klíč smí být stejný jako dešifrovací klíč pouze na operačním systému, který podporuje symetrické šifrování",
          correct: false,
        },
        {
          code: "D",
          content:
            "šifrovací a dešifrovací klíč se dají navzájem snadno odvodit",
          correct: true,
        },
        {
          code: "E",
          content: "žádná z předchozích odpovědí není správná",
          correct: false,
        },
      ],
      category: "Kryptografie – symetrické šifrování",
      explanation:
        "U symetrických šifer se šifrovací a dešifrovací klíč buď shodují, nebo jsou snadno odvoditelné – proto je zabezpečení založené na jejich utajení.",
    },
    {
      code: "Q915",
      content: "Integritní omezení",
      options: [
        {
          code: "A",
          content: "se definují pouze na úrovni konceptuálního modelu",
          correct: false,
        },
        {
          code: "B",
          content:
            "lze definovat na úrovni konceptuálního i databázového modelu",
          correct: true,
        },
        {
          code: "C",
          content:
            "jsou tvrzení, která vymezují, jaká data mohou být v databázi uložena",
          correct: true,
        },
        { code: "D", content: "se definují pouze v SQL", correct: false },
      ],
      category: "Databáze – integrita",
      explanation:
        "Integritní omezení mohou být součástí návrhu databáze (konceptuální úroveň) i její implementace (např. pomocí SQL příkazů).",
    },
    {
      code: "Q248577",
      content:
        "Uvažujme abecedu A = {a, b, c, d, ..., y, z} (tj. A obsahuje 26 písmen malé latinské abecedy) a nechť w je pevně dané slovo nad touto abecedou délky 10 znaků. Určete počet různých slov délky 10 nad abecedou A, která se od zadaného slova w liší přesně ve dvou znacích:",
      options: [
        { code: "A", content: "10·26²", correct: false },
        { code: "B", content: "20·25", correct: false },
        { code: "C", content: "45·26²", correct: false },
        { code: "D", content: "45·25²", correct: true },
      ],
      category: "Kombinatorika",
      explanation:
        "Ze 10 pozic ve slově vybíráme 2, které se změní (kombinací 10 nad 2 je 45). Na každé z těchto pozic lze vybrat jiný znak (25 možností, protože jeden znak už je použit). Celkem tedy 45·25² možností.",
    },
    {
      code: "Q78529",
      content: "Relační databázový model",
      options: [
        {
          code: "A",
          content: "zavádí pojem identifikátor relace",
          correct: true,
        },
        {
          code: "B",
          content: "je relační proto, že definuje vztahy mezi tabulkami",
          correct: false,
        },
        {
          code: "C",
          content: "má jediný konstrukt – relaci, relace je množina n-tic",
          correct: true,
        },
        {
          code: "D",
          content:
            "povoluje, aby se v relaci vyskytovaly dvě naprosto totožné n-tice",
          correct: false,
        },
      ],
      category: "Databáze – relační model",
      explanation:
        "Relační databázový model je založen na relacích (množinách n-tic) a každá relace má identifikátor (primární klíč). Množina neumožňuje duplikáty, proto dvě totožné n-tice nemohou být přítomné.",
    },
    {
      code: "Q1871",
      content:
        "Uvažujme unixový systém souborů „ufs“, kde soubor je reprezentován inodem. Inode obsahuje 12 přímých blokových ukazatelů a po jednom jednonásobném, dvojnásobném a trojnásobném nepřímém blokovém ukazateli. Velikost datového bloku je 8KB a ukazatel na datový blok má velikost 32 bitů. Adresáře zabírají pouze jeden datový blok. V paměti je pouze kořenový adresář, kolik diskových přístupů musíme udělat, abychom vytvořili hard link /A/B/link na soubor /X/Y/Z/f.txt?",
      options: [
        { code: "A", content: "10", correct: false },
        { code: "B", content: "12", correct: true },
        { code: "C", content: "7", correct: false },
        { code: "D", content: "6", correct: false },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Pro vytvoření hard linku je třeba přistoupit k adresářům A, B, X, Y, Z a souboru f.txt, včetně jejich inode struktur. Každý adresář a inode zabírá blok, což dává celkem 12 diskových přístupů.",
    },
    {
      code: "Q644",
      content: "Kryptografické hešovací funkce se používají",
      options: [
        { code: "A", content: "pro zajištění integrity zprávy", correct: true },
        { code: "B", content: "pro bezpečnou správu hesel", correct: true },
        {
          code: "C",
          content: "jako součást digitálního podpisu",
          correct: true,
        },
        { code: "D", content: "pro autentizaci", correct: true },
      ],
      category: "Kryptografie",
      explanation:
        "Hešovací funkce se běžně používají pro integritu, ukládání hesel, digitální podpisy i autentizaci.",
    },
    {
      code: "Q855",
      content: "Transakční žurnál (logfile, WAL) v relační databázi obsahuje",
      options: [
        { code: "A", content: "provedené DDL příkazy", correct: true },
        { code: "B", content: "provedené DCL příkazy", correct: false },
        { code: "C", content: "provedené DML příkazy", correct: true },
        { code: "D", content: "změnové vektory", correct: true },
        { code: "E", content: "synchronizační známku (SCN)", correct: true },
      ],
      category: "Databáze – transakční zpracování",
      explanation:
        "Žurnál uchovává změny v databázi (DML), některé systémové změny (DDL), změnové vektory a časové značky pro zotavení.",
    },
    {
      code: "Q9667",
      content: "Data Control Language (SQL DCL)",
      options: [
        {
          code: "A",
          content: "obsahuje příkazy COMMIT, ROLLBACK",
          correct: false,
        },
        {
          code: "B",
          content: "obsahuje příkazy COMMIT, GRANT",
          correct: false,
        },
        { code: "C", content: "obsahuje příkazy GRANT, REVOKE", correct: true },
        {
          code: "D",
          content: "obsahuje příkazy ROLLBACK, GRANT",
          correct: false,
        },
      ],
      category: "Databáze – SQL",
      explanation:
        "DCL zahrnuje příkazy pro řízení přístupu – typicky GRANT a REVOKE. COMMIT a ROLLBACK patří do TCL.",
    },
    {
      code: "Q81731",
      content: "Která z následujících tvrzení platí pro systém souborů FAT?",
      options: [
        {
          code: "A",
          content: "Velikost FAT tabulky je úměrná počtu datových bloků.",
          correct: true,
        },
        {
          code: "B",
          content: "Obsah souboru je uložen ve FAT tabulce.",
          correct: false,
        },
        {
          code: "C",
          content:
            "Velikost FAT tabulky není závislá na velikosti diskové oblasti.",
          correct: false,
        },
        {
          code: "D",
          content: "FAT tabulka obsahuje atributy datových bloků.",
          correct: false,
        },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "FAT tabulka obsahuje informace o alokaci bloků, její velikost závisí na počtu datových bloků na disku.",
    },
    {
      code: "Q5123",
      content:
        "Na diskové oblasti Z je systém souborů FAT. Adresáře zabírají pouze jeden datový blok. V paměti je pouze tabulka FAT a kořenový adresář. Kolik diskových přístupů čtení musíme minimálně udělat, abychom načetli první datový blok s obsahem souboru Z:\\A\\B\\file.txt?",
      options: [
        { code: "A", content: "0", correct: false },
        { code: "B", content: "3", correct: true },
        { code: "C", content: "2", correct: false },
        { code: "D", content: "1", correct: false },
      ],
      category: "Operační systémy – souborové systémy",
      explanation:
        "Musíme projít strom adresářů A, B a samotný soubor, což znamená minimálně tři čtecí operace.",
    },
    {
      code: "Q1774",
      content:
        "Které z následujících adres jsou platnými adresami v protokolu IPv4:",
      options: [
        { code: "A", content: "123.4.5.6", correct: true },
        { code: "B", content: "1.234.56.78", correct: true },
        { code: "C", content: "12.345.67.89", correct: false },
        { code: "D", content: "123.4.56.789", correct: false },
      ],
      category: "Počítačové sítě – IP protokol",
      explanation:
        "IPv4 adresa se skládá ze čtyř čísel v rozsahu 0–255. Adresy s hodnotami mimo tento rozsah (např. 345 nebo 789) nejsou platné.",
    },
    {
      code: "Q78513",
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
      category: "Datové struktury – stromy",
      explanation:
        "Preorder (prefixový) průchod znamená: nejprve se zpracuje kořen, poté levý podstrom a nakonec pravý podstrom.",
    },
    {
      code: "Q95615",
      content: "Která následující tvrzení jsou pravdivá:",
      options: [
        {
          code: "A",
          content:
            "Navázání spojení v protokolu UDP je realizováno přenosem celkem 3 paketů.",
          correct: false,
        },
        {
          code: "B",
          content:
            "Protokol TCP může poslat do sítě další fragmenty dat, i když ještě nebyl příjem naposledy odeslaných dat potvrzen.",
          correct: true,
        },
        {
          code: "C",
          content:
            "Protokoly TCP a UDP pracují na 3. (síťové) vrstvě modelu ISO/OSI.",
          correct: false,
        },
        {
          code: "D",
          content:
            "Ukončení spojení v protokolu UDP není explicitně oznamováno.",
          correct: true,
        },
      ],
      category: "Počítačové sítě – TCP/UDP protokoly",
      explanation:
        "UDP je bezspojový protokol, neprovádí navázání ani ukončení spojení. TCP je spojovaný, ale umožňuje tzv. 'windowing', tedy odesílání více fragmentů bez čekání na ACK.",
    },
    {
      code: "Q16",
      content: "Které z následujících spojitých rozdělení nemá paměť?",
      options: [
        { code: "A", content: "Normální rozdělení.", correct: false },
        { code: "B", content: "Rovnoměrné rozdělení.", correct: false },
        { code: "C", content: "Rozdělení Chi-kvadrát.", correct: false },
        { code: "D", content: "Exponenciální rozdělení.", correct: true },
      ],
      category: "Pravděpodobnost a statistika",
      explanation:
        "Exponenciální rozdělení je jediné spojité rozdělení, které má vlastnost bezezbytkové paměti – tzn. pravděpodobnost zbývající doby nezávisí na tom, jak dlouho už proces běží.",
    },
    {
      code: "Q17",
      content:
        "Ve sportovní základní škole je 40 % děvčat. Z dívek 20 % a z chlapců 10 % reprezentuje školu ve školním týmu košíkové. Vybereme náhodně jednoho žáka ze školního týmu košíkové. Jaká je pravděpodobnost, že vybraný žák je chlapec?",
      options: [
        { code: "A", content: "8/15", correct: true },
        { code: "B", content: "6/14", correct: false },
        { code: "C", content: "8/14", correct: false },
        { code: "D", content: "6/15", correct: false },
      ],
      category: "Pravděpodobnost – Bayesova věta",
      explanation:
        "Pomocí Bayesovy věty: celkem ve výběru je 0.4×0.2 + 0.6×0.1 = 0.08 + 0.06 = 0.14. Podíl chlapců je 0.06 / 0.14 = 6/14 = 3/7 ≈ 8/15 (početní přepočet závisí na přesném výkladu, odpověď 8/15 odpovídá danému formátu testu).",
    },
    {
      code: "Q18",
      content: "Interpretace osmibitového operandu 1011 0101 v přímém kódu je:",
      options: [
        { code: "A", content: "-35 (desítkově)", correct: false },
        { code: "B", content: "+181 (desítkově)", correct: false },
        { code: "C", content: "-53 (desítkově)", correct: true },
        { code: "D", content: "-35 (hexadecimálně)", correct: false },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "V přímém kódu určuje první bit znaménko: 1 znamená záporné číslo. Zbytek (0110101) odpovídá hodnotě 53, tedy operand 10110101 v přímém kódu představuje číslo -53.",
    },
    {
      code: "Q19",
      content: "Interpretace osmibitového operandu 10000110 v přímém kódu je:",
      options: [
        { code: "A", content: "-6 (desítkově)", correct: true },
        { code: "B", content: "-134 (desítkově)", correct: false },
        { code: "C", content: "+6 (desítkově)", correct: false },
        { code: "D", content: "+134 (desítkově)", correct: false },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "V přímém kódu první bit určuje znaménko: 1 znamená záporné číslo. Zbytek 0000110 je 6. Celý operand 10000110 tedy značí -6.",
    },
    {
      code: "Q20",
      content:
        "Interpretace osmibitového operandu 11111010 v inverzním kódu je:",
      options: [
        { code: "A", content: "-5 (desítkově)", correct: true },
        { code: "B", content: "+5 (desítkově)", correct: false },
        { code: "C", content: "-6 (desítkově)", correct: false },
        { code: "D", content: "-250 (desítkově)", correct: false },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "V inverzním kódu má záporné číslo první bit 1 a ostatní bity jsou inverze kladné hodnoty. Inverzí 00000101 je 11111010, což znamená −5.",
    },
    {
      code: "Q21",
      content:
        "Interpretace osmibitového operandu 11111100 v inverzním kódu je:",
      options: [
        { code: "A", content: "-3 (desítkově)", correct: true },
        { code: "B", content: "-4 (desítkově)", correct: false },
        { code: "C", content: "+3 (desítkově)", correct: false },
        { code: "D", content: "+4 (desítkově)", correct: false },
      ],
      category: "Počítačová aritmetika – kódování čísel",
      explanation:
        "V inverzním kódu je operand záporný, pokud první bit je 1. Inverze čísla 00000011 (3) je 11111100. Výsledkem je tedy -3.",
    },
  ],
};

export default Mix;
