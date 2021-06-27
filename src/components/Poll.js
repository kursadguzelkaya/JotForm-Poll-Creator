import { func, instanceOf } from 'prop-types';
import React, { useState } from 'react';
import I from 'immutable';

import '../styles/Poll.css';

const Poll = ({ poll, updatePollResult }) => {
  const [selected, setSelected] = useState('');
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
        <button id="submit" className="btn" type="button" onClick={() => updatePollResult({ selected, id: poll.get('id') })}>Submit</button>
      </div>
    </div>
  );
};

Poll.propTypes = {
  poll: instanceOf(I.Map).isRequired,
  updatePollResult: func,
};

Poll.defaultProps = {
  updatePollResult: f => f,
};

export default Poll;
