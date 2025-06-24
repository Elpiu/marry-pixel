import React from 'react';
import { ProgressBar } from './common/ProgressBar';
import { StarBackground } from './common/StarBackground';


interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface OurStoryProps {
  gameScore: number;
  scrollProgress: number;
  setCurrentScreen: (screen: string) => void;
  stars: Star[];
}

export const OurStory: React.FC<OurStoryProps> = ({ gameScore, scrollProgress, setCurrentScreen, stars }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      <StarBackground stars={stars} gradient="bg-gradient-to-br from-green-900 via-teal-900 to-black" /> {/*  */}

      <ProgressBar progress={scrollProgress} fromColor="from-green-400" toColor="to-cyan-400" /> {/*  */}

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b-4 border-green-400 bg-black gap-2"> {/*  */}
          <div className="text-green-400 text-lg">CHARACTER SELECT</div> {/*  */}
          <div className="text-cyan-400 text-lg">PROGRESS: {Math.floor(scrollProgress)}%</div> {/*  */}
          <div className="text-yellow-400 text-lg">SCORE: {gameScore.toLocaleString()}</div> {/*  */}
        </div>

        <div className="flex-1 px-4 py-8">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-12 text-green-400">CHARACTER PROFILES</h1> {/*  */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Marina - SEMPRE VISIBILE */}
            <div className="bg-black border-4 border-cyan-400 p-8"> {/*  */}
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-cyan-400 mb-2">PLAYER 1</div> {/*  */}
                <div className="w-32 h-32 mx-auto border-4 border-pink-400 bg-pink-600 flex items-center justify-center text-6xl mb-4">📸</div> {/*  */}
                <div className="text-3xl font-black text-pink-400">MARINA</div> {/*  */}
                <div className="text-xl text-yellow-400">FOTOGRAFA NINJA</div> {/*  */}
              </div>

              <div className="space-y-4 text-cyan-100">
                <div className="bg-cyan-900 bg-opacity-50 border-2 border-cyan-600 p-4"> {/*  */}
                  <div className="text-cyan-400 font-black mb-2">STATS:</div> {/*  */}
                  <div>CREATIVITÀ: ████████░░</div> {/*  */}
                  <div>VELOCITÀ: █████████░</div> {/*  */}
                  <div>PRECISIONE: ████████░░</div> {/*  */}
                </div>

                <div className="bg-cyan-900 bg-opacity-50 border-2 border-cyan-600 p-4"> {/*  */}
                  <div className="text-cyan-400 font-black mb-2">SPECIAL MOVES:</div> {/*  */}
                  <div>• FOTO PERFETTA</div> {/*  */}
                  <div>• SUPER SPRINT</div> {/*  */}
                  <div>• MAGIC SHOT</div> {/*  */}
                </div>
              </div>
            </div>

            {/* Danilo - SEMPRE VISIBILE */}
            <div className="bg-black border-4 border-purple-400 p-8"> {/*  */}
              <div className="text-center mb-6"> {/*  */}
                <div className="text-4xl font-black text-purple-400 mb-2">PLAYER 2</div> {/*  */}
                <div className="w-32 h-32 mx-auto border-4 border-blue-400 bg-blue-600 flex items-center justify-center text-6xl mb-4">💻</div> {/*  */}
                <div className="text-3xl font-black text-blue-400">DANILO</div> {/*  */}
                <div className="text-xl text-yellow-400">TECH WIZARD</div> {/*  */}
              </div>

              <div className="space-y-4 text-purple-100">
                <div className="bg-purple-900 bg-opacity-50 border-2 border-purple-600 p-4"> {/*  */}
                  <div className="text-purple-400 font-black mb-2">STATS:</div> {/*  */}
                  <div>LOGICA: ██████████</div> {/*  */}
                  <div>PROBLEM SOLVING: █████████░</div> {/*  */}
                  <div>SUPPORTO: ████████░░</div> {/*  */}
                </div>

                <div className="bg-purple-900 bg-opacity-50 border-2 border-purple-600 p-4"> {/*  */}
                  <div className="text-purple-400 font-black mb-2">SPECIAL MOVES:</div> {/*  */}
                  <div>• DEBUG MASTER</div> {/*  */}
                  <div>• CODE STORM</div> {/*  */}
                  <div>• TECH SUPPORT</div> {/*  */}
                </div>
              </div>
            </div>
          </div>

          {/* Team Formation - SEMPRE VISIBILE */}
          <div className="mt-12 max-w-4xl mx-auto bg-black border-4 border-yellow-400 p-8"> {/*  */}
            <h3 className="text-3xl font-black text-center mb-6 text-yellow-400">TEAM FORMATION</h3> {/*  */}
            <div className="text-center text-yellow-100 text-lg"> {/*  */}
              <div className="mb-4 text-2xl">PLAYER 1 + PLAYER 2 = PERFECT COMBO!</div> {/*  */}
              <div className="mb-4">Quando MARINA e DANILO uniscono le forze, diventano imbattibili!</div> {/*  */}
              <div className="text-cyan-400 text-xl">INSIEME HANNO COMPLETATO LA QUEST PIÙ IMPORTANTE: L'AMORE! 💖</div> {/*  */}
            </div>
          </div>

          <div className="text-center mt-8 pb-16">
            <button
              onClick={() => setCurrentScreen('menu')} // 
              className="bg-green-600 border-4 border-green-400 px-8 py-4 text-xl text-green-100 hover:bg-green-500 cursor-pointer select-none" // 
              type="button"
            >
              🅱️ BACK TO LEVEL SELECT {/*  */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};