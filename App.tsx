import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import { BOOKS_OF_BIBLE, Question, Difficulty, QuizState } from './types';
import { seedInitialData, getQuestionsByBook, getProgress, saveProgress, syncDataToCloud } from './services/db';
import { ChevronRight, Star, ArrowLeft, Info, Check, X, Clock, Wifi, WifiOff, CloudUpload } from 'lucide-react';
import AdBanner from './components/AdBanner';
import Interstitial from './components/Interstitial';

// --- Global Context for Theme ---
const ThemeContext = React.createContext({ isDark: false, toggleTheme: () => {} });

// --- Components ---

// Toast Component for Sync Status
const SyncToast: React.FC<{ status: 'online' | 'offline' | 'syncing' | null }> = ({ status }) => {
    if (!status) return null;

    let bg = "bg-slate-800";
    let text = "text-white";
    let icon = <CloudUpload className="w-4 h-4 animate-bounce" />;
    let message = "Syncing progress...";

    if (status === 'online') {
        bg = "bg-green-600";
        icon = <Wifi className="w-4 h-4" />;
        message = "Back Online - Synced";
    } else if (status === 'offline') {
        bg = "bg-gray-500";
        icon = <WifiOff className="w-4 h-4" />;
        message = "Offline Mode - Progress Saved Locally";
    }

    return (
        <div className={`fixed bottom-20 left-1/2 transform -translate-x-1/2 z-[60] px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold ${bg} ${text} transition-all duration-500 animate-in slide-in-from-bottom-5 fade-in`}>
            {icon}
            <span>{message}</span>
        </div>
    );
};

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
      {/* Top Banner Removed as requested */}
      
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
            // Fallback for demo if precise difficulty not found, just take any to avoid crash
             const fallback = questions.slice(0, 50);
             if (fallback.length === 0) {
                alert(`No questions available for ${bookName}. Please populate data.`);
                return;
             }
             setGameState({
                questions: fallback,
                currentQuestionIndex: 0,
                score: 0,
                answers: [],
                status: 'playing',
                timeLeft: 30
            });
            setSelectedDifficulty(diff);
            setSelectedOption(null);
            setIsPaused(false);
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
                setShowAd(true);
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
        
        // Trigger a background sync after saving
        syncDataToCloud();
    };

    const getKnowledgeLevel = (score: number, total: number) => {
        const p = (score/total)*100;
        if (p === 100) return 'Bible Expert';
        if (p >= 80) return 'Strong Disciple';
        if (p >= 50) return 'Intermediate';
        return 'Beginner';
    };

    // --- RENDER STATES ---

    // 1. Difficulty Selection - MODAL DIALOG
    if (gameState.status === 'idle') {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                {/* Modal Container */}
                <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 border border-gray-100 dark:border-slate-700">
                    
                    {/* Header */}
                    <div className="relative bg-slate-50 dark:bg-slate-900 p-6 text-center border-b border-gray-100 dark:border-slate-700">
                        <button 
                            onClick={() => navigate('/')} 
                            className="absolute left-4 top-4 p-2 flex items-center gap-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            aria-label="Back"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h2 className="text-2xl font-serif font-bold text-slate-800 dark:text-slate-100">{bookName}</h2>
                        <span className="inline-block mt-2 px-3 py-1 bg-bible-gold/10 text-bible-gold text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Quiz Setup
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-8 space-y-4">
                                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10"></div>
                                <p className="text-sm text-gray-500">Loading ancient manuscripts...</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    Choose your challenge level to begin.
                                </p>
                                <div className="space-y-3">
                                    {(['Moderate', 'Hard', 'Extreme'] as Difficulty[]).map((d) => {
                                        const count = questions.filter(q => q.difficulty === d).length;
                                        // Fallback count logic if strict filtering fails in UI but works in startGame
                                        const displayCount = d === 'Extreme' 
                                            ? questions.filter(q => q.difficulty === 'Hard' || q.difficulty === 'Extreme').length 
                                            : count;

                                        return (
                                            <button 
                                                key={d}
                                                onClick={() => startGame(d)}
                                                className="w-full group relative flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-bible-gold dark:hover:border-bible-gold hover:bg-amber-50 dark:hover:bg-slate-700/50 transition-all duration-200"
                                            >
                                                <div className="flex flex-col items-start">
                                                    <span className="font-bold text-slate-800 dark:text-slate-200">{d}</span>
                                                    <span className="text-xs text-gray-500">{displayCount > 0 ? `${displayCount} Questions` : 'Limited Questions'}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-bible-gold transition-colors" />
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 dark:bg-slate-900/50 p-4 border-t border-gray-100 dark:border-slate-700">
                         <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                            <Info className="w-3 h-3" />
                            <span>Scores are saved locally</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // 2. Result Screen
    if (gameState.status === 'completed') {
        const percentage = Math.round((gameState.score / gameState.questions.length) * 100);
        return (
            <div className="max-w-xl mx-auto py-10 text-center space-y-8 relative">
                <Interstitial trigger={showAd} onClose={() => setShowAd(false)} />
                
                {/* Back Button for Result Screen */}
                <div className="absolute top-0 left-0">
                    <button 
                        onClick={() => navigate('/')} 
                        className="flex items-center gap-1 p-2 text-gray-500 hover:text-bible-gold transition-colors"
                        aria-label="Back to Home"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="relative inline-block mt-8">
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
            
            {/* Top Bar with Back Button */}
            <div className="flex items-center justify-between mb-2">
                 <button 
                    onClick={() => navigate('/')} 
                    className="flex items-center text-gray-500 dark:text-gray-400 hover:text-bible-gold dark:hover:text-bible-gold transition-colors"
                 >
                    <ArrowLeft className="w-5 h-5 mr-1" />
                    <span className="text-sm font-bold">Back</span>
                 </button>
                 <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{bookName}</span>
                 <div className="w-10"></div> {/* Spacer to balance layout */}
            </div>

            <div className="flex justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Question {gameState.currentQuestionIndex + 1} / {gameState.questions.length}</span>
                <div className={`flex items-center gap-1.5 transition-all duration-300 ${gameState.timeLeft <= 10 ? 'text-red-600 dark:text-red-400 font-bold scale-110' : 'text-gray-500 dark:text-gray-400'}`}>
                    <Clock className={`w-4 h-4 ${gameState.timeLeft <= 10 ? 'animate-pulse' : ''}`} />
                    <span className="min-w-[1.5rem] text-center">{gameState.timeLeft}s</span>
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

                        // New logic: Show Green if it IS the correct answer (regardless of what user picked)
                        // Show Red only if User picked it AND it is wrong.
                        const showGreen = selectedOption && isCorrectAnswer;
                        const showRed = selectedOption && isSelected && !isCorrectAnswer;
                        
                        let btnClass = "border-gray-200 dark:border-slate-700 hover:border-bible-gold dark:hover:border-bible-gold hover:bg-amber-50 dark:hover:bg-slate-700";
                        
                        if (selectedOption) {
                            if (showGreen) {
                                btnClass = "bg-green-500 border-green-600 text-white shadow-md ring-2 ring-green-200 dark:ring-green-900";
                            } else if (showRed) {
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
                                {showGreen && <Check className="w-6 h-6 text-white ml-2 animate-bounce" />}
                                {showRed && <X className="w-6 h-6 text-white ml-2" />}
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
            
            <AdBanner position="bottom" />
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

  const [syncStatus, setSyncStatus] = useState<'online' | 'offline' | 'syncing' | null>(null);

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

      // Network Listeners
      const handleOnline = () => {
          setSyncStatus('online');
          setTimeout(() => {
              setSyncStatus('syncing');
              syncDataToCloud().then(() => {
                 setTimeout(() => setSyncStatus(null), 2000);
              });
          }, 1500);
      };

      const handleOffline = () => {
          setSyncStatus('offline');
          setTimeout(() => setSyncStatus(null), 3000);
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      // Periodic check every 2 minutes
      const interval = setInterval(() => {
          if (navigator.onLine) {
              setSyncStatus('syncing');
              syncDataToCloud().then(() => {
                 setTimeout(() => setSyncStatus(null), 2000);
              });
          }
      }, 120000);

      return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
          clearInterval(interval);
      };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
        <HashRouter>
            <Layout isDark={isDark} toggleTheme={() => setIsDark(!isDark)}>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/quiz/:bookName" element={<QuizGame />} />
                </Routes>
                <SyncToast status={syncStatus} />
            </Layout>
        </HashRouter>
    </ThemeContext.Provider>
  );
};

export default App;