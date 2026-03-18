import React from "react";

export default function ResultScreen({ answers, questions, restartTest }) {
  const score = answers.filter((a,i) => questions[i].correct.includes(a)).length;

  return (
    <div style={{ padding: 20 }}>
      <h1>Результат: {score} / {answers.length}</h1>
      <ul>
        {answers.map((a, i) => (
          <li key={i}>
            <strong>{questions[i].question}</strong><br />
            Ваш ответ: {questions[i].options[a]}<br />
            Правильный ответ: {questions[i].options[questions[i].correct[0]]}<br />
            {questions[i].explanation}
          </li>
        ))}
      </ul>
      <button onClick={restartTest}>Пройти снова</button>
    </div>
  );
}
