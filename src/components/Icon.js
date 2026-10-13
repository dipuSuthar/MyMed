"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faHeart, faShieldHalved, faLightbulb, faStethoscope, faFlask, faVideo, faPills, faUserDoctor, faHeartPulse,
  faClock, faFileMedical, faTag, faHeadset, faCheck, faArrowRight, faPhone, faEnvelope, faLocationDot,
  faBars, faXmark, faStar, faQuoteLeft, faPlus, faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
const map = {
  heart: faHeart, shield: faShieldHalved, lightbulb: faLightbulb, stethoscope: faStethoscope, flask: faFlask,
  video: faVideo, pills: faPills, userdoctor: faUserDoctor, heartpulse: faHeartPulse, clock: faClock,
  file: faFileMedical, tag: faTag, headset: faHeadset, check: faCheck, arrow: faArrowRight, phone: faPhone,
  mail: faEnvelope, pin: faLocationDot, menu: faBars, close: faXmark, star: faStar, quote: faQuoteLeft,
  plus: faPlus, calendar: faCalendarCheck,
};

export default function Icon({ name, className = "" }) {
  return <FontAwesomeIcon icon={map[name] || faCheck} className={className} aria-hidden="true" />;
}

export function IconBadge({ name }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}
