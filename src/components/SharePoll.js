import React, { useState } from 'react';
import { string } from 'prop-types';

import '../styles/SharePoll.css';

const SharePoll = ({ pollName, id }) => {
  const [copied] = useState(false);
  return (
    <div className="share-poll">
      <div className="share-container">
        <p className="share">{`Poll Name: ${pollName}`}</p>
        <p className="share">{`Poll Link: http://localhost:3000/poll/${id}`}</p>
        <button id="copy-btn" type="button" className="btn">
          <i className="far fa-copy icon" />
          <span className="none-mobile-600">Copy Link</span>
        </button>
        <button id="whatsapp-btn" type="button" className="btn">
          <i className="fab fa-whatsapp icon" />
          <span className="none-mobile-600">Share on Whatsapp</span>
        </button>
        {copied ? (
          <div className="copied-success">
            <p>Copied successfully</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

SharePoll.propTypes = {
  pollName: string.isRequired,
  id: string.isRequired,
};

export default SharePoll;
