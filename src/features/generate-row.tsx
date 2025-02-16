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
    <div class="relative">
      <label for="default-search" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {fieldName}
      </label>
      <input
        id="default-search"
        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={fieldName}
        value={value()}
      />
      <button
        onClick={handleClick}
        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaRegularClipboard/>
      </button>
    </div>
  )
}