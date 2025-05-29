import React, { useState } from 'react';
import { Notebook as Robot } from 'lucide-react';
import { useGame } from '../contexts/GameContext';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const { setTeamName, setCurrentStage } = useGame();
  const [inputTeamName, setInputTeamName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (!inputTeamName.trim()) {
      setError('Пожалуйста, введите название команды');
      return;
    }

    setTeamName(inputTeamName);
    setCurrentStage('mission');
    onStart();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-light to-background p-4">
      <div className="text-center max-w-3xl mx-auto card">
        <div className="flex justify-center mb-6 bg-[url(/https://i.postimg.cc/DzrGKGMd/6.png)] w-48 h-48 bg-cover bg-no-repeat">
          <div className="rounded-full bg-primary p-4 text-white">
            <Robot size={64} />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Мастерская Роботов
        </h1>

        <p className="text-xl mb-8 text-card-foreground">
          Добро пожаловать в Мастерскую Роботов! Создайте своего уникального
          робота, выбрав миссию и подходящие детали. Работайте в команде, чтобы
          собрать лучшего робота для выполнения задания!
        </p>

        <div className="mb-8">
          <label
            htmlFor="teamName"
            className="block text-left mb-2 font-semibold"
          >
            Введите название команды:
          </label>
          <input
            type="text"
            id="teamName"
            value={inputTeamName}
            onChange={(e) => {
              setInputTeamName(e.target.value);
              setError('');
            }}
            className="w-full p-3 border border-input rounded-md mb-2"
            placeholder="Супер Конструкторы"
          />
          {error && <p className="text-error text-sm text-left">{error}</p>}
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleStart}
            className="primary-button text-lg py-3 px-8"
          >
            Начать сборку!
          </button>

          <div className="text-sm text-card-foreground mt-4">
            <p className="font-semibold">Как играть:</p>
            <ol className="text-left list-decimal pl-5 mt-2 space-y-1">
              <li>Выберите миссию для робота</li>
              <li>Подберите подходящие детали</li>
              <li>Соберите робота</li>
              <li>Успейте завершить сборку до конца времени</li>
              <li>Получите паспорт робота и оцените результат!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
