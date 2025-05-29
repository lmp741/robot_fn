import { useState } from 'react';
import { GameProvider } from './contexts/GameContext';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  
  return (
    <div className="app">
      <GameProvider>
        {!gameStarted ? (
          <StartScreen onStart={() => setGameStarted(true)} />
        ) : (
          <GameScreen />
        )}
      </GameProvider>
    </div>
  );
}

export default App;