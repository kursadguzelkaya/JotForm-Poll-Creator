// import { instanceOf } from 'prop-types';
import { number, string } from 'prop-types';
import React from 'react';
// import I from 'immutable';

import '../styles/Result.css';

const OptionProgress = ({ optionText, optionResult }) => {
  console.log('OptionProgress');
  return (
    <div className="option">
      <p>{optionText}</p>
      <div className="progress">
        <div className="progress-done" data_done={optionResult} style={{ width: `${optionResult}%`, opacity: '1' }}>
          {optionResult > 15 ? `${optionResult}%` : null}
        </div>
        <span className="percantage">
          {' '}
          {optionResult <= 15 ? `${optionResult}%` : null}
          {' '}
        </span>
      </div>
    </div>
  );
};

OptionProgress.propTypes = {
  optionText: string,
  optionResult: number,
};

OptionProgress.defaultProps = {
  optionText: '',
  optionResult: 0,
};

export default OptionProgress;
