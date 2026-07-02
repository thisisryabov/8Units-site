export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-12">
      <div className="grid min-h-[78svh] border-y border-[#D8D2C8] py-12 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-8 lg:self-end">
          <p className="meta-label mb-6">FINAL PAGE / TELEGRAM</p>
          <h2 className="section-title">
            ОБСУДИМ
            <br />
            ПРОЕКТ?
          </h2>
        </div>

        <div className="mt-14 flex flex-col justify-end gap-8 border-t border-[#D8D2C8] pt-8 lg:col-span-4 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="section-copy">
            Напишите в Telegram, если хотите обсудить видео, съемку, идею, кейс
            или задачу, для которой пока нет понятного формата.
          </p>
          <a className="button-primary w-full sm:w-fit" href="https://t.me/">
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
