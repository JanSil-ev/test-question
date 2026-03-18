export default function FlipCard({ question, setIsFlipped, isFlipped }) {
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const correctAnswer = question.options[question.correct[0]];

  return (
    <div style={styles.card}>
      <div
        style={{
          ...styles.flipCardInner,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div style={styles.flipCardFront}>
          <div style={styles.header}>
            <h2 style={styles.question}>{question.question}</h2>
          </div>
          <button onClick={handleFlip} style={styles.flipButton}>
            Проверить ответ
          </button>
        </div>
        <div style={styles.flipCardBack}>
          <div style={styles.header}>
            <h2 style={styles.question}>Правильный ответ:</h2>
            <p style={styles.correctAnswer}>{correctAnswer}</p>
            <div style={styles.explanationBox}>
{question.explanation}
            </div>
          </div>
          <button onClick={handleFlip} style={styles.flipButton}>
            Вернуться к вопросу
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#3498db",
    fontSize: 16,
    cursor: "pointer",
    padding: "10px 0",
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#e9ecef",
    borderRadius: 4,
    marginBottom: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3498db",
    borderRadius: 4,
    transition: "width 0.3s ease",
  },
  progressText: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 20,
    textAlign: "right",
  },
  card: {
    width: "100%",
    minHeight: 250,
    backgroundColor: "transparent",
    perspective: "1000px",
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    minHeight: 400,
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    minHeight: 350,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    transform: "rotateY(0deg)",
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    minHeight: 350,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transform: "rotateY(180deg)",
  },
  topicBadge: {
    display: "inline-block",
    backgroundColor: "#e9ecef",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 14,
    color: "#495057",
    marginBottom: 20,
  },
  questionContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    lineHeight: 1.6,
    color: "#212529",
    margin: 0,
    textAlign: "center",
    width: "100%",
  },
  answerContainer: {
    flex: 1,
    textAlign: "left",
    marginBottom: 20,
    overflowY: "auto",
  },
correctAnswer: {
  fontSize: 18,                    
  color: "#2c3e50",                
  marginBottom: 20,                 
  padding: 25,                      
  backgroundColor: "#f0f9ff",      
  borderLeft: "5px solid #3498db", 
  borderRadius: 8,                  
  lineHeight: 1.6,                  
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)" 
},
  explanationBox: {
  width: "100%",                   // занимает всю ширину родителя
  backgroundColor: "#f1f3f4",     // светлый фон
  padding: 12,                     // внутренний отступ
  borderRadius: 8,                 // закругленные углы
  border: "1px solid #e9ecef",    // легкая рамка
  fontSize: 12,                    // размер текста
  lineHeight: 1.6,                 // удобный интерлиньяж
  color: "#495057",                // основной цвет текста
  fontFamily: "monospace",         // моноширинный шрифт для кода
  overflowX: "auto",               // горизонтальная прокрутка при длинной строке
  whiteSpace: "pre-wrap",          // перенос строки при необходимости
  wordWrap: "break-word",          // перенос длинных слов
  marginTop: 12, 
  },
  flipButton: {
    padding: "12px 24px",
    borderRadius: 30,
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.3s",
    alignSelf: "center",
    width: "fit-content",
  },
  nextButton: {
    padding: "12px 24px",
    borderRadius: 30,
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  actionsContainer: {
    display: "flex",
    gap: 15,
    justifyContent: "center",
    marginTop: 20,
  },

};
