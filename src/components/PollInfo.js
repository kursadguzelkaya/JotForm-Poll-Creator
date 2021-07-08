import React from 'react';
import {
  bool, func, number, string,
} from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/PollInfo.css';

const PollInfo = ({
  id,
  pollName,
  date,
  votes,
  setShowModal,
  showModal,
  setPollId,
  setShowDeleteModal,
  showDeleteModal,
}) => {
  console.log('PollInfo');
  return (
    <div className="poll-info">
      <h2>{pollName}</h2>
      <p className="date none-mobile">{`created at: ${date}`}</p>
      <div className="attandence none-mobile-450">
        <p>{votes}</p>
        <i className="fas fa-user icon" />
      </div>
      <div className="btn-container">
        <Link to={`/share/${id}`}>
          <button className="btn btn-share" type="button">
            <i className="fas fa-share icon" />
          </button>
        </Link>
        <button id="details-btn" className="btn" type="button" onClick={() => { setShowModal(!showModal); setPollId(id); }}>
          <i className="fas fa-info-circle icon" />
          <span className="none-mobile">Details</span>
        </button>
        <button className="btn btn-red" type="button" onClick={() => { setShowDeleteModal(!showDeleteModal); setPollId(id); }}>
          <i className="far fa-trash-alt icon" />
        </button>
      </div>
    </div>
  );
};

PollInfo.propTypes = {
  id: number,
  pollName: string.isRequired,
  date: string.isRequired,
  votes: string.isRequired,
  showModal: bool,
  showDeleteModal: bool,
  setShowModal: func,
  setShowDeleteModal: func,
  setPollId: func,
};

PollInfo.defaultProps = {
  id: 0,
  showModal: false,
  showDeleteModal: false,
  setShowModal: f => f,
  setShowDeleteModal: f => f,
  setPollId: f => f,
};

export default PollInfo;
