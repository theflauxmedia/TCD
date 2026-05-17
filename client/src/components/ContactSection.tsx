import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Quote Request from TCD Website*

*Name:* ${formState.name}
*Phone:* ${formState.phone}
*Service Interested In:* ${formState.service}
${formState.message ? `*Message:*\n${formState.message}` : ''}

---
_This message was sent from the TCD website contact form._`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/916363387843?text=${encodedMessage}`;
    
    // Open WhatsApp with the formatted message
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", phone: "", service: "", message: "" });
    }, 2000);
  };

  const businessInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Opposite Zaitoon Restaurant, JP Nagar, Bengaluru",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6363387843",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9:30 AM - 7:30 PM",
    },
  ];

  const services = [
    "Paint Protection Film (PPF)",
    "Ceramic Coating",
    "Graphene Coating",
    "Diamond Coating",
    "Exterior Detailing",
    "Interior Detailing",
    "Colour Wraps",
    "Premium Accessories",
    "Body Kits",
    "Audio Upgrades",
    "Infotainments",
    "Interior Upgrades",
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to give your car the treatment it deserves? Contact us today
            for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {businessInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4"
                data-testid={`info-${item.title.toLowerCase()}`}
              >
                <div className="p-3 rounded-md bg-primary/10 text-primary shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(`https://wa.me/916363387843?text=${encodeURIComponent("Hello! I'm interested in your car detailing services.")}`, "_blank")}
                  data-testid="button-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://www.instagram.com/thecardetailing.in/", "_blank", "noopener,noreferrer")}
                  data-testid="button-instagram"
                >
                  <SiInstagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => console.log("Facebook clicked")}
                  data-testid="button-facebook"
                >
                  <SiFacebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@TheCarDetailing-TCD",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  data-testid="button-youtube"
                >
                  <SiYoutube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <div className="aspect-video rounded-md overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8954046842894!2d77.58578248642185!3d12.903616002309679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzEzLjAiTiA3N8KwMzUnMDguOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TCD Location"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 lg:p-8">
              <h3 className="font-serif font-semibold text-xl mb-6">
                Request a Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 6363387843"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    data-testid="input-phone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select
                    value={formState.service}
                    onValueChange={(value) =>
                      setFormState({ ...formState, service: value })
                    }
                  >
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem
                          key={service}
                          value={service}
                          data-testid={`option-${service.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your car and what you're looking for..."
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#ff7a1a] hover:bg-[#ff8a2a] text-white font-semibold"
                  disabled={submitted}
                  data-testid="button-submit"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <SiWhatsapp className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}