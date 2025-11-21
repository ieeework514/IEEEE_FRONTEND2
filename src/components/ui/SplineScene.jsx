"use client"
import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Spline from '@splinetool/react-spline';
import { Bot } from 'lucide-react';
import './SplineScene.css';

// Dynamically import Robot3D to avoid SSR issues
const Robot3D = dynamic(() => import('./Robot3D'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
      <div className="text-white/70 text-lg font-medium animate-pulse">Loading 3D Robot...</div>
    </div>
  )
});

function SplineErrorFallback({ onRetry, showRobot = true }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-400/20 relative overflow-hidden">
      {showRobot ? (
        <div className="absolute inset-0">
          <Robot3D />
        </div>
      ) : (
        <>
          <Bot className="w-16 h-16 text-blue-400 mb-4 animate-pulse" />
          <p className="text-white/70 text-lg font-medium mb-2">3D Scene Unavailable</p>
          <p className="text-white/50 text-sm text-center px-4 mb-4">
            Please provide a valid Spline scene URL
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 rounded-lg text-sm transition-colors"
            >
              Retry
            </button>
          )}
        </>
      )}
    </div>
  );
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
      <div className="text-white/70 text-lg font-medium animate-pulse">Loading 3D Scene...</div>
    </div>
  );
}

function SplineWrapper({ scene, onError }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [scene]);

  if (hasError || !scene) {
    return <SplineErrorFallback />;
  }

  try {
    return (
      <Spline 
        scene={scene}
        className="w-full h-full"
        onError={(error) => {
          console.error('Spline scene error:', error);
          setHasError(true);
          onError?.(error);
        }}
      />
    );
  } catch (error) {
    console.error('Spline component error:', error);
    return <SplineErrorFallback />;
  }
}

export default function SplineScene({ 
  scene,
  className = "",
  style = {}
}) {
  const [error, setError] = useState(null);
  const [retryKey, setRetryKey] = useState(0);

  const handleError = (err) => {
    setError(err);
  };

  const handleRetry = () => {
    setError(null);
    setRetryKey(prev => prev + 1);
  };

  // If no scene URL is provided, show 3D robot fallback
  if (!scene) {
    return (
      <div className={`spline-container ${className}`} style={style}>
        <SplineErrorFallback showRobot={true} />
      </div>
    );
  }

  return (
    <div className={`spline-container ${className}`} style={style}>
      <Suspense fallback={<SplineLoader />}>
        {error ? (
          <SplineErrorFallback onRetry={handleRetry} />
        ) : (
          <SplineWrapper 
            key={retryKey}
            scene={scene} 
            onError={handleError}
          />
        )}
      </Suspense>
    </div>
  );
}

