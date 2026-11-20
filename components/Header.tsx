import Link from "next/link";
import { SITE } from "@/config/site";

const links = [
  { name: "Karya", href: "/project" },
  { name: "Kontak", href: "/#kontak" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-garis bg-krem/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${SITE.name}, ke beranda`}
          className="grid h-11 w-11 place-items-center rounded-xl bg-tinta text-[17px] font-extrabold text-white no-underline"
        >
          AF
        </Link>
        <nav aria-label="Utama">
          <ul className="flex list-none items-center gap-1 p-0 text-base font-semibold">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-11 items-center rounded-[10px] px-3.5 no-underline hover:bg-sorot"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
