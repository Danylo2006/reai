import { db } from "./index";
import { messages } from "./schema";
import { eq, desc } from "drizzle-orm";

// Message queries
export async function createMessage(data: { content?: string; role: string }) {
  const [message] = await db.insert(messages).values(data).returning();
  return message;
}

export async function getMessageById(id: number) {
  const [message] = await db.select().from(messages).where(eq(messages.id, id));
  return message;
}

export async function getAllMessages() {
  return await db.select().from(messages).orderBy(desc(messages.createdAt));
}

export async function getMessagesByRole(role: string) {
  return await db.select().from(messages).where(eq(messages.role, role));
}
