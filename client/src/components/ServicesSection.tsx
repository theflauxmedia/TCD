import ServiceCard from "./ServiceCard";
import {
  Sparkles,
  Car,
  Shield,
  Paintbrush,
  Sofa,
  Wrench,
  Layers,
  Gem,
  Palette,
  Package,
  Box,
  Radio,
  Monitor,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  onLearnMore?: (service: string) => void;
}

// todo: remove mock functionality - replace with real service data from backend
const services = [
  {
    title: "Paint Protection Film (PPF)",
    description:
      "Self-healing PPF installation to protect against scratches, chips, and UV damage. Premium protection for your vehicle.",
    icon: Shield,
    price: "₹25,000",
    popular: true,
  },
  {
    title: "Ceramic Coating",
    description:
      "Ultimate paint protection with 9H hardness ceramic coating. Lasts up to 5 years with proper care.",
    icon: Sparkles,
    price: "₹15,000",
  },
  {
    title: "Graphene Coating",
    description:
      "Next-generation coating technology using graphene for superior protection and enhanced durability.",
    icon: Layers,
    price: "₹20,000",
  },
  {
    title: "Diamond Coating",
    description:
      "Premium diamond-infused coating providing the highest level of protection and ultra-durable finish.",
    icon: Gem,
    price: "₹30,000",
  },
  {
    title: "Exterior Detailing",
    description:
      "Complete exterior wash, clay bar treatment, polish, and wax for a showroom shine.",
    icon: Car,
    price: "₹3,000",
  },
  {
    title: "Interior Detailing",
    description:
      "Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Steam sanitization included.",
    icon: Sofa,
    price: "₹2,500",
  },
  {
    title: "Colour Wraps",
    description:
      "Transform your vehicle's appearance with premium vinyl wraps. Wide range of colors and finishes.",
    icon: Palette,
    price: "₹35,000",
  },
  {
    title: "Premium Accessories",
    description:
      "Enhance your vehicle with premium accessories including spoilers, diffusers, and grilles.",
    icon: Package,
    price: "Custom",
  },
  {
    title: "Body Kits",
    description:
      "Complete body kit installation for aggressive styling and improved aerodynamics.",
    icon: Box,
    price: "Custom",
  },
  {
    title: "Audio Upgrades",
    description:
      "Premium audio system upgrades with high-quality speakers, amplifiers, and subwoofers.",
    icon: Radio,
    price: "Custom",
  },
  {
    title: "Infotainments",
    description:
      "Modern infotainment system upgrades with touchscreen displays and advanced connectivity.",
    icon: Monitor,
    price: "Custom",
  },
  {
    title: "Interior Upgrades",
    description:
      "Transform your interior with premium upholstery, custom stitching, and luxury trim upgrades.",
    icon: Settings,
    price: "Custom",
  },
];

export default function ServicesSection({ onLearnMore }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From basic washes to complete transformations, we offer comprehensive
            detailing services for every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              onLearnMore={() => onLearnMore?.(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}