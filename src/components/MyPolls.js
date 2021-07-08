import React, { useState } from 'react';
import { func, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import I from 'immutable';

import '../styles/MyPolls.css';
import PollInfo from './PollInfo';
import DetailsModal from './DetailsModal';
import DeleteWarningModal from './DeleteWarningModal';
import Loading from './Loading';

const MyPolls = ({ polls, status, deletePollRequest }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pollId, setPollId] = useState(0);

  return (
    <div className="my-polls">
      <div className="polls">
        <h1>My Polls</h1>
        {status === 'loading' ? (<Loading />) : (
          <div className="poll-infos">
            {polls.map(poll => (
              <PollInfo
                key={poll}
                id={poll.get('id')}
                pollName={poll.get('pollName')}
                date={poll.get('date')}
                votes={poll.get('votes').toString()}
                showModal={showModal}
                setShowModal={setShowModal}
                setPollId={setPollId}
                showDeleteModal={showDeleteModal}
                setShowDeleteModal={setShowDeleteModal}
              />
            ))}
            {showModal ? <DetailsModal poll={polls.find(poll => poll.get('id') === pollId)} setShowModal={setShowModal} /> : null}
            {showDeleteModal
              ? (
                <DeleteWarningModal
                  pollId={pollId}
                  setShowDeleteModal={setShowDeleteModal}
                  deletePollRequest={deletePollRequest}
                />
              )
              : null}
          </div>
        )}
        <Link to="/createPoll">
          <button id="create-new-poll-btn" className="btn" type="button">
            <svg className="icon" viewBox="0 0 54 64" xmlns="http://www.w3.org/2000/svg">
              <g fillRule="nonzero" fill="none">
                <path d="M50.6217 63.8702H2.8123C1.2585 63.8702 0 62.6275 0 61.0932V2.777C0 1.2427 1.2585 0 2.8123 0h33.7478l16.874 16.6618v44.4314c0 1.5343-1.2586 2.777-2.8124 2.777z" fill="#EDEEF5" />
                <path d="M36.923 0v13.8848c0 1.5343 1.2586 2.777 2.8124 2.777H53.797L36.923 0z" fill="#C9CCDF" />
              </g>
            </svg>

            Create New Poll
          </button>
        </Link>
      </div>
    </div>
  );
};

MyPolls.propTypes = {
  polls: shape({}),
  status: string,
  deletePollRequest: func,
};

MyPolls.defaultProps = {
  polls: I.fromJS([]),
  status: string,
  deletePollRequest: f => f,
};

export default MyPolls;
