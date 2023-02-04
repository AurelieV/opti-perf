<template>
    <BaseDemo title="Vue memo" link="https://github.com/AurelieV/opti-perf/blob/main/src/views/VueMemoView.vue">
        <template #description>
            <p>Each time a component is rerendered its color will changed</p>
            <p>By clicking an item you can select it. In the optimized version this cause each element to rerender. On the optimized version only the item newly selected and previously selected change</p>
            <p>You can find the document of v-memo on the <a class="externalLink" href="https://vuejs.org/api/built-in-directives.html#v-memo">Vue official documentation</a></p>
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
        const { getBackgroundColor } = useVisualRerender(true);

        return { getBackgroundColor, selectedId: ref(1), list: [1, 2, 3, 4, 5, 6, 7, 8] };
    },
};
</script>
