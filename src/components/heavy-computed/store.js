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
    return computed(() => {
        let i = 0;
        while (i < 3000000) {
            i++;
        }
        return CONFIGURATION[id][prop.value];
    });
}

function createSharedRefDictionary(createRef) {
    const dictionary = new Map();
    return (key, ...args) => {
        if (!dictionary.has(key)) {
            const scope = effectScope(true);
            const memory = {
                scope,
                subscribers: 0,
                value: scope.run(() => createRef(key, ...args)),
            };
            dictionary.set(key, memory);
        }
        dictionary.get(key).subscribers++;
        onScopeDispose(() => {
            if (dictionary.has(key)) {
                const memory = dictionary.get(key);
                memory.subscribers--;
                if (!memory.subscribers) {
                    memory.scope.stop();
                    dictionary.delete(key);
                }
            }
        });

        return dictionary.get(key).value;
    };
}

export const useConfigurationByPropOpti = createSharedRefDictionary(useConfigurationByProp);
