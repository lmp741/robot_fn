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
  const isRequirementFulfilled = (requirement: string): boolean => {
    const selectedPartsList = Object.values(selectedParts).filter(
      Boolean
    ) as RobotPart[];

    const requirementLower = requirement.toLowerCase();

    return selectedPartsList.some((part) => {
      const partName = part.name.toLowerCase();
      const partDesc = part.description.toLowerCase();
      const partFunc = part.function.toLowerCase();

      return (
        partName.includes(requirementLower) ||
        partDesc.includes(requirementLower) ||
        partFunc.includes(requirementLower) ||
        optimalParts.includes(part.id)
      );
    });
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Особенности:</h3>

      <ul className="space-y-3">
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
    </div>
  );
};

export default RequirementsList;