import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import ForumMessage from '../../components/forum-message';
import Pagination from '../../components/pagination';
import Button from '../../components/button';
import MessageEditor from '../../components/message-editor';
import { useApiMessages, useApiForum } from '../../hooks';
import { ApplicationState } from '../../store/types';
import { User } from '../../store/user/types';
import { MessagesState } from '../../store/messages/types';
import { SelectedTopicState } from '../../store/topic/types';
import { MessageEntry, CreateMessageRequestData } from '../../API/messages';
import './topic.scss';

export default function Topic() {
  const { fetchTopic, updateTopic } = useApiForum();
  const { fetchMessages, createMessage } = useApiMessages();
  const history = useHistory();
  const { id, page = '1' } = useParams<{id?: string, page?: string }>();
  const topicId = Number(id);
  const currentPage = Number(page);

  const selectedTopic = useSelector<ApplicationState, SelectedTopicState>(state => state.selectedTopic);
  const messagesList = useSelector<ApplicationState, MessagesState>(state => state.messages);
  const user = useSelector<ApplicationState, User>(state => state.user!);

  const { data: topic, error: topicError, loading: topicLoading } = selectedTopic;
  const { messagesCount, name: topicName, userId } = topic;
  const isAuthor = user.id === userId;
  const totalPages = Math.ceil(messagesCount / 10);

  useEffect(() => {
    fetchTopic(topicId);
  }, [fetchTopic, topicId]);

  useEffect(() => {
    fetchMessages(topicId, currentPage);
  }, [fetchMessages, topicId, page]);

  const submitHandler = useCallback((message: string) => {
    const requestData: CreateMessageRequestData = {
      text: message,
      userId: user.id,
    };
    const willNewPageBeCreated = messagesCount % 10 === 0;
    const lastPage = willNewPageBeCreated ? totalPages + 1 : totalPages;
    createMessage(topicId, requestData, lastPage);
    updateTopic(topicId, { messagesCount: messagesCount + 1 });
    history.push(`/forum/topics/${topicId}/${lastPage}`);
  }, [createMessage, topicId, user.id, totalPages, messagesCount, history, currentPage]);

  let topicTitle;
  if (topicError || !topicName) {
    topicTitle = 'Something when wrong. Reload page, please';
  } else if (topicLoading) {
    topicTitle = 'Loading...';
  } else {
    topicTitle = topic.name;
  }

  const { data: messages, error: messagesError, loading: messagesLoading } = messagesList;

  let children;
  if (messagesError) {
    children = 'Something when wrong. Reload page, please';
  } else if (messagesLoading) {
    children = 'Loading...';
  } else {
    children = messages.map(({ id: messageId, ...messageProps }: MessageEntry) => (
      <ForumMessage
        key={messageId}
        uid={messageId}
        currentUser={user}
        currentPage={currentPage}
        totalMessages={messagesCount}
        {...messageProps}
      />
    ));
    if (!children.length) {
      children = <h1 className="margin_t_s-5">Нет сообщений. Будь первым, кто напишет</h1>;
    }
  }

  return (
    <div className="page topic-page container container_is-column container_center">
      <div className="margin_tb_s-7 topic-page__header">
        <Pagination
          path={`/forum/topics/${topicId}`}
          current={Number(page)}
          total={totalPages}
          className="topic-page__pagination"
        />
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
