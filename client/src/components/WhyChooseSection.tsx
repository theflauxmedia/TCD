import { Check, Award, Users, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import workspaceImage from "@assets/generated_images/tcd_workspace_studio.png";

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Our team is trained and certified in the latest detailing techniques.",
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "We use only top-tier products from trusted brands worldwide.",
  },
  {
    icon: Users,
    title: "JP Nagar's Trusted Choice",
    description: "Over 1000+ satisfied customers in the local community.",
  },
  {
    icon: Clock,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll redo it until you're completely satisfied.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6">
              Why Choose <span className="text-primary">TCD</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              For over 5 years, The Car Detailing has been JP Nagar's premier
              destination for automotive care. We combine passion with precision
              to deliver results that exceed expectations.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={workspaceImage}
                alt="TCD Professional Workspace"
                className="w-full h-full object-cover"
                data-testid="img-workspace"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-md shadow-lg">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}