const navItems = [
  { label: "Cases", href: "#cases" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2A2A2A]/80 bg-[#0B0B0B]/86 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-white"
          aria-label="8Units на главную"
        >
          8UNITS
        </a>

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.16em] text-[#A3A3A3] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/"
          className="inline-flex min-h-11 items-center justify-center border border-white px-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white hover:text-[#0B0B0B]"
        >
          Написать
        </a>
      </div>
    </header>
  );
}
