import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ForumMessage from '../../components/forum-message';
import Pagination from '../../components/pagination';
import Button from '../../components/button';
import { TopicPageProps } from './types';
import sampleMessages from './sampleMessages';
import NewMessageForm from '../../components/new-message-form';
import { useApiMessages } from '../../hooks';
import { ApplicationState } from '../../store/types';
import { User } from '../../store/user/types';
import { MessagesState } from '../../store/messages/types';
import { MessageEntry } from '../../API/messages';

const tempTopicProps: TopicPageProps = {
  id: 123,
  name: 'Demo topic',
  messagesCount: 57,
  user: {
    id: 1,
    login: 'john.doe',
  },
  createdAt: '2021-01-01T20:59:59Z',
};

export default function Topic() {
  const { fetchMessages } = useApiMessages();
  const { id: topicId, messagesCount, name: topicName } = tempTopicProps;

  const messages = useSelector<ApplicationState, MessagesState>(state => state.messages);
  const user = useSelector<ApplicationState, User>(state => state.user!);

  const isAuthor = true; // user.id === tempTopicProps.user.id;
  const totalPages = Math.ceil(messagesCount / 10);

  useEffect(() => {
    fetchMessages(topicId);
  }, [fetchMessages]);

  // const { data, error, loading } = messages;

  // let children;
  // if (error) {
  //   children = 'Something when wrong. Reload page, please';
  // } else if (loading) {
  //   children = 'Loading...';
  // } else {
  //   // TopicLink.title done this way for debug purposes only
  //   children = data.map(({ id: messageId, ...messageProps }: MessageEntry) => (
  //     <ForumMessage key={messageId} uid={messageId} {...messageProps} />
  //   ));
  //   if (!children.length) {
  //     children = <h1 className="margin_t_s-5">Нет сообщений. Будь первым, кто напишет</h1>;
  //   }
  // }

  const children = sampleMessages.map(({ id: messageId, ...messageProps }: MessageEntry) => (
    <ForumMessage key={messageId} uid={messageId} {...messageProps} />
  ));

  return (
    <div className="page topic-page container container_is-column container_center">
      <div className="margin_tb_s-7 topic-page__header">
        <Pagination path="/topic" current={1} total={totalPages} className="topic-page__pagination" />
        <h1 className="topic-page__title">{topicName}</h1>
        <div className="topic-page__owner-action">
          { isAuthor && (
            <Button size="small" styleType="secondary" className="topic-page__button">Удалить тему</Button>
          ) }
        </div>
      </div>
      <hr />
      <div className="topic-page__messages">
        {children}
      </div>
      <hr className="margin_tb_s-7 " />
      <NewMessageForm placeholder="Сообщение" />
    </div>
  );
}
