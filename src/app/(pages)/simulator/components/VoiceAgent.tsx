import { useConversation, type Role } from "@elevenlabs/react";
import { env } from "@/env";
import { useEffect } from "react";
import { Mic } from "lucide-react";
import type { Message } from "../types/chat";

interface VoiceAgentProps {
  onMessage: (message: Message) => void;
}

export default function VoiceAgent({ onMessage }: VoiceAgentProps) {
  // Simple microphone access on mount
  useEffect(() => {
    const requestMicrophone = async () => {
      try {
        await navigator.mediaDevices?.getUserMedia({ audio: true });
        console.log("Microphone access granted");
      } catch (error) {
        console.error("Microphone access denied:", error);
      }
    };
    void requestMicrophone();
  }, []);

  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to voice agent");
      onMessage({
        id: `connected-${Date.now()}`,
        role: "ai",
        content: "🎤 Connected! Start speaking to begin the conversation.",
      });
    },
    onDisconnect: () => {
      console.log("Disconnected from voice agent");
      onMessage({
        id: `disconnected-${Date.now()}`,
        role: "ai",
        content: "🔇 Conversation ended.",
      });
    },
    onMessage: (props: { message: string; source: Role }) => {
      console.log("Message received", props);

      // Handle the ElevenLabs message format
      if (props.message && props.source) {
        const messageId = `msg-${Date.now()}`;

        if (props.source === "user") {
          onMessage({
            id: messageId,
            role: "user",
            content: props.message,
          });
        } else if (props.source === "ai") {
          onMessage({
            id: messageId,
            role: "ai",
            content: props.message,
          });
        }
      }
    },
    onError: (message: string) => {
      console.error("Conversation error:", message);
    },
  });

  const startConversation = async () => {
    if (!env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID) {
      console.error("ElevenLabs Agent ID is not configured");
      return;
    }

    try {
      const conversationId = await conversation.startSession({
        agentId: env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
        connectionType: "webrtc",
      });
      console.log(`Conversation started with ID: ${conversationId}`);
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  };

  const endConversation = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error("Failed to end conversation:", error);
    }
  };

  const handleVoiceButtonClick = async () => {
    if (conversation.status === "connected") {
      await endConversation();
    } else {
      await startConversation();
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-white p-6 shadow">
      {/* Circle Voice Button */}
      <button
        onClick={handleVoiceButtonClick}
        className={`relative flex h-64 w-64 items-center justify-center rounded-full text-white shadow-lg transition ${
          conversation.status === "connected" ? "bg-blue-600" : "bg-gray-400"
        } ${conversation.isSpeaking ? "animate-pulse" : ""}`}
        aria-label={
          conversation.status === "connected" ? "Stop Agent" : "Start Agent"
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
  );
}
