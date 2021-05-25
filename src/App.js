import React, { useState, useEffect } from 'react';

const API_URL =
  'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  return questions.length > 0 ? (<div className='container'>
    <div className='bg-white text-purple-800 p-10 rounded-lg shadow-md w-full'>
      <h2
        className='text-2xl'
        dangerouslySetInnerHTML={{ __html: questions[0].question }}
      >
      </h2>
    </div>

    <div className='grid grid-cols-2 gap-6 mt-4'>
    <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{questions[0].correct_answer}</button>
    <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{questions[0].incorrect_answers[0]}</button>
    <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{questions[0].incorrect_answers[1]}</button>
    <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{questions[0].incorrect_answers[2]}</button>
    </div>
  </div>) : <h1>Hey bro... we're loading!</h1>
}

export default App;
