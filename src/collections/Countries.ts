import { Collection } from "@planetadeleste/vue-mc";
import Country from "../models/Country";

export default class Countries extends Collection<Country> {
  model(): typeof Country {
    return Country;
  }

  routes(): Record<string, any> {
    return {
      fetch: "countries.index",
    };
  }
}
