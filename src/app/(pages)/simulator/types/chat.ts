/**
 * The roles of a message
 */
export type Role = "ai" | "user" | "system";

/**
 * A message in the chat
 */
export interface Message {
  id: string;
  role: Role;
  content: string;
  tentative?: boolean;
}
