# Voice Agent Simulator Setup

This simulator page allows you to test ElevenLabs voice agents using the React SDK.

## Prerequisites

1. **ElevenLabs Account**: Sign up at [elevenlabs.io](https://elevenlabs.io)
2. **Agent Created**: Create a voice agent in the ElevenLabs UI
3. **API Key**: Get your API key from the ElevenLabs settings

## Setup Steps

### 1. Get Your Agent ID

1. Go to the ElevenLabs UI
2. Navigate to your agent settings
3. Copy the Agent ID

### 2. Update the Simulator Code

In `/src/app/simulator/page.tsx`, replace the placeholder agent ID:

```typescript
const conversationId = await conversation.startSession({
  agentId: "your-actual-agent-id-here", // Replace this
  connectionType: "webrtc",
  userId: "simulator-user",
});
```

### 3. Environment Variables (Optional)

For production use, you might want to use environment variables:

```bash
# .env.local
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_AGENT_ID=your_agent_id_here
```

Then update the code to use:

```typescript
agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || 'your-agent-id-here',
```

## Features

- **Real-time Voice Conversation**: Talk with your ElevenLabs agent
- **Status Indicators**: See connection, microphone, and speaking status
- **Message History**: View conversation transcript
- **Volume Control**: Adjust agent voice volume
- **Error Handling**: Clear error messages and recovery options

## Usage

1. Allow microphone access when prompted
2. Click "Start Conversation"
3. Speak naturally with your agent
4. Use the volume slider to adjust audio
5. Click "End Conversation" when done

## Troubleshooting

- **Microphone Access Denied**: Click "Request Microphone Access" button
- **Connection Failed**: Check your agent ID and internet connection
- **No Audio**: Ensure your device volume is up and check browser audio settings

## Development

The simulator uses the `@elevenlabs/react` package with the following key features:

- `useConversation` hook for managing the voice conversation
- WebRTC connection for real-time audio
- Event handlers for connection, messages, and errors
- React state management for UI updates
