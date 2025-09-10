"use client";
import { useState } from "react";
import type { Message, Role } from "@/app/(pages)/simulator/types/chat";

export default function useAddMessage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (content: string, role: Role = "user") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const updateLastMessage = (content: string, role: Role) => {
    setMessages((prev) => {
      const lastMessage = prev[prev.length - 1];
      if (lastMessage && lastMessage.role === role) {
        // Update the last message content
        return [...prev.slice(0, -1), { ...lastMessage, content }];
      } else {
        // Add new message if last message isn't the same role
        return [
          ...prev,
          {
            id: Date.now().toString(),
            role,
            content,
          },
        ];
      }
    });
  };

  return { messages, addMessage, updateLastMessage };
}
