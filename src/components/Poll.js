/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import { func, object } from 'prop-types';

import '../styles/Poll.css';

const Poll = () => {
  console.log('Poll');
  return (
    <div className="poll-comp">
      <div className="poll">
        <h1>Poll Name</h1>
        <div className="poll-questions">
          <div className="question">
            <h2>Q) Choose best movie</h2>
            <div className="radio-buttons-wrapper">
              <input type="radio" className="radio-button" name="radioButtonTest" value="1" id="button1" checked />
              <label htmlFor="button1">Button 1</label>
              <input type="radio" className="radio-button" name="radioButtonTest" value="2" id="button2" />
              <label htmlFor="button2">Button 2</label>
              <input type="radio" className="radio-button" name="radioButtonTest" value="3" id="button3" />
              <label htmlFor="button3">Button 3</label>
            </div>
          </div>
        </div>
        <button id="submit" className="btn" type="button" onClick={() => console.log('Submit')}>Submit</button>
      </div>
    </div>
  );
};

// Poll.propTypes = {
//   addNewPoll: func.isRequired,
//   // eslint-disable-next-line react/forbid-prop-types
//   polls: object,
// };

// Poll.defaultProps = {
//   polls: [],
// };

export default Poll;
