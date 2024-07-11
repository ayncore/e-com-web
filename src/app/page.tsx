import Hero from "@/components/home/hero";
import NewsLetter from "@/components/home/newsletter";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="md:mx-24 mx-10">
      <Testimonials />
      <NewsLetter />
      </div>
     
    </div>
  );
}
