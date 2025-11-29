import { Question, Difficulty } from '../types';

const createSampleQuestions = (book: string) => [
  {
    question: `Who is a central figure in the book of ${book}?`,
    options: ["David", "Jesus", "Moses", "Paul"], // Generic options for template, strictly placeholders
    correct: "Jesus", // Placeholder
    reference: `${book} 1:1`,
    difficulty: "Moderate" as Difficulty
  },
  {
    question: `What is a key theme of ${book}?`,
    options: ["Judgment", "Redemption", "Creation", "Exile"],
    correct: "Redemption",
    reference: `${book} 2:1`,
    difficulty: "Hard" as Difficulty
  },
  {
    question: `Which historical event is recorded in ${book}?`,
    options: ["The Flood", "The Exodus", "The Crucifixion", "The Exile"],
    correct: "The Exile",
    reference: `${book} 3:1`,
    difficulty: "Extreme" as Difficulty
  }
];

// Helper to generate distinct questions for missing books to ensure playability
const getBookData = (book: string) => {
    // We will replace these with specific questions below where possible, 
    // but this ensures NO book crashes the app.
    return {
        book,
        questions: [
            {
                question: `In the book of ${book}, what is the primary lesson regarding faith?`,
                options: ["Obedience brings blessing", "Wealth is guaranteed", "Suffering is eternal", "Law supersedes Grace"],
                correct: "Obedience brings blessing",
                reference: `${book} 1`,
                difficulty: "Moderate" as Difficulty
            },
            {
                question: `Who is the author or main speaker in ${book}?`,
                options: ["God/Prophet", "Pharaoh", "Caesar", "Herod"],
                correct: "God/Prophet",
                reference: `${book} 1:1`,
                difficulty: "Hard" as Difficulty
            },
            {
                question: `What specific theology is unique to ${book}?`,
                options: ["Covenant faithfulness", "Gnostic duality", "Platonic forms", "Nihilism"],
                correct: "Covenant faithfulness",
                reference: `${book} Summary`,
                difficulty: "Extreme" as Difficulty
            }
        ]
    };
};

export const STATIC_BIBLE_DATA = [
  // --- LAW ---
 {
    "book": "Genesis",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What does the name of the book, Genesis, mean?",
            "options": ["The New Beginning", "Origin (or Beginning)", "The Law of God", "The First Covenant"],
            "correct": "Origin (or Beginning)",
            "reference": "Context of Genesis 1:1 and Greek etymology",
            "difficulty": "Moderate"
        },
        {
            "question": "On what day of the Creation process did God create humankind?",
            "options": ["First", "Third", "Fifth", "Sixth"],
            "correct": "Sixth",
            "reference": "Genesis 1:26-31",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the son of Adam and Eve who was given to replace Abel after Cain murdered him?",
            "options": ["Enoch", "Seth", "Lamech", "Noah"],
            "correct": "Seth",
            "reference": "Genesis 4:25",
            "difficulty": "Moderate"
        },
        {
            "question": "How many days and nights did it rain when Noah and his family were on the Ark?",
            "options": ["7 days and 7 nights", "40 days and 40 nights", "150 days and 150 nights", "One year and ten days"],
            "correct": "40 days and 40 nights",
            "reference": "Genesis 7:12",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the sign of the covenant that God made with Noah, promising never again to destroy all life on earth with a flood?",
            "options": ["A dove and an olive branch", "The rainbow", "A new altar", "A cloud by day and fire by night"],
            "correct": "The rainbow",
            "reference": "Genesis 9:12-17",
            "difficulty": "Moderate"
        },
        {
            "question": "What action did the people at Babel attempt that angered God, leading Him to confuse their language?",
            "options": ["Building a golden idol", "Building a massive tower and city to make a name for themselves and avoid dispersion", "Fighting one another", "Returning to idolatry"],
            "correct": "Building a massive tower and city to make a name for themselves and avoid dispersion",
            "reference": "Genesis 11:4-9",
            "difficulty": "Moderate"
        },
        {
            "question": "At what age did God call Abraham (Abram) and tell him to leave his country for a land God would show him?",
            "options": ["50 years old", "75 years old", "99 years old", "100 years old"],
            "correct": "75 years old",
            "reference": "Genesis 12:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the initial name of Abraham's wife?",
            "options": ["Rebekah", "Hagar", "Sarah (Sarai)", "Leah"],
            "correct": "Sarah (Sarai)",
            "reference": "Genesis 17:15",
            "difficulty": "Moderate"
        },
        {
            "question": "What physical mark was given to Abraham and his male descendants as the sign of God's covenant with them?",
            "options": ["A distinct mark on the forehead", "A special garment", "Circumcision", "A blessing upon the doorposts"],
            "correct": "Circumcision",
            "reference": "Genesis 17:10-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What did Jacob give to his son Joseph that made his brothers jealous?",
            "options": ["A large amount of money", "The birthright blessing", "A coat of many colors (or 'a long robe with sleeves')", "A favorite staff"],
            "correct": "A coat of many colors (or 'a long robe with sleeves')",
            "reference": "Genesis 37:3",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What two rivers flowed out of the Garden of Eden besides the Pishon and Gihon?",
            "options": ["Tigris and Nile", "Euphrates and Jordan", "Tigris and Euphrates", "Nile and Euphrates"],
            "correct": "Tigris and Euphrates",
            "reference": "Genesis 2:10-14",
            "difficulty": "Hard"
        },
        {
            "question": "What was the fate of the man who lived the longest recorded life in the Bible?",
            "options": ["He was taken up by God without dying", "He was consumed by fire", "He died a natural death at 969 years old (Methuselah)", "He perished in the flood"],
            "correct": "He died a natural death at 969 years old (Methuselah)",
            "reference": "Genesis 5:27",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Jacob receive from Esau in exchange for a bowl of stew?",
            "options": ["His inheritance", "His portion of the land", "His birthright", "His blessing"],
            "correct": "His birthright",
            "reference": "Genesis 25:31-34",
            "difficulty": "Hard"
        },
        {
            "question": "What new name did God give Jacob after he wrestled with an Angel (or God) at the river Jabbok?",
            "options": ["Abraham", "Israel", "Shem", "Edom"],
            "correct": "Israel",
            "reference": "Genesis 32:28",
            "difficulty": "Hard"
        },
        {
            "question": "What reason did Onan, the son of Judah, give for spilling his seed on the ground when fulfilling his brother's duty with Tamar?",
            "options": ["He did not love Tamar", "He did not want to bear children for his deceased brother", "He was sterile", "He was commanded by God to do so"],
            "correct": "He did not want to bear children for his deceased brother",
            "reference": "Genesis 38:9",
            "difficulty": "Hard"
        },
        {
            "question": "In what specific Egyptian governmental position did Joseph serve under Pharaoh?",
            "options": ["Chief Tax Collector", "Royal Scribe", "Governor/Vizier (second-in-command to Pharaoh)", "Commander of the Army"],
            "correct": "Governor/Vizier (second-in-command to Pharaoh)",
            "reference": "Genesis 41:40-43",
            "difficulty": "Hard"
        },
        {
            "question": "Who was the mother of Benjamin, Jacob's last son?",
            "options": ["Leah", "Bilhah", "Zilpah", "Rachel"],
            "correct": "Rachel",
            "reference": "Genesis 35:16-18",
            "difficulty": "Hard"
        },
        {
            "question": "What three major patriarchs of Israel are recorded as having lied about their wives being their sisters to protect themselves in foreign lands?",
            "options": ["Abraham, Isaac, and Jacob", "Noah, Abraham, and Isaac", "Abraham, Lot, and Isaac", "Shem, Ham, and Japheth"],
            "correct": "Abraham, Isaac, and Jacob (Abraham twice, Isaac once)",
            "reference": "Genesis 12:10-20 (Abram), 20:1-18 (Abraham), 26:6-11 (Isaac)",
            "difficulty": "Hard"
        },
        {
            "question": "What did the chief butler and chief baker of Pharaoh, who were imprisoned with Joseph, have dreams about?",
            "options": ["The flood and the future famine", "Vines, baskets, and birds", "The death of the Pharaoh", "Seven fat and scrawny cows"],
            "correct": "Vines, baskets, and birds (Butler: vine; Baker: baskets of bread)",
            "reference": "Genesis 40:9-17",
            "difficulty": "Hard"
        },
        {
            "question": "In Jacob's final blessing, he prophesied that which of his sons would be the royal tribe (the Lawgiver, or 'scepter') until Shiloh (Messiah) comes?",
            "options": ["Reuben", "Joseph", "Judah", "Levi"],
            "correct": "Judah",
            "reference": "Genesis 49:10",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "God created man in His image, giving them dominion over the earth. What two specific, uncreated lights did God create on the fourth day to rule the day and night?",
            "options": ["The greater light (sun) to rule the day, and the lesser light (moon) to rule the night", "The light and the darkness", "The stars and the planets", "The sun and the stars"],
            "correct": "The greater light (sun) to rule the day, and the lesser light (moon) to rule the night",
            "reference": "Genesis 1:16",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the prince of Shechem who raped Dinah, Jacob and Leah's daughter?",
            "options": ["Hamor", "Canaan", "Midian", "Shechem"],
            "correct": "Shechem",
            "reference": "Genesis 34:2",
            "difficulty": "Extreme"
        },
        {
            "question": "Before Joseph was sold into slavery, what two distinct actions did his brothers initially plan to do with him?",
            "options": ["Kill him and burn his coat", "Kill him and throw him into a pit", "Kill him and leave him to starve", "Throw him into a pit and leave him to starve (The plan was changed to selling him)",],
            "correct": "Kill him and throw him into a pit",
            "reference": "Genesis 37:20, 24",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did Jacob leave behind when he fled from the Angel (or God) who wrestled with him at Jabbok, causing him to walk with a limp?",
            "options": ["A ring", "A staff", "His thigh was put out of joint (or 'the hollow of his thigh was touched')", "His coat"],
            "correct": "His thigh was put out of joint (or 'the hollow of his thigh was touched')",
            "reference": "Genesis 32:25",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who, according to Genesis 5, walked with God and was 'taken' by God without experiencing death?",
            "options": ["Cain", "Enoch", "Methuselah", "Noah"],
            "correct": "Enoch",
            "reference": "Genesis 5:24",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific material used to construct the Tower of Babel?",
            "options": ["Stones and mortar", "Mud and straw", "Bricks and slime (asphalt)", "Bricks and mortar"],
            "correct": "Bricks and slime (asphalt)",
            "reference": "Genesis 11:3",
            "difficulty": "Extreme"
        },
        {
            "question": "Which of Noah's sons was the ancestor of the Canaanites, whose descendants would eventually inhabit the Promised Land?",
            "options": ["Shem", "Japheth", "Ham", "Cush"],
            "correct": "Ham",
            "reference": "Genesis 9:22, 25: 10:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase God used to describe the man's labor after the Fall, indicating the difficulty he would face in farming?",
            "options": ["You will always be poor", "You will earn your bread by the sweat of your face", "The ground is cursed for your sake", "You will never find peace"],
            "correct": "The ground is cursed for your sake (with thorns and thistles, and you will earn your bread by the sweat of your face)",
            "reference": "Genesis 3:17-19",
            "difficulty": "Extreme"
        },
        {
            "question": "When Isaac was blessed by Abimelech, he sowed in the land and reaped what measure of grain in the same year?",
            "options": ["Tenfold", "Sixtyfold", "A hundredfold", "Thirtyfold"],
            "correct": "A hundredfold",
            "reference": "Genesis 26:12",
            "difficulty": "Extreme"
        },
        {
            "question": "The Lord told Abraham that his descendants would be enslaved in a foreign land for what specific duration of time?",
            "options": ["40 years", "70 years", "400 years", "430 years"],
            "correct": "400 years",
            "reference": "Genesis 15:13",
            "difficulty": "Extreme"
        }
    ]
}

 {
    "book": "Exodus",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What does the name of the book, Exodus, mean?",
            "options": ["The New Law", "The Journey", "Going Out (or 'Departure')", "The Great Deliverance"],
            "correct": "Going Out (or 'Departure')",
            "reference": "Context of Exodus 12:42 and Greek etymology",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the sister of Moses who helped watch over him as a baby?",
            "options": ["Zipporah", "Miriam", "Jochebed", "Leah"],
            "correct": "Miriam",
            "reference": "Exodus 2:4",
            "difficulty": "Moderate"
        },
        {
            "question": "In the wilderness, where did God first speak to Moses, commanding him to lead the Israelites out of slavery?",
            "options": ["At the base of Mount Sinai", "From a burning bush", "In a dream", "By the Red Sea"],
            "correct": "From a burning bush",
            "reference": "Exodus 3:2-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What two miracles did God give Moses to perform to convince the Israelites that he was sent by God?",
            "options": ["Turning water to blood and healing the sick", "Turning a staff into a serpent and making his hand leprous", "Calling down fire and causing an earthquake", "Parting the Red Sea and bringing forth water from a rock"],
            "correct": "Turning a staff into a serpent and making his hand leprous",
            "reference": "Exodus 4:1-9",
            "difficulty": "Moderate"
        },
        {
            "question": "When Pharaoh refused to let the people go, God sent ten plagues. Which plague finally convinced Pharaoh to release the Israelites?",
            "options": ["Plague of flies", "Plague of darkness", "Death of the firstborn", "Plague of hail"],
            "correct": "Death of the firstborn",
            "reference": "Exodus 12:29-32",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific annual Jewish feast was instituted to commemorate the night the Israelites were spared from the final plague?",
            "options": ["Feast of Tabernacles", "Passover (or 'Feast of Unleavened Bread')", "Yom Kippur", "Feast of Weeks"],
            "correct": "Passover (or 'Feast of Unleavened Bread')",
            "reference": "Exodus 12:1-27",
            "difficulty": "Moderate"
        },
        {
            "question": "What body of water did Moses part, allowing the Israelites to cross on dry ground and drowning the pursuing Egyptian army?",
            "options": ["The Nile River", "The Jordan River", "The Red Sea (or 'Sea of Reeds')", "The Mediterranean Sea"],
            "correct": "The Red Sea (or 'Sea of Reeds')",
            "reference": "Exodus 14:21-31",
            "difficulty": "Moderate"
        },
        {
            "question": "What daily provision did God provide for the Israelites in the wilderness, described as a small, white, flaky substance?",
            "options": ["Quail", "Bread from heaven (Manna)", "Dates and figs", "Honey from the rock"],
            "correct": "Bread from heaven (Manna)",
            "reference": "Exodus 16:14-15",
            "difficulty": "Moderate"
        },
        {
            "question": "Where did God give Moses the Ten Commandments to govern the people of Israel?",
            "options": ["Mount Horeb (Sinai)", "The Plains of Moab", "The Wilderness of Zin", "The Tabernacle"],
            "correct": "Mount Horeb (Sinai)",
            "reference": "Exodus 19:20; 20:1-17",
            "difficulty": "Moderate"
        },
        {
            "question": "What structure did God command the Israelites to build as a portable sanctuary, representing His dwelling place among them?",
            "options": ["The Ark of the Covenant", "The Temple", "The Tabernacle", "The Altar of Incense"],
            "correct": "The Tabernacle",
            "reference": "Exodus 25:8-9",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of the Egyptian region where the Israelites lived and where they were protected from most of the plagues?",
            "options": ["Memphis", "Cairo", "Pithom", "Goshen"],
            "correct": "Goshen",
            "reference": "Exodus 8:22; 9:26",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of Moses's father-in-law, who was also the priest of Midian?",
            "options": ["Aaron", "Hur", "Jethro (or Reuel)", "Caleb"],
            "correct": "Jethro (or Reuel)",
            "reference": "Exodus 3:1; 18:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific instruction did God give concerning the manna on the sixth day?",
            "options": ["To collect a double portion because the seventh day would be the Sabbath and they were not to collect any", "To eat it immediately, as it would spoil quickly", "To share it with the Egyptians", "To offer a portion as a sacrifice"],
            "correct": "To collect a double portion because the seventh day would be the Sabbath and they were not to collect any",
            "reference": "Exodus 16:22-26",
            "difficulty": "Hard"
        },
        {
            "question": "What two men went up with Moses onto Mount Sinai to receive the Law and the Covenant?",
            "options": ["Aaron and Hur", "Joshua and Caleb", "Aaron and Joshua", "Nadab and Abihu"],
            "correct": "Aaron and Joshua",
            "reference": "Exodus 24:1, 13-14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did God command the Israelites to put inside the Ark of the Covenant, besides the tablets of the Testimony?",
            "options": ["Aaron's rod that budded and a jar of manna", "Moses's staff and the manna", "The Book of the Law", "A piece of the golden calf"],
            "correct": "Aaron's rod that budded and a jar of manna",
            "reference": "Exodus 16:33-34; Hebrews 9:4 (Exodus commands the jar be *laid up* before the Testimony)",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the son of Moses and Zipporah?",
            "options": ["Eleazar", "Nadab", "Gershom (and Eliezer)", "Phinehas"],
            "correct": "Gershom (and Eliezer)",
            "reference": "Exodus 2:22; 18:4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did Moses perform to save the Israelites at Rephidim from the attack of the Amalekites?",
            "options": ["He fought with a sword", "He prayed with his hands held up, supported by Aaron and Hur", "He built an altar to the Lord", "He called down fire from heaven"],
            "correct": "He prayed with his hands held up, supported by Aaron and Hur",
            "reference": "Exodus 17:8-13",
            "difficulty": "Hard"
        },
        {
            "question": "The Law stated that a Hebrew slave could only serve for a maximum of how many years?",
            "options": ["Three years", "Seven years", "Forty years", "Forever"],
            "correct": "Seven years (serves six years, free in the seventh)",
            "reference": "Exodus 21:2",
            "difficulty": "Hard"
        },
        {
            "question": "What material did Aaron use to fashion the golden calf while Moses was on Mount Sinai?",
            "options": ["Gold dust from the manna", "The gold rings from the people's ears", "Gold from the melted Ark", "The gold taken from the Egyptians"],
            "correct": "The gold rings from the people's ears",
            "reference": "Exodus 32:2-4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific structure or covering did the glory of the Lord (Cloud) fill, demonstrating God's acceptance of the finished sanctuary?",
            "options": ["The Tent of Meeting (or Tabernacle)", "The Holy of Holies", "Mount Sinai", "The Altar of Burnt Offering"],
            "correct": "The Tent of Meeting (or Tabernacle)",
            "reference": "Exodus 40:34-35",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the Ten Commandments, what specific penalty was decreed for anyone who struck or cursed his father or mother?",
            "options": ["Exile from the camp", "A monetary fine", "Death", "Forty lashes"],
            "correct": "Death",
            "reference": "Exodus 21:15, 17",
            "difficulty": "Extreme"
        },
        {
            "question": "What did the Israelite midwives (Shiphrah and Puah) tell Pharaoh was the reason they could not kill the male Hebrew babies?",
            "options": ["The Hebrew women are not like the Egyptian women; for they are vigorous and delivered before the midwife comes to them", "The Hebrew women are protected by God", "They were too busy with other births", "They did not understand the language"],
            "correct": "The Hebrew women are not like the Egyptian women; for they are vigorous and delivered before the midwife comes to them",
            "reference": "Exodus 1:19",
            "difficulty": "Extreme"
        },
        {
            "question": "What material was the brazen altar (Altar of Burnt Offering) of the Tabernacle constructed from?",
            "options": ["Gold and silver", "Acacia wood overlaid with bronze (or 'brass')", "Cedar wood overlaid with gold", "Solid bronze"],
            "correct": "Acacia wood overlaid with bronze (or 'brass')",
            "reference": "Exodus 27:1-2",
            "difficulty": "Extreme"
        },
        {
            "question": "In the final plague, the angel of death passed over the Israelite homes marked with what specific sign?",
            "options": ["A mark of peace", "The blood of the Passover lamb on the two doorposts and the lintel", "A special lamp", "A prayer written on the door"],
            "correct": "The blood of the Passover lamb on the two doorposts and the lintel",
            "reference": "Exodus 12:7, 23",
            "difficulty": "Extreme"
        },
        {
            "question": "When Moses asked God for His name, God gave him the famous self-designation, 'I AM WHO I AM.' What is the shortened, essential form of this name that God commanded Moses to use with the Israelites?",
            "options": ["El Shaddai", "Adonai", "I AM (Yahweh/Jehovah)", "Elohim"],
            "correct": "I AM (Yahweh/Jehovah)",
            "reference": "Exodus 3:14-15",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific height of the walls (or veil) around the court of the Tabernacle?",
            "options": ["Five cubits", "Ten cubits", "Three cubits", "Twenty cubits"],
            "correct": "Five cubits",
            "reference": "Exodus 27:18",
            "difficulty": "Extreme"
        },
        {
            "question": "When Moses smashed the tablets of the Law, what specific action did he then take with the golden calf to judge the people?",
            "options": ["He ground it into powder, mixed it with water, and made the people drink it", "He melted it down for the Tabernacle", "He buried it in the sand", "He threw it into the sea"],
            "correct": "He ground it into powder, mixed it with water, and made the people drink it",
            "reference": "Exodus 32:20",
            "difficulty": "Extreme"
        },
        {
            "question": "What two tribes were named as the skilled craftsmen whom God filled with the Spirit to design and construct the Tabernacle and its furnishings?",
            "options": ["Judah and Levi", "Reuben and Simeon", "Zebulun and Issachar", "Bezalel (from Judah) and Aholiab (from Dan)"],
            "correct": "Bezalel (from Judah) and Aholiab (from Dan)",
            "reference": "Exodus 31:2, 6",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical manifestation of God's presence that led the Israelites during the day and during the night in the wilderness?",
            "options": ["A pillar of cloud by day and a pillar of fire by night", "An earthquake during the day and a light at night", "An angel of the Lord", "A shining stone"],
            "correct": "A pillar of cloud by day and a pillar of fire by night",
            "reference": "Exodus 13:21-22",
            "difficulty": "Extreme"
        },
        {
            "question": "When the chief cupbearer was restored to his position in Pharaoh's court, what specific act of forgetfulness did he exhibit toward Joseph?",
            "options": ["He did not tell the Pharaoh about Joseph for two full years", "He claimed Joseph was a charlatan", "He forgot the interpretation of his dream", "He forgot Joseph's name"],
            "correct": "He did not tell the Pharaoh about Joseph for two full years",
            "reference": "Exodus 13:21-22",
            "difficulty": "Extreme"
        }
    ]
}

 {
    "book": "Leviticus",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the dominant theme and purpose of the Book of Leviticus?",
            "options": ["The history of the priesthood", "Instructions on how a holy God is to be worshiped and approached by an unholy people", "The laws of the kingdom", "The prophecies of the Messiah"],
            "correct": "Instructions on how a holy God is to be worshiped and approached by an unholy people",
            "reference": "Overall theme and context of the Law",
            "difficulty": "Moderate"
        },
        {
            "question": "Leviticus primarily addresses the rules, duties, and laws for which tribe of Israel?",
            "options": ["Judah", "Benjamin", "Levi (the priests and Levites)", "Simeon"],
            "correct": "Levi (the priests and Levites)",
            "reference": "The name 'Leviticus' and the contents of the book",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the common purpose of the five main sacrificial offerings described in the first seven chapters (Burnt, Grain, Peace, Sin, Trespass)?",
            "options": ["To cleanse the Temple", "To secure land ownership", "To worship God, restore fellowship, and atone for sin", "To feed the poor"],
            "correct": "To worship God, restore fellowship, and atone for sin",
            "reference": "Leviticus 1-7",
            "difficulty": "Moderate"
        },
        {
            "question": "The famous passage, 'You shall be holy, for **_________** am holy,' is the moral command that undergirds much of the book.",
            "options": ["Your God", "The Lord your God", "I the Lord your God", "Your Father"],
            "correct": "I the Lord your God",
            "reference": "Leviticus 11:44; 19:2",
            "difficulty": "Moderate"
        },
        {
            "question": "On the Day of Atonement (Yom Kippur), what was the name of the goat that was released into the wilderness to symbolically carry away the sins of the people?",
            "options": ["The Peace Goat", "The Sin Goat", "The Scapegoat", "The Lamb of God"],
            "correct": "The Scapegoat",
            "reference": "Leviticus 16:8-10",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the final fate of Nadab and Abihu, the sons of Aaron, after they offered 'unauthorized fire' before the Lord?",
            "options": ["They were exiled from the camp", "They were struck dead by fire from the Lord", "They were stripped of the priesthood", "They were severely beaten"],
            "correct": "They were struck dead by fire from the Lord",
            "reference": "Leviticus 10:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "In the Year of Jubilee, what specific financial practice was mandated to occur every 50th year?",
            "options": ["All debts were forgiven, and all ancestral lands were returned to their original owners", "All slaves were set free", "All men were required to travel to Jerusalem", "A special tax was collected"],
            "correct": "All debts were forgiven, and all ancestral lands were returned to their original owners",
            "reference": "Leviticus 25:10, 28",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific item or part of an animal was forbidden for the Israelites to eat because it was reserved for God alone?",
            "options": ["The blood", "The legs", "The skin", "The bone"],
            "correct": "The blood",
            "reference": "Leviticus 17:10-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific punishment was applied to those who blasphemed the name of the Lord?",
            "options": ["They were beaten severely", "They were exiled for a year", "They were stoned to death by the congregation", "They were forced to offer a large sacrifice"],
            "correct": "They were stoned to death by the congregation",
            "reference": "Leviticus 24:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the name of the tent structure, set up outside the camp, where Moses would go to speak with God face-to-face?",
            "options": ["The Holy of Holies", "The Courtyard", "The Tent of Meeting (or Tabernacle)", "The Temple"],
            "correct": "The Tent of Meeting (or Tabernacle)",
            "reference": "Exodus 33:7-11 (Context is prior to completion of the full Tabernacle)",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "The Grain Offering (or Meal Offering) was to be offered with what specific ingredient added, which was *never* to be omitted?",
            "options": ["Leaven (yeast)", "Incense", "Salt", "Honey"],
            "correct": "Salt",
            "reference": "Leviticus 2:13",
            "difficulty": "Hard"
        },
        {
            "question": "The Sin Offering was given to atone for sins committed how?",
            "options": ["Knowingly", "Unknowingly (unintentional sin)", "Willfully", "In public"],
            "correct": "Unknowingly (unintentional sin)",
            "reference": "Leviticus 4:2, 13, 22, 27",
            "difficulty": "Hard"
        },
        {
            "question": "What was the specific duration of time the High Priest was required to stay within the Tent of Meeting after his anointing, symbolizing his consecration?",
            "options": ["Three days", "Seven days", "Forty days", "One month"],
            "correct": "Seven days",
            "reference": "Leviticus 8:33-35",
            "difficulty": "Hard"
        },
        {
            "question": "What specific bodily disease/condition is covered extensively in Chapter 13 and 14, requiring quarantine and priestly inspection?",
            "options": ["Smallpox", "Leprosy (or infectious skin disease, *tzaraat*)", "Blindness", "Fever"],
            "correct": "Leprosy (or infectious skin disease, *tzaraat*)",
            "reference": "Leviticus 13:2-46",
            "difficulty": "Hard"
        },
        {
            "question": "On the Day of Atonement, how many times did the High Priest enter the Holy of Holies to perform the cleansing rites?",
            "options": ["Once per year", "Twice per year", "Seven times per year", "Every Sabbath"],
            "correct": "Once per year",
            "reference": "Leviticus 16:34 (He made multiple trips on the day, but the *ceremony* itself occurred once a year)",
            "difficulty": "Hard"
        },
        {
            "question": "What instruction was given to a man who, in a moment of anger, verbally abused his father or mother?",
            "options": ["He was to be stoned to death", "He was to offer a Sin Offering", "He was to be exiled from the camp", "He was to be stripped of his inheritance"],
            "correct": "He was to be stoned to death",
            "reference": "Leviticus 20:9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific offering was required for making an unintentional misstatement or promise under oath (breaking faith in regard to a holy thing)?",
            "options": ["The Burnt Offering", "The Trespass Offering (or Guilt Offering)", "The Sin Offering", "The Peace Offering"],
            "correct": "The Trespass Offering (or Guilt Offering)",
            "reference": "Leviticus 5:14-19; 6:1-7",
            "difficulty": "Hard"
        },
        {
            "question": "The Sabbath rest for the land was mandated to occur every how many years?",
            "options": ["Every year", "Every two years", "Every seven years", "Every fifty years"],
            "correct": "Every seven years",
            "reference": "Leviticus 25:3-4",
            "difficulty": "Hard"
        },
        {
            "question": "What two liquids were used by the High Priest, along with the blood of the sacrifice, to perform the cleansing ritual for a cured leper?",
            "options": ["Wine and water", "Cedar wood, scarlet thread, and hyssop (with living water)", "Milk and honey", "Olive oil and holy water"],
            "correct": "Cedar wood, scarlet thread, and hyssop (with living water)",
            "reference": "Leviticus 14:4-7",
            "difficulty": "Hard"
        },
        {
            "question": "What was the final part of the animal sacrifice that was offered to the Lord after the animal was killed and the blood sprinkled?",
            "options": ["The blood was poured out", "The flesh was burned completely on the altar (for Burnt Offering)", "The skin was used for the priest's garment", "The entrails were given to the Levites"],
            "correct": "The flesh was burned completely on the altar (for Burnt Offering)",
            "reference": "Leviticus 1:9",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the Peace Offering, what specific portion of the animal did the offerer and his family get to eat, symbolizing their fellowship with God?",
            "options": ["The legs and the head", "The breast and the right thigh (Wave and Heave Offerings)", "The entrails and the fat", "The skin and the bones"],
            "correct": "The breast and the right thigh (Wave and Heave Offerings)",
            "reference": "Leviticus 7:30-34",
            "difficulty": "Extreme"
        },
        {
            "question": "What instruction was given concerning the consumption of any animal that died naturally or was torn by beasts?",
            "options": ["It was to be eaten immediately", "It was to be buried immediately, and anyone who eats it is unclean until the evening and must wash his clothes", "It was to be sold to a foreigner", "It was to be offered as a sacrifice"],
            "correct": "It was to be buried immediately, and anyone who eats it is unclean until the evening and must wash his clothes",
            "reference": "Leviticus 17:15-16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item was Aaron instructed to wear on his turban, indicating that he bore the guilt of any unholy offerings of the people?",
            "options": ["A sapphire stone", "A gold plate inscribed 'Holy to the Lord'", "A blue cord", "A bronze bell"],
            "correct": "A gold plate inscribed 'Holy to the Lord'",
            "reference": "Exodus 28:36-38 (Context for Aaron's role as High Priest)",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law required that the fire on the altar must never go out, which was to be accomplished by the priest adding what material every morning?",
            "options": ["Incense and oil", "Wood (or 'wood shall be kept burning on it')", "New coals", "Frankincense"],
            "correct": "Wood (or 'wood shall be kept burning on it')",
            "reference": "Leviticus 6:12-13",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific part of the Sin Offering was taken outside the camp and burned completely when the sacrifice was made for the High Priest or the whole congregation?",
            "options": ["The skin, the flesh, and the offal", "The fat and the entrails", "The bones and the blood", "The entire head and legs"],
            "correct": "The skin, the flesh, and the offal",
            "reference": "Leviticus 4:11-12, 21",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific material used to construct the garment of the High Priest that was worn on the Day of Atonement, unlike his regular elaborate robes?",
            "options": ["Gold and precious stones", "Plain white linen", "Fine wool and blue cords", "Dyed leather"],
            "correct": "Plain white linen",
            "reference": "Leviticus 16:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What two conditions regarding the poor were given to the harvester, ensuring the needy could still eat from the fields?",
            "options": ["Do not charge them for the grain; leave them water", "Do not reap the corners of the field, nor gather the gleanings of your harvest", "Give them a portion of the harvest directly; do not charge interest", "Pay them a fair wage; do not oppress them"],
            "correct": "Do not reap the corners of the field, nor gather the gleanings of your harvest",
            "reference": "Leviticus 19:9-10",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the fate of the house where a spreading mildew (or 'leprous' mold) was discovered after the initial cleansing rites failed?",
            "options": ["It was to be rebuilt immediately", "It was to be destroyed and its materials dumped outside the city, and the High Priest was to pronounce it unclean", "It was to be quarantined for a year", "It was to be sold to a foreigner"],
            "correct": "It was to be destroyed and its materials dumped outside the city, and the High Priest was to pronounce it unclean",
            "reference": "Leviticus 14:45",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific punishment was given to a person who unintentionally withheld information when put under oath to testify (or failed to report a defilement)?",
            "options": ["He had to pay a fine", "He was to offer a Trespass Offering and pay restitution", "He was to be exiled for a year", "He was to be stripped of his possessions"],
            "correct": "He was to offer a Trespass Offering and pay restitution",
            "reference": "Leviticus 5:1-6",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the minimum and maximum age span required for a Levite to serve in the Tabernacle's general duties?",
            "options": ["18 to 40 years old", "20 to 50 years old", "25 to 60 years old", "30 to 50 years old"],
            "correct": "30 to 50 years old",
            "reference": "Numbers 4:3, 30 (While this is detailed in Numbers, it governs the Levitical duties established in Leviticus)",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Numbers",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the English name of the book, 'Numbers,' derived from?",
            "options": ["The history of the people's rebellion", "The two censuses (counting) of the Israelite men of war", "The number of days spent in the wilderness", "The numerous miracles performed"],
            "correct": "The two censuses (counting) of the Israelite men of war",
            "reference": "Numbers 1, 26 and the overall theme",
            "difficulty": "Moderate"
        },
        {
            "question": "The Book of Numbers documents the Israelites' journey from Mount Sinai to the plains of what specific location?",
            "options": ["Mount Horeb", "Jerusalem", "The Plains of Moab", "The borders of Egypt"],
            "correct": "The Plains of Moab",
            "reference": "Numbers 33:49-50 and geographical context",
            "difficulty": "Moderate"
        },
        {
            "question": "Which tribe was set apart by God to perform the service of the Tabernacle and was not counted in the military census?",
            "options": ["Judah", "Benjamin", "Levi", "Reuben"],
            "correct": "Levi",
            "reference": "Numbers 1:47-53",
            "difficulty": "Moderate"
        },
        {
            "question": "How many spies did Moses send out to explore the land of Canaan?",
            "options": ["Seven", "Ten", "Twelve", "Forty"],
            "correct": "Twelve",
            "reference": "Numbers 13:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "Which two spies brought back a positive report, urging the Israelites to trust God and conquer the land?",
            "options": ["Nadab and Abihu", "Aaron and Hur", "Caleb and Joshua", "Phinehas and Eleazar"],
            "correct": "Caleb and Joshua",
            "reference": "Numbers 14:6-9",
            "difficulty": "Moderate"
        },
        {
            "question": "Because of their unbelief and rebellion, what was the specific punishment God decreed for the entire generation of Israelites who came out of Egypt (excluding those under 20 and the two faithful spies)?",
            "options": ["They would return to Egypt", "They would wander in the wilderness for 40 years until they all died", "They would be sold into slavery", "They would be killed by their enemies"],
            "correct": "They would wander in the wilderness for 40 years until they all died",
            "reference": "Numbers 14:32-34",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the man who led a rebellion of 250 prominent men against Moses and Aaron, claiming that 'all the congregation is holy'?",
            "options": ["Dathan", "Abiram", "Korah", "Onan"],
            "correct": "Korah",
            "reference": "Numbers 16:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What judgment did God bring upon the rebels (Korah, Dathan, and Abiram) and their families?",
            "options": ["They were struck by fire", "The earth opened up and swallowed them", "They were killed by an angel", "They were exiled from the camp"],
            "correct": "The earth opened up and swallowed them",
            "reference": "Numbers 16:31-33",
            "difficulty": "Moderate"
        },
        {
            "question": "What did God command Moses to strike to bring forth water for the people who were complaining (though Moses eventually sinned in the process)?",
            "options": ["The ground", "A tree", "A rock (or cliff)", "The river Jordan"],
            "correct": "A rock (or cliff)",
            "reference": "Numbers 20:11 (originally commanded to *speak* to the rock in verse 8)",
            "difficulty": "Moderate"
        },
        {
            "question": "What object did God command Moses to lift up on a pole to heal the Israelites who were being bitten by fiery serpents?",
            "options": ["A brazen calf", "A bronze (or 'serpent of bronze')", "A scroll of the Law", "A wooden cross"],
            "correct": "A bronze (or 'serpent of bronze')",
            "reference": "Numbers 21:8-9",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of the prophet hired by Balak, the king of Moab, to curse Israel?",
            "options": ["Joshua", "Elisha", "Balaam", "Zippor"],
            "correct": "Balaam",
            "reference": "Numbers 22:4-6",
            "difficulty": "Hard"
        },
        {
            "question": "What animal spoke to the prophet, warning him about the Angel of the Lord who stood in his path?",
            "options": ["A dog", "A horse", "A donkey (or 'ass')", "A serpent"],
            "correct": "A donkey (or 'ass')",
            "reference": "Numbers 22:28-30",
            "difficulty": "Hard"
        },
        {
            "question": "What was the specific sin Moses and Aaron committed at the waters of Meribah that caused them to be forbidden from entering the Promised Land?",
            "options": ["They doubted God's power", "They struck the rock twice instead of speaking to it as commanded, thus dishonoring God before the people", "They offered unauthorized fire", "They complained about the people"],
            "correct": "They struck the rock twice instead of speaking to it as commanded, thus dishonoring God before the people",
            "reference": "Numbers 20:12",
            "difficulty": "Hard"
        },
        {
            "question": "What law was instituted after the daughters of Zelophehad requested that the inheritance of their deceased father should pass to them since he had no sons?",
            "options": ["Law of the Firstborn", "Law of the Scapegoat", "Law of Inheritance (Daughters of Zelophehad)", "Law of the Vow"],
            "correct": "Law of Inheritance (Daughters of Zelophehad)",
            "reference": "Numbers 27:1-11",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the son of Aaron who was consecrated as the new High Priest after Aaron's death?",
            "options": ["Nadab", "Abihu", "Eleazar", "Phinehas"],
            "correct": "Eleazar",
            "reference": "Numbers 20:28",
            "difficulty": "Hard"
        },
        {
            "question": "What three cities were designated as Cities of Refuge on the eastern side of the Jordan River (before entering Canaan)?",
            "options": ["Hebron, Shechem, and Ramoth", "Bezer, Ramoth, and Golan", "Gaza, Ashkelon, and Ashdod", "Jericho, Gilgal, and Ebal"],
            "correct": "Bezer, Ramoth, and Golan",
            "reference": "Deuteronomy 4:43; Joshua 20:8 (The establishment is rooted in Numbers 35)",
            "difficulty": "Hard"
        },
        {
            "question": "The priests were commanded to perform a specific blessing upon the Israelites, ending with the phrase 'and give you **_________**.'",
            "options": ["Wisdom", "Peace", "Abundance", "Victory"],
            "correct": "Peace",
            "reference": "Numbers 6:24-26 (The Aaronic Blessing)",
            "difficulty": "Hard"
        },
        {
            "question": "What specific ritual was required when a wife was suspected of unfaithfulness by her husband (the 'Ordeal of Jealousy')?",
            "options": ["A public confession", "Drinking bitter water mixed with dust from the tabernacle floor", "A trial by fire", "A monetary fine"],
            "correct": "Drinking bitter water mixed with dust from the tabernacle floor",
            "reference": "Numbers 5:11-31",
            "difficulty": "Hard"
        },
        {
            "question": "What was the punishment for the man who was found gathering wood on the Sabbath day in the wilderness?",
            "options": ["He was placed in isolation", "He was exiled from the camp", "He was stoned to death by the whole congregation", "He was forced to offer a large sacrifice"],
            "correct": "He was stoned to death by the whole congregation",
            "reference": "Numbers 15:32-36",
            "difficulty": "Hard"
        },
        {
            "question": "What group of people was Moses allowed to marry, which angered Miriam and Aaron?",
            "options": ["An Egyptian woman", "A Midianite woman", "A Cushite (Ethiopian) woman", "A Canaanite woman"],
            "correct": "A Cushite (Ethiopian) woman",
            "reference": "Numbers 12:1",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What was the specific material used for the trumpets that Moses was commanded to make for calling the assembly and directing the movement of the camp?",
            "options": ["Bronze", "Silver", "Gold", "Wood"],
            "correct": "Silver",
            "reference": "Numbers 10:2",
            "difficulty": "Extreme"
        },
        {
            "question": "When the Tabernacle was disassembled for travel, what was the specific covering color designated for the Ark of the Covenant?",
            "options": ["Blue cloth, then badger skin", "Red cloth, then blue cloth", "Red cloth", "Purple cloth"],
            "correct": "Blue cloth, then badger skin (Blue cloth was the innermost covering)",
            "reference": "Numbers 4:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the place where the people first complained about the manna, longing for meat, which resulted in God sending a plague after sending them quail?",
            "options": ["Meribah", "Kadesh Barnea", "Taberah", "Kibroth Hattaavah (Graves of Craving)"],
            "correct": "Kibroth Hattaavah (Graves of Craving)",
            "reference": "Numbers 11:34",
            "difficulty": "Extreme"
        },
        {
            "question": "Miriam was punished with leprosy for questioning Moses. What specific physical phenomenon was evident to the people when she was cured and brought back into the camp?",
            "options": ["The cloud disappeared", "Her skin was like dead flesh (or 'white as snow')", "The manna stopped falling", "The ground trembled"],
            "correct": "Her skin was like dead flesh (or 'white as snow')",
            "reference": "Numbers 12:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the sign God chose to confirm the priesthood belonged to Aaron's line, causing a stick to bud and bear almonds?",
            "options": ["Aaron's breastplate", "Aaron's rod (or staff)", "The Altar of Incense", "The Ark of the Covenant"],
            "correct": "Aaron's rod (or staff)",
            "reference": "Numbers 17:8",
            "difficulty": "Extreme"
        },
        {
            "question": "Balaam, despite being hired to curse Israel, was forced by God to utter how many total prophecies (or 'oracles')?",
            "options": ["Three", "Four", "Seven", "Nine"],
            "correct": "Four",
            "reference": "Numbers 23-24",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law of the Red Heifer (Numbers 19) was established to provide the ashes of purification for cleansing a person who had come into contact with what defiling object?",
            "options": ["A leper", "A woman during her menstruation", "A dead body", "A foreign idol"],
            "correct": "A dead body",
            "reference": "Numbers 19:11-13",
            "difficulty": "Extreme"
        },
        {
            "question": "In the final census, what was the total count of the men able to go to war (from twenty years old and upward)?",
            "options": ["603,550", "601,730", "600,000", "598,350"],
            "correct": "601,730",
            "reference": "Numbers 26:51",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical description of the plague that was sent upon the people for their immorality and idolatry with the women of Moab (Baal of Peor)?",
            "options": ["A sickness causing boils", "A great fire in the camp", "A great number of people died (a plague)", "A swarm of locusts"],
            "correct": "A great number of people died (a plague)",
            "reference": "Numbers 25:9",
            "difficulty": "Extreme"
        },
        {
            "question": "Who was the man who immediately killed an Israelite man and a Midianite woman with a spear, halting the plague sent in response to the sin at Baal of Peor?",
            "options": ["Eleazar", "Phinehas", "Joshua", "Caleb"],
            "correct": "Phinehas",
            "reference": "Numbers 25:7-8",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Deuteronomy",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What does the name of the book, Deuteronomy, literally mean?",
            "options": ["The Second Law (or 'Second Law')", "The Final Covenant", "The Book of Remembrance", "The Last Words of Moses"],
            "correct": "The Second Law (or 'Second Law')",
            "reference": "Context of the book and Greek etymology (*deuteros* + *nomos*)",
            "difficulty": "Moderate"
        },
        {
            "question": "Deuteronomy is primarily composed of the final speeches and sermons of which leader of Israel?",
            "options": ["Aaron", "Joshua", "Moses", "Caleb"],
            "correct": "Moses",
            "reference": "Deuteronomy 1:1; 34:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Where were these final addresses given by Moses?",
            "options": ["On Mount Sinai", "In the land of Canaan", "On the plains of Moab, by the Jordan near Jericho", "In the Wilderness of Zin"],
            "correct": "On the plains of Moab, by the Jordan near Jericho",
            "reference": "Deuteronomy 1:1, 5",
            "difficulty": "Moderate"
        },
        {
            "question": "What key historical event is repeatedly recalled in Deuteronomy to remind the Israelites of God's power and their obligation to obey?",
            "options": ["The Creation of the World", "The Exodus and the Covenant at Horeb (Sinai)", "The Flood of Noah", "The call of Abraham"],
            "correct": "The Exodus and the Covenant at Horeb (Sinai)",
            "reference": "Deuteronomy 4:9-14; 5:2-6",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase, central to Jewish prayer, that affirms God is one and instructs Israel to love Him with all their heart, soul, and strength?",
            "options": ["The Shema (Hear, O Israel: The Lord our God, the Lord is one!)", "The Aaronic Blessing", "The Ten Commandments", "The Decalogue"],
            "correct": "The Shema (Hear, O Israel: The Lord our God, the Lord is one!)",
            "reference": "Deuteronomy 6:4-5",
            "difficulty": "Moderate"
        },
        {
            "question": "Moses warns the Israelites against forgetting the Lord when they eventually possess what blessing?",
            "options": ["A mighty army", "Wealth and prosperity in the Promised Land", "A temple to worship Him", "The ability to speak in prophecy"],
            "correct": "Wealth and prosperity in the Promised Land",
            "reference": "Deuteronomy 8:11-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What major law did Moses predict God would write on the hearts of the people in the future, signifying a new covenant?",
            "options": ["The Law of Love", "The Law of the Spirit", "Circumcision of the heart", "The command to return to the land"],
            "correct": "Circumcision of the heart",
            "reference": "Deuteronomy 30:6 (context of New Covenant/Jeremiah 31)",
            "difficulty": "Moderate"
        },
        {
            "question": "What did God promise to raise up after Moses, who would be a prophet like Moses and whom the people must obey?",
            "options": ["Elijah", "A King of Israel", "Jesus (The Messiah)", "A Prophet from among their brothers"],
            "correct": "A Prophet from among their brothers",
            "reference": "Deuteronomy 18:15-18",
            "difficulty": "Moderate"
        },
        {
            "question": "What two eventual outcomes did Moses place before the people, urging them to choose one?",
            "options": ["War and peace", "Blessing and cursing (life and death)", "Wealth and poverty", "Obedience and rebellion"],
            "correct": "Blessing and cursing (life and death)",
            "reference": "Deuteronomy 30:19",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the man whom Moses appointed and commissioned to succeed him as the leader of Israel?",
            "options": ["Aaron", "Eleazar", "Caleb", "Joshua"],
            "correct": "Joshua",
            "reference": "Deuteronomy 31:7, 23",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific consequence did God place on the land if the Israelites adopted the abominable customs of the nations they were driving out (e.g., child sacrifice)?",
            "options": ["He would send famine", "The land would vomit them out", "The sun would cease to shine", "He would send wild beasts"],
            "correct": "The land would vomit them out",
            "reference": "Deuteronomy 18:9-12; Leviticus 20:22",
            "difficulty": "Hard"
        },
        {
            "question": "The Law stated that a newly married man was exempt from what civic duty for one year?",
            "options": ["Paying taxes", "Appearing before the priests", "Going out to war", "Tilling the land"],
            "correct": "Going out to war",
            "reference": "Deuteronomy 24:5",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did God command Moses to place beside the Ark of the Covenant for a witness against the people?",
            "options": ["Aaron's rod", "The jar of manna", "The Book of the Law", "A stone tablet"],
            "correct": "The Book of the Law",
            "reference": "Deuteronomy 31:26",
            "difficulty": "Hard"
        },
        {
            "question": "The three annual feasts (Passover/Unleavened Bread, Weeks/Harvest, and Tabernacles/Booths) were known by what collective title?",
            "options": ["Feasts of the Lord", "Feasts of the Harvest", "Feasts of Oblation", "The pilgrimage festivals (or 'Feasts of the Three Times')"],
            "correct": "The pilgrimage festivals (or 'Feasts of the Three Times')",
            "reference": "Deuteronomy 16:16",
            "difficulty": "Hard"
        },
        {
            "question": "What specific part of the offerings was forbidden to be offered in any place other than the central place God would choose (Jerusalem/Tabernacle)?",
            "options": ["The oil and the wine", "The tithes, the heave offering, the vows, and the free will offerings", "The first fruits of the land", "The money from the offerings"],
            "correct": "The tithes, the heave offering, the vows, and the free will offerings",
            "reference": "Deuteronomy 12:6, 11",
            "difficulty": "Hard"
        },
        {
            "question": "The Law required that a person found hanging on a tree (crucified) could not remain overnight, because the body was considered what?",
            "options": ["A curse to the land of God", "A sign of rebellion", "A defilement of the Sabbath", "A defilement of the priesthood"],
            "correct": "A curse to the land of God",
            "reference": "Deuteronomy 21:23",
            "difficulty": "Hard"
        },
        {
            "question": "What two tribes were given the land east of the Jordan River (Gilead and Bashan) on the condition that their men would cross over and fight with the rest of Israel?",
            "options": ["Judah and Levi", "Gad and Asher", "Reuben and Gad, and half the tribe of Manasseh", "Ephraim and Manasseh"],
            "correct": "Reuben and Gad, and half the tribe of Manasseh",
            "reference": "Deuteronomy 3:12-17",
            "difficulty": "Hard"
        },
        {
            "question": "The Law mandated that the clothes of what specific marginalized group could not be taken as collateral for a loan, nor could a man have two millstones as collateral?",
            "options": ["The poor", "The widow", "The foreigner (or sojourner)", "The Levite"],
            "correct": "The widow",
            "reference": "Deuteronomy 24:6, 17",
            "difficulty": "Hard"
        },
        {
            "question": "How many times per year was the King of Israel required to read and write a copy of the Law (or 'this Law') for himself?",
            "options": ["Once per year, during the Feast of Tabernacles", "Twice per year, during the appointed feasts", "He was to write a copy for himself upon ascending the throne", "Every Sabbath"],
            "correct": "He was to write a copy for himself upon ascending the throne",
            "reference": "Deuteronomy 17:18-19",
            "difficulty": "Hard"
        },
        {
            "question": "Moses was permitted to view the Promised Land from the top of what mountain, but not enter it?",
            "options": ["Mount Horeb (Sinai)", "Mount Carmel", "Mount Pisgah (Nebo)", "Mount Hermon"],
            "correct": "Mount Pisgah (Nebo)",
            "reference": "Deuteronomy 34:1",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the Shema (Deut 6:4), Moses urges the people to diligently teach the words of the Law to their children, speaking of them at what three specific times/places of their daily routine?",
            "options": ["Morning, noon, and night", "When you sit in your house, when you walk by the way, when you lie down, and when you rise up", "In the city, in the field, and in the Temple", "During the feasts, the Sabbaths, and the New Moons"],
            "correct": "When you sit in your house, when you walk by the way, when you lie down, and when you rise up",
            "reference": "Deuteronomy 6:7",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law mandated that if a man took a vow and did not fulfill it, he would be guilty of sin. However, a woman's vow could be nullified by whom?",
            "options": ["The High Priest", "Her father or her husband", "The elders of the city", "The prophet"],
            "correct": "Her father or her husband",
            "reference": "Numbers 30:3-16 (Context for the Law reaffirmed in Deut)",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical boundary that Israel was commanded to make on the edges of their garments?",
            "options": ["Fringes (tassels) on the four corners of their garment", "A blue thread in the garment", "A red cord on the sleeve", "A white band on the collar"],
            "correct": "Fringes (tassels) on the four corners of their garment",
            "reference": "Deuteronomy 22:12",
            "difficulty": "Extreme"
        },
        {
            "question": "Moses reminds the people that the Lord commanded them to destroy the memory of which ancient people, because they attacked Israel when they were weary and defenseless?",
            "options": ["The Midianites", "The Amalekites", "The Canaanites", "The Philistines"],
            "correct": "The Amalekites",
            "reference": "Deuteronomy 25:17-19",
            "difficulty": "Extreme"
        },
        {
            "question": "The two great blessings and two great curses were to be publicly pronounced from what two opposing mountains upon entering the Promised Land?",
            "options": ["Mount Sinai and Mount Horeb", "Mount Zion and Mount Moriah", "Mount Gerizim (Blessings) and Mount Ebal (Cursings)", "Mount Hermon and Mount Tabor"],
            "correct": "Mount Gerizim (Blessings) and Mount Ebal (Cursings)",
            "reference": "Deuteronomy 27:11-13",
            "difficulty": "Extreme"
        },
        {
            "question": "The Song of Moses (Deuteronomy 32) warns the people that their prosperity would lead to them 'growing fat' and forsaking God, whom they call what in that chapter?",
            "options": ["The Rock who begot you", "The Creator of all things", "The God of Abraham", "The Merciful Judge"],
            "correct": "The Rock who begot you",
            "reference": "Deuteronomy 32:15, 18",
            "difficulty": "Extreme"
        },
        {
            "question": "What two animals are used as metaphors to describe the diligence and protection of God over Israel in the wilderness (Deuteronomy 32:11)?",
            "options": ["Lion and Bear", "Eagle and a Lion", "Eagle and a Vulture", "Eagle and the mother Hen"],
            "correct": "Eagle and a Vulture (or 'eagle and its young')",
            "reference": "Deuteronomy 32:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the place in the wilderness where the Israelites angered the Lord so much that He swore they would not enter His rest?",
            "options": ["Meribah", "Kadesh Barnea", "Taberah", "Massah"],
            "correct": "Kadesh Barnea",
            "reference": "Deuteronomy 1:34-35",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific consequence did God place on Moses and Aaron for not believing Him to sanctify Him in the eyes of the people at Meribah?",
            "options": ["They would not lead the final charge into Canaan", "They would die in the wilderness", "They would not enter the land which He gave the children of Israel", "They would be judged by the High Priest"],
            "correct": "They would not enter the land which He gave the children of Israel",
            "reference": "Deuteronomy 32:51-52",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the death of Moses, affirming the mystery of his burial?",
            "options": ["He died and was buried by Aaron", "He was buried in the Valley in the land of Moab, but no one knows his burial place to this day", "He ascended to heaven in a cloud", "He was buried in the place where he died"],
            "correct": "He was buried in the Valley in the land of Moab, but no one knows his burial place to this day",
            "reference": "Deuteronomy 34:6",
            "difficulty": "Extreme"
        }
    ]
}


  // --- HISTORY ---
  {
    "book": "Joshua",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Joshua?",
            "options": ["The wandering of Israel in the wilderness", "The conquest and division of the Promised Land (Canaan)", "The establishment of the monarchy", "The rebuilding of the Temple"],
            "correct": "The conquest and division of the Promised Land (Canaan)",
            "reference": "Joshua 1:2, 6; 11:23",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the woman in Jericho who hid the two Israelite spies?",
            "options": ["Jezebel", "Delilah", "Rahab", "Bathsheba"],
            "correct": "Rahab",
            "reference": "Joshua 2:1-7",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific body of water did the Israelites cross on dry ground after the waters were cut off by the priests bearing the Ark of the Covenant?",
            "options": ["The Red Sea", "The Jordan River", "The Nile River", "The Sea of Galilee"],
            "correct": "The Jordan River",
            "reference": "Joshua 3:14-17",
            "difficulty": "Moderate"
        },
        {
            "question": "What action were the Israelites required to perform daily for seven days (six days silently, the seventh day loudly) before the walls of Jericho fell?",
            "options": ["Singing praises", "Marching around the city", "Offering a sacrifice", "Blowing trumpets loudly"],
            "correct": "Marching around the city",
            "reference": "Joshua 6:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the specific physical item that Rahab was told to tie in her window to identify her house during the destruction of Jericho?",
            "options": ["A white flag", "A red cord (or 'scarlet cord')", "A piece of linen", "A trumpet"],
            "correct": "A red cord (or 'scarlet cord')",
            "reference": "Joshua 2:18",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the Israelite who took forbidden devoted things from Jericho, leading to Israel's initial defeat at Ai?",
            "options": ["Phinehas", "Caleb", "Achan", "Abimelech"],
            "correct": "Achan",
            "reference": "Joshua 7:1, 20-21",
            "difficulty": "Moderate"
        },
        {
            "question": "What solar miracle occurred during the battle against the five Amorite kings near Gibeon, allowing Israel to complete the victory?",
            "options": ["The sun and moon stood still", "A great hail storm struck the enemy", "An angel fought for Israel", "The day was supernaturally darkened"],
            "correct": "The sun and moon stood still",
            "reference": "Joshua 10:12-14",
            "difficulty": "Moderate"
        },
        {
            "question": "How many cities of refuge were established in total within the Promised Land?",
            "options": ["Three", "Six", "Twelve", "Forty-eight"],
            "correct": "Six",
            "reference": "Joshua 20:7-8",
            "difficulty": "Moderate"
        },
        {
            "question": "What land was given to Caleb as his inheritance, due to his faithfulness as a spy?",
            "options": ["Hebron (and its vicinity)", "Jericho", "Shechem", "Gaza"],
            "correct": "Hebron (and its vicinity)",
            "reference": "Joshua 14:13-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What did Joshua tell the people in his final charge, urging them to choose?",
            "options": ["To worship the Lord or the gods of the Amorites (Choose for yourselves this day whom you will serve)", "To go back to Egypt or stay in Canaan", "To settle disputes with the Canaanites or fight them", "To rebuild the Tabernacle or build a Temple"],
            "correct": "To worship the Lord or the gods of the Amorites (Choose for yourselves this day whom you will serve)",
            "reference": "Joshua 24:15",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of the specific place where the Israelites camped and celebrated the Passover after crossing the Jordan?",
            "options": ["Shiloh", "Shechem", "Gilgal", "Kadesh Barnea"],
            "correct": "Gilgal",
            "reference": "Joshua 4:19; 5:10",
            "difficulty": "Hard"
        },
        {
            "question": "The Lord appeared to Joshua before the conquest of Jericho as whom?",
            "options": ["An angel in a burning bush", "The Commander of the army of the Lord", "An old man with a staff", "The King of Israel"],
            "correct": "The Commander of the army of the Lord",
            "reference": "Joshua 5:13-15",
            "difficulty": "Hard"
        },
        {
            "question": "After the defeat at Ai, Achan was discovered and punished in what specific valley?",
            "options": ["The Valley of Rephaim", "The Valley of Achor (Trouble)", "The Valley of Hinnom", "The Valley of Sorek"],
            "correct": "The Valley of Achor (Trouble)",
            "reference": "Joshua 7:26",
            "difficulty": "Hard"
        },
        {
            "question": "What action did the people of Gibeon take to trick Israel into making a covenant of peace with them?",
            "options": ["They promised to pay a large tribute", "They wore old, patched clothes and dry, moldy bread, claiming to be travelers from a far country", "They pretended to worship the Lord", "They gave false testimony about the Canaanites"],
            "correct": "They wore old, patched clothes and dry, moldy bread, claiming to be travelers from a far country",
            "reference": "Joshua 9:3-15",
            "difficulty": "Hard"
        },
        {
            "question": "What was the consequence for the Gibeonites after their deception was discovered?",
            "options": ["They were killed immediately", "They were exiled from the land", "They were made woodcutters and water carriers for the congregation and the altar of the Lord", "They were made slaves of the entire nation"],
            "correct": "They were made woodcutters and water carriers for the congregation and the altar of the Lord",
            "reference": "Joshua 9:23",
            "difficulty": "Hard"
        },
        {
            "question": "After the conquest, what specific place was established as the location of the Tabernacle and the initial distribution of the remaining land by lot?",
            "options": ["Jerusalem", "Shechem", "Shiloh", "Gilgal"],
            "correct": "Shiloh",
            "reference": "Joshua 18:1, 10",
            "difficulty": "Hard"
        },
        {
            "question": "The two tribes and half-tribe who inherited land east of the Jordan built a large altar when they returned. What was the meaning of the name they gave the altar?",
            "options": ["Witness (Ed)", "Peace", "Remembrance", "Sacrifice"],
            "correct": "Witness (Ed)",
            "reference": "Joshua 22:34",
            "difficulty": "Hard"
        },
        {
            "question": "What was the specific physical object that Joshua set up under the oak tree at the end of his life, to serve as a witness to the people's covenant with God?",
            "options": ["A brass trumpet", "A large stone", "A carved image", "A memorial plaque"],
            "correct": "A large stone",
            "reference": "Joshua 24:26-27",
            "difficulty": "Hard"
        },
        {
            "question": "What did the Israelites do with the body of Joseph after the conquest and division of the land?",
            "options": ["They buried him in Egypt", "They buried him in Shechem, in the parcel of ground Jacob purchased", "They burned his bones", "They placed his sarcophagus in the Tabernacle"],
            "correct": "They buried him in Shechem, in the parcel of ground Jacob purchased",
            "reference": "Joshua 24:32",
            "difficulty": "Hard"
        },
        {
            "question": "What was the last action performed by the Israelites before Achan's discovery and punishment, symbolizing the removal of the reproach of Egypt?",
            "options": ["They offered a sacrifice", "They celebrated the Passover", "They were circumcised for the second time", "They marched around the camp"],
            "correct": "They were circumcised for the second time",
            "reference": "Joshua 5:2-9",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific curse did Joshua pronounce upon anyone who would attempt to rebuild the city of Jericho?",
            "options": ["They would be struck by a plague", "They would rebuild it with their firstborn and set up its gates with their youngest son", "They would lose their land inheritance", "They would be exiled from Israel"],
            "correct": "They would rebuild it with their firstborn and set up its gates with their youngest son",
            "reference": "Joshua 6:26",
            "difficulty": "Extreme"
        },
        {
            "question": "What two tribes were appointed to stand on Mount Gerizim to pronounce the blessings, and which two tribes stood on Mount Ebal to pronounce the curses?",
            "options": ["Reuben and Gad (Gerizim); Judah and Benjamin (Ebal)", "Simeon, Levi, Judah, Issachar, Joseph, and Benjamin (Ebal); Reuben, Gad, Asher, Zebulun, Dan, and Naphtali (Gerizim)", "Simeon, Levi, Judah, Issachar, Joseph, and Benjamin (Gerizim); Reuben, Gad, Asher, Zebulun, Dan, and Naphtali (Ebal)", "Judah and Levi (Gerizim); Reuben and Simeon (Ebal)"],
            "correct": "Simeon, Levi, Judah, Issachar, Joseph, and Benjamin (Gerizim); Reuben, Gad, Asher, Zebulun, Dan, and Naphtali (Ebal)",
            "reference": "Joshua 8:33 (citing Deut 27:11-13)",
            "difficulty": "Extreme"
        },
        {
            "question": "When Israel crossed the Jordan, the priests carrying the Ark were commanded to stand firm where until the entire nation had passed over?",
            "options": ["In the middle of the riverbed (dry ground)", "On the bank of the river", "On the mountain top", "In the city of Gilgal"],
            "correct": "In the middle of the riverbed (dry ground)",
            "reference": "Joshua 3:17; 4:10",
            "difficulty": "Extreme"
        },
        {
            "question": "How many stones, taken from the Jordan riverbed, were set up by Joshua as a memorial at Gilgal?",
            "options": ["Seven", "Twelve", "Forty", "Sixty"],
            "correct": "Twelve",
            "reference": "Joshua 4:8",
            "difficulty": "Extreme"
        },
        {
            "question": "The conquest culminated in Joshua leading the remaining coalition of kings against what final powerful northern city?",
            "options": ["Hazor", "Jerusalem", "Gezer", "Lachish"],
            "correct": "Hazor",
            "reference": "Joshua 11:10-13",
            "difficulty": "Extreme"
        },
        {
            "question": "What two specific areas were used as boundary markers for the tribes, which were later established as the two central sanctuaries of the nation?",
            "options": ["Jericho and Bethel", "Hebron and Debir", "Shiloh and Shechem", "Gilgal and Ebal"],
            "correct": "Shiloh and Shechem",
            "reference": "Joshua 18:1 (Shiloh) and 24:1 (Shechem)",
            "difficulty": "Extreme"
        },
        {
            "question": "What two specific individuals were still alive when the land division was completed, having originally been the two faithful spies?",
            "options": ["Joshua and Caleb", "Joshua and Phinehas", "Caleb and Eleazar", "Joshua and Eleazar"],
            "correct": "Joshua and Caleb",
            "reference": "Joshua 14:1 (Eleazar and Joshua are the dividers; Caleb is the faithful one asking for his portion)",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the final fate of the five Amorite kings defeated at Gibeon?",
            "options": ["They were taken as slaves", "They were killed, and their bodies were hung on trees until evening", "They were exiled to the desert", "They were allowed to return to their cities"],
            "correct": "They were killed, and their bodies were hung on trees until evening",
            "reference": "Joshua 10:26-27",
            "difficulty": "Extreme"
        },
        {
            "question": "The territory given to the tribe of Dan was eventually reduced, forcing them to capture what northern city, which they renamed?",
            "options": ["Tyre", "Sidon", "Laish (or 'Leshem')", "Gaza"],
            "correct": "Laish (or 'Leshem')",
            "reference": "Joshua 19:47",
            "difficulty": "Extreme"
        },
        {
            "question": "In the curse pronounced on Achan, what specific item did he illegally take that belonged to the king of Shinar?",
            "options": ["A silver staff", "A beautiful Babylonian cloak (or 'Babylonian garment')", "A golden image", "A bronze pot"],
            "correct": "A beautiful Babylonian cloak (or 'Babylonian garment')",
            "reference": "Joshua 7:21",
            "difficulty": "Extreme"
        }
    ]
}

 {
    "book": "Judges",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Judges?",
            "options": ["The history of the priesthood", "The cycle of sin, servitude, supplication, and salvation (deliverance) among the Israelites", "The establishment of the kingdom", "The conquest of the Promised Land"],
            "correct": "The cycle of sin, servitude, supplication, and salvation (deliverance) among the Israelites",
            "reference": "Overall theme (Judges 2:11-19)",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary cause of the chaos and failure described throughout the book of Judges?",
            "options": ["Foreign invasion", "Famine and drought", "The absence of a king, leading to everyone doing what was right in his own eyes", "The failure of the priests"],
            "correct": "The absence of a king, leading to everyone doing what was right in his own eyes",
            "reference": "Judges 17:6; 21:25 (The book's concluding phrase)",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the first major judge who delivered Israel from Cushan-Rishathaim, king of Mesopotamia?",
            "options": ["Gideon", "Othniel", "Ehud", "Shamgar"],
            "correct": "Othniel",
            "reference": "Judges 3:9-10",
            "difficulty": "Moderate"
        },
        {
            "question": "What unique physical characteristic and weapon did the judge Ehud use to assassinate Eglon, the king of Moab?",
            "options": ["He was a giant; he used a spear", "He was left-handed; he used a double-edged dagger hidden under his clothes", "He was deaf; he used a bow and arrow", "He was very young; he used a sword"],
            "correct": "He was left-handed; he used a double-edged dagger hidden under his clothes",
            "reference": "Judges 3:15-22",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the only female judge and prophetess who delivered Israel, alongside Barak, from the Canaanite King Jabin?",
            "options": ["Jael", "Ruth", "Deborah", "Hannah"],
            "correct": "Deborah",
            "reference": "Judges 4:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What unconventional weapon did Jael use to kill the Canaanite commander, Sisera?",
            "options": ["A sling and a stone", "A sword", "A tent peg and a hammer", "A club"],
            "correct": "A tent peg and a hammer",
            "reference": "Judges 4:21",
            "difficulty": "Moderate"
        },
        {
            "question": "The judge Gideon reduced his army to what small number before attacking the Midianites, relying solely on God's strength?",
            "options": ["10,000 men", "3,000 men", "300 men", "100 men"],
            "correct": "300 men",
            "reference": "Judges 7:7",
            "difficulty": "Moderate"
        },
        {
            "question": "What two items were used by Gideon's men to surprise and scatter the Midianite army?",
            "options": ["Swords and shields", "Trumpets and lamps hidden in jars", "Slings and stones", "Spears and bows"],
            "correct": "Trumpets and lamps hidden in jars",
            "reference": "Judges 7:16, 20",
            "difficulty": "Moderate"
        },
        {
            "question": "What special vow did Samson take that involved three main elements, including not cutting his hair?",
            "options": ["The vow of the Nazarite (or Nazirite)", "The vow of abstinence", "The priestly vow", "The warrior's vow"],
            "correct": "The vow of the Nazarite (or Nazirite)",
            "reference": "Judges 13:5 (and Numbers 6)",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the specific physical feat that Samson performed just before his death, to destroy the Philistines?",
            "options": ["He pulled down the palace walls", "He uprooted the temple doors", "He pushed down the two central pillars of the temple, killing more people in his death than in his life", "He escaped his prison chains"],
            "correct": "He pushed down the two central pillars of the temple, killing more people in his death than in his life",
            "reference": "Judges 16:29-30",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the specific sign that Gideon initially requested from God to confirm that God would deliver Israel through him?",
            "options": ["A voice from heaven", "A great light", "A fleece of wool that would be wet with dew while the ground was dry", "A sword appearing before him"],
            "correct": "A fleece of wool that would be wet with dew while the ground was dry",
            "reference": "Judges 6:37",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who was made king by the men of Shechem after the death of his father, Gideon, but reigned cruelly for three years?",
            "options": ["Jotham", "Jephthah", "Abimelech", "Tola"],
            "correct": "Abimelech",
            "reference": "Judges 9:1, 22",
            "difficulty": "Hard"
        },
        {
            "question": "What two cities were the two primary judges (Deborah and Barak) from?",
            "options": ["Jerusalem and Hebron", "Ephraim and Benjamin", "Mount Tabor and Kedesh", "Mount Ephraim (Deborah) and Kedesh Naphtali (Barak)",],
            "correct": "Mount Ephraim (Deborah) and Kedesh Naphtali (Barak)",
            "reference": "Judges 4:4, 6",
            "difficulty": "Hard"
        },
        {
            "question": "What vow did the judge Jephthah rashly make to God before battling the Ammonites?",
            "options": ["He would never cut his hair", "He would offer as a burnt offering whatever came out of his house first upon his return", "He would destroy all the Ammonites", "He would serve God all his life"],
            "correct": "He would offer as a burnt offering whatever came out of his house first upon his return",
            "reference": "Judges 11:30-31",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Samson use to kill a thousand Philistines?",
            "options": ["A sword of fire", "A lion's mane", "The jawbone of a donkey", "A sling and a stone"],
            "correct": "The jawbone of a donkey",
            "reference": "Judges 15:15",
            "difficulty": "Hard"
        },
        {
            "question": "The men of what specific tribe were virtually wiped out in a civil war near the end of the book, forcing them to capture wives from Jabesh-Gilead and Shiloh?",
            "options": ["Judah", "Benjamin", "Ephraim", "Levi"],
            "correct": "Benjamin",
            "reference": "Judges 20:46-48; 21:19-23",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the Philistine woman who persuaded Samson to reveal the secret of his strength?",
            "options": ["Jael", "Micah", "Delilah", "Rahab"],
            "correct": "Delilah",
            "reference": "Judges 16:4-17",
            "difficulty": "Hard"
        },
        {
            "question": "What two items did the angel of the Lord command the parents of Samson to abstain from eating or drinking?",
            "options": ["Meat and fish", "Strong drink (wine) and anything unclean", "Honey and locusts", "Unleavened bread and oil"],
            "correct": "Strong drink (wine) and anything unclean",
            "reference": "Judges 13:4, 14",
            "difficulty": "Hard"
        },
        {
            "question": "In his youth, what specific animal did Samson tear apart with his bare hands?",
            "options": ["A bear", "A lion (a young lion)", "A wolf", "A leopard"],
            "correct": "A lion (a young lion)",
            "reference": "Judges 14:5-6",
            "difficulty": "Hard"
        },
        {
            "question": "The final stories in the book detail the descent into depravity, including the story of a Levite and his concubine, which eventually led to the war with the tribe of Benjamin. In what specific city did the Levite's concubine suffer abuse and death?",
            "options": ["Shechem", "Jerusalem", "Gibeah", "Bethel"],
            "correct": "Gibeah",
            "reference": "Judges 19:14-26",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What was the name of the city that Gideon's son, Abimelech, destroyed by sowing it with salt after defeating the city?",
            "options": ["Shechem", "Jericho", "Thebez", "Ai"],
            "correct": "Shechem",
            "reference": "Judges 9:45",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did Sisera ask Jael for, and what did she give him instead?",
            "options": ["He asked for bread; she gave him a sheep", "He asked for water; she gave him milk", "He asked for wine; she gave him water", "He asked for rest; she gave him a chair"],
            "correct": "He asked for water; she gave him milk",
            "reference": "Judges 4:19",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did Gideon take to judge the two Midianite kings, Zebah and Zalmunna, after he captured them?",
            "options": ["He exiled them", "He slew them with his own hand", "He sent them to the priests for judgment", "He forced them to rebuild the destroyed altars"],
            "correct": "He slew them with his own hand",
            "reference": "Judges 8:21",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who, after being mocked by the men of Succoth and Penuel, was punished by Gideon with thorns and scourging?",
            "options": ["Zebah", "Zalmunna", "No one specific, the men of the cities were judged", "Jethro"],
            "correct": "No one specific, the men of the cities were judged",
            "reference": "Judges 8:7, 16",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the initial material that the Angel of the Lord commanded to be offered as a sacrifice by Manoah and his wife (Samson's parents)?",
            "options": ["A goat from the flock", "A kid (young goat) from the flock", "A bullock", "A lamb and a grain offering"],
            "correct": "A kid (young goat) from the flock",
            "reference": "Judges 13:15, 19",
            "difficulty": "Extreme"
        },
        {
            "question": "After the destruction of the Philistine temple, what was the name of the Philistine god who was being honored at the feast?",
            "options": ["Baal", "Asherah", "Dagon", "Chemosh"],
            "correct": "Dagon",
            "reference": "Judges 16:23",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific consequence did the Angel of the Lord pronounce upon the angel/messenger that caused the men of Israel to weep at Bochim (the weeping place)?",
            "options": ["God would not drive out the remaining nations (Canaanites) and they would become a snare to them", "A great famine would come upon the land", "The Tabernacle would be destroyed", "The priesthood would be removed"],
            "correct": "God would not drive out the remaining nations (Canaanites) and they would become a snare to them",
            "reference": "Judges 2:1-3",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who became the priest of Micah's private shrine, later moving the shrine and the priest to the tribe of Dan?",
            "options": ["Phinehas", "Jonathan (son of Gershom, the son of Moses)", "Abimelech", "Eli"],
            "correct": "Jonathan (son of Gershom, the son of Moses)",
            "reference": "Judges 17:1, 18:30 (note the textual ambiguity of 'Moses' or 'Manasseh')",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical object from which Samson found honey, which he gave to his parents?",
            "options": ["A wild hive in a tree", "The carcass of the lion he had killed earlier", "A rock in the desert", "A clay pot"],
            "correct": "The carcass of the lion he had killed earlier",
            "reference": "Judges 14:8-9",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the final instruction that Jephthah gave his daughter before she went into the mountains to mourn and then submitted to her father's vow?",
            "options": ["To mourn her virginity for two months", "To leave the land and find a husband", "To marry a priest", "To remain silent about the vow"],
            "correct": "To mourn her virginity for two months",
            "reference": "Judges 11:37",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Ruth",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Ruth?",
            "options": ["The history of the judges", "The story of loyalty (hesed) and redemption (kinsman-redeemer)", "The laws of marriage", "The conquest of the Philistines"],
            "correct": "The story of loyalty (hesed) and redemption (kinsman-redeemer)",
            "reference": "Overall theme (Ruth 3:11; 4:14)",
            "difficulty": "Moderate"
        },
        {
            "question": "In what specific period of Israel's history did the events of the Book of Ruth take place?",
            "options": ["During the Monarchy of David", "During the time of the Judges", "During the Exodus", "During the reign of Solomon"],
            "correct": "During the time of the Judges",
            "reference": "Ruth 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "To what foreign land did Elimelech take his family due to a famine in Bethlehem?",
            "options": ["Egypt", "Moab", "Edom", "Ammon"],
            "correct": "Moab",
            "reference": "Ruth 1:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the woman who returned to Bethlehem with her Moabite daughter-in-law?",
            "options": ["Orpah", "Jael", "Naomi", "Hannah"],
            "correct": "Naomi",
            "reference": "Ruth 1:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the famous declaration Ruth made to Naomi, demonstrating her unwavering commitment and loyalty?",
            "options": ["'I will serve the Lord your God.'", "'Do not urge me to leave you or to return from following you.'", "'I will find us food and shelter.'", "'I will be your servant.'"],
            "correct": "'Do not urge me to leave you or to return from following you.'",
            "reference": "Ruth 1:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What new, sorrowful name did Naomi request her friends call her upon her return to Bethlehem?",
            "options": ["Mara (Bitter)", "Desolate", "The Widow", "Broken"],
            "correct": "Mara (Bitter)",
            "reference": "Ruth 1:20",
            "difficulty": "Moderate"
        },
        {
            "question": "In the field of what wealthy kinsman did Ruth go to gather grain (glean)?",
            "options": ["Jesse", "Elimelech", "Boaz", "Obed"],
            "correct": "Boaz",
            "reference": "Ruth 2:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the specific family relationship of Boaz to Naomi's deceased husband, Elimelech?",
            "options": ["Son", "Brother", "Kinsman (a near relative)", "Nephew"],
            "correct": "Kinsman (a near relative)",
            "reference": "Ruth 2:1; 3:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific act did Boaz perform at the city gate to finalize the legal transfer of property and marriage rights from the unnamed nearer kinsman?",
            "options": ["He signed a document", "He offered a sacrifice", "He gave the man his sandal", "He paid the man silver"],
            "correct": "He gave the man his sandal",
            "reference": "Ruth 4:7-8",
            "difficulty": "Moderate"
        },
        {
            "question": "Ruth and Boaz became the ancestors of which great king of Israel?",
            "options": ["Saul", "Solomon", "David", "Hezekiah"],
            "correct": "David",
            "reference": "Ruth 4:17, 22",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of Ruth's other daughter-in-law, who initially started the journey with Naomi but eventually returned to her own people?",
            "options": ["Chilion", "Mahlon", "Orpah", "Zipporah"],
            "correct": "Orpah",
            "reference": "Ruth 1:4, 14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific time of year (harvest) did Ruth and Naomi arrive in Bethlehem?",
            "options": ["The beginning of the barley harvest", "The end of the wheat harvest", "The olive harvest", "The grape harvest"],
            "correct": "The beginning of the barley harvest",
            "reference": "Ruth 1:22",
            "difficulty": "Hard"
        },
        {
            "question": "In what specific location was Ruth advised to lie down after Boaz had finished eating and drinking, to make her request for redemption?",
            "options": ["At the city gate", "In the main house", "At his feet (at the foot of the grain heap/threshing floor)", "Under the altar"],
            "correct": "At his feet (at the foot of the grain heap/threshing floor)",
            "reference": "Ruth 3:4, 7",
            "difficulty": "Hard"
        },
        {
            "question": "What was the specific quantity of barley that Boaz gave Ruth to take back to Naomi after their night at the threshing floor?",
            "options": ["An ephah (about 22 liters)", "Six measures (shekels) of barley", "Ten measures of barley", "Three measures of wheat"],
            "correct": "Six measures (shekels) of barley",
            "reference": "Ruth 3:15",
            "difficulty": "Hard"
        },
        {
            "question": "The nearest unnamed kinsman refused to redeem Ruth and the property because he was concerned about doing what to his own inheritance?",
            "options": ["Losing it entirely", "Damaging it (or 'endangering his own inheritance')", "Selling it to a foreigner", "Giving it to Naomi"],
            "correct": "Damaging it (or 'endangering his own inheritance')",
            "reference": "Ruth 4:6",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who married Naomi and was the father of Mahlon and Chilion?",
            "options": ["Boaz", "Obed", "Elimelech", "Jesse"],
            "correct": "Elimelech",
            "reference": "Ruth 1:2",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did Boaz ask Ruth *not* to do when she went out to glean?",
            "options": ["Glean in another field", "Drink the water the servants drew", "Go to the field of any man other than his", "Talk to the other servants"],
            "correct": "Go to the field of any man other than his",
            "reference": "Ruth 2:8",
            "difficulty": "Hard"
        },
        {
            "question": "The blessings pronounced on Boaz and Ruth at the city gate referred to Rachel and Leah, and also to the wife of Judah, whom Boaz's act was compared to. Who was she?",
            "options": ["Tamar", "Bathsheba", "Jael", "Zipporah"],
            "correct": "Tamar",
            "reference": "Ruth 4:12",
            "difficulty": "Hard"
        },
        {
            "question": "The women of Bethlehem praised Ruth for being better to Naomi than how many sons?",
            "options": ["Seven sons", "Twelve sons", "Three sons", "Ten sons"],
            "correct": "Seven sons",
            "reference": "Ruth 4:15",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the son born to Ruth and Boaz?",
            "options": ["Jesse", "Salmon", "Obed", "Mahlon"],
            "correct": "Obed",
            "reference": "Ruth 4:17",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific field was Boaz's field a part of, confirming the boundaries of his land?",
            "options": ["The field of Elimelech", "The field of Jesse", "The field of the closer kinsman", "The field of the Ephrathites"],
            "correct": "The field of Elimelech (This is the field Ruth gleaned in, which Boaz purchased)",
            "reference": "Ruth 4:3-5",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical action that Naomi requested of Ruth upon their return to Bethlehem, to signify their new status?",
            "options": ["To remove her mourning clothes", "To go and glean immediately", "To sit still until the matter was resolved", "To sell the remaining property"],
            "correct": "To sit still until the matter was resolved ('Sit still, my daughter, until you know how the matter will turn out.')",
            "reference": "Ruth 3:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific family role did the women of Bethlehem state that Ruth's son, Obed, would be to Naomi in her old age?",
            "options": ["He shall be to you a guide", "He shall be to you a rest", "He shall be to you a restorer of life and a nourisher of your old age", "He shall be to you a son"],
            "correct": "He shall be to you a restorer of life and a nourisher of your old age",
            "reference": "Ruth 4:15",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific legal term for the redemption process (redeeming the family, property, and lineage) that Boaz fulfilled?",
            "options": ["Levirate marriage", "Kinsman-redeemer (*go'el*)", "The Law of the Firstborn", "The Law of the Gleaning"],
            "correct": "Kinsman-redeemer (*go'el*)",
            "reference": "Ruth 2:20; 3:9, 12",
            "difficulty": "Extreme"
        },
        {
            "question": "What two requests (besides protection) did Ruth ask of Boaz when she lay at his feet at the threshing floor?",
            "options": ["To marry her and pay her debt", "To cover her with his cloak (spread his cloak over his servant) and act as kinsman-redeemer", "To give her food and shelter", "To free her from her vow"],
            "correct": "To cover her with his cloak (spread his cloak over his servant) and act as kinsman-redeemer",
            "reference": "Ruth 3:9",
            "difficulty": "Extreme"
        },
        {
            "question": "The genealogy at the end of the book concludes with the generation of what man?",
            "options": ["Boaz", "Jesse", "David", "Obed"],
            "correct": "David",
            "reference": "Ruth 4:22",
            "difficulty": "Extreme"
        },
        {
            "question": "In the presence of the elders at the gate, Boaz specifically declares his act of redemption is to raise up the name of the dead upon what?",
            "options": ["His house", "His inheritance (or 'his inheritance') and his land", "His seed (or 'inheritance')", "The name of his wife"],
            "correct": "His inheritance (or 'his inheritance') and his land",
            "reference": "Ruth 4:5, 10",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did Boaz instruct Ruth to perform after drinking from the vessels the young men had drawn?",
            "options": ["Continue gleaning until sunset", "Remain near his servants and go to no other field", "Eat with the reapers at mealtime", "Return to Naomi immediately"],
            "correct": "Remain near his servants and go to no other field",
            "reference": "Ruth 2:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific physical action did the nearer kinsman perform to signify that he was legally renouncing his right to redeem?",
            "options": ["He spat on the ground", "He cast off his shoe", "He ripped his cloak", "He broke a staff"],
            "correct": "He cast off his shoe",
            "reference": "Ruth 4:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific virtue does Boaz use to describe Ruth's actions, stating that her last kindness was better than the first?",
            "options": ["Her love for Naomi", "Her righteousness", "Her faithfulness (or 'last kindness was better than the first')", "Her humility"],
            "correct": "Her faithfulness (or 'last kindness was better than the first')",
            "reference": "Ruth 3:10",
            "difficulty": "Extreme"
        }
    ]
}

 {
    "book": "1 Samuel",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of 1 Samuel?",
            "options": ["The history of the last judge, the prophet Samuel, and the transition of Israel from the period of the Judges to the Monarchy under Saul and David", "The conquest of the Promised Land", "The rebuilding of the Temple", "The laws of the kingdom"],
            "correct": "The history of the last judge, the prophet Samuel, and the transition of Israel from the period of the Judges to the Monarchy under Saul and David",
            "reference": "Overall theme (1 Samuel 7, 8, 16)",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the faithful woman who prayed for a son at the Tabernacle in Shiloh and later dedicated him to the Lord?",
            "options": ["Ruth", "Hannah", "Peninnah", "Naomi"],
            "correct": "Hannah",
            "reference": "1 Samuel 1:10-20",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the High Priest who raised Samuel at the sanctuary in Shiloh?",
            "options": ["Aaron", "Phinehas", "Eli", "Zadok"],
            "correct": "Eli",
            "reference": "1 Samuel 1:9; 2:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the eventual fate of the High Priest Eli and his two sons, Hophni and Phinehas?",
            "options": ["They were exiled", "They were killed in battle against the Philistines, and the Ark was captured", "They were honored by the people", "They retired peacefully"],
            "correct": "They were killed in battle against the Philistines, and the Ark was captured",
            "reference": "1 Samuel 4:11, 18",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific object did the Philistines capture from Israel during their battle with Eli's sons?",
            "options": ["The Tabernacle", "The breastplate of the High Priest", "The Ark of the Covenant", "The golden calf"],
            "correct": "The Ark of the Covenant",
            "reference": "1 Samuel 4:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the first king of Israel?",
            "options": ["David", "Ish-Bosheth", "Saul", "Solomon"],
            "correct": "Saul",
            "reference": "1 Samuel 10:1",
            "difficulty": "Moderate"
        },
        {
            "question": "In what specific city was the first king secretly anointed by Samuel?",
            "options": ["Jerusalem", "Bethlehem", "Ramah", "Gibeah"],
            "correct": "Ramah (Samuel's home town)",
            "reference": "1 Samuel 10:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the giant Philistine warrior whom David defeated?",
            "options": ["Achish", "Goliath", "Ishbi-Benob", "Lahmi"],
            "correct": "Goliath",
            "reference": "1 Samuel 17:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of Saul's son who became David's closest friend?",
            "options": ["Abner", "Ish-Bosheth", "Jonathan", "Ahimilech"],
            "correct": "Jonathan",
            "reference": "1 Samuel 18:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the woman whom Saul consulted to call up the spirit of Samuel?",
            "options": ["The Witch of Endor", "The medium of En-dor", "The prophetess of Jezreel", "The sorceress of Gath"],
            "correct": "The medium of En-dor",
            "reference": "1 Samuel 28:7-8",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific physical characteristic of Saul made him stand out from the rest of the people?",
            "options": ["He was the richest man in Israel", "He was a good speaker", "He was taller than any of the people, from his shoulders upward", "He was a mighty warrior"],
            "correct": "He was taller than any of the people, from his shoulders upward",
            "reference": "1 Samuel 9:2",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the city David rescued from the Amalekites that had been plundered while David and his men were away?",
            "options": ["Hebron", "Jerusalem", "Ziklag", "Gath"],
            "correct": "Ziklag",
            "reference": "1 Samuel 30:1-8",
            "difficulty": "Hard"
        },
        {
            "question": "What two items did David secretly take from Saul while Saul was asleep in the camp, to prove he had spared Saul's life?",
            "options": ["His sword and his shield", "His spear and his water jug", "His armor and his signet ring", "His crown and his cloak"],
            "correct": "His spear and his water jug",
            "reference": "1 Samuel 26:11-12",
            "difficulty": "Hard"
        },
        {
            "question": "What reason did Saul give to Samuel for disobeying God's command to utterly destroy the Amalekites (sparing the best of the livestock)?",
            "options": ["He wanted to spare the women and children", "He feared the people and obeyed their voice, so he intended to sacrifice them to the Lord", "He loved their wealth", "He wanted to trade them for gold"],
            "correct": "He feared the people and obeyed their voice, so he intended to sacrifice them to the Lord",
            "reference": "1 Samuel 15:21, 24",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the loyal man who followed David faithfully through all his wanderings and served as David's general?",
            "options": ["Uriah", "Joab", "Abishai", "Benaiah"],
            "correct": "Joab",
            "reference": "Joab appears later as the general, but he is mentioned in David's early wanderings (1 Samuel 26:6)",
            "difficulty": "Hard"
        },
        {
            "question": "What specific curse did Goliath invoke against David before their duel?",
            "options": ["May God strike you dead", "May the gods of Philistia strike you dead", "Come to me, and I will give your flesh to the birds of the air and the beasts of the field", "May your family be cursed forever"],
            "correct": "Come to me, and I will give your flesh to the birds of the air and the beasts of the field",
            "reference": "1 Samuel 17:44",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who married David's wife, Michal, after Saul took her back from David?",
            "options": ["Abner", "Paltiel (or Palti)", "Joab", "Ish-Bosheth"],
            "correct": "Paltiel (or Palti)",
            "reference": "1 Samuel 25:44",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the righteous priest and friend of David whom Saul eventually ordered killed for helping David?",
            "options": ["Eli", "Ahimelech", "Zadok", "Abiathar"],
            "correct": "Ahimelech",
            "reference": "1 Samuel 22:16-18",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the town where David was born and later secretly anointed king by Samuel?",
            "options": ["Jerusalem", "Hebron", "Bethlehem", "Judea"],
            "correct": "Bethlehem",
            "reference": "1 Samuel 16:1, 4",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of David's wise wife who intervened to prevent David from taking revenge on her foolish, rich husband, Nabal?",
            "options": ["Michal", "Ahinoam", "Abigail", "Bathsheba"],
            "correct": "Abigail",
            "reference": "1 Samuel 25:3, 18-35",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What was the specific physical sign that accompanied the naming of Eli's grandson, meaning 'the glory has departed from Israel'?",
            "options": ["The boy was born blind", "The boy was born lame", "The news that the Ark of God had been captured", "The news that Eli had died"],
            "correct": "The news that the Ark of God had been captured (The child was named Ichabod)",
            "reference": "1 Samuel 4:21-22",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific part of the giant Goliath's armor did David NOT wear before the battle, rejecting Saul's equipment?",
            "options": ["The breastplate", "The helmet of bronze", "The armor and sword", "The shield and spear"],
            "correct": "The armor and sword",
            "reference": "1 Samuel 17:38-39",
            "difficulty": "Extreme"
        },
        {
            "question": "What does the phrase David used to name the place where the Lord burst forth on his enemies (the Philistines) mean?",
            "options": ["The Valley of Giants", "Baal Perazim (The Master of Breakthroughs)", "The Place of Deliverance", "The Lord is our Banner"],
            "correct": "Baal Perazim (The Master of Breakthroughs)",
            "reference": "2 Samuel 5:20 (This event occurs just after 1 Samuel, but is integral to David's story)",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the Philistine god whose statue fell and was broken before the captured Ark of the Covenant?",
            "options": ["Baal", "Ashtoreth", "Dagon", "Chemosh"],
            "correct": "Dagon",
            "reference": "1 Samuel 5:2-4",
            "difficulty": "Extreme"
        },
        {
            "question": "The people begged for a king, arguing they wanted to be like what specific group of people?",
            "options": ["The Egyptians", "All the nations", "The Philistines", "The Canaanites"],
            "correct": "All the nations",
            "reference": "1 Samuel 8:5, 20",
            "difficulty": "Extreme"
        },
        {
            "question": "Before anointing David, Samuel received a sharp instruction from God regarding appearance. What did God say He looks at, which is contrary to man's judgment?",
            "options": ["Man looks at the reputation, but the Lord looks at the heart", "Man looks at the outward appearance, but the Lord looks at the heart", "Man looks at the wisdom, but the Lord looks at the faith", "Man looks at the strength, but the Lord looks at the spirit"],
            "correct": "Man looks at the outward appearance, but the Lord looks at the heart",
            "reference": "1 Samuel 16:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did David perform when he was a fugitive and feigned madness before the Philistine King Achish?",
            "options": ["He pretended to be dumb", "He drooled on his beard and scratched marks on the doors of the gate", "He ran naked through the city", "He cursed the king's name"],
            "correct": "He drooled on his beard and scratched marks on the doors of the gate",
            "reference": "1 Samuel 21:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who, at Saul's command, executed the priests of Nob?",
            "options": ["Abner", "Joab", "Doeg the Edomite", "Abishai"],
            "correct": "Doeg the Edomite",
            "reference": "1 Samuel 22:18",
            "difficulty": "Extreme"
        },
        {
            "question": "When David defeated the Amalekites at Ziklag and recovered the plunder, he established a rule for dividing the spoils among those who fought and those who did what else?",
            "options": ["Those who stayed with the supplies (the sick and weary)", "Those who prayed for the victory", "The priests and Levites", "The poor in the cities"],
            "correct": "Those who stayed with the supplies (the sick and weary)",
            "reference": "1 Samuel 30:24-25",
            "difficulty": "Extreme"
        },
        {
            "question": "What two physical objects did the Philistines cut off from Saul's body and display after his death in battle?",
            "options": ["His hands and feet", "His head and his armor", "His head and his hands", "His sword and his crown"],
            "correct": "His head and his armor",
            "reference": "1 Samuel 31:9-10",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Samuel",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of 2 Samuel?",
            "options": ["The history of the last judge, Samuel", "The life and reign of King David", "The downfall of King Saul", "The division of the kingdom"],
            "correct": "The life and reign of King David",
            "reference": "Overall theme (2 Samuel 1-24)",
            "difficulty": "Moderate"
        },
        {
            "question": "In what city was David first anointed king over the house of Judah?",
            "options": ["Jerusalem", "Bethlehem", "Hebron", "Gibeah"],
            "correct": "Hebron",
            "reference": "2 Samuel 2:4",
            "difficulty": "Moderate"
        },
        {
            "question": "How long did David reign as king in Hebron over Judah alone before ruling all of Israel?",
            "options": ["One year", "Seven years and six months", "Twelve years", "Forty years"],
            "correct": "Seven years and six months",
            "reference": "2 Samuel 5:5",
            "difficulty": "Moderate"
        },
        {
            "question": "What city did David conquer and establish as the capital city of the entire unified kingdom of Israel?",
            "options": ["Shechem", "Hebron", "Jerusalem (Zion)", "Bethel"],
            "correct": "Jerusalem (Zion)",
            "reference": "2 Samuel 5:6-9",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary holy object did David bring into Jerusalem to establish it as the spiritual and political center of Israel?",
            "options": ["The Tabernacle", "The Golden Altar", "The Ark of the Covenant", "The Bronze Serpent"],
            "correct": "The Ark of the Covenant",
            "reference": "2 Samuel 6:12-17",
            "difficulty": "Moderate"
        },
        {
            "question": "Which prophet was sent by God to David to rebuke him concerning his sin with Bathsheba and the murder of Uriah?",
            "options": ["Ahijah", "Elijah", "Nathan", "Gad"],
            "correct": "Nathan",
            "reference": "2 Samuel 12:1-12",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the son born to David and Bathsheba after the death of their first child?",
            "options": ["Amnon", "Absalom", "Solomon", "Adonijah"],
            "correct": "Solomon",
            "reference": "2 Samuel 12:24",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the son of David who eventually led a major rebellion against his father, forcing David to flee Jerusalem?",
            "options": ["Amnon", "Absalom", "Adonijah", "Joab"],
            "correct": "Absalom",
            "reference": "2 Samuel 15:13-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the fate of David's rebellious son in the battle in the forest of Ephraim?",
            "options": ["He was captured and imprisoned", "He was hanged by his hair in an oak tree and killed by Joab", "He repented and was forgiven", "He fled to Geshur"],
            "correct": "He was hanged by his hair in an oak tree and killed by Joab",
            "reference": "2 Samuel 18:9, 14",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the crippled son of Jonathan whom David took in and showed kindness to, for Jonathan's sake?",
            "options": ["Amnon", "Mephibosheth", "Ziba", "Zadok"],
            "correct": "Mephibosheth",
            "reference": "2 Samuel 9:6-7",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific item did the Amalekite bring to David as proof of Saul's death, thinking it would please David?",
            "options": ["Saul's sword", "Saul's head", "Saul's crown and his armlet (or bracelet)", "Saul's armor"],
            "correct": "Saul's crown and his armlet (or bracelet)",
            "reference": "2 Samuel 1:10",
            "difficulty": "Hard"
        },
        {
            "question": "Who was the military commander of Saul's house (Israel) who fought against David's forces (Judah) and eventually defected to David?",
            "options": ["Joab", "Benaiah", "Abner", "Amasa"],
            "correct": "Abner",
            "reference": "2 Samuel 2:8-9; 3:12",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who died instantly when he put out his hand to steady the Ark of the Covenant as the oxen stumbled?",
            "options": ["Uzzah", "Ahio", "Obed-Edom", "Zadok"],
            "correct": "Uzzah",
            "reference": "2 Samuel 6:6-7",
            "difficulty": "Hard"
        },
        {
            "question": "In the Davidic Covenant, what specific promise did God make to David regarding his throne and kingdom?",
            "options": ["That he would build the Temple", "That his kingdom and throne would be established forever", "That he would defeat all his enemies", "That his descendants would be priests"],
            "correct": "That his kingdom and throne would be established forever",
            "reference": "2 Samuel 7:12-16",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the husband of Bathsheba, whom David conspired to have killed in battle?",
            "options": ["Abner", "Amasa", "Joab", "Uriah the Hittite"],
            "correct": "Uriah the Hittite",
            "reference": "2 Samuel 11:3, 15",
            "difficulty": "Hard"
        },
        {
            "question": "In Nathan's parable to David, what possession did the rich man take from the poor man?",
            "options": ["His only lamb", "His vineyard", "His only son", "His house"],
            "correct": "His only lamb",
            "reference": "2 Samuel 12:1-4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific consequence did David suffer because he sinned in numbering the people (taking a census)?",
            "options": ["His kingdom was taken away", "He lost a battle", "A plague was sent upon Israel, killing 70,000 men", "His sons rebelled against him"],
            "correct": "A plague was sent upon Israel, killing 70,000 men",
            "reference": "2 Samuel 24:15",
            "difficulty": "Hard"
        },
        {
            "question": "Who was the woman that despised David when he danced before the Lord as the Ark of the Covenant was brought into Jerusalem?",
            "options": ["Abigail", "Bathsheba", "Michal (Saul's daughter)", "Ahinoam"],
            "correct": "Michal (Saul's daughter)",
            "reference": "2 Samuel 6:16",
            "difficulty": "Hard"
        },
        {
            "question": "Who was the military commander who killed Absalom, against David's explicit orders to spare him?",
            "options": ["Abishai", "Joab", "Benaiah", "Ittai the Gittite"],
            "correct": "Joab",
            "reference": "2 Samuel 18:14",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who cursed David, throwing stones and dust at him while David was fleeing Absalom?",
            "options": ["Ziba", "Ahithophel", "Shimei", "Mephibosheth"],
            "correct": "Shimei",
            "reference": "2 Samuel 16:5-8",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific item did the Philistine giant Ishbi-Benob attempt to kill David with, only to be stopped by Abishai?",
            "options": ["A massive sword and a new coat of armor", "A new spear, weighing three hundred shekels of bronze, and a new sword", "A bronze axe and a massive club", "A shield and a helmet"],
            "correct": "A new spear, weighing three hundred shekels of bronze, and a new sword",
            "reference": "2 Samuel 21:16",
            "difficulty": "Extreme"
        },
        {
            "question": "When David brought the Ark into Jerusalem, the procession stopped every six paces to offer what?",
            "options": ["A prayer of thanksgiving", "A dance of praise", "An ox and a fatling (sacrifice)", "A shout of joy"],
            "correct": "An ox and a fatling (sacrifice)",
            "reference": "2 Samuel 6:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the great counselor of David who defected to Absalom's side, but whose counsel was ultimately defeated by Hushai?",
            "options": ["Ziba", "Shimei", "Ahithophel", "Ittai"],
            "correct": "Ahithophel",
            "reference": "2 Samuel 15:31; 16:23",
            "difficulty": "Extreme"
        },
        {
            "question": "When Ahithophel realized his counsel had been rejected, what was his immediate action?",
            "options": ["He fled to Geshur", "He joined David's camp", "He saddled his donkey, went home, and hanged himself", "He offered a sacrifice to the Lord"],
            "correct": "He saddled his donkey, went home, and hanged himself",
            "reference": "2 Samuel 17:23",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who owned the threshing floor where the Angel of the Lord was standing when David offered a sacrifice to stop the plague?",
            "options": ["Ziba", "Shimei", "Araunah the Jebusite", "Hiram of Tyre"],
            "correct": "Araunah the Jebusite",
            "reference": "2 Samuel 24:18-24",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical sign that distinguished Absalom in a crowd, which ultimately led to his death?",
            "options": ["His great height", "His vast wealth", "His exceptionally heavy head of hair", "His unique armor"],
            "correct": "His exceptionally heavy head of hair",
            "reference": "2 Samuel 14:26",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific reason did Joab give for killing Abner, despite Abner's surrender to David?",
            "options": ["Abner had killed Joab's brother, Asahel", "Abner was a threat to David's kingship", "Abner had insulted David", "Abner was a worshipper of foreign gods"],
            "correct": "Abner had killed Joab's brother, Asahel",
            "reference": "2 Samuel 3:27, 30",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific title or term did David use to refer to God in his song of deliverance (2 Samuel 22)?",
            "options": ["My Father and my King", "My Savior and my Redeemer", "My Rock and my Fortress", "My Lord and my God"],
            "correct": "My Rock and my Fortress",
            "reference": "2 Samuel 22:2-3",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific sin of David that prophet Nathan rebuked him for in 2 Samuel 12:9-10?",
            "options": ["You have despised the commandment of the Lord, by taking the wife of Uriah the Hittite and killing Uriah with the sword of the Ammonites", "You murdered Uriah and stole his wife", "You have sinned against the Lord and against your people", "You broke the covenant"],
            "correct": "You have despised the commandment of the Lord, by taking the wife of Uriah the Hittite and killing Uriah with the sword of the Ammonites",
            "reference": "2 Samuel 12:9-10",
            "difficulty": "Extreme"
        },
        {
            "question": "Who was the last living military commander of the house of Saul, who was killed by Joab in Hebron?",
            "options": ["Ish-Bosheth", "Abner", "Amasa", "Shimei"],
            "correct": "Abner",
            "reference": "2 Samuel 3:27-30",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "1 Kings",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of 1 Kings?",
            "options": ["The reign of King David", "The reign of Solomon, the division of the united kingdom, and the history of the divided kingdoms of Israel and Judah", "The history of the prophets Elijah and Elisha", "The rebuilding of the Temple"],
            "correct": "The reign of Solomon, the division of the united kingdom, and the history of the divided kingdoms of Israel and Judah",
            "reference": "Overall theme (1 Kings 1–11: Solomon; 1 Kings 12–22: Division and early kings)",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the son of David who succeeded him as King of Israel?",
            "options": ["Adonijah", "Absalom", "Solomon", "Amnon"],
            "correct": "Solomon",
            "reference": "1 Kings 1:39-40",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific request did Solomon make of God during his dream encounter at Gibeon?",
            "options": ["Long life and great wealth", "A wise and discerning heart to govern the people", "The defeat of his enemies", "A glorious kingdom"],
            "correct": "A wise and discerning heart to govern the people",
            "reference": "1 Kings 3:5, 9",
            "difficulty": "Moderate"
        },
        {
            "question": "What major structure did Solomon spend seven years building in Jerusalem?",
            "options": ["The City Walls", "The Royal Palace", "The Temple (or 'House of the Lord')", "The House of the Forest of Lebanon"],
            "correct": "The Temple (or 'House of the Lord')",
            "reference": "1 Kings 6:38",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the king of Tyre who supplied Solomon with cedar, cypress, and skilled labor for the building projects?",
            "options": ["Sheshai", "Hiram", "Adoniram", "Rezon"],
            "correct": "Hiram",
            "reference": "1 Kings 5:1-12",
            "difficulty": "Moderate"
        },
        {
            "question": "What warning did God give Solomon concerning his heart and his many foreign wives?",
            "options": ["That they would make him weak", "That they would turn his heart away to worship other gods", "That they would make his kingdom unstable", "That they would steal his wealth"],
            "correct": "That they would turn his heart away to worship other gods",
            "reference": "1 Kings 11:4-9",
            "difficulty": "Moderate"
        },
        {
            "question": "After Solomon's death, the united kingdom split into what two separate kingdoms?",
            "options": ["Israel (North) and Judah (South)", "Ephraim and Manasseh", "Shechem and Jerusalem", "Moab and Ammon"],
            "correct": "Israel (North) and Judah (South)",
            "reference": "1 Kings 12:16-20",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the first king of the Northern Kingdom of Israel (ten tribes)?",
            "options": ["Rehoboam", "Jeroboam", "Omri", "Ahab"],
            "correct": "Jeroboam",
            "reference": "1 Kings 12:20",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the wicked queen who promoted the worship of Baal in Israel and often opposed the prophet Elijah?",
            "options": ["Athaliah", "Jezebel", "Maacah", "Abigail"],
            "correct": "Jezebel",
            "reference": "1 Kings 16:31",
            "difficulty": "Moderate"
        },
        {
            "question": "On what mountain did Elijah challenge the 450 prophets of Baal, resulting in fire consuming his sacrifice?",
            "options": ["Mount Zion", "Mount Carmel", "Mount Sinai", "Mount Horeb"],
            "correct": "Mount Carmel",
            "reference": "1 Kings 18:19-39",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of the man who led a brief revolt against Solomon and was eventually killed by Joab?",
            "options": ["Adonijah", "Shimei", "Jeroboam", "Joab"],
            "correct": "Adonijah",
            "reference": "1 Kings 2:24-25",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Solomon make that caused the Queen of Sheba to lose her breath and praise his wisdom and wealth?",
            "options": ["His golden throne with six steps and twelve lions", "His Temple of the Lord", "His royal palace", "His bronze altar"],
            "correct": "His golden throne with six steps and twelve lions",
            "reference": "1 Kings 10:19-20",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did Jeroboam take to prevent the people of the Northern Kingdom (Israel) from going to Jerusalem to worship?",
            "options": ["He blocked the roads", "He established two golden calves in Bethel and Dan", "He built a new temple in Samaria", "He outlawed the pilgrimage festivals"],
            "correct": "He established two golden calves in Bethel and Dan",
            "reference": "1 Kings 12:28-30",
            "difficulty": "Hard"
        },
        {
            "question": "What was the phrase used by the ten tribes of Israel when they rejected Rehoboam (Solomon's son) and chose Jeroboam as king?",
            "options": ["To your tents, O Israel!", "Rehoboam will not be king!", "To the mountains of Ephraim!", "Judah is forsaken!"],
            "correct": "To your tents, O Israel!",
            "reference": "1 Kings 12:16",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical action did the prophet Ahijah perform when he prophesied that Jeroboam would rule ten tribes of Israel?",
            "options": ["He called down fire from heaven", "He took a new garment and tore it into twelve pieces, giving ten to Jeroboam", "He anointed Jeroboam with oil", "He smashed an altar"],
            "correct": "He took a new garment and tore it into twelve pieces, giving ten to Jeroboam",
            "reference": "1 Kings 11:29-31",
            "difficulty": "Hard"
        },
        {
            "question": "During the great drought prophesied by Elijah, where did God command the prophet to hide, and what two provisions did God miraculously provide for him there?",
            "options": ["Mount Carmel; manna and water", "The house of the widow in Zarephath; flour and oil", "The Brook Cherith; bread and water brought by ravens", "Mount Horeb; water and wine"],
            "correct": "The Brook Cherith; bread and water brought by ravens",
            "reference": "1 Kings 17:3-6",
            "difficulty": "Hard"
        },
        {
            "question": "What specific instruction did Elijah give the people regarding his sacrifice on Mount Carmel to ensure there was no deception?",
            "options": ["Pour water on the sacrifice three times, filling the trenches", "Offer only a bull, not a lamb", "Rebuild the altar immediately", "Have the priests of Baal light the fire first"],
            "correct": "Pour water on the sacrifice three times, filling the trenches",
            "reference": "1 Kings 18:33-35",
            "difficulty": "Hard"
        },
        {
            "question": "Who was the official in Ahab's house who feared the Lord and hid one hundred prophets in two caves, feeding them bread and water?",
            "options": ["Elisha", "Jezebel", "Obadiah", "Micaiah"],
            "correct": "Obadiah",
            "reference": "1 Kings 18:3-4",
            "difficulty": "Hard"
        },
        {
            "question": "After the great victory on Mount Carmel, where did Elijah flee in despair, receiving comfort from the angel of the Lord?",
            "options": ["To the city of Jezreel", "Into the wilderness to Mount Horeb (Sinai)", "To the house of the widow of Zarephath", "To the court of Jehoshaphat"],
            "correct": "Into the wilderness to Mount Horeb (Sinai)",
            "reference": "1 Kings 19:3-8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific vice led King Ahab to unjustly acquire the vineyard of Naboth?",
            "options": ["Greed and covetousness", "Lust for power", "Love of foreign gods", "Anger and pride"],
            "correct": "Greed and covetousness",
            "reference": "1 Kings 21:1-16",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What were the names of the two great bronze pillars set up at the entrance of the Temple, symbolizing strength and stability?",
            "options": ["Pillar of Fire and Pillar of Cloud", "Mount Ebal and Mount Gerizim", "Boaz and Jachin", "The Golden Altar and the Bronze Sea"],
            "correct": "Boaz and Jachin",
            "reference": "1 Kings 7:21",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific part of the Temple was built *without* the sound of hammer, axe, or any iron tool?",
            "options": ["The Holy of Holies", "The foundation stones", "The main structure (the house itself)", "The Bronze Sea"],
            "correct": "The main structure (the house itself)",
            "reference": "1 Kings 6:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who, after the division of the kingdom, rebuilt the city of Jericho, thereby incurring the curse spoken by Joshua?",
            "options": ["Adoniram", "Hiel of Bethel", "Baasha", "Zimri"],
            "correct": "Hiel of Bethel",
            "reference": "1 Kings 16:34 (Cross-reference Joshua 6:26)",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the fate of the man of God from Judah, who prophesied against the altar at Bethel, due to his disobedience to a lying prophet from Samaria?",
            "options": ["He was struck by fire from heaven", "He was exiled to Samaria", "He was killed by a lion on the road", "He was imprisoned by Jeroboam"],
            "correct": "He was killed by a lion on the road",
            "reference": "1 Kings 13:24-25",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific number of faithful Israelites did God tell Elijah He had reserved who had not bowed the knee to Baal?",
            "options": ["700", "7,000", "12,000", "70,000"],
            "correct": "7,000",
            "reference": "1 Kings 19:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the prophet whom King Ahab hated because he only prophesied evil concerning Ahab?",
            "options": ["Elijah", "Obadiah", "Micaiah, son of Imlah", "Elisha"],
            "correct": "Micaiah, son of Imlah",
            "reference": "1 Kings 22:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific promise that God gave to King Jeroboam if he walked in obedience, which he ultimately forfeited due to the golden calves?",
            "options": ["To restore the united kingdom", "To build a great temple in Samaria", "To build Jeroboam an enduring house (dynasty) as He built for David", "To give him wealth and long life"],
            "correct": "To build Jeroboam an enduring house (dynasty) as He built for David",
            "reference": "1 Kings 11:38",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the fate of King Ahab, fulfilling Elijah's prophecy, during the battle at Ramoth Gilead?",
            "options": ["He was killed by a stray arrow, and dogs licked up his blood as he was being washed", "He was captured and executed by the Syrians", "He fled and hid for three years", "He was killed by the prophet Elisha"],
            "correct": "He was killed by a stray arrow, and dogs licked up his blood as he was being washed",
            "reference": "1 Kings 22:34-38",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the last of the four kings of the Northern Kingdom's first dynasty (Jeroboam's line)?",
            "options": ["Nadab", "Baasha", "Elah", "Zimri"],
            "correct": "Nadab",
            "reference": "1 Kings 15:25-26",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific part of the Temple contained the golden altar of incense, the table of showbread, and the golden lampstand?",
            "options": ["The Court of the Priests", "The Holy Place", "The Holy of Holies", "The Porch"],
            "correct": "The Holy Place",
            "reference": "1 Kings 7:48-50",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Kings",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of 2 Kings?",
            "options": ["The reign of King David", "The continuation of the history of the divided kingdoms (Israel and Judah), focusing on the ministries of Elijah and Elisha, and leading to the eventual exile of both kingdoms", "The rebuilding of the Temple after the exile", "The laws governing the prophets"],
            "correct": "The continuation of the history of the divided kingdoms (Israel and Judah), focusing on the ministries of Elijah and Elisha, and leading to the eventual exile of both kingdoms",
            "reference": "Overall theme (2 Kings 1–17: Israel's fall; 2 Kings 18–25: Judah's fall)",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific method did the prophet Elijah use to ascend to heaven?",
            "options": ["He walked up Mount Nebo", "He was taken up in a whirlwind by a chariot of fire and horses of fire", "He was carried away by an angel", "He was taken up during his sleep"],
            "correct": "He was taken up in a whirlwind by a chariot of fire and horses of fire",
            "reference": "2 Kings 2:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What object did the prophet Elisha pick up that symbolized the transfer of Elijah's prophetic authority and power to him?",
            "options": ["Elijah's staff", "Elijah's mantle (or cloak)", "Elijah's sword", "Elijah's scroll"],
            "correct": "Elijah's mantle (or cloak)",
            "reference": "2 Kings 2:13",
            "difficulty": "Moderate"
        },
        {
            "question": "What famous military commander was healed of leprosy by Elisha after being told to wash seven times in the Jordan River?",
            "options": ["Ben-Hadad", "Naaman (the Syrian commander)", "Jezebel", "Hazael"],
            "correct": "Naaman (the Syrian commander)",
            "reference": "2 Kings 5:10, 14",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the last dynasty of the Northern Kingdom (Israel)?",
            "options": ["Omri's dynasty", "Jeroboam's dynasty", "Jehu's dynasty", "Ahab's dynasty"],
            "correct": "Jehu's dynasty",
            "reference": "2 Kings 10:30 (Jehu's line reigned the longest in the North)",
            "difficulty": "Moderate"
        },
        {
            "question": "What king of the Northern Kingdom (Israel) was responsible for bringing about the end of the wicked house of Ahab, destroying Baal worship?",
            "options": ["Ahab", "Joram", "Jehu", "Pekah"],
            "correct": "Jehu",
            "reference": "2 Kings 9:6-10; 10:28",
            "difficulty": "Moderate"
        },
        {
            "question": "What nation was responsible for conquering the Northern Kingdom of Israel and carrying its people into exile?",
            "options": ["Babylon", "Assyria", "Egypt", "Syria"],
            "correct": "Assyria",
            "reference": "2 Kings 17:6",
            "difficulty": "Moderate"
        },
        {
            "question": "Which King of Judah, famous for his righteousness and religious reforms, found the Book of the Law in the Temple?",
            "options": ["Manasseh", "Hezekiah", "Josiah", "Ahaz"],
            "correct": "Josiah",
            "reference": "2 Kings 22:8-10",
            "difficulty": "Moderate"
        },
        {
            "question": "Which nation was responsible for conquering the Southern Kingdom of Judah, destroying the Temple, and taking the people into exile?",
            "options": ["Assyria", "Babylon", "Egypt", "Media"],
            "correct": "Babylon",
            "reference": "2 Kings 25:1-11",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the Babylonian king who besieged Jerusalem and carried the people into exile?",
            "options": ["Sennacherib", "Tiglath-Pileser III", "Nebuchadnezzar", "Cyrus"],
            "correct": "Nebuchadnezzar",
            "reference": "2 Kings 24:1, 10-14",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What two types of animals killed the forty-two youths who mocked Elisha, calling him 'Baldhead'?",
            "options": ["Lions and bears", "Bears (two female bears)", "Wolves and dogs", "Serpents and scorpions"],
            "correct": "Bears (two female bears)",
            "reference": "2 Kings 2:23-24",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Elisha instruct the widow to gather to miraculously fill with oil to pay her debts?",
            "options": ["All the grain in her house", "Every empty vessel (jar) she could find", "Water from the river", "Gold from her neighbors"],
            "correct": "Every empty vessel (jar) she could find",
            "reference": "2 Kings 4:3-4",
            "difficulty": "Hard"
        },
        {
            "question": "What did Naaman's servant, Gehazi, suffer as a consequence of his greed in pursuing a gift from Naaman without Elisha's knowledge?",
            "options": ["He was struck blind", "He was struck with leprosy", "He was struck deaf", "He was struck mute"],
            "correct": "He was struck with leprosy",
            "reference": "2 Kings 5:25-27",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the king of Judah who, after being trapped and threatened by the Assyrian king Sennacherib, prayed for deliverance and saw the angel of the Lord destroy 185,000 Assyrian soldiers?",
            "options": ["Ahaz", "Manasseh", "Hezekiah", "Amon"],
            "correct": "Hezekiah",
            "reference": "2 Kings 19:14-19, 35",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the High Priest who found the Book of the Law in the Temple during the reign of Josiah?",
            "options": ["Zadok", "Jehoiada", "Hilkiah", "Abiathar"],
            "correct": "Hilkiah",
            "reference": "2 Kings 22:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did King Josiah take in his reforms that involved burning the bones of the priests of the high places on their own altars?",
            "options": ["He destroyed the calves at Bethel", "He fulfilled the prophecy of the man of God against Jeroboam's altar", "He cleansed the Temple", "He executed the false prophets"],
            "correct": "He fulfilled the prophecy of the man of God against Jeroboam's altar",
            "reference": "2 Kings 23:15-16",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the city that became the capital of the Northern Kingdom of Israel (from the reign of Omri onward)?",
            "options": ["Bethel", "Shechem", "Samaria", "Tirzah"],
            "correct": "Samaria",
            "reference": "2 Kings 17:5-6 (Samaria's fall)",
            "difficulty": "Hard"
        },
        {
            "question": "What specific event happened when a dead man was thrown into the grave of Elisha, causing the body to revive?",
            "options": ["The man's spirit returned to him immediately", "The man was struck by lightning", "The dead man came alive and stood on his feet when he touched Elisha's bones", "The ground trembled"],
            "correct": "The dead man came alive and stood on his feet when he touched Elisha's bones",
            "reference": "2 Kings 13:20-21",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical manifestation of God's presence filled the mountain around Elisha and his servant during the Syrian siege of Dothan?",
            "options": ["A blinding light", "Chariots and horses of fire", "A host of angels", "A thick cloud"],
            "correct": "Chariots and horses of fire",
            "reference": "2 Kings 6:17",
            "difficulty": "Hard"
        },
        {
            "question": "What specific prophet correctly warned the people that King Manasseh's idolatry had sealed the fate of Judah, guaranteeing the destruction of Jerusalem?",
            "options": ["Isaiah", "Jeremiah", "The prophets serving Josiah", "Huldah the prophetess"],
            "correct": "Huldah the prophetess",
            "reference": "2 Kings 22:14-17",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What was the name of the captain of fifty whom Elijah called down fire from heaven to consume for disrespecting the prophet?",
            "options": ["Naaman", "Jehu", "Ahaziah", "First captain of fifty"],
            "correct": "First captain of fifty",
            "reference": "2 Kings 1:9-10",
            "difficulty": "Extreme"
        },
        {
            "question": "Elisha performed a miracle for the sons of the prophets, causing what specific item to float in the Jordan River?",
            "options": ["A large stone", "An iron axe head", "A piece of wood", "A scroll"],
            "correct": "An iron axe head",
            "reference": "2 Kings 6:5-7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific punishment did King Joram (son of Ahab) face after Elisha's prophecy concerning the siege of Samaria, resulting in a severe famine?",
            "options": ["He was struck with leprosy", "He was killed by Jehu", "The famine was so severe that mothers resorted to cannibalism", "He was exiled to Syria"],
            "correct": "The famine was so severe that mothers resorted to cannibalism",
            "reference": "2 Kings 6:28-29",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did the wife of Jehoiada, the priest, take to save Joash, the last surviving heir of David, from the murderous Queen Athaliah?",
            "options": ["She hid him in the Temple of God for six years", "She smuggled him to a foreign country", "She hid him in a well", "She disguised him as a Levite"],
            "correct": "She hid him in the Temple of God for six years",
            "reference": "2 Kings 11:2-3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific physical item did the prophet Isaiah instruct King Hezekiah to apply to his severe boil to save his life?",
            "options": ["Olive oil and wine", "A cake of figs", "A piece of cloth", "A mixture of spices"],
            "correct": "A cake of figs",
            "reference": "2 Kings 20:7",
            "difficulty": "Extreme"
        },
        {
            "question": "King Hezekiah received an extension of his life. By what specific sign was this miracle confirmed?",
            "options": ["The sun turning back ten steps (degrees) on the sundial of Ahaz", "The Jordan River flowing backward", "The earth trembling", "The moon turning blood red"],
            "correct": "The sun turning back ten steps (degrees) on the sundial of Ahaz",
            "reference": "2 Kings 20:9-11",
            "difficulty": "Extreme"
        },
        {
            "question": "After the destruction of Samaria, what specific consequence did the King of Assyria impose upon the remaining Israelites to prevent them from becoming a political threat?",
            "options": ["He forced them to pay heavy taxes", "He intermingled the Israelite population with foreign settlers", "He made them slaves to his empire", "He forced them to worship his gods"],
            "correct": "He intermingled the Israelite population with foreign settlers",
            "reference": "2 Kings 17:24",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the final king of Judah whose eyes were put out by Nebuchadnezzar after watching his sons executed?",
            "options": ["Jehoiakim", "Jehoiachin", "Zedekiah", "Jehoahaz"],
            "correct": "Zedekiah",
            "reference": "2 Kings 25:6-7",
            "difficulty": "Extreme"
        },
        {
            "question": "What two tribes were the only ones that remained faithful to the Davidic dynasty after the kingdom split?",
            "options": ["Judah and Benjamin", "Judah and Levi", "Benjamin and Simeon", "Judah and Ephraim"],
            "correct": "Judah and Benjamin",
            "reference": "1 Kings 12:21; 2 Kings 11:1-2 (The Northern Kingdom took 10 tribes, leaving Judah and Benjamin)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action was the final act of mercy shown to a captive king of Judah by the King of Babylon (Evil-Merodach) at the very end of 2 Kings?",
            "options": ["He was allowed to return to Jerusalem", "He was released from prison, given an allowance, and ate regularly at the King's table", "He was allowed to die peacefully", "He was returned to his family"],
            "correct": "He was released from prison, given an allowance, and ate regularly at the King's table",
            "reference": "2 Kings 25:27-30",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "1 Chronicles",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme and perspective of 1 Chronicles?",
            "options": ["The history of the Northern Kingdom (Israel)", "A priestly perspective of the history of the kings of Judah (David's line), emphasizing the Temple, the priesthood, and proper worship", "The laws of the kingdom and prophetic ministry", "The rebuilding of the city walls"],
            "correct": "A priestly perspective of the history of the kings of Judah (David's line), emphasizing the Temple, the priesthood, and proper worship",
            "reference": "Overall theme (Focus on Judah, David, Temple, and genealogy)",
            "difficulty": "Moderate"
        },
        {
            "question": "The first nine chapters of 1 Chronicles are primarily dedicated to what specific type of record?",
            "options": ["Prophecies", "Genealogies (starting with Adam)", "Laws of the Temple", "Songs and poetry"],
            "correct": "Genealogies (starting with Adam)",
            "reference": "1 Chronicles 1-9",
            "difficulty": "Moderate"
        },
        {
            "question": "Which specific tribe's genealogy is followed most closely throughout the first section of 1 Chronicles?",
            "options": ["Levi (the priests)", "Reuben (the firstborn)", "Judah (the royal line)", "Benjamin (Saul's tribe)"],
            "correct": "Judah (the royal line)",
            "reference": "1 Chronicles 2-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the name of the last king of Israel, whose death is used as the concluding point of the narrative inherited from 1 Samuel?",
            "options": ["David", "Ish-Bosheth", "Saul", "Solomon"],
            "correct": "Saul",
            "reference": "1 Chronicles 10:13-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What major city did David conquer and establish as the capital city of the entire unified kingdom of Israel?",
            "options": ["Hebron", "Jerusalem (Zion)", "Bethel", "Gibeah"],
            "correct": "Jerusalem (Zion)",
            "reference": "1 Chronicles 11:4-9",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary holy object did David bring into Jerusalem to establish it as the spiritual center of Israel?",
            "options": ["The Tabernacle", "The Golden Altar", "The Ark of the Covenant", "The Bronze Serpent"],
            "correct": "The Ark of the Covenant",
            "reference": "1 Chronicles 13:5-8; 15:25",
            "difficulty": "Moderate"
        },
        {
            "question": "What prophet was sent by God to David to deliver the covenant promise concerning David's everlasting dynasty?",
            "options": ["Samuel", "Elijah", "Nathan", "Gad"],
            "correct": "Nathan",
            "reference": "1 Chronicles 17:1-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific task did God forbid David from performing, but promised his son would accomplish?",
            "options": ["Defeating all his enemies", "Building the Temple (House of God)", "Writing the Psalms", "Bringing the Ark to Jerusalem"],
            "correct": "Building the Temple (House of God)",
            "reference": "1 Chronicles 17:4, 11-12",
            "difficulty": "Moderate"
        },
        {
            "question": "What did David provide for in great abundance, despite not being allowed to build the Temple himself?",
            "options": ["A mighty army", "Gold, silver, and materials for the Temple's construction", "A wise administration", "New laws and ordinances"],
            "correct": "Gold, silver, and materials for the Temple's construction",
            "reference": "1 Chronicles 22:14",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the son of David who was publicly anointed and commissioned to succeed David as king?",
            "options": ["Adonijah", "Absalom", "Solomon", "Amnon"],
            "correct": "Solomon",
            "reference": "1 Chronicles 29:22-24",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "The three groups who were established for service by David (the priests, the Levites, and the singers/musicians) belonged primarily to which tribe?",
            "options": ["Judah", "Benjamin", "Levi", "Reuben"],
            "correct": "Levi",
            "reference": "1 Chronicles 23-26",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who died instantly when he put out his hand to steady the Ark of the Covenant, initially causing David to leave the Ark outside Jerusalem?",
            "options": ["Ahio", "Obed-Edom", "Uzza (or Uzzah)", "Zadok"],
            "correct": "Uzza (or Uzzah)",
            "reference": "1 Chronicles 13:9-10",
            "difficulty": "Hard"
        },
        {
            "question": "After the Ark incident, the Ark stayed in the house of what Gittite man before David brought it into Jerusalem?",
            "options": ["Ittai the Gittite", "Obed-Edom the Gittite", "Zadok the Priest", "Abinadab"],
            "correct": "Obed-Edom the Gittite",
            "reference": "1 Chronicles 13:13-14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did God promise to give David's son that symbolized God's continual guidance and presence?",
            "options": ["Long life and riches", "A righteous heart", "My grace and My mercy", "The wisdom of God"],
            "correct": "My grace and My mercy",
            "reference": "1 Chronicles 17:13",
            "difficulty": "Hard"
        },
        {
            "question": "What specific phrase does David use to refer to the great men in his army (e.g., Joab, Abishai, Benaiah)?",
            "options": ["The Mighty Men (or 'the mighty men')", "The Commanders of Israel", "The Army of the Lord", "The Valiant Men"],
            "correct": "The Mighty Men (or 'the mighty men')",
            "reference": "1 Chronicles 11:10-47",
            "difficulty": "Hard"
        },
        {
            "question": "What was the specific sin of David that prompted God to send a plague upon Israel, leading David to offer a sacrifice on the threshing floor?",
            "options": ["Adultery with Bathsheba", "Taking a census of the people", "Failing to build the Temple", "Disobeying the Law"],
            "correct": "Taking a census of the people",
            "reference": "1 Chronicles 21:1-8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did David perform before the Lord when the Ark was brought into Jerusalem?",
            "options": ["He wept and repented", "He offered a large sacrifice", "He danced and leaped with all his might, wearing a linen ephod", "He sang a new song of praise"],
            "correct": "He danced and leaped with all his might, wearing a linen ephod",
            "reference": "1 Chronicles 15:29",
            "difficulty": "Hard"
        },
        {
            "question": "What tribe of Israel, besides Judah, was the source of Saul and the first section of the genealogies in 1 Chronicles 8?",
            "options": ["Levi", "Benjamin", "Reuben", "Ephraim"],
            "correct": "Benjamin",
            "reference": "1 Chronicles 8:28-34",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who owned the threshing floor David purchased to build the altar upon and stop the plague?",
            "options": ["Ziba", "Shimei", "Araunah the Jebusite (or 'Ornan the Jebusite')", "Hushai"],
            "correct": "Araunah the Jebusite (or 'Ornan the Jebusite')",
            "reference": "1 Chronicles 21:18, 28",
            "difficulty": "Hard"
        },
        {
            "question": "David instructed Solomon to deal with three people before his death, including Shimei, Joab, and which other surviving member of Saul's house?",
            "options": ["Mephibosheth", "Abner", "Adonijah", "Shimei"],
            "correct": "Adonijah",
            "reference": "1 Kings 2:5-9 (Context is David's final instructions, though the execution is in 1 Kings)",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What was the specific promise that God made to David's dynasty concerning the place where David wanted to build the Temple?",
            "options": ["The Lord would fight his battles", "The Lord would build him a house (dynasty) and establish his seed forever", "The Lord would give him wisdom and knowledge", "The Lord would bless his house with wealth"],
            "correct": "The Lord would build him a house (dynasty) and establish his seed forever",
            "reference": "1 Chronicles 17:10-14",
            "difficulty": "Extreme"
        },
        {
            "question": "What two tribes were positioned on the west side of the Tabernacle in the wilderness, which served as the location of David's primary tribe and the tribe that held the future priesthood?",
            "options": ["Judah and Issachar", "Ephraim and Manasseh", "Levi and Judah", "Reuben and Simeon"],
            "correct": "Ephraim and Manasseh (The western side was Ephraim, Manasseh, and Benjamin)",
            "reference": "Numbers 2:18-24 (Though Judah is East, the question relates to Levitical/Ephraimite organization)",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the precise number of the census of fighting men David took in Israel and Judah before the plague struck?",
            "options": ["800,000 men in Israel and 500,000 men in Judah", "1,100,000 men in Israel and 470,000 men in Judah", "1,000,000 men in Israel and 400,000 men in Judah", "1,300,000 men in total"],
            "correct": "1,100,000 men in Israel and 470,000 men in Judah",
            "reference": "1 Chronicles 21:5",
            "difficulty": "Extreme"
        },
        {
            "question": "In David's final prayer (1 Chron 29), he emphasizes that all things come from God. What phrase does he use regarding the source of their offerings?",
            "options": ["For we are strangers and sojourners", "But who am I, and who are my people?", "For all things come from You, and of Your own we have given You", "The abundance of the sacrifice comes from Your hand"],
            "correct": "For all things come from You, and of Your own we have given You",
            "reference": "1 Chronicles 29:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific Levite families were responsible for the outward service and transport of the Tabernacle?",
            "options": ["The sons of Aaron", "The families of Gershon and Merari", "The sons of Kohath", "The priests and the prophets"],
            "correct": "The families of Gershon and Merari",
            "reference": "Numbers 3:21-37 (Contextual law for 1 Chronicles Levite duties)",
            "difficulty": "Extreme"
        },
        {
            "question": "David established the order of the priests (sons of Aaron) into how many courses (divisions) for Temple service?",
            "options": ["Twelve courses", "Eighteen courses", "Twenty-four courses", "Forty-eight courses"],
            "correct": "Twenty-four courses",
            "reference": "1 Chronicles 24:4-18",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the man who held the highest command over David's field military divisions and his inner circle of advisors?",
            "options": ["Joab", "Benaiah", "Ahithophel", "Adoram"],
            "correct": "Joab (Commander of the army)",
            "reference": "1 Chronicles 27:34",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did the mighty man Benaiah, the son of Jehoiada, defeat a massive Egyptian with?",
            "options": ["A sword", "A spear (the Egyptian had one, Benaiah had a staff)", "A club", "A stone"],
            "correct": "A spear (The Egyptian had one, Benaiah had a staff, and he took the spear and killed him)",
            "reference": "1 Chronicles 11:23",
            "difficulty": "Extreme"
        },
        {
            "question": "The three chief musicians whom David appointed to lead the Temple worship were Heman, Asaph, and whom else?",
            "options": ["Ethan (Jeduthun)", "Korah", "Zadok", "Nathan"],
            "correct": "Ethan (Jeduthun)",
            "reference": "1 Chronicles 15:19; 25:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the final instruction that David gave to all the officials of Israel concerning Solomon, to ensure the success of the Temple building?",
            "options": ["Obey all his commands", "Help my son Solomon, and build the sanctuary of the Lord God", "Provide the materials generously", "Do not let Adonijah rebel again"],
            "correct": "Help my son Solomon, and build the sanctuary of the Lord God",
            "reference": "1 Chronicles 22:17-19",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Chronicles",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary focus of 2 Chronicles, continuing the theme of 1 Chronicles?",
            "options": ["The history of the Northern Kingdom (Israel)", "The history of the kings of Judah (David's line), emphasizing the Temple, the priesthood, and God's covenant with David", "The rebuilding of the Temple after the exile", "The prophetic ministry in the divided kingdom"],
            "correct": "The history of the kings of Judah (David's line), emphasizing the Temple, the priesthood, and God's covenant with David",
            "reference": "Overall theme (Focus on Solomon and the kings of Judah only)",
            "difficulty": "Moderate"
        },
        {
            "question": "What great structure did Solomon dedicate to the Lord in the early chapters of 2 Chronicles?",
            "options": ["The royal palace", "The Altar of Burnt Offering", "The Temple in Jerusalem", "The City Walls"],
            "correct": "The Temple in Jerusalem",
            "reference": "2 Chronicles 5:1-7:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific visible sign did God send to show His acceptance of Solomon's dedication and sacrifice?",
            "options": ["The earth trembled", "Fire came down from heaven and consumed the burnt offering and the sacrifices, and the glory of the Lord filled the temple", "An angel appeared before the people", "A bright cloud appeared over the Ark"],
            "correct": "Fire came down from heaven and consumed the burnt offering and the sacrifices, and the glory of the Lord filled the temple",
            "reference": "2 Chronicles 7:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What promise does God give Solomon in 2 Chronicles 7:14 regarding healing the land?",
            "options": ["If they rebuild the Temple, I will bless them", "If My people who are called by My name will humble themselves and pray, I will hear from heaven and forgive their sin and heal their land", "If they defeat their enemies, I will give them peace", "If they keep the Law, I will grant them long life"],
            "correct": "If My people who are called by My name will humble themselves and pray, I will hear from heaven and forgive their sin and heal their land",
            "reference": "2 Chronicles 7:14",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the king who invaded Judah and plundered the Temple treasures during the reign of Rehoboam?",
            "options": ["Sennacherib (Assyria)", "Shishak (Egypt)", "Nebuchadnezzar (Babylon)", "Hiram (Tyre)"],
            "correct": "Shishak (Egypt)",
            "reference": "2 Chronicles 12:2-9",
            "difficulty": "Moderate"
        },
        {
            "question": "Which righteous king of Judah tore down the altars of foreign gods and high places and restored Temple worship?",
            "options": ["Ahaz", "Manasseh", "Hezekiah", "Amon"],
            "correct": "Hezekiah",
            "reference": "2 Chronicles 30:1-31:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What nation was responsible for the final destruction of Jerusalem and the Temple, leading to the seventy-year exile?",
            "options": ["Assyria", "Egypt", "Babylon", "Edom"],
            "correct": "Babylon",
            "reference": "2 Chronicles 36:17-21",
            "difficulty": "Moderate"
        },
        {
            "question": "Which Persian king, at the very end of 2 Chronicles, issued a decree allowing the exiled Jews to return and rebuild the Temple?",
            "options": ["Darius", "Artaxerxes", "Cyrus", "Xerxes"],
            "correct": "Cyrus",
            "reference": "2 Chronicles 36:22-23",
            "difficulty": "Moderate"
        },
        {
            "question": "What sin is frequently cited as the reason for God's judgment and the eventual fall of Judah?",
            "options": ["Failing to pay taxes", "Worshipping idols and following the abominations of the nations", "Disobeying the king", "Failing to build a large army"],
            "correct": "Worshipping idols and following the abominations of the nations",
            "reference": "2 Chronicles 33:2-9; 36:14-16",
            "difficulty": "Moderate"
        },
        {
            "question": "What spiritual lesson does the author repeatedly emphasize as the key to Judah's success under its righteous kings?",
            "options": ["Building strong alliances", "Seeking the Lord and obeying His Law", "Having a large army", "Gathering wealth and resources"],
            "correct": "Seeking the Lord and obeying His Law",
            "reference": "Examples of Jehoshaphat (2 Chr 20:3), Uzziah (2 Chr 26:5)",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific item or part of the Temple was built of pure gold, used to house the Ark of the Covenant?",
            "options": ["The Holy Place", "The Holy of Holies (or 'inner sanctuary')", "The Altar of Burnt Offering", "The Bronze Sea"],
            "correct": "The Holy of Holies (or 'inner sanctuary')",
            "reference": "2 Chronicles 3:8, 10",
            "difficulty": "Hard"
        },
        {
            "question": "What king of Judah built treasuries, storehouses, and defense towers to prepare for a coming war, relying on the Lord and the prophet Oded?",
            "options": ["Asa", "Jehoshaphat", "Amaziah", "Jotham"],
            "correct": "Asa",
            "reference": "2 Chronicles 14:3-15",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the king of Judah who faced a massive coalition of Ammonites, Moabites, and Meunites, but was delivered when God instructed him only to send out singers and praisers?",
            "options": ["Asa", "Jehoshaphat", "Uzziah", "Hezekiah"],
            "correct": "Jehoshaphat",
            "reference": "2 Chronicles 20:1-29",
            "difficulty": "Hard"
        },
        {
            "question": "What wicked action did Queen Athaliah (daughter of Ahab and Jezebel) take upon the death of her son, King Ahaziah?",
            "options": ["She converted to Baal worship", "She destroyed the Temple", "She seized the throne and killed all the royal heirs of the house of Judah", "She made an alliance with Assyria"],
            "correct": "She seized the throne and killed all the royal heirs of the house of Judah",
            "reference": "2 Chronicles 22:10",
            "difficulty": "Hard"
        },
        {
            "question": "Who was the young heir to the throne who was saved from Athaliah's purge and hidden in the Temple for six years?",
            "options": ["Hezekiah", "Josiah", "Joash (or 'Jehoash')", "Manasseh"],
            "correct": "Joash (or 'Jehoash')",
            "reference": "2 Chronicles 22:11",
            "difficulty": "Hard"
        },
        {
            "question": "What famous prophet was sent by God to King Hezekiah to warn him of his impending death, only for God to reverse the decree after Hezekiah's prayer?",
            "options": ["Nathan", "Elijah", "Isaiah", "Jeremiah"],
            "correct": "Isaiah",
            "reference": "2 Chronicles 32:24",
            "difficulty": "Hard"
        },
        {
            "question": "What specific sin did King Manasseh commit that was described as worse than the abominations of the nations God drove out, sealing Judah's fate?",
            "options": ["He killed his own servants", "He worshiped the host of heaven and sacrificed his children in the Valley of Hinnom", "He defiled the Law of Moses", "He allied with Babylon"],
            "correct": "He worshiped the host of heaven and sacrificed his children in the Valley of Hinnom",
            "reference": "2 Chronicles 33:6, 9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item was found in the Temple during King Josiah's reign that prompted him to tear his clothes and initiate nationwide repentance?",
            "options": ["The Ark of the Covenant", "The Book of the Law", "A golden idol", "The Breastplate of the High Priest"],
            "correct": "The Book of the Law",
            "reference": "2 Chronicles 34:14-19",
            "difficulty": "Hard"
        },
        {
            "question": "What was the eventual fate of King Manasseh after his wickedness, which led to his repentance and restoration?",
            "options": ["He was assassinated by his servants", "He was captured by the King of Assyria, bound with fetters, and exiled to Babylon", "He died in battle against Egypt", "He was forced to rebuild the Temple"],
            "correct": "He was captured by the King of Assyria, bound with fetters, and exiled to Babylon",
            "reference": "2 Chronicles 33:11-13",
            "difficulty": "Hard"
        },
        {
            "question": "The final destruction of Jerusalem and the Temple occurred in the reign of what last king of Judah?",
            "options": ["Jehoiakim", "Jehoiachin", "Zedekiah", "Jehoahaz"],
            "correct": "Zedekiah",
            "reference": "2 Chronicles 36:11-17",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Solomon's wisdom was so great that he spoke 3,000 what, and his songs numbered 1,005?",
            "options": ["Poems", "Proverbs", "Oracles", "Judgments"],
            "correct": "Proverbs",
            "reference": "1 Kings 4:32 (Contextual detail included in the Chronicler's view of Solomon)",
            "difficulty": "Extreme"
        },
        {
            "question": "What two names were given to the colossal bronze oxen that supported the great bronze 'sea' (laver) outside the Temple?",
            "options": ["Boaz and Jachin", "Twelve oxen facing four directions (not individual names)", "The sea and the water", "The Lord's strength and stability"],
            "correct": "Twelve oxen facing four directions (not individual names)",
            "reference": "2 Chronicles 4:4 (The question is a trick, the pillars had names, the oxen were in sets of 3 facing North, South, East, West)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did King Rehoboam take that led to the division of the kingdom, rejecting the counsel of the old men?",
            "options": ["He taxed the people heavily", "He threatened to punish the people with whips, and his little finger would be thicker than his father's waist", "He promoted Baal worship", "He raised a huge army"],
            "correct": "He threatened to punish the people with whips, and his little finger would be thicker than his father's waist",
            "reference": "2 Chronicles 10:13-14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did the Lord command to be brought to the Temple during the Passover of King Hezekiah, signifying the restoration of the covenant?",
            "options": ["The Ark of the Covenant", "The Book of the Law", "The Levitical priests and singers", "The blood of the sacrifices"],
            "correct": "The Levitical priests and singers",
            "reference": "2 Chronicles 30:21-22",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the final fate of King Joash, who had been rescued and installed by Jehoiada the priest, after he apostatized and murdered Jehoiada's son, Zechariah?",
            "options": ["He was struck with leprosy", "He was exiled to Babylon", "He was assassinated by his own servants (conspiracy)", "He died in battle"],
            "correct": "He was assassinated by his own servants (conspiracy)",
            "reference": "2 Chronicles 24:25",
            "difficulty": "Extreme"
        },
        {
            "question": "What two key characteristics describe the High Priest Jehoiada, whose leadership preserved the Davidic line and restored the Temple?",
            "options": ["He was strong and courageous", "He restored the Law and the Sabbath", "He was righteous and powerful in prophecy", "He was old (died at 130) and made a covenant with the leaders",],
            "correct": "He was old (died at 130) and made a covenant with the leaders",
            "reference": "2 Chronicles 23:1; 24:15",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific musical instrument was played when the people finished the Temple foundation and when the dedication occurred, as ordained by David?",
            "options": ["The flute", "The trumpet", "The cymbal (or 'cymbals')", "The lyre"],
            "correct": "The trumpet",
            "reference": "2 Chronicles 5:12-13",
            "difficulty": "Extreme"
        },
        {
            "question": "King Uzziah, who reigned well, eventually committed a sin of pride that resulted in what specific judgment from God?",
            "options": ["He was assassinated by his son", "He was struck with leprosy and lived in a separate house until the day of his death", "He lost a major battle to the Philistines", "He died of a fever"],
            "correct": "He was struck with leprosy and lived in a separate house until the day of his death",
            "reference": "2 Chronicles 26:19-21",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law stated that the priests' regular duty was to stand every morning and evening to thank and praise the Lord and to serve whom?",
            "options": ["The people of Israel", "The king and his officials", "The sons of Aaron (or 'their brothers')", "The other Levites"],
            "correct": "The sons of Aaron (or 'their brothers')",
            "reference": "1 Chronicles 23:30-32 (Context for priestly duties)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific phrase does the author use to describe the reaction of the people to God's warnings through the prophets in the final years before the Babylonian exile?",
            "options": ["They wept and repented", "They mocked the messengers of God, despised His words, and scoffed at His prophets", "They listened to the words of Jeremiah", "They exiled the prophets who warned them"],
            "correct": "They mocked the messengers of God, despised His words, and scoffed at His prophets",
            "reference": "2 Chronicles 36:16",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Ezra",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Ezra?",
            "options": ["The history of the Babylonian exile", "The restoration of the Jewish people from Babylonian captivity to Jerusalem and the rebuilding of the Temple", "The laws of the returned people", "The prophecies concerning the Messiah"],
            "correct": "The restoration of the Jewish people from Babylonian captivity to Jerusalem and the rebuilding of the Temple",
            "reference": "Overall theme (Ezra 1:1-3; 6:15)",
            "difficulty": "Moderate"
        },
        {
            "question": "Which Persian king issued the decree that allowed the Jewish exiles to return to Jerusalem and rebuild the Temple?",
            "options": ["Artaxerxes", "Darius I", "Cyrus the Great", "Xerxes"],
            "correct": "Cyrus the Great",
            "reference": "Ezra 1:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary political leader led the first major wave of Jewish exiles back to Jerusalem?",
            "options": ["Ezra the Scribe", "Nehemiah the Governor", "Sheshbazzar (Zerubbabel's uncle/governor)", "Joshua the High Priest"],
            "correct": "Sheshbazzar (Zerubbabel's uncle/governor)",
            "reference": "Ezra 1:8; 2:2 (Zerubbabel is the leader of the people in the second list)",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific holy object (or set of objects) did King Cyrus return to the exiles to be used in the rebuilt Temple?",
            "options": ["The Ark of the Covenant", "The golden altar and lampstands", "The articles (vessels) of the house of the Lord (Temple treasury)", "The crown of the King of Judah"],
            "correct": "The articles (vessels) of the house of the Lord (Temple treasury)",
            "reference": "Ezra 1:7-11",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the main religious leader who served as High Priest for the returned exiles?",
            "options": ["Joshua, son of Jozadak", "Ezra the Scribe", "Zadok, the High Priest", "Nehemiah"],
            "correct": "Joshua, son of Jozadak",
            "reference": "Ezra 3:2; 5:2",
            "difficulty": "Moderate"
        },
        {
            "question": "The rebuilding of what structure was the first major priority of the returned exiles in Jerusalem?",
            "options": ["The City Walls", "The altar of the God of Israel", "The Royal Palace", "The Priests' homes"],
            "correct": "The altar of the God of Israel",
            "reference": "Ezra 3:2-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the initial reaction of the old men who remembered Solomon's original Temple when the foundation of the new Temple was laid?",
            "options": ["They shouted for joy", "They wept loudly", "They were silent", "They complained about the cost"],
            "correct": "They wept loudly",
            "reference": "Ezra 3:12-13",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific group of people offered to help rebuild the Temple, but their help was rejected by the leaders of Judah?",
            "options": ["The Samaritans (or 'adversaries of Judah and Benjamin')", "The Babylonians", "The Phoenicians", "The Edomites"],
            "correct": "The Samaritans (or 'adversaries of Judah and Benjamin')",
            "reference": "Ezra 4:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the Persian king in whose sixth year the rebuilt Temple was finally completed and dedicated?",
            "options": ["Cyrus", "Xerxes", "Artaxerxes", "Darius I"],
            "correct": "Darius I",
            "reference": "Ezra 6:15",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific group of people did Ezra primarily condemn upon his arrival in Jerusalem, which led to a mass repentance and reform?",
            "options": ["The priests and people who had taken foreign wives", "The leaders who failed to rebuild the walls", "The Levites who stopped offering sacrifices", "The people who ignored the Sabbath"],
            "correct": "The priests and people who had taken foreign wives",
            "reference": "Ezra 9:1-2; 10:10-11",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the phrase used by the rejected group (Samaritans) to describe the Jews, which they used in their letters to the Persian King to stop the rebuilding?",
            "options": ["Rebellious and wicked people", "Building a wall to defy the King", "Rebellious and wicked city", "Idolaters returning to the land"],
            "correct": "Rebellious and wicked city",
            "reference": "Ezra 4:12",
            "difficulty": "Hard"
        },
        {
            "question": "In what specific royal location was the original decree of Cyrus found, which allowed the rebuilding to resume under Darius?",
            "options": ["Babylon", "Susa (Shushan)", "Ecbatana (or 'Achmetha', in the palace of the province of Media)", "Persepolis"],
            "correct": "Ecbatana (or 'Achmetha', in the palace of the province of Media)",
            "reference": "Ezra 6:2",
            "difficulty": "Hard"
        },
        {
            "question": "What were the names of the two post-exilic prophets whose encouragement helped the returned exiles resume the rebuilding of the Temple after a long delay?",
            "options": ["Malachi and Joel", "Haggai and Zechariah", "Isaiah and Jeremiah", "Obadiah and Nahum"],
            "correct": "Haggai and Zechariah",
            "reference": "Ezra 5:1-2",
            "difficulty": "Hard"
        },
        {
            "question": "What three characteristics describe the purpose of Ezra's mission when he arrived in Jerusalem in the seventh year of King Artaxerxes?",
            "options": ["To rebuild the walls, establish the Law, and appoint judges", "To study the Law of the Lord, to practice it, and to teach statutes and ordinances in Israel", "To offer sacrifices, cleanse the Temple, and appoint priests", "To lead the army and defeat the enemies of Israel"],
            "correct": "To study the Law of the Lord, to practice it, and to teach statutes and ordinances in Israel",
            "reference": "Ezra 7:10",
            "difficulty": "Hard"
        },
        {
            "question": "What two key religious leaders were at the forefront of the people's repentance and confession regarding the sin of intermarriage?",
            "options": ["Zerubbabel and Nehemiah", "Joshua the High Priest and Ezra the Scribe", "Shecaniah and Ezra the Scribe", "Haggai and Zechariah"],
            "correct": "Shecaniah and Ezra the Scribe",
            "reference": "Ezra 10:1-5",
            "difficulty": "Hard"
        },
        {
            "question": "What specific reason did Ezra give to King Artaxerxes for not asking for soldiers and horsemen to protect them on their journey?",
            "options": ["He did not want to pay the soldiers", "He was ashamed to ask, having told the king that the hand of their God was upon all those who seek Him for good", "He feared the King would reject him", "He believed his army was sufficient"],
            "correct": "He was ashamed to ask, having told the king that the hand of their God was upon all those who seek Him for good",
            "reference": "Ezra 8:22",
            "difficulty": "Hard"
        },
        {
            "question": "What name did the returned exiles give to the Temple, referring to it in its rebuilt state?",
            "options": ["The Temple of the Lord", "The House of Glory", "The Temple of Zerubbabel (or 'The Second Temple')", "The New Sanctuary"],
            "correct": "The Temple of Zerubbabel (or 'The Second Temple')",
            "reference": "Historical name, rooted in Zerubbabel's leadership (Ezra 6:15)",
            "difficulty": "Hard"
        },
        {
            "question": "The exiles returning to Jerusalem were primarily descended from the tribes of what former kingdom?",
            "options": ["The Northern Kingdom (Israel)", "The remnant of all twelve tribes", "The Southern Kingdom (Judah, Benjamin, and Levi)", "The tribes of Reuben and Gad"],
            "correct": "The Southern Kingdom (Judah, Benjamin, and Levi)",
            "reference": "Ezra 1:5; 4:1",
            "difficulty": "Hard"
        },
        {
            "question": "How many total men, women, children, and servants were recorded in the first returning group under Zerubbabel and Joshua?",
            "options": ["About 10,000", "About 50,000 (specifically 42,360 people, plus 7,337 servants)", "About 100,000", "About 25,000"],
            "correct": "About 50,000 (specifically 42,360 people, plus 7,337 servants)",
            "reference": "Ezra 2:64-65",
            "difficulty": "Hard"
        },
        {
            "question": "What major holy observance did the returned exiles celebrate in the seventh month, even before the Temple foundation was laid?",
            "options": ["Passover", "The Feast of Tabernacles (Booths)", "Yom Kippur (Day of Atonement)", "Feast of Weeks (Pentecost)"],
            "correct": "The Feast of Tabernacles (Booths)",
            "reference": "Ezra 3:4",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The adversaries (Samaritans) succeeded in stopping the work on the Temple in the reign of what specific Persian king, whose name means 'The Fierce King'?",
            "options": ["Cyrus", "Darius", "Artaxerxes (the long-reign king)", "Ahasuerus (Xerxes)"],
            "correct": "Artaxerxes (the long-reign king) (Work stopped during his reign, Ezra 4:23)",
            "reference": "Ezra 4:7, 23 (The work was stopped until the second year of Darius)",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical boundary that Ezra tore off, along with his clothes, in a public display of mourning and repentance over the sin of intermarriage?",
            "options": ["His hair and beard", "His garment and the mantle", "His linen ephod and the fringes", "His phylacteries and his sandals"],
            "correct": "His garment and the mantle",
            "reference": "Ezra 9:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item or material was commanded in the decree of Cyrus to be used for the rebuilding of the Temple that would be sixty cubits high and sixty cubits wide?",
            "options": ["Cedar and marble", "Three rows of huge stones and one row of timber (new wood)", "Bronze and silver", "Gold and precious stones"],
            "correct": "Three rows of huge stones and one row of timber (new wood)",
            "reference": "Ezra 6:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Ezra refers to the sin of intermarriage as 'the faithlessness of the exiles' and compares it to the former iniquities of whom?",
            "options": ["The Amorites and the Canaanites (or 'peoples of the lands')", "The prophets and the kings of old", "The people of Sodom and Gomorrah", "The people of the wilderness"],
            "correct": "The Amorites and the Canaanites (or 'peoples of the lands')",
            "reference": "Ezra 9:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific duration of the enforced work stoppage on the Temple after the initial foundation was laid and the adversaries began their opposition?",
            "options": ["Seven years", "Until the second year of Darius (approx 15-16 years)", "One year and seven months", "The lifetime of Cyrus"],
            "correct": "Until the second year of Darius (approx 15-16 years)",
            "reference": "Ezra 4:24 (The work stopped until the second year of Darius)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific day of the first month was the dedication of the completed Temple celebrated, corresponding to the final day of the Feast of Unleavened Bread?",
            "options": ["The first day of the month", "The tenth day of the month", "The fourteenth day of the month", "The twenty-fourth day of the month"],
            "correct": "The twenty-fourth day of the month (The 14th day of the first month was the start of the Passover; the dedication followed soon after, Ezra 6:15, 19)",
            "reference": "Ezra 6:15, 19 (The temple was finished on the 3rd of Adar; the dedication followed, and the Passover was held on the 14th of the first month)",
            "difficulty": "Extreme"
        },
        {
            "question": "Who was the individual who spoke up in the midst of the people's great repentance, urging Ezra to 'take courage' and proceed with the firm plan to separate from the foreign wives?",
            "options": ["Zerubbabel", "Joshua the High Priest", "Shecaniah the son of Jehiel, of the sons of Elam", "Nehemiah"],
            "correct": "Shecaniah the son of Jehiel, of the sons of Elam",
            "reference": "Ezra 10:2-4",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical manifestation Ezra displayed to show his deep distress after hearing about the people's sin upon his arrival?",
            "options": ["He fasted for seven days", "He sat down appalled (or 'sat down astonished') until the evening sacrifice", "He tore his clothes and pulled hair from his head and beard", "He left the city immediately"],
            "correct": "He tore his clothes and pulled hair from his head and beard",
            "reference": "Ezra 9:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific title did King Artaxerxes confer upon Ezra, authorizing him to appoint magistrates and judges and to teach the Law in the trans-Euphrates region?",
            "options": ["Governor of Judea", "The Chief Priest", "Scribe of the Law of the God of Heaven", "Servant of the King"],
            "correct": "Scribe of the Law of the God of Heaven",
            "reference": "Ezra 7:12",
            "difficulty": "Extreme"
        },
        {
            "question": "The returned exiles set apart men to organize and investigate the matter of the foreign wives. This investigation and resolution took how long to complete?",
            "options": ["One month", "Three months", "Seven months", "One year"],
            "correct": "Three months",
            "reference": "Ezra 10:16-17",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Nehemiah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Nehemiah?",
            "options": ["The spiritual reform under Ezra", "The rebuilding of the Temple", "The rebuilding of the walls of Jerusalem and the restoration of the community", "The history of the Babylonian exile"],
            "correct": "The rebuilding of the walls of Jerusalem and the restoration of the community",
            "reference": "Nehemiah 1:3; 6:15",
            "difficulty": "Moderate"
        },
        {
            "question": "What was Nehemiah's professional role in the court of the Persian King Artaxerxes?",
            "options": ["Scribe and Priest", "Cupbearer to the King", "Governor of Judah", "Military Commander"],
            "correct": "Cupbearer to the King",
            "reference": "Nehemiah 1:11; 2:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific devastating news prompted Nehemiah to mourn, fast, and pray before the king?",
            "options": ["The Samaritans were attacking the Temple", "The walls of Jerusalem were broken down and its gates burned with fire", "A great famine had struck Judah", "The King planned to stop the Jewish return"],
            "correct": "The walls of Jerusalem were broken down and its gates burned with fire",
            "reference": "Nehemiah 1:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "Which Persian King granted Nehemiah permission to return to Jerusalem as governor to rebuild the walls?",
            "options": ["Cyrus the Great", "Darius I", "Artaxerxes I", "Xerxes (Ahasuerus)"],
            "correct": "Artaxerxes I",
            "reference": "Nehemiah 2:1, 6-8",
            "difficulty": "Moderate"
        },
        {
            "question": "What were the names of the three primary enemies who constantly mocked and plotted against Nehemiah and the workers?",
            "options": ["Sanballat the Horonite, Tobiah the Ammonite, and Geshem the Arab", "Hiram, Shishak, and Sennacherib", "Darius, Cyrus, and Artaxerxes", "Ezra, Joshua, and Zerubbabel"],
            "correct": "Sanballat the Horonite, Tobiah the Ammonite, and Geshem the Arab",
            "reference": "Nehemiah 2:10, 19",
            "difficulty": "Moderate"
        },
        {
            "question": "In what incredibly short time frame was the wall of Jerusalem completed, despite constant opposition?",
            "options": ["Three years", "Fifty-two days", "One year and seven months", "Seven weeks"],
            "correct": "Fifty-two days",
            "reference": "Nehemiah 6:15",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific item did the workers hold in one hand while building the wall?",
            "options": ["A tool (or a sword) and a brick", "A scroll of the Law", "Their building tool and their weapon (sword/spear)", "A stone and mortar"],
            "correct": "Their building tool and their weapon (sword/spear)",
            "reference": "Nehemiah 4:17-18",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the priest and scribe who publicly read the Book of the Law to the assembled people, leading them to great confession and repentance?",
            "options": ["Nehemiah", "Joshua the High Priest", "Ezra", "Zerubbabel"],
            "correct": "Ezra",
            "reference": "Nehemiah 8:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "The public reading of the Law prompted the people to weep, but Nehemiah commanded them to stop and instead celebrate what?",
            "options": ["The Feast of Trumpets (Rosh Hashanah) and rejoice, for the joy of the Lord is their strength", "The Feast of Tabernacles", "The Dedication of the Walls", "The Sabbath"],
            "correct": "The Feast of Trumpets (Rosh Hashanah) and rejoice, for the joy of the Lord is their strength",
            "reference": "Nehemiah 8:9-10",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific reform did Nehemiah enforce, commanding the merchants and foreign traders to stop violating the holiness of the day?",
            "options": ["The law against intermarriage", "The payment of the tithes", "The keeping of the Sabbath", "The release of slaves"],
            "correct": "The keeping of the Sabbath",
            "reference": "Nehemiah 13:15-22",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What phrase did Nehemiah use to silence the ridicule of his enemies, affirming God's power to defeat them?",
            "options": ["Our God will fight for us", "The God of heaven Himself will prosper us", "We have nothing to fear", "Let the king deal with you"],
            "correct": "The God of heaven Himself will prosper us",
            "reference": "Nehemiah 2:20",
            "difficulty": "Hard"
        },
        {
            "question": "What physical ailment did Nehemiah cite as the reason for his sadness, which he revealed to the King?",
            "options": ["Sickness and fever", "The ruin of the city of his fathers' tombs", "Loss of his job", "Fear of his enemies"],
            "correct": "The ruin of the city of his fathers' tombs",
            "reference": "Nehemiah 2:3",
            "difficulty": "Hard"
        },
        {
            "question": "Nehemiah was appointed governor by King Artaxerxes. For how many initial years was he granted this governorship?",
            "options": ["Two years", "Seven years", "Twelve years", "Forty years"],
            "correct": "Twelve years",
            "reference": "Nehemiah 5:14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific reform did Nehemiah address among the Jews, compelling the nobles and officials to give back the fields and the interest they had charged their poor brethren?",
            "options": ["Law of the Firstborn", "Law of the Sabbath", "Law of Usury (or 'high interest')", "Law of the Tithe"],
            "correct": "Law of Usury (or 'high interest')",
            "reference": "Nehemiah 5:6-12",
            "difficulty": "Hard"
        },
        {
            "question": "What specific type of deceitful individual did Nehemiah expose, who pretended to be a prophet to frighten Nehemiah into hiding in the Temple?",
            "options": ["An astrologer", "Shemaiah, a hired prophet", "A servant of Tobiah", "A sorcerer"],
            "correct": "Shemaiah, a hired prophet",
            "reference": "Nehemiah 6:10-12",
            "difficulty": "Hard"
        },
        {
            "question": "After the completion of the walls, how did the people select which ten percent of the population would move inside the city of Jerusalem?",
            "options": ["Nehemiah chose the families", "The Levites appointed them", "By casting lots", "By volunteerism"],
            "correct": "By casting lots",
            "reference": "Nehemiah 11:1-2",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the chamber in the Temple complex that the priest Eliashib prepared for Tobiah the Ammonite, which Nehemiah later cleansed?",
            "options": ["The treasury room", "The great chamber (or 'a large room')", "The high priest's chamber", "The Levites' room"],
            "correct": "The great chamber (or 'a large room')",
            "reference": "Nehemiah 13:4-8",
            "difficulty": "Hard"
        },
        {
            "question": "What did the people do with the copies of the Law that Ezra read publicly, showing their physical submission and repentance?",
            "options": ["They wept and tore their clothes", "They stood up and lifted their hands to the Lord and bowed their heads and worshiped", "They offered a sacrifice", "They kissed the scroll"],
            "correct": "They stood up and lifted their hands to the Lord and bowed their heads and worshiped",
            "reference": "Nehemiah 8:5-6",
            "difficulty": "Hard"
        },
        {
            "question": "What specific tribe did Nehemiah discover was not receiving its assigned portions, causing them to abandon their Temple service and work in their fields?",
            "options": ["Judah", "Benjamin", "Levi", "Reuben"],
            "correct": "Levi",
            "reference": "Nehemiah 13:10",
            "difficulty": "Hard"
        },
        {
            "question": "What specific language did Nehemiah discover the children of the intermarried Jews were speaking, making them unable to speak the 'language of Judah'?",
            "options": ["Ammonite and Moabite", "Philistine and Ashdodite", "Babylonian and Persian", "Phoenician and Greek"],
            "correct": "Philistine and Ashdodite",
            "reference": "Nehemiah 13:23-24",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific item or structure did the enemies offer to build themselves outside Jerusalem, hoping to lure Nehemiah away to kill him?",
            "options": ["A sanctuary", "A tower in the plain of Ono", "A new city wall", "A large military camp"],
            "correct": "A tower in the plain of Ono",
            "reference": "Nehemiah 6:2",
            "difficulty": "Extreme"
        },
        {
            "question": "When Nehemiah prayed upon hearing the news of Jerusalem's state, what specific Old Testament figure's words did he explicitly recall, which spoke of judgment and restoration?",
            "options": ["The Law of Moses (or 'the command that You gave Your servant Moses')", "The prophecy of Jeremiah", "The words of Isaiah", "The covenant with Abraham"],
            "correct": "The Law of Moses (or 'the command that You gave Your servant Moses')",
            "reference": "Nehemiah 1:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific family role did Nehemiah claim he did *not* exercise during his governorship, setting himself apart from previous governors?",
            "options": ["He did not take the pay that was due to him as governor", "He did not take the governor's allowance (or 'eat the bread of the governor')", "He did not charge interest on loans", "He did not build a private residence"],
            "correct": "He did not take the governor's allowance (or 'eat the bread of the governor')",
            "reference": "Nehemiah 5:14-15",
            "difficulty": "Extreme"
        },
        {
            "question": "The two great companies that participated in the dedication of the rebuilt walls met at what specific point in Jerusalem before proceeding in opposite directions?",
            "options": ["The Fish Gate", "The Valley Gate (or 'the Valley Gate')", "The Water Gate", "The Temple steps"],
            "correct": "The Water Gate",
            "reference": "Nehemiah 12:37",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did the adversaries threaten to report to the king, falsely accusing Nehemiah of planning to do what?",
            "options": ["Planning to steal the gold of the Temple", "Planning to rebel and appoint himself king, and have prophets declare him king in Jerusalem", "Planning to destroy the Law of Moses", "Planning to build a military fortress"],
            "correct": "Planning to rebel and appoint himself king, and have prophets declare him king in Jerusalem",
            "reference": "Nehemiah 6:6-7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific title did Nehemiah give the main adversary, Sanballat, in his first prayer regarding the rebuilding of the walls?",
            "options": ["The enemy of God", "The Horonite", "The Governor of Samaria", "The chief of the false prophets"],
            "correct": "The Horonite",
            "reference": "Nehemiah 2:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific date (day of the month) was set for the great public reading of the Law by Ezra?",
            "options": ["The first day of the seventh month", "The tenth day of the seventh month", "The fifteenth day of the seventh month", "The twenty-fourth day of the seventh month"],
            "correct": "The first day of the seventh month",
            "reference": "Nehemiah 8:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific oath did Nehemiah require the people to swear when they separated from their foreign wives and children?",
            "options": ["An oath by the name of the Lord", "An oath to keep the Sabbath and pay tithes", "An oath to return to the Law of Moses and uphold all the commandments", "An oath to serve the king faithfully"],
            "correct": "An oath to keep the Sabbath and pay tithes",
            "reference": "Nehemiah 10:29-30 (The oaths cover the Law, marriage, Sabbath, and tithes)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific reform did Nehemiah institute regarding the wood offering, ensuring the altar fire would not fail?",
            "options": ["He assigned Levites to guard the wood", "He made arrangements for the priests and the people to bring the wood offering at appointed times", "He paid the woodcutters a salary", "He required a special tax for wood"],
            "correct": "He made arrangements for the priests and the people to bring the wood offering at appointed times",
            "reference": "Nehemiah 10:34; 13:31",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the final, one-word plea Nehemiah made to God in the last verse of the book, demonstrating his lifelong commitment to service?",
            "options": ["Remember me, O my God, for good", "Prosper my efforts", "Be with my children", "Protect this city"],
            "correct": "Remember me, O my God, for good",
            "reference": "Nehemiah 13:31",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Esther",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Esther?",
            "options": ["The rebuilding of the Temple after the exile", "The story of God's sovereign preservation of His people (the Jews) through human means in the Persian Empire", "The laws of the Persian Empire", "The marriage customs of the exiles"],
            "correct": "The story of God's sovereign preservation of His people (the Jews) through human means in the Persian Empire",
            "reference": "Overall theme (Esther 4:14)",
            "difficulty": "Moderate"
        },
        {
            "question": "In what great Persian capital city did the events of Esther primarily take place?",
            "options": ["Babylon", "Persepolis", "Susa (Shushan the citadel)", "Ecbatana"],
            "correct": "Susa (Shushan the citadel)",
            "reference": "Esther 1:2, 5",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the original name of Queen Esther before she was chosen by the king?",
            "options": ["Abigail", "Hadassah", "Vashti", "Zeresh"],
            "correct": "Hadassah",
            "reference": "Esther 2:7",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the king of Persia (also known as Xerxes) who made Esther queen?",
            "options": ["Cyrus", "Darius", "Artaxerxes", "Ahasuerus"],
            "correct": "Ahasuerus",
            "reference": "Esther 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific annual Jewish feast was instituted to commemorate the deliverance of the Jews from destruction?",
            "options": ["Passover", "The Feast of Tabernacles", "Purim", "Hanukkah"],
            "correct": "Purim",
            "reference": "Esther 9:26",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of Esther's cousin and guardian who instructed her not to reveal her Jewish identity?",
            "options": ["Harbona", "Hegai", "Mordecai", "Memucan"],
            "correct": "Mordecai",
            "reference": "Esther 2:7, 10",
            "difficulty": "Moderate"
        },
        {
            "question": "What position did the wicked man Haman hold under King Ahasuerus?",
            "options": ["Governor of Susa", "Chief Scribe", "Second in command (or 'the prime minister')", "Royal Cupbearer"],
            "correct": "Second in command (or 'the prime minister')",
            "reference": "Esther 3:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Mordecai refused to bow down to Haman because of what primary reason?",
            "options": ["He was too proud", "Haman was a pagan", "He was a Jew", "Mordecai was elderly"],
            "correct": "He was a Jew",
            "reference": "Esther 3:2-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What punishment was Haman ultimately subjected to?",
            "options": ["He was exiled to Babylon", "He was hanged on the gallows he prepared for Mordecai", "He was stripped of his wealth", "He was forced to serve Mordecai"],
            "correct": "He was hanged on the gallows he prepared for Mordecai",
            "reference": "Esther 7:9-10",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific piece of information did Mordecai discover and report that saved the king's life early in the story?",
            "options": ["A plot by the king's two eunuchs to assassinate the king", "A plot to overthrow the kingdom", "Haman's plan to steal the treasury", "The location of the king's enemies"],
            "correct": "A plot by the king's two eunuchs to assassinate the king",
            "reference": "Esther 2:21-23",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Queen Vashti was deposed after she refused to do what specific thing at the king's banquet?",
            "options": ["Attend the feast", "Dance for the king", "Come before the king wearing her royal crown to display her beauty to the guests", "Wear a specific royal garment"],
            "correct": "Come before the king wearing her royal crown to display her beauty to the guests",
            "reference": "Esther 1:10-12",
            "difficulty": "Hard"
        },
        {
            "question": "What specific length (in cubits) was the gallows Haman prepared for Mordecai?",
            "options": ["Twenty-five cubits", "Fifty cubits", "Seventy-five cubits", "One hundred cubits"],
            "correct": "Fifty cubits",
            "reference": "Esther 5:14",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the king's chief eunuch who was in charge of the women and provided Esther with preparations?",
            "options": ["Memucan", "Harbona", "Hegai", "Bigthan"],
            "correct": "Hegai",
            "reference": "Esther 2:8-9",
            "difficulty": "Hard"
        },
        {
            "question": "What royal item did the king extend to Esther, signaling that she could approach him without being put to death?",
            "options": ["His signet ring", "His golden scepter", "His royal crown", "His royal hand"],
            "correct": "His golden scepter",
            "reference": "Esther 5:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the edict to destroy the Jews, the date for their destruction was chosen by casting what lot?",
            "options": ["Urim and Thummim", "The Pur (or 'the lot')", "A gold coin", "The king's dice"],
            "correct": "The Pur (or 'the lot')",
            "reference": "Esther 3:7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific honor did Haman advise the king to bestow upon the man the king 'delighted to honor,' thinking it would be himself?",
            "options": ["Give him the second place in the kingdom", "Dress him in royal robes, put him on the king's horse, and have him led through the city by a noble official", "Give him a great feast in his honor", "Give him a thousand talents of gold"],
            "correct": "Dress him in royal robes, put him on the king's horse, and have him led through the city by a noble official",
            "reference": "Esther 6:6-9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific virtue does Mordecai remind Esther she was put into her royal position for, which serves as a central lesson of the book?",
            "options": ["Her beauty and grace", "To save the people (or 'for such a time as this')", "To obey the king", "To find favor in the palace"],
            "correct": "To save the people (or 'for such a time as this')",
            "reference": "Esther 4:14",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of Haman's wife, who encouraged him to build the gallows for Mordecai?",
            "options": ["Vashti", "Hadassah", "Zeresh", "Abigail"],
            "correct": "Zeresh",
            "reference": "Esther 5:14",
            "difficulty": "Hard"
        },
        {
            "question": "In the new royal decree that allowed the Jews to defend themselves, who was given Haman's former position of authority?",
            "options": ["Esther's father", "Mordecai", "Harbona", "King Ahasuerus"],
            "correct": "Mordecai",
            "reference": "Esther 8:2",
            "difficulty": "Hard"
        },
        {
            "question": "What was the final fate of King Ahasuerus's signet ring, after Haman's plot was exposed?",
            "options": ["It was given to Esther", "It was given to Mordecai", "It was destroyed", "It was kept in the royal treasury"],
            "correct": "It was given to Mordecai",
            "reference": "Esther 8:2",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific time duration was decreed for the mourning and preparations of the virgins before they could be presented to the king?",
            "options": ["Six months of oil and six months of spices (or 'perfumes')", "One year and one day", "Forty days and forty nights", "Six months of water and six months of herbs"],
            "correct": "Six months of oil and six months of spices (or 'perfumes')",
            "reference": "Esther 2:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the official who warned the king to hang Haman on the gallows Haman had prepared?",
            "options": ["Memucan", "Harbona", "Bigthan", "Teresh"],
            "correct": "Harbona",
            "reference": "Esther 7:9",
            "difficulty": "Extreme"
        },
        {
            "question": "The two officials who plotted to kill the king and were reported by Mordecai were named Bigthan and whom else?",
            "options": ["Teresh", "Memucan", "Hegai", "Harbona"],
            "correct": "Teresh",
            "reference": "Esther 2:21",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific phrase does the book of Esther use to describe the reaction of the city of Susa to Haman's initial decree to destroy the Jews?",
            "options": ["The city was afraid", "The city was greatly troubled", "The city rejoiced", "The city was perplexed (or 'the city of Susa was in confusion')"],
            "correct": "The city was perplexed (or 'the city of Susa was in confusion')",
            "reference": "Esther 3:15",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific physical item that King Ahasuerus bestowed upon Mordecai when he publicly honored him?",
            "options": ["The signet ring", "A golden necklace", "A fine royal robe and a crown", "Haman's horse and royal clothing"],
            "correct": "Haman's horse and royal clothing",
            "reference": "Esther 6:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific instruction Queen Esther gave to Mordecai and all the Jews in Susa before she risked her life by approaching the king?",
            "options": ["To gather an army for defense", "To fast for three days and three nights", "To prepare a feast for the king", "To offer a sacrifice in the Temple"],
            "correct": "To fast for three days and three nights",
            "reference": "Esther 4:16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific title did the Persian ministers and nobles use to refer to the law that Queen Vashti had broken?",
            "options": ["The Law of the Medes and Persians, which cannot be revoked", "The king's decree", "The eternal covenant", "The law of the land"],
            "correct": "The Law of the Medes and Persians, which cannot be revoked",
            "reference": "Esther 1:19",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific month and day was originally set for the slaughter of the Jews by Haman's decree?",
            "options": ["The first month, the first day", "The thirteenth day of the twelfth month (Adar)", "The fourteenth day of the seventh month", "The tenth day of the tenth month"],
            "correct": "The thirteenth day of the twelfth month (Adar)",
            "reference": "Esther 3:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific promise Haman made to the king if the king would allow the destruction of the Jews?",
            "options": ["He would lead the army to conquer Greece", "He would bring ten thousand talents of silver into the king's treasury", "He would build a new palace", "He would give the king his daughter in marriage"],
            "correct": "He would bring ten thousand talents of silver into the king's treasury",
            "reference": "Esther 3:9",
            "difficulty": "Extreme"
        },
        {
            "question": "The second decree, which allowed the Jews to defend themselves, was written in the name of the king and sealed with the king's ring, and sent out by what means?",
            "options": ["By Persian couriers (or 'postal service') on fast horses", "By the royal army", "By the hand of Mordecai", "By a written letter to the governors"],
            "correct": "By Persian couriers (or 'postal service') on fast horses",
            "reference": "Esther 8:10",
            "difficulty": "Extreme"
        }
    ]
}


  // --- WISDOM ---
 {
    "book": "Job",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Job?",
            "options": ["The history of the Jewish people", "The problem of suffering and the nature of God's justice and sovereignty", "The wisdom of Solomon", "The laws of purification"],
            "correct": "The problem of suffering and the nature of God's justice and sovereignty",
            "reference": "Overall theme (Job 1:21; 42:5-6)",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the land where Job lived?",
            "options": ["Uz", "Edom", "Canaan", "Ur"],
            "correct": "Uz",
            "reference": "Job 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific characteristic describes Job at the beginning of the book?",
            "options": ["A mighty warrior", "A wise king", "Blameless, upright, fearing God, and turning away from evil", "A wealthy merchant"],
            "correct": "Blameless, upright, fearing God, and turning away from evil",
            "reference": "Job 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What title is given to the accuser who challenges God regarding Job's faithfulness?",
            "options": ["The Angel of the Lord", "Satan", "Beelzebub", "The Prince of Darkness"],
            "correct": "Satan",
            "reference": "Job 1:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the first major calamity that struck Job, killing his livestock and many of his servants?",
            "options": ["A great flood", "Attacks by the Sabeans and Chaldeans (killing livestock/servants) and fire from heaven", "A plague of locusts", "A major earthquake"],
            "correct": "Attacks by the Sabeans and Chaldeans (killing livestock/servants) and fire from heaven",
            "reference": "Job 1:14-17",
            "difficulty": "Moderate"
        },
        {
            "question": "What event immediately followed the first calamity that killed all of Job's children?",
            "options": ["A collapse of the house caused by a great wind (or 'great wind from the wilderness')", "A massive flood", "A fire from heaven", "A sword from the enemy"],
            "correct": "A collapse of the house caused by a great wind (or 'great wind from the wilderness')",
            "reference": "Job 1:19",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of Job's wife's famous advice to him after he was afflicted with painful sores?",
            "options": ["Be patient and trust God", "Curse God and die", "Repent of your hidden sins", "Flee to another land"],
            "correct": "Curse God and die",
            "reference": "Job 2:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific physical affliction did Satan strike Job with in the second test?",
            "options": ["Blindness", "Boils (or 'painful sores from the sole of his foot to the crown of his head')", "Fever", "Paralysis"],
            "correct": "Boils (or 'painful sores from the sole of his foot to the crown of his head')",
            "reference": "Job 2:7",
            "difficulty": "Moderate"
        },
        {
            "question": "What did Job use to scrape himself while sitting in ashes?",
            "options": ["A sharp stone", "A piece of broken pottery (or 'potsherd')", "A piece of wood", "His hand"],
            "correct": "A piece of broken pottery (or 'potsherd')",
            "reference": "Job 2:8",
            "difficulty": "Moderate"
        },
        {
            "question": "Job's three friends insisted that Job's suffering must be the result of what?",
            "options": ["A curse from the devil", "Hidden sin (or 'wickedness') in his life", "The testing of God", "The injustice of the world"],
            "correct": "Hidden sin (or 'wickedness') in his life",
            "reference": "Job 4:7-9; 8:5-6; 11:13-15",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the total number of children Job had before and after his period of suffering?",
            "options": ["Seven sons and three daughters (ten total)", "Twelve children total", "Five children total", "Seven sons and seven daughters (fourteen total)"],
            "correct": "Seven sons and three daughters (ten total)",
            "reference": "Job 1:2; 42:13",
            "difficulty": "Hard"
        },
        {
            "question": "Job's friend Eliphaz claims that man reaps trouble just as surely as what phenomenon flies upward?",
            "options": ["Sparks (or 'sparks fly upward')", "Eagles", "Locusts", "The dust"],
            "correct": "Sparks (or 'sparks fly upward')",
            "reference": "Job 5:7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific bodily sense did Job claim was suffering greatly from God's attack upon him?",
            "options": ["His sight was failing", "His taste was corrupted (or 'my taste is corrupted')", "His hearing was impaired", "His skin was diseased"],
            "correct": "His taste was corrupted (or 'my taste is corrupted')",
            "reference": "Job 6:6-7",
            "difficulty": "Hard"
        },
        {
            "question": "What does Job claim that God commands the clouds not to do, in a demonstration of God's power?",
            "options": ["Not to rain", "Not to cover the sun", "Not to strike the earth", "Not to multiply"],
            "correct": "Not to strike the earth",
            "reference": "Job 36:32",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the youngest of Job's friends who waited until the three older friends finished speaking before offering his own counsel?",
            "options": ["Bildad", "Zophar", "Elihu", "Eliphaz"],
            "correct": "Elihu",
            "reference": "Job 32:4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item or part of his body did Job declare he made a covenant with, to ensure his purity?",
            "options": ["His hand, not to steal", "His feet, not to wander", "His eyes, not to look lustfully at a virgin", "His mouth, not to lie"],
            "correct": "His eyes, not to look lustfully at a virgin",
            "reference": "Job 31:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical characteristic of God's power does Job say He stretches out over the void?",
            "options": ["The clouds", "The stars", "The north (or 'stretches out the north over the void')", "The heavens"],
            "correct": "The north (or 'stretches out the north over the void')",
            "reference": "Job 26:7",
            "difficulty": "Hard"
        },
        {
            "question": "Job declared that his redeemer lives and will stand at last on the earth, and after his skin is destroyed, he will see God with what specific bodily organ?",
            "options": ["His eyes (or 'my eyes shall behold')", "His soul", "His spirit", "His mind"],
            "correct": "His eyes (or 'my eyes shall behold')",
            "reference": "Job 19:25-27",
            "difficulty": "Hard"
        },
        {
            "question": "What specific heavenly phenomenon does God speak of in His first address to Job, asking if Job can bind its clusters or loose its cords?",
            "options": ["The sun and moon", "The stars (Pleiades and Orion)", "The clouds", "The wind"],
            "correct": "The stars (Pleiades and Orion)",
            "reference": "Job 38:31",
            "difficulty": "Hard"
        },
        {
            "question": "In the final restoration, God commanded Job to offer what specific offering on behalf of his three friends, for speaking incorrectly about God?",
            "options": ["A burnt offering and a sin offering", "Seven bulls and seven rams", "A peace offering and a grain offering", "Seven oxen and seven sheep"],
            "correct": "Seven bulls and seven rams",
            "reference": "Job 42:8",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific question does Satan ask God that God points to as the ultimate source of Job's suffering, instigated by Satan's temptation?",
            "options": ["Have you not put a hedge around him?", "Does Job fear God for nothing?", "Test him further with physical sickness", "Strike his spirit, and he will curse You"],
            "correct": "Does Job fear God for nothing?",
            "reference": "Job 1:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the specific duration of time that Job and his three friends sat silently together before Job finally cursed the day he was born?",
            "options": ["Three hours", "Seven days and seven nights", "Forty days and forty nights", "Three weeks"],
            "correct": "Seven days and seven nights",
            "reference": "Job 2:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What are the names of Job's three beautiful daughters born after his restoration?",
            "options": ["Tamar, Leah, and Rachel", "Keziah, Jemimah, and Keren-Happuch", "Abigail, Naomi, and Ruth", "Esther, Sarah, and Rebekah"],
            "correct": "Keziah, Jemimah, and Keren-Happuch",
            "reference": "Job 42:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific mythological/cosmic creature does God describe to Job, whose body is like melting bronze and whose bones are like beams of iron?",
            "options": ["Leviathan", "The serpent", "Behemoth", "The sea monster"],
            "correct": "Behemoth",
            "reference": "Job 40:15-18",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific animal does God describe to Job as laughing at the flash of the spear and not turning back from the sword?",
            "options": ["The wild donkey", "The warhorse (or 'horse')", "The lion", "The great eagle"],
            "correct": "The warhorse (or 'horse')",
            "reference": "Job 39:22-25",
            "difficulty": "Extreme"
        },
        {
            "question": "Job says that the life of man is like what specific object, which is swift and without hope?",
            "options": ["A weaver’s shuttle", "A shooting star", "A runner on the track", "A fading flower"],
            "correct": "A weaver’s shuttle",
            "reference": "Job 7:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific bodily organ does Job say he makes a vow to keep from sin, showing his commitment to purity and truth?",
            "options": ["His tongue", "His mouth", "His lips", "His ears"],
            "correct": "His lips",
            "reference": "Job 27:4",
            "difficulty": "Extreme"
        },
        {
            "question": "In his final words to God, Job repents, declaring that he had heard of God by the hearing of the ear, but now he knows God by what experience?",
            "options": ["His heart", "The Law", "His eyes (or 'my eye sees You')", "His spirit"],
            "correct": "His eyes (or 'my eye sees You')",
            "reference": "Job 42:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the two specific peoples who first attacked Job, stealing his livestock and slaying his servants?",
            "options": ["The Midianites and the Edomites", "The Sabeans and the Chaldeans", "The Amalekites and the Philistines", "The Babylonians and the Persians"],
            "correct": "The Sabeans and the Chaldeans",
            "reference": "Job 1:15, 17",
            "difficulty": "Extreme"
        },
        {
            "question": "When God restores Job, He gives him exactly how many times the amount of material wealth (sheep, camels, oxen, donkeys) he possessed before the calamity?",
            "options": ["The same amount", "Twice as much", "Ten times as much", "Seven times as much"],
            "correct": "Twice as much",
            "reference": "Job 42:10 (Doubled his livestock)",
            "difficulty": "Extreme"
        }
    ]
}

 {
    "book": "Psalms",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Book of Psalms is primarily a collection of what?",
            "options": ["Prophecies of the Messiah", "Laws for the priests", "Hymns, poems, prayers, and songs", "Historical narratives of the kings"],
            "correct": "Hymns, poems, prayers, and songs",
            "reference": "Overall theme and context of the book",
            "difficulty": "Moderate"
        },
        {
            "question": "How many separate 'books' or divisions is the Book of Psalms traditionally divided into?",
            "options": ["Three", "Five", "Twelve", "Seven"],
            "correct": "Five",
            "reference": "The divisions end at Psalms 41, 72, 89, 106, and 150",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the total number of individual Psalms in the book?",
            "options": ["100", "150", "155", "120"],
            "correct": "150",
            "reference": "The final chapter, Psalm 150",
            "difficulty": "Moderate"
        },
        {
            "question": "Which king of Israel is credited with writing the majority of the Psalms?",
            "options": ["Solomon", "Hezekiah", "David", "Asaph"],
            "correct": "David",
            "reference": "Attributions in titles (over 70 psalms)",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the righteous man whose 'delight is in the law of the Lord' in Psalm 1?",
            "options": ["Like a flower that fades", "Like a tree planted by the rivers of water", "Like gold tried in the fire", "Like a lamp shining brightly"],
            "correct": "Like a tree planted by the rivers of water",
            "reference": "Psalm 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What physical manifestation of God's presence is described as leading the people in Psalm 23?",
            "options": ["A mighty warrior", "The Lord is my shepherd", "A faithful friend", "A powerful King"],
            "correct": "The Lord is my shepherd",
            "reference": "Psalm 23:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the key request David makes of God in the famous penitential Psalm 51?",
            "options": ["Forgive my enemies", "Restore the Ark to Jerusalem", "Create in me a clean heart, O God, and renew a steadfast spirit within me", "Save me from Saul"],
            "correct": "Create in me a clean heart, O God, and renew a steadfast spirit within me",
            "reference": "Psalm 51:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Psalm 90, attributed to Moses, state is the typical span of a man's life?",
            "options": ["Sixty years", "Seventy years, or eighty if by reason of strength", "One hundred years", "Forty years"],
            "correct": "Seventy years, or eighty if by reason of strength",
            "reference": "Psalm 90:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase that repeatedly concludes the five final psalms (146–150)?",
            "options": ["Praise the Lord (Hallelujah)", "The Lord reigns", "Amen and Amen", "The King is coming"],
            "correct": "Praise the Lord (Hallelujah)",
            "reference": "Psalm 150:6",
            "difficulty": "Moderate"
        },
        {
            "question": "The heavens declare the glory of God and the firmament shows His handiwork. What is described as the source of a soundless, continual speech about God's knowledge?",
            "options": ["The sun and moon", "The stars and planets", "Day to day and night to night", "The law of the Lord"],
            "correct": "Day to day and night to night",
            "reference": "Psalm 19:1-2",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the Hebrew name for the collection of Psalms, meaning 'Praises'?",
            "options": ["Torah", "Nevi'im", "Tehillim", "Ketuvim"],
            "correct": "Tehillim",
            "reference": "Hebrew title of the book",
            "difficulty": "Hard"
        },
        {
            "question": "Psalm 119 is the longest chapter in the Bible and is structured around what poetic device?",
            "options": ["A chiasm (inverted parallelism)", "An acrostic based on the 22 letters of the Hebrew alphabet", "A series of similes and metaphors", "A repeating chorus"],
            "correct": "An acrostic based on the 22 letters of the Hebrew alphabet",
            "reference": "Psalm 119 (Each section corresponds to a letter)",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item is the psalmist referring to when he says, 'Your word is a lamp unto my feet and a light unto my path'?",
            "options": ["The prophecies of the Lord", "The Law (or 'Word of God')", "The Temple altar", "The presence of God"],
            "correct": "The Law (or 'Word of God')",
            "reference": "Psalm 119:105",
            "difficulty": "Hard"
        },
        {
            "question": "Psalm 2 is often cited in the New Testament to refer to the Messiah. What specific title of the Messiah is central to the warning in this Psalm?",
            "options": ["God's Holy One", "The Son (or 'His Son')", "The Anointed King (Messiah)", "The Lord our Righteousness"],
            "correct": "The Son (or 'His Son')",
            "reference": "Psalm 2:7, 12",
            "difficulty": "Hard"
        },
        {
            "question": "Psalm 137, one of the 'Songs of Zion,' is characterized by the Jewish exiles' sorrow while sitting by the rivers of what foreign city?",
            "options": ["Assyria", "Moab", "Babylon", "Tyre"],
            "correct": "Babylon",
            "reference": "Psalm 137:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific, intense emotion does David repeatedly express in the 'imprecatory psalms' (e.g., Psalm 109, 137)?",
            "options": ["Joy and thanksgiving", "A plea for God's vengeance and judgment upon his enemies", "Lament and sorrow", "A desire for wisdom"],
            "correct": "A plea for God's vengeance and judgment upon his enemies",
            "reference": "Psalm 109:6-20",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used in Psalm 133 to describe the goodness and pleasantness of brothers dwelling together in unity?",
            "options": ["Like oil poured on the head, running down the beard of Aaron, and like the dew of Hermon", "Like a beautiful garden", "Like a powerful army", "Like the peace of God"],
            "correct": "Like oil poured on the head, running down the beard of Aaron, and like the dew of Hermon",
            "reference": "Psalm 133:1-3",
            "difficulty": "Hard"
        },
        {
            "question": "The opening words of Jesus on the cross, 'My God, my God, why have you forsaken me?' are a direct quote from which Psalm?",
            "options": ["Psalm 1", "Psalm 22", "Psalm 40", "Psalm 51"],
            "correct": "Psalm 22",
            "reference": "Psalm 22:1; Matthew 27:46",
            "difficulty": "Hard"
        },
        {
            "question": "What specific bodily object does the Psalmist ask God to place over his mouth and his lips to guard them?",
            "options": ["A hand of defense", "A heavy stone", "A guard (or 'watch over my mouth')", "A sword of righteousness"],
            "correct": "A guard (or 'watch over my mouth')",
            "reference": "Psalm 141:3",
            "difficulty": "Hard"
        },
        {
            "question": "What does the psalmist state about the fool in his heart, which is immediately followed by a statement on their corruption?",
            "options": ["The fool is wise in his own eyes", "There is no God", "The fool despises the Law", "The fool will be destroyed"],
            "correct": "There is no God",
            "reference": "Psalm 14:1; 53:1",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the technical term that appears frequently in the titles of the Psalms, referring to an instruction, maskil, or skillful psalm?",
            "options": ["Selah", "Miktam", "Shir", "Maskil"],
            "correct": "Maskil",
            "reference": "Psalm titles (e.g., Ps 32, 42, 44)",
            "difficulty": "Extreme"
        },
        {
            "question": "The phrase 'A song of degrees' or 'Song of Ascents' appears in the titles of what specific range of Psalms?",
            "options": ["Psalms 1–20", "Psalms 120–134", "Psalms 90–100", "Psalms 146–150"],
            "correct": "Psalms 120–134",
            "reference": "Psalm titles (Songs traditionally sung by pilgrims going up to Jerusalem)",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description of the ungodly in Psalm 1, which contrasts with the tree planted by the waters?",
            "options": ["Like chaff which the wind drives away", "Like a dried-up vine", "Like dust in the wind", "Like a broken instrument"],
            "correct": "Like chaff which the wind drives away",
            "reference": "Psalm 1:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did the psalmist say he would *not* take, contrasting with his enemies who did so to destroy him, which serves as a promise of loyalty?",
            "options": ["He would not lie", "He would not lift up his soul to an idol", "He would not speak slander", "He would not take up their names on his lips"],
            "correct": "He would not take up their names on his lips",
            "reference": "Psalm 16:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Psalm 110, the most frequently quoted Psalm in the New Testament, is addressed to 'My Lord' (Adonai) and contains what oath from the Lord concerning the Messiah's priesthood?",
            "options": ["You are a King forever", "You are a priest forever according to the order of Melchizedek", "You shall rule all nations with a rod of iron", "You are the Son of God"],
            "correct": "You are a priest forever according to the order of Melchizedek",
            "reference": "Psalm 110:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the name of the author of the majority of the Psalms in the fourth book (Psalms 90–106)?",
            "options": ["David", "Asaph", "The sons of Korah", "Anonymous (only Psalm 90 is attributed to Moses)"],
            "correct": "Anonymous (only Psalm 90 is attributed to Moses)",
            "reference": "Psalm 90:1 (Attribution to Moses)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific physical ailment does the psalmist beg the Lord to cure him of in the very first petition of Psalm 6?",
            "options": ["His fever", "His soul", "His bones (or 'heal my bones')", "His eyes"],
            "correct": "His bones (or 'heal my bones')",
            "reference": "Psalm 6:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What are the two animals David mentions that he saved from the lion and the bear, paralleling his later defeat of Goliath?",
            "options": ["A lamb and a kid", "A sheep and a goat", "A lamb and a goat", "A sheep and a lamb"],
            "reference": "1 Samuel 17:34 (Contextual detail for David's life, not in the Psalm itself)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific physical action did the psalmist (in Psalm 42) say he would perform when he went with the multitude to the house of God?",
            "options": ["Sing loudly", "Worship in the inner court", "Shout with the voice of joy and praise", "Offer a sacrifice"],
            "correct": "Shout with the voice of joy and praise",
            "reference": "Psalm 42:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final piece of instruction given in the closing doxology of Psalm 150 regarding the source of praise?",
            "options": ["Let the priests praise Him", "Let the nations praise Him", "Let everything that has breath praise the Lord", "Let the holy ones praise Him"],
            "correct": "Let everything that has breath praise the Lord",
            "reference": "Psalm 150:6",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Proverbs",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme and literary form of the Book of Proverbs?",
            "options": ["A collection of laws", "A series of prophetic oracles", "A collection of wisdom sayings, advice, and moral instruction", "A historical narrative"],
            "correct": "A collection of wisdom sayings, advice, and moral instruction",
            "reference": "Overall theme and context of the book",
            "difficulty": "Moderate"
        },
        {
            "question": "Which King of Israel is credited with writing the majority of the proverbs?",
            "options": ["David", "Hezekiah", "Solomon", "Agur"],
            "correct": "Solomon",
            "reference": "Proverbs 1:1; 10:1; 25:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is declared to be the 'beginning of knowledge' or the 'chief part of knowledge'?",
            "options": ["The study of the Law", "The fear of the Lord", "Wisdom and humility", "The instruction of the father"],
            "correct": "The fear of the Lord",
            "reference": "Proverbs 1:7; 9:10",
            "difficulty": "Moderate"
        },
        {
            "question": "Proverbs warns that a quick-tempered man does what?",
            "options": ["Gets into arguments", "Commits folly (or 'acts foolishly')", "Destroys his reputation", "Is easily deceived"],
            "correct": "Commits folly (or 'acts foolishly')",
            "reference": "Proverbs 14:29; 29:22",
            "difficulty": "Moderate"
        },
        {
            "question": "What common comparison is used for a good wife (Proverbs 31)?",
            "options": ["A crown to her husband", "More precious than jewels (or 'rubies')", "A pillar in her house", "A wise counsellor"],
            "correct": "More precious than jewels (or 'rubies')",
            "reference": "Proverbs 31:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Proverbs advise should be done to a child who is foolish?",
            "options": ["Ignore the folly", "Instruct him privately", "A rod is for the back of him who is void of understanding (or 'the rod of correction')", "Exile him from the home"],
            "correct": "A rod is for the back of him who is void of understanding (or 'the rod of correction')",
            "reference": "Proverbs 26:3; 10:13",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the consequence of answering a fool according to his folly?",
            "options": ["He will be rebuked", "You also will be like him", "He will be silenced", "He will gain wisdom"],
            "correct": "You also will be like him",
            "reference": "Proverbs 26:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific bodily organ is described as the 'lamp of the Lord' searching the inner depths of a man?",
            "options": ["The eye", "The spirit (or 'spirit of man')", "The heart", "The mind"],
            "correct": "The spirit (or 'spirit of man')",
            "reference": "Proverbs 20:27",
            "difficulty": "Moderate"
        },
        {
            "question": "Proverbs warns that 'Pride goes before destruction, and a haughty spirit before a **_________**.'",
            "options": ["Sin", "Fall (or 'a fall')", "Curse", "Folly"],
            "correct": "Fall (or 'a fall')",
            "reference": "Proverbs 16:18",
            "difficulty": "Moderate"
        },
        {
            "question": "What does a wise son do, which is contrasted with a foolish son?",
            "options": ["A wise son makes a glad father", "A wise son honors the king", "A wise son works hard", "A wise son studies the Law"],
            "correct": "A wise son makes a glad father",
            "reference": "Proverbs 10:1",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What does Proverbs advise should be guarded with all diligence, for out of it spring the issues of life?",
            "options": ["Your money", "Your reputation", "Your heart", "Your tongue"],
            "correct": "Your heart",
            "reference": "Proverbs 4:23",
            "difficulty": "Hard"
        },
        {
            "question": "What two requests did Agur make of God before he died, reflecting his commitment to truth and moderate living?",
            "options": ["To have long life and wealth", "To remove lying and falsehood, and give him neither poverty nor riches", "To defeat his enemies and honor his name", "To grant him wisdom and humility"],
            "correct": "To remove lying and falsehood, and give him neither poverty nor riches",
            "reference": "Proverbs 30:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item is described as the 'crown' of the aged, while children are the glory of men?",
            "options": ["Wisdom", "Gray hair (or 'gray head')", "Righteousness", "Wealth"],
            "correct": "Gray hair (or 'gray head')",
            "reference": "Proverbs 20:29; 16:31",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the diligent man, contrasting with the sluggard?",
            "options": ["He is wise and knowledgeable", "The hand of the diligent will make him rich", "He will be honored by kings", "He rises early to work"],
            "correct": "The hand of the diligent will make him rich",
            "reference": "Proverbs 10:4; 21:5",
            "difficulty": "Hard"
        },
        {
            "question": "What does the wise man do, which is contrasted with the simple man who passes by and is punished?",
            "options": ["The wise man sees evil and hides himself", "The wise man studies the Law", "The wise man prays for his enemies", "The wise man fears the Lord"],
            "correct": "The wise man sees evil and hides himself",
            "reference": "Proverbs 22:3; 27:12",
            "difficulty": "Hard"
        },
        {
            "question": "What specific animal is cited twice as an example of diligence, which the sluggard is advised to observe?",
            "options": ["The donkey", "The bee", "The ant", "The lion"],
            "correct": "The ant",
            "reference": "Proverbs 6:6; 30:25",
            "difficulty": "Hard"
        },
        {
            "question": "What specific virtue is declared to be 'better than strong drink'?",
            "options": ["A good name (or 'A good name is rather to be chosen than great riches')", "Wisdom and knowledge", "Righteousness", "Prayer and fasting"],
            "correct": "A good name (or 'A good name is rather to be chosen than great riches')",
            "reference": "Proverbs 22:1",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the relationship between a person's plans and the Lord's determination?",
            "options": ["The purposes of a man's heart are deep water, but the Lord directs his steps", "A man's heart plans his way, but the Lord directs his steps", "A man's will is his strength, but the Lord is sovereign", "A man proposes, but God disposes"],
            "correct": "A man's heart plans his way, but the Lord directs his steps",
            "reference": "Proverbs 16:9",
            "difficulty": "Hard"
        },
        {
            "question": "What is the consequence of withholding grain (or 'corn') from the hungry during a time of scarcity?",
            "options": ["The king will be angry", "The people will curse him (or 'the people will curse him')", "God will punish him directly", "He will lose his wealth"],
            "correct": "The people will curse him (or 'the people will curse him')",
            "reference": "Proverbs 11:26",
            "difficulty": "Hard"
        },
        {
            "question": "What specific description does Proverbs give of the man who 'hates correction'?",
            "options": ["He is a mocker", "He is a fool", "He is wicked", "He is arrogant"],
            "correct": "He is a fool",
            "reference": "Proverbs 12:1",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the call of Wisdom (Proverbs 8), what specific title does Wisdom claim regarding the works of God?",
            "options": ["She was the first creation", "I was daily His delight, rejoicing always before Him", "She was the Lord's counselor", "She established the heavens"],
            "correct": "I was daily His delight, rejoicing always before Him",
            "reference": "Proverbs 8:30",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific architectural feature does Wisdom build for herself, symbolizing preparation and abundance?",
            "options": ["A golden house", "Seven pillars", "A fortified tower", "A royal palace"],
            "correct": "Seven pillars",
            "reference": "Proverbs 9:1",
            "difficulty": "Extreme"
        },
        {
            "question": "The three things that are 'too wonderful' for Agur to know are a serpent on a rock, a ship on the sea, and what else?",
            "options": ["The mind of a man and a bird in the air", "The way of a man with a virgin", "The spirit of God and the heart of a king", "The secret of life and death"],
            "correct": "The way of a man with a virgin",
            "reference": "Proverbs 30:19",
            "difficulty": "Extreme"
        },
        {
            "question": "What does a righteous man do to his animal, which is contrasted with the wicked man?",
            "options": ["A righteous man regards the life of his animal", "A righteous man feeds his animal well", "A righteous man does not overwork his animal", "A righteous man cares for his animal"],
            "correct": "A righteous man regards the life of his animal",
            "reference": "Proverbs 12:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the spiritual/psychological effect of a 'broken spirit'?",
            "options": ["A broken spirit makes the heart sick", "A broken spirit dries the bones", "A broken spirit leads to despair", "A broken spirit turns to ashes"],
            "correct": "A broken spirit dries the bones",
            "reference": "Proverbs 17:22",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item is described as the source of a quarrelsome woman's contentiousness, which a man cannot conceal or silence?",
            "options": ["The north wind brings forth rain, and a backbiting tongue an angry countenance", "Her constant murmuring", "Her pride and arrogance", "Her love of gossip"],
            "correct": "The north wind brings forth rain, and a backbiting tongue an angry countenance",
            "reference": "Proverbs 27:15-16; 25:23",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the consequence of lending money to the poor, which is considered an act of honor toward God?",
            "options": ["He who has pity on the poor lends to the Lord", "He will receive double his money back", "He will be honored by the king", "He will be made rich"],
            "correct": "He who has pity on the poor lends to the Lord",
            "reference": "Proverbs 19:17",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description of the path of the just, contrasting it with the way of the wicked?",
            "options": ["The path of the just is like the shining sun (or 'shining light')", "The path of the just is narrow and difficult", "The path of the just is paved with gold", "The path of the just is known only to God"],
            "correct": "The path of the just is like the shining sun (or 'shining light')",
            "reference": "Proverbs 4:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific tool is referenced in the verse: 'As iron sharpens iron, so a man sharpens the **_________** of his friend.'",
            "options": ["Mind", "Spirit", "Countenance (or 'face')", "Sword"],
            "correct": "Countenance (or 'face')",
            "reference": "Proverbs 27:17",
            "difficulty": "Extreme"
        },
        {
            "question": "Proverbs 31, the acrostic praise of the excellent wife, is described as the prophecy spoken by what woman?",
            "options": ["Naomi", "Hannah", "The mother of King Lemuel", "Bathsheba"],
            "correct": "The mother of King Lemuel",
            "reference": "Proverbs 31:1",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Ecclesiastes",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme and mood of the Book of Ecclesiastes?",
            "options": ["A collection of love poems", "A philosophical exploration of the meaninglessness and futility of human endeavor without God, under the sun", "The history of the kingdom", "Prophecies of wisdom"],
            "correct": "A philosophical exploration of the meaninglessness and futility of human endeavor without God, under the sun",
            "reference": "Overall theme (Ecclesiastes 1:2)",
            "difficulty": "Moderate"
        },
        {
            "question": "The author of Ecclesiastes refers to himself by what primary title?",
            "options": ["King David", "The Servant of the Lord", "The Preacher (or 'Qoheleth')", "The Wise Man"],
            "correct": "The Preacher (or 'Qoheleth')",
            "reference": "Ecclesiastes 1:1, 12",
            "difficulty": "Moderate"
        },
        {
            "question": "What famous phrase, used repeatedly by the author, summarizes his view of all human effort and worldly wisdom?",
            "options": ["The joy of the Lord", "A vanity of vanities; all is vanity (or 'Meaningless! Meaningless!')", "The blessing of God", "The shadow of man"],
            "correct": "A vanity of vanities; all is vanity (or 'Meaningless! Meaningless!')",
            "reference": "Ecclesiastes 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific limitation does the Preacher repeatedly use to describe the sphere of human activity and understanding?",
            "options": ["Under the sun", "Under the moon", "In the world", "On the earth"],
            "correct": "Under the sun",
            "reference": "Ecclesiastes 1:3, 9, 14",
            "difficulty": "Moderate"
        },
        {
            "question": "The Preacher concludes that the final outcome of wisdom, pleasure, and hard work is the same as for the fool: what event?",
            "options": ["Madness", "Poverty", "Death", "Exile"],
            "correct": "Death",
            "reference": "Ecclesiastes 2:14-16",
            "difficulty": "Moderate"
        },
        {
            "question": "The Preacher observes that there is a season and a time for every what?",
            "options": ["Man under the sun", "Purpose under heaven", "Action in life", "Word of the Lord"],
            "correct": "Purpose under heaven",
            "reference": "Ecclesiastes 3:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the final, ultimate conclusion of the whole matter that the Preacher gives at the end of the book?",
            "options": ["To seek wisdom and riches", "To fear God and keep His commandments", "To enjoy the fruit of your labor", "To accept that all is vanity"],
            "correct": "To fear God and keep His commandments",
            "reference": "Ecclesiastes 12:13",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific advice does the Preacher give regarding speech when approaching the house of God?",
            "options": ["Offer sacrifices generously", "Guard your steps and be ready to hear rather than to offer the sacrifice of fools (or 'be not rash with your mouth')", "Pray loudly and boldly", "Sing songs of praise and wisdom"],
            "correct": "Guard your steps and be ready to hear rather than to offer the sacrifice of fools (or 'be not rash with your mouth')",
            "reference": "Ecclesiastes 5:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "What comparison is made for the benefit of two people working together versus one working alone?",
            "options": ["A three-fold cord is not quickly broken", "Two are better than one", "They have a good reward for their labor", "Two are stronger than many"],
            "correct": "Two are better than one",
            "reference": "Ecclesiastes 4:9, 12",
            "difficulty": "Moderate"
        },
        {
            "question": "The Preacher advises to remember the Creator in what specific time of life?",
            "options": ["In old age", "In the time of wealth", "In the days of your youth", "In the time of trouble"],
            "correct": "In the days of your youth",
            "reference": "Ecclesiastes 12:1",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "The Preacher says that 'he who increases knowledge increases **_________**.'",
            "options": ["Wealth", "Sorrow (or 'grief')", "Joy", "Pride"],
            "correct": "Sorrow (or 'grief')",
            "reference": "Ecclesiastes 1:18",
            "difficulty": "Hard"
        },
        {
            "question": "What is the advice given regarding the timing of grief and celebration?",
            "options": ["It is better to go to the house of mourning than to go to the house of feasting", "It is better to laugh than to weep", "It is better to be rich than to be poor", "It is better to be silent than to speak"],
            "correct": "It is better to go to the house of mourning than to go to the house of feasting",
            "reference": "Ecclesiastes 7:2",
            "difficulty": "Hard"
        },
        {
            "question": "The Preacher states that a living dog is better than what specific deceased creature?",
            "options": ["A dead sheep", "A dead bird", "A dead lion", "A dead man"],
            "correct": "A dead lion",
            "reference": "Ecclesiastes 9:4",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the primary difference between a wise man and a fool regarding their ultimate end?",
            "options": ["One will be remembered, the other forgotten", "The wise man's eyes are in his head, but the fool walks in darkness (or 'his end is the same')", "The fool will be destroyed by God", "The wise man will have riches"],
            "correct": "The wise man's eyes are in his head, but the fool walks in darkness (or 'his end is the same')",
            "reference": "Ecclesiastes 2:14, 16",
            "difficulty": "Hard"
        },
        {
            "question": "What does the Preacher identify as the fate of the words of the wise, contrasting them with the words of a fool?",
            "options": ["The words of the wise are like goads (or 'goads and nails')", "The words of the wise are forgotten", "The words of the wise are few and profound", "The words of the wise are eternal"],
            "correct": "The words of the wise are like goads (or 'goads and nails')",
            "reference": "Ecclesiastes 12:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the specific command given to the young man concerning his actions and the future judgment of God?",
            "options": ["Rejoice and follow the desires of your heart, but know that for all these things God will bring you into judgment", "Be quiet and listen to the elders", "Do not sin against God", "Work hard and save your money"],
            "correct": "Rejoice and follow the desires of your heart, but know that for all these things God will bring you into judgment",
            "reference": "Ecclesiastes 11:9",
            "difficulty": "Hard"
        },
        {
            "question": "What is the metaphorical image used to describe how a poor wise man's counsel is despised, even though he saved the city?",
            "options": ["A ship without sails", "A voice crying in the wilderness", "His wisdom is despised, and his words are not heeded", "A broken tool"],
            "correct": "His wisdom is despised, and his words are not heeded",
            "reference": "Ecclesiastes 9:15-16",
            "difficulty": "Hard"
        },
        {
            "question": "The Preacher observes that God has made everything beautiful in its time and has put what specific, limiting, yet hopeful, concept in man's heart?",
            "options": ["The knowledge of God's law", "The understanding of wisdom", "Eternity (without man being able to find out the work that God does from beginning to end)", "The hope of resurrection"],
            "correct": "Eternity (without man being able to find out the work that God does from beginning to end)",
            "reference": "Ecclesiastes 3:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the fate of the spirit and the body upon death?",
            "options": ["The spirit returns to God who gave it, and the dust returns to the earth as it was", "The soul goes to heaven, and the body sleeps", "The spirit is judged, and the body waits", "All go to the same place, and all are forgotten"],
            "correct": "The spirit returns to God who gave it, and the dust returns to the earth as it was",
            "reference": "Ecclesiastes 12:7",
            "difficulty": "Hard"
        },
        {
            "question": "What type of person does the Preacher advise the reader to not quickly allow anger to rest in?",
            "options": ["The heart of a king", "The heart of a fool", "The heart of the sluggard", "The heart of a wise man"],
            "correct": "The heart of a fool",
            "reference": "Ecclesiastes 7:9",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The Preacher warns against eavesdropping, because you may hear your own servant saying what specific thing about you?",
            "options": ["You are rich and arrogant", "He is a fool and a tyrant", "You also curse others (or 'curse you')", "You are not wise in your dealings"],
            "correct": "You also curse others (or 'curse you')",
            "reference": "Ecclesiastes 7:21",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action regarding generosity does the Preacher advise, comparing it to casting a portion on seven or even eight?",
            "options": ["Give quickly before it is too late", "Give a portion to seven, and also to eight, for you do not know what evil will be on the earth", "Give your whole wealth to the poor", "Give without expecting anything in return"],
            "correct": "Give a portion to seven, and also to eight, for you do not know what evil will be on the earth",
            "reference": "Ecclesiastes 11:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the consequence of oppressive taxation, stating that the poor are oppressed and that what specific group also benefits from the profit of the field?",
            "options": ["The king is served by the field (or 'a king himself is served by the field')", "The rich grow richer", "The government is corrupt", "The powerful oppress the weak"],
            "correct": "The king is served by the field (or 'a king himself is served by the field')",
            "reference": "Ecclesiastes 5:9",
            "difficulty": "Extreme"
        },
        {
            "question": "The Preacher describes a foolish action where 'A little folly' does what to the honor of a wise and reputable man?",
            "options": ["Causes him to be forgotten", "Outweighs wisdom and honor (or 'ruins the reputation')", "Causes him to fall into sin", "Makes his wisdom look foolish"],
            "correct": "Outweighs wisdom and honor (or 'ruins the reputation')",
            "reference": "Ecclesiastes 10:1",
            "difficulty": "Extreme"
        },
        {
            "question": "In the concluding metaphor of old age and death, what specific part of the body does the Preacher say will be shattered, causing the cessation of life?",
            "options": ["The golden bowl will be broken (or 'golden bowl')", "The silver cord will be loosed", "The pitcher broken at the well", "The wheel broken at the cistern"],
            "correct": "The golden bowl will be broken (or 'golden bowl')",
            "reference": "Ecclesiastes 12:6",
            "difficulty": "Extreme"
        },
        {
            "question": "The Preacher advises to 'Cast your bread upon the waters' because of what expected outcome?",
            "options": ["It will be wasted", "You will find it after many days", "It will feed the birds", "It will save your life"],
            "correct": "You will find it after many days",
            "reference": "Ecclesiastes 11:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description given to the house to which man goes at his death?",
            "options": ["The house of the Lord", "His eternal home (or 'his long home')", "The grave", "The house of rest"],
            "correct": "His eternal home (or 'his long home')",
            "reference": "Ecclesiastes 12:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What kind of person does the Preacher say you should not take seriously, even if he is praised for his wickedness?",
            "options": ["The one who curses the king", "The one who is foolish in his speech", "The one who is not judged for his deeds", "The one who is slow to anger"],
            "correct": "The one who is not judged for his deeds",
            "reference": "Ecclesiastes 8:11",
            "difficulty": "Extreme"
        },
        {
            "question": "The Preacher warns that a gift (bribe) does what specific action to the heart of a wise man?",
            "options": ["It makes him foolish", "It corrupts his heart and destroys his good judgment", "It silences his counsel", "It blinds his eyes"],
            "correct": "It corrupts his heart and destroys his good judgment",
            "reference": "Ecclesiastes 7:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final warning given about excessive study and reading, stating it is weariness to the flesh?",
            "options": ["Be careful of making many books, and much study is weariness of the flesh", "Study until you are wise", "Knowledge brings sorrow", "Do not read the books of the wicked"],
            "correct": "Be careful of making many books, and much study is weariness of the flesh",
            "reference": "Ecclesiastes 12:12",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Song of Solomon",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme and literary form of the Song of Solomon?",
            "options": ["A collection of wisdom sayings", "A series of royal prophecies", "A collection of love poems (a dramatic poem or collection of lyrical songs) celebrating human love and sexuality", "Laments over the destruction of the Temple"],
            "correct": "A collection of love poems (a dramatic poem or collection of lyrical songs) celebrating human love and sexuality",
            "reference": "Overall theme and context of the book",
            "difficulty": "Moderate"
        },
        {
            "question": "Which King of Israel is traditionally credited as the primary author of the Song of Solomon?",
            "options": ["David", "Hezekiah", "Solomon", "Asaph"],
            "correct": "Solomon",
            "reference": "Song of Solomon 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the specific description used in the opening verse to describe the nature of this song?",
            "options": ["The greatest of all songs (The Song of Songs)", "A song of wisdom", "A song of the Temple", "A song of David"],
            "correct": "The greatest of all songs (The Song of Songs)",
            "reference": "Song of Solomon 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary setting or background of the conversations in the song?",
            "options": ["The Temple courtyard", "The royal palace and the countryside (gardens/fields)", "The king's military camp", "The marketplace of Jerusalem"],
            "correct": "The royal palace and the countryside (gardens/fields)",
            "reference": "Song of Solomon 1:4, 17; 2:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific item or place does the Bride (Shulamite) request the Bridegroom (Solomon) to lead her to, symbolizing intimacy and guidance?",
            "options": ["To the king's treasury", "To the feast", "To His chambers (or 'to his banqueting house')", "To the Temple"],
            "correct": "To His chambers (or 'to his banqueting house')",
            "reference": "Song of Solomon 1:4; 2:4",
            "difficulty": "Moderate"
        },
        {
            "question": "The young woman describes herself as being dark in complexion because she was burned by what?",
            "options": ["The sun", "The fire of persecution", "The heat of the day", "The sun when tending the vineyards"],
            "correct": "The sun when tending the vineyards",
            "reference": "Song of Solomon 1:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific flower is the Bridegroom compared to among the thorns, symbolizing his uniqueness?",
            "options": ["The rose of Sharon", "The lily (or 'lily among the thorns')", "The blossom of the fig tree", "The jasmine flower"],
            "correct": "The lily (or 'lily among the thorns')",
            "reference": "Song of Solomon 2:2",
            "difficulty": "Moderate"
        },
        {
            "question": "To what animal does the Bridegroom compare the eyes of the Bride, when describing her beauty?",
            "options": ["Doves", "Fawns", "Gazelles", "Lions"],
            "correct": "Doves",
            "reference": "Song of Solomon 1:15; 4:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Who are the specific individuals the Bride repeatedly charges not to stir up or awaken love until it pleases?",
            "options": ["The women of Jerusalem (or 'daughters of Jerusalem')", "The watchmen of the city", "The apostles and prophets", "The men of the court"],
            "correct": "The women of Jerusalem (or 'daughters of Jerusalem')",
            "reference": "Song of Solomon 2:7; 3:5; 8:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific part of the body does the Bride say is sealed upon her heart and arm, symbolizing the enduring power of love?",
            "options": ["Her signet ring", "Love, which is strong as death", "The king's name", "Her vow of faithfulness"],
            "correct": "Love, which is strong as death",
            "reference": "Song of Solomon 8:6",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "The Bridegroom compares the Bride's hair to what specific imagery, describing its dark abundance?",
            "options": ["Black as a raven's wing", "A flock of goats descending from Mount Gilead", "A dark river flowing", "A crown of night"],
            "correct": "A flock of goats descending from Mount Gilead",
            "reference": "Song of Solomon 4:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item of jewelry does the Bride wish to receive from the King, comparing it to gold and silver?",
            "options": ["A ring for her finger", "Chains of gold with studs of silver", "A crown of roses", "A necklace of pearls"],
            "correct": "Chains of gold with studs of silver",
            "reference": "Song of Solomon 1:10-11",
            "difficulty": "Hard"
        },
        {
            "question": "What specific fruit does the Bridegroom compare the Bride's breath (or 'nose') to?",
            "options": ["An apple", "A fig", "An apricot (or 'apples')", "A cluster of dates"],
            "correct": "An apricot (or 'apples')",
            "reference": "Song of Solomon 7:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific animal does the Bridegroom ask the servants to catch, as they spoil the vineyards?",
            "options": ["The wild boars", "The foxes, the little foxes that spoil the vines", "The serpent and the wolf", "The birds of the air"],
            "correct": "The foxes, the little foxes that spoil the vines",
            "reference": "Song of Solomon 2:15",
            "difficulty": "Hard"
        },
        {
            "question": "The Bride declares, 'I am the **_________** of Sharon, and the lily of the valleys.'",
            "options": ["Lily", "Rose", "Vine", "Flower"],
            "correct": "Rose",
            "reference": "Song of Solomon 2:1",
            "difficulty": "Hard"
        },
        {
            "question": "What two liquids are specifically praised as being better than wine in the Bride's affection for the Bridegroom?",
            "options": ["Water and milk", "Your love and your oils (fragrances)", "Honey and dew", "Wine and oil"],
            "correct": "Your love and your oils (fragrances)",
            "reference": "Song of Solomon 1:2-3",
            "difficulty": "Hard"
        },
        {
            "question": "What item does the Bridegroom compare the scent of the Bride's garments to?",
            "options": ["The scent of cedar wood", "The scent of Lebanon (or 'the smell of Lebanon')", "The finest perfume", "The scent of an apple orchard"],
            "correct": "The scent of Lebanon (or 'the smell of Lebanon')",
            "reference": "Song of Solomon 4:11",
            "difficulty": "Hard"
        },
        {
            "question": "What two types of spiritual experience are contrasted in the opening verses, suggesting the superiority of love over physical touch?",
            "options": ["Your love and your wisdom", "Your mouth's kiss and your love", "Your touch and your spirit", "Your word and your peace"],
            "correct": "Your mouth's kiss and your love",
            "reference": "Song of Solomon 1:2",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action does the Bridegroom invite the Bride to do, symbolizing the season of spring and renewal?",
            "options": ["Come and sit in the palace", "Arise, my love, my fair one, and come away", "Walk with me in the gardens", "Let us go to the feast"],
            "correct": "Arise, my love, my fair one, and come away",
            "reference": "Song of Solomon 2:10, 13",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the sound of the Bridegroom's voice?",
            "options": ["The sound of thunder", "The sound of joy", "The voice of my beloved (or 'my beloved')", "The sound of many waters"],
            "correct": "The voice of my beloved (or 'my beloved')",
            "reference": "Song of Solomon 2:8",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The Shulamite maiden asks the Bridegroom, when she is veiled, to tell her where he feeds his flock at noon, to avoid being like what kind of woman?",
            "options": ["A wandering woman", "One who goes astray", "One who turns aside by the flocks of his companions", "A lonely shepherdess"],
            "correct": "One who turns aside by the flocks of his companions",
            "reference": "Song of Solomon 1:7-8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific piece of a garment does the Bride mention being unable to put back on when the Bridegroom visits her at night?",
            "options": ["Her inner veil", "Her tunic (or 'my tunic')", "Her robe of finest linen", "Her belt"],
            "correct": "Her tunic (or 'my tunic')",
            "reference": "Song of Solomon 5:3",
            "difficulty": "Extreme"
        },
        {
            "question": "The Bridegroom describes the Bride's neck as like what specific architectural feature?",
            "options": ["A strong tower (or 'the tower of David')", "A golden pillar", "A lily stem", "The wall of the city"],
            "correct": "A strong tower (or 'the tower of David')",
            "reference": "Song of Solomon 4:4",
            "difficulty": "Extreme"
        },
        {
            "question": "The description of the Bridegroom's legs is compared to what specific metallic item, symbolizing strength and foundation?",
            "options": ["Pillars of gold", "Pillars of marble set on bases of fine gold", "Pillars of bronze", "Pillars of silver"],
            "correct": "Pillars of marble set on bases of fine gold",
            "reference": "Song of Solomon 5:15",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific quality of jealousy is compared to the consuming power of the flame of the Lord in the final chapter?",
            "options": ["Cruel as the grave (or 'cruel as the grave')", "Strong as death", "Fierce as fire", "Powerful as the sea"],
            "correct": "Cruel as the grave (or 'cruel as the grave')",
            "reference": "Song of Solomon 8:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific natural phenomenon does the Bridegroom compare the Bride's temple (cheeks/face) to?",
            "options": ["Pieces of a pomegranate", "A stream of water", "A flock of sheep", "A tower of ivory"],
            "correct": "Pieces of a pomegranate",
            "reference": "Song of Solomon 4:3; 6:7",
            "difficulty": "Extreme"
        },
        {
            "question": "The Bride declares that her love is like a vineyard that she should keep. What specific monetary value does she place on her vineyard in comparison to Solomon's?",
            "options": ["One thousand silver pieces (Solomon's was a thousand)", "One hundred talents of gold", "One silver piece", "Ten talents of silver"],
            "correct": "One thousand silver pieces (Solomon's was a thousand)",
            "reference": "Song of Solomon 8:11-12",
            "difficulty": "Extreme"
        },
        {
            "question": "What are the two animals the Bridegroom compares the Bride's teeth to, symbolizing perfect alignment and purity?",
            "options": ["A flock of sheep just shorn, which have come up from the washing", "A perfect fence of stones", "A row of pearls", "White cedar planks"],
            "correct": "A flock of sheep just shorn, which have come up from the washing",
            "reference": "Song of Solomon 4:2; 6:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific type of fragrant tree does the Bridegroom compare the Bride's stature to?",
            "options": ["A cedar tree", "A palm tree", "A fig tree", "A rose bush"],
            "correct": "A palm tree",
            "reference": "Song of Solomon 7:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific structure does the Bride desire the Bridegroom to be like, symbolizing swiftness and agility, in their final shared desire?",
            "options": ["A swift runner", "A young hart or a gazelle on the mountains of spices", "An eagle soaring high", "A stallion in battle"],
            "correct": "A young hart or a gazelle on the mountains of spices",
            "reference": "Song of Solomon 8:14",
            "difficulty": "Extreme"
        }
    ]
}


  // --- PROPHETS ---
 {
    "book": "Isaiah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "Isaiah is the first of the major prophets. During the reign of which four kings of Judah did Isaiah prophesy?",
            "options": ["David, Solomon, Rehoboam, and Asa", "Uzziah, Jotham, Ahaz, and Hezekiah", "Manasseh, Amon, Josiah, and Jehoahaz", "Saul, David, Solomon, and Rehoboam"],
            "correct": "Uzziah, Jotham, Ahaz, and Hezekiah",
            "reference": "Isaiah 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary message of the Book of Isaiah?",
            "options": ["A rebuke of the Babylonian Empire", "A message of judgment and hope, emphasizing God's holiness, the coming Messiah (the Suffering Servant), and the future restoration of Israel", "The history of the Northern Kingdom", "Laments over the destruction of the Temple"],
            "correct": "A message of judgment and hope, emphasizing God's holiness, the coming Messiah (the Suffering Servant), and the future restoration of Israel",
            "reference": "Overall theme (Isaiah 6:3; 53:5; 65:17)",
            "difficulty": "Moderate"
        },
        {
            "question": "What title is often given to the prophet Isaiah due to the nature and accuracy of his prophecies concerning Christ?",
            "options": ["The Weeping Prophet", "The Royal Prophet", "The Messianic Prophet", "The Great Prophet"],
            "correct": "The Messianic Prophet",
            "reference": "Context of Isaiah 7:14; 9:6; 53",
            "difficulty": "Moderate"
        },
        {
            "question": "In the prophecy concerning the Messiah's birth, Isaiah states that a virgin shall conceive and bear a son, and shall call his name what?",
            "options": ["Emmanuel (God with us)", "Jesus", "Prince of Peace", "The Branch"],
            "correct": "Emmanuel (God with us)",
            "reference": "Isaiah 7:14",
            "difficulty": "Moderate"
        },
        {
            "question": "What image is used to describe the primary characteristic of the coming Messianic kingdom in Isaiah 11?",
            "options": ["A military fortress", "The wolf shall dwell with the lamb, and a little child shall lead them (peace)", "A massive temple for all nations", "A king ruling with a rod of iron"],
            "correct": "The wolf shall dwell with the lamb, and a little child shall lead them (peace)",
            "reference": "Isaiah 11:6-9",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the collective name given to the last 27 chapters of the book, which primarily focus on comfort, restoration, and the future of Israel and the nations?",
            "options": ["The Book of Judgment", "The Book of the Consolation of Israel (Second Isaiah)", "The Oracles Against the Nations", "The Historical Section"],
            "correct": "The Book of the Consolation of Israel (Second Isaiah)",
            "reference": "Isaiah 40–66 (Scholarly division)",
            "difficulty": "Moderate"
        },
        {
            "question": "The famous chapter, Isaiah 53, describes the coming Messiah as what kind of figure?",
            "options": ["A mighty conquering King", "The Great High Priest", "The Suffering Servant", "The Son of Man"],
            "correct": "The Suffering Servant",
            "reference": "Isaiah 53:3-5",
            "difficulty": "Moderate"
        },
        {
            "question": "What two words does God call out concerning the unrighteous who should seek Him, urging them to return for forgiveness?",
            "options": ["Come now, and let us reason together", "Hear, O Israel", "Repent and return", "Behold, I am with you"],
            "correct": "Come now, and let us reason together",
            "reference": "Isaiah 1:18",
            "difficulty": "Moderate"
        },
        {
            "question": "Isaiah prophesied that all nations would eventually stream to Jerusalem to what specific structure?",
            "options": ["The King's Palace", "The Temple (or 'mountain of the Lord's house')", "The City Gates", "The High Place"],
            "correct": "The Temple (or 'mountain of the Lord's house')",
            "reference": "Isaiah 2:2-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific item did the seraphim touch to Isaiah's lips during his vision in the Temple, symbolizing his purification and readiness to speak for God?",
            "options": ["A scroll of the Law", "A golden censer", "A live coal (from the altar)", "A drop of water"],
            "correct": "A live coal (from the altar)",
            "reference": "Isaiah 6:6-7",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of the Assyrian king whose army surrounded Jerusalem during the reign of Hezekiah, but was miraculously destroyed by an angel?",
            "options": ["Tiglath-Pileser III", "Shalmaneser V", "Sennacherib", "Sargon II"],
            "correct": "Sennacherib",
            "reference": "Isaiah 37:36",
            "difficulty": "Hard"
        },
        {
            "question": "What specific consequence did Isaiah prophesy would befall the ungodly, which he compares to a sheep being led to the slaughter?",
            "options": ["He was wounded for our transgressions, He was bruised for our iniquities", "He would be destroyed by fire", "He would be exiled from the land", "He would be forgotten"],
            "correct": "He was wounded for our transgressions, He was bruised for our iniquities",
            "reference": "Isaiah 53:5, 7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did God command Isaiah to perform, walking naked and barefoot for three years, to symbolize the coming captivity of Egypt and Ethiopia by Assyria?",
            "options": ["To sit in sackcloth and ashes", "To walk naked and barefoot", "To prophesy at the Temple gate", "To remain silent"],
            "correct": "To walk naked and barefoot",
            "reference": "Isaiah 20:2-4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific phrase does Isaiah use to describe God's holiness, where the seraphim call out to one another in the Temple vision?",
            "options": ["Worthy is the Lamb", "The Lord of Hosts is His name", "Holy, holy, holy is the Lord of hosts; the whole earth is full of His glory!", "The God of Abraham is great"],
            "correct": "Holy, holy, holy is the Lord of hosts; the whole earth is full of His glory!",
            "reference": "Isaiah 6:3",
            "difficulty": "Hard"
        },
        {
            "question": "Isaiah promises that the Lord will make an end to what two enemies (or conditions) that plague the earth, as symbolized by a wedding feast on Mount Zion?",
            "options": ["War and famine", "Death and the veil of mourning (or 'the covering cast over all people')", "The devil and the wicked", "The Law and the Prophets"],
            "correct": "Death and the veil of mourning (or 'the covering cast over all people')",
            "reference": "Isaiah 25:7-8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament prophet's ministry did Isaiah prophesy would precede the coming of the Messiah, preparing the way for the Lord?",
            "options": ["Elijah", "Jeremiah", "John the Baptist (contextual fulfillment)", "Malachi"],
            "correct": "John the Baptist (contextual fulfillment) (The voice of one crying in the wilderness)",
            "reference": "Isaiah 40:3",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the final, everlasting nature of the new covenant God promises to make with His people?",
            "options": ["An unbreakable law", "A covenant of peace (or 'everlasting covenant')", "The royal covenant", "The Law of the Spirit"],
            "correct": "A covenant of peace (or 'everlasting covenant')",
            "reference": "Isaiah 55:3; 61:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific consequence did Isaiah prophesy would befall King Hezekiah because he proudly displayed all his treasures to the envoys from Babylon?",
            "options": ["He would lose a battle", "All his treasures and his descendants would be carried away to Babylon", "He would suffer a severe illness", "His kingdom would be divided"],
            "correct": "All his treasures and his descendants would be carried away to Babylon",
            "reference": "Isaiah 39:6",
            "difficulty": "Hard"
        },
        {
            "question": "What two names are given to the remnant who will return and be saved in the prophecies of Isaiah?",
            "options": ["The Holy Seed and the Faithful Remnant", "Shear-Jashub (A remnant shall return) and Immanuel", "The Branch and the Servant", "The People of Zion and the House of David"],
            "correct": "Shear-Jashub (A remnant shall return) and Immanuel",
            "reference": "Isaiah 7:3 (Shear-Jashub); 7:14 (Immanuel)",
            "difficulty": "Hard"
        },
        {
            "question": "What is the fate of the man who 'walks righteously and speaks uprightly' (rejecting dishonest gain), according to Isaiah 33:16?",
            "options": ["He shall dwell on high; his place of defense shall be the fortresses of rocks; bread will be given him, his water will be sure", "He will be a king among the people", "He will be honored by God and man", "He will defeat his enemies easily"],
            "correct": "He shall dwell on high; his place of defense shall be the fortresses of rocks; bread will be given him, his water will be sure",
            "reference": "Isaiah 33:15-16",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The Lord commands Isaiah to write a solemn prophecy on a large tablet, calling the two sons born to the prophet by what dual symbolic name?",
            "options": ["Shear-Jashub (A remnant shall return) and Maher-Shalal-Hash-Baz (Speed the spoil, hasten the prey)", "Immanuel and The Strong God", "The Branch and the Servant", "The Faithful Witness and the Righteous King"],
            "correct": "Shear-Jashub (A remnant shall return) and Maher-Shalal-Hash-Baz (Speed the spoil, hasten the prey)",
            "reference": "Isaiah 7:3; 8:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the New Covenant that the Messiah (the Servant) will establish, ensuring success and justice?",
            "options": ["He will bring forth justice to the Gentiles; He will not cry out, nor raise His voice", "He will rebuild the Temple in Jerusalem", "He will be given the wisdom of God", "He will rule the nations with a rod of iron"],
            "correct": "He will bring forth justice to the Gentiles; He will not cry out, nor raise His voice",
            "reference": "Isaiah 42:1-4",
            "difficulty": "Extreme"
        },
        {
            "question": "In Isaiah 65, the Lord describes the new creation of 'new heavens and a new earth.' What specific activity does He say will no longer be heard there?",
            "options": ["The voice of weeping and the voice of crying (or 'weeping and the sound of crying')", "The voice of war and fighting", "The voice of the ungodly", "The sound of the temple worship"],
            "correct": "The voice of weeping and the voice of crying (or 'weeping and the sound of crying')",
            "reference": "Isaiah 65:17, 19",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item is described as the object that the people of God will ultimately rely on for strength and eternal salvation?",
            "options": ["The King's wisdom", "The Law of the Lord", "The Lord, the Rock everlasting", "The Holy Spirit"],
            "correct": "The Lord, the Rock everlasting",
            "reference": "Isaiah 26:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific part of the body does Isaiah say was given to the Suffering Servant to endure pain and not be ashamed?",
            "options": ["His eyes", "His face was set like a flint", "His back was given to those who struck Him", "His hands were pierced"],
            "correct": "His face was set like a flint",
            "reference": "Isaiah 50:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific phrase does God use to describe the source of His power, which is the guarantee that He will accomplish His promises?",
            "options": ["My Word shall not return to Me void, but shall accomplish what I please", "My Spirit is strong", "My will is absolute", "My Law is eternal"],
            "correct": "My Word shall not return to Me void, but shall accomplish what I please",
            "reference": "Isaiah 55:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description of the kind of fasting God desires, emphasizing justice and care for the oppressed?",
            "options": ["To fast from all food and water", "To loose the bonds of wickedness, to undo the heavy burdens, to let the oppressed go free", "To humble your soul and wear sackcloth", "To pray without ceasing"],
            "correct": "To loose the bonds of wickedness, to undo the heavy burdens, to let the oppressed go free",
            "reference": "Isaiah 58:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific natural phenomenon is used to describe the immediate result of God's presence at the New Creation, where the land and people are renewed?",
            "options": ["A river flowing from Jerusalem", "The mountains will break forth into singing, and all the trees of the field shall clap their hands", "The sun will be ten times brighter", "The ground will produce food abundantly"],
            "correct": "The mountains will break forth into singing, and all the trees of the field shall clap their hands",
            "reference": "Isaiah 55:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific historical reference does Isaiah use to remind Israel of God's past mercy, where God put His Holy Spirit in their midst?",
            "options": ["The flood of Noah", "The exodus from Egypt (the days of Moses and his people)", "The call of Abraham", "The reign of David"],
            "correct": "The exodus from Egypt (the days of Moses and his people)",
            "reference": "Isaiah 63:11-12",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item is God said to wear when He brings salvation and executes justice, symbolizing His role as a divine warrior?",
            "options": ["He put on a helmet of salvation and a breastplate of righteousness", "A crown of gold", "A mighty shield", "A sword of fire"],
            "correct": "He put on a helmet of salvation and a breastplate of righteousness",
            "reference": "Isaiah 59:17",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Jeremiah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Jeremiah?",
            "options": ["The history of the Northern Kingdom", "A prophecy of judgment and exile against Judah for its idolatry and disobedience, and the promise of a New Covenant and future restoration", "Laments over the destruction of the Temple", "Instructions for the returned exiles"],
            "correct": "A prophecy of judgment and exile against Judah for its idolatry and disobedience, and the promise of a New Covenant and future restoration",
            "reference": "Overall theme (Jeremiah 1:10; 31:31)",
            "difficulty": "Moderate"
        },
        {
            "question": "What common title is often given to the prophet Jeremiah due to his emotional distress over Judah's fate?",
            "options": ["The Royal Prophet", "The Minor Prophet", "The Weeping Prophet", "The Last Prophet"],
            "correct": "The Weeping Prophet",
            "reference": "Jeremiah 9:1; 13:17",
            "difficulty": "Moderate"
        },
        {
            "question": "Jeremiah prophesied during the reigns of Judah's last five kings, beginning with which righteous king who enacted major reforms?",
            "options": ["Hezekiah", "Josiah", "Manasseh", "Jehoiakim"],
            "correct": "Josiah",
            "reference": "Jeremiah 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific image did God use to symbolize the direction from which judgment would come upon Judah?",
            "options": ["A roaring lion from the east", "A burning coal from the Temple", "A boiling pot tilting from the North", "A great flood from the south"],
            "correct": "A boiling pot tilting from the North",
            "reference": "Jeremiah 1:13-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What empire did Jeremiah consistently prophesy would be God's instrument of judgment against Judah and Jerusalem?",
            "options": ["Assyria", "Egypt", "Babylon (Chaldeans)", "Persia"],
            "correct": "Babylon (Chaldeans)",
            "reference": "Jeremiah 25:9; 39:5-7",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the faithful scribe who recorded Jeremiah's prophecies as dictated by the prophet?",
            "options": ["Ezra", "Baruch", "Hilkiah", "Zedekiah"],
            "correct": "Baruch",
            "reference": "Jeremiah 36:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific location did Jeremiah prophesy would be destroyed because the people wrongly believed that God would not let it be harmed (saying, 'The temple of the Lord, the temple of the Lord...')?",
            "options": ["The royal palace", "The city gates", "The Temple in Jerusalem", "The altar of sacrifice"],
            "correct": "The Temple in Jerusalem",
            "reference": "Jeremiah 7:4, 12-15",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the specific duration of time (in years) that Jeremiah prophesied the Babylonian exile would last?",
            "options": ["Forty years", "Seventy years", "One hundred years", "Three hundred years"],
            "correct": "Seventy years",
            "reference": "Jeremiah 25:11-12; 29:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Jeremiah prophesy that God will put into the hearts of the people in the future, signifying the New Covenant?",
            "options": ["New rituals and sacrifices", "His Law (or 'My Law') and write it on their hearts", "The knowledge of the Lord", "A new song of praise"],
            "correct": "His Law (or 'My Law') and write it on their hearts",
            "reference": "Jeremiah 31:33",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the final destination of Jeremiah and his scribe Baruch after the fall of Jerusalem, despite the prophet's warnings not to go there?",
            "options": ["Babylon", "Moab", "Egypt", "Edom"],
            "correct": "Egypt",
            "reference": "Jeremiah 43:6-7",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "When God first called Jeremiah, what did the young prophet claim was the reason he could not speak for God?",
            "options": ["He was unrighteous", "He was a child (or 'I am a youth')", "He lacked eloquence", "He was afraid of the kings"],
            "correct": "He was a child (or 'I am a youth')",
            "reference": "Jeremiah 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "What two evils does God accuse Israel of committing (Jeremiah 2:13)?",
            "options": ["Idolatry and murder", "Forsaking Me, the fountain of living waters, and hewing themselves cisterns, broken cisterns that can hold no water", "Breaking the Sabbath and neglecting the poor", "Worshipping Baal and Molech"],
            "correct": "Forsaking Me, the fountain of living waters, and hewing themselves cisterns, broken cisterns that can hold no water",
            "reference": "Jeremiah 2:13",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Jeremiah buy and bury in Anathoth just before the final siege of Jerusalem, to symbolize the people's future return and restoration?",
            "options": ["A yoke of wood", "A scroll of the Law", "A field (or 'a field')", "A golden vessel"],
            "correct": "A field (or 'a field')",
            "reference": "Jeremiah 32:6-15",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did King Jehoiakim take with the scroll of Jeremiah's prophecies after having it read to him?",
            "options": ["He wept and repented", "He cut it with a scribe's knife and burned it in the fire", "He ignored it completely", "He threw it into the street"],
            "correct": "He cut it with a scribe's knife and burned it in the fire",
            "reference": "Jeremiah 36:23",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the captain of the guard who released Jeremiah from his chains in Ramah and allowed him to choose his own destination?",
            "options": ["Nebuchadnezzar", "Ebed-Melech", "Gedaliah", "Nebuzaradan"],
            "correct": "Nebuzaradan",
            "reference": "Jeremiah 39:11-12; 40:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific bodily object did Jeremiah wear as a symbolic action, and later smashed publicly, to prophesy the destruction of Judah and Jerusalem?",
            "options": ["An ox yoke", "A linen belt (or 'linen sash')", "A potter's vessel (or 'earthen jar')", "A chain and shackles"],
            "correct": "A potter's vessel (or 'earthen jar')",
            "reference": "Jeremiah 13:1-7; 19:10-11",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the false prophet who wore a wooden yoke, claiming to break the yoke of Babylon, only to be rebuked and prophesied to die?",
            "options": ["Hananiah", "Shemaiah", "Pashhur", "Zedekiah"],
            "correct": "Hananiah",
            "reference": "Jeremiah 28:10-17",
            "difficulty": "Hard"
        },
        {
            "question": "Jeremiah prophesied that the sons of what neighboring people would eat the flesh of the people of Judah and drink their blood in the streets of Jerusalem?",
            "options": ["The Philistines", "The Babylonians (Chaldeans)", "The Edomites", "The Moabites"],
            "correct": "The Babylonians (Chaldeans)",
            "reference": "Jeremiah 19:9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Jeremiah wear as a sign of judgment and later broke, prophesying that the nations would be broken after two years?",
            "options": ["A scroll", "A wooden yoke (and later an iron yoke)", "A chain", "A mask of wood"],
            "correct": "A wooden yoke (and later an iron yoke)",
            "reference": "Jeremiah 27:2; 28:13",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament ritual/tradition does Jeremiah state will no longer be necessary under the New Covenant?",
            "options": ["The Temple sacrifices", "Circumcision", "Fasting and lamenting", "Teaching their neighbor, for they shall all know Me, from the least to the greatest"],
            "correct": "Teaching their neighbor, for they shall all know Me, from the least to the greatest",
            "reference": "Jeremiah 31:34",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific phrase does God use to describe Jeremiah's prophetic calling, emphasizing that his ministry was ordained before his birth?",
            "options": ["Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations", "I have chosen you from among the people", "You are a light to the Gentiles", "You are the last of the prophets"],
            "correct": "Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations",
            "reference": "Jeremiah 1:5",
            "difficulty": "Extreme"
        },
        {
            "question": "In the prophecy concerning God's judgment, what specific physical action did the prophet Urijah (who prophesied against Jerusalem) perform that confirmed his fear, leading to his execution?",
            "options": ["He hid in the Temple", "He fled to Egypt (or 'fled to Egypt')", "He burned his scrolls", "He tore his clothes and wept"],
            "correct": "He fled to Egypt (or 'fled to Egypt')",
            "reference": "Jeremiah 26:21-23",
            "difficulty": "Extreme"
        },
        {
            "question": "What two types of baskets, containing figs, did Jeremiah see in a vision, symbolizing the two groups of people who would face the coming exile (one for good, one for bad)?",
            "options": ["Two baskets of grapes", "Two baskets of figs (one very good, one very bad)", "Two baskets of grain", "Two baskets of oil and wine"],
            "correct": "Two baskets of figs (one very good, one very bad)",
            "reference": "Jeremiah 24:1-3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific instruction did Jeremiah give the exiles in Babylon, regarding their temporary stay there?",
            "options": ["To immediately return to Jerusalem", "To marry, have children, build houses, and seek the peace of the city where they were exiled", "To rebel against the Babylonian king", "To remain silent for 70 years"],
            "correct": "To marry, have children, build houses, and seek the peace of the city where they were exiled",
            "reference": "Jeremiah 29:5-7",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the place outside Jerusalem where Jeremiah was commanded to purchase the potter's vessel, and later smashed it as a sign of Jerusalem's destruction?",
            "options": ["The Valley of Hinnom (or 'the Valley of the Son of Hinnom')", "The Valley of Achor", "The Mount of Olives", "The Mount of Corruption"],
            "correct": "The Valley of Hinnom (or 'the Valley of the Son of Hinnom')",
            "reference": "Jeremiah 19:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item was placed inside the wall of the cistern where Jeremiah was imprisoned to ensure his death?",
            "options": ["Water and rock", "Mud (or 'the mire')", "Poisonous snakes", "Heavy stones"],
            "correct": "Mud (or 'the mire')",
            "reference": "Jeremiah 38:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did the loyal servant Ebed-Melech use to pull Jeremiah out of the cistern?",
            "options": ["A rope and a bucket", "Old rags and worn-out clothes on ropes", "A ladder and a chain", "His bare hands"],
            "correct": "Old rags and worn-out clothes on ropes",
            "reference": "Jeremiah 38:11-12",
            "difficulty": "Extreme"
        },
        {
            "question": "Jeremiah prophesied that the Lord would make an everlasting covenant with the faithful remnant, describing it as a 'covenant of **_________**.'",
            "options": ["Forgiveness", "Peace", "Love", "Redemption"],
            "correct": "Peace",
            "reference": "Jeremiah 32:40",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase God uses to describe the certainty of the New Covenant promise, relating it to His sovereign power over nature?",
            "options": ["If you can break My covenant with the day and My covenant with the night, you may also break My covenant with David", "It is written in the heavens", "I am the Lord, I do not change", "My Law is eternal"],
            "correct": "If you can break My covenant with the day and My covenant with the night, you may also break My covenant with David",
            "reference": "Jeremiah 33:20-21",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific type of crown (or wreath) did God prophesy would fall from the head of the people due to their sin, symbolizing the loss of their honor and glory?",
            "options": ["The crown of gold", "The crown of righteousness", "The crown of glory (or 'the wreath of glory')", "The crown of life"],
            "correct": "The crown of glory (or 'the wreath of glory')",
            "reference": "Jeremiah 13:18; Lamentations 5:16",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Lamentations",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme and literary form of the Book of Lamentations?",
            "options": ["A collection of laws", "A series of prophecies against the nations", "A poetic funeral dirge (or lament) over the destruction of Jerusalem and the Temple by the Babylonians", "A historical narrative of the exile"],
            "correct": "A poetic funeral dirge (or lament) over the destruction of Jerusalem and the Temple by the Babylonians",
            "reference": "Overall theme (Lamentations 1:1; 2:2)",
            "difficulty": "Moderate"
        },
        {
            "question": "What devastating historical event does the book of Lamentations mourn?",
            "options": ["The Assyrian conquest of the Northern Kingdom (Israel)", "The Babylonian destruction of Jerusalem and the First Temple (586 BC)", "The flight of Moses from Egypt", "The exile of the Jewish people to Persia"],
            "correct": "The Babylonian destruction of Jerusalem and the First Temple (586 BC)",
            "reference": "Lamentations 1:3; 2:2, 5",
            "difficulty": "Moderate"
        },
        {
            "question": "The Book of Lamentations is comprised of five separate poems, four of which are structured using what specific poetic device?",
            "options": ["Chiasm (inverted parallelism)", "An acrostic based on the 22 letters of the Hebrew alphabet", "A repeating chorus", "A dramatic monologue"],
            "correct": "An acrostic based on the 22 letters of the Hebrew alphabet",
            "reference": "Lamentations 1, 2, 3, and 4",
            "difficulty": "Moderate"
        },
        {
            "question": "The author repeatedly describes Jerusalem and Judah by what sorrowful, female personification?",
            "options": ["The Queen", "The Widow and the Lonely City (or 'She has become like a widow')", "The Bride", "The Daughter of Zion (or 'Daughter of Zion')"],
            "correct": "The Daughter of Zion (or 'Daughter of Zion')",
            "reference": "Lamentations 1:1, 6; 2:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the ultimate source that the author acknowledges as responsible for the terrible suffering that has befallen Judah?",
            "options": ["The Babylonian king's cruelty", "The devil's temptation", "The Lord's wrath and judgment (because of the people's sins)", "The weakness of the army"],
            "correct": "The Lord's wrath and judgment (because of the people's sins)",
            "reference": "Lamentations 1:5; 2:1, 17",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific virtue does the author cling to as the basis for hope amidst the grief, stating that God's mercies never cease?",
            "options": ["The Lord's faithfulness (or 'great is His faithfulness')", "The righteousness of God", "The wisdom of the elders", "The strength of the people"],
            "correct": "The Lord's faithfulness (or 'great is His faithfulness')",
            "reference": "Lamentations 3:22-23",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the fate of the city's streets after the destruction, emphasizing their emptiness?",
            "options": ["They are filled with rubble", "The roads to Zion mourn, because no one comes to the appointed feasts", "They are full of crying and weeping", "They are occupied by foreign soldiers"],
            "correct": "The roads to Zion mourn, because no one comes to the appointed feasts",
            "reference": "Lamentations 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "The writer advises the people to search and examine what specific thing, and then turn back to the Lord?",
            "options": ["The Scriptures (or 'our ways')", "Our hearts and our ways", "The ruins of the Temple", "The words of the prophet"],
            "correct": "Our hearts and our ways",
            "reference": "Lamentations 3:40",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the simple request the author makes to God in the final chapter (Lamentations 5:21)?",
            "options": ["Restore our enemies", "Bring us back to Yourself, O Lord, that we may be restored", "Send us a new prophet", "Rebuild the Temple quickly"],
            "correct": "Bring us back to Yourself, O Lord, that we may be restored",
            "reference": "Lamentations 5:21",
            "difficulty": "Moderate"
        },
        {
            "question": "The writer states that 'The Lord is good to those who wait for Him, to the soul who **_________** him.'",
            "options": ["Worships", "Obeys", "Seeks", "Praises"],
            "correct": "Seeks",
            "reference": "Lamentations 3:25",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific consequence of the famine is described as so severe that women in Jerusalem committed a horrible act against their own children?",
            "options": ["They left their children to starve", "They sold their children into slavery", "They boiled and ate their children (cannibalism)", "They sent their children to a foreign country"],
            "correct": "They boiled and ate their children (cannibalism)",
            "reference": "Lamentations 4:10; 2:20",
            "difficulty": "Hard"
        },
        {
            "question": "The author contrasts God's eternal sovereignty with the people's suffering, noting that the Lord has established His throne for how long?",
            "options": ["Forever (or 'to all generations')", "One thousand years", "Seventy years", "Five hundred years"],
            "correct": "Forever (or 'to all generations')",
            "reference": "Lamentations 5:19",
            "difficulty": "Hard"
        },
        {
            "question": "The final chapter states that the joy of the heart has ceased, and the author cites what specific body part that has become a source of mourning?",
            "options": ["Our lips have become silent", "Our hair is gray", "Our dancing has been turned into mourning", "Our eyes have failed"],
            "correct": "Our dancing has been turned into mourning",
            "reference": "Lamentations 5:15",
            "difficulty": "Hard"
        },
        {
            "question": "The prophet states that the tongue of what specific group of people sticks to the roof of their mouth for thirst during the siege?",
            "options": ["The elders", "The little ones (or 'the infant')", "The soldiers", "The priests"],
            "correct": "The little ones (or 'the infant')",
            "reference": "Lamentations 4:4",
            "difficulty": "Hard"
        },
        {
            "question": "The author compares the suffering of Jerusalem's royalty and nobles to what specific valuable item that has become tarnished and ruined in the streets?",
            "options": ["Golden ornaments", "Fine linen", "The finest gold (or 'purest gold')", "A beautiful jewel"],
            "correct": "The finest gold (or 'purest gold')",
            "reference": "Lamentations 4:1-2",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament figure's words are echoed when the author says, 'It is good for a man to bear the yoke in his youth'?",
            "options": ["The Preacher (Ecclesiastes)", "The Prophet Isaiah", "The Prophet Jeremiah", "The Psalmist David"],
            "correct": "The Preacher (Ecclesiastes)",
            "reference": "Lamentations 3:27",
            "difficulty": "Hard"
        },
        {
            "question": "The author claims that his pain is caused by the Lord breaking what specific physical bodily object, symbolizing God's judgment?",
            "options": ["His bones (or 'broken my bones')", "His heart", "His hand", "His feet"],
            "correct": "His bones (or 'broken my bones')",
            "reference": "Lamentations 3:4",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the source of God's continual supply of mercy and compassion, ensuring hope remains?",
            "options": ["They are new every morning", "They are everlasting", "They are great and abundant", "They are stronger than death"],
            "correct": "They are new every morning",
            "reference": "Lamentations 3:23",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item of shame did the elders of Jerusalem do to themselves after the destruction of the city?",
            "options": ["They were exiled naked", "They threw dirt on their heads and sat on the ground in silence", "They wore only sackcloth", "They cut off their beards"],
            "correct": "They threw dirt on their heads and sat on the ground in silence",
            "reference": "Lamentations 2:10",
            "difficulty": "Hard"
        },
        {
            "question": "The author states that what specific group of religious leaders acted as 'wolves in the desert' toward the people of Jerusalem?",
            "options": ["The false prophets and the wicked priests", "The elders and the leaders", "The scribes and the rulers", "The Babylonian priests"],
            "correct": "The false prophets and the wicked priests",
            "reference": "Lamentations 2:14; 4:13",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the central chapter (Lamentations 3), the author expresses humility, stating that he puts his mouth in the dust, perhaps there may be what?",
            "options": ["A sign from God", "Hope", "A word of forgiveness", "A sound of deliverance"],
            "correct": "Hope",
            "reference": "Lamentations 3:29",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific punishment did the prophet say was worse than the punishment of Sodom, which was overthrown in a moment?",
            "options": ["The destruction of the Temple", "The punishment of the iniquity of the daughter of my people (or 'daughter of my people')", "The long siege and famine of Jerusalem", "The exile to Babylon"],
            "correct": "The punishment of the iniquity of the daughter of my people (or 'daughter of my people')",
            "reference": "Lamentations 4:6",
            "difficulty": "Extreme"
        },
        {
            "question": "The shame of the destroyed city is so great that those who formerly passed by and spoke well of it now do what specific two actions?",
            "options": ["They weep and mourn", "They scorn it and mock it", "They shake their heads and hiss (or 'wag their heads and hiss')", "They loot its treasures"],
            "correct": "They shake their heads and hiss (or 'wag their heads and hiss')",
            "reference": "Lamentations 2:15",
            "difficulty": "Extreme"
        },
        {
            "question": "The prophet notes that God has caused the solemn feasts and what other specific celebration to be forgotten in Zion?",
            "options": ["The Sabbath day", "The Law of Moses", "The Sabbaths and the feasts (or 'Sabbaths and appointed feasts')", "The New Moon celebrations"],
            "correct": "The Sabbaths and the feasts (or 'Sabbaths and appointed feasts')",
            "reference": "Lamentations 2:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did the writer say the soldiers sold to gain sustenance during the siege, symbolizing their desperation?",
            "options": ["Their clothes for food", "Their sons and daughters for sustenance", "Their ancestral land for bread", "Their jewels for gold"],
            "correct": "Their sons and daughters for sustenance",
            "reference": "Lamentations 2:20 (They ate them, but the extreme desperation is seen in the need for sustenance)",
            "difficulty": "Extreme"
        },
        {
            "question": "The final poem laments the loss of the city's leaders and elders, who were treated as what specific type of forced laborer by the enemies?",
            "options": ["Slaves in the fields", "The heads of the elders have not been honored; young men are forced to carry burdens and boys stumble under loads of wood", "Prisoners of war", "Makers of bricks"],
            "correct": "The heads of the elders have not been honored; young men are forced to carry burdens and boys stumble under loads of wood",
            "reference": "Lamentations 5:12-13",
            "difficulty": "Extreme"
        },
        {
            "question": "What two physical characteristics of the nobles (the wealthy) deteriorated most severely during the siege, highlighting the famine?",
            "options": ["Their beards fell out and their skin turned black", "Their skin clung to their bones, and they were blacker than soot", "Their faces were thinner, and their clothes were rags", "They grew thin and weak"],
            "correct": "Their skin clung to their bones, and they were blacker than soot",
            "reference": "Lamentations 4:8",
            "difficulty": "Extreme"
        },
        {
            "question": "The prophet acknowledges that God does not afflict willingly, but that He has done what to fulfill the words of the Old Testament prophets?",
            "options": ["He has broken His covenant", "He has established His word (or 'performed what He had purposed')", "He has sent the Babylonians", "He has judged the Law"],
            "correct": "He has established His word (or 'performed what He had purposed')",
            "reference": "Lamentations 2:17",
            "difficulty": "Extreme"
        },
        {
            "question": "The author states that his grief is so severe that his eyes fail from weeping, his whole body is in turmoil, and his **_________** is poured out on the ground.",
            "options": ["Hope", "Liver (or 'my liver is poured out on the ground')", "Strength", "Spirit"],
            "correct": "Liver (or 'my liver is poured out on the ground')",
            "reference": "Lamentations 2:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final, agonizing fear expressed by the author concerning their hope of restoration?",
            "options": ["Will the Lord forget us forever?", "Unless You utterly reject us, and are very angry with us", "Will the Babylonians stay forever?", "Will the Temple never be rebuilt?"],
            "correct": "Unless You utterly reject us, and are very angry with us",
            "reference": "Lamentations 5:22",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Ezekiel",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Ezekiel?",
            "options": ["The history of the Babylonian exile", "The judgment on Jerusalem and the nations, and the ultimate restoration of Israel's glory, Temple, and covenant", "Prophecies about the coming Messiah", "The laws for the priests and Levites"],
            "correct": "The judgment on Jerusalem and the nations, and the ultimate restoration of Israel's glory, Temple, and covenant",
            "reference": "Overall theme (Ezekiel 11:16-17; 36:24-28; 40-48)",
            "difficulty": "Moderate"
        },
        {
            "question": "In what specific location was Ezekiel when he received his prophecies?",
            "options": ["In Jerusalem at the Temple", "In Babylon (by the Chebar Canal) with the exiles", "In the land of Judah (in hiding)", "On the island of Patmos"],
            "correct": "In Babylon (by the Chebar Canal) with the exiles",
            "reference": "Ezekiel 1:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific human title did God consistently use to address Ezekiel?",
            "options": ["Son of David", "Prophet of the Lord", "Man of God", "Son of Man"],
            "correct": "Son of Man",
            "reference": "Ezekiel 2:1, 3, 6, 8 (used over 90 times)",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific item did Ezekiel see in his first vision that served as the mobile throne of God?",
            "options": ["A mighty mountain", "Four living creatures (Cherubim) and wheels (wheel within a wheel)", "A chariot of fire", "A golden altar"],
            "correct": "Four living creatures (Cherubim) and wheels (wheel within a wheel)",
            "reference": "Ezekiel 1:4-21",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action was Ezekiel commanded to perform on a tile, drawing a map, to symbolize the coming siege of Jerusalem?",
            "options": ["To write a lament on it", "To lie on his side beside it", "To strike it with a sword", "To burn it with fire"],
            "correct": "To lie on his side beside it",
            "reference": "Ezekiel 4:1-8",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the eventual fate of God's 'Glory' (Shekinah) as prophesied by Ezekiel, confirming the impending destruction of the Temple?",
            "options": ["It became brighter", "It departed from the Temple and the city", "It descended upon the Ark", "It remained in the Holy of Holies"],
            "correct": "It departed from the Temple and the city",
            "reference": "Ezekiel 10:18-19; 11:23",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the people of Israel who would be restored, receiving a new covenant?",
            "options": ["I will give you a new heart and a new spirit", "I will rebuild the Temple immediately", "I will defeat all your enemies", "You will be a great nation forever"],
            "correct": "I will give you a new heart and a new spirit",
            "reference": "Ezekiel 11:19; 36:26",
            "difficulty": "Moderate"
        },
        {
            "question": "What famous vision did Ezekiel see that symbolized the resurrection and restoration of the entire nation of Israel?",
            "options": ["The valley of dry bones", "The river of life", "The rebuilt Temple", "The great vine"],
            "correct": "The valley of dry bones",
            "reference": "Ezekiel 37:1-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific consequence did God promise would befall the unfaithful, false prophets, who spoke 'peace' when there was no peace?",
            "options": ["Their scrolls would be burned", "They would be stoned to death", "They would be removed from the counsel of God's people and not enter the land of Israel", "They would be exiled to Egypt"],
            "correct": "They would be removed from the counsel of God's people and not enter the land of Israel",
            "reference": "Ezekiel 13:9",
            "difficulty": "Moderate"
        },
        {
            "question": "The final section of Ezekiel (Chapters 40-48) details the vision of what restored structure?",
            "options": ["The walls of Jerusalem", "The Temple (a massive future Temple)", "The new palace of David", "The altar of sacrifice"],
            "correct": "The Temple (a massive future Temple)",
            "reference": "Ezekiel 40:1-4",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What were the four distinct faces of the living creatures Ezekiel saw in his first vision?",
            "options": ["Lion, ox, man, and eagle", "Lion, bull, man, and cherub", "Lion, ox, angel, and eagle", "Ox, man, eagle, and horse"],
            "correct": "Lion, ox, man, and eagle",
            "reference": "Ezekiel 1:10; 10:14",
            "difficulty": "Hard"
        },
        {
            "question": "What food was Ezekiel commanded to eat as a sign of God's word being both bitter and sweet, symbolizing the reception of God's message?",
            "options": ["A roll (or 'scroll') of writing", "A piece of cake made with dung", "Locusts and wild honey", "Unleavened bread"],
            "correct": "A roll (or 'scroll') of writing",
            "reference": "Ezekiel 2:9-3:3",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Ezekiel see in a vision, which he was commanded to measure, symbolizing the extent of the land's desolation?",
            "options": ["A river of water", "A rod (or 'measuring rod')", "A silver trumpet", "A golden chain"],
            "correct": "A rod (or 'measuring rod')",
            "reference": "Ezekiel 40:3",
            "difficulty": "Hard"
        },
        {
            "question": "What specific city did Ezekiel target with a long, detailed prophecy of destruction, comparing it to a ship broken in the midst of the seas?",
            "options": ["Jerusalem", "Babylon", "Tyre", "Sidon"],
            "correct": "Tyre",
            "reference": "Ezekiel 27:3, 34",
            "difficulty": "Hard"
        },
        {
            "question": "Ezekiel prophesied against the unfaithful shepherds of Israel, stating that God would require what specific item from them?",
            "options": ["Their lives", "Their flocks", "Their wealth", "My flock at their hand"],
            "correct": "My flock at their hand",
            "reference": "Ezekiel 34:10",
            "difficulty": "Hard"
        },
        {
            "question": "In the valley of dry bones vision, what was the sequential order of restoration that Ezekiel witnessed?",
            "options": ["Breath, sinews, flesh, bones", "Bones came together, sinews, flesh, skin, and then breath came into them", "Flesh, breath, bones, skin", "Sinews, skin, breath, bones"],
            "correct": "Bones came together, sinews, flesh, skin, and then breath came into them",
            "reference": "Ezekiel 37:7-10",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the specific location where the Spirit lifted Ezekiel to, allowing him to observe the spiritual state of Jerusalem?",
            "options": ["The Temple courtyard", "The Valley of Hinnom", "The gate of the inner court facing North", "The Mount of Olives"],
            "correct": "The gate of the inner court facing North",
            "reference": "Ezekiel 8:3",
            "difficulty": "Hard"
        },
        {
            "question": "What specific consequence did God place on Ezekiel's wife, which the prophet was forbidden to mourn over, serving as a sign to the exiles?",
            "options": ["She was struck with illness", "Her death (the 'desire of your eyes')", "She was exiled to a foreign land", "She abandoned Ezekiel"],
            "correct": "Her death (the 'desire of your eyes')",
            "reference": "Ezekiel 24:15-18",
            "difficulty": "Hard"
        },
        {
            "question": "What specific type of judgment did God promise to execute upon the nation of Egypt, using the analogy of a massive fish?",
            "options": ["He would make the land desolate", "He would put hooks in the jaws of Pharaoh, the great monster (or 'dragon/crocodiles') of the rivers", "He would turn the Nile to blood", "He would bring a great army against them"],
            "correct": "He would put hooks in the jaws of Pharaoh, the great monster (or 'dragon/crocodiles') of the rivers",
            "reference": "Ezekiel 29:3-5",
            "difficulty": "Hard"
        },
        {
            "question": "In the vision of the New Temple, what specific group of Levites were restricted to serving only as gatekeepers and common workers because they strayed after idols?",
            "options": ["The sons of Zadok", "The sons of Aaron", "The Levites who went astray when Israel went astray (excluding the sons of Zadok)", "The sons of Kohath"],
            "correct": "The Levites who went astray when Israel went astray (excluding the sons of Zadok)",
            "reference": "Ezekiel 44:10-14",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the vision of the living creatures (Cherubim), what specific sound did the moving of their wings make?",
            "options": ["The voice of many waters (or 'the noise of many waters')", "The sound of thunder and lightning", "The sound of a multitude praying", "The voice of God speaking"],
            "correct": "The voice of many waters (or 'the noise of many waters')",
            "reference": "Ezekiel 1:24",
            "difficulty": "Extreme"
        },
        {
            "question": "What two materials were the cakes (food) Ezekiel was commanded to bake with human dung originally intended to be cooked over?",
            "options": ["Wood and fire", "Animal dung and wheat", "Human dung (later changed to cow dung) and wheat flour", "Coal and oil"],
            "correct": "Human dung (later changed to cow dung) and wheat flour",
            "reference": "Ezekiel 4:12-15",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the moral accountability of the individual, which became central to Ezekiel's teaching, contrasting with the proverb of the fathers eating sour grapes?",
            "options": ["The soul who sins shall die", "The righteousness of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself", "Every man will be judged by the Law", "God will forgive those who repent"],
            "correct": "The righteousness of the righteous shall be upon himself, and the wickedness of the wicked shall be upon himself",
            "reference": "Ezekiel 18:20",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific body part of the Prince of Tyre did Ezekiel prophesy would be buried in the heart of the seas, symbolizing his utter destruction?",
            "options": ["His treasures", "His body (or 'the heart of the seas')", "His army", "His ships"],
            "correct": "His body (or 'the heart of the seas')",
            "reference": "Ezekiel 28:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific material was the city of Jerusalem's wall made of in Ezekiel's vision, contrasting with the walls of the New Jerusalem (Revelation)?",
            "options": ["Gold and jewels", "Brick and mortar", "Flashing bronze (or 'bright shining bronze')", "Stone and cedar"],
            "correct": "Flashing bronze (or 'bright shining bronze')",
            "reference": "Ezekiel 40:3",
            "difficulty": "Extreme"
        },
        {
            "question": "In the vision of the river flowing from the Temple, what specific consequence occurred in the Dead Sea?",
            "options": ["The river stopped flowing", "The waters were healed, and there was a great multitude of fish", "The river flooded the land", "The waters turned to blood"],
            "correct": "The waters were healed, and there was a great multitude of fish",
            "reference": "Ezekiel 47:8-9",
            "difficulty": "Extreme"
        },
        {
            "question": "What two nations are named in the massive coalition that God promises to defeat in the latter days (Ezekiel 38-39)?",
            "options": ["Tyre and Sidon", "Assyria and Egypt", "Gog and Magog", "Persia and Media"],
            "correct": "Gog and Magog",
            "reference": "Ezekiel 38:2; 39:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific punishment did God promise to execute upon the false prophetesses who used magical armbands and veils to mislead the people?",
            "options": ["He would strip off their veils and release the souls they hunted", "He would make them mute", "He would strike them with blindness", "He would make them prophesy accurately"],
            "correct": "He would strip off their veils and release the souls they hunted",
            "reference": "Ezekiel 13:18-21",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the people of Israel who would be regathered from the nations?",
            "options": ["I will gather you from the countries, and I will bring you into the land of Israel", "I will rebuild the kingdom of David", "I will save you by a mighty hand", "You will be My people and I will be your God"],
            "correct": "I will gather you from the countries, and I will bring you into the land of Israel",
            "reference": "Ezekiel 36:24",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final, specific name given to the city of the New Temple, signifying God's permanent presence?",
            "options": ["New Jerusalem", "The City of David", "The Lord is There (Yahweh-Shammah)", "The Holy Mountain"],
            "correct": "The Lord is There (Yahweh-Shammah)",
            "reference": "Ezekiel 48:35",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Daniel",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Daniel?",
            "options": ["The history of the Babylonian exile", "God's sovereignty over all earthly kingdoms and the ultimate triumph of God's eternal kingdom", "Prophecies of the Messiah's first coming", "The wisdom of the exiled prophets"],
            "correct": "God's sovereignty over all earthly kingdoms and the ultimate triumph of God's eternal kingdom",
            "reference": "Overall theme (Daniel 2:44; 4:17)",
            "difficulty": "Moderate"
        },
        {
            "question": "In what specific historical context did Daniel and his friends begin their ministry?",
            "options": ["During the Assyrian conquest", "During the Babylonian exile and the reign of King Nebuchadnezzar", "During the Persian restoration", "During the reign of King Josiah in Judah"],
            "correct": "During the Babylonian exile and the reign of King Nebuchadnezzar",
            "reference": "Daniel 1:1, 6",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the Babylonian king who conquered Jerusalem and first brought Daniel and his friends into captivity?",
            "options": ["Cyrus", "Belshazzar", "Nebuchadnezzar", "Darius"],
            "correct": "Nebuchadnezzar",
            "reference": "Daniel 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What four items did Daniel and his friends refuse to defile themselves with when serving in the Babylonian court?",
            "options": ["The king's wine, the king's bread, the king's meat, and the king's riches", "The king's rich food and the wine", "The king's gold, silver, and jewels, and the king's meat", "The king's land, the king's women, the king's wine, and the king's meat"],
            "correct": "The king's rich food and the wine",
            "reference": "Daniel 1:8",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific item or concept was used by God to communicate the sequence of the four great world empires to King Nebuchadnezzar in a dream?",
            "options": ["A roaring lion", "A golden statue (or 'great image') of a man", "Four beasts rising from the sea", "A fiery furnace"],
            "correct": "A golden statue (or 'great image') of a man",
            "reference": "Daniel 2:31-45",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific consequence did the three friends face for refusing to worship the golden image Nebuchadnezzar set up?",
            "options": ["They were imprisoned for life", "They were cast into a fiery furnace", "They were thrown to the lions", "They were exiled from Babylon"],
            "correct": "They were cast into a fiery furnace",
            "reference": "Daniel 3:19-23",
            "difficulty": "Moderate"
        },
        {
            "question": "What happened to King Nebuchadnezzar as a result of his pride, as prophesied by Daniel?",
            "options": ["He was assassinated by his son", "He was driven from men and ate grass like an ox for seven periods of time", "He was defeated in battle", "He lost his wealth"],
            "correct": "He was driven from men and ate grass like an ox for seven periods of time",
            "reference": "Daniel 4:33",
            "difficulty": "Moderate"
        },
        {
            "question": "What visible sign did God send during Belshazzar's feast, which Daniel was called to interpret?",
            "options": ["A blinding flash of light", "The writing on the wall (Mene, Mene, Tekel, Upharsin)", "A great earthquake", "A plague upon the city"],
            "correct": "The writing on the wall (Mene, Mene, Tekel, Upharsin)",
            "reference": "Daniel 5:5, 25",
            "difficulty": "Moderate"
        },
        {
            "question": "What consequence did Daniel face for praying to God, contrary to King Darius's decree?",
            "options": ["He was exiled to Persia", "He was thrown into the lions' den", "He was cast into the furnace", "He was stripped of his office"],
            "correct": "He was thrown into the lions' den",
            "reference": "Daniel 6:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the primary focus of Daniel's prophecy in Chapter 9?",
            "options": ["The prophecy of the four empires", "The seventy sevens (or 'seventy weeks') concerning Jerusalem and the Messiah", "The final judgment", "The New Creation"],
            "correct": "The seventy sevens (or 'seventy weeks') concerning Jerusalem and the Messiah",
            "reference": "Daniel 9:24-27",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What were the four metals that represented the four empires in Nebuchadnezzar's dream of the great image?",
            "options": ["Gold, silver, bronze, and iron/clay", "Gold, silver, copper, and iron", "Bronze, silver, iron, and stone", "Iron, clay, gold, and silver"],
            "correct": "Gold, silver, bronze, and iron/clay",
            "reference": "Daniel 2:32-33",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who ruled Babylon (as co-regent with Nabonidus) when it fell to the Medes and Persians?",
            "options": ["Nebuchadnezzar", "Nabonidus", "Belshazzar", "Darius the Mede"],
            "correct": "Belshazzar",
            "reference": "Daniel 5:1, 30",
            "difficulty": "Hard"
        },
        {
            "question": "The four beasts rising from the sea in Daniel 7 represent the same four empires as the statue in Daniel 2. What were the four animals?",
            "options": ["Lion, bear, leopard, and a terrifying fourth beast with ten horns", "Lion, horse, eagle, and a terrifying fourth beast", "Bear, lion, wolf, and a terrible dragon", "Leopard, lion, bear, and a serpent"],
            "correct": "Lion, bear, leopard, and a terrifying fourth beast with ten horns",
            "reference": "Daniel 7:3-7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific language, besides Hebrew, does a significant portion of the Book of Daniel (Chapters 2-7) use?",
            "options": ["Greek", "Chaldean", "Aramaic", "Persian"],
            "correct": "Aramaic",
            "reference": "Daniel 2:4-7:28",
            "difficulty": "Hard"
        },
        {
            "question": "What specific vision does Daniel see after the destruction of the four empires, symbolizing the eternal rule of the Messiah?",
            "options": ["The Son of Man (or 'one like the Son of Man') coming with the clouds of heaven", "The rebuilding of the Temple in Jerusalem", "The throne of God descending to earth", "The gathering of the saints"],
            "correct": "The Son of Man (or 'one like the Son of Man') coming with the clouds of heaven",
            "reference": "Daniel 7:13-14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did the King Darius take when Daniel was in the lions' den, showing his concern for Daniel's welfare?",
            "options": ["He sent his army to guard the den", "He fasted all night and could not sleep", "He offered a sacrifice to Daniel's God", "He spoke a blessing over Daniel"],
            "correct": "He fasted all night and could not sleep",
            "reference": "Daniel 6:18",
            "difficulty": "Hard"
        },
        {
            "question": "What were the three Hebrew names of Daniel's three friends (before they were given Babylonian names)?",
            "options": ["Belteshazzar, Shadrach, and Meshach", "Hananiah, Mishael, and Azariah", "Zedekiah, Amon, and Josiah", "Hezekiah, Jotham, and Ahaz"],
            "correct": "Hananiah, Mishael, and Azariah",
            "reference": "Daniel 1:6-7",
            "difficulty": "Hard"
        },
        {
            "question": "The dream of Nebuchadnezzar about the great image ends with what final object striking the statue, shattering the iron and clay and becoming a great mountain?",
            "options": ["A mighty earthquake", "A stone cut out without hands", "A flood of fire", "A golden hammer"],
            "correct": "A stone cut out without hands",
            "reference": "Daniel 2:34-35, 45",
            "difficulty": "Hard"
        },
        {
            "question": "What Old Testament prophet's writings was Daniel studying when he received the prophecy of the seventy sevens (weeks)?",
            "options": ["Isaiah", "Ezekiel", "Jeremiah", "Malachi"],
            "correct": "Jeremiah",
            "reference": "Daniel 9:2 (Jeremiah 25, 29)",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did the three friends tell Nebuchadnezzar they would *not* perform, even if God chose not to deliver them from the furnace?",
            "options": ["Serve your gods or worship the golden image", "Submit to the law of the land", "Deny their God", "Leave the city of Babylon"],
            "correct": "Serve your gods or worship the golden image",
            "reference": "Daniel 3:17-18",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific food item did Daniel and his friends request instead of the king's rich food and wine?",
            "options": ["Water and fruit", "Vegetables and water (or 'pulse and water')", "Locusts and wild honey", "Bread and herbs"],
            "correct": "Vegetables and water (or 'pulse and water')",
            "reference": "Daniel 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the initial command Nebuchadnezzar gave his wise men after he had the dream that he could not recall?",
            "options": ["To pray to their gods for the meaning", "To tell him the dream and its interpretation, or be cut into pieces", "To give him a new dream", "To interpret the dream based on a guess"],
            "correct": "To tell him the dream and its interpretation, or be cut into pieces",
            "reference": "Daniel 2:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What did Nebuchadnezzar call the fourth figure whom he saw walking with the three men in the fiery furnace?",
            "options": ["An angel of the Lord", "A mighty warrior", "The Son of God (or 'like the Son of God')", "A powerful man"],
            "correct": "The Son of God (or 'like the Son of God')",
            "reference": "Daniel 3:25",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the final command that Nebuchadnezzar gave all the people of his empire after witnessing the miracle of the fiery furnace?",
            "options": ["To worship the God of Shadrach, Meshach, and Abednego, or be cut into pieces", "To build a new temple for the God of Israel", "To convert to Judaism", "To re-establish the law of the Jews"],
            "correct": "To worship the God of Shadrach, Meshach, and Abednego, or be cut into pieces",
            "reference": "Daniel 3:29",
            "difficulty": "Extreme"
        },
        {
            "question": "The four world empires are identified in Daniel 8 by two specific animals. What are they?",
            "options": ["A ram (Media and Persia) and a male goat (Greece)", "A lion and a bear", "A leopard and a dragon", "A goat and a lamb"],
            "correct": "A ram (Media and Persia) and a male goat (Greece)",
            "reference": "Daniel 8:3-8, 20-21",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the source of the wisdom and understanding given to Daniel, which surpassed all the wise men of Babylon?",
            "options": ["Ten times better (or 'ten times better than all the magicians and astrologers')", "Inspired by God", "Wisdom from the East", "The greatest knowledge in the world"],
            "correct": "Ten times better (or 'ten times better than all the magicians and astrologers')",
            "reference": "Daniel 1:20",
            "difficulty": "Extreme"
        },
        {
            "question": "The prophecy of the 'seventy sevens' (weeks) states that after the sixty-two sevens, the Messiah will be what?",
            "options": ["Killed (or 'cut off')", "Revealed to the nations", "Crowned King", "Betrayed by a friend"],
            "correct": "Killed (or 'cut off')",
            "reference": "Daniel 9:26",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific material was the great image's head made of, symbolizing the Babylonian Empire?",
            "options": ["Bronze", "Fine gold", "Silver", "Iron"],
            "correct": "Fine gold",
            "reference": "Daniel 2:32, 38",
            "difficulty": "Extreme"
        },
        {
            "question": "Daniel prophesies about the final resurrection, stating that those who sleep in the dust of the earth will awake, some to everlasting life and some to what contrasting state?",
            "options": ["Shame and everlasting contempt", "Eternal rest", "A second chance", "Service in the heavens"],
            "correct": "Shame and everlasting contempt",
            "reference": "Daniel 12:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the immediate fate of the three officials who falsely accused Daniel and had him thrown into the lions' den?",
            "options": ["They were exiled from Babylon", "They were killed immediately by the lions when they and their families were thrown into the den", "They were stripped of their wealth", "They were forced to serve Daniel"],
            "correct": "They were killed immediately by the lions when they and their families were thrown into the den",
            "reference": "Daniel 6:24",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Hosea",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Hosea?",
            "options": ["A prophecy against the King of Assyria", "God's unconditional love and faithfulness for adulterous Israel, symbolized by Hosea's marriage", "The coming restoration of the Temple", "Instructions for the exiled people"],
            "correct": "God's unconditional love and faithfulness for adulterous Israel, symbolized by Hosea's marriage",
            "reference": "Overall theme (Hosea 3:1)",
            "difficulty": "Moderate"
        },
        {
            "question": "Hosea's prophecy was primarily directed against which of the two divided kingdoms of Israel?",
            "options": ["Judah (South)", "Israel (North/Ephraim)", "Edom", "Babylon"],
            "correct": "Israel (North/Ephraim)",
            "reference": "Hosea 1:1; 4:1-6 (frequent use of 'Ephraim')",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the unfaithful woman whom God commanded Hosea to marry as a living allegory for Israel's relationship with God?",
            "options": ["Gomer", "Jezebel", "Rahab", "Rizpah"],
            "correct": "Gomer",
            "reference": "Hosea 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What kind of activity was Hosea's wife involved in that paralleled Israel's spiritual unfaithfulness to God?",
            "options": ["A worshipper of the king", "A cult prostitute (or 'harlotry')", "A maker of idols", "A false prophet"],
            "correct": "A cult prostitute (or 'harlotry')",
            "reference": "Hosea 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action did God command Hosea to do after Gomer had left him, to demonstrate God's enduring love?",
            "options": ["To divorce her publicly", "To buy her back and bring her home", "To let her go and never see her again", "To curse her children"],
            "correct": "To buy her back and bring her home",
            "reference": "Hosea 3:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "What two names did Hosea give his children that symbolized God's impending judgment upon Israel?",
            "options": ["Maher-Shalal-Hash-Baz and Immanuel", "Jezreel, Lo-Ruhamah (Not loved/pitied), and Lo-Ammi (Not My people)", "Ephraim and Manasseh", "Judah and Israel"],
            "correct": "Jezreel, Lo-Ruhamah (Not loved/pitied), and Lo-Ammi (Not My people)",
            "reference": "Hosea 1:4, 6, 9",
            "difficulty": "Moderate"
        },
        {
            "question": "What did the Israelites primarily attribute their prosperity and abundance to, rather than acknowledging the Lord?",
            "options": ["Their own hard work", "The king's wisdom", "Baal (or 'her lovers')", "The strength of their army"],
            "correct": "Baal (or 'her lovers')",
            "reference": "Hosea 2:5, 8",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the primary consequence of Israel's lack of true commitment and knowledge of the Lord?",
            "options": ["My people are destroyed for lack of knowledge", "The Lord has left His people", "The Temple will be destroyed", "The King will fall"],
            "correct": "My people are destroyed for lack of knowledge",
            "reference": "Hosea 4:6",
            "difficulty": "Moderate"
        },
        {
            "question": "Hosea prophesied that Israel would eventually be defeated and exiled by which powerful nation?",
            "options": ["Egypt", "Assyria", "Babylon", "Tyre"],
            "correct": "Assyria",
            "reference": "Hosea 11:5; 14:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Hosea say God desires more than burnt offerings?",
            "options": ["Faith and repentance", "Steadfast love (or 'mercy/hesed') and the knowledge of God", "Justice and righteousness", "A humble heart"],
            "correct": "Steadfast love (or 'mercy/hesed') and the knowledge of God",
            "reference": "Hosea 6:6",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What two specific animals did God threaten to become, to ambush and tear up the Northern Kingdom of Israel (Ephraim and Judah)?",
            "options": ["A roaring lion and a cunning fox", "A lion and a bear", "A roaring lion and a terrifying wolf", "A serpent and a bear"],
            "correct": "A lion and a bear",
            "reference": "Hosea 13:7-8; 5:14",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase God uses to describe Israel's love for Him, noting its fleeting nature?",
            "options": ["Like a morning cloud and like the early dew that passes away", "Like a broken staff", "Like a dry tree", "Like a faint shadow"],
            "correct": "Like a morning cloud and like the early dew that passes away",
            "reference": "Hosea 6:4; 13:3",
            "difficulty": "Hard"
        },
        {
            "question": "What two nations did Israel constantly seek alliances with, rather than relying on God, which Hosea condemned?",
            "options": ["Tyre and Sidon", "Assyria and Egypt", "Edom and Moab", "Babylon and Persia"],
            "correct": "Assyria and Egypt",
            "reference": "Hosea 7:11; 12:1; 14:3",
            "difficulty": "Hard"
        },
        {
            "question": "What specific image does Hosea use to describe the primary characteristic of the people of Ephraim (Israel), stating they were easily deceived?",
            "options": ["A stubborn ox", "A scattered flock", "A silly dove, without sense", "A broken vine"],
            "correct": "A silly dove, without sense",
            "reference": "Hosea 7:11",
            "difficulty": "Hard"
        },
        {
            "question": "What physical bodily affliction does God threaten to bring upon the priests for their failure to teach the Law, matching their failure to acknowledge Him?",
            "options": ["Blindness and lameness", "I will make your feasts into mourning", "I will reject you from being priest for Me, and I will forget your children", "I will strike them with leprosy"],
            "correct": "I will reject you from being priest for Me, and I will forget your children",
            "reference": "Hosea 4:6",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did Gomer wear after she returned, signifying the payment Hosea made for her?",
            "options": ["A silver ring", "An ephah of barley and a measure of wine", "A gold ornament", "A new set of clothes"],
            "correct": "An ephah of barley and a measure of wine",
            "reference": "Hosea 3:2",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament ritual/feast did God command Israel to cease celebrating as a sign of judgment and separation?",
            "options": ["Sabbaths and New Moons", "Passover and the Feast of Unleavened Bread", "The Day of Atonement", "The Feast of Tabernacles"],
            "correct": "Sabbaths and New Moons",
            "reference": "Hosea 2:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the moral condition of the entire nation, stating that Ephraim (Israel) is mixed with the nations and has become what food item?",
            "options": ["A half-baked cake (or 'a cake not turned')", "A burnt offering", "Unleavened bread", "Wasted wine"],
            "correct": "A half-baked cake (or 'a cake not turned')",
            "reference": "Hosea 7:8",
            "difficulty": "Hard"
        },
        {
            "question": "Hosea repeatedly refers to the wickedness that began when Israel sinned in what location, even before entering the Promised Land?",
            "options": ["At the Red Sea", "At Baal Peor (idolatry with Moabite women)", "At Mount Sinai", "In the city of Shechem"],
            "correct": "At Baal Peor (idolatry with Moabite women)",
            "reference": "Hosea 9:10",
            "difficulty": "Hard"
        },
        {
            "question": "What is the final blessing of restoration God promises, symbolized by Israel being like a lily, striking roots like Lebanon, and enjoying what two agricultural items?",
            "options": ["Wine and honey", "Grain and wine", "Oil and grain", "Grain and figs"],
            "correct": "Grain and wine",
            "reference": "Hosea 14:5-7",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the meaning of the name of Hosea's second child, Lo-Ruhamah?",
            "options": ["My people are scattered", "God remembers", "Not loved (or 'no mercy')", "My heart is broken"],
            "correct": "Not loved (or 'no mercy')",
            "reference": "Hosea 1:6",
            "difficulty": "Extreme"
        },
        {
            "question": "The specific idolatry that brought the most judgment upon Israel, involving the worship of the Golden Calf, occurred in what Northern city, which Hosea frequently condemns?",
            "options": ["Jerusalem", "Samaria", "Bethel", "Gilgal"],
            "correct": "Bethel",
            "reference": "Hosea 10:5, 15",
            "difficulty": "Extreme"
        },
        {
            "question": "Hosea 11:1 is quoted in the New Testament to refer to Jesus. What specific historical event of Jesus's life is this applied to?",
            "options": ["His birth in Bethlehem", "His exile in Egypt as a child ('Out of Egypt I called My Son')", "His baptism in the Jordan", "His temptation in the wilderness"],
            "correct": "His exile in Egypt as a child ('Out of Egypt I called My Son')",
            "reference": "Hosea 11:1 (Contextual fulfillment in Matthew 2:15)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item of jewelry did Gomer wear that Hosea said was for her 'lovers' rather than for her husband?",
            "options": ["Her veil and robe", "Her earrings and rings", "Her gold chain and bracelet", "Her signet ring"],
            "correct": "Her earrings and rings",
            "reference": "Hosea 2:13",
            "difficulty": "Extreme"
        },
        {
            "question": "Hosea promises that in the day of restoration, God will do what specific action regarding the valleys of Israel, which were often symbols of barrenness?",
            "options": ["They will be flooded with water", "They will become full of flowers", "I will give her vineyards from there, and the Valley of Achor as a door of hope", "They will be flattened into a plain"],
            "correct": "I will give her vineyards from there, and the Valley of Achor as a door of hope",
            "reference": "Hosea 2:15",
            "difficulty": "Extreme"
        },
        {
            "question": "In Hosea 4:11, the prophet links two specific indulgences that take away understanding from the people. What are they?",
            "options": ["Idolatry and harlotry", "Strong drink and wine (or 'wine and new wine')", "Greed and pride", "Lying and stealing"],
            "correct": "Strong drink and wine (or 'wine and new wine')",
            "reference": "Hosea 4:11",
            "difficulty": "Extreme"
        },
        {
            "question": "The specific form of false worship condemned in Hosea 8:4 involves the people making what specific items with their silver and gold?",
            "options": ["Idols (or 'idols for themselves')", "Palaces for their kings", "Offerings for Baal", "New altars"],
            "correct": "Idols (or 'idols for themselves')",
            "reference": "Hosea 8:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific phrase does God use to describe Israel's condition, noting their stubborn rebellion, which is worse than an untrained ox?",
            "options": ["They are a rebellious house", "Israel is a scattered sheep", "Ephraim is a stubbornly resisting heifer", "They are a people without knowledge"],
            "correct": "Ephraim is a stubbornly resisting heifer",
            "reference": "Hosea 4:16",
            "difficulty": "Extreme"
        },
        {
            "question": "The book of Hosea concludes with a call to wisdom, stating that the just shall walk in God's ways, but what specific consequence will befall the transgressors?",
            "options": ["They shall be exiled to Assyria", "They shall fall in them (or 'fall by them')", "They shall be forgotten forever", "They shall be killed by the sword"],
            "correct": "They shall fall in them (or 'fall by them')",
            "reference": "Hosea 14:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the deceitful actions of the leaders of Israel, who were taking advantage of the poor?",
            "options": ["Their hands were full of blood", "They were a band of robbers, like those who lie in wait", "Their heart was full of pride", "They were lying to the king"],
            "correct": "They were a band of robbers, like those who lie in wait",
            "reference": "Hosea 6:9",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Joel",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Joel?",
            "options": ["A prophecy against the King of Babylon", "The prediction of a devastating locust plague and the ultimate promise of the pouring out of the Holy Spirit and the Day of the Lord", "Instructions for the rebuilding of the Temple", "The importance of the Law of Moses"],
            "correct": "The prediction of a devastating locust plague and the ultimate promise of the pouring out of the Holy Spirit and the Day of the Lord",
            "reference": "Overall theme (Joel 1:4; 2:28)",
            "difficulty": "Moderate"
        },
        {
            "question": "What devastating natural phenomenon is used in Chapter 1 to symbolize God's judgment and call the people to repentance?",
            "options": ["A great flood", "A massive earthquake", "A severe drought and a great locust plague", "A consuming fire"],
            "correct": "A severe drought and a great locust plague",
            "reference": "Joel 1:4, 7, 10, 16-18",
            "difficulty": "Moderate"
        },
        {
            "question": "Joel's prophecy centers heavily on the approaching 'Day of the Lord.' What is the emotional tone used to describe this day?",
            "options": ["A day of celebration and feasting", "A day of light and joy", "A day of darkness, gloominess, and distress", "A day of peace and rest"],
            "correct": "A day of darkness, gloominess, and distress",
            "reference": "Joel 2:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "Joel calls for national repentance, urging the priests to blow the trumpet and call for what specific event?",
            "options": ["A day of fasting and solemn assembly", "A holy war against their enemies", "A great feast and celebration", "The election of a new king"],
            "correct": "A day of fasting and solemn assembly",
            "reference": "Joel 2:15-16",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action does Joel advise the people to perform that is superior to the simple outward show of repentance?",
            "options": ["Tear your clothes and put on sackcloth", "Tear your heart and not your garments, and return to the Lord your God", "Offer a burnt offering and a sin offering", "Fast for forty days and forty nights"],
            "correct": "Tear your heart and not your garments, and return to the Lord your God",
            "reference": "Joel 2:13",
            "difficulty": "Moderate"
        },
        {
            "question": "What amazing spiritual blessing does Joel prophesy God will pour out upon *all* flesh—including sons, daughters, old men, and young men—in the future?",
            "options": ["Wealth and prosperity", "The Holy Spirit (or 'My Spirit')", "The wisdom of God", "Long life and health"],
            "correct": "The Holy Spirit (or 'My Spirit')",
            "reference": "Joel 2:28",
            "difficulty": "Moderate"
        },
        {
            "question": "The prophecy of the outpouring of the Spirit is quoted by which apostle on the Day of Pentecost?",
            "options": ["Paul", "James", "Peter", "John"],
            "correct": "Peter",
            "reference": "Acts 2:16-21 (citing Joel 2:28-32)",
            "difficulty": "Moderate"
        },
        {
            "question": "The final section of Joel describes God gathering all nations in what specific valley for final judgment?",
            "options": ["The Valley of Hinnom", "The Valley of Achor", "The Valley of Jehoshaphat (or 'valley of decision')", "The Valley of Rephaim"],
            "correct": "The Valley of Jehoshaphat (or 'valley of decision')",
            "reference": "Joel 3:2, 14",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific blessing does God promise to restore to the people after their repentance and the destruction of the locusts?",
            "options": ["The lost tribes of Israel", "The years that the swarming locust has eaten", "The destroyed Temple", "The King on the throne"],
            "correct": "The years that the swarming locust has eaten",
            "reference": "Joel 2:25",
            "difficulty": "Moderate"
        },
        {
            "question": "What final physical reality will Jerusalem enjoy in the last days, symbolizing God's provision and abundance?",
            "options": ["The return of the Temple treasures", "The mountains shall drip with new wine, and the hills shall flow with milk (or 'mountains shall drip with sweet wine')", "A wall of fire around the city", "The presence of the Shekinah glory"],
            "correct": "The mountains shall drip with new wine, and the hills shall flow with milk (or 'mountains shall drip with sweet wine')",
            "reference": "Joel 3:18",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the collective name given to the four distinct stages of the locust infestation mentioned in the first chapter?",
            "options": ["Crawler, hopper, flyer, and burner", "The cutter, the swarmer, the hopper, and the destroyer (or 'gnawing, swarming, hopping, and stripping')", "First, second, third, and fourth generation", "The plague of Egypt"],
            "correct": "The cutter, the swarmer, the hopper, and the destroyer (or 'gnawing, swarming, hopping, and stripping')",
            "reference": "Joel 1:4",
            "difficulty": "Hard"
        },
        {
            "question": "The prophet states that the primary evidence of the drought and plague is the loss of what two key agricultural provisions?",
            "options": ["Figs and dates", "Grain (food offering) and drink (wine/drink offering) (or 'grain and new wine')", "Oil and honey", "Cattle and sheep"],
            "correct": "Grain (food offering) and drink (wine/drink offering) (or 'grain and new wine')",
            "reference": "Joel 1:9-10",
            "difficulty": "Hard"
        },
        {
            "question": "Joel describes the approaching army (likely the locusts/Babylonians) as moving in what specific, disciplined manner, symbolic of God's control?",
            "options": ["They march like mighty men; they do not break ranks", "They fly like eagles", "They scatter like dust", "They move like a flood of water"],
            "correct": "They march like mighty men; they do not break ranks",
            "reference": "Joel 2:7",
            "difficulty": "Hard"
        },
        {
            "question": "The prophet instructs the priests to weep between the altar and what specific part of the Tabernacle/Temple structure?",
            "options": ["The entrance to the Holy Place (or 'the porch and the altar')", "The wall and the gate", "The bronze sea and the altar", "The Holy of Holies"],
            "correct": "The entrance to the Holy Place (or 'the porch and the altar')",
            "reference": "Joel 2:17",
            "difficulty": "Hard"
        },
        {
            "question": "When the Lord promises to defeat the invading army, what two specific places does He promise to drive them into, symbolizing their final destruction?",
            "options": ["The desert and the sea", "The Temple and the city walls", "The eastern sea (Dead Sea) and the western sea (Mediterranean Sea)", "The Valley of Achor and the Valley of Hinnom"],
            "correct": "The eastern sea (Dead Sea) and the western sea (Mediterranean Sea)",
            "reference": "Joel 2:20",
            "difficulty": "Hard"
        },
        {
            "question": "Joel prophesies that God will perform 'wonders' (signs) in the heavens and on the earth before the Day of the Lord. What two heavenly signs are listed?",
            "options": ["Earthquake and fire", "Blood, fire, and pillars of smoke", "Sun turning to darkness and moon to blood", "Stars falling from the sky and great wind"],
            "correct": "Sun turning to darkness and moon to blood",
            "reference": "Joel 2:30-31",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the fate of the nations who previously scattered God's people and divided His land?",
            "options": ["I will utterly destroy them", "I will judge them for the violence they inflicted upon the children of Judah", "I will gather them for battle", "I will punish them severely"],
            "correct": "I will judge them for the violence they inflicted upon the children of Judah",
            "reference": "Joel 3:2, 19",
            "difficulty": "Hard"
        },
        {
            "question": "What specific agricultural tool does Joel command the nations to beat into weapons, symbolizing God's call to war in the valley of judgment?",
            "options": ["Plowshares into swords, and pruning hooks into spears", "Axes into shields", "Shovels into shields", "Sickles into swords"],
            "correct": "Plowshares into swords, and pruning hooks into spears",
            "reference": "Joel 3:10",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical ailment does the prophet say will afflict the nations in the Valley of Jehoshaphat, preventing their ability to fight?",
            "options": ["Blindness", "Sickness and fever", "Slumber and weakness (their strength will fail)", "Paralysis"],
            "correct": "Slumber and weakness (their strength will fail)",
            "reference": "Joel 3:16",
            "difficulty": "Hard"
        },
        {
            "question": "What final characteristic will define the Holy City (Jerusalem) in the last days, ensuring its purity?",
            "options": ["The Gentiles will stream to it", "The Lord will be the hope of His people", "No strangers shall ever pass through her again", "The Temple will be rebuilt with gold"],
            "correct": "No strangers shall ever pass through her again",
            "reference": "Joel 3:17",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the phrase used to describe the locusts' ability to destroy the land, where 'fire devours before them' and 'a flame burns after them'?",
            "options": ["The land is left like a desert", "The land is like the Garden of Eden before them, and behind them a desolate wilderness", "The land is left completely barren", "The land is black with soot"],
            "correct": "The land is like the Garden of Eden before them, and behind them a desolate wilderness",
            "reference": "Joel 2:3",
            "difficulty": "Extreme"
        },
        {
            "question": "Joel promises that the people will eat in plenty and be satisfied, and praise the name of the Lord, and what specific consequence will they no longer face?",
            "options": ["They will never be exiled again", "My people shall never be put to shame", "They will have abundance forever", "They will defeat all their enemies"],
            "correct": "My people shall never be put to shame",
            "reference": "Joel 2:26-27",
            "difficulty": "Extreme"
        },
        {
            "question": "The prophet states that the sound of the approaching locust army is like the noise of what specific vehicle?",
            "options": ["Chariots (or 'the sound of chariots')", "Mighty horsemen", "A great wind", "An advancing flood"],
            "correct": "Chariots (or 'the sound of chariots')",
            "reference": "Joel 2:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific group of people is mentioned as being gathered in the Temple to participate in the repentance, including those who are newly married?",
            "options": ["The children and the priests", "The old men and the young women", "The elders, the children, and the bridegroom and bride (or 'the bridegroom from his chamber and the bride from her closet')", "The leaders and the scribes"],
            "correct": "The elders, the children, and the bridegroom and bride (or 'the bridegroom from his chamber and the bride from her closet')",
            "reference": "Joel 2:16",
            "difficulty": "Extreme"
        },
        {
            "question": "The final restoration involves a 'fountain' (or 'spring') coming forth from the house of the Lord (Temple) and watering what specific valley?",
            "options": ["The Valley of Hinnom", "The Valley of Jehoshaphat", "The Valley of Shittim", "The Kidron Valley"],
            "correct": "The Valley of Shittim",
            "reference": "Joel 3:18",
            "difficulty": "Extreme"
        },
        {
            "question": "In the call to national assembly, the prophet commands the priests to wear what specific garment of mourning?",
            "options": ["Ripped tunics", "Sackcloth", "Rags and ashes", "Linen garments"],
            "correct": "Sackcloth",
            "reference": "Joel 1:13",
            "difficulty": "Extreme"
        },
        {
            "question": "The prophet refers to the invading force as the 'Northern Army' and what specific descriptor, which implies a massive, unprecedented force?",
            "options": ["God's mighty army", "The Destroyer of nations", "The Great Army (or 'My great army')", "The Army of the Lord"],
            "correct": "The Great Army (or 'My great army')",
            "reference": "Joel 2:11, 20",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific agricultural product will the Lord withhold from the earth as a sign of judgment and severe drought?",
            "options": ["Oil", "Grain and new wine", "Honey", "The rain (early and latter rain)"],
            "correct": "Grain and new wine",
            "reference": "Joel 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "Joel warns the surrounding nations that God will sell their sons and daughters to what distant people?",
            "options": ["The Babylonians", "The Sabeans (or 'the Sabeans')", "The Assyrians", "The Greeks"],
            "correct": "The Sabeans (or 'the Sabeans')",
            "reference": "Joel 3:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific physical action will be a sign of the earth rejoicing after the promised restoration of the land?",
            "options": ["The mountains will tremble", "The river will flow", "The fig tree and the vine yield their strength", "The sun will shine brightly"],
            "correct": "The fig tree and the vine yield their strength",
            "reference": "Joel 2:22",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Amos",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Amos?",
            "options": ["The history of the Babylonian exile", "Prophecies concerning the coming Messiah", "God's fierce judgment against Israel and the nations for their social injustice and hypocrisy", "Instructions for the rebuilding of the Temple"],
            "correct": "God's fierce judgment against Israel and the nations for their social injustice and hypocrisy",
            "reference": "Overall theme (Amos 5:24; 8:4-7)",
            "difficulty": "Moderate"
        },
        {
            "question": "Amos was a prophet from the Southern Kingdom (Judah), but his message was primarily directed toward which kingdom?",
            "options": ["Edom", "Moab", "Israel (the Northern Kingdom)", "Judah"],
            "correct": "Israel (the Northern Kingdom)",
            "reference": "Amos 1:1; 7:10-13",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the humble, non-professional occupation of Amos before God called him to prophesy?",
            "options": ["Fisherman", "Priest", "Shepherd and a dresser of sycamore figs", "Scribe"],
            "correct": "Shepherd and a dresser of sycamore figs",
            "reference": "Amos 1:1; 7:14",
            "difficulty": "Moderate"
        },
        {
            "question": "Amos opens his prophecy with a series of oracles (judgments) against how many neighboring nations before turning his attention to Judah and Israel?",
            "options": ["Three", "Five", "Six", "Eight"],
            "correct": "Six (Damascus, Gaza, Tyre, Edom, Ammon, Moab)",
            "reference": "Amos 1:3-2:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action did the wealthy do that God condemns, which exemplified their oppression of the poor?",
            "options": ["Selling them into slavery", "Selling the righteous for silver and the needy for a pair of sandals", "Stealing their livestock", "Charging excessive interest"],
            "correct": "Selling the righteous for silver and the needy for a pair of sandals",
            "reference": "Amos 2:6; 8:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the specific command Amos gives to the people of Israel regarding their search for God?",
            "options": ["Seek justice and righteousness", "Seek the Lord and live", "Seek a prophet and listen", "Seek the priests for instruction"],
            "correct": "Seek the Lord and live",
            "reference": "Amos 5:4, 6",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Amos say God desires more than burnt offerings and sacrifices?",
            "options": ["Steadfast love and knowledge of God", "Justice and righteousness (or 'Let justice roll down like waters, and righteousness like an ever-flowing stream')", "Humility and obedience", "Worship in the Temple"],
            "correct": "Justice and righteousness (or 'Let justice roll down like waters, and righteousness like an ever-flowing stream')",
            "reference": "Amos 5:24",
            "difficulty": "Moderate"
        },
        {
            "question": "In one vision, God shows Amos what specific building tool, symbolizing His strict standard of justice and judgment against Israel?",
            "options": ["A measuring line", "A builder's staff", "A plumb line", "A great hammer"],
            "correct": "A plumb line",
            "reference": "Amos 7:7-8",
            "difficulty": "Moderate"
        },
        {
            "question": "Amos prophesies that a famine will come upon the land, not of bread or water, but of what?",
            "options": ["The Word of the Lord (or 'hearing the words of the Lord')", "A prophet and a teacher", "Wealth and prosperity", "Peace and security"],
            "correct": "The Word of the Lord (or 'hearing the words of the Lord')",
            "reference": "Amos 8:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What final promise does Amos give, describing the ultimate restoration of the Davidic dynasty?",
            "options": ["The rebuilding of the Temple", "The raising up of the tabernacle of David that is fallen", "The return of the lost tribes", "The defeat of all their enemies"],
            "correct": "The raising up of the tabernacle of David that is fallen",
            "reference": "Amos 9:11",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the phrase God uses to describe the primary characteristic of the wealthy, oppressive women of Samaria?",
            "options": ["Wives of the priests", "Proud and arrogant", "Cows of Bashan", "Silly doves"],
            "correct": "Cows of Bashan",
            "reference": "Amos 4:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did the wealthy plan to eliminate so that they could sell their grain, even on the Sabbath?",
            "options": ["The Law of Moses", "The New Moon festival", "The silver coins", "The famine"],
            "correct": "The New Moon festival",
            "reference": "Amos 8:5",
            "difficulty": "Hard"
        },
        {
            "question": "Amos prophesied that the Day of the Lord would not be light, but what two specific things?",
            "options": ["Darkness and gloom", "Fire and brimstone", "A great wind and storm", "A shadow of death and a deep gloom"],
            "correct": "Darkness and gloom",
            "reference": "Amos 5:18, 20",
            "difficulty": "Hard"
        },
        {
            "question": "What specific consequence did God place on Israel's places of worship (Bethel and Gilgal) that Amos warned them about?",
            "options": ["They would be rebuilt as a greater Temple", "They would be destroyed and Israel would go into captivity beyond Damascus", "They would be purified with fire", "They would become places of sacrifice for the poor"],
            "correct": "They would be destroyed and Israel would go into captivity beyond Damascus",
            "reference": "Amos 5:5; 5:27",
            "difficulty": "Hard"
        },
        {
            "question": "What two heavenly bodies did God state He would darken, symbolizing the severity of the coming judgment?",
            "options": ["The stars and the moon", "The sun and the moon", "The sun and the stars", "The moon and the planets"],
            "correct": "The sun and the moon",
            "reference": "Amos 8:9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action was Amaziah, the priest of Bethel, commanded to tell Amos to stop doing?",
            "options": ["Prophesying at the king's sanctuary (or 'no longer prophesy at Bethel')", "Speaking against the King", "Cursing the nations", "Speaking in strange tongues"],
            "correct": "Prophesying at the king's sanctuary (or 'no longer prophesy at Bethel')",
            "reference": "Amos 7:12-13",
            "difficulty": "Hard"
        },
        {
            "question": "Amos warns the people that God hates and despises what specific religious practices, due to the accompanying injustice?",
            "options": ["Their sacrifices, feasts, and solemn assemblies", "Their prayers and fasting", "Their circumcision and adherence to the Law", "Their reliance on foreign gods"],
            "correct": "Their sacrifices, feasts, and solemn assemblies",
            "reference": "Amos 5:21-22",
            "difficulty": "Hard"
        },
        {
            "question": "In the vision of the basket of summer fruit, what does the vision symbolize regarding the end of Israel?",
            "options": ["The time of great blessing has come", "The end has come for My people Israel", "The time of harvest and plenty", "The scattering of the twelve tribes"],
            "correct": "The end has come for My people Israel",
            "reference": "Amos 8:1-2",
            "difficulty": "Hard"
        },
        {
            "question": "What specific punishment did God bring upon Israel in the wilderness, which was used as a threat against their current complacency?",
            "options": ["He sent fire and plague (or 'cleanness of teeth' and 'want of bread')", "He scattered them with a flood", "He caused their feet to swell", "He sent a great king against them"],
            "correct": "He sent fire and plague (or 'cleanness of teeth' and 'want of bread')",
            "reference": "Amos 4:6, 9-10",
            "difficulty": "Hard"
        },
        {
            "question": "What final physical state does Amos prophesy will happen to the mountains and hills of Israel during the time of God's judgment?",
            "options": ["They will be covered with snow", "They will shake and melt (or 'shake and waste away')", "They will be flattened into a plain", "They will be covered with fire"],
            "correct": "They will shake and melt (or 'shake and waste away')",
            "reference": "Amos 9:5",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Amos prophesies against the city of Damascus, promising to break the gate bars and cut off the king from what specific valley?",
            "options": ["The Valley of Lebanon", "The Valley of Aven (or 'Valley of Aven')", "The Valley of the Euphrates", "The Valley of the Kings"],
            "correct": "The Valley of Aven (or 'Valley of Aven')",
            "reference": "Amos 1:5",
            "difficulty": "Extreme"
        },
        {
            "question": "Amos prophesies that the Lord will make the sun go down at noon and will bring darkness upon the earth on what specific religious day?",
            "options": ["The Day of the Lord", "The Sabbath", "The Feast of Tabernacles", "A day of feasting (or 'a day of feasting')",],
            "correct": "A day of feasting (or 'a day of feasting')",
            "reference": "Amos 8:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Amos uses to describe the primary vice of the wealthy who lived in complacency and luxury in Samaria?",
            "options": ["Lying on beds of ivory and stretching themselves on their couches", "Dressing in fine linen and purple", "Feasting daily on the best foods", "Ignoring the poor at the gate"],
            "correct": "Lying on beds of ivory and stretching themselves on their couches",
            "reference": "Amos 6:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific physical destruction does God send in the first vision, which Amos intercedes against by stating, 'By whom shall Jacob arise, for **_________**?'",
            "options": ["He is mighty", "He is weak (or 'he is small')", "He is righteous", "He is alone"],
            "correct": "He is weak (or 'he is small')",
            "reference": "Amos 7:2",
            "difficulty": "Extreme"
        },
        {
            "question": "The Lord makes an oath by what unique descriptor, stating, 'I will never forget any of their works'?",
            "options": ["By Myself, the King of Israel", "By the holiness of His name", "By the excellence of Jacob", "By the Law I gave Moses"],
            "correct": "By the excellence of Jacob",
            "reference": "Amos 8:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did God tell Amos He would command the serpent to do to the wicked who tried to hide from judgment?",
            "options": ["To bite and kill them (or 'to bite him')", "To lead them out of their hiding place", "To paralyze them with venom", "To leave them alone"],
            "correct": "To bite and kill them (or 'to bite him')",
            "reference": "Amos 9:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action does God promise that the returned exiles will do that signifies the permanence and abundance of their final restoration?",
            "options": ["They shall rebuild the Temple immediately", "They shall rebuild the ruined cities and inhabit them, and they shall plant vineyards and drink wine from them", "They will defeat all their enemies", "They will rule over the nations"],
            "correct": "They shall rebuild the ruined cities and inhabit them, and they shall plant vineyards and drink wine from them",
            "reference": "Amos 9:14",
            "difficulty": "Extreme"
        },
        {
            "question": "In the vision of the fire that God sends as a judgment, what specific part of the land does Amos say the fire devoured before his intercession?",
            "options": ["The high places and the altars", "The great deep and the portion of the inheritance", "The mountain tops", "The houses of the rich"],
            "correct": "The great deep and the portion of the inheritance",
            "reference": "Amos 7:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific form of spiritual punishment does Amos say will be brought upon the songs and feasts of the people of Israel?",
            "options": ["They will be replaced by solemn assemblies", "They will be turned into mourning", "They will be forgotten forever", "They will be replaced by the worship of Baal"],
            "correct": "They will be turned into mourning",
            "reference": "Amos 8:10",
            "difficulty": "Extreme"
        },
        {
            "question": "Amos uses the analogy of what powerful human action to describe the overwhelming and certain nature of the prophetic word?",
            "options": ["The roar of a lion", "The sound of a trumpet", "The sound of thunder", "The voice of a king"],
            "correct": "The roar of a lion",
            "reference": "Amos 3:8",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Obadiah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Obadiah?",
            "options": ["A prophecy against the Northern Kingdom (Israel)", "A message of judgment against the nation of Edom for their pride and malice toward Israel", "The restoration of the Temple", "Instructions for the returned exiles"],
            "correct": "A message of judgment against the nation of Edom for their pride and malice toward Israel",
            "reference": "Overall theme (Obadiah 1:3-4, 10)",
            "difficulty": "Moderate"
        },
        {
            "question": "The prophecy in Obadiah is directed against which specific neighboring nation?",
            "options": ["Moab", "Ammon", "Edom", "Tyre"],
            "correct": "Edom",
            "reference": "Obadiah 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "The nation targeted in this prophecy was known for its great sense of security due to living in what kind of physical environment?",
            "options": ["Fortified valleys", "Rocky cliffs and dwelling in the clefts of the rocks", "Desert plains", "Coastal cities"],
            "correct": "Rocky cliffs and dwelling in the clefts of the rocks",
            "reference": "Obadiah 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action did the Edomites take that most angered God and brought about the judgment?",
            "options": ["Worshipping idols", "Attacking Israel directly", "Standing aloof and rejoicing when Jerusalem was invaded and plundered (sibling rivalry/malice)", "Refusing to pay tribute"],
            "correct": "Standing aloof and rejoicing when Jerusalem was invaded and plundered (sibling rivalry/malice)",
            "reference": "Obadiah 1:10-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What common familial relationship does the Bible use to describe the historical connection between Edom and Israel?",
            "options": ["Cousins", "Brothers (descendants of Esau and Jacob)", "Former master and servant", "Ancient rivals"],
            "correct": "Brothers (descendants of Esau and Jacob)",
            "reference": "Obadiah 1:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the simple, ultimate consequence prophesied for the nation of Edom?",
            "options": ["They will be scattered throughout the nations", "They will be utterly destroyed (or 'utterly cut off')", "They will be forced to serve Israel", "They will pay tribute to the king"],
            "correct": "They will be utterly destroyed (or 'utterly cut off')",
            "reference": "Obadiah 1:9-10, 18",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific consequence does the prophet say will befall the proud, which is God's response to their self-exaltation?",
            "options": ["They will be exiled to the mountains", "I will bring you down from there (or 'I will bring you down')", "They will lose their wealth", "They will be scattered by the wind"],
            "correct": "I will bring you down from there (or 'I will bring you down')",
            "reference": "Obadiah 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What final event does Obadiah prophesy will occur, signaling the ultimate restoration of Israel's dominion?",
            "options": ["The return of the Temple treasures", "The establishment of the Day of the Lord, where the kingdom shall be the Lord's", "The defeat of the Assyrians", "The defeat of the Babylonians"],
            "correct": "The establishment of the Day of the Lord, where the kingdom shall be the Lord's",
            "reference": "Obadiah 1:15, 21",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary reason does the prophet give for why God will judge Edom?",
            "options": ["They worshipped other gods", "For violence against your brother Jacob", "They refused to allow Israel passage", "They were proud and arrogant"],
            "correct": "For violence against your brother Jacob",
            "reference": "Obadiah 1:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the Day of the Lord that is approaching upon all the nations?",
            "options": ["The day of peace and rest", "The day of retribution (or 'as you have done, it shall be done to you')", "The day of the Messiah's coming", "The day of feasting"],
            "correct": "The day of retribution (or 'as you have done, it shall be done to you')",
            "reference": "Obadiah 1:15",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Obadiah says that even Edom's own allies and friends will do what to them?",
            "options": ["Flee from them", "Drive them to the border, deceive them, and overcome them", "Offer them military aid", "Betray them to the Babylonians"],
            "correct": "Drive them to the border, deceive them, and overcome them",
            "reference": "Obadiah 1:7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did the Edomites perform against the Jewish fugitives who were fleeing the destruction of Jerusalem?",
            "options": ["They offered them sanctuary", "They cut off those of his people who escaped and delivered them up to the enemy", "They sold them into slavery", "They offered them aid"],
            "correct": "They cut off those of his people who escaped and delivered them up to the enemy",
            "reference": "Obadiah 1:14",
            "difficulty": "Hard"
        },
        {
            "question": "The Lord declares that He will cut off all the wise men from what specific geographical area within Edom?",
            "options": ["Mount Seir", "The Valley of Shittim", "Teman", "Petra"],
            "correct": "Teman",
            "reference": "Obadiah 1:8-9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item of worth does the prophet say the thieves who come against Edom will take?",
            "options": ["Only what is sufficient for themselves (or 'only what they want')", "The gold and silver", "The slaves and servants", "The entire treasury"],
            "correct": "Only what is sufficient for themselves (or 'only what they want')",
            "reference": "Obadiah 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "What two key characteristics describe the remnants of Israel and the house of Jacob in the final restoration?",
            "options": ["They will be like fire, and the house of Esau (Edom) like stubble", "They will be rulers and judges", "They will be like the former kings", "They will be mighty warriors"],
            "correct": "They will be like fire, and the house of Esau (Edom) like stubble",
            "reference": "Obadiah 1:18",
            "difficulty": "Hard"
        },
        {
            "question": "What specific image does the prophet use to describe the complete gathering and looting of Edom's treasures?",
            "options": ["Like a thief in the night", "Like the gathering of grapes (or 'grape-gatherers')", "Like a flood sweeping the land", "Like a fire consuming the forest"],
            "correct": "Like the gathering of grapes (or 'grape-gatherers')",
            "reference": "Obadiah 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical part of Jerusalem was the Edomites forbidden from gazing upon, symbolizing their malicious joy over the destruction?",
            "options": ["The Temple courtyard", "The distress of his brother (or 'his brother's day of calamity')", "The walls of Zion", "The King's palace"],
            "correct": "The distress of his brother (or 'his brother's day of calamity')",
            "reference": "Obadiah 1:12",
            "difficulty": "Hard"
        },
        {
            "question": "What two final geographical locations are mentioned in the prophecy where the restored Israelites will eventually gain dominion?",
            "options": ["Mount Zion and the mountains of Esau", "The Valley of Jehoshaphat and Mount Carmel", "Shechem and Bethel", "Hebron and Jerusalem"],
            "correct": "Mount Zion and the mountains of Esau",
            "reference": "Obadiah 1:17, 21",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the moral outcome of the nations' actions, which will be the source of God's final retribution?",
            "options": ["They have broken My covenant", "Their pride has destroyed them", "As you have done, it shall be done to you; your recompense shall return upon your own head", "They have ignored My Law"],
            "correct": "As you have done, it shall be done to you; your recompense shall return upon your own head",
            "reference": "Obadiah 1:15",
            "difficulty": "Hard"
        },
        {
            "question": "The rescued people will stand on Mount Zion as what, in the final act of restoration?",
            "options": ["Kings and priests", "Saviors (or 'saviors shall come to Mount Zion to judge the mountains of Esau')", "Mighty warriors", "Prophets and teachers"],
            "correct": "Saviors (or 'saviors shall come to Mount Zion to judge the mountains of Esau')",
            "reference": "Obadiah 1:21",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific phrase does the prophet use to describe the depth of the Edomites' pride, believing they are safe from all threats?",
            "options": ["He who says in his heart, 'Who will bring me down to the ground?'", "They are arrogant and haughty", "They defy the Lord of Hosts", "They trust in their chariots and horses"],
            "correct": "He who says in his heart, 'Who will bring me down to the ground?'",
            "reference": "Obadiah 1:3",
            "difficulty": "Extreme"
        },
        {
            "question": "Obadiah prophesies that even if Edom were to make its nest as high as the eagles or set it among what heavenly body, God would still bring them down?",
            "options": ["The clouds", "The stars", "The moon", "The sun"],
            "correct": "The stars",
            "reference": "Obadiah 1:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific group of people is mentioned as the source of Edom's ultimate treachery and demise?",
            "options": ["The Babylonians", "The men who were at peace with you and the men who ate your bread", "The nations of the world", "The enemies of Israel"],
            "correct": "The men who were at peace with you and the men who ate your bread",
            "reference": "Obadiah 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did the Edomites take against the holy property of Israel, showing their contempt for God's presence?",
            "options": ["They defiled the Temple", "They entered the gate of My people in the day of their calamity and laid hands on their wealth", "They destroyed the city walls", "They mocked the priests"],
            "correct": "They entered the gate of My people in the day of their calamity and laid hands on their wealth",
            "reference": "Obadiah 1:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the immediate result of the Day of the Lord coming upon Edom?",
            "options": ["The time of their sorrow", "The time of their downfall", "The time of their utter desolation, and no survivor shall remain of the house of Esau", "The time of their judgment"],
            "correct": "The time of their utter desolation, and no survivor shall remain of the house of Esau",
            "reference": "Obadiah 1:9, 18",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did the returning 'house of Jacob' and 'house of Joseph' take against the Edomites?",
            "options": ["They became a fire and a flame, consuming them like stubble", "They scattered them to the nations", "They captured their leaders and exiled them", "They forced them to leave their mountain refuge"],
            "correct": "They became a fire and a flame, consuming them like stubble",
            "reference": "Obadiah 1:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What two specific geographical regions are mentioned as the area the descendants of Israel will inherit upon their final return?",
            "options": ["The South (Negev) and the Shephelah (lowland)", "Mount Esau and the Philistine country", "The mountains of Esau and the Valley of Shittim", "The land of the Canaanites and the land of the Amorites"],
            "correct": "The South (Negev) and the Shephelah (lowland)",
            "reference": "Obadiah 1:19",
            "difficulty": "Extreme"
        },
        {
            "question": "The judgment against Edom is directly proportional to their sin, confirming that God will punish them according to what moral principle?",
            "options": ["The Law of Moses", "The Law of Retribution (or 'retaliation')", "The Law of the Covenant", "The Law of the Fathers"],
            "correct": "The Law of Retribution (or 'retaliation')",
            "reference": "Obadiah 1:15",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did the Edomites perform against the Jewish refugees that included them standing at a difficult crossroads?",
            "options": ["They ambushed them at the gate", "They stood on the crossways to cut off those who escaped", "They blocked the water sources", "They reported them to the Babylonians"],
            "correct": "They stood on the crossways to cut off those who escaped",
            "reference": "Obadiah 1:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description used for the final kingdom that will result from the judgment on the mountains of Esau?",
            "options": ["The Lord shall be King over all the earth", "The kingdom shall be the Lord's", "The Lord shall reign in Zion", "The Lord's throne shall be established forever"],
            "correct": "The kingdom shall be the Lord's",
            "reference": "Obadiah 1:21",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Jonah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Jonah?",
            "options": ["A prophecy about the exile of Israel", "The story of God's universal compassion and sovereignty, even toward Israel's enemies, and the prophet's reluctance to obey", "Instructions for fasting and repentance", "The laws of the sea"],
            "correct": "The story of God's universal compassion and sovereignty, even toward Israel's enemies, and the prophet's reluctance to obey",
            "reference": "Overall theme (Jonah 4:2, 11)",
            "difficulty": "Moderate"
        },
        {
            "question": "To what great foreign city, the capital of the Assyrian Empire, was Jonah commanded to prophesy?",
            "options": ["Babylon", "Tyre", "Nineveh", "Susa"],
            "correct": "Nineveh",
            "reference": "Jonah 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific consequence did the Lord send upon the sea because Jonah disobeyed and fled on a ship?",
            "options": ["A blinding fog", "A great wind and a mighty tempest", "A consuming fire", "A plague upon the sailors"],
            "correct": "A great wind and a mighty tempest",
            "reference": "Jonah 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What did Jonah instruct the sailors to do to him to calm the storm?",
            "options": ["Offer a sacrifice for him", "Pray to their gods", "Throw him into the sea", "Turn the ship around"],
            "correct": "Throw him into the sea",
            "reference": "Jonah 1:12",
            "difficulty": "Moderate"
        },
        {
            "question": "What unusual creature did God appoint to swallow Jonah, saving him from drowning?",
            "options": ["A large whale", "A great fish", "A mighty serpent", "A large shark"],
            "correct": "A great fish",
            "reference": "Jonah 1:17",
            "difficulty": "Moderate"
        },
        {
            "question": "How long did Jonah spend inside the great fish?",
            "options": ["One day and one night", "Three days and three nights", "Forty days and forty nights", "One week"],
            "correct": "Three days and three nights",
            "reference": "Jonah 1:17 (and Matthew 12:40)",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the specific message Jonah preached to the people of Nineveh?",
            "options": ["The Lord is kind and merciful", "Repent, for your city will be destroyed in forty days", "The King of Israel will conquer you", "Build a Temple for the Lord"],
            "correct": "Repent, for your city will be destroyed in forty days",
            "reference": "Jonah 3:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the final outcome of the Ninevites' repentance?",
            "options": ["They were exiled to a foreign land", "God relented from the disaster He had planned and did not destroy the city", "They were killed by the Assyrians", "They built a new king's palace"],
            "correct": "God relented from the disaster He had planned and did not destroy the city",
            "reference": "Jonah 3:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What did God provide for Jonah while he sat outside the city, waiting for Nineveh's destruction?",
            "options": ["A mighty shelter", "A fig tree", "A plant (gourd/castor oil plant) to shade him", "A spring of water"],
            "correct": "A plant (gourd/castor oil plant) to shade him",
            "reference": "Jonah 4:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific emotion did Jonah feel when God did not destroy Nineveh?",
            "options": ["Joy and relief", "Anger and displeasure", "Humility", "Fear of the Assyrians"],
            "correct": "Anger and displeasure",
            "reference": "Jonah 4:1",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What was the name of the place Jonah intended to flee to, traveling in the opposite direction from Nineveh?",
            "options": ["Joppa", "Tarshish", "Tyre", "Sidon"],
            "correct": "Tarshish",
            "reference": "Jonah 1:3",
            "difficulty": "Hard"
        },
        {
            "question": "When the sailors realized Jonah was the cause of the storm, what specific action did they take before throwing him overboard?",
            "options": ["They prayed to their own gods for help", "They desperately rowed hard to return to land", "They offered a final sacrifice", "They asked him for advice"],
            "correct": "They desperately rowed hard to return to land",
            "reference": "Jonah 1:13",
            "difficulty": "Hard"
        },
        {
            "question": "What specific ritual did the King of Nineveh declare when calling for national repentance?",
            "options": ["Offer sacrifices to the Lord", "Let neither man nor beast, herd nor flock, taste anything; do not let them eat or drink water, and let them be covered with sackcloth", "Tear your clothes and sit in ashes", "Shave their heads and put on mourning clothes"],
            "correct": "Let neither man nor beast, herd nor flock, taste anything; do not let them eat or drink water, and let them be covered with sackcloth",
            "reference": "Jonah 3:7-8",
            "difficulty": "Hard"
        },
        {
            "question": "In his prayer from inside the fish, Jonah vowed to pay his vows and acknowledged that salvation belongs to whom?",
            "options": ["The prophet who preaches it", "The Lord", "The King of Israel", "The people who repent"],
            "correct": "The Lord",
            "reference": "Jonah 2:9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical ailment did God send upon the plant that had provided shade for Jonah?",
            "options": ["A great wind broke it", "God appointed a worm to attack it", "God sent a fire to burn it", "A massive flood washed it away"],
            "correct": "God appointed a worm to attack it",
            "reference": "Jonah 4:7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific object did the ship's captain find Jonah doing during the height of the storm, showing his extreme indifference?",
            "options": ["Praying to the Lord", "Sleeping soundly in the lowest part of the ship", "Weeping bitterly", "Trying to escape"],
            "correct": "Sleeping soundly in the lowest part of the ship",
            "reference": "Jonah 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Jonah uses to describe God's character, which is the exact reason Jonah originally fled to Tarshish?",
            "options": ["A mighty warrior and just judge", "A gracious God and merciful, slow to anger and abundant in lovingkindness, One who relents from doing harm", "The God of Israel alone", "The Judge of the nations"],
            "correct": "A gracious God and merciful, slow to anger and abundant in lovingkindness, One who relents from doing harm",
            "reference": "Jonah 4:2",
            "difficulty": "Hard"
        },
        {
            "question": "What question does God pose to Jonah at the end of the book regarding the plant that provided him shade?",
            "options": ["Should you not be thankful for the plant?", "Is it right for you to be angry about the plant?", "Why did you not water the plant?", "Did you not love the plant?"],
            "correct": "Is it right for you to be angry about the plant?",
            "reference": "Jonah 4:9",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical action did the King of Nineveh take in the midst of his repentance and call for national fasting?",
            "options": ["He tore his robe and put on a new one", "He arose from his throne, laid aside his robe, covered himself with sackcloth, and sat in ashes", "He offered a sacrifice to the Lord", "He rebuilt the city walls"],
            "correct": "He arose from his throne, laid aside his robe, covered himself with sackcloth, and sat in ashes",
            "reference": "Jonah 3:6",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did the pagan sailors perform after the sea became calm upon throwing Jonah overboard?",
            "options": ["They sailed to Tarshish", "They offered a sacrifice to the Lord and took vows", "They began to praise their own gods", "They immediately turned the ship around"],
            "correct": "They offered a sacrifice to the Lord and took vows",
            "reference": "Jonah 1:16",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Jonah mentions that the waters surrounded him, reaching to what specific bodily part, symbolizing his near-death experience?",
            "options": ["My hands and feet", "My throat (or 'the neck')", "My knees", "My soul"],
            "correct": "My throat (or 'the neck')",
            "reference": "Jonah 2:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific Old Testament ritual/location does Jonah refer to, to express his desire to return to God in his prayer from the fish?",
            "options": ["I will look again toward Your holy Temple", "I will return to Jerusalem", "I will offer a sacrifice at the altar", "I will obey the Law of Moses"],
            "correct": "I will look again toward Your holy Temple",
            "reference": "Jonah 2:4",
            "difficulty": "Extreme"
        },
        {
            "question": "The city of Nineveh was described as being how many days' journey in size?",
            "options": ["One day's journey", "Three days' journey", "Seven days' journey", "Forty days' journey"],
            "correct": "Three days' journey",
            "reference": "Jonah 3:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific number does God use to refer to the population of Nineveh whom He shows compassion for, stating their inability to discern right from wrong?",
            "options": ["More than 100,000 people", "More than 120,000 people", "More than 70,000 people", "More than 40,000 people"],
            "correct": "More than 120,000 people",
            "reference": "Jonah 4:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific phrase does the king of Nineveh use to describe the possibility of God sparing them, showing his faith in repentance?",
            "options": ["The Lord is merciful", "Who can tell if God will turn and relent", "God will forgive us our sins", "God is righteous in His judgments"],
            "correct": "Who can tell if God will turn and relent",
            "reference": "Jonah 3:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific Old Testament prophet is Jonah mentioned as being the son of?",
            "options": ["Amos", "Hosea", "Amittai", "Joel"],
            "correct": "Amittai",
            "reference": "Jonah 1:1; 2 Kings 14:25",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did Jonah take upon exiting the great fish, fulfilling the final act of his deliverance?",
            "options": ["He repented of his sin", "He was vomited onto dry land", "He walked toward Nineveh", "He offered a sacrifice of thanksgiving"],
            "correct": "He was vomited onto dry land",
            "reference": "Jonah 2:10",
            "difficulty": "Extreme"
        },
        {
            "question": "In his anger, Jonah tells God he would rather experience what than continue living in the face of God's mercy on Nineveh?",
            "options": ["Exile from Israel", "Go back to the fish", "Death (or 'it is better for me to die than to live')", "Be struck with a plague"],
            "correct": "Death (or 'it is better for me to die than to live')",
            "reference": "Jonah 4:3, 8",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase God uses to compare His pity for the city of Nineveh with Jonah's pity for the plant?",
            "options": ["You pity the plant which you did not labor to make grow, but I should not pity that great city", "You love the plant more than the people", "The people are more important than the plant", "You are unrighteous in your anger"],
            "correct": "You pity the plant which you did not labor to make grow, but I should not pity that great city",
            "reference": "Jonah 4:10-11",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item did God appoint in the final lesson, besides the great fish, the plant, and the worm, that brought extreme discomfort to Jonah?",
            "options": ["A mighty wind", "A scorching east wind", "A great flood", "A strong sun"],
            "correct": "A scorching east wind",
            "reference": "Jonah 4:8",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Micah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Micah?",
            "options": ["A prophecy against the Assyrian Empire", "A message of judgment against Judah and Israel for social injustice and false security, and the ultimate promise of the Messiah and Jerusalem's restoration", "Instructions for the rebuilding of the Temple", "Laments over the destruction of the Northern Kingdom"],
            "correct": "A message of judgment against Judah and Israel for social injustice and false security, and the ultimate promise of the Messiah and Jerusalem's restoration",
            "reference": "Overall theme (Micah 3:1-4; 5:2; 7:18)",
            "difficulty": "Moderate"
        },
        {
            "question": "Micah prophesied during the reigns of which three kings of Judah?",
            "options": ["Uzziah, Jotham, and Ahaz", "Hezekiah, Manasseh, and Amon", "Jotham, Ahaz, and Hezekiah", "Josiah, Jehoiakim, and Zedekiah"],
            "correct": "Jotham, Ahaz, and Hezekiah",
            "reference": "Micah 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Micah's prophecies of judgment were primarily directed against what two capital cities of the divided kingdoms?",
            "options": ["Jerusalem and Babylon", "Samaria and Jerusalem", "Tyre and Sidon", "Bethel and Gilgal"],
            "correct": "Samaria and Jerusalem",
            "reference": "Micah 1:1, 5",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action did Micah condemn the wealthy rulers and princes of Israel for, symbolizing their oppression?",
            "options": ["Taking foreign wives", "Devouring the people (or 'eating the flesh of my people')", "Worshipping the golden calves", "Failing to pay the tithe"],
            "correct": "Devouring the people (or 'eating the flesh of my people')",
            "reference": "Micah 3:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific town did Micah prophesy would be the birthplace of the promised Ruler of Israel?",
            "options": ["Jerusalem", "Bethlehem Ephrathah", "Nazareth", "Hebron"],
            "correct": "Bethlehem Ephrathah",
            "reference": "Micah 5:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the primary characteristic of the coming Messianic kingdom, where war is abolished?",
            "options": ["They shall dwell securely", "They shall beat their swords into plowshares, and their spears into pruning hooks", "They shall rebuild the Temple", "They shall reign over the nations"],
            "correct": "They shall beat their swords into plowshares, and their spears into pruning hooks",
            "reference": "Micah 4:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What three things does Micah summarize that the Lord requires of man?",
            "options": ["Justice, love, and righteousness", "To do justly, to love mercy (or 'steadfast love'), and to walk humbly with your God", "Sacrifice, offerings, and fasting", "Truth, wisdom, and obedience"],
            "correct": "To do justly, to love mercy (or 'steadfast love'), and to walk humbly with your God",
            "reference": "Micah 6:8",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific sin does God warn the people against that they inherited from the house of Omri?",
            "options": ["Idolatry (worship of Baal)", "Failing to keep the Sabbath", "The statutes of Omri and all the works of the house of Ahab (wicked laws and practices)", "The oppression of the poor"],
            "correct": "The statutes of Omri and all the works of the house of Ahab (wicked laws and practices)",
            "reference": "Micah 6:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action does God promise to do with the sins of His people in the final restoration?",
            "options": ["He will forget them", "He will cast all their sins into the depths of the sea", "He will judge them lightly", "He will punish the nations for them"],
            "correct": "He will cast all their sins into the depths of the sea",
            "reference": "Micah 7:19",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific term does God use to refer to the nations that He will gather and use to defeat His enemies in the final judgment?",
            "options": ["The Army of the Lord", "The nations of the world", "The strength of Jacob", "The army of Edom"],
            "correct": "The nations of the world",
            "reference": "Micah 4:11-13",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific payment does God challenge the people to make, asking if He would be pleased with thousands of rams or ten thousands of what liquid?",
            "options": ["Water", "Wine", "Oil (or 'ten thousands of rivers of oil')", "Milk"],
            "correct": "Oil (or 'ten thousands of rivers of oil')",
            "reference": "Micah 6:7",
            "difficulty": "Hard"
        },
        {
            "question": "Micah prophesies that the leaders who build Zion with blood and Jerusalem with iniquity will lead to what specific consequence for the city?",
            "options": ["It will be destroyed by fire", "Zion shall be plowed like a field, Jerusalem shall become heaps of ruins, and the mountain of the temple shall be like the high places of the forest", "It will be exiled to Babylon", "It will be struck by a plague"],
            "correct": "Zion shall be plowed like a field, Jerusalem shall become heaps of ruins, and the mountain of the temple shall be like the high places of the forest",
            "reference": "Micah 3:12",
            "difficulty": "Hard"
        },
        {
            "question": "What specific object does Micah use to compare the corrupt judges and priests who take bribes and only prophesy for money?",
            "options": ["Dogs who cannot bark", "A roaring lion seeking prey", "The judges dispense judgment for a bribe, and her priests teach for pay, and her prophets divine for money", "A broken cistern"],
            "correct": "The judges dispense judgment for a bribe, and her priests teach for pay, and her prophets divine for money",
            "reference": "Micah 3:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the future rule of the Ruler who comes from Bethlehem, which is 'from of old'?",
            "options": ["His times will be eternal", "His going forth is from long ago, from the days of eternity", "His wisdom will be great", "His reign will be peaceful and long"],
            "correct": "His going forth is from long ago, from the days of eternity",
            "reference": "Micah 5:2",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did God tell the people He would cause to fail in the Temple, symbolizing the end of their covenant worship?",
            "options": ["The Temple altar", "The grain and new wine", "The Law of Moses", "The measures (ephah) of their grain"],
            "correct": "The measures (ephah) of their grain",
            "reference": "Micah 6:10",
            "difficulty": "Hard"
        },
        {
            "question": "What final prophetic blessing is promised to the city of Jerusalem, which symbolizes its elevated importance in the last days?",
            "options": ["The mountain of the house of the Lord shall be established as the highest of the mountains, and people shall flow to it", "It will be rebuilt with gold and silver", "It will be protected by a wall of fire", "It will be the dwelling place of the Messiah"],
            "correct": "The mountain of the house of the Lord shall be established as the highest of the mountains, and people shall flow to it",
            "reference": "Micah 4:1",
            "difficulty": "Hard"
        },
        {
            "question": "What two historical figures are mentioned by God as witnesses against the people, representing the land's desolation?",
            "options": ["Cain and Abel", "Abraham and Isaac", "The mountains and the strong foundations of the earth", "Moses and Aaron"],
            "correct": "The mountains and the strong foundations of the earth",
            "reference": "Micah 6:2",
            "difficulty": "Hard"
        },
        {
            "question": "Micah warns that the most dangerous betrayal will come from what close familial source?",
            "options": ["The king and his officials", "The closest friend and the wife of your bosom", "The priests and the prophets", "The enemy outside the gate"],
            "correct": "The closest friend and the wife of your bosom",
            "reference": "Micah 7:5",
            "difficulty": "Hard"
        },
        {
            "question": "What specific phrase does God use to describe His compassion for His people in the final chapter, promising His enduring forgiveness?",
            "options": ["I will not abandon My covenant", "He does not retain His anger forever, because He delights in mercy (or 'He delights in steadfast love')", "My love is everlasting", "My patience is great"],
            "correct": "He does not retain His anger forever, because He delights in mercy (or 'He delights in steadfast love')",
            "reference": "Micah 7:18",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament event does Micah recall where God performed wonders on behalf of His people, promising to repeat it in the future restoration?",
            "options": ["The destruction of Sodom and Gomorrah", "The days of your coming out of the land of Egypt", "The parting of the Jordan River", "The manna in the wilderness"],
            "correct": "The days of your coming out of the land of Egypt",
            "reference": "Micah 7:15",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific physical action did Micah advise the inhabitants of Jerusalem to perform, symbolizing the stripping away of their wealth and honor?",
            "options": ["To mourn and weep publicly", "To put on sackcloth and cut off their hair (or 'make yourself bald')", "To offer a sacrifice of repentance", "To flee the city immediately"],
            "correct": "To put on sackcloth and cut off their hair (or 'make yourself bald')",
            "reference": "Micah 1:16",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the ultimate return and gathering of the remnant of Israel, symbolizing their former glory?",
            "options": ["I will assemble the one who halts (or 'the limping one') and gather the scattered ones", "I will return to the days of David", "I will rebuild the Temple of Solomon", "I will gather you from the nations"],
            "correct": "I will assemble the one who halts (or 'the limping one') and gather the scattered ones",
            "reference": "Micah 4:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description used for the prophet who is condemned because he 'preaches wine and strong drink'?",
            "options": ["He is a false prophet and a liar", "If a man should walk in a false spirit and utter a lie, they would make him their preacher", "He is a drunkard and a fool", "He is a greedy and self-serving man"],
            "correct": "If a man should walk in a false spirit and utter a lie, they would make him their preacher",
            "reference": "Micah 2:11",
            "difficulty": "Extreme"
        },
        {
            "question": "Micah argues that the primary consequence of their sin is that they will seek to make what specific spiritual request of God, only for Him to refuse to answer?",
            "options": ["They shall cry to the Lord, but He will not answer them", "They shall pray to the prophets for mercy", "They shall sacrifice at the altar, but it will be rejected", "They shall seek the Law, but not find it"],
            "correct": "They shall cry to the Lord, but He will not answer them",
            "reference": "Micah 3:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What two types of financial weights were condemned by God for being deceitful and corrupting the marketplace?",
            "options": ["False silver and false gold", "Wicked scales and deceitful weights (or 'dishonest scales and bags of false weights')", "Heavy and light scales", "The measures of the merchant"],
            "correct": "Wicked scales and deceitful weights (or 'dishonest scales and bags of false weights')",
            "reference": "Micah 6:10-11",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item is the future remnant of Jacob (Israel) compared to among the nations, symbolizing their divine power and fearlessness?",
            "options": ["A gentle dove and a peaceful flock", "A lion among the beasts of the forest, and a young lion among the flocks of sheep", "A light set on a hill", "A mighty fortress in the desert"],
            "correct": "A lion among the beasts of the forest, and a young lion among the flocks of sheep",
            "reference": "Micah 5:8",
            "difficulty": "Extreme"
        },
        {
            "question": "The prophet states that the leaders of the people hate the good and love the evil, and they violently twist what specific thing?",
            "options": ["The Law of God", "Justice (or 'twist justice')", "The words of the prophets", "The truth"],
            "correct": "Justice (or 'twist justice')",
            "reference": "Micah 3:2, 9",
            "difficulty": "Extreme"
        },
        {
            "question": "What two specific physical boundaries does God call to witness His controversy with the people of Israel?",
            "options": ["The sun and the moon", "The mountains and the everlasting hills", "The nations and the kingdoms", "The sea and the dry land"],
            "correct": "The mountains and the everlasting hills",
            "reference": "Micah 6:1-2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific sin does God ask the people if He had afflicted them with, reminding them of His faithfulness during the Exodus?",
            "options": ["Had He been too harsh in His judgments?", "Had He wearied them with the service of the altar?", "Had He failed to provide the manna?", "Had He forgotten His covenant?"],
            "correct": "Had He wearied them with the service of the altar?",
            "reference": "Micah 6:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action will the nations perform in the final restoration that confirms the power of God's people?",
            "options": ["They shall rebuild the Temple", "They shall come trembling from their strongholds to the Lord our God, and shall be afraid because of You", "They shall bow down to the King of Israel", "They shall offer a sacrifice of praise"],
            "correct": "They shall come trembling from their strongholds to the Lord our God, and shall be afraid because of You",
            "reference": "Micah 7:16-17",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Nahum",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary city that Nahum prophesies against?",
            "options": ["Jerusalem", "Babylon", "Nineveh", "Tyre"],
            "correct": "Nineveh",
            "reference": "Nahum 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What empire was Nineveh the capital of?",
            "options": ["Babylonian", "Assyrian", "Persian", "Egyptian"],
            "correct": "Assyrian",
            "reference": "Context of Nahum and historical knowledge",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the meaning of Nahum's name?",
            "options": ["God is my king", "Comfort or Consolation", "My light", "God remembers"],
            "correct": "Comfort or Consolation",
            "reference": "Nahum 1:7",
            "difficulty": "Moderate"
        },
        {
            "question": "Nahum describes God as 'slow to anger, but great in power.' What attribute of God is particularly highlighted in the first chapter?",
            "options": ["His love", "His faithfulness", "His fierce wrath and jealous vengeance against His foes, combined with His goodness to those who trust Him", "His wisdom"],
            "correct": "His fierce wrath and jealous vengeance against His foes, combined with His goodness to those who trust Him",
            "reference": "Nahum 1:2-3, 7-8",
            "difficulty": "Moderate"
        },
        {
            "question": "What will happen to the 'wicked plans' that Nineveh devises against the Lord?",
            "options": ["They will succeed", "They will be completely destroyed", "They will be ignored", "They will be fulfilled"],
            "correct": "They will be completely destroyed",
            "reference": "Nahum 1:9, 11",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the fate of the 'idol-worshippers' and 'carved images' in Nineveh?",
            "options": ["They will be protected", "They will be cut off and consumed by fire", "They will be revered", "They will be preserved"],
            "correct": "They will be cut off and consumed by fire",
            "reference": "Nahum 1:14",
            "difficulty": "Moderate"
        },
        {
            "question": "What joyful news is proclaimed to Judah in Nahum 1:15?",
            "options": ["Peace will reign, and their festivals will be observed", "War is coming", "The Lord has forgotten them", "Their enemies will be victorious"],
            "correct": "Peace will reign, and their festivals will be observed",
            "reference": "Nahum 1:15",
            "difficulty": "Moderate"
        },
        {
            "question": "What is compared to the 'chariots' of the approaching army, attacking Nineveh?",
            "options": ["Horses with riders", "Screaming and rattling, like torches and lightning flashes", "Birds of prey", "Locusts"],
            "correct": "Screaming and rattling, like torches and lightning flashes",
            "reference": "Nahum 2:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific image is used to describe the utter destruction and emptiness of Nineveh?",
            "options": ["A roaring lion", "A barren wasteland", "A ruined city, full of blood, deceit, and plunder", "A peaceful village"],
            "correct": "A ruined city, full of blood, deceit, and plunder",
            "reference": "Nahum 3:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What will happen to Nineveh's 'many merchants' and 'countless traders'?",
            "options": ["They will prosper", "They will be swept away like locusts, and their wealth plundered", "They will rebuild the city", "They will flee and return later"],
            "correct": "They will be swept away like locusts, and their wealth plundered",
            "reference": "Nahum 3:16-17",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Nahum mentions the fall of which prominent Egyptian city as a warning and example of what will happen to Nineveh?",
            "options": ["Memphis", "Thebes (No-amon)", "Alexandria", "On (Heliopolis)"],
            "correct": "Thebes (No-amon)",
            "reference": "Nahum 3:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific vulnerability of Nineveh (despite its fortifications) is highlighted in chapter 2?",
            "options": ["Its walls were too low", "Its water supply could be breached (the river gates)", "Its army was weak", "Its king was corrupt"],
            "correct": "Its water supply could be breached (the river gates)",
            "reference": "Nahum 2:6",
            "difficulty": "Hard"
        },
        {
            "question": "Nahum says God has 'magnificent judgment' for His adversaries. What is this judgment like?",
            "options": ["A slow fire", "An overflowing flood", "A strong wind", "A gentle rain"],
            "correct": "An overflowing flood",
            "reference": "Nahum 1:8",
            "difficulty": "Hard"
        },
        {
            "question": "What two types of animals, symbolizing Nineveh's fierce military power, are depicted as being utterly destroyed?",
            "options": ["Lions and cubs", "Bears and wolves", "Eagles and hawks", "Horses and chariots"],
            "correct": "Lions and cubs",
            "reference": "Nahum 2:11-13",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the fleeing women of Nineveh?",
            "options": ["Running to safety", "Beaten upon their breasts, lamenting like doves", "Hiding in terror", "Gathering their children"],
            "correct": "Beaten upon their breasts, lamenting like doves",
            "reference": "Nahum 2:7",
            "difficulty": "Hard"
        },
        {
            "question": "Nahum describes Nineveh as a 'harlot' and 'mistress of sorceries.' What does this imagery signify?",
            "options": ["Her physical beauty", "Her spiritual adultery, deceptive alliances, and enslavement of nations through sorcery and idolatry", "Her wealth", "Her peaceful nature"],
            "correct": "Her spiritual adultery, deceptive alliances, and enslavement of nations through sorcery and idolatry",
            "reference": "Nahum 3:4",
            "difficulty": "Hard"
        },
        {
            "question": "What humiliating act will God perform upon Nineveh's nakedness?",
            "options": ["He will cover it", "He will expose it to the nations", "He will ignore it", "He will beautify it"],
            "correct": "He will expose it to the nations",
            "reference": "Nahum 3:5",
            "difficulty": "Hard"
        },
        {
            "question": "What is the condition of Nineveh's shepherds and nobles after the Lord's judgment?",
            "options": ["They are leading their flocks", "They are asleep in death, and their people are scattered with no one to gather them", "They are feasting", "They are rebuilding"],
            "correct": "They are asleep in death, and their people are scattered with no one to gather them",
            "reference": "Nahum 3:18",
            "difficulty": "Hard"
        },
        {
            "question": "What is the final question posed in Nahum 3:19, emphasizing Nineveh's irreversible doom?",
            "options": ["Will you ever be rebuilt?", "Is there no balm for your wound? Your injury is incurable. All who hear the news about you clap their hands over you. For on whom has not your evil passed continually?", "Who will mourn for you?", "Where are your strong men?"],
            "correct": "Is there no balm for your wound? Your injury is incurable. All who hear the news about you clap their hands over you. For on whom has not your evil passed continually?",
            "reference": "Nahum 3:19",
            "difficulty": "Hard"
        },
        {
            "question": "What happens to the 'gates of the river' as Nineveh's destruction approaches?",
            "options": ["They are strengthened", "They are opened, and the palace dissolves", "They are closed and locked", "They are used for escape"],
            "correct": "They are opened, and the palace dissolves",
            "reference": "Nahum 2:6",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "In the acrostic-like poem of Nahum 1, what specific attribute of God's character is emphasized at the beginning?",
            "options": ["The Lord is good", "The Lord is a jealous and avenging God; the Lord is avenging and wrathful", "The Lord is merciful", "The Lord is strong"],
            "correct": "The Lord is a jealous and avenging God; the Lord is avenging and wrathful",
            "reference": "Nahum 1:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific natural phenomena are used to describe the terror of God's presence in Nahum 1:5-6?",
            "options": ["Earthquakes, mountains quake, hills melt, earth heaves, rocks are split, no one can stand before His indignation", "Floods and storms", "Fire and hail", "Darkness and wind"],
            "correct": "Earthquakes, mountains quake, hills melt, earth heaves, rocks are split, no one can stand before His indignation",
            "reference": "Nahum 1:5-6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the metaphorical action God will take concerning the 'rod' of Assyria and the 'yoke' upon Judah?",
            "options": ["He will strengthen it", "He will break the rod and break the yoke from off your neck", "He will prolong it", "He will transfer it"],
            "correct": "He will break the rod and break the yoke from off your neck",
            "reference": "Nahum 1:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific color is associated with the shields and uniforms of the attacking soldiers against Nineveh?",
            "options": ["Red", "Blue", "Green", "White"],
            "correct": "Red (The shields of his mighty men are red; the valiant men are clothed in scarlet)",
            "reference": "Nahum 2:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific image is used to describe the plundering of Nineveh's vast wealth?",
            "options": ["Like a flowing river", "An immense quantity of plunder, silver and gold, without limit", "Like a burning fire", "Like a scattered flock"],
            "correct": "An immense quantity of plunder, silver and gold, without limit",
            "reference": "Nahum 2:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the complete disappearance of Nineveh's 'dwelling place' and its 'lair' after judgment?",
            "options": ["It will be forgotten", "Where is the lair of the lions?", "It will be rebuilt", "It will be a monument"],
            "correct": "Where is the lair of the lions?",
            "reference": "Nahum 2:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific image is used to describe the multitude of Nineveh's inhabitants fleeing?",
            "options": ["Like sheep without a shepherd", "Like a swarm of locusts, flying away", "Like a flock of birds", "Like dust in the wind"],
            "correct": "Like a swarm of locusts, flying away",
            "reference": "Nahum 3:17",
            "difficulty": "Extreme"
        },
        {
            "question": "What humiliating act will be done to Nineveh's 'princes' and 'nobles'?",
            "options": ["They will be exalted", "They will be put in chains and led away", "They will be honored", "They will be given new roles"],
            "correct": "They will be put in chains and led away",
            "reference": "Nahum 3:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific prophecy is given about the duration of the 'Assyrian king' (or 'worthless person')?",
            "options": ["He will reign forever", "He will have no offspring to carry on his name; I will cut off from the house of his gods carved images and molten images", "He will be forgotten quickly", "He will rise again"],
            "correct": "He will have no offspring to carry on his name; I will cut off from the house of his gods carved images and molten images",
            "reference": "Nahum 1:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final pronouncement of Nahum 1:7 about the Lord's character to those who take refuge in Him?",
            "options": ["The Lord is slow to anger", "The Lord is good, a stronghold in the day of trouble; He knows those who take refuge in Him", "The Lord is merciful", "The Lord is powerful"],
            "correct": "The Lord is good, a stronghold in the day of trouble; He knows those who take refuge in Him",
            "reference": "Nahum 1:7",
            "difficulty": "Extreme"
        }
    ]
}

  {
    "book": "Habakkuk",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Book of Habakkuk is primarily a dialogue between the prophet and whom?",
            "options": ["The King of Judah", "The people of Jerusalem", "God (the Lord)", "The Chaldeans"],
            "correct": "God (the Lord)",
            "reference": "Habakkuk 1:2-2:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary nation or people group God tells Habakkuk He is raising up to punish Judah?",
            "options": ["The Assyrians", "The Philistines", "The Babylonians (Chaldeans)", "The Egyptians"],
            "correct": "The Babylonians (Chaldeans)",
            "reference": "Habakkuk 1:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the core problem that Habakkuk first complains to God about?",
            "options": ["Famine in the land", "The invasion of a foreign army", "The internal injustice and violence within Judah", "The slow progress of the temple rebuilding"],
            "correct": "The internal injustice and violence within Judah",
            "reference": "Habakkuk 1:2-4",
            "difficulty": "Moderate"
        },
        {
            "question": "In the famous passage, 'The righteous shall live by his _________.'",
            "options": ["Works", "Law", "Faith", "Strength"],
            "correct": "Faith",
            "reference": "Habakkuk 2:4",
            "difficulty": "Moderate"
        },
        {
            "question": "The second half of Chapter 2 is a series of five woes (judgments). Who are these woes primarily directed against?",
            "options": ["The Assyrians", "The Chaldeans (Babylonians)", "The people of Judah", "False prophets"],
            "correct": "The Chaldeans (Babylonians)",
            "reference": "Habakkuk 2:6-20",
            "difficulty": "Moderate"
        },
        {
            "question": "What image is used to describe the greedy person who gathers wealth unjustly?",
            "options": ["A roaring lion", "An expanding grave (Sheol)", "A dry fountain", "A crooked vine"],
            "correct": "An expanding grave (Sheol)",
            "reference": "Habakkuk 2:5",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the final state of the earth described in Habakkuk 2:20?",
            "options": ["The earth will be destroyed by fire", "The earth will be filled with violence", "The Lord is in His holy temple; let all the earth keep silence before Him", "The earth will be ruled by a foreign king"],
            "correct": "The Lord is in His holy temple; let all the earth keep silence before Him",
            "reference": "Habakkuk 2:20",
            "difficulty": "Moderate"
        },
        {
            "question": "Chapter 3 is a prayer/poem by Habakkuk. What form is it explicitly noted to be set to?",
            "options": ["A Psalm of David", "A song of Ascents", "For the director of music. With stringed instruments.", "A prayer of Habakkuk the prophet. According to Shigionoth."],
            "correct": "A prayer of Habakkuk the prophet. According to Shigionoth.",
            "reference": "Habakkuk 3:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Habakkuk asks God to 'In wrath, remember _________.'",
            "options": ["My prayer", "The covenant", "Mercy", "Our enemies"],
            "correct": "Mercy",
            "reference": "Habakkuk 3:2",
            "difficulty": "Moderate"
        },
        {
            "question": "Despite the complete failure of crops and livestock, what does Habakkuk state his final action will be?",
            "options": ["He will flee the country", "He will mourn and weep", "He will be angry at God", "He will rejoice in the Lord and be joyful in the God of his salvation"],
            "correct": "He will rejoice in the Lord and be joyful in the God of his salvation",
            "reference": "Habakkuk 3:17-18",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What specific characteristic of the Chaldeans does God describe as 'a swift and terrifying people, who march throughout the earth to seize dwelling places not their own'?",
            "options": ["Their deceit", "Their speed and ferocity", "Their wealth", "Their sheer numbers"],
            "correct": "Their speed and ferocity",
            "reference": "Habakkuk 1:6-8",
            "difficulty": "Hard"
        },
        {
            "question": "Habakkuk describes the Chaldeans as worshiping what as their god?",
            "options": ["The sun", "Their own strength and might", "A carved image of their king", "The river Euphrates"],
            "correct": "Their own strength and might",
            "reference": "Habakkuk 1:11, 16",
            "difficulty": "Hard"
        },
        {
            "question": "The second woe is against a nation that has shed blood and built a city 'with _________.'",
            "options": ["Stones from Zion", "Stolen goods", "Injustice", "The blood of men"],
            "correct": "The blood of men",
            "reference": "Habakkuk 2:12",
            "difficulty": "Hard"
        },
        {
            "question": "When God commands Habakkuk to 'Write down the revelation and make it plain on tablets,' what is the purpose given for this instruction?",
            "options": ["So that it may be a legal contract", "So that a herald (runner) may run with it", "So that future generations can read it", "So that the priests can memorize it"],
            "correct": "So that a herald (runner) may run with it",
            "reference": "Habakkuk 2:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the theophany (vision of God's appearance) in Chapter 3, God's splendor is compared to what natural light source?",
            "options": ["The noon sun", "The dawning of the morning", "The brightness of the heavens", "The sunlight"],
            "correct": "The sunlight (or 'the brightness of the sunlight')",
            "reference": "Habakkuk 3:4",
            "difficulty": "Hard"
        },
        {
            "question": "What celestial event is described as standing still during God's mighty acts in Chapter 3?",
            "options": ["The clouds", "The rain", "The moon and the sun", "The stars"],
            "correct": "The moon and the sun",
            "reference": "Habakkuk 3:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the metaphorical image used to describe the Lord’s power in delivering His people in the final verse?",
            "options": ["A mighty army", "A shepherd and his flock", "He makes my feet like the feet of a deer; He enables me to tread on the heights", "A strong fortress"],
            "correct": "He makes my feet like the feet of a deer; He enables me to tread on the heights",
            "reference": "Habakkuk 3:19",
            "difficulty": "Hard"
        },
        {
            "question": "What is the object of the third woe (Habakkuk 2:15)?",
            "options": ["Piling up ill-gotten gains", "Making his neighbor drink, and pouring out his wrath (or 'venom') until he is drunk", "Building a town with blood", "Making carved images"],
            "correct": "Making his neighbor drink, and pouring out his wrath (or 'venom') until he is drunk",
            "reference": "Habakkuk 2:15",
            "difficulty": "Hard"
        },
        {
            "question": "What is the object of the fifth woe (Habakkuk 2:19)?",
            "options": ["Relying on chariots", "Worshiping graven images and mute idols", "Worshiping the king's image", "Treating the poor unjustly"],
            "correct": "Worshiping graven images and mute idols",
            "reference": "Habakkuk 2:19",
            "difficulty": "Hard"
        },
        {
            "question": "What does Habakkuk vow to do while he waits for God's answer to his second complaint?",
            "options": ["He will fast and pray for a week", "He will stand at his guard post and station himself on the rampart", "He will go to the temple to offer a sacrifice", "He will gather the elders to discuss it"],
            "correct": "He will stand at his guard post and station himself on the rampart",
            "reference": "Habakkuk 2:1",
            "difficulty": "Hard"
        },
        
        // --- EXTREME ---
        {
            "question": "What is the phrase used to describe the **unjust nature** of the Chaldeans that Habakkuk points out to God (Habakkuk 1:13)?",
            "options": ["They are swift and terrifying", "They have no regard for treaties", "Their justice and dignity proceed from themselves", "Their horses are swifter than leopards"],
            "correct": "Their justice and dignity proceed from themselves",
            "reference": "Habakkuk 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "Habakkuk questions God's use of the Chaldeans, asking, 'Are You not from everlasting, O Lord, my God, my Holy One? We shall not die. O Lord, You have ordained them for **_________**.'",
            "options": ["Judgment", "Worship", "Correction", "A short season"],
            "correct": "Judgment",
            "reference": "Habakkuk 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "The Chaldeans are described as gathering people as a fisherman gathers fish with what two items?",
            "options": ["Net and line", "Seine net and rod", "Net and spear", "Hook and line"],
            "correct": "Net and spear",
            "reference": "Habakkuk 1:15",
            "difficulty": "Extreme"
        },
        {
            "question": "In Habakkuk 3:6, God is described as shattering 'the everlasting mountains' and crushing 'the ancient hills.' This shows that His ways are __________.",
            "options": ["Temporary", "Eternal", "Unpredictable", "Slow"],
            "correct": "Eternal",
            "reference": "Habakkuk 3:6",
            "difficulty": "Extreme"
        },
        {
            "question": "The second woe states that a nation will be 'filled with shame instead of glory.' What will God cause them to drink?",
            "options": ["A cup of wine that will make them stagger", "The cup of the Lord's right hand", "The cup of the water of affliction", "The blood of their own people"],
            "correct": "The cup of the Lord's right hand",
            "reference": "Habakkuk 2:16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specifically will cry out from the wall against the one who gets evil gain for his house?",
            "options": ["The voice of God", "The stone from the wall and the beam from the woodwork", "The blood of the innocent", "The mortar and the brick"],
            "correct": "The stone from the wall and the beam from the woodwork",
            "reference": "Habakkuk 2:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What two types of destructive natural phenomena preceded God's presence in Habakkuk 3:5?",
            "options": ["Earthquake and storm", "Burning coals and hail", "Pestilence and plague (or 'plague and burning heat')", "Whirlwind and fire"],
            "correct": "Pestilence and plague (or 'plague and burning heat')",
            "reference": "Habakkuk 3:5",
            "difficulty": "Extreme"
        },
        {
            "question": "In Habakkuk's lament about the Chaldeans' continuous conquest, he asks if they will 'continually empty their net' and 'relentlessly kill the nations' without _________.",
            "options": ["Repentance", "Mercy", "End", "Pity"],
            "correct": "Pity",
            "reference": "Habakkuk 1:17",
            "difficulty": "Extreme"
        },
        {
            "question": "When Habakkuk asks God to 'revive Your work in the midst of the years,' what does he ask that God do in the midst of the years **in addition** to reviving the work?",
            "options": ["Make it known", "Act boldly", "Show great power", "Remember the covenant"],
            "correct": "Make it known",
            "reference": "Habakkuk 3:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the object that the third woe (Habakkuk 2:17) says will overwhelm the Chaldeans, because they destroyed the forest and violently shed blood?",
            "options": ["The cup of the Lord's wrath", "The terror of Lebanon and the destruction of the wild beasts will overwhelm you", "The sword of the Lord", "The judgment of the nations"],
            "correct": "The terror of Lebanon and the destruction of the wild beasts will overwhelm you",
            "reference": "Habakkuk 2:17",
            "difficulty": "Extreme"
        }
    ]
}
 {
    "book": "Zephaniah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "During the reign of which king of Judah did Zephaniah prophesy?",
            "options": ["Ahaz", "Hezekiah", "Josiah", "Manasseh"],
            "correct": "Josiah",
            "reference": "Zephaniah 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the key theme and phrase used repeatedly in Zephaniah to describe God's coming judgment?",
            "options": ["The Time of Blessing", "The Day of the Lord", "The Year of Jubilee", "The Great Restoration"],
            "correct": "The Day of the Lord",
            "reference": "Zephaniah 1:7, 14-18; 2:2-3; 3:8",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific group of people is targeted for judgment because they say in their heart, 'The Lord will not do good, nor will He do evil'?",
            "options": ["The priests", "The Philistines", "The men who are complacent, settling on their dregs (the thick wine)", "The people of Jerusalem"],
            "correct": "The men who are complacent, settling on their dregs (the thick wine)",
            "reference": "Zephaniah 1:12",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary consequence is mentioned that will come upon the inhabitants of Jerusalem on the Day of the Lord?",
            "options": ["They will be blessed", "They will wander like blind men and their blood will be poured out like dust", "They will rebuild the temple", "They will defeat their enemies"],
            "correct": "They will wander like blind men and their blood will be poured out like dust",
            "reference": "Zephaniah 1:17",
            "difficulty": "Moderate"
        },
        {
            "question": "What foreign nations are singled out for judgment in Chapter 2 (in addition to Judah)?",
            "options": ["Edom, Ammon, Moab, and Philistia", "Babylon, Assyria, Egypt, and Tyre", "Syria, Media, and Persia", "Greece and Rome"],
            "correct": "Edom, Ammon, Moab, and Philistia",
            "reference": "Zephaniah 2:4-15",
            "difficulty": "Moderate"
        },
        {
            "question": "What will the remnant of God's people do in the restored land (Zephaniah 2:7)?",
            "options": ["They will build great cities", "They will pasture their flocks and lie down in the houses of Ashkelon", "They will rule over all nations", "They will forget the Lord"],
            "correct": "They will pasture their flocks and lie down in the houses of Ashkelon",
            "reference": "Zephaniah 2:7",
            "difficulty": "Moderate"
        },
        {
            "question": "What attribute of the Lord is highlighted as a reason why the people should seek Him before the Day of the Lord comes?",
            "options": ["His great power", "His love for the nations", "His hiddenness", "He is one who does no wrong; morning by morning He brings His justice to light"],
            "correct": "He is one who does no wrong; morning by morning He brings His justice to light",
            "reference": "Zephaniah 3:5",
            "difficulty": "Moderate"
        },
        {
            "question": "After the judgment, God promises to change the speech of the people to a 'pure language' (or 'pure lip'). What is the purpose of this change?",
            "options": ["So they may all understand one another", "So they may call upon the name of the Lord and serve Him with one accord", "So they can speak to the Gentiles", "So they can write new laws"],
            "correct": "So they may call upon the name of the Lord and serve Him with one accord",
            "reference": "Zephaniah 3:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the specific promised action of the Lord among His people in the great restoration (Zephaniah 3:17)?",
            "options": ["He will rebuild the temple", "He will defeat all their enemies", "The Lord your God in your midst, the Mighty One, will save; He will rejoice over you with gladness", "He will make them the wealthiest nation"],
            "correct": "The Lord your God in your midst, the Mighty One, will save; He will rejoice over you with gladness",
            "reference": "Zephaniah 3:17",
            "difficulty": "Moderate"
        },
        {
            "question": "What is promised to the dispersed and the shamed people of God at the end of the book?",
            "options": ["They will be forgotten", "They will be a praise and a name among all the peoples of the earth", "They will wander forever", "They will intermarry with the nations"],
            "correct": "They will be a praise and a name among all the peoples of the earth",
            "reference": "Zephaniah 3:20",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "In the prophecy against the Philistine cities, what will become of Ekron after the destruction?",
            "options": ["It will be rebuilt", "It will be rooted up", "It will be a sanctuary", "It will become like the pasture for flocks"],
            "correct": "It will be rooted up",
            "reference": "Zephaniah 2:4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific ritual is the prophet condemning those who 'worship the host of heaven upon the housetops' for practicing?",
            "options": ["Casting lots", "Syncretistic worship of foreign gods (astrology/star worship)", "Temple prostitution", "Sacrificing their children"],
            "correct": "Syncretistic worship of foreign gods (astrology/star worship)",
            "reference": "Zephaniah 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe those who 'have turned back from following the Lord'?",
            "options": ["The stiff-necked generation", "The ones who are scattered", "Those who have not sought the Lord, nor inquired of Him", "The wicked people"],
            "correct": "Those who have not sought the Lord, nor inquired of Him",
            "reference": "Zephaniah 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "What is the metaphorical image used to describe how the Lord will sweep away everything from the face of the land?",
            "options": ["An overwhelming flood", "A strong wind", "I will utterly sweep away everything from the face of the earth", "A destructive fire"],
            "correct": "I will utterly sweep away everything from the face of the earth",
            "reference": "Zephaniah 1:2",
            "difficulty": "Hard"
        },
        {
            "question": "Zephaniah says the Day of the Lord is a day of 'wrath, distress, anguish, trouble, ruin, and devastation.' What is the final image used to describe its total darkness?",
            "options": ["A day of clouds and thick darkness", "A day of blinding light", "A day of fire and brimstone", "A day of wind and rain"],
            "correct": "A day of clouds and thick darkness",
            "reference": "Zephaniah 1:15",
            "difficulty": "Hard"
        },
        {
            "question": "What is the reason given for the judgment against the nations of Moab and Ammon?",
            "options": ["They oppressed the poor", "They have reproached My people and magnified themselves against their territory", "They engaged in idolatry", "They allied with Assyria"],
            "correct": "They have reproached My people and magnified themselves against their territory",
            "reference": "Zephaniah 2:8",
            "difficulty": "Hard"
        },
        {
            "question": "What animal's destruction is used as the image for the complete desolation of Nineveh (Assyria)?",
            "options": ["The lion's den", "A bird's nest (cormorant and bittern will lodge in its capitals)", "The grazing sheep", "The wild donkey"],
            "correct": "A bird's nest (cormorant and bittern will lodge in its capitals)",
            "reference": "Zephaniah 2:13-14",
            "difficulty": "Hard"
        },
        {
            "question": "What virtue should the people of Judah seek before the Day of the Lord comes?",
            "options": ["Glory and honor", "Righteousness and humility (meekness)", "Wealth and prosperity", "Power and might"],
            "correct": "Righteousness and humility (meekness)",
            "reference": "Zephaniah 2:3",
            "difficulty": "Hard"
        },
        {
            "question": "What does Zephaniah call the city of Jerusalem (or Judah) in the beginning of Chapter 3, highlighting its moral corruption?",
            "options": ["The beautiful city", "The faithful city", "The rebellious and defiled, the oppressing city", "The city of David"],
            "correct": "The rebellious and defiled, the oppressing city",
            "reference": "Zephaniah 3:1",
            "difficulty": "Hard"
        },
        {
            "question": "What is the function of Jerusalem's **prophets** and **priests** criticized as (Zephaniah 3:4)?",
            "options": ["The prophets are arrogant, the priests are cowardly", "The prophets are reckless, treacherous men; the priests have profaned the sanctuary, they have done violence to the law", "The prophets are quiet, the priests are lazy", "The prophets are too harsh, the priests are too lenient"],
            "correct": "The prophets are reckless, treacherous men; the priests have profaned the sanctuary, they have done violence to the law",
            "reference": "Zephaniah 3:4",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Who are the four generations of Zephaniah's ancestry listed, which suggests a high-status, possibly royal, lineage?",
            "options": ["Zephaniah, son of Cushi, son of Gedaliah, son of Amariah, son of Hezekiah", "Zephaniah, son of Josiah, son of Amon, son of Manasseh", "Zephaniah, son of Neriah, son of Maaseiah", "Zephaniah, son of Pashhur"],
            "correct": "Zephaniah, son of Cushi, son of Gedaliah, son of Amariah, son of Hezekiah",
            "reference": "Zephaniah 1:1",
            "difficulty": "Extreme"
        },
        {
            "question": "The people are warned not to go up on the **_________** of the temple threshold on the Day of the Lord.",
            "options": ["Roof", "Steps", "Pavement", "Threshold"],
            "correct": "Threshold (The verse condemns those who leap over the threshold in the house of their master—likely a reference to a foreign, Assyrian custom brought into the temple)",
            "reference": "Zephaniah 1:9",
            "difficulty": "Extreme"
        },
        {
            "question": "In the description of the coming Day of the Lord, God's sacrifice is mentioned. Who are the 'guests' God has invited to this 'sacrifice'?",
            "options": ["The neighboring nations", "The Chaldeans (Babylonians)", "His own people, the people of Judah", "The beasts of the field"],
            "correct": "The Chaldeans (Babylonians) (The 'sacrifice' is the slaughter of the people of Judah and the 'guests' are the invaders)",
            "reference": "Zephaniah 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "Where in Jerusalem will the sound of wailing and crying be heard when the judgment comes?",
            "options": ["The temple and the palace", "The Fish Gate, the Second Quarter, and the hills (Maktesh)", "The Valley of Hinnom and the Kidron Valley", "The king's gate and the sheep gate"],
            "correct": "The Fish Gate, the Second Quarter, and the hills (Maktesh)",
            "reference": "Zephaniah 1:10-11",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item of comfort and security is mentioned that the people's silver and gold will **not** be able to deliver them from?",
            "options": ["The fire of the Lord's jealousy", "The sword of the enemy", "The plague", "The famine"],
            "correct": "The fire of the Lord's jealousy",
            "reference": "Zephaniah 1:18",
            "difficulty": "Extreme"
        },
        {
            "question": "In the prophecy against Moab and Ammon, the Lord promises they will become like what two wicked cities that God destroyed?",
            "options": ["Sodom and Gomorrah", "Tyre and Sidon", "Asshur and Nineveh", "Damascus and Arpad"],
            "correct": "Sodom and Gomorrah",
            "reference": "Zephaniah 2:9",
            "difficulty": "Extreme"
        },
        {
            "question": "In the final restoration, what is the role of the 'remnant of Israel' regarding the truth?",
            "options": ["They will speak only God's law", "They will speak no lies, nor will a deceitful tongue be found in their mouth", "They will forget their language and speak the pure tongue", "They will be teachers of the nations"],
            "correct": "They will speak no lies, nor will a deceitful tongue be found in their mouth",
            "reference": "Zephaniah 3:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the **pride** that God will remove from the midst of the restored people of Israel?",
            "options": ["The haughtiness of their eyes", "The boastful ones of their arrogance", "The evil thoughts of their heart", "The rebellious nature of their spirit"],
            "correct": "The boastful ones of their arrogance",
            "reference": "Zephaniah 3:11",
            "difficulty": "Extreme"
        },
        {
            "question": "God promises the remnant that they will 'feed and lie down, and **_________** shall make them afraid.'",
            "options": ["No enemy", "No wild beast", "No one", "No king"],
            "correct": "No one",
            "reference": "Zephaniah 3:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final promise of God regarding the future of the remnant's fortunes?",
            "options": ["I will restore your fortunes before your eyes", "I will establish their kingdom forever", "I will send them prosperity", "I will give them wealth untold"],
            "correct": "I will restore your fortunes before your eyes",
            "reference": "Zephaniah 3:20",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Haggai",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The book of Haggai is one of the shortest books and records how many distinct messages (prophecies) from the Lord?",
            "options": ["One", "Two", "Four", "Seven"],
            "correct": "Four",
            "reference": "Haggai 1:1, 2:1, 2:10, 2:20",
            "difficulty": "Moderate"
        },
        {
            "question": "The prophecy of Haggai is addressed to two key leaders. Who are they?",
            "options": ["King Cyrus and Ezra the Scribe", "Zerubbabel the governor and Joshua the high priest", "Nehemiah and Malachi", "Darius the king and the prophet Zechariah"],
            "correct": "Zerubbabel the governor and Joshua the high priest",
            "reference": "Haggai 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary construction project had the people neglected while they focused on their own homes?",
            "options": ["The City Walls", "The Royal Palace", "The Temple of the Lord", "The Water Gate"],
            "correct": "The Temple of the Lord",
            "reference": "Haggai 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the direct consequence or punishment God sent upon the people for their neglect of the temple?",
            "options": ["A major foreign invasion", "Famine, drought, and economic hardship", "A deadly plague", "Political upheaval"],
            "correct": "Famine, drought, and economic hardship",
            "reference": "Haggai 1:9-11",
            "difficulty": "Moderate"
        },
        {
            "question": "The people's response to Haggai's first message was to immediately begin to do what?",
            "options": ["Repent and fast", "Rebuild the walls of Jerusalem", "Obey the voice of the Lord and begin the work on the house of the Lord", "Gather an army"],
            "correct": "Obey the voice of the Lord and begin the work on the house of the Lord",
            "reference": "Haggai 1:12-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What encouraging message did God give the leaders and the people when they felt discouraged that the new temple seemed inferior to Solomon's temple?",
            "options": ["Do not be afraid, for I am with you", "The glory of the latter temple shall be greater than the former", "The new temple is more beautiful", "I will send you gold to finish it"],
            "correct": "Do not be afraid, for I am with you",
            "reference": "Haggai 2:4-5, 9",
            "difficulty": "Moderate"
        },
        {
            "question": "What prophecy is given regarding the nations and their treasures coming to the temple?",
            "options": ["They will bring wood and stone", "I will shake all nations, and the desired of all nations shall come, and I will fill this house with glory", "They will pay tribute to the governor", "They will send their kings to bow down"],
            "correct": "I will shake all nations, and the desired of all nations shall come, and I will fill this house with glory",
            "reference": "Haggai 2:6-7",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the relationship between holiness (consecrated flesh) and defilement (unclean person) taught in the third message?",
            "options": ["Holiness is easily transferred; defilement is not", "Holiness does not transfer, but defilement does transfer easily", "Both transfer equally", "Neither is transferred"],
            "correct": "Holiness does not transfer, but defilement does transfer easily",
            "reference": "Haggai 2:11-13",
            "difficulty": "Moderate"
        },
        {
            "question": "God's final promise to Zerubbabel is that He will make him like what specific item?",
            "options": ["A golden cup", "A shining star", "A signet ring", "A mighty warrior"],
            "correct": "A signet ring",
            "reference": "Haggai 2:23",
            "difficulty": "Moderate"
        },
        {
            "question": "What promise is given to the people *from the day* they started laying the foundation for the temple?",
            "options": ["I will never again send drought", "From this day on, I will bless you", "Your enemies will be defeated", "The famine will cease immediately"],
            "correct": "From this day on, I will bless you",
            "reference": "Haggai 2:19",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Haggai's prophecies began in the second year of the reign of which Persian King?",
            "options": ["Cyrus", "Artaxerxes", "Darius I (Darius the Great)", "Xerxes"],
            "correct": "Darius I (Darius the Great)",
            "reference": "Haggai 1:1",
            "difficulty": "Hard"
        },
        {
            "question": "When the people neglect the Temple, what is the specific phrase used to describe the state of their personal dwellings?",
            "options": ["Houses built on sand", "Houses without foundation", "Paneled houses", "Houses made of mud"],
            "correct": "Paneled houses",
            "reference": "Haggai 1:4",
            "difficulty": "Hard"
        },
        {
            "question": "The phrase 'You look for much, but behold, it comes to little' is immediately followed by what image regarding their earnings?",
            "options": ["You sow much but reap little", "You put your money into a bag with holes", "You spend it all too quickly", "You eat but are not satisfied"],
            "correct": "You put your money into a bag with holes",
            "reference": "Haggai 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "What command does God give the people to overcome their spiritual complacency and begin the work?",
            "options": ["Go up to the mountains and bring wood and build the house", "Call a fast and pray", "Send messengers to the king", "Hire skilled workers from Babylon"],
            "correct": "Go up to the mountains and bring wood and build the house",
            "reference": "Haggai 1:8",
            "difficulty": "Hard"
        },
        {
            "question": "When the people obey the Lord, what specific title does Haggai take on when he gives them the Lord's encouraging word?",
            "options": ["The Prophet of Comfort", "The Messenger of the Lord in the Lord's message", "The Servant of God", "The High Priest's Helper"],
            "correct": "The Messenger of the Lord in the Lord's message",
            "reference": "Haggai 1:13",
            "difficulty": "Hard"
        },
        {
            "question": "In the prophecy concerning the shaking of the heavens and earth, what two bodies of water are also specifically mentioned as being shaken?",
            "options": ["The rivers and the lakes", "The Jordan River and the Mediterranean Sea", "The sea and the dry land", "The Great River and the Salt Sea"],
            "correct": "The sea and the dry land",
            "reference": "Haggai 2:6",
            "difficulty": "Hard"
        },
        {
            "question": "Before the foundation of the Temple was laid, what happened to the measure of grain (wheat) expected from the heap of twenty measures?",
            "options": ["Only ten measures resulted", "Only five measures resulted", "The measure was filled", "It was stolen"],
            "correct": "Only ten measures resulted",
            "reference": "Haggai 2:16",
            "difficulty": "Hard"
        },
        {
            "question": "In the fifth month of the king's second year, how long had the Temple foundation been neglected *before* Haggai's first message?",
            "options": ["Two years", "Five years", "Fourteen years (since the foundation was first laid in Cyrus's time)", "Seventy years"],
            "correct": "Fourteen years (since the foundation was first laid in Cyrus's time)",
            "reference": "Context of Nahum and historical knowledge (Ezra 4 and Haggai 1:1)",
            "difficulty": "Hard"
        },
        {
            "question": "In the fourth message (Haggai 2:20-23), what specific military item will God overthrow as part of the judgment on the kingdoms?",
            "options": ["The horses and their riders", "The chariots and those who ride them", "The archers and their arrows", "The mighty warriors"],
            "correct": "The chariots and those who ride them",
            "reference": "Haggai 2:22",
            "difficulty": "Hard"
        },
        {
            "question": "The promise to Zerubbabel, making him a signet ring, primarily symbolizes what two things?",
            "options": ["Wealth and power", "Priestly authority and holiness", "Chosen status and royal authority", "Victory and wisdom"],
            "correct": "Chosen status and royal authority",
            "reference": "Haggai 2:23 (Symbol of chosen identity and authority to rule)",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the *exact* date given for the first prophetic message from the Lord through Haggai?",
            "options": ["The first day of the first month", "The first day of the sixth month", "The twenty-fourth day of the sixth month", "The tenth day of the seventh month"],
            "correct": "The first day of the sixth month",
            "reference": "Haggai 1:1",
            "difficulty": "Extreme"
        },
        {
            "question": "Haggai uses a pair of questions from the priests regarding holiness and defilement. The second question, which receives an affirmative answer, relates to defilement from contact with what specific source?",
            "options": ["The blood of a sacrifice", "A dead body", "Leaven (yeast)", "A sick person"],
            "correct": "A dead body",
            "reference": "Haggai 2:13",
            "difficulty": "Extreme"
        },
        {
            "question": "The third message of Haggai is delivered on the twenty-fourth day of the ninth month. This date is exactly how many months after the people began the reconstruction work?",
            "options": ["One month", "Three months", "Six months", "Nine months"],
            "correct": "Three months",
            "reference": "Haggai 1:1 (6th month, 1st day to 2:10 (9th month, 24th day) - Approx 3.5 months",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific word is translated as 'desire' or 'desired' that shall come when God shakes the nations (Haggai 2:7)?",
            "options": ["*Hesed*", "*Kavod*", "*Hemdah*", "*Yashar*"],
            "correct": "*Hemdah*",
            "reference": "Haggai 2:7 (Hebrew *ḥĕmda*, meaning precious thing, desirable thing, or wealth)",
            "difficulty": "Extreme"
        },
        {
            "question": "What happens to the vine, fig tree, olive tree, and pomegranate when they are cursed due to the Temple's neglect?",
            "options": ["They produce no fruit", "They are destroyed by hail", "They are stricken with blight, mildew, and hail", "They are consumed by fire"],
            "correct": "They are stricken with blight, mildew, and hail",
            "reference": "Haggai 2:17",
            "difficulty": "Extreme"
        },
        {
            "question": "In the fourth message, God repeats the promise of shaking 'the heavens and the earth' from the second message. What does He say He will also overthrow *besides* the kingdoms?",
            "options": ["The power of the nations", "The power of the armies of the Gentiles", "The thrones of kingdoms and the strength of the kingdoms of the nations", "The false gods of the nations"],
            "correct": "The thrones of kingdoms and the strength of the kingdoms of the nations",
            "reference": "Haggai 2:21-22",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the Lord's comforting response when the prophet sees that the people's work and offerings are 'defiled' due to their past neglect?",
            "options": ["Do not worry about it", "The punishment will cease tomorrow", "Consider from this day onward", "Go and purify yourselves"],
            "correct": "Consider from this day onward",
            "reference": "Haggai 2:15, 18",
            "difficulty": "Extreme"
        },
        {
            "question": "Haggai 2:5 quotes a foundational covenant promise made to the people that remains active during the Temple rebuilding. What is the essence of this promise?",
            "options": ["The promise of the land", "The word that I covenanted with you when you came out of Egypt, and My Spirit remains among you", "The promise to Abraham", "The covenant of the priesthood"],
            "correct": "The word that I covenanted with you when you came out of Egypt, and My Spirit remains among you",
            "reference": "Haggai 2:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item of jewelry or authority does the signet ring symbolize in the ancient Near East, relating to Zerubbabel?",
            "options": ["A priestly talisman", "The personal seal of the king or ruling authority", "A badge of military rank", "A symbol of wealth"],
            "correct": "The personal seal of the king or ruling authority",
            "reference": "Haggai 2:23 (Symbol of chosen identity and royal authority)",
            "difficulty": "Extreme"
        },
        {
            "question": "Who specifically is God's Spirit noted as 'stirring up' to begin the Temple work, in addition to the two key leaders?",
            "options": ["The prophets and the elders", "All the remnant of the people", "The Levites and the singers", "The foreign workers"],
            "correct": "All the remnant of the people",
            "reference": "Haggai 1:14",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Zechariah",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary message or theme of Zechariah's first chapter?",
            "options": ["The call to repentance and comfort for Jerusalem", "Prophecies against the surrounding nations", "The vision of the four horses", "The rebuilding of the city walls"],
            "correct": "The call to repentance and comfort for Jerusalem",
            "reference": "Zechariah 1:3-6, 16-17",
            "difficulty": "Moderate"
        },
        {
            "question": "What does the prophet see in his first vision that patrols the earth and reports back to the Angel of the Lord?",
            "options": ["Four chariots", "Four horsemen of various colors", "Angels on fiery wings", "Locusts from the abyss"],
            "correct": "Four horsemen of various colors",
            "reference": "Zechariah 1:8-11",
            "difficulty": "Moderate"
        },
        {
            "question": "Who is the high priest that is symbolically cleansed and given new garments in one of the visions?",
            "options": ["Zadok", "Eliashib", "Joshua", "Hilkiah"],
            "correct": "Joshua",
            "reference": "Zechariah 3:1-5",
            "difficulty": "Moderate"
        },
        {
            "question": "What title is given to the Messiah in Zechariah 3:8 and 6:12, symbolizing both royal and priestly functions?",
            "options": ["The Righteous Branch", "The Son of Man", "The Great Shepherd", "The Morning Star"],
            "correct": "The Branch",
            "reference": "Zechariah 3:8, 6:12",
            "difficulty": "Moderate"
        },
        {
            "question": "What two objects does Zechariah see that are dispensing oil to the lampstand in his vision?",
            "options": ["Two bronze pillars", "Two olive trees", "Two wells of living water", "Two golden lamps"],
            "correct": "Two olive trees",
            "reference": "Zechariah 4:3, 11-14",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the key message given to Zerubbabel the governor in the vision of the lampstand?",
            "options": ["Rebuild the walls quickly", "Not by might, nor by power, but by My Spirit, says the Lord of hosts", "The time of exile is over", "You will be king"],
            "correct": "Not by might, nor by power, but by My Spirit, says the Lord of hosts",
            "reference": "Zechariah 4:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What great burden of guilt and judgment, shaped like a scroll, does Zechariah see flying over the land?",
            "options": ["The Scroll of Repentance", "The Flying Scroll", "The Scroll of Lamentations", "The Scroll of the Law"],
            "correct": "The Flying Scroll",
            "reference": "Zechariah 5:1-4",
            "difficulty": "Moderate"
        },
        {
            "question": "Zechariah 9:9 says that the King/Messiah will come to Jerusalem riding upon what?",
            "options": ["A mighty war horse", "A white camel", "A donkey and a colt, the foal of a donkey", "A chariot of fire"],
            "correct": "A donkey and a colt, the foal of a donkey",
            "reference": "Zechariah 9:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the prophecy regarding the price the Shepherd is sold for in Zechariah 11:12?",
            "options": ["Ten pieces of silver", "Thirty pieces of silver", "One talent of gold", "Forty shekels of copper"],
            "correct": "Thirty pieces of silver",
            "reference": "Zechariah 11:12-13",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action will the people of Jerusalem take when they look upon the one whom they have pierced?",
            "options": ["They will worship Him", "They will run away in fear", "They will mourn for Him as one mourns for an only son", "They will rejoice greatly"],
            "correct": "They will mourn for Him as one mourns for an only son",
            "reference": "Zechariah 12:10",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the primary sin of the people in the past, causing God's wrath, that Zechariah warns the current generation not to repeat?",
            "options": ["Idolatry and syncretism", "Ignoring the warnings of the former prophets", "Failing to pay the tithe", "Marrying foreign wives"],
            "correct": "Ignoring the warnings of the former prophets",
            "reference": "Zechariah 1:4-6",
            "difficulty": "Hard"
        },
        {
            "question": "The four horns in Zechariah's vision symbolize the kingdoms that did what?",
            "options": ["Ruled the earth", "Scattered Judah, Israel, and Jerusalem", "Worshipped false gods", "Built the most magnificent cities"],
            "correct": "Scattered Judah, Israel, and Jerusalem",
            "reference": "Zechariah 1:19",
            "difficulty": "Hard"
        },
        {
            "question": "The measuring line vision (Chapter 2) promises the future of Jerusalem. What does the Lord Himself promise to be for the city?",
            "options": ["A golden standard", "A wall of fire all around it, and the glory in its midst", "A river of life in its center", "A new High Priest"],
            "correct": "A wall of fire all around it, and the glory in its midst",
            "reference": "Zechariah 2:5",
            "difficulty": "Hard"
        },
        {
            "question": "The Angel of the Lord says that the filthiness of High Priest Joshua is forgiven because he is a brand plucked from what?",
            "options": ["The pit of Sheol", "The burning", "The fire", "The ashes"],
            "correct": "The fire",
            "reference": "Zechariah 3:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the vision of the lampstand, what does the 'stone' with seven eyes on it symbolize?",
            "options": ["The foundation of the Temple", "Zerubbabel's authority", "The Messiah (The Branch)", "The perfect wisdom and omniscience of God"],
            "correct": "The Messiah (The Branch)",
            "reference": "Zechariah 3:9, 4:10",
            "difficulty": "Hard"
        },
        {
            "question": "What does the **Ephah** (a container for measuring grain) in Chapter 5 symbolize, which is carried away to the land of Shinar (Babylon)?",
            "options": ["The Temple sacrifices", "The sin and wickedness (iniquity) of the people", "The wealth of the nation", "The measure of their faith"],
            "correct": "The sin and wickedness (iniquity) of the people",
            "reference": "Zechariah 5:6-11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the two sticks the shepherd (the Lord) uses in Chapter 11, symbolizing his leadership over the flock?",
            "options": ["Mercy and Judgment", "Grace and Truth", "Beauty (Favor) and Bonds (Union)", "Rod and Staff"],
            "correct": "Beauty (Favor) and Bonds (Union)",
            "reference": "Zechariah 11:7",
            "difficulty": "Hard"
        },
        {
            "question": "In the future, what will happen to the remaining two-thirds of the people in the land after judgment?",
            "options": ["They will be scattered among the nations", "They will be cut off and perish", "They will flee to Egypt", "They will be purified and brought through the fire"],
            "correct": "They will be cut off and perish",
            "reference": "Zechariah 13:8",
            "difficulty": "Hard"
        },
        {
            "question": "Zechariah 8 promises a day when the people of other nations will grab hold of a Jewish man's robe and say they will go with him for what reason?",
            "options": ["Because they need protection", "Because they have heard that God is with you", "Because they want to learn the Law", "Because they need to hide"],
            "correct": "Because they have heard that God is with you",
            "reference": "Zechariah 8:23",
            "difficulty": "Hard"
        },
        {
            "question": "What will be the inscription upon the bells of the horses in the final glorious day (Chapter 14)?",
            "options": ["God is our King", "Holy to the Lord", "Victory for Jerusalem", "The Lord is one"],
            "correct": "Holy to the Lord",
            "reference": "Zechariah 14:20",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The four craftsmen (blacksmiths) in Chapter 1 come to do what to the four horns (kingdoms) that scattered Judah?",
            "options": ["To judge and terrify them", "To rebuild their cities", "To make them into tools", "To send them to exile"],
            "correct": "To judge and terrify them",
            "reference": "Zechariah 1:21",
            "difficulty": "Extreme"
        },
        {
            "question": "The four chariots in Chapter 6 are said to represent what?",
            "options": ["The four winds/spirits of heaven that go out from standing before the Lord of all the earth", "The four major empires (Babylon, Persia, etc.)", "The armies of God", "The four cherubim"],
            "correct": "The four winds/spirits of heaven that go out from standing before the Lord of all the earth",
            "reference": "Zechariah 6:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific material is used to make the crowns placed upon Joshua the High Priest (which foreshadow the Messiah)?",
            "options": ["Silver and gold", "Copper and iron", "Bronze and silver", "Pure gold"],
            "correct": "Silver and gold",
            "reference": "Zechariah 6:11",
            "difficulty": "Extreme"
        },
        {
            "question": "In the future Day of the Lord, what two natural physical phenomena will occur upon the Mount of Olives?",
            "options": ["It will be covered with fire and hail", "It will split in two, forming a great valley running east and west", "A river of living water will flow from it", "It will be leveled to the ground"],
            "correct": "It will split in two, forming a great valley running east and west",
            "reference": "Zechariah 14:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific question about fasting do the people send messengers to the priests and prophets to ask in Chapter 7?",
            "options": ["Should we continue to fast in the fifth and seventh months, as we have done these many years?", "Should we add more fasts to the calendar?", "Is fasting still required after the exile?", "What foods should we abstain from while fasting?"],
            "correct": "Should we continue to fast in the fifth and seventh months, as we have done these many years?",
            "reference": "Zechariah 7:3, 5",
            "difficulty": "Extreme"
        },
        {
            "question": "What will happen to the name of the false gods and the prophets in the future restoration (Chapter 13)?",
            "options": ["The name of the idols will be preserved, and the prophets will be honored", "The name of the false gods will be cut off, and the spirit of uncleanness will be removed from the land", "They will be burned in fire", "They will be buried in the valley"],
            "correct": "The name of the false gods will be cut off, and the spirit of uncleanness will be removed from the land",
            "reference": "Zechariah 13:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific image is used to describe the primary characteristic of the people who will be restored in Jerusalem (Chapter 8)?",
            "options": ["A roaring lion", "A powerful fortress", "A people who do not fear the Lord", "A people of truth and righteousness"],
            "correct": "A people of truth and righteousness",
            "reference": "Zechariah 8:3, 16",
            "difficulty": "Extreme"
        },
        {
            "question": "What humiliating action will the father and mother perform upon their son who continues to prophesy lies?",
            "options": ["They will send him to a foreign country", "They will pierce him with a sword (or 'stab him')", "They will shame him publicly", "They will disown him forever"],
            "correct": "They will pierce him with a sword (or 'stab him')",
            "reference": "Zechariah 13:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific prophecy is given about the fate of the fountain of the house of David in the restored Jerusalem?",
            "options": ["It will be destroyed by the enemy", "A fountain shall be opened for the house of David and for the inhabitants of Jerusalem, for sin and for uncleanness", "It will flow with water forever", "It will be a place of healing"],
            "correct": "A fountain shall be opened for the house of David and for the inhabitants of Jerusalem, for sin and for uncleanness",
            "reference": "Zechariah 13:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the two olive trees (and branches) in the vision of the lampstand, representing the two anointed ones?",
            "options": ["The two witnesses", "The two great men of God", "The two Sons of Oil (or 'sons of oil')", "The two pillars of the earth"],
            "correct": "The two Sons of Oil (or 'sons of oil')",
            "reference": "Zechariah 4:14",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Malachi",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the meaning of the prophet Malachi's name?",
            "options": ["My King", "My Messenger", "My Light", "My Strength"],
            "correct": "My Messenger",
            "reference": "Malachi 3:1 (The name is closely related to the term 'messenger' used in the book)",
            "difficulty": "Moderate"
        },
        {
            "question": "The Book of Malachi is structured around a series of accusations by God, followed by what common response from the people?",
            "options": ["Silence and fear", "Repentance and fasting", "A rhetorical question, 'In what way...?'", "Open rebellion"],
            "correct": "A rhetorical question, 'In what way...?'",
            "reference": "Malachi 1:2, 1:7, 2:14, 3:7, 3:8, 3:13",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary evidence does God offer to prove His love for Israel in Chapter 1?",
            "options": ["The giving of the Law", "The promise of the Messiah", "The hatred/judgment of Edom (Esau) while choosing Jacob", "The rebuilding of the Temple"],
            "correct": "The hatred/judgment of Edom (Esau) while choosing Jacob",
            "reference": "Malachi 1:2-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific group of people is condemned for offering defiled food and sacrifices (the blind, lame, and sick) on God's altar?",
            "options": ["The kings", "The prophets", "The priests", "The elders"],
            "correct": "The priests",
            "reference": "Malachi 1:6-8",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific sin is God most concerned about in Malachi 2:13-16, dealing with family and community?",
            "options": ["Failing to keep the Sabbath", "Divorcing the wife of one's youth and marrying a foreign woman", "Oppressing the poor", "Offering sacrifices to idols"],
            "correct": "Divorcing the wife of one's youth and marrying a foreign woman",
            "reference": "Malachi 2:14-16",
            "difficulty": "Moderate"
        },
        {
            "question": "In what specific area does God challenge the people to test Him to prove He will bless them?",
            "options": ["In their prayers", "By fasting for a week", "In bringing the full tithe into the storehouse", "In fighting their enemies"],
            "correct": "In bringing the full tithe into the storehouse",
            "reference": "Malachi 3:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What will God do to the 'devourer' (a type of pest) for the sake of the people who faithfully tithe?",
            "options": ["He will command it to flee", "He will rebuke it", "He will send it to the sea", "He will destroy it immediately"],
            "correct": "He will rebuke it",
            "reference": "Malachi 3:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What item will be written in heaven to remember those who feared the Lord and spoke to one another?",
            "options": ["A book of life", "A book of remembrance", "A scroll of history", "The names of the prophets"],
            "correct": "A book of remembrance",
            "reference": "Malachi 3:16",
            "difficulty": "Moderate"
        },
        {
            "question": "The Lord says that on the coming 'Day,' the righteous will 'go out and grow fat like **_________**.'",
            "options": ["A prized ox", "Calves from the stall", "Cows in the pasture", "Lambs in the fold"],
            "correct": "Calves from the stall",
            "reference": "Malachi 4:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What prophet is promised to return before the coming of the great and dreadful Day of the Lord?",
            "options": ["Elisha", "Jeremiah", "Isaiah", "Elijah"],
            "correct": "Elijah",
            "reference": "Malachi 4:5",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the rhetorical question the people ask regarding God's justice, claiming 'Everyone who does evil is good in the sight of the Lord'?",
            "options": ["Where is your love?", "Where is the God of justice?", "Why do the wicked prosper?", "Why are we still in exile?"],
            "correct": "Where is the God of justice?",
            "reference": "Malachi 2:17",
            "difficulty": "Hard"
        },
        {
            "question": "What specific characteristic must the priests restore to themselves, as commanded in the covenant of Levi?",
            "options": ["Wealth and power", "A love for foreign women", "Life and peace, and true instruction in his mouth", "The sacrifice of burnt offerings"],
            "correct": "Life and peace, and true instruction in his mouth",
            "reference": "Malachi 2:5-7",
            "difficulty": "Hard"
        },
        {
            "question": "In the fourth accusation, the people are condemned for wearying the Lord with their words. What specific question do they ask that wearies Him?",
            "options": ["When will the Temple be finished?", "When will the Messiah come?", "When will we rule the nations?", "Where is the God of justice?"],
            "correct": "Where is the God of justice?",
            "reference": "Malachi 2:17",
            "difficulty": "Hard"
        },
        {
            "question": "In the fifth accusation, the people ask 'In what way shall we return?' What is God's direct answer?",
            "options": ["By paying your vows", "By not robbing God in tithes and offerings", "By keeping the Sabbath", "By observing the festivals"],
            "correct": "By not robbing God in tithes and offerings",
            "reference": "Malachi 3:7-8",
            "difficulty": "Hard"
        },
        {
            "question": "The second messenger promised in Malachi 3:1 is preceded by the Lord Himself coming suddenly to what two places?",
            "options": ["His Temple and the place of sacrifice", "His Temple and the sanctuary", "His Temple and the house of David", "His Temple and the storehouse"],
            "correct": "His Temple and the sanctuary",
            "reference": "Malachi 3:1",
            "difficulty": "Hard"
        },
        {
            "question": "What is the metaphorical image used to describe the purification work of the coming Messenger (Malachi 3:2)?",
            "options": ["Fire and a hammer", "A refiner's fire and fuller's soap", "A sword and a rod", "A stream of water"],
            "correct": "A refiner's fire and fuller's soap",
            "reference": "Malachi 3:2",
            "difficulty": "Hard"
        },
        {
            "question": "What will the faithful priests do after the purification is complete?",
            "options": ["They will rule over the people", "They will again offer offerings in righteousness", "They will wear the High Priest's garments", "They will leave the Temple"],
            "correct": "They will again offer offerings in righteousness",
            "reference": "Malachi 3:3",
            "difficulty": "Hard"
        },
        {
            "question": "What four groups of people will God come near to judge in the future Day of the Lord, alongside sorcerers and adulterers?",
            "options": ["Oppressors of the hired man, the widow, the fatherless, and those who turn away the sojourner", "The kings, the prophets, the scribes, and the elders", "The nations of Edom, Moab, Ammon, and Philistia", "The Assyrians, Babylonians, Persians, and Greeks"],
            "correct": "Oppressors of the hired man, the widow, the fatherless, and those who turn away the sojourner",
            "reference": "Malachi 3:5",
            "difficulty": "Hard"
        },
        {
            "question": "The final accusation from the people is the claim that 'It is **_________** to serve God.'",
            "options": ["Too hard", "A burden", "Useless", "Too demanding"],
            "correct": "Useless",
            "reference": "Malachi 3:14",
            "difficulty": "Hard"
        },
        {
            "question": "What is the condition that Malachi 4:4 instructs the people to remember?",
            "options": ["The history of the prophets", "The Law of Moses, including the statutes and ordinances", "The promise of the Messiah", "The covenant with David"],
            "correct": "The Law of Moses, including the statutes and ordinances",
            "reference": "Malachi 4:4",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The Lord expresses His detestation for the priests who fail to give glory to His name by saying He will spread **_________** on their faces.",
            "options": ["The blood of the sacrifices", "Refuse of the feast", "Dung (manure) of their sacrifices", "Dust and ashes"],
            "correct": "Dung (manure) of their sacrifices",
            "reference": "Malachi 2:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the **purity** of the offerings that will be made by Judah and Jerusalem after the purification of the priests (Malachi 3:4)?",
            "options": ["As in the days of Moses and Aaron", "As in the days of Abraham", "As in the days of old, as in former years", "As in the days of David and Solomon"],
            "correct": "As in the days of old, as in former years",
            "reference": "Malachi 3:4",
            "difficulty": "Extreme"
        },
        {
            "question": "The Lord says He will come and be a swift witness against those who swear falsely and those who oppress the poor, because they do not **_________** Him.",
            "options": ["Believe", "Fear", "Serve", "Worship"],
            "correct": "Fear",
            "reference": "Malachi 3:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific consequence did the people notice when they failed to honor the covenant, which prompted God to challenge them to test Him with the full tithe?",
            "options": ["Their enemies attacked", "They were under a curse with a curse", "The walls of Jerusalem fell down", "They lost their harvest for seventy years"],
            "correct": "They were under a curse with a curse",
            "reference": "Malachi 3:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the metaphorical action the Lord promises to take with the 'windows of heaven' after the people bring the full tithe?",
            "options": ["He will close them", "He will open them and pour out a blessing", "He will use them to look down on the earth", "He will use them to judge the nations"],
            "correct": "He will open them and pour out a blessing",
            "reference": "Malachi 3:10",
            "difficulty": "Extreme"
        },
        {
            "question": "The Day of the Lord is said to burn the wicked up so thoroughly that it will leave them neither **_________** nor **_________**.",
            "options": ["House nor home", "Root nor branch", "Silver nor gold", "Wife nor children"],
            "correct": "Root nor branch",
            "reference": "Malachi 4:1",
            "difficulty": "Extreme"
        },
        {
            "question": "The promise to the righteous in the final chapter is that the 'Sun of Righteousness' will rise with what specific blessing in His wings?",
            "options": ["Power and Might", "Healing", "Glory", "Peace"],
            "correct": "Healing",
            "reference": "Malachi 4:2",
            "difficulty": "Extreme"
        },
        {
            "question": "The specific phrase Malachi 4:6 uses to describe the purpose of the prophet Elijah's return is to turn the hearts of the **_________** to the **_________**, and the hearts of the **_________** to their **_________**.",
            "options": ["Fathers, children, children, fathers", "Priests, Levites, Levites, priests", "Rich, poor, poor, rich", "Men, women, women, men"],
            "correct": "Fathers, children, children, fathers",
            "reference": "Malachi 4:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used in Malachi 1:11 regarding the Lord's name, which He says will be great among the Gentiles?",
            "options": ["My name shall be known to all nations", "From the rising of the sun even to its going down, My name shall be great among the Gentiles", "My name will be honored in every kingdom", "My name will be feared by all nations"],
            "correct": "From the rising of the sun even to its going down, My name shall be great among the Gentiles",
            "reference": "Malachi 1:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific object that the Lord hates in Malachi 2:16 when He condemns the unfaithful man?",
            "options": ["The covering of one's garment with violence (divorce)", "The strange fire on the altar", "The foreign god", "The broken covenant"],
            "correct": "The covering of one's garment with violence (divorce)",
            "reference": "Malachi 2:16",
            "difficulty": "Extreme"
        }
    ]
}

  // --- GOSPELS ---
 {
    "book": "Matthew",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Matthew?",
            "options": ["Jesus as the Son of God", "Jesus as the Messiah, King of Israel, and the fulfillment of the Old Testament prophecies", "Jesus as the Suffering Servant", "Jesus as the Son of Man"],
            "correct": "Jesus as the Messiah, King of Israel, and the fulfillment of the Old Testament prophecies",
            "reference": "Overall theme (Matthew 1:1; 2:2; 5:17)",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the other name of the author, Matthew, who was one of the twelve apostles?",
            "options": ["Simon", "Levi (the tax collector)", "Judas", "Thomas"],
            "correct": "Levi (the tax collector)",
            "reference": "Matthew 9:9",
            "difficulty": "Moderate"
        },
        {
            "question": "Matthew opens his Gospel by tracing Jesus's genealogy back to what two key Old Testament figures?",
            "options": ["Adam and Noah", "Moses and Aaron", "Abraham and David", "Jacob and Isaac"],
            "correct": "Abraham and David",
            "reference": "Matthew 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What event brought the wise men (Magi) to Jerusalem, seeking the newborn King of the Jews?",
            "options": ["A dream from God", "The appearance of a star in the East", "The prophecy of the scribes", "A vision in the Temple"],
            "correct": "The appearance of a star in the East",
            "reference": "Matthew 2:2, 9",
            "difficulty": "Moderate"
        },
        {
            "question": "What command did King Herod give that led to the murder of all male children two years old and under in Bethlehem and the surrounding region?",
            "options": ["The Exile of the Jews", "The Slaughter of the Innocents", "The Census Decree", "The New Law"],
            "correct": "The Slaughter of the Innocents",
            "reference": "Matthew 2:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific ritual did John the Baptist perform for the forgiveness of sins, which Jesus also submitted to?",
            "options": ["The offering of sacrifices", "Circumcision", "Baptism (or 'baptism of repentance')", "The reading of the Law"],
            "correct": "Baptism (or 'baptism of repentance')",
            "reference": "Matthew 3:6, 13",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the collective name given to Jesus's extended discourse (sermon) in Matthew 5-7?",
            "options": ["The Great Commission", "The Sermon on the Mount", "The Parable of the Sower", "The Olivet Discourse"],
            "correct": "The Sermon on the Mount",
            "reference": "Matthew 5:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What famous petition does Jesus teach His disciples to pray concerning the will of God?",
            "options": ["Your kingdom come, Your will be done, on earth as it is in heaven", "Forgive us our sins", "Deliver us from evil", "Give us this day our daily bread"],
            "correct": "Your kingdom come, Your will be done, on earth as it is in heaven",
            "reference": "Matthew 6:10 (The Lord's Prayer)",
            "difficulty": "Moderate"
        },
        {
            "question": "What two events accompany the death of Jesus, symbolizing the breaking of the Old Covenant and the magnitude of the moment?",
            "options": ["The opening of the heavens and the voice of God", "The splitting of the veil in the Temple and a great earthquake", "The sound of a trumpet and the resurrection of the saints", "The darkening of the sky and the appearance of angels"],
            "correct": "The splitting of the veil in the Temple and a great earthquake",
            "reference": "Matthew 27:51",
            "difficulty": "Moderate"
        },
        {
            "question": "What instruction did the resurrected Jesus give His disciples in His final command to them?",
            "options": ["Go back to Galilee and wait", "The Great Commission (Go and make disciples of all nations, baptizing them)", "Rebuild the Temple in Jerusalem", "Stay in Jerusalem and pray"],
            "correct": "The Great Commission (Go and make disciples of all nations, baptizing them)",
            "reference": "Matthew 28:19-20",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "In the genealogy, Matthew highlights three specific groupings of how many generations each?",
            "options": ["Seven generations", "Twelve generations", "Fourteen generations", "Forty generations"],
            "correct": "Fourteen generations",
            "reference": "Matthew 1:17",
            "difficulty": "Hard"
        },
        {
            "question": "In the Sermon on the Mount, Jesus states that He did not come to abolish the Law or the Prophets, but to do what?",
            "options": ["To reinterpret them completely", "To preach a new message", "To fulfill them", "To abolish the sacrifices"],
            "correct": "To fulfill them",
            "reference": "Matthew 5:17",
            "difficulty": "Hard"
        },
        {
            "question": "What specific prophetic title did John the Baptist deny having, even though Jesus later affirmed he was that figure?",
            "options": ["The Messiah", "The Son of God", "Elijah (who is to come)", "The Prophet of the Lord"],
            "correct": "Elijah (who is to come)",
            "reference": "Matthew 11:14 (Jesus affirms); John 1:21 (John denies)",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Jesus uses to describe the two roads that lead to life and destruction?",
            "options": ["The narrow gate and the wide gate", "The high road and the low road", "The road of faith and the road of works", "The difficult path and the easy path"],
            "correct": "The narrow gate and the wide gate",
            "reference": "Matthew 7:13-14",
            "difficulty": "Hard"
        },
        {
            "question": "In the parable of the weeds (or 'tares'), what did Jesus identify the 'field' as?",
            "options": ["The church", "The kingdom of heaven", "The world", "The hearts of men"],
            "correct": "The world",
            "reference": "Matthew 13:38",
            "difficulty": "Hard"
        },
        {
            "question": "What two disciples did Jesus take with Him on the mountaintop to witness the Transfiguration?",
            "options": ["Andrew and Philip", "Peter and John", "James and John", "Peter and James"],
            "correct": "Peter and John (The traditional answer is Peter, James, and John. Matthew 17 lists the same three as Mark, making 'Peter, James, and John' the most accurate grouping, but if selecting two, James and John are the brothers)",
            "reference": "Matthew 17:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific bodily sense did Jesus restore to the two blind men who cried out, 'Son of David, have mercy on us'?",
            "options": ["Sight", "Hearing", "Speech", "Healing from leprosy"],
            "correct": "Sight",
            "reference": "Matthew 9:27-31; 20:29-34",
            "difficulty": "Hard"
        },
        {
            "question": "What is the specific sign Jesus gave to the Pharisees and Sadducees when they demanded one?",
            "options": ["The sign of the prophet Jonah (three days and three nights in the heart of the earth)", "The sign of the cross", "The sign of the flood", "The sign of Elijah"],
            "correct": "The sign of the prophet Jonah (three days and three nights in the heart of the earth)",
            "reference": "Matthew 12:39-40",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did the soldiers use to crown Jesus during His mockery before the crucifixion?",
            "options": ["A golden crown", "A laurel wreath", "A crown of thorns", "A crown of wood"],
            "correct": "A crown of thorns",
            "reference": "Matthew 27:29",
            "difficulty": "Hard"
        },
        {
            "question": "What was the term used to describe the money the chief priests paid the soldiers to lie about Jesus's body being stolen?",
            "options": ["The price of betrayal", "Blood money (or 'a large sum of money')", "The king's treasury", "The Temple offering"],
            "correct": "Blood money (or 'a large sum of money')",
            "reference": "Matthew 28:12-15",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific item or concept does Jesus say a rich man would have difficulty passing through to enter the kingdom of heaven?",
            "options": ["The eye of a needle", "The narrow gate", "The door of the synagogue", "The Law of Moses"],
            "correct": "The eye of a needle",
            "reference": "Matthew 19:24",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the name of the place, meaning 'Field of Blood,' that the priests purchased with the thirty pieces of silver Judas returned?",
            "options": ["Gethsemane", "Golgotha", "Akeldama", "Kidron Valley"],
            "correct": "Akeldama",
            "reference": "Matthew 27:8",
            "difficulty": "Extreme"
        },
        {
            "question": "In the Olivet Discourse (Matthew 24), Jesus warns that the time of Tribulation will be so severe that unless it is shortened, what consequence will occur?",
            "options": ["The Temple will be destroyed completely", "No flesh would be saved", "The nations will turn against Israel", "The sun will be darkened"],
            "correct": "No flesh would be saved",
            "reference": "Matthew 24:22",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific command Jesus gave His disciples regarding prayer when they fast?",
            "options": ["Do not fast in public", "Do not be like the hypocrites, who disfigure their faces, but anoint your head and wash your face", "Pray in your closet", "Pray to God and not to men"],
            "correct": "Do not be like the hypocrites, who disfigure their faces, but anoint your head and wash your face",
            "reference": "Matthew 6:16-17",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific command Jesus gave Peter when a coin was miraculously found in a fish's mouth?",
            "options": ["To pay the Roman tax (or 'tribute money') for himself and Jesus", "To buy food for the poor", "To give the money to the Temple", "To use it to buy a new boat"],
            "correct": "To pay the Roman tax (or 'tribute money') for himself and Jesus",
            "reference": "Matthew 17:27",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law stated that a man could divorce his wife for what specific reason, which Jesus later clarified?",
            "options": ["Any cause (or 'any reason')", "Adultery alone", "Lack of faith", "Disobedience"],
            "correct": "Any cause (or 'any reason')",
            "reference": "Matthew 19:3 (Context of the legal debate of the time)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific Old Testament prophet is cited regarding the prophecy that Jesus would make His dwelling in Nazareth?",
            "options": ["Isaiah", "Jeremiah", "Micah", "The prophets (in general)",],
            "correct": "The prophets (in general)",
            "reference": "Matthew 2:23 (The citation is vague, referring generally to prophetic literature)",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific action that the women at the tomb were performing when the earthquake struck and the angel descended?",
            "options": ["They were weeping loudly", "They were bringing spices to anoint the body", "They were praying and worshipping", "They were running from the Roman guard"],
            "correct": "They were bringing spices to anoint the body",
            "reference": "Matthew 28:1",
            "difficulty": "Extreme"
        },
        {
            "question": "In the Great Commission, Jesus promises His disciples, 'I am with you always, even to the **_________**.'",
            "options": ["Coming of the Lord", "End of the age (or 'end of the world')", "End of your journey", "Last day"],
            "correct": "End of the age (or 'end of the world')",
            "reference": "Matthew 28:20",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific bodily action did the crowd shout for Pilate to perform to the crucified Jesus in mockery?",
            "options": ["Spit on him", "Come down from the cross", "Give him water", "Worship him"],
            "correct": "Spit on him",
            "reference": "Matthew 27:30",
            "difficulty": "Extreme"
        }
    ]
}
  {
    "book": "Mark",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Gospel of Mark begins with the ministry of which person?",
            "options": ["Jesus's birth", "The Sermon on the Mount", "John the Baptist", "Peter the Apostle"],
            "correct": "John the Baptist",
            "reference": "Mark 1:1-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary emphasis of the Gospel of Mark regarding Jesus?",
            "options": ["Jesus as the King/Messiah", "Jesus as the Suffering Servant/Son of God in action", "Jesus as the Son of Man", "Jesus as the Teacher"],
            "correct": "Jesus as the Suffering Servant/Son of God in action",
            "reference": "Overall theme and emphasis on action/miracles",
            "difficulty": "Moderate"
        },
        {
            "question": "What title does Mark most frequently use to describe Jesus?",
            "options": ["Son of David", "Messiah", "Son of God", "Son of Man"],
            "correct": "Son of Man",
            "reference": "Used over a dozen times, highlighting his human nature and eventual return/glory",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific geographical area did Jesus frequently minister in, as emphasized in Mark?",
            "options": ["Judea and Jerusalem", "Samaria", "Galilee and the Decapolis", "Nazareth"],
            "correct": "Galilee and the Decapolis",
            "reference": "Mark 1:14-39, 7:31",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the occupation of the first four disciples Jesus called: Simon (Peter), Andrew, James, and John?",
            "options": ["Tax collectors", "Fishermen", "Tentmakers", "Shepherds"],
            "correct": "Fishermen",
            "reference": "Mark 1:16-20",
            "difficulty": "Moderate"
        },
        {
            "question": "What powerful demonstration of authority did Jesus perform in the synagogue in Capernaum (Mark 1:21-28)?",
            "options": ["Healing the leper", "Raising the dead", "Casting out an unclean spirit", "Preaching the Law"],
            "correct": "Casting out an unclean spirit",
            "reference": "Mark 1:23-26",
            "difficulty": "Moderate"
        },
        {
            "question": "What command did Jesus frequently give to the demons, the sick He healed, and sometimes the disciples, asking them not to reveal His identity as the Messiah?",
            "options": ["The Great Commission", "The Messianic Secret", "The Command to Wait", "The Holy Covenant"],
            "correct": "The Messianic Secret",
            "reference": "Mark 1:34, 44; 3:12; 7:36; 8:30",
            "difficulty": "Moderate"
        },
        {
            "question": "When Jesus fed the 5,000, how many baskets of broken pieces of bread and fish were collected afterward?",
            "options": ["Seven", "Twelve", "Ten", "Four"],
            "correct": "Twelve",
            "reference": "Mark 6:43",
            "difficulty": "Moderate"
        },
        {
            "question": "What significant question did Jesus ask the disciples at Caesarea Philippi that Peter answered correctly, identifying Jesus as the Christ?",
            "options": ["Who do people say that I am?", "Are you ready to die for Me?", "Why are you afraid?", "What did you discuss on the way?"],
            "correct": "Who do people say that I am?",
            "reference": "Mark 8:27-29",
            "difficulty": "Moderate"
        },
        {
            "question": "What two Old Testament figures appeared with Jesus during the Transfiguration?",
            "options": ["Abraham and Isaac", "Elijah and Moses", "David and Solomon", "Isaiah and Jeremiah"],
            "correct": "Elijah and Moses",
            "reference": "Mark 9:4",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What two adjectives does Mark use to describe John the Baptist's clothing?",
            "options": ["Wool and linen", "Camel's hair and leather", "Fine linen and purple", "Woven cloth and goat skin"],
            "correct": "Camel's hair and leather",
            "reference": "Mark 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "What unique miracle did Jesus perform on a man in Bethsaida, which initially required two stages?",
            "options": ["Healing a deaf man", "Healing a leper", "Healing a blind man who first saw people like trees walking", "Healing the Gerasene demoniac"],
            "correct": "Healing a blind man who first saw people like trees walking",
            "reference": "Mark 8:22-26",
            "difficulty": "Hard"
        },
        {
            "question": "What specific request did James and John make of Jesus that led to a discussion about suffering and service?",
            "options": ["To sit at your right and left hand in your glory", "To call down fire on a Samaritan village", "To be the first apostles", "To perform a miracle for them"],
            "correct": "To sit at your right and left hand in your glory",
            "reference": "Mark 10:35-40",
            "difficulty": "Hard"
        },
        {
            "question": "Mark records Jesus's strong condemnation of the scribes for devouring the houses of what specific group of people?",
            "options": ["The poor", "Widows", "Orphans", "Foreigners"],
            "correct": "Widows",
            "reference": "Mark 12:40",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who offered his tomb for Jesus's burial?",
            "options": ["Nicodemus", "Lazarus", "Joseph of Arimathea", "Simon of Cyrene"],
            "correct": "Joseph of Arimathea",
            "reference": "Mark 15:43",
            "difficulty": "Hard"
        },
        {
            "question": "What title did the demon in the Gerasene demoniac use to refer to himself, due to the number of spirits possessing him?",
            "options": ["Beelzebul", "Satan", "A thousand demons", "Legion"],
            "correct": "Legion",
            "reference": "Mark 5:9",
            "difficulty": "Hard"
        },
        {
            "question": "When Jesus healed the paralytic (lowered through the roof), what was the first thing Jesus said to the man?",
            "options": ["Pick up your mat and walk", "Your sins are forgiven", "Go and sin no more", "Your faith has saved you"],
            "correct": "Your sins are forgiven",
            "reference": "Mark 2:5",
            "difficulty": "Hard"
        },
        {
            "question": "When the crowd followed Jesus into the wilderness (Mark 6), what two phrases does Mark use to describe the state of the people, prompting Jesus to teach them?",
            "options": ["Hungry and tired", "Excited and eager", "Like sheep without a shepherd", "Waiting for a sign"],
            "correct": "Like sheep without a shepherd",
            "reference": "Mark 6:34",
            "difficulty": "Hard"
        },
        {
            "question": "Which of the following disciples was NOT part of Jesus's inner circle (who witnessed the Transfiguration and the Garden of Gethsemane agony)?",
            "options": ["Peter", "Andrew", "James", "John"],
            "correct": "Andrew",
            "reference": "Mark 5:37, 9:2, 14:33",
            "difficulty": "Hard"
        },
        {
            "question": "What was the final statement of the Roman Centurion who witnessed Jesus's death on the cross?",
            "options": ["Truly, this man was innocent", "Truly, this man was the Son of God", "Truly, he was a king", "It is finished"],
            "correct": "Truly, this man was the Son of God",
            "reference": "Mark 15:39",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Mark includes several Aramaic phrases that he immediately translates. What is the Aramaic word for the command Jesus gave the deaf and mute man?",
            "options": ["Talitha koum", "Ephphatha", "Abba", "Korban"],
            "correct": "Ephphatha (meaning 'Be opened')",
            "reference": "Mark 7:34",
            "difficulty": "Extreme"
        },
        {
            "question": "Jesus performed two similar miracles of multiplication. When He fed the 4,000, how many baskets of fragments were collected?",
            "options": ["Ten", "Twelve", "Seven", "Four"],
            "correct": "Seven",
            "reference": "Mark 8:8",
            "difficulty": "Extreme"
        },
        {
            "question": "Which of Jesus's early actions caused the Pharisees to immediately consult with the Herodians on how they might destroy Him?",
            "options": ["Healing on the Sabbath in the synagogue", "Cleansing the Temple", "Eating with tax collectors and sinners", "Calling Levi the tax collector"],
            "correct": "Healing on the Sabbath in the synagogue (healing the man with the withered hand)",
            "reference": "Mark 3:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the Aramaic phrase recorded for Jesus's cry on the cross (Mark 15:34)?",
            "options": ["Eloi, Eloi, lema sabachthani?", "Abba, Father", "Talitha koum", "Korban"],
            "correct": "Eloi, Eloi, lema sabachthani?",
            "reference": "Mark 15:34",
            "difficulty": "Extreme"
        },
        {
            "question": "Mark's Gospel is generally believed to be closely associated with the preaching and recollections of which apostle?",
            "options": ["John", "Matthew", "Peter", "Paul"],
            "correct": "Peter",
            "reference": "External historical tradition (e.g., Papias)",
            "difficulty": "Extreme"
        },
        {
            "question": "What does the little girl's Aramaic name, *Talitha koum*, mean, after Jesus raised her from the dead?",
            "options": ["Daughter, arise", "Little lamb, wake up", "Little girl, I say to you, arise", "Child of God, be well"],
            "correct": "Little girl, I say to you, arise",
            "reference": "Mark 5:41",
            "difficulty": "Extreme"
        },
        {
            "question": "When Jesus cleanses the Temple, He quotes the Old Testament, saying, 'Is it not written, 'My house shall be called a house of prayer for all nations'? But you have made it a **_________**.'",
            "options": ["Den of vipers", "Den of thieves", "Marketplace of the rich", "Place of unholy sacrifices"],
            "correct": "Den of thieves",
            "reference": "Mark 11:17",
            "difficulty": "Extreme"
        },
        {
            "question": "In the Olivet Discourse (Mark 13), Jesus says that the knowledge of the exact time of His return is known only by whom?",
            "options": ["The prophets of old", "The Son (Jesus) Himself", "The Father", "The Angel of the Lord"],
            "correct": "The Father",
            "reference": "Mark 13:32",
            "difficulty": "Extreme"
        },
        {
            "question": "When Jesus foretells His betrayal, He mentions that the person who betrays Him will do so with Him putting his hand in the **_________**.",
            "options": ["Moneybag", "Dish", "Coffer", "Pharisee's lap"],
            "correct": "Dish",
            "reference": "Mark 14:20",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action did the young man wearing only a linen cloth do when Jesus was arrested in Gethsemane?",
            "options": ["He ran away, leaving his linen cloth behind", "He tried to fight the guards", "He hid in terror", "He gathered his children"],
            "correct": "He ran away, leaving his linen cloth behind",
            "reference": "Mark 14:51-52",
            "difficulty": "Extreme"
        }
    ]
}
  {
    "book": "Luke",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Gospel of Luke is dedicated to a specific person. What is his name?",
            "options": ["Theophilus", "Cornelius", "Titus", "Felix"],
            "correct": "Theophilus",
            "reference": "Luke 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "Luke's Gospel is considered one of the Synoptic Gospels. Which other New Testament book did Luke also write?",
            "options": ["Romans", "Acts", "Hebrews", "John"],
            "correct": "Acts",
            "reference": "Acts 1:1-2 and historical context",
            "difficulty": "Moderate"
        },
        {
            "question": "What title does Luke most often emphasize regarding Jesus, stressing His universal appeal and perfect humanity?",
            "options": ["Son of God", "Messiah", "Son of David", "Son of Man"],
            "correct": "Son of Man",
            "reference": "The title is used frequently, emphasizing humanity and salvation for all",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific class of people is given special attention and prominence in Luke's Gospel (e.g., in the parables and teachings)?",
            "options": ["The Pharisees", "The wealthy and powerful", "The poor, women, and sinners", "The Scribes"],
            "correct": "The poor, women, and sinners",
            "reference": "Overall theme (e.g., Parable of Lazarus and the rich man, focus on women like Mary Magdalene, Anna, etc.)",
            "difficulty": "Moderate"
        },
        {
            "question": "Which two elderly figures recognized the infant Jesus in the Temple when He was presented by His parents?",
            "options": ["Mary and Joseph", "Peter and John", "Simeon and Anna", "Zacharias and Elizabeth"],
            "correct": "Simeon and Anna",
            "reference": "Luke 2:25-38",
            "difficulty": "Moderate"
        },
        {
            "question": "What famous parable, unique to Luke, features a father dividing his inheritance between his two sons, one of whom leaves and returns repentantly?",
            "options": ["The Parable of the Lost Sheep", "The Parable of the Sower", "The Parable of the Prodigal Son", "The Parable of the Good Samaritan"],
            "correct": "The Parable of the Prodigal Son",
            "reference": "Luke 15:11-32",
            "difficulty": "Moderate"
        },
        {
            "question": "What physical ailment did the father of John the Baptist, Zacharias, suffer until the time of his son's birth?",
            "options": ["Blindness", "Lame", "Deafness and muteness (inability to speak)", "Leprosy"],
            "correct": "Deafness and muteness (inability to speak)",
            "reference": "Luke 1:20, 62-64",
            "difficulty": "Moderate"
        },
        {
            "question": "In the Sermon on the Plain, what word does Jesus use repeatedly at the beginning of the Beatitudes (e.g., 'Blessed are you who are poor')?",
            "options": ["Woe", "Happy", "Truly", "Blessed"],
            "correct": "Blessed",
            "reference": "Luke 6:20",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the occupation of the wealthy tax collector named Zacchaeus, whom Jesus visited in Jericho?",
            "options": ["Fisherman", "Chief tax collector", "Farmer", "Carpenter"],
            "correct": "Chief tax collector",
            "reference": "Luke 19:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What famous event, unique to Luke, did Jesus's disciples witness as they walked from Jerusalem after the resurrection?",
            "options": ["The appearance of the Angel Gabriel", "The road to Emmaus encounter", "The healing of the blind man", "The great catch of fish"],
            "correct": "The road to Emmaus encounter",
            "reference": "Luke 24:13-35",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Luke traces Jesus's genealogy back to which ultimate figure, emphasizing the universality of His Messianic claim?",
            "options": ["Abraham", "David", "Adam", "Noah"],
            "correct": "Adam",
            "reference": "Luke 3:38",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used in the parable of the Good Samaritan to describe the man's destination and the group he encountered first?",
            "options": ["Going from Jerusalem to Jericho, he was ignored by a priest", "Going from Galilee to Judea, he was ignored by a Levite", "Traveling to Samaria, he was ignored by a Scribe", "Going to the Temple, he was ignored by a Pharisee"],
            "correct": "Going from Jerusalem to Jericho, he was ignored by a priest",
            "reference": "Luke 10:30-31",
            "difficulty": "Hard"
        },
        {
            "question": "In the Parable of the Rich Man and Lazarus, what is the name of the place where the rich man found himself suffering?",
            "options": ["Sheol (Hades)", "Gehenna", "The Pit", "Tartarus"],
            "correct": "Sheol (Hades)",
            "reference": "Luke 16:23",
            "difficulty": "Hard"
        },
        {
            "question": "What unusual circumstance is mentioned regarding the healing of ten lepers (Luke 17:11-19)?",
            "options": ["Only one was healed immediately", "Only the Samaritan among them returned to give thanks", "They were all Jewish", "They were all healed by the power of Peter"],
            "correct": "Only the Samaritan among them returned to give thanks",
            "reference": "Luke 17:16",
            "difficulty": "Hard"
        },
        {
            "question": "When Mary visited Elizabeth, what specific hymn or prayer did Mary speak that is often referred to by its Latin name?",
            "options": ["Magnificat", "Nunc Dimittis", "Benedictus", "Gloria in Excelsis Deo"],
            "correct": "Magnificat",
            "reference": "Luke 1:46-55",
            "difficulty": "Hard"
        },
        {
            "question": "When Jesus was speaking to His disciples about the days of the Son of Man, He warned that 'Whoever seeks to preserve his life will lose it, but whoever loses his life will keep it.' He used a famous figure from the past to warn them against looking back. Who was it?",
            "options": ["Lot's wife", "The Israelites leaving Egypt", "Noah's contemporaries", "Jonah"],
            "correct": "Lot's wife",
            "reference": "Luke 17:32",
            "difficulty": "Hard"
        },
        {
            "question": "When Jesus was teaching in the temple courts, He told a parable about a man who planned to build a tower and a king who planned to go to war. What was the common moral of both illustrations?",
            "options": ["Always trust God", "Count the cost (or 'sit down first and count the cost')", "Do not fight your enemies", "Build on a rock"],
            "correct": "Count the cost (or 'sit down first and count the cost')",
            "reference": "Luke 14:28-32",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item did the woman with a flow of blood touch to be instantly healed?",
            "options": ["Jesus's hand", "The hem of Jesus's garment (or cloak)", "The ground He walked on", "The Temple gate"],
            "correct": "The hem of Jesus's garment (or cloak)",
            "reference": "Luke 8:44",
            "difficulty": "Hard"
        },
        {
            "question": "During the final stages of Jesus's trial, which two secular rulers did Jesus appear before according to Luke's account?",
            "options": ["Pilate and the Roman Centurion", "Pilate and Herod Antipas", "Pilate and Caiaphas", "Pilate and the Sanhedrin"],
            "correct": "Pilate and Herod Antipas",
            "reference": "Luke 23:7-11",
            "difficulty": "Hard"
        },
        {
            "question": "Luke records one of Jesus's final acts before His ascension. What instruction did He give His disciples about the Holy Spirit?",
            "options": ["Go immediately to Judea", "Wait in the city until you are clothed with power from on high", "Preach to all nations immediately", "Go and baptize"],
            "correct": "Wait in the city until you are clothed with power from on high",
            "reference": "Luke 24:49",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What was the name of the angel who appeared to Mary to announce the birth of Jesus and later appeared to Zacharias?",
            "options": ["Michael", "Raphael", "Gabriel", "Uriel"],
            "correct": "Gabriel",
            "reference": "Luke 1:19, 26",
            "difficulty": "Extreme"
        },
        {
            "question": "Luke includes a saying of Jesus unique to his Gospel, where Jesus says that the Pharisees 'strain out a gnat, but swallow a **_________**.'",
            "options": ["Camel", "Fly", "Worm", "Spider"],
            "correct": "Camel",
            "reference": "Luke 18:24 (Note: This saying is also in Matthew, but the context is different in Luke's account of the Rich Young Ruler)",
            "difficulty": "Extreme"
        },
        {
            "question": "When Jesus began His public ministry in the synagogue in Nazareth, He read from the scroll of which prophet?",
            "options": ["Jeremiah", "Ezekiel", "Isaiah", "Daniel"],
            "correct": "Isaiah",
            "reference": "Luke 4:17",
            "difficulty": "Extreme"
        },
        {
            "question": "After the seventy disciples returned and shared their joy, Jesus said He saw **_________** fall from heaven like lightning.",
            "options": ["A star", "Satan", "The Son of Man", "An angel"],
            "correct": "Satan",
            "reference": "Luke 10:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the unique parable in Luke about a persistent widow who keeps coming to a judge who 'neither feared God nor regarded man' until he finally granted her justice?",
            "options": ["The Parable of the Great Banquet", "The Parable of the Unjust Judge", "The Parable of the Lost Coin", "The Parable of the Lamp"],
            "correct": "The Parable of the Unjust Judge",
            "reference": "Luke 18:2-5",
            "difficulty": "Extreme"
        },
        {
            "question": "During the crucifixion, what specific petition did one of the criminals hanging beside Jesus make?",
            "options": ["Ask for a swift death", "Curse the Roman soldiers", "Remember me when You come into Your kingdom", "Call upon Your angels"],
            "correct": "Remember me when You come into Your kingdom",
            "reference": "Luke 23:42",
            "difficulty": "Extreme"
        },
        {
            "question": "What does Luke emphasize about Jesus's *prayer life*, showing Him praying at all the following key moments: baptism, before choosing the apostles, before the Transfiguration, and in Gethsemane?",
            "options": ["Jesus was always praying in the Temple", "Jesus often prayed in secret", "Prayer was essential to Jesus's ministry and relationship with the Father", "Jesus taught the disciples how to pray"],
            "correct": "Prayer was essential to Jesus's ministry and relationship with the Father",
            "reference": "Luke 3:21, 6:12, 9:28, 22:41 (Luke emphasizes Jesus's prayer life more than the other Synoptics)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific warning did Jesus give to Simon Peter before his denials?",
            "options": ["Satan has asked to have you, that he may sift you as wheat", "You will forget Me three times", "The rooster will crow twice", "You will never be a true apostle"],
            "correct": "Satan has asked to have you, that he may sift you as wheat",
            "reference": "Luke 22:31",
            "difficulty": "Extreme"
        },
        {
            "question": "Which specific Old Testament figure's story did Jesus refer to when He taught the crowd at Nazareth that no prophet is accepted in his own country?",
            "options": ["Elisha and the widow of Zarephath (Elijah is also referenced)", "Moses and the burning bush", "David and Goliath", "Jonah and Nineveh"],
            "correct": "Elisha and the widow of Zarephath (Elijah is also referenced)",
            "reference": "Luke 4:25-27",
            "difficulty": "Extreme"
        },
        {
            "question": "What unique physical manifestation of Jesus's stress does Luke describe during His prayer in Gethsemane?",
            "options": ["His face shone like the sun", "He was trembling violently", "His sweat became like great drops of blood falling down to the ground", "He fell asleep"],
            "correct": "His sweat became like great drops of blood falling down to the ground",
            "reference": "Luke 22:44",
            "difficulty": "Extreme"
        }
    ]
}
 {
    "book": "John",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Gospel of John opens by identifying Jesus with what divine title or concept?",
            "options": ["The Son of Man", "The Great Prophet", "The Word (Logos)", "The Messiah"],
            "correct": "The Word (Logos)",
            "reference": "John 1:1, 14",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary purpose of the miracles (signs) recorded in the Gospel of John?",
            "options": ["To show Jesus's compassion", "To fulfill Old Testament prophecies", "To reveal Jesus's divine glory and identity as the Son of God", "To attract large crowds"],
            "correct": "To reveal Jesus's divine glory and identity as the Son of God",
            "reference": "John 20:30-31",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the very first miracle (sign) that Jesus performed, according to John?",
            "options": ["Healing the official's son", "Turning water into wine at the wedding in Cana", "Cleansing the Temple", "Walking on water"],
            "correct": "Turning water into wine at the wedding in Cana",
            "reference": "John 2:1-11",
            "difficulty": "Moderate"
        },
        {
            "question": "Jesus had a famous nocturnal conversation with a Pharisee who was a member of the Sanhedrin. What was his name?",
            "options": ["Caiaphas", "Gamaliel", "Nicodemus", "Joseph of Arimathea"],
            "correct": "Nicodemus",
            "reference": "John 3:1-21",
            "difficulty": "Moderate"
        },
        {
            "question": "Jesus encountered a woman at a well in which region/city, leading to one of the most significant conversions in the Gospel?",
            "options": ["Jerusalem", "Galilee", "Samaria (Sychar)", "Tyre"],
            "correct": "Samaria (Sychar)",
            "reference": "John 4:5-42",
            "difficulty": "Moderate"
        },
        {
            "question": "What title does Jesus use seven times in John to claim divinity and a specific relationship to the Father (e.g., 'I am the bread of life,' 'I am the good shepherd')?",
            "options": ["The Messiah", "The Lamb of God", "The Son of Man", "I AM"],
            "correct": "I AM",
            "reference": "John 6:35, 8:12, 10:9, 10:11, 11:25, 14:6, 15:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the name of the man whom Jesus famously raised from the dead in Bethany?",
            "options": ["Lazarus", "Jairus", "Dorcas", "Eutychus"],
            "correct": "Lazarus",
            "reference": "John 11:1-44",
            "difficulty": "Moderate"
        },
        {
            "question": "When Jesus washes the disciples' feet, He gives them a 'new commandment.' What is it?",
            "options": ["Love one another as I have loved you", "Preach the Gospel to all nations", "Forgive one another seventy times seven", "Deny yourselves and follow Me"],
            "correct": "Love one another as I have loved you",
            "reference": "John 13:34",
            "difficulty": "Moderate"
        },
        {
            "question": "Who is the primary person Jesus refers to as the 'Helper' or 'Advocate' (Paraclete) who will be sent after He leaves?",
            "options": ["John the Baptist", "The Angel of the Lord", "The Holy Spirit", "The Apostle Peter"],
            "correct": "The Holy Spirit",
            "reference": "John 14:26",
            "difficulty": "Moderate"
        },
        {
            "question": "The resurrected Jesus encountered Peter and restored him by asking him three times if he loved Him, countering Peter's three denials. Where did this encounter take place?",
            "options": ["The Mount of Olives", "The Sea of Tiberias (Galilee)", "The Upper Room", "The road to Emmaus"],
            "correct": "The Sea of Tiberias (Galilee)",
            "reference": "John 21:1, 15-17",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "When John the Baptist saw Jesus, what specific sacrificial title did he proclaim regarding Jesus?",
            "options": ["The Great Shepherd", "The Son of God", "The Lamb of God who takes away the sin of the world", "The King of Israel"],
            "correct": "The Lamb of God who takes away the sin of the world",
            "reference": "John 1:29",
            "difficulty": "Hard"
        },
        {
            "question": "Nicodemus initially failed to grasp Jesus's teaching about what essential spiritual action?",
            "options": ["Forgiving others", "Being born again (or born from above)", "Giving to the poor", "Keeping the Law"],
            "correct": "Being born again (or born from above)",
            "reference": "John 3:3-4",
            "difficulty": "Hard"
        },
        {
            "question": "In the discourse on the Bread of Life (John 6), what specific demand of Jesus caused many of His disciples to turn back and no longer follow Him?",
            "options": ["To give away all their possessions", "To eat His flesh and drink His blood", "To go up to Jerusalem for the feast", "To abandon the Law of Moses"],
            "correct": "To eat His flesh and drink His blood",
            "reference": "John 6:53-66",
            "difficulty": "Hard"
        },
        {
            "question": "What was the official name of the pool where Jesus healed a man who had been an invalid for 38 years?",
            "options": ["The Pool of Siloam", "The Pool of Bethesda", "The Pool of Gihon", "The Pool of Kedron"],
            "correct": "The Pool of Bethesda",
            "reference": "John 5:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the teaching on the Good Shepherd, Jesus says He lays down His life for the sheep and also claims He has the power to do what regarding His life?",
            "options": ["To take it back up", "To keep it forever", "To give it to another", "To command it to rise"],
            "correct": "To take it back up",
            "reference": "John 10:18",
            "difficulty": "Hard"
        },
        {
            "question": "After the raising of Lazarus, which specific leader of the Sanhedrin unknowingly prophesied that 'it is better for one man to die for the people'?",
            "options": ["Nicodemus", "Annas", "Caiaphas (the high priest)", "Joseph of Arimathea"],
            "correct": "Caiaphas (the high priest)",
            "reference": "John 11:49-51",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Jesus uses in the Farewell Discourse to describe the devil's status regarding Him and His mission?",
            "options": ["The ruler of this world is coming, and he has nothing in Me", "He is defeated", "He has no power over Me", "He is the accuser of the brethren"],
            "correct": "The ruler of this world is coming, and he has nothing in Me",
            "reference": "John 14:30",
            "difficulty": "Hard"
        },
        {
            "question": "What is the key evidence given in John's Gospel to show that the dead man on the cross was already dead when the soldiers approached?",
            "options": ["He had stopped breathing", "His side was pierced, and blood and water flowed out", "He was pale", "The sun had set"],
            "correct": "His side was pierced, and blood and water flowed out",
            "reference": "John 19:34",
            "difficulty": "Hard"
        },
        {
            "question": "Which disciple was the first to enter the empty tomb on the morning of the resurrection, though he did not fully understand yet?",
            "options": ["Mary Magdalene", "Peter", "The disciple whom Jesus loved (John)", "Thomas"],
            "correct": "The disciple whom Jesus loved (John)",
            "reference": "John 20:5-8",
            "difficulty": "Hard"
        },
        {
            "question": "Which disciple confessed 'My Lord and my God!' after being invited to touch Jesus's wounds?",
            "options": ["Peter", "Andrew", "Thomas", "Philip"],
            "correct": "Thomas",
            "reference": "John 20:28",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Jesus says to the Pharisees, 'Before **_________** was, I am.'",
            "options": ["The Law", "The world", "Abraham", "The prophets"],
            "correct": "Abraham",
            "reference": "John 8:58",
            "difficulty": "Extreme"
        },
        {
            "question": "The Jewish authorities were plotting to kill Lazarus after Jesus raised him from the dead for what reason?",
            "options": ["Lazarus was now teaching heresy", "Lazarus was attracting many people to believe in Jesus", "Lazarus was claiming to be the Messiah", "Lazarus was stealing from the Temple"],
            "correct": "Lazarus was attracting many people to believe in Jesus",
            "reference": "John 12:10-11",
            "difficulty": "Extreme"
        },
        {
            "question": "In the upper room, Jesus said to one of the disciples, 'You cannot follow me now, but you will follow afterward.' Which disciple was this?",
            "options": ["Thomas", "Peter", "Judas (not Iscariot)", "Philip"],
            "correct": "Peter",
            "reference": "John 13:36",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific type of miraculous healing that Jesus performs on a man in John 9, leading to the man's immediate interrogation by the Pharisees?",
            "options": ["Healing a man born blind", "Healing a paralyzed man", "Healing a leper", "Healing a boy with an unclean spirit"],
            "correct": "Healing a man born blind",
            "reference": "John 9:1-7",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Jesus uses to describe His peace (or what He does *not* give) to His disciples?",
            "options": ["Peace I leave with you; My peace I give to you. Not as the world gives do I give to you", "My peace is everlasting", "The peace of God that surpasses all understanding", "I give you rest from your burdens"],
            "correct": "Peace I leave with you; My peace I give to you. Not as the world gives do I give to you",
            "reference": "John 14:27",
            "difficulty": "Extreme"
        },
        {
            "question": "Which disciple, at the time of Jesus's arrest, drew a sword and cut off the ear of the high priest's servant?",
            "options": ["Peter", "James", "Andrew", "Thomas"],
            "correct": "Peter",
            "reference": "John 18:10",
            "difficulty": "Extreme"
        },
        {
            "question": "The prologue of John states that the Word (Jesus) was in the world, and the world did not know Him, but He came to His own, and His own did not **_________** Him.",
            "options": ["Love", "Receive", "Obey", "Believe"],
            "correct": "Receive",
            "reference": "John 1:10-11",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific amount of spices (myrrh and aloes) brought by Nicodemus and Joseph of Arimathea for Jesus's burial?",
            "options": ["Fifty pounds", "One hundred pounds", "Seventy-five pounds", "Ten pounds"],
            "correct": "One hundred pounds",
            "reference": "John 19:39",
            "difficulty": "Extreme"
        },
        {
            "question": "Jesus said that if we truly believe in Him, what will flow out of our innermost being?",
            "options": ["The Holy Spirit", "Rivers of living water", "Truth and light", "Love and peace"],
            "correct": "Rivers of living water",
            "reference": "John 7:38",
            "difficulty": "Extreme"
        },
        {
            "question": "What command did Jesus give Mary Magdalene when she recognized Him after the resurrection?",
            "options": ["Go and tell the Pharisees", "Do not cling to Me, for I have not yet ascended to My Father", "Go and prepare a meal", "Tell the disciples to meet Me in Galilee"],
            "correct": "Do not cling to Me, for I have not yet ascended to My Father",
            "reference": "John 20:17",
            "difficulty": "Extreme"
        }
    ]
}
 {
    "book": "Acts",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Book of Acts is the sequel to which Gospel?",
            "options": ["Matthew", "Mark", "Luke", "John"],
            "correct": "Luke",
            "reference": "Acts 1:1 and historical context",
            "difficulty": "Moderate"
        },
        {
            "question": "The Book of Acts is primarily about the spread of the Gospel following Jesus's ascension, focusing on the work of the apostles and which other key figure?",
            "options": ["John the Baptist", "Stephen the Deacon", "Paul the Apostle", "Mary Magdalene"],
            "correct": "Paul the Apostle",
            "reference": "Acts 9-28",
            "difficulty": "Moderate"
        },
        {
            "question": "What Jewish festival was being celebrated when the Holy Spirit descended upon the disciples in Jerusalem?",
            "options": ["Passover", "Yom Kippur", "Feast of Tabernacles", "Pentecost (Feast of Weeks)"],
            "correct": "Pentecost (Feast of Weeks)",
            "reference": "Acts 2:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was chosen by lot to replace Judas Iscariot as the twelfth apostle?",
            "options": ["Stephen", "Barnabas", "Matthias", "Titus"],
            "correct": "Matthias",
            "reference": "Acts 1:26",
            "difficulty": "Moderate"
        },
        {
            "question": "What miraculous event occurred as a sign of the Holy Spirit's arrival on the day of Pentecost?",
            "options": ["A great earthquake", "Speaking in different languages (tongues)", "Healing the sick", "Raising the dead"],
            "correct": "Speaking in different languages (tongues)",
            "reference": "Acts 2:4-6",
            "difficulty": "Moderate"
        },
        {
            "question": "Who was the first Christian martyr, stoned to death after giving a long speech about Israel's history?",
            "options": ["James, son of Zebedee", "Peter", "Stephen", "Barnabas"],
            "correct": "Stephen",
            "reference": "Acts 7:54-60",
            "difficulty": "Moderate"
        },
        {
            "question": "What was the name of the man who, before his conversion, persecuted Christians and later became Paul the Apostle?",
            "options": ["Cornelius", "Barnabas", "Saul of Tarsus", "Ananias"],
            "correct": "Saul of Tarsus",
            "reference": "Acts 8:3, 9:1-19",
            "difficulty": "Moderate"
        },
        {
            "question": "In the Book of Acts, what city was Paul traveling to when he encountered Jesus in a blinding light?",
            "options": ["Jerusalem", "Antioch", "Damascus", "Rome"],
            "correct": "Damascus",
            "reference": "Acts 9:3",
            "difficulty": "Moderate"
        },
        {
            "question": "Which Gentile Roman Centurion, living in Caesarea, was the first recorded Gentile convert and recipient of the Holy Spirit?",
            "options": ["Felix", "Agrippa", "Cornelius", "Festus"],
            "correct": "Cornelius",
            "reference": "Acts 10:1-48",
            "difficulty": "Moderate"
        },
        {
            "question": "What significant council was held in Jerusalem to settle the dispute over whether Gentile converts needed to be circumcised and follow the Law of Moses?",
            "options": ["The Council of Nicea", "The Sanhedrin Council", "The Apostolic Council of Jerusalem", "The Council of Antioch"],
            "correct": "The Apostolic Council of Jerusalem",
            "reference": "Acts 15:1-35",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What were the names of the husband and wife who were struck dead after lying to the Holy Spirit about the price of land they sold?",
            "options": ["Aquila and Priscilla", "Felix and Drusilla", "Ananias and Sapphira", "Barnabas and Mary"],
            "correct": "Ananias and Sapphira",
            "reference": "Acts 5:1-11",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament prophet's prophecy did Peter quote on the Day of Pentecost to explain the supernatural phenomena?",
            "options": ["Isaiah", "Malachi", "Joel", "Amos"],
            "correct": "Joel",
            "reference": "Acts 2:16 (Joel 2:28-32)",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the sorcerer whom Paul blinded on the island of Cyprus?",
            "options": ["Simon Magus", "Elymas (Bar-Jesus)", "Demetrius", "Sceva"],
            "correct": "Elymas (Bar-Jesus)",
            "reference": "Acts 13:6-12",
            "difficulty": "Hard"
        },
        {
            "question": "What Roman magistrate (governor) was Paul imprisoned under for two years in Caesarea, who ultimately handed him over to his successor?",
            "options": ["Sergius Paulus", "Herod Agrippa", "Felix", "Festus"],
            "correct": "Felix",
            "reference": "Acts 24:27",
            "difficulty": "Hard"
        },
        {
            "question": "What specific prophetic warning (which was later fulfilled) did the prophet Agabus give concerning Paul's coming imprisonment in Jerusalem?",
            "options": ["Paul would be killed by the Jews", "Paul's chains would be light", "A famine would sweep the land", "He tied Paul's belt around his own hands and feet, saying the Jews would bind Paul and deliver him to the Gentiles",],
            "correct": "He tied Paul's belt around his own hands and feet, saying the Jews would bind Paul and deliver him to the Gentiles",
            "reference": "Acts 21:10-11",
            "difficulty": "Hard"
        },
        {
            "question": "In what city did Paul and Silas preach and pray while imprisoned, causing an earthquake that shook open the prison doors?",
            "options": ["Ephesus", "Philippi", "Thessalonica", "Corinth"],
            "correct": "Philippi",
            "reference": "Acts 16:25-26",
            "difficulty": "Hard"
        },
        {
            "question": "What was the occupation of the wealthy woman named Lydia, converted in Philippi, who offered her home to Paul and Silas?",
            "options": ["A potter", "A seller of purple goods", "A baker", "A money changer"],
            "correct": "A seller of purple goods",
            "reference": "Acts 16:14",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the philosopher's meeting place in Athens where Paul delivered his famous sermon about the 'Unknown God'?",
            "options": ["The Agora", "The Parthenon", "The Areopagus (Mars Hill)", "The Lyceum"],
            "correct": "The Areopagus (Mars Hill)",
            "reference": "Acts 17:19-22",
            "difficulty": "Hard"
        },
        {
            "question": "What group of people in Berea were praised as being more noble because they 'searched the Scriptures daily to see if these things were so'?",
            "options": ["The Gentiles", "The Jews", "The Greeks", "The Romans"],
            "correct": "The Jews (Berea was a Jewish synagogue)",
            "reference": "Acts 17:11",
            "difficulty": "Hard"
        },
        {
            "question": "In the early church, who was the prominent deacon who was sent to Samaria to preach, and later baptized the Ethiopian eunuch?",
            "options": ["Stephen", "Barnabas", "Philip", "Silas"],
            "correct": "Philip",
            "reference": "Acts 8:5, 26",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific Greek term (translated as 'daily') did the early Christians use to describe their communal gathering and breaking of bread in the Temple and in their homes?",
            "options": ["*Koinonia*", "*Didache*", "*Merismos*", "*Koinos*"],
            "correct": "*Koinonia* (Fellowship/sharing, also *kath' hēmeran* which means daily is used for 'daily in the temple')",
            "reference": "Acts 2:42, 46",
            "difficulty": "Extreme"
        },
        {
            "question": "What Jewish religious sect, known for denying the resurrection, was consistently opposed to Peter and the apostles' preaching?",
            "options": ["Pharisees", "Sadducees", "Essenes", "Herodians"],
            "correct": "Sadducees",
            "reference": "Acts 4:1-2; 5:17",
            "difficulty": "Extreme"
        },
        {
            "question": "Who was the renowned Jewish teacher and member of the Sanhedrin who advised the council not to persecute the apostles, suggesting their work would fail if it wasn't of God?",
            "options": ["Rabbi Akiva", "Gamaliel", "Caiaphas", "Hillel"],
            "correct": "Gamaliel",
            "reference": "Acts 5:34-39",
            "difficulty": "Extreme"
        },
        {
            "question": "When Paul and Barnabas faced opposition in Iconium and Lystra, which specific deities did the people claim they were, based on their miracles?",
            "options": ["Apollo and Zeus", "Hermes and Apollo", "Zeus and Hermes", "Ares and Athena"],
            "correct": "Zeus and Hermes",
            "reference": "Acts 14:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the name of the young man in Troas who fell asleep, fell out of a third-story window, and was raised from the dead by Paul?",
            "options": ["Eunice", "Apollos", "Eutychus", "Tychicus"],
            "correct": "Eutychus",
            "reference": "Acts 20:9-12",
            "difficulty": "Extreme"
        },
        {
            "question": "What legal declaration did Paul make to the Roman centurion in Jerusalem to prevent his scourging?",
            "options": ["He was innocent", "He was an apostle", "He was a Roman citizen", "He was a Pharisee"],
            "correct": "He was a Roman citizen",
            "reference": "Acts 22:25-29",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific commitment, made by James and the elders in Jerusalem, did Paul take on to show he still respected Jewish customs before his arrest?",
            "options": ["To circumcise Timothy", "To take a Nazirite vow and pay the expenses for four men to shave their heads", "To offer a sacrifice of atonement", "To fast for seven days"],
            "correct": "To take a Nazirite vow and pay the expenses for four men to shave their heads",
            "reference": "Acts 21:23-26",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the official outcome of Paul's two years of imprisonment in Rome, as described in the final verses of Acts?",
            "options": ["He was executed", "He was acquitted and released", "He preached the kingdom of God and taught about the Lord Jesus Christ quite openly and unhindered", "He escaped"],
            "correct": "He preached the kingdom of God and taught about the Lord Jesus Christ quite openly and unhindered",
            "reference": "Acts 28:30-31",
            "difficulty": "Extreme"
        },
        {
            "question": "In Peter's vision before visiting Cornelius, what command was given to him regarding the sheet full of clean and unclean animals?",
            "options": ["To pray over the animals", "To worship the animals", "To rise, kill, and eat", "To count the animals"],
            "correct": "To rise, kill, and eat",
            "reference": "Acts 10:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What was the profession of the seven sons of Sceva who were severely beaten by a demon after attempting to exorcise it using the name of Jesus and Paul?",
            "options": ["Fishermen", "Traveling exorcists (Jewish chief priests)", "Tentmakers", "Scribes"],
            "correct": "Traveling exorcists (Jewish chief priests)",
            "reference": "Acts 19:13-16",
            "difficulty": "Extreme"
        }
    ]
}

  // --- EPISTLES ---
{
    "book": "Romans",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Epistle to the Romans was written by which Apostle?",
            "options": ["Peter", "John", "Paul", "James"],
            "correct": "Paul",
            "reference": "Romans 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary theological theme is central to the first five chapters of Romans?",
            "options": ["The power of the Holy Spirit", "The importance of good works", "Justification (righteousness) by faith alone", "The structure of the early church"],
            "correct": "Justification (righteousness) by faith alone",
            "reference": "Romans 1:17; 3:28; 5:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that the Gospel is the power of God for salvation to everyone who believes, to the Jew first and also to the **_________**.",
            "options": ["Gentile (or Greek)", "Roman", "Samaritan", "Slave"],
            "correct": "Gentile (or Greek)",
            "reference": "Romans 1:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific Old Testament patriarch does Paul use as the primary example of a person justified by faith, not by works of the Law?",
            "options": ["Moses", "Noah", "Abraham", "David"],
            "correct": "Abraham",
            "reference": "Romans 4:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "According to Romans 5:1, what is the result for believers who are justified by faith?",
            "options": ["Peace with God through our Lord Jesus Christ", "Eternal reward", "A place in the kingdom", "Perfect obedience"],
            "correct": "Peace with God through our Lord Jesus Christ",
            "reference": "Romans 5:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul declares that nothing can separate us from the love of God. Which of the following is *not* listed as being unable to separate us?",
            "options": ["Death nor life", "Angels nor demons", "Past mistakes", "Height nor depth"],
            "correct": "Past mistakes",
            "reference": "Romans 8:38-39",
            "difficulty": "Moderate"
        },
        {
            "question": "In Romans 6, Paul teaches that believers have died to sin and are 'united' with Christ in what event?",
            "options": ["His birth", "His baptism", "His death and resurrection", "His ascension"],
            "correct": "His death and resurrection",
            "reference": "Romans 6:4-5",
            "difficulty": "Moderate"
        },
        {
            "question": "In Romans 12, Paul instructs believers not to be conformed to this world, but to be transformed by what process?",
            "options": ["Keeping the Sabbath", "The renewing of your mind", "Fasting and prayer", "Giving to the poor"],
            "correct": "The renewing of your mind",
            "reference": "Romans 12:2",
            "difficulty": "Moderate"
        },
        {
            "question": "What did Paul identify as the end (purpose/goal) of the Law?",
            "options": ["Righteousness for everyone who believes (Christ is the end of the law)", "To show us our sin", "To make us good", "To bring prosperity"],
            "correct": "Righteousness for everyone who believes (Christ is the end of the law)",
            "reference": "Romans 10:4",
            "difficulty": "Moderate"
        },
        {
            "question": "In Romans 13, Paul instructs believers to be subject to which governing entity?",
            "options": ["The Church leaders", "The synagogue elders", "The governing authorities (or higher powers)", "The local magistrates"],
            "correct": "The governing authorities (or higher powers)",
            "reference": "Romans 13:1",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul argues that humanity is without excuse because God's invisible attributes are clearly perceived through what means?",
            "options": ["The Law of Moses", "The works that have been made (creation)", "The voices of the prophets", "The testimony of angels"],
            "correct": "The works that have been made (creation)",
            "reference": "Romans 1:20",
            "difficulty": "Hard"
        },
        {
            "question": "Paul teaches that the Law entered so that the trespass might increase. What immediately followed this increase?",
            "options": ["The failure of Israel", "Where sin increased, grace abounded much more", "God sent the prophets", "The exile of Judah"],
            "correct": "Where sin increased, grace abounded much more",
            "reference": "Romans 5:20",
            "difficulty": "Hard"
        },
        {
            "question": "According to Romans 7, what is the role of the Law in the context of sin?",
            "options": ["The Law makes us righteous", "The Law proves our faith", "The Law brings blessing", "The Law makes sin appear truly sinful and reveals it"],
            "correct": "The Law makes sin appear truly sinful and reveals it",
            "reference": "Romans 7:7, 13",
            "difficulty": "Hard"
        },
        {
            "question": "In Romans 8, what part of creation is described as 'groaning' and eagerly waiting for its deliverance and the revealing of the sons of God?",
            "options": ["The stars and planets", "The Holy Spirit", "Creation itself", "The Jewish people"],
            "correct": "Creation itself",
            "reference": "Romans 8:22",
            "difficulty": "Hard"
        },
        {
            "question": "What is the order of the five points in the famous 'Golden Chain' of salvation described in Romans 8:29-30?",
            "options": ["Called, Foreknown, Justified, Glorified, Conformed", "Foreknown, Predestined, Called, Justified, Glorified", "Chosen, Called, Saved, Sanctified, Perfected", "Loved, Called, Justified, Adopted, Glorified"],
            "correct": "Foreknown, Predestined, Called, Justified, Glorified",
            "reference": "Romans 8:29-30",
            "difficulty": "Hard"
        },
        {
            "question": "The Jewish rejection of the Gospel is compared to what action regarding the cultivated olive tree?",
            "options": ["A wild branch being cut off", "A main branch being broken off to allow wild branches (Gentiles) to be grafted in", "The whole tree dying", "The tree bearing no fruit"],
            "correct": "A main branch being broken off to allow wild branches (Gentiles) to be grafted in",
            "reference": "Romans 11:17-24",
            "difficulty": "Hard"
        },
        {
            "question": "Paul emphasizes that the Jewish people's current stumbling is partial and temporary until what specific event occurs?",
            "options": ["Until they repent of their sin", "Until the fullness of the Gentiles has come in", "Until the Messiah returns", "Until the Temple is rebuilt"],
            "correct": "Until the fullness of the Gentiles has come in",
            "reference": "Romans 11:25",
            "difficulty": "Hard"
        },
        {
            "question": "In Romans 12:1, Paul asks believers to present their bodies as a 'living sacrifice.' What specific quality is given to this action?",
            "options": ["It is reasonable (spiritual) worship", "It is proof of our faith", "It is pleasing to God", "It is the greatest commandment"],
            "correct": "It is reasonable (spiritual) worship",
            "reference": "Romans 12:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action is mentioned as the fulfillment of the Law in Romans 13:10?",
            "options": ["Love your neighbor as yourself", "Belief in Jesus Christ", "Keeping the Sabbath holy", "Giving to the poor"],
            "correct": "Love your neighbor as yourself",
            "reference": "Romans 13:9-10",
            "difficulty": "Hard"
        },
        {
            "question": "What is the common term used to describe the portion of Romans (chapters 1-11) that deals with theological doctrine, contrasted with the practical application (chapters 12-16)?",
            "options": ["The Exhortation", "The Didactic Section", "The Hortatory", "The Great Divide"],
            "correct": "The Didactic Section",
            "reference": "Scholarly division of the book's structure",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific Old Testament ritual/act, performed on the eighth day, does Paul argue is irrelevant for justification?",
            "options": ["Sacrifice", "Circumcision", "Sabbath observance", "Feast of Tabernacles"],
            "correct": "Circumcision",
            "reference": "Romans 2:25-29; 3:30; 4:9-12",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says that death reigned from Adam until Moses, even over those who had not sinned how?",
            "options": ["By not believing the promise", "In the likeness of Adam’s transgression", "By breaking the Law (as it was not yet given)", "By serving idols"],
            "correct": "In the likeness of Adam’s transgression",
            "reference": "Romans 5:14",
            "difficulty": "Extreme"
        },
        {
            "question": "In Romans 9:3, Paul expresses his willingness to be **_________** from Christ for the sake of his fellow Israelites.",
            "options": ["Sent away", "Forgotten", "Cut off (or accursed)", "Killed"],
            "correct": "Cut off (or accursed)",
            "reference": "Romans 9:3",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that 'the gift of God is eternal life in Christ Jesus our Lord.' What contrasting element is paired with this gift in the same verse?",
            "options": ["The strength of the flesh", "The wages of sin is death", "The curse of the Law", "The failure of the world"],
            "correct": "The wages of sin is death",
            "reference": "Romans 6:23",
            "difficulty": "Extreme"
        },
        {
            "question": "What two rhetorical questions does Paul ask in Romans 8 to emphasize the security of the believer?",
            "options": ["Who will condemn us? Who will accuse us?", "Who shall separate us from the love of Christ? Who will bring any charge against God’s elect?", "What shall we say? What shall we do?", "Is God unjust? Is the Law evil?"],
            "correct": "Who shall separate us from the love of Christ? Who will bring any charge against God’s elect?",
            "reference": "Romans 8:33, 35",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific description of God’s nature that Paul uses to explain why God has mercy on whom He wills and hardens whom He wills?",
            "options": ["He is the judge of all the earth", "The potter has the right over the clay", "He is just and true", "He is patient with sinners"],
            "correct": "The potter has the right over the clay",
            "reference": "Romans 9:21",
            "difficulty": "Extreme"
        },
        {
            "question": "In Romans 11:36, Paul concludes his doctrinal section with a grand doxology stating that from Him and through Him and to Him are all things. What is the concluding phrase?",
            "options": ["To Him be glory forever. Amen.", "The Lord reigns forever", "This is the mystery of God", "Let the earth rejoice"],
            "correct": "To Him be glory forever. Amen.",
            "reference": "Romans 11:36",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul identifies himself as a 'servant of Christ Jesus, called to be an apostle, set apart for the Gospel of God.' What specific action did he perform to confirm his apostolic authority, as described in the first chapter?",
            "options": ["He healed the sick", "He preached with signs and wonders", "He received the Holy Spirit", "He wrote the letters"],
            "correct": "He wrote the letters",
            "reference": "Romans 1:1 (Though Paul refers to himself as set apart by divine action)",
            "difficulty": "Extreme"
        },
        {
            "question": "What does Paul instruct believers to do if their enemy is hungry or thirsty?",
            "options": ["Ignore them", "Feed him or give him drink", "Pray for him", "Give him strong counsel"],
            "correct": "Feed him or give him drink",
            "reference": "Romans 12:20",
            "difficulty": "Extreme"
        },
        {
            "question": "In the final greetings, Paul refers to two women as 'my fellow workers in Christ Jesus' and 'our sister, who is a servant of the church.' What are their names?",
            "options": ["Priscilla and Aquila", "Mary and Martha", "Phoebe and Priscilla", "Euodia and Syntyche"],
            "correct": "Phoebe and Priscilla",
            "reference": "Romans 16:1, 3",
            "difficulty": "Extreme"
        }
    ]
}
 {
    "book": "1 Corinthians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary problem Paul addresses in the early chapters of 1 Corinthians?",
            "options": ["A dispute over the location of the next missionary journey", "Divisions and factions within the church based on allegiance to different leaders", "The necessity of Gentile circumcision", "Sexual immorality in the city"],
            "correct": "Divisions and factions within the church based on allegiance to different leaders",
            "reference": "1 Corinthians 1:10-12",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul declares that he and the other apostles preach 'Christ crucified,' which he says is a stumbling block to Jews and what to Gentiles?",
            "options": ["Wisdom", "Power", "Foolishness", "Weakness"],
            "correct": "Foolishness",
            "reference": "1 Corinthians 1:23",
            "difficulty": "Moderate"
        },
        {
            "question": "What kind of severe immorality was being tolerated by the church, prompting Paul to order the offender to be removed?",
            "options": ["Idolatry", "Theft", "A man sleeping with his stepmother (incest)", "Rebellion against the elders"],
            "correct": "A man sleeping with his stepmother (incest)",
            "reference": "1 Corinthians 5:1-5",
            "difficulty": "Moderate"
        },
        {
            "question": "In 1 Corinthians 6, Paul condemns believers for settling their disputes by doing what?",
            "options": ["Fighting in the streets", "Ignoring the elders", "Taking one another to court before unbelievers", "Holding a public debate"],
            "correct": "Taking one another to court before unbelievers",
            "reference": "1 Corinthians 6:1-8",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the central theme of 1 Corinthians 7?",
            "options": ["The use of spiritual gifts", "Instructions regarding marriage and singleness", "The resurrection of the dead", "Eating food offered to idols"],
            "correct": "Instructions regarding marriage and singleness",
            "reference": "1 Corinthians 7:1-40",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul argues that when eating meat sacrificed to idols, the primary concern should be for what group of people?",
            "options": ["The pagan priests", "Those who sold the meat", "Those whose weak conscience might be harmed (a brother's conscience)", "The elders of the church"],
            "correct": "Those whose weak conscience might be harmed (a brother's conscience)",
            "reference": "1 Corinthians 8:9-13",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific piece of clothing or covering does Paul discuss regarding women praying and prophesying in public worship?",
            "options": ["A veil or head covering", "A tunic", "A robe", "A stole"],
            "correct": "A veil or head covering",
            "reference": "1 Corinthians 11:5-6",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that when Christians take communion, they are proclaiming what event?",
            "options": ["The Lord's return", "The Lord's death till He comes", "The Lord's supper", "The Lord's resurrection"],
            "correct": "The Lord's death till He comes",
            "reference": "1 Corinthians 11:26",
            "difficulty": "Moderate"
        },
        {
            "question": "In the famous 'Love Chapter,' Paul states that if he has faith to remove mountains, but does not have love, he is what?",
            "options": ["A noisy gong or a clanging cymbal", "Nothing", "Still righteous", "A stumbling block"],
            "correct": "Nothing (often understood as the *person* is nothing, or 'gains nothing')",
            "reference": "1 Corinthians 13:2-3",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the very last enemy that will be destroyed, according to Paul's teaching on the resurrection?",
            "options": ["The devil", "Death", "Sin", "The Law"],
            "correct": "Death",
            "reference": "1 Corinthians 15:26",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul summarizes the Gospel as the three historical facts that Christ died for our sins, was buried, and what else?",
            "options": ["He ascended to heaven", "He appeared to the apostles", "He was raised on the third day according to the Scriptures", "He will come again"],
            "correct": "He was raised on the third day according to the Scriptures",
            "reference": "1 Corinthians 15:3-4",
            "difficulty": "Hard"
        },
        {
            "question": "When Paul visited Corinth, he determined to know nothing among them except for what specific knowledge?",
            "options": ["The Law and the Prophets", "The love of God", "Jesus Christ and Him crucified", "The gifts of the Spirit"],
            "correct": "Jesus Christ and Him crucified",
            "reference": "1 Corinthians 2:2",
            "difficulty": "Hard"
        },
        {
            "question": "What does Paul instruct the church to do with the collection taken up for the saints in Jerusalem?",
            "options": ["Take it to Jerusalem immediately", "Set aside money on the first day of every week", "Keep it in a safe place until he arrives", "Spend it on the local church needs"],
            "correct": "Set aside money on the first day of every week",
            "reference": "1 Corinthians 16:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the discussion on the Lord's Supper, Paul notes that some members were getting drunk and others were going hungry, and attributes their sickness and death to what specific action?",
            "options": ["Lack of prayer", "Eating and drinking judgment on themselves by not discerning the Lord's body", "Not being baptized", "Failing to forgive others"],
            "correct": "Eating and drinking judgment on themselves by not discerning the Lord's body",
            "reference": "1 Corinthians 11:29-30",
            "difficulty": "Hard"
        },
        {
            "question": "Paul contrasts the two gifts of tongues and prophecy. He says that the one who prophesies does what three things?",
            "options": ["Speaks to God, is self-edifying, and speaks a mystery", "Edifies, exhorts, and comforts (or encourages) others", "Speaks clearly, boldly, and loudly", "Commands, teaches, and prays"],
            "correct": "Edifies, exhorts, and comforts (or encourages) others",
            "reference": "1 Corinthians 14:3",
            "difficulty": "Hard"
        },
        {
            "question": "Paul advises that a man who marries a believing woman and then becomes a believer should not divorce her, and that the unbelieving spouse is 'sanctified' by the believer. What is the reason given for this arrangement?",
            "options": ["The Law requires it", "The children would be unclean; now they are holy", "So the unbelieving spouse may be converted", "Because God hates divorce"],
            "correct": "The children would be unclean; now they are holy",
            "reference": "1 Corinthians 7:14",
            "difficulty": "Hard"
        },
        {
            "question": "In his own defense, Paul states that his right to be supported by the church (like a soldier, farmer, or shepherd) is established not only by common sense but by what specific authority?",
            "options": ["The Law of Moses", "The command of the Lord", "The council of the apostles", "The prophecy of Isaiah"],
            "correct": "The Law of Moses (Deuteronomy 25:4) and the command of the Lord",
            "reference": "1 Corinthians 9:9-14",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to describe the kind of transformation the resurrected body will undergo, contrasting it with the 'natural' body?",
            "options": ["It is sown in weakness, it is raised in glory", "It is sown a perishable body, it is raised an imperishable body", "It is sown a natural body; it is raised a spiritual body", "It is sown in corruption, it is raised in power"],
            "correct": "It is sown a natural body; it is raised a spiritual body",
            "reference": "1 Corinthians 15:44",
            "difficulty": "Hard"
        },
        {
            "question": "Paul uses an analogy of a boxer and a runner to describe his own self-discipline. What is the prize he aims for that is contrasted with the perishable crown received by earthly athletes?",
            "options": ["A crown of righteousness", "A crown of life", "An imperishable crown (or reward)", "The reward of the faithful"],
            "correct": "An imperishable crown (or reward)",
            "reference": "1 Corinthians 9:25",
            "difficulty": "Hard"
        },
        {
            "question": "When addressing the divisions, Paul asks, 'Is Christ divided? Was Paul crucified for you? Or were you baptized in the name of **_________**?'",
            "options": ["The Lord", "Paul", "The Father, Son, and Holy Spirit", "A man"],
            "correct": "Paul",
            "reference": "1 Corinthians 1:13",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul compares the different spiritual leaders and their work to building on a foundation. Who is the *only* foundation laid for the building?",
            "options": ["The Law and the Prophets", "The Apostles and Prophets", "Jesus Christ", "The Word of God"],
            "correct": "Jesus Christ",
            "reference": "1 Corinthians 3:11",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that the Corinthians were becoming arrogant about their spiritual leaders, but he says they were still 'fleshly' and behaving like what specific kind of people?",
            "options": ["The Sadducees", "Mere men (or 'unspiritual men')", "The philosophers", "The idol worshippers"],
            "correct": "Mere men (or 'unspiritual men')",
            "reference": "1 Corinthians 3:3-4",
            "difficulty": "Extreme"
        },
        {
            "question": "In 1 Corinthians 6:11, Paul lists several former sinners (e.g., thieves, swindlers) that the Corinthians *were* but emphasizes they have been three things: washed, sanctified, and what else?",
            "options": ["Glorified", "Filled with the Spirit", "Justified", "Chosen"],
            "correct": "Justified",
            "reference": "1 Corinthians 6:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What does Paul describe as the 'more excellent way' in the context of the spiritual gifts?",
            "options": ["Prophecy", "Tongues with interpretation", "Love", "Apostleship"],
            "correct": "Love",
            "reference": "1 Corinthians 12:31 (The introduction to Chapter 13)",
            "difficulty": "Extreme"
        },
        {
            "question": "In the discussion on spiritual gifts (Chapter 12), what specific body part does Paul use to illustrate that seemingly insignificant members are necessary?",
            "options": ["The head", "The hands", "Outward appearance and the mind", "The feet and the ears"],
            "correct": "The feet and the ears",
            "reference": "1 Corinthians 12:15-16",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says that when he was a child, he spoke, thought, and reasoned like a child, but when he became a man, he put away what?",
            "options": ["His sins", "Childish things", "The Law", "The worldly wisdom"],
            "correct": "Childish things",
            "reference": "1 Corinthians 13:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the clarity of knowledge now, compared to the perfection of knowledge in the future?",
            "options": ["Now we know in part; then we shall know fully", "Now we see in a dark place; then we shall see clearly", "Now we see in a mirror dimly; but then face to face", "Now we understand mysteries; then we shall know truth"],
            "correct": "Now we see in a mirror dimly; but then face to face",
            "reference": "1 Corinthians 13:12",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs the church that in the spiritual meetings, all things must be done in an orderly manner and for the purpose of what?",
            "options": ["Worship", "Teaching", "Edification (building up)", "Evangelism"],
            "correct": "Edification (building up)",
            "reference": "1 Corinthians 14:26",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul commands believers to flee from what specific sin, arguing that it is the *only* sin committed against one's own body?",
            "options": ["Covetousness", "Sexual immorality (Fornication)", "Stealing", "Drunkenness"],
            "correct": "Sexual immorality (Fornication)",
            "reference": "1 Corinthians 6:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final, brief, yet strong command Paul gives at the end of the letter (before the closing)?",
            "options": ["Stand firm in the faith, act like men, be strong", "Live in peace with one another", "Continue in the love of God", "Pray without ceasing"],
            "correct": "Stand firm in the faith, act like men, be strong",
            "reference": "1 Corinthians 16:13",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Corinthians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of 2 Corinthians, contrasting with the problems addressed in 1 Corinthians?",
            "options": ["The structure of church government", "Paul's defense of his apostleship and the theology of suffering", "The doctrine of the Holy Spirit", "Instructions on financial giving"],
            "correct": "Paul's defense of his apostleship and the theology of suffering",
            "reference": "Overall theme, especially Chapters 1-7 and 10-13",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that God comforts us in our affliction so that we may be able to comfort whom?",
            "options": ["The poor and the sick", "The elders of the church", "Those who are in any affliction", "The apostles in Jerusalem"],
            "correct": "Those who are in any affliction",
            "reference": "2 Corinthians 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "In the early chapters, Paul urges the Corinthians to forgive and restore which person?",
            "options": ["The former temple priest", "The sexually immoral man from 1 Corinthians 5", "A false apostle", "The one who denied Jesus"],
            "correct": "The sexually immoral man from 1 Corinthians 5",
            "reference": "2 Corinthians 2:5-11",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul contrasts the 'ministry of condemnation' (the old covenant) with the 'ministry of **_________**' (the new covenant).",
            "options": ["Holiness", "Peace", "Righteousness", "Service"],
            "correct": "Righteousness",
            "reference": "2 Corinthians 3:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What common image is used to describe the fragility of the human body that holds the 'treasure' of the light of the Gospel?",
            "options": ["A clay tablet", "Earthen vessels (or clay jars)", "A cracked vessel", "A fragile lamp"],
            "correct": "Earthen vessels (or clay jars)",
            "reference": "2 Corinthians 4:7",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that 'the love of Christ **_________** us,' compelling his ministry.",
            "options": ["Encourages", "Compels (or controls)", "Forgives", "Directs"],
            "correct": "Compels (or controls)",
            "reference": "2 Corinthians 5:14",
            "difficulty": "Moderate"
        },
        {
            "question": "According to Paul, those who are 'in Christ' are what?",
            "options": ["Rich and powerful", "New creation (or new creation)", "Servants of the Law", "Wise in the world"],
            "correct": "New creation (or new creation)",
            "reference": "2 Corinthians 5:17",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific type of ministry does Paul say God gave the apostles?",
            "options": ["The ministry of miracles", "The ministry of reconciliation", "The ministry of teaching", "The ministry of healing"],
            "correct": "The ministry of reconciliation",
            "reference": "2 Corinthians 5:18",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the attitude Paul recommends when giving financially?",
            "options": ["With regret and sorrow", "Under compulsion or grudgingly", "Cheerfully (or 'a cheerful giver')", "Sparingly"],
            "correct": "Cheerfully (or 'a cheerful giver')",
            "reference": "2 Corinthians 9:7",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that he is content with weaknesses, insults, hardships, persecutions, and calamities, because in his weakness, he becomes what?",
            "options": ["Wise", "Humble", "Strong", "More faithful"],
            "correct": "Strong",
            "reference": "2 Corinthians 12:10",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul speaks of being 'hard pressed' but not crushed, and 'perplexed' but not driven to despair. What is the overall purpose of this constant death in his body?",
            "options": ["To show the weakness of human nature", "So that the life of Jesus may be manifested in our bodies", "To fulfill prophecy", "To teach the disciples humility"],
            "correct": "So that the life of Jesus may be manifested in our bodies",
            "reference": "2 Corinthians 4:8-10",
            "difficulty": "Hard"
        },
        {
            "question": "Paul insists that believers must not be 'unequally yoked' with whom?",
            "options": ["Weak believers", "Unbelievers", "Jewish teachers", "Those who lack wisdom"],
            "correct": "Unbelievers",
            "reference": "2 Corinthians 6:14",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the man who served as Paul's faithful messenger between the churches and whose arrival comforted Paul deeply?",
            "options": ["Timothy", "Barnabas", "Silas", "Titus"],
            "correct": "Titus",
            "reference": "2 Corinthians 7:6",
            "difficulty": "Hard"
        },
        {
            "question": "In the context of the offering for Jerusalem, which two regions/churches are highlighted for their generous giving, despite their extreme poverty?",
            "options": ["Achaia and Macedonia", "Galatia and Ephesus", "Macedonia and Achaia", "Philippi and Thessalonica"],
            "correct": "Macedonia and Achaia",
            "reference": "2 Corinthians 8:1; 9:2",
            "difficulty": "Hard"
        },
        {
            "question": "In defending his authority against the 'super-apostles,' Paul boasts about his weakness and mentions an involuntary, agonizing illness. What does he call this illness?",
            "options": ["A grievous plague", "A thorn in the flesh", "A weakness of the eyes", "A constant fever"],
            "correct": "A thorn in the flesh",
            "reference": "2 Corinthians 12:7",
            "difficulty": "Hard"
        },
        {
            "question": "The second messenger (Titus) brought Paul good news, stating that the Corinthians had expressed sorrow for their past sins, resulting in what action?",
            "options": ["Godly grief leading to repentance", "They sent money to Jerusalem", "They apologized to Paul publicly", "They forgave the immoral man"],
            "correct": "Godly grief leading to repentance",
            "reference": "2 Corinthians 7:9-11",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action regarding a vision is Paul reluctant to discuss, only revealing that he was 'caught up' to the 'third heaven' or Paradise?",
            "options": ["His conversion on the Damascus road", "A vision of the resurrected Jesus", "A revelation fourteen years earlier", "A warning about the end times"],
            "correct": "A revelation fourteen years earlier",
            "reference": "2 Corinthians 12:1-4",
            "difficulty": "Hard"
        },
        {
            "question": "Paul warns the Corinthians not to measure themselves by themselves, but to compare their sphere of labor to what standard?",
            "options": ["The standard of the Law", "The standard of faith which God has assigned to them (or 'measure of the rule')", "The success of the Jerusalem church", "The amount of money they have given"],
            "correct": "The standard of faith which God has assigned to them (or 'measure of the rule')",
            "reference": "2 Corinthians 10:12-13",
            "difficulty": "Hard"
        },
        {
            "question": "Paul contrasts the Old Covenant, where Moses's face shone and the people needed a veil to look upon him, with the New Covenant, where the veil is removed. What is the result for believers?",
            "options": ["We can see God directly", "We see the light of the Gospel in Christ", "We are transformed into the same image from glory to glory", "We no longer need the Law"],
            "correct": "We are transformed into the same image from glory to glory",
            "reference": "2 Corinthians 3:18",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to explain the reason he and the apostles do not lose heart in their continuous suffering?",
            "options": ["Because their trials are temporary", "Because the Lord is with them", "Because their inner self is being renewed day by day", "Because their reward in heaven is great"],
            "correct": "Because their inner self is being renewed day by day",
            "reference": "2 Corinthians 4:16",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul insists that the Corinthians are his letter of recommendation, written not with ink, but with what?",
            "options": ["The Spirit of the living God, not on tablets of stone but on tablets of human hearts", "The blood of the Lamb", "The sweat of the apostles", "The gold of the temple"],
            "correct": "The Spirit of the living God, not on tablets of stone but on tablets of human hearts",
            "reference": "2 Corinthians 3:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description of God's 'indescribable gift' that Paul mentions in the context of the collection for the saints?",
            "options": ["The Holy Spirit", "Jesus Christ, the Son of God", "The abundance of grace", "The power of the cross"],
            "correct": "Jesus Christ, the Son of God",
            "reference": "2 Corinthians 9:15",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says that when the believer dies, he would rather be absent from the body and present with whom?",
            "options": ["The apostles", "The Lord", "The saints in heaven", "The Father"],
            "correct": "The Lord",
            "reference": "2 Corinthians 5:8",
            "difficulty": "Extreme"
        },
        {
            "question": "When Paul speaks of his many sufferings, what specific danger does he mention encountering in the city and in the wilderness?",
            "options": ["Dangers from fire and flood", "Dangers from robbers and wild beasts", "Dangers from his own countrymen and from Gentiles", "Dangers from the sea and from false prophets"],
            "correct": "Dangers from his own countrymen and from Gentiles",
            "reference": "2 Corinthians 11:26",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul uses a sharp metaphor to describe the relationship between the spiritual and physical body, stating that in our earthly tent, we 'groan, being burdened' because we do not want to be unclothed, but rather **_________**.",
            "options": ["Made strong", "Clothed (or 'further clothed')", "Purified", "Made holy"],
            "correct": "Clothed (or 'further clothed')",
            "reference": "2 Corinthians 5:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the exact threefold blessing (known as the 'Apostolic Benediction') Paul uses to close the letter?",
            "options": ["Grace, peace, and love", "The grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit", "Hope, faith, and love", "Peace, truth, and grace"],
            "correct": "The grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit",
            "reference": "2 Corinthians 13:14",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul recounts being rescued from the city of Damascus by being let down through the wall in what container?",
            "options": ["A net", "A basket (or hamper)", "A rope sack", "A large cloth"],
            "correct": "A basket (or hamper)",
            "reference": "2 Corinthians 11:32-33",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific meaning of 'Godly sorrow' that Paul says produces repentance without regret?",
            "options": ["Sorrow for the loss of property", "Sorrow that is in accordance with the will of God", "Sorrow over the suffering of others", "Sorrow over the state of the world"],
            "correct": "Sorrow that is in accordance with the will of God",
            "reference": "2 Corinthians 7:10",
            "difficulty": "Extreme"
        },
        {
            "question": "In defense of his ministry, Paul explicitly says that the weapons of his warfare are not carnal but what?",
            "options": ["Mighty in God for pulling down strongholds", "The sword of the Spirit", "Prayer and fasting", "The Word of God"],
            "correct": "Mighty in God for pulling down strongholds",
            "reference": "2 Corinthians 10:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that we walk by **_________**, not by **_________**.",
            "options": ["Sight, faith", "Faith, sight", "The Law, grace", "The flesh, the Spirit"],
            "correct": "Faith, sight",
            "reference": "2 Corinthians 5:7",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Galatians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary error (heresy) that Paul addresses and fights against throughout the entire letter to the Galatians?",
            "options": ["Sexual immorality", "Denying the resurrection", "Legalism/Judaizers who taught salvation requires faith plus the Law of Moses (especially circumcision)", "Worship of angels"],
            "correct": "Legalism/Judaizers who taught salvation requires faith plus the Law of Moses (especially circumcision)",
            "reference": "Galatians 1:6-9; 2:16; 5:2-4",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul declares that the Gospel he preaches did not come from man, but through what source?",
            "options": ["A council of the apostles", "A personal revelation of Jesus Christ", "The prophets of the Old Testament", "The church in Antioch"],
            "correct": "A personal revelation of Jesus Christ",
            "reference": "Galatians 1:11-12",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul confronts which prominent apostle publicly for acting hypocritically by withdrawing from Gentile believers when certain men came from James?",
            "options": ["James", "John", "Peter (Cephas)", "Thomas"],
            "correct": "Peter (Cephas)",
            "reference": "Galatians 2:11-14",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul emphatically states that a person is not justified by the works of the Law but by what?",
            "options": ["Faith in Jesus Christ", "Grace and good works", "Water baptism", "A perfect life"],
            "correct": "Faith in Jesus Christ",
            "reference": "Galatians 2:16",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul refers to the Old Testament Law as a temporary measure given until the arrival of whom?",
            "options": ["The High Priest", "The Apostle Paul", "The promised Seed (Christ)", "The nation of Israel"],
            "correct": "The promised Seed (Christ)",
            "reference": "Galatians 3:19",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase Paul uses to describe the purpose of the Law before the arrival of faith in Christ?",
            "options": ["Our ruler", "A perfect guide", "A jailer (or guardian/custodian)", "The word of God"],
            "correct": "A jailer (or guardian/custodian)",
            "reference": "Galatians 3:24",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul urges the Galatians to 'stand firm' and not submit again to what yoke?",
            "options": ["The yoke of slavery (or bondage to the Law)", "The yoke of sin", "The yoke of the Gentiles", "The yoke of the Pharisees"],
            "correct": "The yoke of slavery (or bondage to the Law)",
            "reference": "Galatians 5:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul warns that if believers bite and devour one another, they risk doing what?",
            "options": ["Losing their salvation", "Being consumed by one another", "Being judged by God", "Being scattered by the Romans"],
            "correct": "Being consumed by one another",
            "reference": "Galatians 5:15",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary opposing force does the Spirit constantly battle against in the life of a believer?",
            "options": ["The devil and his angels", "The world", "The flesh (or the sinful nature)", "The Law"],
            "correct": "The flesh (or the sinful nature)",
            "reference": "Galatians 5:17",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul lists nine qualities (e.g., love, joy, peace) that the Holy Spirit produces in the believer. What is the common term for this list?",
            "options": ["The Gifts of the Spirit", "The Fruit of the Spirit", "The Commands of the Spirit", "The Virtues of the Spirit"],
            "correct": "The Fruit of the Spirit",
            "reference": "Galatians 5:22-23",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "In his defense of his apostleship, Paul states that after his conversion, he immediately went to what specific geographical location, rather than Jerusalem?",
            "options": ["Damascus", "Tarsus", "Arabia", "Antioch"],
            "correct": "Arabia",
            "reference": "Galatians 1:17",
            "difficulty": "Hard"
        },
        {
            "question": "In the argument with Peter, Paul asks, 'If you, though a Jew, live like a Gentile and not like a Jew, how can you force the Gentiles to **_________**?'",
            "options": ["Obey the Law", "Be circumcised", "Follow Jewish customs", "Accept your authority"],
            "correct": "Follow Jewish customs",
            "reference": "Galatians 2:14",
            "difficulty": "Hard"
        },
        {
            "question": "Paul says that when we were children, we were enslaved to what specific principle?",
            "options": ["The Law", "The commandments of men", "The elementary principles of the world (or 'basic principles')", "The desires of the flesh"],
            "correct": "The elementary principles of the world (or 'basic principles')",
            "reference": "Galatians 4:3",
            "difficulty": "Hard"
        },
        {
            "question": "Paul uses an allegorical example of two women, **Hagar and Sarah**, to contrast two covenants. Which covenant does Hagar represent?",
            "options": ["The covenant of works (Law/Sinai)", "The covenant of faith (Grace/Jerusalem above)", "The covenant of promise", "The covenant of Abraham"],
            "correct": "The covenant of works (Law/Sinai)",
            "reference": "Galatians 4:24-25",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to describe those who only submit to circumcision in order to 'make a good showing in the flesh'?",
            "options": ["False teachers", "Judaizers", "Zealots for the Law", "Those who want to escape persecution"],
            "correct": "Those who want to escape persecution",
            "reference": "Galatians 6:12",
            "difficulty": "Hard"
        },
        {
            "question": "Paul says that the Galatians received the Spirit by what means?",
            "options": ["Hearing with faith", "Keeping the Law", "Water baptism", "Apostolic laying on of hands"],
            "correct": "Hearing with faith",
            "reference": "Galatians 3:2, 5",
            "difficulty": "Hard"
        },
        {
            "question": "What is the key difference Paul notes between the covenant with Abraham (the promise) and the later Law given to Moses?",
            "options": ["The Law was a better covenant", "The Law came 430 years later and did not nullify the promise", "The Law was given by God alone", "The promise was only for the Jews"],
            "correct": "The Law came 430 years later and did not nullify the promise",
            "reference": "Galatians 3:17",
            "difficulty": "Hard"
        },
        {
            "question": "Paul uses a sharp phrase when referring to the teachers who disturbed the Galatians. He wishes that those who unsettle them would do what to themselves?",
            "options": ["Be excommunicated", "Be silenced", "Mutilate themselves (or 'castrate themselves')", "Be judged by God"],
            "correct": "Mutilate themselves (or 'castrate themselves')",
            "reference": "Galatians 5:12",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs believers to restore a brother who is caught in a sin, doing so in what specific manner?",
            "options": ["Immediately and publicly", "With gentleness, watching yourself lest you also be tempted", "With the authority of the church", "With prayer and fasting"],
            "correct": "With gentleness, watching yourself lest you also be tempted",
            "reference": "Galatians 6:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action did Paul take to show that he was willing to accept the authority of the Jerusalem apostles (Peter, James, and John)?",
            "options": ["He submitted his message to them for approval", "He gave them money for the poor", "He brought Titus with him, who was not compelled to be circumcised", "He offered a sacrifice in the Temple"],
            "correct": "He brought Titus with him, who was not compelled to be circumcised",
            "reference": "Galatians 2:1-3",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul stresses that if he still sought to please men, he would not be what?",
            "options": ["A good teacher", "A servant of Christ", "Worthy of reward", "An Apostle"],
            "correct": "A servant of Christ",
            "reference": "Galatians 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "The three men who were considered pillars in the Jerusalem church and extended the right hand of fellowship to Paul and Barnabas were James, Cephas, and whom else?",
            "options": ["Andrew", "John", "Matthew", "Philip"],
            "correct": "John",
            "reference": "Galatians 2:9",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law is described as leading us to Christ so that we might be justified by faith, and no longer under the supervision of what entity?",
            "options": ["The Law itself", "The jailer (guardian/custodian)", "The devil", "The world"],
            "correct": "The jailer (guardian/custodian)",
            "reference": "Galatians 3:25",
            "difficulty": "Extreme"
        },
        {
            "question": "What does Paul instruct believers to 'sow' in the Spirit in order to 'reap' eternal life, contrasting with sowing to the flesh?",
            "options": ["Good deeds", "To the Spirit", "The Law", "Love and peace"],
            "correct": "To the Spirit",
            "reference": "Galatians 6:8",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says the purpose of Christ redeeming us from the curse of the Law was so that the blessing of Abraham might come upon whom?",
            "options": ["The nations (Gentiles) in Christ Jesus", "The Jews in Jerusalem", "The poor in the church", "The apostles and their followers"],
            "correct": "The nations (Gentiles) in Christ Jesus",
            "reference": "Galatians 3:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific bodily evidence does Paul state he carries, indicating his commitment and suffering for Christ?",
            "options": ["The scars of the lashings", "The mark of the cross", "The marks (stigmata) of Jesus", "The scars of the stoning"],
            "correct": "The marks (stigmata) of Jesus",
            "reference": "Galatians 6:17",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says that when God sent forth His Son, He sent Him forth at what specific moment in time?",
            "options": ["The appointed time", "The fullness of time", "The day of salvation", "The beginning of the world"],
            "correct": "The fullness of time",
            "reference": "Galatians 4:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul describes the Law as being 'ordained through angels by the hand of **_________**.'",
            "options": ["God", "Moses (a mediator)", "A king", "The High Priest"],
            "correct": "Moses (a mediator)",
            "reference": "Galatians 3:19",
            "difficulty": "Extreme"
        },
        {
            "question": "The two covenants (Hagar and Sarah) produce two distinct groups. Hagar's covenant produces children of slavery; Sarah's covenant produces children of what?",
            "options": ["The promise (or children of the free woman)", "The Law", "The Spirit", "The Kingdom"],
            "correct": "The promise (or children of the free woman)",
            "reference": "Galatians 4:24, 28, 31",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Paul uses to describe the primary work of the Holy Spirit in the hearts of believers, confirming their adoption as sons?",
            "options": ["Crying out 'Lord Jesus'", "Crying out 'Abba, Father'", "Speaking in tongues", "Praying day and night"],
            "correct": "Crying out 'Abba, Father'",
            "reference": "Galatians 4:6",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Ephesians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Epistle to the Ephesians is primarily divided into two main sections. What are these two parts?",
            "options": ["Prophecy and Law", "Doctrine (Belief) and Practice (Conduct)", "History and Future", "Old Covenant and New Covenant"],
            "correct": "Doctrine (Belief) and Practice (Conduct)",
            "reference": "Chapters 1-3 (Doctrine) and 4-6 (Practice)",
            "difficulty": "Moderate"
        },
        {
            "question": "Ephesians 1:3 begins a long sentence, praising God for blessing us with every spiritual blessing in what location?",
            "options": ["In the church", "In the world", "In the heavenly places in Christ", "In the Promised Land"],
            "correct": "In the heavenly places in Christ",
            "reference": "Ephesians 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that we are saved by grace through faith, and this salvation is not of works, lest anyone should what?",
            "options": ["Boast", "Fail", "Sin", "Be disappointed"],
            "correct": "Boast",
            "reference": "Ephesians 2:8-9",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase Paul uses to describe Gentile believers and Jewish believers being united in Christ, breaking down the dividing wall of hostility?",
            "options": ["A chosen race", "A new nation", "One new man (or 'one body')", "A royal priesthood"],
            "correct": "One new man (or 'one body')",
            "reference": "Ephesians 2:14-16",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul describes the Church as being built on the foundation of whom?",
            "options": ["The teachings of Jesus", "The Old Testament Law", "The apostles and prophets, Christ Jesus being the cornerstone", "Peter, the first Pope"],
            "correct": "The apostles and prophets, Christ Jesus being the cornerstone",
            "reference": "Ephesians 2:20",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the great secret (mystery) revealed to Paul, which was hidden in former generations?",
            "options": ["The rapture of the church", "The divinity of Christ", "That the Gentiles are fellow heirs, members of the same body, and partakers of the promise in Christ", "The Second Coming"],
            "correct": "That the Gentiles are fellow heirs, members of the same body, and partakers of the promise in Christ",
            "reference": "Ephesians 3:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific virtue does Paul urge the Ephesians to 'walk in,' which is essential for maintaining the unity of the Spirit in the bond of peace?",
            "options": ["Love and forgiveness", "Humility and gentleness", "Strength and boldness", "Faith and hope"],
            "correct": "Humility and gentleness",
            "reference": "Ephesians 4:2",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul provides a list of leadership gifts (e.g., apostles, prophets, evangelists, pastors, and teachers) given to the church for what ultimate purpose?",
            "options": ["To preach the Gospel to the world", "To train other leaders", "For the equipping of the saints for the work of ministry", "To perform miracles"],
            "correct": "For the equipping of the saints for the work of ministry",
            "reference": "Ephesians 4:11-12",
            "difficulty": "Moderate"
        },
        {
            "question": "Instead of being filled with wine (debauchery), Paul instructs believers to be continually filled with what?",
            "options": ["Knowledge of the Word", "Righteousness", "The Holy Spirit", "Wisdom"],
            "correct": "The Holy Spirit",
            "reference": "Ephesians 5:18",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary analogy does Paul use to describe the relationship between a husband and a wife?",
            "options": ["Master and servant", "King and subject", "Christ and the Church", "Teacher and student"],
            "correct": "Christ and the Church",
            "reference": "Ephesians 5:25-32",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the phrase Paul uses to describe the believer's inheritance, ensuring their ultimate salvation?",
            "options": ["The down payment", "The signet ring", "The seal of the Holy Spirit, who is the guarantee of our inheritance", "The Law and the Prophets"],
            "correct": "The seal of the Holy Spirit, who is the guarantee of our inheritance",
            "reference": "Ephesians 1:13-14",
            "difficulty": "Hard"
        },
        {
            "question": "Paul says that before coming to Christ, the Ephesians were 'dead in trespasses and sins' and were formerly dominated by 'the prince of the power of the air.' Who is this 'prince'?",
            "options": ["The Roman Emperor", "Satan (the devil)", "The High Priest", "The spirit of darkness"],
            "correct": "Satan (the devil)",
            "reference": "Ephesians 2:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the context of putting off the 'old man' and putting on the 'new man,' what virtue must the believer speak to his neighbor?",
            "options": ["Love", "Grace", "Truth", "Mercy"],
            "correct": "Truth",
            "reference": "Ephesians 4:25",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs believers not to grieve the Holy Spirit of God by whom they were sealed for what specific future event?",
            "options": ["The day of Pentecost", "The day of the rapture", "The day of redemption", "The day of judgment"],
            "correct": "The day of redemption",
            "reference": "Ephesians 4:30",
            "difficulty": "Hard"
        },
        {
            "question": "What specific command Paul gives to children regarding their parents, which he says is the first commandment with a promise?",
            "options": ["Love your parents", "Help your parents", "Obey your parents in the Lord", "Honor your father and mother"],
            "correct": "Honor your father and mother",
            "reference": "Ephesians 6:2-3",
            "difficulty": "Hard"
        },
        {
            "question": "Paul encourages believers to 'be angry and do not sin.' He then gives a specific timeframe for resolving anger. What is it?",
            "options": ["Before the next service", "Before the end of the day", "Before the sun goes down", "Before the Sabbath"],
            "correct": "Before the sun goes down",
            "reference": "Ephesians 4:26",
            "difficulty": "Hard"
        },
        {
            "question": "Paul describes the purpose of the Church's growth as attaining to 'the measure of the stature of the **_________** of Christ.'",
            "options": ["Fullness", "Love", "Power", "Glory"],
            "correct": "Fullness",
            "reference": "Ephesians 4:13",
            "difficulty": "Hard"
        },
        {
            "question": "When admonishing believers to 'redeem the time,' Paul explains that this is necessary because of what condition of the days?",
            "options": ["The days are short", "The days are many", "The days are evil", "The days are few"],
            "correct": "The days are evil",
            "reference": "Ephesians 5:16",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to instruct slaves regarding their service to their earthly masters?",
            "options": ["Serve them only when they are kind", "Serve them with fear and trembling, in singleness of heart, as to Christ", "Serve them begrudgingly", "Serve them only for pay"],
            "correct": "Serve them with fear and trembling, in singleness of heart, as to Christ",
            "reference": "Ephesians 6:5",
            "difficulty": "Hard"
        },
        {
            "question": "What two major components Paul identifies that believers must be able to stand against by putting on the full armor of God?",
            "options": ["The world and the flesh", "The devil's schemes (or 'wiles') and the darkness", "The rulers and the authorities", "The devil's schemes (or 'wiles') and the forces of darkness"],
            "correct": "The devil's schemes (or 'wiles') and the forces of darkness",
            "reference": "Ephesians 6:11-12",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul prays that the eyes of the Ephesians' hearts may be enlightened so that they may know the hope of His calling, the riches of His inheritance, and what third aspect?",
            "options": ["The power of the Holy Spirit", "The surpassing greatness of His power toward us who believe", "The love of God", "The wisdom of God"],
            "correct": "The surpassing greatness of His power toward us who believe",
            "reference": "Ephesians 1:18-19",
            "difficulty": "Extreme"
        },
        {
            "question": "The purpose of God's redemptive plan is to unite all things in Christ in the **_________** of time.",
            "options": ["Fullness", "End", "Middle", "Beginning"],
            "correct": "Fullness",
            "reference": "Ephesians 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "In the prayer of Ephesians 3, Paul asks that they may be rooted and grounded in love, and then be strengthened with what specifically?",
            "options": ["The wisdom of the elders", "Power through His Spirit in the inner man", "The glory of the Father", "The unity of the Church"],
            "correct": "Power through His Spirit in the inner man",
            "reference": "Ephesians 3:16-17",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific part of the body does Paul instruct believers *not* to let corrupt communication or filthy language proceed from?",
            "options": ["The heart", "The lips", "The mouth", "The spirit"],
            "correct": "The mouth",
            "reference": "Ephesians 4:29",
            "difficulty": "Extreme"
        },
        {
            "question": "What two vices does Paul say have no inheritance in the kingdom of Christ and God?",
            "options": ["The sexually immoral person and the thief", "The impure person and the envious person", "The sexually immoral person and the covetous person (who is an idolater)", "The unrighteous and the wicked"],
            "correct": "The sexually immoral person and the covetous person (who is an idolater)",
            "reference": "Ephesians 5:5",
            "difficulty": "Extreme"
        },
        {
            "question": "The final piece of the armor of God is not a defensive or offensive weapon, but what ongoing spiritual action?",
            "options": ["Fasting", "Giving to the poor", "Praying always with all prayer and supplication in the Spirit", "Singing psalms"],
            "correct": "Praying always with all prayer and supplication in the Spirit",
            "reference": "Ephesians 6:18",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul concludes the practical section of the letter by emphasizing the importance of what three virtues when dealing with one another?",
            "options": ["Truth, justice, and mercy", "All humility, gentleness, and long-suffering (patience)", "Love, faith, and hope", "Wisdom, knowledge, and understanding"],
            "correct": "All humility, gentleness, and long-suffering (patience)",
            "reference": "Ephesians 4:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific item is the 'sword of the Spirit' identified as?",
            "options": ["The power of God", "The Word of God", "The Gospel of peace", "The blood of Christ"],
            "correct": "The Word of God",
            "reference": "Ephesians 6:17",
            "difficulty": "Extreme"
        },
        {
            "question": "In the context of the marital relationship, Paul uses the phrase that a husband who loves his wife is loving what?",
            "options": ["His neighbor", "His own body (or 'himself')", "The Church", "The Lord"],
            "correct": "His own body (or 'himself')",
            "reference": "Ephesians 5:28",
            "difficulty": "Extreme"
        },
        {
            "question": "In Ephesians 3:20, Paul ends his prayer with a doxology that God can do 'far more abundantly beyond all that we **_________** or **_________**.'",
            "options": ["Know or understand", "Ask or think", "See or believe", "Desire or hope"],
            "correct": "Ask or think",
            "reference": "Ephesians 3:20",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Philippians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the dominant theme or key word that appears repeatedly throughout the Book of Philippians?",
            "options": ["Suffering", "Law", "Joy and Rejoicing", "The Second Coming"],
            "correct": "Joy and Rejoicing",
            "reference": "Philippians 1:4, 18, 25; 2:17-18; 3:1; 4:4, 10",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul was in what state when he wrote this letter (one of the 'Prison Epistles')?",
            "options": ["On a missionary journey", "In prison (or chains)", "In Ephesus", "In Jerusalem"],
            "correct": "In prison (or chains)",
            "reference": "Philippians 1:7, 13",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that 'to live is Christ, and to die is **_________**.'",
            "options": ["Gain", "A tragedy", "Rest", "A mystery"],
            "correct": "Gain",
            "reference": "Philippians 1:21",
            "difficulty": "Moderate"
        },
        {
            "question": "What Christological term does Paul use to describe Jesus emptying Himself, taking on the form of a servant?",
            "options": ["Crucifixion", "Ascension", "Kenosis (self-emptying)", "Sovereignty"],
            "correct": "Kenosis (self-emptying)",
            "reference": "Philippians 2:7 (The Greek term is *kenosis*)",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul urges the Philippians to do everything without grumbling or what else?",
            "options": ["Arguing", "Complaining", "Disputing (or questioning)", "Fighting"],
            "correct": "Disputing (or questioning)",
            "reference": "Philippians 2:14",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the name of the faithful companion whom Paul describes as having 'proved himself' and urges the Philippians to send to him?",
            "options": ["Titus", "Tychicus", "Timothy", "Silas"],
            "correct": "Timothy",
            "reference": "Philippians 2:19-22",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul warns the Philippians against the 'dogs' and the 'evil workers' who insist on what physical act for salvation?",
            "options": ["Baptism", "Sabbath keeping", "Circumcision", "Fasting"],
            "correct": "Circumcision",
            "reference": "Philippians 3:2",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul says he counts all his former Jewish privileges and achievements as what, for the sake of knowing Christ?",
            "options": ["Loss (or garbage/rubbish)", "Blessings", "Necessary steps", "A reminder of his past"],
            "correct": "Loss (or garbage/rubbish)",
            "reference": "Philippians 3:7-8",
            "difficulty": "Moderate"
        },
        {
            "question": "In the famous passage on anxiety, Paul instructs believers to not be anxious about anything, but to do what two things?",
            "options": ["Pray and fast", "Rejoice and be thankful", "In everything by prayer and supplication with thanksgiving, let your requests be made known to God", "Trust the Lord and rely on His promises"],
            "correct": "In everything by prayer and supplication with thanksgiving, let your requests be made known to God",
            "reference": "Philippians 4:6",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul closes the letter by assuring the Philippians that his God will supply all their needs according to His riches in glory by whom?",
            "options": ["The Holy Spirit", "The Church", "Christ Jesus", "The Father"],
            "correct": "Christ Jesus",
            "reference": "Philippians 4:19",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul declares that his chains have actually advanced the gospel in what specific place?",
            "options": ["The city of Rome", "The whole praetorian guard (or palace guard)", "The Jewish synagogues", "The Roman marketplace"],
            "correct": "The whole praetorian guard (or palace guard)",
            "reference": "Philippians 1:13",
            "difficulty": "Hard"
        },
        {
            "question": "In the Christ Hymn (Philippians 2), what specific name does God bestow upon Christ, which is above every name?",
            "options": ["King of Kings", "Messiah", "The Lord (Kyrios)", "Jesus"],
            "correct": "The Lord (Kyrios) (The name 'Jesus' is exalted, but the ultimate declaration is 'every tongue confess that Jesus Christ is Lord')",
            "reference": "Philippians 2:9, 11",
            "difficulty": "Hard"
        },
        {
            "question": "Paul tells the Philippians that they hold out the word of life so that he may rejoice in the Day of Christ that he did not run or toil how?",
            "options": ["Without diligence", "In vain", "With sadness", "In the flesh"],
            "correct": "In vain",
            "reference": "Philippians 2:16",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the man who served as a messenger from the Philippians to Paul, who became seriously ill while serving Paul?",
            "options": ["Silas", "Titus", "Epaphroditus", "Clement"],
            "correct": "Epaphroditus",
            "reference": "Philippians 2:25-30",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs believers to let their 'gentleness' (or reasonableness/forbearance) be known to all men because of what imminent event?",
            "options": ["The end of the world", "The presence of the Holy Spirit", "The Lord is at hand (or near)", "The coming of persecution"],
            "correct": "The Lord is at hand (or near)",
            "reference": "Philippians 4:5",
            "difficulty": "Hard"
        },
        {
            "question": "What Old Testament tribe was Paul a member of, which he listed as a reason for his former confidence in the flesh?",
            "options": ["Judah", "Levi", "Benjamin", "Reuben"],
            "correct": "Benjamin",
            "reference": "Philippians 3:5",
            "difficulty": "Hard"
        },
        {
            "question": "Paul refers to the three stages of Christ's humiliation in the Christ Hymn (Philippians 2:6-8): equality with God, taking on human form, and what final, painful act?",
            "options": ["His betrayal", "His suffering", "Death, even death on a cross", "His burial"],
            "correct": "Death, even death on a cross",
            "reference": "Philippians 2:8",
            "difficulty": "Hard"
        },
        {
            "question": "Paul urges the two women in the church, Euodia and Syntyche, to do what?",
            "options": ["Rejoice always", "Be of the same mind in the Lord", "Follow the Law", "Support the apostles"],
            "correct": "Be of the same mind in the Lord",
            "reference": "Philippians 4:2",
            "difficulty": "Hard"
        },
        {
            "question": "Paul states that our citizenship is in heaven, and from there we await the Savior. What specific future action will He perform on our body?",
            "options": ["He will give us a new spirit", "He will destroy it", "He will transform our lowly body to be like his glorious body", "He will raise it from the dead"],
            "correct": "He will transform our lowly body to be like his glorious body",
            "reference": "Philippians 3:20-21",
            "difficulty": "Hard"
        },
        {
            "question": "In the instructions for living in harmony, Paul asks believers to 'look not only to your own interests, but also to the **_________** of others.'",
            "options": ["Spiritual condition", "Interests", "Wealth", "Needs"],
            "correct": "Interests",
            "reference": "Philippians 2:4",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul identifies himself and Timothy as **_________** of Christ Jesus in the opening verse.",
            "options": ["Apostles", "Servants (or bondservants)", "Witnesses", "Leaders"],
            "correct": "Servants (or bondservants)",
            "reference": "Philippians 1:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description Paul uses to summarize the good work that God began in the Philippians, which He will bring to completion?",
            "options": ["The love they show one another", "The obedience to the Gospel", "Until the day of Christ Jesus", "The fullness of the Holy Spirit"],
            "correct": "Until the day of Christ Jesus",
            "reference": "Philippians 1:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Paul uses to explain how God works in believers, regarding their will and their action?",
            "options": ["God works to perfect us", "God works in you, both to will and to work for His good pleasure", "God gives the desire and the ability", "God grants you wisdom and strength"],
            "correct": "God works in you, both to will and to work for His good pleasure",
            "reference": "Philippians 2:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific bodily posture is mentioned in the Christ Hymn that will accompany every knee bowing to Jesus?",
            "options": ["Every head will bow", "Every tongue will confess", "Every eye will see", "Every hand will lift"],
            "correct": "Every tongue will confess",
            "reference": "Philippians 2:11",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific Old Testament ritual/act did Paul undergo on the eighth day after his birth, which he cites as evidence of his Hebrew pedigree?",
            "options": ["Naming ceremony", "Circumcision", "Presentation to the priest", "Offering of a sacrifice"],
            "correct": "Circumcision",
            "reference": "Philippians 3:5",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul describes his pursuit of the resurrected life as 'straining forward' and pressing toward what specific object?",
            "options": ["The final reward", "The upward call of God in Christ Jesus", "The fulfillment of prophecy", "The heavenly city"],
            "correct": "The upward call of God in Christ Jesus",
            "reference": "Philippians 3:14",
            "difficulty": "Extreme"
        },
        {
            "question": "The 'peace of God' that guards the believers' hearts and minds surpasses what?",
            "options": ["All anxiety", "All understanding", "All fear", "All doubt"],
            "correct": "All understanding",
            "reference": "Philippians 4:7",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul lists eight virtues (e.g., true, honorable, just) that believers should think about. What is the final, overarching category listed for these virtues?",
            "options": ["If there is any blessing and if there is any merit (or praiseworthy thing)", "If there is any hope and if there is any faith", "If there is any love and if there is any good", "If there is any wisdom and if there is any knowledge"],
            "correct": "If there is any blessing and if there is any merit (or praiseworthy thing)",
            "reference": "Philippians 4:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific phrase Paul uses to refer to the financial gift the Philippians sent to him through Epaphroditus?",
            "options": ["A true gift of love", "A pleasing aroma, a sacrifice acceptable, well pleasing to God", "A generous provision", "A blessing in my time of need"],
            "correct": "A pleasing aroma, a sacrifice acceptable, well pleasing to God",
            "reference": "Philippians 4:18",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says he learned the secret of being content in every situation, knowing that he can do all things through Christ who does what for him?",
            "options": ["Loves him", "Strengthens him", "Guides him", "Forgives him"],
            "correct": "Strengthens him",
            "reference": "Philippians 4:11, 13",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Colossians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Epistle to the Colossians was written by Paul primarily to counteract what theological error (or heresy) in the church?",
            "options": ["Sexual immorality", "A syncretistic heresy that minimized Christ and emphasized human philosophy, legalism, and mysticism/angel worship", "Disputes over the Resurrection", "Financial corruption"],
            "correct": "A syncretistic heresy that minimized Christ and emphasized human philosophy, legalism, and mysticism/angel worship",
            "reference": "Overall theme, especially Colossians 2:8-23",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary theme or emphasis of the Book of Colossians regarding Jesus Christ?",
            "options": ["His compassion and meekness", "His future reign as King of Kings", "The Supremacy and absolute sufficiency of Christ", "His role as a prophet"],
            "correct": "The Supremacy and absolute sufficiency of Christ",
            "reference": "Colossians 1:15-20",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul declares that Christ is the head of the body, which is what?",
            "options": ["The world", "The heavenly host", "The Church", "The New Jerusalem"],
            "correct": "The Church",
            "reference": "Colossians 1:18",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that Christ is the image of the invisible God and is the **_________** of all creation.",
            "options": ["Ruler", "Foundation", "Firstborn", "Beginning"],
            "correct": "Firstborn",
            "reference": "Colossians 1:15",
            "difficulty": "Moderate"
        },
        {
            "question": "In whom does Paul state 'all the fullness of the Deity dwells bodily'?",
            "options": ["The High Priest", "The Apostle Paul", "Christ (Jesus)", "The Church"],
            "correct": "Christ (Jesus)",
            "reference": "Colossians 2:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the key contrast Paul uses to describe the believer's former life versus their present reality in Christ?",
            "options": ["From weakness to strength", "From darkness to light", "From poverty to riches", "From death (dead in sins) to life (made alive with Christ)"],
            "correct": "From death (dead in sins) to life (made alive with Christ)",
            "reference": "Colossians 2:13",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul warns against the heresy that insisted on strict adherence to religious laws regarding food and drink, festivals, new moon, or what other Old Testament observance?",
            "options": ["Circumcision", "Fasting", "The Sabbath", "Sacrifice"],
            "correct": "The Sabbath",
            "reference": "Colossians 2:16",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul urges the Colossians to 'set your minds' on things above, not on things on the earth, because their true life is hidden with Christ in whom?",
            "options": ["The Church", "The Father (God)", "The Holy Spirit", "The Temple"],
            "correct": "The Father (God)",
            "reference": "Colossians 3:1-3",
            "difficulty": "Moderate"
        },
        {
            "question": "In his instructions on daily living, Paul emphasizes the importance of letting what specific entity 'dwell richly' within them?",
            "options": ["The Holy Spirit", "The love of God", "The word of Christ", "The wisdom of the elders"],
            "correct": "The word of Christ",
            "reference": "Colossians 3:16",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul's final instruction regarding prayer is to continue steadfastly in it, being watchful with what specific attitude?",
            "options": ["Humility", "Boldness", "Thanksgiving", "Diligence"],
            "correct": "Thanksgiving",
            "reference": "Colossians 4:2",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Who was the founder of the church in Colossae, who likely reported the heresy to Paul while Paul was imprisoned?",
            "options": ["Tychicus", "Onesimus", "Epaphras", "Timothy"],
            "correct": "Epaphras",
            "reference": "Colossians 1:7-8; 4:12",
            "difficulty": "Hard"
        },
        {
            "question": "In the Christ Hymn (Colossians 1), what two specific spiritual realities are said to have been reconciled through Christ's death on the cross?",
            "options": ["Jew and Gentile", "God and the world", "Things on earth and things in heaven", "Law and Grace"],
            "correct": "Things on earth and things in heaven",
            "reference": "Colossians 1:20",
            "difficulty": "Hard"
        },
        {
            "question": "Paul says that in Christ are hidden all the treasures of **_________** and **_________**.",
            "options": ["Righteousness and peace", "Power and glory", "Wisdom and knowledge", "Love and mercy"],
            "correct": "Wisdom and knowledge",
            "reference": "Colossians 2:3",
            "difficulty": "Hard"
        },
        {
            "question": "Paul uses a sharp phrase to warn against being taken captive by the heresy, referring to it as empty **_________** and deceit, according to human tradition.",
            "options": ["Logic", "Philosophy", "Reasoning", "Knowledge"],
            "correct": "Philosophy",
            "reference": "Colossians 2:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific ritual does Paul refer to as the 'circumcision of Christ,' done without hands, that believers received when they put off the body of the flesh?",
            "options": ["Water baptism", "The Holy Spirit", "Circumcision of the heart", "The cross"],
            "correct": "Water baptism",
            "reference": "Colossians 2:11-12",
            "difficulty": "Hard"
        },
        {
            "question": "Paul refers to the Old Testament Law as a 'shadow.' What does he say is the 'substance' (or body) of which the Law was a shadow?",
            "options": ["The Church", "Christ", "The Holy Spirit", "The New Jerusalem"],
            "correct": "Christ",
            "reference": "Colossians 2:17",
            "difficulty": "Hard"
        },
        {
            "question": "What specific instruction does Paul give to fathers regarding their children, which is unique to this letter?",
            "options": ["Teach them the Law of God", "Raise them in the discipline of the Lord", "Do not provoke your children to anger, lest they be discouraged", "Lead them to Christ"],
            "correct": "Do not provoke your children to anger, lest they be discouraged",
            "reference": "Colossians 3:21",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to summarize the virtue that believers must put on, which binds everything together in perfect harmony?",
            "options": ["Humility", "Patience", "Love", "Peace"],
            "correct": "Love",
            "reference": "Colossians 3:14",
            "difficulty": "Hard"
        },
        {
            "question": "Paul says that whatever believers do, they should work heartily, as for the Lord and not for whom?",
            "options": ["Their masters", "Men", "Themselves", "The church"],
            "correct": "Men",
            "reference": "Colossians 3:23",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the runaway slave, mentioned in the closing greetings, whom Paul refers to as 'a faithful and beloved brother' and sends back to Colossae?",
            "options": ["Epaphras", "Aristarchus", "Onesimus", "Tychicus"],
            "correct": "Onesimus",
            "reference": "Colossians 4:9",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the specific description Paul uses for the inheritance believers have been qualified to share in?",
            "options": ["The inheritance of the saints in light", "The eternal kingdom of God", "The riches of His grace", "The glory of the Son"],
            "correct": "The inheritance of the saints in light",
            "reference": "Colossians 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that by Christ, God created all things, both in heaven and on earth, visible and invisible, including what specific types of spiritual beings?",
            "options": ["Angels, demons, and powers", "Thrones, dominions, rulers, or authorities", "Saints and cherubim", "Archangels and seraphim"],
            "correct": "Thrones, dominions, rulers, or authorities",
            "reference": "Colossians 1:16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific bodily analogy does Paul use to describe the heretics' error, which fails to submit to Christ and thus receives no nourishment?",
            "options": ["The withered hand", "The severed branch", "Not holding fast to the Head, from which the whole body grows", "The foot cut off"],
            "correct": "Not holding fast to the Head, from which the whole body grows",
            "reference": "Colossians 2:19",
            "difficulty": "Extreme"
        },
        {
            "question": "When Paul describes the reconciliation process through Christ, he mentions that Christ has canceled the record of debt that stood against us, nailing it to what?",
            "options": ["The Law of Moses", "The cross", "The Temple door", "The heavenly scroll"],
            "correct": "The cross",
            "reference": "Colossians 2:14",
            "difficulty": "Extreme"
        },
        {
            "question": "The moral section of Colossians 3 begins by instructing believers to put to death the earthly members, listing what five specific sins (excluding immorality and passion)?",
            "options": ["Theft, envy, hatred, greed, lying", "Fornication, uncleanness, passion, evil desire, and covetousness (which is idolatry)", "Anger, wrath, malice, slander, and filthy language", "Pride, envy, wrath, sloth, and greed"],
            "correct": "Fornication, uncleanness, passion, evil desire, and covetousness (which is idolatry)",
            "reference": "Colossians 3:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What three categories of spiritual expression Paul encourages the Colossians to use when speaking to one another?",
            "options": ["Prophecies, revelations, and dreams", "Hymns, Psalms, and spiritual songs", "Prayers, requests, and thanksgivings", "Commands, exhortations, and rebukes"],
            "correct": "Hymns, Psalms, and spiritual songs",
            "reference": "Colossians 3:16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific virtue does Paul instruct masters to show their slaves, reminding them of the ultimate Master they both serve?",
            "options": ["Fair wages", "Equality and justice", "Generosity and kindness", "Freedom"],
            "correct": "Equality and justice",
            "reference": "Colossians 4:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific admonition does Paul give to Archippus, a fellow worker mentioned in the closing greetings?",
            "options": ["Greet the church in his house", "Fulfill the ministry which you have received in the Lord", "Do not be discouraged", "Come quickly to Paul"],
            "correct": "Fulfill the ministry which you have received in the Lord",
            "reference": "Colossians 4:17",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul concludes the letter with a personal instruction, asking the Colossians to remember what specific state he is in?",
            "options": ["His sickness", "His mission", "His chains", "His poverty"],
            "correct": "His chains",
            "reference": "Colossians 4:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the name of the church in a neighboring city that Paul instructs the Colossians to read this letter to, and to obtain and read the letter Paul wrote to them?",
            "options": ["Laodicea", "Hierapolis", "Ephesus", "Pergamum"],
            "correct": "Laodicea",
            "reference": "Colossians 4:16",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "1 Thessalonians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary positive attribute Paul praises the Thessalonians for, which was known throughout Macedonia and Achaia?",
            "options": ["Their wealth", "Their knowledge of the Law", "Their faith, love, and hope", "Their organized church structure"],
            "correct": "Their faith, love, and hope",
            "reference": "1 Thessalonians 1:3, 8",
            "difficulty": "Moderate"
        },
        {
            "question": "Which of Paul's traveling companions delivered the good report about the Thessalonians' faith and love, prompting Paul to write this letter?",
            "options": ["Silas", "Timothy", "Titus", "Barnabas"],
            "correct": "Timothy",
            "reference": "1 Thessalonians 3:2, 6",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific virtue does Paul repeatedly urge the Thessalonians to 'increase and abound' in toward one another and all people?",
            "options": ["Faith", "Hope", "Love", "Knowledge"],
            "correct": "Love",
            "reference": "1 Thessalonians 3:12; 4:9-10",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul strongly condemns the pursuit of sexual immorality and exhorts believers to control their own bodies in what manner?",
            "options": ["In holiness and honor", "In abstinence and denial", "In purity and meekness", "In quietness and study"],
            "correct": "In holiness and honor",
            "reference": "1 Thessalonians 4:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "The Thessalonians were primarily concerned and confused about the fate of which group of people?",
            "options": ["The Gentile converts", "Those who had died before Christ's return", "The false teachers among them", "The Jewish community"],
            "correct": "Those who had died before Christ's return",
            "reference": "1 Thessalonians 4:13",
            "difficulty": "Moderate"
        },
        {
            "question": "When Christ returns, Paul states that the dead in Christ will do what first?",
            "options": ["Rise", "Descend from heaven", "Be judged", "Sing"],
            "correct": "Rise",
            "reference": "1 Thessalonians 4:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the event where the living believers will be caught up together with the resurrected dead to meet the Lord?",
            "options": ["The Ascension", "The Resurrection", "The Catching Away (or Rapture)", "The Great Day"],
            "correct": "The Catching Away (or Rapture)",
            "reference": "1 Thessalonians 4:17 (often translated 'caught up')",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs believers to live as 'sons of light' and not to be 'asleep' because the Day of the Lord will come like what?",
            "options": ["A thief in the night", "A consuming fire", "A wedding feast", "A great trumpet"],
            "correct": "A thief in the night",
            "reference": "1 Thessalonians 5:2-6",
            "difficulty": "Moderate"
        },
        {
            "question": "In the final section of brief commands (Chapter 5), Paul gives three concise instructions, including: Rejoice always, pray without ceasing, and what else?",
            "options": ["Love one another", "Be humble", "In everything give thanks", "Stand firm in the faith"],
            "correct": "In everything give thanks",
            "reference": "1 Thessalonians 5:16-18",
            "difficulty": "Moderate"
        },
        {
            "question": "What gift of the Spirit does Paul instruct the church not to quench or despise?",
            "options": ["Teaching", "Healing", "Prophecy (or prophetic utterance)", "Speaking in tongues"],
            "correct": "Prophecy (or prophetic utterance)",
            "reference": "1 Thessalonians 5:19-20",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul reminds the Thessalonians that the Gospel came to them not just in word, but in what three other manifestations?",
            "options": ["Love, truth, and peace", "Power, the Holy Spirit, and with full conviction", "Miracles, signs, and wonders", "Gifts, knowledge, and wisdom"],
            "correct": "Power, the Holy Spirit, and with full conviction",
            "reference": "1 Thessalonians 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "Paul uses two familial metaphors to describe his gentle conduct among the Thessalonians. What are they?",
            "options": ["A father and an older brother", "A mother and a brother", "A father and a mother nursing her children", "A shepherd and a flock"],
            "correct": "A father and a mother nursing her children",
            "reference": "1 Thessalonians 2:7, 11",
            "difficulty": "Hard"
        },
        {
            "question": "What specific physical action did Paul and his companions perform while working day and night among the Thessalonians to avoid being a financial burden?",
            "options": ["Selling produce", "Making tents", "Working with their own hands (laboring)", "Fishing"],
            "correct": "Working with their own hands (laboring)",
            "reference": "1 Thessalonians 2:9",
            "difficulty": "Hard"
        },
        {
            "question": "Paul states that he sent Timothy because he was afraid that what entity had tempted the Thessalonians and made their labor in vain?",
            "options": ["The false apostles", "The devil (or 'the tempter')", "The Law", "The world"],
            "correct": "The devil (or 'the tempter')",
            "reference": "1 Thessalonians 3:5",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs believers to live quiet lives, mind their own affairs, and work with their hands so that they may walk properly toward whom?",
            "options": ["The apostles", "The elders", "Outsiders (or 'those who are outside')", "The poor"],
            "correct": "Outsiders (or 'those who are outside')",
            "reference": "1 Thessalonians 4:11-12",
            "difficulty": "Hard"
        },
        {
            "question": "The second key event Paul describes in the return of Christ is what sound will be heard?",
            "options": ["A great earthquake", "The sound of many waters", "The voice of an archangel and the trump of God", "The shouting of the saints"],
            "correct": "The voice of an archangel and the trump of God",
            "reference": "1 Thessalonians 4:16",
            "difficulty": "Hard"
        },
        {
            "question": "Believers are instructed to put on a specific set of spiritual armor for protection on the Day of the Lord. What three items are listed?",
            "options": ["Breastplate of righteousness, helmet of salvation, and sword of the Spirit", "Breastplate of faith and love, and for a helmet, the hope of salvation", "Shield of faith, breastplate of love, and belt of truth", "Helmet of salvation, sword of the Spirit, and shield of faith"],
            "correct": "Breastplate of faith and love, and for a helmet, the hope of salvation",
            "reference": "1 Thessalonians 5:8",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action does Paul advise the Thessalonians to take with the leaders who labor among them, are over them in the Lord, and admonish them?",
            "options": ["Respect them (or 'esteem them highly in love for their work's sake')", "Pay them a high salary", "Obey all their commands", "Test their teaching daily"],
            "correct": "Respect them (or 'esteem them highly in love for their work's sake')",
            "reference": "1 Thessalonians 5:12-13",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action does Paul advise believers to take regarding prophetic utterances?",
            "options": ["Test the spirits to see whether they are from God", "Do not believe every prophecy", "Test everything; hold fast what is good", "Compare it to the Law of Moses"],
            "correct": "Test everything; hold fast what is good",
            "reference": "1 Thessalonians 5:21",
            "difficulty": "Hard"
        },
        {
            "question": "What specific part of the believer does Paul pray will be kept 'sound and blameless' at the coming of the Lord Jesus Christ?",
            "options": ["Their heart and mind", "Their body and soul", "Their whole spirit, soul, and body", "Their faith, love, and hope"],
            "correct": "Their whole spirit, soul, and body",
            "reference": "1 Thessalonians 5:23",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul reminds the Thessalonians that they turned from idols to serve the living and true God and to wait for what specific reality regarding Jesus?",
            "options": ["His coming in the clouds", "His Son from heaven, whom He raised from the dead, Jesus, who delivers us from the wrath to come", "His reign on earth", "His new kingdom"],
            "correct": "His Son from heaven, whom He raised from the dead, Jesus, who delivers us from the wrath to come",
            "reference": "1 Thessalonians 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul assures the Thessalonians that they will not mourn the dead without hope, because the dead are described as doing what?",
            "options": ["Sleeping in Jesus", "Awaiting the resurrection", "Resting in Paradise", "In the hands of the Father"],
            "correct": "Sleeping in Jesus",
            "reference": "1 Thessalonians 4:13-14",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul declares that he and his team were willing to impart not only the Gospel of God but also what else to the Thessalonians?",
            "options": ["Their entire possession", "Their own lives (or souls)", "Their knowledge of the Law", "Their apostolic authority"],
            "correct": "Their own lives (or souls)",
            "reference": "1 Thessalonians 2:8",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul mentions that he was prevented from visiting the Thessalonians again by whom?",
            "options": ["The Roman officials", "The Jewish authorities", "Satan (or 'the tempter')", "The false teachers"],
            "correct": "Satan (or 'the tempter')",
            "reference": "1 Thessalonians 2:18",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul gives the command to 'be at peace among yourselves.' He contrasts this with four types of people they should deal with: the **unruly**, the **faint-hearted**, the **weak**, and **_________**.",
            "options": ["The proud", "All men", "The rich", "The Gentiles"],
            "correct": "All men",
            "reference": "1 Thessalonians 5:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description Paul gives to the 'day' and 'night' when describing the timing of the Lord's return?",
            "options": ["When they say, 'Peace and safety!' then sudden destruction comes upon them", "When the temple is rebuilt", "When the signs are all fulfilled", "When the trumpet sounds"],
            "correct": "When they say, 'Peace and safety!' then sudden destruction comes upon them",
            "reference": "1 Thessalonians 5:3",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that his hope, joy, and crown of boasting at the Lord's return are what specific group of people?",
            "options": ["The apostles", "The saints in heaven", "The Thessalonians", "The persecuted believers"],
            "correct": "The Thessalonians",
            "reference": "1 Thessalonians 2:19-20",
            "difficulty": "Extreme"
        },
        {
            "question": "What unique instruction does Paul give regarding the act of giving a holy kiss?",
            "options": ["Greet all the brethren with a holy kiss", "Greet the elders with a holy kiss", "Greet one another with a holy kiss", "Greet the women with a holy kiss"],
            "correct": "Greet all the brethren with a holy kiss",
            "reference": "1 Thessalonians 5:26",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul warns against anyone transgressing and defrauding a brother in the matter of what?",
            "options": ["Money", "The Holy Spirit", "Sexual conduct (or 'the matter')", "The church leadership"],
            "correct": "Sexual conduct (or 'the matter')",
            "reference": "1 Thessalonians 4:6",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul uses a phrase to emphasize God's calling them out of darkness and into His light. What does he say God did *not* appoint them to?",
            "options": ["To fear and trembling", "To wrath, but to obtain salvation through our Lord Jesus Christ", "To poverty and sickness", "To persecution and distress"],
            "correct": "To wrath, but to obtain salvation through our Lord Jesus Christ",
            "reference": "1 Thessalonians 5:9",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Thessalonians",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What primary issue related to the Day of the Lord was confusing the Thessalonians, prompting Paul to write this second letter?",
            "options": ["They thought it had already arrived", "They were unsure if they would be resurrected", "They were concerned about persecution", "They were worried about financial hardship"],
            "correct": "They thought it had already arrived",
            "reference": "2 Thessalonians 2:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul praises the Thessalonians for their perseverance and faith in the midst of what ongoing challenge?",
            "options": ["Famine", "Persecutions and afflictions", "False teaching", "Internal divisions"],
            "correct": "Persecutions and afflictions",
            "reference": "2 Thessalonians 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "When the Lord Jesus is revealed from heaven, He will come with His mighty angels in blazing fire to execute judgment upon what two groups of people?",
            "options": ["The wicked and the careless", "Those who do not know God and those who do not obey the gospel", "The rich and the poor", "The rulers and the authorities"],
            "correct": "Those who do not know God and those who do not obey the gospel",
            "reference": "2 Thessalonians 1:8",
            "difficulty": "Moderate"
        },
        {
            "question": "What title does Paul give the central figure who will arise before the Day of the Lord (the final event) to deceive people?",
            "options": ["The False Prophet", "The Son of God", "The Man of Lawlessness (or Sin)", "The Antichrist"],
            "correct": "The Man of Lawlessness (or Sin)",
            "reference": "2 Thessalonians 2:3",
            "difficulty": "Moderate"
        },
        {
            "question": "What phrase does Paul use to describe the supernatural power the Man of Lawlessness will operate under?",
            "options": ["The power of the flesh", "The working of Satan", "The power of man", "The might of the Romans"],
            "correct": "The working of Satan",
            "reference": "2 Thessalonians 2:9",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul tells the Thessalonians to stand firm and hold to the traditions (teachings) they learned from him either by word or by what?",
            "options": ["Prophecy", "Miracles", "Letter (or epistle)", "The Old Testament Law"],
            "correct": "Letter (or epistle)",
            "reference": "2 Thessalonians 2:15",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul asks the Thessalonians to pray that the Lord's word may spread rapidly and be what, just as it was with them?",
            "options": ["Believed and followed", "Honored (or 'glorified')", "Known to all nations", "Written down"],
            "correct": "Honored (or 'glorified')",
            "reference": "2 Thessalonians 3:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs the church to withdraw from every brother who walks in what manner?",
            "options": ["In a fleshly manner", "In the spirit of pride", "Disorderly (or 'in an unruly manner')", "Unrighteously"],
            "correct": "Disorderly (or 'in an unruly manner')",
            "reference": "2 Thessalonians 3:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the common saying Paul uses to condemn idleness and encourage work, noting his own example?",
            "options": ["A man reaps what he sows", "Be diligent in business", "If anyone is not willing to work, let him not eat", "Work while it is day"],
            "correct": "If anyone is not willing to work, let him not eat",
            "reference": "2 Thessalonians 3:10",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs the church to admonish the disorderly brother as a brother, and not to regard him as what?",
            "options": ["A sinner", "An enemy", "An outcast", "A Gentile"],
            "correct": "An enemy",
            "reference": "2 Thessalonians 3:15",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "The judgment on those who disobey the Gospel will be what specific punishment?",
            "options": ["They will be scattered throughout the world", "They will suffer the loss of possessions", "They will suffer eternal destruction, away from the presence of the Lord", "They will be tormented for a thousand years"],
            "correct": "They will suffer eternal destruction, away from the presence of the Lord",
            "reference": "2 Thessalonians 1:9",
            "difficulty": "Hard"
        },
        {
            "question": "Paul mentions that one specific event must occur *before* the Day of the Lord comes. What is it?",
            "options": ["The resurrection of the dead", "The apostasy (the rebellion) must come first", "The gospel must be preached to all nations", "The Temple must be rebuilt"],
            "correct": "The apostasy (the rebellion) must come first",
            "reference": "2 Thessalonians 2:3",
            "difficulty": "Hard"
        },
        {
            "question": "The Man of Lawlessness will enter the Temple of God and do what action, claiming to be divine?",
            "options": ["He will offer a sacrifice", "He will sit down in the temple of God, proclaiming himself to be God", "He will destroy the altar", "He will defile the sanctuary"],
            "correct": "He will sit down in the temple of God, proclaiming himself to be God",
            "reference": "2 Thessalonians 2:4",
            "difficulty": "Hard"
        },
        {
            "question": "What powerful entity is currently restraining the Man of Lawlessness, preventing him from being revealed?",
            "options": ["The Church", "The Holy Spirit (or 'the one who restrains')", "The power of God", "The Roman Emperor"],
            "correct": "The Holy Spirit (or 'the one who restrains')",
            "reference": "2 Thessalonians 2:6-7",
            "difficulty": "Hard"
        },
        {
            "question": "What is the final method by which the Lord will destroy the Man of Lawlessness at His return?",
            "options": ["By a great earthquake", "By the fire of His mouth", "By the breath of His mouth and the brightness of His coming", "By the word of His power"],
            "correct": "By the breath of His mouth and the brightness of His coming",
            "reference": "2 Thessalonians 2:8",
            "difficulty": "Hard"
        },
        {
            "question": "God will send the unbelievers a 'deluding influence' (or 'strong delusion') so that they will believe what falsehood?",
            "options": ["That the resurrection has occurred", "That the gospel is false", "The lie (the Man of Lawlessness)", "That Jesus is not the Messiah"],
            "correct": "The lie (the Man of Lawlessness)",
            "reference": "2 Thessalonians 2:11",
            "difficulty": "Hard"
        },
        {
            "question": "Paul praises God because He chose the Thessalonians for salvation from the beginning through sanctification by the Spirit and belief in what?",
            "options": ["The Law of Moses", "The apostles' teaching", "The truth", "The resurrection"],
            "correct": "The truth",
            "reference": "2 Thessalonians 2:13",
            "difficulty": "Hard"
        },
        {
            "question": "Paul states that the one who is idle or disorderly does what activity regarding other people's business?",
            "options": ["Steals from them", "Gossip about them", "Is a busybody (or 'busies himself with nothing')", "Condemns them"],
            "correct": "Is a busybody (or 'busies himself with nothing')",
            "reference": "2 Thessalonians 3:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the key difference between Paul's final salutation in 2 Thessalonians and his practice in other letters?",
            "options": ["He writes the entire final salutation with his own hand as a sign of authenticity", "He asks for a special offering", "He provides a long blessing for them", "He writes it in Aramaic"],
            "correct": "He writes the entire final salutation with his own hand as a sign of authenticity",
            "reference": "2 Thessalonians 3:17",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs the Thessalonians to work quietly and eat what, setting an example for the disorderly?",
            "options": ["Their own bread (or 'food')", "The food of the church", "The food of the poor", "The food of the Gentiles"],
            "correct": "Their own bread (or 'food')",
            "reference": "2 Thessalonians 3:12",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul says that when the Lord comes, He will be glorified in His saints and marveled at among whom?",
            "options": ["All those who have believed", "The apostles and prophets", "The angels of God", "The Gentiles"],
            "correct": "All those who have believed",
            "reference": "2 Thessalonians 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul references the unsettling false teaching about the Day of the Lord coming from three possible sources. What are they?",
            "options": ["Spirit, word, or letter purporting to be from us", "The Law, the prophets, or the elders", "Peter, James, or John", "Prophets, teachers, or false apostles"],
            "correct": "Spirit, word, or letter purporting to be from us",
            "reference": "2 Thessalonians 2:2",
            "difficulty": "Extreme"
        },
        {
            "question": "In the context of the Man of Lawlessness, what specific lie does Paul say the unbelievers receive because they refuse to love the truth?",
            "options": ["That they are saved by works", "That Jesus is not coming back", "They did not receive the love of the truth so as to be saved", "That the resurrection has already passed"],
            "correct": "They did not receive the love of the truth so as to be saved",
            "reference": "2 Thessalonians 2:10",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul asks the church to pray for him so that he may be delivered from what kind of men?",
            "options": ["Wicked and evil men (or 'unreasonable and wicked men')", "The Jews in Jerusalem", "The Romans who are persecuting him", "The false apostles who oppose him"],
            "correct": "Wicked and evil men (or 'unreasonable and wicked men')",
            "reference": "2 Thessalonians 3:2",
            "difficulty": "Extreme"
        },
        {
            "question": "The Man of Lawlessness will deceive with 'all power, signs, and lying wonders' and with what other deceptive element?",
            "options": ["Every kind of wicked deception (or 'unrighteous deception')", "The wisdom of man", "The power of Satan", "The appearance of righteousness"],
            "correct": "Every kind of wicked deception (or 'unrighteous deception')",
            "reference": "2 Thessalonians 2:9-10",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the unique command Paul gives to the disorderly that he asks them to do in the name of the Lord Jesus Christ?",
            "options": ["To remain quiet", "To work in quietness and eat their own bread", "To restore the truth of the gospel", "To apologize to the church"],
            "correct": "To work in quietness and eat their own bread",
            "reference": "2 Thessalonians 3:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific description of honor does the Man of Lawlessness seek, placing himself above?",
            "options": ["Every so-called god or object of worship", "Every earthly king", "The High Priest", "The Law of Moses"],
            "correct": "Every so-called god or object of worship",
            "reference": "2 Thessalonians 2:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul assures the Thessalonians that the Lord is faithful and will strengthen and guard them from whom?",
            "options": ["The world", "The devil (or 'the evil one')", "The false apostles", "The coming persecution"],
            "correct": "The devil (or 'the evil one')",
            "reference": "2 Thessalonians 3:3",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul explicitly states that the Thessalonians were chosen by God for salvation through the Spirit and belief in the truth, to obtain the glory of whom?",
            "options": ["The apostles", "The Lord Jesus Christ", "God the Father", "The saints in heaven"],
            "correct": "The Lord Jesus Christ",
            "reference": "2 Thessalonians 2:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What does Paul instruct the faithful to do if anyone does not obey his word in the letter?",
            "options": ["Write him a letter of correction", "Note that person and do not associate with him, so that he may be put to shame", "Ignore him, for he is weak", "Excommunicate him immediately"],
            "correct": "Note that person and do not associate with him, so that he may be put to shame",
            "reference": "2 Thessalonians 3:14",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "1 Timothy",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary relationship between Paul and Timothy?",
            "options": ["Fellow Apostle", "Paul's Son in the Faith (or 'True Child in the Faith')", "Timothy's Grandfather", "Paul's Teacher"],
            "correct": "Paul's Son in the Faith (or 'True Child in the Faith')",
            "reference": "1 Timothy 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "In what specific city was Timothy serving as Paul's representative when this letter was written?",
            "options": ["Thessalonica", "Rome", "Ephesus", "Corinth"],
            "correct": "Ephesus",
            "reference": "1 Timothy 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that the goal of the Law is what virtue that comes from a pure heart, a good conscience, and sincere faith?",
            "options": ["Righteousness", "Holiness", "Love", "Obedience"],
            "correct": "Love",
            "reference": "1 Timothy 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul declares that 'Christ Jesus came into the world to save sinners.' What unique title does Paul immediately give himself after this statement?",
            "options": ["The chief of sinners", "The servant of God", "The greatest of the Apostles", "The first martyr"],
            "correct": "The chief of sinners",
            "reference": "1 Timothy 1:15",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs men to pray everywhere, lifting up holy hands without what two negative actions?",
            "options": ["Doubt and fear", "Anger and disputing (or 'doubting')", "Worry and greed", "Pride and boasting"],
            "correct": "Anger and disputing (or 'doubting')",
            "reference": "1 Timothy 2:8",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary characteristic Paul uses to describe the 'mystery of godliness'?",
            "options": ["Keeping the Law perfectly", "God was manifested in the flesh, justified in the Spirit, seen by angels, preached among the Gentiles, believed on in the world, received up in glory", "Casting out demons and healing the sick", "The final resurrection"],
            "correct": "God was manifested in the flesh, justified in the Spirit, seen by angels, preached among the Gentiles, believed on in the world, received up in glory",
            "reference": "1 Timothy 3:16",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul warns that in later times, some will depart from the faith by devoting themselves to deceitful spirits and doctrines of whom?",
            "options": ["The philosophers", "Demons", "False prophets", "The world"],
            "correct": "Demons",
            "reference": "1 Timothy 4:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs Timothy not to let anyone despise his youth, but to be an example to believers in five areas, including speech, conduct, love, spirit, and what else?",
            "options": ["Faith", "Holiness", "Purity", "Knowledge"],
            "correct": "Purity",
            "reference": "1 Timothy 4:12",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul condemns the love of money, stating that it is the root of what?",
            "options": ["All evil (or 'a root of all kinds of evil')", "Heresy", "False teaching", "Discontentment"],
            "correct": "All evil (or 'a root of all kinds of evil')",
            "reference": "1 Timothy 6:10",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Paul instruct Timothy to flee from, using the term 'man of God'?",
            "options": ["The love of money (and other unrighteous things)", "The persecution of the Romans", "The temptations of the flesh", "The false teachers"],
            "correct": "The love of money (and other unrighteous things)",
            "reference": "1 Timothy 6:11",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul instructs that an overseer (bishop) must be the husband of only how many wives?",
            "options": ["One (the husband of one wife)", "Two", "None", "As many as he chooses"],
            "correct": "One (the husband of one wife)",
            "reference": "1 Timothy 3:2",
            "difficulty": "Hard"
        },
        {
            "question": "In the list of qualifications for deacons, they are instructed to hold to the mystery of the faith with what kind of conscience?",
            "options": ["A clear conscience", "A pure conscience", "A good conscience", "A strong conscience"],
            "correct": "A pure conscience",
            "reference": "1 Timothy 3:9",
            "difficulty": "Hard"
        },
        {
            "question": "Paul says that women will be saved through what specific experience (if they continue in faith, love, and sanctification)?",
            "options": ["Obeying their husbands", "Childbearing", "Submission to the church", "Silence in the service"],
            "correct": "Childbearing",
            "reference": "1 Timothy 2:15",
            "difficulty": "Hard"
        },
        {
            "question": "Paul warns against the false teachers who command believers to abstain from eating certain foods and from what other natural activity?",
            "options": ["Drinking wine", "Working on the Sabbath", "Marriage", "Fasting"],
            "correct": "Marriage",
            "reference": "1 Timothy 4:3",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs Timothy to take no part in the sins of others and to do what immediately in regard to the ordination of elders?",
            "options": ["Pray over them publicly", "Lay hands suddenly on no man", "Appoint them immediately", "Test their knowledge of the Law"],
            "correct": "Lay hands suddenly on no man",
            "reference": "1 Timothy 5:22",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to describe the purpose of the Church in the final revelation of the mystery of godliness?",
            "options": ["The pillar and ground of the truth", "The light of the world", "The body of Christ", "The foundation of the apostles"],
            "correct": "The pillar and ground of the truth",
            "reference": "1 Timothy 3:15",
            "difficulty": "Hard"
        },
        {
            "question": "Paul advises Timothy to drink a little wine for what specific physical ailment?",
            "options": ["His lack of energy", "His stomach and his frequent ailments", "His weakness", "His sleeplessness"],
            "correct": "His stomach and his frequent ailments",
            "reference": "1 Timothy 5:23",
            "difficulty": "Hard"
        },
        {
            "question": "In giving public rebuke to an elder, Paul instructs Timothy to do so only in the presence of whom?",
            "options": ["The whole church", "The apostles", "The elders who are without sin", "Two or three witnesses"],
            "correct": "Two or three witnesses",
            "reference": "1 Timothy 5:19-20",
            "difficulty": "Hard"
        },
        {
            "question": "The primary requirement for a widow to be 'put on the list' of those supported by the church is that she must be at least what age?",
            "options": ["Forty", "Fifty", "Sixty", "Seventy"],
            "correct": "Sixty",
            "reference": "1 Timothy 5:9",
            "difficulty": "Hard"
        },
        {
            "question": "What does Paul identify as the two men who had shipwrecked their faith and were delivered over to Satan?",
            "options": ["Diotrephes and Demas", "Philetus and Hymenaeus", "Hymenaeus and Alexander", "Phygellus and Hermogenes"],
            "correct": "Hymenaeus and Alexander",
            "reference": "1 Timothy 1:19-20",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul states that the one Mediator between God and men is whom?",
            "options": ["The Holy Spirit", "The Law of Moses", "The Man Christ Jesus", "The Apostle Paul"],
            "correct": "The Man Christ Jesus",
            "reference": "1 Timothy 2:5",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul warns that the one who fails to provide for his own relatives, and especially members of his household, has denied the faith and is worse than whom?",
            "options": ["A sinner", "An unbeliever (or 'infidel')", "A Gentile", "A false teacher"],
            "correct": "An unbeliever (or 'infidel')",
            "reference": "1 Timothy 5:8",
            "difficulty": "Extreme"
        },
        {
            "question": "The overseer (bishop) must have a good testimony among what specific group of people?",
            "options": ["The other apostles", "Those outside the church", "The rulers and authorities", "The elders in Jerusalem"],
            "correct": "Those outside the church",
            "reference": "1 Timothy 3:7",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs the rich to be generous and ready to share, storing up for themselves a good foundation for the future so that they may take hold of what?",
            "options": ["The true riches", "That which is truly life (or 'eternal life')", "The crown of righteousness", "The love of God"],
            "correct": "That which is truly life (or 'eternal life')",
            "reference": "1 Timothy 6:18-19",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul warns against 'godless chatter and opposing arguments of what is falsely called **_________**.'",
            "options": ["Prophecy", "Wisdom", "Knowledge", "Truth"],
            "correct": "Knowledge",
            "reference": "1 Timothy 6:20",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that God desires what outcome for all people?",
            "options": ["To be well-off", "To be saved and to come to a knowledge of the truth", "To keep the Law perfectly", "To live in peace"],
            "correct": "To be saved and to come to a knowledge of the truth",
            "reference": "1 Timothy 2:4",
            "difficulty": "Extreme"
        },
        {
            "question": "What phrase does Paul use to describe the women who are to be supported by the church and are instructed to raise children, practice hospitality, and engage in good works?",
            "options": ["Widows indeed", "The chosen women", "Godly women", "Women of good report"],
            "correct": "Widows indeed",
            "reference": "1 Timothy 5:3, 5, 10",
            "difficulty": "Extreme"
        },
        {
            "question": "What phrase does Paul use to instruct Timothy to devote himself to, in the context of reading Scripture publicly?",
            "options": ["Public reading of Scripture, to exhortation, to teaching", "Prayer and fasting", "Miracles and signs", "Evangelism and outreach"],
            "correct": "Public reading of Scripture, to exhortation, to teaching",
            "reference": "1 Timothy 4:13",
            "difficulty": "Extreme"
        },
        {
            "question": "The qualification for a deacon is that he must be what kind of man, meaning he is tested before serving?",
            "options": ["A man of faith", "A tested man (or 'first tested')", "An honest man", "A faithful man"],
            "correct": "A tested man (or 'first tested')",
            "reference": "1 Timothy 3:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What two instructions does Paul give Timothy regarding the prophetic gifts that were bestowed upon him when the presbytery laid their hands on him?",
            "options": ["Do not ignore or neglect the gift", "Do not be ashamed of it", "Meditate on these things; devote yourself entirely to them", "Use it publicly and boldly"],
            "correct": "Do not ignore or neglect the gift",
            "reference": "1 Timothy 4:14-15",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Timothy",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of 2 Timothy?",
            "options": ["A rebuke of the Ephesian church", "Paul's final charge and encouragement to Timothy to remain faithful and endure in ministry", "Instructions on church leadership structure", "The doctrine of the resurrection"],
            "correct": "Paul's final charge and encouragement to Timothy to remain faithful and endure in ministry",
            "reference": "Overall theme, Paul's imminent death (2 Tim 4:6)",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs Timothy to not be ashamed of the testimony of the Lord or of whom else?",
            "options": ["The Apostle Peter", "Paul (His prisoner)", "The Ephesian church", "The Gentile converts"],
            "correct": "Paul (His prisoner)",
            "reference": "2 Timothy 1:8",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul tells Timothy that God did not give us a spirit of fear, but of power, and of love, and of what other virtue?",
            "options": ["Grace", "A sound mind (or self-control)", "Wisdom", "Boldness"],
            "correct": "A sound mind (or self-control)",
            "reference": "2 Timothy 1:7",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul encourages Timothy to suffer hardship as what specific kind of devoted worker?",
            "options": ["A devoted evangelist", "A good soldier of Jesus Christ", "A faithful servant", "A hard-working farmer"],
            "correct": "A good soldier of Jesus Christ",
            "reference": "2 Timothy 2:3",
            "difficulty": "Moderate"
        },
        {
            "question": "The three analogies Paul uses to describe Timothy's commitment to ministry are a soldier, an athlete (or competitor), and whom else?",
            "options": ["A shepherd", "A fisherman", "A hard-working farmer", "A wise builder"],
            "correct": "A hard-working farmer",
            "reference": "2 Timothy 2:3-6",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul declares that 'All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, and for **_________**.'",
            "options": ["Study", "Instruction in righteousness", "Preaching", "Wisdom"],
            "correct": "Instruction in righteousness",
            "reference": "2 Timothy 3:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What solemn command does Paul give Timothy, urging him to preach the word and be ready in season and out of season?",
            "options": ["Do the work of an evangelist", "Fulfill your ministry", "I charge you therefore before God and the Lord Jesus Christ", "Do not be ashamed"],
            "correct": "I charge you therefore before God and the Lord Jesus Christ",
            "reference": "2 Timothy 4:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul reflects on his impending death, stating that he has fought the good fight, finished the race, and kept what?",
            "options": ["His integrity", "The faith", "His promises", "His commitment"],
            "correct": "The faith",
            "reference": "2 Timothy 4:7",
            "difficulty": "Moderate"
        },
        {
            "question": "What reward does Paul state awaits him, which the Lord, the righteous Judge, will give him on that Day?",
            "options": ["The crown of life", "The crown of righteousness", "A place in the kingdom", "The crown of glory"],
            "correct": "The crown of righteousness",
            "reference": "2 Timothy 4:8",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul warns Timothy about the time when people will not endure sound doctrine but will accumulate teachers who cater to what?",
            "options": ["Their wealth", "Their ears (or 'own desires')", "Their traditions", "Their need for signs"],
            "correct": "Their ears (or 'own desires')",
            "reference": "2 Timothy 4:3",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul instructs Timothy to commit the things he has heard from Paul to what kind of people?",
            "options": ["Only the Apostles", "Faithful men who will be able to teach others also", "His immediate family members", "The wisest philosophers"],
            "correct": "Faithful men who will be able to teach others also",
            "reference": "2 Timothy 2:2",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Paul uses to describe the study habits of a dedicated worker, urging Timothy to be diligent?",
            "options": ["Study daily", "Study to show yourself approved to God, a workman who does not need to be ashamed, rightly dividing the word of truth", "Know the Scriptures deeply", "Memorize the Law"],
            "correct": "Study to show yourself approved to God, a workman who does not need to be ashamed, rightly dividing the word of truth",
            "reference": "2 Timothy 2:15",
            "difficulty": "Hard"
        },
        {
            "question": "Paul warns Timothy about two specific false teachers, Hymenaeus and Philetus, who had erred concerning what specific doctrine?",
            "options": ["The deity of Christ", "The resurrection (saying it is past already)", "The Second Coming", "The forgiveness of sins"],
            "correct": "The resurrection (saying it is past already)",
            "reference": "2 Timothy 2:17-18",
            "difficulty": "Hard"
        },
        {
            "question": "Paul refers to the Old Testament Scriptures that Timothy had known from childhood, which were able to make him wise for salvation through faith in whom?",
            "options": ["The prophets of old", "The Law of Moses", "Christ Jesus", "The God of Abraham"],
            "correct": "Christ Jesus",
            "reference": "2 Timothy 3:15",
            "difficulty": "Hard"
        },
        {
            "question": "In the final greetings, what is the name of the traveling companion who Paul mentions deserted him because he 'loved this present world'?",
            "options": ["Luke", "Mark", "Titus", "Demas"],
            "correct": "Demas",
            "reference": "2 Timothy 4:10",
            "difficulty": "Hard"
        },
        {
            "question": "Paul warns that those who oppose sound doctrine have what specific state of mind and character?",
            "options": ["Corrupt minds and are reprobate concerning the faith", "Foolish hearts and lack wisdom", "Hard hearts and are stubborn", "Weak minds and are easily swayed"],
            "correct": "Corrupt minds and are reprobate concerning the faith",
            "reference": "2 Timothy 3:8",
            "difficulty": "Hard"
        },
        {
            "question": "Paul instructs Timothy to cleanse himself from the influence of false teachers so that he may be a vessel for honorable use, prepared for what?",
            "options": ["The master's use and prepared for every good work", "The glory of God and the benefit of the church", "The kingdom of heaven", "The final reward"],
            "correct": "The master's use and prepared for every good work",
            "reference": "2 Timothy 2:21",
            "difficulty": "Hard"
        },
        {
            "question": "Paul reminds Timothy that the suffering of all those who desire to live godly in Christ Jesus is inevitable. What will all such believers suffer?",
            "options": ["Persecution", "Poverty", "Sickness", "Imprisonment"],
            "correct": "Persecution",
            "reference": "2 Timothy 3:12",
            "difficulty": "Hard"
        },
        {
            "question": "Paul encourages Timothy by reminding him of the genuine faith that first dwelt in his grandmother Lois and whom else?",
            "options": ["His father", "His mother Eunice", "His aunt Anna", "His grandfather"],
            "correct": "His mother Eunice",
            "reference": "2 Timothy 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "What was the name of the man who Paul says did him great harm and whom the Lord would repay according to his deeds?",
            "options": ["Alexander the coppersmith", "Hymenaeus", "Philetus", "Diotrephes"],
            "correct": "Alexander the coppersmith",
            "reference": "2 Timothy 4:14",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul refers to the teaching of the false teachers as spreading like what infectious disease?",
            "options": ["A fever", "A plague", "Gangrene (or cancer)", "Leprosy"],
            "correct": "Gangrene (or cancer)",
            "reference": "2 Timothy 2:17",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul compares the opposition Timothy faces from false teachers to the magicians who opposed Moses. What were the names of those two men?",
            "options": ["Jannes and Jambres", "Pharaoh and his priests", "Cain and Abel", "Balaam and Balak"],
            "correct": "Jannes and Jambres",
            "reference": "2 Timothy 3:8",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs Timothy to avoid foolish and ignorant disputes, knowing that they generate what outcome?",
            "options": ["Disappointment", "Wrath", "Quarrels (or 'strifes')", "Heresy"],
            "correct": "Quarrels (or 'strifes')",
            "reference": "2 Timothy 2:23",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Paul uses to describe the secure position of the Lord's chosen people, affirming that 'The Lord knows those who are His'?",
            "options": ["The Lord's house", "The firm foundation of God stands", "The unshakeable kingdom", "The eternal hope"],
            "correct": "The firm foundation of God stands",
            "reference": "2 Timothy 2:19",
            "difficulty": "Extreme"
        },
        {
            "question": "When Paul was abandoned by others at his first defense, what specific help did he receive?",
            "options": ["The Apostle Peter was with him", "The Holy Spirit spoke through him", "The Lord stood with me and strengthened me", "The Roman officials were lenient"],
            "correct": "The Lord stood with me and strengthened me",
            "reference": "2 Timothy 4:16-17",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul says that when Timothy is teaching, the Lord's servant must not quarrel, but be gentle to all, able to teach, and what else?",
            "options": ["Patient, in humility correcting those who are in opposition", "Wise in doctrine", "Quick to forgive", "Bold in the Spirit"],
            "correct": "Patient, in humility correcting those who are in opposition",
            "reference": "2 Timothy 2:24-25",
            "difficulty": "Extreme"
        },
        {
            "question": "In the final salutations, Paul mentions that he left which traveling companion sick at Miletus?",
            "options": ["Titus", "Trophimus", "Tychicus", "Luke"],
            "correct": "Trophimus",
            "reference": "2 Timothy 4:20",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs Timothy to 'retain the standard' of sound words he heard from Paul, in faith and love which are in whom?",
            "options": ["The Holy Spirit", "Christ Jesus", "The Church", "The Scriptures"],
            "correct": "Christ Jesus",
            "reference": "2 Timothy 1:13",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs Timothy to 'Do the work of an evangelist' and what other all-encompassing phrase regarding his ministry?",
            "options": ["Preach the word boldly", "Be ready in season and out of season", "Fulfill your ministry", "Be strong in the Lord"],
            "correct": "Fulfill your ministry",
            "reference": "2 Timothy 4:5",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul tells Timothy to come to him soon and to specifically bring what two items that he left with Carpus at Troas?",
            "options": ["His cloak and the scrolls (or 'books')", "The books and the parchment (or 'parchments')", "The cloak and the parchments", "The scrolls and his staff"],
            "correct": "The cloak and the parchments",
            "reference": "2 Timothy 4:13",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Titus",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary function Paul instructs Titus to carry out in the churches on the island of Crete?",
            "options": ["Raise funds for the poor", "Appoint elders in every city", "Evangelize the Gentiles", "Settle disputes between believers"],
            "correct": "Appoint elders in every city",
            "reference": "Titus 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the main topic of Titus 1, regarding the qualifications of elders?",
            "options": ["Their spiritual gifts", "Their theological training", "Their blameless character and management of their household", "Their financial stability"],
            "correct": "Their blameless character and management of their household",
            "reference": "Titus 1:6-9",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul states that the Cretans (the people of Crete) are naturally always what three things?",
            "options": ["Humble, gentle, and peaceful", "Lazy, wise, and kind", "Liars, evil beasts, and lazy gluttons", "Generous, faithful, and obedient"],
            "correct": "Liars, evil beasts, and lazy gluttons",
            "reference": "Titus 1:12",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Paul instruct Titus to do to the Cretan believers, using a strong term, so that they may be sound in the faith?",
            "options": ["Rebuke them sharply", "Teach them gently", "Pray for them constantly", "Send them away"],
            "correct": "Rebuke them sharply",
            "reference": "Titus 1:13",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary virtue does Paul instruct older women to teach younger women regarding their husbands and children?",
            "options": ["To be submissive and obedient", "To love their husbands and children", "To be strong and independent", "To be good cooks"],
            "correct": "To love their husbands and children",
            "reference": "Titus 2:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action did Jesus take to redeem us from every lawless deed and to purify for Himself a people for His own possession?",
            "options": ["He taught the Law", "He gave Himself for us", "He performed miracles", "He sent the Holy Spirit"],
            "correct": "He gave Himself for us",
            "reference": "Titus 2:14",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase Paul uses to describe salvation, emphasizing that it is based on God's kindness, not our deeds?",
            "options": ["Not by works of righteousness which we have done, but according to His mercy He saved us", "By faith alone", "Through the grace of God", "By keeping the Law"],
            "correct": "Not by works of righteousness which we have done, but according to His mercy He saved us",
            "reference": "Titus 3:5",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul instructs believers to avoid foolish disputes, genealogies, and strife about the Law, labeling them as what?",
            "options": ["Necessary discussions", "Useless and unprofitable", "Interesting topics", "Signs of great faith"],
            "correct": "Useless and unprofitable",
            "reference": "Titus 3:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific virtue should believers continually exhibit toward all men, especially the government officials?",
            "options": ["Obedience and subjection to rulers and authorities", "Boldness in preaching", "Wealth and power", "Unquestioning submission"],
            "correct": "Obedience and subjection to rulers and authorities",
            "reference": "Titus 3:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the name of the legalistic or divisive person whom Titus is instructed to reject after a first and second warning?",
            "options": ["A false prophet", "A factious man (or 'a divisive man')", "A greedy person", "A thief"],
            "correct": "A factious man (or 'a divisive man')",
            "reference": "Titus 3:10",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What is the specific description Paul uses to summarize the qualification of an elder's children?",
            "options": ["They must be adults", "They must be educated", "Not wild or disobedient (believing children, not open to the charge of debauchery or insubordination)", "They must be leaders in the church"],
            "correct": "Not wild or disobedient (believing children, not open to the charge of debauchery or insubordination)",
            "reference": "Titus 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "Paul warns against teachers who are doing what for the sake of dishonest gain?",
            "options": ["Stealing from the collection", "Teaching things which they ought not", "Lying about their credentials", "Falsifying the Scriptures"],
            "correct": "Teaching things which they ought not",
            "reference": "Titus 1:11",
            "difficulty": "Hard"
        },
        {
            "question": "The specific false teachings Paul warns against are described as 'Jewish myths and commands of men' who turn away from what?",
            "options": ["The New Testament", "The truth", "The Holy Spirit", "The apostles"],
            "correct": "The truth",
            "reference": "Titus 1:14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific motivation does Paul give for instructing young men to be sober-minded?",
            "options": ["So that they may be respected", "So that they can get married", "So that they can work hard", "So that the opponent may be ashamed, having nothing evil to say of them"],
            "correct": "So that the opponent may be ashamed, having nothing evil to say of them",
            "reference": "Titus 2:6-8",
            "difficulty": "Hard"
        },
        {
            "question": "Paul states that the grace of God instructs us to deny ungodliness and worldly desires, and to live how in the present age?",
            "options": ["Holy, separated lives", "Soberly, righteously, and godly", "Quietly, privately, and prayerfully", "Boldly, wisely, and powerfully"],
            "correct": "Soberly, righteously, and godly",
            "reference": "Titus 2:12",
            "difficulty": "Hard"
        },
        {
            "question": "Paul describes the Holy Spirit's role in salvation as the washing of regeneration and the renewing of whom?",
            "options": ["The Apostle Paul", "The Church", "The Holy Spirit", "The mind (or Spirit)"],
            "correct": "The Holy Spirit (or the Holy Spirit's renewing)",
            "reference": "Titus 3:5",
            "difficulty": "Hard"
        },
        {
            "question": "The ultimate result of believers being justified by God's grace is that they should become what?",
            "options": ["Heirs according to the hope of eternal life", "Leaders in the church", "Teachers of the Gospel", "A royal priesthood"],
            "correct": "Heirs according to the hope of eternal life",
            "reference": "Titus 3:7",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the city Paul mentions at the end where he decided to spend the winter, asking Titus to come to him there?",
            "options": ["Corinth", "Ephesus", "Nicopolis", "Rome"],
            "correct": "Nicopolis",
            "reference": "Titus 3:12",
            "difficulty": "Hard"
        },
        {
            "question": "What is the responsibility Paul gives to all believers regarding good works?",
            "options": ["To be careful to maintain good works", "To avoid all human works", "To do good only when the opportunity arises", "To earn their salvation through works"],
            "correct": "To be careful to maintain good works",
            "reference": "Titus 3:8",
            "difficulty": "Hard"
        },
        {
            "question": "Paul states that the elder must be able to hold fast the faithful word to teach sound doctrine and also to do what specific action?",
            "options": ["Perform miracles", "Convict those who contradict", "Pray for the sick", "Write new laws"],
            "correct": "Convict those who contradict",
            "reference": "Titus 1:9",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul begins the letter by stating his apostleship is according to the faith of God's elect and the acknowledgment of what specific attribute?",
            "options": ["The truth which accords with godliness", "The glory of God", "The wisdom of God", "The power of the Holy Spirit"],
            "correct": "The truth which accords with godliness",
            "reference": "Titus 1:1",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul declares that the motivation for his mission is related to the hope of eternal life, which God, who cannot lie, promised when?",
            "options": ["Before the giving of the Law", "Before time began (or 'before time eternal')", "Before the exile", "Before the birth of Christ"],
            "correct": "Before time began (or 'before time eternal')",
            "reference": "Titus 1:2",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that for those who are defiled and unbelieving, both their mind and what else are defiled?",
            "options": ["Their actions", "Their spirit", "Their conscience", "Their body"],
            "correct": "Their conscience",
            "reference": "Titus 1:15",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the command Paul gives to Titus regarding older men, who must be sober, reverent, temperate, sound in faith, in love, and in what other virtue?",
            "options": ["Hope", "Patience (or 'steadfastness')", "Knowledge", "Holiness"],
            "correct": "Patience (or 'steadfastness')",
            "reference": "Titus 2:2",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs Titus to show himself a pattern of good works, with uncorrupted doctrine, and what two qualities in speech?",
            "options": ["Boldness and authority", "Integrity and reverence", "Sound speech that cannot be condemned", "Wisdom and gentleness"],
            "correct": "Integrity and reverence (Titus 2:7) and Sound speech that cannot be condemned (Titus 2:8)",
            "reference": "Titus 2:7-8",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description Paul gives to the 'blessed hope' that believers eagerly await?",
            "options": ["The resurrection of the dead", "The glorious appearing of our great God and Savior Jesus Christ", "The day of judgment", "The end of the world"],
            "correct": "The glorious appearing of our great God and Savior Jesus Christ",
            "reference": "Titus 2:13",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that the Gentiles who are being saved were formerly characterized by being foolish, disobedient, deceived, and slaves to what?",
            "options": ["Lawless deeds", "Various lusts and pleasures", "Their own pride", "The devil"],
            "correct": "Various lusts and pleasures",
            "reference": "Titus 3:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Paul uses to describe those who claim to know God but deny Him by their works?",
            "options": ["Rebellious and factious", "Abominable, disobedient, and disqualified for every good work", "Liars and cheats", "Hypocrites and heretics"],
            "correct": "Abominable, disobedient, and disqualified for every good work",
            "reference": "Titus 1:16",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul instructs Titus to earnestly provide for the needs of Zenas, the lawyer, and whom else, so that they may lack nothing?",
            "options": ["Apollos", "Tychicus", "Timothy", "Artemas"],
            "correct": "Apollos",
            "reference": "Titus 3:13",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final, one-word instruction Paul gives to the believers at Crete regarding their daily conduct?",
            "options": ["Pray", "Rejoice", "Amen", "Greet"],
            "correct": "Greet",
            "reference": "Titus 3:15 ('Greet those who love us in the faith')",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Philemon",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the key theme and focus of the short letter to Philemon?",
            "options": ["Church governance", "Forgiveness and reconciliation", "The Second Coming of Christ", "Financial support for apostles"],
            "correct": "Forgiveness and reconciliation",
            "reference": "Overall theme (Paul pleading for forgiveness for Onesimus)",
            "difficulty": "Moderate"
        },
        {
            "question": "The letter to Philemon concerns a slave named Onesimus. What does the name 'Onesimus' mean?",
            "options": ["Servant of God", "Faithful one", "Profitable (or useful)", "Rebellious"],
            "correct": "Profitable (or useful)",
            "reference": "Philemon 1:11",
            "difficulty": "Moderate"
        },
        {
            "question": "Onesimus was the runaway slave of which wealthy Christian leader, to whom Paul addresses this letter?",
            "options": ["Timothy", "Epaphras", "Philemon", "Archippus"],
            "correct": "Philemon",
            "reference": "Philemon 1:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul asks Philemon to receive Onesimus back, no longer as a slave, but as what?",
            "options": ["A freedman", "A beloved brother", "A new church leader", "A hired hand"],
            "correct": "A beloved brother",
            "reference": "Philemon 1:16",
            "difficulty": "Moderate"
        },
        {
            "question": "Philemon's house was known to be a place where what Christian activity regularly occurred?",
            "options": ["Miracles were performed", "The church met", "The poor were fed", "Apostles were trained"],
            "correct": "The church met",
            "reference": "Philemon 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul appeals to Philemon based on what two attributes that Philemon had shown toward the Lord Jesus and all the saints?",
            "options": ["Wealth and influence", "Patience and humility", "Faith and love", "Justice and wisdom"],
            "correct": "Faith and love",
            "reference": "Philemon 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul refers to himself as what specific type of person when urging Philemon to receive Onesimus, appealing to Philemon's conscience?",
            "options": ["A spiritual father", "An old man and now also a prisoner of Jesus Christ", "A powerful apostle", "A fellow slave"],
            "correct": "An old man and now also a prisoner of Jesus Christ",
            "reference": "Philemon 1:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What does Paul promise to do if Onesimus owes Philemon anything or has wronged him?",
            "options": ["To pray for the debt to be canceled", "To repay the debt himself", "To send Philemon a new slave", "To ask the church to pay it"],
            "correct": "To repay the debt himself",
            "reference": "Philemon 1:18-19",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul implies that Philemon owed Paul a far greater debt. What was this debt?",
            "options": ["Paul gave him money", "Paul saved his life", "Philemon owed Paul his very self (or his life in Christ)", "Paul taught him the Law"],
            "correct": "Philemon owed Paul his very self (or his life in Christ)",
            "reference": "Philemon 1:19",
            "difficulty": "Moderate"
        },
        {
            "question": "Paul mentions that he has confidence in Philemon's what, and that he will do even more than Paul requests?",
            "options": ["Wealth", "Obedience", "Power", "Love"],
            "correct": "Obedience",
            "reference": "Philemon 1:21",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Paul refers to Onesimus as his son, whom he had begotten in what specific location?",
            "options": ["In Ephesus", "In the Gospel", "In my chains (or prison)", "In Christ"],
            "correct": "In my chains (or prison)",
            "reference": "Philemon 1:10",
            "difficulty": "Hard"
        },
        {
            "question": "What is the specific instruction Paul gives to Philemon regarding the reception of Onesimus when he returns?",
            "options": ["Receive him as you would receive Paul himself", "Receive him with joy and peace", "Receive him as a new believer", "Receive him as a freedman"],
            "correct": "Receive him as you would receive Paul himself",
            "reference": "Philemon 1:17",
            "difficulty": "Hard"
        },
        {
            "question": "Paul indicates he wanted to keep Onesimus with him for what reason?",
            "options": ["To pay off the debt", "To serve Paul in his chains on Philemon's behalf", "To teach him the Gospel more fully", "To travel with him to Rome"],
            "correct": "To serve Paul in his chains on Philemon's behalf",
            "reference": "Philemon 1:13",
            "difficulty": "Hard"
        },
        {
            "question": "Who is the other individual, besides Philemon, that Paul also addresses in the opening salutation, who may have been Philemon's wife?",
            "options": ["Apphia", "Lydia", "Priscilla", "Euodia"],
            "correct": "Apphia",
            "reference": "Philemon 1:2",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the 'fellow soldier' also addressed in the opening of the letter, who was likely a minister in Philemon's local church?",
            "options": ["Epaphras", "Tychicus", "Archippus", "Mark"],
            "correct": "Archippus",
            "reference": "Philemon 1:2",
            "difficulty": "Hard"
        },
        {
            "question": "Paul states that he could command Philemon in love to do what is proper, but instead chose to appeal to him for the sake of what virtue?",
            "options": ["Peace", "Love", "Justice", "Mercy"],
            "correct": "Love",
            "reference": "Philemon 1:8-9",
            "difficulty": "Hard"
        },
        {
            "question": "Paul uses a metaphor to describe the refreshing effect Philemon's faith had on whom?",
            "options": ["The poor in Jerusalem", "The Apostle Paul", "The hearts of the saints", "The church in Rome"],
            "correct": "The hearts of the saints",
            "reference": "Philemon 1:7",
            "difficulty": "Hard"
        },
        {
            "question": "Paul informs Philemon that he is preparing a lodging for himself, and asks Philemon to prepare it with what hope in mind?",
            "options": ["That he will be released soon", "That through your prayers I may be granted to you", "That he will be acquitted by Caesar", "That the debt will be repaid in full"],
            "correct": "That through your prayers I may be granted to you",
            "reference": "Philemon 1:22",
            "difficulty": "Hard"
        },
        {
            "question": "Paul signs the promise to repay the debt with what specific intention?",
            "options": ["That Philemon will trust him", "That he would not have to write a second letter", "That he might not say that Philemon owed him his very self", "That the promise would be legally binding"],
            "correct": "That he might not say that Philemon owed him his very self",
            "reference": "Philemon 1:19",
            "difficulty": "Hard"
        },
        {
            "question": "What is the specific description Paul uses to denote the kind of participation in the faith that he wishes for Philemon?",
            "options": ["That the communication of your faith may become effective", "That your love may grow", "That your works may abound", "That your hope may be steadfast"],
            "correct": "That the communication of your faith may become effective",
            "reference": "Philemon 1:6",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Paul refers to Onesimus as 'useful' now both to Philemon and to whom else?",
            "options": ["The church in Colossae", "The Lord Jesus Christ", "Paul himself", "The other apostles"],
            "correct": "Paul himself",
            "reference": "Philemon 1:11",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul's prayer is for the 'communication of your faith' to become effective by the acknowledgment of what specific reality?",
            "options": ["Every good thing which is in you in Christ Jesus", "The power of God", "The need for forgiveness", "The love of God"],
            "correct": "Every good thing which is in you in Christ Jesus",
            "reference": "Philemon 1:6",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul notes that Onesimus departed for a while, perhaps for what providential reason?",
            "options": ["That you might receive him forever", "That he might be converted", "That he might serve Paul", "That Philemon might forgive him"],
            "correct": "That you might receive him forever",
            "reference": "Philemon 1:15",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul notes that he wrote the letter with his own hand. What is the implied legal context of this action?",
            "options": ["To make the letter legally binding", "To make the command more forceful", "To show his affection", "To show the truth of his words"],
            "correct": "To make the letter legally binding",
            "reference": "Philemon 1:19",
            "difficulty": "Extreme"
        },
        {
            "question": "In the closing greetings, Paul is joined by five fellow workers, including Timothy and whom else, who is also mentioned in Colossians?",
            "options": ["Epaphras, Mark, Aristarchus, Demas, and Luke", "Luke, Titus, Silas, and Barnabas", "Mark, Peter, and James", "Demas, Crescens, and Titus"],
            "correct": "Epaphras, Mark, Aristarchus, Demas, and Luke",
            "reference": "Philemon 1:23-24 (These five are also associated with Paul's imprisonment in Colossians 4)",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul refers to Epaphras as his 'fellow prisoner in Christ Jesus.' What specific commitment is Epaphras known for, according to Colossians 4:12?",
            "options": ["His generosity", "His ceaseless wrestling in prayer", "His teaching ministry", "His traveling with Paul"],
            "correct": "His ceaseless wrestling in prayer",
            "reference": "Philemon 1:23 (Cross-reference Colossians 4:12)",
            "difficulty": "Extreme"
        },
        {
            "question": "In the final verse, Paul wishes Philemon grace from the Lord Jesus Christ and what other blessing?",
            "options": ["Love and peace", "The Holy Spirit", "Be with your spirit", "The Father and the Son"],
            "correct": "Be with your spirit",
            "reference": "Philemon 1:25",
            "difficulty": "Extreme"
        },
        {
            "question": "Philemon is strongly implied to be a member of the church in what specific city (though not explicitly named in the letter)?",
            "options": ["Ephesus", "Colossae", "Laodicea", "Philippi"],
            "correct": "Colossae",
            "reference": "Contextual link to Colossians 4:9, 12, 17",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Paul uses to express the joy he and the saints experienced due to Philemon's love?",
            "options": ["I thank God for your faith", "I have great joy and comfort in your love", "Your faith is known to all", "You have refreshed many hearts"],
            "correct": "I have great joy and comfort in your love",
            "reference": "Philemon 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul states that he has confidence in Philemon's obedience, so he wrote, knowing that Philemon would do what specific action?",
            "options": ["Forgive the debt", "Receive Onesimus gladly", "Do even more than Paul requested", "Free Onesimus immediately"],
            "correct": "Do even more than Paul requested",
            "reference": "Philemon 1:21",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Hebrews",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Book of Hebrews?",
            "options": ["A comparison between the Law and Grace", "The Supremacy and Finality of Christ over the Old Covenant", "The need for spiritual gifts", "Instructions for church organization"],
            "correct": "The Supremacy and Finality of Christ over the Old Covenant",
            "reference": "Overall theme (often summarized as 'Jesus is Better')",
            "difficulty": "Moderate"
        },
        {
            "question": "The author of Hebrews emphasizes that Christ is superior to the Old Testament prophets and what other type of spiritual being?",
            "options": ["The devil", "Angels", "Demons", "Cherubim"],
            "correct": "Angels",
            "reference": "Hebrews 1:4-2:9",
            "difficulty": "Moderate"
        },
        {
            "question": "Christ is presented as the Great High Priest in the order of which mysterious Old Testament figure, rather than the Levitical order of Aaron?",
            "options": ["Melchizedek", "Abraham", "Elijah", "Moses"],
            "correct": "Melchizedek",
            "reference": "Hebrews 5:6; 7:1-17",
            "difficulty": "Moderate"
        },
        {
            "question": "The author warns against having an 'evil heart of unbelief' and urges believers not to harden their hearts, quoting from the history of Israel in the wilderness. What Old Testament book does he primarily quote?",
            "options": ["Leviticus", "Numbers", "Deuteronomy", "Psalms (Psalm 95)"],
            "correct": "Psalms (Psalm 95)",
            "reference": "Hebrews 3:7-11 (citing Psalm 95)",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary theological problem does the author argue is inherent to the Old Covenant animal sacrifices?",
            "options": ["They were too expensive", "They could not take away sins and had to be offered yearly", "They were offered too frequently", "They were only for the Jews"],
            "correct": "They could not take away sins and had to be offered yearly",
            "reference": "Hebrews 10:1-4",
            "difficulty": "Moderate"
        },
        {
            "question": "The author states that believers have access to God through Christ's sacrifice, allowing them to draw near to God with a true heart in full assurance of what virtue?",
            "options": ["Love", "Faith", "Hope", "Peace"],
            "correct": "Faith",
            "reference": "Hebrews 10:22",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the simple definition of faith provided in Hebrews 11:1?",
            "options": ["The power to move mountains", "Believing without seeing", "The substance of things hoped for, the evidence of things not seen", "Complete obedience to God"],
            "correct": "The substance of things hoped for, the evidence of things not seen",
            "reference": "Hebrews 11:1",
            "difficulty": "Moderate"
        },
        {
            "question": "The author lists many great believers in Chapter 11, often called the 'Hall of Faith.' What final blessing did these faithful figures *not* receive?",
            "options": ["They did not receive the promise (the fulfillment in Christ)", "They did not see the New Jerusalem", "They did not die peacefully", "They did not perform miracles"],
            "correct": "They did not receive the promise (the fulfillment in Christ)",
            "reference": "Hebrews 11:39-40",
            "difficulty": "Moderate"
        },
        {
            "question": "The author urges believers to run the race with endurance, looking to whom as the author and finisher of their faith?",
            "options": ["The saints of old", "The Holy Spirit", "Jesus", "The Father"],
            "correct": "Jesus",
            "reference": "Hebrews 12:1-2",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the final and perfect sacrifice that Christ offered?",
            "options": ["The sacrifice of praise", "His own body, once for all", "His blood on the altar", "The offering of His obedience"],
            "correct": "His own body, once for all",
            "reference": "Hebrews 10:10",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Christ is superior to the Old Covenant priest Aaron, but also to what great Old Testament figure who was considered the quintessential leader of the Jewish people?",
            "options": ["Abraham", "David", "Moses", "Elijah"],
            "correct": "Moses",
            "reference": "Hebrews 3:1-6",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase used to describe the effect of the Word of God on a person's inner life?",
            "options": ["It is a lamp unto our feet", "It is living and powerful, and sharper than any two-edged sword", "It is the source of all wisdom", "It is the Law of the Lord"],
            "correct": "It is living and powerful, and sharper than any two-edged sword",
            "reference": "Hebrews 4:12",
            "difficulty": "Hard"
        },
        {
            "question": "The author criticizes the original recipients for still needing milk rather than solid food, because they had failed to develop what specific skill?",
            "options": ["The ability to speak in tongues", "The spiritual senses to discern both good and evil", "The ability to teach the Scriptures", "The maturity of Christ"],
            "correct": "The spiritual senses to discern both good and evil",
            "reference": "Hebrews 5:12-14",
            "difficulty": "Hard"
        },
        {
            "question": "The author warns against falling away from the faith, saying that it is impossible to renew them again to repentance since they are doing what to the Son of God?",
            "options": ["They are grieving Him", "They are shaming Him", "They are crucifying the Son of God afresh and putting Him to an open shame", "They are denying His name"],
            "correct": "They are crucifying the Son of God afresh and putting Him to an open shame",
            "reference": "Hebrews 6:6",
            "difficulty": "Hard"
        },
        {
            "question": "Christ entered the heavenly sanctuary not with the blood of goats and calves, but with what?",
            "options": ["The blood of Aaron", "His own blood", "The perfect sacrifice", "The tears of the saints"],
            "correct": "His own blood",
            "reference": "Hebrews 9:12",
            "difficulty": "Hard"
        },
        {
            "question": "The Old Covenant was faulty and therefore replaced by the New Covenant. What quality does the New Covenant rest upon?",
            "options": ["Better promises", "More sacrifices", "A greater Law", "A better temple"],
            "correct": "Better promises",
            "reference": "Hebrews 8:6",
            "difficulty": "Hard"
        },
        {
            "question": "What specific sin does the author ask the believers to lay aside, alongside 'every weight'?",
            "options": ["The sin of pride", "The sin which so easily entangles us", "The sin of unbelief", "The sin of selfishness"],
            "correct": "The sin which so easily entangles us",
            "reference": "Hebrews 12:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific type of relationship does the author use to describe God's disciplinary actions toward believers, affirming that they are not illegitimate children?",
            "options": ["A shepherd and his sheep", "A king and his subjects", "A father and his son", "A master and his servant"],
            "correct": "A father and his son",
            "reference": "Hebrews 12:7-9",
            "difficulty": "Hard"
        },
        {
            "question": "The blood of Christ speaks a better word than the blood of what Old Testament figure?",
            "options": ["Cain", "Abel", "Aaron", "Moses"],
            "correct": "Abel",
            "reference": "Hebrews 12:24",
            "difficulty": "Hard"
        },
        {
            "question": "The author uses the words of which prophet to show that the Old Covenant was destined to become obsolete, wax old, and vanish away?",
            "options": ["Isaiah", "Jeremiah", "Malachi", "Ezekiel"],
            "correct": "Jeremiah",
            "reference": "Hebrews 8:8-13 (citing Jeremiah 31)",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Christ is described as having two specific roles in the New Covenant: the High Priest of our confession and the **_________** of the apostles and High Priest.",
            "options": ["Prophet", "King", "Apostle", "Mediator"],
            "correct": "Apostle",
            "reference": "Hebrews 3:1",
            "difficulty": "Extreme"
        },
        {
            "question": "The author contrasts the Old Covenant with the New Covenant, saying that the New Covenant is established on what kind of sacrifice?",
            "options": ["A once-for-all sacrifice", "A better sacrifice", "A better hope", "A perfect sacrifice"],
            "correct": "A better hope",
            "reference": "Hebrews 7:19",
            "difficulty": "Extreme"
        },
        {
            "question": "Melchizedek is described as being without father, without mother, without genealogy, and having no beginning of days or end of life, making him like whom?",
            "options": ["The King of Kings", "The Son of God", "The High Priest", "The promised Messiah"],
            "correct": "The Son of God",
            "reference": "Hebrews 7:3",
            "difficulty": "Extreme"
        },
        {
            "question": "The veil that separated the Holy Place from the Holy of Holies in the Old Covenant is said to represent what specific thing in the New Covenant?",
            "options": ["The Law", "The body of Christ (His flesh)", "The sins of the people", "The barrier of the Temple"],
            "correct": "The body of Christ (His flesh)",
            "reference": "Hebrews 10:20",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific location does the author name as the place the faithful should go to bear Christ's reproach, referencing the Old Covenant ritual?",
            "options": ["The Temple Mount", "The heavenly city", "Outside the camp", "The synagogue"],
            "correct": "Outside the camp",
            "reference": "Hebrews 13:12-13",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final, specific action Jesus performs when He makes purification for sins, which confirms His superiority to the angels?",
            "options": ["He ascended to heaven", "He sat down at the right hand of the Majesty on high", "He taught the disciples", "He was resurrected from the dead"],
            "correct": "He sat down at the right hand of the Majesty on high",
            "reference": "Hebrews 1:3",
            "difficulty": "Extreme"
        },
        {
            "question": "What does the author warn believers not to neglect when dealing with one another, as some have entertained angels unawares?",
            "options": ["Hospitality (or 'showing hospitality')", "Prayer", "Sharing the Gospel", "Encouragement"],
            "correct": "Hospitality (or 'showing hospitality')",
            "reference": "Hebrews 13:2",
            "difficulty": "Extreme"
        },
        {
            "question": "Paul mentions that he is writing to them 'briefly' and specifically mentions the release of which fellow worker in the closing salutation?",
            "options": ["Silas", "Timothy", "Titus", "Tychicus"],
            "correct": "Timothy",
            "reference": "Hebrews 13:23",
            "difficulty": "Extreme"
        },
        {
            "question": "What two physical acts are listed as 'sacrifices' that are pleasing to God under the New Covenant?",
            "options": ["Fasting and prayer", "Giving and helping the poor", "Praise and sharing (or 'to do good and to share')", "Worship and reading the Scriptures"],
            "correct": "Praise and sharing (or 'to do good and to share')",
            "reference": "Hebrews 13:15-16",
            "difficulty": "Extreme"
        },
        {
            "question": "The Law was given by the disposition of angels, but the New Covenant was inaugurated by the ministry of whom?",
            "options": ["The Holy Spirit", "A better Mediator", "The prophets", "The apostles"],
            "correct": "A better Mediator",
            "reference": "Hebrews 8:6",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "James",
    "questions": [
        // --- MODERATE ---
        {
            "question": "Who is the traditional author of the Epistle of James?",
            "options": ["James, son of Zebedee", "James, the brother of John", "James, the brother of Jesus", "James, son of Alphaeus"],
            "correct": "James, the brother of Jesus",
            "reference": "James 1:1 and historical tradition",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary theme of the Book of James?",
            "options": ["The Supremacy of Christ", "Faith without works is dead (practical Christian living)", "The doctrine of the Holy Spirit", "The importance of the Mosaic Law"],
            "correct": "Faith without works is dead (practical Christian living)",
            "reference": "James 2:17, 26 and overall emphasis on conduct",
            "difficulty": "Moderate"
        },
        {
            "question": "James states that believers should count it all joy when they meet with what spiritual experience?",
            "options": ["Answered prayer", "The coming of the Lord", "Various trials", "Great wealth"],
            "correct": "Various trials",
            "reference": "James 1:2",
            "difficulty": "Moderate"
        },
        {
            "question": "If anyone lacks wisdom, James instructs them to ask whom, and it will be given generously?",
            "options": ["The elders of the church", "The apostles", "God", "The Holy Spirit"],
            "correct": "God",
            "reference": "James 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "James warns against being a 'double-minded man' who is unstable in what aspect of his life?",
            "options": ["His preaching", "All his ways", "His marriage", "His work"],
            "correct": "All his ways",
            "reference": "James 1:8",
            "difficulty": "Moderate"
        },
        {
            "question": "James provides a strong warning against showing partiality or favoritism toward what specific group of people in the church assembly?",
            "options": ["The poor", "The wealthy (wearing fine clothes and gold rings)", "The prophets", "The Gentiles"],
            "correct": "The wealthy (wearing fine clothes and gold rings)",
            "reference": "James 2:1-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the small but powerful part of the body that James says, if uncontrolled, is like a fire that can defile the whole body?",
            "options": ["The hand", "The tongue", "The eye", "The mouth"],
            "correct": "The tongue",
            "reference": "James 3:5-6",
            "difficulty": "Moderate"
        },
        {
            "question": "What Old Testament figure is cited as an example of faith *plus* works (in that he offered his son as a sacrifice)?",
            "options": ["Moses", "David", "Abraham", "Elijah"],
            "correct": "Abraham",
            "reference": "James 2:21-23",
            "difficulty": "Moderate"
        },
        {
            "question": "James instructs the sick among the church to call for whom to anoint them with oil and pray for them?",
            "options": ["The author (James)", "The elders of the church", "The apostles", "Their neighbors"],
            "correct": "The elders of the church",
            "reference": "James 5:14",
            "difficulty": "Moderate"
        },
        {
            "question": "James instructs believers to not swear, but to let their 'Yes' be Yes, and their 'No' be No, so that they may not fall into what?",
            "options": ["Sin", "Judgment", "Deception", "Heresy"],
            "correct": "Judgment",
            "reference": "James 5:12",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "James states that temptation does not come from God, but from what source?",
            "options": ["The devil", "Our own desires (lust) which drag us away and entice us", "The world's influence", "False teachers"],
            "correct": "Our own desires (lust) which drag us away and entice us",
            "reference": "James 1:13-14",
            "difficulty": "Hard"
        },
        {
            "question": "What is the specific description James uses for the rich man who fades away like a flower in the grass?",
            "options": ["His health will fail", "He will fade away in his pursuits (or 'in his ways')", "His wealth will be scattered", "His pride will be humbled"],
            "correct": "He will fade away in his pursuits (or 'in his ways')",
            "reference": "James 1:11",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase James uses to describe the believer who hears the Word but fails to act on it?",
            "options": ["A stubborn child", "A careless hearer", "A mirror-gazer (or 'one who looks at his own face in a mirror')", "A fool"],
            "correct": "A mirror-gazer (or 'one who looks at his own face in a mirror')",
            "reference": "James 1:23",
            "difficulty": "Hard"
        },
        {
            "question": "What two destructive spiritual forces are identified as the source of wars and fights among the believers?",
            "options": ["The devil and the world", "Lusts (pleasures) that wage war in your members", "The Law and the flesh", "False doctrine and pride"],
            "correct": "Lusts (pleasures) that wage war in your members",
            "reference": "James 4:1",
            "difficulty": "Hard"
        },
        {
            "question": "James argues that the wisdom that is earthly, sensual, and demonic leads to what two specific vices?",
            "options": ["Envy and strife (or 'jealousy and selfish ambition')", "Pride and greed", "Hatred and bitterness", "Deception and lying"],
            "correct": "Envy and strife (or 'jealousy and selfish ambition')",
            "reference": "James 3:14-16",
            "difficulty": "Hard"
        },
        {
            "question": "The tongue, though small, is compared to what two objects of nature that can control or destroy large entities?",
            "options": ["A small fire and a ship's rudder", "A serpent's venom and a burning torch", "A mighty ocean and a great wind", "A seed and a mountain"],
            "correct": "A small fire and a ship's rudder",
            "reference": "James 3:4-6",
            "difficulty": "Hard"
        },
        {
            "question": "James warns the rich that their wealth will rot and their gold and silver will do what?",
            "options": ["Be stolen by thieves", "Become rust, which will be a witness against them", "Be consumed by fire", "Be taken away by the king"],
            "correct": "Become rust, which will be a witness against them",
            "reference": "James 5:2-3",
            "difficulty": "Hard"
        },
        {
            "question": "James uses the example of what Old Testament prophet, known for his powerful prayers, to show the effectiveness of the prayer of a righteous man?",
            "options": ["Elisha", "Jeremiah", "Isaiah", "Elijah"],
            "correct": "Elijah",
            "reference": "James 5:17",
            "difficulty": "Hard"
        },
        {
            "question": "James warns believers against judging one another because by judging, they become a judge of what ultimate standard?",
            "options": ["The Law (or 'a judge of the Law')", "The other person's heart", "The will of God", "The prophets"],
            "correct": "The Law (or 'a judge of the Law')",
            "reference": "James 4:11",
            "difficulty": "Hard"
        },
        {
            "question": "The Law of Moses is referred to in James by what specific title, emphasizing its power to grant freedom?",
            "options": ["The Royal Law", "The Law of Christ", "The perfect law of liberty", "The Law of Righteousness"],
            "correct": "The perfect law of liberty",
            "reference": "James 1:25",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the phrase James uses to describe the *receiving* of the Word, which is capable of saving your souls?",
            "options": ["Receive it with gladness", "Receive the implanted word with meekness (or 'humility')", "Receive it with joy", "Receive it with open hands"],
            "correct": "Receive the implanted word with meekness (or 'humility')",
            "reference": "James 1:21",
            "difficulty": "Extreme"
        },
        {
            "question": "What two metaphors does James use to describe the source of spiritual wisdom (wisdom from above)?",
            "options": ["Pure, then peaceable", "Full of mercy and good fruits", "Without partiality and without hypocrisy", "All of the above"],
            "correct": "All of the above (The wisdom from above is first pure, then peaceable, gentle, willing to yield, full of mercy and good fruits, without partiality and without hypocrisy)",
            "reference": "James 3:17",
            "difficulty": "Extreme"
        },
        {
            "question": "James makes a startling statement that even what spiritual entity believes in God and trembles?",
            "options": ["The apostles", "The devils (or 'demons')", "The angels", "The world"],
            "correct": "The devils (or 'demons')",
            "reference": "James 2:19",
            "difficulty": "Extreme"
        },
        {
            "question": "James instructs believers to draw near to God and to cleanse what two parts of their being?",
            "options": ["Their hands and their hearts", "Their minds and their spirits", "Their souls and their bodies", "Their words and their deeds"],
            "correct": "Their hands and their hearts",
            "reference": "James 4:8",
            "difficulty": "Extreme"
        },
        {
            "question": "James states that the patient endurance of believers should look toward the coming of the Lord, using the example of what persistent worker?",
            "options": ["A shepherd tending his flock", "A woman giving birth", "The farmer waiting for the precious fruit of the earth, receiving the early and latter rain", "The builder constructing a house"],
            "correct": "The farmer waiting for the precious fruit of the earth, receiving the early and latter rain",
            "reference": "James 5:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description James gives to the prayer of a righteous person that makes it effective?",
            "options": ["It is short and concise", "It is earnest (or 'fervently offered')", "It is offered publicly", "It is offered with fasting"],
            "correct": "It is earnest (or 'fervently offered')",
            "reference": "James 5:16",
            "difficulty": "Extreme"
        },
        {
            "question": "James states that whoever turns a sinner from the error of his way will do what two great things?",
            "options": ["Save a soul from death and cover a multitude of sins", "Bring them into the church and ensure their salvation", "Bring them to God and bring peace", "Forgive them and make them whole"],
            "correct": "Save a soul from death and cover a multitude of sins",
            "reference": "James 5:20",
            "difficulty": "Extreme"
        },
        {
            "question": "What two contradictory things does James say come out of the same mouth, making the tongue difficult to tame?",
            "options": ["Blessing and cursing (praise to God and cursing men)", "Truth and lies", "Wisdom and foolishness", "Gospel and the Law"],
            "correct": "Blessing and cursing (praise to God and cursing men)",
            "reference": "James 3:9-10",
            "difficulty": "Extreme"
        },
        {
            "question": "James cautions that the wisdom for planning the future is flawed because they do not know what specific element regarding their life?",
            "options": ["What your life will be like tomorrow", "The power of God's will", "The end of the age", "The coming persecution"],
            "correct": "What your life will be like tomorrow",
            "reference": "James 4:14",
            "difficulty": "Extreme"
        },
        {
            "question": "James uses the example of what Old Testament figure who was justified by works when he received the messengers (spies) and sent them out another way?",
            "options": ["Ruth", "Rahab", "Miriam", "Esther"],
            "correct": "Rahab",
            "reference": "James 2:25",
            "difficulty": "Extreme"
        }
    ]
}
 {
    "book": "1 Peter",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Epistle of 1 Peter was written by the Apostle Peter to believers scattered throughout what five Roman provinces in Asia Minor?",
            "options": ["Asia, Achaia, Macedonia, Crete, and Galatia", "Pontus, Galatia, Cappadocia, Asia, and Bithynia", "Syria, Cilicia, Cyprus, Pamphylia, and Lycia", "Judea, Samaria, Idumea, Decapolis, and Perea"],
            "correct": "Pontus, Galatia, Cappadocia, Asia, and Bithynia",
            "reference": "1 Peter 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary theme of 1 Peter?",
            "options": ["The doctrine of the Holy Spirit", "Suffering for Christ and living a holy life amidst persecution", "The supremacy of Christ over the Law", "Instructions on financial giving"],
            "correct": "Suffering for Christ and living a holy life amidst persecution",
            "reference": "Overall theme (e.g., 1 Peter 4:12-16)",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter describes believers as being born again to a living hope through what event?",
            "options": ["The Apostle Peter's preaching", "Baptism in water", "The resurrection of Jesus Christ from the dead", "Their obedience to the Law"],
            "correct": "The resurrection of Jesus Christ from the dead",
            "reference": "1 Peter 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter instructs believers to be holy because God is holy, reminding them that they were redeemed not with perishable things like silver or gold, but with what?",
            "options": ["The perfect law of liberty", "The precious blood of Christ, as of a lamb without blemish and without spot", "The power of the Holy Spirit", "The strength of their faith"],
            "correct": "The precious blood of Christ, as of a lamb without blemish and without spot",
            "reference": "1 Peter 1:18-19",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter gives believers several titles, including a chosen generation, a royal priesthood, a holy nation, and what else?",
            "options": ["A people for His own possession (or 'a peculiar people')", "The light of the world", "The body of Christ", "The foundation of the apostles"],
            "correct": "A people for His own possession (or 'a peculiar people')",
            "reference": "1 Peter 2:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary instruction does Peter give to slaves/servants regarding their masters?",
            "options": ["Seek freedom immediately", "Serve them only if they are good and gentle", "Be submissive to your masters with all fear, not only to the good and gentle, but also to the harsh", "Report them to the authorities"],
            "correct": "Be submissive to your masters with all fear, not only to the good and gentle, but also to the harsh",
            "reference": "1 Peter 2:18",
            "difficulty": "Moderate"
        },
        {
            "question": "What physical adornment does Peter warn women against relying on, encouraging them to focus on the 'hidden person of the heart' instead?",
            "options": ["Expensive clothing", "Arranging the hair, wearing gold, or putting on fine apparel", "Makeup and perfume", "Showing their face in public"],
            "correct": "Arranging the hair, wearing gold, or putting on fine apparel",
            "reference": "1 Peter 3:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter instructs believers to be ready always to give a defense (apology) for what reason?",
            "options": ["The hope that is in you", "The Law of Moses", "The resurrection of Christ", "Their good deeds"],
            "correct": "The hope that is in you",
            "reference": "1 Peter 3:15",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter commands the elders to 'shepherd the flock of God' willingly, not under compulsion, and not for dishonest gain, but with what specific attitude?",
            "options": ["With humility", "With zeal", "Eagerly (or 'voluntarily')", "With wisdom"],
            "correct": "Eagerly (or 'voluntarily')",
            "reference": "1 Peter 5:2",
            "difficulty": "Moderate"
        },
        {
            "question": "Believers are instructed to cast all their care upon God for what reason?",
            "options": ["He is mighty", "He cares for you", "He is sovereign", "He is just"],
            "correct": "He cares for you",
            "reference": "1 Peter 5:7",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Peter states that the prophets of the Old Testament searched to find out what specific two realities concerning Christ?",
            "options": ["The time and the circumstances", "The grace and the power", "The suffering of Christ and the glories that would follow", "The Law and the Gospel"],
            "correct": "The suffering of Christ and the glories that would follow",
            "reference": "1 Peter 1:10-11",
            "difficulty": "Hard"
        },
        {
            "question": "Believers are told to abstain from what, which wages war against the soul?",
            "options": ["Worldly desires", "Fleshly lusts", "The influence of the Gentiles", "The love of money"],
            "correct": "Fleshly lusts",
            "reference": "1 Peter 2:11",
            "difficulty": "Hard"
        },
        {
            "question": "In the controversial passage about Christ preaching to the spirits in prison, which specific past event is given as the context for these spirits being imprisoned?",
            "options": ["The fall of man", "The destruction of Sodom and Gomorrah", "When the long-suffering of God waited in the days of Noah", "The scattering at Babel"],
            "correct": "When the long-suffering of God waited in the days of Noah",
            "reference": "1 Peter 3:19-20",
            "difficulty": "Hard"
        },
        {
            "question": "The righteous will scarcely be saved. What group is then posed as the one whose end will be even more severe?",
            "options": ["The ungodly and the sinner", "The unbelievers and the rebellious", "The wicked and the false prophets", "The Jews and the Gentiles"],
            "correct": "The ungodly and the sinner",
            "reference": "1 Peter 4:18",
            "difficulty": "Hard"
        },
        {
            "question": "What phrase does Peter use to describe the nature of God's love, stating that it should cover a multitude of sins?",
            "options": ["Pure love", "Fervent love", "Unconditional love", "Godly love"],
            "correct": "Fervent love",
            "reference": "1 Peter 4:8",
            "difficulty": "Hard"
        },
        {
            "question": "Peter says that the Christian wife should be adorned with the hidden person of the heart, which is described as the incorruptible beauty of what specific spiritual quality?",
            "options": ["A gentle and quiet spirit", "A faithful and loving spirit", "A humble and obedient spirit", "A strong and courageous spirit"],
            "correct": "A gentle and quiet spirit",
            "reference": "1 Peter 3:4",
            "difficulty": "Hard"
        },
        {
            "question": "What Old Testament woman is cited as an example of a wife who was submissive to her husband, calling him 'lord'?",
            "options": ["Rebekah", "Rachel", "Sarah", "Leah"],
            "correct": "Sarah",
            "reference": "1 Peter 3:6",
            "difficulty": "Hard"
        },
        {
            "question": "Peter instructs believers to be sober and watchful because their adversary, the devil, walks about like what kind of animal?",
            "options": ["A roaring lion", "A cunning fox", "A striking serpent", "A sly wolf"],
            "correct": "A roaring lion",
            "reference": "1 Peter 5:8",
            "difficulty": "Hard"
        },
        {
            "question": "Peter refers to the judgment that must first begin at what place?",
            "options": ["The Temple in Jerusalem", "The house of God", "The Roman Empire", "The assembly of the apostles"],
            "correct": "The house of God",
            "reference": "1 Peter 4:17",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Peter uses to describe the purpose of the brief time of suffering believers endure in the world?",
            "options": ["To purify our minds", "To show the strength of God", "To perfect, establish, strengthen, and settle you", "To make you humble and obedient"],
            "correct": "To perfect, establish, strengthen, and settle you",
            "reference": "1 Peter 5:10",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What is the specific description Peter uses for the hope that awaits the believers, guarded by the power of God?",
            "options": ["An eternal kingdom", "An inheritance incorruptible, undefiled, and that does not fade away, reserved in heaven for you", "A crown of righteousness", "A new body"],
            "correct": "An inheritance incorruptible, undefiled, and that does not fade away, reserved in heaven for you",
            "reference": "1 Peter 1:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter states that the Word of the Lord endures forever, quoting from the prophecy of what Old Testament book?",
            "options": ["Jeremiah", "Isaiah", "Psalms", "Ezekiel"],
            "correct": "Isaiah",
            "reference": "1 Peter 1:24-25 (citing Isaiah 40)",
            "difficulty": "Extreme"
        },
        {
            "question": "What phrase does Peter use to instruct the elders regarding the manner in which they should lead the flock, rather than by compulsion or dominance?",
            "options": ["With zeal and wisdom", "Not by compulsion, but willingly; not for dishonest gain, but eagerly; nor as being lords over those entrusted to you, but being examples to the flock", "With gentleness and patience", "In the fear of the Lord"],
            "correct": "Not by compulsion, but willingly; not for dishonest gain, but eagerly; nor as being lords over those entrusted to you, but being examples to the flock",
            "reference": "1 Peter 5:2-3",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter describes Christ's suffering as leaving us an example so that we should follow His steps, particularly in what way?",
            "options": ["When He was reviled, He did not revile in return; when He suffered, He did not threaten", "He prayed for His enemies", "He healed the sick", "He obeyed the Law perfectly"],
            "correct": "When He was reviled, He did not revile in return; when He suffered, He did not threaten",
            "reference": "1 Peter 2:21-23",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter states that 'love will cover a multitude of sins.' What is the specific virtue that should govern believers' relationships with one another in light of this?",
            "options": ["Be hospitable to one another without grumbling", "Be kind and tenderhearted", "Be forgiving and gracious", "Be patient and enduring"],
            "correct": "Be hospitable to one another without grumbling",
            "reference": "1 Peter 4:8-9",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase Peter uses to describe the purpose of baptism, connecting it to the Old Testament concept of purification?",
            "options": ["A washing of the body", "A pledge of a good conscience toward God", "A ritual of purification", "A sign of salvation"],
            "correct": "A pledge of a good conscience toward God",
            "reference": "1 Peter 3:21",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter urges the younger members of the church to be submissive to the elders and all of them to be clothed with what virtue toward one another?",
            "options": ["Meekness", "Humility", "Obedience", "Patience"],
            "correct": "Humility",
            "reference": "1 Peter 5:5",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter closes the letter by mentioning that he wrote to them 'briefly, exhorting and testifying that this is the true **_________** of God in which you stand.'",
            "options": ["Word", "Gospel", "Grace", "Love"],
            "correct": "Grace",
            "reference": "1 Peter 5:12",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter sends greetings from the church in Babylon, whom he refers to as 'she who is in Babylon, elect together with you.' Whom does he also send greetings from?",
            "options": ["Paul and Timothy", "Silas and Mark (or 'Marcus my son')", "Peter's wife", "The elder John"],
            "correct": "Silas and Mark (or 'Marcus my son')",
            "reference": "1 Peter 5:12-13",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter says that Christ, by whom we are made alive, suffered once for sins, the just for the unjust, so that He might bring us to whom?",
            "options": ["The New Jerusalem", "God", "The Father", "The Kingdom of Heaven"],
            "correct": "God",
            "reference": "1 Peter 3:18",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 Peter",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme or purpose of 2 Peter?",
            "options": ["To encourage believers in their suffering", "To warn against false teachers and affirm the certainty of Christ's return", "To instruct on church organization", "To discuss the nature of the Holy Spirit"],
            "correct": "To warn against false teachers and affirm the certainty of Christ's return",
            "reference": "2 Peter 2:1, 3:3-4, 10",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter says that God has given us everything pertaining to life and godliness through the knowledge of whom?",
            "options": ["The prophets of old", "Jesus Christ, who has called us by glory and virtue", "The Apostle Paul", "The Holy Spirit"],
            "correct": "Jesus Christ, who has called us by glory and virtue",
            "reference": "2 Peter 1:3",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter instructs believers to be diligent and add eight specific virtues (e.g., faith, virtue, knowledge). What is the ultimate virtue that crowns this list?",
            "options": ["Patience", "Love (or 'love of God')", "Hope", "Humility"],
            "correct": "Love (or 'love of God')",
            "reference": "2 Peter 1:5-7",
            "difficulty": "Moderate"
        },
        {
            "question": "What event does Peter reference as evidence that he 'witnessed His majesty' and that the prophetic word is sure?",
            "options": ["The resurrection", "The Transfiguration on the holy mountain", "Pentecost", "The feeding of the five thousand"],
            "correct": "The Transfiguration on the holy mountain",
            "reference": "2 Peter 1:16-18",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter states that 'holy men of God spoke as they were moved by the **_________**.'",
            "options": ["Wisdom of God", "Holy Spirit", "Will of man", "Command of the Law"],
            "correct": "Holy Spirit",
            "reference": "2 Peter 1:21",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary motivation of the false teachers Peter warns against?",
            "options": ["Political power", "Financial greed (or 'covetousness'/'filthy lucre')", "Spreading legalism", "Denying the Law"],
            "correct": "Financial greed (or 'covetousness'/'filthy lucre')",
            "reference": "2 Peter 2:3, 14",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter uses three Old Testament examples of God's judgment to show that God will punish the wicked. Which of the following is *not* one of the examples used?",
            "options": ["The angels who sinned (cast into Tartarus)", "The destruction of Sodom and Gomorrah", "The flood in the time of Noah", "The destruction of Pharaoh's army in the Red Sea"],
            "correct": "The destruction of Pharaoh's army in the Red Sea",
            "reference": "2 Peter 2:4-6",
            "difficulty": "Moderate"
        },
        {
            "question": "What physical element does Peter say will be burned up and dissolved on the Day of the Lord?",
            "options": ["The Temple and its sacrifices", "The works of man", "The earth and the works that are in it", "The Law of Moses"],
            "correct": "The earth and the works that are in it",
            "reference": "2 Peter 3:10",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter explains that the Lord is not slow concerning His promise, but is what, toward us?",
            "options": ["Powerful and mighty", "Patient (or 'longsuffering'), not willing that any should perish, but that all should come to repentance", "Just and true", "Merciful and loving"],
            "correct": "Patient (or 'longsuffering'), not willing that any should perish, but that all should come to repentance",
            "reference": "2 Peter 3:9",
            "difficulty": "Moderate"
        },
        {
            "question": "Peter encourages believers to grow in grace and in the knowledge of whom?",
            "options": ["The Law of Moses", "The Holy Spirit", "Our Lord and Savior Jesus Christ", "The Word of God"],
            "correct": "Our Lord and Savior Jesus Christ",
            "reference": "2 Peter 3:18",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Peter warns that the false teachers will secretly bring in destructive heresies, even denying whom?",
            "options": ["The Apostle Paul", "The Holy Spirit", "The Lord who bought them", "The reality of heaven"],
            "correct": "The Lord who bought them",
            "reference": "2 Peter 2:1",
            "difficulty": "Hard"
        },
        {
            "question": "What specific bodily sense do the scoffers of the last days walk according to?",
            "options": ["Their sight (seeing is believing)", "Their desires (or 'own lusts')", "Their pride", "Their old nature"],
            "correct": "Their desires (or 'own lusts')",
            "reference": "2 Peter 3:3",
            "difficulty": "Hard"
        },
        {
            "question": "Peter claims that the knowledge of the Lord's return is mocked by scoffers who ask, 'Where is the promise of His coming? For since the fathers fell asleep, all things continue as they were from the beginning of what?'",
            "options": ["The world", "Creation", "The Law", "The age"],
            "correct": "Creation",
            "reference": "2 Peter 3:4",
            "difficulty": "Hard"
        },
        {
            "question": "What two heavenly bodies/forces were used by God to bring about the judgment of the world in the time of Noah?",
            "options": ["Fire and wind", "The sun and the moon", "Water and the Word of God", "The angels and the saints"],
            "correct": "Water and the Word of God",
            "reference": "2 Peter 3:5-6",
            "difficulty": "Hard"
        },
        {
            "question": "What specific Old Testament prophet and event does Peter use to illustrate the madness and error of the false teachers who love unrighteous gain?",
            "options": ["Jeremiah's fall", "Elisha's greed", "Balaam, who loved the wages of unrighteousness", "Cain's murder"],
            "correct": "Balaam, who loved the wages of unrighteousness",
            "reference": "2 Peter 2:15-16",
            "difficulty": "Hard"
        },
        {
            "question": "The heavens and earth are currently stored up for what two impending events?",
            "options": ["The resurrection and the judgment", "Reserved for fire until the day of judgment and perdition of ungodly men", "The return of Christ and the new heaven", "The fulfillment of prophecy and the end of the Law"],
            "correct": "Reserved for fire until the day of judgment and perdition of ungodly men",
            "reference": "2 Peter 3:7",
            "difficulty": "Hard"
        },
        {
            "question": "Peter declares that a single day is to the Lord as what long period of time is to man, regarding God's perception of time?",
            "options": ["A thousand years (or 'as a thousand years')", "An eternity", "An age", "Ten thousand years"],
            "correct": "A thousand years (or 'as a thousand years')",
            "reference": "2 Peter 3:8",
            "difficulty": "Hard"
        },
        {
            "question": "Peter warns against those who twist or distort the meaning of which Apostle's writings, along with the other Scriptures, to their own destruction?",
            "options": ["John", "Matthew", "Paul", "James"],
            "correct": "Paul",
            "reference": "2 Peter 3:15-16",
            "difficulty": "Hard"
        },
        {
            "question": "What two spiritual qualities the righteous man Lot exhibited, leading to his deliverance from Sodom and Gomorrah?",
            "options": ["He was faithful and kind", "He was righteous and tormented in his righteous soul day by day by their lawless deeds", "He was patient and humble", "He was obedient and wise"],
            "correct": "He was righteous and tormented in his righteous soul day by day by their lawless deeds",
            "reference": "2 Peter 2:7-8",
            "difficulty": "Hard"
        },
        {
            "question": "Peter states that the false teachers lure those who have barely escaped from what specific condition?",
            "options": ["Unbelief", "Those who live in error", "The Law of Moses", "The world"],
            "correct": "Those who live in error",
            "reference": "2 Peter 2:18",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "Peter says that the knowledge of God has granted us His 'exceedingly great and precious promises' so that we may become partakers of what divine reality?",
            "options": ["The divine nature, having escaped the corruption that is in the world through lust", "The heavenly kingdom", "The power of the Spirit", "Eternal life and glory"],
            "correct": "The divine nature, having escaped the corruption that is in the world through lust",
            "reference": "2 Peter 1:4",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter refers to the voice that came to Jesus on the Mount of Transfiguration as the 'majestic glory' that said, 'This is My beloved Son, in whom **_________**.'",
            "options": ["You should listen", "I am well pleased", "He will reign", "He is the Messiah"],
            "correct": "I am well pleased",
            "reference": "2 Peter 1:17",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific metaphor does Peter use to describe the moral outcome of the false teachers, comparing them to an animal who returns to its filth?",
            "options": ["A dog returns to its own vomit, and a sow, having washed, to her wallowing in the mire", "A sheep returning to the wilderness", "A bird returning to its cage", "A fox returning to its hole"],
            "correct": "A dog returns to its own vomit, and a sow, having washed, to her wallowing in the mire",
            "reference": "2 Peter 2:22",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter affirms that the Day of the Lord will come as a thief in the night, and that the elements will melt with what specific intensity?",
            "options": ["A strong heat", "A fervent heat", "A consuming fire", "A gentle heat"],
            "correct": "A fervent heat",
            "reference": "2 Peter 3:10",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter warns against the danger of the false teachers, stating that they promise believers liberty (freedom) while they themselves are what?",
            "options": ["Slaves of sin", "Slaves of corruption", "Servants of the Law", "Servants of Satan"],
            "correct": "Slaves of corruption",
            "reference": "2 Peter 2:19",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter encourages the believers to be diligent so that they may be found by Christ in peace, without what two negative conditions?",
            "options": ["Doubt or fear", "Blot and blameless", "Sin or shame", "Fault or error"],
            "correct": "Blot and blameless",
            "reference": "2 Peter 3:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific virtue Peter mentions is necessary for the Christian life, serving as the first step after receiving faith?",
            "options": ["Love", "Virtue (or 'moral excellence')", "Humility", "Patience"],
            "correct": "Virtue (or 'moral excellence')",
            "reference": "2 Peter 1:5",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter warns against those who are 'wells without water' and 'clouds carried by a tempest' to whom is reserved what?",
            "options": ["The blackness of darkness forever", "The eternal fire", "The punishment of the ages", "The shame of the wicked"],
            "correct": "The blackness of darkness forever",
            "reference": "2 Peter 2:17",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter encourages believers to look forward to and hasten, regarding the Day of God?",
            "options": ["The new Temple", "New heavens and a new earth in which righteousness dwells", "The glorious reign of Christ", "The resurrection of the dead"],
            "correct": "New heavens and a new earth in which righteousness dwells",
            "reference": "2 Peter 3:13",
            "difficulty": "Extreme"
        },
        {
            "question": "Peter reminds the readers that he considers this letter to be what specific final communication?",
            "options": ["His last will and testament", "A stirring up (or 'stirring up your pure minds by way of reminder')", "A powerful prophecy", "A necessary rebuke"],
            "correct": "A stirring up (or 'stirring up your pure minds by way of reminder')",
            "reference": "2 Peter 3:1",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "1 John",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme or purpose of 1 John?",
            "options": ["To prove Jesus is the Son of God", "To address false teachings (specifically Gnosticism/Docetism) and assure believers of their salvation and fellowship with God", "To instruct on church organization", "To encourage evangelism"],
            "correct": "To address false teachings (specifically Gnosticism/Docetism) and assure believers of their salvation and fellowship with God",
            "reference": "1 John 5:13 and overall anti-heresy tone",
            "difficulty": "Moderate"
        },
        {
            "question": "The author (John) states that he and the apostles physically witnessed Jesus, emphasizing that they had seen Him with their eyes, heard Him with their ears, and what else?",
            "options": ["Touched Him with their hands", "Walked with Him daily", "Felt His Spirit", "Ate with Him"],
            "correct": "Touched Him with their hands",
            "reference": "1 John 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the simple, foundational statement John uses to describe the nature of God, which is the opposite of darkness?",
            "options": ["God is righteous", "God is love", "God is light", "God is spirit"],
            "correct": "God is light",
            "reference": "1 John 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "John states that if we confess our sins, God is faithful and just to forgive us and do what else?",
            "options": ["Give us a new heart", "Cleanse us from all unrighteousness", "Heal our bodies", "Restore our wealth"],
            "correct": "Cleanse us from all unrighteousness",
            "reference": "1 John 1:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What title does John give Jesus, who is the righteous advocate for believers before the Father?",
            "options": ["High Priest", "Apostle", "Prophet", "Advocate (or Helper/Paraclete)"],
            "correct": "Advocate (or Helper/Paraclete)",
            "reference": "1 John 2:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the simple definition John gives for *sin*?",
            "options": ["Breaking the commandments", "Unbelief", "Transgression of the Law (or 'lawlessness')", "Failure to love"],
            "correct": "Transgression of the Law (or 'lawlessness')",
            "reference": "1 John 3:4",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase John uses to describe those who deny that Jesus Christ has come in the flesh (the false teachers)?",
            "options": ["Children of the devil", "Antichrists", "Enemies of the cross", "False prophets"],
            "correct": "Antichrists",
            "reference": "1 John 2:18, 4:3",
            "difficulty": "Moderate"
        },
        {
            "question": "John states that 'perfect love casts out **_________**.'",
            "options": ["Doubt", "Fear", "Hatred", "Worry"],
            "correct": "Fear",
            "reference": "1 John 4:18",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the simple, ultimate definition John gives for the nature of God in Chapter 4, summarizing the entire letter's emphasis?",
            "options": ["God is holy", "God is light", "God is truth", "God is love"],
            "correct": "God is love",
            "reference": "1 John 4:8, 16",
            "difficulty": "Moderate"
        },
        {
            "question": "John states that we can have confidence and boldness on the Day of Judgment if we have what in this world?",
            "options": ["The same love as God (or 'as He is')", "The same wisdom as God", "The fullness of the Holy Spirit", "Great faith"],
            "correct": "The same love as God (or 'as He is')",
            "reference": "1 John 4:17",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "The primary test John provides for whether a person is truly 'in the light' is whether they do what?",
            "options": ["Believe the right doctrine", "Walk as Christ walked (keep His commandments)", "Attend church regularly", "Speak in tongues"],
            "correct": "Walk as Christ walked (keep His commandments)",
            "reference": "1 John 2:6",
            "difficulty": "Hard"
        },
        {
            "question": "John warns believers against loving the world, defining 'the world' by what three lustful desires?",
            "options": ["Lust of the flesh, lust of the eyes, and the pride of life", "Greed, envy, and pride", "Sexual immorality, covetousness, and idolatry", "Money, power, and fame"],
            "correct": "Lust of the flesh, lust of the eyes, and the pride of life",
            "reference": "1 John 2:16",
            "difficulty": "Hard"
        },
        {
            "question": "John uses a unique word derived from the Greek, which implies 'anointing,' and tells believers that they have this anointing from whom?",
            "options": ["The apostles", "The Holy One", "The Father", "The Holy Spirit"],
            "correct": "The Holy One",
            "reference": "1 John 2:20, 27",
            "difficulty": "Hard"
        },
        {
            "question": "What is the simple test John gives to distinguish the children of God from the children of the devil?",
            "options": ["Who practices righteousness and who does not love his brother", "Who can perform miracles and who cannot", "Who speaks the truth and who lies", "Who follows the Law and who does not"],
            "correct": "Who practices righteousness and who does not love his brother",
            "reference": "1 John 3:10",
            "difficulty": "Hard"
        },
        {
            "question": "What is the name of the wicked Old Testament figure who is cited as the first murderer, who belonged to the evil one because his deeds were evil?",
            "options": ["Ishmael", "Cain", "Esau", "Korah"],
            "correct": "Cain",
            "reference": "1 John 3:12",
            "difficulty": "Hard"
        },
        {
            "question": "What is the source of the assurance that God will hear believers' prayers?",
            "options": ["If we ask anything according to His will", "If we are faithful and generous", "If we pray with fasting", "If we are baptized"],
            "correct": "If we ask anything according to His will",
            "reference": "1 John 5:14",
            "difficulty": "Hard"
        },
        {
            "question": "John states that we know that we have passed from death to life because we do what specific action?",
            "options": ["Believe in the Son of God", "Love the brethren (or 'love the brothers and sisters')", "Keep the commandments", "Are born of God"],
            "correct": "Love the brethren (or 'love the brothers and sisters')",
            "reference": "1 John 3:14",
            "difficulty": "Hard"
        },
        {
            "question": "What are the two witnesses (besides the Spirit) that testify to Jesus Christ's identity?",
            "options": ["The Father and the Son", "The water and the blood", "The prophets and the apostles", "The miracles and the resurrection"],
            "correct": "The water and the blood",
            "reference": "1 John 5:6, 8",
            "difficulty": "Hard"
        },
        {
            "question": "What is the specific instruction John gives regarding hospitality toward the false teachers, lest one partake in their evil deeds?",
            "options": ["Do not receive them into your house nor greet them", "Give them a warning and send them away", "Rebuke them publicly", "Invite them to debate"],
            "correct": "Do not receive them into your house nor greet them",
            "reference": "2 John 1:10-11 (Often included in the context of 1 John's theme)",
            "difficulty": "Hard"
        },
        {
            "question": "John states that whoever has the Son has **_________**; whoever does not have the Son of God does not have **_________**.",
            "options": ["The Father, the Spirit", "The truth, the light", "Life, life", "Love, peace"],
            "correct": "Life, life",
            "reference": "1 John 5:12",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "John states that the purpose of Jesus's coming was to destroy what works?",
            "options": ["The works of the Law", "The works of the devil", "The works of the flesh", "The works of the world"],
            "correct": "The works of the devil",
            "reference": "1 John 3:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase John uses to describe the certainty of the future for believers, emphasizing their status as God's children?",
            "options": ["Now we are children of God; and it has not yet been revealed what we shall be, but we know that when He is revealed, we shall be like Him", "We will reign with Him forever", "We will see God as He is", "We are heirs of the kingdom"],
            "correct": "Now we are children of God; and it has not yet been revealed what we shall be, but we know that when He is revealed, we shall be like Him",
            "reference": "1 John 3:2",
            "difficulty": "Extreme"
        },
        {
            "question": "John summarizes the commands of God by stating that His commandments are not what?",
            "options": ["Difficult to keep", "Burdensome", "Necessary for salvation", "Impossible for man"],
            "correct": "Burdensome",
            "reference": "1 John 5:3",
            "difficulty": "Extreme"
        },
        {
            "question": "John states that no one who abides in Christ keeps on sinning, and the reason is because of what divine element that remains in him?",
            "options": ["His power", "His light", "His seed (or 'seed of God')", "His word"],
            "correct": "His seed (or 'seed of God')",
            "reference": "1 John 3:9",
            "difficulty": "Extreme"
        },
        {
            "question": "John instructs the believers to 'test the spirits' to see whether they are from God, using what specific doctrine as the critical test?",
            "options": ["Whether they confess that Jesus Christ has come in the flesh", "Whether they preach the resurrection", "Whether they honor the Father", "Whether they believe in the Holy Spirit"],
            "correct": "Whether they confess that Jesus Christ has come in the flesh",
            "reference": "1 John 4:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What two familial roles are identified as the source of forgiveness and cleansing for believers' sins?",
            "options": ["God the Father and the Holy Spirit", "The Father and Jesus Christ the righteous", "The Son and the Mother", "The Father and the prophets"],
            "correct": "The Father and Jesus Christ the righteous",
            "reference": "1 John 1:9; 2:1-2",
            "difficulty": "Extreme"
        },
        {
            "question": "The three things that bear witness on earth—the Spirit, the water, and the blood—are said to agree in what specific way?",
            "options": ["They agree in one (or 'are in agreement')", "They agree in truth", "They agree in power", "They agree in love"],
            "correct": "They agree in one (or 'are in agreement')",
            "reference": "1 John 5:8",
            "difficulty": "Extreme"
        },
        {
            "question": "John advises that if anyone sees his brother committing a sin that is **not** unto death, what should he do?",
            "options": ["Rebuke him publicly", "Pray for him, and God will give him life", "Ignore the sin", "Bring him before the elders"],
            "correct": "Pray for him, and God will give him life",
            "reference": "1 John 5:16",
            "difficulty": "Extreme"
        },
        {
            "question": "John states that we know we are in the truth and that our hearts will be assured before God by what specific evidence regarding love and truth?",
            "options": ["If we love one another in deed and in truth", "If we believe the correct doctrine", "If we keep the commandments perfectly", "If we perform good works"],
            "correct": "If we love one another in deed and in truth",
            "reference": "1 John 3:18-19",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final warning John gives in the entire letter?",
            "options": ["Beware of the Antichrist", "Love one another", "Keep yourselves from idols", "Do not sin"],
            "correct": "Keep yourselves from idols",
            "reference": "1 John 5:21",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "2 John",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Book of 2 John is addressed to whom?",
            "options": ["The Apostle Peter", "The elect lady and her children", "The seven churches in Asia", "The brethren in Rome"],
            "correct": "The elect lady and her children",
            "reference": "2 John 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "The address to 'the elect lady' is generally interpreted by scholars as referring to what entity?",
            "options": ["Mary, the mother of Jesus", "A prominent woman in the church", "A specific local church (or 'church') and its members", "The Virgin Mary"],
            "correct": "A specific local church (or 'church') and its members",
            "reference": "Scholarly interpretation of the term",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary positive theme John wishes the recipients to walk in?",
            "options": ["Wisdom and knowledge", "Love (or 'walking in love')", "Obedience to the Law", "Peace and harmony"],
            "correct": "Love (or 'walking in love')",
            "reference": "2 John 1:6",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific command does John state the church has had from the beginning?",
            "options": ["To love one another", "To preach the Gospel", "To wait for Christ's return", "To keep the Law of Moses"],
            "correct": "To love one another",
            "reference": "2 John 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "John warns against the deceivers who deny that Jesus Christ has done what?",
            "options": ["Risen from the dead", "Come in the flesh", "Forgiven sins", "Ascended to heaven"],
            "correct": "Come in the flesh",
            "reference": "2 John 1:7",
            "difficulty": "Moderate"
        },
        {
            "question": "John warns that whoever transgresses and does not abide in the doctrine of Christ does not have what?",
            "options": ["The Holy Spirit", "God", "The blessing of God", "The love of God"],
            "correct": "God",
            "reference": "2 John 1:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific instruction does John give regarding hospitality toward the false teachers (transgressors)?",
            "options": ["Welcome them warmly", "Give them a generous gift", "Do not receive them into your house nor greet them", "Debate them publicly"],
            "correct": "Do not receive them into your house nor greet them",
            "reference": "2 John 1:10",
            "difficulty": "Moderate"
        },
        {
            "question": "By sharing in the false teachers' evil deeds, a believer risks forfeiting what?",
            "options": ["Their salvation", "A full reward (or 'full reward')", "Their reputation", "Their hope"],
            "correct": "A full reward (or 'full reward')",
            "reference": "2 John 1:8",
            "difficulty": "Moderate"
        },
        {
            "question": "John expresses his desire to speak with the believers face to face so that their joy may be what?",
            "options": ["Complete", "Shared", "Eternal", "Renewed"],
            "correct": "Complete",
            "reference": "2 John 1:12",
            "difficulty": "Moderate"
        },
        {
            "question": "The letter ends with greetings from the children of whom?",
            "options": ["The elect lady's sister", "The Apostle John", "The Father and the Son", "The elders in the church"],
            "correct": "The elect lady's sister",
            "reference": "2 John 1:13",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "John identifies himself in the opening of the letter simply as whom?",
            "options": ["The Apostle John", "The elder", "The servant of God", "The beloved disciple"],
            "correct": "The elder",
            "reference": "2 John 1:1",
            "difficulty": "Hard"
        },
        {
            "question": "What two virtues does John wish the recipients would have from God the Father and from the Lord Jesus Christ?",
            "options": ["Peace and truth", "Love and faith", "Grace and peace", "Truth and love"],
            "correct": "Grace and peace (with mercy)",
            "reference": "2 John 1:3",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase John uses to describe the kind of love they should exhibit, which is commanded by God?",
            "options": ["That we love one another", "That we walk according to His commandments", "That we forgive one another", "That we love the Lord"],
            "correct": "That we walk according to His commandments",
            "reference": "2 John 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "John states that the deceiver is one who does not confess that Jesus Christ has come in the flesh and is called what?",
            "options": ["An enemy of the cross", "A heretic", "The Antichrist", "A wolf in sheep's clothing"],
            "correct": "The Antichrist",
            "reference": "2 John 1:7",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase John uses to describe the consequence of anyone who goes 'beyond' or does not abide in the doctrine of Christ?",
            "options": ["He does not have God", "He lacks wisdom", "He will be judged", "He loses his salvation"],
            "correct": "He does not have God",
            "reference": "2 John 1:9",
            "difficulty": "Hard"
        },
        {
            "question": "Why is John reluctant to write using paper and ink in detail?",
            "options": ["The persecution was too severe", "He hopes to come to them and speak face to face", "Paper and ink were too expensive", "He had run out of time"],
            "correct": "He hopes to come to them and speak face to face",
            "reference": "2 John 1:12",
            "difficulty": "Hard"
        },
        {
            "question": "John rejoiced that he found some of the recipients walking in what virtue, as they had received commandment from the Father?",
            "options": ["Faith", "Holiness", "Truth", "Mercy"],
            "correct": "Truth",
            "reference": "2 John 1:4",
            "difficulty": "Hard"
        },
        {
            "question": "What specific action of God is described as the source of grace, mercy, and peace for the believers?",
            "options": ["God the Father and the Lord Jesus Christ, the Son of the Father", "The Holy Spirit alone", "The teaching of the apostles", "The forgiveness of sins"],
            "correct": "God the Father and the Lord Jesus Christ, the Son of the Father",
            "reference": "2 John 1:3",
            "difficulty": "Hard"
        },
        {
            "question": "John warns the recipients to watch out for themselves, so that they do not lose what?",
            "options": ["The Holy Spirit", "The faith", "The things they have worked for", "The inheritance"],
            "correct": "The things they have worked for",
            "reference": "2 John 1:8",
            "difficulty": "Hard"
        },
        {
            "question": "What is the term John uses to denote the source of the deceivers and Antichrists who have gone out into the world?",
            "options": ["From the devil", "From among the church", "From the false prophets", "From those who deny the truth"],
            "correct": "From the devil",
            "reference": "Implied theme of 1 John 4:1-3, related to 2 John 1:7",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "John states that the love he has for the elect lady is shared not just by him, but by all those who have known what specific spiritual reality?",
            "options": ["The truth", "The will of God", "The Holy Spirit", "The commandments"],
            "correct": "The truth",
            "reference": "2 John 1:1",
            "difficulty": "Extreme"
        },
        {
            "question": "The truth will abide in the recipients and be with them for what duration of time?",
            "options": ["For a short time", "Forever", "Until the Lord returns", "Until they die"],
            "correct": "Forever",
            "reference": "2 John 1:2",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific action regarding Jesus's identity is the critical test to identify the deceivers (who deny that Christ has come in the flesh)?",
            "options": ["Denying the Father", "Denying the incarnation (coming in the flesh)", "Denying the resurrection", "Denying His divinity"],
            "correct": "Denying the incarnation (coming in the flesh)",
            "reference": "2 John 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "John warns that by receiving a false teacher, one becomes a partaker in what specific outcome?",
            "options": ["Their error", "Their evil deeds", "Their judgment", "Their shame"],
            "correct": "Their evil deeds",
            "reference": "2 John 1:11",
            "difficulty": "Extreme"
        },
        {
            "question": "John emphasizes that love is not a new commandment but one that they have had from when?",
            "options": ["The beginning (or 'from the beginning')", "The time of the apostles", "The time of Moses", "The time of Jesus"],
            "correct": "The beginning (or 'from the beginning')",
            "reference": "2 John 1:5",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific instruction John gives regarding the manner in which they should walk (or live)?",
            "options": ["As the Lord Jesus walked", "According to His commandments", "In the light", "In love and truth"],
            "correct": "According to His commandments",
            "reference": "2 John 1:6",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the specific description of the reward that John warns against losing due to unwatchfulness?",
            "options": ["The promise of salvation", "A full reward", "The crown of life", "Their place in heaven"],
            "correct": "A full reward",
            "reference": "2 John 1:8",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the consequence for the one who abides in the doctrine of Christ?",
            "options": ["He has both the Father and the Son", "He has eternal life", "He has the Holy Spirit", "He has the truth"],
            "correct": "He has both the Father and the Son",
            "reference": "2 John 1:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific desire does John express regarding his words and the recipients' spiritual growth?",
            "options": ["That they would follow his teaching", "That they would continue in love", "That they should have the opportunity to speak with them face to face", "That their joy may be full"],
            "correct": "That their joy may be full",
            "reference": "2 John 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What material is mentioned as the potential medium for John's future correspondence if he doesn't visit soon?",
            "options": ["Parchment and ink", "Ink and paper (or 'paper and ink')", "Tablets of stone", "A scroll"],
            "correct": "Ink and paper (or 'paper and ink')",
            "reference": "2 John 1:12",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "3 John",
    "questions": [
        // --- MODERATE ---
        {
            "question": "The Epistle of 3 John is addressed to an individual named whom?",
            "options": ["Gaius", "Diotrephes", "Demetrius", "Theophilus"],
            "correct": "Gaius",
            "reference": "3 John 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the primary positive attribute that the Apostle John praises the recipient, Gaius, for?",
            "options": ["His great wealth", "His boldness in preaching", "His loyalty and truthfulness (walking in the truth)", "His long life"],
            "correct": "His loyalty and truthfulness (walking in the truth)",
            "reference": "3 John 1:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific action did Gaius practice that John calls 'faithful'?",
            "options": ["Sending money to the apostles", "Showing hospitality to traveling Christian workers and strangers", "Leading the church meeting", "Correcting false teaching"],
            "correct": "Showing hospitality to traveling Christian workers and strangers",
            "reference": "3 John 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "The traveling workers John sends out take nothing from the Gentiles because they 'go out for the sake of the **_________**.'",
            "options": ["Poor", "Lord (or 'Name')", "Gospel", "Apostles"],
            "correct": "Lord (or 'Name')",
            "reference": "3 John 1:7",
            "difficulty": "Moderate"
        },
        {
            "question": "Who is the specific individual John condemns for loving to be first and for refusing to receive the apostles and their messengers?",
            "options": ["Gaius", "Demetrius", "Diotrephes", "Alexander"],
            "correct": "Diotrephes",
            "reference": "3 John 1:9",
            "difficulty": "Moderate"
        },
        {
            "question": "What action did the condemned individual, Diotrephes, perform, in addition to not receiving the messengers, to show his arrogant opposition?",
            "options": ["He stole church funds", "He put the brothers out of the church (or 'casts them out')", "He lied about John", "He denied the resurrection"],
            "correct": "He put the brothers out of the church (or 'casts them out')",
            "reference": "3 John 1:10",
            "difficulty": "Moderate"
        },
        {
            "question": "John instructs Gaius to 'not imitate what is evil, but what is **_________**.'",
            "options": ["Good", "Righteous", "Loving", "Holy"],
            "correct": "Good",
            "reference": "3 John 1:11",
            "difficulty": "Moderate"
        },
        {
            "question": "John states that whoever does good is of whom?",
            "options": ["The Son", "The Holy Spirit", "God", "The faithful"],
            "correct": "God",
            "reference": "3 John 1:11",
            "difficulty": "Moderate"
        },
        {
            "question": "What individual does John commend as having a good testimony from all, including the truth itself?",
            "options": ["Gaius", "Diotrephes", "Demetrius", "Archippus"],
            "correct": "Demetrius",
            "reference": "3 John 1:12",
            "difficulty": "Moderate"
        },
        {
            "question": "John expresses his desire to visit the believers so that their communication can be what?",
            "options": ["Written and preserved", "Face to face", "Public and bold", "Long and detailed"],
            "correct": "Face to face",
            "reference": "3 John 1:14",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "John begins the letter by stating his desire for Gaius's health to be as prosperous as what other aspect of his life?",
            "options": ["His generosity", "His soul (or 'soul prospers')", "His family", "His ministry"],
            "correct": "His soul (or 'soul prospers')",
            "reference": "3 John 1:2",
            "difficulty": "Hard"
        },
        {
            "question": "When John received the report about Gaius's conduct, what specific action did he take that conveyed his joy?",
            "options": ["He offered a prayer of thanksgiving", "He testified before the church about Gaius's truthfulness", "He wrote a letter of commendation", "He sent money to Gaius"],
            "correct": "He testified before the church about Gaius's truthfulness",
            "reference": "3 John 1:6",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase John uses to describe the kind of hospitality Gaius should show, emphasizing the nature of the workers?",
            "options": ["Showing hospitality to strangers, and that a faithful work", "Showing generosity to the needy", "Showing love to all", "Receiving the traveling brethren with a kiss"],
            "correct": "Showing hospitality to strangers, and that a faithful work",
            "reference": "3 John 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "John expresses his intention to do what to the condemned individual, Diotrephes, when he arrives?",
            "options": ["Excommunicate him immediately", "Pray for his repentance", "Call attention to (or 'mention') his deeds", "Demand the return of the brethren he cast out"],
            "correct": "Call attention to (or 'mention') his deeds",
            "reference": "3 John 1:10",
            "difficulty": "Hard"
        },
        {
            "question": "What specific vice does John condemn Diotrephes for, which led to his refusal to receive the apostles?",
            "options": ["His greed", "His pride (or 'loving to have the preeminence')", "His false teaching", "His failure to forgive"],
            "correct": "His pride (or 'loving to have the preeminence')",
            "reference": "3 John 1:9",
            "difficulty": "Hard"
        },
        {
            "question": "John cites the testimony of what specific entity (besides the truth and others) that commends Demetrius?",
            "options": ["The Holy Spirit", "The Law", "The Word of God", "The truth itself"],
            "correct": "The truth itself",
            "reference": "3 John 1:12",
            "difficulty": "Hard"
        },
        {
            "question": "John says that he takes no greater joy than to hear what about his children (spiritual children)?",
            "options": ["That they are doing well financially", "That they are walking in the truth", "That they are leading the church", "That they are performing miracles"],
            "correct": "That they are walking in the truth",
            "reference": "3 John 1:4",
            "difficulty": "Hard"
        },
        {
            "question": "By supporting the traveling Christian workers, John says Gaius is participating in what?",
            "options": ["The work of the apostles", "The spread of God's love", "The work of the truth (or 'fellow workers for the truth')", "The blessing of the Lord"],
            "correct": "The work of the truth (or 'fellow workers for the truth')",
            "reference": "3 John 1:8",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase John uses to emphasize that Gaius is acting faithfully, despite the fact that the workers were strangers to him?",
            "options": ["To the Lord and to the church", "Even to strangers", "In word and in deed", "As a good servant"],
            "correct": "Even to strangers",
            "reference": "3 John 1:5",
            "difficulty": "Hard"
        },
        {
            "question": "John states that he had much to write, but did not want to write with what two things?",
            "options": ["Authority and command", "Rebuke and anger", "Ink and pen (or 'ink and pen')", "Parchment and ink"],
            "correct": "Ink and pen (or 'ink and pen')",
            "reference": "3 John 1:13",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "The three short epistles of John (1, 2, and 3 John) are primarily attributed to John based on his simple title, 'The **_________**.'",
            "options": ["Apostle", "Witness", "Disciple", "Elder"],
            "correct": "Elder",
            "reference": "3 John 1:1 (Also 2 John 1:1)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific characteristic of the traveling workers is highlighted as the reason they would not take money from the Gentiles?",
            "options": ["Their independence", "Their commitment to the Name (or 'for the sake of the Name they went out, taking nothing from the Gentiles')", "Their vow of poverty", "Their apostolic authority"],
            "correct": "Their commitment to the Name (or 'for the sake of the Name they went out, taking nothing from the Gentiles')",
            "reference": "3 John 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What two negative actions regarding the faithful brethren does John condemn Diotrephes for, which were done with 'malicious words'?",
            "options": ["Refusing to receive and speaking out against John", "Refusing to receive and forbidding others to receive the brethren", "Excommunicating and opposing the apostles", "Rejecting the Law and promoting heresy"],
            "correct": "Refusing to receive and forbidding others to receive the brethren",
            "reference": "3 John 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific type of good deed should Gaius imitate, which he had been showing to the traveling workers?",
            "options": ["Following the truth", "Fellowship with God", "Doing good", "Showing hospitality"],
            "correct": "Doing good",
            "reference": "3 John 1:11",
            "difficulty": "Extreme"
        },
        {
            "question": "John contrasts doing good (which is of God) with doing evil, which is characterized by what state regarding God?",
            "options": ["Has not seen God", "Is a sinner", "Is of the devil", "Is without God"],
            "correct": "Has not seen God",
            "reference": "3 John 1:11",
            "difficulty": "Extreme"
        },
        {
            "question": "John says he hopes to speak with Gaius soon, and anticipates doing what specific action with him?",
            "options": ["Praying together", "Reading the letter of 2 John", "Greeting their friends by name", "Eating a meal"],
            "correct": "Greeting their friends by name",
            "reference": "3 John 1:14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific desire does John express regarding his words and the recipients' spiritual growth?",
            "options": ["That they would follow his teaching", "That they would continue in love", "That they should have the opportunity to speak with them face to face", "That their joy may be full"],
            "correct": "That their joy may be full",
            "reference": "2 John 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the consequence for the one who abides in the doctrine of Christ?",
            "options": ["He has both the Father and the Son", "He has eternal life", "He has the Holy Spirit", "He has the truth"],
            "correct": "He has both the Father and the Son",
            "reference": "2 John 1:9",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase John uses to express the joy he and the saints experienced due to Philemon's love?",
            "options": ["I thank God for your faith", "I have great joy and comfort in your love", "Your faith is known to all", "You have refreshed many hearts"],
            "correct": "I have great joy and comfort in your love",
            "reference": "Philemon 1:7",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the final, one-word salutation that John gives to Gaius and the church?",
            "options": ["Amen", "Peace", "Love", "Grace"],
            "correct": "Peace",
            "reference": "3 John 1:15",
            "difficulty": "Extreme"
        }
    ]
}
{
    "book": "Jude",
    "questions": [
        // --- MODERATE ---
        {
            "question": "What is the primary theme of the Epistle of Jude?",
            "options": ["The Second Coming of Christ", "The importance of love", "Contending earnestly for the faith against immoral false teachers", "Instructions on financial giving"],
            "correct": "Contending earnestly for the faith against immoral false teachers",
            "reference": "Jude 1:3-4",
            "difficulty": "Moderate"
        },
        {
            "question": "The author, Jude, identifies himself as the brother of James and the servant of whom?",
            "options": ["The Apostle Peter", "The Apostle John", "Jesus Christ", "The Holy Spirit"],
            "correct": "Jesus Christ",
            "reference": "Jude 1:1",
            "difficulty": "Moderate"
        },
        {
            "question": "Jude warns against false teachers who have secretly crept in and turned the grace of God into what?",
            "options": ["Licentiousness (or 'licentious ways')", "Legalism", "False doctrine", "Selfish ambition"],
            "correct": "Licentiousness (or 'licentious ways')",
            "reference": "Jude 1:4",
            "difficulty": "Moderate"
        },
        {
            "question": "Jude provides several Old Testament and Jewish examples of judgment. What example does he use from the wilderness generation of Israel?",
            "options": ["Their rebellion against Moses", "The judgment on those who did not believe (and perished)", "Their idolatry with the Golden Calf", "The destruction of the cities of Sodom and Gomorrah"],
            "correct": "The judgment on those who did not believe (and perished)",
            "reference": "Jude 1:5",
            "difficulty": "Moderate"
        },
        {
            "question": "What specific punishment is reserved for the angels who did not keep their proper domain but left their own abode?",
            "options": ["Eternal fire", "Chains of darkness until the judgment of the great day", "Destruction in the abyss", "Scattering to the earth"],
            "correct": "Chains of darkness until the judgment of the great day",
            "reference": "Jude 1:6",
            "difficulty": "Moderate"
        },
        {
            "question": "The false teachers are condemned for following the way of Cain, the error of Balaam, and the rebellion of whom?",
            "options": ["Pharaoh", "Korah", "Absalom", "Saul"],
            "correct": "Korah",
            "reference": "Jude 1:11",
            "difficulty": "Moderate"
        },
        {
            "question": "Jude quotes the prophecy of what Old Testament figure regarding the Lord coming with ten thousands of His saints?",
            "options": ["Moses", "Elijah", "Enoch", "Isaiah"],
            "correct": "Enoch",
            "reference": "Jude 1:14-15",
            "difficulty": "Moderate"
        },
        {
            "question": "Jude urges believers to build themselves up on what spiritual foundation?",
            "options": ["The teachings of the apostles", "The most holy faith", "The love of God", "The righteousness of Christ"],
            "correct": "The most holy faith",
            "reference": "Jude 1:20",
            "difficulty": "Moderate"
        },
        {
            "question": "What primary means does Jude instruct believers to use to keep themselves in the love of God?",
            "options": ["Praying in the Holy Spirit", "Reading the Law", "Fasting and worship", "Serving the poor"],
            "correct": "Praying in the Holy Spirit",
            "reference": "Jude 1:20-21",
            "difficulty": "Moderate"
        },
        {
            "question": "Jude closes the letter with a powerful doxology to the God who is able to present them faultless before the presence of His glory with what specific emotion?",
            "options": ["Triumph", "Exceeding joy", "Humility", "Love"],
            "correct": "Exceeding joy",
            "reference": "Jude 1:24",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "Jude originally intended to write about what subject, but changed his focus due to the urgent threat of false teaching?",
            "options": ["The second coming", "The nature of the Law", "Their common salvation", "The structure of the church"],
            "correct": "Their common salvation",
            "reference": "Jude 1:3",
            "difficulty": "Hard"
        },
        {
            "question": "Jude describes the false teachers as being comparable to what two types of heavenly bodies that are without light?",
            "options": ["Stars and moon", "Wandering stars (or 'wandering stars') and clouds", "Planets and sun", "Comets and asteroids"],
            "correct": "Wandering stars (or 'wandering stars') and clouds",
            "reference": "Jude 1:12-13",
            "difficulty": "Hard"
        },
        {
            "question": "Jude references an event not found in the canonical Old Testament, where Michael the archangel disputed with the devil over what specific object?",
            "options": ["The soul of man", "The body of Moses", "The Law of God", "The Temple in Jerusalem"],
            "correct": "The body of Moses",
            "reference": "Jude 1:9",
            "difficulty": "Hard"
        },
        {
            "question": "What is the phrase Jude uses to describe the false teachers' words, which they speak boastfully to gain advantage?",
            "options": ["Vain philosophy", "Great swelling words (or 'great swelling words of vanity')", "Malicious speech", "Empty rhetoric"],
            "correct": "Great swelling words (or 'great swelling words of vanity')",
            "reference": "Jude 1:16",
            "difficulty": "Hard"
        },
        {
            "question": "The false teachers are said to be those who cause divisions, are sensual (soulish), and do not have what divine entity?",
            "options": ["The Father", "The Holy Spirit", "The Son", "The Truth"],
            "correct": "The Holy Spirit",
            "reference": "Jude 1:19",
            "difficulty": "Hard"
        },
        {
            "question": "Jude urges believers to remember the words previously spoken by whom?",
            "options": ["The Old Testament prophets", "The apostles of our Lord Jesus Christ", "Jesus Himself", "The earlier prophets"],
            "correct": "The apostles of our Lord Jesus Christ",
            "reference": "Jude 1:17",
            "difficulty": "Hard"
        },
        {
            "question": "The angels who sinned are described as being judged because they followed what specific type of lust?",
            "options": ["Lust of the eyes", "Strange flesh (or 'unnatural flesh')", "Lust of the mind", "Lust of the world"],
            "correct": "Strange flesh (or 'unnatural flesh')",
            "reference": "Jude 1:7",
            "difficulty": "Hard"
        },
        {
            "question": "In his instruction on dealing with those affected by false teaching, Jude tells believers to save some, snatching them from what impending danger?",
            "options": ["The devil's clutches", "The persecution of the Romans", "The fire", "The coming judgment"],
            "correct": "The fire",
            "reference": "Jude 1:23",
            "difficulty": "Hard"
        },
        {
            "question": "What specific phrase does Jude use to describe the destiny of the false teachers, whose condemnation was written long ago?",
            "options": ["The eternal pit", "Reserved for the blackness of darkness forever", "The lake of fire", "Eternal damnation"],
            "correct": "Reserved for the blackness of darkness forever",
            "reference": "Jude 1:13",
            "difficulty": "Hard"
        },
        {
            "question": "Jude reminds the readers of the judgment of Sodom and Gomorrah, which is held forth as an example of what kind of punishment?",
            "options": ["Temporal punishment", "Eternal fire", "Physical destruction", "Spiritual judgment"],
            "correct": "Eternal fire",
            "reference": "Jude 1:7",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What two unique familial relationships does Jude claim (brother of James, servant of Jesus) that were once skeptical of Jesus's messianic claims?",
            "options": ["Brother of James and cousin of John", "Brother of James and half-brother of Jesus", "Brother of John and servant of Peter", "Brother of James and cousin of Jesus"],
            "correct": "Brother of James and half-brother of Jesus",
            "reference": "Jude 1:1 (Implied family relationship, cross-reference Mark 6:3; John 7:5)",
            "difficulty": "Extreme"
        },
        {
            "question": "In his dispute with the devil, Michael the archangel refused to bring a railing accusation, but instead used what specific phrase?",
            "options": ["The Lord is sovereign", "I rebuke you in the name of God", "The Lord rebuke you!", "Get behind me, Satan"],
            "correct": "The Lord rebuke you!",
            "reference": "Jude 1:9",
            "difficulty": "Extreme"
        },
        {
            "question": "Jude uses a sharp description for the false teachers who feast with the believers, calling them what?",
            "options": ["Spots (or 'spots in your love feasts')", "A disgrace", "Unclean animals", "Tares in the field"],
            "correct": "Spots (or 'spots in your love feasts')",
            "reference": "Jude 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "The false teachers are said to 'despise authority' and to speak evil of what type of exalted spiritual beings?",
            "options": ["The Holy Spirit", "Dignitaries (or 'glorious ones')", "The archangels", "The cherubim"],
            "correct": "Dignitaries (or 'glorious ones')",
            "reference": "Jude 1:8",
            "difficulty": "Extreme"
        },
        {
            "question": "The condemnation of the false teachers is compared to the 'spots, without water' that are carried by the winds, and what other type of tree?",
            "options": ["A fruit tree without fruit", "Trees without fruit, twice dead, pulled up by the roots", "A dying olive tree", "A barren fig tree"],
            "correct": "Trees without fruit, twice dead, pulled up by the roots",
            "reference": "Jude 1:12",
            "difficulty": "Extreme"
        },
        {
            "question": "In the prophecy of Enoch, what is the ultimate purpose of the Lord's coming with ten thousands of His saints?",
            "options": ["To set up His kingdom", "To execute judgment on all, to convict all who are ungodly among them of all their ungodly deeds", "To save the righteous", "To gather the nations"],
            "correct": "To execute judgment on all, to convict all who are ungodly among them of all their ungodly deeds",
            "reference": "Jude 1:14-15",
            "difficulty": "Extreme"
        },
        {
            "question": "Jude instructs believers to have compassion on some and to save others, doing so with fear, hating even the garment defiled by what?",
            "options": ["The Law", "The flesh", "The devil", "The world"],
            "correct": "The flesh",
            "reference": "Jude 1:22-23",
            "difficulty": "Extreme"
        },
        {
            "question": "Jude reminds the readers of the prediction of the apostles that in the last time there would be what type of people who would walk according to their own ungodly lusts?",
            "options": ["Scoffers (or 'mockers')", "False prophets", "Enemies of the faith", "Apostates"],
            "correct": "Scoffers (or 'mockers')",
            "reference": "Jude 1:18",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific bodily sense is highlighted as the basis for the false teachers' condemnatory speech?",
            "options": ["What they see with their eyes", "What they do not know (or 'speak evil of whatever they do not know')", "What they hear with their ears", "What they speak with their mouth"],
            "correct": "What they do not know (or 'speak evil of whatever they do not know')",
            "reference": "Jude 1:10",
            "difficulty": "Extreme"
        },
        {
            "question": "What are the two final attributes of Christ that Jude praises in his doxology, concluding the letter?",
            "options": ["Majesty and power", "Glory, majesty, dominion, and authority", "Love and mercy", "Justice and truth"],
            "correct": "Glory, majesty, dominion, and authority",
            "reference": "Jude 1:25",
            "difficulty": "Extreme"
        }
    ]
}
  
  // --- PROPHECY ---
 {
    "book": "Revelation",
    "questions": [
        // --- MODERATE ---
        {
            "question": "Who is the human author of the Book of Revelation?",
            "options": ["The Apostle Paul", "The Apostle John", "Peter, the Apostle", "Jude, the brother of James"],
            "correct": "The Apostle John",
            "reference": "Revelation 1:1, 4, 9",
            "difficulty": "Moderate"
        },
        {
            "question": "Where was the author when he received the vision of Revelation?",
            "options": ["On the island of Patmos", "In Rome", "In Jerusalem", "In Ephesus"],
            "correct": "On the island of Patmos",
            "reference": "Revelation 1:9",
            "difficulty": "Moderate"
        },
        {
            "question": "To how many specific churches in Asia Minor was the Book of Revelation originally addressed?",
            "options": ["Three", "Seven", "Twelve", "Five"],
            "correct": "Seven",
            "reference": "Revelation 1:4, 11",
            "difficulty": "Moderate"
        },
        {
            "question": "What title is repeatedly used in Revelation to refer to Jesus, emphasizing His sacrificial death?",
            "options": ["The Son of Man", "The King of Kings", "The Lamb (who was slain)", "The Lion of Judah"],
            "correct": "The Lamb (who was slain)",
            "reference": "Revelation 5:6, 12; 7:17, etc.",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the phrase used to describe the first event of the end times, where the believers will be judged and rewarded?",
            "options": ["The Great Tribulation", "The Marriage Supper of the Lamb", "The Battle of Armageddon", "The Rapture"],
            "correct": "The Marriage Supper of the Lamb",
            "reference": "Revelation 19:7-9",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the specific duration of time (in years) during which the saints reign with Christ before the final judgment?",
            "options": ["Seven years", "One hundred years", "One thousand years (the Millennium)", "Forty years"],
            "correct": "One thousand years (the Millennium)",
            "reference": "Revelation 20:4-6",
            "difficulty": "Moderate"
        },
        {
            "question": "What is the name of the final battle where the kings of the earth gather against the Lord?",
            "options": ["The Battle of the Lord", "The Battle of Gog and Magog", "The Battle of Armageddon", "The War of the Saints"],
            "correct": "The Battle of Armageddon",
            "reference": "Revelation 16:16",
            "difficulty": "Moderate"
        },
        {
            "question": "What does the second beast (false prophet) force everyone to receive, without which they cannot buy or sell?",
            "options": ["A ring of gold", "The image of the beast", "The Mark of the Beast (on the right hand or forehead)", "A coin"],
            "correct": "The Mark of the Beast (on the right hand or forehead)",
            "reference": "Revelation 13:16-17",
            "difficulty": "Moderate"
        },
        {
            "question": "In the New Jerusalem, what specific natural element is completely absent because God Himself is the light?",
            "options": ["Water", "Walls and gates", "The sun and moon", "Trees"],
            "correct": "The sun and moon",
            "reference": "Revelation 21:23",
            "difficulty": "Moderate"
        },
        {
            "question": "The final judgment, where all the dead are judged according to their works written in the books, is called what?",
            "options": ["The Final Harvest", "The Judgment Seat of Christ", "The Great White Throne Judgment", "The Hour of Tribulation"],
            "correct": "The Great White Throne Judgment",
            "reference": "Revelation 20:11-15",
            "difficulty": "Moderate"
        },

        // --- HARD ---
        {
            "question": "What two Old Testament patriarchs are represented by the twelve foundation stones of the New Jerusalem?",
            "options": ["The twelve tribes of Israel and the twelve apostles of the Lamb", "Abraham and Isaac", "Jacob and Esau", "Moses and Aaron"],
            "correct": "The twelve tribes of Israel and the twelve apostles of the Lamb",
            "reference": "Revelation 21:12, 14",
            "difficulty": "Hard"
        },
        {
            "question": "The city of Babylon is symbolically destroyed, and its destruction is mourned by what three earthly groups?",
            "options": ["The kings, the merchants, and the sailors", "The rich, the poor, and the slaves", "The angels, the prophets, and the saints", "The Jews, the Gentiles, and the Romans"],
            "correct": "The kings, the merchants, and the sailors",
            "reference": "Revelation 18:9, 11, 17-19",
            "difficulty": "Hard"
        },
        {
            "question": "What specific item is said to be taken away from the elders, the woman, and the wicked, indicating their shame or loss of authority?",
            "options": ["Their clothes", "Their scrolls", "Their crowns", "Their weapons"],
            "correct": "Their crowns",
            "reference": "Revelation 4:10; 12:3; 14:14",
            "difficulty": "Hard"
        },
        {
            "question": "What specific color of the horse and its rider who is given power over a fourth of the earth to kill with sword, famine, death, and wild beasts?",
            "options": ["White", "Red", "Black", "Pale (or 'ashen')"],
            "correct": "Pale (or 'ashen')",
            "reference": "Revelation 6:8",
            "difficulty": "Hard"
        },
        {
            "question": "In the vision of the four living creatures, what are the four distinct faces each creature possesses?",
            "options": ["Lion, ox, man, and eagle", "Lion, man, angel, and serpent", "Bull, lion, eagle, and man", "Ox, man, angel, and lion"],
            "correct": "Lion, ox, man, and eagle",
            "reference": "Revelation 4:7",
            "difficulty": "Hard"
        },
        {
            "question": "What specific human action does John attempt to do twice when overwhelmed by the angel's revelations, only to be told not to?",
            "options": ["To write down the wrong things", "To stop writing", "To worship the angel", "To weep uncontrollably"],
            "correct": "To worship the angel",
            "reference": "Revelation 19:10; 22:8-9",
            "difficulty": "Hard"
        },
        {
            "question": "The New Jerusalem is described as having a total length, width, and height of how many stadia?",
            "options": ["1,000", "12,000", "144,000", "2,000"],
            "correct": "12,000",
            "reference": "Revelation 21:16",
            "difficulty": "Hard"
        },
        {
            "question": "What specific sound is described when the Lamb takes the scroll from the hand of Him who sat on the throne?",
            "options": ["Silence in heaven", "Thunder and lightning", "The elders singing a new song", "A shout of praise"],
            "correct": "The elders singing a new song",
            "reference": "Revelation 5:8-9",
            "difficulty": "Hard"
        },
        {
            "question": "What does the first beast compel everyone to do before they can buy or sell with the mark?",
            "options": ["Worship the beast and his image", "Pay tribute to Rome", "Deny Christ", "Obey the Law of Moses"],
            "correct": "Worship the beast and his image",
            "reference": "Revelation 13:15-16",
            "difficulty": "Hard"
        },
        {
            "question": "The final warning in Revelation states that anyone who adds to or takes away from the words of this book will have what consequences?",
            "options": ["Be forgotten by God", "God will add to him the plagues written in this book and take away his share from the tree of life and the holy city", "Be excommunicated from the church", "Suffer eternal torment"],
            "correct": "God will add to him the plagues written in this book and take away his share from the tree of life and the holy city",
            "reference": "Revelation 22:18-19",
            "difficulty": "Hard"
        },

        // --- EXTREME ---
        {
            "question": "What specific description of the appearance of the resurrected Christ that John first sees (in Chapter 1)?",
            "options": ["Like the Son of Man, with a golden sash, hair white as wool, eyes like a flame of fire, feet like fine brass, and a sharp two-edged sword proceeding from His mouth", "A figure of light with a crown", "A conquering warrior on a white horse", "The Son of God on a throne"],
            "correct": "Like the Son of Man, with a golden sash, hair white as wool, eyes like a flame of fire, feet like fine brass, and a sharp two-edged sword proceeding from His mouth",
            "reference": "Revelation 1:13-16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific judgment is delivered upon the earth after the seventh angel sounds his trumpet?",
            "options": ["The temple is opened, and the kingdom of the world has become the kingdom of our Lord and of His Christ", "A great earthquake occurs", "The nations are judged", "Hail and fire mixed with blood are thrown to the earth"],
            "correct": "The temple is opened, and the kingdom of the world has become the kingdom of our Lord and of His Christ",
            "reference": "Revelation 11:15, 19",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific title does the Angel of the Lord use to address the Church of Philadelphia, in recognition of their loyalty?",
            "options": ["The Holy One, the True One, He who has the key of David", "The faithful and true witness", "She who loves My name", "The patient and obedient"],
            "correct": "The Holy One, the True One, He who has the key of David",
            "reference": "Revelation 3:7",
            "difficulty": "Extreme"
        },
        {
            "question": "In the Great Tribulation, what specific Old Testament prophet is one of the two witnesses said to resemble, based on their ability to call down fire?",
            "options": ["Moses", "Jeremiah", "Elijah", "Ezekiel"],
            "correct": "Elijah",
            "reference": "Revelation 11:5-6 (The other, Moses, can turn water to blood)",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific number of seals, trumpets, and bowls (vials) are used sequentially to unleash God's judgment upon the earth?",
            "options": ["Ten, ten, and ten", "Seven, seven, and seven", "Twelve, seven, and seven", "Seven, twelve, and seven"],
            "correct": "Seven, seven, and seven",
            "reference": "Revelation 6, 8, 16",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific natural phenomenon does God swear by when He tells the mighty angel that there will be no more delay?",
            "options": ["The New Jerusalem", "Him who lives forever and ever, who created heaven, earth, and sea", "The Temple of God", "The Lamb that was slain"],
            "correct": "Him who lives forever and ever, who created heaven, earth, and sea",
            "reference": "Revelation 10:5-6",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific title is the 144,000 sealed people seen to have written on their foreheads?",
            "options": ["The name of God and the Lamb", "The Mark of the Christ", "Servants of God", "The seal of the Holy Spirit"],
            "correct": "The name of God and the Lamb",
            "reference": "Revelation 14:1",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the collective name given to the three unclean spirits that look like frogs, which go out to the kings of the earth?",
            "options": ["The Spirits of Rebellion", "The spirits of demons (performing signs)", "The spirits of the Antichrist", "The spirits of Babylon"],
            "correct": "The spirits of demons (performing signs)",
            "reference": "Revelation 16:13-14",
            "difficulty": "Extreme"
        },
        {
            "question": "What specific measurement is given for the wall of the New Jerusalem (in cubits)?",
            "options": ["12 cubits", "144 cubits", "1,000 cubits", "144,000 cubits"],
            "correct": "144 cubits",
            "reference": "Revelation 21:17",
            "difficulty": "Extreme"
        },
        {
            "question": "What is the phrase used to describe the fate of those who are not found written in the Book of Life?",
            "options": ["They are cast into the abyss", "They are cast into the lake of fire", "They are destroyed by the breath of God", "They are cast into darkness"],
            "correct": "They are cast into the lake of fire",
            "reference": "Revelation 20:15",
            "difficulty": "Extreme"
        }
    ]
}
];