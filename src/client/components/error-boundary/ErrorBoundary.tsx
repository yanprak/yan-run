import React, { PureComponent } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error
  errorInfo?: React.ErrorInfo
};

export default class ErrorBoundary extends PureComponent<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // TODO(anton.kagakin): place to send errors to server

    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <pre>
            {this.state.error?.message}
          </pre>
          <div>
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
