/*
 * Petrolog AI — namuna-chatbot
 * Til modeli ishlatilmaydi: javoblar faqat quyidagi tekshirilgan ro‘yxatdan
 * olinadi va har biriga manba qo‘yiladi. Mos javob topilmasa, chatbot buni
 * ochiq aytadi — javobni o‘ylab topmaydi.
 * Yangi savol qo‘shish: KB massiviga yangi obyekt qo‘shing.
 */
(function () {
  "use strict";

  var KB = [
    {
      q: "Struktura va tekstura farqi nima?",
      k: ["struktur", "tekstur", "texture", "structure", "fabric", "~farq"],
      a: "<p>O‘zbek va rus petrografik an’anasida <b>struktura</b> — donlarning o‘lchami, shakli va o‘zaro munosabati; <b>tekstura</b> — jinsdagi tarkibiy qismlarning fazoviy joylashuvi (massivlik, qatlamlilik, oqim belgilari va h.k.).</p><p>Ingliz tilidagi adabiyotda atamalar teskari: o‘zbekcha «struktura» inglizcha <i>texture</i> ga, o‘zbekcha «tekstura» esa <i>structure</i> yoki <i>fabric</i> ga to‘g‘ri keladi. Xalqaro maqolaga tarjimada bu juftlik o‘rin almashib qolishi eng ko‘p uchraydigan xatolardan biri. Petrolog atamalar bazasida bu juftlik alohida «almashinuv» belgisi bilan saqlanadi.</p>",
      s: "Petrolog bilim bazasi (terminologiya.json, almashinuv jadvali); Le Maitre (2002), glossariy"
    },
    {
      q: "A/CNK nima va chegaralari qanday?",
      k: ["acnk", "cnk", "anks", "glinozem", "peraglinozem", "metaglinozem", "peralkal", "peralumin", "shand", "alyumin"],
      a: "<p>A/CNK = Al₂O₃ / (CaO + Na₂O + K₂O), A/NK = Al₂O₃ / (Na₂O + K₂O); ikkalasi ham <b>mol</b> nisbatlarda hisoblanadi. Aniq hisobda CaO apatitdagi kalsiyga tuzatiladi.</p><p>Shand tasnifi: A/CNK &gt; 1 — peraglinozemli; A/CNK &lt; 1 va A/NK &gt; 1 — metaglinozemli; A/NK &lt; 1 — peralkali.</p><p>A/CNK = 1,1 chegarasi boshqa manbadan olingan: Chappell va White (1974) bo‘yicha S-tur granitlar odatda A/CNK &gt; 1,1 ga ega, I-tur granitlar esa undan past. Bu ikki chegarani aralashtirmaslik kerak.</p>",
      s: "Shand (1943); Chappell & White (1974); Maniar & Piccoli (1989)"
    },
    {
      q: "Klark koeffitsienti (Kc) nimani bildiradi?",
      k: ["kc", "klark", "konsentrats", "~boyig", "~anomal"],
      a: "<p>Klark koeffitsienti (konsentratsiya klarki) — namunadagi element miqdorining shu element klarkiga nisbati: Kc = C / K. Kc &gt; 1 bo‘lsa element boyigan, Kc &lt; 1 bo‘lsa kambag‘allashgan.</p><p>Klark sifatida yuqori kontinental qobiq qiymatlari ishlatiladi (Rudnick va Gao 2014, 64 element). Kc ning o‘zi «anomaliya» degani emas: anomaliya chegarasi tanlangan metodikaga bog‘liq. Shuning uchun Petrolog anomal qiymatlarni alohida, statistik chegaralar bilan ajratadi: mediana + 2·MAD va Tukey qoidasi.</p>",
      s: "Rudnick & Gao (2014); Reimann, Filzmoser & Garrett (2005)"
    },
    {
      q: "Zc ko‘rsatkichi qanday hisoblanadi?",
      k: ["zc", "yigindi", "summar", "ifloslan", "saet"],
      a: "<p>Zc — yig‘indi ifloslanish ko‘rsatkichi: Zc = ΣKc − (n − 1). Bu yerda Kc — konsentratsiya koeffitsientlari, n — hisobga olingan boyigan elementlar soni (odatda Kc &gt; 1, ayrim metodikalarda Kc &gt; 1,5).</p><p>Ko‘rsatkich ekogeokimyoda ishlab chiqilgan va asl usulda Kc <b>mahalliy fonga</b> nisbatan olinadi. Klarkka nisbatan hisoblangan Zc elementlar assotsiatsiyasining umumiy jadalligini namunalar o‘rtasida taqqoslash uchun foydali, lekin uni tuproq ifloslanishi uchun ishlab chiqilgan baholash shkalasi bilan talqin qilish to‘g‘ri emas.</p>",
      s: "Saet, Revich, Yanin va b. (1990)"
    },
    {
      q: "Nega dastur mineral nomini aniq aytmayapti?",
      k: ["~nega", "nomini", "aytmay", "aniqlamay", "aniqlab bolmay", "bitta belgi", "ikki belgi"],
      a: "<p>Bu ataylab qilingan. Metodologiya qoidasiga ko‘ra xulosa uchun kamida <b>ikkita mustaqil belgi</b> kerak. Faqat bitta belgi bo‘lsa, holat «aniqlab bo‘lmaydi» deb yoziladi — bu xato emas, balki tavsifning halolligi.</p><p>Bunday holatda dastur qaysi belgini qo‘shimcha tekshirish kerakligini ko‘rsatadi (masalan, kesishgan nikolda so‘nish burchagi yoki konoskopik tasvir).</p>",
      s: "Petrolog metodologiyasi, 1.3-qoida"
    },
    {
      q: "Dalil turlari va ishonch darajasi qanday ishlaydi?",
      k: ["dalil", "ishonch", "olchangan", "kuzatilgan", "talqin", "~holat", "evidence"],
      a: "<p>Har bir belgi uchun to‘rtta holatdan biri yoziladi: <b>aniqlandi</b>, <b>kuzatilmadi</b>, <b>aniqlab bo‘lmaydi</b> yoki <b>tekshirilmadi</b>.</p><p>Dalil turi ishonchning yuqori chegarasini belgilaydi: <span class=\"ev m\">o‘lchangan</span> 1,0; <span class=\"ev o\">kuzatilgan</span> 0,85; <span class=\"ev t\">talqin</span> 0,65. Masalan, mashinaviy model taklifi hech qachon «talqin» darajasidan oshmaydi.</p>",
      s: "Petrolog metodologiyasi, dalil modeli"
    },
    {
      q: "Masshtab topilmasa tahlil to‘xtaydimi?",
      k: ["masshtab", "scale", "~topilmas", "piksel", "~chizig"],
      a: "<p>Yo‘q. O‘lchamlar pikselda beriladi, masshtabga bog‘liq bandlar esa «aniqlab bo‘lmaydi» deb belgilanadi. Piksel o‘lchamini (mkm/piksel) qo‘lda kiritish mumkin — shundan keyin don o‘lchamlari millimetrda qayta hisoblanadi.</p><p>Masshtab yozuvi (masalan, «0,5 mm») mavjud bo‘lsa, u oflayn OCR bilan avtomatik o‘qiladi.</p>",
      s: "Petrolog metodologiyasi, 3-bosqich"
    },
    {
      q: "Ma’lumotim qayerga ketadi?",
      k: ["malumot", "~qayer", "~ketadi", "internet", "maxfiy", "server", "xavfsiz", "oflayn", "internetsiz"],
      a: "<p>Hech qayerga. Kompyuterga o‘rnatilgan dastur tashqi serverga so‘rov yubormaydi; barcha ma’lumot foydalanuvchi kompyuteridagi <code>%LOCALAPPDATA%\\Petrolog</code> papkasida qoladi. Bu institut ma’lumotlari uchun muhim: namuna va tahlil natijalari tashkilotdan chiqmaydi.</p>",
      s: "Petrolog, mahalliy ish rejimi"
    },
    {
      q: "Nuqtali hisobda nechta nuqta kerak?",
      k: ["nuqta", "glagolev", "chayes", "delesse", "~xatolik", "modal", "~ulush", "point"],
      a: "<p>Delesse tamoyiliga ko‘ra kesimdagi maydon ulushi hajm ulushiga teng. Glagolev–Chayes nuqtali hisobida mineral ulushining standart xatoligi binomial taqsimot bo‘yicha baholanadi: σ = √(p·(1 − p) / n).</p><p>Masalan, ulushi 20 % bo‘lgan mineral uchun 300 nuqtada σ ≈ 2,3 %, 1000 nuqtada σ ≈ 1,3 % (absolyut). Petrolog kamida 300 nuqtani talab qiladi va har bir ulush yoniga uning xatoligini yozadi.</p>",
      s: "Delesse (1848); Glagolev (1934); Chayes (1956); Van der Plas & Tobi (1965)"
    },
    {
      q: "QAPF bo‘yicha nomlash qanday bajariladi?",
      k: ["qapf", "streckeisen", "~nomlash", "~tasnif", "~plutonik"],
      a: "<p>Kvars (Q), ishqoriy dala shpati (A), plagioklaz (P) va feldshpatoidlar (F) modal ulushlari 100 % ga qayta normallashtiriladi va QAPF qo‘sh uchburchagiga qo‘yiladi. Q va F bir jinsda birga bo‘lmaydi.</p><p>Mafik minerallar ulushi M ≥ 90 % bo‘lsa, QAPF qo‘llanmaydi — ultramafik jinslar tasnifi ishlatiladi.</p>",
      s: "Streckeisen (1976); Le Maitre (2002)"
    },
    {
      q: "TAS diagrammasi qachon ishlatiladi?",
      k: ["tas", "~ishqor", "silika", "kremnezem", "~vulkanik", "lebas"],
      a: "<p>TAS — Na₂O + K₂O ning SiO₂ ga nisbatan diagrammasi. Tahlil uchuvchan komponentlarsiz (suvsiz) holatga 100 % ga qayta hisoblanadi. IUGS tavsiyasiga ko‘ra TAS vulkanik jinslar uchun, modal tarkibni aniqlab bo‘lmaganda ishlatiladi; tahlilda H₂O⁺ &lt; 2 % va CO₂ &lt; 0,5 % bo‘lishi tavsiya etiladi.</p><p>Hozirgi holat: Petrologda plutonik variantda maydon nomlari almashadi, lekin chegaralar vulkanik variant bilan bir xil. Middlemost (1994) chegaralari keyingi versiyaga rejalashtirilgan.</p>",
      s: "Le Bas va b. (1986); Le Maitre (2002); Middlemost (1994)"
    },
    {
      q: "CIPW normasi nima?",
      k: ["cipw", "norma", "normativ"],
      a: "<p>CIPW normasi — kimyoviy tahlildan hisoblanadigan ideal (suvsiz) mineral tarkib. U jinsni real modal tarkibdan qat’i nazar kimyo bo‘yicha taqqoslash imkonini beradi. Petrolog 21 ta normativ mineralni hisoblaydi.</p><p>Diqqat: tahlilda faqat umumiy temir berilgan bo‘lsa, Fe₂O₃/FeO nisbati qabul qilinadi va bu norma natijasiga ta’sir qiladi — hisobotda shu farazni ko‘rsatish kerak.</p>",
      s: "Cross, Iddings, Pirsson & Washington (1902)"
    },
    {
      q: "REE spektri va europiy anomaliyasi qanday hisoblanadi?",
      k: ["ree", "nodir", "lantanoid", "xondrit", "europiy", "eu", "~spektr"],
      a: "<p>Nodir yer elementlari xondritga normallashtiriladi (Sun va McDonough 1989) va logarifmik shkalada chiziladi. Europiy anomaliyasi: Eu/Eu* = Eu<sub>N</sub> / √(Sm<sub>N</sub> · Gd<sub>N</sub>).</p><p>Eu/Eu* &lt; 1 — manfiy anomaliya; ko‘pincha plagioklaz fraksiyalanishi yoki manbada plagioklaz qolganligi bilan bog‘lanadi. Spektr qiyaligi (La/Yb)<sub>N</sub> bilan ifodalanadi.</p>",
      s: "Sun & McDonough (1989)"
    },
    {
      q: "Spider diagramma nimani ko‘rsatadi?",
      k: ["spider", "kopelementli", "kop elementli", "~mantiya", "morb", "nb"],
      a: "<p>Ko‘p elementli (spider) diagrammada iz elementlar primitiv mantiya yoki N-MORB qiymatlariga normallashtiriladi. Masalan, Nb–Ta minimumi subduksiya bilan bog‘liq magmalarga xos belgi sifatida talqin qilinadi — lekin bitta belgi asosida geodinamik xulosa chiqarilmaydi.</p>",
      s: "Sun & McDonough (1989)"
    },
    {
      q: "Nega korrelyatsiyadan oldin clr o‘zgartirish kerak?",
      k: ["clr", "aitchison", "kompozitsion", "korrelyats", "~yopiq", "spearman", "fdr"],
      a: "<p>Geokimyoviy miqdorlar yig‘indisi doimiy (100 % yoki 10⁶ ppm) bo‘lgani uchun ular o‘zaro mustaqil emas — oddiy korrelyatsiya soxta bog‘lanishlarni ko‘rsatishi mumkin (yopiq ma’lumot muammosi).</p><p>clr o‘zgartirishda har bir qiymat namunaning geometrik o‘rtachasiga nisbatining logarifmiga aylantiriladi. Keyin Spearman korrelyatsiyasi hisoblanadi va ko‘p sonli taqqoslash uchun Benjamini–Hochberg FDR tuzatishi qo‘llanadi.</p>",
      s: "Aitchison (1986); Benjamini & Hochberg (1995)"
    },
    {
      q: "Anshlifda ma’danli minerallar qanday aniqlanadi?",
      k: ["anshlif", "madan", "qaytarish", "anizotrop", "refleks"],
      a: "<p>Qaytgan yorug‘likda quyidagi belgilar baholanadi: qaytarish qobiliyati (R %), rang, bireflektsiya, anizotropiya, ichki reflekslar va nisbiy qattiqlik. Nisbiy yorqinlik kadr ichidagi etalon minerallarga nisbatan o‘lchanadi.</p><p>Hozirgi holat: bazada 42 ta ma’danli mineral bor; ulardan 18 tasi uchun R % qiymatlari hali QDF3 dan kiritilmagan.</p>",
      s: "Criddle & Stanley (1993, QDF3); Betekhtin"
    },
    {
      q: "Dasturda sun’iy intellekt qayerda ishlatiladi?",
      k: ["suniy", "intellekt", "ai", "~model", "ormon", "random", "unet", "kmeans", "neyron", "mashinaviy"],
      a: "<p>Tasvirni fazalarga ajratishda k-means klasterlashi ishlatiladi. Don bo‘yicha mineral taklifi uchun tasodifiy o‘rmon modeli bor, lekin u faqat kalit aniq javob bermaganda, faqat kalit nomzodlari ichidan tanlaydi va ishonchi 0,65 dan oshmaydi.</p><p>U-Net segmentatsiya modelining bashorat kodi tayyor, o‘qitish esa yorliqlangan ma’lumot yig‘ilgach bajariladi. Dasturning kodi geolog muallif va Claude (Anthropic) hamkorligida yozilgan.</p>",
      s: "Petrolog, AI tamoyillari"
    },
    {
      q: "Dastur qaysi tillarda ishlaydi?",
      k: ["tilida", "tillar", "ozbekcha", "ruscha", "inglizcha", "rus", "ingliz", "kodeks", "tarjima", "~til"],
      a: "<p>Interfeys o‘zbek, rus va ingliz tillarida (481 tarjima kaliti). Tavsif matni hozircha faqat o‘zbek tilida tuziladi; rus va ingliz shablonlari rejada. Nomlashda IUGS tavsiyalari bilan birga O‘zbekiston Respublikasi Petrografik kodeksi (2024) hisobga olinadi.</p>",
      s: "Petrolog, interfeys va matn generatori"
    },
    {
      q: "Kod ochiqmi, litsenziyasi qanday?",
      k: ["litsenz", "~ochiq", "kod", "kodi", "github", "agpl", "bepul"],
      a: "<p>Kod AGPL-3.0-or-later, bilim bazasi va hujjatlar CC BY 4.0 litsenziyasida ochiladi. Iqtibos uchun CITATION.cff fayli va Zenodo DOI rejalashtirilgan. Avtomatik testlar bilan birga har kim natijani o‘zi tekshira oladi.</p>",
      s: "Petrolog, LICENSE va CITATION.cff"
    }
  ];

  var START = [0, 1, 4, 8, 7];

  function norm(s) {
    return (s || "").toLowerCase()
      .replace(/[‘’ʻʼ`´']/g, "")
      .replace(/[\/·.,!?;:()«»"–—-]/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  // Kalit so‘z oldida "~" bo‘lsa, u kuchsiz belgi (1 ball), aks holda 2 ball.
  // Javob berish uchun kamida 2 ball kerak: bitta kuchsiz so‘z yetmaydi.
  function find(text) {
    var t = norm(text);
    var tokens = t.split(" ");
    var joined = t.replace(/ /g, "");
    var best = -1, bestScore = 0;
    KB.forEach(function (item, i) {
      var score = 0;
      item.k.forEach(function (kw) {
        var weak = kw.charAt(0) === "~";
        var k = norm(weak ? kw.slice(1) : kw).replace(/ /g, "");
        var hit = k.length <= 3
          ? tokens.indexOf(k) !== -1
          : tokens.some(function (w) { return w.indexOf(k) === 0; }) || (k.length >= 6 && joined.indexOf(k) !== -1);
        if (hit) score += weak ? 1 : 2;
      });
      if (score > bestScore) { bestScore = score; best = i; }
    });
    return bestScore >= 2 ? best : -1;
  }

  var log, input, chips;

  function add(cls, html) {
    var d = document.createElement("div");
    d.className = "msg " + cls;
    d.innerHTML = html;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; });
  }

  function answer(text, idx) {
    add("user", esc(text));
    var i = typeof idx === "number" ? idx : find(text);
    if (i < 0) {
      add("bot", "<p>Bu savolga bilim bazasida tekshirilgan javob topilmadi. Namuna-chatbot faqat manbasi bor javoblarni beradi va javobni o‘ylab topmaydi.</p><p>Quyidagi mavzulardan birini tanlang yoki savolni boshqacha yozing.</p>");
      renderChips(KB.map(function (_, j) { return j; }).filter(function (j) { return START.indexOf(j) === -1; }).slice(0, 8));
      return;
    }
    add("bot", KB[i].a + "<span class=\"src\">Manba: " + KB[i].s + "</span>");
    var rest = KB.map(function (_, j) { return j; }).filter(function (j) { return j !== i; });
    renderChips(rest.sort(function () { return 0.5 - Math.random(); }).slice(0, 4));
  }

  function renderChips(list) {
    chips.innerHTML = "";
    list.forEach(function (i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "chip"; b.textContent = KB[i].q;
      b.addEventListener("click", function () { answer(KB[i].q, i); });
      chips.appendChild(b);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("chatbot");
    if (!root) return;
    log = root.querySelector(".chat-log");
    input = root.querySelector("input");
    chips = root.querySelector(".chips");
    add("bot", "<p>Salom. Men Petrolog bilim bazasi bo‘yicha namuna-chatbotman: atamalar, geokimyoviy ko‘rsatkichlar va dastur ishlash tamoyillari haqida " + KB.length + " ta tekshirilgan savolga manbasi bilan javob beraman.</p>");
    renderChips(START);
    root.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      var v = input.value.trim();
      if (!v) return;
      input.value = "";
      answer(v);
    });
  });
})();
