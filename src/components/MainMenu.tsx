import React from 'react';
import { StarBackground } from './common/StarBackground';


interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface MainMenuProps {
  gameScore: number;
  unlockedLevels: number[];
  isLevelUnlocked: (level: number) => boolean;
  handleLevelClick: (level: number, screen: string) => void;
  setCurrentScreen: (screen: string) => void;
  stars: Star[];
}

export const MainMenu: React.FC<MainMenuProps> = ({
  gameScore,
  unlockedLevels,
  isLevelUnlocked,
  handleLevelClick,
  setCurrentScreen,
  stars
}) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      <StarBackground stars={stars} gradient="bg-gradient-to-br from-purple-900 via-blue-900 to-black" /> {/*  */}

      {/* La progress bar è passata da App.tsx, quindi non la includiamo qui direttamente,
          ma ogni schermata avrà il proprio Header e Footer con dati specifici */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b-4 border-yellow-400 bg-black gap-2"> {/*  */}
          <div className="text-yellow-400 text-lg">SELECT STAGE</div> {/*  */}
          <div className="text-cyan-400 text-lg">LIVES: ♥♥♥</div> {/*  */}
          <div className="text-red-400 text-lg">SCORE: {gameScore.toLocaleString()}</div> {/*  */}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl sm:text-6xl font-black text-yellow-400 mb-8 animate-pulse text-center">SELECT LEVEL</h1> {/*  */}

          <div className="mb-8 text-center">
            <div className="text-xl text-cyan-400 mb-2">LIVELLI SBLOCCATI: {unlockedLevels.length}/3</div> {/*  */}
            <div className="flex justify-center space-x-2">
              {[1, 2, 3].map(level => ( // 
                <div
                  key={level} // 
                  className={`w-4 h-4 border-2 ${isLevelUnlocked(level) ? 'bg-green-400 border-green-400' : 'bg-gray-600 border-gray-600'}`} // 
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            <button
              onClick={() => handleLevelClick(1, 'story')} // 
              disabled={!isLevelUnlocked(1)} // 
              className={`border-4 border-white p-8 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none ${
                isLevelUnlocked(1)
                  ? 'bg-green-600' // 
                  : 'bg-gray-600 cursor-not-allowed opacity-50' // 
              }`}
              type="button"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{isLevelUnlocked(1) ? '📚' : '🔒'}</div> {/*  */}
                <div className="text-2xl font-black text-white mb-2">LEVEL 1</div> {/*  */}
                <div className="text-xl text-green-100">CHARACTER PROFILES</div> {/*  */}
                <div className="text-sm text-yellow-400 mt-2">
                  {isLevelUnlocked(1) ? '★★★☆☆' : 'BLOCCATO'} {/*  */}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLevelClick(2, 'timeline')} // 
              disabled={!isLevelUnlocked(2)} // 
              className={`border-4 border-white p-8 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none ${
                isLevelUnlocked(2)
                  ? 'bg-blue-600' // 
                  : 'bg-gray-600 cursor-not-allowed opacity-50' // 
              }`}
              type="button"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{isLevelUnlocked(2) ? '🗺️' : '🔒'}</div> {/*  */}
                <div className="text-2xl font-black text-white mb-2">LEVEL 2</div> {/*  */}
                <div className="text-xl text-blue-100">QUEST TIMELINE</div> {/*  */}
                <div className="text-sm text-yellow-400 mt-2">
                  {isLevelUnlocked(2) ? '★★★★☆' : 'COMPLETA LEVEL 1'} {/*  */}
                </div>
              </div>
            </button>

            <button
              onClick={() => handleLevelClick(3, 'event')} // 
              disabled={!isLevelUnlocked(3)} // 
              className={`border-4 border-white p-8 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none ${
                isLevelUnlocked(3)
                  ? 'bg-red-600' // 
                  : 'bg-gray-600 cursor-not-allowed opacity-50' // 
              }`}
              type="button"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{isLevelUnlocked(3) ? '💒' : '🔒'}</div> {/*  */}
                <div className="text-2xl font-black text-white mb-2">BOSS LEVEL</div> {/*  */}
                <div className="text-xl text-red-100">FINAL WEDDING</div> {/*  */}
                <div className="text-sm text-yellow-400 mt-2">
                  {isLevelUnlocked(3) ? '★★★★★' : 'COMPLETA LEVEL 2'} {/*  */}
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={() => setCurrentScreen('home')} // 
            className="mt-12 bg-gray-700 border-4 border-gray-400 px-8 py-4 text-xl text-gray-100 hover:bg-gray-600 cursor-pointer select-none" // 
            type="button"
          >
            🅱️ BACK TO TITLE {/*  */}
          </button>
        </div>
      </div>
    </div>
  );
};