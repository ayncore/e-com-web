import BestSellers from "@/components/home/best-sellers";
import Discover from "@/components/home/discover";
import Hero from "@/components/home/hero";
import NewArrivals from "@/components/home/new-arrivals";
import NewsLetter from "@/components/home/news-letter";
import PrimeMembership from "@/components/home/prime-membership";
import SpecialOffers from "@/components/home/special-offers";
import Structure from "@/components/home/structure";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="md:mx-24 mx-10">
        <Discover/>
        <NewArrivals />
        <Structure />
        <PrimeMembership/>
        <BestSellers />
        <SpecialOffers/>
        <Testimonials />
        <NewsLetter />
      </div>
    </div>
  );
}
