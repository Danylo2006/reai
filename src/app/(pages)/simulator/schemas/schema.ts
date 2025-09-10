import { z } from "zod";

export const MessageSchema = z.object({
  source: z.enum(["user", "ai"]),
  message: z.string(),
});

export const UserTranscriptSchema = z.object({
  type: z.literal("user_transcript"),
  user_transcription_event: z.object({
    user_transcript: z.string(),
  }),
});

export const TentativeAgentResponseSchema = z.object({
  type: z.literal("internal_tentative_agent_response"),
  tentative_agent_response_internal_event: z.object({
    tentative_agent_response: z.string(),
  }),
});

export const AgentResponseSchema = z.object({
  type: z.literal("agent_response"),
  agent_response_event: z.object({
    agent_response: z.string(),
  }),
});
