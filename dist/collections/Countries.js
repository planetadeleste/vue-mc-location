import { Collection } from "@planetadeleste/vue-mc";
import Country from "../models/Country";
export default class Countries extends Collection {
    model() {
        return Country;
    }
    routes() {
        return {
            fetch: "countries.index",
        };
    }
}
//# sourceMappingURL=Countries.js.map