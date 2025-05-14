const express = require('express');
const { Groq } = require('groq-sdk');
const router = express.Router();

// Environment variables should be used for API keys
const groq = new Groq({
  apiKey: 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 
});

router.post('/generate-interview', async (req, res) => {
  try {
    const { cvContent, jobDescription } = req.body;
    
    if (!cvContent || !jobDescription) {
      return res.status(400).json({ error: 'CV content and job description are required' });
    }

    const systemPrompt = `
      You are an expert job interviewer. Based on the candidate's resume and the job description,
      generate 5 relevant interview questions that will help assess the candidate's fit for the role.
      Include a mix of technical and behavioral questions.
    `;
    
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Resume: ${cvContent}\n\nJob Description: ${jobDescription}` }
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 1024,
    });

    res.json({ 
      questions: chatCompletion.choices[0]?.message?.content || 'Failed to generate questions',
    });
  } catch (error) {
    console.error('Error calling Groq API:', error);
    res.status(500).json({ error: 'Failed to generate interview questions' });
  }
});

module.exports = router;