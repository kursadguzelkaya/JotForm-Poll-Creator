import React from 'react';
import {
  bool, func, number, string,
} from 'prop-types';

import '../styles/PollInfo.css';

const PollInfo = ({
  id,
  pollName,
  date,
  votes,
  setShowModal,
  showModal,
  setPollId,
  deletePollRequest,
}) => {
  console.log('PollInfo');
  return (
    <div className="poll-info">
      <h2>{pollName}</h2>
      <p className="date">{date}</p>
      <div className="attandence">
        <p>{votes}</p>
        <i className="fas fa-user icon" />
      </div>
      <div className="btn-container">
        <button className="btn" type="button" onClick={() => { setShowModal(!showModal); setPollId(id); }}>
          <i className="fas fa-info-circle icon" />
          Details
        </button>
        <button className="btn btn-red" type="button" onClick={() => deletePollRequest(id)}>
          <i className="fas fa-times-circle icon" />
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
  setShowModal: func,
  setPollId: func,
  deletePollRequest: func,
};

PollInfo.defaultProps = {
  id: 0,
  showModal: false,
  setShowModal: f => f,
  setPollId: f => f,
  deletePollRequest: f => f,
};

export default PollInfo;
