import { SITE } from "@/config/site";

const links = [
  { label: "LinkedIn", href: SITE.linkedinUrl },
  { label: "GitHub", href: SITE.githubUrl },
  { label: "Instagram", href: SITE.instagramUrl },
  { label: "CV (PDF)", href: SITE.cvUrl },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-[1180px] px-5 pb-24 pt-7 text-[15px] text-tinta-lembut sm:px-8 sm:pb-10">
      <div className="flex flex-col gap-2 border-t border-garis pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {SITE.name}
        </span>
        <ul className="flex list-none flex-wrap gap-x-5 p-0 font-semibold">
          {links.map((l) => (
            <li key={l.label}>
              <a
                className="inline-flex min-h-11 items-center"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
