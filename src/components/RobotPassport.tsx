import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { Play, Home, X } from 'lucide-react';
import eduVid from './videos/eduvid.mp4';
import gardVid from './videos/gardVid.mp4';
import partyVid from './videos/partyVid.mp4';
import petVid from './videos/petVid.mp4';
import houseVid from './videos/houseVid.mp4';


const RobotPassport: React.FC = () => {
  const { robot, score, timeRemaining, setCurrentStage, resetTimer } = useGame();
  const [showModal, setShowModal] = useState(false);

  const handleRestart = () => {
    resetTimer();
    setCurrentStage('start');
  };

  if (!robot) {
    return <div>Данные робота недоступны</div>;
  }

  const timeUsed = 15 * 60 - timeRemaining;
  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  const getRating = () => {
    if (score >= 120) return { text: 'Супер бот!', stars: 5 };
    if (score >= 100) return { text: 'Отличный бот', stars: 4 };
    if (score >= 80) return { text: 'Хороший бот', stars: 3 };
    if (score >= 60) return { text: 'Обычный бот', stars: 2 };
    return { text: 'Нужны доработки', stars: 1 };
  };

  const rating = getRating();

  const getCategoryName = (category: string): string => {
    switch (category) {
      case 'head':
        return 'Голова';
      case 'eyes':
        return 'Глаза';
      case 'arms':
        return 'Руки';
      case 'body':
        return 'Корпус';
      case 'legs':
        return 'Ноги';
      case 'attachment':
        return 'Модуль';
      case 'color':
        return 'Цвет';
      default:
        return category;
    }
  };

  const getVideoSource = () => {
    switch (robot.mission.id) {
      case 'home-helper':
        return houseVid;
      case 'pet-companion':
        return petVid;
      case 'education':
        return eduVid;
      case 'entertainment':
        return partyVid;
      case 'garden':
        return gardVid;
      default:
        return '';
    }
  };

  const selectedParts = Object.entries(robot.parts)
    .filter(([_, part]) => part !== null)
    .map(([category, part]) => ({
      category,
      part,
      isOptimal: robot.mission.optimalParts.includes(part!.id),
    }));

  return (
    <div className="max-w-4xl mx-auto p-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Робо-паспорт</h2>
      </div>

      <div className="card mb-6 overflow-hidden">
        <div
          className={`p-6 mb-6 ${
            robot.parts.color?.id === 'blue-scheme'
              ? 'bg-blue-100'
              : robot.parts.color?.id === 'green-scheme'
              ? 'bg-green-100'
              : robot.parts.color?.id === 'purple-scheme'
              ? 'bg-purple-100'
              : robot.parts.color?.id === 'rainbow-scheme'
              ? 'bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100'
              : 'bg-gray-100'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              {robot.parts.body && (
                <img
                  src={robot.parts.body.imageUrl}
                  alt="Корпус робота"
                  className="w-32 h-32 object-cover rounded"
                />
              )}
            </div>

            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold mb-1">{robot.mission.name}</h3>
              <p className="text-sm text-gray-600 mb-2">
                Создан командой: {robot.teamName}
              </p>

              <div className="flex justify-center md:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < rating.stars ? 'text-[#00A7FF]' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm mb-1">
                Рейтинг: <span className="font-semibold">{rating.text}</span>
              </p>
              <p className="text-sm">
                Результат: <span className="font-semibold">{score} очков</span>
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold mb-3">
                Технические составляющие:
              </h4>
              <table className="w-full text-sm">
                <tbody>
                  {selectedParts.map(
                    ({ category, part, isOptimal }) =>
                      part && (
                        <tr
                          key={category}
                          className={`border-b ${
                            isOptimal ? 'text-[#00A7FF]' : 'text-error'
                          }`}
                        >
                          <td className="py-2 font-semibold">
                            {getCategoryName(category)}:
                          </td>
                          <td className="py-2">
                            {part.name}
                            {!isOptimal && (
                              <span className="text-xs ml-2">
                                (Не оптимальный выбор)
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                  )}
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Время сборки:</td>
                    <td className="py-2">
                      {minutes}м {seconds}с
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3">Описание:</h4>
              <div className="bg-gray-100 p-3 rounded-md">
                <p className="mb-3">{robot.mission.description}</p>
                <h5 className="font-semibold mb-1">Ключевые функции:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedParts
                    .slice(0, 4)
                    .map(
                      ({ part }) =>
                        part && <li key={part.id}>{part.function}</li>
                    )}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold mb-2">Достижения</h4>
            <div className="flex flex-wrap gap-3">
              <div
                className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${
                  timeRemaining > 5 * 60
                    ? 'bg-[#00A7FF] text-white'
                    : 'bg-gray-200 text-gray-700'
                }
              `}
              >
                Уверенный роботехник
              </div>

              <div
                className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${
                  score > 80
                    ? 'bg-[#00A7FF] text-white'
                    : 'bg-gray-200 text-gray-700'
                }
              `}
              >
                Специалист
              </div>

              <div
                className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${
                  Object.values(robot.parts).every((p) => p !== null)
                    ? 'bg-[#00A7FF] text-white'
                    : 'bg-gray-200 text-gray-700'
                }
              `}
              >
                Профессиональный инженер
              </div>

              <div
                className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${
                  score > 100
                    ? 'bg-[#00A7FF] text-white'
                    : 'bg-gray-200 text-gray-700'
                }
              `}
              >
                Инноватор
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="primary-button flex items-center justify-center"
        >
          <Play size={18} className="mr-2" />
          <span>Оживить робота</span>
        </button>

        <button
          onClick={handleRestart}
          className="secondary-button flex items-center justify-center"
        >
          <Home size={18} className="mr-2" />
          <span>Создать другого робота</span>
        </button>
      </div>

      {/* Модальное окно с видео */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Робот в действии</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="relative aspect-video">
              <video
                className="w-full rounded-lg"
                controls
                autoPlay
                src={getVideoSource()}
              >
                Ваш браузер не поддерживает видео
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RobotPassport;