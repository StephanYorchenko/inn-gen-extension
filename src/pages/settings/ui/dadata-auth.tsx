import {dadataToken, setDadataToken} from "@/shared/stores";


export const DadataAuth = () => {
  return (
    <div class="relative">
      <label for="dadata-settings" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Токен Дадата
      </label>
      <input
        id="dadata-settings"
        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Токен Дадата"
        value={dadataToken()}
        onChange={(e) => setDadataToken(e.target.value)}
      />
    </div>
  )
}