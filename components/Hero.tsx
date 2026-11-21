import { SITE } from "@/config/site";
import StatusPill from "@/components/StatusPill";
import ContactGrid from "@/components/ContactGrid";
import ExperienceList from "@/components/ExperienceList";
import type { CompanyExperience, Education } from "@/lib/types";

export default function Hero({
  experiences,
  educations,
}: {
  experiences: CompanyExperience[] | null;
  educations: Education[] | null;
}) {
  return (
    <section className="wrap hero" id="atas">
      <div className="idb">
        <StatusPill />
        <p className="role">{SITE.role}</p>
        <h1>
          <span>{SITE.nameFirst}</span>
          <span>
            <mark>{SITE.nameLast}</mark>
          </span>
        </h1>
        <p className="lead">{SITE.lead}</p>
        <div className="btns">
          <a className="btn p" href={SITE.ctaUrl}>
            {SITE.ctaLabel}
          </a>
          <a className="cvb" href={SITE.cvUrl} target="_blank" rel="noopener noreferrer">
            <i aria-hidden="true" />
            <span>
              Lihat CV<small className="mono-label">PDF</small>
            </span>
          </a>
        </div>
        <ContactGrid />
      </div>
      <ExperienceList experiences={experiences} educations={educations} />
    </section>
  );
}
