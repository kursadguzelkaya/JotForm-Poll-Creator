import React, { useState } from 'react';
import { func, object } from 'prop-types';
import I from 'immutable';

import '../styles/PollCreate.css';

const PollCreate = ({ addNewPoll, polls }) => {
  const [pollName, setPollName] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);

  const submitPoll = () => {
    addNewPoll(I.fromJS({
      id: polls.size + 1,
      pollName,
      date: '12.12.21',
      votes: 0,
      status: 'ongoing',
      question: {
        question,
        options,
        results: [],
      },
    }));
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
        <button id="submit" className="btn" type="button" onClick={() => submitPoll()}>Submit</button>
      </div>
    </div>
  );
};

PollCreate.propTypes = {
  addNewPoll: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  polls: object,
};

PollCreate.defaultProps = {
  polls: [],
};

export default PollCreate;
