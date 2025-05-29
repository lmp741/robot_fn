import React from 'react';
import { RobotPart } from '../types';

interface RobotPreviewProps {
  selectedParts: Record<string, RobotPart | null>;
}

const RobotPreview: React.FC<RobotPreviewProps> = ({ selectedParts }) => {
  // Get color scheme or default to a neutral background
  const colorScheme = selectedParts.color?.name || 'Default Color';

  // Determine background color based on selected color scheme
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
        {/* Robot Assembly Display */}
        {Object.values(selectedParts).some((part) => part !== null) ? (
          <div className="flex flex-col items-center">
            {/* Head */}
            {selectedParts.head && (
              <div className="mb-2 text-center w-24 h-24" >
                <div className="mx-auto bg-white rounded-full p-2 shadow-md">
                  <img
                    src={selectedParts.head.imageUrl}
                    alt={selectedParts.head.name}
                    className=" object-cover rounded-full"
                  />
                </div>
                <p className="text-xs mt-1">{selectedParts.head.name}</p>
              </div>
            )}

            {/* Eyes */}
            {selectedParts.eyes && (
              <div className="mt-7 text-center w-24 h-24">
                <div className="mx-auto bg-white rounded-lg p-2 shadow-md">
                  <img
                    src={selectedParts.eyes.imageUrl}
                    alt={selectedParts.eyes.name}
                    className="w-20 h-12 object-cover rounded"
                  />
                </div>
                <p className="text-xs mt-1">{selectedParts.eyes.name}</p>
              </div>
            )}

            {/* Body with Arms */}
            <div className="flex items-center mt-7">
              {/* Left Arm */}
              {selectedParts.arms && (
                <div className="text-center w-24 h-24">
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={selectedParts.arms.imageUrl}
                      alt={selectedParts.arms.name}
                      className="object-cover rounded transform -scale-x-100"
                    />
                  </div>
                   <p className="text-xs mt-1">{selectedParts.arms.name}</p>
                </div>
              )}

              {/* Body */}
              {selectedParts.body && (
                <div className="text-center mx-2 w-24 h-24 ">
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={selectedParts.body.imageUrl}
                      alt={selectedParts.body.name}
                      className="w-28 h-28 object-cover rounded"
                    />
                  </div>
                  <p className="text-xs text-center mt-1">{selectedParts.body.name}</p>
                </div>
              )}

              {/* Right Arm */}
              {selectedParts.arms && (
                <div className="text-center w-24 h-24 ">
                  <div className="bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={selectedParts.arms.imageUrl}
                      alt={selectedParts.arms.name}
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="text-xs mt-1">{selectedParts.arms.name}</p>
                </div>
              )}
            </div>

            {/* Legs */}
            {selectedParts.legs && (
              <div className="mb-2 text-center w-24 h-24 ">
                <div className="mx-auto bg-white rounded-lg p-2 shadow-md">
                  <img
                    src={selectedParts.legs.imageUrl}
                    alt={selectedParts.legs.name}
                    className="w-24 h-16 object-cover rounded"
                  />
                </div>
                <p className="text-xs text-center mt-1">{selectedParts.legs.name}</p>
              </div>
            )}

            {/* Special Attachment */}
            {selectedParts.attachment && (
              <div className="text-center absolute top-0 right-0">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <img
                    src={selectedParts.attachment.imageUrl}
                    alt={selectedParts.attachment.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
                <p className="text-xs mt-1">{selectedParts.attachment.name}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="mb-2">Выберите нужные части для вашего робота</p>
            <p className="text-sm">
              Начните с головы, тела и приступайте к выбору остальных частей
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RobotPreview;
