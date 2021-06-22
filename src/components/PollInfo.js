import React from 'react';
import { string } from 'prop-types';

import '../styles/PollInfo.css';

const PollInfo = ({ pollName, date, votes }) => {
  console.log('PollInfo');
  return (
    <div className="poll-info">
      <h2>{pollName}</h2>
      <p className="date">{date}</p>
      <div className="attandence">
        <p>{votes}</p>
        <img src="" alt="profile" />
      </div>
      <div className="btn-container">
        <button className="btn" type="button" onClick={() => console.log('Poll Details')}>Details</button>
      </div>
    </div>
  );
};

PollInfo.propTypes = {
  pollName: string.isRequired,
  date: string.isRequired,
  votes: string.isRequired,
};

export default PollInfo;
