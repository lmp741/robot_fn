import { RobotPart } from '../types';
import homeHead from "../components/robo-parts/home-helper-head.png";
import headEdu from "../components/robo-parts/education-head.png";
import headGarden from "../components/robo-parts/garden-head.png";
import entEdu from "../components/robo-parts/entertainment-head.png";
import eyesGarden from "../components/robo-parts/garden-eyes.png";
import eyesHome from "../components/robo-parts/home-helper-eyes.png";
import EYESeDU from "../components/robo-parts/education-eyes.png";
import eyesEnt from "../components/robo-parts/entertainment-eyes.png";
import armHome from "../components/robo-parts/home-helper-arms.png";
import petArm from "../components/robo-parts/pet-companion-arms.png";
import gardArm from "../components/robo-parts/garden-arms.png";
import eduArm from "../components/robo-parts/education-arms.png.png";
import entArm from "../components/robo-parts/entertainment-arms.png";
import homeBody from "../components/robo-parts/home-helper-body.png";
import entBody from "../components/robo-parts/entertainment-body.png";
import eduBody from "../components/robo-parts/education-body.png.png";
import petBody from "../components/robo-parts/pet-companion-body.png";
import gardbody from "../components/robo-parts/garden-body.png";
import homeLegs from "../components/robo-parts/home-helper-legs.png";
import gardLegs from "../components/robo-parts/garden-legs.png";
import eduLegs from "../components/robo-parts/education-legs.png.png";
import entLegs from "../components/robo-parts/entertainment-legs.png";
import toy from "../components/robo-parts/pet-companion-attachment.png";
import brash from "../components/robo-parts/home-helper-attachment.png";

export const parts: RobotPart[] = [
  // Heads
  {
    id: 'round-head',
    name: 'Круглая Дружелюбная Голова',
    category: 'head',
    description: 'Круглая, дружелюбная голова с гладкой поверхностью',
    function: 'Создает дружелюбный, располагающий внешний вид',
    compatibleMissions: [
      'home-helper',
      'pet-companion',
      'education',
      'entertainment',
    ],
    imageUrl: homeHead ,
  },
  {
    id: 'smart-display',
    name: 'Голова с Умным Дисплеем',
    category: 'head',
    description: 'Голова со встроенным экраном дисплея',
    function:
      'Показывает информацию, образовательный контент или выразительные лица',
    compatibleMissions: ['home-helper', 'education', 'entertainment'],
    imageUrl: headEdu,
  },
  {
    id: 'weather-head',
    name: 'Погодоустойчивая Голова',
    category: 'head',
    description:
      'Прочная голова, предназначенная для использования на открытом воздухе',
    function: 'Защищает внутренние компоненты от погодных условий',
    compatibleMissions: ['garden', 'pet-companion'],
    imageUrl:
    headGarden,
  },
  {
    id: 'expressive-head',
    name: 'Выразительная Голова',
    category: 'head',
    description: 'Голова с очень выразительными чертами',
    function: 'Отображает широкий спектр эмоций и выражений',
    compatibleMissions: ['entertainment', 'education', 'pet-companion'],
    imageUrl:
      entEdu,
  },

  // Eyes
  {
    id: 'camera-eyes',
    name: 'Глаза-Камеры',
    category: 'eyes',
    description: 'Передовые датчики камеры, которые функционируют как глаза',
    function: 'Захватывает визуальную информацию с высокой точностью',
    compatibleMissions: ['home-helper', 'pet-companion', 'garden'],
    imageUrl:
    eyesHome,
  },
  {
    id: 'digital-eyes',
    name: 'Глаза с Цифровым Дисплеем',
    category: 'eyes',
    description:
      'Настраиваемые цифровые дисплеи, которые функционируют как глаза',
    function:
      'Отображает широкий спектр выражений и может отображать информацию',
    compatibleMissions: ['education', 'entertainment', 'home-helper'],
    imageUrl:
    EYESeDU ,
  },
  {
    id: 'sensor-eyes',
    name: 'Глаза с Множеством Датчиков',
    category: 'eyes',
    description: 'Специализированные датчики для мониторинга окружающей среды',
    function:
      'Определяет температуру, влажность, уровень освещенности и многое другое',
    compatibleMissions: ['garden', 'home-helper'],
    imageUrl:
    eyesGarden,
  },
  {
    id: 'led-eyes',
    name: 'Глаза с LED Паттернами',
    category: 'eyes',
    description: 'Красочные LED массивы, которые функционируют как глаза',
    function: 'Создает динамичные, красочные паттерны и выражения',
    compatibleMissions: ['entertainment', 'pet-companion'],
    imageUrl:
    eyesEnt,
  },

  // Arms
  {
    id: 'multi-arm',
    name: 'Многофункциональные Руки',
    category: 'arms',
    description:
      'Универсальные руки с несколькими инструментами и приспособлениями',
    function: 'Выполняет широкий спектр домашних задач',
    compatibleMissions: ['home-helper'],
    imageUrl:
    armHome,
  },
  {
    id: 'gentle-arms',
    name: 'Руки с Нежным Прикосновением',
    category: 'arms',
    description:
      'Мягкие руки, предназначенные для аккуратного взаимодействия',
    function:
      'Безопасно взаимодействует с домашними животными и хрупкими предметами',
    compatibleMissions: ['pet-companion', 'home-helper'],
    imageUrl:
    petArm,
  },
  {
    id: 'gardening-arms',
    name: 'Руки с Садовыми Инструментами',
    category: 'arms',
    description: 'Специализированные руки с насадками для садовых инструментов',
    function: 'Выполняет различные садовые работы с точностью',
    compatibleMissions: ['garden'],
    imageUrl:
    gardArm,
  },
  {
    id: 'teaching-arms',
    name: 'Руки для Обучающих Демонстраций',
    category: 'arms',
    description:
      'Точные руки, предназначенные для образовательных демонстраций',
    function:
      'Показывает, как выполнять задачи, и создает образовательные модели',
    compatibleMissions: ['education'],
    imageUrl:
    eduArm,
  },
  {
    id: 'dancing-arms',
    name: 'Руки для Танцевальных Выступлений',
    category: 'arms',
    description:
      'Очень гибкие руки, предназначенные для выразительных движений',
    function: 'Исполняет танцы и развлекательные движения',
    compatibleMissions: ['entertainment'],
    imageUrl:
    entArm,
  },

  // Bodies
  {
    id: 'utility-body',
    name: 'Корпус с Отделениями для Инструментов',
    category: 'body',
    description: 'Практичный корпус со встроенными отделениями для хранения',
    function: 'Хранит инструменты и принадлежности для различных задач',
    compatibleMissions: ['home-helper', 'garden'],
    imageUrl:
    homeBody,
  },
  {
    id: 'compact-body',
    name: 'Компактный Подвижный Корпус',
    category: 'body',
    description: 'Небольшой, легкий корпус, предназначенный для ловкости',
    function: 'Быстро перемещается и перемещается в ограниченном пространстве',
    compatibleMissions: ['pet-companion', 'entertainment'],
    imageUrl:
    petBody
    ,
  },
  {
    id: 'learning-body',
    name: 'Корпус - Центр Обучения',
    category: 'body',
    description:
      'Корпус со встроенными образовательными инструментами и дисплеями',
    function: 'Обеспечивает интерактивное обучение',
    compatibleMissions: ['education'],
    imageUrl:
      eduBody,
  },
  {
    id: 'speaker-body',
    name: 'Корпус с Акустической Системой',
    category: 'body',
    description: 'Корпус со встроенными высококачественными динамиками',
    function: 'Воспроизводит музыку и звуковые эффекты для развлечения',
    compatibleMissions: ['entertainment', 'education'],
    imageUrl:
    entBody,
  },
  {
    id: 'rugged-body',
    name: 'Прочный Корпус для Работы на Открытом Воздухе',
    category: 'body',
    description:
      'Прочный корпус, предназначенный для использования на открытом воздухе',
    function: 'Выдерживает грязь, воду и сложные условия',
    compatibleMissions: ['garden'],
    imageUrl:
      gardbody,
  },

  // Legs/Mobility
  {
    id: 'wheels',
    name: 'Гладкие Колеса',
    category: 'legs',
    description: 'Набор гладких, эффективных колес',
    function: 'Быстро перемещается по ровным, внутренним поверхностям',
    compatibleMissions: ['home-helper', 'pet-companion', 'education'],
    imageUrl:
      homeLegs,
  },
  {
    id: 'all-terrain-legs',
    name: 'Вездеходные Гусеницы',
    category: 'legs',
    description:
      'Прочные гусеницы, предназначенные для использования на открытом воздухе',
    function:
      'Передвигается по пересеченной местности, траве и садовым участкам',
    compatibleMissions: ['garden'],
    imageUrl:
      gardLegs,
  },
  {
    id: 'static-base',
    name: 'Стационарная Обучающая База',
    category: 'legs',
    description: 'Стабильная, неподвижная база',
    function: 'Обеспечивает устойчивость для образовательных демонстраций',
    compatibleMissions: ['education'],
    imageUrl:
      eduLegs,
  },
  {
    id: 'bouncy-legs',
    name: 'Пружинящие Ноги для Выступлений',
    category: 'legs',
    description: 'Пружинящие ноги, предназначенные для динамичного движения',
    function: 'Выполняет прыжки и танцевальные движения для развлечения',
    compatibleMissions: ['entertainment'],
    imageUrl:
      entLegs,
  },

  // Special Attachments
  {
    id: 'vacuum-attachment',
    name: 'Насадка-Пылесос',
    category: 'attachment',
    description: 'Мощная насадка для вакуумной очистки',
    function: 'Эффективно очищает полы и поверхности',
    compatibleMissions: ['home-helper'],
    imageUrl:
      brash,
  },
  {
    id: 'toy-attachment',
    name: 'Насадка - Игрушка для Питомца',
    category: 'attachment',
    description: 'Интерактивная игрушка для развлечения питомца',
    function: 'Вовлекает питомцев в игровые действия',
    compatibleMissions: ['pet-companion'],
    imageUrl:
      toy,
  },
  {
    id: 'projector-attachment',
    name: 'Обучающий Проектор',
    category: 'attachment',
    description: 'Цифровой проектор для образовательного контента',
    function: 'Проецирует изображения, видео и интерактивные уроки',
    compatibleMissions: ['education'],
    imageUrl:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'disco-attachment',
    name: 'Насадка - Диско-Шар',
    category: 'attachment',
    description: 'Красочная вращающаяся система освещения',
    function: 'Создает ослепительные световые шоу для развлечения',
    compatibleMissions: ['entertainment'],
    imageUrl:
      'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'watering-attachment',
    name: 'Система Полива Растений',
    category: 'attachment',
    description: 'Точная система полива растений',
    function: 'Поливает садовые растения нужным количеством воды',
    compatibleMissions: ['garden'],
    imageUrl:
      'https://images.pexels.com/photos/9030230/pexels-photo-9030230.jpeg?auto=compress&cs=tinysrgb&w=600',
  },

  // Color Schemes
  {
    id: 'blue-scheme',
    name: 'Мягкий Синий',
    category: 'color',
    description: 'Успокаивающая синяя цветовая схема',
    function: 'Создает ощущение надежности и полезности',
    compatibleMissions: ['home-helper', 'education'],
    imageUrl:
      'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'green-scheme',
    name: 'Естественный Зеленый',
    category: 'color',
    description: 'Свежая зеленая цветовая схема',
    function: 'Передает естественный, экологичный внешний вид',
    compatibleMissions: ['garden', 'pet-companion'],
    imageUrl:
      'https://images.pexels.com/photos/9030230/pexels-photo-9030230.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'purple-scheme',
    name: 'Проницательный Фиолетовый',
    category: 'color',
    description: 'Насыщенная фиолетовая цветовая схема',
    function: 'Предполагает интеллект и креативность',
    compatibleMissions: ['education', 'entertainment'],
    imageUrl:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'rainbow-scheme',
    name: 'Веселая Радуга',
    category: 'color',
    description: 'Красочный радужный паттерн',
    function: 'Создает игривый, веселый внешний вид',
    compatibleMissions: ['entertainment', 'pet-companion', 'education'],
    imageUrl:
      'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
