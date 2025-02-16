import {FaSolidMagnifyingGlass} from "solid-icons/fa";

type TProps = {
  placeholder?: string;
  value: string;
  setValue: (v: string) => void;
}

export const SearchBar = ({
  placeholder="Поиск",
  value,
  setValue
}: TProps) => {
  return (
    <div class="relative w-full">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaSolidMagnifyingGlass color="white"/>
      </div>
      <input type="text" id="simple-search"
             class="bg-indigo-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder={placeholder} required value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}