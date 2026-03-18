import React, { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";
import FlipCard from "./FlipCard";

export default function TestScreen({ topic, finishTest }) {
  const topicQuestions = questions.filter(q => q.topic === topic);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (index) => {
    answers[current] = index;
    setAnswers([...answers]);
    if (current + 1 < topicQuestions.length) setCurrent(current + 1);
    else finishTest(answers);
  };

  return (<>
    <QuestionCard
      question={topicQuestions[current]}
      currentIndex={current}
      total={topicQuestions.length}
      onAnswer={handleAnswer}
    />
  </>);
}
