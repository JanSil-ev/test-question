import React, { useState } from "react";
import FlipCard from "./FlipCard";

export default function CardsScreen({ questions, onBack }) {
  const [current, setCurrent] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setIsFlipped(false);
    } else {
      onBack("topicSelect");
    }
  };

  const handleBack = () => {
    onBack("topicSelect");
  };

  // Loading screen
  if (questions.length === 0) {
    return (
      <div className="App">
        <div className="container" style={{ textAlign: "center", padding: "60px 20px" }}>
          <div className="subtitle">Загрузка вопросов...</div>
          <div style={{ marginTop: "20px", color: "#999" }}>Пожалуйста, подождите</div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="App">
      <div className="container">
        {/* Шапка с кнопкой назад */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <button onClick={handleBack} className="btn-back">
            ← Назад к темам
          </button>

          {/* Индикатор прогресса компактный */}
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "6px 15px",
              borderRadius: "20px",
              fontSize: "0.9em",
              fontWeight: "600",
            }}
          >
            {current + 1}/{questions.length}
          </div>
        </div>

        {/* Прогресс бар */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Текстовый прогресс */}
        <div className="progress">
          Карточка {current + 1} из {questions.length}
          {currentQuestion.topic && (
            <span
              style={{
                marginLeft: "10px",
                color: "#667eea",
                fontWeight: "500",
                fontSize: "0.9em",
              }}
            >
              • {currentQuestion.topic}
            </span>
          )}
        </div>

        {/* Карточка с вопросом */}
        <FlipCard question={currentQuestion} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

        <div >
          <button
            onClick={handleNextCard}
            className="btn-next"
          >
            {current < questions.length - 1
              ? "Следующая карточка"
              : "Завершить и вернуться к темам"}
          </button>
        </div>
      </div>
    </div>
  );
}
