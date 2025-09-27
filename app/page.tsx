import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ProductCategories from "@/app/components/ProductCategories";
import Newsletter from "@/app/components/Newsletter";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
      </main>
      <Footer />
    </div>
  );
}
