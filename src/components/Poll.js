import { instanceOf } from 'prop-types';
import React from 'react';
import I from 'immutable';

import '../styles/Poll.css';

const Poll = ({ poll }) => {
  console.log(poll.get('question', 'fallback'));
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
                    <input type="radio" className="radio-input" name="radioButtonTest" value="1" id={optionId} />
                    <div className="radio-radio">{}</div>
                    {option.get('optionText')}
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <button id="submit" className="btn" type="button" onClick={() => console.log('Submit')}>Submit</button>
      </div>
    </div>
  );
};

Poll.propTypes = {
  poll: instanceOf(I.Map).isRequired,
};

export default Poll;
