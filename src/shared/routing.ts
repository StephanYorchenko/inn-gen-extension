import {createSignal} from "solid-js";
import {TRoute} from "@/shared/types";

export const [currentRoute, setCurrentRoute] = createSignal<TRoute>("generator");