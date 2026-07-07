export function Contact() {
  return (
    <section id="contact" className="section-shell section-tight-before scroll-mt-24 pb-12">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="section-rail lg:col-span-2">
          <p className="meta-label">FINAL PAGE / TELEGRAM</p>
          <p className="serif-accent hidden max-w-[180px] text-lg leading-snug text-[#555555] md:block lg:max-w-none">
            A short conversation is enough to start.
          </p>
          <p className="text-5xl font-bold leading-none text-[#0A0A0A] lg:text-7xl">
            04
          </p>
        </div>

        <div className="relative grid min-h-[78svh] overflow-hidden border-y border-[#D8D2C8] py-12 lg:col-span-10 lg:grid-cols-10 lg:py-20">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <span className="absolute inset-y-0 left-[70%] w-px bg-[#D8D2C8]" />
            <span className="absolute inset-x-0 top-1/2 h-px bg-[#D8D2C8]" />
          </div>

          <div className="relative lg:col-span-7 lg:self-end">
            <h2 className="section-title">
              ОБСУДИМ
              <br />
              ПРОЕКТ?
            </h2>
          </div>

          <div className="relative mt-14 flex flex-col justify-end gap-9 border-t border-[#D8D2C8] pt-8 lg:col-span-3 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pr-2 lg:pt-0">
            <p className="section-copy">
              Напишите в Telegram, если хотите обсудить съемку, идею, кейс или
              задачу, для которой пока нет понятного формата. Начнем с
              нормального разговора, а не с брифа на сорок вопросов.
            </p>
            <a className="button-primary w-full sm:w-fit lg:w-full" href="https://t.me/">
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
