import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { resumeContent } from '@/data/resume-content';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // keep your API key safe
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { roleDescription } = body;
    const resumeJsonString = JSON.stringify(resumeContent, null, 2);

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `
You are a highly accurate resume assistant. Your primary goal is to update the introduction section of a resume to better fit a provided job description. You must strictly follow these rules:

- You may only use information explicitly stated in the provided resume JSON data.
- Do not infer, assume, guess, or invent any information that is not present in the resume data.
- If a qualification, skill, or experience is not found in the resume data, do not mention it.
- Always write in first-person ("I...").
- Do not reference the job description directly ("As required in this role...") — simply adapt the introduction to reflect relevant existing qualifications.
- If the job description asks for skills not found in the resume data, ignore them.
- Be factually accurate above all else.
      `
        },
        {
          role: 'user',
          content: `
Here is the job description:

${roleDescription}

Here is Jason's resume data:

${resumeJsonString}

Your tasks:

- Rewrite the resume introduction section. Do not indicate experience in a role that is not present in the Experience section of the resume data.
- Remove any languages and frameworks that are not relevant to the job description.
- Remove any tools that are not relevant to the job description.
- Provide the updated introduction, languages and frameworks, and tools in the following JSON format:

{ 
  "introduction": {
    "title": "Your new title here",
    "text": "Your new introduction text here"
  },
  "languagesAndFrameworks": {
    id: "languages-and-frameworks",
    "list": ["List of relevant languages and frameworks"]
  },
  "tools": {
    id: "tools",
    "list": ["List of relevant tools"]
  }
}

Remember: do not invent or assume any new skills or qualifications. Use only information present in the resume data.
          `
        }
      ],
      temperature: 0,
    });

    const aiResponse = completion.choices[0].message.content;

    return NextResponse.json({ result: aiResponse });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
