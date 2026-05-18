import ServiceCard from "../ServiceCard";
import { Sparkles } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="max-w-sm">
      <ServiceCard
        title="Ceramic Coating"
        description="Ultimate paint protection with 9H hardness ceramic coating that lasts up to 5 years. Hydrophobic properties for easy maintenance."
        icon={Sparkles}
        price="₹15,000"
        popular={true}
        onLearnMore={() => console.log("Learn more clicked")}
      />
    </div>
  );
}
