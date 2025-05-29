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

      <div className="grid grid-cols-1 gap-3">
        {categoryParts.map((part) => {
          const isSelected = selectedParts[category]?.id === part.id;
          const isOptimal = part.compatibleMissions.includes(missionId);

          return (
            <div
              key={part.id}
              onClick={() => handleSelectPart(part.id)}
              className={`
                p-3  rounded-md transition-all cursor-pointer
                ${isSelected ? ' bg-[#00A7FF] bg-opacity-10' : ''}
                ${isOptimal ? 'part-optimal' : 'hover:border-[#00A7FF]'}
              `}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-3">
                  <img
                    src={part.imageUrl}
                    alt={part.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h5 className="font-medium text-foreground">
                    {part.name}
                    {isSelected && (
                      <span className="ml-2 text-[#00A7FF]">✓</span>
                    )}
                  </h5>

                  <div className="flex items-center mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isOptimal
                          ? 'bg-success bg-opacity-10 text-success'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {isOptimal ? 'Оптимальный выбор' : 'Базовый выбор'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="tooltip mt-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Info size={10} className="mr-1" />
                  <span>Функция детали</span>
                </div>
                <span className="tooltip-text">{part.function}</span>
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
    case 'attachment':
      return 'модулей';
    case 'color':
      return 'цвета';
    default:
      return category;
  }
}

export default PartSelector;