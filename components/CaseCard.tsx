import type { CaseItem } from "@/data/cases";

type CaseCardProps = {
  item: CaseItem;
  index: number;
};

export function CaseCard({ item, index }: CaseCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const hasVideo = Boolean(item.videoEmbedUrl || item.externalVideoUrl);
  const isLead = index === 0;
  const isLongTitle = item.title.replace(/\s/g, "").length > 7;
  const isSolidLongTitle = !item.title.includes(" ") && item.title.length > 9;
  const spanClass = index === 0 ? "lg:col-span-6" : "lg:col-span-3";
  const offsetClass = index === 2 || index === 5 ? "lg:mt-16" : "";
  const articleClass = [
    "case-card group grid overflow-hidden border border-[#D8D2C8] bg-[#FFFFFF]/68 transition duration-300 hover:-translate-y-1 hover:border-[#0A0A0A] hover:bg-[#FFFFFF]",
    "lg:grid-cols-12",
    spanClass,
    offsetClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={articleClass}>
      <div
        className={[
          "relative flex min-h-80 flex-col justify-between border-b border-[#D8D2C8] bg-[#ECE8DF] p-6 sm:p-8 lg:border-b-0 lg:border-r",
          isLead ? "lg:col-span-7 lg:min-h-[580px]" : "lg:col-span-12 lg:min-h-[410px]",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute inset-y-0 left-1/3 w-px bg-[#D8D2C8]" />
          <span className="absolute inset-y-0 left-2/3 w-px bg-[#D8D2C8]" />
          <span className="absolute inset-x-0 top-1/3 h-px bg-[#D8D2C8]" />
          <span className="absolute inset-x-0 top-2/3 h-px bg-[#D8D2C8]" />
          <span className="absolute left-4 top-4 h-5 w-px bg-[#0A0A0A]" />
          <span className="absolute left-4 top-4 h-px w-5 bg-[#0A0A0A]" />
          <span className="absolute right-4 top-4 h-5 w-px bg-[#0A0A0A]" />
          <span className="absolute right-4 top-4 h-px w-5 bg-[#0A0A0A]" />
          <span className="absolute bottom-4 left-4 h-5 w-px bg-[#0A0A0A]" />
          <span className="absolute bottom-4 left-4 h-px w-5 bg-[#0A0A0A]" />
          <span className="absolute bottom-4 right-4 h-5 w-px bg-[#0A0A0A]" />
          <span className="absolute bottom-4 right-4 h-px w-5 bg-[#0A0A0A]" />
        </div>

        <div className="relative flex items-start justify-between gap-6">
          <span className="text-[64px] font-bold leading-none text-[#0A0A0A] sm:text-[88px] lg:text-[112px] xl:text-[120px]">
            {number}
          </span>
          <div className="text-right">
            <span className="meta-label block text-[#555555]">FORMAT / {item.category}</span>
            <span className="meta-label mt-2 block">PLAY / SOON</span>
            <span className="meta-label mt-2 block">FRAME / 16:9</span>
          </div>
        </div>

        <div className="relative">
          <p className="meta-label mb-4">
            {item.client}
          </p>
          <h3
            className={[
              "case-title font-bold uppercase tracking-[0] text-[#0A0A0A]",
              isSolidLongTitle
                ? "case-title-solid"
                : isLongTitle
                ? "case-title-long"
                : "text-[42px] leading-[0.92] sm:text-[64px] lg:text-[68px] xl:text-[76px]",
            ].join(" ")}
          >
            {item.title}
          </h3>
        </div>
      </div>

      <div
        className={[
          "flex flex-col justify-between gap-12 p-6 sm:p-8",
          isLead ? "lg:col-span-5 lg:p-12" : "lg:col-span-12",
        ].join(" ")}
      >
        <div>
          {item.featured ? (
            <p className="meta-label mb-5 text-[#0A0A0A]">
              Featured case / {number}
            </p>
          ) : null}
          {isLead ? (
            <div className="production-meta mb-8">
              <div className="production-meta-row">
                <span>FORMAT</span>
                <span>Corporate video</span>
              </div>
              <div className="production-meta-row">
                <span>STATUS</span>
                <span>Coming soon</span>
              </div>
              <div className="production-meta-row">
                <span>OUTPUT</span>
                <span>Film + digital</span>
              </div>
            </div>
          ) : null}
          <p className="case-card-copy max-w-xl">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {hasVideo ? (
            <a
              href={item.externalVideoUrl || item.videoEmbedUrl}
              className="inline-flex min-h-12 w-fit items-center border border-[#0A0A0A] px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A] hover:text-[#F6F4EF]"
            >
              Смотреть проект
              <span className="ml-3 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                className="inline-flex min-h-12 w-fit cursor-default items-center border border-[#0A0A0A] px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#0A0A0A]"
                type="button"
                disabled
              >
                Смотреть проект <span className="ml-3">→</span>
              </button>
              <p className="text-sm text-[#8A8A8A]">Видео скоро будет добавлено</p>
            </div>
          )}
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#8A8A8A]">
            <span>STATUS / COMING SOON</span>
            <span className="h-px flex-1 bg-[#D8D2C8]" />
            <span>FRAME {number}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
