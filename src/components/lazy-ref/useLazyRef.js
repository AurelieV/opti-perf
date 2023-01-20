import { ref, watch } from "vue";
import { store } from "./store";

export function useLazyRef(id) {
    const isSelected = ref(false);
    watch(
        () => store.selectedId,
        (selectedId) => {
            const newValue = selectedId === id;
            if (isSelected !== newValue) {
                isSelected.value = newValue;
            }
        },
        { immediate: true }
    );

    return isSelected;
}
