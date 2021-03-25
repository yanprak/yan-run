import React from 'react';
import { Redirect } from 'react-router-dom';
import { useApiAuth } from '../../hooks';

type PropsAuth = {
  location: {
    search: URLSearchParams
  }
};

export default function OauthYa(props: PropsAuth) {
  const { handleSignYa } = useApiAuth();
  const params = new URLSearchParams(props.location.search);
  const code = params.get('code');
  if (code) {
    handleSignYa(code);
    return <Redirect to="/" />;
  }
  return <Redirect to="/login" />;
}