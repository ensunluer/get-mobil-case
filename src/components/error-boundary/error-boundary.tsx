import React, { Component, ReactNode } from 'react';

/**
 * Props for the ErrorBoundary component.
 */
interface ErrorBoundaryProps {
  /** The child components that will be wrapped by the ErrorBoundary. */
  children: ReactNode;

  /** The fallback UI to render when an error is caught. */
  fallback: ReactNode;
}

/**
 * State for the ErrorBoundary component.
 */
interface ErrorBoundaryState {
  /** Indicates whether an error has been caught. */
  hasError: boolean;
}

/**
 * ErrorBoundary component that catches JavaScript errors in its child components
 * and renders a fallback UI when an error occurs.
 *
 * @class
 * @extends {Component<ErrorBoundaryProps, ErrorBoundaryState>}
 */

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * Creates an instance of ErrorBoundary.
   *
   * @param {ErrorBoundaryProps} props - The props for the component.
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Lifecycle method that is invoked after an error is thrown.
   * Updates the state to indicate an error has occurred.
   *
   * @static
   * @param {Error} _ - The error that was thrown.
   * @returns {ErrorBoundaryState} The updated state indicating an error has occurred.
   */
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    console.info(_);
    return { hasError: true };
  }

  /**
   * Lifecycle method that is invoked after an error has been thrown.
   * This method is useful for logging errors.
   *
   * @param {Error} error - The error that was thrown.
   * @param {React.ErrorInfo} errorInfo - An object containing information about the error.
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`Error caught by ErrorBoundary:' Error: ${error} Error Info: ${JSON.stringify(errorInfo)}`);
  }

  /**
   * Renders the component.
   *
   * @returns {ReactNode} The rendered output, either the fallback UI or child components.
   */
  render(): ReactNode {
    const { hasError } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
