import { computed, effectScope, onScopeDispose } from "vue";
import persons from "/src/assets/persons.json";

export function useDataProperty(prop) {
    // Artificial heavy computed
    // Here in a "normal" usecase, this can be a heavy computed to recalculate on change,
    // Or any effects (watcher, listeners, etc) heavy by what they do (css calc for ex) or bu their number
    // In my real usecase, it was a bit of both
    return computed(() => {
        let i = 0;
        while (i < 3000000) {
            i++;
        }
        console.log(i); // this line is here just so that minifier in production to do not delete the artificial slow loop
        return persons.reduce((result, person) => {
            result[person.id] = person[prop.value];
            return result;
        }, {});
    });
}

function createSharedRef(createRef) {
    let value = null;
    let scope = null;
    let subscribers = 0; // Its important to keep track of subscribers to avoid memory leak

    // This will be called when the parent effect scope will be clean.
    // Usually, this will be the unmount event of a component
    function dispose() {
        // We update the number of subscriber
        subscribers--;

        // We release the memory if nobody need this anymore.
        if (scope && subscribers <= 0) {
            scope.stop();
            value = null;
            scope = null;
        }
    }

    // We return a new composable
    return (...args) => {
        subscribers++;
        if (!value) {
            // If this is the first time something is asking this, we create it
            // Everything is created under a new scope so that all effects will be collected
            // It is detached, so that if the first component to call this composable is unmount
            // we still keep the reactivity (by default the "origin" component will destory everything if unmount)
            scope = effectScope(true); // true mean detached
            value = scope.run(() => createRef(...args));
        }

        onScopeDispose(dispose);

        // We return the shared ref
        return value;
    };
}

export const useSharedDataProperty = createSharedRef(useDataProperty);
