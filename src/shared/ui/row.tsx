import {createSignal} from "solid-js";

type TProps = {
  fieldName: string;
  generate: () => string;
}

export const Row = ({ fieldName, generate }: TProps) => {
  const [value, setValue] = createSignal("");
  return (
    <div>
      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{fieldName}</span>
      <div class="flex justify-between">
        <div class="block font-mono text-lg font-medium text-slate-900 dark:text-slate-200 rounded-md bg-indigo-500 w-[140px] min-w-[140px] p-1 mr-4">
          {value()}
        </div>
        <button onClick={() => setValue(generate())}
                class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">📋
        </button>
      </div>
    </div>
  )
}