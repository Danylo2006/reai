"use client";
import { useState } from "react";

interface MicrophonePermissionProps {
  onPermissionChange: (hasPermission: boolean) => void;
}

export default function MicrophonePermission({
  onPermissionChange,
}: MicrophonePermissionProps) {
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestMicrophonePermission = async () => {
    try {
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("getUserMedia is not supported in this browser");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone permission granted");

      // Stop the stream immediately since we just needed permission
      stream.getTracks().forEach((track) => track.stop());

      setHasPermission(true);
      setError(null);
      onPermissionChange(true);
    } catch (e: unknown) {
      console.error("Microphone permission error:", e);

      let errorMessage = "Microphone access denied.";

      if (e instanceof Error) {
        switch (e.name) {
          case "NotAllowedError":
            errorMessage =
              "Microphone access denied. Please click the microphone icon in your browser's address bar and allow access, then refresh the page.";
            break;
          case "NotFoundError":
            errorMessage =
              "No microphone found. Please connect a microphone and try again.";
            break;
          case "NotSupportedError":
            errorMessage =
              "Your browser doesn't support microphone access. Please use Chrome, Firefox, or Safari.";
            break;
          case "NotReadableError":
            errorMessage =
              "Microphone is already in use by another application.";
            break;
          default:
            errorMessage = `Microphone error: ${e.message}`;
        }
      }

      setError(errorMessage);
      onPermissionChange(false);
    }
  };

  if (error) {
    return (
      <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">
              Microphone Access Required
            </h3>
            <div className="mt-2 text-sm text-red-700">{error}</div>
            {error.includes("NotAllowedError") && (
              <div className="mt-3">
                <button
                  onClick={requestMicrophonePermission}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!hasPermission) {
    return (
      <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-amber-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-amber-800">
              Microphone Permission Needed
            </h3>
            <div className="mt-2 text-sm text-amber-700">
              Click &quot;Allow Microphone&quot; to enable voice interaction
              with the AI agent.
            </div>
            <div className="mt-3">
              <button
                onClick={requestMicrophonePermission}
                className="rounded-md bg-amber-600 px-3 py-2 text-sm font-medium text-white hover:bg-amber-700"
              >
                Allow Microphone
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
