import React from 'react';
import TopicLink from '../../components/topic-link';
import Pagination from '../../components/pagination';
import Button from '../../components/button';
import './forum.scss';

export default function Forum() {
  return (
    <div className="page forum-page container container_is-column container_size-auto container_center">
      <div className="margin_tb_s-7 forum-page__header">
        <Pagination path="/forum" current={1} total={5} className="forum-page__pagination" />
        <Button size="small" styleType="primary" className="forum-page__button">Создать тему</Button>
      </div>
      <hr />
      <div className="forum-page__topics">
        <TopicLink title="Новые игры" messagesCounter={333} />
        <TopicLink title="Геймдизайнеры" messagesCounter={222} />
        <TopicLink title="Технологии" messagesCounter={111} />
        <TopicLink title="Cyperpunk 2077" messagesCounter={2048} />
        <TopicLink title="Tetris" messagesCounter={5} />
      </div>
    </div>
  );
}
