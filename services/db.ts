import { Question, UserProgress, Difficulty } from '../types';
import { STATIC_BIBLE_DATA } from '../data/questions';

const DB_NAME = 'BibleQuizDB';
const DB_VERSION = 3; // Bumped to 3 to force re-seeding of the new 66-book data
const STORE_QUESTIONS = 'questions';
const STORE_PROGRESS = 'progress';

export const initDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => reject('IndexedDB error');

    request.onsuccess = (event) => {
      resolve((event.target as IDBOpenDBRequest).result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      // 1. Questions Store
      if (db.objectStoreNames.contains(STORE_QUESTIONS)) {
        // If updating version, clear old store to ensure fresh data
        db.deleteObjectStore(STORE_QUESTIONS);
      }
      const qStore = db.createObjectStore(STORE_QUESTIONS, { keyPath: 'id' });
      qStore.createIndex('book', 'book', { unique: false });

      // 2. Progress Store
      if (!db.objectStoreNames.contains(STORE_PROGRESS)) {
        const pStore = db.createObjectStore(STORE_PROGRESS, { keyPath: ['bookName', 'difficulty'] });
      }
    };
  });
};

export const saveQuestions = async (questions: Question[]): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(STORE_QUESTIONS, 'readwrite');
  const store = tx.objectStore(STORE_QUESTIONS);
  
  questions.forEach(q => store.put(q));
  
  return new Promise((resolve) => {
    tx.oncomplete = () => resolve();
  });
};

export const getQuestionsByBook = async (bookName: string): Promise<Question[]> => {
  const db = await initDB();
  const tx = db.transaction(STORE_QUESTIONS, 'readonly');
  const store = tx.objectStore(STORE_QUESTIONS);
  const index = store.index('book');
  
  return new Promise((resolve) => {
    const request = index.getAll(bookName);
    request.onsuccess = () => {
      resolve(request.result || []);
    };
  });
};

export const saveProgress = async (progress: UserProgress): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(STORE_PROGRESS, 'readwrite');
  const store = tx.objectStore(STORE_PROGRESS);
  store.put(progress);
  return new Promise((resolve) => {
    tx.oncomplete = () => resolve();
  });
};

export const getProgress = async (bookName: string): Promise<UserProgress[]> => {
  const db = await initDB();
  const tx = db.transaction(STORE_PROGRESS, 'readonly');
  const store = tx.objectStore(STORE_PROGRESS);
  
  return new Promise((resolve) => {
    const items: UserProgress[] = [];
    const request = store.openCursor();
    request.onsuccess = (e) => {
      const cursor = (e.target as IDBRequest).result;
      if (cursor) {
        if (cursor.value.bookName === bookName) {
          items.push(cursor.value);
        }
        cursor.continue();
      } else {
        resolve(items);
      }
    };
  });
};

// Placeholder for Future Backend Sync
export const syncDataToCloud = async (): Promise<boolean> => {
    if (!navigator.onLine) return false;
    
    console.log("☁️ Initiating Background Sync...");
    
    try {
        const db = await initDB();
        
        // 1. Fetch data immediately (Transaction must be used synchronously)
        const allProgress: UserProgress[] = await new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_PROGRESS, 'readonly');
            const store = tx.objectStore(STORE_PROGRESS);
            const request = store.getAll();
            
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject("Failed to read progress from DB");
        });

        // 2. Simulate network latency OUTSIDE the transaction
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Here you would POST `allProgress` to your API
        console.log(`✅ Sync Complete: ${allProgress.length} records synced to cloud (Simulated).`);
        return true;

    } catch (error) {
        console.error("Sync Failed:", error);
        return false;
    }
};

// Seed initial data from static JSON
export const seedInitialData = async () => {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_QUESTIONS, 'readonly');
    const store = tx.objectStore(STORE_QUESTIONS);
    const countRequest = store.count();
    
    countRequest.onsuccess = async () => {
        // If DB is empty (which it will be after version bump), seed data
        if (countRequest.result === 0) {
            console.log("Seeding Database from Static JSON...");
      
            if (!STATIC_BIBLE_DATA || !Array.isArray(STATIC_BIBLE_DATA)) {
                console.error("Static data is missing or invalid.");
                return;
            }

            const allQuestions: Question[] = [];

            STATIC_BIBLE_DATA.forEach((bookData) => {
                if (bookData && bookData.book && Array.isArray(bookData.questions)) {
                bookData.questions.forEach((q, index) => {
                    if (q && q.question && q.options && q.correct) {
                    allQuestions.push({
                        id: `${bookData.book.toLowerCase()}-${index}`,
                        book: bookData.book,
                        question: q.question,
                        options: q.options,
                        correct: q.correct,
                        reference: q.reference || "",
                        difficulty: (q.difficulty as Difficulty) || "Moderate"
                    });
                    }
                });
                }
            });

            if (allQuestions.length > 0) {
                // Must start a new transaction for writing
                await saveQuestions(allQuestions);
                console.log(`Seeded ${allQuestions.length} questions successfully.`);
            } else {
                console.warn("No valid questions found to seed.");
            }
        } else {
            console.log("Database already seeded (v3).");
        }
    };
  } catch (error) {
    console.error("Error during data seeding:", error);
  }
};