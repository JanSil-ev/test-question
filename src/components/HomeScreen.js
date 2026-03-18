import React from "react";


const topics = [
  "Rendering",
  "Performance",
  "Browser",
  "Network",
  "CSS",
  "Architecture",
  "Storage",
  "PWA",
];

export default function HomeScreen({ startTest }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Выберите тему теста</h1>
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => startTest(topic)}
          style={{ display: "block", margin: 10 }}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
