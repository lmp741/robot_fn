import React from 'react';
import { RobotPart } from '../types';

interface RobotPreviewProps {
  selectedParts: Record<string, RobotPart | null>;
}

const RobotPreview: React.FC<RobotPreviewProps> = ({ selectedParts }) => {
  const getBackgroundColor = () => {
    if (!selectedParts.color) return 'bg-gray-100';

    switch (selectedParts.color.id) {
      case 'blue-scheme':
        return 'bg-blue-100';
      case 'green-scheme':
        return 'bg-green-100';
      case 'purple-scheme':
        return 'bg-purple-100';
      case 'rainbow-scheme':
        return 'bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div
      className={`aspect-video rounded-lg overflow-hidden flex items-center justify-center ${getBackgroundColor()}`}
    >
      <div className="relative w-4/5 h-4/5 flex flex-col items-center justify-center">
        {Object.values(selectedParts).some((part) => part !== null) ? (
          <div className="flex flex-col items-center">
            {selectedParts.head && (
              <div className="mb-2 text-center w-32 h-32" >
                <div className="mx-auto bg-white rounded-full p-2 shadow-md">
                  <img
                    src={selectedParts.head.imageUrl}
                    alt={selectedParts.head.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-xs mt-1">{selectedParts.head.name}</p>
              </div>
            )}

            {selectedParts.eyes && (
              <div className="mt-4 text-center w-32 h-32">
                <div className="mx-auto bg-white rounded-lg p-2 shadow-md">
                  <img
                    src={selectedParts.eyes.imageUrl}
                    alt={selectedParts.eyes.name}
                    className="w-28 h-20 object-cover rounded"
                  />
                </div>
                <p className="text-xs mt-1">{selectedParts.eyes.name}</p>
              </div>
            )}

            <div className="flex items-center mt-4">
              {selectedParts.arms && (
                <div className="text-center w-32 h-32">
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={selectedParts.arms.imageUrl}
                      alt={selectedParts.arms.name}
                      className="w-full h-full object-cover rounded transform -scale-x-100"
                    />
                  </div>
                  <p className="text-xs mt-1">{selectedParts.arms.name}</p>
                </div>
              )}

              {selectedParts.body && (
                <div className="text-center mx-2 w-32 h-32">
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={selectedParts.body.imageUrl}
                      alt={selectedParts.body.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <p className="text-xs mt-1">{selectedParts.body.name}</p>
                </div>
              )}

              {selectedParts.arms && (
                <div className="text-center w-32 h-32">
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={selectedParts.arms.imageUrl}
                      alt={selectedParts.arms.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <p className="text-xs mt-1">{selectedParts.arms.name}</p>
                </div>
              )}
            </div>

            {selectedParts.legs && (
              <div className="mt-4 text-center w-32 h-32">
                <div className="mx-auto bg-white rounded-lg p-2 shadow-md">
                  <img
                    src={selectedParts.legs.imageUrl}
                    alt={selectedParts.legs.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <p className="text-xs mt-1">{selectedParts.legs.name}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="mb-2">Выберите детали для робота</p>
            <p className="text-sm">Начните со сборки основных частей</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RobotPreview;