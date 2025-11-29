import { Question, Difficulty } from '../types';

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
},

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
},

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
            "options": ["Once per year", "Twice per year", "He was to write a copy for himself upon ascending the throne", "Every Sabbath"],
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
},

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
},

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
  
];