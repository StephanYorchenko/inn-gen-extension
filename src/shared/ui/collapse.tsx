import {For, ParentComponent, Show} from "solid-js";

type TProps = {
  title: string;
  description?: string;
  tags?: string[];
}

export const Collapse: ParentComponent<TProps> = ({ title, description, tags, children }) => {
  return (
    <details class="group rounded-2xl border border-white/10 bg-indigo-900/40 shadow-lg shadow-black/30 backdrop-blur transition
                  hover:border-white/15 hover:bg-indigo-900/55">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-3
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <h3 class="truncate text-base font-semibold text-slate-50">
              {title}
            </h3>
          </div>

          <For each={tags}>
            {(item, index) =>
            <span class="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium
                         text-emerald-200 ring-1 ring-inset ring-emerald-400/20">
                {item}
              </span>
            }
          </For>

          <Show when={description}>
            <p class="mt-1 truncate text-sm text-slate-500">
              { description }
            </p>
          </Show>

        </div>
        <div class="flex shrink-0 items-center gap-3">
          <svg class="h-5 w-5 text-slate-300/70 transition-transform duration-200 group-open:rotate-180"
               viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
      </summary>
      {children}
    </details>
  )
}