const navItems = [
  { label: "Cases", href: "#cases" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[#D8D2C8] bg-[#F6F4EF]/92 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[1fr_auto] items-center gap-6 px-5 sm:px-10 lg:h-[72px] lg:grid-cols-12 lg:px-16">
        <a
          href="#top"
          className="text-sm font-bold uppercase tracking-[0.14em] text-[#0A0A0A] lg:col-span-3"
          aria-label="8Units на главную"
        >
          8UNITS
        </a>

        <nav className="hidden items-center justify-center gap-8 text-xs font-bold uppercase tracking-[0.12em] text-[#555555] md:flex lg:col-span-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-[#0A0A0A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/"
          className="inline-flex min-h-10 items-center justify-center border border-[#0A0A0A] px-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A] hover:text-[#F6F4EF] lg:col-span-3 lg:justify-self-end"
        >
          Написать
        </a>
      </div>
    </header>
  );
}
