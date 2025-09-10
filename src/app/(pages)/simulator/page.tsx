"use client";
import { useState } from "react";
import VoiceAgent from "./components/VoiceAgent";
import ScenarioCard from "./components/ScenarioCard";
import Chat from "./components/chat/Chat";
import type { Message } from "./types/chat";

export default function Simulator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Hi! I'm your practice agent. Click 'Start Agent' to begin our voice conversation.",
    },
    {
      id: "welcome-2",
      role: "user",
      content: "Great! Click 'Start Agent' to begin our voice conversation.",
    },
  ]);

  const handleNewMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <main className="h-full p-6">
      <div className="mx-auto h-full max-w-7xl">
        <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left column: VoiceAgent */}
          <div>
            <VoiceAgent onMessage={handleNewMessage} />
          </div>
          {/* Right column: ScenarioCard on top, Chat below */}
          <div className="flex h-full flex-col gap-6">
            <ScenarioCard />
            <div className="flex-1">
              <Chat messages={messages} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
