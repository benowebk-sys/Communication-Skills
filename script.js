const quizData = [
  {
    id: 1,
    question: "Scenario: During a routine track inspection, you notice a minor fissure in a rail joint on a high-speed line. Using the SBAR (Situation, Background, Assessment, Recommendation) framework, which statement best represents the 'Assessment' phase?",
    translation: "سيناريو: أثناء فحص روتيني للمسار، لاحظت شقًا صغيرًا في وصلة سكة حديد على خط فائق السرعة. باستخدام إطار عمل SBAR، أي عبارة تمثل مرحلة 'التقييم' (Assessment)؟",
    options: [
      "I suggest implementing a temporary speed restriction of 40 km/h until a repair crew arrives.",
      "I am reporting a structural integrity concern found at Kilometer 42 on the North Line.",
      "The fissure currently measures 2mm, but the vibration from high-speed transit likely increases the risk of rapid propagation.",
      "The track was last serviced three months ago and showed no signs of wear at that time."
    ],
    optionsTranslation: [
      "أقترح تطبيق تخفيض سرعة مؤقت قدره 40 كم/ساعة حتى وصول فريق الإصلاح.",
      "أبلغ عن مشكلة في السلامة الهيكلية موجودة عند الكيلومتر 42 على الخط الشمالي.",
      "يبلغ قياس الشق حاليًا 2 مم، ولكن الاهتزاز الناتج عن الحركة فائقة السرعة يزيد على الأرجح من خطر الانتشار السريع.",
      "تمت صيانة المسار آخر مرة منذ ثلاثة أشهر ولم تظهر عليه علامات تآكل في ذلك الوقت."
    ],
    answer: "The fissure currently measures 2mm, but the vibration from high-speed transit likely increases the risk of rapid propagation.",
    hintEN: "Assessment means analyzing the current situation and predicting future risks based on evidence.",
    hintAR: "التقييم يعني تحليل الوضع الحالي والتنبؤ بالمخاطر المستقبلية بناءً على الأدلة."
  },
  {
    id: 2,
    question: "You are presenting a technical proposal for a new signaling system to a board of non-technical stakeholders. What is the most effective way to communicate complex technical data?",
    translation: "أنت تقدم اقتراحاً فنياً لنظام إشارات جديد لمجلس إدارة من غير المتخصصين. ما هي الطريقة الأكثر فعالية لتوصيل البيانات الفنية المعقدة؟",
    options: [
      "Use high-level engineering terminology to maintain professional authority.",
      "Provide the full raw data sheets so they can see the comprehensive research.",
      "Use analogies to compare the signaling system to a traffic light network and use visual infographics for performance metrics.",
      "Keep the presentation entirely verbal to avoid distracting them with slides."
    ],
    optionsTranslation: [
      "استخدام مصطلحات هندسية متقدمة للحفاظ على السلطة المهنية.",
      "تقديم أوراق البيانات الأولية الكاملة ليروا البحث الشامل.",
      "استخدام القياس لتشبيه نظام الإشارات بشبكة إشارات المرور واستخدام رسوم بيانية مرئية لمقاييس الأداء.",
      "إبقاء العرض تقديميًا بالكامل لتجنب تشتيت انتباههم بالشرائح."
    ],
    answer: "Use analogies to compare the signaling system to a traffic light network and use visual infographics for performance metrics.",
    hintEN: "Non-experts understand complex ideas better when linked to familiar concepts and visuals.",
    hintAR: "غير المتخصصين يفهمون الأفكار المعقدة بشكل أفضل عندما ترتبط بمفاهيم ومرئيات مألوفة."
  },
  {
    id: 3,
    question: "Scenario: A project delay has occurred due to a supply chain issue with specialized steel for bridge bearings. When communicating this to the University President's office, what should be the primary focus of your report?",
    translation: "سيناريو: حدث تأخير في المشروع بسبب مشكلة في سلسلة التوريد للصلب المخصص لكراسي الجسور. عند إبلاغ مكتب رئيس الجامعة بذلك، ما الذي يجب أن يكون التركيز الأساسي لتقريرك؟",
    options: [
      "A request for the office to contact the supplier directly.",
      "The technical specifications of the steel compared to other grades.",
      "The impact on the project timeline and a clear mitigation plan to recover lost time.",
      "A detailed history of the steel manufacturer's previous failures."
    ],
    optionsTranslation: [
      "طلب من المكتب الاتصال بالمورد مباشرة.",
      "المواصفات الفنية للصلب مقارنة بالدرجات الأخرى.",
      "التأثير على الجدول الزمني للمشروع وخطة تخفيف واضحة لاستعادة الوقت الضائع.",
      "تاريخ تفصيلي لإخفاقات الشركة المصنعة للصلب السابقة."
    ],
    answer: "The impact on the project timeline and a clear mitigation plan to recover lost time.",
    hintEN: "Senior management cares most about consequences and solutions, not technical details.",
    hintAR: "الإدارة العليا تهتم أكثر بالعواقب والحلول، وليس التفاصيل الفنية."
  },
  {
    id: 4,
    question: "Scenario: You are designing a poster for a railway technology expo. Which layout principle will best help viewers understand the flow of information?",
    translation: "سيناريو: أنت تقوم بتصميم ملصق لمعرض تكنولوجيا السكك الحديدية. أي مبدأ تنسيق سيساعد المشاهدين بشكل أفضل على فهم تدفق المعلومات؟",
    options: [
      "Using at least five different bright colors to grab attention.",
      "Creating a logical visual hierarchy using headings, bullet points, and intentional whitespace.",
      "Filling every available inch of space with text to maximize information.",
      "Using a random arrangement of images to create a 'mosaic' effect."
    ],
    optionsTranslation: [
      "استخدام خمسة ألوان زاهية مختلفة على الأقل لجذب الانتباه.",
      "إنشاء تسلسل هرمي بصري منطقي باستخدام العناوين والنقاط والمساحات الفارغة المتعمدة.",
      "ملء كل بوصة متاحة من المساحة بالنص لتعظيم المعلومات.",
      "استخدام ترتيب عشوائي للصور لإنشاء تأثير 'الفسيفساء'."
    ],
    answer: "Creating a logical visual hierarchy using headings, bullet points, and intentional whitespace.",
    hintEN: "Good design guides the eye naturally from most to least important information.",
    hintAR: "التصميم الجيد يوجه العين بشكل طبيعي من المعلومات الأكثر إلى الأقل أهمية."
  },
  {
    id: 5,
    question: "When using the SBAR tool to report a malfunction in a platform screen door, what information belongs in the 'Background' section?",
    translation: "عند استخدام أداة SBAR للإبلاغ عن خلل في أبواب الرصيف الزجاجية، ما هي المعلومات التي تنتمي إلى قسم 'الخلفية' (Background)؟",
    options: [
      "The door at Platform 2 is stuck in the open position.",
      "Please dispatch a technician with a replacement sensor immediately.",
      "I believe the motor has burned out due to an electrical surge.",
      "The door mechanism was flagged for irregular sensor behavior during last week's maintenance check."
    ],
    optionsTranslation: [
      "باب الرصيف رقم 2 عالق في وضع الفتح.",
      "يرجى إرسال فني مع مستشعر بديل فورًا.",
      "أعتقد أن المحرك احترق بسبب زيادة كهربائية.",
      "تم الإبلاغ عن آلية الباب لسلوك المستشعر غير المنتظم أثناء فحص الصيانة الأسبوع الماضي."
    ],
    answer: "The door mechanism was flagged for irregular sensor behavior during last week's maintenance check.",
    hintEN: "Background provides relevant history or context that led to the current situation.",
    hintAR: "الخلفية تقدم التاريخ أو السياق ذي الصلة الذي أدى إلى الوضع الحالي."
  },
  {
    id: 6,
    question: "Which of the following is a key characteristic of an effective technical summary for a railway engineering report?",
    translation: "أي مما يلي يعد خاصية أساسية لملخص فني فعال لتقرير هندسة السكك الحديدية؟",
    options: [
      "It should focus on the 'bottom line' results and key recommendations.",
      "It should include all the mathematical proofs used in the study.",
      "It should use poetic language to make the engineering project sound more exciting.",
      "It should be at least five pages long to show thoroughness."
    ],
    optionsTranslation: [
      "يجب أن يركز على النتائج 'الخلاصة' والتوصيات الرئيسية.",
      "يجب أن يتضمن جميع البراهين الرياضية المستخدمة في الدراسة.",
      "يجب أن يستخدم لغة شعرية لجعل المشروع الهندسي يبدو أكثر إثارة.",
      "يجب أن يكون بطول خمس صفحات على الأقل لإظهار الدقة."
    ],
    answer: "It should focus on the 'bottom line' results and key recommendations.",
    hintEN: "Executives want concise, actionable conclusions, not every detail.",
    hintAR: "المدراء التنفيذيون يريدون استنتاجات موجزة وقابلة للتنفيذ، وليس كل التفاصيل."
  },
  {
    id: 7,
    question: "When presenting a new bridge design, you use the SBAR framework to explain a change in materials. In the 'Recommendation' section, what should you include?",
    translation: "عند تقديم تصميم جديد لجسر، تستخدم إطار SBAR لشرح تغيير في المواد. في قسم 'التوصية' (Recommendation)، ماذا يجب أن تضمن؟",
    options: [
      "A specific proposal to approve the switch to reinforced carbon-fiber and an immediate timeline for testing.",
      "A detailed analysis of why the previous material failed.",
      "A list of all the bridges built in the last decade.",
      "An apology for the extra cost associated with the new material."
    ],
    optionsTranslation: [
      "اقتراح محدد للموافقة على التحول إلى ألياف الكربون المقواة وجدول زمني فوري للاختبار.",
      "تحليل مفصل لسبب فشل المادة السابقة.",
      "قائمة بجميع الجسور التي بنيت في العقد الماضي.",
      "اعتذار عن التكلفة الإضافية المرتبطة بالمادة الجديدة."
    ],
    answer: "A specific proposal to approve the switch to reinforced carbon-fiber and an immediate timeline for testing.",
    hintEN: "A recommendation must be actionable and clear, not just analysis or apology.",
    hintAR: "يجب أن تكون التوصية قابلة للتنفيذ وواضحة، وليست مجرد تحليل أو اعتذار."
  },
  {
    id: 8,
    question: "During a team meeting, a junior employee notices a potential flaw in a project plan led by the Director. However, they choose to remain silent because they fear being seen as 'not a team player' or disrespectful. Which element of workplace culture is missing in this organization?",
    translation: "سيناريو: أثناء اجتماع الفريق، لاحظ موظف مبتدئ خللاً محتملاً في خطة مشروع يقودها المدير، لكنه اختار الصمت خوفاً من أن يُنظر إليه كشخص 'غير متعاون' أو قليل الاحترام. ما العنصر المفقود في ثقافة العمل؟",
    options: [
      "Hierarchical Structure",
      "Psychological Safety",
      "Professionalism",
      "Competitive Drive"
    ],
    optionsTranslation: [
      "الهيكل الهرمي",
      "الأمان النفسي",
      "الاحترافية",
      "الدافع التنافسي"
    ],
    answer: "Psychological Safety",
    hintEN: "When people are afraid to speak up, psychological safety is absent.",
    hintAR: "عندما يخاف الناس من التحدث، يكون الأمان النفسي غائبًا."
  },
  {
    id: 9,
    question: "A manager gives a task to an employee by saying, 'It would be great if this could be looked at when you have a moment,' implying it is urgent. The employee, taking the words literally, waits three days to start. This misunderstanding is most likely a result of a clash between:",
    translation: "سيناريو: قال مدير 'سيكون من الرائع إلقاء نظرة على هذا عندما يكون لديك وقت'، ملمحاً للأهمية. انتظر الموظف 3 أيام للبدء. هذا سوء الفهم ناتج عن:",
    options: [
      "Diversity and Inclusion",
      "High-context and Low-context communication styles",
      "Employee engagement levels",
      "Workplace ethics"
    ],
    optionsTranslation: [
      "التنوع والشمول",
      "أساليب الاتصال عالية السياق ومنخفضة السياق",
      "مستويات مشاركة الموظفين",
      "أخلاقيات العمل"
    ],
    answer: "High-context and Low-context communication styles",
    hintEN: "High-context cultures rely on implied meaning; low-context on literal words.",
    hintAR: "الثقافات عالية السياق تعتمد على المعنى الضمني؛ والمنخفضة السياق تعتمد على الكلمات الحرفية."
  },
  {
    id: 10,
    question: "In Company X, employees are frequently rewarded for staying past 8:00 PM, and those who leave on time are often excluded from high-profile projects. Over time, burnout rates have tripled. This is an example of which cultural phenomenon?",
    translation: "سيناريو: في الشركة (X)، يتم مكافأة الموظفين الذين يبقون لبعد 8 مساءً، بينما يتم استبعاد من يغادرون في الموعد من المشاريع الكبيرة. بمرور الوقت، تضاعفت معدلات الاحتراق الوظيفي ثلاث مرات. هذا مثال على أي ظاهرة ثقافية؟",
    options: [
      "Meritocracy",
      "Performance-driven culture",
      "Presenteeism",
      "Agile workflow"
    ],
    optionsTranslation: [
      "الجدارة",
      "الثقافة القائمة على الأداء",
      "الظاهرية (Presenteeism)",
      "سير العمل الرشيق"
    ],
    answer: "Presenteeism",
    hintEN: "Presenteeism values face time over actual productivity, leading to burnout.",
    hintAR: "الظاهرية تقدّر التواجد الفعلي على الإنتاجية الفعلية، مما يؤدي إلى الاحتراق."
  },
  {
    id: 11,
    question: "A tech firm has a stated value of 'Customer First.' However, the sales team is pressured to sell expensive software packages that they know the customers don't actually need just to hit quarterly targets. What does this situation represent in terms of organizational culture?",
    translation: "سيناريو: شركة تقنية لديها قيمة 'العميل أولاً'، لكن فريق المبيعات يضغط لبيع باقات برامج باهظة يعرفون أن العملاء لا يحتاجونها فعلاً فقط لتحقيق أهداف الربع السنوي. ماذا يمثل هذا الموقف من حيث الثقافة التنظيمية؟",
    options: [
      "Cultural Alignment",
      "Values Gap (Incongruence)",
      "Strategic Pivot",
      "Market Competitiveness"
    ],
    optionsTranslation: [
      "التوافق الثقافي",
      "فجوة القيم (عدم الاتساق)",
      "التحول الاستراتيجي",
      "القدرة التنافسية في السوق"
    ],
    answer: "Values Gap (Incongruence)",
    hintEN: "A gap between stated values and actual behavior indicates incongruence.",
    hintAR: "الفجوة بين القيم المعلنة والسلوك الفعلي تشير إلى عدم الاتساق."
  },
  {
    id: 12,
    question: "A traditional manufacturing company refuses to adopt new digital inventory tracking systems because 'we have always done it this way,' despite losing market share to faster competitors. This company is demonstrating a/an:",
    translation: "سيناريو: شركة تصنيع تقليدية ترفض اعتماد أنظمة تتبع رقمية لأنهم 'دائمًا ما فعلوا ذلك بهذه الطريقة'، رغم خسارة الحصة السوقية لصالح منافسين أسرع. هذا يظهر ثقافة:",
    options: [
      "Adaptive Culture",
      "Inert (or Resistant) Culture",
      "Innovative Culture",
      "Collaborative Culture"
    ],
    optionsTranslation: [
      "ثقافة تكيفية",
      "ثقافة خاملة (أو مقاومة)",
      "ثقافة مبتكرة",
      "ثقافة تعاونية"
    ],
    answer: "Inert (or Resistant) Culture",
    hintEN: "Resistance to change and sticking to old methods defines an inert culture.",
    hintAR: "مقاومة التغيير والتمسك بالأساليب القديمة تحدد الثقافة الخاملة."
  },
  {
    id: 13,
    question: "You are presenting a highly technical quarterly budget report to a Board of Directors. You notice the audience looks slightly confused after you explain a complex financial deficit. Which action demonstrates the most effective application of presentation language to regain their engagement?",
    translation: "سيناريو: لاحظت أن الجمهور يبدو مرتبكاً بعد شرح عجز مالي معقد. أي إجراء يظهر أفضل استخدام للغة العرض لاستعادة تفاعلهم؟",
    options: [
      "Re-read the technical definition directly from your slide.",
      "Transition by saying, 'To put those numbers into perspective, imagine our budget as a household checking account...'.",
      "Immediately move to the next slide.",
      "Increase your speaking volume and use formal academic jargon."
    ],
    optionsTranslation: [
      "إعادة قراءة التعريف الفني مباشرة من الشريحة.",
      "الانتقال بقول: 'لوضع هذه الأرقام في منظورها الصحيح، تخيل أن ميزانيتنا كحساب جاري منزلي...'.",
      "الانتقال فورًا إلى الشريحة التالية.",
      "رفع صوتك واستخدام المصطلحات الأكاديمية الرسمية."
    ],
    answer: "Transition by saying, 'To put those numbers into perspective, imagine our budget as a household checking account...'.",
    hintEN: "Using analogies connects complex data to everyday understanding.",
    hintAR: "استخدام المقارنات يربط البيانات المعقدة بالفهم اليومي."
  },
  {
    id: 14,
    question: "In presentation development, what is the primary reason for choosing a 'Sans Serif' font over a 'Serif' font for body text on a slide?",
    translation: "في تطوير العروض التقديمية، ما هو السبب الرئيسي لاختيار خط 'Sans Serif' بدلاً من 'Serif' للنصوص؟",
    options: [
      "Serif fonts take up more disk space.",
      "Sans Serif fonts are generally easier to read on digital screens and from a distance.",
      "Serif fonts are impossible for projectors to display.",
      "Sans Serif fonts are always more decorative."
    ],
    optionsTranslation: [
      "خطوط Serif تستهلك مساحة أكبر على القرص.",
      "خطوط Sans Serif أسهل عمومًا للقراءة على الشاشات الرقمية ومن مسافة بعيدة.",
      "من المستحيل عرض خطوط Serif على أجهزة العرض.",
      "خطوط Sans Serif دائمًا أكثر زخرفة."
    ],
    answer: "Sans Serif fonts are generally easier to read on digital screens and from a distance.",
    hintEN: "Clean lines without serifs improve readability in digital formats.",
    hintAR: "الخطوط النظيفة بدون زوائد تحسن القراءة في التنسيقات الرقمية."
  },
  {
    id: 15,
    question: "Which rule of thumb is commonly recommended during the development phase to avoid information overload on a slide?",
    translation: "أي قاعدة عامة يوصى بها غالباً أثناء مرحلة التطوير لتجنب التحميل الزائد للمعلومات في شريحة؟",
    options: [
      "The Rainbow Rule",
      "The Full Script method",
      "The 10-20-30 Rule",
      "The 100-word limit per slide"
    ],
    optionsTranslation: [
      "قاعدة قوس قزح",
      "طريقة النص الكامل",
      "قاعدة 10-20-30",
      "حد الـ 100 كلمة لكل شريحة"
    ],
    answer: "The 10-20-30 Rule",
    hintEN: "Keep slides simple: 10 slides, 20 minutes, 30-point font minimum.",
    hintAR: "اجعل الشرائح بسيطة: 10 شرائح، 20 دقيقة، حجم خط 30 نقطة كحد أدنى."
  },
  {
    id: 16,
    question: "During the presentation development process, what is the purpose of 'Signposting' language?",
    translation: "خلال عملية تطوير العرض التقديمي، ما هو الغرض من لغة 'الإرشاد' (Signposting)؟",
    options: [
      "To highlight every noun with a different color.",
      "To provide a literal map of the building.",
      "To indicate where the speaker is in the structure of the presentation.",
      "To ensure the speaker uses metaphors."
    ],
    optionsTranslation: [
      "تمييز كل اسم بلون مختلف.",
      "تقديم خريطة حرفية للمبنى.",
      "لتوضيح مكان المتحدث في هيكل العرض التقديمي.",
      "لضمان استخدام المتحدث للاستعارات."
    ],
    answer: "To indicate where the speaker is in the structure of the presentation.",
    hintEN: "Signposting helps the audience follow the logical flow (e.g., 'first', 'next', 'finally').",
    hintAR: "يساعد الإرشاد الجمهور على متابعة التدفق المنطقي (مثل 'أولاً'، 'التالي'، 'أخيرًا')."
  },
  {
    id: 17,
    question: "Which font size is generally considered the minimum acceptable size for body text in a standard conference room presentation?",
    translation: "ما هو حجم الخط الذي يُعتبر عموماً الحد الأدنى المقبول لنص الموضوع في عرض تقديمي داخل غرفة مؤتمرات قياسية؟",
    options: [
      "12 points",
      "24 to 30 points",
      "10 points",
      "72 points"
    ],
    optionsTranslation: [
      "12 نقطة",
      "24 إلى 30 نقطة",
      "10 نقاط",
      "72 نقطة"
    ],
    answer: "24 to 30 points",
    hintEN: "Text must be readable from the back of a large room.",
    hintAR: "يجب أن يكون النص قابلاً للقراءة من الجزء الخلفي لغرفة كبيرة."
  },
  {
    id: 18,
    question: "Which color combination provides the highest level of accessibility and legibility for a large audience?",
    translation: "أي مجموعة ألوان توفر أعلى مستوى من سهولة الوصول والوضوح لجمهور كبير؟",
    options: [
      "Dark blue or black text on a light gray or white background",
      "Yellow text on a white background",
      "Light blue text on a dark blue background",
      "Red text on a green background"
    ],
    optionsTranslation: [
      "نص أزرق داكن أو أسود على خلفية رمادية فاتحة أو بيضاء",
      "نص أصفر على خلفية بيضاء",
      "نص أزرق فاتح على خلفية زرقاء داكنة",
      "نص أحمر على خلفية خضراء"
    ],
    answer: "Dark blue or black text on a light gray or white background",
    hintEN: "High contrast between text and background improves readability.",
    hintAR: "التباين العالي بين النص والخلفية يحسن القراءة."
  },
  {
    id: 19,
    question: "When designing a presentation for a large, dimly lit auditorium, what is a common professional recommendation regarding font color?",
    translation: "عند تصميم عرض تقديمي لقاعة كبيرة ذات إضاءة خافتة، ما هي التوصية المهنية الشائعة فيما يتعلق بلون الخط؟",
    options: [
      "Use light-colored text on a dark background.",
      "Use dark gray text on a black background.",
      "Avoid using color completely.",
      "Use neon colors."
    ],
    optionsTranslation: [
      "استخدم نصًا فاتح اللون على خلفية داكنة.",
      "استخدم نصًا رمادي داكن على خلفية سوداء.",
      "تجنب استخدام الألوان تمامًا.",
      "استخدم ألوان النيون."
    ],
    answer: "Use light-colored text on a dark background.",
    hintEN: "Light text on dark background reduces glare in dark rooms.",
    hintAR: "النص الفاتح على خلفية داكنة يقلل من الوهج في الغرف المظلمة."
  },
  {
    id: 20,
    question: "In the context of Visual Hierarchy, how should font color be applied to key terms or specific data points?",
    translation: "في سياق التسلسل الهرمي البصري، كيف يجب تطبيق لون الخط على المصطلحات الرئيسية أو نقاط بيانات محددة؟",
    options: [
      "Use light gray for important points.",
      "Use a single consistent accent color to highlight only the most important information.",
      "Match the font color to the background.",
      "Every word should be a different color."
    ],
    optionsTranslation: [
      "استخدم الرمادي الفاتح للنقاط المهمة.",
      "استخدم لونًا مميزًا واحدًا متسقًا لتسليط الضوء على المعلومات الأكثر أهمية فقط.",
      "طابق لون الخط مع لون الخلفية.",
      "كل كلمة يجب أن تكون بلون مختلف."
    ],
    answer: "Use a single consistent accent color to highlight only the most important information.",
    hintEN: "Too many colors distract; use one accent color sparingly.",
    hintAR: "الألوان الكثيرة تشتت الانتباه؛ استخدم لونًا مميزًا واحدًا باعتدال."
  },
  {
    id: 21,
    question: "During the Conclusion phase of a presentation, which action is most critical for ensuring the audience remembers the core message?",
    translation: "خلال مرحلة الخاتمة للعرض، ما هو الإجراء الأكثر أهمية لضمان تذكر الجمهور للرسالة الأساسية؟",
    options: [
      "Introducing new data.",
      "Restating the main points and providing a clear Call to Action.",
      "Apologizing for technical difficulties.",
      "Providing a detailed bibliography."
    ],
    optionsTranslation: [
      "تقديم بيانات جديدة.",
      "إعادة ذكر النقاط الرئيسية وتقديم دعوة واضحة للعمل.",
      "الاعتذار عن الصعوبات التقنية.",
      "تقديم ببليوغرافيا مفصلة."
    ],
    answer: "Restating the main points and providing a clear Call to Action.",
    hintEN: "Summarize and tell the audience what to do next.",
    hintAR: "لخص وأخبر الجمهور بما يجب فعله بعد ذلك."
  },
  {
    id: 22,
    question: "In the Introduction of a professional presentation, what is the primary purpose of the Hook?",
    translation: "في مقدمة العرض التقديمي المهني، ما هو الغرض الأساسي من الخطاف (Hook)؟",
    options: [
      "To define every technical term.",
      "To provide a long history of the topic.",
      "To capture the audience's attention and establish relevance.",
      "To list the speaker's educational history."
    ],
    optionsTranslation: [
      "لتعريف كل مصطلح تقني.",
      "لتقديم تاريخ طويل للموضوع.",
      "لجذب انتباه الجمهور وإثبات أهمية الموضوع.",
      "لسرد التاريخ التعليمي للمتحدث."
    ],
    answer: "To capture the audience's attention and establish relevance.",
    hintEN: "A hook makes people want to listen to the rest.",
    hintAR: "الخطاف يجعل الناس يرغبون في الاستماع إلى بقية العرض."
  },
  {
    id: 23,
    question: "Which method is widely considered the most effective way to grab an audience's attention during the first 60 seconds of a presentation?",
    translation: "أي طريقة تعتبر على نطاق واسع الأكثر فعالية لجذب انتباه الجمهور خلال أول 60 ثانية من العرض؟",
    options: [
      "Reading academic credentials.",
      "Apologizing for the slide deck.",
      "Starting with a provocative question or compelling story.",
      "Handing out 10-page reports."
    ],
    optionsTranslation: [
      "قراءة المؤهلات الأكاديمية.",
      "الاعتذار عن مجموعة الشرائح.",
      "البدء بسؤال استفزازي أو قصة مقنعة.",
      "توزيع تقارير من 10 صفحات."
    ],
    answer: "Starting with a provocative question or compelling story.",
    hintEN: "Engage emotions or curiosity immediately.",
    hintAR: "أشرك العواطف أو الفضول فورًا."
  },
  {
    id: 24,
    question: "Which chart is most effective for showing the percentage of a railway line's capacity used over a 24-hour period?",
    translation: "أي مخطط هو الأكثر فعالية لإظهار النسبة المئوية لاستخدام سعة خط سكة حديد على مدار 24 ساعة؟",
    options: [
      "Radar Chart",
      "Scatter Plot",
      "Pie Chart",
      "Heat Map"
    ],
    optionsTranslation: [
      "مخطط الرادار",
      "مخطط التشتت",
      "المخطط الدائري",
      "الخريطة الحرارية"
    ],
    answer: "Heat Map",
    hintEN: "Heat maps show intensity over time and space effectively.",
    hintAR: "الخرائط الحرارية تظهر الشدة عبر الزمن والمكان بشكل فعال."
  },
  {
    id: 25,
    question: "In railway terminology, what does the term 'Rolling Stock' refer to?",
    translation: "في مصطلحات السكك الحديدية، إلى ماذا يشير مصطلح 'المعدات المتحركة' (Rolling Stock)؟",
    options: [
      "Inventory of ballast and sleepers",
      "Emergency braking system",
      "Any vehicle that moves on a railway track",
      "Mechanism used for switching tracks"
    ],
    optionsTranslation: [
      "مخزون من الصابورة والعوارض",
      "نظام الفرامل في حالات الطوارئ",
      "أي مركبة تتحرك على مسار سكة حديد",
      "الآلية المستخدمة لتحويل المسارات"
    ],
    answer: "Any vehicle that moves on a railway track",
    hintEN: "Rolling stock includes locomotives, wagons, passenger cars, etc.",
    hintAR: "المعدات المتحركة تشمل القاطرات والعربات وعربات الركاب، إلخ."
  },
  {
    id: 26,
    question: "When presenting a Line Graph to show train punctuality over a month, what should typically be represented on the Y-axis?",
    translation: "عند تقديم رسم بياني خطي لإظهار دقة مواعيد القطارات على مدار شهر، ما الذي يجب تمثيله عادةً على المحور الصادي (Y)؟",
    options: [
      "Total number of staff on duty",
      "Days of the month",
      "Percentage of on-time arrivals",
      "Names of train stations"
    ],
    optionsTranslation: [
      "إجمالي عدد الموظفين المناوبين",
      "أيام الشهر",
      "النسبة المئوية للوصول في الوقت المحدد",
      "أسماء محطات القطار"
    ],
    answer: "Percentage of on-time arrivals",
    hintEN: "Y-axis represents the measured variable (performance metric).",
    hintAR: "المحور الصادي يمثل المتغير المقاس (مقياس الأداء)."
  },
  {
    id: 27,
    question: "The term 'Permanent Way' in the rail industry specifically describes:",
    translation: "مصطلح 'المسار الدائم' (Permanent Way) في صناعة السكك الحديدية يصف بالتحديد:",
    options: [
      "The finished track structure, including rails, sleepers, and ballast",
      "A train route that never changes",
      "The legal right of way",
      "A long-term railway career path"
    ],
    optionsTranslation: [
      "هيكل المسار النهائي، بما في ذلك القضبان والعوارض والصابورة",
      "مسار قطار لا يتغير أبدًا",
      "حق المرور القانوني",
      "مسار وظيفي طويل الأجل في السكك الحديدية"
    ],
    answer: "The finished track structure, including rails, sleepers, and ballast",
    hintEN: "Permanent way is the physical track infrastructure.",
    hintAR: "المسار الدائم هو البنية التحتية المادية للمسار."
  },
  {
    id: 28,
    question: "When creating a chart to compare Freight Tonnage across five regional hubs, which chart provides the clearest comparison?",
    translation: "عند إنشاء مخطط لمقارنة حمولة الشحن عبر خمسة مراكز إقليمية، أي مخطط يوفر أوضح مقارنة؟",
    options: [
      "Scatter Plot",
      "Waterfall Chart",
      "Bar Chart",
      "Area Chart"
    ],
    optionsTranslation: [
      "مخطط التشتت",
      "مخطط الشلال",
      "المخطط العمودي (الأعمدة)",
      "المخطط المساحي"
    ],
    answer: "Bar Chart",
    hintEN: "Bar charts are best for comparing discrete categories side by side.",
    hintAR: "المخططات العمودية هي الأفضل لمقارنة الفئات المنفصلة جنبًا إلى جنب."
  },
  {
    id: 29,
    question: "What is meant by the term 'Headway' in a railway timetable?",
    translation: "ما المقصود بمصطلح 'المسافة الزمنية' (Headway) في جدول مواعيد القطارات؟",
    options: [
      "Time interval between successive trains on the same track",
      "Maximum train speed",
      "Platform length",
      "Distance between rail and train bottom"
    ],
    optionsTranslation: [
      "الفاصل الزمني بين القطارات المتعاقبة على نفس المسار",
      "السرعة القصوى للقطار",
      "طول الرصيف",
      "المسافة بين السكة وأسفل القطار"
    ],
    answer: "Time interval between successive trains on the same track",
    hintEN: "Headway affects line capacity and safety.",
    hintAR: "المسافة الزمنية تؤثر على سعة الخط والسلامة."
  },
  {
    id: 30,
    question: "If a chart has 'Chart Junk,' it means the chart:",
    translation: "إذا كان المخطط يحتوي على 'زخرفة المخطط' (Chart Junk)، فهذا يعني أن المخطط:",
    options: [
      "Contains inaccurate data",
      "Is formatted as a spreadsheet",
      "Is missing labels",
      "Includes unnecessary decorative elements that distract from data"
    ],
    optionsTranslation: [
      "يحتوي على بيانات غير دقيقة",
      "تم تنسيقه كجدول بيانات",
      "تفتقر إلى التسميات",
      "يتضمن عناصر زخرفية غير ضرورية تشتت الانتباه عن البيانات"
    ],
    answer: "Includes unnecessary decorative elements that distract from data",
    hintEN: "Chart junk reduces data clarity and should be avoided.",
    hintAR: "زخرفة المخطط تقلل من وضوح البيانات ويجب تجنبها."
  },
  {
    id: 31,
    question: "In the context of track maintenance, what does 'Tamping' refer to?",
    translation: "في سياق صيانة المسار، إلى ماذا يشير مصطلح 'الدمك' (Tamping)؟",
    options: [
      "Painting rails",
      "Packing ballast under sleepers to level the track",
      "Testing signal strength",
      "Cleaning passenger carriages"
    ],
    optionsTranslation: [
      "طلاء القضبان",
      "رص الصابورة تحت العوارض لتسوية المسار",
      "اختبار قوة الإشارة",
      "تنظيف عربات الركاب"
    ],
    answer: "Packing ballast under sleepers to level the track",
    hintEN: "Tamping restores track geometry and stability.",
    hintAR: "الدمك يعيد هندسة المسار واستقراره."
  },
  {
    id: 32,
    question: "In the SBAR communication framework, what does the 'R' stand for?",
    translation: "في إطار عمل الاتصال SBAR، ماذا ترمز 'R'؟",
    options: [
      "Regulation",
      "Redundancy",
      "Recommendation",
      "Rolling Stock"
    ],
    optionsTranslation: [
      "التنظيم",
      "التكرار",
      "التوصية",
      "المعدات المتحركة"
    ],
    answer: "Recommendation",
    hintEN: "R is the action you propose to solve the problem.",
    hintAR: "R هو الإجراء الذي تقترحه لحل المشكلة."
  },
  // ================= True/False Questions =================
  {
    id: 33,
    question: "A Gantt Chart is primarily used in railway operations to show the relationship between variables like speed and fuel consumption.",
    translation: "يُستخدم مخطط جانت بشكل أساسي في عمليات السكك الحديدية لإظهار العلاقة بين متغيرات مثل السرعة واستهلاك الوقود.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Gantt charts are for project scheduling, not correlating variables.",
    hintAR: "مخططات جانت خاصة بجدولة المشاريع، وليس لربط المتغيرات."
  },
  {
    id: 34,
    question: "In railway jargon, Rolling Stock refers only to locomotives and power units.",
    translation: "في مصطلحات السكك الحديدية، تشير المعدات المتحركة (Rolling Stock) فقط إلى القاطرات ووحدات الطاقة.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Rolling stock includes all vehicles that move on rails, including wagons and passenger cars.",
    hintAR: "تشمل المعدات المتحركة جميع المركبات التي تتحرك على القضبان، بما فيها العربات وعربات الركاب."
  },
  {
    id: 35,
    question: "The 'S' in the SBAR communication framework stands for 'Summary'.",
    translation: "حرف 'S' في إطار عمل التواصل SBAR يرمز إلى 'ملخص' (Summary).",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "SBAR stands for Situation, Background, Assessment, Recommendation.",
    hintAR: "اختصار SBAR يعني: الموقف، الخلفية، التقييم، التوصية."
  },
  {
    id: 36,
    question: "A Line Graph is the most suitable chart type for showing the distribution of categorical signal failure causes.",
    translation: "الرسم البياني الخطي هو النوع الأنسب لإظهار توزيع أسباب فشل الإشارات الفئوية.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Bar charts or pie charts are better for categorical distribution; line graphs show trends over time.",
    hintAR: "المخططات العمودية أو الدائرية أفضل للتوزيعات الفئوية؛ بينما تُظهر الخطية الاتجاهات بمرور الوقت."
  },
  {
    id: 37,
    question: "In track engineering, the Permanent Way refers to the legal right-of-way boundaries of the railway.",
    translation: "في هندسة المسار، يشير مصطلح 'المسار الدائم' (Permanent Way) إلى حدود حق المرور القانونية للسكة الحديد.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Permanent Way is the physical track structure (rails, sleepers, ballast), not legal boundaries.",
    hintAR: "المسار الدائم هو الهيكل المادي للمسار (قضبان، عوارض، صابورة)، وليس الحدود القانونية."
  },
  {
    id: 38,
    question: "When presenting data, Chart Junk refers to necessary gridlines that help the audience read precise values.",
    translation: "عند تقديم البيانات، تشير 'زخرفة المخطط' (Chart Junk) إلى خطوط الشبكة الضرورية التي تساعد الجمهور على قراءة القيم الدقيقة.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Chart junk is unnecessary decoration that distracts from data, not helpful gridlines.",
    hintAR: "زخرفة المخطط هي زخارف غير ضرورية تشتت الانتباه عن البيانات، وليست خطوط الشبكة المفيدة."
  },
  {
    id: 39,
    question: "A Deadman's Switch is a safety device that requires constant engagement from the driver to prevent emergency braking.",
    translation: "مفتاح الرجل الميت (Deadman's Switch) هو جهاز أمان يتطلب تعشيقاً مستمراً من السائق لمنع الفرملة الطارئة.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "If the driver releases the switch, emergency braking activates automatically.",
    hintAR: "إذا حرر السائق المفتاح، يتم تفعيل الفرملة الطارئة تلقائيًا."
  },
  {
    id: 40,
    question: "Headway describes the height clearance between the top of a train and a tunnel ceiling.",
    translation: "يصف مصطلح 'المسافة الزمنية' (Headway) الخلوص الرأسي بين أعلى القطار وسقف النفق.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Headway is the time interval between successive trains on the same track.",
    hintAR: "المسافة الزمنية هي الفاصل الزمني بين القطارات المتعاقبة على نفس المسار."
  },
  {
    id: 41,
    question: "Using technical jargon is always recommended when presenting to a general public audience to demonstrate expertise.",
    translation: "يُوصى دائمًا باستخدام المصطلحات التقنية عند التقديم لجمهور عام لإظهار الخبرة.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Jargon confuses non-experts; plain language and analogies are better.",
    hintAR: "المصطلحات التقنية تربك غير المتخصصين؛ فالأفضل استخدام لغة بسيطة وتشبيهات."
  },
  {
    id: 42,
    question: "Ballast is the stone bed upon which railway sleepers are laid to provide drainage and stability.",
    translation: "الصابورة (Ballast) هي الطبقة الحجرية التي توضع عليها عوارض السكك الحديدية لتوفير الصرف والثبات.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "Ballast supports sleepers, allows drainage, and keeps track stable.",
    hintAR: "الصابورة تدعم العوارض، وتسمح بتصريف المياه، وتحافظ على ثبات المسار."
  },
  {
    id: 43,
    question: "The term 'Cant' in railway engineering refers to the slope or gradient of a hill.",
    translation: "مصطلح 'كانت' (Cant) في هندسة السكك الحديدية يشير إلى انحدار أو ميل التل.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Cant is the superelevation (banking) of a rail track on a curve, not hill slope.",
    hintAR: "الكانت هو ارتفاع إحدى القضبان عن الأخرى في المنحنيات لتعويض القوة الطاردة، وليس ميل التل."
  },
  {
    id: 44,
    question: "In professional communication, an Assessment in SBAR should include the data and facts gathered about the situation.",
    translation: "في التواصل المهني، يجب أن يتضمن 'التقييم' (Assessment) في SBAR البيانات والحقائق التي تم جمعها عن الموقف.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "Assessment analyzes the situation using facts and data to inform the recommendation.",
    hintAR: "التقييم يحلل الموقف باستخدام الحقائق والبيانات لتوجيه التوصية."
  },
  {
    id: 45,
    question: "A Pie Chart is the best tool for showing how a train's speed changes throughout its journey.",
    translation: "المخطط الدائري هو أفضل أداة لإظهار كيفية تغير سرعة القطار طوال رحلته.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Line graphs show changes over time; pie charts show parts of a whole.",
    hintAR: "الرسوم البيانية الخطية تظهر التغيرات بمرور الوقت؛ بينما الدائرية تظهر أجزاء من الكل."
  },
  {
    id: 46,
    question: "Tamping is a maintenance process that involves cleaning the driver's cab windows.",
    translation: "الدمك (Tamping) هو عملية صيانة تتضمن تنظيف نوافذ كابينة السائق.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Tamping compacts ballast under sleepers to level the track.",
    hintAR: "الدمك هو ضغط الصابورة تحت العوارض لتسوية المسار."
  },
  {
    id: 47,
    question: "In presentation design, the rule of thirds suggests that a slide should be divided into three equal sections of text.",
    translation: "في تصميم العروض التقديمية، تشير قاعدة الأثلاث إلى أنه يجب تقسيم الشريحة إلى ثلاثة أقسام نصية متساوية.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Rule of thirds is for visual composition (photography), not text division.",
    hintAR: "قاعدة الأثلاث خاصة بالتكوين البصري (التصوير الفوتوغرافي)، وليست لتقسيم النص."
  },
  {
    id: 48,
    question: "The term Gauge refers to the distance between the inner faces of the two rails.",
    translation: "يشير مصطلح 'القياس' (Gauge) إلى المسافة بين الوجهين الداخليين للقضيبين.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "Standard gauge is 1435 mm between rail inner edges.",
    hintAR: "القياس القياسي هو 1435 مم بين الحافتين الداخليتين للسكة."
  },
  {
    id: 49,
    question: "A Scatter Plot helps identify if there is a correlation between maintenance frequency and equipment failure.",
    translation: "يساعد مخطط التشتت (Scatter Plot) في تحديد ما إذا كان هناك ارتباط بين تكرار الصيانة وفشل المعدات.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "Scatter plots reveal correlations and trends between two variables.",
    hintAR: "مخططات التشتت تكشف عن الارتباطات والاتجاهات بين متغيرين."
  },
  {
    id: 50,
    question: "A Bogie is the undercarriage assembly that includes the wheels and axles.",
    translation: "البوجي (Bogie) هو مجموعة الهيكل السفلي التي تشمل العجلات والمحاور.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "Bogies are wheeled structures that support the train body and allow curves.",
    hintAR: "البوجي هو هيكل بعجلات يدعم جسم القطار ويسمح بالانعطاف."
  },
  {
    id: 51,
    question: "Professional communication requires putting as much data as possible on a single slide.",
    translation: "يتطلب التواصل المهني وضع أكبر قدر ممكن من البيانات في شريحة واحدة.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "False",
    hintEN: "Too much data overwhelms; use simple, focused slides.",
    hintAR: "كثرة البيانات تربك الجمهور؛ استخدم شرائح بسيطة ومركزة."
  },
  {
    id: 52,
    question: "In railway operations, Points (or switches) are the mechanical installations that allow trains to move from one track to another.",
    translation: "في عمليات السكك الحديدية، المفاتيح (Points/Switches) هي التركيبات الميكانيكية التي تسمح للقطارات بالانتقال من مسار إلى آخر.",
    options: ["True", "False"],
    optionsTranslation: ["صحيح", "خطأ"],
    answer: "True",
    hintEN: "Points/switches guide trains between diverging tracks.",
    hintAR: "المفاتيح توجه القطارات بين المسارات المتشعبة."
  }
];

let idx = 0;
let score = 0;
let userAns = new Array(quizData.length).fill(null);
let mistakes = 0;
let lastTime = Date.now();

const beboMessages = {
    intro: [ , "مرحبا اسمي بيبو جاهز لبدا الاختبار ؟.", "نجم النجوم حمدلله على السلامه يعم ."],
    correct: ["يسلام عليك ايوا كده استمر عاش.", "ايوا كده عاوزك تقفل الورقه فى الامتحان.", "هايل يباشا الله عليك عاش.", "يسلام عيك عليك انت كده تلعب على الامتياز يانجم .", "شكلك مذاكر المنهج مرتين  .","لسانى يعجز عن الكلام والله بس حقيقى برافو .","الدكتوره مبسوطه منك هايل والله .","شخصين بحبهم انت والمصمم عاش عليك بجد يسطا ."],
    aggressive: ["تقريبا الفص الى فى مخك المسؤل عن اتخاذ القرارات فص ثوم.", "تعرف لو جابو ليا كنوز الدنيا علشان ابيعك هبيعك اى الى انت بتعملو ده.", "انت بتنام يسطا.", "ادائك مش عاجبنى اقرا السؤال كويس.", "شوف التلميحات.","حسب خبرتى كده انت تلعب بالعجله درجن درجن الامتياز ده مش سكتك صدقنى.","كده مينفعش انصحك تراجع المحاضرات تانى.","ركز عندك احسن من كده.","ركز  .","اهدى بس كده وركز ."],
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره.",
        "منت لو تبص على التلميحات وانت بتحل مكنتش جبت درجات الحراره دى.",
        "تعي اشب شاى يسطا بالى انت عامله ده.",
        "متزعلش مش مهم درجتك فى الامتحان المهم الصحه والستر.",
        "هيجى شخص يحسسك انك ف كفه والكون كله فى كفه وبعدين يسقفلك بالكفتين على وشك علشان النتيجه الى انت جايبها دى."
    ],
    resultsSuccess: [
        "مشاء الله عليك ",
        "هايل بجد عاش عليك.",
        "شيئ جميل جدا عندك احسن منكده كمان  عاش عليك  ."
    ]
};

function setBebo(state, category) {
    const robot = document.getElementById('bebo-robot');
    const bubble = document.getElementById('bebo-bubble');
    const msgs = beboMessages[category];
    
    robot.className = `bebo-robot ${state}`;
    
    if (msgs && msgs.length > 0) {
        bubble.innerText = msgs[Math.floor(Math.random() * msgs.length)];
        bubble.classList.add('active');
    } else {
        bubble.classList.remove('active');
    }

    setTimeout(() => { 
        bubble.classList.remove('active');
        if(idx < quizData.length) robot.classList.remove('success', 'error');
    }, 4500);
}

function triggerBeboFlash() {
    const robot = document.getElementById('bebo-robot');
    robot.classList.add('flash-active');
    setTimeout(() => robot.classList.remove('flash-active'), 500);
}

function toggleHint() {
    document.getElementById('hint-text').classList.toggle('hidden');
    document.querySelector('.bulb-icon').classList.toggle('bulb-active');
}

function render() {
    const q = quizData[idx];
    document.getElementById('question-number').innerText = `ASSESSMENT POINT ${idx + 1} OF ${quizData.length}`;
    document.getElementById('question-text').innerText = q.question || q.q;
    document.getElementById('question-translation').innerText = q.translation || '';
    document.getElementById('hint-text').innerText = q.hintEN || q.hint;
    document.getElementById('hint-text').classList.add('hidden');
    document.querySelector('.bulb-icon').classList.remove('bulb-active');
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const answered = userAns[idx] !== null;
    document.getElementById('next-btn').disabled = !answered;
    document.getElementById('prev-btn').style.opacity = (idx === 0) ? "0.3" : "1";

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn rounded-sm flex items-center gap-3 md:gap-4 w-full';
        btn.innerHTML = `<span class="bg-white/5 w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center font-bold text-[10px] md:text-xs text-slate-400">${String.fromCharCode(65 + i)}</span> <span>${opt}</span>`;
        
        if (answered) {
            btn.classList.add('locked');
            const correctIndex = q.options.findIndex(option => option === q.answer);
            if (i === correctIndex) btn.classList.add('correct');
            if (userAns[idx] === i && i !== correctIndex) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(i);
        }
        container.appendChild(btn);
    });
    
    document.getElementById('progress-fill').style.width = `${((idx + 1) / quizData.length) * 100}%`;
    lastTime = Date.now();
}

function select(choice) {
    if (userAns[idx] !== null) return;
    userAns[idx] = choice;
    const correct = (quizData[idx].options[choice] === quizData[idx].answer);
    
    if (correct) {
        score++;
        mistakes = 0;
        setBebo('success', 'correct');
    } else {
        mistakes++;
        setBebo('error', 'aggressive'); 
    }
    document.getElementById('score-pill').innerText = `SCORE: ${score}`;
    render();
}

function nextQuestion() { 
    if (idx < quizData.length - 1) { 
        idx++; 
        render(); 
    } else finish(); 
}

function prevQuestion() { 
    if (idx > 0) { 
        idx--; 
        render(); 
    } 
}

function finish() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    const pct = Math.round((score / quizData.length) * 100);
    document.getElementById('final-score').innerText = pct + '%';
    
    const category = pct >= 80 ? 'resultsSuccess' : 'resultsAdvice';
    const msgs = beboMessages[category];
    const finalMsg = msgs[Math.floor(Math.random() * msgs.length)];
    document.getElementById('result-message').innerText = finalMsg;
}

function restartQuiz() {
    idx = 0; score = 0; mistakes = 0;
    userAns = new Array(quizData.length).fill(null);
    document.querySelector('.bebo-wrapper').classList.remove('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-view').classList.add('hidden');
    document.getElementById('score-pill').innerText = "SCORE: 0";
    render();
    setBebo('ready', 'intro');
}

window.onload = () => {
    render();
    setTimeout(() => setBebo('ready', 'intro'), 500);
};
