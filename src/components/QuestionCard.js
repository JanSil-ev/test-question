import React from "react";

export default function QuestionCard({ question, currentIndex, total, onAnswer }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.question}>{question.question}</h2>
        <p style={styles.counter}>
          Вопрос {currentIndex + 1} из {total}
        </p>
      </div>

      <div style={styles.options}>
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(index)} style={styles.optionButton}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    maxWidth: 600,
    margin: "20px auto",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 15,
  },
  question: {
    fontSize: 20,
    marginBottom: 5,
  },
  counter: {
    fontSize: 14,
    color: "#555",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  optionButton: {
    padding: "10px 15px",
    borderRadius: 5,
    border: "1px solid #ccc",
    cursor: "pointer",
    backgroundColor: "#f9f9f9",
    transition: "all 0.2s",
    fontSize: 16,
  },
};
