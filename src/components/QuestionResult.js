import { instanceOf, number } from 'prop-types';
import React from 'react';
import I from 'immutable';

import '../styles/Result.css';
import OptionProgress from './OptionProgress';

const QuestionResult = ({ question, totalVotes }) => (
  <div className="question">
    <h2>{question.get('questionText')}</h2>
    <div className="options">
      {question.get('options').map(option => (<OptionProgress key={option} optionText={option.get('optionText')} optionResult={option.get('votes') !== 0 ? parseInt((option.get('votes') / totalVotes) * 100, 10) : 0} />))}
    </div>
  </div>
);

QuestionResult.propTypes = {
  question: instanceOf(I.Map).isRequired,
  totalVotes: number,
};

QuestionResult.defaultProps = {
  totalVotes: 0,
};

export default QuestionResult;
