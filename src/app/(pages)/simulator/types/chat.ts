/**
 * The roles of a message
 */
export const roles = ["assistant", "user", "system"] as const;
export type Role = (typeof roles)[number];

/**
 * A message in the chat
 */
export interface Message {
  id: string;
  role: Role;
  content: string;
  tentative?: boolean;
}
