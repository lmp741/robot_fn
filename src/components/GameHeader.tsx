import React from 'react';
import { Notebook as Robot, Clock } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

const GameHeader: React.FC = () => {
  const { 
    currentStage, 
    timeRemaining, 
    isTimerRunning,
    startTimer,
    pauseTimer,
    teamName,
    selectedMission
  } = useGame();
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-3">
          <Robot className="text-primary" size={32} />
          <div>
            <h1 className="text-xl font-bold text-foreground">Мастерская Роботов</h1>
            <p className="text-sm text-card-foreground">Команда: {teamName}</p>
          </div>
        </div>
        
        {currentStage !== 'mission' && (
          <div className="flex items-center">
            <div className="text-sm mr-4">
              <p className="font-semibold">Миссия:</p>
              <p>{selectedMission?.name || 'Не выбрана'}</p>
            </div>
          </div>
        )}
        
        {(currentStage === 'building' || currentStage === 'mission') && (
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
            <Clock size={20} className={isTimerRunning ? 'text-warning' : 'text-gray-500'} />
            <span className="font-mono text-lg font-semibold">{formatTime(timeRemaining)}</span>
            <button 
              onClick={isTimerRunning ? pauseTimer : startTimer}
              className="text-xs px-2 py-1 rounded bg-primary text-white"
            >
              {isTimerRunning ? 'Пауза' : 'Старт'}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default GameHeader;