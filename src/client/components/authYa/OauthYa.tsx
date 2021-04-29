import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useApiAuth } from '../../hooks';
import Loader from '../loader';

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
  }, [handleSignYa, code]);
  if (code) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
  return <Redirect to="/signin" />;
}
