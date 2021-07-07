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
            <i className="fas fa-times-circle icon" />
            Cancel
          </button>
          <button id="delete-button-modal" type="button" className="btn" onClick={() => { deletePollRequest(pollId); setShowDeleteModal(false); }}>
            <i className="far fa-trash-alt icon" />
            Delete
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default DeleteWarningModal;
