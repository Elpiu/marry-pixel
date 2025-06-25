import React from 'react';

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
    { date: "2019", title: "FIRST ENCOUNTER", desc: "Marina e Danilo si incontrano per la prima volta in una caffetteria di Milano", location: "Milano", photo: "☕", color: "from-pink-400 to-red-400" },
    { date: "2019", title: "PRIMO APPUNTAMENTO", desc: "La prima uscita ufficiale: cena romantica e lunghe chiacchierate", location: "Ristorante Milanese", photo: "🍝", color: "from-purple-400 to-pink-400" },
    { date: "2020", title: "RELAZIONE UFFICIALE", desc: "Diventano ufficialmente una coppia durante una passeggiata al parco", location: "Parco Sempione", photo: "💕", color: "from-blue-400 to-purple-400" },
    { date: "2021", title: "PRIMO VIAGGIO", desc: "La loro prima vacanza insieme nella città dell'amore", location: "Parigi, Francia", photo: "🗼", color: "from-green-400 to-blue-400" },
    { date: "2022", title: "CONVIVENZA", desc: "Decidono di fare il grande passo e andare a vivere insieme", location: "Milano", photo: "🏠", color: "from-yellow-400 to-green-400" },
    { date: "2023", title: "PROPOSTA MAGICA", desc: "Danilo sorprende Marina con una proposta di matrimonio al tramonto", location: "Lago di Como", photo: "💍", color: "from-orange-400 to-yellow-400" },
    { date: "2024", title: "IL GRANDE GIORNO", desc: "Finalmente sposi! Il giorno più bello della loro vita", location: "Milano", photo: "💒", color: "from-red-400 to-orange-400" }
  ];

  // Stabilizzazione del scroll progress per evitare oscillazioni
  const [stableProgress, setStableProgress] = React.useState(0);
  
  React.useEffect(() => {
    // Solo aumenta il progress, non diminuisce (evita oscillazioni)
    if (scrollProgress > stableProgress) {
      setStableProgress(scrollProgress);
    }
  }, [scrollProgress, stableProgress]);

  // Logica personalizzata per separare meglio gli ultimi eventi
  const getVisibleEvents = (progress: number) => {
    if (progress < 12) return 1;
    if (progress < 24) return 2;
    if (progress < 36) return 3;
    if (progress < 48) return 4;
    if (progress < 60) return 5;
    if (progress < 75) return 6; // Proposta più tardi
    if (progress < 90) return 7; // Matrimonio ancora più tardi
    return 7;
  };

  const visibleEvents = getVisibleEvents(stableProgress);

  return (
    <div className="bg-black relative font-mono" style={{ minHeight: '500vh' }}>
      {/* AURORA BOREALE REALE - Immagine di sfondo */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* LA TUA AURORA BOREALE PERSONALIZZATA - Riempimento completo schermo! */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/aurora-boreale.jpg')`,
            filter: 'brightness(1.2) contrast(1.3) saturate(1.2)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        ></div>
        
        {/* Overlay più leggero per mantenere visibilità aurora */}
        <div className="absolute inset-0 bg-black/25"></div>
        
        {/* Particelle di neve/stelle per movimento */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-white rounded-full animate-ping opacity-50" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-80 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-60" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-60 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-30" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Stelle dinamiche originali */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`
            }}
          />
        ))}
      </div>

      {/* CONTENUTO SCROLLABILE */}
      <div className="relative z-10">
        
        {/* Titolo */}
        <div className="px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            LA NOSTRA STORIA D'AMORE
          </h1>

          <div className="text-center mb-12">
            <div className="text-cyan-400 text-lg mb-4 animate-bounce">📜 SCORRI PER VIAGGIARE NEL TEMPO 📜</div>
            <div className="text-yellow-400">⬇️ Segui la linea del destino ⬇️</div>
          </div>
        </div>

        {/* TIMELINE VERTICALE FISSA E PULITA */}
        <div className="max-w-4xl mx-auto px-4 relative">
          
          {/* LINEA CENTRALE CONTINUA - ESTESA FINO ALLA FINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" style={{ height: '400vh' }}></div>

          {/* EVENTI CON POSIZIONI FISSE */}
          <div className="space-y-32">
            {timelineEvents.slice(0, visibleEvents).map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ease-out ${
                    index < visibleEvents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    paddingTop: '2rem',
                    transform: `scale(${index < visibleEvents ? 1 : 0.8})`
                  }}
                >
                  
                  {/* LAYOUT GRID FISSO */}
                  <div className="grid grid-cols-12 items-center gap-4">
                    
                    {/* CARD A SINISTRA (colonne 1-5) */}
                    <div className="col-span-5">
                      {isLeft && (
                        <div className="ml-auto max-w-sm">
                          <div className="bg-black/90 border-4 border-white rounded-lg p-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-lg font-black text-white">{event.title}</h3>
                              <span className="text-yellow-400 font-black text-sm bg-yellow-400/20 px-2 py-1 rounded">{event.date}</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{event.desc}</p>
                            <div className="flex items-center text-cyan-400 text-xs">
                              <span className="mr-1">📍</span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* ICONA CENTRALE (colonne 6-7) */}
                    <div className="col-span-2 flex justify-center relative z-20">
                      <div className={`w-20 h-20 bg-gradient-to-br ${event.color} rounded-full border-4 border-white flex items-center justify-center text-3xl shadow-2xl animate-pulse`}>
                        {event.photo}
                      </div>
                    </div>
                    
                    {/* CARD A DESTRA (colonne 8-12) */}
                    <div className="col-span-5">
                      {!isLeft && (
                        <div className="mr-auto max-w-sm">
                          <div className="bg-black/90 border-4 border-white rounded-lg p-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-lg font-black text-white">{event.title}</h3>
                              <span className="text-yellow-400 font-black text-sm bg-yellow-400/20 px-2 py-1 rounded">{event.date}</span>
                            </div>
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{event.desc}</p>
                            <div className="flex items-center text-cyan-400 text-xs">
                              <span className="mr-1">📍</span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COMPLETION BOX E ICONA FINALE - ESCONO SOLO QUANDO HAI VISTO TUTTI GLI EVENTI */}
          {visibleEvents === timelineEvents.length && (
            <div className="relative z-20" style={{ marginTop: '40vh' }}>
              
              {/* ICONA FINALE - Centrata sulla linea */}
              <div className="flex justify-center mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 rounded-full border-6 border-white flex items-center justify-center text-5xl shadow-2xl animate-bounce relative z-30">
                  🎉
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 blur-xl opacity-50 animate-pulse"></div>
                </div>
              </div>
              
              {/* BOX COMPLETION */}
              <div className="bg-black/90 border-4 border-pink-400 p-8 rounded-xl backdrop-blur-sm shadow-2xl">

                <h3 className="text-3xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 animate-pulse">
                  🎉 LOVE STORY COMPLETED! 🎉
                </h3>

                {/* Progress bar completata */}
                <div className="w-full bg-gray-800 border-4 border-gray-600 h-8 relative overflow-hidden rounded-lg mb-6">
                  <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-full flex items-center justify-center transition-all duration-3000 rounded-lg">
                    <div className="text-black font-black text-lg animate-bounce">
                      ❤️ EVERY MOMENT WAS WORTH IT! ❤️
                    </div>
                  </div>
                </div>

                {/* Statistiche completamento */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-pink-900/50 border-2 border-pink-400 p-4 rounded-lg text-center">
                    <div className="text-2xl font-black text-pink-400">7</div>
                    <div className="text-pink-100">MOMENTI EPICI</div>
                  </div>
                  <div className="bg-purple-900/50 border-2 border-purple-400 p-4 rounded-lg text-center">
                    <div className="text-2xl font-black text-purple-400">5</div>
                    <div className="text-purple-100">ANNI D'AMORE</div>
                  </div>
                  <div className="bg-blue-900/50 border-2 border-blue-400 p-4 rounded-lg text-center">
                    <div className="text-2xl font-black text-blue-400">∞</div>
                    <div className="text-blue-100">FELICITÀ</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-yellow-400 text-2xl animate-pulse mb-6 font-black">
                    💒 READY FOR THE FINAL BOSS: MATRIMONIO! 💒
                  </div>
                  <button
                    onClick={() => setCurrentScreen('event')}
                    className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 border-4 border-yellow-400 px-12 py-6 text-2xl text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer select-none animate-pulse font-black rounded-lg shadow-2xl"
                    type="button"
                  >
                    ⚔️ PROCEED TO BOSS LEVEL ⚔️
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SPAZIO FINALE */}
          <div style={{ height: '50vh' }}></div>
        </div>
      </div>

      {/* BACK BUTTON - APPARE SOLO ALLA FINE */}
      {stableProgress > 90 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t-4 border-blue-400">
          <div className="text-center py-4">
            <button
              onClick={() => setCurrentScreen('menu')}
              className="bg-blue-600 border-4 border-blue-400 px-8 py-3 text-xl text-blue-100 hover:bg-blue-500 cursor-pointer select-none transform hover:scale-105 transition-all duration-200"
              type="button"
            >
              🅱️ BACK TO LEVEL SELECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};