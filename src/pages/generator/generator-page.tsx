import {GenerateRow} from "@/features/generate-row";
import {generateFLInn, generateSnils, generateULInn} from "../../shared/utils";

export const GeneratorPage = () => {
  return (
    <div class="flex flex-col gap-2 justify-start">
      <GenerateRow fieldName="ИНН физа" generate={generateFLInn} />
      <GenerateRow fieldName="ИНН юрика" generate={generateULInn} />
      <GenerateRow fieldName="СНИЛС" generate={generateSnils} />
    </div>
  )
}