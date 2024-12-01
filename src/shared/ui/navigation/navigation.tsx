import {NavItem} from "./nav-item";

export const Navigation = () => {
  return (
    <nav class="flex gap-1 px-5">
      <NavItem text="Генератор" route="generator" />
      <NavItem text="Поисковик" route="searcher" />
    </nav>
  )
}