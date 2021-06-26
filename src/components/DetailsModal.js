import { instanceOf } from 'prop-types';
import React from 'react';
import I from 'immutable';

import '../styles/Result.css';
import QuestionResult from './QuestionResult';

const DetailsModal = ({ poll }) => {
  console.log('Result');
  return (
    <div className="poll-comp">
      <div className="poll">
        <h1>{poll.get('pollName')}</h1>
        <div className="poll-questions">
          <QuestionResult question={poll.get('question')} />
        </div>
        <div className="btn-container">
          <button id="close-modal" type="button" className="btn">Close</button>
        </div>
      </div>
    </div>
  );
};

DetailsModal.propTypes = {
  poll: instanceOf(I.Map).isRequired,
};

export default DetailsModal;
