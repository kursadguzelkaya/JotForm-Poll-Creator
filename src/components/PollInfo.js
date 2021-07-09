import React from 'react';
import {
  bool, func, number, string,
} from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/PollInfo.css';
import { ReactComponent as ShareIcon } from '../assets/icons/forward.svg';
import { ReactComponent as DetailsIcon } from '../assets/icons/information.svg';
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg';
import { ReactComponent as UserIcon } from '../assets/icons/participants.svg';

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
  return (
    <div className="poll-info">
      <h2>{pollName}</h2>
      <p className="date none-mobile">{`created at: ${date}`}</p>
      <div className="attandence none-mobile-450">
        <p>{votes}</p>
        <UserIcon className="icon" />
      </div>
      <div className="btn-container">
        <Link to={`/share/${id}`}>
          <button className="btn btn-share" type="button">
            <ShareIcon className="icon" />
          </button>
        </Link>
        <button id="details-btn" className="btn" type="button" onClick={() => { setShowModal(!showModal); setPollId(id); }}>
          <DetailsIcon className="icon" />
          <span className="none-mobile">Details</span>
        </button>
        <button className="btn btn-red" type="button" onClick={() => { setShowDeleteModal(!showDeleteModal); setPollId(id); }}>
          <TrashIcon className="icon" />
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
