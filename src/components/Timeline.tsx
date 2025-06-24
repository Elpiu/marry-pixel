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

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
  location: string;
  photo: string;
  color: string;
}

interface TimelineProps {
  gameScore: number;
  scrollProgress: number;
  setCurrentScreen: (screen: string) => void;
  stars: Star[];
}

export const Timeline: React.FC<TimelineProps> = ({ gameScore, scrollProgress, setCurrentScreen, stars }) => {
  const timelineEvents: TimelineEvent[] = [
    { date: "2019", title: "FIRST ENCOUNTER", desc: "Marina e Danilo si incontrano per la prima volta in una caffetteria di Milano", location: "Milano", photo: "☕", color: "from-pink-400 to-red-400" }, // 
    { date: "2019", title: "PRIMO APPUNTAMENTO", desc: "La prima uscita ufficiale: cena romantica e lunghe chiacchierate", location: "Ristorante Milanese", photo: "🍝", color: "from-purple-400 to-pink-400" }, // 
    { date: "2020", title: "RELAZIONE UFFICIALE", desc: "Diventano ufficialmente una coppia durante una passeggiata al parco", location: "Parco Sempione", photo: "💕", color: "from-blue-400 to-purple-400" }, // 
    { date: "2021", title: "PRIMO VIAGGIO", desc: "La loro prima vacanza insieme nella città dell'amore", location: "Parigi, Francia", photo: "🗼", color: "from-green-400 to-blue-400" }, // 
    { date: "2022", title: "CONVIVENZA", desc: "Decidono di fare il grande passo e andare a vivere insieme", location: "Milano", photo: "🏠", color: "from-yellow-400 to-green-400" }, // 
    { date: "2023", title: "PROPOSTA MAGICA", desc: "Danilo sorprende Marina con una proposta di matrimonio al tramonto", location: "Lago di Como", photo: "💍", color: "from-orange-400 to-yellow-400" }, // 
    { date: "2024", title: "IL GRANDE GIORNO", desc: "Finalmente sposi! Il giorno più bello della loro vita", location: "Milano", photo: "💒", color: "from-red-400 to-orange-400" } // 
  ];

  const visibleEvents = Math.min(Math.floor(scrollProgress / 12) + 1, timelineEvents.length); // 

  return (
    <div className="bg-black relative overflow-hidden font-mono" style={{ minHeight: '400vh' }}>
      {/* Sfondo stellato */}
      <StarBackground stars={stars} gradient="bg-gradient-to-br from-indigo-900 via-purple-900 to-black" /> {/*  */}

      {/* Progress bar */}
      <ProgressBar progress={scrollProgress} fromColor="from-blue-400" toColor="to-pink-400" /> {/*  */}

      {/* Linea del tempo curvilinea - SVG Path */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-10" style={{ minHeight: '400vh' }}> {/*  */}
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%"> {/*  */}
            <stop offset="0%" stopColor="#60A5FA" /> {/*  */}
            <stop offset="50%" stopColor="#A78BFA" /> {/*  */}
            <stop offset="100%" stopColor="#F472B6" /> {/*  */}
          </linearGradient>
        </defs>
        <path
          d="M 200 100 Q 600 300 400 500 Q 200 700 600 900 Q 1000 1100 400 1300 Q 100 1500 700 1700 Q 1100 1900 300 2100 Q 50 2300 800 2500 Q 1200 2700 400 2900" // 
          stroke="url(#timelineGradient)" // 
          strokeWidth="6" // 
          fill="none" // 
          strokeDasharray="20,10" // 
          className="animate-pulse"
        />
      </svg>

      <div className="relative z-20">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b-4 border-blue-400 bg-black gap-2"> {/*  */}
          <div className="text-blue-400 text-lg">LOVE TIMELINE</div> {/*  */}
          <div className="text-cyan-400 text-lg">PROGRESS: {Math.floor(scrollProgress)}%</div> {/*  */}
          <div className="text-yellow-400 text-lg">SCORE: {gameScore.toLocaleString()}</div> {/*  */}
        </div>

        <div className="px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            LA NOSTRA STORIA D'AMORE {/*  */}
          </h1>

          <div className="text-center mb-12">
            <div className="text-cyan-400 text-lg mb-4 animate-bounce">📜 SCORRI PER VIAGGIARE NEL TEMPO 📜</div> {/*  */}
            <div className="text-yellow-400">⬇️ Segui la linea curva del destino ⬇️</div> {/*  */}
          </div>

          {/* Eventi posizionati lungo la curva */}
          <div className="relative max-w-6xl mx-auto"> {/*  */}
            {timelineEvents.slice(0, visibleEvents).map((event, index) => { // 
              const isEven = index % 2 === 0; // 
              const topPosition = 200 + (index * 350); // 
              const leftPosition = isEven ? '10%' : '60%'; // 
              return (
                <div
                  key={index} // 
                  className="absolute transform transition-all duration-1000 ease-out" // 
                  style={{
                    top: `${topPosition}px`, // 
                    left: leftPosition, // 
                    opacity: index < visibleEvents ? 1 : 0, // 
                    transform: `translateY(${index < visibleEvents ? 0 : 50}px) scale(${index < visibleEvents ? 1 : 0.8})` // 
                  }}
                >
                  {/* Foto/Icona principale */}
                  <div className={`w-24 h-24 bg-gradient-to-br ${event.color} rounded-full border-4 border-white flex items-center justify-center text-4xl shadow-2xl mb-4 mx-auto animate-pulse`}>
                    {event.photo} {/*  */}
                  </div>

                  {/* Card dell'evento */}
                  <div className={`bg-black bg-opacity-90 border-4 border-white rounded-lg p-6 max-w-xs ${isEven ? 'ml-0' : 'mr-0'} shadow-2xl backdrop-blur-sm`}> {/*  */}
                    <div className="flex justify-between items-center mb-3"> {/*  */}
                      <h3 className="text-lg font-black text-white">{event.title}</h3> {/*  */}
                      <span className="text-yellow-400 font-black text-sm bg-yellow-400 bg-opacity-20 px-2 py-1 rounded">{event.date}</span> {/*  */}
                    </div>

                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{event.desc}</p> {/*  */}

                    <div className="flex items-center text-cyan-400 text-xs"> {/*  */}
                      <span className="mr-1">📍</span> {/*  */}
                      <span>{event.location}</span> {/*  */}
                    </div>

                    {/* Linea di connessione alla timeline */}
                    <div className={`absolute top-12 ${isEven ? 'right-0' : 'left-0'} w-8 h-0.5 bg-gradient-to-r ${event.color} transform ${isEven ? 'translate-x-full' : '-translate-x-full'}`}></div> {/*  */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Completion indicator */}
          {scrollProgress > 80 && ( // 
            <div className="mt-32 max-w-4xl mx-auto bg-black bg-opacity-90 border-4 border-pink-400 p-8 rounded-lg backdrop-blur-sm animate-pulse"> {/*  */}
              <h3 className="text-3xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
                🎉 LOVE STORY COMPLETED! 🎉 {/*  */}
              </h3>

              <div className="w-full bg-gray-800 border-4 border-gray-600 h-6 relative overflow-hidden rounded"> {/*  */}
                <div
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-full flex items-center justify-center transition-all duration-2000 rounded" // 
                  style={{ width: `${Math.min(scrollProgress, 100)}%` }} // 
                >
                  {scrollProgress > 90 && ( // 
                    <div className="text-black font-black text-sm animate-bounce">
                      ❤️ EVERY MOMENT WAS WORTH IT! ❤️ {/*  */}
                    </div>
                  )}
                </div>
              </div>

              {scrollProgress > 90 && ( // 
                <div className="text-center mt-4">
                  <div className="text-yellow-400 text-xl animate-pulse">
                    💒 READY FOR THE FINAL BOSS: MATRIMONIO! 💒 {/*  */}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="text-center mt-24 pb-16">
            <button
              onClick={() => setCurrentScreen('menu')} // 
              className="bg-blue-600 border-4 border-blue-400 px-8 py-4 text-xl text-blue-100 hover:bg-blue-500 cursor-pointer select-none transform hover:scale-105 transition-all duration-200" // 
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