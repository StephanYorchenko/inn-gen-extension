import {createSignal} from "solid-js";
import { FaRegularClipboard } from "solid-icons/fa"

type TProps = {
  fieldName: string;
  generate: () => string;
}

export const Row = ({ fieldName, generate }: TProps) => {
  const [value, setValue] = createSignal("");

  const handleClick = () => {
    const newValue = generate();
    setValue(newValue);
    navigator.clipboard.writeText(newValue);
  }
  return (
    <div>
      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">{fieldName}</span>
      <div class="flex justify-between">
        <div class="block font-mono text-lg font-medium text-slate-900 dark:text-slate-200 rounded-md bg-indigo-500 w-[140px] min-w-[140px] p-1 mr-4">
          {value()}
        </div>
        <button onClick={handleClick}
                class="py-2 px-3 bg-indigo-500 text-white text-lg font-semibold rounded-md shadow focus:outline-none">
          <FaRegularClipboard />
        </button>
      </div>
    </div>
  )
}