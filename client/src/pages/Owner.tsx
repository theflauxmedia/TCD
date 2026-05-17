import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Award, Users, Star, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const stats = [
  { value: "800+", label: "Cars Transformed", icon: Users },
  { value: "5+", label: "Years of Mastery", icon: Calendar },
  { value: "100%", label: "Client Satisfaction", icon: Star },
  { value: "50+", label: "Premium Products Used", icon: Award },
];

const expertise = [
  "Paint Protection Film (PPF) Installation",
  "Ceramic & Graphene Coating",
  "Paint Correction & Polishing",
  "Interior Deep Detailing",
  "Vinyl & Colour Wrap Fitment",
  "Diamond Coating Application",
  "Body Kit & Accessory Fitment",
  "Audio & Infotainment Upgrades",
];

const timeline = [
  {
    year: "2019",
    title: "Founded TCD",
    description: "Opened the first TCD bay in JP Nagar with a singular obsession — flawless finish.",
  },
  {
    year: "2021",
    title: "PPF Certification",
    description: "Became one of Bengaluru's certified Paint Protection Film installers, unlocking a new tier of vehicle defence.",
  },
  {
    year: "2023",
    title: "800+ Cars Milestone",
    description: "Surpassed 800 transformations across hatchbacks, sedans, SUVs, and supercars.",
  },
  {
    year: "2024",
    title: "Full Upgrade Studio",
    description: "Expanded into audio, infotainment, body kits, and interior upgrades — a true one-stop detailing destination.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Owner() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />

      <main className="overflow-hidden">
        {/* ─── Hero ─── */}
        <section className="relative pt-32 pb-24 isolate">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(255,122,26,0.14),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_70%,rgba(255,122,26,0.07),transparent_45%)]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-sm uppercase tracking-[0.35em] text-[#ff7a1a] mb-5"
            >
              The Mind Behind TCD
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left – Copy */}
              <div>
                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-4"
                >
                  Meet
                  <br />
                  <span className="text-[#ff7a1a]">Haseeb</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="text-white/60 text-lg tracking-wide mb-2 font-medium"
                >
                  Founder & Head Detailer — The Car Detailing
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="flex items-center gap-2 text-sm text-white/40 mb-10"
                >
                  <MapPin className="w-4 h-4 text-[#ff7a1a]" />
                  JP Nagar, Bengaluru
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl"
                >
                  A passionate automotive craftsman who turned an obsession with perfection
                  into Bengaluru's most trusted detailing studio. Every car that enters TCD
                  is treated as a personal commission — no shortcuts, no compromises.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  className="flex flex-wrap gap-4"
                >
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="btn-glow px-8 bg-[#ff7a1a] text-black font-semibold shadow-[0_0_30px_rgba(255,122,26,0.35)] hover:shadow-[0_0_40px_rgba(255,122,26,0.5)] transition-shadow"
                    >
                      Book a Session
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={`https://wa.me/916363387843?text=${encodeURIComponent("Hello! I'd love to connect with the owner about your services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-white/15 text-white/80 hover:border-[#ff7a1a]/50 hover:text-white transition-all text-base font-medium"
                  >
                    <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                    WhatsApp
                  </motion.a>
                </motion.div>
              </div>

              {/* Right – Owner Photo Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle,rgba(255,122,26,0.22),transparent_65%)] blur-2xl" />

                  {/* Photo frame */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-[#ff7a1a]/25 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                    <img
                      src="/gallery/13.webp"
                      alt="TCD Owner"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />

                    {/* Name badge on photo */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="backdrop-blur-md bg-black/50 border border-white/10 rounded-xl px-4 py-3">
                        <p className="text-white font-semibold text-lg leading-tight">Haseeb</p>
                        <p className="text-[#ff7a1a] text-sm">Founder, The Car Detailing</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="absolute -bottom-5 -right-5 bg-[#ff7a1a] text-black rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgba(255,122,26,0.4)]"
                  >
                    <p className="text-2xl font-bold leading-none">800+</p>
                    <p className="text-xs font-medium mt-0.5 opacity-80">Cars Detailed</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Stats Strip ─── */}
        <section className="border-y border-white/8 bg-[#0b0b0e]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="text-center"
                >
                  <p className="text-4xl font-bold text-[#ff7a1a]">{stat.value}</p>
                  <p className="text-white/50 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── About / Story ─── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Story */}
              <div>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                  className="text-sm uppercase tracking-[0.3em] text-[#ff7a1a] mb-4"
                >
                  The Story
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  className="text-3xl sm:text-4xl font-semibold mb-6 leading-tight"
                >
                  Built from Passion,
                  <br />
                  Defined by Precision.
                </motion.h2>

                <div className="space-y-5 text-white/70 leading-relaxed">
                  {[
                    "Growing up surrounded by cars, the obsession with paint depth and finish clarity started early. What began as weekend washing and polishing in a garage evolved into a disciplined craft — one panel at a time.",
                    "After years of hands-on training and investing in the finest professional equipment and chemistries, TCD was founded with one clear mission: to bring the same level of care and precision that a factory showroom applies, to every car that deserves it in Bengaluru.",
                    "Today, that same hands-on passion drives every service at TCD. The owner personally oversees each job — ensuring that whether it's a basic wash or a full PPF + ceramic stack, the standard never drops.",
                  ].map((para, i) => (
                    <motion.p
                      key={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i + 2}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                  className="text-sm uppercase tracking-[0.3em] text-[#ff7a1a] mb-4"
                >
                  Milestones
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  className="text-3xl sm:text-4xl font-semibold mb-8 leading-tight"
                >
                  A Journey of
                  <br />
                  Continuous Mastery.
                </motion.h2>

                <div className="relative space-y-0">
                  {/* Vertical line */}
                  <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[#ff7a1a]/60 via-[#ff7a1a]/20 to-transparent" />

                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i + 2}
                      className="relative flex gap-6 pb-8 last:pb-0"
                    >
                      {/* Dot */}
                      <div className="relative z-10 flex-shrink-0 w-[54px] flex items-start justify-center pt-1">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff7a1a] border-2 border-[#050505] shadow-[0_0_10px_rgba(255,122,26,0.6)]" />
                      </div>

                      <div>
                        <span className="text-xs font-mono tracking-widest text-[#ff7a1a]/70 mb-1 block">
                          {item.year}
                        </span>
                        <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                        <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Philosophy Quote ─── */}
        <section className="relative py-20 overflow-hidden bg-[#0b0b0e] border-y border-white/6">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#ff7a1a]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#ff7a1a]/8 blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-[#ff7a1a]/40 text-8xl font-serif leading-none select-none mb-4">"</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-white mb-8">
                A car isn't just transportation.
                <br />
                <span className="text-[#ff7a1a]">It's an expression of who you are —</span>
                <br />
                and it deserves to look the part.
              </blockquote>
              <p className="text-white/40 text-base tracking-widest uppercase font-medium">
                — Haseeb, Founder · The Car Detailing
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── Expertise ─── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left – intro */}
              <div>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                  className="text-sm uppercase tracking-[0.3em] text-[#ff7a1a] mb-4"
                >
                  Areas of Expertise
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  className="text-3xl sm:text-4xl font-semibold mb-6 leading-tight"
                >
                  Certified Skills,
                  <br />
                  Proven Results.
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                  className="text-white/65 leading-relaxed"
                >
                  Every technique is trained, tested, and refined over hundreds of real-world applications.
                  No guesswork — just expertise backed by results you can see.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3}
                  className="mt-8 relative overflow-hidden rounded-2xl border border-white/8"
                >
                  <img
                    src="/gallery/4.webp"
                    alt="Detailing work"
                    className="w-full h-52 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
                </motion.div>
              </div>

              {/* Right – skill list */}
              <div className="space-y-3">
                {expertise.map((skill, i) => (
                  <motion.div
                    key={skill}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    className="group flex items-center gap-4 rounded-xl border border-white/8 bg-gradient-to-r from-[#0b0b0e] to-[#0d0d10] px-5 py-4 hover:border-[#ff7a1a]/30 hover:bg-[#0f0f0f] transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#ff7a1a] shrink-0" />
                    <span className="text-white/80 group-hover:text-white transition-colors font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Gallery Preview ─── */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden"
            >
              {["/gallery/2.webp", "/gallery/7.webp", "/gallery/11.webp"].map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="aspect-square overflow-hidden"
                >
                  <motion.img
                    src={src}
                    alt={`Work sample ${i + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mt-6"
            >
              <Link href="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/15 text-white hover:bg-white/8 hover:border-[#ff7a1a]/40 transition-all"
                >
                  View Full Gallery
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── Contact / CTA ─── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#0b0b0e] via-[#0a0808] to-[#0b0b0e] py-16 border-t border-white/6">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#ff7a1a]/18 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#ffae52]/15 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0}
                  className="text-sm uppercase tracking-[0.3em] text-[#ff7a1a] mb-4"
                >
                  Get in Touch
                </motion.p>
                <motion.h3
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  className="text-3xl sm:text-4xl font-semibold mb-4"
                >
                  Let's talk about
                  <br />
                  your car.
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                  className="text-white/60 leading-relaxed"
                >
                  Whether you need a quick detail or a full transformation package, reach out directly.
                  The owner personally responds to every enquiry.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className="flex flex-col gap-4"
              >
                {/* Contact cards */}
                <a
                  href="tel:+916363387843"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/4 px-5 py-4 hover:border-[#ff7a1a]/40 hover:bg-white/7 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ff7a1a]/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ff7a1a]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Call / WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-[#ff7a1a] transition-colors">+91 63633 87843</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/thecardetailing.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/4 px-5 py-4 hover:border-[#ff7a1a]/40 hover:bg-white/7 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ff7a1a]/15 flex items-center justify-center shrink-0">
                    <SiInstagram className="w-5 h-5 text-[#ff7a1a]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Follow on Instagram</p>
                    <p className="text-white font-medium group-hover:text-[#ff7a1a] transition-colors">@thecardetailing.in</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Opposite+Zaitoon+Restaurant,+JP+Nagar,+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/4 px-5 py-4 hover:border-[#ff7a1a]/40 hover:bg-white/7 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#ff7a1a]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ff7a1a]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Studio Location</p>
                    <p className="text-white font-medium group-hover:text-[#ff7a1a] transition-colors">Opp. Zaitoon Restaurant, JP Nagar</p>
                  </div>
                </a>

                <div className="flex gap-3 mt-2">
                  <Link href="/contact" className="flex-1">
                    <Button
                      size="lg"
                      className="w-full btn-glow bg-[#ff7a1a] text-black font-semibold shadow-[0_0_28px_rgba(255,122,26,0.32)] hover:shadow-[0_0_38px_rgba(255,122,26,0.48)] transition-shadow"
                    >
                      Book Your Slot
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
