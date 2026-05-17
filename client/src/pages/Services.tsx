import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Car, Shield, Paintbrush, Sofa, Wrench, ArrowRight, Layers, Gem, Palette, Package, Box, Radio, Monitor, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import polishingImage from "@assets/generated_images/car_polishing_detail_work.png";

// todo: remove mock functionality - replace with real service data from backend
const services = [
  {
    title: "Paint Protection Film (PPF)",
    description:
      "Self-healing PPF installation to protect against scratches, chips, stone damage and UV degradation. Premium protection for your vehicle's paintwork.",
    icon: Shield,
    price: "₹65,000",
    popular: true,
    features: ["Self-healing technology", "Stone chip protection", "Invisible finish", "10-year warranty"],
  },
  {
    title: "Ceramic Coating",
    description:
      "Ultimate paint protection with 9H hardness ceramic coating. Lasts up to 5 years with proper care and maintenance. Hydrophobic finish that repels water and dirt.",
    icon: Sparkles,
    price: "₹20,000",
    features: ["9H hardness", "Hydrophobic finish", "UV protection", "5-year durability"],
  },
  {
    title: "Graphene Coating",
    description:
      "Next-generation coating technology using graphene for superior protection and gloss. Enhanced durability and chemical resistance compared to traditional ceramic coatings.",
    icon: Layers,
    price: "₹25,000",
    features: ["Graphene technology", "Superior protection", "Enhanced gloss", "Chemical resistance"],
  },
  {
    title: "Diamond Coating",
    description:
      "Premium diamond-infused coating providing the highest level of protection and shine. Ultra-durable finish that maintains its brilliance for years.",
    icon: Gem,
    price: "₹30,000",
    features: ["Diamond-infused", "Ultra-durable", "Maximum gloss", "Long-lasting protection"],
  },
  {
    title: "Exterior Detailing",
    description:
      "Complete exterior wash, clay bar treatment, polish, and wax for a brilliant showroom shine that turns heads. Professional-grade products and techniques.",
    icon: Car,
    price: "₹10,000",
    features: ["Hand wash", "Clay bar treatment", "Polish & wax", "Tire dressing"],
  },
  {
    title: "Interior Detailing",
    description:
      "Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Steam sanitization included for a fresh, hygienic cabin environment.",
    icon: Sofa,
    price: "₹2,500",
    features: ["Seat shampooing", "Dashboard conditioning", "Steam sanitization", "Odor elimination"],
  },
  {
    title: "Colour Wraps",
    description:
      "Transform your vehicle's appearance with premium vinyl wraps. Wide range of colors, finishes, and designs. Professional installation with warranty.",
    icon: Palette,
    price: "₹65,000",
    features: ["Premium vinyl", "Multiple finishes", "Professional installation", "Warranty included"],
  },
  {
    title: "Premium Accessories",
    description:
      "Enhance your vehicle with premium accessories including spoilers, diffusers, grilles, and more. Quality parts that complement your car's style.",
    icon: Package,
    price: "Custom",
    features: ["Quality parts", "Perfect fit", "Professional installation", "Style enhancement"],
  },
  {
    title: "Body Kits",
    description:
      "Complete body kit installation for aggressive styling and improved aerodynamics. Custom fitment and professional installation for perfect results.",
    icon: Box,
    price: "Custom",
    features: ["Custom fitment", "Aerodynamic design", "Professional installation", "Style upgrade"],
  },
  {
    title: "Audio Upgrades",
    description:
      "Premium audio system upgrades with high-quality speakers, amplifiers, and subwoofers. Custom installation for optimal sound quality and performance.",
    icon: Radio,
    price: "Custom",
    features: ["Premium components", "Custom installation", "Sound optimization", "Professional tuning"],
  },
  {
    title: "Infotainments",
    description:
      "Modern infotainment system upgrades with touchscreen displays, Apple CarPlay, Android Auto, and advanced connectivity features.",
    icon: Monitor,
    price: "Custom",
    features: ["Touchscreen display", "CarPlay/Android Auto", "Advanced connectivity", "Seamless integration"],
  },
  {
    title: "Interior Upgrades",
    description:
      "Transform your interior with premium upholstery, custom stitching, ambient lighting, and luxury trim upgrades for a sophisticated cabin experience.",
    icon: Settings,
    price: "Custom",
    features: ["Premium materials", "Custom design", "Ambient lighting", "Luxury finishes"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${polishingImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              {/* <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div> */}
              <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
                Our Premium Services
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From basic washes to complete transformations, we offer comprehensive
                detailing services tailored to your car's needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    price={service.price}
                    popular={service.popular}
                    onLearnMore={() => console.log(`Learn more: ${service.title}`)}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-muted-foreground mb-6">
                Not sure which service is right for your car?
              </p>
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}