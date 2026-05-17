import { MapPin, Phone, Clock } from "lucide-react";
import { SiWhatsapp, SiInstagram, SiFacebook, SiYoutube } from "react-icons/si";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Owner", href: "/owner" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Paint Protection Film (PPF)", href: "/services" },
    { label: "Ceramic Coating", href: "/services" },
    { label: "Graphene Coating", href: "/services" },
    { label: "Diamond Coating", href: "/services" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 mb-4 cursor-pointer"
              >
                <img
                  src="/favicon_io/android-chrome-192x192.png"
                  alt="TCD Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-serif font-bold text-lg">TCD</h3>
                  <p className="text-muted-foreground text-sm">The Car Detailing</p>
                </div>
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium car detailing services in Bengaluru. Transforming your ride
              to showroom glory. Over 800+ cars detailed with precision and care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground text-sm hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Opposite Zaitoon Restaurant, JP Nagar, Bengaluru</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>+91 6363387843</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 shrink-0 text-primary" />
                <span>Open All Days: 9:30 AM - 7:30 PM</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`https://wa.me/916363387843?text=${encodeURIComponent("Hello! I'm interested in your car detailing services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/thecardetailing.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                data-testid="link-footer-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/@TheCarDetailing-TCD"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                data-testid="link-footer-youtube"
              >
                <SiYoutube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 text-xs">
          <a
            href="https://theflauxmedia.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3"
          >
            <img
              src="/tfm.png"
              alt="The Flaux Media"
              className="h-6 w-auto object-contain invert"
            />
            <span>
              Website developed and handled by{" "}
              <span className="font-semibold underline underline-offset-2">
                TheFlauxMedia
              </span>
            </span>
          </a>
          <p className="text-[11px] text-neutral-300">
            &copy; {currentYear} TheFlauxMedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}