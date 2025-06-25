import React from 'react';
import { StarBackground } from './common/StarBackground';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface EventProps {
  setGameScore: (callback: (prev: number) => number) => void;
  scrollProgress: number;
  setCurrentScreen: (screen: string) => void;
  stars: Star[];
}

export const Event: React.FC<EventProps> = ({ setGameScore, scrollProgress, setCurrentScreen, stars }) => {
  const addToGoogleCalendar = () => {
    const eventDetails = {
      title: 'BOSS BATTLE: Marina & Danilo Wedding Quest',
      startDate: '2024-09-15T15:00:00',
      endDate: '2024-09-15T23:00:00',
      location: 'Chiesa di San Francesco, Via Roma 123, Milano',
      description: 'FINAL BOSS FIGHT! Player 1 & Player 2 completano la loro ultimate quest.'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate.replace(/[-:]/g, '').replace('.000', '')}/${eventDetails.endDate.replace(/[-:]/g, '').replace('.000', '')}&location=${encodeURIComponent(eventDetails.location)}&details=${encodeURIComponent(eventDetails.description)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      <StarBackground stars={stars} color="bg-red-400" gradient="bg-gradient-to-br from-red-900 via-purple-900 to-black" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black text-red-400 mb-4 animate-pulse">FINAL BOSS</h1>
            <h2 className="text-3xl font-black text-yellow-400">MATRIMONIO QUEST</h2>
            <div className="text-xl text-red-300 mt-4">DIFFICULTY: ★★★★★ LEGENDARY</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black border-4 border-red-400 p-6">
                <h3 className="text-2xl font-black text-red-400 mb-4">🎯 MISSION BRIEFING</h3>
                <div className="text-red-100 space-y-2">
                  <div className="flex justify-between"><span>TARGET DATE:</span><span className="text-yellow-400">15.09.2024</span></div>
                  <div className="flex justify-between"><span>START TIME:</span><span className="text-yellow-400">15:00</span></div>
                  <div className="flex justify-between"><span>CEREMONY:</span><span className="text-yellow-400">15:00-16:30</span></div>
                  <div className="flex justify-between"><span>PARTY MODE:</span><span className="text-yellow-400">18:30-23:00</span></div>
                </div>
              </div>

              <div className="bg-black border-4 border-purple-400 p-6">
                <h3 className="text-2xl font-black text-purple-400 mb-4">📍 BATTLE LOCATIONS</h3>
                <div className="text-purple-100 space-y-3">
                  <div>
                    <div className="text-yellow-400">STAGE 1: CERIMONIA</div>
                    <div className="text-sm">Chiesa di San Francesco</div>
                    <div className="text-sm">Via Roma 123, Milano</div>
                  </div>
                  <div className="border-t border-purple-600 pt-3">
                    <div className="text-yellow-400">STAGE 2: BOSS FIGHT</div>
                    <div className="text-sm">Villa dei Sogni</div>
                    <div className="text-sm">Via delle Rose 45, Milano</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black border-4 border-yellow-400 p-6">
                <h3 className="text-2xl font-black text-yellow-400 mb-4">🎮 PLAYER REQUIREMENTS</h3>
                <div className="text-yellow-100 space-y-2">
                  <div>• DRESS CODE: ELEGANTE</div>
                  <div>• EQUIPMENT: SORRISO + ENERGIA</div>
                  <div>• RSVP DEADLINE: 01.08.2024</div>
                  <div>• PARKING: AVAILABLE</div>
                  <div className="text-green-400 mt-3">• MULTIPLAYER: RECOMMENDED!</div>
                </div>
              </div>

              <div className="bg-black border-4 border-green-400 p-6">
                <h3 className="text-2xl font-black text-green-400 mb-4">📞 SUPPORT TEAM</h3>
                <div className="text-green-100 space-y-2">
                  <div>PLAYER 1: +39 123 456 7890</div>
                  <div>PLAYER 2: +39 098 765 4321</div>
                  <div>EMAIL: marina.danilo@wedding.it</div>
                  <div>DISCORD: Wedding Squad #2024</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                addToGoogleCalendar();
                setGameScore(prev => prev + 2000);
              }}
              className="bg-gradient-to-r from-orange-600 to-red-600 border-4 border-yellow-400 px-12 py-6 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none"
              type="button"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-4xl">📅</span>
                <div>
                  <div className="text-2xl font-black text-yellow-400">ADD TO CALENDAR</div>
                  <div className="text-lg text-white">SAVE THE DATE!</div>
                </div>
                <span className="text-4xl">📅</span>
              </div>
            </button>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-black border-4 border-cyan-400 p-8">
            <h3 className="text-3xl font-black text-center mb-6 text-cyan-400">🗺️ BATTLE MAP OVERVIEW</h3>
            <div className="text-center text-cyan-100">
              <div className="mb-4 text-xl">LA QUEST FINALE TI PORTERÀ ATTRAVERSO:</div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-4xl mb-4">
                <div className="text-center">
                  <div>⛪</div>
                  <div className="text-sm text-yellow-400">STAGE 1</div>
                </div>
                <div className="text-green-400">➜</div>
                <div className="text-center">
                  <div>🏰</div>
                  <div className="text-sm text-yellow-400">STAGE 2</div>
                </div>
                <div className="text-green-400">➜</div>
                <div className="text-center">
                  <div>🎉</div>
                  <div className="text-sm text-yellow-400">VICTORY!</div>
                </div>
              </div>
              <div className="text-lg">CHIESA → VILLA → EPIC CELEBRATION!</div>
              <div className="text-yellow-400 mt-4 text-xl">PREPARATI PER L'AVVENTURA PIÙ EPICA DELL'ANNO! 🏆</div>
            </div>
          </div>

          <div className="text-center mt-8 pb-16">
            <button
              onClick={() => setCurrentScreen('menu')}
              className="bg-red-600 border-4 border-red-400 px-8 py-4 text-xl text-red-100 hover:bg-red-500 cursor-pointer select-none"
              type="button"
            >
              🅱️ BACK TO LEVEL SELECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};