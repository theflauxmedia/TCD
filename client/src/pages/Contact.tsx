import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Mail,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { motion } from "framer-motion";

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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
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
${formState.email ? `*Email:* ${formState.email}` : ''}
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
      setFormState({ name: "", phone: "", email: "", service: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Opposite Zaitoon Restaurant, JP Nagar, Bengaluru - 560078",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 6363387843",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@thecardetailing.in",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Open All Days: 9:30 AM - 7:30 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <MessageCircle className="w-8 h-8 text-primary" />
              </motion.div> */}
              <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
                Get In Touch
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ready to give your car the treatment it deserves? Contact us today
                for a free consultation and quote.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8 lg:space-y-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="p-5 h-full hover-elevate">
                        <div className="flex items-start gap-4">
                          {/* <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-3 rounded-md bg-primary/10 text-primary shrink-0"
                          >
                            <info.icon className="w-5 h-5" />
                          </motion.div> */}
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground text-sm">{info.content}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open(`https://wa.me/916363387843?text=${encodeURIComponent("Hello! I'm interested in your car detailing services.")}`, "_blank")}
                        data-testid="button-whatsapp"
                      >
                        <SiWhatsapp className="w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => window.open("https://www.instagram.com/thecardetailing.in/", "_blank", "noopener,noreferrer")}
                        data-testid="button-instagram"
                      >
                        <SiInstagram className="w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("Facebook clicked")}
                        data-testid="button-facebook"
                      >
                        <SiFacebook className="w-5 h-5" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
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
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="aspect-video rounded-md overflow-hidden border border-border"
                >
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
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="p-6 lg:p-8 shadow-lg">
                  <h3 className="font-serif font-semibold text-2xl lg:text-3xl mb-3">
                    Request a Quote
                  </h3>
                  <p className="text-muted-foreground mb-8 text-sm lg:text-base">
                    Fill out the form below and we'll send your details directly to WhatsApp for immediate response.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="Haseeb"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        data-testid="input-name"
                      />
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 6363387843"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          required
                          data-testid="input-phone"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          data-testid="input-email"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select
                        value={formState.service}
                        onValueChange={(value) =>
                          setFormState({ ...formState, service: value })
                        }
                        required
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message">Message</Label>
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group bg-[#ff7a1a] hover:bg-[#ff8a2a] text-white font-semibold"
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
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}