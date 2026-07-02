const principles = [
  {
    title: "Разбираемся в задаче",
    description:
      "Уточняем, кому адресован проект, где будет использоваться видео и какой результат нужен клиенту.",
  },
  {
    title: "Подбираем формат",
    description:
      "Иногда нужен большой фильм. Иногда — серия коротких роликов, digital-формат, документальная история или видео для события.",
  },
  {
    title: "Собираем команду",
    description:
      "Под проект подбираются специалисты, которые лучше всего подходят под задачу: режиссеры, операторы, продюсеры, монтажеры, графика, звук.",
  },
  {
    title: "Берем на себя процесс",
    description:
      "Координируем производство, ставим задачи, контролируем сроки и доводим проект до финальной версии.",
  },
  {
    title: "Отвечаем за результат",
    description:
      "Наша задача — не просто снять материал, а собрать готовый видеопродукт, который можно использовать в бизнесе.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="section-shell section-tight-after scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="section-rail lg:col-span-2">
          <p className="meta-label">HOW WE WORK / PRODUCTION LOGIC</p>
          <p className="text-5xl font-bold leading-none text-[#0A0A0A] lg:text-7xl">
            03
          </p>
        </div>

        <div className="lg:col-span-10">
          <div className="grid gap-12 border-y border-[#D8D2C8] py-12 lg:grid-cols-10 lg:gap-6 lg:py-20">
            <div className="lg:col-span-6">
              <h2 className="section-title">
                НЕ НАЧИНАЕМ
                <br />С КАМЕРЫ
              </h2>
            </div>

            <div className="lg:col-span-4 lg:self-end">
              <p className="section-copy">
                Мы работаем не от съемочного дня, а от задачи. Сначала понимаем,
                зачем нужно видео, где оно будет жить, кто его увидит и какой
                результат должен появиться. Потом подбираем формат, команду и
                способ производства.
              </p>
            </div>
          </div>

          <div className="grid border-b border-[#D8D2C8] lg:grid-cols-10">
            <div className="hidden border-r border-[#D8D2C8] py-12 lg:col-span-2 lg:block">
              <p className="meta-label sticky top-28 max-w-[180px]">
                PRINCIPLES / 01-05
              </p>
            </div>

            <div className="lg:col-span-8">
              {principles.map((principle, index) => (
                <article
                  key={principle.title}
                  className="grid gap-6 border-t border-[#D8D2C8] py-10 lg:grid-cols-8 lg:gap-8 lg:py-12 lg:pl-12"
                >
                  <p className="meta-label text-[#0A0A0A] lg:col-span-2">
                    {String(index + 1).padStart(2, "0")} / {principle.title}
                  </p>
                  <h3 className="text-[34px] font-bold leading-tight tracking-[0] text-[#0A0A0A] lg:col-span-3 lg:text-[38px]">
                    {principle.title}
                  </h3>
                  <p className="text-[18px] leading-relaxed text-[#555555] lg:col-span-3 lg:text-[19px]">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
