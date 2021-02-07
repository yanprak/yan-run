import React, { PureComponent } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends PureComponent<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
