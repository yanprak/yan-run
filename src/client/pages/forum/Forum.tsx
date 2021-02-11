import React from 'react';
import ThreadLink from '../../components/thread-link';

export default function Forum() {
  return (
    <div className="page container container_is-column container_size-auto container_center">
      <ThreadLink title="Новые игры" messagesCounter={333} />
      <ThreadLink title="Геймдизайнеры" messagesCounter={222} />
      <ThreadLink title="Технологии" messagesCounter={111} />
      <ThreadLink title="Cyperpunk 2077" messagesCounter={2048} />
      <ThreadLink title="Tetris" messagesCounter={5} />
    </div>
  );
}
