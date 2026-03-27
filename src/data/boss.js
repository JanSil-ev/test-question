export const BossQuestions = [
  {
    id: "boss-001",
    topic: "JS code",
    question: `Дан массив [1, 1, 1, 2, 2, 2, 2, 4, 4, 5, 0]
Оставить только уникальные элементы
Отсортировать по частоте`,
    options: ["Через Set", "Через объект частот", "Через filter", "Через map"],
    correct: [1],
    explanation: `const frequence = {};
for (const item of nums) {
  frequence[item] = (frequence[item] || 0) + 1;
}
return Object.keys(frequence).sort(
  (a, b) => frequence[b] - frequence[a]
);`,
  },

  {
    id: "boss-002",
    topic: "JS code",
    question: `Сделать массив плоским
flatten([[1], [[2, 3]], [[[4]]]]) -> [1,2,3,4]`,
    options: ["Через рекурсию", "Через flat", "Через reduce", "Все варианты верны"],
    correct: [3],
    explanation: `function flatten(arr) {
  return arr.reduce(
    (acc, i) =>
      Array.isArray(i)
        ? acc.concat(flatten(i))
        : acc.concat(i),
    []
  );
}`,
  },

  {
    id: "boss-003",
    topic: "JS code",
    question: `Напишите функцию, которая возвращает новый объект,
в котором все примитивные элементы вложенных объектов
были рекурсивно "подняты"
const obj = {
a: {
b: {
c: 1,
d: 2,
e: 3,
},
f: {
g: 4,
h: 5,
},
i: 6,
j: 7,
},
};
`,
    options: ["Рекурсия", "JSON.stringify", "Map", "Set"],
    correct: [0],
    explanation: `function flatObject(obj) {
  let res = {};
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(res, flatObject(obj[key]));
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}`,
  },

  {
    id: "boss-004",
    topic: "JS code",
    question: `Реализовать optionalChaining(obj, "a.b.c")`,
    options: ["Через split + reduce", "Через eval", "Через JSON", "Через map"],
    correct: [0],
    explanation: `const optionalChaining = (o, path) =>
  !path
    ? o
    : path.split('.').reduce(
        (acc, i) => acc?.[i],
        o
      );`,
  },

  {
    id: "boss-005",
    topic: "JS code",
    question: `Посчитать сумму всех age во вложенном объекте`,
    options: ["Рекурсия", "Стек (DFS)", "reduce", "map"],
    correct: [1],
    explanation: `let stack = [user];
let count = 0;

while (stack.length) {
  let node = stack.pop();
  for (let key in node) {
    if (key === "age") count += node[key];
    if (Array.isArray(node[key])) {
      node[key].forEach(obj => stack.push(obj));
    }
  }
}
return count;`,
  },

  {
    id: "boss-006",
    topic: "JS code",
    question: `Реализовать includes(value, tree) для вложенного объекта`,
    options: ["Рекурсия", "Цикл", "Set", "Map"],
    correct: [0],
    explanation: `function includes(value, tree) {
  for (let el of Object.values(tree)) {
    if (el === value) return true;
    if (typeof el === "object" && includes(value, el)) {
      return true;
    }
  }
  return false;
}`,
  },

  {
    id: "boss-007",
    topic: "JS code",
    question: `Проверка валидности скобок`,
    options: ["Стек", "Очередь", "Set", "Map"],
    correct: [0],
    explanation: `const stack = [];
const map = { ")": "(", "]": "[", "}": "{" };

for (let char of str) {
  if (Object.values(map).includes(char)) {
    stack.push(char);
  } else if (map[char]) {
    if (stack.pop() !== map[char]) return false;
  }
}
return stack.length === 0;`,
  },

  {
    id: "boss-008",
    topic: "JS code",
    question: `Удалить дубликаты из строки`,
    options: ["Set", "Объект", "filter", "Все варианты"],
    correct: [3],
    explanation: `return [...new Set(str)].join("");`,
  },

  {
    id: "boss-009",
    topic: "JS code",
    question: `Проверить, являются ли строки анаграммами`,
    options: ["Сортировка", "Map", "Set", "reduce"],
    correct: [0],
    explanation: `const sorted = arr.map(s =>
  s.split("").sort().join("")
);
return sorted.every(s => s === sorted[0]);`,
  },

  {
    id: "boss-010",
    topic: "JS code",
    question: `Реализовать add(20)(22) и другие вариации`,
    options: ["Замыкание", "Класс", "Promise", "Set"],
    correct: [0],
    explanation: `function add(a, b) {
  if (!a) return add;
  if (!b) {
    return function (c) {
      if (!c) return arguments.callee;
      return a + c;
    };
  }
  return a + b;
}`,
  },

  {
    id: "boss-011",
    topic: "JS code",
    question: `twoSum — найти индексы чисел дающих target`,
    options: ["Map", "Set", "Сортировка", "filter"],
    correct: [0],
    explanation: `const map = new Map();

for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];
  if (map.has(complement)) {
    return [map.get(complement), i];
  }
  map.set(nums[i], i);
}`,
  },

  {
    id: "boss-012",
    topic: "JS code",
    question: `Самый часто встречающийся символ в строке`,
    options: ["Объект частот", "Set", "Map", "reduce"],
    correct: [0],
    explanation: `const map = {};
for (let char of str) {
  map[char] = (map[char] || 0) + 1;
}
return Object.keys(map).reduce((a, b) =>
  map[a] >= map[b] ? a : b
);`,
  },

  {
    id: "boss-013",
    topic: "JS code",
    question: `Найти пересечение двух массивов`,
    options: ["filter + includes", "Set", "Map", "Все варианты"],
    correct: [3],
    explanation: `return arr1.filter(x => arr2.includes(x));`,
  },

  {
    id: "boss-014",
    topic: "JS code",
    question: `groupAnagrams`,
    options: ["Map", "Set", "reduce", "filter"],
    correct: [0],
    explanation: `const map = new Map();
for (const str of arr) {
  const key = str.split('').sort().join('');
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(str);
}
return Array.from(map.values());`,
  },

  {
    id: "boss-015",
    topic: "JS code",
    question: `Реализовать debounce`,
    options: ["setTimeout", "setInterval", "Promise", "Map"],
    correct: [0],
    explanation: `function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => func(...args),
      delay
    );
  };
}`,
  },

  {
    id: "boss-016",
    topic: "JS code",
    question: `Найти первый уникальный элемент массива`,
    options: ["Map", "Set", "filter", "reduce"],
    correct: [0],
    explanation: `const map = new Map();
for (let n of arr) {
  map.set(n, (map.get(n) || 0) + 1);
}
for (let n of arr) {
  if (map.get(n) === 1) return n;
}`,
  },

  {
    id: "boss-017",
    topic: "JS code",
    question: `Разбить массив на чанки`,
    options: ["slice", "splice", "reduce", "map"],
    correct: [0],
    explanation: `for (let i = 0; i < arr.length; i += size) {
  result.push(arr.slice(i, i + size));
}`,
  },

  {
    id: "boss-018",
    topic: "JS code",
    question: `Реализовать deepEqual`,
    options: ["Рекурсия", "JSON.stringify", "Map", "Set"],
    correct: [0],
    explanation: `function deepEqual(a, b) {
  if (a === b) return true;

  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a == null ||
    b == null
  ) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}`,
  },
];
