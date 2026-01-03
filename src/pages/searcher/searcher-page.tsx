import {SearchBar} from "@/shared/ui/search-bar";
import {createResource, createSignal, For, Match, Show, Switch} from "solid-js";
import {fetchCompanyInfo} from "@/shared/api/fetch-company-info";
import {Spinner} from "@/shared/ui/spinner";
import {Collapse} from "@/shared/ui/collapse";
import {Row} from "@/shared/ui/row";
import {getByPath} from "@/shared/utils";

const params = [
  { name: "$.value", label: "Краткое наименование" },
  { name: "$.data.name.full_with_opf", label: "Полное наименование" },

  { name: "$.data.inn", label: "ИНН" },
  { name: "$.data.kpp", label: "КПП" },
  { name: "$.data.ogrn", label: "ОГРН" },
  { name: "$.data.okpo", label: "ОКПО" },


  { name: "$.data.state.status", label: "Статус" },


  { name: "$.data.opf.full", label: "ОПФ (полное)" },
  { name: "$.data.opf.short", label: "ОПФ (краткое)" },

  { name: "$.data.management.post", label: "Должность руководителя" },
  { name: "$.data.management.name", label: "Руководитель" },

  { name: "$.data.address.value", label: "Адрес" },

  { name: "$.data.okved", label: "ОКВЭД (основной)" },
  { name: "$.data.okveds[0].okved", label: "ОКВЭД (из списка, 1-й)" },
  { name: "$.data.okveds[0].name", label: "ОКВЭД (описание, 1-й)" },
]


export const SearcherPage = () => {
  const [inn, setInn] = createSignal("");
  const [suggestions] = createResource(inn, fetchCompanyInfo);
  return (
    <div class="flex flex-col gap-2 justify-start">
      <SearchBar placeholder="Начните вводить" value={inn()} setValue={setInn}/>
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
              <Collapse
                title={(item.data.name.short_with_opf ?? "")}
                description={`ИНН: ${item.data.inn}`}
                tags={[(item.data.branch_type === "MAIN" ? "головная организация" : "филиал")]}
              >
                <div class="flex flex-col gap-1">
                  <For each={params}>
                    {
                      (row) => {
                        const data = getByPath<string | undefined>(item, row.name)
                        return (
                          <Show when={data}>
                            <Row value={data ?? ""} fieldName={row.label} canCopy/>
                          </Show>
                        )
                      }
                    }
                  </For>
                </div>
              </Collapse>
            }
          </For>
        </Match>
      </Switch>
    </div>
  )
}