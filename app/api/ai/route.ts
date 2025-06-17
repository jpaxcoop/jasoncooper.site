import { resumeContent } from '@/data/resume-content';
import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { roleDescription } = await req.json();

  const prompt = `
Given the following resumé of Jason Cooper, a man:

${JSON.stringify(resumeContent)}

And the following job description:

${roleDescription}

Describe in a bullet point list of 120 words or less how well the resumé matches the job, including skills, experience, and suitability.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    const aiResponse = completion.choices[0].message.content;
    return NextResponse.json({ result: aiResponse });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
