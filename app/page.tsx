import { Approach } from "@/components/Approach";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cases />
        <Approach />
        <Contact />
      </main>
    </>
  );
}
