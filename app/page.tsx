import Image from "next/image";
import DishOfTheDay from '@/components/DishOfTheDay'
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div>
      <Hero />
      <DishOfTheDay />
    </div>
  );
}
