import React, { useState } from 'react';
import './index.css';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
    },
    {
      questionText: 'Who is the prime minister of India ? ',
      answerOptions: [
        {answerText:'Narendra Modi' , isCorrect:true},
        {answerText:'Ramnath Kovind' , isCorrect:false},
        {answerText: 'Manmohan Singh' , isCorrect:false},
        {answerText:'Arvind Kejriwal' , isCorrect:false},

      ],
    },
    {
      questionText:'Who was the FIFA WORLD CUP 2022 (Qatar) champion?' , 
      answerOptions:[
        {answerText:'Argentina' , isCorrect:true},
        {answerText:'Australia' , isCorrect:false},
        {answerText:'France' , isCorrect:false},
        {answerText:'UAE', isCorrect:false},
      ],
    },
    {
      questionText:'Who was the innaugral champion of IPL 2008 ?' , 
      answerOptions:[
        {answerText:'CSK' , isCorrect:false},
        {answerText:'RCB' , isCorrect:false},
        {answerText:'RR' , isCorrect:true},
        {answerText:'DC', isCorrect:false},
      ],
    },
    {
      questionText:'Who was Sam Manekshaw?' , 
      answerOptions:[
        {answerText:'Admiral of the fleet' , isCorrect:false},
        {answerText:'Field Marshal' , isCorrect:true},
        {answerText:'Marshal of the Air Force' , isCorrect:false},
        {answerText:'Chief of Defence Staff', isCorrect:false},
      ],

    }
  ]
  const [currentQuestion , setcurrentQuestion] = useState(0);
  const [showScore , setshowScore] = useState(false);
  const [score , setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setcurrentQuestion(nextQuestion);
		} else {
			setshowScore(true);
		}
	};

  
  return (
    <div className='app'>
      {showScore ? (
        <div className='scoreSection'>
          You Scored {score} out of {questions.length}!
        </div>
      ):(
        <>
        <div className='questionSection'>
          <div className='quizSection'>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answerSection'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
          
        </>
      )

      }
    </div>
    
  );
}

export default App;
