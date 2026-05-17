import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Shield, Target, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import workspaceImage from "@assets/generated_images/tcd_workspace_studio.png";

const stats = [
  { value: "800+", label: "Cars Detailed", icon: Users },
  { value: "100%", label: "Satisfaction Rate", icon: Award },
  { value: "50+", label: "Premium Products", icon: Shield },
  { value: "24/7", label: "Customer Support", icon: Clock },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters. We approach each car with meticulous attention to achieve flawless results.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do. Our passion for cars drives us to deliver exceptional service every time.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We use only premium, trusted products to ensure lasting protection and stunning finishes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from customer service to the final result.",
  },
];

const features = [
  "Certified and trained detailing professionals",
  "Premium products from trusted global brands",
  "State-of-the-art equipment and facility",
  "Customized solutions for every vehicle",
  "Transparent pricing with no hidden costs",
  "Satisfaction guaranteed on every service",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-3 mb-6"
                >
                  <img src="/favicon_io/android-chrome-512x512.png" alt="TCD Logo" className="w-16 h-16 object-contain" />
                  <div>
                    <h3 className="font-serif font-bold text-xl">TCD</h3>
                    <p className="text-muted-foreground text-sm">The Car Detailing</p>
                  </div>
                </motion.div>
                
                <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-6">
                  JP Nagar's Premier
                  <span className="text-primary block">Car Detailing Studio</span>
                </h1>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  The Car Detailing is Bengaluru's trusted destination 
                  for premium automotive care. Located in the heart of JP Nagar, opposite 
                  Zaitoon Restaurant, we've built our reputation on passion, precision, and 
                  uncompromising quality. With over 800+ cars detailed, we bring showroom-grade 
                  finishes to every vehicle.
                </p>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our team of certified professionals combines cutting-edge techniques with 
                  premium products to deliver transformations that exceed expectations. 
                  Every car that enters TCD receives the VIP treatment it deserves.
                </p>

                <Link href="/contact">
                  <Button size="lg" className="group">
                    Get in Touch
                    {/* <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> */}
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-md overflow-hidden">
                  <motion.img
                    src={"/gallery/3.webp"}
                    alt="TCD Professional Workspace"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-md shadow-lg"
                >
                  <div className="text-3xl font-bold">800+</div>
                  <div className="text-sm opacity-90">Cars Detailed</div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover-elevate">
                    {/* <motion.div
                      whileHover={{ rotate: 10 }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4"
                    >
                      <stat.icon className="w-6 h-6" />
                    </motion.div> */}
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="font-serif font-bold text-3xl text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full text-center hover-elevate">
                      {/* <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4"
                      >
                        <value.icon className="w-7 h-7" />
                      </motion.div> */}
                      <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-12 bg-primary/5">
                <h2 className="font-serif font-bold text-3xl text-center mb-8">Why Choose TCD?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      {/* <CheckCircle className="w-5 h-5 text-primary shrink-0" /> */}
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}