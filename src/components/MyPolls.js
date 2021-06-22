import React from 'react';

import '../styles/MyPolls.css';
import PollInfo from './PollInfo';

const MyPolls = () => {
  console.log('MyPolls');
  return (
    <div className="my-polls">
      <div className="polls">
        <h1>My Polls</h1>
        <div className="poll-infos">
          <PollInfo pollName="Poll Name" date="12.12.21" votes="100" />
          <PollInfo pollName="Poll Name" date="12.12.21" votes="100" />
          <PollInfo pollName="Poll Name" date="12.12.21" votes="100" />
        </div>
        <button id="create-new-poll-btn" className="btn" type="button" onClick={() => console.log('Create New Poll')}>Create New Poll</button>
      </div>
    </div>
  );
};

export default MyPolls;
