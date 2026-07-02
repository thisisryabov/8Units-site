import type { CaseItem } from "@/data/cases";

type CaseCardProps = {
  item: CaseItem;
  index: number;
};

export function CaseCard({ item, index }: CaseCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasVideo = Boolean(item.videoEmbedUrl || item.externalVideoUrl);
  const isLead = index === 0;
  const articleClass = [
    "group grid overflow-hidden border border-[#D8D2C8] bg-[#FFFFFF]/64 transition duration-300 hover:-translate-y-1 hover:border-[#0A0A0A] hover:bg-[#FFFFFF]",
    "lg:grid-cols-12",
    isLead ? "lg:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={articleClass}>
      <div
        className={[
          "relative flex min-h-72 flex-col justify-between border-b border-[#D8D2C8] bg-[#ECE8DF] p-5 sm:p-7 lg:border-b-0 lg:border-r",
          isLead ? "lg:col-span-7 lg:min-h-[520px]" : "lg:col-span-12",
        ].join(" ")}
      >
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(#D8D2C8_1px,transparent_1px),linear-gradient(90deg,#D8D2C8_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative flex items-start justify-between gap-6">
          <span className="text-[64px] font-bold leading-none text-[#0A0A0A] sm:text-[88px] lg:text-[120px]">
            {number}
          </span>
          <div className="text-right">
            <span className="meta-label block text-[#555555]">{item.category}</span>
            <span className="meta-label mt-2 block">PLAY / SOON</span>
          </div>
        </div>

        <div className="relative">
          <p className="meta-label mb-4">
            {item.client}
          </p>
          <h3 className="break-words text-[42px] font-bold uppercase leading-[0.92] tracking-[0] text-[#0A0A0A] sm:text-[64px] lg:text-[76px]">
            {item.title}
          </h3>
        </div>
      </div>

      <div
        className={[
          "flex flex-col justify-between gap-12 p-5 sm:p-7",
          isLead ? "lg:col-span-5 lg:p-10" : "lg:col-span-12",
        ].join(" ")}
      >
        <div>
          {item.featured ? (
            <p className="meta-label mb-5 text-[#0A0A0A]">
              Featured case / {number}
            </p>
          ) : null}
          <p className="max-w-xl text-lg leading-relaxed text-[#555555]">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {hasVideo ? (
            <a
              href={item.externalVideoUrl || item.videoEmbedUrl}
              className="inline-flex w-fit items-center border border-[#0A0A0A] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A] hover:text-[#F6F4EF]"
            >
              Смотреть проект
              <span className="ml-3 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="inline-flex w-fit cursor-default items-center border border-[#D8D2C8] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#555555]"
                type="button"
                disabled
              >
                Смотреть проект <span className="ml-3">→</span>
              </button>
              <p className="text-sm text-[#8A8A8A]">Видео скоро будет добавлено</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
