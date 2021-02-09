import React from 'react';
import { OwnProps } from './types';
import Button from '../button/Button';

export default function ErrorPage({ code, description }: OwnProps) {
  return (
    <div className="page error-page container container_is-column container_center-items container_size-auto">
      <h1 className="h1 error-page__code">{code}</h1>
      <h3 className="h3 error-page__description margin-tb_s-6">{description}</h3>
      <Button size="small" styleType="primary">Назад</Button>
    </div>
  );
}
