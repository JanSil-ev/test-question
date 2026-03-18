export const stateManagementQuestions = [

{
  id: "state-001",
  topic: "Flux & Redux Basics",
  question: "Что такое Flux?",
  options: [
    "Библиотека для стилей",
    "Архитектурный паттерн управления данными",
    "React компонент",
    "DOM API"
  ],
  correct: [1],
  explanation: "Flux — архитектурный паттерн от Facebook для управления потоками данных."
},

{
  id: "state-002",
  topic: "Flux & Redux Basics",
  question: "Какая основная идея Flux?",
  options: [
    "Двусторонний поток данных",
    "Однонаправленный поток данных",
    "Случайное обновление состояния",
    "Отсутствие состояния"
  ],
  correct: [1],
  explanation: "Flux использует однонаправленный поток данных."
},

{
  id: "state-003",
  topic: "Flux & Redux Basics",
  question: "Какова цель архитектуры Flux?",
  options: [
    "Усложнить архитектуру",
    "Упростить управление состоянием и отладку",
    "Убрать UI",
    "Удалить состояние"
  ],
  correct: [1],
  explanation: "Flux делает поток данных предсказуемым."
},

{
  id: "state-004",
  topic: "Flux & Redux Basics",
  question: "Что такое Action в Flux?",
  options: [
    "CSS класс",
    "Объект описывающий событие",
    "React компонент",
    "DOM элемент"
  ],
  correct: [1],
  explanation: "Action описывает, что произошло в приложении."
},

{
  id: "state-005",
  topic: "Flux & Redux Basics",
  question: "Что содержит Action?",
  options: [
    "HTML",
    "Type и данные события",
    "CSS",
    "DOM"
  ],
  correct: [1],
  explanation: "Action обычно содержит поле type и payload."
},

{
  id: "state-006",
  topic: "Flux & Redux Basics",
  question: "Что делает Dispatcher в Flux?",
  options: [
    "Отображает UI",
    "Передает Action в Store",
    "Создает DOM",
    "Удаляет состояние"
  ],
  correct: [1],
  explanation: "Dispatcher — центральный хаб для передачи действий."
},

{
  id: "state-007",
  topic: "Flux & Redux Basics",
  question: "Что такое Store?",
  options: [
    "CSS модуль",
    "Хранилище состояния и логики",
    "React компонент",
    "HTML элемент"
  ],
  correct: [1],
  explanation: "Store содержит состояние приложения."
},

{
  id: "state-008",
  topic: "Flux & Redux Basics",
  question: "Что делает View в Flux?",
  options: [
    "Отображает интерфейс",
    "Меняет состояние напрямую",
    "Удаляет данные",
    "Создает reducer"
  ],
  correct: [0],
  explanation: "View — это UI компоненты."
},

{
  id: "state-009",
  topic: "Flux & Redux Basics",
  question: "Что происходит после изменения Store?",
  options: [
    "View обновляется",
    "DOM удаляется",
    "Redux выключается",
    "JSX исчезает"
  ],
  correct: [0],
  explanation: "Store уведомляет View об изменениях."
},

{
  id: "state-010",
  topic: "Flux & Redux Basics",
  question: "Что такое Redux?",
  options: [
    "CSS фреймворк",
    "Библиотека управления состоянием",
    "React компонент",
    "HTML стандарт"
  ],
  correct: [1],
  explanation: "Redux используется для централизованного управления состоянием."
},

{
  id: "state-011",
  topic: "Flux & Redux Basics",
  question: "Какой основной принцип Redux?",
  options: [
    "Один источник истины",
    "Много источников состояния",
    "Нет состояния",
    "DOM управляет состоянием"
  ],
  correct: [0],
  explanation: "Redux хранит состояние в одном store."
},

{
  id: "state-012",
  topic: "Flux & Redux Basics",
  question: "Что делает reducer в Redux?",
  options: [
    "Изменяет DOM",
    "Принимает state и action и возвращает новый state",
    "Удаляет данные",
    "Создает компонент"
  ],
  correct: [1],
  explanation: "Reducer — чистая функция преобразования состояния."
},

{
  id: "state-013",
  topic: "Flux & Redux Basics",
  question: "Почему reducers должны быть чистыми функциями?",
  options: [
    "Чтобы код был предсказуемым",
    "Чтобы быстрее писать CSS",
    "Чтобы создавать DOM",
    "Чтобы использовать HTML"
  ],
  correct: [0],
  explanation: "Чистые функции делают состояние предсказуемым."
},

{
  id: "state-014",
  topic: "Flux & Redux Basics",
  question: "Можно ли изменять state напрямую в reducer?",
  options: [
    "Нет",
    "Да",
    "Только в React",
    "Только в Flux"
  ],
  correct: [0],
  explanation: "Reducer должен возвращать новый state."
},

{
  id: "state-015",
  topic: "Redux Toolkit",
  question: "Что такое Redux Toolkit?",
  options: [
    "Официальный инструмент для упрощения Redux",
    "CSS библиотека",
    "HTML API",
    "DOM инструмент"
  ],
  correct: [0],
  explanation: "Redux Toolkit упрощает настройку Redux."
},

{
  id: "state-016",
  topic: "Redux Toolkit",
  question: "Зачем был создан Redux Toolkit?",
  options: [
    "Упростить работу с Redux",
    "Удалить reducers",
    "Удалить actions",
    "Заменить React"
  ],
  correct: [0],
  explanation: "Redux Toolkit уменьшает boilerplate код."
},

{
  id: "state-017",
  topic: "Redux Toolkit",
  question: "Какой метод создает store в Redux Toolkit?",
  options: [
    "configureStore",
    "createStore",
    "makeStore",
    "initStore"
  ],
  correct: [0],
  explanation: "configureStore упрощает создание store."
},

{
  id: "state-018",
  topic: "Redux Toolkit",
  question: "Что делает createSlice?",
  options: [
    "Создает reducer и actions",
    "Создает HTML",
    "Создает CSS",
    "Удаляет state"
  ],
  correct: [0],
  explanation: "createSlice объединяет reducer и action creators."
},

{
  id: "state-019",
  topic: "Redux Toolkit",
  question: "Что уменьшает Redux Toolkit?",
  options: [
    "Boilerplate код",
    "DOM",
    "HTML",
    "CSS"
  ],
  correct: [0],
  explanation: "RTK делает Redux код короче."
},

{
  id: "state-020",
  topic: "Redux Toolkit",
  question: "Что позволяет писать мутабельный код в reducers RTK?",
  options: [
    "Immer",
    "React",
    "HTML",
    "Redux DevTools"
  ],
  correct: [0],
  explanation: "RTK использует библиотеку Immer."
},

{
  id: "state-021",
  topic: "RTK Query",
  question: "Что такое RTK Query?",
  options: [
    "Инструмент для работы с API",
    "CSS библиотека",
    "DOM API",
    "HTML фреймворк"
  ],
  correct: [0],
  explanation: "RTK Query упрощает загрузку данных."
},

{
  id: "state-022",
  topic: "RTK Query",
  question: "Что делает RTK Query?",
  options: [
    "Кэширует данные и управляет запросами",
    "Создает DOM",
    "Удаляет Redux",
    "Удаляет React"
  ],
  correct: [0],
  explanation: "RTK Query управляет запросами и кэшем."
},

{
  id: "state-023",
  topic: "RTK Query",
  question: "Что такое endpoint в RTK Query?",
  options: [
    "Описание API запроса",
    "CSS правило",
    "HTML элемент",
    "Reducer"
  ],
  correct: [0],
  explanation: "Endpoint описывает запрос к серверу."
},

{
  id: "state-024",
  topic: "RTK Query",
  question: "Что автоматически делает RTK Query?",
  options: [
    "Кэширование запросов",
    "Удаление API",
    "Создание DOM",
    "Удаление store"
  ],
  correct: [0],
  explanation: "RTK Query автоматически кэширует данные."
},

{
  id: "state-025",
  topic: "React Query",
  question: "Что такое React Query?",
  options: [
    "Библиотека для управления серверным состоянием",
    "CSS инструмент",
    "HTML библиотека",
    "DOM API"
  ],
  correct: [0],
  explanation: "React Query управляет серверными данными."
},

{
  id: "state-026",
  topic: "React Query",
  question: "Для чего используется React Query?",
  options: [
    "Работа с API и кэширование данных",
    "Создание DOM",
    "Удаление state",
    "Создание CSS"
  ],
  correct: [0],
  explanation: "React Query управляет загрузкой данных."
},

{
  id: "state-027",
  topic: "React Query",
  question: "Какой основной хук используется в React Query?",
  options: [
    "useQuery",
    "useReducer",
    "useDOM",
    "useHTML"
  ],
  correct: [0],
  explanation: "useQuery выполняет запросы."
},

{
  id: "state-028",
  topic: "React Query",
  question: "Что делает useMutation?",
  options: [
    "Отправляет изменения на сервер",
    "Создает CSS",
    "Удаляет state",
    "Создает DOM"
  ],
  correct: [0],
  explanation: "useMutation используется для POST/PUT/DELETE."
},

{
  id: "state-029",
  topic: "React Query",
  question: "Что делает кэш React Query?",
  options: [
    "Хранит результаты запросов",
    "Удаляет DOM",
    "Удаляет React",
    "Создает CSS"
  ],
  correct: [0],
  explanation: "Кэш предотвращает лишние запросы."
},

{
  id: "state-030",
  topic: "React Query",
  question: "В чем основная разница React Query и RTK Query?",
  options: [
    "React Query независим от Redux",
    "React Query заменяет React",
    "RTK Query не работает с API",
    "Нет разницы"
  ],
  correct: [0],
  explanation: "React Query работает без Redux."
}
,{
  id: "state-031",
  topic: "Flux & Redux Basics",
  question: "Какой поток данных используется в Redux?",
  options: [
    "Двусторонний",
    "Однонаправленный",
    "Случайный",
    "Асинхронный"
  ],
  correct: [1],
  explanation: "Redux использует однонаправленный поток данных."
},

{
  id: "state-032",
  topic: "Flux & Redux Basics",
  question: "Какие три основных принципа Redux?",
  options: [
    "Единый store, состояние только для чтения, изменения через reducers",
    "Несколько store, прямое изменение state",
    "DOM управляет состоянием",
    "React управляет reducers"
  ],
  correct: [0],
  explanation: "Redux основан на трех принципах: единый store, неизменяемость состояния и изменения через reducers."
},

{
  id: "state-033",
  topic: "Flux & Redux Basics",
  question: "Что делает dispatch в Redux?",
  options: [
    "Создает reducer",
    "Отправляет action в store",
    "Создает компонент",
    "Изменяет DOM"
  ],
  correct: [1],
  explanation: "dispatch отправляет action в Redux store."
},

{
  id: "state-034",
  topic: "Flux & Redux Basics",
  question: "Что хранит Redux store?",
  options: [
    "DOM элементы",
    "CSS стили",
    "Состояние приложения",
    "HTML разметку"
  ],
  correct: [2],
  explanation: "Store содержит глобальное состояние приложения."
},

{
  id: "state-035",
  topic: "Flux & Redux Basics",
  question: "Можно ли иметь несколько store в Redux приложении?",
  options: [
    "Да",
    "Нет",
    "Только в React",
    "Только в Flux"
  ],
  correct: [1],
  explanation: "Redux рекомендует использовать один store."
},

{
  id: "state-036",
  topic: "Redux Toolkit",
  question: "Что делает createAsyncThunk?",
  options: [
    "Создает асинхронные actions",
    "Удаляет reducers",
    "Создает DOM",
    "Создает CSS"
  ],
  correct: [0],
  explanation: "createAsyncThunk упрощает работу с асинхронными действиями."
},

{
  id: "state-037",
  topic: "Redux Toolkit",
  question: "Что автоматически подключает configureStore?",
  options: [
    "Middleware и DevTools",
    "HTML",
    "CSS",
    "DOM"
  ],
  correct: [0],
  explanation: "configureStore автоматически подключает Redux DevTools и middleware."
},

{
  id: "state-038",
  topic: "Redux Toolkit",
  question: "Что такое slice в Redux Toolkit?",
  options: [
    "Часть состояния с reducer и actions",
    "HTML элемент",
    "CSS модуль",
    "React компонент"
  ],
  correct: [0],
  explanation: "Slice объединяет состояние, reducers и actions."
},

{
  id: "state-039",
  topic: "Redux Toolkit",
  question: "Что возвращает createSlice?",
  options: [
    "Reducer и actions",
    "DOM",
    "HTML",
    "CSS"
  ],
  correct: [0],
  explanation: "createSlice генерирует reducer и action creators."
},

{
  id: "state-040",
  topic: "Redux Toolkit",
  question: "Что позволяет писать 'мутабельный' код внутри reducers Redux Toolkit?",
  options: [
    "Immer",
    "React",
    "Redux DevTools",
    "HTML"
  ],
  correct: [0],
  explanation: "Immer позволяет писать код, который выглядит как мутация."
},

{
  id: "state-041",
  topic: "RTK Query",
  question: "Что такое createApi в RTK Query?",
  options: [
    "Функция для создания API сервиса",
    "CSS инструмент",
    "HTML API",
    "DOM метод"
  ],
  correct: [0],
  explanation: "createApi используется для описания API endpoints."
},

{
  id: "state-042",
  topic: "RTK Query",
  question: "Что делает baseQuery в RTK Query?",
  options: [
    "Определяет способ выполнения HTTP запросов",
    "Создает reducer",
    "Удаляет API",
    "Создает DOM"
  ],
  correct: [0],
  explanation: "baseQuery отвечает за выполнение сетевых запросов."
},

{
  id: "state-043",
  topic: "RTK Query",
  question: "Что автоматически генерирует RTK Query для компонентов?",
  options: [
    "React hooks",
    "CSS",
    "HTML",
    "DOM"
  ],
  correct: [0],
  explanation: "RTK Query генерирует hooks вроде useGetPostsQuery."
},

{
  id: "state-044",
  topic: "RTK Query",
  question: "Какой тип endpoint используется для получения данных?",
  options: [
    "query",
    "mutation",
    "dispatch",
    "reducer"
  ],
  correct: [0],
  explanation: "query используется для GET запросов."
},

{
  id: "state-045",
  topic: "RTK Query",
  question: "Какой endpoint используется для изменения данных?",
  options: [
    "mutation",
    "query",
    "store",
    "dispatch"
  ],
  correct: [0],
  explanation: "mutation используется для POST, PUT, DELETE."
},

{
  id: "state-046",
  topic: "React Query",
  question: "Что делает useQuery?",
  options: [
    "Выполняет запрос и возвращает состояние загрузки",
    "Создает reducer",
    "Создает CSS",
    "Удаляет state"
  ],
  correct: [0],
  explanation: "useQuery используется для получения данных."
},

{
  id: "state-047",
  topic: "React Query",
  question: "Что возвращает useQuery?",
  options: [
    "data, error, loading состояния",
    "DOM",
    "CSS",
    "HTML"
  ],
  correct: [0],
  explanation: "useQuery возвращает данные и состояние запроса."
},

{
  id: "state-048",
  topic: "React Query",
  question: "Что такое query key в React Query?",
  options: [
    "Уникальный идентификатор запроса",
    "CSS селектор",
    "HTML тег",
    "Reducer"
  ],
  correct: [0],
  explanation: "Query key используется для кэширования и идентификации запроса."
},

{
  id: "state-049",
  topic: "React Query",
  question: "Зачем нужен QueryClient?",
  options: [
    "Управляет кэшем запросов",
    "Создает DOM",
    "Создает CSS",
    "Удаляет React"
  ],
  correct: [0],
  explanation: "QueryClient управляет кэшированием и обновлением данных."
},

{
  id: "state-050",
  topic: "React Query",
  question: "Что позволяет React Query делать автоматически?",
  options: [
    "Кэширование и повторную загрузку данных",
    "Создание HTML",
    "Удаление Redux",
    "Создание DOM"
  ],
  correct: [0],
  explanation: "React Query автоматически кэширует и обновляет данные."
},
{
  id: "state-051",
  topic: "Flux & Redux Basics",
  question: "Почему Redux использует неизменяемость (immutability) состояния?",
  options: [
    "Чтобы уменьшить размер приложения",
    "Чтобы React быстрее создавал DOM",
    "Чтобы изменения состояния можно было предсказуемо отслеживать",
    "Чтобы уменьшить количество reducers"
  ],
  correct: [2],
  explanation: "Иммутабельность позволяет легко отслеживать изменения состояния и оптимизировать обновления."
},

{
  id: "state-052",
  topic: "Flux & Redux Basics",
  question: "Что произойдет, если reducer будет изменять state напрямую?",
  options: [
    "Redux автоматически исправит это",
    "Могут возникнуть ошибки и проблемы с обновлением UI",
    "Приложение станет быстрее",
    "Ничего не изменится"
  ],
  correct: [1],
  explanation: "Redux ожидает новый объект состояния, прямые мутации нарушают логику обновлений."
},

{
  id: "state-053",
  topic: "Flux & Redux Basics",
  question: "Что такое middleware в Redux?",
  options: [
    "Функция между dispatch и reducer",
    "CSS библиотека",
    "React компонент",
    "DOM обработчик"
  ],
  correct: [0],
  explanation: "Middleware перехватывает actions между dispatch и reducer."
},

{
  id: "state-054",
  topic: "Flux & Redux Basics",
  question: "Для чего чаще всего используются middleware?",
  options: [
    "Асинхронные операции и логирование",
    "Создание DOM",
    "Работа с CSS",
    "Создание компонентов"
  ],
  correct: [0],
  explanation: "Middleware часто используются для async запросов, логирования и обработки side effects."
},

{
  id: "state-055",
  topic: "Flux & Redux Basics",
  question: "Какой middleware часто используется для асинхронных действий в Redux?",
  options: [
    "Redux Thunk",
    "React Router",
    "Redux DOM",
    "Immer"
  ],
  correct: [0],
  explanation: "Redux Thunk позволяет dispatch функций для async логики."
},

{
  id: "state-056",
  topic: "Redux Toolkit",
  question: "Почему Redux Toolkit рекомендуется вместо чистого Redux?",
  options: [
    "Он уменьшает boilerplate и упрощает конфигурацию",
    "Он заменяет React",
    "Он работает без store",
    "Он не использует reducers"
  ],
  correct: [0],
  explanation: "RTK делает настройку Redux проще и безопаснее."
},

{
  id: "state-057",
  topic: "Redux Toolkit",
  question: "Что делает extraReducers в createSlice?",
  options: [
    "Обрабатывает actions из других slices или async thunk",
    "Удаляет reducers",
    "Создает store",
    "Создает DOM"
  ],
  correct: [0],
  explanation: "extraReducers позволяет реагировать на actions, созданные вне slice."
},

{
  id: "state-058",
  topic: "Redux Toolkit",
  question: "Когда обычно используется createAsyncThunk?",
  options: [
    "Для обработки асинхронных API запросов",
    "Для создания DOM",
    "Для создания CSS",
    "Для удаления store"
  ],
  correct: [0],
  explanation: "createAsyncThunk помогает управлять lifecycle async операций."
},

{
  id: "state-059",
  topic: "Redux Toolkit",
  question: "Какие состояния автоматически создаёт createAsyncThunk?",
  options: [
    "pending, fulfilled, rejected",
    "loading, done, fail",
    "start, middle, end",
    "dispatch, reducer, store"
  ],
  correct: [0],
  explanation: "createAsyncThunk генерирует lifecycle actions."
},

{
  id: "state-060",
  topic: "Redux Toolkit",
  question: "Почему Redux Toolkit использует Immer?",
  options: [
    "Чтобы писать мутабельный код, сохраняя иммутабельность",
    "Чтобы ускорить DOM",
    "Чтобы удалить reducers",
    "Чтобы убрать actions"
  ],
  correct: [0],
  explanation: "Immer позволяет писать код как мутацию, но возвращает новый state."
},

{
  id: "state-061",
  topic: "RTK Query",
  question: "Какая основная задача RTK Query?",
  options: [
    "Управление серверными данными и кешированием",
    "Создание DOM",
    "Работа с CSS",
    "Создание React компонентов"
  ],
  correct: [0],
  explanation: "RTK Query решает задачи загрузки и кеширования данных."
},

{
  id: "state-062",
  topic: "RTK Query",
  question: "Что такое cache invalidation в RTK Query?",
  options: [
    "Процесс очистки или обновления устаревшего кеша",
    "Удаление Redux",
    "Удаление reducers",
    "Удаление React"
  ],
  correct: [0],
  explanation: "Cache invalidation обновляет устаревшие данные."
},

{
  id: "state-063",
  topic: "RTK Query",
  question: "Для чего используются tags в RTK Query?",
  options: [
    "Для автоматического обновления кеша",
    "Для стилизации",
    "Для DOM структуры",
    "Для reducers"
  ],
  correct: [0],
  explanation: "Tags помогают управлять кешированием и invalidation."
},

{
  id: "state-064",
  topic: "RTK Query",
  question: "Что происходит при вызове mutation в RTK Query?",
  options: [
    "Изменяются данные на сервере и может инвалидироваться кеш",
    "Создается DOM",
    "Удаляется store",
    "Удаляется React"
  ],
  correct: [0],
  explanation: "Mutation используется для изменения серверных данных."
},

{
  id: "state-065",
  topic: "React Query",
  question: "Чем отличается React Query от Redux?",
  options: [
    "React Query управляет серверным состоянием",
    "React Query заменяет React",
    "React Query управляет DOM",
    "React Query работает только с CSS"
  ],
  correct: [0],
  explanation: "React Query предназначен для работы с серверными данными."
},

{
  id: "state-066",
  topic: "React Query",
  question: "Что означает stale data в React Query?",
  options: [
    "Данные устарели и могут быть обновлены",
    "Данные удалены",
    "Данные повреждены",
    "Данные не существуют"
  ],
  correct: [0],
  explanation: "Stale означает, что данные можно перезапросить."
},

{
  id: "state-067",
  topic: "React Query",
  question: "Что делает refetch в React Query?",
  options: [
    "Повторно выполняет запрос",
    "Удаляет кеш",
    "Удаляет reducer",
    "Удаляет store"
  ],
  correct: [0],
  explanation: "Refetch позволяет заново выполнить запрос."
},

{
  id: "state-068",
  topic: "React Query",
  question: "Почему React Query может уменьшить количество API запросов?",
  options: [
    "Благодаря кешированию результатов",
    "Он удаляет API",
    "Он отключает сеть",
    "Он уменьшает DOM"
  ],
  correct: [0],
  explanation: "Кеш позволяет избегать повторных запросов."
},

{
  id: "state-069",
  topic: "React Query",
  question: "Что такое background refetching?",
  options: [
    "Обновление данных в фоне без блокировки UI",
    "Удаление данных",
    "Удаление DOM",
    "Удаление React"
  ],
  correct: [0],
  explanation: "React Query может обновлять данные незаметно для пользователя."
},

{
  id: "state-070",
  topic: "RTK Query",
  question: "Когда RTK Query предпочтительнее React Query?",
  options: [
    "Когда приложение уже использует Redux",
    "Когда нет API",
    "Когда нет React",
    "Когда нет состояния"
  ],
  correct: [0],
  explanation: "RTK Query лучше интегрируется с Redux store."
},
{
  id: "state-071",
  topic: "Flux & Redux Basics",
  question: "Почему рекомендуется нормализовать состояние (normalized state) в Redux?",
  options: [
    "Чтобы уменьшить размер DOM",
    "Чтобы избежать дублирования данных и упростить обновление",
    "Чтобы reducers работали быстрее",
    "Чтобы уменьшить количество actions"
  ],
  correct: [1],
  explanation: "Нормализованное состояние уменьшает дублирование данных и упрощает обновление вложенных структур."
},

{
  id: "state-072",
  topic: "Flux & Redux Basics",
  question: "Какая проблема возникает при глубоко вложенном состоянии в Redux?",
  options: [
    "Reducers перестают работать",
    "Сложно обновлять вложенные объекты без мутаций",
    "Redux перестает хранить состояние",
    "Store становится асинхронным"
  ],
  correct: [1],
  explanation: "Глубокая вложенность усложняет иммутабельные обновления."
},

{
  id: "state-073",
  topic: "Flux & Redux Basics",
  question: "Почему Redux reducers должны быть чистыми функциями?",
  options: [
    "Чтобы поддерживать предсказуемость состояния",
    "Чтобы уменьшить размер bundle",
    "Чтобы React быстрее рендерил DOM",
    "Чтобы reducers работали асинхронно"
  ],
  correct: [0],
  explanation: "Чистые функции делают поведение состояния детерминированным."
},

{
  id: "state-074",
  topic: "Flux & Redux Basics",
  question: "Как Redux определяет, нужно ли обновлять подписчиков store?",
  options: [
    "Сравнивает ссылки объектов состояния",
    "Сравнивает DOM",
    "Использует setTimeout",
    "Проверяет reducers"
  ],
  correct: [0],
  explanation: "Redux использует сравнение ссылок для определения изменений состояния."
},

{
  id: "state-075",
  topic: "Redux Toolkit",
  question: "Почему createSlice считается более безопасным способом написания reducers?",
  options: [
    "Он автоматически предотвращает ошибки иммутабельности",
    "Он удаляет reducers",
    "Он делает reducers асинхронными",
    "Он заменяет Redux store"
  ],
  correct: [0],
  explanation: "createSlice использует Immer, который обеспечивает безопасные обновления состояния."
},

{
  id: "state-076",
  topic: "Redux Toolkit",
  question: "Как Redux Toolkit уменьшает boilerplate код?",
  options: [
    "Автоматически создаёт action creators и reducers",
    "Удаляет store",
    "Удаляет actions",
    "Удаляет reducers"
  ],
  correct: [0],
  explanation: "createSlice автоматически генерирует actions и reducers."
},

{
  id: "state-077",
  topic: "Redux Toolkit",
  question: "Почему configureStore считается предпочтительным способом создания store?",
  options: [
    "Он автоматически настраивает middleware и DevTools",
    "Он удаляет reducers",
    "Он делает Redux асинхронным",
    "Он заменяет React"
  ],
  correct: [0],
  explanation: "configureStore включает полезные настройки по умолчанию."
},

{
  id: "state-078",
  topic: "Redux Toolkit",
  question: "Какая проблема возникает при хранении большого количества UI-состояния в Redux?",
  options: [
    "Redux перестает работать",
    "Store становится сложным и трудным для поддержки",
    "Reducers перестают вызываться",
    "React перестает рендерить"
  ],
  correct: [1],
  explanation: "Redux лучше подходит для глобального состояния, а не для локального UI."
},

{
  id: "state-079",
  topic: "RTK Query",
  question: "Как RTK Query уменьшает необходимость писать async логику вручную?",
  options: [
    "Автоматически генерирует hooks и управляет кешированием",
    "Удаляет reducers",
    "Удаляет store",
    "Удаляет actions"
  ],
  correct: [0],
  explanation: "RTK Query автоматизирует запросы и кеширование."
},

{
  id: "state-080",
  topic: "RTK Query",
  question: "Почему кеширование важно при работе с серверными данными?",
  options: [
    "Уменьшает количество API запросов",
    "Увеличивает количество reducers",
    "Ускоряет DOM",
    "Удаляет React"
  ],
  correct: [0],
  explanation: "Кеш позволяет избегать повторных запросов и улучшает производительность."
},

{
  id: "state-081",
  topic: "RTK Query",
  question: "Что позволяет RTK Query автоматически обновлять устаревшие данные?",
  options: [
    "Cache invalidation через tags",
    "DOM diffing",
    "React lifecycle",
    "Redux reducers"
  ],
  correct: [0],
  explanation: "Tags используются для управления обновлением кеша."
},

{
  id: "state-082",
  topic: "React Query",
  question: "Почему React Query считается инструментом для server state?",
  options: [
    "Он управляет данными, полученными с сервера",
    "Он управляет DOM",
    "Он управляет CSS",
    "Он заменяет Redux reducers"
  ],
  correct: [0],
  explanation: "React Query работает с асинхронными серверными данными."
},

{
  id: "state-083",
  topic: "React Query",
  question: "В чем преимущество background refetching?",
  options: [
    "Обновляет данные без блокировки интерфейса",
    "Удаляет кеш",
    "Удаляет API",
    "Удаляет React"
  ],
  correct: [0],
  explanation: "Background refetch обновляет данные в фоне."
},

{
  id: "state-084",
  topic: "React Query",
  question: "Почему query key должен быть стабильным?",
  options: [
    "Чтобы корректно работало кеширование",
    "Чтобы React рендерил быстрее",
    "Чтобы reducers работали",
    "Чтобы DOM обновлялся"
  ],
  correct: [0],
  explanation: "Query key используется для идентификации и кеширования запросов."
},

{
  id: "state-085",
  topic: "React Query",
  question: "Что произойдет, если два useQuery используют одинаковый query key?",
  options: [
    "Они будут использовать общий кеш",
    "Они создадут два store",
    "Они создадут два reducers",
    "Они вызовут ошибку"
  ],
  correct: [0],
  explanation: "React Query использует общий кеш для одинаковых ключей."
},

{
  id: "state-086",
  topic: "React Query",
  question: "Когда React Query предпочтительнее Redux?",
  options: [
    "Когда основная задача — работа с серверными данными",
    "Когда нет React",
    "Когда нет API",
    "Когда нет состояния"
  ],
  correct: [0],
  explanation: "React Query оптимизирован для server state."
},

{
  id: "state-087",
  topic: "Flux & Redux Basics",
  question: "Почему Redux DevTools полезен при разработке?",
  options: [
    "Позволяет отслеживать actions и состояние во времени",
    "Создает DOM",
    "Удаляет reducers",
    "Удаляет store"
  ],
  correct: [0],
  explanation: "DevTools позволяют анализировать изменения состояния."
},

{
  id: "state-088",
  topic: "Redux Toolkit",
  question: "Какая архитектурная проблема может возникнуть при слишком большом количестве slices?",
  options: [
    "Сложность навигации и поддержки store",
    "Redux перестанет работать",
    "React перестанет рендерить",
    "Reducers станут асинхронными"
  ],
  correct: [0],
  explanation: "Слишком большое количество slices усложняет архитектуру."
},

{
  id: "state-089",
  topic: "RTK Query",
  question: "Почему RTK Query может заменить часть Redux async логики?",
  options: [
    "Он берет на себя управление API запросами и кешем",
    "Он удаляет reducers",
    "Он удаляет store",
    "Он заменяет React"
  ],
  correct: [0],
  explanation: "RTK Query автоматизирует работу с серверными запросами."
},

{
  id: "state-090",
  topic: "React Query",
  question: "Какая ключевая архитектурная идея React Query?",
  options: [
    "Разделение server state и client state",
    "Удаление состояния",
    "Удаление DOM",
    "Удаление reducers"
  ],
  correct: [0],
  explanation: "React Query специализируется на управлении серверными данными."
}
];