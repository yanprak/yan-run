import React from 'react';
import { Link } from 'react-router-dom';
import { OwnProps } from './types';
import Button from '../button/Button';

export default function ErrorPage({ code, description }: OwnProps) {
  return (
    // eslint-disable-next-line max-len
    <div className="page error-page container container_is-column container_center-items container_size-auto container_center">
      <h1 className="h1 error-page__code">{code}</h1>
      <h3 className="h3 error-page__description margin_tb_s-6">{description}</h3>
      <Link to="/">
        <Button size="small" styleType="primary">Главная</Button>
      </Link>
    </div>
  );
}
