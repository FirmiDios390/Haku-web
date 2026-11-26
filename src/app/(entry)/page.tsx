import type { Metadata } from "next";
import { LanguageEntry } from "@/components/LanguageEntry";

export const metadata: Metadata = {
  title: "HAKU HOSTEL Lima",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LanguageEntry />;
}
