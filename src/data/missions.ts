import { Mission } from '../types';
import homeFullRobot from './homeFullRobot.png';
import pet from './pet.png';
import educate from './educateBot.png';
import gardBot from './gardBot.png';
import partyBot from './partyBot.png';

export const missions: Mission[] = [
  {
   /* id: 'home-helper',
    name: 'Домашний Помощник',
    description: 'Робот для помощи с домашними делами',
    requirements: [
      'Руки для переноски предметов',
      'Колеса или ноги для движения',
      'Дружелюбный дизайн',
      'Насадка для уборки',
    ],
    optimalParts: [
      'multi-arm',
      'smart-display',
      'utility-body',
      'wheels',
      'vacuum-attachment',
      'blue-scheme',
    ],
    imageUrl: homeFullRobot,
  },*/
  {
    id: 'pet-companion',
    name: 'Компаньон для Питомцев',
    description: 'Робот для ухода за домашними животными',
    requirements: [
      'Дружелюбный дизайн',
      'Отсек для корма',
      'Быстрое передвижение',
      'Игровые функции',
    ],
    optimalParts: [
      'round-head',
      'camera-eyes',
      'gentle-arms',
      'compact-body',
      'wheels',
      'toy-attachment',
      'green-scheme',
    ],
    imageUrl: pet,
  },
  {
    id: 'education',
    name: 'Помощник в Обучении',
    description: 'Робот для интерактивного обучения',
    requirements: [
      'Экран для контента',
      'Дружелюбный дизайн',
      'Руки для демонстраций',
      'Аудиосистема',
    ],
    optimalParts: [
      'smart-display',
      'digital-eyes',
      'teaching-arms',
      'learning-body',
      'static-base',
      'projector-attachment',
      'purple-scheme',
    ],
    imageUrl: educate,
  },
  {
    id: 'entertainment',
    name: 'Бот для развлечений',
    description: 'Робот для создания веселья и развлечений',
    requirements: [
      'Яркий дизайн',
      'Подвижность',
      'Световые эффекты',
      'Звуковая система',
    ],
    optimalParts: [
      'expressive-head',
      'led-eyes',
      'dancing-arms',
      'speaker-body',
      'bouncy-legs',
      'disco-attachment',
      'rainbow-scheme',
    ],
    imageUrl: partyBot,
  },
  {
    id: 'garden',
    name: 'Бот Садовник',
    description: 'Робот для работы в саду',
    requirements: [
      'Защита от погоды',
      'Садовые инструменты',
      'Проходимость',
      'Система полива',
    ],
    optimalParts: [
      'weather-head',
      'sensor-eyes',
      'gardening-arms',
      'rugged-body',
      'all-terrain-legs',
      'watering-attachment',
      'green-scheme',
    ],
    imageUrl: gardBot,
  },
];