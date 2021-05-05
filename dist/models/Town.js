import { Model, cleanStr } from "@planetadeleste/vue-mc";
import { required, string, number } from "vue-mc/validation";
import { toNumber } from "lodash";
import State from "./State";
export default class Town extends Model {
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
            slug: [cleanStr],
            state: (obData) => {
                return new State(obData);
            },
        };
    }
    validation() {
        return {
            state_id: required.and(number),
            name: required.and(string),
            slug: required.and(string),
        };
    }
    routes() {
        return {
            fetch: "towns.show",
            create: "towns.store",
            update: "towns.update",
            delete: "towns.destroy",
        };
    }
}
//# sourceMappingURL=Town.js.map