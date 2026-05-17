import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Car, Shield, Layers, Gem, Palette, Package, Box, Radio, Monitor, Settings, Sofa } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  { title: "PPF", icon: Shield, color: "text-primary" },
  { title: "Ceramic Coating", icon: Sparkles, color: "text-primary" },
  { title: "Graphene Coating", icon: Layers, color: "text-primary" },
  { title: "Diamond Coating", icon: Gem, color: "text-primary" },
  { title: "Exterior Detailing", icon: Car, color: "text-primary" },
  { title: "Interior Detailing", icon: Sofa, color: "text-primary" },
  { title: "Colour Wraps", icon: Palette, color: "text-primary" },
  { title: "Premium Accessories", icon: Package, color: "text-primary" },
  { title: "Body Kits", icon: Box, color: "text-primary" },
  { title: "Audio Upgrades", icon: Radio, color: "text-primary" },
  { title: "Infotainments", icon: Monitor, color: "text-primary" },
  { title: "Interior Upgrades", icon: Settings, color: "text-primary" },
];

export default function ServicesPreview() {
  return (
    <section id="services-preview" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-4 text-center hover-elevate transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 ${service.color} mb-3`}
                >
                  <service.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="font-medium text-sm">{service.title}</h3>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" className="group" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}