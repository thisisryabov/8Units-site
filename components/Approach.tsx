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
  "Задача",
  "Идея",
  "Формат",
  "Команда",
  "Производство",
  "Постпродакшн",
  "Результат",
];

export function Approach() {
  return (
    <section id="approach" className="section-shell scroll-mt-24">
      <div className="grid gap-10 border-y border-[#2A2A2A] py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.65fr)] lg:gap-16 lg:py-20">
        <div>
          <h2 className="section-title">
            НЕ НАЧИНАЕМ
            <br />С КАМЕРЫ
          </h2>
        </div>
        <p className="section-copy self-end">
          Мы работаем не от съемочного дня, а от задачи. Сначала понимаем, зачем
          нужно видео, где оно будет жить, кто его увидит и какой результат
          должен появиться. Потом подбираем формат, команду и способ производства.
        </p>
      </div>

      <div className="mt-10 grid border-t border-[#2A2A2A] lg:grid-cols-5">
        {principles.map((principle, index) => (
          <article
            key={principle.title}
            className="border-b border-[#2A2A2A] py-8 lg:border-r lg:px-6 lg:last:border-r-0"
          >
            <p className="mb-10 text-sm font-medium text-[#666666]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-5 text-2xl font-semibold leading-tight text-white">
              {principle.title}
            </h3>
            <p className="text-base leading-relaxed text-[#A3A3A3]">
              {principle.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 border border-[#2A2A2A] bg-[#141414] p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center">
          {process.map((step, index) => (
            <div key={step} className="flex flex-col gap-4 md:flex-row md:items-center">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {step}
              </span>
              {index < process.length - 1 ? (
                <span className="h-8 w-px bg-[#2A2A2A] md:h-px md:w-10" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
