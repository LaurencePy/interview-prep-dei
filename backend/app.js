import { Conversation } from '@11labs/client';
class VoiceAgent {
  async startConversation() {
    try {
        // Request microphone access
        await navigator.mediaDevices.getUserMedia({ audio: true });
        this.conversation = await Conversation.startSession({
            agentId: '', // Replace with your actual agent ID
            dynamicVariables: {
                new_variable
            },
        });
    } catch (error) {
        console.error('Failed to start conversation:', error);
        alert('Failed to start conversation. Please ensure microphone access is granted.');
    }
  }
}