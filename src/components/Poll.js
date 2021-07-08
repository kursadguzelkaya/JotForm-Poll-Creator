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

  const options = poll.getIn(['question', 'options']).toJS();

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
              {options.map((option, index) => {
                const optionId = `option${index.toString()}`;

                return (
                  <label key={optionId} htmlFor={optionId} className="radio">
                    <input
                      type="radio"
                      className="radio-input"
                      name="radioButtonTest"
                      value="1"
                      id={optionId}
                      onChange={() => setSelected(option.optionText)}
                    />
                    <div className="radio-radio" />
                    {option.optionText}
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
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" width="15" height="15">
            <path fill="currentColor" d="M14.66 7.33a.5.5 0 00-.27-.44L1.36.2a.5.5 0 00-.7.57L2.1 6.3l5.72 1.04L2.1 8.38.65 13.9a.5.5 0 00.71.57l13.03-6.7a.5.5 0 00.27-.44z" />
          </svg>
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
