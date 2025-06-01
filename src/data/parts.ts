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
import petHead from "../components/robo-parts/pet-companion-head.png";
import petEyes from "../components/robo-parts/pet-companion-eyes.png";
import petLegs from "../components/robo-parts/pet-companion-legs.png";
import rb from "../components/robo-parts/rb.png";
import ppl from "../components/robo-parts/ppl.png";
import green from "../components/robo-parts/green.png";
import blue from "../components/robo-parts/blue.png";
export const parts: RobotPart[] = [
  // Heads
  {
    id: 'round-head',
    name: 'Круглая Дружелюбная Голова',
    category: 'head',
    description: 'Круглая, дружелюбная голова с гладкой поверхностью',
    function: 'Создает дружелюбный, располагающий внешний вид',
    compatibleMissions: ['home-helper', 'pet-companion', 'education', 'entertainment'],
    imageUrl: petHead,
  },
  {
    id: 'smart-display',
    name: 'Голова с Умным Дисплеем',
    category: 'head',
    description: 'Голова со встроенным экраном дисплея',
    function: 'Показывает информацию и контент',
    compatibleMissions: ['home-helper', 'education', 'entertainment'],
    imageUrl: headEdu,
  },
  {
    id: 'weather-head',
    name: 'Погодоустойчивая Голова',
    category: 'head',
    description: 'Прочная голова для улицы',
    function: 'Защищает от погодных условий',
    compatibleMissions: ['garden', 'pet-companion'],
    imageUrl: headGarden,
  },
  {
    id: 'expressive-head',
    name: 'Выразительная Голова',
    category: 'head',
    description: 'Голова с выразительными чертами',
    function: 'Показывает эмоции',
    compatibleMissions: ['entertainment', 'education', 'pet-companion'],
    imageUrl: entEdu,
  },

  // Eyes
  {
    id: 'camera-eyes',
    name: 'Глаза-Камеры',
    category: 'eyes',
    description: 'Датчики камеры в виде глаз',
    function: 'Точное распознавание объектов',
    compatibleMissions: ['home-helper', 'pet-companion', 'garden'],
    imageUrl: petEyes,
  },
  {
    id: 'digital-eyes',
    name: 'Цифровые Глаза',
    category: 'eyes',
    description: 'Настраиваемые цифровые дисплеи',
    function: 'Показывает разные выражения',
    compatibleMissions: ['education', 'entertainment', 'home-helper'],
    imageUrl: EYESeDU,
  },
  {
    id: 'sensor-eyes',
    name: 'Сенсорные Глаза',
    category: 'eyes',
    description: 'Специальные датчики',
    function: 'Мониторинг окружающей среды',
    compatibleMissions: ['garden', 'home-helper'],
    imageUrl: eyesGarden,
  },
  {
    id: 'led-eyes',
    name: 'LED Глаза',
    category: 'eyes',
    description: 'Светодиодные глаза',
    function: 'Создает световые эффекты',
    compatibleMissions: ['entertainment', 'pet-companion'],
    imageUrl: eyesEnt,
  },

  // Arms
  {
    id: 'multi-arm',
    name: 'Многофункциональные Руки',
    category: 'arms',
    description: 'Универсальные руки',
    function: 'Выполняет разные задачи',
    compatibleMissions: ['home-helper'],
    imageUrl: armHome,
  },
  {
    id: 'gentle-arms',
    name: 'Мягкие Руки',
    category: 'arms',
    description: 'Мягкие руки для питомцев',
    function: 'Безопасное взаимодействие',
    compatibleMissions: ['pet-companion', 'home-helper'],
    imageUrl: petArm,
  },
  {
    id: 'gardening-arms',
    name: 'Садовые Руки',
    category: 'arms',
    description: 'Руки для сада',
    function: 'Садовые работы',
    compatibleMissions: ['garden'],
    imageUrl: gardArm,
  },
  {
    id: 'teaching-arms',
    name: 'Обучающие Руки',
    category: 'arms',
    description: 'Руки для обучения',
    function: 'Показывает действия',
    compatibleMissions: ['education'],
    imageUrl: eduArm,
  },
  {
    id: 'dancing-arms',
    name: 'Танцующие Руки',
    category: 'arms',
    description: 'Гибкие руки',
    function: 'Танцы и движения',
    compatibleMissions: ['entertainment'],
    imageUrl: entArm,
  },

  // Bodies
  {
    id: 'utility-body',
    name: 'Корпус с Отсеками',
    category: 'body',
    description: 'Практичный корпус',
    function: 'Хранение инструментов',
    compatibleMissions: ['home-helper', 'garden'],
    imageUrl: homeBody,
  },
  {
    id: 'compact-body',
    name: 'Компактный Корпус',
    category: 'body',
    description: 'Легкий корпус',
    function: 'Быстрое передвижение',
    compatibleMissions: ['pet-companion', 'entertainment'],
    imageUrl: petBody,
  },
  {
    id: 'learning-body',
    name: 'Обучающий Корпус',
    category: 'body',
    description: 'Корпус для обучения',
    function: 'Интерактивное обучение',
    compatibleMissions: ['education'],
    imageUrl: eduBody,
  },
  {
    id: 'speaker-body',
    name: 'Корпус со Звуком',
    category: 'body',
    description: 'Корпус с динамиками',
    function: 'Воспроизведение звука',
    compatibleMissions: ['entertainment', 'education'],
    imageUrl: entBody,
  },
  {
    id: 'rugged-body',
    name: 'Прочный Корпус',
    category: 'body',
    description: 'Корпус для улицы',
    function: 'Защита от внешних факторов',
    compatibleMissions: ['garden'],
    imageUrl: gardbody,
  },

  // Legs
  {
    id: 'wheels',
    name: 'Колеса',
    category: 'legs',
    description: 'Гладкие колеса',
    function: 'Быстрое передвижение',
    compatibleMissions: ['home-helper', 'pet-companion', 'education'],
    imageUrl: petLegs,
  },
  {
    id: 'all-terrain-legs',
    name: 'Вездеходные Ноги',
    category: 'legs',
    description: 'Прочные гусеницы',
    function: 'Движение по любой местности',
    compatibleMissions: ['garden'],
    imageUrl: gardLegs,
  },
  {
    id: 'static-base',
    name: 'Стационарная База',
    category: 'legs',
    description: 'Неподвижная база',
    function: 'Устойчивость при обучении',
    compatibleMissions: ['education'],
    imageUrl: eduLegs,
  },
  {
    id: 'bouncy-legs',
    name: 'Пружинящие Ноги',
    category: 'legs',
    description: 'Ноги для прыжков',
    function: 'Танцы и развлечения',
    compatibleMissions: ['entertainment'],
    imageUrl: entLegs,
  },

  // Colors
  {
    id: 'blue-scheme',
    name: 'Синий',
    category: 'color',
    description: 'Синяя схема',
    function: 'Создает надежный вид',
    compatibleMissions: ['home-helper', 'education'],
    imageUrl: blue, // Синий градиент
  },
  {
    id: 'green-scheme',
    name: 'Зеленый',
    category: 'color',
    description: 'Зеленая схема',
    function: 'Природный вид',
    compatibleMissions: ['garden', 'pet-companion'],
    imageUrl: green, // Зеленый градиент
  },
  {
    id: 'purple-scheme',
    name: 'Фиолетовый',
    category: 'color',
    description: 'Фиолетовая схема',
    function: 'Креативный вид',
    compatibleMissions: ['education', 'entertainment'],
    imageUrl: ppl, // Фиолетовый градиент
  },
  {
    id: 'rainbow-scheme',
    name: 'Радужный',
    category: 'color',
    description: 'Разноцветная схема',
    function: 'Веселый вид',
    compatibleMissions: ['entertainment', 'pet-companion', 'education'],
    imageUrl: rb, // Радужный градиент
  },
];