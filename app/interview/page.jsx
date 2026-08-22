import { SectionLabel, SectionHeading } from "@/components/reusable";
import { AmbientBlobsBackground } from "@/components/AmbientBlobsBackground";
import InterviewTypeGrid from "@/components/InterviewTypeGrid";

export default function InterviewTypesPage() {
  return (
    <div className="relative bg-white overflow-x-hidden">
      <section className="relative px-4 sm:px-8 pt-32 sm:pt-40 pb-24 overflow-hidden">
        <AmbientBlobsBackground className="z-0" />

        <div className="relative z-10 max-w-5xl mx-auto -mt-10">
          <div className="text-center mb-16">
            <SectionLabel>9 tracks — pick one to start</SectionLabel>
            <SectionHeading gray="Choose your" gold="interview track." />
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-4 leading-relaxed">
              Every track runs the same live AI interviewer, calibrated to a
              different bar. Pick the one closest to your next real loop and
              start in seconds.
            </p>
          </div>

          <InterviewTypeGrid />
        </div>
      </section>
    </div>
  );
}
