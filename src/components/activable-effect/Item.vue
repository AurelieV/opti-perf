<template>
    <div
        class="flex flex-col items-center justify-center p-4 rounded aspect-square"
        :class="[{ border: isSelected }, isActive ? 'bg-gray-900' : 'bg-gray-700']"
        @click="store.selectedId = id"
    >
        <div>My id is {{ id }}</div>
        <div v-if="isActive">Distance from selected: {{ distance }}</div>
        <button
            class="p-2 mt-4 transition-colors border rounded pointer-cursor hover:bg-white hover:text-gray-900 active:bg-white active:text-gray-900"
            @click.stop="store.activeId = id"
            v-else
        >
            Become the active item
        </button>
    </div>
</template>

<script>
import { store } from "./store";
import { useDistance } from "./useDistance";

export default {
    props: {
        id: { type: Number, required: true },
        isSelected: { type: Boolean, required: true },
        isActive: { type: Boolean, required: true },
    },
    setup(props) {
        return {
            store,
            distance: useDistance(props.id),
        };
    },
};
</script>
