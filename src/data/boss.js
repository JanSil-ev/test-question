export const BossQuestions = [
  {
    id: "boss-001",
    topic: "JS code",
    question: `Дан массив [1, 1, 1, 2, 2, 2, 2, 4, 4, 5, 0]
Оставить в массиве только уникальные элементы
Отсортировать массив по частоте
// output: [2, 1, 4, 5, 0] или [2, 1, 4, 0, 5]`,
    options: [
      "Использовать Set и sort",
      "Использовать объект для подсчета",
      "Использовать filter и indexOf",
      "Использовать reduce и sort"
    ],
    correct: [1],
explanation: `const input = [1, 1, 1, 2, 2, 2, 2, 4, 4, 5, 0];

function sortByFrequency(nums = []) {
  const frequence = {}; // счетчик частоты

  for (const item of nums) {
    frequence[item] = (frequence[item] || 0) + 1;
  }

  return Object.keys(frequence).sort(
    (a, b) => frequence[b] - frequence[a]
  );
}`
  }
];
