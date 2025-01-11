import { Navbar, NewSingleToast, SocialMediaBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>
      <main className="relative h-full w-full">
        <Image
          src="/ruta77band.webp"
          className="object-cover h-full w-full opacity-80"
          alt="Ruta 77 background"
          layout="fill"
        />
        <SocialMediaBar />
        <NewSingleToast />
      </main>
    </div>
  );
}
