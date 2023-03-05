import { watch, onScopeDispose, effectScope } from "vue";
import { store } from "./store";

import { ref } from "vue";

export function useDistance(id) {
    const distance = ref(0);
    watch(
        () => store.selectedId,
        (selectedId) => {
            distance.value = getDistance(selectedId, id);
        },
        { immediate: true }
    );

    return distance;
}

export function useDistanceOpti(id, isActive) {
    const distance = ref(0);

    let scope;
    function dispose() {
        scope && scope.stop();
    }

    watch(isActive, (isActive) => {
        if (!isActive) {
            dispose();
        } else {
            scope = effectScope();
            scope.run(() => {
                // It's exactly the same logic
                watch(
                    () => store.selectedId,
                    (selectedId) => {
                        distance.value = getDistance(selectedId, id);
                    },
                    { immediate: true }
                );
            });
        }
    });

    onScopeDispose(dispose);

    return distance;
}

function getDistance(id1, id2) {
    if (id1 === null || id2 === null) return 0;
    // Fake a huge computation
    let i = 0;
    while (i < 3000000) {
        i++;
    }
    console.log(i); // this line is here just so that minifier in production to do not delete the artificial slow loop
    return Math.abs(id1 - id2);
}
