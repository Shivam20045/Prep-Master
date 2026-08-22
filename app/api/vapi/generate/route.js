import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-3.5-flash"),
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]

        Thank you! <3
    `,
    });

    
    const cleaned = questions.replace(/```json|```/g, "").trim();
    const parsedQuestions = JSON.parse(cleaned);

    const interview = await prisma.interview.create({
      data: {
        role,
        type,
        level,
        techstack: techstack.split(","),
        questions: parsedQuestions,
        userId: userid,
        finalized: true,
      },
    });

    return Response.json({ success: true, interview }, { status: 200 });
  } catch (error) {
    console.error("Error generating interview:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}
