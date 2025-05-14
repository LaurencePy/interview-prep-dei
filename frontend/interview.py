from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Define ElevenLabs API credentials
ELEVEN_LABS_API_URL = "https://api.elevenlabs.io/v1/your-endpoint"
ELEVEN_LABS_API_KEY =  os.getenv("ELEVEN_LABS_API_KEY")

@app.route('/interview', methods=['POST'])
def interview():
    # Get the CV content and job description from the frontend
    data = request.json
    cv_content = data.get('cvContent', '')
    job_description = data.get('jobDescription', '')
    questions = data.get('questions', [])
    
    # Create the context for ElevenLabs AI
    context = f"""
    You are an AI interview preparation assistant. The person you are talking to is Bob. Always address them as Bob.
    
    CANDIDATE'S CV/RESUME:
    {cv_content}
    
    JOB DESCRIPTION:
    {job_description}s
    
    INTERVIEW QUESTIONS TO USE:
    {questions}
    
    INSTRUCTIONS:
    1. Act as an interviewer for the position described in the job description.
    2. Use the provided interview questions as your main questions.
    3. Provide constructive feedback after candidate responses.
    4. Focus on both technical skills and soft skills mentioned in the job description.
    5. Be professional but encouraging in your tone.
    
    Begin the interview by introducing yourself as the interviewer and ask the first question.
    """

    # Call the ElevenLabs API to generate the interview session
    response = requests.post(ELEVEN_LABS_API_URL, json={
        "context": context,
        "api_key": ELEVEN_LABS_API_KEY
    })
    
    if response.status_code == 200:
        interview_data = response.json()
        return jsonify(interview_data)  # Forward the AI response to the frontend
    else:
        return jsonify({"error": "Failed to communicate with ElevenLabs"}), 500


if __name__ == '__main__':
    app.run(debug=True)