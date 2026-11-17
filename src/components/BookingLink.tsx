import { site } from "@/config/site";
import { ArrowIcon } from "@/components/Icons";

export function BookingLink({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <a className={className} href={site.bookingUrl} target="_blank" rel="noopener noreferrer">{children}<ArrowIcon diagonal /></a>;
}
