import Link from "next/link";
import { SITE } from "@/config/site";
import LocalClock from "@/components/LocalClock";

const links = [
  { name: "Karya", href: "/#karya" },
  { name: "Kontak", href: "/#kontak" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-garis bg-krem">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-[var(--gutter)]">
        <Link
          href="/"
          aria-label={`AF, ${SITE.name}: ke beranda`}
          className="grid h-11 w-11 place-items-center rounded-xl bg-tinta text-[17px] font-extrabold text-white no-underline"
        >
          AF
        </Link>
        <LocalClock />
        <nav aria-label="Utama">
          <ul className="-mr-3.5 flex list-none items-center gap-2 p-0 text-base font-semibold">
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
