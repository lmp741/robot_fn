import { Mission } from '../types';
import homeFullRobot from './homeFullRobot.png';
import pet from './pet.png';
import educate from './educateBot.png';
import gardBot from './gardBot.png';
import partyBot from './partyBot.png';

export const missions: Mission[] = [
  {
    id: 'home-helper',
    name: 'Домашний Помощник',
    description:
      'Дружелюбный робот, который помогает по дому с такими делами, как уборка, организация и напоминание членам семьи о важных задачах.',
    requirements: [
      'Должен иметь руки, которые могут переносить предметы',
      'Нужны колеса или устойчивые ноги для перемещения по дому',
      'Должен иметь дружелюбное лицо для взаимодействия с членами семьи',
      'Требуется специальная насадка для задач по уборке',
    ],
    optimalParts: [
      'multi-arm',
      'smart-display',
      'utility-body',
      'wheels',
      'vacuum-attachment',
      'blue-scheme',
    ],
    imageUrl:
      homeFullRobot,
  },
  {
    id: 'pet-companion',
    name: 'Компаньон для Питомцев',
    description:
      'Игривый робот, который составляет компанию домашним животным, кормит их по расписанию и присматривает за ними, когда хозяева отсутствуют.',
    requirements: [
      'Должен быть дружелюбным по внешнему виду к домашним животным',
      'Должен иметь место для хранения корма и лакомств для домашних животных',
      'Должен уметь быстро двигаться для игровых сессий',
      'Требуются специальные приспособления для взаимодействия с домашними животными',
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
    imageUrl:
      pet,
  },
  {
    id: 'education',
    name: 'Помощник в Обучении',
    description:
      'Умный робот, который помогает детям учиться с помощью интерактивных игр, викторин и образовательного контента. Он также может отвечать на вопросы и давать объяснения.',
    requirements: [
      'Нужен экран для отображения образовательного контента',
      'Должен иметь дружелюбный, располагающий внешний вид',
      'Должен иметь руки для интерактивных демонстраций',
      'Требуются аудио возможности для четкой коммуникации',
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
    imageUrl:
     educate,
  },
  {
    id: 'entertainment',
    name: 'Бот для развлечений',
    description:
      'Забавный робот, который воспроизводит музыку, рассказывает анекдоты, исполняет танцы и обеспечивает развлечения для вечеринок и встреч.',
    requirements: [
      'Нужны выразительные черты для выступлений',
      'Должен иметь гибкие возможности передвижения',
      'Должен иметь красочный внешний вид',
      'Требуются специальные приспособления для развлечений',
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
    imageUrl:
    partyBot,
  },
  {
    id: 'garden',
    name: 'Бот Садовник',
    description:
      'Прочный робот, который помогает с садовыми работами, такими как полив растений, удаление сорняков, мониторинг состояния почвы и предоставление советов по уходу за растениями.',
    requirements: [
      'Должен быть устойчив к погодным условиям',
      'Нужны специализированные руки для садовых работ',
      'Должен иметь подходящую для местности мобильность',
      'Требуются приспособления для ухода за растениями',
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
    imageUrl:
      gardBot,
  },
];
