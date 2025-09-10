import type { Message } from "@/app/(pages)/simulator/types/chat";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <div
      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
          message.role === "assistant"
            ? "bg-blue-50 text-blue-900"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
