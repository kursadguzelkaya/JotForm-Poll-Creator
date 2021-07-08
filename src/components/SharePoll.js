import React, { useState } from 'react';
import { string } from 'prop-types';

import '../styles/SharePoll.css';

const SharePoll = ({ pollName, id }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="share-poll">
      <div className="share-container">
        <p className="share">{`Poll Name: ${pollName}`}</p>
        <p className="share">{`Poll Link: http://localhost:3000/poll/${id}`}</p>
        <button id="copy-btn" type="button" className="btn" onClick={() => { navigator.clipboard.writeText(`http://localhost:3000/poll/${id}`); setCopied(true); }}>
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="currentColor">
            <path d="M7.31 3.25H.81c-.49 0-.81.33-.81.81v8.13c0 .49.33.81.81.81h6.5c.49 0 .82-.32.82-.81V4.06c0-.48-.33-.81-.82-.81z" />
            <path d="M10.56 0H2.44v1.63h7.31v8.93h1.63V.81c0-.49-.33-.81-.82-.81z" />
          </svg>
          <span className="none-mobile-600">Copy Link</span>
        </button>
        <button id="whatsapp-btn" type="button" className="btn">
          <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.077 348.077">
            <path fill="currentColor" d="M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076c-1.711-.943-3.482-1.928-5.344-2.973-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z" />
          </svg>
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
