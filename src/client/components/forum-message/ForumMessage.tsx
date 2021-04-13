import React, { useCallback, useState, FC, MouseEvent } from 'react';
import Modal from 'react-modal';
import { OwnProps } from './types';
import './forum-message.scss';

import Avatar from '../avatar';
import Reaction from '../reaction';
import Icon from '../icon';
import MessageEditor from '../message-editor';

import { ReactionEnum, UpdateMessageRequestData } from '../../API/messages';
import { formatDate, getTime, isDateValid, createShortDate } from '../../utils/datetime';
import { useApiMessages } from '../../hooks';
import Button from '../button';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ForumMessage: FC<OwnProps> = (props: OwnProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { updateMessage, deleteMessage } = useApiMessages();
  const {
    uid: messageId,
    text,
    topicId,
    parentId,
    user,
    userId,
    reactions,
    createdAt,
    updatedAt,
    currentUser,
    ...otherProps
  } = props;
  const className = `message padding_s-6 ${props.className || ''}`;
  const date = new Date(createdAt);
  const isValidDate = isDateValid(date);
  const shortDate = isValidDate ? createShortDate(date) : '';
  const time = isValidDate ? getTime(date) : '';
  const isAuthor = user.id === currentUser.id;
  const reactionsElements = Object.entries(props.reactions)
    .map(keyValue => {
      const [reactionName, userIdsArray] = keyValue;
      const reaction = reactionName as unknown as ReactionEnum;
      return (
        <Reaction
          key={reactionName}
          reaction={reaction}
          users={userIdsArray}
          topicId={topicId}
          messageId={messageId}
          userId={user.id}
        />
      );
    });

  const handleEditClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setIsEditModalOpen(true);
  }, [setIsEditModalOpen]);

  const handleDeleteClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setIsDeleteModalOpen(true);
  }, [setIsDeleteModalOpen]);

  const submitUpdateHandler = useCallback((message: string) => {
    const requestData: UpdateMessageRequestData = {
      text: message,
    };
    updateMessage(topicId, messageId, requestData);
    setIsEditModalOpen(false);
  }, [updateMessage, topicId, messageId]);

  const deleteMessageHandler = useCallback((event: MouseEvent) => {
    event.preventDefault();
    deleteMessage(topicId, messageId);
    setIsDeleteModalOpen(false);
  }, [topicId, messageId]);

  return (
    <div {...otherProps} className={className}>
      <div className="message__user">
        <h4 className="message__username">{user.login}</h4>
        <Avatar url={user.avatar} className="message__avatar margin_tb_s-4" />
        <time dateTime={`${formatDate(date)} ${time}`} className="message__datetime">
          <span className="message__date">{shortDate}</span>
          <span className="message__time margin_tb_s-1">{time}</span>
        </time>
      </div>
      <div className="message__content">
        <div className="message__text">{text}</div>
        <div className="message__actions">
          <div className="message__reactions">
            {reactionsElements}
          </div>
          { isAuthor && (
            <div className="message__buttons">
              <button className="message__button" type="button" onClick={handleEditClick}>
                <Icon name="edit" size={1} />
              </button>
              <button className="message__button" type="button" onClick={handleDeleteClick}>
                <Icon name="delete" size={1} />
              </button>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        style={modalStyles}
        onRequestClose={() => setIsEditModalOpen(false)}
      >
        <div className="modal">
          <h1 className="modal__header margin_tb_s-4">Исправить сообщение</h1>
          <MessageEditor
            className="modal__editor"
            placeholder="Сообщение"
            initialValue={text}
            iconName="edit"
            submitHandler={submitUpdateHandler}
          />
        </div>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        style={modalStyles}
        onRequestClose={() => setIsDeleteModalOpen(false)}
      >
        <div className="modal">
          <h1 className="modal__header margin_tb_s-4">Вы уверены?</h1>
          <div className="modal__actions margin_t_s-8">
            <Button
              className="modal__approve"
              type="button"
              size="large"
              styleType="secondary"
              onClick={deleteMessageHandler}
            >Удалить
            </Button>
            <Button
              className="modal__decline margin_t_s-4"
              type="button"
              size="large"
              styleType="primary"
              onClick={() => setIsDeleteModalOpen(false)}
            >Отмена
            </Button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default ForumMessage;
