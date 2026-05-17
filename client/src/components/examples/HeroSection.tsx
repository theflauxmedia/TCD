import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return <HeroSection onNavigate={(section) => console.log(`Navigate to: ${section}`)} />;
}
