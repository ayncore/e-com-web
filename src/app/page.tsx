import BestSellers from "@/components/home/bestsellers";
import Hero from "@/components/home/hero";
import NewArrivals from "@/components/home/newarrivals";
import NewsLetter from "@/components/home/newsletter";
import Structure from "@/components/home/structure";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="md:mx-24 mx-10">
        <NewArrivals/>
        <BestSellers/>
        <Structure/>
      <Testimonials />
      <NewsLetter />
      </div>
     
    </div>
  );
}
