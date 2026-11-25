import {
  Banknote, CalendarClock, CalendarX, Clock3, ClockArrowUp, Coffee,
  CreditCard, ReceiptText,
  DoorOpen, PawPrint, Plus, WineOff,
} from "lucide-react";
import { getHostelInformation } from "@/config/hostelInfo";
import type { Dictionary } from "@/i18n/dictionaries";

type StayInformation = ReturnType<typeof getHostelInformation>["stay"];
type StayLabels = Pick<Dictionary["stay"], "scheduleLabel" | "ratesLabel" | "rulesLabel">;
type StayDetailsProps = { info: StayInformation; labels: StayLabels; variant?: "page" | "modal" };
const iconProps = { size: 22, strokeWidth: 1.65, "aria-hidden": true } as const;

const scheduleIcons = { checkIn: CalendarClock, checkOut: Clock3 } as const;
const rateIcons = { tax: ReceiptText, cardFee: CreditCard, payment: Banknote } as const;
const policyIcons = { cancellation: CalendarX, breakfast: Coffee, access: DoorOpen, pets: PawPrint, alcohol: WineOff } as const;

export function StaySchedule({ info, labels, variant = "page" }: StayDetailsProps) {
  return <section className={`stay-detail-group stay-schedule-group ${variant === "modal" ? "booking-schedule-group" : "stay-page-schedule-group"}`} aria-labelledby={`${variant}-schedule-title`}>
    <h3 className="stay-group-title" id={`${variant}-schedule-title`}>{labels.scheduleLabel}</h3>
    <div className={`schedule-grid ${variant === "modal" ? "booking-schedule" : "stay-page-schedule"}`}>
      {info.schedule.map((item) => {
        const Icon = scheduleIcons[item.id];
        return <div key={item.id}>
          <Icon {...iconProps} />
          <p>{item.label}</p>
          <span>{variant === "modal" ? item.note : item.value}</span>
          {variant === "page" && <small>{item.note}</small>}
        </div>;
      })}
    </div>
    <p className="flexible-hours-note"><ClockArrowUp aria-hidden="true" />{info.flexibleHoursNote}</p>
  </section>;
}

export function StayRates({ info, labels, variant = "page" }: StayDetailsProps) {
  return <section className={`stay-detail-group stay-rates-group ${variant === "modal" ? "booking-rates-group" : "stay-page-rates-group"}`} aria-labelledby={`${variant}-rates-title`}>
    <h3 className="stay-group-title" id={`${variant}-rates-title`}>{labels.ratesLabel}</h3>
    <div className="rate-list">
      {info.rates.map((item) => {
        const Icon = rateIcons[item.id];
        return <article className="rate-item" key={item.id}>
          <Icon {...iconProps} />
          <div><span>{item.label}</span><strong>{item.value}</strong><p>{item.body}</p></div>
        </article>;
      })}
    </div>
  </section>;
}

export function StayPolicies({ info, labels, variant = "page" }: StayDetailsProps) {
  return <section className={`stay-detail-group stay-policies-group ${variant === "modal" ? "booking-policies-group" : "stay-page-policies-group"}`} aria-labelledby={`${variant}-policies-title`}>
    <h3 className="stay-group-title" id={`${variant}-policies-title`}>{labels.rulesLabel}</h3>
    <div className={`policy-grid ${variant === "modal" ? "booking-policies" : "stay-page-policies"}`}>
      {info.policies.map((item) => {
        const Icon = policyIcons[item.id];
        return <details className="rule-details" key={item.id}>
          <summary><Icon {...iconProps} /><span><strong>{item.title}</strong><small>{item.summary}</small></span><Plus className="details-plus" size={20} aria-hidden="true" /></summary>
          <p>{item.body}</p>
        </details>;
      })}
    </div>
  </section>;
}
