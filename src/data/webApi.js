export const webApiQuestions = [
/* ================= RENDERING ================= */

{
  id: "render-001",
  topic: "Rendering",
  question: "Что происходит первым в Critical Rendering Path?",
  options: ["Layout", "Parsing HTML", "Paint", "JS execution"],
  correct: [1],
  explanation: "CRP начинается с парсинга HTML, на основе которого строится DOM."
},
{
  id: "render-002",
  topic: "Rendering",
  question: "Что блокирует рендеринг страницы?",
  options: ["async script", "defer script", "CSS", "Images"],
  correct: [2],
  explanation: "CSS блокирует рендер, так как браузеру нужен CSSOM."
},
{
  id: "render-003",
  topic: "Rendering",
  question: "Основное преимущество Streaming SSR?",
  options: ["Меньше JS", "HTML приходит частями", "Нет гидрации", "Нет серверной нагрузки"],
  correct: [1],
  explanation: "Streaming SSR позволяет рендерить страницу по мере получения HTML."
},
{
  id: "render-004",
  topic: "Rendering",
  question: "Что такое гидрация?",
  options: [
    "Генерация HTML на сервере",
    "Привязка JS к серверному HTML",
    "Сжатие HTML",
    "Кэширование DOM"
  ],
  correct: [1],
  explanation: "Гидрация — активация серверного HTML с помощью JS."
},
{
  id: "render-005",
  topic: "Rendering",
  question: "Что такое paint в Critical Rendering Path?",
  options: ["Построение DOM", "Отрисовка пикселей на экране", "Сборка CSSOM", "Выполнение JS"],
  correct: [1],
  explanation: "Paint — это процесс отрисовки элементов на экране после layout."
},
{
  id: "render-006",
  topic: "Rendering",
  question: "Что такое compositing?",
  options: ["Объединение слоёв страницы", "Парсинг HTML", "Сборка CSSOM", "Асинхронный JS"],
  correct: [0],
  explanation: "Compositing объединяет слои в финальное изображение на экране."
},
{
  id: "render-007",
  topic: "Rendering",
  question: "Что делает layout (reflow)?",
  options: ["Вычисляет размеры и позиции элементов", "Отрисовывает пиксели", "Парсит HTML", "Объединяет слои"],
  correct: [0],
  explanation: "Layout (reflow) вычисляет геометрию элементов на странице."
},
{
  id: "render-008",
  topic: "Rendering",
  question: "Что из перечисленного ускоряет CRP?",
  options: ["Меньше CSS", "Больше изображений", "Тяжёлые шрифты", "Inline JS в <head>"],
  correct: [0],
  explanation: "Меньше CSS сокращает время построения CSSOM и ускоряет рендер."
},
{
  id: "render-009",
  topic: "Rendering",
  question: "Что такое render-blocking JS?",
  options: ["JS, который блокирует построение DOM", "JS, который выполняется асинхронно", "JS, который не влияет на рендер", "JS внутри defer"],
  correct: [0],
  explanation: "Render-blocking JS мешает построению страницы до своего выполнения."
},
{
  id: "render-010",
  topic: "Rendering",
  question: "Что делает async script?",
  options: ["Выполняется параллельно и не блокирует CRP", "Блокирует CRP", "Привязывается к серверному HTML", "Кэшируется браузером"],
  correct: [0],
  explanation: "Async скрипт загружается и выполняется параллельно без блокировки CRP."
},
{
  id: "render-011",
  topic: "Rendering",
  question: "Что делает defer script?",
  options: ["Загружается параллельно, выполняется после парсинга HTML", "Блокирует CRP", "Сразу выполняется при загрузке", "Кэширует CSSOM"],
  correct: [0],
  explanation: "Defer скрипт выполняется после построения DOM."
},
{
  id: "render-012",
  topic: "Rendering",
  question: "Что такое FOUC?",
  options: ["Flash of Unstyled Content", "Ошибка парсинга HTML", "Проблема с layout", "Баг в гидрации"],
  correct: [0],
  explanation: "FOUC — моментальный показ неоформленного контента до применения CSS."
},
{
  id: "render-013",
  topic: "Rendering",
  question: "Что из ниже перечисленного является тяжелым для CRP?",
  options: ["Большие CSS файлы", "Inline SVG", "Минимальный JS", "Асинхронные шрифты"],
  correct: [0],
  explanation: "Большие CSS-файлы блокируют построение CSSOM и задерживают рендер."
},
{
  id: "render-014",
  topic: "Rendering",
  question: "Что делает paint performance optimization?",
  options: ["Минимизирует количество перерисовок", "Ускоряет парсинг HTML", "Удаляет JS", "Кэширует изображения"],
  correct: [0],
  explanation: "Оптимизация paint уменьшает количество повторных перерисовок."
},
{
  id: "render-015",
  topic: "Rendering",
  question: "Что делает layout thrashing?",
  options: ["Частые перерисовки и reflow", "Асинхронная загрузка скриптов", "Кэширование ресурсов", "Streaming SSR"],
  correct: [0],
  explanation: "Layout thrashing возникает при частых изменениях DOM, вызывающих reflow."
},
{
  id: "render-016",
  topic: "Rendering",
  question: "Что такое first paint?",
  options: ["Первый момент, когда браузер рисует что-либо на экране", "Полная загрузка CSS", "Первый JS execution", "Загрузка шрифтов"],
  correct: [0],
  explanation: "First Paint — первый визуальный рендеринг контента."
},
{
  id: "render-017",
  topic: "Rendering",
  question: "Что такое first contentful paint (FCP)?",
  options: ["Показ первого видимого контента", "Полная загрузка страницы", "Рендер DOM", "Выполнение JS"],
  correct: [0],
  explanation: "FCP показывает момент, когда пользователь видит первый текст или изображение."
},
{
  id: "render-018",
  topic: "Rendering",
  question: "Что такое layout shift?",
  options: ["Непредсказуемое смещение элементов", "Ошибка выполнения JS", "Парсинг CSSOM", "Отложенный fetch"],
  correct: [0],
  explanation: "Layout shift — смещение элементов, ухудшающее UX."
},
{
  id: "render-019",
  topic: "Rendering",
  question: "Что помогает уменьшить layout shift?",
  options: ["Фиксированные размеры изображений и видео", "Асинхронный JS", "Streaming SSR", "Удаление CSS"],
  correct: [0],
  explanation: "Указание размеров изображений предотвращает неожиданные сдвиги."
},
{
  id: "render-020",
  topic: "Rendering",
  question: "Что такое critical CSS?",
  options: ["CSS, необходимый для первого экрана", "CSS для всех страниц", "Асинхронный JS", "HTML шаблон"],
  correct: [0],
  explanation: "Critical CSS нужен для быстрого рендера выше линии экрана."
},
{
  id: "render-021",
  topic: "Rendering",
  question: "Что такое non-critical CSS?",
  options: ["CSS для последующих экранов или страниц", "CSS первого экрана", "Асинхронный JS", "HTML шаблон"],
  correct: [0],
  explanation: "Non-critical CSS загружается после рендера критического контента."
},
{
  id: "render-022",
  topic: "Rendering",
  question: "Что такое incremental rendering?",
  options: ["Постепенная отрисовка контента", "Полная перерисовка страницы", "Парсинг HTML", "Кэширование JS"],
  correct: [0],
  explanation: "Incremental rendering позволяет показывать части страницы по мере готовности."
},
{
  id: "render-023",
  topic: "Rendering",
  question: "Что такое lazy rendering?",
  options: ["Отложенная отрисовка элементов вне экрана", "Полная загрузка DOM сразу", "Парсинг CSS", "Сборка JS"],
  correct: [0],
  explanation: "Lazy rendering улучшает производительность за счёт отложенной отрисовки невидимых элементов."
},
{
  id: "render-024",
  topic: "Rendering",
  question: "Что такое repaint?",
  options: ["Перерисовка пикселей без изменения layout", "Полная сборка DOM", "Загрузка CSS", "Streaming SSR"],
  correct: [0],
  explanation: "Repaint происходит, когда меняются стили, но геометрия не изменяется."
},
{
  id: "render-025",
  topic: "Rendering",
  question: "Что такое reflow?",
  options: ["Пересчёт геометрии элементов при изменении размера или позиции", "Перерисовка пикселей", "Парсинг HTML", "Асинхронный JS"],
  correct: [0],
  explanation: "Reflow — перерасчёт layout элементов страницы."
},


/* ================= PERFORMANCE ================= */

{
  id: "perf-001",
  topic: "Performance",
  question: "Что измеряет LCP?",
  options: [
    "Время загрузки сайта",
    "Время до первого байта",
    "Время загрузки крупнейшего элемента",
    "Время до интерактивности"
  ],
  correct: [2],
  explanation: "LCP показывает, когда основной контент стал видим."
},
{
  id: "perf-002",
  topic: "Performance",
  question: "INP пришёл на замену?",
  options: ["LCP", "FID", "CLS", "TTFB"],
  correct: [1],
  explanation: "INP заменил FID как метрику отзывчивости."
},
{
  id: "perf-003",
  topic: "Performance",
  question: "Что чаще всего вызывает CLS?",
  options: [
    "Изображения без размеров",
    "transform",
    "opacity",
    "requestAnimationFrame"
  ],
  correct: [0],
  explanation: "Поздняя загрузка изображений без размеров вызывает смещение контента."
},
{
  id: "perf-004",
  topic: "Performance",
  question: "preload используется для…",
  options: [
    "Будущих страниц",
    "Критичных ресурсов текущей страницы",
    "Lazy loading",
    "Асинхронного JS"
  ],
  correct: [1],
  explanation: "preload — для критичных ресурсов текущего экрана."
},
{
  id: "perf-005",
  topic: "Performance",
  question: "Что измеряет FID?",
  options: [
    "Время до интерактивности",
    "Время до первого байта",
    "Полная загрузка страницы",
    "Скорость рендеринга"
  ],
  correct: [0],
  explanation: "FID (First Input Delay) измеряет задержку реакции страницы на первый пользовательский ввод."
},
{
  id: "perf-006",
  topic: "Performance",
  question: "Что замедляет main thread?",
  options: [
    "Долгие JS скрипты",
    "CSS",
    "Изображения",
    "Шрифты"
  ],
  correct: [0],
  explanation: "Долгие JS скрипты блокируют основной поток браузера."
},
{
  id: "perf-007",
  topic: "Performance",
  question: "Что такое TTI (Time to Interactive)?",
  options: [
    "Время до полной интерактивности страницы",
    "Время загрузки CSS",
    "Время до первого байта",
    "Отрисовка первого контента"
  ],
  correct: [0],
  explanation: "TTI — момент, когда страница полностью интерактивна."
},
{
  id: "perf-008",
  topic: "Performance",
  question: "Что такое long tasks в Chrome DevTools?",
  options: [
    "Задачи >50ms, блокирующие main thread",
    "Короткие задачи JS",
    "CSS-анимации",
    "Сетевые запросы"
  ],
  correct: [0],
  explanation: "Long tasks — это длинные задачи, блокирующие основной поток и замедляющие интерфейс."
},
{
  id: "perf-009",
  topic: "Performance",
  question: "Что делает lazy loading изображений?",
  options: [
    "Загружает изображения только когда они попадают в viewport",
    "Загружает все изображения сразу",
    "Блокирует main thread",
    "Кэширует изображения в памяти"
  ],
  correct: [0],
  explanation: "Lazy loading уменьшает нагрузку на сеть и ускоряет рендер первого экрана."
},
{
  id: "perf-010",
  topic: "Performance",
  question: "Что такое resource hints?",
  options: [
    "Подсказки браузеру о приоритетной загрузке ресурсов",
    "CSS-анимации",
    "JS функции",
    "Ошибки сети"
  ],
  correct: [0],
  explanation: "Resource hints (preload, prefetch, dns-prefetch) помогают ускорить загрузку ресурсов."
},
{
  id: "perf-011",
  topic: "Performance",
  question: "Что такое HTTP/2 server push?",
  options: [
    "Отправка ресурсов клиенту заранее",
    "Отложенная загрузка CSS",
    "Асинхронный JS",
    "Кэширование HTML"
  ],
  correct: [0],
  explanation: "Server push позволяет серверу отправлять ресурсы до запроса браузера."
},
{
  id: "perf-012",
  topic: "Performance",
  question: "Что такое main thread blocking?",
  options: [
    "Когда JS блокирует основной поток браузера",
    "Когда CSSOM блокирует DOM",
    "Когда сервер не отвечает",
    "Когда изображения не загружены"
  ],
  correct: [0],
  explanation: "Main thread blocking возникает при выполнении тяжёлого JS, мешающего интерактивности."
},
{
  id: "perf-013",
  topic: "Performance",
  question: "Что такое Cumulative Layout Shift (CLS)?",
  options: [
    "Суммарное смещение элементов во время загрузки",
    "Время до интерактивности",
    "Время до первого байта",
    "Полная отрисовка страницы"
  ],
  correct: [0],
  explanation: "CLS измеряет визуальные смещения элементов, влияющие на UX."
},
{
  id: "perf-014",
  topic: "Performance",
  question: "Что помогает уменьшить LCP?",
  options: [
    "Оптимизация крупных изображений и шрифтов",
    "Удаление JS",
    "Асинхронные CSS",
    "Streaming SSR"
  ],
  correct: [0],
  explanation: "Оптимизация крупных ресурсов ускоряет отображение основного контента."
},
{
  id: "perf-015",
  topic: "Performance",
  question: "Что такое preconnect?",
  options: [
    "Соединение с сервером заранее для ускорения загрузки",
    "Отложенный JS",
    "Кэширование CSS",
    "Удаление изображений"
  ],
  correct: [0],
  explanation: "Preconnect позволяет браузеру заранее установить соединение с сервером."
},
{
  id: "perf-016",
  topic: "Performance",
  question: "Что такое defer parsing of JS?",
  options: [
    "Отложенный парсинг JS для ускорения CRP",
    "Сразу выполнить JS",
    "Удалить JS",
    "Кэшировать JS"
  ],
  correct: [0],
  explanation: "Defer parsing откладывает выполнение JS, чтобы не блокировать рендеринг."
},
{
  id: "perf-017",
  topic: "Performance",
  question: "Что такое critical rendering path optimization?",
  options: [
    "Минимизация блокирующих ресурсов для ускорения первого экрана",
    "Оптимизация CSS-анимаций",
    "Асинхронный JS",
    "Удаление изображений"
  ],
  correct: [0],
  explanation: "Оптимизация CRP уменьшает время до отрисовки видимого контента."
},
{
  id: "perf-018",
  topic: "Performance",
  question: "Что измеряет Speed Index?",
  options: [
    "Визуальную скорость отображения страницы",
    "Время до первого байта",
    "Размер страницы",
    "Кол-во запросов"
  ],
  correct: [0],
  explanation: "Speed Index оценивает, как быстро видимый контент появляется на экране."
},
{
  id: "perf-019",
  topic: "Performance",
  question: "Что такое lazy hydration?",
  options: [
    "Отложенная активация JS на серверном HTML",
    "Полная гидрация сразу",
    "Удаление JS",
    "Кэширование DOM"
  ],
  correct: [0],
  explanation: "Lazy hydration улучшает производительность SPA, откладывая гидрацию невидимых частей."
},
{
  id: "perf-020",
  topic: "Performance",
  question: "Что такое resource timing API?",
  options: [
    "API для измерения времени загрузки ресурсов",
    "API для JS функций",
    "API для CSS",
    "API для сетевых ошибок"
  ],
  correct: [0],
  explanation: "Resource Timing API позволяет анализировать скорость загрузки каждого ресурса страницы."
},
{
  id: "perf-021",
  topic: "Performance",
  question: "Что такое preload key requests?",
  options: [
    "Предварительная загрузка критичных ресурсов для улучшения LCP",
    "Отложенный JS",
    "Lazy loading изображений",
    "Streaming SSR"
  ],
  correct: [0],
  explanation: "Preload key requests ускоряет рендеринг критичных элементов страницы."
},
{
  id: "perf-022",
  topic: "Performance",
  question: "Что такое minification?",
  options: [
    "Сжатие JS и CSS для уменьшения размера",
    "Оптимизация изображений",
    "Асинхронная загрузка CSS",
    "Удаление DOM элементов"
  ],
  correct: [0],
  explanation: "Минификация уменьшает размер файлов и ускоряет загрузку."
},
{
  id: "perf-023",
  topic: "Performance",
  question: "Что такое tree shaking?",
  options: [
    "Удаление неиспользуемого кода из бандла",
    "Оптимизация CSS",
    "Lazy loading JS",
    "Асинхронная гидрация"
  ],
  correct: [0],
  explanation: "Tree shaking удаляет неиспользуемый код для уменьшения размера JS."
},
{
  id: "perf-024",
  topic: "Performance",
  question: "Что такое HTTP caching?",
  options: [
    "Использование кэша браузера и серверные заголовки для ускорения загрузки",
    "Асинхронная загрузка JS",
    "Отложенная отрисовка",
    "Удаление ресурсов"
  ],
  correct: [0],
  explanation: "HTTP caching уменьшает количество сетевых запросов и ускоряет загрузку страниц."
},

/* ================= BROWSER ================= */

{
  id: "browser-001",
  topic: "Browser",
  question: "Из чего строится Render Tree?",
  options: ["DOM", "CSSOM", "DOM + CSSOM", "JS Heap"],
  correct: [2],
  explanation: "Render Tree строится из DOM и CSSOM."
},
{
  id: "browser-002",
  topic: "Browser",
  question: "Что вызывает reflow?",
  options: ["Изменение width", "transform", "opacity", "will-change"],
  correct: [0],
  explanation: "Reflow — пересчёт геометрии элементов."
},
{
  id: "browser-003",
  topic: "Browser",
  question: "Что не блокирует main thread?",
  options: ["JS execution", "Layout", "Web Worker", "Style recalculation"],
  correct: [2],
  explanation: "Web Worker работает в отдельном потоке."
},
{
  id: "browser-004",
  topic: "Browser",
  question: "Что такое DOM?",
  options: [
    "Модель представления HTML документа",
    "Стили CSS",
    "JS Heap",
    "Сетевой стек"
  ],
  correct: [0],
  explanation: "DOM — это Document Object Model, структура HTML-документа, доступная JS."
},
{
  id: "browser-005",
  topic: "Browser",
  question: "Что такое CSSOM?",
  options: [
    "Объектная модель CSS, построенная браузером",
    "Сетевой кэш CSS",
    "DOM элементы",
    "JS heap"
  ],
  correct: [0],
  explanation: "CSSOM — объектная модель стилей, построенная браузером для рендеринга."
},
{
  id: "browser-006",
  topic: "Browser",
  question: "Что такое Critical Rendering Path?",
  options: [
    "Последовательность шагов, чтобы браузер отобразил страницу",
    "Асинхронная загрузка JS",
    "Кэширование CSS",
    "Web Worker"
  ],
  correct: [0],
  explanation: "CRP — путь, который браузер проходит для рендеринга видимого контента."
},
{
  id: "browser-007",
  topic: "Browser",
  question: "Что такое repaint?",
  options: [
    "Перерисовка элементов без изменения layout",
    "Полный reflow",
    "Парсинг HTML",
    "Асинхронный fetch"
  ],
  correct: [0],
  explanation: "Repaint происходит при изменении цветов, шрифтов, теней без пересчета геометрии."
},
{
  id: "browser-008",
  topic: "Browser",
  question: "Что такое reflow?",
  options: [
    "Пересчет размеров и позиций элементов",
    "Отрисовка пикселей",
    "Загрузка CSS",
    "Асинхронный JS"
  ],
  correct: [0],
  explanation: "Reflow — перерасчет layout при изменении размеров или структуры DOM."
},
{
  id: "browser-009",
  topic: "Browser",
  question: "Что из ниже перечисленного может вызвать reflow?",
  options: [
    "Изменение ширины блока",
    "opacity",
    "transform",
    "background-color"
  ],
  correct: [0],
  explanation: "Изменение размеров элементов вызывает пересчет layout."
},
{
  id: "browser-010",
  topic: "Browser",
  question: "Что из ниже перечисленного вызывает repaint, но не reflow?",
  options: [
    "Изменение цвета текста",
    "Изменение ширины блока",
    "Изменение position",
    "Изменение display"
  ],
  correct: [0],
  explanation: "Изменение цвета или фона требует перерисовки, но геометрия элементов не меняется."
},
{
  id: "browser-011",
  topic: "Browser",
  question: "Что такое layout thrashing?",
  options: [
    "Частые перерисовки и reflow при чтении и изменении DOM",
    "Кэширование ресурсов",
    "Асинхронная загрузка скриптов",
    "Lazy loading"
  ],
  correct: [0],
  explanation: "Layout thrashing замедляет страницу из-за постоянных перерисовок."
},
{
  id: "browser-012",
  topic: "Browser",
  question: "Что такое main thread?",
  options: [
    "Главный поток браузера, где выполняется JS и рендеринг",
    "Поток Web Worker",
    "Сетевой поток",
    "GPU поток"
  ],
  correct: [0],
  explanation: "Main thread отвечает за выполнение JS, обработку событий и рендеринг."
},
{
  id: "browser-013",
  topic: "Browser",
  question: "Что не блокирует main thread?",
  options: [
    "Web Worker",
    "Выполнение JS",
    "Reflow",
    "Style recalculation"
  ],
  correct: [0],
  explanation: "Web Worker работает в отдельном потоке."
},
{
  id: "browser-014",
  topic: "Browser",
  question: "Что такое event loop?",
  options: [
    "Механизм, который обрабатывает очередь событий и callback функций",
    "Поток для CSS",
    "Парсер HTML",
    "GPU поток"
  ],
  correct: [0],
  explanation: "Event loop обрабатывает асинхронные события и задачи JS."
},
{
  id: "browser-015",
  topic: "Browser",
  question: "Что такое call stack?",
  options: [
    "Стек вызовов функций JS",
    "Очередь событий",
    "Сетевой стек",
    "GPU буфер"
  ],
  correct: [0],
  explanation: "Call stack хранит текущие вызовы функций, выполняемых в main thread."
},
{
  id: "browser-016",
  topic: "Browser",
  question: "Что такое task queue?",
  options: [
    "Очередь асинхронных задач для event loop",
    "Стек вызовов функций",
    "Render tree",
    "CSSOM"
  ],
  correct: [0],
  explanation: "Task queue хранит задачи, которые должны быть выполнены после текущего call stack."
},
{
  id: "browser-017",
  topic: "Browser",
  question: "Что такое microtask queue?",
  options: [
    "Очередь для промисов и MutationObserver, выполняется перед следующей задачей",
    "Render tree",
    "CSSOM",
    "Call stack"
  ],
  correct: [0],
  explanation: "Microtask queue выполняется после текущей функции и перед следующей задачей из task queue."
},
{
  id: "browser-018",
  topic: "Browser",
  question: "Что такое paint timing?",
  options: [
    "Время отрисовки видимого контента на экране",
    "Сборка DOM",
    "Парсинг CSS",
    "Асинхронный JS"
  ],
  correct: [0],
  explanation: "Paint timing показывает, когда пользователь видит первый визуальный контент."
},
{
  id: "browser-019",
  topic: "Browser",
  question: "Что такое compositing layer?",
  options: [
    "Отдельный слой для GPU рендеринга",
    "DOM элемент",
    "CSSOM объект",
    "JS объект"
  ],
  correct: [0],
  explanation: "Compositing layer позволяет GPU рендерить элементы отдельно для производительности."
},
{
  id: "browser-020",
  topic: "Browser",
  question: "Что делает GPU в рендеринге?",
  options: [
    "Рисует compositing layers и анимации",
    "Парсит HTML",
    "Вычисляет layout",
    "Выполняет JS"
  ],
  correct: [0],
  explanation: "GPU используется для отрисовки слоёв и аппаратного ускорения анимаций."
},
{
  id: "browser-021",
  topic: "Browser",
  question: "Что такое requestAnimationFrame?",
  options: [
    "API для синхронной отрисовки анимаций с кадровой частотой браузера",
    "Асинхронный fetch",
    "Lazy loading JS",
    "Рендер DOM"
  ],
  correct: [0],
  explanation: "requestAnimationFrame позволяет синхронизировать анимации с рендером браузера."
},
{
  id: "browser-022",
  topic: "Browser",
  question: "Что такое passive event listener?",
  options: [
    "Событие, которое не блокирует scroll",
    "Событие с задержкой",
    "Асинхронное событие JS",
    "Перерисовка DOM"
  ],
  correct: [0],
  explanation: "Passive listener сообщает браузеру, что событие не вызывает preventDefault и можно скроллить быстрее."
},
{
  id: "browser-023",
  topic: "Browser",
  question: "Что такое long tasks?",
  options: [
    "Задачи >50ms, блокирующие main thread",
    "CSS animation",
    "Repaint",
    "Render tree"
  ],
  correct: [0],
  explanation: "Long tasks мешают интерактивности и отзывчивости страницы."
},

/* ================= NETWORK ================= */

{
  id: "net-001",
  topic: "Network",
  question: "HTTP/2 даёт преимущество за счёт…",
  options: [
    "Мультиплексирования",
    "Один запрос за раз",
    "Отсутствия заголовков",
    "Только HTTPS"
  ],
  correct: [0],
  explanation: "HTTP/2 поддерживает мультиплексирование запросов."
},
{
  id: "net-002",
  topic: "Network",
  question: "Что такое TTFB?",
  options: [
    "Время полной загрузки",
    "Время до первого байта",
    "Время JS выполнения",
    "Время DNS"
  ],
  correct: [1],
  explanation: "TTFB — время до получения первого байта ответа."
},

/* ================= CSS ================= */

{
  id: "css-001",
  topic: "CSS",
  question: "Что НЕ вызывает layout?",
  options: ["margin", "padding", "transform", "font-size"],
  correct: [2],
  explanation: "transform не влияет на поток документа."
},
{
  id: "css-002",
  topic: "CSS",
  question: "Что имеет наибольшую специфичность?",
  options: [".class", "#id", "div", "div span"],
  correct: [1],
  explanation: "ID имеет более высокую специфичность."
},

/* ================= ARCHITECTURE ================= */

{
  id: "arch-001",
  topic: "Architecture",
  question: "Главное преимущество SSG?",
  options: [
    "Данные всегда актуальны",
    "HTML генерируется на каждый запрос",
    "Отдача через CDN",
    "Нет билда"
  ],
  correct: [2],
  explanation: "SSG отлично кэшируется через CDN."
},
{
  id: "arch-002",
  topic: "Architecture",
  question: "Когда лучше использовать CSR?",
  options: [
    "Контентный сайт",
    "SEO критичен",
    "Web-приложение",
    "Лендинг"
  ],
  correct: [2],
  explanation: "CSR лучше подходит для интерактивных SPA."
},

/* ================= STORAGE ================= */

{
  id: "storage-001",
  topic: "Storage",
  question: "Что поддерживает большие объёмы данных?",
  options: ["localStorage", "sessionStorage", "IndexedDB", "Cookies"],
  correct: [2],
  explanation: "IndexedDB предназначен для больших объёмов данных."
},
{
  id: "storage-002",
  topic: "Storage",
  question: "Cookies отправляются…",
  options: [
    "Только клиенту",
    "Только серверу",
    "С каждым HTTP-запросом",
    "Только при POST"
  ],
  correct: [2],
  explanation: "Cookies автоматически отправляются с запросами."
},

/* ================= PWA ================= */

{
  id: "pwa-001",
  topic: "PWA",
  question: "Service Worker может…",
  options: [
    "Работать без HTTPS",
    "Перехватывать fetch",
    "Иметь доступ к DOM",
    "Работать только онлайн"
  ],
  correct: [1],
  explanation: "Service Worker может перехватывать сетевые запросы."
},
{
  id: "pwa-002",
  topic: "PWA",
  question: "Cache First стратегия означает…",
  options: [
    "Сначала сеть",
    "Сначала кэш",
    "Без кэша",
    "Только сервер"
  ],
  correct: [1],
  explanation: "Cache First сначала отдаёт данные из кэша."
}
];
