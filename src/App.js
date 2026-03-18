import React, { useState } from "react";
import "./App.css";
import { blocks } from "./data/blocks";
import { jsBrowserQuestions } from "./data/jsBrowser";
import { webApiQuestions } from "./data/webApi";
import { cssQuestions } from "./data/css";
import { javaScriptQuestions } from "./data/javascript";
import { oopFpQuestions } from "./data/oopFp";
import { asyncJsQuestions } from "./data/asyncJs";
import { ecmaScriptQuestions } from "./data/ecmaScript";
import { architectureQuestions } from "./data/architecture";
import { reactQuestions } from "./data/react";
import { stateManagementQuestions } from "./data/stateManagement";
import { typeScriptQuestions } from "./data/typescript";
import { htmlQuestions } from "./data/html";
import CardsScreen from "./components/CardsScreen";
import { BossQuestions } from "./data/boss";

const questionsByBlock = {
  "js-browser": jsBrowserQuestions,
  "web-api": webApiQuestions,
  css: cssQuestions,
  javascript: javaScriptQuestions,
  "oop-fp": oopFpQuestions,
  "async-js": asyncJsQuestions,
  ecmascript: ecmaScriptQuestions,
  architecture: architectureQuestions,
  react: reactQuestions,
  "state-management": stateManagementQuestions,
  typescript: typeScriptQuestions,
  html: htmlQuestions,
  BOSS: BossQuestions,
};

function App() {
  const [screen, setScreen] = useState("blockSelect");
  const [cardsMode, setCards] = useState("cardsSelect");
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(new Set());
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState(new Set());

  const getQuestionsByTopics = (allQuestions, topics, blockTopics) => {
    return allQuestions.filter((q) => topics.has(q.topic) || !blockTopics.includes(q.topic));
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleBlockSelect = (blockId) => {
    const block = blocks.find((b) => b.id === blockId);
    setSelectedBlock(block);
    setSelectedTopics(new Set(block.topics));
    setScreen("topicSelect");
  };

  const handleBackToBlocks = () => {
    setScreen("blockSelect");
    setSelectedBlock(null);
  };

  const handleStartTest = () => {
    if (selectedTopics.size === 0) {
      alert("Выбери хотя бы одну тему");
      return;
    }
    const allQuestionsForBlock = questionsByBlock[selectedBlock.id] || [];
    const filtered = getQuestionsByTopics(
      allQuestionsForBlock,
      selectedTopics,
      selectedBlock.topics
    );
    if (filtered.length === 0) {
      alert("Пока нет вопросов на выбранные темы");
      return;
    }
    const shuffled = shuffleArray(filtered);
    setQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setIncorrectCount(0);
    setSelectedAnswers(new Set());
    setShowResult(false);
    setShowFeedback(false);
    setScreen("test");
  };

  const handleStartCards = () => {
    if (selectedTopics.size === 0) {
      alert("Выбери хотя бы одну тему");
      return;
    }
    const allQuestionsForBlock = questionsByBlock[selectedBlock.id] || [];
    const filtered = getQuestionsByTopics(
      allQuestionsForBlock,
      selectedTopics,
      selectedBlock.topics
    );
    if (filtered.length === 0) {
      alert("Пока нет вопросов на выбранные темы");
      return;
    }
    const shuffled = shuffleArray(filtered);
    setQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setIncorrectCount(0);
    setSelectedAnswers(new Set());
    setShowResult(false);
    setShowFeedback(false);
    setCards("cards");
  };

  const handleTopicChange = (topic) => {
    const newTopics = new Set(selectedTopics);
    if (newTopics.has(topic)) {
      newTopics.delete(topic);
    } else {
      newTopics.add(topic);
    }
    setSelectedTopics(newTopics);
  };

  const handleSelectAllTopics = () => {
    if (selectedTopics.size === selectedBlock.topics.length) {
      setSelectedTopics(new Set());
    } else {
      setSelectedTopics(new Set(selectedBlock.topics));
    }
  };

  const handleBackFromTest = () => {
    setScreen("topicSelect");
  };

  const handleAnswerChange = (index) => {
    if (showFeedback) return;
    const newAnswers = new Set(selectedAnswers);
    if (newAnswers.has(index)) {
      newAnswers.delete(index);
    } else {
      newAnswers.add(index);
    }
    setSelectedAnswers(newAnswers);
  };

  const handleSubmitAnswer = () => {
    const q = questions[current];
    const correctSet = new Set(q.correct);
    const isCorrect =
      selectedAnswers.size === correctSet.size &&
      [...selectedAnswers].every((i) => correctSet.has(i));

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelectedAnswers(new Set());
      setShowFeedback(false);
    } else {
      setShowResult(true);
    }
  };

  // Block select screen
  if (screen === "blockSelect") {
    return (
      <div className="App">
        <div className="container">

          <h1 className="title">🚀 Frontend Interview Test</h1>
          <p className="subtitle">Выбери блок:</p>
                    <div className="blocks-grid">
            {blocks.map((block) => (
              <div
                key={block.id}
                className="block-card"
                style={{ background: block.color }}
                onClick={() => handleBlockSelect(block.id)}
              >
                <h3>{block.name}</h3>
                <p>{block.description}</p>
                <span className="block-topics-count">{block.topics.length} тем</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (cardsMode === "cards") {
    return (
      <div className="App">
        <div className="container">
          <button onClick={() => setCards("cardsSelect")} className="btn-back">
            ← Назад
          </button>
          <h1 className="title">{selectedBlock.name} - Карточки</h1>
          <CardsScreen questions={questions} onBack={() => setCards("cardsSelect")} />
          <div style={{ textAlign: "center", marginTop: 20 }}></div>
        </div>
      </div>
    );
  }

  if (screen === "topicSelect" && selectedBlock) {
    return (
      <div className="App">
        <div className="container">
          <button onClick={handleBackToBlocks} className="btn-back">
            ← Назад
          </button>
          <h1 className="title">{selectedBlock.name}</h1>
          <div className="topics-container">
            <h2>Выбери темы:</h2>
            <button onClick={handleSelectAllTopics} className="btn-select-all">
              {selectedTopics.size === selectedBlock.topics.length ? "Снять все" : "Выбрать все"}
            </button>
            <div className="topics-grid">
              {selectedBlock.topics.map((topic) => (
                <label key={topic} className="topic-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedTopics.has(topic)}
                    onChange={() => handleTopicChange(topic)}
                  />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </div>
          <button onClick={handleStartTest} className="btn-start">
            Начать тест
          </button>
          <button onClick={handleStartCards} className="btn-start">
            Карточки
          </button>
        </div>
      </div>
    );
  }

  // Result screen
  if (showResult) {
    const percent = Math.round((score / questions.length) * 100);
    let level =
      percent >= 80
        ? "🔥 Готов к собеседованию"
        : percent >= 60
        ? "⚠️ Средний уровень"
        : "❌ Нужно повторить теорию";

    return (
      <div className="App">
        <div className="container result-container">
          <h2 className="result-title">Результат теста</h2>
          <div className="result-stats">
            <div className="stat correct-stat">
              <span className="stat-number">✅ {score}</span>
              <span className="stat-label">Правильных ответов</span>
            </div>
            <div className="stat incorrect-stat">
              <span className="stat-number">❌ {incorrectCount}</span>
              <span className="stat-label">Неправильных ответов</span>
            </div>
          </div>
          <div className="result-info">
            <p className="percentage">{percent}%</p>
            <p className="level">{level}</p>
          </div>
          <div className="result-buttons">
            <button onClick={() => setScreen("topicSelect")} className="btn-start">
              Выбрать другие темы
            </button>
            <button onClick={() => setScreen("blockSelect")} className="btn-start btn-back-home">
              Выбрать другой блок
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading screen
  if (questions.length === 0) {
    return (
      <div className="App">
        <p>Загрузка вопросов...</p>
      </div>
    );
  }

  // Test screen
  const q = questions[current];
  const correctSet = new Set(q.correct);
  const isAnswered = selectedAnswers.size > 0;
  const isCorrect =
    isAnswered &&
    selectedAnswers.size === correctSet.size &&
    [...selectedAnswers].every((i) => correctSet.has(i));

  return (
    <div className="App">
      <div className="container">
        <button onClick={handleBackFromTest} className="btn-back">
          ← Назад
        </button>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="progress">
          Вопрос {current + 1} из {questions.length}
        </div>

        <div className="question-card">
          <h3 className="topic-badge">{q.topic}</h3>
          <p className="question">{q.question}</p>

          <div className="options">
            {q.options.map((opt, i) => {
              const isCorrectAnswer = correctSet.has(i);
              const isSelected = selectedAnswers.has(i);
              let optionClass = "option";

              if (showFeedback) {
                if (isCorrectAnswer) {
                  optionClass += " correct";
                } else if (isSelected && !isCorrectAnswer) {
                  optionClass += " incorrect";
                }
              }

              return (
                <label key={i} className={optionClass}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleAnswerChange(i)}
                    disabled={showFeedback}
                  />
                  <span>{opt}</span>
                </label>
              );
            })}
          </div>

          {!showFeedback && (
            <button onClick={handleSubmitAnswer} disabled={!isAnswered} className="btn-submit">
              Ответить
            </button>
          )}

          {showFeedback && (
            <div className="answer-feedback">
              <p className={isCorrect ? "correct-text" : "incorrect-text"}>
                {isCorrect ? "✅ Верно" : "❌ Неверно"}
              </p>
              <div className="explanation-box">
                <b>Объяснение:</b> {q.explanation}
              </div>
              <button onClick={handleNextQuestion} className="btn-next">
                {current < questions.length - 1 ? "Дальше" : "Завершить"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
