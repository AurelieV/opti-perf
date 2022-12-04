import { computed, effectScope, onScopeDispose } from "vue";

const CONFIGURATION = {
    0: {
        name: "Damien",
        color: "red",
    },
    1: {
        name: "Kevin",
        color: "green",
    },
    2: {
        name: "Alexis",
        color: "orange",
    },
    3: {
        name: "Marc",
        color: "yellow",
    },
};

export function useConfigurationByProp(id, prop) {
    // Articial heavy computed
    // Here in a "normal" usecase, this can be a heavy computed to recalculate on change,
    // or just a lot of them to be created (in my "real" case, event the simple creation of it was heavy)
    return computed(() => {
        let i = 0;
        while (i < 3000000) {
            i++;
        }
        console.log(i); // this line is here just so that minifier in production to do not delete the artificial slow loop
        return CONFIGURATION[id][prop.value];
    });
}

// Here I am not creating only ONE shared ref, but a dictionnary by key of them
// Not that this can also be a way to share watchers, or any vue effects
function createSharedRefDictionary(createRef) {
    // This will old by shared ref; and all the metadata needed
    const dictionary = new Map();

    // We return a new composable, when the first arguments will be the share key
    return (key, ...args) => {
        if (!dictionary.has(key)) {
            // If this is the first time something is asking this, we create it
            // Everything is created under a new scope so that all effects will be collected
            // It is detached, so that if the first component to call this composable is unmount
            // we still keep the reactivity (bu default the parent scope which is the component one destroy any child scope)
            const scope = effectScope(true); // true mean detached
            const memory = {
                scope, // we keep this to being able to stop it later
                subscribers: 0, // we count how much components are using this
                value: scope.run(() => createRef(key, ...args)), // this is the actual shared ref
            };
            dictionary.set(key, memory);
        }

        // We keep track of how many things are using this shared ref
        dictionary.get(key).subscribers++;

        // This will be called when the parent effect scope will be clean.
        // Usually, this will be the unmount event of a component
        onScopeDispose(() => {
            if (dictionary.has(key)) {
                const memory = dictionary.get(key);

                // We update the number of subscriber
                memory.subscribers--;

                // We release the memory if nobody need this anymore.
                // Its very important to do that to avoid memory leak
                if (!memory.subscribers) {
                    memory.scope.stop();
                    dictionary.delete(key);
                }
            }
        });

        // We return the shared ref
        return dictionary.get(key).value;
    };
}

export const useConfigurationByPropOpti = createSharedRefDictionary(useConfigurationByProp);
