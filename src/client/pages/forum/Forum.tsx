import React from 'react';
import TopicLink from '../../components/topic-link';

export default function Forum() {
  return (
    <div className="page container container_is-column container_size-auto container_center">
      <TopicLink title="Новые игры" messagesCounter={333} />
      <TopicLink title="Геймдизайнеры" messagesCounter={222} />
      <TopicLink title="Технологии" messagesCounter={111} />
      <TopicLink title="Cyperpunk 2077" messagesCounter={2048} />
      <TopicLink title="Tetris" messagesCounter={5} />
    </div>
  );
}
