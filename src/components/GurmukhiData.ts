export interface StrokePoint {
  x: number;
  y: number;
}

export interface GurmukhiLetter {
  char: string;
  name: string;
  translit: string;
  sound: string;
  exampleWord: string;
  exampleGurmukhi: string;
  exampleTranslit: string;
  exampleMeaning: string;
  strokes: StrokePoint[][]; // relative coordinates 0-100 for tracing
}

export interface GurmukhiNumber {
  value: number;
  char: string; // "੧"
  word: string; // "ਇੱਕ"
  translit: string; // "Ik"
  meaning: string;
}

export interface Region {
  id: string;
  name: string;
  subtitle: string;
  flag: string;
  color: string;
  focus: string[];
  rewards: {
    trophy: { name: string; icon: string; desc: string };
    pendant: { name: string; icon: string; desc: string; rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' };
  };
  unlockedAtXp: number;
  xCoord: number; // For map representation
  yCoord: number; // For map representation
  lessonsCount: number;
}

// Gurmukhi alphabet data (35 letters)
export const GURMUKHI_ALPHABET: GurmukhiLetter[] = [
  // Row 1
  {
    char: "ੳ",
    name: "Ura",
    translit: "U",
    sound: "oo",
    exampleWord: "camel",
    exampleGurmukhi: "ਉੱਠ",
    exampleTranslit: "Uth",
    exampleMeaning: "Camel",
    strokes: [
      [{ x: 20, y: 30 }, { x: 50, y: 20 }, { x: 80, y: 30 }, { x: 60, y: 55 }, { x: 20, y: 55 }],
      [{ x: 50, y: 55 }, { x: 80, y: 65 }, { x: 50, y: 85 }, { x: 20, y: 70 }]
    ]
  },
  {
    char: "ਅ",
    name: "Ara",
    translit: "A",
    sound: "uh",
    exampleWord: "mango",
    exampleGurmukhi: "ਅੰਬ",
    exampleTranslit: "Amb",
    exampleMeaning: "Mango",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 50 }, { x: 60, y: 50 }, { x: 60, y: 80 }],
      [{ x: 50, y: 50 }, { x: 80, y: 50 }, { x: 80, y: 80 }]
    ]
  },
  {
    char: "ੲ",
    name: "Iri",
    translit: "I",
    sound: "ee",
    exampleWord: "brick",
    exampleGurmukhi: "ਇੱਟ",
    exampleTranslit: "Itt",
    exampleMeaning: "Brick",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 40, y: 25 }, { x: 25, y: 50 }, { x: 65, y: 50 }, { x: 75, y: 75 }, { x: 45, y: 75 }]
    ]
  },
  {
    char: "ਸ",
    name: "Sassa",
    translit: "S",
    sound: "s",
    exampleWord: "apple",
    exampleGurmukhi: "ਸੇਬ",
    exampleTranslit: "Seb",
    exampleMeaning: "Apple",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 40, y: 25 }, { x: 40, y: 75 }],
      [{ x: 40, y: 50 }, { x: 70, y: 50 }],
      [{ x: 70, y: 25 }, { x: 70, y: 75 }]
    ]
  },
  {
    char: "ਹ",
    name: "Haha",
    translit: "H",
    sound: "h",
    exampleWord: "elephant",
    exampleGurmukhi: "ਹਾਥੀ",
    exampleTranslit: "Hathi",
    exampleMeaning: "Elephant",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 65 }, { x: 35, y: 75 }, { x: 55, y: 75 }]
    ]
  },
  // Row 2
  {
    char: "ਕ",
    name: "Kakka",
    translit: "K",
    sound: "k",
    exampleWord: "pigeon",
    exampleGurmukhi: "ਕਬੂਤਰ",
    exampleTranslit: "Kabutar",
    exampleMeaning: "Pigeon",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 30, y: 50 }, { x: 50, y: 75 }, { x: 70, y: 50 }, { x: 50, y: 25 }]
    ]
  },
  {
    char: "ਖ",
    name: "Khakha",
    translit: "Kh",
    sound: "kh",
    exampleWord: "toy",
    exampleGurmukhi: "ਖਿਡੌਣਾ",
    exampleTranslit: "Khidauna",
    exampleMeaning: "Toy",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 65 }, { x: 45, y: 65 }, { x: 45, y: 25 }],
      [{ x: 65, y: 25 }, { x: 65, y: 75 }]
    ]
  },
  {
    char: "ਗ",
    name: "Gagga",
    translit: "G",
    sound: "g",
    exampleWord: "cow",
    exampleGurmukhi: "ਗਾਂ",
    exampleTranslit: "Gaan",
    exampleMeaning: "Cow",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 35, y: 25 }, { x: 35, y: 65 }, { x: 20, y: 65 }],
      [{ x: 65, y: 25 }, { x: 65, y: 75 }]
    ]
  },
  {
    char: "ਘ",
    name: "Ghaggha",
    translit: "Gh",
    sound: "gh",
    exampleWord: "house",
    exampleGurmukhi: "ਘਰ",
    exampleTranslit: "Ghar",
    exampleMeaning: "House",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 60 }, { x: 50, y: 60 }, { x: 50, y: 25 }],
      [{ x: 70, y: 25 }, { x: 70, y: 75 }]
    ]
  },
  {
    char: "ਙ",
    name: "Nganga",
    translit: "Ng",
    sound: "ng",
    exampleWord: "nasal sound",
    exampleGurmukhi: "ਙਣ",
    exampleTranslit: "Ngang",
    exampleMeaning: "Nasal sound",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 35, y: 50 }, { x: 65, y: 55 }, { x: 50, y: 75 }]
    ]
  },
  // Row 3
  {
    char: "ਚ",
    name: "Chacha",
    translit: "Ch",
    sound: "ch",
    exampleWord: "spoon",
    exampleGurmukhi: "ਚਮਚਾ",
    exampleTranslit: "Chamcha",
    exampleMeaning: "Spoon",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 30, y: 55 }, { x: 60, y: 55 }, { x: 70, y: 75 }]
    ]
  },
  {
    char: "ਛ",
    name: "Chhachha",
    translit: "Chh",
    sound: "chh",
    exampleWord: "umbrella",
    exampleGurmukhi: "ਛਤਰੀ",
    exampleTranslit: "Chhatri",
    exampleMeaning: "Umbrella",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 30, y: 45 }, { x: 70, y: 45 }, { x: 50, y: 75 }, { x: 50, y: 45 }]
    ]
  },
  {
    char: "ਜ",
    name: "Jajja",
    translit: "J",
    sound: "j",
    exampleWord: "water",
    exampleGurmukhi: "ਜਲ",
    exampleTranslit: "Jal",
    exampleMeaning: "Water",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 45, y: 25 }, { x: 45, y: 55 }, { x: 75, y: 55 }],
      [{ x: 45, y: 55 }, { x: 30, y: 75 }]
    ]
  },
  {
    char: "ਝ",
    name: "Jhajha",
    translit: "Jh",
    sound: "jh",
    exampleWord: "waterfall",
    exampleGurmukhi: "ਝਰਨਾ",
    exampleTranslit: "Jharna",
    exampleMeaning: "Waterfall",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 35, y: 25 }, { x: 20, y: 50 }, { x: 50, y: 50 }, { x: 35, y: 75 }],
      [{ x: 65, y: 25 }, { x: 65, y: 75 }]
    ]
  },
  {
    char: "ਞ",
    name: "Njanja",
    translit: "Nj",
    sound: "ny",
    exampleWord: "singing sound",
    exampleGurmukhi: "ਞੰਨ",
    exampleTranslit: "Njann",
    exampleMeaning: "Singing sound",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 75 }],
      [{ x: 30, y: 50 }, { x: 70, y: 50 }]
    ]
  },
  // Row 4
  {
    char: "ਟ",
    name: "Tanka",
    translit: "T",
    sound: "t (hard)",
    exampleWord: "tomato",
    exampleGurmukhi: "ਟਮਾਟਰ",
    exampleTranslit: "Tamatar",
    exampleMeaning: "Tomato",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 50 }, { x: 30, y: 65 }, { x: 70, y: 65 }]
    ]
  },
  {
    char: "ਠ",
    name: "Thatha",
    translit: "Th",
    sound: "th (hard)",
    exampleWord: "teapot",
    exampleGurmukhi: "ਠੇਲਾ",
    exampleTranslit: "Thela",
    exampleMeaning: "Cart",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 50 }, { x: 30, y: 65 }, { x: 50, y: 80 }, { x: 70, y: 65 }, { x: 50, y: 50 }]
    ]
  },
  {
    char: "ਡ",
    name: "Dadda",
    translit: "D",
    sound: "d (hard)",
    exampleWord: "drum",
    exampleGurmukhi: "ਡੱਬਾ",
    exampleTranslit: "Dabba",
    exampleMeaning: "Box",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 35, y: 50 }, { x: 65, y: 50 }, { x: 50, y: 75 }]
    ]
  },
  {
    char: "ਢ",
    name: "Dhaddha",
    translit: "Dh",
    sound: "dh (hard)",
    exampleWord: "drum-beat",
    exampleGurmukhi: "ਢੋਲ",
    exampleTranslit: "Dhol",
    exampleMeaning: "Traditional Drum",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 45, y: 25 }, { x: 45, y: 55 }, { x: 75, y: 55 }, { x: 60, y: 75 }, { x: 45, y: 55 }]
    ]
  },
  {
    char: "ਣ",
    name: "Nana",
    translit: "N",
    sound: "rn",
    exampleWord: "curry",
    exampleGurmukhi: "ਕਣਕ",
    exampleTranslit: "Kanak",
    exampleMeaning: "Wheat",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 65 }, { x: 50, y: 65 }, { x: 50, y: 25 }],
      [{ x: 70, y: 25 }, { x: 70, y: 75 }]
    ]
  },
  // Row 5
  {
    char: "ਤ",
    name: "Tatta",
    translit: "T",
    sound: "t (soft)",
    exampleWord: "butterfly",
    exampleGurmukhi: "ਤਿਤਲੀ",
    exampleTranslit: "Titli",
    exampleMeaning: "Butterfly",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 35, y: 50 }, { x: 50, y: 75 }]
    ]
  },
  {
    char: "ਥ",
    name: "Thatha (dental)",
    translit: "Th",
    sound: "th (soft)",
    exampleWord: "plate",
    exampleGurmukhi: "ਥਾਲੀ",
    exampleTranslit: "Thali",
    exampleMeaning: "Plate",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 60 }, { x: 60, y: 60 }, { x: 60, y: 25 }]
    ]
  },
  {
    char: "ਦ",
    name: "Dadda (dental)",
    translit: "D",
    sound: "d (soft)",
    exampleWord: "milk",
    exampleGurmukhi: "ਦੁੱਧ",
    exampleTranslit: "Dudh",
    exampleMeaning: "Milk",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 45, y: 25 }, { x: 45, y: 50 }, { x: 65, y: 65 }, { x: 45, y: 80 }]
    ]
  },
  {
    char: "ਧ",
    name: "Dhaddha (dental)",
    translit: "Dh",
    sound: "dh (soft)",
    exampleWord: "thread",
    exampleGurmukhi: "ਧਾਗਾ",
    exampleTranslit: "Dhaga",
    exampleMeaning: "Thread",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 65 }, { x: 60, y: 65 }, { x: 60, y: 25 }]
    ]
  },
  {
    char: "ਨ",
    name: "Nanna",
    translit: "N",
    sound: "n",
    exampleWord: "tap",
    exampleGurmukhi: "ਨਲ",
    exampleTranslit: "Nal",
    exampleMeaning: "Tap",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 55 }, { x: 30, y: 55 }, { x: 30, y: 75 }]
    ]
  },
  // Row 6
  {
    char: "ਪ",
    name: "Pappa",
    translit: "P",
    sound: "p",
    exampleWord: "kite",
    exampleGurmukhi: "ਪਤੰਗ",
    exampleTranslit: "Patang",
    exampleMeaning: "Kite",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 65 }, { x: 60, y: 65 }, { x: 60, y: 75 }]
    ]
  },
  {
    char: "ਫ",
    name: "Phapha",
    translit: "Ph",
    sound: "ph",
    exampleWord: "fruit",
    exampleGurmukhi: "ਫਲ",
    exampleTranslit: "Phal",
    exampleMeaning: "Fruit",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 75 }, { x: 30, y: 50 }, { x: 70, y: 50 }]
    ]
  },
  {
    char: "ਬ",
    name: "Babba",
    translit: "B",
    sound: "b",
    exampleWord: "monkey",
    exampleGurmukhi: "ਬਾਂਦਰ",
    exampleTranslit: "Bandar",
    exampleMeaning: "Monkey",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 45, y: 25 }, { x: 45, y: 75 }, { x: 65, y: 50 }, { x: 45, y: 50 }]
    ]
  },
  {
    char: "ਭ",
    name: "Bhabha",
    translit: "Bh",
    sound: "bh",
    exampleWord: "bear",
    exampleGurmukhi: "ਭਾਲੂ",
    exampleTranslit: "Bhalu",
    exampleMeaning: "Bear",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 55 }, { x: 50, y: 55 }, { x: 50, y: 80 }]
    ]
  },
  {
    char: "ਮ",
    name: "Mamma",
    translit: "M",
    sound: "m",
    exampleWord: "fish",
    exampleGurmukhi: "ਮੱਛੀ",
    exampleTranslit: "Machhi",
    exampleMeaning: "Fish",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 30, y: 25 }, { x: 30, y: 65 }, { x: 60, y: 65 }, { x: 60, y: 25 }]
    ]
  },
  // Row 7
  {
    char: "ਯ",
    name: "Yayya",
    translit: "Y",
    sound: "y",
    exampleWord: "chariot",
    exampleGurmukhi: "ਯੱਕਾ",
    exampleTranslit: "Yakka",
    exampleMeaning: "Horse Cart",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 40, y: 25 }, { x: 25, y: 50 }, { x: 65, y: 50 }, { x: 65, y: 75 }]
    ]
  },
  {
    char: "ਰ",
    name: "Rara",
    translit: "R",
    sound: "r",
    exampleWord: "rope",
    exampleGurmukhi: "ਰੱਸੀ",
    exampleTranslit: "Rassi",
    exampleMeaning: "Rope",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 65 }, { x: 35, y: 75 }]
    ]
  },
  {
    char: "ਲ",
    name: "Lalla",
    translit: "L",
    sound: "l",
    exampleWord: "toy-top",
    exampleGurmukhi: "ਲੱਡੂ",
    exampleTranslit: "Laddu",
    exampleMeaning: "Sweet Ball",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 40, y: 25 }, { x: 30, y: 50 }, { x: 60, y: 50 }, { x: 70, y: 75 }]
    ]
  },
  {
    char: "ਵ",
    name: "Vava",
    translit: "V",
    sound: "v / w",
    exampleWord: "instrument",
    exampleGurmukhi: "ਵਾਜਾ",
    exampleTranslit: "Waja",
    exampleMeaning: "Harmonium",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 35, y: 55 }, { x: 65, y: 55 }, { x: 50, y: 75 }]
    ]
  },
  {
    char: "ੜ",
    name: "Rara (retroflex)",
    translit: "Rh",
    sound: "rr",
    exampleWord: "road",
    exampleGurmukhi: "ਸੜਕ",
    exampleTranslit: "Sadak",
    exampleMeaning: "Road",
    strokes: [
      [{ x: 20, y: 25 }, { x: 80, y: 25 }],
      [{ x: 50, y: 25 }, { x: 50, y: 65 }, { x: 35, y: 65 }, { x: 35, y: 80 }]
    ]
  }
];

// Punjabi Numbers
export const PUNJABI_NUMBERS: GurmukhiNumber[] = [
  { value: 0, char: "੦", word: "ਸਿਫ਼ਰ", translit: "Sifar", meaning: "Zero" },
  { value: 1, char: "੧", word: "ਇੱਕ", translit: "Ik", meaning: "One" },
  { value: 2, char: "੨", word: "ਦੋ", translit: "Do", meaning: "Two" },
  { value: 3, char: "੩", word: "ਤਿੰਨ", translit: "Tinn", meaning: "Three" },
  { value: 4, char: "੪", word: "ਚਾਰ", translit: "Chaar", meaning: "Four" },
  { value: 5, char: "੫", word: "ਪੰਜ", translit: "Panj", meaning: "Five" },
  { value: 6, char: "੬", word: "ਛੇ", translit: "Chey", meaning: "Six" },
  { value: 7, char: "੭", word: "ਸੱਤ", translit: "Satt", meaning: "Seven" },
  { value: 8, char: "੮", word: "ਅੱਠ", translit: "Atth", meaning: "Eight" },
  { value: 9, char: "੯", word: "ਨੌਂ", translit: "Nau", meaning: "Nine" },
  { value: 10, char: "੧੦", word: "ਦੱਸ", translit: "Dass", meaning: "Ten" },
  { value: 11, char: "੧੧", word: "ਗਿਆਰਾਂ", translit: "Giaran", meaning: "Eleven" },
  { value: 12, char: "੧੨", word: "ਬਾਰਾਂ", translit: "Baran", meaning: "Twelve" },
  { value: 20, char: "੨੦", word: "ਵੀਹ", translit: "Veeh", meaning: "Twenty" },
  { value: 30, char: "੩੦", word: "ਤੀਹ", translit: "Teeh", meaning: "Thirty" },
  { value: 40, char: "੪੦", word: "ਚਾਲੀ", translit: "Chali", meaning: "Forty" },
  { value: 50, char: "੫੦", word: "ਪੰਜਾਹ", translit: "Panjah", meaning: "Fifty" },
  { value: 100, char: "੧੦੦", word: "ਸੌ", translit: "Sau", meaning: "One Hundred" },
  { value: 1000, char: "੧੦੦੦", word: "ਹਜ਼ਾਰ", translit: "Hazaar", meaning: "One Thousand" }
];

// Region definitions (World Map nodes)
export const WORLD_REGIONS: Region[] = [
  {
    id: "india",
    name: "Punjab, India",
    subtitle: "The Homeland of Gurmukhi",
    flag: "🇮🇳",
    color: "#ff9933",
    focus: ["Introduction to Gurmukhi script", "Alphabet letters ੳ to ਹ", "Pronunciation basics", "First nouns"],
    rewards: {
      trophy: { name: "Beginner Trophy", icon: "🏆", desc: "Awarded for stepping into the historic plains of Punjab, India and learning your first letters." },
      pendant: { name: "Punjab Heritage Pendant", icon: "💎", desc: "A gold pendant shaped like the five rivers of Punjab.", rarity: "Common" }
    },
    unlockedAtXp: 0,
    xCoord: 350,
    yCoord: 250,
    lessonsCount: 3
  },
  {
    id: "pakistan",
    name: "Punjab, Pakistan",
    subtitle: "Sufi Hearts & Shared Words",
    flag: "🇵🇰",
    color: "#115b3b",
    focus: ["Shared vocabulary", "Alphabet letters ਕ to ਙ", "Cultural greetings", "Ravi river geography"],
    rewards: {
      trophy: { name: "Cultural Unity Trophy", icon: "🏺", desc: "Awarded for completing the Sufi heritage and cultural vocabulary chapters of Pakistan." },
      pendant: { name: "Ravi River Pendant", icon: "🔱", desc: "An emerald pendant reflecting the green waves of the Ravi.", rarity: "Rare" }
    },
    unlockedAtXp: 150,
    xCoord: 280,
    yCoord: 230,
    lessonsCount: 3
  },
  {
    id: "canada",
    name: "Canada",
    subtitle: "Surrey & Brampton Echoes",
    flag: "🇨🇦",
    color: "#ff0000",
    focus: ["Diaspora Punjabi slang", "Alphabet letters ਚ to ਞ", "Practical shop interactions", "Numbers 0-20"],
    rewards: {
      trophy: { name: "Maple Punjabi Trophy", icon: "🍁", desc: "Awarded for learning how Punjabi culture flourished in the maple lands of Canada." },
      pendant: { name: "Northern Star Pendant", icon: "⭐", desc: "A glistening sapphire pendant showing the Northern Lights.", rarity: "Rare" }
    },
    unlockedAtXp: 350,
    xCoord: 100,
    yCoord: 120,
    lessonsCount: 3
  },
  {
    id: "uk",
    name: "United Kingdom",
    subtitle: "Southall & Birmingham Hubs",
    flag: "🇬🇧",
    color: "#00247d",
    focus: ["Bhangra beat language", "Alphabet letters ਟ to ਣ", "Public transport talk", "Simple sentences"],
    rewards: {
      trophy: { name: "Royal Punjabi Trophy", icon: "👑", desc: "Awarded for mastering Southall dialogs and UK community conversational skills." },
      pendant: { name: "Heritage Pendant", icon: "🗝️", desc: "A rare silver pendant modeled after Southall's historic clock tower.", rarity: "Epic" }
    },
    unlockedAtXp: 600,
    xCoord: 200,
    yCoord: 110,
    lessonsCount: 3
  },
  {
    id: "us",
    name: "United States",
    subtitle: "Yuba City & California Farmers",
    flag: "🇺🇸",
    color: "#002868",
    focus: ["Agricultural terms", "Alphabet letters ਤ to ਨ", "Numbers 21-100", "Business greetings"],
    rewards: {
      trophy: { name: "Pioneer Trophy", icon: "🦅", desc: "Awarded for honoring the early Punjabi farmers in California and Yuba City." },
      pendant: { name: "Liberty Pendant", icon: "🔔", desc: "An epic bronze pendant that rings with the spirit of liberty.", rarity: "Epic" }
    },
    unlockedAtXp: 900,
    xCoord: 80,
    yCoord: 180,
    lessonsCount: 4
  },
  {
    id: "australia",
    name: "Australia",
    subtitle: "Woolgoolga & Sydney Pioneers",
    flag: "🇦🇺",
    color: "#00008b",
    focus: ["Advanced spelling checks", "Alphabet letters ਪ to ੜ", "Phrases & idioms", "Listening challenges"],
    rewards: {
      trophy: { name: "Explorer Trophy", icon: "🧭", desc: "Awarded for tracking the ancient paths of early camel drivers in Australia." },
      pendant: { name: "Southern Cross Pendant", icon: "🌌", desc: "A sparkling stellar pendant mapping the Southern Cross constellation.", rarity: "Legendary" }
    },
    unlockedAtXp: 1250,
    xCoord: 500,
    yCoord: 350,
    lessonsCount: 4
  },
  {
    id: "global",
    name: "Global Punjabi Master",
    subtitle: "Ultimate Crown Region",
    flag: "🌐",
    color: "#0070d1",
    focus: ["Vowels (Lagan Matran)", "Nasal signs (Bindi, Tippi)", "Paragraph comprehension", "Dictation challenge"],
    rewards: {
      trophy: { name: "Global Scholar Trophy", icon: "🎓", desc: "Awarded for demonstrating absolute fluency across every global Punjabi chapter." },
      pendant: { name: "Legendary Pendant", icon: "🌟", desc: "A magnificent mythic pendant displaying the Gurmukhi Ik Onkar symbol.", rarity: "Legendary" }
    },
    unlockedAtXp: 1650,
    xCoord: 300,
    yCoord: 320,
    lessonsCount: 5
  }
];

// Interactive lesson challenge models
export interface LessonChallenge {
  type: 'letter-recognition' | 'matching' | 'listening' | 'writing' | 'vocabulary' | 'fill-blank';
  question: string;
  options?: string[];
  answer: string;
  audioPrompt?: string; // Translit or phonetic key
  targetLetter?: GurmukhiLetter; // For tracing exercises
}

// Generates challenges for a specific region and lesson index
export function getRegionChallenges(regionId: string, lessonIndex: number): LessonChallenge[] {
  // Region-specific letter scope mapping
  let lettersScope: GurmukhiLetter[] = [];
  if (regionId === "india") {
    lettersScope = GURMUKHI_ALPHABET.slice(0, 5); // ੳ, ਅ, ੲ, ਸ, ਹ
  } else if (regionId === "pakistan") {
    lettersScope = GURMUKHI_ALPHABET.slice(5, 10); // ਕ, ਖ, ਗ, ਘ, ਙ
  } else if (regionId === "canada") {
    lettersScope = GURMUKHI_ALPHABET.slice(10, 15); // ਚ, ਛ, ਜ, ਝ, ਞ
  } else if (regionId === "uk") {
    lettersScope = GURMUKHI_ALPHABET.slice(15, 20); // ਟ, ਠ, ਡ, ਢ, ਣ
  } else if (regionId === "us") {
    lettersScope = GURMUKHI_ALPHABET.slice(20, 25); // ਤ, ਥ, ਦ, ਧ, ਨ
  } else if (regionId === "australia") {
    lettersScope = GURMUKHI_ALPHABET.slice(25, 35); // ਪ, ਫ, ਬ, ਭ, ਮ, ਯ, ਰ, ਲ, ਵ, ੜ
  } else {
    lettersScope = GURMUKHI_ALPHABET; // Global has access to all
  }

  // Generate generic challenges based on lettersScope
  const challenges: LessonChallenge[] = [];

  if (lessonIndex === 0) {
    // Lesson 1: Introduction (Flashcards & Matching)
    lettersScope.forEach(letter => {
      challenges.push({
        type: 'letter-recognition',
        question: `What is the transliteration for the Gurmukhi letter '${letter.char}'?`,
        options: shuffleArray([letter.translit, ...getRandomTranslits(letter.translit, 3)]),
        answer: letter.translit
      });
    });
    // Add listening challenge
    const firstLetter = lettersScope[0];
    challenges.push({
      type: 'listening',
      question: `Listen and select the Gurmukhi character you hear:`,
      options: shuffleArray([firstLetter.char, ...getRandomChars(firstLetter.char, 3)]),
      answer: firstLetter.char,
      audioPrompt: firstLetter.name
    });
  } else if (lessonIndex === 1) {
    // Lesson 2: Tracing & Words
    lettersScope.slice(0, Math.min(3, lettersScope.length)).forEach(letter => {
      challenges.push({
        type: 'writing',
        question: `Trace the Gurmukhi letter '${letter.char}' (${letter.name}):`,
        answer: 'complete',
        targetLetter: letter
      });
      challenges.push({
        type: 'vocabulary',
        question: `What does the word '${letter.exampleGurmukhi}' (${letter.exampleTranslit}) mean?`,
        options: shuffleArray([letter.exampleMeaning, 'Water', 'Home', 'Kite', 'Apple'].slice(0, 4)),
        answer: letter.exampleMeaning
      });
    });
  } else {
    // Lesson 3: Mastery / Review
    lettersScope.forEach((letter, i) => {
      if (i % 2 === 0) {
        challenges.push({
          type: 'fill-blank',
          question: `Fill in the blank: '${letter.exampleGurmukhi}' translates to '${letter.exampleTranslit}' which means _________.`,
          options: shuffleArray([letter.exampleMeaning, 'Milk', 'Pigeon', 'Train', 'Wheat'].slice(0, 4)),
          answer: letter.exampleMeaning
        });
      } else {
        challenges.push({
          type: 'matching',
          question: `Match this sound to its letter: '${letter.sound}'`,
          options: shuffleArray([letter.char, ...getRandomChars(letter.char, 3)]),
          answer: letter.char
        });
      }
    });
  }

  return shuffleArray(challenges).slice(0, 6); // Keep it to a tight 6-question list
}

// Helpers
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomTranslits(exclude: string, count: number): string[] {
  const pool = GURMUKHI_ALPHABET.map(l => l.translit).filter(t => t !== exclude);
  return shuffleArray(pool).slice(0, count);
}

function getRandomChars(exclude: string, count: number): string[] {
  const pool = GURMUKHI_ALPHABET.map(l => l.char).filter(c => c !== exclude);
  return shuffleArray(pool).slice(0, count);
}
