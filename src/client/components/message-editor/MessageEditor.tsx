import React, {
  FC, useState, ChangeEvent, FormEvent, KeyboardEvent,
} from 'react';
import { OwnProps } from './types';
import './message-editor.scss';
import Icon from '../icon';
import TextArea from '../text-area';

const MessageEditor: FC<OwnProps> = (props: OwnProps) => {
  const {
    placeholder,
    initialValue,
    iconName,
    submitHandler,
    ...otherProps
  } = props;
  const [message, setMessage] = useState(initialValue || '');

  function handleTextAreaChange(event: ChangeEvent): void {
    const element = event.target as HTMLInputElement;
    const { value } = element;
    setMessage(value);
  }

  function handleNewMessageSubmit(event: FormEvent): void {
    event.preventDefault();
    submitHandler(message);
    setMessage('');
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

  const className = `message-editor ${props.className || ''}`;
  return (
    <form {...otherProps} className={className} onSubmit={handleNewMessageSubmit}>
      <TextArea
        className="message-editor__input padding_s-5"
        placeholder={placeholder}
        resizable={false}
        onChange={handleTextAreaChange}
        onKeyDown={handleTextAreaKeyChange}
        value={message}
      />
      <div className="message-editor__button-wrapper padding_s-5">
        <button className="message-editor__button" type="submit">
          <Icon name={iconName} />
        </button>
      </div>
    </form>
  );
};

export default MessageEditor;
