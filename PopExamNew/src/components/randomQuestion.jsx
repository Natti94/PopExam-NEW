import React, { useState, useEffect } from "react";

const Question = ({ question, onAnswerSubmit }) => {
  return (
    <div className="flex items-center space-x-4">
      <h2>Question:</h2>
      <span>{question}</span>
      <input 
        placeholder="Your answer" 
        className="border p-2 rounded" 
        onChange={(e) => onAnswerSubmit(e.target.value)} 
      />
    </div>
  );
};

const RandomQuestion = () => {
  const [question, setQuestion] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState("");

  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const quiz = data.results[0];
        setQuestion(quiz.question);
        setCorrectAnswer(quiz.correct_answer);
      }
    } catch (error) {
      console.error("Error fetching question:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const onAnswerSubmit = (answer) => {
    setUserAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback(`Incorrect! The correct answer is: ${correctAnswer}`);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Question question={question} onAnswerSubmit={onAnswerSubmit} />
          
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4"
            onClick={handleSubmitAnswer}
          >
            Submit Answer
          </button>
          
          {feedback && <p className="mt-4">{feedback}</p>}

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4"
            onClick={fetchQuestion}
          >
            Get New Question
          </button>
        </>
      )}
    </div>
  );
};

export default RandomQuestion;
