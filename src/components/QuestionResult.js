import { instanceOf } from 'prop-types';
import React from 'react';
import I from 'immutable';

import '../styles/Result.css';
import OptionProgress from './OptionProgress';

const QuestionResult = ({ question }) => (
  <div className="question">
    <h2>{question.get('questionText')}</h2>
    <div className="options">
      {question.get('options').map(option => (<OptionProgress key={option} optionText={option.get('optionText')} optionResult={option.get('optionResult')} />))}
    </div>
  </div>
);

QuestionResult.propTypes = {
  question: instanceOf(I.Map).isRequired,
};

export default QuestionResult;
