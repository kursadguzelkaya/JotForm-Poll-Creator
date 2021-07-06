import React, { useState } from 'react';
import { func, instanceOf, string } from 'prop-types';
import { Link } from 'react-router-dom';
import I from 'immutable';

import '../styles/MyPolls.css';
import PollInfo from './PollInfo';
import DetailsModal from './DetailsModal';

const MyPolls = ({ polls, status, deletePollRequest }) => {
  console.log(polls);
  const [showModal, setShowModal] = useState(false);
  const [pollId, setPollId] = useState(0);

  return (
    <div className="my-polls">
      <div className="polls">
        <h1>My Polls</h1>
        {status === 'loading' ? (<h1>loading...</h1>) : (
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
                deletePollRequest={deletePollRequest}
              />
            ))}
            {showModal ? <DetailsModal poll={polls.find(poll => poll.get('id') === pollId)} setShowModal={setShowModal} /> : null}
          </div>
        )}
        <Link to="/createPoll">
          <button id="create-new-poll-btn" className="btn" type="button">
            <i className="far fa-file-alt icon" />
            Create New Poll
          </button>
        </Link>
      </div>
    </div>
  );
};

MyPolls.propTypes = {
  polls: instanceOf(I.List),
  status: string,
  deletePollRequest: func,
};

MyPolls.defaultProps = {
  polls: I.fromJS([]),
  status: string,
  deletePollRequest: f => f,
};

export default MyPolls;
