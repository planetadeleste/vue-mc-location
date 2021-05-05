import "@planetadeleste/vue-mc";
import { CountryData, StateData, TownData } from "./types";

declare module "@planetadeleste/vue-mc-location" {
  import { Response } from "vue-mc";
  import { Model, Collection } from "@planetadeleste/vue-mc";
  export { CountryData, StateData, TownData };

  class Country extends Model {
    getStates(): Promise<Response<StateData[]>>;
  }
  interface Country extends Model, CountryData {}

  class State extends Model {
    getTowns(): Promise<Response<TownData[]>>;
  }
  interface State extends Model, StateData {}

  class Town extends Model {}
  interface Town extends Model, TownData {}

  export { Country, State, Town };
  export class Countries extends Collection<Country> {}
  export class States extends Collection<State> {}
  export class Towns extends Collection<Town> {}
}
