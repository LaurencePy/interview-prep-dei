const conversationHistory = [
  { role: "system", content: "You are a helpful assistant with a calm tone." },
  { role: "user", content: "Hi, who won the last World Cup?" },
  { role: "assistant", content: "Argentina won the 2022 FIFA World Cup." },
  { role: "user", content: "Cool! Who was the top scorer?" }
];

async function sendToElevenLabsAgent() {
    const response = await fetch('https://api.elevenlabs.io/v1/conversational-agent', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'xi-api-key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
        messages: conversationHistory,
        voice_id: 'YOUR_VOICE_ID',
        model_id: 'eleven_conversational_v1'  // Hypothetical
    })
    });

    const result = await response.json();
    conversationHistory.push({ role: "assistant", content: responseText });
    console.log(result);
}