import Header from "../components/Header/Header";
import About from "../components/About/About";
import ThisMon from "@/components/ThisMon/ThisMon";
import OurBrands from "@/components/OurBrands/OurBrands";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <ThisMon />
      <OurBrands />
      <Footer />
    </main>
  );
}
