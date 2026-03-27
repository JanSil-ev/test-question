export const typeScriptQuestions = [
  {
    id: "ts-001",
    topic: "Core Type System",
    question:
      "Объясните разницу между type и interface. Какие ограничения есть у каждого и когда вы выберете один вариант вместо другого?",
    options: [
      "Ничем не отличаются",
      "Interface можно расширять",
      "Type более мощный",
      "Interface для объектов, type для всего",
    ],
    correct: [1],
    explanation:
      "Interface поддерживает declaration merging и лучше подходит для API. Type более универсален (union, intersection, conditional types). Interface нельзя использовать для union. Выбор зависит от задачи.",
  },
  {
    id: "ts-002",
    topic: "Core Type System",
    question:
      "В чем разница между unknown и any? Почему unknown считается безопаснее?",
    options: ["Нет разницы", "unknown безопаснее", "any лучше", "unknown быстрее"],
    correct: [1],
    explanation:
      "any отключает типизацию. unknown требует проверки перед использованием. Это предотвращает ошибки на runtime.",
  },
  {
    id: "ts-003",
    topic: "Core Type System",
    question:
      "Что означает тип never и в каких сценариях он появляется?",
    options: ["Любой тип", "Тип который никогда не возникает", "Null", "Undefined"],
    correct: [1],
    explanation:
      "never означает отсутствие значения. Используется в exhaustive checks и функциях, которые не возвращают значение.",
  },
  {
    id: "ts-004",
    topic: "Core Type System",
    question:
      "В чём разница между union и intersection типами? Когда применять каждый?",
    options: [
      "Одинаковы",
      "Union объединяет, intersection пересекает",
      "Intersection проще",
      "Union быстрее",
    ],
    correct: [1],
    explanation:
      "Union — выбор одного из типов. Intersection — объединение всех свойств. Используются для разных задач моделирования данных.",
  },

  // NEW: Question about void, never, unknown comparison (from Page 30-34)
  {
    id: "ts-019",
    topic: "Core Type System",
    question:
      "Сравните типы void, never и unknown. В каких ситуациях каждый из них наиболее уместен?",
    options: [
      "void - для функций без возврата, never - для функций с ошибкой, unknown - для данных с неизвестным типом",
      "Все они взаимозаменяемы",
      "void - для чисел, never - для строк, unknown - для объектов",
      "void и never - одно и то же, unknown - их альтернатива",
    ],
    correct: [0],
    explanation:
      "void используется для функций, которые ничего не возвращают. never — для функций, которые никогда не завершаются (например, выбрасывают ошибку). unknown — безопасная альтернатива any, требующая проверки типа перед использованием.",
  },

  {
    id: "ts-005",
    topic: "Advanced Types & Generics",
    question:
      "Что такое generics и какие задачи они решают? Приведите пример с ограничением.",
    options: ["Специальный тип", "Переменная типа", "Функция", "Класс"],
    correct: [1],
    explanation:
      "Generics позволяют писать переиспользуемый код с сохранением типизации. Можно ограничивать через extends. Используются в API и библиотеках.",
  },
  {
    id: "ts-006",
    topic: "Advanced Types & Generics",
    question: "Как работают mapped types и где они применяются?",
    options: ["Массив типов", "Итерация по ключам типа", "Функция", "Класс"],
    correct: [1],
    explanation:
      "Mapped types проходят по ключам типа и создают новый тип. Основа utility типов (Partial, Readonly).",
  },
  {
    id: "ts-007",
    topic: "Advanced Types & Generics",
    question: "Что такое conditional types и как они используются?",
    options: ["if в JS", "Типы с условиями", "Функции", "Объекты"],
    correct: [1],
    explanation:
      "Conditional types позволяют выбирать тип на основе условия (T extends U ? X : Y). Используются для сложной логики типов.",
  },
  {
    id: "ts-008",
    topic: "Advanced Types & Generics",
    question: "Что делает infer в conditional types?",
    options: ["Удаляет тип", "Выводит тип", "Создает тип", "Игнорирует тип"],
    correct: [1],
    explanation:
      "infer позволяет извлекать типы внутри условных типов. Часто используется в utility типах.",
  },
  {
    id: "ts-009",
    topic: "Advanced Types & Generics",
    question: "Что делают keyof и indexed access types?",
    options: ["Удаляют ключи", "Работают с ключами типов", "Создают массив", "Создают DOM"],
    correct: [1],
    explanation:
      "keyof возвращает ключи типа, а T[K] позволяет получить тип значения по ключу.",
  },

  {
    id: "ts-010",
    topic: "Type Safety & Narrowing",
    question:
      "Что такое type narrowing и какие способы его реализации вы знаете?",
    options: ["Удаление типов", "Сужение типов", "Расширение типов", "Игнорирование типов"],
    correct: [1],
    explanation:
      "Type narrowing — уточнение типа через typeof, instanceof, in и кастомные guards.",
  },
  {
    id: "ts-011",
    topic: "Type Safety & Narrowing",
    question:
      "Что такое type guards и как написать пользовательский guard?",
    options: ["Функция проверки типов", "CSS класс", "JS метод", "Тип данных"],
    correct: [0],
    explanation:
      "Type guards помогают TS понять конкретный тип. Пользовательский guard возвращает arg is Type.",
  },
  {
    id: "ts-012",
    topic: "Type Safety & Narrowing",
    question:
      "Как работает type inference и когда он может привести к проблемам?",
    options: [
      "Не работает",
      "Автоматический вывод типов",
      "Удаляет типы",
      "Создает типы вручную",
    ],
    correct: [1],
    explanation:
      "TS выводит типы автоматически. Проблемы возникают с пустыми значениями и сложными generics.",
  },
  {
    id: "ts-013",
    topic: "Type Safety & Narrowing",
    question: "В чем разница между readonly и const?",
    options: ["Одинаковы", "readonly для свойств", "const для объектов", "нет разницы"],
    correct: [1],
    explanation:
      "readonly защищает свойства, const — переменные. readonly не делает объект полностью immutable.",
  },

  {
    id: "ts-020",
    topic: "Advanced Types & Generics",
    question:
      "Что такое перегрузка функций (function overloading) в TypeScript и зачем она нужна?",
    options: [
      "Возможность объявить несколько функций с одним именем",
      "Способ объявить несколько сигнатур для одной функции с разными типами аргументов",
      "Создание нескольких экземпляров функции",
      "Переопределение встроенных функций",
    ],
    correct: [1],
    explanation:
      "Перегрузка позволяет объявить несколько сигнатур вызова функции с разными типами аргументов и возвращаемых значений. Это улучшает типизацию и подсказки в IDE, сохраняя единую реализацию.",
  },


  {
    id: "ts-021",
    topic: "Architecture & Ecosystem",
    question:
      "Что такое декораторы в TypeScript? В каких фреймворках они широко используются и как их включить?",
    options: [
      "Это специальный синтаксис для добавления метаданных к классам, методам и свойствам",
      "Это способ создания CSS-стилей",
      "Это библиотека для работы с DOM",
      "Это альтернативный способ объявления переменных",
    ],
    correct: [0],
    explanation:
      "Декораторы — это экспериментальная возможность для добавления метаданных и изменения поведения классов, методов, свойств. Широко используются в Angular (@Component, @Injectable). Для включения нужен флаг experimentalDecorators в tsconfig.json.",
  },

  {
    id: "ts-022",
    topic: "Architecture & Ecosystem",
    question:
      "В чем разница между внутренними (internal modules) и внешними (external modules) модулями в TypeScript?",
    options: [
      "Нет разницы, это одно и то же",
      "Внутренние модули — это namespace, внешние — модули ES6 с import/export",
      "Внутренние модули используются только в браузере, внешние — только в Node.js",
      "Внешние модули устарели",
    ],
    correct: [1],
    explanation:
      "Внутренние модули (сейчас namespace) группируют код внутри одного файла и могут загрязнять глобальную область. Внешние модули — это современный стандарт, где каждый файл является модулем с собственной областью видимости, использующий import/export.",
  },

  {
    id: "ts-023",
    topic: "Architecture & Ecosystem",
    question:
      "Для чего используется ключевое слово declare в TypeScript?",
    options: [
      "Для объявления переменных, которые существуют во внешнем окружении (например, в глобальных скриптах)",
      "Для создания новых типов данных",
      "Для объявления функций, которые будут использоваться только внутри класса",
      "Это синоним для const",
    ],
    correct: [0],
    explanation:
      "declare используется для описания сущностей, которые уже существуют во внешнем коде (глобальные переменные, JS-библиотеки). Это говорит компилятору TypeScript, что реализация существует где-то еще, и не нужно выдавать ошибку.",
  },

  {
    id: "ts-024",
    topic: "Architecture & Ecosystem",
    question:
      "Какие элементы объектно-ориентированного программирования поддерживаются в TypeScript?",
    options: [
      "Только классы и наследование",
      "Классы, наследование, инкапсуляция, абстракция, интерфейсы, полиморфизм, generics",
      "Только интерфейсы и generics",
      "TypeScript не поддерживает ООП",
    ],
    correct: [1],
    explanation:
      "TypeScript поддерживает все ключевые элементы ООП: классы, наследование, инкапсуляцию (public, private, protected), абстракцию (abstract классы), интерфейсы, полиморфизм, геттеры/сеттеры, статические члены и generics.",
  },

  {
    id: "ts-025",
    topic: "Advanced Types & Generics",
    question:
      "Какие utility типы используются для трансформации свойств объекта: Partial, Required, Pick, Omit?",
    options: [
      "Partial делает все свойства обязательными, Required — необязательными",
      "Partial делает свойства необязательными, Required — обязательными, Pick — выбирает подмножество, Omit — исключает",
      "Все они делают одно и то же",
      "Pick и Omit используются только для массивов",
    ],
    correct: [1],
    explanation:
      "Partial<T> делает все свойства необязательными. Required<T> — наоборот, обязательными. Pick<T, K> создает тип с выбранными ключами, а Omit<T, K> — исключает указанные ключи.",
  },

  {
    id: "ts-026",
    topic: "Architecture & Ecosystem",
    question:
      "Что делает опция noImplicitAny в tsconfig.json и почему ее рекомендуется включать?",
    options: [
      "Запрещает использовать any в коде",
      "Запрещает неявное присвоение типа any, заставляя явно указывать типы",
      "Автоматически удаляет any из кода",
      "Делает any более безопасным",
    ],
    correct: [1],
    explanation:
      "noImplicitAny запрещает TypeScript неявно выводить тип any. Если компилятор не может вывести тип, и вы не указали его явно, будет ошибка. Это повышает типобезопасность и предсказуемость кода.",
  },

  {
    id: "ts-014",
    topic: "Architecture & Ecosystem",
    question:
      "Что такое utility types и как они используются в реальных проектах?",
    options: ["Специальные функции", "Встроенные типы", "CSS утилиты", "API методы"],
    correct: [1],
    explanation:
      "Utility types (Partial, Pick, Omit) позволяют переиспользовать и трансформировать типы.",
  },
  {
    id: "ts-015",
    topic: "Architecture & Ecosystem",
    question:
      "Какие проблемы есть у enum и какие альтернативы используются?",
    options: ["Нет проблем", "Проблемы с runtime", "Слишком быстрые", "Не используются"],
    correct: [1],
    explanation:
      "Enums увеличивают bundle. Часто заменяются union типами или const объектами.",
  },
  {
    id: "ts-016",
    topic: "Architecture & Ecosystem",
    question: "Что такое declaration merging и где это применяется?",
    options: ["Удаление типов", "Объединение интерфейсов", "Создание типов", "JS функция"],
    correct: [1],
    explanation:
      "Позволяет расширять интерфейсы. Часто используется в библиотеках.",
  },
  {
    id: "ts-017",
    topic: "Architecture & Ecosystem",
    question:
      "Какие ключевые настройки tsconfig важны для production?",
    options: ["Любые", "strict", "random", "none"],
    correct: [1],
    explanation:
      "strict, target, module, esModuleInterop влияют на безопасность и сборку.",
  },
  {
    id: "ts-018",
    topic: "Architecture & Ecosystem",
    question: "Как вы проектируете типизацию в большом приложении?",
    options: ["Не проектирую", "Использую строгую типизацию", "any везде", "копирую код"],
    correct: [1],
    explanation:
      "Используются DTO, generics, разделение типов, избегание any. Важно масштабирование.",
  },
];