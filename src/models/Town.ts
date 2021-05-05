import { Model, cleanStr } from "@planetadeleste/vue-mc";
import { required, string, number } from "vue-mc/validation";
import { toNumber } from "lodash";
import State from "./State";
import { StateData } from "../types/State";

export default class Town extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      name: [cleanStr],
      slug: [cleanStr],
      state: (obData: StateData) => {
        return new State(obData);
      },
    };
  }

  validation(): Record<string, any> {
    return {
      state_id: required.and(number),
      name: required.and(string),
      slug: required.and(string),
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "towns.show",
      create: "towns.store",
      update: "towns.update",
      delete: "towns.destroy",
    };
  }
}
