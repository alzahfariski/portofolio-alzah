import { SITE } from "@/config/site";

export default function StatusPill() {
  return (
    <p className="status">
      <b aria-hidden="true" />
      <span>{SITE.status}</span>
    </p>
  );
}
