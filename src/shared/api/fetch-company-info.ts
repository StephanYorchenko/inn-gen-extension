import {dadataToken} from "@/shared/stores";

const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";

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
    inn?: string;
    kpp?: string;
    branch_type: "MAIN" | "BRANCH";
    name: {
      short_with_opf?: string;
    }
  }
}

type TResponse = {
  suggestions: TCompatyItem[];
}

export async function fetchCompanyInfo(inn: string): Promise<TCompatyItem[]> {
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