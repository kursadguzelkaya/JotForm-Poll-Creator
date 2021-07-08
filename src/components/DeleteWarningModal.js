import React from 'react';
import ReactDom from 'react-dom';

import '../styles/DeleteWarningModal.css';

const DeleteWarningModal = ({ setShowDeleteModal, pollId, deletePollRequest }) => {
  console.log('delete');
  console.log(pollId);
  return ReactDom.createPortal(
    <>
      <div className="overlay">{}</div>
      <div className="delete-modal">
        <div className="warning">
          <p>You can not undo after you delete a poll. Still do you want to delete this poll?</p>
        </div>
        <div className="btn-container">
          <button id="cancel-button-modal" type="button" className="btn" onClick={() => setShowDeleteModal(false)}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="icon svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
            </svg>
            <span className="none-mobile-600">Cancel</span>
          </button>
          <button id="delete-button-modal" type="button" className="btn" onClick={() => { deletePollRequest(pollId); setShowDeleteModal(false); }}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 16" width="11" height="16">
              <path fill="currentColor" d="M7.91 13.6V6.47H6.62c-.21 0-.21 0-.21.23V13.6h1.5zm-4.52.01h1.29c.21 0 .21 0 .21-.23V6.7v-.12c-.02-.04-.07-.1-.1-.1H3.4v7.13zM1.1 4.1h9.1v10.25c0 .95-.66 1.64-1.56 1.64H2.66c-.9 0-1.56-.7-1.56-1.64V4.3 4.1zM0 3.52v-1.8h.2l2.76-.01c.09 0 .2-.06.27-.13.2-.21.38-.45.58-.66.06-.07.15-.11.23-.11H6.9c.07 0 .16.04.22.1.2.22.38.46.59.67.06.07.17.13.27.13h2.95v1.81H0z" fillRule="evenodd" />
            </svg>
            <span className="none-mobile-600">Delete</span>
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default DeleteWarningModal;
