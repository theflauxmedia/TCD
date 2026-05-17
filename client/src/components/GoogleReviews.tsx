import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const GOOGLE_REVIEW_URL = "https://g.page/r/CRD7ovyIZSOhEBM/review";

// Google reviews data - Update these with actual reviews from your Google Business profile
const googleReviews = [
  {
    id: 1,
    name: "Akshay Kumar",
    rating: 5,
    review: "Amazing work, absolutely professional at their job.I had gone for an interior detailing service, from the planning, work to the estimated delivery it was on point. The work is impeccable. I feel like it is a new car from the inside.Highly recommend this place for your cars detailing needs.",
    date: "2 weeks ago",
    initials: "AK",
  },
  {
    id: 2,
    name: "Karthik",
    rating: 5,
    review: "Gave my Audi A6 for complete interior detailing and fungus removal. The team did an excellent job, the seats and cabin look fresh and restored to luxury. Great attention to detail and quality workmanship!",
    date: "1 month ago",
    initials: "K",
  },
  {
    id: 3,
    name: "Nikshith Shetty",
    rating: 5,
    review: "The team did a neat and clean job — from interior vacuuming to exterior polish, everything looks spotless and fresh. They truly paid attention to detail and delivered the car on time. Highly recommend for anyone looking for PPF, ceramic coating, or a complete detailing service in Bangalore.",
    date: "3 weeks ago",
    initials: "NK",
  },
  {
    id: 4,
    name: "Anir Bhattacharya",
    rating: 5,
    review: "Absolutely one of the beat detailing shop in town. Haseeb bhai is dedicated to his work and will not leave you disappointed. He has a lot of knowledge about cars and you can trust him. He puts extra efforts to make the work excellent. Give him time and he will give you Amazing results. Happy family TCD!",
    initials: "AB",
  }
];

export default function GoogleReviews() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.25em] text-[#ff7a1a]">Google Reviews</p>
        <h3 className="text-3xl sm:text-4xl font-semibold text-white">What Our Customers Say</h3>
        <p className="text-white/70 max-w-2xl">
          Real reviews from satisfied customers who experienced our premium car detailing services.
        </p>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {googleReviews.map((review) => (
              <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full p-5 border border-white/10 bg-[#0b0b0e] shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar className="w-10 h-10 border-2 border-[#ff7a1a]/20">
                        <AvatarFallback className="bg-[#ff7a1a]/10 text-[#ff7a1a] font-semibold text-sm">
                          {review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                        <p className="text-white/50 text-xs">{review.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#ff7a1a] text-[#ff7a1a]"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-4">
                      "{review.review}"
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <img
                        src="/google-logo.png"
                        alt="Google"
                        className="w-4 h-4"
                        onError={(e) => {
                          // Fallback to external URL if local file doesn't exist
                          (e.target as HTMLImageElement).src = "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png";
                        }}
                      />
                      <span className="text-white/60 text-xs">Google Review</span>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-white/20 text-white hover:bg-white/10" />
          <CarouselNext className="hidden md:flex -right-12 border-white/20 text-white hover:bg-white/10" />
        </Carousel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center pt-4"
      >
        <Button
          size="lg"
          className="btn-glow px-8 py-3 text-base font-semibold bg-[#ff7a1a] text-black shadow-[0_0_30px_rgba(255,122,26,0.35)] hover:shadow-[0_0_40px_rgba(255,122,26,0.5)] transition-shadow"
          onClick={() => window.open(GOOGLE_REVIEW_URL, "_blank", "noopener,noreferrer")}
        >
          <img
            src="/google-logo.png"
            alt="Google"
            className="w-5 h-5 mr-2"
            onError={(e) => {
              // Fallback to external URL if local file doesn't exist
              (e.target as HTMLImageElement).src = "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png";
            }}
          />
          Write a Review
        </Button>
      </motion.div>
    </section>
  );
}
