import React from 'react';
import { RobotPart } from '../types';
import { Check, X } from 'lucide-react';

interface RequirementsListProps {
  requirements: string[];
  optimalParts: string[];
  selectedParts: Record<string, RobotPart | null>;
}

const RequirementsList: React.FC<RequirementsListProps> = ({
  requirements,
  optimalParts,
  selectedParts,
}) => {
  // Check if a requirement is fulfilled based on selected parts
  const isRequirementFulfilled = (requirement: string): boolean => {
    // This is a simplified check - in a real app, you would have more complex logic
    const selectedPartsList = Object.values(selectedParts).filter(
      Boolean
    ) as RobotPart[];

    // Check if any selected part contains keywords from the requirement
    const requirementLower = requirement.toLowerCase();

    return selectedPartsList.some((part) => {
      const partName = part.name.toLowerCase();
      const partDesc = part.description.toLowerCase();
      const partFunc = part.function.toLowerCase();

      // Check if part name, description or function contains keywords from requirement
      return (
        partName.includes(requirementLower) ||
        partDesc.includes(requirementLower) ||
        partFunc.includes(requirementLower) ||
        // Or if it's an optimal part for this mission
        optimalParts.includes(part.id)
      );
    });
  };

  // Count optimal parts selected
  const optimalPartsCount = Object.values(selectedParts).filter(
    (part) => part && optimalParts.includes(part.id)
  ).length;

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Условия:</h3>

      <ul className="space-y-3 mb-4">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start">
            {isRequirementFulfilled(req) ? (
              <Check
                size={18}
                className="text-success flex-shrink-0 mt-0.5 mr-2"
              />
            ) : (
              <X size={18} className="text-error flex-shrink-0 mt-0.5 mr-2" />
            )}
            <span>{req}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p className="font-semibold">Деталей собрано:</p>
        <div className="flex items-center mt-1">
          <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-success h-full rounded-full"
              style={{
                width: `${(optimalPartsCount / optimalParts.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="ml-2 text-sm font-medium">
            {optimalPartsCount}/{optimalParts.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RequirementsList;
