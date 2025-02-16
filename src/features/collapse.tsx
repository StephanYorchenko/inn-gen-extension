import {ParentComponent} from "solid-js";

type TProps = {
  title: string;
}

export const Collapse: ParentComponent<TProps> = ({ title, children }) => {
  return (
    <details>
      <summary class="text-blue-500 group-open:text-green-500 list-none">{title}</summary>
      { children }
    </details>
  )
}