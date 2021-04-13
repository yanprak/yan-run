import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ForumMessage from '../../components/forum-message';
import Pagination from '../../components/pagination';
import Button from '../../components/button';
import { ComposedProps, TopicPageProps } from './types';
import sampleMessages from './sampleMessages';
import MessageEditor from '../../components/message-editor';
import { useApiMessages } from '../../hooks';
import { ApplicationState } from '../../store/types';
import { User } from '../../store/user/types';
import { MessagesState } from '../../store/messages/types';
// import { SelectedTopicState } from '../../store/topic/types';
import { MessageEntry, CreateMessageRequestData } from '../../API/messages';
import './topic.scss';

const tempTopicProps: TopicPageProps = {
  id: 123,
  name: 'Books',
  messagesCount: 57,
  user: {
    id: 3351,
    login: 'ilya.belyavskiy2',
  },
  createdAt: '2021-01-01T20:59:59Z',
};

export default function Topic(props: ComposedProps) {
  // const { fetchTopic } = useApiForum();
  const { fetchMessages, createMessage } = useApiMessages();
  const topicId = Number(props.match.params.id);

  // useEffect(() => {
  //   console.log('fetching topic', topicId);
  //   fetchTopic(topicId);
  // }, [fetchTopic]);

  // const selectedTopic = useSelector<ApplicationState, SelectedTopicState>(state => state.selectedTopic);
  // console.log('[REDUX] Selected topic', selectedTopic);
  const messagesList = useSelector<ApplicationState, MessagesState>(state => state.messages);
  console.log('[REDUX] Messages', messagesList);
  const user = useSelector<ApplicationState, User>(state => state.user!);
  console.log('[REDUX] User', user);

  // const { data: topic, error: topicError, loading: topicLoading } = selectedTopic;
  const { messagesCount, name: topicTitle, user: topicAuthor } = tempTopicProps; // topic;
  const isAuthor = user.id === topicAuthor.id;
  const totalPages = Math.ceil(messagesCount / 10);

  useEffect(() => {
    fetchMessages(topicId);
  }, [fetchMessages]);

  const submitHandler = useCallback((message: string) => {
    const requestData: CreateMessageRequestData = {
      text: message,
      userId: user.id,
    };
    createMessage(topicId, requestData);
  }, [createMessage, topicId, user.id]);

  // let topicTitle;
  // if (topicError || !topicName) {
  //   topicTitle = 'Something when wrong. Reload page, please';
  // } else if (topicLoading) {
  //   topicTitle = 'Loading...';
  // } else {
  //   topicTitle = topic.name;
  // }

  // const { data: messages, error: messagesError, loading: messagesLoading } = messagesList;

  // let children;
  // if (messagesError) {
  //   children = 'Something when wrong. Reload page, please';
  // } else if (messagesLoading) {
  //   children = 'Loading...';
  // } else {
  //   children = messages.map(({ id: messageId, ...messageProps }: MessageEntry) => (
  //     <ForumMessage key={messageId} uid={messageId} currentUser={user} {...messageProps} />
  //   ));
  //   if (!children.length) {
  //     children = <h1 className="margin_t_s-5">Нет сообщений. Будь первым, кто напишет</h1>;
  //   }
  // }

  const children = sampleMessages.map(({ id: messageId, ...messageProps }: MessageEntry) => (
    <ForumMessage key={messageId} uid={messageId} currentUser={user} {...messageProps} />
  ));

  return (
    <div className="page topic-page container container_is-column container_center">
      <div className="margin_tb_s-7 topic-page__header">
        <Pagination path="/topic" current={1} total={totalPages} className="topic-page__pagination" />
        <h1 className="topic-page__title">{topicTitle}</h1>
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
      <hr className="margin_tb_s-7" />
      <MessageEditor
        className="topic-page__editor margin_tb_s-7"
        placeholder="Сообщение"
        iconName="send"
        submitHandler={submitHandler}
      />
    </div>
  );
}
