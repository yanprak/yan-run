import React from 'react';
import ForumMessage from '../../components/forum-message';
import sampleMessages from './sampleMessages';

export default function Topic() {
  return (
    <div className="forum-topic page container container_is-column container_center">
      { sampleMessages.map(messageObj => <ForumMessage {...messageObj} />) }
    </div>
  );
}
