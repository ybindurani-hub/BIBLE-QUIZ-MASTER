import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import AdBanner from './components/AdBanner';
import Interstitial from './components/Interstitial';
import { BOOKS_OF_BIBLE, Question, Difficulty, QuizState } from './types';
import { seedInitialData, getQuestionsByBook, getProgress, saveProgress } from './services/db';
import { ChevronRight, Star, ArrowLeft, Info, Check, X, Clock } from 'lucide-react';

// --- Global Context for Theme ---
const ThemeContext = React.createContext({ isDark: false, toggleTheme: () => {} });

// --- Components ---

// 1. Home View: Book List
const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTestament, setFilterTestament] = useState<'All' | 'Old' | 'New'>('All');
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load progress for all books to show stars
    const loadAllProgress = async () => {
      const map: Record<string, number> = {};
      for (const book of BOOKS_OF_BIBLE) {
         const p = await getProgress(book.name);
         // Sum stars or max score logic. Simplest: Max stars across difficulties
         const maxStars = p.reduce((acc, curr) => Math.max(acc, curr.stars), 0);
         map[book.name] = maxStars;
      }
      setProgressMap(map);
    };
    loadAllProgress();
  }, []);

  const filteredBooks = BOOKS_OF_BIBLE.filter(b => {
    const matchName = b.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTestament = filterTestament === 'All' || b.testament === filterTestament;
    return matchName && matchTestament;
  });

  return (
    <div className="space-y-6">
      <AdBanner position="top" />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
        <div className="flex gap-2">
            {['All', 'Old', 'New'].map((t) => (
                <button 
                    key={t}
                    onClick={() => setFilterTestament(t as any)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filterTestament === t ? 'bg-bible-gold text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300'}`}
                >
                    {t}
                </button>
            ))}
        </div>
        <input 
            type="text" 
            placeholder="Search books..." 
            className="w-full sm:w-64 px-4 py-2 rounded-md border border-gray-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-bible-gold outline-none"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div 
            key={book.name}
            onClick={() => navigate(`/quiz/${book.name}`)}
            className="group relative bg-white dark:bg-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 dark:border-slate-700 hover:border-bible-gold dark:hover:border-bible-gold"
          >
            <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${book.testament === 'Old' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                    {book.testament}
                </span>
                <div className="flex gap-0.5">
                    {[1,2,3].map(s => (
                        <Star key={s} className={`w-3 h-3 ${s <= (progressMap[book.name] || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-slate-100 group-hover:text-bible-gold transition-colors">
                {book.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">{book.category}</p>
            <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5 text-bible-gold" />
            </div>
          </div>
        ))}
      </div>
      <AdBanner position="bottom" />
    </div>
  );
};

// 2. Quiz Game View
const QuizGame: React.FC = () => {
    const { bookName } = useParams<{ bookName: string }>();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [gameState, setGameState] = useState<QuizState>({
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        status: 'idle',
        timeLeft: 30
    });
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
    const [showAd, setShowAd] = useState(false);
    
    // Interaction States
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Fetch questions
    useEffect(() => {
        if (!bookName) return;
        const fetch = async () => {
            setLoading(true);
            const allQs = await getQuestionsByBook(bookName);
            setQuestions(allQs);
            setLoading(false);
        };
        fetch();
    }, [bookName]);

    // Timer Logic
    useEffect(() => {
        if (gameState.status !== 'playing' || isPaused) return;
        const timer = setInterval(() => {
            setGameState(prev => {
                if (prev.timeLeft <= 0) {
                    handleAnswer("TIMEOUT"); 
                    return prev; 
                }
                return { ...prev, timeLeft: prev.timeLeft - 1 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [gameState.status, isPaused]);

    const startGame = (diff: Difficulty) => {
        const filtered = questions.filter(q => q.difficulty === diff || (diff === 'Extreme' && q.difficulty === 'Hard')); 
        // Shuffle
        const shuffled = filtered.length > 0 ? filtered.sort(() => 0.5 - Math.random()).slice(0, 50) : [];
        
        if (shuffled.length === 0) {
            alert(`No questions available for ${bookName} (${diff}). Please populate data/questions.ts.`);
            return;
        }

        setSelectedDifficulty(diff);
        setGameState({
            questions: shuffled,
            currentQuestionIndex: 0,
            score: 0,
            answers: [],
            status: 'playing',
            timeLeft: 30
        });
        setSelectedOption(null);
        setIsPaused(false);
    };

    const handleAnswer = (option: string) => {
        if (isPaused) return;

        const isTimeout = option === "TIMEOUT";
        const selected = isTimeout ? "" : option; 
        
        setIsPaused(true);
        setSelectedOption(selected);

        const currentQ = gameState.questions[gameState.currentQuestionIndex];
        const isCorrect = selected === currentQ.correct;
        
        const newAnswers = [...gameState.answers, { questionId: currentQ.id, selected: selected, isCorrect }];
        const newScore = isCorrect ? gameState.score + 1 : gameState.score;
        
        // Update state to record answer but stay on current question for feedback
        setGameState(prev => ({
            ...prev,
            answers: newAnswers,
            score: newScore
        }));

        // Delay move to next question to allow reading reference and seeing feedback
        setTimeout(() => {
            if (gameState.currentQuestionIndex + 1 >= gameState.questions.length) {
                // End Game
                setGameState(prev => ({ ...prev, status: 'completed' }));
                saveScore(newScore, gameState.questions.length);
            } else {
                // Next Question
                setGameState(prev => ({ 
                    ...prev, 
                    currentQuestionIndex: prev.currentQuestionIndex + 1,
                    timeLeft: 30 
                }));
                setSelectedOption(null);
                setIsPaused(false);
            }
        }, 2000); // 2 seconds delay
    };

    const saveScore = async (score: number, total: number) => {
        if (!bookName || !selectedDifficulty) return;
        const percentage = (score / total) * 100;
        let stars: 0|1|2|3 = 0;
        if (percentage >= 90) stars = 3;
        else if (percentage >= 70) stars = 2;
        else if (percentage >= 50) stars = 1;

        await saveProgress({
            bookName,
            difficulty: selectedDifficulty,
            bestScore: score,
            totalQuestions: total,
            stars,
            lastPlayed: Date.now()
        });
        
        // Trigger Ad after completion
        setTimeout(() => setShowAd(true), 1000);
    };

    const getKnowledgeLevel = (score: number, total: number) => {
        const p = (score/total)*100;
        if (p === 100) return 'Bible Expert';
        if (p >= 80) return 'Strong Disciple';
        if (p >= 50) return 'Intermediate';
        return 'Beginner';
    };

    // --- RENDER STATES ---

    // 1. Difficulty Selection
    if (gameState.status === 'idle') {
        return (
            <div className="max-w-xl mx-auto space-y-8 py-10">
                <button onClick={() => navigate('/')} className="flex items-center text-sm text-gray-500 hover:text-bible-gold mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Books
                </button>
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white">{bookName}</h1>
                    <p className="text-slate-500">Select Difficulty Level</p>
                </div>
                
                {loading ? (
                    <div className="flex justify-center p-10"><div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div></div>
                ) : (
                    <div className="grid gap-4">
                        {(['Moderate', 'Hard', 'Extreme'] as Difficulty[]).map((d, i) => (
                            <button 
                                key={d}
                                onClick={() => startGame(d)}
                                className="relative overflow-hidden group bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-transparent hover:border-bible-gold shadow-lg transition-all"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-bold">{d}</h3>
                                        <p className="text-xs text-gray-500 mt-1">{questions.filter(q => q.difficulty === d).length} Questions Available</p>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(i+1)].map((_, idx) => <div key={idx} className="w-2 h-6 bg-bible-gold rounded-sm"></div>)}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
                <div className="bg-blue-50 dark:bg-slate-800/50 p-4 rounded-lg flex gap-3 items-start text-sm text-blue-800 dark:text-blue-300">
                    <Info className="w-5 h-5 shrink-0" />
                    <p>This app works completely offline. Questions are pre-loaded.</p>
                </div>
            </div>
        );
    }

    // 2. Result Screen
    if (gameState.status === 'completed') {
        const percentage = Math.round((gameState.score / gameState.questions.length) * 100);
        return (
            <div className="max-w-xl mx-auto py-10 text-center space-y-8">
                <Interstitial trigger={showAd} onClose={() => setShowAd(false)} />
                
                <div className="relative inline-block">
                    <svg className="w-40 h-40 transform -rotate-90">
                        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-gray-200 dark:text-slate-700" />
                        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray={440} strokeDashoffset={440 - (440 * percentage) / 100} className="text-bible-gold transition-all duration-1000" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-3xl font-bold">{percentage}%</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{getKnowledgeLevel(gameState.score, gameState.questions.length)}</h2>
                    <p className="text-gray-500">You scored {gameState.score} out of {gameState.questions.length}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => setGameState({...gameState, status: 'idle'})} className="px-6 py-3 bg-gray-200 dark:bg-slate-700 rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                        Select Level
                    </button>
                    <button onClick={() => navigate('/')} className="px-6 py-3 bg-bible-gold text-white rounded-lg font-bold hover:bg-yellow-600 transition">
                        Next Book
                    </button>
                </div>
                
                <AdBanner position="bottom" />
            </div>
        );
    }

    // 3. Playing Screen
    const currentQ = gameState.questions[gameState.currentQuestionIndex];
    return (
        <div className="max-w-2xl mx-auto py-6 space-y-6">
            <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                <span>Question {gameState.currentQuestionIndex + 1} / {gameState.questions.length}</span>
                <div className={`flex items-center gap-1 ${gameState.timeLeft < 10 ? 'text-red-500' : 'text-gray-500'}`}>
                    <Clock className="w-4 h-4" />
                    <span>{gameState.timeLeft}s</span>
                </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-bible-gold transition-all duration-500 ease-out"
                    style={{ width: `${((gameState.currentQuestionIndex) / gameState.questions.length) * 100}%` }}
                ></div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 sm:p-10 space-y-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                
                {/* Reveal Reference Header */}
                <div className={`absolute top-0 left-0 w-full p-2 bg-slate-100 dark:bg-slate-900 text-center text-sm font-serif text-bible-gold transition-transform duration-500 ${selectedOption ? 'translate-y-0' : '-translate-y-full'}`}>
                    📖 {currentQ.reference}
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold leading-relaxed text-slate-800 dark:text-slate-100 mt-6">
                    {currentQ.question}
                </h2>

                <div className="space-y-3">
                    {currentQ.options.map((opt, idx) => {
                        const isSelected = selectedOption === opt;
                        const isCorrectAnswer = opt === currentQ.correct;
                        const showCorrect = selectedOption && isCorrectAnswer;
                        const showWrong = isSelected && !isCorrectAnswer;
                        
                        let btnClass = "border-gray-200 dark:border-slate-700 hover:border-bible-gold dark:hover:border-bible-gold hover:bg-amber-50 dark:hover:bg-slate-700";
                        
                        if (selectedOption) {
                            if (isCorrectAnswer) {
                                btnClass = "bg-green-500 border-green-600 text-white shadow-md ring-2 ring-green-200 dark:ring-green-900";
                            } else if (isSelected) {
                                btnClass = "bg-red-500 border-red-600 text-white shadow-md";
                            } else {
                                btnClass = "border-gray-100 dark:border-slate-800 opacity-40 cursor-not-allowed";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(opt)}
                                disabled={isPaused}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group flex items-center ${btnClass}`}
                            >
                                <span className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold mr-4 transition-colors ${selectedOption && (isCorrectAnswer || isSelected) ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-slate-900 group-hover:bg-bible-gold group-hover:text-white'}`}>
                                    {String.fromCharCode(65 + idx)}
                                </span>
                                <span className="text-lg flex-1">{opt}</span>
                                {showCorrect && <Check className="w-6 h-6 text-white ml-2 animate-bounce" />}
                                {showWrong && <X className="w-6 h-6 text-white ml-2" />}
                            </button>
                        );
                    })}
                </div>
            </div>
            
            {/* Reveal Reference Footer (Optional backup) */}
            <div className={`text-center transition-opacity duration-500 ${selectedOption ? 'opacity-100' : 'opacity-0'}`}>
                <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-slate-800 rounded-full text-xs font-mono text-gray-500 dark:text-gray-400">
                    Next question in 2s...
                </span>
            </div>
        </div>
    );
};


// --- Main App Component ---

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
      if (typeof window !== 'undefined') {
          return localStorage.getItem('theme') === 'dark' || 
          (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
      // Initialize DB and Seed Data on Mount
      seedInitialData();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
        <HashRouter>
            <Layout isDark={isDark} toggleTheme={() => setIsDark(!isDark)}>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/quiz/:bookName" element={<QuizGame />} />
                </Routes>
            </Layout>
        </HashRouter>
    </ThemeContext.Provider>
  );
};

export default App;