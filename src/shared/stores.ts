import {makePersisted} from "@solid-primitives/storage";
import {createSignal} from "solid-js";

export const [dadataToken, setDadataToken, initDadataTokenStore] = makePersisted(createSignal(""), {name: "api-token"});