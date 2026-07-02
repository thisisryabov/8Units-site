export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 pb-10">
      <div className="grid min-h-[72svh] items-end border-t border-[#2A2A2A] pt-12 lg:grid-cols-[1fr_minmax(360px,560px)] lg:gap-16 lg:pt-20">
        <h2 className="section-title">
          ОБСУДИМ
          <br />
          ПРОЕКТ?
        </h2>

        <div className="mt-10 flex flex-col gap-8 lg:mt-0">
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
