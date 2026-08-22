import { notFound } from "next/navigation";
import { interviewTypes } from "@/lib/interviewTypes";
import InterviewSession from "@/components/InterviewSession";

export default async function InterviewSessionPage({ params }) {
  const { slug } = await params;
  const type = interviewTypes.find((t) => t.slug === slug);

  if (!type) return notFound();

  return <InterviewSession type={type} />;
}
