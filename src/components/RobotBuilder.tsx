import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import PartSelector from './PartSelector';
import RobotPreview from './RobotPreview';
import RequirementsList from './RequirementsList';
import { ArrowRight } from 'lucide-react';

const RobotBuilder: React.FC = () => {
  const {
    selectedMission,
    selectedParts,
    timeRemaining,
    buildRobot,
    setCurrentStage,
    pauseTimer,
  } = useGame();

  const [activeCategory, setActiveCategory] = useState<string>('head');
  const categories = [
    { id: 'head', name: 'Голова' },
    { id: 'eyes', name: 'Глаза' },
    { id: 'arms', name: 'Руки' },
    { id: 'body', name: 'Корпус' },
    { id: 'legs', name: 'Ноги' },
    { id: 'attachment', name: 'Модули' },
    { id: 'color', name: 'Цвет' },
  ];

  const handleComplete = () => {
    buildRobot();
    pauseTimer();
    setCurrentStage('result');
  };

  const isRobotComplete = Object.values(selectedParts).every(
    (part) => part !== null
  );

  if (!selectedMission) return <div>Миссия не выбрана</div>;

  // Calculate optimal parts ratio
  const selectedOptimalParts = Object.values(selectedParts).filter(
    (part) => part && selectedMission.optimalParts.includes(part.id)
  ).length;
  const totalOptimalParts = selectedMission.optimalParts.length;
  const progressPercentage = (selectedOptimalParts / totalOptimalParts) * 100;

  return (
    <div className="max-w-7xl mx-auto p-4 py-8 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 space-y-6">
        <div className="card">
          <h3 className="text-xl font-bold mb-4">Детали робота</h3>

          <div className="flex overflow-x-auto mb-4 pb-2 -mx-2 px-4 md:-mx-0 md:px-0 h-16 items-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-2 py-1 whitespace-nowrap rounded-md mr-2 text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-[#00A7FF] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${
                  selectedParts[category.id]
                    ? 'ring-2 ring-[#00A7FF] ring-opacity-50'
                    : ''
                }`}
              >
                {category.name}
                {selectedParts[category.id] && ' ✓'}
              </button>
            ))}
          </div>

          <div className="parts-container">
            <PartSelector
              category={activeCategory}
              missionId={selectedMission.id}
            />
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Прогресс сборки:</span>
              <span className="text-sm font-medium">
                {selectedOptimalParts}/{totalOptimalParts}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <RequirementsList
          requirements={selectedMission.requirements}
          optimalParts={selectedMission.optimalParts}
          selectedParts={selectedParts}
        />
      </div>

      <div className="md:w-2/3 space-y-7">
        <div className="card ">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">
              Сборка: {selectedMission.name}
            </h3>

            <button
              onClick={handleComplete}
              disabled={!isRobotComplete || timeRemaining === 0}
              className="complete-button"
            >
              <span>Завершить сборку</span>
              <ArrowRight size={16} className="ml-1 inline" />
            </button>
          </div>

          <RobotPreview selectedParts={selectedParts} />

          {!isRobotComplete && (
            <p className="text-warning text-center mt-4">
              Выберите детали для всех категорий, чтобы завершить сборку робота!
            </p>
          )}

          {timeRemaining === 0 && (
            <div className="bg-error bg-opacity-10 border border-error text-error p-4 rounded-md mt-4">
              <p className="font-bold">Время вышло!</p>
              <p>
                Вы всё ещё можете завершить сборку робота, но не получите бонус
                за время.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RobotBuilder;