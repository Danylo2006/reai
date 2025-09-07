import { getAllMessages } from "@/db/queries";

export default async function Test() {
  const messages = await getAllMessages();
  console.log(messages);
  return (
    <div>
      <h1>Test Page - Messages Table Data</h1>
      <pre>{JSON.stringify(messages?.[0]?.id, null, 2)}</pre>
      <h2>All Messages:</h2>
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </div>
  );
}
