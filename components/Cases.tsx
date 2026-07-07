import { cases } from "@/data/cases";
import { CaseCard } from "@/components/CaseCard";

export function Cases() {
  return (
    <section id="cases" className="section-shell scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="section-rail lg:col-span-2">
          <p className="meta-label">SELECTED CASES / PORTFOLIO</p>
          <p className="serif-accent hidden max-w-[180px] text-lg leading-snug text-[#555555] md:block lg:max-w-none">
            A working index of production formats.
          </p>
          <p className="text-5xl font-bold leading-none text-[#0A0A0A] lg:text-7xl">
            02
          </p>
        </div>

        <div className="lg:col-span-10">
          <div className="section-heading editorial-rule border-t-0 pt-0">
            <h2 className="section-title">РАБОТЫ</h2>
            <p className="section-copy">
              Проекты для брендов, компаний и команд. Здесь собраны первые
              работы 8Units: корпоративные фильмы, digital-контент, брендовые
              истории, event-видео и производственные проекты. Позже каждый
              кейс получит отдельную страницу с задачей, процессом и
              результатом.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-6 lg:gap-x-8 lg:gap-y-12">
            {cases.map((item, index) => (
              <CaseCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
