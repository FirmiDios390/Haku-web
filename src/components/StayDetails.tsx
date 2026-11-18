import {
  CalendarClock, CalendarX, Clock3, CreditCard,
  DoorOpen, PawPrint, Plus,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

type StayCopy = Dictionary["stay"];
type StayDetailsProps = { stay: StayCopy; variant?: "page" | "modal" };
const iconProps = { size: 23, strokeWidth: 1.65, "aria-hidden": true } as const;

export function StaySchedule({ stay, variant = "page" }: StayDetailsProps) {
  return <div className={`schedule-grid ${variant === "modal" ? "booking-schedule" : ""}`}>
    <div><CalendarClock {...iconProps} /><p>Check-in</p><span>{stay.checkInTime}</span><small>{stay.checkIn}</small></div>
    <div><Clock3 {...iconProps} /><p>Check-out</p><span>{stay.checkOutTime}</span><small>{stay.checkOut}</small></div>
  </div>;
}

export function StayPolicies({ stay, variant = "page" }: StayDetailsProps) {
  const details = [
    { icon: CreditCard, title: stay.payment, summary: stay.paymentSummary, body: stay.paymentBody },
    { icon: CalendarX, title: stay.cancellation, summary: stay.cancellationSummary, body: stay.cancellationBody },
    { icon: DoorOpen, title: stay.curfew, summary: stay.curfewSummary, body: stay.curfewBody },
    { icon: PawPrint, title: stay.pets, summary: stay.petsSummary, body: stay.petsBody },
  ];

  return <div className={`policy-grid ${variant === "modal" ? "booking-policies" : ""}`}>
    {details.map(({ icon: Icon, title, summary, body }) => <details className="rule-details" key={title}>
      <summary><Icon {...iconProps} /><span><strong>{title}</strong><small>{summary}</small></span><Plus className="details-plus" size={20} aria-hidden="true" /></summary>
      <p>{body}</p>
    </details>)}
  </div>;
}
