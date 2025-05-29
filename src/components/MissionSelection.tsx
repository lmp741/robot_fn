import React from 'react';
import { missions } from '../data/missions';
import { useGame } from '../contexts/GameContext';
import { ChevronRight } from 'lucide-react';

const MissionSelection: React.FC = () => {
  const { selectMission, setCurrentStage, startTimer } = useGame();

  const handleMissionSelect = (missionId: string) => {
    const mission = missions.find((m) => m.id === missionId);
    if (mission) {
      selectMission(mission);
      setCurrentStage('building');
      startTimer();
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Выберите Вашего Робота</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Выберите тип робота, которого вы хотите построить. У каждого робота
          разные требования, и для его конструирования потребуются различные
          детали!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="card hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleMissionSelect(mission.id)}
          >
            <div className="aspect-video ">
              <img
                src={mission.imageUrl}
                alt={mission.name}
                className="w-full h-150% object-contain rounded-t-lg mb-4"
              />
            </div>

            <h3 className="text-xl font-bold mt-2">{mission.name}</h3>
            <p className="text-card-foreground mb-4">{mission.description}</p>

            <div className="mt-auto">
              <h4 className="font-semibold mb-2">Требования:</h4>
              <ul className="text-sm space-y-1 mb-4">
                {mission.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <button className="secondary-button w-full flex items-center justify-center">
                <span>Выбрать робота</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionSelection;
