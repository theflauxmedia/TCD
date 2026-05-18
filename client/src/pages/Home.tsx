import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Layers } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoogleReviews from "@/components/GoogleReviews";
import { Button } from "@/components/ui/button";
import studioShot from "@assets/generated_images/tcd_workspace_studio.png";

const services = [
  {
    title: "Paint Protection Film (PPF)",
    description: "Self-healing PPF that guards against chips, swirls, and UV fade.",
    Icon: ShieldCheck,
  },
  {
    title: "Ceramic Coating",
    description: "Mirror-gloss finish with hydrophobic protection for 3+ years.",
    Icon: Sparkles,
  },
  {
    title: "Graphene Coating",
    description: "Next-gen protection with superior durability and enhanced gloss.",
    Icon: Layers,
  },
];

export default function Home() {
  const [, setLocation] = useLocation();
  const heroBackgrounds = useMemo(
    () => [
      "/gallery/1.webp",
      "/gallery/2.webp",
      "/gallery/4.webp",
      "/gallery/3.webp",
      "/gallery/5.webp",
      "/gallery/6.webp",
      "/gallery/7.webp",
      "/gallery/8.webp",
      "/gallery/9.webp",
      "/gallery/10.webp",
      "/gallery/11.webp",
      "/gallery/12.webp",
      "/gallery/13.webp",
      "/gallery/14.webp",
      "/gallery/15.webp",
      "/gallery/16.webp",
      "/gallery/17.webp",
      "/gallery/18.webp",
      "/gallery/19.webp",
      "/gallery/20.webp",
      "/gallery/21.webp",

    ],
    [],
  );
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((idx) => (idx + 1) % heroBackgrounds.length);
    }, 6500);
    return () => clearInterval(id);
  }, [heroBackgrounds.length]);

  const handleNavigate = (path: string) => setLocation(path);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="overflow-hidden">
        <section className="relative isolate flex min-h-[70vh] lg:min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 parallax-hero overflow-hidden">
          <div className="absolute inset-0 bg-[#050505]" />
          {heroBackgrounds.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: heroIndex === idx ? 1 : 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.38) 0%, rgba(5,5,5,0.45) 40%, rgba(0,0,0,0.32) 100%), url(${src})`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/25 to-[#050505]/75" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,26,0.15),transparent_35%)]" />
          <div className="relative z-10 max-w-6xl w-full py-24 lg:py-32 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.35em] text-[#ff7a1a]"
            >
              JP Nagar • Bengaluru
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]"
            >
              Precision Car Detailing in Bengaluru.
              <br className="hidden sm:block" />
              Unrivaled Finish.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-white/80"
            >
              A concierge detailing studio obsessed with depth, clarity, and protection. Matte black ambiance,
              bright amber highlights, and technicians who treat every panel like a bespoke commission.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.26 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="btn-glow px-8 py-3 text-base font-semibold bg-[#ff7a1a] text-black shadow-[0_0_30px_rgba(255,122,26,0.35)] hover:shadow-[0_0_40px_rgba(255,122,26,0.5)] transition-shadow"
                onClick={() => handleNavigate("/contact")}
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-base font-semibold border-white/30 text-white hover:bg-white/10"
                onClick={() => handleNavigate("/gallery")}
              >
                View Gallery
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.34 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
            >
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-white/70">Showroom Depth</p>
                <p className="text-2xl font-semibold text-white">4-Step Paint Correction</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-white/70">Protected Finish</p>
                <p className="text-2xl font-semibold text-[#ffae52]">PPF + Ceramic Stacks</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-sm text-white/70">Concierge</p>
                <p className="text-2xl font-semibold text-white">Pickup &amp; Priority Slots</p>
              </div>
            </motion.div>
            <div className="mt-10 flex justify-center gap-2">
              {heroBackgrounds.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setHeroIndex(idx)}
                  className={`h-2.5 w-8 rounded-full transition-all ${
                    heroIndex === idx ? "bg-[#ff7a1a]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff7a1a]">About TCD</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">
                Boutique Detailing Studio with an Obsession for Finish.
              </h2>
              <p className="text-white/70 leading-relaxed">
                We operate like a pit crew for your daily driver and weekend toys—controlled lighting, dust-free bays,
                OEM-safe chemistries, and craftsmen who measure success in microns of clarity. With over 800+ cars detailed,
                we bring proven expertise to every transformation. Expect concierge pickup, transparent updates, and finishes 
                that hold their gloss in Bengaluru's traffic and weather.
              </p>
              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="btn-glow px-7 bg-[#ff7a1a] text-black"
                  onClick={() => handleNavigate("/about")}
                >
                  Explore About Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => handleNavigate("/gallery")}
                >
                  View Results
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,122,26,0.18),transparent_50%)] blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <img
                  src={"/gallery/13.webp"}
                  alt="TCD Studio workspace"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10 mb-12 md:mb-16"
        >
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.25em] text-[#ff7a1a]">The Why</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">Core Services, Zero Fluff.</h2>
              <p className="text-white/70 max-w-xl">
                The three signature treatments every performance car in Bengaluru deserves. Designed for depth,
                defended for the city.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b0b0e] to-[#080707] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(255,122,26,0.12),transparent_40%)]" />
                <div className="relative flex items-center justify-between">
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7a1a]/15 border border-[#ff7a1a]/30 text-[#ffae52]">
                    <Icon className="h-6 w-6" />
                  </div> */}
                  <span className="text-sm text-white/60 group-hover:text-white/80 transition">
                    Premium
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="btn-glow px-7 bg-[#ff7a1a] text-black"
              onClick={() => handleNavigate("/services")}
            >
              View All Services
            </Button>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-[#050505] via-[#1a1a1a] via-[#3a3a3a] via-[#6a6a6a] to-white py-12 md:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff7a1a]">Hyper-Local</p>
            <div className="mt-3 flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white sm:text-[#0f0f0f]">Built for Bengaluru. Easy to Reach.</h3>
              <p className="text-lg text-white/80 sm:text-neutral-700">
                Located in JP Nagar, Bengaluru (Opposite Zaitoon Restaurant).
              </p>
              <p className="text-neutral-600">
                Quick access from Jayanagar, BTM, and Bannerghatta Road. Secure indoor bays and climate-controlled
                curing.
              </p>
            </div>
          </div>
        </section>

        <GoogleReviews />

        <section className="relative overflow-hidden bg-gradient-to-r from-[#0b0b0e] via-[#0a0808] to-[#0b0b0e] py-14">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#ff7a1a]/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#ffae52]/20 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ff7a1a]">One last push</p>
              <h4 className="text-2xl sm:text-3xl font-semibold text-white">
                Schedule your transformation. Slots fill fast.
              </h4>
              <p className="text-white/70 max-w-xl">
                Lock in your detailing window, get concierge pickup, and see a showroom-grade finish in hours.
              </p>
            </div>
            <Button
              size="lg"
              className="btn-glow px-8 py-3 text-base font-semibold bg-[#ff7a1a] text-black shadow-[0_0_30px_rgba(255,122,26,0.35)] hover:shadow-[0_0_40px_rgba(255,122,26,0.5)] transition-shadow"
              onClick={() => handleNavigate("/contact")}
            >
              Schedule Your Transformation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}