export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100svh-68px)] max-w-[1440px] px-5 pb-14 pt-8 sm:px-10 sm:pb-18 lg:min-h-[calc(100svh-72px)] lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] lg:px-16 lg:pb-20 lg:pt-10"
    >
      <div className="editorial-rule grid gap-5 border-y border-[#D8D2C8] py-5 text-[#8A8A8A] sm:grid-cols-4 lg:col-span-10 lg:col-start-3">
        <p className="meta-label animate-enter">FULL-CYCLE PRODUCTION</p>
        <p className="meta-label animate-enter-delayed sm:text-center">
          STORIES THAT WORK
        </p>
        <p className="meta-label animate-enter-delayed sm:text-right">
          FROM TASK TO FINAL CUT
        </p>
        <p className="meta-label animate-enter-delayed sm:text-right">
          BASED IN RUSSIA / WORKING WORLDWIDE
        </p>
      </div>

      <aside className="mt-10 hidden border-l border-[#D8D2C8] pl-5 lg:col-span-2 lg:row-span-4 lg:row-start-1 lg:block">
        <p className="meta-label animate-enter-delayed">COVER / 8UNITS</p>
        <p className="mt-20 text-[104px] font-bold leading-[0.78] text-[#0A0A0A] opacity-80 xl:text-[132px]">
          01
        </p>
        <div className="mt-14 h-px w-20 bg-[#D8D2C8]" />
        <p className="serif-accent mt-7 max-w-[150px] text-[18px] leading-snug text-[#555555]">
          Production stories for brands, events and digital communication.
        </p>
      </aside>

      <div className="animate-enter lg:col-span-10 lg:col-start-3 lg:row-start-2 lg:self-end">
        <h1 className="hero-title mt-12 max-w-[1320px] text-balance font-bold uppercase text-[#0A0A0A] lg:mt-0">
          ИСТОРИИ,
          <br />
          КОТОРЫЕ
          <br />
          РАБОТАЮТ
        </h1>
      </div>

      <div className="line-reveal mt-10 h-px bg-[#D8D2C8] lg:col-span-10 lg:col-start-3 lg:row-start-3" />

      <div className="mt-12 grid gap-9 lg:col-span-10 lg:col-start-3 lg:row-start-4 lg:grid-cols-10 lg:gap-6">
        <div className="hidden border-l border-[#D8D2C8] pl-5 lg:col-span-2 lg:block">
          <p className="meta-label">PRODUCTION MANIFESTO / 01</p>
        </div>

        <p className="max-w-[680px] text-[19px] leading-relaxed text-[#555555] sm:text-[21px] lg:col-span-4 lg:col-start-4">
          8Units работает на стыке смысла, креатива и продакшна. Мы помогаем
          брендам и компаниям превратить задачу в понятную историю: подобрать
          формат, собрать команду и довести проект до результата, который можно
          использовать в бизнесе, коммуникации, презентациях, соцсетях и
          событиях.
        </p>

        <div className="flex flex-col gap-8 lg:col-span-3 lg:col-start-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#cases">
              Смотреть работы
            </a>
            <a className="button-secondary" href="https://t.me/">
              Написать
            </a>
          </div>
          <p className="max-w-lg text-sm font-semibold uppercase leading-relaxed tracking-[0.12em] text-[#8A8A8A]">
            Материалы для бизнеса, коммуникации, презентаций, соцсетей и
            событий.
          </p>
        </div>
      </div>
    </section>
  );
}
