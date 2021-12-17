import { action, computed, makeObservable, observable } from "mobx";
import { identity, memoizeWith } from "ramda";

/**
 * Model with state and error validation.
 */
class Model {
    /**
     * @type {object}
     */
    #ignoredKeys = {};

    /**
     * @type {boolean}
     */
    canValidate = false;

    /**
     * @param {object} initialState
     * @param {string[]?} ignoredKeys - The ignored keys of state for validation
     */
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

    /**
     * @param {string} fieldName
     * @return {function(value: any): (void)}
     */
    setField = memoizeWith(identity, (fieldName) => {
        return action(fieldName, (value) => {
            this.state[fieldName] = value;
        });
    });

    /**
     * @return {object}
     */
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

    /**
     * @return {boolean}
     */
    validate() {
        this.canValidate = true;
        return Object.values(this.errors).every(error => !error);
    }
}

export default Model;