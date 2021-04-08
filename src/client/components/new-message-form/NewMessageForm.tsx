import React, {
  FC, useState, ChangeEvent, FormEvent, KeyboardEvent,
} from 'react';
import { OwnProps } from './types';
import './new-message-form.scss';
import Icon from '../icon';
import TextArea from '../text-area';
import { useApiMessages } from '../../hooks';
import { CreateMessageRequestData } from '../../API/messages';

const NewMessageForm: FC<OwnProps> = (props: OwnProps) => {
  const {
    placeholder,
    topicId,
    user,
    ...otherProps
  } = props;
  const [message, setMessage] = useState('');
  const { createMessage } = useApiMessages();

  function handleTextAreaChange(event: ChangeEvent): void {
    const element = event.target as HTMLInputElement;
    const { value } = element;
    setMessage(value);
  }

  function handleNewMessageSubmit(event: FormEvent): void {
    event.preventDefault();
    const requestData: CreateMessageRequestData = {
      text: message,
      userId: user.id,
    };
    createMessage(topicId, requestData);
  }

  function handleTextAreaKeyChange(event: KeyboardEvent): void {
    if (!event.shiftKey && event.key === 'Enter') {
      event.preventDefault();
      const element = event.target as HTMLTextAreaElement;
      const { form } = element;
      if (!form) {
        return;
      }
      handleNewMessageSubmit(event);
    }
  }

  const className = `message-form ${props.className || ''}`;
  return (
    <form {...otherProps} className={className} onSubmit={handleNewMessageSubmit}>
      <TextArea
        className="message-form__input padding_s-5"
        placeholder={placeholder}
        resizable={false}
        onChange={handleTextAreaChange}
        onKeyDown={handleTextAreaKeyChange}
        value={message}
      />
      <div className="message-form__button-wrapper padding_s-5">
        <button className="message-form__button" type="submit">
          <Icon name="send" />
        </button>
      </div>
    </form>
  );
};

export default NewMessageForm;
