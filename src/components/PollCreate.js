import React, { useState } from 'react';
// import { object, func } from 'prop-types';

import '../styles/PollCreate.css';

const PollCreate = () => {
  const [pollName, setPollName] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);

  const submitPoll = () => {
    console.log('submit');
  };

  const updateOptionValue = (index, e) => {
    const newArr = [...options];
    newArr[index] = e.target.value;
    setOptions(newArr);
  };

  return (
    <div className="poll-create">
      <div className="poll">
        <h1>Create New Poll</h1>
        <input id="poll-name" className="input" type="text" placeholder="Poll Name" value={pollName} onChange={e => setPollName(e.target.value)} />
        <div className="poll-questions">
          <div className="question">
            <input className="input question-input" type="text" placeholder="Ask a question..." value={question} onChange={e => setQuestion(e.target.value)} />
            <button className="btn" type="button" onClick={() => setOptions([...options, ''])}>New Option</button>
            {options.map((value, index) => <input className="input option-input" type="text" placeholder="New option" value={options[index]} onChange={e => updateOptionValue(index, e)} />)}
          </div>
        </div>
        <button id="submit" className="btn" type="button" onSubmit={submitPoll}>Submit</button>
      </div>
    </div>
  );
};

// MyPolls.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   polls: object,
//   createNewPoll: func.isRequired,
//   openDetailsModel: func.isRequired,
// };

// MyPolls.defaultProps = {
//   polls: [],
// };

export default PollCreate;
