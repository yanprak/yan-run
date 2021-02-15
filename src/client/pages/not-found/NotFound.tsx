import React from 'react';
import ErrorPage from '../../components/error-page';

export default function NotFoundPage() {
  return (
    <ErrorPage code={404} description="Не туда попали" />
  );
}
