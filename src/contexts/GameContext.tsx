import React, { createContext, useContext, useState, useEffect } from 'react';
import { parts } from '../data/parts';
import { Mission, RobotPart, Robot, GameStage } from '../types';

interface GameContextType {
  currentStage: GameStage;
  setCurrentStage: (stage: GameStage) => void;
  selectedMission: Mission | null;
  selectMission: (mission: Mission) => void;
  availableParts: RobotPart[];
  selectedParts: Record<string, RobotPart | null>;
  selectPart: (category: string, part: RobotPart) => void;
  timeRemaining: number;
  isTimerRunning: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  robot: Robot | null;
  buildRobot: () => void;
  score: number;
  calculateScore: () => number;
  teamName: string;
  setTeamName: (name: string) => void;
  resetGame: () => void;
}

const initialSelectedParts: Record<string, RobotPart | null> = {
  head: null,
  eyes: null,
  arms: null,
  body: null,
  legs: null,
  color: null
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStage, setCurrentStage] = useState<GameStage>('start');
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [availableParts, setAvailableParts] = useState<RobotPart[]>([]);
  const [selectedParts, setSelectedParts] = useState<Record<string, RobotPart | null>>(initialSelectedParts);
  const [timeRemaining, setTimeRemaining] = useState<number>(15 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [robot, setRobot] = useState<Robot | null>(null);
  const [score, setScore] = useState<number>(0);
  const [teamName, setTeamName] = useState<string>('');

  useEffect(() => {
    setAvailableParts(parts.filter(part => part.category !== 'attachment'));
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerRunning, timeRemaining]);

  const startTimer = () => setIsTimerRunning(true);
  const pauseTimer = () => setIsTimerRunning(false);
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimeRemaining(15 * 60);
  };

  const resetGame = () => {
    setCurrentStage('start');
    setSelectedMission(null);
    setSelectedParts(initialSelectedParts);
    resetTimer();
    setRobot(null);
    setScore(0);
    setTeamName('');
  };

  const selectMission = (mission: Mission) => {
    setSelectedMission(mission);
  };

  const selectPart = (category: string, part: RobotPart) => {
    setSelectedParts(prev => ({
      ...prev,
      [category]: part
    }));
  };

  const buildRobot = () => {
    if (!selectedMission) return;
    
    const newRobot: Robot = {
      mission: selectedMission,
      parts: { ...selectedParts },
      score: calculateScore(),
      teamName
    };
    
    setRobot(newRobot);
    setScore(newRobot.score);
  };

  const calculateScore = () => {
    if (!selectedMission) return 0;
    
    let baseScore = 0;
    let bonusScore = 0;
    
    const allPartsSelected = Object.values(selectedParts).every(part => part !== null);
    if (allPartsSelected) baseScore += 50;
    
    Object.entries(selectedParts).forEach(([_, part]) => {
      if (part && part.compatibleMissions.includes(selectedMission.id)) {
        baseScore += 10;
        if (selectedMission.optimalParts.includes(part.id)) {
          bonusScore += 15;
        }
      }
    });
    
    const timeBonus = Math.floor(timeRemaining / 60) * 5;
    
    return baseScore + bonusScore + timeBonus;
  };

  return (
    <GameContext.Provider
      value={{
        currentStage,
        setCurrentStage,
        selectedMission,
        selectMission,
        availableParts,
        selectedParts,
        selectPart,
        timeRemaining,
        isTimerRunning,
        startTimer,
        pauseTimer,
        resetTimer,
        robot,
        buildRobot,
        score,
        calculateScore,
        teamName,
        setTeamName,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};