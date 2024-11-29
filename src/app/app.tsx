import {Component, createSignal, Match, Switch} from 'solid-js';
import {Generator} from "../pages/generator";

type TRoutes = "generator" | "searcher";

export const App: Component = () => {
  const [currentRoute, setCurrentRoute] = createSignal<TRoutes>("generator")
  return (
    <div class="bg-indigo-950 h-full">
      <header class="w-full place-content-center flex">
        <span class="text-sky-400 text-3xl sm:text-4xl font-extrabold leading-none tracking-tight text-center mb-5">Копировалка для Сайры</span>
      </header>
      <Switch>
        <Match when={currentRoute() === "generator"}>
          <Generator/>
        </Match>
      </Switch>
    </div>
  );
};
