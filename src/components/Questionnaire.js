import React from 'react';

const Button = ({ answer }) => (
  <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>{answer}</button>
);

const Questionnaire = ({ data: { question, correct_answer, incorrect_answers }}) =>  {
  return (<div>
    <div className='bg-white text-purple-800 p-10 rounded shadow-md'>
      <h2
        className='text-2xl'
        dangerouslySetInnerHTML={{ __html: question }}
      />
    </div>

    <div className='grid grid-cols-2 gap-6 mt-4'>
      <Button answer={correct_answer} />
      <Button answer={incorrect_answers[0]} />
      <Button answer={incorrect_answers[1]} />
      <Button answer={incorrect_answers[2]} />
    </div>
  </div>)
}

export default Questionnaire;
