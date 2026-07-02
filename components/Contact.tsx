export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-12">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="section-rail lg:col-span-2">
          <p className="meta-label">FINAL PAGE / TELEGRAM</p>
          <p className="text-5xl font-bold leading-none text-[#0A0A0A] lg:text-7xl">
            04
          </p>
        </div>

        <div className="grid min-h-[78svh] border-y border-[#D8D2C8] py-12 lg:col-span-10 lg:grid-cols-10 lg:py-20">
          <div className="lg:col-span-7 lg:self-end">
            <h2 className="section-title">
              ОБСУДИМ
              <br />
              ПРОЕКТ?
            </h2>
          </div>

          <div className="mt-14 flex flex-col justify-end gap-8 border-t border-[#D8D2C8] pt-8 lg:col-span-3 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="section-copy">
              Напишите в Telegram, если хотите обсудить видео, съемку, идею, кейс
              или задачу, для которой пока нет понятного формата.
            </p>
            <a className="button-primary w-full sm:w-fit" href="https://t.me/">
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
