import {createSignal} from "solid-js";
import { FaRegularClipboard } from "solid-icons/fa"

type TProps = {
  fieldName: string;
  generate: () => string;
}

export const GenerateRow = ({ fieldName, generate }: TProps) => {
  const [value, setValue] = createSignal("");

  const handleClick = () => {
    const newValue = generate();
    setValue(newValue);
    navigator.clipboard.writeText(newValue);
  }
  return (
    <div class="flex items-start justify-between gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-inset ring-white/10">
      <div class="min-w-0">
        <p class="text-xs font-medium uppercase tracking-wide text-slate-400">
          {fieldName}
        </p>

        <p class="mt-1 break-words font-mono text-sm font-semibold text-slate-50">
          {value()}
        </p>
      </div>

      <button
        type="button"
        class="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100
           shadow-sm shadow-black/20 hover:bg-white/10 active:bg-white/15
           focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
        onClick={handleClick}
      >
        <FaRegularClipboard/>
      </button>
    </div>
  )
}