import { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <div className="max-w-md text-center space-y-6">
            <div className="inline-flex p-4 rounded-full bg-red-500/10 border border-red-500/30">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">Something went wrong</h1>
              <p className="text-gray-400">
                We encountered an unexpected error. Please refresh the page to try again.
              </p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Refresh Page
            </button>
            {this.state.error && (
              <details className="text-left text-sm text-gray-500 mt-4">
                <summary className="cursor-pointer hover:text-gray-400">Error Details</summary>
                <pre className="mt-2 p-4 bg-white/5 rounded border border-red-500/20 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
