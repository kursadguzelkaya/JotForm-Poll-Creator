import { func, instanceOf, shape } from 'prop-types';
import React, { useState } from 'react';
import I from 'immutable';

import '../styles/Poll.css';

const Poll = ({
  poll,
  submitPoll,
  history,
  errors,
}) => {
  const [selected, setSelected] = useState('');

  const submitClick = () => {
    submitPoll({
      selected,
      id: poll.get('id'),
      callback: () => history.push(`/result/${poll.get('id')}`),
    });
  };

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
        {errors.size === 0 ? null : (
          <div className="errors">
            {errors.map(error => (
              <div className="error">
                <p>{error.get('errorMessage', 'error')}</p>
              </div>
            ))}
          </div>
        )}
        <button id="submit" className="btn" type="button" onClick={submitClick}>
          <i className="far fa-paper-plane icon" />
          Submit
        </button>
      </div>
    </div>
  );
};

Poll.propTypes = {
  poll: instanceOf(I.Map),
  submitPoll: func,
  history: shape({}),
  errors: instanceOf(I.List),
};

Poll.defaultProps = {
  poll: I.fromJS({}),
  submitPoll: f => f,
  errors: I.fromJS({}),
  history: {},
};

export default Poll;
