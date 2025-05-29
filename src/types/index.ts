export type GameStage = 'start' | 'mission' | 'building' | 'result';

export interface Mission {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  optimalParts: string[];
  imageUrl: string;
}

export interface RobotPart {
  id: string;
  name: string;
  category: string; // head, eyes, arms, body, legs, attachment, color
  description: string;
  function: string;
  compatibleMissions: string[];
  imageUrl: string;
}

export interface Robot {
  mission: Mission;
  parts: Record<string, RobotPart | null>;
  score: number;
  teamName: string;
}