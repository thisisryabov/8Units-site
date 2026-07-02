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

const process = [
  "ЗАДАЧА",
  "ИДЕЯ",
  "ФОРМАТ",
  "КОМАНДА",
  "ПРОИЗВОДСТВО",
  "ПОСТ",
  "РЕЗУЛЬТАТ",
];

export function Approach() {
  return (
    <section id="approach" className="section-shell scroll-mt-24">
      <div className="grid gap-12 border-y border-[#D8D2C8] py-12 lg:grid-cols-12 lg:gap-6 lg:py-20">
        <div className="lg:col-span-7">
          <p className="meta-label mb-6">HOW WE WORK / PRODUCTION LOGIC</p>
          <h2 className="section-title">
            НЕ НАЧИНАЕМ
            <br />С КАМЕРЫ
          </h2>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="section-copy">
            Мы работаем не от съемочного дня, а от задачи. Сначала понимаем,
            зачем нужно видео, где оно будет жить, кто его увидит и какой
            результат должен появиться. Потом подбираем формат, команду и способ
            производства.
          </p>
        </div>
      </div>

      <div className="grid border-b border-[#D8D2C8] lg:grid-cols-12">
        <div className="hidden border-r border-[#D8D2C8] py-10 lg:col-span-3 lg:block">
          <p className="meta-label sticky top-28 max-w-[180px]">PRINCIPLES / 01-05</p>
        </div>

        <div className="lg:col-span-9">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="grid gap-5 border-t border-[#D8D2C8] py-8 lg:grid-cols-9 lg:gap-6 lg:pl-10"
            >
              <p className="meta-label text-[#0A0A0A] lg:col-span-2">
                {String(index + 1).padStart(2, "0")} / {principle.title}
              </p>
              <h3 className="text-3xl font-bold leading-tight tracking-[0] text-[#0A0A0A] lg:col-span-3">
                {principle.title}
              </h3>
              <p className="text-base leading-relaxed text-[#555555] lg:col-span-4">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 border-y border-[#D8D2C8] bg-[#ECE8DF] py-6">
        <div className="flex flex-col gap-4 px-5 sm:px-6 md:flex-row md:flex-wrap md:items-center md:px-8">
          {process.map((step, index) => (
            <div key={step} className="flex flex-col gap-4 md:flex-row md:items-center">
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#0A0A0A]">
                {step}
              </span>
              {index < process.length - 1 ? (
                <span className="h-8 w-px bg-[#D8D2C8] md:h-px md:w-10" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
