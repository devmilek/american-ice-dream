import Link from "next/link";

type Crumb = {
  href?: string;
  label: string;
};

export function LocationBreadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Ścieżka nawigacji"
      className="container-page pt-6 text-[12.5px] text-muted"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.href ?? c.label} className="flex items-center gap-2">
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  className="transition-colors hover:text-navy"
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  className="font-medium text-navy"
                  aria-current={isLast ? "page" : undefined}
                >
                  {c.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-muted/50">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
