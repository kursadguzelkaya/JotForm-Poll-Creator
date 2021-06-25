import React from 'react';
import { func, instanceOf } from 'prop-types';
import { Link } from 'react-router-dom';
import I from 'immutable';

import '../styles/MyPolls.css';
import PollInfo from './PollInfo';

const MyPolls = ({ polls, createNewPoll, openDetailsModel }) => {
  console.log(polls);
  return (
    <div className="my-polls">
      <div className="polls">
        <h1>My Polls</h1>
        <div className="poll-infos">
          {console.log(polls)}
          {polls.map(poll => (
            <PollInfo key={poll} pollName={poll.get('pollName')} date={poll.get('date')} votes={poll.get('votes').toString()} openDetailsModel={openDetailsModel} />
          ))}
        </div>
        <Link to="/createPoll">
          <button id="create-new-poll-btn" className="btn" type="button" onClick={createNewPoll}>Create New Poll</button>
        </Link>
      </div>
    </div>
  );
};

MyPolls.propTypes = {
  polls: instanceOf(I.List),
  createNewPoll: func.isRequired,
  openDetailsModel: func.isRequired,
};

MyPolls.defaultProps = {
  polls: [],
};

export default MyPolls;
