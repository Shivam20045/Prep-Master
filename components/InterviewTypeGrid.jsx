import { interviewTypes } from "@/lib/interviewTypes";
import InterviewTypeCard from "@/components/InterviewTypeCard";

export default function InterviewTypeGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {interviewTypes.map((type) => (
        <InterviewTypeCard key={type.slug} type={type} />
      ))}
    </div>
  );
}
