import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface InterstitialProps {
  onClose: () => void;
  trigger: boolean;
}

const Interstitial: React.FC<InterstitialProps> = ({ onClose, trigger }) => {
  const [show, setShow] = useState(false);
  const [canClose, setCanClose] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (trigger) {
      setShow(true);
      setCanClose(false);
      setCountdown(3);
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setCanClose(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [trigger]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-lg shadow-2xl overflow-hidden relative min-h-[400px] flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b dark:border-slate-700">
            <span className="text-xs font-bold text-gray-400">SPONSORED</span>
            {canClose ? (
                <button onClick={() => { setShow(false); onClose(); }} className="text-slate-500 hover:text-red-500">
                    <X className="w-6 h-6" />
                </button>
            ) : (
                <span className="text-xs text-gray-400">Close in {countdown}s</span>
            )}
        </div>
        
        {/* Ad Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-indigo-500 to-purple-600">
            <h2 className="text-white text-2xl font-bold mb-4">Bible Study Tools Premium</h2>
            <p className="text-white/80 mb-6">Unlock deep commentaries, Greek/Hebrew lexicons, and offline maps.</p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition">
                Install Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Interstitial;