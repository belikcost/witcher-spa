import { action, computed, makeObservable, observable } from "mobx";
import { identity, memoizeWith } from "ramda";

class Model {
    #ignoredKeys = {};
    canValidate = false;

    constructor(initialState, ignoredKeys) {
        this.state = initialState;

        if (ignoredKeys) {
            ignoredKeys.forEach(key => this.#ignoredKeys[key] = true);
        }

        makeObservable(this, {
            state: observable,
            errors: computed,
            setField: action.bound,
            canValidate: observable
        }, { deep: true });
    }

    setField = memoizeWith(identity, (fieldName) => {
        return action(fieldName, (value) => {
            this.state[fieldName] = value;
        });
    });

    get errors() {
        const errors = {};

        Object.entries(this.state).forEach(([key, value]) => {
            if (!this.canValidate) {
                errors[key] = false;
                return;
            }

            if (!this.#ignoredKeys[key]) {
                const isValueValid = value !== "" && value !== undefined && value !== null;
                errors[key] = !isValueValid;
            }
        });

        return errors;
    }

    validate() {
        this.canValidate = true;
        return Object.values(this.errors).every(error => !error);
    }
}

export default Model;