import {Row} from "@/shared/ui/row";
import {generateFLInn, generateSnils, generateULInn} from "./utils";

export const GeneratorPage = () => {
  return (
    <div class="flex flex-col gap-2 justify-start">
      <Row fieldName="ИНН физа" generate={generateFLInn} />
      <Row fieldName="ИНН юрика" generate={generateULInn} />
      <Row fieldName="СНИЛС" generate={generateSnils} />
    </div>
  )
}