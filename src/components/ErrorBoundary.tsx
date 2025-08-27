"use client";

import React from "react";

type Props = { children: React.ReactNode; fallback?: React.ReactNode };

export default class ErrorBoundary extends React.Component<
  Props,
  { hasError: boolean; error?: Error }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error) {
    console.error("Client error:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="max-w-lg mx-auto p-6 text-center border rounded-xl bg-red-50">
            <h2 className="text-xl font-semibold text-red-700 mb-2">
              Something went wrong
            </h2>
            <p className="text-sm text-red-600">
              {this.state.error?.message ?? "Unexpected error"}
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
