import { Question, Difficulty } from '../types';

export const STATIC_BIBLE_DATA = [
  {
    book: "Genesis",
    questions: [
      // --- MODERATE (Level 1) ---
      {
        question: "On which day did God create the sun, moon, and stars?",
        options: ["Third", "Fourth", "Fifth", "Sixth"],
        correct: "Fourth",
        reference: "Genesis 1:14-19",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What was the name of the garden where God placed man?",
        options: ["Gethsemane", "Eden", "Olives", "Sharon"],
        correct: "Eden",
        reference: "Genesis 2:8",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was the first son of Adam and Eve?",
        options: ["Abel", "Seth", "Cain", "Enoch"],
        correct: "Cain",
        reference: "Genesis 4:1",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "How many people were saved in Noah's Ark?",
        options: ["7", "8", "10", "12"],
        correct: "8",
        reference: "Genesis 7:13",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What was the sign of God's covenant with Noah?",
        options: ["The Sabbath", "Circumcision", "A Rainbow", "A Dove"],
        correct: "A Rainbow",
        reference: "Genesis 9:13",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was Abraham's wife?",
        options: ["Rebekah", "Rachel", "Sarah", "Leah"],
        correct: "Sarah",
        reference: "Genesis 11:29",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Which city did Lot flee to before it was destroyed?",
        options: ["Sodom", "Gomorrah", "Zoar", "Jericho"],
        correct: "Zoar",
        reference: "Genesis 19:22",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was the son of Abraham and Hagar?",
        options: ["Isaac", "Ishmael", "Jacob", "Esau"],
        correct: "Ishmael",
        reference: "Genesis 16:15",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What did Esau sell his birthright for?",
        options: ["A flock of sheep", "Silver coins", "Stew", "A blessing"],
        correct: "Stew",
        reference: "Genesis 25:34",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was sold into slavery by his brothers?",
        options: ["Benjamin", "Joseph", "Judah", "Reuben"],
        correct: "Joseph",
        reference: "Genesis 37:28",
        difficulty: "Moderate" as Difficulty
      },

      // --- HARD (Level 2) ---
      {
        question: "How old was Adam when he died?",
        options: ["900", "930", "950", "969"],
        correct: "930",
        reference: "Genesis 5:5",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What kind of wood was Noah's Ark made of?",
        options: ["Cedar", "Gopher", "Oak", "Acacia"],
        correct: "Gopher",
        reference: "Genesis 6:14",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Who was the king of Salem that blessed Abram?",
        options: ["Abimelech", "Melchizedek", "Bera", "Birsha"],
        correct: "Melchizedek",
        reference: "Genesis 14:18",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How many trained men did Abram lead to rescue Lot?",
        options: ["300", "318", "400", "430"],
        correct: "318",
        reference: "Genesis 14:14",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "At what age was Isaac circumcised?",
        options: ["8 days", "1 month", "1 year", "12 years"],
        correct: "8 days",
        reference: "Genesis 21:4",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Who was the wife of Nahor, Abraham's brother?",
        options: ["Milcah", "Iscah", "Keturah", "Hagar"],
        correct: "Milcah",
        reference: "Genesis 11:29",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What was the name of the place where Jacob dreamed of a ladder?",
        options: ["Peniel", "Bethel", "Shechem", "Hebron"],
        correct: "Bethel",
        reference: "Genesis 28:19",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which of Jacob's sons lost his birthright because he defiled his father's bed?",
        options: ["Simeon", "Levi", "Reuben", "Judah"],
        correct: "Reuben",
        reference: "Genesis 49:3-4",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How much did Abraham pay for the cave of Machpelah?",
        options: ["100 shekels", "200 shekels", "400 shekels", "500 shekels"],
        correct: "400 shekels",
        reference: "Genesis 23:15",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How old was Joseph when he stood before Pharaoh?",
        options: ["25", "30", "33", "40"],
        correct: "30",
        reference: "Genesis 41:46",
        difficulty: "Hard" as Difficulty
      },

      // --- EXTREME (Level 3) ---
      {
        question: "Who was the father of Tubal-Cain?",
        options: ["Lamech", "Enoch", "Jabal", "Methusael"],
        correct: "Lamech",
        reference: "Genesis 4:22",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the name of the well where the angel of the Lord found Hagar?",
        options: ["Beer-sheba", "Beer-lahai-roi", "Esek", "Rehoboth"],
        correct: "Beer-lahai-roi",
        reference: "Genesis 16:14",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Which son of Jacob is described as a 'hind let loose'?",
        options: ["Dan", "Naphtali", "Gad", "Asher"],
        correct: "Naphtali",
        reference: "Genesis 49:21",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who was the father of the Edomites' King Bela?",
        options: ["Beor", "Zerah", "Jobab", "Husham"],
        correct: "Beor",
        reference: "Genesis 36:32",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "How many years did Adam live after he fathered Seth?",
        options: ["700", "800", "850", "900"],
        correct: "800",
        reference: "Genesis 5:4",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the name of Potiphar's priest position?",
        options: ["Priest of On", "Priest of Memphis", "Priest of Thebes", "Priest of Baal"],
        correct: "Priest of On",
        reference: "Genesis 41:45",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who was the mother of Jacob's sons Gad and Asher?",
        options: ["Bilhah", "Zilpah", "Leah", "Rachel"],
        correct: "Zilpah",
        reference: "Genesis 35:26",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "In the genealogy of Genesis 10, who founded Nineveh?",
        options: ["Nimrod", "Asshur", "Cush", "Mizraim"],
        correct: "Nimrod",
        reference: "Genesis 10:11",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the name of the oak where Deborah, Rebekah's nurse, was buried?",
        options: ["Allon-bachuth", "Terebinth of Moreh", "Oaks of Mamre", "Baal-tamar"],
        correct: "Allon-bachuth",
        reference: "Genesis 35:8",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Which king of Ellasar was part of the alliance against Sodom?",
        options: ["Amraphel", "Arioch", "Chedorlaomer", "Tidal"],
        correct: "Arioch",
        reference: "Genesis 14:1",
        difficulty: "Extreme" as Difficulty
      }
    ]
  },
  {
    book: "Exodus",
    questions: [
      // --- MODERATE ---
      {
        question: "Who found baby Moses in the river?",
        options: ["Pharaoh's daughter", "Miriam", "Jochebed", "Zipporah"],
        correct: "Pharaoh's daughter",
        reference: "Exodus 2:5",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What was the first plague upon Egypt?",
        options: ["Frogs", "Blood", "Locusts", "Darkness"],
        correct: "Blood",
        reference: "Exodus 7:20",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What sea did the Israelites cross on dry ground?",
        options: ["Mediterranean Sea", "Red Sea", "Dead Sea", "Sea of Galilee"],
        correct: "Red Sea",
        reference: "Exodus 14:21",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What food did God provide for the Israelites in the wilderness?",
        options: ["Manna", "Figs", "Fish", "Locusts"],
        correct: "Manna",
        reference: "Exodus 16:15",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "On which mountain did Moses receive the Ten Commandments?",
        options: ["Mount Zion", "Mount Sinai", "Mount Nebo", "Mount Carmel"],
        correct: "Mount Sinai",
        reference: "Exodus 19:20",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was Moses' brother?",
        options: ["Aaron", "Joshua", "Caleb", "Hur"],
        correct: "Aaron",
        reference: "Exodus 4:14",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What idol did the Israelites make while Moses was on the mountain?",
        options: ["Golden Calf", "Baal", "Asherah Pole", "Silver Serpent"],
        correct: "Golden Calf",
        reference: "Exodus 32:4",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "How many commandments were given on the stone tablets?",
        options: ["5", "7", "10", "12"],
        correct: "10",
        reference: "Exodus 34:28",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was Moses' father-in-law?",
        options: ["Jethro", "Jethro", "Laban", "Potiphar"],
        correct: "Jethro",
        reference: "Exodus 3:1",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What guided the Israelites by day in the wilderness?",
        options: ["Pillar of Fire", "Pillar of Cloud", "A Star", "An Angel"],
        correct: "Pillar of Cloud",
        reference: "Exodus 13:21",
        difficulty: "Moderate" as Difficulty
      },

      // --- HARD ---
      {
        question: "What were the names of the two Hebrew midwives who feared God?",
        options: ["Shiphrah and Puah", "Milcah and Iscah", "Zillah and Adah", "Leah and Rachel"],
        correct: "Shiphrah and Puah",
        reference: "Exodus 1:15",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How long was Moses on Mount Sinai without food or water?",
        options: ["3 days", "7 days", "40 days", "100 days"],
        correct: "40 days",
        reference: "Exodus 34:28",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What was the name of Moses' wife?",
        options: ["Zipporah", "Miriam", "Keturah", "Elisheba"],
        correct: "Zipporah",
        reference: "Exodus 2:21",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which two men held up Moses' hands during the battle against Amalek?",
        options: ["Joshua and Caleb", "Aaron and Hur", "Aaron and Joshua", "Caleb and Hur"],
        correct: "Aaron and Hur",
        reference: "Exodus 17:12",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What was the name of the son Moses had in Midian?",
        options: ["Gershom", "Eliezer", "Phinehas", "Nadab"],
        correct: "Gershom",
        reference: "Exodus 2:22",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How many years did the Israelites dwell in Egypt?",
        options: ["400", "430", "450", "500"],
        correct: "430",
        reference: "Exodus 12:40",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What wood was used to build the Ark of the Covenant?",
        options: ["Cedar", "Acacia", "Oak", "Olive"],
        correct: "Acacia",
        reference: "Exodus 25:10",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Who made the Golden Calf?",
        options: ["Aaron", "Miriam", "Dathan", "Abiram"],
        correct: "Aaron",
        reference: "Exodus 32:2-4",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What was the name of the place where the water was bitter?",
        options: ["Elim", "Marah", "Rephidim", "Massah"],
        correct: "Marah",
        reference: "Exodus 15:23",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which commandment is the only one with a promise attached?",
        options: ["Honor your father and mother", "Keep the Sabbath", "Do not murder", "Do not steal"],
        correct: "Honor your father and mother",
        reference: "Exodus 20:12",
        difficulty: "Hard" as Difficulty
      },

      // --- EXTREME ---
      {
        question: "What was the specific weight of the talent of gold used for the lampstand?",
        options: ["Half a talent", "One talent", "Two talents", "Five talents"],
        correct: "One talent",
        reference: "Exodus 25:39",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who was the father of Bezalel, the chief artisan of the Tabernacle?",
        options: ["Uri", "Hur", "Caleb", "Nun"],
        correct: "Uri",
        reference: "Exodus 31:2",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What were the names of Aaron's four sons?",
        options: ["Nadab, Abihu, Eleazar, Ithamar", "Hophni, Phinehas, Joel, Abijah", "Gershon, Kohath, Merari, Mushi", "Reuben, Simeon, Levi, Judah"],
        correct: "Nadab, Abihu, Eleazar, Ithamar",
        reference: "Exodus 6:23",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the name of the father of Oholiab, Bezalel's assistant?",
        options: ["Ahisamach", "Ahiezer", "Ahira", "Amminadab"],
        correct: "Ahisamach",
        reference: "Exodus 31:6",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "How many loops of blue were on the edge of the curtain for the Tabernacle?",
        options: ["30", "40", "50", "60"],
        correct: "50",
        reference: "Exodus 26:5",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What is the name of the mountain where God called Moses from the burning bush?",
        options: ["Horeb", "Zion", "Gerizim", "Ebal"],
        correct: "Horeb",
        reference: "Exodus 3:1",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who was the father of Amram, Moses' father?",
        options: ["Kohath", "Levi", "Gershon", "Merari"],
        correct: "Kohath",
        reference: "Exodus 6:18",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the price to redeem a firstborn donkey if not redeemed with a lamb?",
        options: ["Break its neck", "Set it free", "Five shekels", "Two pigeons"],
        correct: "Break its neck",
        reference: "Exodus 13:13",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Which two stones were on the shoulder pieces of the ephod?",
        options: ["Onyx", "Jasper", "Sapphire", "Emerald"],
        correct: "Onyx",
        reference: "Exodus 28:9",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "How many pillars were at the entrance of the courtyard?",
        options: ["Four", "Five", "Ten", "Twenty"],
        correct: "Four",
        reference: "Exodus 27:16",
        difficulty: "Extreme" as Difficulty
      }
    ]
  },
  {
    book: "Leviticus",
    questions: [
      // --- MODERATE ---
      {
        question: "Which tribe was ordained to serve as priests?",
        options: ["Judah", "Levi", "Benjamin", "Ephraim"],
        correct: "Levi",
        reference: "Leviticus 8",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What is the central theme of the book of Leviticus, repeated often: 'Be ye ____, for I am ____'?",
        options: ["Strong", "Holy", "Wise", "Faithful"],
        correct: "Holy",
        reference: "Leviticus 11:44",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What happened to Aaron's sons, Nadab and Abihu, when they offered 'strange fire'?",
        options: ["They were struck with leprosy", "Fire came out from the Lord and consumed them", "They were exiled from the camp", "The earth swallowed them up"],
        correct: "Fire came out from the Lord and consumed them",
        reference: "Leviticus 10:2",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Which of these land animals was considered clean to eat?",
        options: ["Pig", "Camel", "Cow", "Rabbit"],
        correct: "Cow",
        reference: "Leviticus 11:3",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What was the most solemn day of the year for the Israelites?",
        options: ["Passover", "The Day of Atonement (Yom Kippur)", "Feast of Tabernacles", "Pentecost"],
        correct: "The Day of Atonement (Yom Kippur)",
        reference: "Leviticus 16:29-30",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "How often did the Year of Jubilee occur?",
        options: ["Every 7 years", "Every 12 years", "Every 49 years (the 50th year)", "Every 100 years"],
        correct: "Every 49 years (the 50th year)",
        reference: "Leviticus 25:10-11",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "According to Leviticus 17:11, the life of the flesh is in the what?",
        options: ["Heart", "Breath", "Blood", "Spirit"],
        correct: "Blood",
        reference: "Leviticus 17:11",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What is the second greatest commandment, found in Leviticus 19?",
        options: ["Love the Lord your God", "Love your neighbor as yourself", "Do not kill", "Keep the Sabbath holy"],
        correct: "Love your neighbor as yourself",
        reference: "Leviticus 19:18",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Which offering was completely burnt on the altar?",
        options: ["Sin Offering", "Burnt Offering", "Peace Offering", "Grain Offering"],
        correct: "Burnt Offering",
        reference: "Leviticus 1:9",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was the first High Priest anointed in Leviticus?",
        options: ["Moses", "Aaron", "Eleazar", "Joshua"],
        correct: "Aaron",
        reference: "Leviticus 8:12",
        difficulty: "Moderate" as Difficulty
      },

      // --- HARD ---
      {
        question: "What was the name of the goat that was sent into the wilderness on the Day of Atonement?",
        options: ["The Scapegoat (Azazel)", "The Sacrificial Goat", "The Wilderness Goat", "The Sin Goat"],
        correct: "The Scapegoat (Azazel)",
        reference: "Leviticus 16:8-10",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which two sons of Aaron survived after Nadab and Abihu died?",
        options: ["Phinehas and Hophni", "Eleazar and Ithamar", "Gershon and Kohath", "Joel and Abijah"],
        correct: "Eleazar and Ithamar",
        reference: "Leviticus 10:6",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "In the law of leprosy, what bird was dipped in blood and set free?",
        options: ["A dove", "A pigeon", "A living clean bird (sparrow)", "A raven"],
        correct: "A living clean bird (sparrow)",
        reference: "Leviticus 14:6-7",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What were the Urim and Thummim placed inside of?",
        options: ["The Ark of the Covenant", "The Breastplate of Judgment", "The Turban", "The Altar of Incense"],
        correct: "The Breastplate of Judgment",
        reference: "Leviticus 8:8",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What feast required the Israelites to dwell in booths (sukkot) for seven days?",
        options: ["Feast of Unleavened Bread", "Feast of Weeks", "Feast of Tabernacles", "Feast of Trumpets"],
        correct: "Feast of Tabernacles",
        reference: "Leviticus 23:34",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What was the name of the offering brought by a person who could not afford a lamb for a sin offering?",
        options: ["Two turtledoves or two young pigeons", "An ephah of fine flour", "A young goat", "A sheaf of grain"],
        correct: "Two turtledoves or two young pigeons",
        reference: "Leviticus 5:7",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What specific sin did the man commit who was stoned to death in Leviticus 24?",
        options: ["Murder", "Adultery", "Blaspheming the Name", "Breaking the Sabbath"],
        correct: "Blaspheming the Name",
        reference: "Leviticus 24:11",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which chapter of Leviticus outlines the blessings for obedience and the curses for disobedience?",
        options: ["Chapter 16", "Chapter 19", "Chapter 26", "Chapter 27"],
        correct: "Chapter 26",
        reference: "Leviticus 26",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What physical defect disqualified a descendant of Aaron from offering the bread of his God?",
        options: ["Being bald", "Being blind or lame", "Having a long beard", "Being left-handed"],
        correct: "Being blind or lame",
        reference: "Leviticus 21:18",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "The 'grain offering' (meat offering in KJV) had to be made without which ingredient?",
        options: ["Oil", "Frankincense", "Salt", "Leaven (Yeast)"],
        correct: "Leaven (Yeast)",
        reference: "Leviticus 2:11",
        difficulty: "Hard" as Difficulty
      },

      // --- EXTREME ---
      {
        question: "What was the name of the mother of the man who blasphemed the Name?",
        options: ["Shelomith", "Zipporah", "Elisheba", "Jochebed"],
        correct: "Shelomith",
        reference: "Leviticus 24:11",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "From which tribe was the father of the blasphemer?",
        options: ["Dan", "Levi", "Judah", "An Egyptian"],
        correct: "An Egyptian",
        reference: "Leviticus 24:10",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What is the specific term for a vow where a person or thing is irrevocably devoted to the Lord and cannot be redeemed (it must be put to death or destroyed)?",
        options: ["A Nazirite vow", "A peace offering", "Cherem (Devoted Thing)", "A wave offering"],
        correct: "Cherem (Devoted Thing)",
        reference: "Leviticus 27:28-29",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "On what specific date was the Feast of Trumpets held?",
        options: ["First day of the seventh month", "Tenth day of the seventh month", "Fifteenth day of the first month", "First day of the first month"],
        correct: "First day of the seventh month",
        reference: "Leviticus 23:24",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the value set for redeeming a male from 20 to 60 years old in a vow?",
        options: ["30 shekels", "50 shekels of silver", "10 shekels", "A talent of gold"],
        correct: "50 shekels of silver",
        reference: "Leviticus 27:3",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "In the cleansing ritual for a leper, what wood was used along with scarlet and hyssop?",
        options: ["Cedar wood", "Acacia wood", "Olive wood", "Gopher wood"],
        correct: "Cedar wood",
        reference: "Leviticus 14:4",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who were the cousins of Aaron that Moses told to carry the bodies of Nadab and Abihu outside the camp?",
        options: ["Mishael and Elzaphan", "Korah and Dathan", "Uzziel and Izhar", "Hebron and Amram"],
        correct: "Mishael and Elzaphan",
        reference: "Leviticus 10:4",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the specific penalty for eating blood?",
        options: ["Stoning", "Exile", "Being 'cut off' from the people", "A fine"],
        correct: "Being 'cut off' from the people",
        reference: "Leviticus 17:10",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "If a man redeemed part of his tithe, how much did he have to add to its value?",
        options: ["One-tenth", "One-fifth", "One-half", "Double"],
        correct: "One-fifth",
        reference: "Leviticus 27:31",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Which specific sea creatures were permitted to be eaten?",
        options: ["Any that swim", "Those with fins and scales", "Shellfish", "Whales and dolphins"],
        correct: "Those with fins and scales",
        reference: "Leviticus 11:9",
        difficulty: "Extreme" as Difficulty
      }
    ]
  },
  {
    book: "Numbers",
    questions: [
      // --- MODERATE ---
      {
        question: "How many spies did Moses send to explore the land of Canaan?",
        options: ["2", "10", "12", "40"],
        correct: "12",
        reference: "Numbers 13:2",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Which two spies gave a good report and trusted God to give them the land?",
        options: ["Moses and Aaron", "Joshua and Caleb", "Korah and Dathan", "Eldad and Medad"],
        correct: "Joshua and Caleb",
        reference: "Numbers 14:6-9",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What happened to the earth during the rebellion of Korah, Dathan, and Abiram?",
        options: ["It flooded", "It opened up and swallowed them", "It grew thorns and thistles", "Nothing happened"],
        correct: "It opened up and swallowed them",
        reference: "Numbers 16:32",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Why was Moses barred from entering the Promised Land?",
        options: ["He worshipped a golden calf", "He struck the rock twice instead of speaking to it", "He married a Cushite woman", "He was too old"],
        correct: "He struck the rock twice instead of speaking to it",
        reference: "Numbers 20:11-12",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What did God tell Moses to make to heal the people bitten by venomous snakes?",
        options: ["A golden calf", "A bronze serpent", "An altar of stone", "A pool of water"],
        correct: "A bronze serpent",
        reference: "Numbers 21:8-9",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who was the pagan prophet hired by Balak king of Moab to curse Israel?",
        options: ["Balaam", "Balak", "Korah", "Og"],
        correct: "Balaam",
        reference: "Numbers 22:5-6",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What unusual event happened to Balaam on his way to Moab?",
        options: ["His staff turned into a snake", "Fire came down from heaven", "His donkey spoke to him", "He went blind"],
        correct: "His donkey spoke to him",
        reference: "Numbers 22:28",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "How many years were the Israelites condemned to wander in the wilderness because of their unbelief?",
        options: ["7 years", "12 years", "40 years", "70 years"],
        correct: "40 years",
        reference: "Numbers 14:34",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What food did God provide for the Israelites every morning in the wilderness?",
        options: ["Quail", "Manna", "Figs", "Bread"],
        correct: "Manna",
        reference: "Numbers 11:7-9",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What happened to Miriam when she and Aaron criticized Moses?",
        options: ["She was struck dead", "She became mute", "She became leprous", "She was exiled"],
        correct: "She became leprous",
        reference: "Numbers 12:10",
        difficulty: "Moderate" as Difficulty
      },

      // --- HARD ---
      {
        question: "Which special vow involved abstaining from wine, not cutting one's hair, and avoiding dead bodies?",
        options: ["The Levitical vow", "The Nazarite vow", "The vow of Jephthah", "The priestly vow"],
        correct: "The Nazarite vow",
        reference: "Numbers 6:2-6",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Whose rod budded, blossomed, and produced almonds as a sign of God's chosen priesthood?",
        options: ["Moses'", "Aaron's", "Korah's", "Joshua's"],
        correct: "Aaron's",
        reference: "Numbers 17:8",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Who was the grandson of Aaron who stopped a plague by zealously killing an Israelite man and a Midianite woman with a spear?",
        options: ["Eleazar", "Ithamar", "Phinehas", "Nadab"],
        correct: "Phinehas",
        reference: "Numbers 25:7-8",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What specific type of animal was required for the water of purification ceremony to cleanse someone who touched a dead body?",
        options: ["A male goat without blemish", "A red heifer without defect", "A turtledove", "A young lamb"],
        correct: "A red heifer without defect",
        reference: "Numbers 19:2",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Who were the daughters who successfully petitioned Moses for inheritance rights since their father died with no sons?",
        options: ["The daughters of Zelophehad", "The daughters of Jethro", "The daughters of Lot", "The daughters of Aaron"],
        correct: "The daughters of Zelophehad",
        reference: "Numbers 27:1-7",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What were the names of the two giant kings the Israelites defeated before crossing the Jordan?",
        options: ["Sihon and Og", "Balak and Balaam", "Agag and Sisera", "Goliath and Og"],
        correct: "Sihon and Og",
        reference: "Numbers 21:21-35",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "According to Numbers 6, who was instructed to bless the people saying, 'The Lord bless you and keep you...'?",
        options: ["Moses", "Joshua", "Aaron and his sons", "The elders"],
        correct: "Aaron and his sons",
        reference: "Numbers 6:23-24",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What was the specific reason Miriam and Aaron spoke against Moses in Numbers 12?",
        options: ["Because of the Cushite woman he had married", "Because he was hoarding the manna", "Because he refused to appoint them as leaders", "Because he led them the wrong way"],
        correct: "Because of the Cushite woman he had married",
        reference: "Numbers 12:1",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What did the manna taste like according to the description in Numbers 11?",
        options: ["Honey wafers", "Cakes baked with oil", "Bitter herbs", "Plain bread"],
        correct: "Cakes baked with oil",
        reference: "Numbers 11:8",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How many cities total were allotted to the Levites, including the cities of refuge?",
        options: ["12", "24", "48", "70"],
        correct: "48",
        reference: "Numbers 35:7",
        difficulty: "Hard" as Difficulty
      },

      // --- EXTREME ---
      {
        question: "Who were Eldad and Medad?",
        options: ["Two spies who brought a bad report", "Two men who prophesied in the camp when the Spirit rested on the elders", "Sons of Korah who refused to rebel", "Leaders of the tribe of Reuben"],
        correct: "Two men who prophesied in the camp when the Spirit rested on the elders",
        reference: "Numbers 11:26",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the name of the test involving 'bitter water that brings a curse' used to determine if a wife had been unfaithful?",
        options: ["The law of jealousy", "The trial of waters", "The bitter herb test", "The ephah of remembrance"],
        correct: "The law of jealousy",
        reference: "Numbers 5:11-31",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the age range for the Kohathites to serve in the work of the tent of meeting?",
        options: ["20 to 50 years old", "25 to 50 years old", "30 to 50 years old", "From 20 years old and upward"],
        correct: "30 to 50 years old",
        reference: "Numbers 4:3",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who did Moses ask to serve as their 'eyes' (guide) in the wilderness because he knew where to camp?",
        options: ["Jethro", "Hobab", "Caleb", "Raguel"],
        correct: "Hobab",
        reference: "Numbers 10:29-31",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "According to Numbers 31, how did Balaam eventually die?",
        options: ["Old age", "The angel of the Lord struck him", "The Israelites killed him with the sword in battle with Midian", "He fell off his donkey"],
        correct: "The Israelites killed him with the sword in battle with Midian",
        reference: "Numbers 31:8",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "When the Israelites complained about manna, what specific foods from Egypt did they say they missed (Numbers 11:5)?",
        options: ["Fish, cucumbers, melons, leeks, onions, garlic", "Bread, wine, olives, figs", "Meat, cheese, grapes, pomegranates", "Milk and honey"],
        correct: "Fish, cucumbers, melons, leeks, onions, garlic",
        reference: "Numbers 11:5",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the name of the specific place where Moses struck the rock twice?",
        options: ["Massah", "Meribah Kadesh", "Kibroth Hattaavah", "Taberah"],
        correct: "Meribah Kadesh",
        reference: "Numbers 27:14",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Who was the Canaanite king of Arad who attacked Israel in the Negeb and took some captive?",
        options: ["Unspecified by name (The King of Arad)", "Sihon", "Og", "Balak"],
        correct: "Unspecified by name (The King of Arad)",
        reference: "Numbers 21:1",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "While the Gershonites carried the curtains and hangings, and the Merarites carried the frames and posts, what did the Kohathites carry?",
        options: ["The holy things (the ark, table, lampstand, altars)", "The grain offerings", "The personal belongings of Moses", "Nothing, they were guards"],
        correct: "The holy things (the ark, table, lampstand, altars)",
        reference: "Numbers 4:15",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Where was Aaron's rod that budded ordered to be kept?",
        options: ["In the hand of the High Priest", "Before the Testimony (Ark of the Covenant)", "On the altar of incense", "Buried at Mount Hor"],
        correct: "Before the Testimony (Ark of the Covenant)",
        reference: "Numbers 17:10",
        difficulty: "Extreme" as Difficulty
      }
    ]
  },
  {
    book: "Deuteronomy",
    questions: [
      // --- MODERATE ---
      {
        question: "What does the name 'Deuteronomy' mean?",
        options: ["Second Law", "First Words", "In the Wilderness", "Holiness Code"],
        correct: "Second Law",
        reference: "General Introduction",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Where were the Israelites when Moses gave the speeches recorded in Deuteronomy?",
        options: ["Mount Sinai", "The wilderness of Zin", "The plains of Moab", "Egypt"],
        correct: "The plains of Moab",
        reference: "Deuteronomy 1:5",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What is the central command called the 'Shema', found in Deuteronomy 6:4?",
        options: ["You shall not murder", "Hear, O Israel: The Lord our God, the Lord is one", "Remember the Sabbath day", "Be ye holy for I am holy"],
        correct: "Hear, O Israel: The Lord our God, the Lord is one",
        reference: "Deuteronomy 6:4",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Moses told the people that man does not live by bread alone, but by what?",
        options: ["Every word that comes from the mouth of the Lord", "Water and wine", "The fruit of the land", "Faith and works"],
        correct: "Every word that comes from the mouth of the Lord",
        reference: "Deuteronomy 8:3",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Who did God appoint to lead the Israelites into the Promised Land after Moses died?",
        options: ["Caleb", "Aaron", "Joshua", "Phinehas"],
        correct: "Joshua",
        reference: "Deuteronomy 31:3",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Where did God bury Moses?",
        options: ["In the Promised Land", "In Egypt", "On Mount Sinai", "In a valley in the land of Moab, opposite Beth Peor"],
        correct: "In a valley in the land of Moab, opposite Beth Peor",
        reference: "Deuteronomy 34:6",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "What mountain did Moses climb to see the Promised Land before he died?",
        options: ["Mount Nebo (Pisgah)", "Mount Sinai", "Mount Zion", "Mount Hermon"],
        correct: "Mount Nebo (Pisgah)",
        reference: "Deuteronomy 34:1",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "According to Deuteronomy 6:5, how are we to love the Lord our God?",
        options: ["With all our heart, soul, and strength", "With fear and trembling", "Through sacrifices and offerings", "Only on the Sabbath"],
        correct: "With all our heart, soul, and strength",
        reference: "Deuteronomy 6:5",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Moses presented two choices to the Israelites in Deuteronomy 30:19. What were they?",
        options: ["Egypt or Canaan", "Life and death, blessing and curse", "Law and grace", "Wilderness or city"],
        correct: "Life and death, blessing and curse",
        reference: "Deuteronomy 30:19",
        difficulty: "Moderate" as Difficulty
      },
      {
        question: "Why did God tell the Israelites to drive out the Canaanites?",
        options: ["They were too numerous", "To take their gold", "So they would not teach Israel their abominable practices", "Because the land was empty"],
        correct: "So they would not teach Israel their abominable practices",
        reference: "Deuteronomy 20:18",
        difficulty: "Moderate" as Difficulty
      },

      // --- HARD ---
      {
        question: "What was to be done with a stubborn and rebellious son who would not obey his parents?",
        options: ["He was to be exiled", "He was to be stoned to death by the men of the city", "He was to be whipped", "He was to be sold into slavery"],
        correct: "He was to be stoned to death by the men of the city",
        reference: "Deuteronomy 21:18-21",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How often was the law to be read publicly to all the people of Israel?",
        options: ["Every year", "Every Sabbath", "Every seven years during the Feast of Booths", "Whenever a new king was crowned"],
        correct: "Every seven years during the Feast of Booths",
        reference: "Deuteronomy 31:10-11",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "According to Deuteronomy 17, what was a future king of Israel required to write for himself?",
        options: ["A copy of this law on a scroll", "A history of his battles", "A book of proverbs", "A list of his enemies"],
        correct: "A copy of this law on a scroll",
        reference: "Deuteronomy 17:18",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which two mountains were chosen for the pronouncing of blessings and curses?",
        options: ["Mount Sinai and Mount Zion", "Mount Gerizim (blessings) and Mount Ebal (curses)", "Mount Nebo and Mount Pisgah", "Mount Carmel and Mount Hermon"],
        correct: "Mount Gerizim (blessings) and Mount Ebal (curses)",
        reference: "Deuteronomy 11:29",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What test did Moses give to distinguish a true prophet from a false one in Deuteronomy 18?",
        options: ["If he performs miracles", "If he agrees with Moses", "If what he says comes to pass", "If he is from the tribe of Levi"],
        correct: "If what he says comes to pass",
        reference: "Deuteronomy 18:22",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "In Moses' final song, what does he liken God to, describing His protection of Israel?",
        options: ["A roaring lion", "A shepherd carrying a lamb", "An eagle stirring up its nest and catching its young", "A strong tower"],
        correct: "An eagle stirring up its nest and catching its young",
        reference: "Deuteronomy 32:11",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "According to Deuteronomy 24, if a man divorces his wife and she marries another man, can the first husband remarry her if the second husband dies or divorces her?",
        options: ["Yes, it is encouraged", "Only if she has no children", "No, her former husband may not take her again to be his wife", "Only if the priest allows it"],
        correct: "No, her former husband may not take her again to be his wife",
        reference: "Deuteronomy 24:1-4",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "How old was Moses when he died, and what was said about his physical condition?",
        options: ["100 years old, and frail", "110 years old, and blind", "120 years old, his eye was undimmed and his vigor unabated", "130 years old, and unable to walk"],
        correct: "120 years old, his eye was undimmed and his vigor unabated",
        reference: "Deuteronomy 34:7",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "What did God promise to raise up for Israel from among their brothers, like Moses?",
        options: ["A King", "A High Priest", "A Prophet", "A Judge"],
        correct: "A Prophet",
        reference: "Deuteronomy 18:15",
        difficulty: "Hard" as Difficulty
      },
      {
        question: "Which three tribes were assigned territory east of the Jordan River?",
        options: ["Judah, Benjamin, Simeon", "Reuben, Gad, and half the tribe of Manasseh", "Ephraim, Manasseh, Dan", "Levi, Judah, Joseph"],
        correct: "Reuben, Gad, and half the tribe of Manasseh",
        reference: "Deuteronomy 3:12-13",
        difficulty: "Hard" as Difficulty
      },

      // --- EXTREME ---
      {
        question: "In Deuteronomy 23:1, who is specifically excluded from the assembly of the Lord?",
        options: ["A foreigner", "A leper", "A man whose testicles are crushed or whose male organ is cut off", "A man who married a Moabite"],
        correct: "A man whose testicles are crushed or whose male organ is cut off",
        reference: "Deuteronomy 23:1",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What specific type of boundary marker was strictly forbidden to be moved?",
        options: ["A neighbor's landmark", "A city wall", "An altar stone", "A well cover"],
        correct: "A neighbor's landmark",
        reference: "Deuteronomy 19:14",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "In the context of holy war, what trees were the Israelites forbidden to cut down when besieging a city?",
        options: ["Trees used for timber", "Trees that provide shade", "Trees used for food", "Oak trees"],
        correct: "Trees used for food",
        reference: "Deuteronomy 20:19",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "According to Deuteronomy 25, how many blows was a judge allowed to sentence a wicked man to receive, which was not to be exceeded?",
        options: ["Thirty-nine", "Forty", "Fifty", "One hundred"],
        correct: "Forty",
        reference: "Deuteronomy 25:3",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What was the law regarding the 'levirate marriage' involving brothers living together?",
        options: ["Brothers cannot marry the same woman", "If one dies without a son, the surviving brother shall take the widow as his wife to raise up offspring for his brother", "Brothers must share their inheritance equally", "If a brother dies, his widow is free to marry anyone"],
        correct: "If one dies without a son, the surviving brother shall take the widow as his wife to raise up offspring for his brother",
        reference: "Deuteronomy 25:5",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What humiliating act was done to a man who refused to perform the duty of a husband's brother (levirate marriage)?",
        options: ["He was stoned", "He was exiled", "His sister-in-law pulled his sandal off his foot and spat in his face", "His head was shaved"],
        correct: "His sister-in-law pulled his sandal off his foot and spat in his face",
        reference: "Deuteronomy 25:9",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "Which specific people group was Israel told never to seek their peace or prosperity because they hired Balaam to curse Israel?",
        options: ["Egyptians and Edomites", "Ammonites and Moabites", "Philistines and Canaanites", "Midianites and Amalekites"],
        correct: "Ammonites and Moabites",
        reference: "Deuteronomy 23:3-6",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "In Moses' final blessing of the tribes (Deuteronomy 33), which tribe is curiously omitted?",
        options: ["Levi", "Dan", "Simeon", "Benjamin"],
        correct: "Simeon",
        reference: "Deuteronomy 33",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What curse was pronounced upon the man who builds a new house and does not make a parapet (low wall) for his roof?",
        options: ["His house will fall down", "He will have no children", "He brings bloodguilt on his house if anyone falls from it", "He will be banished from the city"],
        correct: "He brings bloodguilt on his house if anyone falls from it",
        reference: "Deuteronomy 22:8",
        difficulty: "Extreme" as Difficulty
      },
      {
        question: "What did God say He buried Moses in a secret place so no one knows?",
        options: ["To prevent idol worship of his tomb", "Because he died alone", "So Satan couldn't get his body", "The text doesn't explicitly say why"],
        correct: "The text doesn't explicitly say why",
        reference: "Deuteronomy 34:6",
        difficulty: "Extreme" as Difficulty
      }
    ]
  },
  {
    book: "Psalms",
    questions: [
        // --- MODERATE ---
        {
          question: "The Lord is my shepherd; I shall not want. Which Psalm is this?",
          options: ["Psalm 23", "Psalm 100", "Psalm 1", "Psalm 51"],
          correct: "Psalm 23",
          reference: "Psalm 23:1",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "Which Psalm is the longest chapter in the Bible?",
          options: ["Psalm 119", "Psalm 117", "Psalm 150", "Psalm 1"],
          correct: "Psalm 119",
          reference: "Psalm 119",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "How does Psalm 1 describe the man who does not walk in the counsel of the wicked?",
          options: ["Like a tree planted by rivers of water", "Like a lion", "Like a city on a hill", "Like a star"],
          correct: "Like a tree planted by rivers of water",
          reference: "Psalm 1:3",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "What should we do when we are afraid, according to Psalm 56?",
          options: ["Run away", "Trust in God", "Fight", "Hide"],
          correct: "Trust in God",
          reference: "Psalm 56:3",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "Finish the verse: 'This is the day the Lord has made...'",
          options: ["We will rejoice and be glad in it", "Let us worship him", "The sun will shine", "Peace be upon you"],
          correct: "We will rejoice and be glad in it",
          reference: "Psalm 118:24",
          difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who wrote the majority of the Psalms?",
            options: ["David", "Solomon", "Moses", "Asaph"],
            correct: "David",
            reference: "General",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "God is our refuge and strength, a very present help in what?",
            options: ["Trouble", "Times of joy", "War", "Famine"],
            correct: "Trouble",
            reference: "Psalm 46:1",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "The heavens declare the glory of whom?",
            options: ["God", "Man", "The Angels", "The King"],
            correct: "God",
            reference: "Psalm 19:1",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Create in me a clean heart, O God. Which Psalm?",
            options: ["Psalm 51", "Psalm 32", "Psalm 23", "Psalm 139"],
            correct: "Psalm 51",
            reference: "Psalm 51:10",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Thy word is a lamp unto my feet and a light unto my what?",
            options: ["Path", "House", "Soul", "Eyes"],
            correct: "Path",
            reference: "Psalm 119:105",
            difficulty: "Moderate" as Difficulty
        },
  
        // --- HARD ---
        {
          question: "Who wrote Psalm 90?",
          options: ["Moses", "David", "Solomon", "Asaph"],
          correct: "Moses",
          reference: "Psalm 90:Title",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "Which Psalm begins with 'My God, my God, why have you forsaken me'?",
          options: ["Psalm 22", "Psalm 23", "Psalm 24", "Psalm 25"],
          correct: "Psalm 22",
          reference: "Psalm 22:1",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "How many sections (based on Hebrew letters) are in Psalm 119?",
          options: ["22", "24", "12", "10"],
          correct: "22",
          reference: "Psalm 119",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "In Psalm 137, where did the captives sit down and weep?",
          options: ["By the rivers of Babylon", "By the walls of Jericho", "By the Nile river", "By the gates of Jerusalem"],
          correct: "By the rivers of Babylon",
          reference: "Psalm 137:1",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "Who is the Chief Musician often mentioned in the Psalm titles?",
          options: ["Jeduthun", "Asaph", "Heman", "It could refer to the director"],
          correct: "It could refer to the director",
          reference: "General",
          difficulty: "Hard" as Difficulty
        },
        {
            question: "According to Psalm 110, the Lord has sworn and will not repent, 'You are a priest forever after the order of...' whom?",
            options: ["Melchizedek", "Aaron", "Levi", "Zadok"],
            correct: "Melchizedek",
            reference: "Psalm 110:4",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Which Psalm says 'The fool says in his heart, There is no God'?",
            options: ["Psalm 14", "Psalm 1", "Psalm 100", "Psalm 150"],
            correct: "Psalm 14",
            reference: "Psalm 14:1",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "In Psalm 51, what herb does David ask to be purged with?",
            options: ["Hyssop", "Myrrh", "Aloes", "Mint"],
            correct: "Hyssop",
            reference: "Psalm 51:7",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Psalm 136 repeats which phrase in every verse?",
            options: ["For his mercy endures forever", "Praise ye the Lord", "Holy is his name", "The Lord is good"],
            correct: "For his mercy endures forever",
            reference: "Psalm 136",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Which Psalm describes the 'valley of the shadow of death'?",
            options: ["Psalm 23", "Psalm 22", "Psalm 27", "Psalm 91"],
            correct: "Psalm 23",
            reference: "Psalm 23:4",
            difficulty: "Hard" as Difficulty
        },
  
        // --- EXTREME ---
        {
          question: "Which Psalm is an acrostic poem about the virtuous woman (though usually associated with Proverbs)? No, which Psalm is an acrostic poem?",
          options: ["Psalm 119", "Psalm 150", "Psalm 90", "Psalm 23"],
          correct: "Psalm 119",
          reference: "Psalm 119",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "What is the shortest Psalm?",
          options: ["Psalm 117", "Psalm 134", "Psalm 131", "Psalm 100"],
          correct: "Psalm 117",
          reference: "Psalm 117",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "Which Psalm title refers to 'The Dove on Far-off Terebinths'?",
          options: ["Psalm 56", "Psalm 55", "Psalm 22", "Psalm 45"],
          correct: "Psalm 56",
          reference: "Psalm 56:Title",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "In Psalm 60, God calls Moab his what?",
          options: ["Washpot", "Scepter", "Helmet", "Footstool"],
          correct: "Washpot",
          reference: "Psalm 60:8",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "Ethan the Ezrahite wrote which Psalm?",
          options: ["Psalm 89", "Psalm 88", "Psalm 90", "Psalm 73"],
          correct: "Psalm 89",
          reference: "Psalm 89:Title",
          difficulty: "Extreme" as Difficulty
        },
        {
            question: "Which Psalm mentions 'Og king of Bashan'?",
            options: ["Psalm 136", "Psalm 1", "Psalm 23", "Psalm 50"],
            correct: "Psalm 136",
            reference: "Psalm 136:20",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Psalm 45 is a song of love dedicated to whom?",
            options: ["The King", "God", "David", "Solomon"],
            correct: "The King",
            reference: "Psalm 45:Title",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "In Psalm 2, who does the Lord laugh at?",
            options: ["The Kings of the earth", "The wicked", "The demons", "The foolish"],
            correct: "The Kings of the earth",
            reference: "Psalm 2:2-4",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "According to Psalm 18, what came out of God's nostrils?",
            options: ["Smoke", "Fire", "Wind", "Light"],
            correct: "Smoke",
            reference: "Psalm 18:8",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Which Psalm contains the verse 'He shall give his angels charge over thee' (quoted by Satan)?",
            options: ["Psalm 91", "Psalm 23", "Psalm 121", "Psalm 46"],
            correct: "Psalm 91",
            reference: "Psalm 91:11",
            difficulty: "Extreme" as Difficulty
        }
      ]
  },
  {
    book: "Matthew",
    questions: [
        // --- MODERATE ---
        {
          question: "Where was Jesus born?",
          options: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"],
          correct: "Bethlehem",
          reference: "Matthew 2:1",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "Who baptized Jesus?",
          options: ["Peter", "John the Baptist", "James", "Paul"],
          correct: "John the Baptist",
          reference: "Matthew 3:13",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "What profession was Matthew before following Jesus?",
          options: ["Fisherman", "Tax Collector", "Carpenter", "Shepherd"],
          correct: "Tax Collector",
          reference: "Matthew 9:9",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "How many days did Jesus fast in the wilderness?",
          options: ["3", "7", "12", "40"],
          correct: "40",
          reference: "Matthew 4:2",
          difficulty: "Moderate" as Difficulty
        },
        {
          question: "Who betrayed Jesus?",
          options: ["Peter", "Judas Iscariot", "Thomas", "Andrew"],
          correct: "Judas Iscariot",
          reference: "Matthew 26:14",
          difficulty: "Moderate" as Difficulty
        },
        {
            question: "What is the first book of the New Testament?",
            options: ["Matthew", "Mark", "Luke", "John"],
            correct: "Matthew",
            reference: "General",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who walked on water with Jesus?",
            options: ["Peter", "James", "John", "Judas"],
            correct: "Peter",
            reference: "Matthew 14:29",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What did Jesus feed the 5000 with?",
            options: ["5 loaves and 2 fish", "7 loaves and a few fish", "Manna", "Bread and wine"],
            correct: "5 loaves and 2 fish",
            reference: "Matthew 14:17",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who denied Jesus three times?",
            options: ["Peter", "Judas", "Thomas", "John"],
            correct: "Peter",
            reference: "Matthew 26:75",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What prayer did Jesus teach his disciples?",
            options: ["The Lord's Prayer", "The Hail Mary", "The Apostles Creed", "The Shema"],
            correct: "The Lord's Prayer",
            reference: "Matthew 6:9",
            difficulty: "Moderate" as Difficulty
        },
  
        // --- HARD ---
        {
          question: "In the genealogy of Jesus, who was the father of Zerubbabel?",
          options: ["Salathiel", "Jechonias", "Abiud", "Eliakim"],
          correct: "Salathiel",
          reference: "Matthew 1:12",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "Which high priest tore his clothes and accused Jesus of blasphemy?",
          options: ["Annas", "Caiaphas", "Pilate", "Herod"],
          correct: "Caiaphas",
          reference: "Matthew 26:65",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "What was the name of the man compelled to carry Jesus' cross?",
          options: ["Simon of Cyrene", "Joseph of Arimathea", "Nicodemus", "Simon Peter"],
          correct: "Simon of Cyrene",
          reference: "Matthew 27:32",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "Who asked for the head of John the Baptist?",
          options: ["Herodias' daughter", "Herodias", "Salome", "Herod"],
          correct: "Herodias' daughter",
          reference: "Matthew 14:8",
          difficulty: "Hard" as Difficulty
        },
        {
          question: "How many baskets of fragments remained after feeding the 4000?",
          options: ["12", "7", "5", "3"],
          correct: "7",
          reference: "Matthew 15:37",
          difficulty: "Hard" as Difficulty
        },
        {
            question: "Which disciple was known as the 'Cananaean'?",
            options: ["Simon", "Judas", "James", "Matthew"],
            correct: "Simon",
            reference: "Matthew 10:4",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What does 'Emmanuel' mean?",
            options: ["God with us", "God saves", "The Anointed One", "Peace be with you"],
            correct: "God with us",
            reference: "Matthew 1:23",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Who are the two sons of Zebedee?",
            options: ["James and John", "Peter and Andrew", "Philip and Bartholomew", "Thomas and Matthew"],
            correct: "James and John",
            reference: "Matthew 4:21",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What did the centurion say when Jesus died?",
            options: ["Truly this was the Son of God", "He was innocent", "Forgive them", "It is finished"],
            correct: "Truly this was the Son of God",
            reference: "Matthew 27:54",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Where did the devil take Jesus for the second temptation (in Matthew's order)?",
            options: ["The pinnacle of the temple", "A high mountain", "The wilderness", "The sea"],
            correct: "The pinnacle of the temple",
            reference: "Matthew 4:5",
            difficulty: "Hard" as Difficulty
        },
  
        // --- EXTREME ---
        {
          question: "According to Matthew, what specific sign will appear in heaven before the Son of Man comes?",
          options: ["The sign of the Son of Man", "A darkened sun", "Falling stars", "A great trumpet"],
          correct: "The sign of the Son of Man",
          reference: "Matthew 24:30",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "Who was the father of Zecharias, whom Jesus said was slain between the temple and the altar?",
          options: ["Barachias", "Jehoiada", "Berechiah", "Iddo"],
          correct: "Barachias",
          reference: "Matthew 23:35",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "What was the value of the field purchased with Judas's blood money?",
          options: ["30 pieces of silver", "Potter's price", "Unknown", "Price of a slave"],
          correct: "30 pieces of silver",
          reference: "Matthew 27:3-7",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "Which woman is NOT mentioned in the genealogy of Jesus in Matthew?",
          options: ["Sarah", "Tamar", "Rahab", "Ruth"],
          correct: "Sarah",
          reference: "Matthew 1",
          difficulty: "Extreme" as Difficulty
        },
        {
          question: "In the Parable of the Weeds, who are the reapers?",
          options: ["The Angels", "The Apostles", "The Prophets", "The Saints"],
          correct: "The Angels",
          reference: "Matthew 13:39",
          difficulty: "Extreme" as Difficulty
        },
        {
            question: "What is the Hebrew name for the 'Place of a Skull'?",
            options: ["Golgotha", "Gabbatha", "Aceldama", "Armageddon"],
            correct: "Golgotha",
            reference: "Matthew 27:33",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "How much did the unforgiving servant owe his master?",
            options: ["10,000 talents", "100 denarii", "500 pence", "1 talent"],
            correct: "10,000 talents",
            reference: "Matthew 18:24",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Which prophet spoke of the slaughter of the innocents in Rama?",
            options: ["Jeremiah", "Isaiah", "Micah", "Hosea"],
            correct: "Jeremiah",
            reference: "Matthew 2:17",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What time did the darkness over the land begin during the crucifixion?",
            options: ["Sixth hour", "Third hour", "Ninth hour", "First hour"],
            correct: "Sixth hour",
            reference: "Matthew 27:45",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Who requested to sit at Jesus' right and left hand in his kingdom?",
            options: ["The mother of Zebedee's children", "Peter and Andrew", "Mary Magdalene", "Judas"],
            correct: "The mother of Zebedee's children",
            reference: "Matthew 20:20",
            difficulty: "Extreme" as Difficulty
        }
      ]
  },
  {
    book: "Acts",
    questions: [
        // --- MODERATE ---
        {
            question: "Who wrote the book of Acts?",
            options: ["Luke", "Paul", "Peter", "John"],
            correct: "Luke",
            reference: "General",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "On which day did the Holy Spirit descend upon the apostles?",
            options: ["Pentecost", "Passover", "Sabbath", "Day of Atonement"],
            correct: "Pentecost",
            reference: "Acts 2:1",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who was the first Christian martyr?",
            options: ["Stephen", "James", "Peter", "Paul"],
            correct: "Stephen",
            reference: "Acts 7:59",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who was converted on the road to Damascus?",
            options: ["Saul (Paul)", "Peter", "Barnabas", "Philip"],
            correct: "Saul (Paul)",
            reference: "Acts 9:3",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What was the name of the centurion who sent for Peter?",
            options: ["Cornelius", "Julius", "Augustus", "Publius"],
            correct: "Cornelius",
            reference: "Acts 10:1",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who went on the first missionary journey with Paul?",
            options: ["Barnabas", "Silas", "Timothy", "Luke"],
            correct: "Barnabas",
            reference: "Acts 13:2",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What happened to Paul and Silas in the Philippian jail?",
            options: ["An earthquake freed them", "They were executed", "An angel released them", "They escaped"],
            correct: "An earthquake freed them",
            reference: "Acts 16:26",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What was the name of the couple who lied to the Holy Spirit?",
            options: ["Ananias and Sapphira", "Aquila and Priscilla", "Adam and Eve", "Abraham and Sarah"],
            correct: "Ananias and Sapphira",
            reference: "Acts 5:1",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who healed the lame man at the Beautiful Gate?",
            options: ["Peter and John", "Paul and Barnabas", "Philip", "Stephen"],
            correct: "Peter and John",
            reference: "Acts 3:1-6",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "In which city were the disciples first called Christians?",
            options: ["Antioch", "Jerusalem", "Rome", "Ephesus"],
            correct: "Antioch",
            reference: "Acts 11:26",
            difficulty: "Moderate" as Difficulty
        },

        // --- HARD ---
        {
            question: "Who replaced Judas Iscariot as the twelfth apostle?",
            options: ["Matthias", "Barnabas", "Paul", "Silas"],
            correct: "Matthias",
            reference: "Acts 1:26",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What was the name of the street where Saul stayed in Damascus?",
            options: ["Straight", "Broad", "Narrow", "Main"],
            correct: "Straight",
            reference: "Acts 9:11",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Who fell out of a window while Paul was preaching?",
            options: ["Eutychus", "Tychicus", "Trophimus", "Aristarchus"],
            correct: "Eutychus",
            reference: "Acts 20:9",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What was the name of the sorcerer who opposed Paul in Cyprus?",
            options: ["Elymas", "Simon Magus", "Demetrius", "Sceva"],
            correct: "Elymas",
            reference: "Acts 13:8",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Who was the seller of purple from Thyatira?",
            options: ["Lydia", "Priscilla", "Phoebe", "Dorcas"],
            correct: "Lydia",
            reference: "Acts 16:14",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Which goddess was worshipped in Ephesus?",
            options: ["Diana (Artemis)", "Aphrodite", "Athena", "Hera"],
            correct: "Diana (Artemis)",
            reference: "Acts 19:24",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What was the name of the high priest who commanded Paul to be struck?",
            options: ["Ananias", "Caiaphas", "Annas", "Alexander"],
            correct: "Ananias",
            reference: "Acts 23:2",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "On which island was Paul shipwrecked?",
            options: ["Melita (Malta)", "Crete", "Cyprus", "Rhodes"],
            correct: "Melita (Malta)",
            reference: "Acts 28:1",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Who was the silversmith who caused a riot in Ephesus?",
            options: ["Demetrius", "Alexander", "Gaius", "Aristarchus"],
            correct: "Demetrius",
            reference: "Acts 19:24",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "To whom is the book of Acts addressed?",
            options: ["Theophilus", "Timothy", "Titus", "Philemon"],
            correct: "Theophilus",
            reference: "Acts 1:1",
            difficulty: "Hard" as Difficulty
        },

        // --- EXTREME ---
        {
            question: "What was the name of the paralytic healed by Peter at Lydda?",
            options: ["Aeneas", "Tabitha", "Simon", "Cornelius"],
            correct: "Aeneas",
            reference: "Acts 9:33",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Who was the proconsul of Achaia when Paul was in Corinth?",
            options: ["Gallio", "Festus", "Felix", "Sergius Paulus"],
            correct: "Gallio",
            reference: "Acts 18:12",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What was the name of the prophet who bound Paul's hands and feet?",
            options: ["Agabus", "Barnabas", "Silas", "Philip"],
            correct: "Agabus",
            reference: "Acts 21:10-11",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Who were the seven sons of Sceva?",
            options: ["Jewish exorcists", "Roman soldiers", "Greek philosophers", "Disciples"],
            correct: "Jewish exorcists",
            reference: "Acts 19:14",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "In Athens, Paul debated with which two groups of philosophers?",
            options: ["Epicureans and Stoics", "Platonists and Aristotelians", "Sophists and Cynics", "Gnostics and Zealots"],
            correct: "Epicureans and Stoics",
            reference: "Acts 17:18",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What was the name of the Roman orator who accused Paul before Felix?",
            options: ["Tertullus", "Lysias", "Festus", "Agrippa"],
            correct: "Tertullus",
            reference: "Acts 24:1",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "How many men took an oath not to eat or drink until they killed Paul?",
            options: ["More than 40", "12", "7", "100"],
            correct: "More than 40",
            reference: "Acts 23:13",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What was the name of the slave girl who had a spirit of divination?",
            options: ["She is unnamed", "Lydia", "Rhoda", "Julia"],
            correct: "She is unnamed",
            reference: "Acts 16:16",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Who was the 'town clerk' who quieted the crowd in Ephesus?",
            options: ["Unnamed", "Demetrius", "Gaius", "Alexander"],
            correct: "Unnamed",
            reference: "Acts 19:35",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What island did Paul sail under the lee of, with difficulty?",
            options: ["Cnidus (passing Crete)", "Cyprus", "Sicily", "Samos"],
            correct: "Cnidus (passing Crete)",
            reference: "Acts 27:7",
            difficulty: "Extreme" as Difficulty
        }
    ]
  },
  {
    book: "Revelation",
    questions: [
        // --- MODERATE ---
        {
            question: "Who wrote the book of Revelation?",
            options: ["John", "Peter", "Paul", "James"],
            correct: "John",
            reference: "Revelation 1:1",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Where was John when he received the vision?",
            options: ["Patmos", "Ephesus", "Rome", "Jerusalem"],
            correct: "Patmos",
            reference: "Revelation 1:9",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "How many churches of Asia are addressed in Revelation?",
            options: ["7", "3", "12", "10"],
            correct: "7",
            reference: "Revelation 1:11",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What is the number of the beast?",
            options: ["666", "777", "144", "1000"],
            correct: "666",
            reference: "Revelation 13:18",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What animal represents Jesus in Revelation?",
            options: ["The Lamb", "The Dove", "The Eagle", "The Ox"],
            correct: "The Lamb",
            reference: "Revelation 5:6",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What color is the horse of the final rider (Death)?",
            options: ["Pale", "White", "Red", "Black"],
            correct: "Pale",
            reference: "Revelation 6:8",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "Who is the Alpha and the Omega?",
            options: ["The Lord God", "Gabriel", "Michael", "The Beast"],
            correct: "The Lord God",
            reference: "Revelation 1:8",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "How many elders sat around the throne?",
            options: ["24", "12", "7", "4"],
            correct: "24",
            reference: "Revelation 4:4",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What city comes down from heaven as a bride adorned for her husband?",
            options: ["New Jerusalem", "Babylon", "Zion", "Eden"],
            correct: "New Jerusalem",
            reference: "Revelation 21:2",
            difficulty: "Moderate" as Difficulty
        },
        {
            question: "What will be no more in the new heaven and earth?",
            options: ["Tears, death, sorrow, crying, pain", "Work", "Animals", "Stars"],
            correct: "Tears, death, sorrow, crying, pain",
            reference: "Revelation 21:4",
            difficulty: "Moderate" as Difficulty
        },

        // --- HARD ---
        {
            question: "Which church is known as the 'lukewarm' church?",
            options: ["Laodicea", "Ephesus", "Sardis", "Philadelphia"],
            correct: "Laodicea",
            reference: "Revelation 3:16",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What did John eat that was sweet in his mouth but bitter in his stomach?",
            options: ["A little scroll", "Manna", "A fig", "A honey comb"],
            correct: "A little scroll",
            reference: "Revelation 10:10",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Who is the 'accuser of our brethren'?",
            options: ["Satan", "The Beast", "The False Prophet", "Abaddon"],
            correct: "Satan",
            reference: "Revelation 12:10",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "How long is the reign of Christ on earth (the Millennium)?",
            options: ["1000 years", "7 years", "3.5 years", "Forever"],
            correct: "1000 years",
            reference: "Revelation 20:4",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What are the two olive trees and the two lampstands?",
            options: ["The two witnesses", "The Old and New Testament", "Moses and Elijah", "Peter and Paul"],
            correct: "The two witnesses",
            reference: "Revelation 11:4",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "To which church did Jesus say 'I have set before you an open door'?",
            options: ["Philadelphia", "Smyrna", "Pergamum", "Thyatira"],
            correct: "Philadelphia",
            reference: "Revelation 3:8",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What is the name of the star that fell on the rivers and springs?",
            options: ["Wormwood", "Morning Star", "Abaddon", "Gog"],
            correct: "Wormwood",
            reference: "Revelation 8:11",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "How many sealed servants of God were from the tribes of Israel?",
            options: ["144,000", "12,000", "10,000", "Innumerable"],
            correct: "144,000",
            reference: "Revelation 7:4",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "Who fights against the dragon and his angels?",
            options: ["Michael", "Gabriel", "Uriel", "Raphael"],
            correct: "Michael",
            reference: "Revelation 12:7",
            difficulty: "Hard" as Difficulty
        },
        {
            question: "What happens when the seventh seal is opened?",
            options: ["Silence in heaven", "Earthquake", "Hail and fire", "Darkness"],
            correct: "Silence in heaven",
            reference: "Revelation 8:1",
            difficulty: "Hard" as Difficulty
        },

        // --- EXTREME ---
        {
            question: "What is the name of the angel of the bottomless pit in Hebrew?",
            options: ["Abaddon", "Apollyon", "Beelzebub", "Belial"],
            correct: "Abaddon",
            reference: "Revelation 9:11",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Which tribe is omitted from the list of the 144,000 in Revelation 7?",
            options: ["Dan", "Levi", "Joseph", "Benjamin"],
            correct: "Dan",
            reference: "Revelation 7",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What was the weight of the hailstones that fell during the seventh plague?",
            options: ["A talent", "A shekel", "A pound", "A stone"],
            correct: "A talent",
            reference: "Revelation 16:21",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "The 6th angel poured out his bowl on which river?",
            options: ["Euphrates", "Nile", "Jordan", "Tigris"],
            correct: "Euphrates",
            reference: "Revelation 16:12",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "How many gates does the New Jerusalem have?",
            options: ["12", "7", "3", "1"],
            correct: "12",
            reference: "Revelation 21:12",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What stone was the fourth foundation of the New Jerusalem?",
            options: ["Emerald", "Jasper", "Sapphire", "Chalcedony"],
            correct: "Emerald",
            reference: "Revelation 21:19",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "Who is the woman sitting on a scarlet beast?",
            options: ["Babylon the Great", "Jezebel", "The Bride", "The Garlot"],
            correct: "Babylon the Great",
            reference: "Revelation 17:5",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "What happened to the sun when the fourth angel poured out his bowl?",
            options: ["It scorched men with fire", "It turned black", "It fell", "It turned to blood"],
            correct: "It scorched men with fire",
            reference: "Revelation 16:8",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "In the vision of the throne, the sea of glass was like what?",
            options: ["Crystal", "Gold", "Jasper", "Ice"],
            correct: "Crystal",
            reference: "Revelation 4:6",
            difficulty: "Extreme" as Difficulty
        },
        {
            question: "To which church did Jesus introduce Himself as 'He that hath the seven Spirits of God'?",
            options: ["Sardis", "Ephesus", "Smyrna", "Thyatira"],
            correct: "Sardis",
            reference: "Revelation 3:1",
            difficulty: "Extreme" as Difficulty
        }
    ]
  }
];