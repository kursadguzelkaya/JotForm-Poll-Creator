import React from 'react';
import { ReactComponent as LoadingIcon } from '../assets/icons/loading.svg';

export default function Loading() {
  return (
    <div className="loading-comp">
      <LoadingIcon className="loading" />
    </div>
  );
}
