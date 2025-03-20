import {generateFLInn, generateSnils, generateULInn} from "@/shared/utils";

export const generatorConfig = {
  "ИНН физлица": generateFLInn,
  "ИНН юрлица": generateULInn,
  "СНИЛС": generateSnils,
}