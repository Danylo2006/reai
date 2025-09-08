"use client";
import { useConversation } from "@elevenlabs/react";
import { useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Simulator() {
  const ELEVENLABS_AGENT_ID = "agent_3201k4bf576kebq9bmw9912vr233";
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
    onError: (e: unknown) => {
      console.error("Conversation error:", e);
      const message =
        e instanceof Error
          ? e.message
          : typeof e === "string"
            ? e
            : "An error occurred";
      setError(message);
    },
  });

  const { messages, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  // Set initial messages on mount
  useEffect(() => {
    setMessages([
      {
        id: "m1",
        role: "assistant",
        parts: [{ type: "text", text: "Hi! I'm your practice agent." }],
      },
      {
        id: "m2",
        role: "user",
        parts: [{ type: "text", text: "Great, let's start." }],
      },
    ]);
  }, [setMessages]);

  const scenarios = [
    {
      id: "support",
      title: "Customer Support Call",
      description:
        "Handle a customer asking for a refund due to a defective product.",
    },
    {
      id: "sales",
      title: "Sales Discovery",
      description: "Qualify a lead for a B2B SaaS product and schedule a demo.",
    },
    {
      id: "collections",
      title: "Billing Collections",
      description: "Follow up on an overdue invoice while maintaining rapport.",
    },
  ] as const;

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const currentScenario = scenarios[scenarioIndex]!;

  const requestMicrophonePermission = async () => {
    try {
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("getUserMedia is not supported in this browser");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Microphone permission granted");

      // Stop the stream immediately since we just needed permission
      stream.getTracks().forEach((track) => track.stop());

      setHasPermission(true);
      setError(null);
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
    }
  };

  const startConversation = async () => {
    if (!hasPermission) {
      await requestMicrophonePermission();
      if (!hasPermission) return;
    }

    try {
      setError(null);
      const conversationId = await conversation.startSession({
        agentId: ELEVENLABS_AGENT_ID,
        connectionType: "webrtc",
      });

      console.log(`Conversation started with ID: ${conversationId}`);
    } catch (e: unknown) {
      console.error("Failed to start conversation:", e);
      setError(
        "Failed to start conversation. Please check your agent ID and try again.",
      );
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch (e: unknown) {
      console.error("Failed to end conversation:", e);
      setError("Failed to end conversation");
    }
  };

  const handleVoiceButtonClick = async () => {
    if (conversation.status === "connected") {
      await endConversation();
    } else {
      await startConversation();
    }
  };

  const switchScenario = () => {
    setScenarioIndex((i) => (i + 1) % scenarios.length);
  };

  // Note: Removed automatic permission request on mount
  // Users should click the "Allow Microphone" button instead

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Simulator</h1>

        {error && (
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
        )}

        {!hasPermission && !error && (
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
                  Click "Allow Microphone" to enable voice interaction with the
                  AI agent.
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
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Voice Agent Button */}
          <div className="flex items-center justify-center rounded-lg bg-white p-6 shadow">
            <button
              onClick={handleVoiceButtonClick}
              className={`relative flex h-64 w-64 items-center justify-center rounded-full text-white shadow-lg transition ${conversation.status === "connected" ? "bg-blue-600" : "bg-gray-400"} ${conversation.isSpeaking ? "animate-pulse" : ""}`}
              aria-label={
                conversation.status === "connected"
                  ? "Stop Agent"
                  : "Start Agent"
              }
            >
              <span className="text-lg font-semibold">
                {conversation.status === "connected"
                  ? conversation.isSpeaking
                    ? "Speaking…"
                    : "Listening"
                  : "Start Agent"}
              </span>
            </button>
          </div>

          {/* Right: Scenario header + Chat window */}
          <div className="flex h-[70vh] flex-col">
            <div className="flex items-start justify-between rounded-lg bg-white p-5 shadow">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {currentScenario.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {currentScenario.description}
                </p>
              </div>
              <button
                onClick={switchScenario}
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Switch scenario
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-hidden rounded-lg bg-white shadow">
              <div className="flex h-full flex-col">
                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`max-w-[50%] rounded-lg px-3 py-2 text-sm leading-relaxed ${m.role === "assistant" ? "bg-blue-50 text-blue-900" : "ml-auto bg-gray-100 text-gray-900"}`}
                    >
                      {m.parts.map((part, index) =>
                        part.type === "text" ? (
                          <span key={index}>{part.text}</span>
                        ) : null,
                      )}
                    </div>
                  ))}
                </div>
                {/* No input: voice-only interaction */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
