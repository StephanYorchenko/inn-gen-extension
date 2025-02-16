import {NavItem} from "./nav-item";
import {FaSolidDice, FaSolidGear, FaSolidMagnifyingGlass} from "solid-icons/fa";

export const Navigation = () => {
  return (
    <nav class="border-b border-gray-200 dark:border-gray-700">
      <ul class="flex flex-row flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <NavItem text="Генератор" route="generator" icon={<FaSolidDice />}/>
        <NavItem text="Поисковик" route="searcher" icon={<FaSolidMagnifyingGlass />}/>
        <NavItem text="Настройки" route="settings" icon={<FaSolidGear />}/>
      </ul>
    </nav>
)
}