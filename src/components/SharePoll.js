import React from 'react';
import { number, string } from 'prop-types';

import '../styles/SharePoll.css';

const SharePoll = ({ pollName, id }) => {
  console.log('Share');
  return (
    <div className="share-poll">
      <div className="share-container">
        <p>{`Poll Name: ${pollName}`}</p>
        <p>{`Poll Link: http://localhost:3000/poll/${id}`}</p>
        <button type="button" className="btn">Copy Link</button>
        <button type="button" className="btn">Share on Whatsapp</button>
      </div>
    </div>
  );
};

SharePoll.propTypes = {
  pollName: string.isRequired,
  id: number.isRequired,
};

export default SharePoll;
