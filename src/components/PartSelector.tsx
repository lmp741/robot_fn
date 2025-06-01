import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Info } from 'lucide-react';

interface PartSelectorProps {
  category: string;
  missionId: string;
}

const PartSelector: React.FC<PartSelectorProps> = ({ category, missionId }) => {
  const { availableParts, selectPart, selectedParts } = useGame();

  const categoryParts = availableParts.filter(
    (part) => part.category === category
  );

  const handleSelectPart = (partId: string) => {
    const part = availableParts.find((p) => p.id === partId);
    if (part) {
      selectPart(category, part);
    }
  };

  return (
    <div>
      <h4 className="font-semibold mb-2 capitalize">
        Варианты {getCategoryName(category)}:
      </h4>

      <div className="grid grid-cols-1 gap-4">
        {categoryParts.map((part) => {
          const isSelected = selectedParts[category]?.id === part.id;
          const isOptimal = part.compatibleMissions.includes(missionId);

          return (
            <div
              key={part.id}
              onClick={() => handleSelectPart(part.id)}
              className={`
                p-4 rounded-lg transition-all cursor-pointer hover:shadow-lg
                ${isSelected ? 'border-[#00A7FF] bg-[#00A7FF] bg-opacity-5' : 'border-transparent'}
                ${isOptimal ? 'part-optimal' : 'hover:border-[#00A7FF]'}
              `}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-white rounded-lg overflow-hidden mr-4 shadow-md">
                  <img
                    src={part.imageUrl}
                    alt={part.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                <div className="flex-grow">
                  <h5 className="font-medium text-lg">
                    {part.name}
                    {isSelected && (
                      <span className="ml-2 text-[#00A7FF]">✓</span>
                    )}
                  </h5>

                  <div className="flex items-center mt-2">
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        isOptimal
                          ? 'bg-[#00A7FF] bg-opacity-10 text-[#00A7FF]'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {isOptimal ? 'Оптимальный выбор' : 'Базовый выбор'}
                    </span>
                  </div>

                  <div className="mt-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Info size={14} className="mr-1" />
                      <span>{part.function}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function getCategoryName(category: string): string {
  switch (category) {
    case 'head':
      return 'головы';
    case 'eyes':
      return 'глаз';
    case 'arms':
      return 'рук';
    case 'body':
      return 'корпуса';
    case 'legs':
      return 'ног';
    case 'color':
      return 'цвета';
    default:
      return category;
  }
}

export default PartSelector;