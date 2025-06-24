import React from 'react';
import { Footer } from './common/Footer';
import { ProgressBar } from './common/ProgressBar';
import { StarBackground } from './common/StarBackground';


interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface HomePageProps {
  setCurrentScreen: (screen: string) => void;
  setGameScore: (callback: (prev: number) => number) => void;
  stars: Star[];
  scrollProgress: number;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentScreen, setGameScore, stars, scrollProgress }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      <StarBackground stars={stars} gradient="bg-gradient-to-b from-purple-900 via-blue-900 to-black" /> {/*  */}

      <ProgressBar progress={scrollProgress} fromColor="from-cyan-400" toColor="to-yellow-400" /> {/*  */}

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b-4 border-yellow-400 bg-black gap-2"> {/*  */}
          <div className="text-yellow-400 text-sm sm:text-lg">HIGH SCORE: {0}</div> {/* Utilizzeremo il gameScore direttamente da App.tsx o lo passeremo */}
          <div className="text-cyan-400 text-sm sm:text-lg">CREDITS: ∞</div> {/*  */}
          <div className="text-red-400 text-sm sm:text-lg">PLAYER: READY</div> {/*  */}
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="mb-8 text-center">
            <div className="text-4xl sm:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse mb-4">
              LOVE {/*  */}
            </div>
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
              QUEST {/*  */}
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-black border-4 border-yellow-400 p-4 sm:p-8 relative"> {/*  */}
              <div className="flex items-center justify-center space-x-8 relative z-10"> {/*  */}
                <div className="text-center">
                  <div className="text-3xl text-yellow-400 mb-2">P1</div> {/*  */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-400 border-2 border-black mb-2 relative mx-auto"> {/*  */}
                    <div className="absolute top-2 left-3 w-2 h-2 bg-black rounded-full"></div> {/*  */}
                    <div className="absolute top-2 right-3 w-2 h-2 bg-black rounded-full"></div> {/*  */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-500"></div> {/*  */}
                  </div>
                  <div className="text-pink-400 text-sm">MARINA</div> {/*  */}
                </div>

                <div className="text-4xl sm:text-6xl animate-bounce">💖</div> {/*  */}

                <div className="text-center">
                  <div className="text-3xl text-cyan-400 mb-2">P2</div> {/*  */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400 border-2 border-black mb-2 relative mx-auto"> {/*  */}
                    <div className="absolute top-2 left-3 w-2 h-2 bg-black rounded-full"></div> {/*  */}
                    <div className="absolute top-2 right-3 w-2 h-2 bg-black rounded-full"></div> {/*  */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-500"></div> {/*  */}
                    <div className="absolute top-1 left-2 right-2 h-1 bg-black"></div> {/*  */}
                  </div>
                  <div className="text-cyan-400 text-sm">DANILO</div> {/*  */}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12 p-6 bg-black border-4 border-green-400"> {/*  */}
            <div className="text-green-400 text-center text-lg">
              <div className="text-yellow-400 mb-4 text-xl">*** PRESS START TO BEGIN ***</div> {/*  */}
              <p className="mb-4">INSERISCI MONETA PER INIZIARE L'AVVENTURA PIÙ EPICA</p> {/*  */}
              <p className="mb-4">DUE GIOCATORI. UNA MISSIONE. AMORE INFINITO.</p> {/*  */}
              <p className="text-cyan-400">PREMI START PER CONTINUARE...</p> {/*  */}
            </div>
          </div>

          <button
            onClick={() => {
              setGameScore(prev => prev + 1000); // 
              setCurrentScreen('menu'); // 
            }}
            className="bg-red-600 border-4 border-yellow-400 px-12 py-6 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none" // 
            type="button"
          >
            <div className="text-3xl font-black text-yellow-400">INSERT COIN</div> {/*  */}
            <div className="text-xl text-white text-center mt-2">PRESS START</div> {/*  */}
          </button>

          <div className="mt-8 text-center text-yellow-400 text-sm"> {/*  */}
            <div className="mb-2">⬅️ ➡️ ⬆️ ⬇️ MOVE</div> {/*  */}
            <div>🅰️ SELECT 🅱️ BACK</div> {/*  */}
          </div>
        </div>

        <Footer copyrightText="© 2024 MARINA & DANILO PRODUCTIONS" textColor="text-yellow-400" /> {/*  */}
      </div>
    </div>
  );
};