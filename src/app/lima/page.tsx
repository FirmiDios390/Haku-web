import type { Metadata } from "next";
import LimaPage from "@/components/LimaPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Lima | ${site.name}`,
  description: "Descubre HAKU Lima: habitaciones y espacios reales para hacer una pausa en tu viaje.",
};

export default function Page() {
  return <LimaPage />;
}
