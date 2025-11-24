import React, { useEffect, useState } from 'react';

interface AdBannerProps {
  position: 'top' | 'bottom';
}

const AdBanner: React.FC<AdBannerProps> = ({ position }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`w-full h-16 bg-gray-200 dark:bg-gray-800 flex items-center justify-center border-y border-gray-300 dark:border-gray-700 relative overflow-hidden ${position === 'bottom' ? 'mt-4' : 'mb-4'}`}>
      <div className="absolute top-1 right-2 text-xs text-gray-500 cursor-pointer border border-gray-400 px-1 rounded hover:bg-gray-300" onClick={() => setVisible(false)}>X</div>
      <div className="text-center">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Advertisement</p>
        <p className="text-sm font-serif text-bible-gold">Support our ministry &middot; Go Premium</p>
      </div>
    </div>
  );
};

export default AdBanner;