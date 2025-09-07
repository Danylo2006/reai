"use client";
import { useConversation } from "@elevenlabs/react";
import { useState, useEffect } from "react";

export default function Simulator() {
  const ELEVENLABS_AGENT_ID = "agent_1101k4bngxdyfx2rqzpb3ass94g2";
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to voice agent");
    },
    onDisconnect: () => {
      console.log("Disconnected from voice agent");
    },
    onMessage: (message) => {
      console.log("Message received:", message);
    },
    onError: (error) => {
      console.error("Conversation error:", error);
      setError(typeof error === "string" ? error : "An error occurred");
    },
  });

  const requestMicrophonePermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone permission granted");
      setHasPermission(true);
      setError(null);
    } catch (err) {
      setError(
        "Microphone access denied. Please allow microphone access to use the voice agent.",
      );
      console.error("Microphone permission error:", err);
    }
  };

  const startConversation = async () => {
    if (!hasPermission) {
      await requestMicrophonePermission();
      if (!hasPermission) return;
    }

    try {
      setError(null);
      // Note: You'll need to replace this with your actual agent ID
      // For now, using a placeholder that will likely fail gracefully
      const conversationId = await conversation.startSession({
        agentId: ELEVENLABS_AGENT_ID, // Replace with your actual agent ID
        connectionType: "webrtc",
        // userId: "simulator-user", // Optional: your end user ID
      });

      console.log(`Conversation started with ID: ${conversationId}`);
    } catch (err) {
      console.error("Failed to start conversation:", err);
      setError(
        "Failed to start conversation. Please check your agent ID and try again.",
      );
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch (err) {
      console.error("Failed to end conversation:", err);
      setError("Failed to end conversation");
    }
  };

  // Request microphone permission on component mount
  useEffect(() => {
    void requestMicrophonePermission();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Voice Agent Simulator
        </h1>

        {/* Status Panel */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Status</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <div
                className={`h-3 w-3 rounded-full ${conversation.status === "connected" ? "bg-green-500" : "bg-red-500"}`}
              ></div>
              <span className="text-sm font-medium">
                {conversation.status === "connected"
                  ? "Connected"
                  : "Disconnected"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`h-3 w-3 rounded-full ${hasPermission ? "bg-green-500" : "bg-red-500"}`}
              ></div>
              <span className="text-sm font-medium">
                {hasPermission ? "Microphone Access" : "No Microphone Access"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className={`h-3 w-3 rounded-full ${conversation.isSpeaking ? "animate-pulse bg-blue-500" : "bg-gray-400"}`}
              ></div>
              <span className="text-sm font-medium">
                {conversation.isSpeaking ? "Agent Speaking" : "Silent"}
              </span>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
            <div className="flex">
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
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">{error}</div>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Controls</h2>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={startConversation}
              disabled={conversation.status === "connected" || !hasPermission}
              className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {conversation.status === "connected"
                ? "Connected"
                : "Start Conversation"}
            </button>

            <button
              onClick={endConversation}
              disabled={conversation.status !== "connected"}
              className="rounded-lg bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              End Conversation
            </button>

            <button
              onClick={requestMicrophonePermission}
              className="rounded-lg bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
            >
              Request Microphone Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
