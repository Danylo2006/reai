"use client";
import MessageBubble from "./MessageBubbles";
import type { Message } from "@/app/(pages)/simulator/types/chat";

export default function Chat({ messages }: { messages: Message[] }) {
  return (
    <div className="mt-4 flex-1 overflow-hidden rounded-lg bg-white shadow">
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}
