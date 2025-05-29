import React from 'react';
import { useGame } from '../contexts/GameContext';
import MissionSelection from './MissionSelection';
import RobotBuilder from './RobotBuilder';
import RobotPassport from './RobotPassport';
import GameHeader from './GameHeader';

const GameScreen: React.FC = () => {
  const { currentStage } = useGame();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GameHeader />
      
      <div className="flex-grow">
        {currentStage === 'mission' && <MissionSelection />}
        {currentStage === 'building' && <RobotBuilder />}
        {currentStage === 'result' && <RobotPassport />}
      </div>
    </div>
  );
};

export default GameScreen;