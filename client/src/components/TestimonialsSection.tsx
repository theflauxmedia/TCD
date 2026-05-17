import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// todo: remove mock functionality - replace with real testimonials from backend
const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    car: "BMW 5 Series",
    rating: 5,
    review:
      "Absolutely phenomenal work! My car looks better than when I bought it. The ceramic coating they applied is incredible - water just beads off beautifully.",
    initials: "RS",
  },
  {
    id: 2,
    name: "Priya Menon",
    car: "Mercedes C-Class",
    rating: 5,
    review:
      "TCD transformed my car completely. The interior detailing was so thorough, it feels brand new. Highly recommend their full detail package!",
    initials: "PM",
  },
  {
    id: 3,
    name: "Arun Kumar",
    car: "Audi Q5",
    rating: 5,
    review:
      "Professional service from start to finish. The paint correction removed years of swirl marks. Worth every rupee spent!",
    initials: "AK",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    car: "Honda City",
    rating: 5,
    review:
      "Best detailing service in JP Nagar! They're meticulous, use premium products, and the results speak for themselves. My go-to place now.",
    initials: "SR",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
          >
            <Quote className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their TCD experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card
                className="p-6 h-full hover-elevate transition-all duration-300"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.car}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.review}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex -space-x-2">
              {["RS", "PM", "AK", "SR"].map((initials, i) => (
                <Avatar
                  key={i}
                  className="w-8 h-8 border-2 border-background"
                >
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              ))}
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium">
                +50
              </div>
            </div>
            <span className="text-sm">Join 50+ happy customers this month</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}