import { cleanStr, Model } from "@planetadeleste/vue-mc";
import { required, string } from "@planetadeleste/vuemc/validation";
import { Response } from "@planetadeleste/vuemc";
import { pick, toNumber } from "lodash";
import { CountryData, StateData } from "@/types";

export default class Country extends Model<CountryData> {
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
      code: [cleanStr],
    };
  }

  validation(): Record<string, any> {
    return {
      name: required.and(string),
      code: required.and(string),
    };
  }

  options(): Record<string, any> {
    return {
      methods: {
        states: "GET",
      },
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "countries.show",
      create: "countries.store",
      update: "countries.update",
      delete: "countries.destroy",
      states: "countries.states",
    };
  }

  /**
   * Load states of this country
   *
   * @route api/v1/countries/{id}/states
   * @returns {Promise<Response>}
   */
  getStates(): Promise<Response<StateData[]>> {
    const method = this.getOption("methods.states");
    const route = this.getRoute("states");
    const params = pick(this.getRouteParameters(), "id");
    const url = this.getURL(route, params);
    const data = this.getSaveData();

    return this.createRequest({ method, url, data }).send();
  }
}
