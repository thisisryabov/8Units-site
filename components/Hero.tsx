export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100svh-64px)] max-w-[1440px] px-5 pb-12 pt-14 sm:px-10 sm:pb-16 lg:min-h-[calc(100svh-72px)] lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:px-16 lg:pb-18 lg:pt-16"
    >
      <div className="grid gap-5 border-y border-[#D8D2C8] py-5 text-[#8A8A8A] sm:grid-cols-3 lg:col-span-12">
        <p className="meta-label animate-enter">FULL-CYCLE VIDEO PRODUCTION</p>
        <p className="meta-label animate-enter-delayed sm:text-center">
          BRANDS / EVENTS / DIGITAL
        </p>
        <p className="meta-label animate-enter-delayed sm:text-right">
          BASED IN RUSSIA / WORKING WORLDWIDE
        </p>
      </div>

      <div className="animate-enter lg:col-span-11 lg:row-start-2 lg:self-end">
        <h1 className="mt-12 max-w-[1320px] text-balance text-[64px] font-bold uppercase leading-[0.86] tracking-[0] text-[#0A0A0A] sm:text-[96px] md:text-[120px] lg:mt-0 lg:text-[156px] xl:text-[190px]">
          ОТ ИДЕИ
          <br />
          ДО ГОТОВОГО
          <br />
          ВИДЕО
        </h1>
      </div>

      <div className="line-reveal mt-8 h-px bg-[#D8D2C8] lg:col-span-12 lg:row-start-3" />

      <div className="mt-8 grid gap-8 lg:col-span-12 lg:row-start-4 lg:grid-cols-12 lg:gap-6">
        <div className="hidden border-l border-[#D8D2C8] pl-5 lg:col-span-2 lg:block">
          <p className="meta-label">PRODUCTION MANIFESTO / 01</p>
        </div>

        <p className="max-w-[720px] text-lg leading-relaxed text-[#555555] sm:text-xl lg:col-span-5 lg:col-start-4">
          8Units — видеопродакшн для брендов и компаний. Придумываем,
          организуем и производим видеопроекты под бизнес-задачи: от идеи и
          препродакшна до съемки, постпродакшна и финальной сдачи.
        </p>

        <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#cases">
              Смотреть кейсы
            </a>
            <a className="button-secondary" href="https://t.me/">
              Написать в Telegram
            </a>
          </div>
          <p className="max-w-lg text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#8A8A8A]">
            Корпоративные фильмы, digital-контент, рекламные ролики и видео для
            событий.
          </p>
        </div>
      </div>
    </section>
  );
}
