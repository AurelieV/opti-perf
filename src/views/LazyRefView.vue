<template>
    <BaseDemo title="Lazy Ref">
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
                    :class="{ 'rotate-3': store.selectedId === i }"
                    @click="store.selectedId = i"
                ></li>
            </ul>
            <ul class="grid grid-cols-4 gap-3" v-else>
                <Item v-for="i of list" :key="i" :id="i" @click="store.selectedId = i"></Item>
            </ul>
        </template>
    </BaseDemo>
</template>

<script>
import { useVisualRerender } from "/src/components/common/useVisualRerender.js";
import { store } from "/src/components/lazy-ref/store.js";
import Item from "/src/components/lazy-ref/Item.vue";

export default {
    components: { Item },
    setup() {
        const { getBackgroundColor } = useVisualRerender(true);

        return { getBackgroundColor, store, list: [1, 2, 3, 4, 5, 6, 7, 8] };
    },
};
</script>
