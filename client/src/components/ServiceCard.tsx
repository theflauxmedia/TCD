import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
  popular?: boolean;
  index?: number;
  onLearnMore?: () => void;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  price,
  popular,
  index = 0,
  onLearnMore,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`relative p-6 h-full hover-elevate transition-all duration-300 ${
          popular ? "border-primary/50" : ""
        }`}
        data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {popular && (
          <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* <div className="p-3 rounded-md bg-primary/10 text-primary shrink-0">
            <Icon className="w-6 h-6" />
          </div> */}
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            {price && (
              <p className="text-primary font-semibold mb-4">
                Starting from {price}
              </p>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLearnMore}
              className="group p-0 h-auto"
              data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}