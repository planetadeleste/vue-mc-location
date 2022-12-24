import { Collection } from "@planetadeleste/vue-mc";
import Town from "../models/Town";

export default class TownCollection extends Collection<Town> {
  model(): typeof Town {
    return Town;
  }

  routes(): Record<string, any> {
    return {
      fetch: "towns.index",
    };
  }
}
