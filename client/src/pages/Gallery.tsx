import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Image } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Gallery items from public/gallery folder (1.webp through 19.webp)
const galleryItems = [
  { id: 1, src: "/gallery/1.webp", title: "Premium Exterior Detailing", category: "Detailing" },
  { id: 2, src: "/gallery/2.webp", title: "Paint Correction & Polishing", category: "Transformation" },
  { id: 3, src: "/gallery/3.webp", title: "Ceramic Coating Application", category: "Protection" },
  { id: 4, src: "/gallery/4.webp", title: "Interior Deep Cleaning", category: "Interior" },
  { id: 5, src: "/gallery/5.webp", title: "Wheel & Tire Detailing", category: "Detailing" },
  { id: 6, src: "/gallery/6.webp", title: "Headlight Restoration", category: "Transformation" },
  { id: 7, src: "/gallery/7.webp", title: "Engine Bay Cleaning", category: "Detailing" },
  { id: 8, src: "/gallery/8.webp", title: "Before & After Transformation", category: "Results" },
  { id: 9, src: "/gallery/9.webp", title: "Luxury Vehicle Detailing", category: "Detailing" },
  { id: 10, src: "/gallery/10.webp", title: "Paint Protection Film", category: "Protection" },
  { id: 11, src: "/gallery/11.webp", title: "Premium Interior Vacuuming", category: "Interior" },
  { id: 12, src: "/gallery/12.webp", title: "Showroom Quality Finish", category: "Results" },
  { id: 13, src: "/gallery/13.webp", title: "Professional Polishing Work", category: "Transformation" },
  { id: 14, src: "/gallery/14.webp", title: "Complete Detail Service", category: "Detailing" },
  { id: 15, src: "/gallery/15.webp", title: "TCD Workspace Studio", category: "Facility" },
  { id: 16, src: "/gallery/16.webp", title: "Premium Coating Protection", category: "Protection" },
  { id: 17, src: "/gallery/17.webp", title: "Interior Leather Treatment", category: "Interior" },
  { id: 18, src: "/gallery/18.webp", title: "Masterpiece Transformation", category: "Results" },
  { id: 19, src: "/gallery/19.webp", title: "Store Front", category: "Facility" },
];

const categories = ["All", "Transformation", "Detailing", "Protection", "Interior", "Facility", "Results"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === galleryItems[selectedImage].id);
      const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
      setSelectedImage(galleryItems.findIndex(item => item.id === filteredItems[prevIndex].id));
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === galleryItems[selectedImage].id);
      const nextIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(galleryItems.findIndex(item => item.id === filteredItems[nextIndex].id));
    }
  };

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
              className="text-center mb-12"
            >
              {/* <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
              >
                <Image className="w-8 h-8 text-primary" />
              </motion.div> */}
              <h1 className="font-serif font-bold text-4xl sm:text-5xl mb-4">
                Our Work Gallery
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Witness the transformation. Every car that leaves TCD is a masterpiece.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  data-testid={`button-category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card
                      className="overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(galleryItems.findIndex(g => g.id === item.id))}
                      data-testid={`card-gallery-${item.id}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4">
                            <p className="text-white font-medium">{item.title}</p>
                            <p className="text-white/70 text-sm">{item.category}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/95 border-none">
          <AnimatePresence mode="wait">
            {selectedImage !== null && (
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={galleryItems[selectedImage].src}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-xl font-medium">
                    {galleryItems[selectedImage].title}
                  </p>
                  <p className="text-white/60">{galleryItems[selectedImage].category}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white"
                  onClick={() => setSelectedImage(null)}
                  data-testid="button-close-gallery"
                >
                  <X className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 backdrop-blur-sm"
                  onClick={handlePrev}
                  data-testid="button-gallery-prev"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 backdrop-blur-sm"
                  onClick={handleNext}
                  data-testid="button-gallery-next"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
}