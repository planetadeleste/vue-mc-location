import { Collection } from "@planetadeleste/vue-mc";
import Town from "../models/Town";
export default class Towns extends Collection {
    model() {
        return Town;
    }
    routes() {
        return {
            fetch: "towns.index",
        };
    }
}
//# sourceMappingURL=Towns.js.map