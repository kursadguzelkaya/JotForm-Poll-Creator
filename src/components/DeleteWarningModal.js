import React from 'react';
import ReactDom from 'react-dom';

import '../styles/DeleteWarningModal.css';
import { ReactComponent as CancelIcon } from '../assets/icons/times-circle-solid.svg';
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg';

const DeleteWarningModal = ({ setShowDeleteModal, pollId, deletePollRequest }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay">{}</div>
      <div className="delete-modal">
        <div className="warning">
          <p>You can not undo after you delete a poll. Still do you want to delete this poll?</p>
        </div>
        <div className="btn-container">
          <button id="cancel-button-modal" type="button" className="btn" onClick={() => setShowDeleteModal(false)}>
            <CancelIcon className="icon" />
            <span className="none-mobile-600">Cancel</span>
          </button>
          <button id="delete-button-modal" type="button" className="btn" onClick={() => { deletePollRequest(pollId); setShowDeleteModal(false); }}>
            <TrashIcon className="icon" />
            <span className="none-mobile-600">Delete</span>
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default DeleteWarningModal;
