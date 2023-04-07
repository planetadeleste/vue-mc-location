import "@planetadeleste/vue-mc";
import { CountryData, StateData, TownData } from "./types";
import { Collection, Model } from "@planetadeleste/vue-mc";
import { Response } from "@planetadeleste/vuemc";

interface Country extends Model, CountryData {}

class Country extends Model {
  getStates(): Promise<Response<StateData[]>>;
}

class CountryCollection extends Collection<Country> {}

/**
 * @deprecated Use `CountryCollection`
 */
class Countries extends CountryCollection {}

interface State extends Model, StateData {}

class State extends Model {
  getTowns(): Promise<Response<TownData[]>>;
}

class StateCollection extends Collection<State> {}

/**
 * @deprecated Use `StateCollection`
 */
class States extends StateCollection {}

interface Town extends Model, TownData {}

class Town extends Model {}

class TownCollection extends Collection<Town> {}

/**
 * @deprecated Use `TownCollection`
 */
class Towns extends TownCollection {}

export {
  Country,
  CountryData,
  CountryCollection,
  Countries,
  State,
  StateData,
  StateCollection,
  States,
  Town,
  TownData,
  TownCollection,
  Towns,
};
