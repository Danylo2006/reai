import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  content: text("content"),
  role: varchar("role", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
