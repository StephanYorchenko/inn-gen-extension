import {dadataToken} from "@/shared/stores";

const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";

const options = {
  method: "POST",
  mode: "cors",
} as const;

const headers =  {
  "Content-Type": "application/json",
  "Accept": "application/json",
}

type TCompatyItem = {
  value: string;
  data: {
    kpp?: string;
    branch_type: "MAIN" | "BRANCH";
  }
}

type TResponse = {
  suggestions: TCompatyItem[];
}

export async function fetchCompanyInfo(inn: string): Promise<TCompatyItem[]> {
  if (inn.length !== 10 && inn.length !== 12) throw new Error("Введите ИНН организации");
  return await fetch(url, {
    ...options,
    headers: {
      ...headers,
      "Authorization": "Token " + dadataToken()
    },
    body: JSON.stringify({ query: inn })
  })
    .then(async (response): Promise<TResponse> =>  await response.json())
    .then(data => data.suggestions);
}