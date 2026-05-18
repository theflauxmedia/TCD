import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const PHONE_NUMBER = "6363387843";
const WHATSAPP_NUMBER = "6363387843";

export default function FloatingButtons() {
  const handleCall = () => {
    window.location.href = `tel:+91${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your car detailing services.");
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="w-14 h-14 rounded-full bg-[#ff7a1a] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
        aria-label="WhatsApp us"
      >
        <SiWhatsapp className="w-7 h-7" />
      </motion.button>
    </div>
  );
}
