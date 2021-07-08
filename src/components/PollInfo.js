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
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
              <g fillRule="nonzero">
                <path d="M8 4C2.8 4 0 7.8 0 14c1.5-2.4 2.7-4 8-4v4l8-7-8-7v4z" />
                <path d="M8 4C2.8 4 0 7.8 0 14c1.5-2.4 2.7-4 8-4v4l8-7-8-7v4z" />
              </g>
            </svg>
          </button>
        </Link>
        <button id="details-btn" className="btn" type="button" onClick={() => { setShowModal(!showModal); setPollId(id); }}>
          <svg className="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0ZM8.93023 6.69767H7.06977V12.6512H8.93023V6.69767ZM8 3.72093C7.48951 3.72093 7.06977 4.14067 7.06977 4.66251C7.06977 5.16166 7.48951 5.58139 8 5.58139C8.52184 5.58139 8.93023 5.16166 8.93023 4.66251C8.93023 4.14067 8.52184 3.72093 8 3.72093Z" fill="currentColor" />
          </svg>
          <span className="none-mobile">Details</span>
        </button>
        <button className="btn btn-red" type="button" onClick={() => { setShowDeleteModal(!showDeleteModal); setPollId(id); }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 16" width="11" height="16">
            <path fill="currentColor" d="M7.91 13.6V6.47H6.62c-.21 0-.21 0-.21.23V13.6h1.5zm-4.52.01h1.29c.21 0 .21 0 .21-.23V6.7v-.12c-.02-.04-.07-.1-.1-.1H3.4v7.13zM1.1 4.1h9.1v10.25c0 .95-.66 1.64-1.56 1.64H2.66c-.9 0-1.56-.7-1.56-1.64V4.3 4.1zM0 3.52v-1.8h.2l2.76-.01c.09 0 .2-.06.27-.13.2-.21.38-.45.58-.66.06-.07.15-.11.23-.11H6.9c.07 0 .16.04.22.1.2.22.38.46.59.67.06.07.17.13.27.13h2.95v1.81H0z" fillRule="evenodd" />
          </svg>
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
