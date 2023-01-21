<template>
    <div class="max-w-sm mx-auto">
        <div class="grid grid-cols-2 mb-3">
            <button
                class="hover:text-orange-500 active:text-orange-800 disabled:text-gray-800"
                :disabled="isPreviousDisabled"
                @click="goPrevious"
            >
                &#60; Previous
            </button>
            <button
                class="hover:text-orange-500 active:text-orange-800 disabled:text-gray-800"
                :disabled="isNextDisabled"
                @click="goNext"
            >
                Next &#62;
            </button>
        </div>
        <ul
            class="grid grid-cols-3 gap-2 px-3 transition-colors space-between"
            :style="{ '--backgroundColor': getBackgroundColor() }"
        >
            <li
                class="p-8 rounded aspect-square overflow-hidden justify-center bg-[var(--backgroundColor)] flex flex-col items-center text-ellipsis"
                v-for="item in items"
                :key="item.id"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fetchItems } from "/src/components/on-track/store.js";
import { useVisualRerender } from "/src/components/common/useVisualRerender.js";

export default {
    props: {
        collections: { type: Object, required: true },
        name: { type: String, required: true },
    },
    setup(props) {
        const { getBackgroundColor } = useVisualRerender();
        fetchItems(props.name, 0);

        return { getBackgroundColor };
    },
    computed: {
        items() {
            return this.collections[this.name].data;
        },
        isNextDisabled() {
            return this.collections[this.name].offset >= 30;
        },
        isPreviousDisabled() {
            return this.collections[this.name].offset <= 3;
        },
    },
    methods: {
        goNext() {
            fetchItems(this.name, this.collections[this.name].offset + 3);
        },
        goPrevious() {
            fetchItems(this.name, this.collections[this.name].offset - 3);
        },
    },
};
</script>
