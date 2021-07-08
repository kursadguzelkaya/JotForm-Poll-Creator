import { func, instanceOf } from 'prop-types';
import React from 'react';
import I from 'immutable';
import ReactDom from 'react-dom';

import '../styles/DetailsModal.css';
import QuestionResult from './QuestionResult';

const DetailsModal = ({ poll, setShowModal }) => {
  console.log('Result');
  return ReactDom.createPortal(
    <>
      <div className="overlay">{}</div>
      <div className="modal">
        <h1>{poll.get('pollName')}</h1>
        <div className="poll-questions">
          <QuestionResult className="question-result" question={poll.get('question')} totalVotes={poll.get('votes')} />
        </div>
        <div className="btn-container">
          <button id="close-modal" type="button" className="btn" onClick={() => setShowModal(false)}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="icon svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
            </svg>
            Close
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

DetailsModal.propTypes = {
  poll: instanceOf(I.Map).isRequired,
  setShowModal: func,
};

DetailsModal.defaultProps = {
  setShowModal: f => f,
};

export default DetailsModal;
