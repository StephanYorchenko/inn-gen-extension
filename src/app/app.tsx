import {Component, Match, Switch} from "solid-js";
import {Navigation} from "@/shared/ui/navigation";
import {GeneratorPage} from "@/pages/generator";
import {SearcherPage} from "@/pages/searcher";
import {currentRoute} from "@/shared/routing";

export const App: Component = () => {
  return (
    <div class="bg-indigo-950 h-full">
      <header class="w-full place-content-center flex">
        <span
          class="text-sky-400 text-3xl sm:text-4xl font-extrabold leading-none tracking-tight text-center mb-5">Копировалка для Сайры</span>
      </header>
      <Navigation />
      <main class="block px-5 pb-5">
        <Switch fallback={<div>Нужный раздел не найден. Текущий: {currentRoute()}</div>}>
          <Match when={currentRoute() === "generator"}>
            <GeneratorPage/>
          </Match>
          <Match when={currentRoute() === "searcher"}>
            <SearcherPage/>
          </Match>
        </Switch>
      </main>
    </div>
  )
};
