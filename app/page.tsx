import Image from "next/image";
import DishOfTheDay from '@/components/DishOfTheDay'
import Hero from "../components/Hero"
import Regions from '@/components/Regions'

export default function Home() {
  return (
    <div>
      <Hero />
      <DishOfTheDay />
      <Regions />
    </div>
  );
}
