import { instanceOf, number } from 'prop-types';
import React from 'react';
import I from 'immutable';

import '../styles/Result.css';
import OptionProgress from './OptionProgress';

const QuestionResult = ({ question, totalVotes }) => {
  const options = question.get('options').toJS();
  return (
    <div className="question">
      <h2>{question.get('questionText')}</h2>
      <div className="options">
        {options.map(option => (
          <OptionProgress
            key={option}
            optionText={option.optionText}
            optionResult={option.votes !== 0 ? parseInt((option.votes / totalVotes) * 100, 10) : 0}
          />
        ))}
      </div>
    </div>
  );
};

QuestionResult.propTypes = {
  question: instanceOf(I.Map).isRequired,
  totalVotes: number,
};

QuestionResult.defaultProps = {
  totalVotes: 0,
};

export default QuestionResult;
