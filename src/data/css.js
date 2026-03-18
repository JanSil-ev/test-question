export const cssQuestions = [
{
  id: "css-001",
  topic: "Селекторы",
  question: "Что НЕ вызывает layout?",
  options: ["margin", "padding", "transform", "font-size"],
  correct: [2],
  explanation: "transform не влияет на поток документа."
},
{
  id: "css-002",
  topic: "Селекторы",
  question: "Что имеет наибольшую специфичность?",
  options: [".class", "#id", "div", "div span"],
  correct: [1],
  explanation: "ID имеет более высокую специфичность."
},
{
  id: "css-003",
  topic: "Layout",
  question: "Какой layout метод самый гибкий?",
  options: ["Float", "Flexbox", "Grid", "Absolute"],
  correct: [2],
  explanation: "CSS Grid является наиболее мощным инструментом для двумерных макетов."
}
];
