import React, { useState, useEffect } from 'react';

import { ProgressBar } from './components/common/ProgressBar';
import { StarBackground } from './components/common/StarBackground';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './components/HomePage';
import { MainMenu } from './components/MainMenu';
import { OurStory } from './components/OurStory';
import { Timeline } from './components/Timeline';
import { Event } from './components/Event';


interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

const WeddingGame: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('home'); // 
  const [stars, setStars] = useState<Star[]>([]); // 
  const [gameScore, setGameScore] = useState<number>(0); // 
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]); // 
  const [scrollProgress, setScrollProgress] = useState<number>(0); // 

  // Inizializzazione delle stelle
  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 50; i++) { // 
      newStars.push({
        id: i,
        x: Math.random() * 100, // 
        y: Math.random() * 100, // 
        size: Math.random() * 3 + 1, // 
        speed: Math.random() * 1 + 0.3 // 
      });
    }
    setStars(newStars); // 
  }, []); // 

  // Animazione delle stelle
  useEffect(() => {
    const interval = setInterval(() => { // 
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          y: star.y > 100 ? -5 : star.y + star.speed // 
        }))
      );
    }, 100); // 
    return () => clearInterval(interval); // 
  }, []);

  // Gestione dello scroll per la progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset; // 
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // 
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0; // 
      setScrollProgress(Math.min(scrollPercent, 100)); // 
    };

    window.addEventListener('scroll', handleScroll); // 
    handleScroll(); // 
    return () => window.removeEventListener('scroll', handleScroll); // 
  }, [currentScreen]); // 

  // Resetta lo scroll e il progresso quando la schermata cambia
  useEffect(() => {
    window.scrollTo(0, 0); // 
    setScrollProgress(0); // 
  }, [currentScreen]); // 

  const unlockLevel = (level: number) => {
    if (!unlockedLevels.includes(level)) { // 
      setUnlockedLevels(prev => [...prev, level].sort((a, b) => a - b)); // 
      setGameScore(prev => prev + 1000); // 
    }
  };

  const isLevelUnlocked = (level: number): boolean => {
    return unlockedLevels.includes(level); // 
  };

  const handleLevelClick = (level: number, screen: string) => {
    if (isLevelUnlocked(level)) { // 
      setGameScore(prev => prev + 500); // 
      setCurrentScreen(screen); // 

      // Sblocco immediato del livello successivo
      if (level === 1 && !isLevelUnlocked(2)) { // 
        unlockLevel(2); // 
      } else if (level === 2 && !isLevelUnlocked(3)) { // 
        unlockLevel(3); // 
      }
    }
  };

  const renderCurrentScreen = () => {
    switch(currentScreen) {
      case 'home':
        return <HomePage setCurrentScreen={setCurrentScreen} setGameScore={setGameScore} stars={stars} scrollProgress={scrollProgress} />; // 
      case 'menu':
        return <MainMenu
          gameScore={gameScore}
          unlockedLevels={unlockedLevels}
          isLevelUnlocked={isLevelUnlocked}
          handleLevelClick={handleLevelClick}
          setCurrentScreen={setCurrentScreen}
          stars={stars}
        />; // 
      case 'story':
        return <OurStory gameScore={gameScore} scrollProgress={scrollProgress} setCurrentScreen={setCurrentScreen} stars={stars} />; // 
      case 'timeline':
        return <Timeline gameScore={gameScore} scrollProgress={scrollProgress} setCurrentScreen={setCurrentScreen} stars={stars} />; // 
      case 'event':
        return <Event setGameScore={setGameScore} scrollProgress={scrollProgress} setCurrentScreen={setCurrentScreen} stars={stars} />; // 
      default:
        return <HomePage setCurrentScreen={setCurrentScreen} setGameScore={setGameScore} stars={stars} scrollProgress={scrollProgress} />; // 
    }
  };

  return (
    <div className="wedding-game-app">
      {/* Questi componenti possono essere passati alle schermate, o gestiti qui a livello globale se persistenti */}
      {/* Attualmente, ogni schermata ha il suo header/footer con dati specifici,
          quindi li lasciamo lì e passiamo i dati necessari */}
      {renderCurrentScreen()}
    </div>
  );
};

export default WeddingGame;