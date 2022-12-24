import { Collection } from "@planetadeleste/vue-mc";
import State from "../models/State";

export default class StateCollection extends Collection<State> {
  model(): typeof State {
    return State;
  }

  routes(): Record<string, any> {
    return {
      fetch: "states.index",
    };
  }
}
