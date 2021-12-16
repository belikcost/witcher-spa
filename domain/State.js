import { action, makeAutoObservable } from "mobx";
import { identity, memoizeWith } from "ramda";

class State {
    constructor(initialData) {
        Object.assign(this, initialData);
        makeAutoObservable(this);
    }

    setField = memoizeWith(identity, (fieldName) => {
        return action((value) => {
            this[fieldName] = value;
        });
    })
}

export default State;