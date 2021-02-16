import React, {
  FC, useState, ChangeEvent, FormEvent, KeyboardEvent,
} from 'react';
import { OwnProps } from './types';
import './new-message-form.scss';
import Icon from '../icon';
import TextArea from '../text-area';

const NewMessageForm: FC<OwnProps> = (props: OwnProps) => {
  const {
    placeholder,
    ...otherProps
  } = props;
  const [message, setMessage] = useState('');

  function handleTextAreaChange(event: ChangeEvent): void {
    const element = event.target as HTMLInputElement;
    const { value } = element;
    setMessage(value);
  }

  function handleNewMessageSubmit(event: FormEvent): void {
    event.preventDefault();
    console.info('Submitting new message', message);
  }

  function handleTextAreaKeyChange(event: KeyboardEvent): void {
    if (!event.shiftKey && event.key === 'Enter') {
      event.preventDefault();
      const element = event.target as HTMLTextAreaElement;
      const { form } = element;
      if (!form) {
        return;
      }
      form.requestSubmit();
    }
  }

  const className = `message-form ${props.className ? props.className : ''}`;
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
