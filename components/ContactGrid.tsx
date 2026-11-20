import { SITE } from "@/config/site";

const items = [
  { label: "Email", text: SITE.email, href: `mailto:${SITE.email}`, ext: false },
  { label: "WhatsApp", text: SITE.whatsappLabel, href: SITE.whatsappUrl, ext: true },
  { label: "LinkedIn", text: SITE.linkedinLabel, href: SITE.linkedinUrl, ext: true },
  { label: "GitHub", text: SITE.githubLabel, href: SITE.githubUrl, ext: true },
];

export default function ContactGrid() {
  return (
    <ul className="ct" id="kontak">
      {items.map((i) => (
        <li key={i.label}>
          <span className="mono-label">{i.label}</span>
          <a href={i.href} {...(i.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {i.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
