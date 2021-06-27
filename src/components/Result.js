import { instanceOf } from 'prop-types';
import React from 'react';
import I from 'immutable';

import '../styles/Result.css';
import QuestionResult from './QuestionResult';

const Result = ({ poll }) => {
  console.log('Result');
  return (
    <div className="poll-comp">
      <div className="poll">
        <h1>{poll.get('pollName')}</h1>
        <div className="poll-questions">
          <QuestionResult question={poll.get('question')} totalVotes={poll.get('votes')} />
        </div>
        <div className="btn-container">
          <button id="create-own-poll" type="button" className="btn">Create Your Own Poll</button>
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {
  poll: instanceOf(I.Map).isRequired,
};

export default Result;
