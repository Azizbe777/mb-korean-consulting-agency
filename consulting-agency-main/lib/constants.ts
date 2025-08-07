// Centralized data management for better maintainability
export const UNIVERSITIES_DATA = [
  {
    id: 1,
    name: 'Seoul National University (SNU)',
    nameUz: 'Seul Milliy Universiteti',
    ranking: 'Koreyada #1',
    location: 'Seul',
    established: '1946',
    students: '28,000+',
    programs: ['Muhandislik', 'Tibbiyot', 'Biznes', 'Liberal san\'atlar', 'Tabiiy fanlar'],
    tuition: '$4,000 - $8,000/yil',
    requirements: {
      undergraduate: 'TOPIK 4+, O\'rta maktab diplomi, GPA 3.5+',
      graduate: 'TOPIK 5+, Bakalavr diplomi, GPA 3.7+, Tadqiqot taklifi'
    },
    grants: ['Koreya Hukumat Stipendiyasi', 'SNU Global Stipendiya', 'Merit asosidagi yordam'],
    admissions: {
      spring: 'Sentyabr - Noyabr',
      fall: 'Mart - May'
    },
    description: 'Koreyaning eng nufuzli universiteti, milliy miqyosda doimiy ravishda 1-o\'rinni egallaydi va dunyo bo\'yicha eng yaxshi 50 ta universitet qatorida.'
  },
  {
    id: 2,
    name: 'KAIST',
    nameUz: 'KAIST',
    ranking: 'Koreyada #2',
    location: 'Daejeon',
    established: '1971',
    students: '10,000+',
    programs: ['Muhandislik', 'Kompyuter fanlari', 'Tabiiy fanlar', 'Biznes'],
    tuition: '$6,000 - $10,000/yil',
    requirements: {
      undergraduate: 'TOPIK 4+ yoki IELTS 6.5+, Kuchli matematika/fan asoslari',
      graduate: 'TOPIK 5+ yoki IELTS 7.0+, Tegishli sohada bakalavr, Tadqiqot tajribasi'
    },
    grants: ['KAIST Stipendiya', 'Hukumat Stipendiyasi', 'Tadqiqot Assistentligi'],
    admissions: {
      spring: 'Avgust - Oktyabr',
      fall: 'Fevral - Aprel'
    },
    description: 'Innovatsiya va tadqiqot mukammalligi bilan mashhur bo\'lgan yetakchi fan va texnologiya universiteti.'
  },
  {
    id: 3,
    name: 'Yonsei University',
    nameUz: 'Yonsei Universiteti',
    ranking: 'Koreyada #3',
    location: 'Seul',
    established: '1885',
    students: '38,000+',
    programs: ['Tibbiyot', 'Biznes', 'Muhandislik', 'Liberal san\'atlar', 'Xalqaro tadqiqotlar'],
    tuition: '$8,000 - $12,000/yil',
    requirements: {
      undergraduate: 'TOPIK 4+, O\'rta maktab diplomi, SAT/ACT (xalqaro dasturlar uchun)',
      graduate: 'TOPIK 5+ yoki IELTS 6.5+, Bakalavr diplomi, Maqsad bayoni'
    },
    grants: ['Yonsei Stipendiya', 'Underwood Stipendiya', 'Koreya Hukumat Stipendiyasi'],
    admissions: {
      spring: 'Sentyabr - Noyabr',
      fall: 'Mart - May'
    },
    description: 'Koreyaning eng qadimiy va nufuzli xususiy universitetlaridan biri bo\'lib, kuchli xalqaro dasturlarga ega.'
  },
  {
    id: 4,
    name: 'Korea University',
    nameUz: 'Koreya Universiteti',
    ranking: 'Koreyada #4',
    location: 'Seul',
    established: '1905',
    students: '37,000+',
    programs: ['Huquq', 'Biznes', 'Muhandislik', 'Liberal san\'atlar', 'Tibbiyot'],
    tuition: '$7,000 - $11,000/yil',
    requirements: {
      undergraduate: 'TOPIK 4+, O\'rta maktab diplomi, Shaxsiy bayonot',
      graduate: 'TOPIK 5+ yoki IELTS 6.5+, Bakalavr diplomi, Tavsiya xatlari'
    },
    grants: ['Koreya Universiteti Stipendiyasi', 'Global KU Stipendiya', 'Ehtiyojga asoslangan yordam'],
    admissions: {
      spring: 'Sentyabr - Noyabr',
      fall: 'Mart - May'
    },
    description: 'Kuchli bitiruvchilar tarmog\'i va ajoyib biznes dasturlari bilan mashhur tarixiy universitet.'
  },
  {
    id: 5,
    name: 'Hanyang University',
    nameUz: 'Hanyang Universiteti',
    ranking: 'Koreyada #5',
    location: 'Seul/Ansan',
    established: '1939',
    students: '35,000+',
    programs: ['Muhandislik', 'Me\'morchilik', 'Biznes', 'Tibbiyot', 'San\'at va Dizayn'],
    tuition: '$6,000 - $9,000/yil',
    requirements: {
      undergraduate: 'TOPIK 3+, O\'rta maktab diplomi, Portfolio (San\'at uchun)',
      graduate: 'TOPIK 4+ yoki IELTS 6.0+, Bakalavr diplomi, Tadqiqot taklifi'
    },
    grants: ['Hanyang Stipendiya', 'Xalqaro Talaba Stipendiyasi', 'Merit Stipendiya'],
    admissions: {
      spring: 'Avgust - Oktyabr',
      fall: 'Fevral - Aprel'
    },
    description: 'Kuchli sanoat aloqalari bilan yetakchi muhandislik va texnologiya universiteti.'
  },
  {
    id: 6,
    name: 'Pohang University of Science and Technology (POSTECH)',
    nameUz: 'Pohang Fan va Texnologiya Universiteti',
    ranking: 'Koreyada #6',
    location: 'Pohang',
    established: '1986',
    students: '3,000+',
    programs: ['Muhandislik', 'Tabiiy fanlar', 'Hayot fanlari'],
    tuition: '$8,000 - $12,000/yil',
    requirements: {
      undergraduate: 'TOPIK 4+ yoki IELTS 7.0+, Ajoyib akademik rekord',
      graduate: 'TOPIK 5+ yoki IELTS 7.5+, STEM sohada bakalavr, Tadqiqot tajribasi'
    },
    grants: ['POSTECH Stipendiya', 'To\'liq o\'quv haqi zudlik', 'Tadqiqot Assistentligi'],
    admissions: {
      spring: 'Avgust - Sentyabr',
      fall: 'Fevral - Mart'
    },
    description: 'Kichik sinf o\'lchamlari va yuqori tadqiqot natijalari bilan elita fan va texnologiya universiteti.'
  }
] as const

export const SCHOLARSHIP_DATA = [
  {
    name: 'Koreya Hukumat Stipendiyasi (GKS)',
    type: 'To\'liq Stipendiya',
    coverage: 'O\'quv haqi + Yashash uchun nafaqa + Aviachiptalar',
    amount: '$1,000-1,500/oy',
    eligibility: 'Bakalavr va Magistratura talabalari',
    color: 'blue',
    details: [
      'To\'liq o\'quv haqi qoplami',
      'Oylik yashash nafaqasi',
      'Ikki tomonlama aviachiptalar',
      'Koreys tili o\'qitish',
      'Tibbiy sug\'urta'
    ]
  },
  {
    name: 'Universitet Merit Stipendiyalari',
    type: 'Qisman/To\'liq Stipendiya',
    coverage: '30-100% O\'quv haqi chegirmasi',
    amount: '$3,000-8,000/yil',
    eligibility: 'Yuqori akademik natijaga ega talabalar',
    color: 'green',
    details: [
      'Merit asosida tanlov',
      'Har yili yangilanadi',
      'GPA talablari qo\'llaniladi',
      'Barcha mutaxassisliklar uchun mavjud',
      'Qo\'shimcha imtiyozlar bo\'lishi mumkin'
    ]
  },
  {
    name: 'Tadqiqot Assistentligi',
    type: 'Ish-O\'qish Dasturi',
    coverage: 'O\'quv haqi + Stipendiya',
    amount: '$800-1,200/oy',
    eligibility: 'Magistratura talabalari',
    color: 'purple',
    details: [
      'Tadqiqot ishi talab qilinadi',
      'Professor homiyligiga ehtiyoj',
      'Qimmatli tadqiqot tajribasi',
      'Tarmoq imkoniyatlari',
      'Ko\'nikmalarni rivojlantirish'
    ]
  },
  {
    name: 'Xalqaro Talabalar Yordami',
    type: 'Ehtiyojga Asoslangan Yordam',
    coverage: 'Qisman O\'quv Haqi Yordami',
    amount: '$2,000-5,000/yil',
    eligibility: 'Xalqaro talabalar',
    color: 'orange',
    details: [
      'Moliyaviy ehtiyoj baholash',
      'Ariza talab qilinadi',
      'Cheklangan mavjudlik',
      'Yaxshi holatda yangilanadi',
      'Qo\'shimcha yordam xizmatlari'
    ]
  }
] as const

export const ADMISSION_PERIODS = [
  {
    semester: 'Bahor Semestri',
    period: 'Avgust - Noyabr',
    startDate: 'Mart',
    color: 'blue'
  },
  {
    semester: 'Kuz Semestri',
    period: 'Fevral - May',
    startDate: 'Sentyabr',
    color: 'green'
  }
] as const

export const APPLICATION_STEPS = [
  {
    step: '1',
    title: 'Hujjatlarni Tayyorlash',
    description: 'Transkriptlar, til sertifikatlari va shaxsiy bayonotlar kabi barcha kerakli hujjatlarni tayyorlang.'
  },
  {
    step: '2',
    title: 'Onlayn Ariza',
    description: 'Barcha qo\'llab-quvvatlovchi hujjatlar bilan universitetning onlayn portali orqali arizangizni yuboring.'
  },
  {
    step: '3',
    title: 'Suhbat Jarayoni',
    description: 'Suhbatlarda (onlayn yoki shaxsan) ishtirok eting va qo\'shimcha talablarni bajaring.'
  },
  {
    step: '4',
    title: 'Qabul Qarori',
    description: 'Qabul qarorini oling va viza arizasi va ro\'yxatdan o\'tish tartib-qoidalari bilan davom eting.'
  }
] as const

export const GRANT_REQUIREMENTS = [
  {
    title: 'Akademik Mukammallik',
    description: 'Stipendiya turiga qarab minimal 3.0-3.5 GPA',
    icon: '🎓'
  },
  {
    title: 'Til Malakasi',
    description: 'Ko\'pchilik stipendiyalar uchun TOPIK 3+ yoki IELTS 6.0+',
    icon: '🗣️'
  },
  {
    title: 'Moliyaviy Hujjatlar',
    description: 'Bank ko\'rsatkichlari va moliyaviy ehtiyoj baholash',
    icon: '💰'
  },
  {
    title: 'Shaxsiy Bayonot',
    description: 'Koreyada o\'qish maqsadlari va motivatsiyasini tushuntiruvchi insho',
    icon: '📝'
  }
] as const
