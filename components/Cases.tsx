import { cases } from "@/data/cases";
import { CaseCard } from "@/components/CaseCard";

export function Cases() {
  return (
    <section id="cases" className="section-shell scroll-mt-24">
      <div className="section-heading">
        <div>
          <p className="meta-label mb-5">SELECTED CASES / PORTFOLIO</p>
          <h2 className="section-title">РАБОТЫ</h2>
        </div>
        <p className="section-copy">
          Проекты для брендов, компаний и команд. Сейчас здесь собраны первые
          кейсы, позже каждый проект получит отдельную страницу с задачей,
          процессом и результатом.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:gap-6">
        {cases.map((item, index) => (
          <CaseCard key={item.slug} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
