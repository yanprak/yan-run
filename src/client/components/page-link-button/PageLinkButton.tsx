import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { OwnProps } from './types';
import './page-link-button.scss';

const PageLinkButton: FC<OwnProps> = (props: OwnProps) => {
  const {
    text,
    isSelected,
    path,
    ...otherProps
  } = props;
  const isSelectedClass = isSelected ? 'page-link-button_selected' : '';
  const className = `page-link-button ${isSelectedClass} ${props.className ? props.className : ''}`;
  return (
    <Link to={path}>
      <div {...otherProps} className={className}>{text}</div>
    </Link>
  );
};

export default PageLinkButton;
