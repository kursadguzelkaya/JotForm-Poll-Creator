import React, { useState } from 'react';
import { func, instanceOf } from 'prop-types';
import I from 'immutable';

import '../styles/PollCreate.css';

const PollCreate = ({
  createPollRequest,
  polls,
  history,
  errors,
}) => {
  const [pollName, setPollName] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const submitPoll = () => {
    const newOptions = options.map(option => ({ optionText: option, votes: 0 }));
    createPollRequest({
      poll: I.fromJS({
        id: polls.size + 1,
        pollName,
        date: '12.12.21',
        votes: 0,
        status: 'ongoing',
        question: {
          questionText: question,
          options: newOptions,
          results: [],
        },
      }),
      history,
    });
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
            <button className="btn plus-btn" type="button" onClick={() => setOptions([...options, ''])}>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" className="icon svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" />
              </svg>
              New Option
            </button>
            {options.map((value, index) => <input className="input option-input" type="text" placeholder="New option" value={options[index]} onChange={e => updateOptionValue(index, e)} />)}
          </div>
        </div>
        {errors.size === 0 ? null : (
          <div className="errors">
            {errors.map(error => (
              <div className="error">
                <p>{error.get('errorMessage', 'error')}</p>
              </div>
            ))}
          </div>
        )}
        <button id="submit" className="btn" type="button" onClick={() => submitPoll()}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" width="15" height="15">
            <path fill="currentColor" d="M14.66 7.33a.5.5 0 00-.27-.44L1.36.2a.5.5 0 00-.7.57L2.1 6.3l5.72 1.04L2.1 8.38.65 13.9a.5.5 0 00.71.57l13.03-6.7a.5.5 0 00.27-.44z" />
          </svg>
          Submit
        </button>
      </div>
    </div>
  );
};

PollCreate.propTypes = {
  createPollRequest: func.isRequired,
  polls: instanceOf(I.List).isRequired,
  history: instanceOf(I.Map).isRequired,
  errors: instanceOf(I.List),
};

PollCreate.defaultProps = {
  errors: I.fromJS({}),
};

export default PollCreate;
