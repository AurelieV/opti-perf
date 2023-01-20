<template>
    <BaseDemo title="Vue memo">
        <template #description>
            <p>TODO</p>
        </template>
        <template #default="{ isOptimized }">
            <ul class="grid grid-cols-4 gap-3" v-if="!isOptimized">
                <li
                    class="px-2 transition transform rounded cursor-pointer aspect-square"
                    v-for="i of list"
                    :key="i"
                    :style="{ backgroundColor: getBackgroundColor() }"
                    :class="{ 'rotate-3': selectedId === i }"
                    @click="selectedId = i"
                ></li>
            </ul>
            <ul class="grid grid-cols-4 gap-3" v-else>
                <li
                    class="px-2 transition transform rounded cursor-pointer aspect-square"
                    v-for="i of list"
                    :key="i"
                    v-memo="[selectedId === i]"
                    :style="{ backgroundColor: getBackgroundColor() }"
                    :class="{ 'rotate-3': selectedId === i }"
                    @click="selectedId = i"
                ></li>
            </ul>
        </template>
    </BaseDemo>
</template>

<script>
import { ref } from "vue";
import { useVisualRerender } from "/src/components/common/useVisualRerender.js";

export default {
    setup() {
        const { getBackgroundColor } = useVisualRerender();

        return { getBackgroundColor, selectedId: ref(1), list: [1, 2, 3, 4, 5, 6, 7, 8] };
    },
};
</script>
