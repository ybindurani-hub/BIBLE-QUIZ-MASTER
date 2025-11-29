import { Question, Difficulty } from '../types';

export const STATIC_BIBLE_DATA = [
  // --- OLD TESTAMENT ---
  {
    book: "Genesis",
    questions: [
      {
        question: "In the beginning, God created the heavens and the what?",
        options: ["Earth", "Stars", "Angels", "Waters"],
        correct: "Earth",
        reference: "Genesis 1:1",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was the first son of Adam and Eve?",
        options: ["Cain", "Abel", "Seth", "Enoch"],
        correct: "Cain",
        reference: "Genesis 4:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Exodus",
    questions: [
      {
        question: "Who led the Israelites out of Egypt?",
        options: ["Moses", "Aaron", "Joshua", "Joseph"],
        correct: "Moses",
        reference: "Exodus 3:10",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Leviticus",
    questions: [
      {
        question: "Which tribe was set apart for the priesthood?",
        options: ["Levi", "Judah", "Benjamin", "Dan"],
        correct: "Levi",
        reference: "Leviticus 8",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Numbers",
    questions: [
      {
        question: "What animal spoke to Balaam?",
        options: ["Donkey", "Horse", "Camel", "Sheep"],
        correct: "Donkey",
        reference: "Numbers 22:28",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Deuteronomy",
    questions: [
      {
        question: "Where did Moses die?",
        options: ["Mount Nebo", "Mount Sinai", "Mount Zion", "Plain of Moab"],
        correct: "Mount Nebo",
        reference: "Deuteronomy 34:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Joshua",
    questions: [
      {
        question: "Which city's walls fell down after marching around it?",
        options: ["Jericho", "Ai", "Gibeon", "Jerusalem"],
        correct: "Jericho",
        reference: "Joshua 6:20",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Judges",
    questions: [
      {
        question: "Who was the strongest man in the Bible?",
        options: ["Samson", "Gideon", "Barak", "Jephthah"],
        correct: "Samson",
        reference: "Judges 13-16",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Ruth",
    questions: [
      {
        question: "Who was Ruth's mother-in-law?",
        options: ["Naomi", "Orpah", "Sarah", "Rebekah"],
        correct: "Naomi",
        reference: "Ruth 1:2",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Samuel",
    questions: [
      {
        question: "Who anointed David as king?",
        options: ["Samuel", "Saul", "Eli", "Nathan"],
        correct: "Samuel",
        reference: "1 Samuel 16:13",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Samuel",
    questions: [
      {
        question: "Which son of David revolted against him?",
        options: ["Absalom", "Solomon", "Amnon", "Adonijah"],
        correct: "Absalom",
        reference: "2 Samuel 15",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Kings",
    questions: [
      {
        question: "Who built the first Temple in Jerusalem?",
        options: ["Solomon", "David", "Saul", "Hezekiah"],
        correct: "Solomon",
        reference: "1 Kings 6",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Kings",
    questions: [
      {
        question: "Who was taken up to heaven in a whirlwind?",
        options: ["Elijah", "Elisha", "Enoch", "Moses"],
        correct: "Elijah",
        reference: "2 Kings 2:11",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Chronicles",
    questions: [
      {
        question: "1 Chronicles begins with a long list of what?",
        options: ["Genealogies", "Laws", "Battles", "Offerings"],
        correct: "Genealogies",
        reference: "1 Chronicles 1-9",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Chronicles",
    questions: [
      {
        question: "Which king prayed for wisdom instead of riches?",
        options: ["Solomon", "David", "Hezekiah", "Josiah"],
        correct: "Solomon",
        reference: "2 Chronicles 1:10",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Ezra",
    questions: [
      {
        question: "Ezra was a scribe skilled in the Law of whom?",
        options: ["Moses", "David", "Solomon", "Abraham"],
        correct: "Moses",
        reference: "Ezra 7:6",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Nehemiah",
    questions: [
      {
        question: "What did Nehemiah rebuild?",
        options: ["The walls of Jerusalem", "The Temple", "The Palace", "The Altar"],
        correct: "The walls of Jerusalem",
        reference: "Nehemiah 2:17",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Esther",
    questions: [
      {
        question: "Who became queen in place of Vashti?",
        options: ["Esther", "Ruth", "Naomi", "Sarah"],
        correct: "Esther",
        reference: "Esther 2:17",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Job",
    questions: [
      {
        question: "Despite his suffering, Job did not do what?",
        options: ["Curse God", "Cry", "Rip his robe", "Shave his head"],
        correct: "Curse God",
        reference: "Job 1:22",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Psalms",
    questions: [
      {
        question: "The Lord is my shepherd; I shall not what?",
        options: ["Want", "Fear", "Stray", "Fall"],
        correct: "Want",
        reference: "Psalm 23:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Proverbs",
    questions: [
      {
        question: "The fear of the Lord is the beginning of what?",
        options: ["Knowledge", "Wealth", "Power", "Love"],
        correct: "Knowledge",
        reference: "Proverbs 1:7",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Ecclesiastes",
    questions: [
      {
        question: "There is a time for everything, and a season for every activity under the what?",
        options: ["Heavens", "Sun", "Earth", "Moon"],
        correct: "Heavens",
        reference: "Ecclesiastes 3:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Song of Solomon",
    questions: [
      {
        question: "I am my beloved's, and my beloved is what?",
        options: ["Mine", "Gone", "Here", "Waiting"],
        correct: "Mine",
        reference: "Song of Solomon 6:3",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Isaiah",
    questions: [
      {
        question: "Who prophesied about the 'Suffering Servant'?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
        correct: "Isaiah",
        reference: "Isaiah 53",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Jeremiah",
    questions: [
      {
        question: "Who is known as the weeping prophet?",
        options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
        correct: "Jeremiah",
        reference: "General",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Lamentations",
    questions: [
      {
        question: "Great is Thy what?",
        options: ["Faithfulness", "Love", "Power", "Mercy"],
        correct: "Faithfulness",
        reference: "Lamentations 3:23",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Ezekiel",
    questions: [
      {
        question: "Ezekiel had a vision of a valley of dry what?",
        options: ["Bones", "Rivers", "Stones", "Trees"],
        correct: "Bones",
        reference: "Ezekiel 37",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Daniel",
    questions: [
      {
        question: "Who was thrown into the lion's den?",
        options: ["Daniel", "Shadrach", "Meshach", "Abednego"],
        correct: "Daniel",
        reference: "Daniel 6",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Hosea",
    questions: [
      {
        question: "Who was Hosea told to marry?",
        options: ["Gomer", "Ruth", "Esther", "Rahab"],
        correct: "Gomer",
        reference: "Hosea 1:2",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Joel",
    questions: [
      {
        question: "Joel prophesied about a plague of what?",
        options: ["Locusts", "Frogs", "Flies", "Gnats"],
        correct: "Locusts",
        reference: "Joel 1:4",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Amos",
    questions: [
      {
        question: "Amos was a shepherd from which town?",
        options: ["Tekoa", "Bethlehem", "Jericho", "Bethel"],
        correct: "Tekoa",
        reference: "Amos 1:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Obadiah",
    questions: [
      {
        question: "Which nation did Obadiah prophesy against?",
        options: ["Edom", "Moab", "Ammon", "Egypt"],
        correct: "Edom",
        reference: "Obadiah 1:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Jonah",
    questions: [
      {
        question: "Which city was Jonah sent to preach to?",
        options: ["Nineveh", "Tarshish", "Babylon", "Jericho"],
        correct: "Nineveh",
        reference: "Jonah 1:2",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Micah",
    questions: [
      {
        question: "Micah prophesied that the Messiah would be born where?",
        options: ["Bethlehem", "Jerusalem", "Nazareth", "Galilee"],
        correct: "Bethlehem",
        reference: "Micah 5:2",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Nahum",
    questions: [
      {
        question: "Nahum prophesied against which city?",
        options: ["Nineveh", "Babylon", "Tyre", "Sidon"],
        correct: "Nineveh",
        reference: "Nahum 1:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Habakkuk",
    questions: [
      {
        question: "The just shall live by his what?",
        options: ["Faith", "Works", "Law", "Strength"],
        correct: "Faith",
        reference: "Habakkuk 2:4",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Zephaniah",
    questions: [
      {
        question: "Zephaniah prophesied about the Day of the what?",
        options: ["Lord", "Sun", "Moon", "King"],
        correct: "Lord",
        reference: "Zephaniah 1:7",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Haggai",
    questions: [
      {
        question: "Haggai encouraged the people to rebuild what?",
        options: ["The Temple", "The Wall", "The Palace", "The City"],
        correct: "The Temple",
        reference: "Haggai 1:8",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Zechariah",
    questions: [
      {
        question: "Zechariah prophesied the King coming riding on a what?",
        options: ["Donkey", "Horse", "Camel", "Chariot"],
        correct: "Donkey",
        reference: "Zechariah 9:9",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Malachi",
    questions: [
      {
        question: "Will a man rob whom?",
        options: ["God", "King", "Priest", "Neighbor"],
        correct: "God",
        reference: "Malachi 3:8",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  // --- NEW TESTAMENT ---
  {
    book: "Matthew",
    questions: [
      {
        question: "Who visited Jesus from the East?",
        options: ["Wise Men", "Shepherds", "Kings", "Prophets"],
        correct: "Wise Men",
        reference: "Matthew 2:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Mark",
    questions: [
      {
        question: "Mark portrays Jesus as a what?",
        options: ["Servant", "King", "Man", "God"],
        correct: "Servant",
        reference: "General",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Luke",
    questions: [
      {
        question: "What profession was Luke?",
        options: ["Physician", "Fisherman", "Tax Collector", "Tentmaker"],
        correct: "Physician",
        reference: "Colossians 4:14",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "John",
    questions: [
      {
        question: "In the beginning was the what?",
        options: ["Word", "Light", "Life", "Truth"],
        correct: "Word",
        reference: "John 1:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Acts",
    questions: [
      {
        question: "Who was converted on the road to Damascus?",
        options: ["Saul", "Peter", "John", "Stephen"],
        correct: "Saul",
        reference: "Acts 9",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Romans",
    questions: [
      {
        question: "For all have sinned and fall short of the glory of whom?",
        options: ["God", "Man", "Angels", "Heaven"],
        correct: "God",
        reference: "Romans 3:23",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Corinthians",
    questions: [
      {
        question: "Love is patient, love is what?",
        options: ["Kind", "Blind", "Strong", "Pure"],
        correct: "Kind",
        reference: "1 Corinthians 13:4",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Corinthians",
    questions: [
      {
        question: "God loves a cheerful what?",
        options: ["Giver", "Worker", "Singer", "Prayer"],
        correct: "Giver",
        reference: "2 Corinthians 9:7",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Galatians",
    questions: [
      {
        question: "The fruit of the Spirit is love, joy, what?",
        options: ["Peace", "Hate", "War", "Anger"],
        correct: "Peace",
        reference: "Galatians 5:22",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Ephesians",
    questions: [
      {
        question: "By grace you have been saved through what?",
        options: ["Faith", "Works", "Law", "Money"],
        correct: "Faith",
        reference: "Ephesians 2:8",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Philippians",
    questions: [
      {
        question: "I can do all things through Christ who strengthens whom?",
        options: ["Me", "Us", "Them", "You"],
        correct: "Me",
        reference: "Philippians 4:13",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Colossians",
    questions: [
      {
        question: "Set your minds on things above, not on what?",
        options: ["Earthly things", "Heavenly things", "Spiritual things", "Future things"],
        correct: "Earthly things",
        reference: "Colossians 3:2",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Thessalonians",
    questions: [
      {
        question: "Pray without what?",
        options: ["Ceasing", "Hope", "Faith", "Love"],
        correct: "Ceasing",
        reference: "1 Thessalonians 5:17",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Thessalonians",
    questions: [
      {
        question: "If anyone will not work, neither shall he what?",
        options: ["Eat", "Sleep", "Drink", "Live"],
        correct: "Eat",
        reference: "2 Thessalonians 3:10",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Timothy",
    questions: [
      {
        question: "For the love of money is a root of all kinds of what?",
        options: ["Evil", "Good", "Joy", "Peace"],
        correct: "Evil",
        reference: "1 Timothy 6:10",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Timothy",
    questions: [
      {
        question: "I have fought the good fight, I have finished the what?",
        options: ["Race", "Work", "Meal", "Game"],
        correct: "Race",
        reference: "2 Timothy 4:7",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Titus",
    questions: [
      {
        question: "Titus was a Greek believer and a companion of whom?",
        options: ["Paul", "Peter", "John", "James"],
        correct: "Paul",
        reference: "Galatians 2:3",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Philemon",
    questions: [
      {
        question: "Who was Philemon's runaway slave?",
        options: ["Onesimus", "Tychicus", "Epaphras", "Mark"],
        correct: "Onesimus",
        reference: "Philemon 1:10",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Hebrews",
    questions: [
      {
        question: "Faith is the substance of things hoped for, the evidence of things not what?",
        options: ["Seen", "Heard", "Felt", "Known"],
        correct: "Seen",
        reference: "Hebrews 11:1",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "James",
    questions: [
      {
        question: "Faith without works is what?",
        options: ["Dead", "Alive", "Good", "Bad"],
        correct: "Dead",
        reference: "James 2:26",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 Peter",
    questions: [
      {
        question: "Cast all your anxiety on Him because He cares for whom?",
        options: ["You", "Us", "Them", "All"],
        correct: "You",
        reference: "1 Peter 5:7",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 Peter",
    questions: [
      {
        question: "With the Lord a day is like a thousand what?",
        options: ["Years", "Months", "Days", "Hours"],
        correct: "Years",
        reference: "2 Peter 3:8",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "1 John",
    questions: [
      {
        question: "God is what?",
        options: ["Love", "Hate", "War", "Fear"],
        correct: "Love",
        reference: "1 John 4:8",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "2 John",
    questions: [
      {
        question: "Walk in what?",
        options: ["Truth", "Darkness", "Fear", "Doubt"],
        correct: "Truth",
        reference: "2 John 1:4",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "3 John",
    questions: [
      {
        question: "I have no greater joy than to hear that my children are walking in the what?",
        options: ["Truth", "Light", "Spirit", "Way"],
        correct: "Truth",
        reference: "3 John 1:4",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Jude",
    questions: [
      {
        question: "Contend earnestly for the what?",
        options: ["Faith", "Law", "Land", "King"],
        correct: "Faith",
        reference: "Jude 1:3",
        difficulty: "Moderate" as Difficulty
      }
    ]
  },
  {
    book: "Revelation",
    questions: [
      {
        question: "I am the Alpha and the what?",
        options: ["Omega", "Beta", "Gamma", "Delta"],
        correct: "Omega",
        reference: "Revelation 1:8",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "The Holy City, the new Jerusalem, coming down out of heaven from whom?",
        options: ["God", "Angels", "Clouds", "Stars"],
        correct: "God",
        reference: "Revelation 21:2",
        difficulty: "Moderate" as Difficulty
      }
    ]
  }
];