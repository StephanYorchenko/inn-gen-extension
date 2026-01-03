import { Show, createSignal, onCleanup } from "solid-js";
import { FaRegularClipboard } from "solid-icons/fa";
import { FaSolidCheck } from "solid-icons/fa";

type TProps = {
  fieldName: string;
  value: string;
  canCopy?: boolean;
};

export const Row = ({ fieldName, value, canCopy = false }: TProps) => {
  const [copied, setCopied] = createSignal(false);
  let timer: number | undefined;

  onCleanup(() => timer && clearTimeout(timer));

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);
      if (timer) clearTimeout(timer);
      timer = window.setTimeout(() => setCopied(false), 900);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="flex items-start justify-between gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-inset ring-white/10">
      <div class="min-w-0">
        <p class="text-xs font-medium uppercase tracking-wide text-slate-400">
          {fieldName}
        </p>

        <p class="mt-1 break-words font-mono text-sm font-semibold text-slate-50">
          {value}
        </p>
      </div>

      <Show when={canCopy}>
        <button
          type="button"
          aria-label="Скопировать"
          onClick={handleCopy}
          class="relative shrink-0 rounded-lg border px-3 py-2 text-xs font-semibold shadow-sm shadow-black/20
                 transition-all duration-150
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
          classList={{
            "border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 active:bg-white/15": !copied(),
            "border-sky-400/30 bg-sky-500/10 text-sky-200": copied(),
            "scale-[0.97]": copied(),
          }}
        >
          <Show when={copied()}>
            <span class="pointer-events-none absolute inset-0 rounded-lg bg-sky-400/20 animate-ping" />
          </Show>

          <span
            class="pointer-events-none absolute -top-8 right-0 rounded-md border border-white/10 bg-indigo-950/90
                   px-2 py-1 text-[11px] font-medium text-slate-100 shadow-md shadow-black/30
                   transition-all duration-150"
            classList={{
              "opacity-0 translate-y-1": !copied(),
              "opacity-100 translate-y-0": copied(),
            }}
          >
            Скопировано
          </span>

          <span class="relative z-10 inline-flex items-center">
            <Show when={copied()} fallback={<FaRegularClipboard />}>
              <FaSolidCheck />
            </Show>
          </span>
        </button>
      </Show>
    </div>
  );
};
