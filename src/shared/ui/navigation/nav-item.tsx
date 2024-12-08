import {TRoute} from "@/shared/types";
import {currentRoute, setCurrentRoute} from "@/shared/routing";
import {JSX} from "solid-js";

type TProps = {
  route: TRoute;
  text: string;
  icon?: JSX.Element | null;
};

const selectedStyle = "inline-flex items-center justify-center p-4 cursor-pointer text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
const defaultStyle = "inline-flex items-center justify-center p-4 cursor-pointer border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"

export const NavItem = ({route, text, icon }: TProps) => {
  return (
    <li class="me-2">
      <span
        class={currentRoute() === route ? selectedStyle : defaultStyle}
        onClick={() => setCurrentRoute(route)}
      >
        {icon} {text}
      </span>
    </li>
  )
}