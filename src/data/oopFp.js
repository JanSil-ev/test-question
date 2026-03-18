export const oopFpQuestions = [
  {
    id: "dom-struct-001",
    topic: "DOM Structure & Traversal",
    question: "Что такое DOM?",
    options: [
      "Библиотека для работы с браузером",
      "Представление HTML/XML документа в виде дерева объектов",
      "Часть JavaScript для анимаций",
      "Способ хранения cookie",
    ],
    correct: [1],
    explanation:
      "DOM (Document Object Model) — это представление HTML/XML документа в виде дерева объектов (узлов), которое JavaScript может читать и изменять.",
  },
  {
    id: "dom-struct-002",
    topic: "DOM Structure & Traversal",
    question: "Какие основные типы узлов существуют в DOM?",
    options: [
      "Только элементы и текст",
      "Элементы, текст, комментарии, документ, тип документа",
      "Только элементы и атрибуты",
      "Только блочные и строчные элементы",
    ],
    correct: [1],
    explanation:
      "Основные типы узлов: ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE (8), DOCUMENT_NODE (9), DOCUMENT_TYPE_NODE (10).",
  },
  {
    id: "dom-struct-003",
    topic: "DOM Structure & Traversal",
    question: "Какое значение nodeType у элемента <div>?",
    options: ["1", "2", "3", "8"],
    correct: [0],
    explanation: "У элемента (ELEMENT_NODE) nodeType = 1. Текст имеет тип 3, комментарии — 8.",
  },
  {
    id: "dom-struct-004",
    topic: "DOM Structure & Traversal",
    question: "Как получить родительский элемент узла?",
    options: [
      "element.parent",
      "element.parentNode или element.parentElement",
      "element.getParent()",
      "element.root",
    ],
    correct: [1],
    explanation:
      "parentNode возвращает родительский узел (любой тип), parentElement возвращает только родителя-элемент.",
  },
  {
    id: "dom-struct-005",
    topic: "DOM Structure & Traversal",
    question: "Какая разница между children и childNodes?",
    options: [
      "children возвращает только элементы, childNodes — все узлы (включая текст и комментарии)",
      "childNodes возвращает только элементы, children — все узлы",
      "Это синонимы, разницы нет",
      "children работает только с <div>, childNodes — с любыми тегами",
    ],
    correct: [0],
    explanation:
      "children — только дочерние элементы (HTMLCollection), childNodes — все дочерние узлы, включая текст и комментарии (NodeList).",
  },
  {
    id: "dom-struct-006",
    topic: "DOM Structure & Traversal",
    question: "Как получить первый дочерний элемент?",
    options: [
      "element.firstChild",
      "element.firstElementChild",
      "element.child(0)",
      "element.getFirstChild()",
    ],
    correct: [1],
    explanation:
      "firstElementChild возвращает первый дочерний элемент (игнорирует текстовые узлы). firstChild может вернуть текст или комментарий.",
  },
  {
    id: "dom-struct-007",
    topic: "DOM Structure & Traversal",
    question: "Как получить соседний элемент справа?",
    options: [
      "element.nextSibling",
      "element.nextElementSibling",
      "element.sibling('next')",
      "element.getNext()",
    ],
    correct: [1],
    explanation:
      "nextElementSibling возвращает следующий элемент-сосед. nextSibling может вернуть текстовый узел.",
  },
  {
    id: "dom-struct-008",
    topic: "DOM Structure & Traversal",
    question: "Какие методы возвращают живую коллекцию HTMLCollection?",
    options: [
      "querySelectorAll",
      "getElementsByTagName и getElementsByClassName",
      "querySelector",
      "Все методы возвращают живые коллекции",
    ],
    correct: [1],
    explanation:
      "getElementsByTagName и getElementsByClassName возвращают живые HTMLCollection. querySelectorAll возвращает статический NodeList.",
  },
  {
    id: "dom-struct-009",
    topic: "DOM Structure & Traversal",
    question: "Что вернет document.querySelectorAll('.class')?",
    options: ["HTMLCollection", "NodeList", "Array", "Object"],
    correct: [1],
    explanation: "querySelectorAll возвращает статический NodeList, который поддерживает forEach.",
  },

  // ================ DOM MANIPULATION (10-19) ================
  {
    id: "dom-manip-010",
    topic: "DOM Manipulation",
    question: "Как создать новый элемент в JavaScript?",
    options: [
      "document.newElement('div')",
      "document.createElement('div')",
      "new Element('div')",
      "document.build('div')",
    ],
    correct: [1],
    explanation: "Метод document.createElement(tagName) создает новый элемент с указанным тегом.",
  },
  {
    id: "dom-manip-011",
    topic: "DOM Manipulation",
    question: "Как добавить созданный элемент в DOM?",
    options: [
      "element.insert()",
      "element.add()",
      "element.appendChild() или element.append()",
      "element.push()",
    ],
    correct: [2],
    explanation:
      "appendChild() добавляет узел в конец, append() современный метод с поддержкой текста и нескольких аргументов.",
  },
  {
    id: "dom-manip-012",
    topic: "DOM Manipulation",
    question: "Какая разница между innerHTML и outerHTML?",
    options: [
      "innerHTML меняет содержимое элемента, outerHTML заменяет сам элемент вместе с содержимым",
      "outerHTML меняет только внешний вид, innerHTML — внутренний",
      "Это синонимы",
      "innerHTML работает только с текстом, outerHTML — с тегами",
    ],
    correct: [0],
    explanation:
      "innerHTML работает внутри элемента, outerHTML заменяет сам элемент (включая его теги).",
  },
  {
    id: "dom-manip-013",
    topic: "DOM Manipulation",
    question: "Что такое атрибут (attribute) и свойство (property)?",
    options: [
      "Это одно и то же",
      "Атрибут — в HTML, свойство — в DOM-объекте после создания",
      "Атрибут — в CSS, свойство — в HTML",
      "Свойство — только для чтения",
    ],
    correct: [1],
    explanation:
      "Атрибуты задаются в HTML (всегда строки), свойства появляются у DOM-объекта после парсинга (могут быть любого типа).",
  },
  {
    id: "dom-manip-014",
    topic: "DOM Manipulation",
    question: "Что произойдет при изменении свойства input.value?",
    options: [
      "Автоматически изменится атрибут value",
      "Атрибут value не изменится, они рассинхронизируются",
      "Выбросится ошибка",
      "Изменится только атрибут, свойство останется прежним",
    ],
    correct: [1],
    explanation:
      "При изменении свойства атрибут не обновляется. Атрибут хранит начальное значение, свойство — текущее.",
  },
  {
    id: "dom-manip-015",
    topic: "DOM Manipulation",
    question: "Как вставить HTML-строку рядом с элементом?",
    options: [
      "element.innerHTML",
      "element.outerHTML",
      "element.insertAdjacentHTML(position, html)",
      "element.addHTML()",
    ],
    correct: [2],
    explanation:
      "insertAdjacentHTML позволяет вставить HTML строку в указанную позицию: beforebegin, afterbegin, beforeend, afterend.",
  },
  {
    id: "dom-manip-016",
    topic: "DOM Manipulation",
    question: "Что делает метод element.prepend()?",
    options: [
      "Добавляет элемент в конец родителя",
      "Добавляет элемент в начало родителя",
      "Удаляет элемент из родителя",
      "Заменяет элемент",
    ],
    correct: [1],
    explanation: "prepend() добавляет узел или текст в начало родительского элемента.",
  },
  {
    id: "dom-manip-017",
    topic: "DOM Manipulation",
    question: "Как получить элемент по ID?",
    options: [
      "document.getElementById('id')",
      "document.querySelector('#id')",
      "Оба варианта работают",
      "Только document.querySelector",
    ],
    correct: [2],
    explanation:
      "Оба метода работают, но getElementById быстрее, а querySelector гибче (поддерживает любые селекторы).",
  },
  {
    id: "dom-manip-018",
    topic: "DOM Manipulation",
    question: "Как удалить обработчик события с элемента?",
    options: [
      "element.removeEventListener(type, handler)",
      "element.off(type, handler)",
      "element.detachEvent(type, handler)",
      "element.stopListening(type, handler)",
    ],
    correct: [0],
    explanation:
      "removeEventListener требует точно такую же функцию и параметры, как при добавлении. Анонимные функции удалить нельзя.",
  },
  {
    id: "dom-manip-019",
    topic: "DOM Manipulation",
    question: "Что делает метод .focus()?",
    options: [
      "Удаляет элемент со страницы",
      "Устанавливает фокус на элементе",
      "Меняет цвет фона",
      "Добавляет обработчик клика",
    ],
    correct: [1],
    explanation:
      "focus() устанавливает фокус на элементе (например, на поле ввода), чтобы пользователь мог сразу начать печатать.",
  },

  // ================ EVENTS (20-35) ================
  {
    id: "events-020",
    topic: "Events",
    question: "Какие существуют способы добавить обработчик события?",
    options: [
      "Только addEventListener",
      "HTML-атрибуты, свойства DOM-объекта (onclick) и addEventListener",
      "Только через HTML-атрибуты",
      "Только через jQuery",
    ],
    correct: [1],
    explanation:
      "Три способа: 1) атрибут HTML (устарел), 2) свойство вроде element.onclick, 3) современный addEventListener.",
  },
  {
    id: "events-021",
    topic: "Events",
    question: "Почему addEventListener лучше свойства onclick?",
    options: [
      "Он быстрее работает",
      "Позволяет назначить несколько обработчиков на одно событие",
      "Он поддерживает только мобильные браузеры",
      "Разницы нет",
    ],
    correct: [1],
    explanation:
      "addEventListener позволяет назначить несколько обработчиков, а onclick перезаписывает предыдущий.",
  },
  {
    id: "events-022",
    topic: "Events",
    question: "Сколько аргументов принимает addEventListener?",
    options: [
      "1 аргумент",
      "2 аргумента",
      "3 аргумента (type, listener, options)",
      "Неограниченное количество",
    ],
    correct: [2],
    explanation:
      "addEventListener принимает 3 аргумента: тип события, функцию-обработчик и объект/флаг настроек (необязательный).",
  },
  {
    id: "events-023",
    topic: "Events",
    question: "Что такое Event Propagation?",
    options: [
      "Создание нового события",
      "Путь события через DOM: capturing → target → bubbling",
      "Удаление обработчика события",
      "Генерация случайных событий",
    ],
    correct: [1],
    explanation:
      "Event Propagation — это распространение события: сначала фаза перехвата (capturing), потом цель (target), затем всплытие (bubbling).",
  },
  {
    id: "events-024",
    topic: "Events",
    question: "Что такое делегирование событий (Event Delegation)?",
    options: [
      "Назначение обработчика каждому элементу отдельно",
      "Обработчик на родителе, который ловит события от детей благодаря всплытию",
      "Передача события другому элементу",
      "Создание цепочки событий",
    ],
    correct: [1],
    explanation:
      "Делегирование — обработчик вешается на родителя и ловит события от детей. Экономит память и работает с динамическими элементами.",
  },
  {
    id: "events-025",
    topic: "Events",
    question: "Какая разница между event.target и event.currentTarget?",
    options: [
      "Это одно и то же",
      "target — элемент, где произошло событие; currentTarget — элемент с обработчиком",
      "target — родитель; currentTarget — ребенок",
      "target — старый элемент; currentTarget — новый",
    ],
    correct: [1],
    explanation:
      "target указывает на элемент, который инициировал событие. currentTarget — на элемент, на котором висит обработчик.",
  },
  {
    id: "events-026",
    topic: "Events",
    question: "Что делает e.preventDefault()?",
    options: [
      "Останавливает всплытие события",
      "Отменяет действие браузера по умолчанию",
      "Удаляет обработчик события",
      "Останавливает все события на странице",
    ],
    correct: [1],
    explanation:
      "preventDefault отменяет стандартное поведение браузера: переход по ссылке, отправку формы, выделение текста и т.д.",
  },
  {
    id: "events-027",
    topic: "Events",
    question: "Что делает e.stopPropagation()?",
    options: [
      "Отменяет действие по умолчанию",
      "Останавливает всплытие события к родителям",
      "Удаляет все обработчики на элементе",
      "Блокирует клики",
    ],
    correct: [1],
    explanation:
      "stopPropagation останавливает дальнейшее распространение события (не дает ему всплывать к родителям).",
  },
  {
    id: "events-028",
    topic: "Events",
    question: "Какая разница между stopPropagation() и stopImmediatePropagation()?",
    options: [
      "Разницы нет",
      "stopPropagation останавливает всплытие, stopImmediatePropagation дополнительно отключает другие обработчики на этом же элементе",
      "stopImmediatePropagation только для мобильных устройств",
      "stopPropagation отменяет действие по умолчанию",
    ],
    correct: [1],
    explanation:
      "stopPropagation — только остановка всплытия. stopImmediatePropagation — остановка всплытия + отключение всех остальных обработчиков на текущем элементе.",
  },
  {
    id: "events-029",
    topic: "Events",
    question: "Какая разница между событиями load и DOMContentLoaded?",
    options: [
      "Это синонимы",
      "DOMContentLoaded — DOM готов, load — все ресурсы загружены",
      "load — DOM готов, DOMContentLoaded — все ресурсы",
      "DOMContentLoaded для CSS, load для JS",
    ],
    correct: [1],
    explanation:
      "DOMContentLoaded срабатывает после загрузки и парсинга HTML. load — после загрузки всех ресурсов (картинки, стили, iframe).",
  },
  {
    id: "events-030",
    topic: "Events",
    question: "Какие события относятся к событиям мыши?",
    options: [
      "click, dblclick, mousemove",
      "keydown, keyup",
      "load, DOMContentLoaded",
      "submit, change",
    ],
    correct: [0],
    explanation:
      "События мыши: click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave и другие.",
  },
  {
    id: "events-031",
    topic: "Events",
    question: "Какие события относятся к событиям клавиатуры?",
    options: ["click, dblclick", "keydown, keyup", "scroll, resize", "touchstart, touchmove"],
    correct: [1],
    explanation:
      "Основные события клавиатуры: keydown (нажатие) и keyup (отпускание). keypress устарел.",
  },
  {
    id: "events-032",
    topic: "Events",
    question: "Какие события относятся к событиям формы?",
    options: [
      "click, dblclick",
      "input, change, submit, focus, blur",
      "load, DOMContentLoaded",
      "scroll, resize",
    ],
    correct: [1],
    explanation:
      "События форм: input (ввод), change (изменение), submit (отправка), focus (фокус), blur (потеря фокуса).",
  },
  {
    id: "events-033",
    topic: "Events",
    question: "Что делает опция { once: true } в addEventListener?",
    options: [
      "Обработчик сработает только один раз и удалится",
      "Обработчик будет работать постоянно",
      "Обработчик сработает только на мобильных",
      "Обработчик сработает только при загрузке",
    ],
    correct: [0],
    explanation: "Опция once автоматически удаляет обработчик после первого срабатывания.",
  },
  {
    id: "events-034",
    topic: "Events",
    question: "Что делает опция { passive: true } в addEventListener?",
    options: [
      "Обработчик не может вызвать preventDefault",
      "Обработчик работает только в фоне",
      "Обработчик удаляется после выполнения",
      "Обработчик игнорирует события",
    ],
    correct: [0],
    explanation:
      "passive: true указывает, что обработчик не вызовет preventDefault, улучшая производительность прокрутки.",
  },
  {
    id: "events-035",
    topic: "Events",
    question: "Как узнать, был ли вызван preventDefault на событии?",
    options: [
      "event.isDefaultPrevented()",
      "event.defaultPrevented",
      "event.prevented",
      "event.isPrevented()",
    ],
    correct: [1],
    explanation:
      "Свойство event.defaultPrevented возвращает true, если на событии был вызван preventDefault.",
  },

  // ================ BROWSER ENVIRONMENT (36-45) ================
  {
    id: "browser-036",
    topic: "Browser Environment",
    question: "Что такое BOM (Browser Object Model)?",
    options: [
      "Модель DOM-дерева",
      "Набор объектов для работы с браузером: window, navigator, location, history",
      "Библиотека для анимаций",
      "Способ хранения данных",
    ],
    correct: [1],
    explanation:
      "BOM — объектная модель браузера, включающая window, navigator, location, history, screen и диалоговые окна.",
  },
  {
    id: "browser-037",
    topic: "Browser Environment",
    question: "Какие объекты входят в BOM?",
    options: [
      "document, body, head",
      "window, navigator, location, history, screen",
      "div, span, p",
      "Array, Object, Function",
    ],
    correct: [1],
    explanation:
      "BOM включает: window (глобальный объект), navigator (инфо о браузере), location (URL), history (история), screen (экран).",
  },
  {
    id: "browser-038",
    topic: "Browser Environment",
    question: "Для чего используется свойство window.navigator?",
    options: [
      "Для навигации по странице",
      "Для получения информации о браузере и устройстве",
      "Для изменения URL",
      "Для управления историей",
    ],
    correct: [1],
    explanation:
      "navigator содержит информацию о браузере, ОС, userAgent, геолокации, батарее и т.д.",
  },
  {
    id: "browser-039",
    topic: "Browser Environment",
    question: "Какие координаты мыши относительно окна браузера (viewport)?",
    options: ["screenX, screenY", "clientX, clientY", "pageX, pageY", "offsetX, offsetY"],
    correct: [1],
    explanation: "clientX/clientY — координаты относительно видимой области окна (viewport).",
  },
  {
    id: "browser-040",
    topic: "Browser Environment",
    question: "Какие координаты мыши учитывают прокрутку страницы?",
    options: ["screenX, screenY", "clientX, clientY", "pageX, pageY", "offsetX, offsetY"],
    correct: [2],
    explanation: "pageX/pageY — координаты относительно документа, включая прокрутку.",
  },
  {
    id: "browser-041",
    topic: "Browser Environment",
    question: "Что возвращает метод element.getBoundingClientRect()?",
    options: [
      "Координаты элемента относительно документа",
      "Координаты элемента относительно окна (viewport) и его размеры",
      "Только ширину и высоту",
      "Координаты мыши",
    ],
    correct: [1],
    explanation:
      "Метод возвращает объект с top, left, right, bottom, width, height относительно viewport.",
  },
  {
    id: "browser-042",
    topic: "Browser Environment",
    question: "Как получить координаты элемента относительно документа (с учетом скролла)?",
    options: [
      "rect.top + window.scrollY, rect.left + window.scrollX",
      "rect.pageTop, rect.pageLeft",
      "element.documentTop()",
      "rect.viewportToDocument()",
    ],
    correct: [0],
    explanation:
      "Нужно добавить текущую прокрутку: rect.top + window.scrollY, rect.left + window.scrollX.",
  },
  {
    id: "browser-043",
    topic: "Browser Environment",
    question: "Как использовать media-выражения в JavaScript?",
    options: [
      "window.media()",
      "window.matchMedia(mediaQueryString)",
      "document.mediaQuery()",
      "CSS.media()",
    ],
    correct: [1],
    explanation:
      "window.matchMedia(query) возвращает объект MediaQueryList с методом matches и возможностью подписки на изменения через addEventListener.",
  },
  {
    id: "browser-044",
    topic: "Browser Environment",
    question: "Что такое Feature Detection?",
    options: [
      "Анализ строки user-agent",
      "Прямая проверка поддержки функции (например, 'geolocation' in navigator)",
      "Предположение о поддержке на основе других свойств",
      "Определение браузера по названию",
    ],
    correct: [1],
    explanation:
      "Feature detection проверяет наличие конкретной возможности напрямую. Это самый надежный способ.",
  },
  {
    id: "browser-045",
    topic: "Browser Environment",
    question: "Почему не рекомендуется использовать анализ user-agent?",
    options: [
      "Это слишком медленно",
      "Строку легко подделать, браузеры меняют формат, это не говорит о поддержке функций",
      "User-agent недоступен в некоторых браузерах",
      "Это устаревший метод, но он надежен",
    ],
    correct: [1],
    explanation:
      "User-agent легко подделать, браузеры меняют формат строк, и наличие определенного UA не гарантирует поддержку функций.",
  },

  // ================ PERFORMANCE & LOADING (46-50) ================
  {
    id: "perf-046",
    topic: "Performance & Loading",
    question: "Что происходит первым в Critical Rendering Path?",
    options: ["Layout", "Parsing HTML", "Paint", "JS execution"],
    correct: [1],
    explanation: "CRP начинается с парсинга HTML, на основе которого строится DOM.",
  },
  {
    id: "perf-047",
    topic: "Performance & Loading",
    question: "Что такое IntersectionObserver?",
    options: [
      "API для наблюдения за пересечением элемента с областью видимости",
      "Событие клика",
      "Метод для создания анимаций",
      "Спорт",
      "Способ загрузки изображений",
    ],
    correct: [0],
    explanation:
      "IntersectionObserver позволяет асинхронно отслеживать пересечение элемента с его родителем или viewport.",
  },
  {
    id: "perf-048",
    topic: "Performance & Loading",
    question: "Где лучше использовать IntersectionObserver?",
    options: [
      "Для обработки кликов",
      "Для ленивой загрузки изображений и бесконечной прокрутки",
      "Для валидации форм",
      "Для анимации по таймеру",
    ],
    correct: [1],
    explanation:
      "IntersectionObserver идеален для lazy loading, infinite scroll, отслеживания появления элементов в viewport.",
  },
  {
    id: "perf-049",
    topic: "Performance & Loading",
    question: "Какие ограничения у window.close()?",
    options: [
      "Можно закрыть любое окно",
      "Можно закрыть только окно, открытое скриптом (через window.open)",
      "Работает только в мобильных браузерах",
      "Нет ограничений",
    ],
    correct: [1],
    explanation:
      "window.close() может закрыть только окно, которое было открыто этим же скриптом. Попытка закрыть основное окно игнорируется.",
  },
  {
    id: "perf-050",
    topic: "Performance & Loading",
    question: "Для чего используется свойство document.forms?",
    options: [
      "Для создания форм",
      "Для получения коллекции всех форм на странице",
      "Для отправки форм",
      "Для стилизации форм",
    ],
    correct: [1],
    explanation:
      "document.forms возвращает HTMLCollection всех форм на странице (элементов <form>).",
  },

  // ================ COLLECTIONS & APIS (51-55) ================
  {
    id: "apis-051",
    topic: "Collections & APIs",
    question: "Какая разница между HTMLCollection и NodeList?",
    options: [
      "HTMLCollection — только элементы (живая), NodeList — любые узлы (чаще статический)",
      "Это одно и то же",
      "HTMLCollection — статическая, NodeList — живая",
      "HTMLCollection для текста, NodeList для элементов",
    ],
    correct: [0],
    explanation:
      "HTMLCollection (живая) содержит только элементы, NodeList (обычно статический) может содержать любые узлы и поддерживает forEach.",
  },
  {
    id: "apis-052",
    topic: "Collections & APIs",
    question: "Что возвращает getElementsByTagName?",
    options: ["NodeList", "HTMLCollection", "Array", "Object"],
    correct: [1],
    explanation:
      "getElementsByTagName возвращает живую HTMLCollection, которая обновляется при изменении DOM.",
  },
  {
    id: "apis-053",
    topic: "Collections & APIs",
    question: "Какая разница между .submit() и .requestSubmit()?",
    options: [
      "submit() отправляет форму без событий, requestSubmit() инициирует submit событие и проверку валидации",
      "Это одно и то же",
      "submit() для GET, requestSubmit() для POST",
      "submit() асинхронный, requestSubmit() синхронный",
    ],
    correct: [0],
    explanation:
      "submit() отправляет форму, игнорируя валидацию и не генерируя submit событие. requestSubmit() ведет себя как клик по кнопке submit.",
  },
  {
    id: "apis-054",
    topic: "Collections & APIs",
    question: "Что такое URLSearchParams?",
    options: [
      "API для работы с параметрами URL (query string)",
      "Метод для кодирования URL",
      "Способ валидации URL",
      "Библиотека для роутинга",
    ],
    correct: [0],
    explanation:
      "URLSearchParams позволяет удобно работать с query-параметрами URL: получать, добавлять, удалять, сортировать параметры.",
  },
  {
    id: "apis-055",
    topic: "Collections & APIs",
    question: "Какая разница между JSON и XML?",
    options: [
      "JSON легче, основан на JavaScript, XML — более громоздкий язык разметки",
      "XML быстрее парсится",
      "Это одно и то же",
      "JSON только для чисел, XML для текста",
    ],
    correct: [0],
    explanation:
      "JSON — легковесный формат обмена данными, основанный на синтаксисе JavaScript. XML — более тяжелый язык разметки с тегами.",
  },
];
