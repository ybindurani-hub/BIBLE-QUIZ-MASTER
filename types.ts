export type Difficulty = 'Moderate' | 'Hard' | 'Extreme';

export interface Question {
  id: string;
  book: string;
  question: string;
  options: string[];
  correct: string; // The correct answer string
  reference: string;
  difficulty: Difficulty;
}

export interface Book {
  name: string;
  testament: 'Old' | 'New';
  category?: string; // e.g., Law, History, Wisdom, Gospels
}

export interface UserProgress {
  bookName: string;
  difficulty: Difficulty;
  bestScore: number;
  totalQuestions: number;
  stars: 0 | 1 | 2 | 3; // 0 = not attempted, 3 = perfect
  lastPlayed: number; // timestamp
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: string; selected: string; isCorrect: boolean }[];
  status: 'idle' | 'playing' | 'completed';
  timeLeft: number;
}

export const BOOKS_OF_BIBLE: Book[] = [
  // Old Testament
  { name: 'Genesis', testament: 'Old', category: 'Law' },
  { name: 'Exodus', testament: 'Old', category: 'Law' },
  { name: 'Leviticus', testament: 'Old', category: 'Law' },
  { name: 'Numbers', testament: 'Old', category: 'Law' },
  { name: 'Deuteronomy', testament: 'Old', category: 'Law' },
  { name: 'Joshua', testament: 'Old', category: 'History' },
  { name: 'Judges', testament: 'Old', category: 'History' },
  { name: 'Ruth', testament: 'Old', category: 'History' },
  { name: '1 Samuel', testament: 'Old', category: 'History' },
  { name: '2 Samuel', testament: 'Old', category: 'History' },
  { name: '1 Kings', testament: 'Old', category: 'History' },
  { name: '2 Kings', testament: 'Old', category: 'History' },
  { name: '1 Chronicles', testament: 'Old', category: 'History' },
  { name: '2 Chronicles', testament: 'Old', category: 'History' },
  { name: 'Ezra', testament: 'Old', category: 'History' },
  { name: 'Nehemiah', testament: 'Old', category: 'History' },
  { name: 'Esther', testament: 'Old', category: 'History' },
  { name: 'Job', testament: 'Old', category: 'Wisdom' },
  { name: 'Psalms', testament: 'Old', category: 'Wisdom' },
  { name: 'Proverbs', testament: 'Old', category: 'Wisdom' },
  { name: 'Ecclesiastes', testament: 'Old', category: 'Wisdom' },
  { name: 'Song of Solomon', testament: 'Old', category: 'Wisdom' },
  { name: 'Isaiah', testament: 'Old', category: 'Prophecy' },
  { name: 'Jeremiah', testament: 'Old', category: 'Prophecy' },
  { name: 'Lamentations', testament: 'Old', category: 'Prophecy' },
  { name: 'Ezekiel', testament: 'Old', category: 'Prophecy' },
  { name: 'Daniel', testament: 'Old', category: 'Prophecy' },
  { name: 'Hosea', testament: 'Old', category: 'Prophecy' },
  { name: 'Joel', testament: 'Old', category: 'Prophecy' },
  { name: 'Amos', testament: 'Old', category: 'Prophecy' },
  { name: 'Obadiah', testament: 'Old', category: 'Prophecy' },
  { name: 'Jonah', testament: 'Old', category: 'Prophecy' },
  { name: 'Micah', testament: 'Old', category: 'Prophecy' },
  { name: 'Nahum', testament: 'Old', category: 'Prophecy' },
  { name: 'Habakkuk', testament: 'Old', category: 'Prophecy' },
  { name: 'Zephaniah', testament: 'Old', category: 'Prophecy' },
  { name: 'Haggai', testament: 'Old', category: 'Prophecy' },
  { name: 'Zechariah', testament: 'Old', category: 'Prophecy' },
  { name: 'Malachi', testament: 'Old', category: 'Prophecy' },
  // New Testament
  { name: 'Matthew', testament: 'New', category: 'Gospel' },
  { name: 'Mark', testament: 'New', category: 'Gospel' },
  { name: 'Luke', testament: 'New', category: 'Gospel' },
  { name: 'John', testament: 'New', category: 'Gospel' },
  { name: 'Acts', testament: 'New', category: 'History' },
  { name: 'Romans', testament: 'New', category: 'Epistle' },
  { name: '1 Corinthians', testament: 'New', category: 'Epistle' },
  { name: '2 Corinthians', testament: 'New', category: 'Epistle' },
  { name: 'Galatians', testament: 'New', category: 'Epistle' },
  { name: 'Ephesians', testament: 'New', category: 'Epistle' },
  { name: 'Philippians', testament: 'New', category: 'Epistle' },
  { name: 'Colossians', testament: 'New', category: 'Epistle' },
  { name: '1 Thessalonians', testament: 'New', category: 'Epistle' },
  { name: '2 Thessalonians', testament: 'New', category: 'Epistle' },
  { name: '1 Timothy', testament: 'New', category: 'Epistle' },
  { name: '2 Timothy', testament: 'New', category: 'Epistle' },
  { name: 'Titus', testament: 'New', category: 'Epistle' },
  { name: 'Philemon', testament: 'New', category: 'Epistle' },
  { name: 'Hebrews', testament: 'New', category: 'Epistle' },
  { name: 'James', testament: 'New', category: 'Epistle' },
  { name: '1 Peter', testament: 'New', category: 'Epistle' },
  { name: '2 Peter', testament: 'New', category: 'Epistle' },
  { name: '1 John', testament: 'New', category: 'Epistle' },
  { name: '2 John', testament: 'New', category: 'Epistle' },
  { name: '3 John', testament: 'New', category: 'Epistle' },
  { name: 'Jude', testament: 'New', category: 'Epistle' },
  { name: 'Revelation', testament: 'New', category: 'Prophecy' },
];