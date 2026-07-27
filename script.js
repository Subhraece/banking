// ---------- Translations ----------
const translations = {
  bn: {
    docTitle: "FD ও RD ক্যালকুলেটর — ম্যাচুরিটি ও প্রি-ম্যাচিউর",
    eyebrow: "ব্যাংক ডিপোজিট টুল · টিউটোরিয়াল সংস্করণ",
    h1: "FD ও RD ম্যাচুরিটি ও প্রি-ম্যাচিউর ক্যালকুলেটর",
    tagline: "প্রতিটি হিসাব ধাপে ধাপে, সঠিক সূত্র দিয়ে বুঝে নিন",
    navCalc: "ক্যালকুলেটর",
    navMindmap: "মাইন্ডম্যাপ",
    modeFD: "FD (মেয়াদি জমা)",
    modeRD: "RD (কিস্তি জমা)",
    slipLabel: "ডিপোজিট স্লিপ",
    amountLabelFD: "জমার পরিমাণ (₹)",
    amountLabelRD: "মাসিক কিস্তি (₹)",
    amountPlaceholderFD: "যেমনঃ 100000",
    amountPlaceholderRD: "যেমনঃ 5000",
    roiLabel: "সুদের হার (ROI % p.a., পুরো মেয়াদের জন্য)",
    tenureLabel: "মেয়াদ (Tenure)",
    unitYear: "বছর",
    unitMonth: "মাস",
    compoundingLabel: "চক্রবৃদ্ধি (Compounding)",
    optQuarterly: "ত্রৈমাসিক (Quarterly)",
    optMonthly: "মাসিক (Monthly)",
    optHalfYearly: "ষাণ্মাসিক (Half-Yearly)",
    optAnnually: "বাৎসরিক (Annually)",
    optSimple: "সাধারণ সুদ (Simple Interest)",
    stubA: "স্টাব A",
    maturityH2: "মেয়াদ শেষে রিটার্ন (Maturity)",
    calcMaturity: "ম্যাচুরিটি হিসাব করো",
    mPrincipalLabelFD: "মূলধন (Principal)",
    mPrincipalLabelRD: "মোট জমা (Total Deposit)",
    mInterestLabel: "মোট সুদ (Interest)",
    mMaturityLabel: "ম্যাচুরিটি অ্যামাউন্ট",
    formulaToggleShow: "ধাপে ধাপে সূত্র দেখাও",
    formulaToggleHide: "সূত্র লুকাও",
    stubB: "স্টাব B",
    prematureH2: "প্রি-ম্যাচিউর উইথড্রয়াল",
    withdrawLabel: "কত সময় পর ভাঙাবেন",
    cardRateLabel: "সেই মেয়াদের প্রযোজ্য স্বাভাবিক হার (Card Rate %)",
    penaltyLabel: "পেনাল্টি (Card Rate থেকে বিয়োগ, %)",
    effectiveRateHintPending: "প্রযোজ্য হার এখনো হিসাব হয়নি",
    effectiveRateHintCalculated: "প্রযোজ্য হার আনুমানিক {rate}% (Card Rate − পেনাল্টি)",
    calcPremature: "প্রি-ম্যাচিউর রিটার্ন হিসাব করো",
    pPrincipalLabelFD: "মূলধন (Principal)",
    pPrincipalLabelRD: "মোট জমা (Total Deposit)",
    pHeldLabel: "হোল্ড পিরিয়ড",
    pRateLabel: "প্রযোজ্য হার",
    pPenaltyLossLabel: "পেনাল্টিতে ক্ষতি",
    pNetLabel: "নেট পেমেন্ট (Net Payable)",
    disclaimer: `*"Card Rate" মানে ব্যাংক আজ যে মেয়াদের জন্য যে হার দিচ্ছে (আপনার আসল মেয়াদের জন্য নয়, যত সময় টাকা রাখা হয়েছিল তার জন্য) — এটা ব্যাংকের rate-card থেকে নিজে দেখে বসাতে হবে, কারণ স্ল্যাব অনুযায়ী এটা বদলাতে পারে। এই টুল ধরে নেয় Effective Rate = Card Rate − Penalty%। RD-এর ক্ষেত্রে ধরে নেওয়া হয়েছে প্রতি মাসের শুরুতে কিস্তি জমা পড়ে এবং মেয়াদ পূর্ণ মাসে গণনা হয়। প্রকৃত ব্যাংকের নিয়ম কিছুটা ভিন্ন হতে পারে — চূড়ান্ত অঙ্কের জন্য ব্র্যাঞ্চে যোগাযোগ করুন।`,
    
    // Dynamic text
    monthsStr: "মাস",
    yearsStr: "বছর",
    zeroMonths: "০ মাস",
    rdTenureNote: "RD-তে মেয়াদ নিকটতম পূর্ণ মাসে গণনা হবে",
    errAmountFD: "সঠিক জমার পরিমাণ দিন",
    errAmountRD: "সঠিক মাসিক কিস্তির পরিমাণ দিন",
    errRoi: "সঠিক সুদের হার দিন",
    errTenure: "সঠিক মেয়াদ দিন",
    freqQuarterly: "ত্রৈমাসিক, n=4",
    freqMonthly: "মাসিক, n=12",
    freqHalfYearly: "ষাণ্মাসিক, n=2",
    freqAnnually: "বাৎসরিক, n=1",
    freqSimple: "সাধারণ সুদ",
    errRdMin1Month: "RD-এর মেয়াদ কমপক্ষে ১ মাস হতে হবে",
    fdMaturityStepsTitle: "FD ম্যাচুরিটি — ধাপে ধাপে",
    rdMaturityStepsTitle: "RD ম্যাচুরিটি — ধাপে ধাপে",
    errWithdrawTime: "কত সময় পর ভাঙাবেন তা দিন",
    errCardRate: "Card Rate দিন (ব্যাংকের rate-card দেখে)",
    errPenalty: "সঠিক পেনাল্টি % দিন",
    errHoldExceeds: "হোল্ড পিরিয়ড আসল মেয়াদের বেশি হতে পারবে না",
    fdPrematureStepsTitle: "FD প্রি-ম্যাচিউর — ধাপে ধাপে",
    errPrematureMin1Month: "কমপক্ষে ১ মাস পর ভাঙানো যাবে",
    rdPrematureStepsTitle: "RD প্রি-ম্যাচিউর — ধাপে ধাপে",

    step1Simple: "ধাপ ১: r×t =",
    step2Simple: "ধাপ ২: A = P×(1+rt) =",
    step1Compound: "ধাপ ১: r/n =",
    step2Compound: "ধাপ ২: (1+r/n) =",
    step3Compound: "ধাপ ৩: n×t = {periods} পিরিয়ড",
    step4Compound: "ধাপ ৪: (1+r/n)^(n×t) =",
    step5Compound: "ধাপ ৫: A = P × উপরের মান =",
    interestCalc: "সুদ = A − P =",

    rdMatStep1: "প্রতিটি কিস্তি নিজ জমার সময় থেকে ম্যাচুরিটি পর্যন্ত সুদ পায়ঃ <span class=\"mono\">FV_k = কিস্তি × (1+r/n)^(n×t_k)</span>",
    rdMatStep2: "ধরে নেওয়া হয়েছে প্রতি মাসের শুরুতে কিস্তি জমা পড়ে। মোট কিস্তি সংখ্যা =",
    rdMatStep3: "১ম কিস্তি: t₁ = {years} বছর → FV₁ =",
    rdMatStep4: "শেষ ({months} নং) কিস্তি: t = {years} বছর → FV =",
    rdMatStep5: "মাঝের প্রতিটি কিস্তিও একইভাবে হিসাব করে যোগ করা হয়েছে",
    rdMatStep6: "মোট জমা = কিস্তি × মাস =",
    rdMatStep7: "মোট ম্যাচুরিটি = সব FV_k-এর যোগফল =",
    rdMatStep8: "মোট সুদ =",

    fdPreStep1: "Card Rate = <span class=\"mono\">{cardRate}%</span>, পেনাল্টি = <span class=\"mono\">{penalty}%</span>",
    fdPreStep2: "প্রযোজ্য হার (r_eff) = Card Rate − পেনাল্টি =",
    fdPreStep3: "হোল্ড পিরিয়ড (t) = <span class=\"mono\">{years} বছর</span> ({duration})",
    fdPreStep4: "<span class=\"mono\">Net Payable = P × (1 + r_eff/n)^(n×t)</span>",
    fdPreStep5Simple: "Net Payable =",
    fdPreStep5Compound: "r_eff/n = {rn}, n×t = <span class=\"mono\">{periods}</span>",
    fdPreStep6Compound: "Net Payable =",
    fdPreStep7: "পেনাল্টি ছাড়া (শুধু Card Rate-এ) একই সময়ে প্রাপ্য হতো =",
    fdPreStep8: "পেনাল্টিতে ক্ষতি =",

    rdPreStep1: "Card Rate = <span class=\"mono\">{cardRate}%</span>, পেনাল্টি = <span class=\"mono\">{penalty}%</span> → প্রযোজ্য হার = <span class=\"mono\">{effectiveRate}%</span>",
    rdPreStep2: "{months} মাস পর্যন্ত জমা পড়া প্রতিটি কিস্তি প্রযোজ্য হারে সুদ পায়ঃ <span class=\"mono\">FV_k = কিস্তি × (1+r_eff/n)^(n×t_k)</span>",
    rdPreStep3: "১ম কিস্তি: t₁ = <span class=\"mono\">{years} বছর</span> → FV₁ = <span class=\"mono\">{fv}</span>",
    rdPreStep4: "শেষ ({months} নং) কিস্তি: t = <span class=\"mono\">{years} বছর</span> → FV = <span class=\"mono\">{fv}</span>",
    rdPreStep5: "মোট জমা =",
    rdPreStep6: "Net Payable (প্রযোজ্য হারে যোগফল) =",
    rdPreStep7: "পেনাল্টি ছাড়া (শুধু Card Rate-এ) প্রাপ্য হতো =",
    rdPreStep8: "পেনাল্টিতে ক্ষতি =",

    installmentsStr: "কিস্তি",

    // Tabs
    tabMaturity:  "ম্যাচুরিটি",
    tabPremature: "প্রি-ম্যাচিউর",
    tabMIS:       "এমআইএস প্রকল্প",

    // Maturity tab extras
    maturityDesc: "পুরো মেয়াদ শেষে চক্রবৃদ্ধি সুদসহ মূলধন পাওয়া যাবে।",
    prematureDesc: "মেয়াদের আগে ভাঙালে পেনাল্টি কাটা যাবে নিট দেখুন।",

    // MIS
    misH2:              "MIS — মাসিক আয় প্রকল্প",
    misDesc:            "প্রতি মাসে সুদের টাকা স্যাভিংস অ্যাকাউন্টে জমা হবে। মেয়াদ শেষে মূলধন ফেরত পাবেন। (FD শুধু)",
    calcMIS:            "MIS পেআউট হিসাব করো",
    misRdNotice:        "MIS প্রকল্প শুধুমাত্র Fixed Deposit (FD)-এর জন্য। FD মোডে যান।",
    misMonthlyLabel:    "মাসিক সুদের প্রাপ্য (প্রতি মাস)",
    misPrincipalLabel:  "মূলধন (মেয়াদে ফেরত)",
    misTenureLabel:     "মোট মাস",
    misTotalInterestLabel: "মোট অর্জিত সুদ",
    misTotalReceivedLabel: "মোট প্রাপ্ত",
    misFormulaToggle:   "ধাপে ধাপে সূত্র দেখাও",
    misStepsTitle:      "MIS মাসিক আয় — ধাপে ধাপে",
    misStep1:           "MIS সূত্র: মাসিক সুদ = P × r / 12 (সাদা সুদ)",
    misStep2:           "P (মূলধন) =",
    misStep3:           "r (ROI) =",
    misStep4:           "মাসিক সুদ = P × (r/100) / 12 =",
    misStep5:           "মোট মাস =",
    misStep6:           "মোট সুদ = মাসিক সুদ × মাস =",
    misStep7:           "মেয়াদে মূলধন ফেরত =",
    misStep8:           "মোট প্রাপ্ত = মূলধন + মোট সুদ =",
    errMisRD:           "MIS শুধু FD মোডে পাওয়া যাবে"
  },
  en: {
    docTitle: "FD & RD Calculator — Maturity & Premature",
    eyebrow: "Bank Deposit Tool · Tutorial Edition",
    h1: "FD & RD Maturity & Premature Calculator",
    tagline: "Understand every calculation step-by-step with exact formulas",
    navCalc: "Calculator",
    navMindmap: "Mind Map",
    modeFD: "FD (Fixed Deposit)",
    modeRD: "RD (Recurring Deposit)",
    slipLabel: "Deposit Slip",
    amountLabelFD: "Deposit Amount (₹)",
    amountLabelRD: "Monthly Installment (₹)",
    amountPlaceholderFD: "e.g. 100000",
    amountPlaceholderRD: "e.g. 5000",
    roiLabel: "Interest Rate (ROI % p.a., for full tenure)",
    tenureLabel: "Tenure",
    unitYear: "Year",
    unitMonth: "Month",
    compoundingLabel: "Compounding",
    optQuarterly: "Quarterly",
    optMonthly: "Monthly",
    optHalfYearly: "Half-Yearly",
    optAnnually: "Annually",
    optSimple: "Simple Interest",
    stubA: "Stub A",
    maturityH2: "Return on Maturity",
    calcMaturity: "Calculate Maturity",
    mPrincipalLabelFD: "Principal",
    mPrincipalLabelRD: "Total Deposit",
    mInterestLabel: "Total Interest",
    mMaturityLabel: "Maturity Amount",
    formulaToggleShow: "Show Step-by-step Formula",
    formulaToggleHide: "Hide Formula",
    stubB: "Stub B",
    prematureH2: "Premature Withdrawal",
    withdrawLabel: "Time until withdrawal",
    cardRateLabel: "Applicable Normal Rate (Card Rate %)",
    penaltyLabel: "Penalty (Subtracted from Card Rate, %)",
    effectiveRateHintPending: "Applicable rate not calculated yet",
    effectiveRateHintCalculated: "Applicable rate approx {rate}% (Card Rate − Penalty)",
    calcPremature: "Calculate Premature Return",
    pPrincipalLabelFD: "Principal",
    pPrincipalLabelRD: "Total Deposit",
    pHeldLabel: "Held Period",
    pRateLabel: "Applicable Rate",
    pPenaltyLossLabel: "Loss due to Penalty",
    pNetLabel: "Net Payable",
    disclaimer: `*"Card Rate" refers to the rate the bank offers today for the period the money was held (not your original tenure). Check the bank's rate-card, as it changes by slab. This tool assumes Effective Rate = Card Rate − Penalty%. For RD, it is assumed installments are paid at the beginning of each month and tenure is calculated in full months. Actual bank rules may vary slightly — contact your branch for the final amount.`,
    
    // Dynamic text
    monthsStr: "Months",
    yearsStr: "Years",
    zeroMonths: "0 Months",
    rdTenureNote: "For RD, tenure is calculated in nearest full months",
    errAmountFD: "Enter a valid deposit amount",
    errAmountRD: "Enter a valid monthly installment",
    errRoi: "Enter a valid interest rate",
    errTenure: "Enter a valid tenure",
    freqQuarterly: "Quarterly, n=4",
    freqMonthly: "Monthly, n=12",
    freqHalfYearly: "Half-Yearly, n=2",
    freqAnnually: "Annually, n=1",
    freqSimple: "Simple Interest",
    errRdMin1Month: "RD tenure must be at least 1 month",
    fdMaturityStepsTitle: "FD Maturity — Step-by-step",
    rdMaturityStepsTitle: "RD Maturity — Step-by-step",
    errWithdrawTime: "Enter the time until withdrawal",
    errCardRate: "Enter Card Rate (from bank's rate-card)",
    errPenalty: "Enter a valid penalty %",
    errHoldExceeds: "Held period cannot exceed the original tenure",
    fdPrematureStepsTitle: "FD Premature — Step-by-step",
    errPrematureMin1Month: "Can withdraw after at least 1 month",
    rdPrematureStepsTitle: "RD Premature — Step-by-step",

    step1Simple: "Step 1: r×t =",
    step2Simple: "Step 2: A = P×(1+rt) =",
    step1Compound: "Step 1: r/n =",
    step2Compound: "Step 2: (1+r/n) =",
    step3Compound: "Step 3: n×t = {periods} periods",
    step4Compound: "Step 4: (1+r/n)^(n×t) =",
    step5Compound: "Step 5: A = P × above value =",
    interestCalc: "Interest = A − P =",

    rdMatStep1: "Each installment earns interest from deposit to maturity: <span class=\"mono\">FV_k = Installment × (1+r/n)^(n×t_k)</span>",
    rdMatStep2: "Assuming installments at the start of each month. Total installments =",
    rdMatStep3: "1st Installment: t₁ = {years} years → FV₁ =",
    rdMatStep4: "Last (no. {months}) Installment: t = {years} years → FV =",
    rdMatStep5: "Each middle installment is calculated similarly and summed",
    rdMatStep6: "Total Deposit = Installment × Months =",
    rdMatStep7: "Total Maturity = Sum of all FV_k =",
    rdMatStep8: "Total Interest =",

    fdPreStep1: "Card Rate = <span class=\"mono\">{cardRate}%</span>, Penalty = <span class=\"mono\">{penalty}%</span>",
    fdPreStep2: "Applicable Rate (r_eff) = Card Rate − Penalty =",
    fdPreStep3: "Held Period (t) = <span class=\"mono\">{years} years</span> ({duration})",
    fdPreStep4: "<span class=\"mono\">Net Payable = P × (1 + r_eff/n)^(n×t)</span>",
    fdPreStep5Simple: "Net Payable =",
    fdPreStep5Compound: "r_eff/n = {rn}, n×t = <span class=\"mono\">{periods}</span>",
    fdPreStep6Compound: "Net Payable =",
    fdPreStep7: "Without penalty (at Card Rate only), you would get =",
    fdPreStep8: "Loss due to penalty =",

    rdPreStep1: "Card Rate = <span class=\"mono\">{cardRate}%</span>, Penalty = <span class=\"mono\">{penalty}%</span> → Applicable Rate = <span class=\"mono\">{effectiveRate}%</span>",
    rdPreStep2: "Each installment paid up to {months} months earns interest at applicable rate: <span class=\"mono\">FV_k = Installment × (1+r_eff/n)^(n×t_k)</span>",
    rdPreStep3: "1st Installment: t₁ = <span class=\"mono\">{years} years</span> → FV₁ = <span class=\"mono\">{fv}</span>",
    rdPreStep4: "Last (no. {months}) Installment: t = <span class=\"mono\">{years} years</span> → FV = <span class=\"mono\">{fv}</span>",
    rdPreStep5: "Total Deposit =",
    rdPreStep6: "Net Payable (Sum at applicable rate) =",
    rdPreStep7: "Without penalty (at Card Rate only), you would get =",
    rdPreStep8: "Loss due to penalty =",

    installmentsStr: "installments",

    // Tabs
    tabMaturity:  "Maturity",
    tabPremature: "Premature",
    tabMIS:       "MIS Plan",

    // Maturity tab extras
    maturityDesc: "Full tenure compounded interest — paid at end of term along with principal.",
    prematureDesc: "Break the deposit early — calculate penalty deduction and net payout.",

    // MIS
    misH2:              "MIS — Monthly Income Scheme",
    misDesc:            "Earn monthly interest payouts to your savings account. Principal is fully returned at maturity. (FD only)",
    calcMIS:            "Calculate MIS Payout",
    misRdNotice:        "MIS plan applies to Fixed Deposits (FD) only. Please switch to FD mode.",
    misMonthlyLabel:    "Monthly Interest Payout",
    misPrincipalLabel:  "Principal (returned at maturity)",
    misTenureLabel:     "Total Months",
    misTotalInterestLabel: "Total Interest Earned",
    misTotalReceivedLabel: "Total Received",
    misFormulaToggle:   "Show Step-by-step Formula",
    misStepsTitle:      "MIS Monthly Income — Step-by-step",
    misStep1:           "MIS Formula: Monthly Interest = P × r / 12 (Simple Interest)",
    misStep2:           "P (Principal) =",
    misStep3:           "r (ROI) =",
    misStep4:           "Monthly Interest = P × (r/100) / 12 =",
    misStep5:           "Total Months =",
    misStep6:           "Total Interest = Monthly Interest × Months =",
    misStep7:           "Principal returned at maturity =",
    misStep8:           "Total Received = Principal + Total Interest =",
    errMisRD:           "MIS is only available in FD mode"
  }
};

let currentLang = "en"; // default

function t(key, params = {}) {
  let text = translations[currentLang][key] || "";
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

// ---------- Page Navigation ----------

let activePage = 'calculator';

function navigateTo(page) {
  const prevPage = activePage;
  if (prevPage === page) return;

  const prevEl = document.getElementById(prevPage === 'calculator' ? 'pageCalculator' : 'pageMindmap');
  const nextEl = document.getElementById(page === 'calculator' ? 'pageCalculator' : 'pageMindmap');

  // Determine direction
  const pages = ['calculator', 'mindmap'];
  const direction = pages.indexOf(page) > pages.indexOf(prevPage) ? 1 : -1;

  prevEl.style.transform = direction > 0 ? 'translateX(-40px)' : 'translateX(40px)';
  prevEl.style.opacity = '0';
  prevEl.style.pointerEvents = 'none';

  setTimeout(() => {
    prevEl.classList.remove('active');
    prevEl.style.transform = '';
    prevEl.style.opacity = '';
    prevEl.style.pointerEvents = '';
  }, 350);

  nextEl.style.transform = direction > 0 ? 'translateX(40px)' : 'translateX(-40px)';
  nextEl.style.opacity = '0';
  nextEl.classList.add('active');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nextEl.style.transition = 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)';
      nextEl.style.transform = 'translateX(0)';
      nextEl.style.opacity = '1';
    });
  });

  setTimeout(() => {
    nextEl.style.transition = '';
    nextEl.style.transform = '';
    nextEl.style.opacity = '';
    nextEl.style.pointerEvents = '';
  }, 400);

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === page);
  });

  // If switching to mindmap, sync language
  if (page === 'mindmap') {
    // Small delay ensures the iframe contentWindow is accessible
    setTimeout(() => sendLangToMindmap(), 80);
  }

  activePage = page;
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
}

document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => navigateTo(btn.dataset.page));
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ---------- Language Toggle ----------

document.querySelectorAll("#langToggle .lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#langToggle .lang-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentLang = btn.dataset.lang;
    document.documentElement.lang = currentLang;
    updateStaticText();

    // Send language to iframe — works whether mindmap is visible or not
    sendLangToMindmap();
  });
});

function sendLangToMindmap() {
  const frame = document.getElementById("mindmapFrame");
  if (frame && frame.contentWindow) {
    frame.contentWindow.postMessage({ type: 'SET_LANG', lang: currentLang }, '*');
  }
}

// When the iframe finishes loading, send the current language immediately
document.getElementById("mindmapFrame").addEventListener("load", () => {
  sendLangToMindmap();
});


function updateStaticText() {
  document.title = t("docTitle");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key === "unitYear1" || key === "unitYear2") {
      el.textContent = t("unitYear");
    } else if (key === "unitMonth1" || key === "unitMonth2") {
      el.textContent = t("unitMonth");
    } else if (translations[currentLang][key] !== undefined) {
      el.textContent = t(key);
    }
  });

  // updateLabelsForMode resets all results and errors
  updateLabelsForMode();
  updateEffectiveRateHint();
}

// ---------- generic helpers ----------

function formatINR(num) {
  return "₹" + num.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
}

function formatDuration(years) {
  const totalMonths = Math.round(years * 12);
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const parts = [];
  if (y > 0) parts.push(y + " " + t("yearsStr"));
  if (m > 0) parts.push(m + " " + t("monthsStr"));
  if (parts.length === 0) parts.push(t("zeroMonths"));
  return parts.join(" ");
}

function convertToYears(value, unit) {
  return unit === "year" ? value : value / 12;
}

function toMonths(years) {
  return Math.round(years * 12);
}

function compoundAmount(principal, ratePercent, years, freq) {
  if (freq === "simple") {
    return principal * (1 + (ratePercent / 100) * years);
  }
  const n = Number(freq);
  return principal * Math.pow(1 + (ratePercent / 100) / n, n * years);
}

function freqName(freq) {
  switch (freq) {
    case "4": return t("freqQuarterly");
    case "12": return t("freqMonthly");
    case "2": return t("freqHalfYearly");
    case "1": return t("freqAnnually");
    case "simple": return t("freqSimple");
    default: return freq;
  }
}

function getActiveUnit(scopeEl) {
  return scopeEl.querySelector(".unit-btn.active").dataset.value;
}

function renderSteps(panelEl, titleText, lines) {
  const html = [`<div class="step-line formula-title">${titleText}</div>`]
    .concat(lines.map((l) => `<div class="step-line">${l}</div>`))
    .join("");
  panelEl.innerHTML = html;
}

// ---------- unit toggle buttons ----------

document.querySelectorAll(".unit-toggle").forEach((toggle) => {
  toggle.querySelectorAll(".unit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggle.querySelectorAll(".unit-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});

// ---------- FD / RD mode toggle ----------

let currentMode = "FD";

const amountEl = document.getElementById("amount");
const amountLabelEl = document.getElementById("amountLabel");
const mPrincipalLabelEl = document.getElementById("mPrincipalLabel");
const pPrincipalLabelEl = document.getElementById("pPrincipalLabel");
const tenureNoteEl = document.getElementById("tenureNote");

const maturityResultEl = document.getElementById("maturityResult");
const prematureResultEl = document.getElementById("prematureResult");
const mFormulaPanel = document.getElementById("mFormulaPanel");
const pFormulaPanel = document.getElementById("pFormulaPanel");
const mFormulaToggle = document.getElementById("mFormulaToggle");
const pFormulaToggle = document.getElementById("pFormulaToggle");

function updateLabelsForMode() {
  if (currentMode === "FD") {
    amountLabelEl.textContent = t("amountLabelFD");
    amountEl.placeholder = t("amountPlaceholderFD");
    mPrincipalLabelEl.textContent = t("mPrincipalLabelFD");
    pPrincipalLabelEl.textContent = t("pPrincipalLabelFD");
    tenureNoteEl.textContent = "";
    // Show MIS calc area, hide RD notice
    document.getElementById("misRdNotice").hidden = true;
    document.getElementById("calcMISBtn").hidden = false;
  } else {
    amountLabelEl.textContent = t("amountLabelRD");
    amountEl.placeholder = t("amountPlaceholderRD");
    mPrincipalLabelEl.textContent = t("mPrincipalLabelRD");
    pPrincipalLabelEl.textContent = t("pPrincipalLabelRD");
    tenureNoteEl.textContent = t("rdTenureNote");
    // Show RD notice, hide MIS calc
    document.getElementById("misRdNotice").hidden = false;
    document.getElementById("calcMISBtn").hidden = true;
  }
  // reset results/errors on mode switch since input meaning changed
  maturityResultEl.hidden = true;
  prematureResultEl.hidden = true;
  document.getElementById("misResult").hidden = true;
  document.getElementById("mFormulaActions").hidden = true;
  document.getElementById("pFormulaActions").hidden = true;
  document.getElementById("misFormulaActions").hidden = true;
  mFormulaPanel.hidden = true;
  pFormulaPanel.hidden = true;
  document.getElementById("misFormulaPanel").hidden = true;
  mFormulaToggle.textContent = t("formulaToggleShow");
  pFormulaToggle.textContent = t("formulaToggleShow");
  document.getElementById("misFormulaToggle").textContent = t("misFormulaToggle");
  document.getElementById("maturityError").textContent = "";
  document.getElementById("prematureError").textContent = "";
  document.getElementById("misError").textContent = "";
  document.getElementById("topError").textContent = "";
  document.getElementById("sidebarStats").hidden = true;
}

document.querySelectorAll("#depositModeToggle .mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#depositModeToggle .mode-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentMode = btn.dataset.mode;
    updateLabelsForMode();
  });
});

// ---------- Result Tab Switching ----------

document.querySelectorAll(".rtab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".rtab").forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    document.querySelectorAll(".rtab-panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    // data-tab matches panel id exactly: "Maturity" → "tabMaturity"
    const panel = document.getElementById("tab" + tab.dataset.tab);
    if (panel) panel.classList.add("active");
  });
});


// ---------- formula toggle buttons ----------

mFormulaToggle.addEventListener("click", () => {
  const nowHidden = mFormulaPanel.hidden;
  mFormulaPanel.hidden = !nowHidden;
  mFormulaToggle.textContent = nowHidden ? t("formulaToggleHide") : t("formulaToggleShow");
});

pFormulaToggle.addEventListener("click", () => {
  const nowHidden = pFormulaPanel.hidden;
  pFormulaPanel.hidden = !nowHidden;
  pFormulaToggle.textContent = nowHidden ? t("formulaToggleHide") : t("formulaToggleShow");
});

document.getElementById("misFormulaToggle").addEventListener("click", () => {
  const panelEl = document.getElementById("misFormulaPanel");
  const toggleEl = document.getElementById("misFormulaToggle");
  const nowHidden = panelEl.hidden;
  panelEl.hidden = !nowHidden;
  toggleEl.textContent = nowHidden ? t("formulaToggleHide") : t("misFormulaToggle");
});

// ---------- shared input reading ----------

const roiEl = document.getElementById("roi");
const tenureValueEl = document.getElementById("tenureValue");
const tenureToggleEl = document.querySelector("#inputSlip .unit-toggle");
const compoundingEl = document.getElementById("compounding");
const topErrorEl = document.getElementById("topError");

function readSharedInputs() {
  return {
    amount: parseFloat(amountEl.value),
    roi: parseFloat(roiEl.value),
    tenureValue: parseFloat(tenureValueEl.value),
    tenureUnit: getActiveUnit(tenureToggleEl),
    freq: compoundingEl.value
  };
}

function validateShared(shared, errorEl) {
  if (!(shared.amount > 0)) {
    errorEl.textContent = currentMode === "FD" ? t("errAmountFD") : t("errAmountRD");
    return false;
  }
  if (!(shared.roi >= 0)) {
    errorEl.textContent = t("errRoi");
    return false;
  }
  if (!(shared.tenureValue > 0)) {
    errorEl.textContent = t("errTenure");
    return false;
  }
  errorEl.textContent = "";
  return true;
}

// ---------- RD summation engine ----------

function calculateRD(installment, ratePercent, months, freq) {
  let total = 0;
  let firstTerm = null;
  let lastTerm = null;
  for (let k = 1; k <= months; k++) {
    const remaining = months - k + 1;
    const years = remaining / 12;
    const fv = compoundAmount(installment, ratePercent, years, freq);
    total += fv;
    if (k === 1) firstTerm = { k, remaining, years, fv };
    if (k === months) lastTerm = { k, remaining, years, fv };
  }
  return { total, firstTerm, lastTerm, deposited: installment * months };
}

// Sidebar quick-stats update helper
function updateSidebarStats(amount, roi, tenure) {
  const statsEl = document.getElementById("sidebarStats");
  statsEl.hidden = false;
  document.getElementById("sqsPrincipal").textContent = formatINR(amount);
  document.getElementById("sqsRate").textContent = roi + "% p.a.";
  document.getElementById("sqsTenure").textContent = formatDuration(tenure);
}

// ---------- Stub A: maturity ----------

const calcMaturityBtn = document.getElementById("calcMaturityBtn");
const maturityErrorEl = document.getElementById("maturityError");

calcMaturityBtn.addEventListener("click", () => {
  topErrorEl.textContent = "";
  const shared = readSharedInputs();

  if (!validateShared(shared, maturityErrorEl)) {
    maturityResultEl.hidden = true;
    document.getElementById("mFormulaActions").hidden = true;
    mFormulaPanel.hidden = true;
    return;
  }
  maturityErrorEl.textContent = "";

  const years = convertToYears(shared.tenureValue, shared.tenureUnit);
  updateSidebarStats(shared.amount, shared.roi, years);

  if (currentMode === "FD") {
    const maturity = compoundAmount(shared.amount, shared.roi, years, shared.freq);
    const interest = maturity - shared.amount;

    document.getElementById("mPrincipal").textContent = formatINR(shared.amount);
    document.getElementById("mInterest").textContent = formatINR(interest);
    document.getElementById("mMaturity").textContent = formatINR(maturity);

    const lines = [];
    lines.push(`<span class="mono">A = P × (1 + r/n)^(n×t)</span>`);
    lines.push(`P (${t("mPrincipalLabelFD")}) = <span class="mono">${formatINR(shared.amount)}</span>`);
    lines.push(`r (ROI) = <span class="mono">${shared.roi}%</span>, ${t("compoundingLabel")}: ${freqName(shared.freq)}`);
    lines.push(`t (${t("tenureLabel")}) = <span class="mono">${years.toFixed(4)} ${t("yearsStr")}</span>`);

    if (shared.freq === "simple") {
      const rt = (shared.roi / 100) * years;
      lines.push(`${t("step1Simple")} <span class="mono">${(shared.roi / 100).toFixed(4)} × ${years.toFixed(4)} = ${rt.toFixed(6)}</span>`);
      lines.push(`${t("step2Simple")} <span class="mono">${formatINR(shared.amount)} × ${(1 + rt).toFixed(6)} = ${formatINR(maturity)}</span>`);
    } else {
      const n = Number(shared.freq);
      const rn = shared.roi / 100 / n;
      const periods = n * years;
      const factor = Math.pow(1 + rn, periods);
      lines.push(`${t("step1Compound")} <span class="mono">${(shared.roi / 100).toFixed(4)} ÷ ${n} = ${rn.toFixed(6)}</span>`);
      lines.push(`${t("step2Compound")} <span class="mono">${(1 + rn).toFixed(6)}</span>`);
      lines.push(t("step3Compound", { periods: `<span class="mono">${n} × ${years.toFixed(4)} = ${periods.toFixed(2)}</span>` }));
      lines.push(`${t("step4Compound")} <span class="mono">${(1 + rn).toFixed(6)}^${periods.toFixed(2)} = ${factor.toFixed(6)}</span>`);
      lines.push(`${t("step5Compound")} <span class="mono">${formatINR(shared.amount)} × ${factor.toFixed(6)} = ${formatINR(maturity)}</span>`);
    }
    lines.push(`${t("interestCalc")} <span class="mono">${formatINR(maturity)} − ${formatINR(shared.amount)} = ${formatINR(interest)}</span>`);

    renderSteps(mFormulaPanel, t("fdMaturityStepsTitle"), lines);
  } else {
    const months = toMonths(years);
    if (months < 1) {
      maturityErrorEl.textContent = t("errRdMin1Month");
      maturityResultEl.hidden = true;
      return;
    }
    const rd = calculateRD(shared.amount, shared.roi, months, shared.freq);
    const interest = rd.total - rd.deposited;

    document.getElementById("mPrincipal").textContent = formatINR(rd.deposited);
    document.getElementById("mInterest").textContent = formatINR(interest);
    document.getElementById("mMaturity").textContent = formatINR(rd.total);

    const lines = [];
    lines.push(t("rdMatStep1"));
    lines.push(`${t("rdMatStep2")} <span class="mono">${months}</span>`);
    lines.push(t("rdMatStep3", { years: `<span class="mono">${rd.firstTerm.remaining}/12 = ${rd.firstTerm.years.toFixed(4)}</span>` }) + ` <span class="mono">${formatINR(shared.amount)} → ${formatINR(rd.firstTerm.fv)}</span>`);
    lines.push(t("rdMatStep4", { months, years: `<span class="mono">${rd.lastTerm.remaining}/12 = ${rd.lastTerm.years.toFixed(4)}</span>` }) + ` <span class="mono">${formatINR(shared.amount)} → ${formatINR(rd.lastTerm.fv)}</span>`);
    lines.push(t("rdMatStep5"));
    lines.push(`${t("rdMatStep6")} <span class="mono">${formatINR(shared.amount)} × ${months} = ${formatINR(rd.deposited)}</span>`);
    lines.push(`${t("rdMatStep7")} <span class="mono">${formatINR(rd.total)}</span>`);
    lines.push(`${t("rdMatStep8")} <span class="mono">${formatINR(rd.total)} − ${formatINR(rd.deposited)} = ${formatINR(interest)}</span>`);

    renderSteps(mFormulaPanel, t("rdMaturityStepsTitle"), lines);
  }

  maturityResultEl.hidden = false;
  document.getElementById("mFormulaActions").hidden = false;
  mFormulaPanel.hidden = true;
  mFormulaToggle.textContent = t("formulaToggleShow");
});

// ---------- Stub B: premature withdrawal ----------

const withdrawValueEl = document.getElementById("withdrawValue");
const withdrawToggleEl = document.querySelector("#tabPremature .unit-toggle");
const cardRateEl = document.getElementById("cardRate");
const penaltyEl = document.getElementById("penalty");
const effectiveRateHintEl = document.getElementById("effectiveRateHint");
const calcPrematureBtn = document.getElementById("calcPrematureBtn");
const prematureErrorEl = document.getElementById("prematureError");

let cardRateTouched = false;
cardRateEl.addEventListener("input", () => { cardRateTouched = true; updateEffectiveRateHint(); });
penaltyEl.addEventListener("input", updateEffectiveRateHint);
roiEl.addEventListener("input", () => {
  if (!cardRateTouched) {
    cardRateEl.value = roiEl.value;
    updateEffectiveRateHint();
  }
});

function updateEffectiveRateHint() {
  const cardRate = parseFloat(cardRateEl.value);
  const penalty = parseFloat(penaltyEl.value);
  if (!isNaN(cardRate) && !isNaN(penalty)) {
    const eff = Math.max(cardRate - penalty, 0);
    effectiveRateHintEl.textContent = t("effectiveRateHintCalculated", { rate: eff.toFixed(2) });
  } else {
    effectiveRateHintEl.textContent = t("effectiveRateHintPending");
  }
}

calcPrematureBtn.addEventListener("click", () => {
  topErrorEl.textContent = "";
  const shared = readSharedInputs();

  if (!validateShared(shared, prematureErrorEl)) {
    prematureResultEl.hidden = true;
    document.getElementById("pFormulaActions").hidden = true;
    pFormulaPanel.hidden = true;
    return;
  }

  const withdrawValue = parseFloat(withdrawValueEl.value);
  const withdrawUnit = getActiveUnit(withdrawToggleEl);
  const cardRate = parseFloat(cardRateEl.value);
  const penalty = parseFloat(penaltyEl.value);

  if (!(withdrawValue > 0)) {
    prematureErrorEl.textContent = t("errWithdrawTime");
    prematureResultEl.hidden = true;
    return;
  }
  if (isNaN(cardRate) || cardRate < 0) {
    prematureErrorEl.textContent = t("errCardRate");
    prematureResultEl.hidden = true;
    return;
  }
  if (isNaN(penalty) || penalty < 0) {
    prematureErrorEl.textContent = t("errPenalty");
    prematureResultEl.hidden = true;
    return;
  }

  const tenureYears = convertToYears(shared.tenureValue, shared.tenureUnit);
  const heldYears = convertToYears(withdrawValue, withdrawUnit);
  const effectiveRate = Math.max(cardRate - penalty, 0);

  if (currentMode === "FD") {
    if (heldYears > tenureYears) {
      prematureErrorEl.textContent = t("errHoldExceeds");
      prematureResultEl.hidden = true;
      return;
    }
    prematureErrorEl.textContent = "";

    const amountEffective = compoundAmount(shared.amount, effectiveRate, heldYears, shared.freq);
    const amountAtCardRate = compoundAmount(shared.amount, cardRate, heldYears, shared.freq);
    const penaltyLoss = amountAtCardRate - amountEffective;

    document.getElementById("pPrincipal").textContent = formatINR(shared.amount);
    document.getElementById("pHeld").textContent = formatDuration(heldYears);
    document.getElementById("pRate").textContent = effectiveRate.toFixed(2) + "%";
    document.getElementById("pPenaltyLoss").textContent = "− " + formatINR(penaltyLoss);
    document.getElementById("pNet").textContent = formatINR(amountEffective);

    const lines = [];
    lines.push(t("fdPreStep1", { cardRate, penalty }));
    lines.push(`${t("fdPreStep2")} <span class="mono">${cardRate} − ${penalty} = ${effectiveRate.toFixed(2)}%</span>`);
    lines.push(t("fdPreStep3", { years: heldYears.toFixed(4), duration: formatDuration(heldYears) }));
    lines.push(t("fdPreStep4"));
    if (shared.freq === "simple") {
      lines.push(`${t("fdPreStep5Simple")} <span class="mono">${formatINR(shared.amount)} × (1 + ${(effectiveRate / 100).toFixed(4)} × ${heldYears.toFixed(4)}) = ${formatINR(amountEffective)}</span>`);
    } else {
      const n = Number(shared.freq);
      const rn = effectiveRate / 100 / n;
      const periods = n * heldYears;
      lines.push(t("fdPreStep5Compound", { rn: `<span class="mono">${(effectiveRate / 100).toFixed(4)} ÷ ${n} = ${rn.toFixed(6)}</span>`, periods: periods.toFixed(2) }));
      lines.push(`${t("fdPreStep6Compound")} <span class="mono">${formatINR(shared.amount)} × (${(1 + rn).toFixed(6)})^${periods.toFixed(2)} = ${formatINR(amountEffective)}</span>`);
    }
    lines.push(`${t("fdPreStep7")} <span class="mono">${formatINR(amountAtCardRate)}</span>`);
    lines.push(`${t("fdPreStep8")} <span class="mono">${formatINR(amountAtCardRate)} − ${formatINR(amountEffective)} = ${formatINR(penaltyLoss)}</span>`);

    renderSteps(pFormulaPanel, t("fdPrematureStepsTitle"), lines);
  } else {
    const totalMonths = toMonths(tenureYears);
    const heldMonths = toMonths(heldYears);

    if (heldMonths > totalMonths) {
      prematureErrorEl.textContent = t("errHoldExceeds");
      prematureResultEl.hidden = true;
      return;
    }
    if (heldMonths < 1) {
      prematureErrorEl.textContent = t("errPrematureMin1Month");
      prematureResultEl.hidden = true;
      return;
    }
    prematureErrorEl.textContent = "";

    const rdEffective = calculateRD(shared.amount, effectiveRate, heldMonths, shared.freq);
    const rdAtCardRate = calculateRD(shared.amount, cardRate, heldMonths, shared.freq);
    const penaltyLoss = rdAtCardRate.total - rdEffective.total;

    document.getElementById("pPrincipal").textContent = formatINR(rdEffective.deposited);
    document.getElementById("pHeld").textContent = formatDuration(heldMonths / 12) + ` (${heldMonths} ${t("installmentsStr")})`;
    document.getElementById("pRate").textContent = effectiveRate.toFixed(2) + "%";
    document.getElementById("pPenaltyLoss").textContent = "− " + formatINR(penaltyLoss);
    document.getElementById("pNet").textContent = formatINR(rdEffective.total);

    const lines = [];
    lines.push(t("rdPreStep1", { cardRate, penalty, effectiveRate: effectiveRate.toFixed(2) }));
    lines.push(t("rdPreStep2", { months: heldMonths }));
    lines.push(t("rdPreStep3", { years: rdEffective.firstTerm.years.toFixed(4), fv: formatINR(rdEffective.firstTerm.fv) }));
    lines.push(t("rdPreStep4", { months: heldMonths, years: rdEffective.lastTerm.years.toFixed(4), fv: formatINR(rdEffective.lastTerm.fv) }));
    lines.push(`${t("rdPreStep5")} <span class="mono">${formatINR(shared.amount)} × ${heldMonths} = ${formatINR(rdEffective.deposited)}</span>`);
    lines.push(`${t("rdPreStep6")} <span class="mono">${formatINR(rdEffective.total)}</span>`);
    lines.push(`${t("rdPreStep7")} <span class="mono">${formatINR(rdAtCardRate.total)}</span>`);
    lines.push(`${t("rdPreStep8")} <span class="mono">${formatINR(rdAtCardRate.total)} − ${formatINR(rdEffective.total)} = ${formatINR(penaltyLoss)}</span>`);

    renderSteps(pFormulaPanel, t("rdPrematureStepsTitle"), lines);
  }

  prematureResultEl.hidden = false;
  document.getElementById("pFormulaActions").hidden = false;
  pFormulaPanel.hidden = true;
  pFormulaToggle.textContent = t("formulaToggleShow");
});

// ---------- TAB 3: MIS Calculation ----------

document.getElementById("calcMISBtn").addEventListener("click", () => {
  const misErrorEl = document.getElementById("misError");
  const misResultEl = document.getElementById("misResult");
  const misFormulaActionsEl = document.getElementById("misFormulaActions");
  const misPanelEl = document.getElementById("misFormulaPanel");

  misErrorEl.textContent = "";
  topErrorEl.textContent = "";

  if (currentMode !== "FD") {
    misErrorEl.textContent = t("errMisRD");
    misResultEl.hidden = true;
    misFormulaActionsEl.hidden = true;
    return;
  }

  const shared = readSharedInputs();
  if (!validateShared(shared, misErrorEl)) {
    misResultEl.hidden = true;
    misFormulaActionsEl.hidden = true;
    return;
  }

  const years = convertToYears(shared.tenureValue, shared.tenureUnit);
  const months = Math.round(years * 12);
  if (months < 1) {
    misErrorEl.textContent = t("errTenure");
    misResultEl.hidden = true;
    return;
  }

  updateSidebarStats(shared.amount, shared.roi, years);

  // MIS uses simple interest: Monthly = P × r / 12
  const monthlyPayout   = shared.amount * (shared.roi / 100) / 12;
  const totalInterest   = monthlyPayout * months;
  const totalReceived   = shared.amount + totalInterest;

  document.getElementById("misMonthly").textContent       = formatINR(monthlyPayout);
  document.getElementById("misPrincipal").textContent     = formatINR(shared.amount);
  document.getElementById("misTenure").textContent        = months + " months";
  document.getElementById("misTotalInterest").textContent = formatINR(totalInterest);
  document.getElementById("misTotalReceived").textContent = formatINR(totalReceived);

  // Build formula steps
  const lines = [];
  lines.push(`<span class="mono">${t("misStep1")}</span>`);
  lines.push(`${t("misStep2")} <span class="mono">${formatINR(shared.amount)}</span>`);
  lines.push(`${t("misStep3")} <span class="mono">${shared.roi}%</span>`);
  lines.push(`${t("misStep4")} <span class="mono">${formatINR(shared.amount)} × ${(shared.roi/100).toFixed(4)} ÷ 12 = ${formatINR(monthlyPayout)}</span>`);
  lines.push(`${t("misStep5")} <span class="mono">${months}</span>`);
  lines.push(`${t("misStep6")} <span class="mono">${formatINR(monthlyPayout)} × ${months} = ${formatINR(totalInterest)}</span>`);
  lines.push(`${t("misStep7")} <span class="mono">${formatINR(shared.amount)}</span>`);
  lines.push(`${t("misStep8")} <span class="mono">${formatINR(shared.amount)} + ${formatINR(totalInterest)} = ${formatINR(totalReceived)}</span>`);
  renderSteps(misPanelEl, t("misStepsTitle"), lines);

  misResultEl.hidden = false;
  misFormulaActionsEl.hidden = false;
  misPanelEl.hidden = true;
  document.getElementById("misFormulaToggle").textContent = t("misFormulaToggle");
});

// Initialize the static text first time
updateStaticText();
