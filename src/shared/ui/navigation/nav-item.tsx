import {TRoute} from "@/shared/types";
import {currentRoute, setCurrentRoute} from "@/shared/routing";

type TProps = {
  route: TRoute;
  text: string;
};

export const NavItem = ({route, text }: TProps) => {
  return (
    <span
      class={`hover:bg-sky-700 cursor-pointer text-white`}
      classList={{
        "underline": currentRoute() === route
      }}
      onClick={() => setCurrentRoute(route)}
    >
      {text}
    </span>
  )
}