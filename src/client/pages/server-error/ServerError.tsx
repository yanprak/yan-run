import React from 'react';
import ErrorPage from '../../components/error-page';

export default function ServerError() {
  return (
    <ErrorPage code={500} description="Мы уже фиксим" />
  );
}
