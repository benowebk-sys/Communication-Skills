const communicationQuiz = [
  {
    id: 1,
    type: "MCQ",
    question: "Scenario: During a routine track inspection, you notice a minor fissure in a rail joint on a high-speed line. Using the SBAR (Situation, Background, Assessment, Recommendation) framework, which statement best represents the 'Assessment' phase?",
    translation: "سيناريو: أثناء فحص روتيني للمسار، لاحظت شقًا صغيرًا في وصلة سكة حديد على خط فائق السرعة. باستخدام إطار عمل SBAR، أي عبارة تمثل مرحلة 'التقييم' (Assessment)؟",
    options: [
      "I suggest implementing a temporary speed restriction of 40 km/h until a repair crew arrives.",
      "I am reporting a structural integrity concern found at Kilometer 42 on the North Line.",
      "The fissure currently measures 2mm, but the vibration from high-speed transit likely increases the risk of rapid propagation.",
      "The track was last serviced three months ago and showed no signs of wear at that time."
    ],
    answer: "The fissure currently measures 2mm, but the vibration from high-speed transit likely increases the risk of rapid propagation.",
    hintEN: "Assessment involves analyzing the situation and identifying the risks.",
    hintAR: "التقييم يتضمن تحليل الموقف وتحديد المخاطر الناتجة عنه."
  },
  {
    id: 2,
    type: "MCQ",
    question: "You are presenting a technical proposal for a new signaling system to a board of non-technical stakeholders. What is the most effective way to communicate complex technical data?",
    translation: "أنت تقدم اقتراحاً فنياً لنظام إشارات جديد لمجلس إدارة من غير المتخصصين. ما هي الطريقة الأكثر فعالية لتوصيل البيانات الفنية المعقدة؟",
    options: [
      "Use high-level engineering terminology to maintain professional authority.",
      "Provide the full raw data sheets so they can see the comprehensive research.",
      "Use analogies to compare the signaling system to a traffic light network and use visual infographics for performance metrics.",
      "Keep the presentation entirely verbal to avoid distracting them with slides."
    ],
    answer: "Use analogies to compare the signaling system to a traffic light network and use visual infographics for performance metrics.",
    hintEN: "Analogies and visuals help simplify complex data for non-experts.",
    hintAR: "الأمثلة التوضيحية والرسوم تساعد في تبسيط البيانات المعقدة لغير المتخصصين."
  },
  {
    id: 3,
    type: "MCQ",
    question: "Scenario: A project delay has occurred due to a supply chain issue with specialized steel for bridge bearings. When communicating this to the University President's office, what should be the primary focus of your report?",
    translation: "سيناريو: حدث تأخير في المشروع بسبب مشكلة في سلسلة التوريد للصلب المخصص لكراسي الجسور. عند إبلاغ مكتب رئيس الجامعة بذلك، ما الذي يجب أن يكون التركيز الأساسي لتقريرك؟",
    options: [
      "A request for the office to contact the supplier directly.",
      "The technical specifications of the steel compared to other grades.",
      "The impact on the project timeline and a clear mitigation plan to recover lost time.",
      "A detailed history of the steel manufacturer's previous failures."
    ],
    answer: "The impact on the project timeline and a clear mitigation plan to recover lost time.",
    hintEN: "Focus on the impact and the solution (mitigation plan).",
    hintAR: "ركز على التأثير وخطة الحل (خطة التخفيف من الآثار)."
  },
  {
    id: 4,
    type: "MCQ",
    question: "Scenario: You are designing a poster for a railway technology expo. Which layout principle will best help viewers understand the flow of information?",
    translation: "سيناريو: أنت تقوم بتصميم ملصق لمعرض تكنولوجيا السكك الحديدية. أي مبدأ تنسيق سيساعد المشاهدين بشكل أفضل على فهم تدفق المعلومات؟",
    options: [
      "Using at least five different bright colors to grab attention.",
      "Creating a logical visual hierarchy using headings, bullet points, and intentional whitespace.",
      "Filling every available inch of space with text to maximize information.",
      "Using a random arrangement of images to create a 'mosaic' effect."
    ],
    answer: "Creating a logical visual hierarchy using headings, bullet points, and intentional whitespace.",
    hintEN: "Visual hierarchy and whitespace guide the viewer's eye.",
    hintAR: "التسلسل الهرمي البصري والمساحات البيضاء توجه عين القارئ."
  },
  {
    id: 5,
    type: "MCQ",
    question: "When using the SBAR tool to report a malfunction in a platform screen door, what information belongs in the 'Background' section?",
    translation: "عند استخدام أداة SBAR للإبلاغ عن خلل في أبواب الرصيف الزجاجية، ما هي المعلومات التي تنتمي إلى قسم 'الخلفية' (Background)؟",
    options: [
      "The door at Platform 2 is stuck in the open position.",
      "Please dispatch a technician with a replacement sensor immediately.",
      "I believe the motor has burned out due to an electrical surge.",
      "The door mechanism was flagged for irregular sensor behavior during last week's maintenance check."
    ],
    answer: "The door mechanism was flagged for irregular sensor behavior during last week's maintenance check.",
    hintEN: "Background includes history or context leading up to the current situation.",
    hintAR: "الخلفية تشمل التاريخ أو السياق الذي أدى إلى الوضع الحالي."
  },
  {
    id: 6,
    type: "MCQ",
    question: "Which of the following is a key characteristic of an effective technical summary for a railway engineering report?",
    translation: "أي مما يلي يعد خاصية أساسية لملخص فني فعال لتقرير هندسة السكك الحديدية؟",
    options: [
      "It should focus on the 'bottom line' results and key recommendations.",
      "It should include all the mathematical proofs used in the study.",
      "It should use poetic language to make the engineering project sound more exciting.",
      "It should be at least five pages long to show thoroughness."
    ],
    answer: "It should focus on the 'bottom line' results and key recommendations.",
    hintEN: "Summaries should be concise and result-oriented.",
    hintAR: "يجب أن تكون الملخصات موجزة وتركز على النتائج."
  },
  {
    id: 7,
    type: "MCQ",
    question: "When presenting a new bridge design, you use the SBAR framework to explain a change in materials. In the 'Recommendation' section, what should you include?",
    translation: "عند تقديم تصميم جديد لجسر، تستخدم إطار SBAR لشرح تغيير في المواد. في قسم 'التوصية' (Recommendation)، ماذا يجب أن تضمن؟",
    options: [
      "A specific proposal to approve the switch to reinforced carbon-fiber and an immediate timeline for testing.",
      "A detailed analysis of why the previous material failed.",
      "A list of all the bridges built in the last decade.",
      "An apology for the extra cost associated with the new material."
    ],
    answer: "A specific proposal to approve the switch to reinforced carbon-fiber and an immediate timeline for testing.",
    hintEN: "Recommendations should be actionable proposals.",
    hintAR: "التوصيات يجب أن تكون مقترحات قابلة للتنفيذ."
  },
  {
    id: 8,
    type: "MCQ",
    question: "Scenario: During a team meeting, a junior employee notices a potential flaw in a project plan led by the Director. However, they choose to remain silent because they fear being seen as 'not a team player'. Which element of workplace culture is missing?",
    translation: "سيناريو: أثناء اجتماع الفريق، لاحظ موظف مبتدئ خللاً محتملاً في خطة مشروع يقودها المدير، لكنه اختار الصمت خوفاً من أن يُنظر إليه كشخص 'غير متعاون'. ما العنصر المفقود في ثقافة العمل؟",
    options: [
      "Hierarchical Structure",
      "Psychological Safety",
      "Professionalism",
      "Competitive Drive"
    ],
    answer: "Psychological Safety",
    hintEN: "Psychological safety allows employees to speak up without fear.",
    hintAR: "الأمان النفسي يسمح للموظفين بالتحدث دون خوف."
  },
  {
    id: 9,
    type: "MCQ",
    question: "Scenario: A manager says, 'It would be great if this could be looked at when you have a moment,' implying urgency. The employee waits three days to start. This misunderstanding is most likely a result of a clash between:",
    translation: "سيناريو: قال مدير 'سيكون من الرائع إلقاء نظرة على هذا عندما يكون لديك وقت'، ملمحاً للأهمية. انتظر الموظف 3 أيام للبدء. هذا سوء الفهم ناتج عن:",
    options: [
      "Diversity and Inclusion",
      "High-context and Low-context communication styles",
      "Employee engagement levels",
      "Workplace ethics"
    ],
    answer: "High-context and Low-context communication styles",
    hintEN: "High-context relies on implied meaning; low-context relies on literal words.",
    hintAR: "السياق العالي يعتمد على المعنى الضمني، بينما المنخفض يعتمد على الكلمات الحرفية."
  },
  {
    id: 10,
    type: "MCQ",
    question: "Scenario: In Company X, employees are frequently rewarded for staying past 8:00 PM, and those who leave on time are often excluded from high-profile projects. This is an example of:",
    translation: "سيناريو: في الشركة (X)، يتم مكافأة الموظفين الذين يبقون لبعد 8 مساءً، بينما يتم استبعاد من يغادرون في الموعد من المشاريع الكبيرة. هذا مثال على:",
    options: [
      "Meritocracy",
      "Performance-driven culture",
      "Presenteeism",
      "Agile workflow"
    ],
    answer: "Presenteeism",
    hintEN: "Presenteeism is the practice of staying at work longer than necessary to show commitment.",
    hintAR: "الظاهرية (Presenteeism) هي ممارسة البقاء في العمل لفترة أطول من اللازم لإظهار الالتزام."
  },
  {
    id: 11,
    type: "MCQ",
    question: "Scenario: A tech firm has a stated value of 'Customer First.' However, the sales team is pressured to sell expensive software packages that customers don't need just to hit targets. What does this represent?",
    translation: "سيناريو: شركة تقنية لديها قيمة 'العميل أولاً'، لكن فريق المبيعات يضغط لبيع باقات باهظة لا يحتاجها العميل فقط لتحقيق الأهداف. ماذا يمثل هذا؟",
    options: [
      "Cultural Alignment",
      "Values Gap (Incongruence)",
      "Strategic Pivot",
      "Market Competitiveness"
    ],
    answer: "Values Gap (Incongruence)",
    hintEN: "A values gap occurs when actions do not match stated principles.",
    hintAR: "تحدث فجوة القيم عندما لا تتطابق الأفعال مع المبادئ المعلنة."
  },
  {
    id: 12,
    type: "MCQ",
    question: "Scenario: A traditional manufacturing company refuses to adopt new digital inventory tracking systems because 'we have always done it this way,' despite losing market share. This company is demonstrating a/an:",
    translation: "سيناريو: شركة تصنيع تقليدية ترفض اعتماد أنظمة تتبع رقمية لأنهم 'دائمًا ما فعلوا ذلك بهذه الطريقة'، رغم خسارة الحصة السوقية. هذا يظهر ثقافة:",
    options: [
      "Adaptive Culture",
      "Inert (or Resistant) Culture",
      "Innovative Culture",
      "Collaborative Culture"
    ],
    answer: "Inert (or Resistant) Culture",
    hintEN: "Inert cultures resist change and stick to old methods.",
    hintAR: "الثقافات الخاملة تقاوم التغيير وتتمسك بالأساليب القديمة."
  },
  {
    id: 13,
    type: "MCQ",
    question: "Scenario: You notice the audience looks confused after you explain a complex financial deficit. Which action demonstrates the most effective application of presentation language to regain engagement?",
    translation: "سيناريو: لاحظت أن الجمهور يبدو مرتبكاً بعد شرح عجز مالي معقد. أي إجراء يظهر أفضل استخدام للغة العرض لاستعادة تفاعلهم؟",
    options: [
      "Re-read the technical definition of the deficit directly from your slide to ensure accuracy.",
      "Transition by saying, 'To put those numbers into perspective, imagine our budget as a household checking account...'",
      "Immediately move to the next slide to maintain the presentation's momentum and timing.",
      "Increase your speaking volume and use formal academic jargon to emphasize the seriousness."
    ],
    answer: "Transition by saying, 'To put those numbers into perspective, imagine our budget as a household checking account...'",
    hintEN: "Using analogies helps put complex data into perspective.",
    hintAR: "استخدام الأمثلة التوضيحية يساعد في وضع البيانات المعقدة في منظور مفهوم."
  },
  {
    id: 14,
    type: "MCQ",
    question: "In presentation development, what is the primary reason for choosing a 'Sans Serif' font (like Arial or Calibri) over a 'Serif' font (like Times New Roman) for body text on a slide?",
    translation: "في تطوير العروض التقديمية، ما هو السبب الرئيسي لاختيار خط 'Sans Serif' (مثل Arial) بدلاً من 'Serif' (مثل Times New Roman) للنصوص؟",
    options: [
      "Serif fonts take up significantly more disk space in the presentation file.",
      "Sans Serif fonts are generally easier to read on digital screens and from a distance.",
      "Serif fonts are technically impossible for modern projectors to display.",
      "Sans Serif fonts are always more decorative and artistic."
    ],
    answer: "Sans Serif fonts are generally easier to read on digital screens and from a distance.",
    hintEN: "Sans Serif fonts have clean lines that are better for digital readability.",
    hintAR: "خطوط Sans Serif لها خطوط نظيفة تجعلها أفضل للقراءة الرقمية."
  },
  {
    id: 15,
    type: "MCQ",
    question: "Which rule of thumb is most commonly recommended during the development phase to avoid 'information overload' on a single slide?",
    translation: "أي قاعدة عامة يوصى بها غالباً أثناء مرحلة التطوير لتجنب 'التحميل الزائد للمعلومات' في شريحة واحدة؟",
    options: [
      "The 'Rainbow Rule,' using at least five different colors to categorize data.",
      "The 'Full Script' method, where every word spoken is written on the slide.",
      "The 10-20-30 Rule (10 slides, 20 minutes, 30-point font).",
      "The 100-word limit per slide."
    ],
    answer: "The 10-20-30 Rule (10 slides, 20 minutes, 30-point font).",
    hintEN: "This rule promotes brevity and legibility.",
    hintAR: "هذه القاعدة تعزز الإيجاز ووضوح القراءة."
  },
  {
    id: 16,
    type: "MCQ",
    question: "During the presentation development process, what is the purpose of 'Signposting' language?",
    translation: "خلال عملية تطوير العرض التقديمي، ما هو الغرض من لغة 'Signposting' (لغة الإرشاد)؟",
    options: [
      "To highlight every single noun in a sentence with a different color.",
      "To provide a literal map of the building for the audience.",
      "To indicate to the audience where the speaker is in the structure of the presentation.",
      "To ensure the speaker uses as many metaphors as possible."
    ],
    answer: "To indicate to the audience where the speaker is in the structure of the presentation.",
    hintEN: "Signposting helps the audience follow the logical flow of the talk.",
    hintAR: "تساعد لغة الإرشاد الجمهور على متابعة التدفق المنطقي للحديث."
  },
  {
    id: 17,
    type: "MCQ",
    question: "Which font size is generally considered the minimum acceptable size for body text in a standard conference room presentation?",
    translation: "ما هو حجم الخط الذي يُعتبر عموماً الحد الأدنى المقبول لنص الموضوع في عرض تقديمي داخل غرفة مؤتمرات قياسية؟",
    options: [
      "12 points",
      "24 to 30 points",
      "10 points",
      "72 points"
    ],
    answer: "24 to 30 points",
    hintEN: "Text must be large enough for the person at the back of the room to read.",
    hintAR: "يجب أن يكون النص كبيراً بما يكفي ليقرأه الشخص الموجود في مؤخرة الغرفة."
  },
  {
    id: 18,
    type: "MCQ",
    question: "Which of the following color combinations provides the highest level of accessibility and legibility for a large audience?",
    translation: "أي من مجموعات الألوان التالية توفر أعلى مستوى من سهولة الوصول والوضوح لجمهور كبير؟",
    options: [
      "Dark blue or black text on a light gray or white background",
      "Yellow text on a white background",
      "Light blue text on a dark blue background",
      "Red text on a green background"
    ],
    answer: "Dark blue or black text on a light gray or white background",
    hintEN: "High contrast is essential for legibility.",
    hintAR: "التباين العالي ضروري جداً لوضوح القراءة."
  },
  {
    id: 19,
    type: "MCQ",
    question: "When designing a presentation for a large, dimly lit auditorium, what is a common professional recommendation regarding font color?",
    translation: "عند تصميم عرض تقديمي لقاعة كبيرة ذات إضاءة خافتة، ما هي التوصية المهنية الشائعة فيما يتعلق بلون الخط؟",
    options: [
      "Use light-colored text (white or light yellow) on a dark background.",
      "Use dark gray text on a black background to minimize light.",
      "Avoid using any color at all and keep slides blank.",
      "Use neon colors to ensure they glow in the dark."
    ],
    answer: "Use light-colored text (white or light yellow) on a dark background.",
    hintEN: "Light text on a dark background is easier on the eyes in dark rooms.",
    hintAR: "النص الفاتح على خلفية داكنة أريح للعين في الغرف المظلمة."
  },
  {
    id: 20,
    type: "MCQ",
    question: "In the context of 'Visual Hierarchy,' how should font color be applied to key terms or specific data points?",
    translation: "في سياق 'التسلسل الهرمي البصري'، كيف يجب تطبيق لون الخط على المصطلحات الرئيسية أو نقاط بيانات محددة؟",
    options: [
      "Use light gray for important points and bright colors for minor details.",
      "Use a single consistent 'accent color' to highlight only the most important information.",
      "Match the font color exactly to the background color for a 'hidden' effect.",
      "Every word should be a different color to keep the audience's attention."
    ],
    answer: "Use a single consistent 'accent color' to highlight only the most important information.",
    hintEN: "Use color sparingly to draw attention to what matters most.",
    hintAR: "استخدم الألوان باعتدال لجذب الانتباه إلى ما هو أكثر أهمية."
  },
  {
    id: 21,
    type: "MCQ",
    question: "During the 'Conclusion' phase of a presentation, which action is most critical for ensuring the audience remembers the core message?",
    translation: "خلال مرحلة 'الخاتمة' للعرض، ما هو الإجراء الأكثر أهمية لضمان تذكر الجمهور للرسالة الأساسية؟",
    options: [
      "Introducing a final piece of new data to leave the audience surprised.",
      "Restating the main points and providing a clear 'Call to Action'.",
      "Apologizing for any technical difficulties or time constraints experienced.",
      "Providing a detailed bibliography of every source used during the research."
    ],
    answer: "Restating the main points and providing a clear 'Call to Action'.",
    hintEN: "The conclusion should summarize and tell the audience what to do next.",
    hintAR: "يجب أن تلخص الخاتمة النقاط وتخبر الجمهور بما يجب فعله تالياً."
  },
  {
    id: 22,
    type: "MCQ",
    question: "In the 'Introduction' of a professional presentation, what is the primary purpose of the 'Hook'?",
    translation: "في 'مقدمة' العرض التقديمي المهني، ما هو الغرض الأساسي من الـ 'Hook' (الجذب)؟",
    options: [
      "To define every technical term that will be used in the Body section.",
      "To provide a 10-minute detailed history of the subject matter.",
      "To capture the audience's attention and establish the relevance of the topic.",
      "To list the speaker's entire educational and professional history."
    ],
    answer: "To capture the audience's attention and establish the relevance of the topic.",
    hintEN: "A hook makes the audience want to listen to the rest of the presentation.",
    hintAR: "الجذب يجعل الجمهور يرغب في الاستماع لبقية العرض."
  },
  {
    id: 23,
    type: "MCQ",
    question: "Which of the following methods is widely considered the most effective way to grab an audience's attention during the first 60 seconds of a presentation?",
    translation: "أي من الطرق التالية تعتبر الأكثر فعالية لجذب انتباه الجمهور خلال أول 60 ثانية من العرض؟",
    options: [
      "Reading a full list of your academic credentials and past job titles.",
      "Opening with an apology for being nervous or having technical issues.",
      "Asking a provocative question or sharing a startling statistic related to the topic.",
      "Starting with a long silence until the audience becomes uncomfortable."
    ],
    answer: "Asking a provocative question or sharing a startling statistic related to the topic.",
    hintEN: "Provocative questions or statistics engage the audience's curiosity immediately.",
    hintAR: "الأسئلة المثيرة للتفكير أو الإحصائيات الصادمة تجذب فضول الجمهور على الفور."
  }
];

let idx = 0;
let score = 0;
let userAns = new Array(communicationQuiz.length).fill(null);

const beboMessages = {
    intro: ["مرحبا اسمي بيبو جاهز لبدا الاختبار ؟", "نجم النجوم حمدلله على السلامه يعم"],
    correct: ["يسلام عليك ايوا كده استمر عاش", "ايوا كده عاوزك تقفل الورقه فى الامتحان", "هايل يباشا الله عليك عاش", "يسلام عيك عليك انت كده تلعب على الامتياز يانجم", "شكلك مذاكر المنهج مرتين", "لسانى يعجز عن الكلام والله بس حقيقى برافو", "الدكتوره مبسوطه منك هايل والله", "شخصين بحبهم انت والمصمم عاش عليك بجد يسطا"],
    aggressive: ["تقريبا الفص الى فى مخك المسؤل عن اتخاذ القرارات فص ثوم", "تعرف لو جابو ليا كنوز الدنيا علشان ابيعك هبيعك اى الى انت بتعملو ده", "انت بتنام يسطا", "ادائك مش عاجبنى اقرا السؤال كويس", "شوف التلميحات", "حسب خبرتى كده انت تلعب بالعجله درجن درجن الامتياز ده مش سكتك صدقنى", "كده مينفعش انصحك تراجع المحاضرات تانى", "ركز عندك احسن من كده", "ركز", "اهدى بس كده وركز"],
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره",
        "منت لو تبص على التلميحات وانت بتحل مكنتش جبت درجات الحراره دى",
        "تعي اشب شاى يسطا بالى انت عامله ده",
        "متزعلش مش مهم درجتك فى الامتحان المهم الصحه والستر",
        "هيجى شخص يحسسك انك ف كفه والكون كله فى كفه وبعدين يسقفلك بالكفتين على وشك علشان النتيجه الى انت جايبها دى"
    ],
    resultsSuccess: [
        "مشاء الله عليك",
        "هايل بجد عاش عليك",
        "شيئ جميل جدا عندك احسن منكده كمان عاش عليك"
    ]
};

function setBebo(state, category) {
    const robot = document.getElementById('bebo-robot');
    const bubble = document.getElementById('bebo-bubble');
    const msgs = beboMessages[category];
    robot.className = `bebo-robot ${state}`;
    if (msgs) {
        bubble.innerText = msgs[Math.floor(Math.random() * msgs.length)];
        bubble.classList.add('active');
    }
    setTimeout(() => bubble.classList.remove('active'), 4500);
}

function toggleHint() {
    document.getElementById('hint-text').classList.toggle('hidden');
    document.querySelector('.bulb-icon').classList.toggle('bulb-active');
}

function render() {
    const q = communicationQuiz[idx];
    document.getElementById('question-number').innerText = `ASSESSMENT POINT ${idx + 1} OF ${communicationQuiz.length}`;
    document.getElementById('question-text').innerHTML = `
        <div class="mb-2">${q.question}</div>
        <div class="text-slate-500 text-sm italic" style="direction: rtl;">${q.translation}</div>
    `;
    document.getElementById('hint-text').innerHTML = `
        <div>${q.hintEN}</div>
        <div class="mt-1 opacity-70" style="direction: rtl;">${q.hintAR}</div>
    `;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAns[idx] !== null;
    document.getElementById('next-btn').disabled = !answered;

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn flex items-start gap-4 w-full';
        btn.innerHTML = `<span class="bg-white/5 w-6 h-6 flex-shrink-0 flex items-center justify-center font-bold text-[10px] text-slate-400">${String.fromCharCode(65 + i)}</span> 
                         <span class="text-sm">${opt}</span>`;
        if (answered) {
            btn.classList.add('locked');
            if (opt === q.answer) btn.classList.add('correct');
            if (userAns[idx] === opt && opt !== q.answer) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(opt);
        }
        container.appendChild(btn);
    });
    document.getElementById('progress-fill').style.width = `${((idx + 1) / communicationQuiz.length) * 100}%`;
}

function select(choiceText) {
    if (userAns[idx] !== null) return;
    userAns[idx] = choiceText;
    const isCorrect = (choiceText === communicationQuiz[idx].answer);
    if (isCorrect) { score++; setBebo('success', 'correct'); } 
    else { setBebo('error', 'aggressive'); }
    document.getElementById('score-pill').innerText = `SCORE: ${score}`;
    render();
}

function nextQuestion() {
    if (idx < communicationQuiz.length - 1) { idx++; render(); } 
    else { finish(); }
}

function prevQuestion() {
    if (idx > 0) { idx--; render(); }
}

function finish() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    const pct = Math.round((score / communicationQuiz.length) * 100);
    document.getElementById('final-score').innerText = pct + '%';
    const cat = pct >= 70 ? 'resultsSuccess' : 'resultsAdvice';
    document.getElementById('result-message').innerText = beboMessages[cat][0];
}

function restartQuiz() {
    idx = 0; score = 0;
    userAns = new Array(communicationQuiz.length).fill(null);
    document.getElementById('quiz-container').classList.remove('hidden');
    document.querySelector('.bebo-wrapper').classList.remove('hidden');
    document.getElementById('result-view').classList.add('hidden');
    render();
}

window.onload = () => { render(); setBebo('ready', 'intro'); };