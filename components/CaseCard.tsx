import type { CaseItem } from "@/data/cases";

type CaseCardProps = {
  item: CaseItem;
  index: number;
};

export function CaseCard({ item, index }: CaseCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasVideo = Boolean(item.videoEmbedUrl || item.externalVideoUrl);

  return (
    <article className="group flex min-h-[620px] flex-col overflow-hidden rounded-[22px] border border-[#2A2A2A] bg-[#141414] transition duration-300 hover:-translate-y-1 hover:border-[#FFFFFF]/60">
      <div className="relative flex aspect-[16/10] min-h-64 flex-col justify-between border-b border-[#2A2A2A] bg-[#0B0B0B] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-6">
          <span className="text-[clamp(48px,8vw,120px)] font-semibold leading-none text-white/10">
            {number}
          </span>
          <span className="max-w-[180px] text-right text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">
            {item.category}
          </span>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">
            {item.client}
          </p>
          <h3 className="text-[clamp(34px,6vw,76px)] font-semibold uppercase leading-[0.9] text-white">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-12 p-5 sm:p-6 lg:p-8">
        <div>
          {item.featured ? (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-white">
              Featured case
            </p>
          ) : null}
          <p className="max-w-xl text-lg leading-relaxed text-[#A3A3A3]">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {hasVideo ? (
            <a
              href={item.externalVideoUrl || item.videoEmbedUrl}
              className="inline-flex w-fit items-center border border-white px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white hover:text-[#0B0B0B]"
            >
              Смотреть проект
              <span className="ml-3 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="inline-flex w-fit cursor-default items-center border border-[#2A2A2A] px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#A3A3A3]"
                type="button"
                disabled
              >
                Смотреть проект
              </button>
              <p className="text-sm text-[#666666]">Видео скоро будет добавлено</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
