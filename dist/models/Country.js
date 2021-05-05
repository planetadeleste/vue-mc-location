import { Model, cleanStr } from "@planetadeleste/vue-mc";
import { required, string } from "vue-mc/validation";
import { toNumber, pick } from "lodash";
export default class Country extends Model {
    defaults() {
        return {
            id: null,
            name: null,
        };
    }
    mutations() {
        return {
            id: (id) => toNumber(id) || null,
            name: [cleanStr],
            code: [cleanStr],
        };
    }
    validation() {
        return {
            name: required.and(string),
            code: required.and(string),
        };
    }
    options() {
        return {
            methods: {
                states: "GET",
            },
        };
    }
    routes() {
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
    getStates() {
        const method = this.getOption("methods.states");
        const route = this.getRoute("states");
        const params = pick(this.getRouteParameters(), "id");
        const url = this.getURL(route, params);
        const data = this.getSaveData();
        return this.createRequest({ method, url, data }).send();
    }
}
//# sourceMappingURL=Country.js.map