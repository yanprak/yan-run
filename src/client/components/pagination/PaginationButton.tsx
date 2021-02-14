import React, { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export type OwnProps = {
  isSelected: boolean;
  text: number | string;
  path: string;
} & HTMLAttributes<HTMLDivElement>;

const PaginationButton: FC<OwnProps> = (props: OwnProps) => {
  const {
    text,
    isSelected,
    path,
    ...otherProps
  } = props;
  const isSelectedClass = isSelected ? 'pagination__button_selected' : '';
  const className = `pagination__button ${isSelectedClass} ${props.className ? props.className : ''}`;
  return (
    <Link to={path}>
      <div {...otherProps} className={className}>{text}</div>
    </Link>
  );
};

export default PaginationButton;
