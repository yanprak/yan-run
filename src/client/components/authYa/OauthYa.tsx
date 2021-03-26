import React, { useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
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
  useEffect(() => {
    if (code) {
      handleSignYa(code);
    }
  });
  if (code) {
    return null;
  }
  return <Redirect to="/signin" />;
}
