export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-svh max-w-[1680px] flex-col justify-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20"
    >
      <div className="animate-enter">
        <p className="mb-8 max-w-xl text-sm font-medium uppercase tracking-[0.18em] text-[#A3A3A3]">
          Видеопродакшн полного цикла
        </p>
        <h1 className="max-w-[1500px] text-balance text-[clamp(64px,12vw,180px)] font-semibold uppercase leading-[0.86] text-white">
          ОТ ИДЕИ
          <br />
          ДО ГОТОВОГО
          <br />
          ВИДЕО
        </h1>
      </div>

      <div className="mt-10 grid gap-8 border-t border-[#2A2A2A] pt-8 lg:grid-cols-[1fr_minmax(360px,620px)] lg:gap-16">
        <p className="max-w-[760px] text-lg leading-relaxed text-[#A3A3A3] sm:text-xl">
          8Units — видеопродакшн для брендов и компаний. Придумываем, организуем
          и производим видеопроекты под бизнес-задачи: от идеи и препродакшна до
          съемки, постпродакшна и финальной сдачи.
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#cases">
              Смотреть кейсы
            </a>
            <a className="button-secondary" href="https://t.me/">
              Написать в Telegram
            </a>
          </div>
          <p className="max-w-lg text-sm uppercase leading-relaxed tracking-[0.14em] text-[#666666]">
            Корпоративные фильмы, digital-контент, рекламные ролики и видео для
            событий.
          </p>
        </div>
      </div>
    </section>
  );
}
