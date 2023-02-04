<template>
    <BaseDemo title="Reflow" link="https://github.com/AurelieV/opti-perf/blob/main/src/views/ReflowView.vue">
        <template #description>
            <p>Each time you select an item (by clicking on it), a div is following this div width and height</p>
            <p>This is often use for absolute positioned menu</p>
            <p>Depending on your computer, the non optimized version should feel laggy (scrolling and selected)</p>
        </template>
        <template #default="{ isOptimized }">
            <RadioGroup :options="options" v-model="width" class="mb-8"></RadioGroup>
            <button class="flex p-2 mb-2 ml-auto bg-gray-700 rounded" @click="select(null)">Unselect</button>
            <div :style="positionStyle" class="flex items-center justify-center mx-auto mb-2 text-gray-900 bg-white">
                {{ positionStyle.width }} {{ positionStyle.height }}
            </div>
            <div class="grid grid-cols-3 gap-3 overflow-auto h-[400px] mx-auto" :class="width">
                <template v-if="isOptimized">
                    <ItemOptimized
                        v-for="i in 1000"
                        :is-selected="selectedId === i"
                        :key="'optimized' + i"
                        @click="select(i)"
                        @update:positionStyle="positionStyle = $event"
                    ></ItemOptimized>
                </template>
                <template v-else>
                    <Item
                        v-for="i in 1000"
                        :is-selected="selectedId === i"
                        :key="i"
                        @click="select(i)"
                        @update:positionStyle="positionStyle = $event"
                    ></Item>
                </template>
            </div>
        </template>
    </BaseDemo>
</template>

<script>
import { ref } from "vue";
import Item from "/src/components/reflow/Item.vue";
import ItemOptimized from "/src/components/reflow/ItemOptimized.vue";
import RadioGroup from "/src/components/common/RadioGroup.vue";

export default {
    components: { Item, RadioGroup, ItemOptimized },
    setup() {
        return {
            selectedId: ref(null),
            width: ref("w-full"),
            options: [
                { value: "w-full", label: "Full" },
                { value: "w-1/2", label: "Small" },
            ],
            positionStyle: ref({}),
        };
    },
    methods: {
        select(id) {
            this.selectedId = id;
        },
    },
};
</script>
