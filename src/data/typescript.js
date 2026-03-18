export const typeScriptQuestions = [
{
  id: "ts-001",
  topic: "Types",
  question: "Какая разница между type и interface?",
  options: [
    "Ничем не отличаются",
    "Interface можно расширять",
    "Type более мощный",
    "Interface для объектов, type для всего"
  ],
  correct: [1],
  explanation: "Interface можно расширять с помощью extends и declaration merging."
},
{
  id: "ts-002",
  topic: "Generics",
  question: "Что такое Generic?",
  options: [
    "Специальный тип",
    "Переменная типа, которая может быть любым типом",
    "Функция",
    "Класс"
  ],
  correct: [1],
  explanation: "Generic позволяет создавать переиспользуемый код с разными типами."
}
];
