import { func, instanceOf } from 'prop-types';
import React, { useState } from 'react';
import I from 'immutable';
import { io } from 'socket.io-client';

import '../styles/Poll.css';

const socket = io('http://localhost:4000');
console.log(socket);

const Poll = ({
  poll,
  submitPoll,
  updatePoll,
  history,
}) => {
  const [selected, setSelected] = useState('');

  const submitClick = () => {
    submitPoll({
      selected,
      id: poll.get('id'),
      callback: () => history.push(`/result/${poll.get('id')}`),
    });
    socket.emit('submit-poll', selected);
  };

  socket.on('update-result', value => {
    console.log(value);
    updatePoll({ selected: value, id: poll.get('id') });
  });

  return (
    <div className="poll-comp">
      <div className="poll">
        <h1>{ poll.get('pollName') }</h1>
        <div className="poll-questions">
          <div className="question">
            <h2>
              {poll.getIn(['question', 'questionText'], 'fallback')}
            </h2>
            <div className="radio-buttons-wrapper">
              {poll.getIn(['question', 'options']).map((option, index) => {
                const optionId = `option${index.toString()}`;
                return (
                  <label key={option} htmlFor={optionId} className="radio">
                    <input type="radio" className="radio-input" name="radioButtonTest" value="1" id={optionId} onChange={() => setSelected(option.get('optionText'))} />
                    <div className="radio-radio">{}</div>
                    {option.get('optionText')}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <button id="submit" className="btn" type="button" onClick={submitClick}>
          <i className="far fa-paper-plane icon" />
          Submit
        </button>
      </div>
    </div>
  );
};

Poll.propTypes = {
  poll: instanceOf(I.Map).isRequired,
  submitPoll: func,
  updatePoll: func,
  history: instanceOf(I.Map).isRequired,
};

Poll.defaultProps = {
  submitPoll: f => f,
  updatePoll: f => f,
};

export default Poll;
