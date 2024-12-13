import Header from "../components/Header/Header";
import About from "../components/About/About";
import ThisMon from "@/components/ThisMon/ThisMon";
import ThisMonTest from "@/components/ThisMonTest/ThisMon";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <ThisMon />
      <ThisMonTest />
    </main>
  );
}
