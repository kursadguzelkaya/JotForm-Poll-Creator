import React from 'react';
import { object, func } from 'prop-types';

import '../styles/MyPolls.css';
import PollInfo from './PollInfo';

const MyPolls = ({ polls, createNewPoll, openDetailsModel }) => {
  console.log(polls);
  return (
    <div className="my-polls">
      <div className="polls">
        <h1>My Polls</h1>
        <div className="poll-infos">
          {polls.map(poll => (
            <PollInfo pollName={poll.get('pollName')} date={poll.get('date')} votes={poll.get('votes').toString()} openDetailsModel={openDetailsModel} />
          ))}
        </div>
        <button id="create-new-poll-btn" className="btn" type="button" onClick={createNewPoll}>Create New Poll</button>
      </div>
    </div>
  );
};

MyPolls.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  polls: object,
  createNewPoll: func.isRequired,
  openDetailsModel: func.isRequired,
};

MyPolls.defaultProps = {
  polls: [],
};

export default MyPolls;
