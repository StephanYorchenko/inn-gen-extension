import {SearchBar} from "@/features/search-bar";
import {createResource, createSignal, For, Match, Show, Switch} from "solid-js";
import {fetchCompanyInfo} from "@/shared/api/fetch-company-info";
import {Spinner} from "@/features/spinner";
import {Collapse} from "@/features/collapse";
import {Row} from "@/features/row";


export const SearcherPage = () => {
  const [inn, setInn] = createSignal("");
  const [suggestions] = createResource(inn, fetchCompanyInfo);
  return (
    <div class="flex flex-col gap-2 justify-start">
      <SearchBar placeholder="Введите ИНН" value={inn()} setValue={setInn}/>
      <Show when={suggestions.loading && !!inn()}>
        <Spinner />
      </Show>
      <Switch>
        <Match when={suggestions.error}>
          <span style={{ color: "white" }}>Error: {suggestions.error.message}</span>
        </Match>
        <Match when={suggestions()}>
          <For each={suggestions()}>
            {(item, index) =>
              <Collapse title={item.value + (item.data.branch_type === "MAIN" ? " (MAIN)" : "")}>
                <Show when={item.data.kpp}>
                  <Row value={item.data.kpp!} fieldName="КПП" />
                </Show>
              </Collapse>
            }
          </For>
        </Match>
      </Switch>
    </div>
  )
}