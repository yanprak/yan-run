import React from 'react';
import ForumMessage from '../../components/forum-message';
import Pagination from '../../components/pagination';
// import Button from '../../components/button';
// import { TopicPageProps } from './types';
import sampleMessages from './sampleMessages';
import NewMessageForm from '../../components/new-message-form/NewMessageForm';

import './topic.scss';

export default function Topic() {
  // todo(anton.kagakin)
  // should consider a way to show delete button.
  return (
    <div className="page topic-page container container_is-column container_center">
      <div className="margin_tb_s-7 topic-page__header">
        <Pagination path="/topic" current={1} total={5} className="topic-page__pagination" />
        {/* {props.isAuthor && ( */}
        {/*  <Button size="small" styleType="secondary" className="topic-page__button">Удалить тему</Button> */}
        {/* ) } */}
      </div>
      <hr />
      <div className="topic-page__messages">
        { sampleMessages.map(messageObj => <ForumMessage {...messageObj} />) }
      </div>
      <hr className="margin_tb_s-7 " />
      <NewMessageForm placeholder="Сообщение" />
    </div>
  );
}
