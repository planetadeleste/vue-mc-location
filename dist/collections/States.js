import { Collection } from "@planetadeleste/vue-mc";
import State from "../models/State";
export default class States extends Collection {
    model() {
        return State;
    }
    routes() {
        return {
            fetch: "states.index",
        };
    }
}
//# sourceMappingURL=States.js.map