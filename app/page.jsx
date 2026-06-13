import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="pt-28 sm:pt-32">
        <Button variant="gold" size="hero">
          Subscribe
        </Button>
      </section>
    </div>
  );
}
