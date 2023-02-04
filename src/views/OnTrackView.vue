<template>
    <BaseDemo title="On Track" link="https://github.com/AurelieV/opti-perf/blob/main/src/views/OnTrackView.vue">
        <template #description>
            <p>Each time the color of a div change, it means the component has rerendered</p>
            <p>Use the Next and Previous buttons to change the items display on each row</p>
            <p>On the non optimized version, changing one row will also trigger the second one. On the optimized version, each row can change without affecting the other</p>
            <p>If you run it on dev mode, you can see what information the onTrack methods gives you</p>
            <p>You can find info about tracking methods in <a class="externalLink" href="https://vuejs.org/guide/extras/reactivity-in-depth.html#component-debugging-hooks">the official Vue Documentation</a></p>
        </template>
        <template #default="{ isOptimized }">
            <div class="mb-2">Dependencies: (only on dev mode)</div>
            <ul class="flex flex-wrap gap-2" v-if="isOptimized">
                <li class="p-2 border border-gray-700 rounded" v-for="(item, index) in optimizedTrack" :key="index">
                    {{ item.type }}: {{ item.key }}
                </li>
            </ul>
            <ul class="flex flex-wrap gap-2" v-else>
                <li class="p-2 border border-gray-700 rounded" v-for="(item, index) in nonOptimizedTrack" :key="index">
                    {{ item.type }}: {{ item.key }}
                </li>
            </ul>
            <Items
                class="mt-6"
                :collections="isOptimized ? collectionsOptimized : collectionsNonOptimized"
                name="Animals"
            ></Items>
            <Items
                class="mt-4"
                :collections="isOptimized ? collectionsOptimized : collectionsNonOptimized"
                name="Employees"
            ></Items>
        </template>
    </BaseDemo>
</template>

<script>
import { computed, ref } from "vue";
import { collections } from "/src/components/on-track/store.js";
import Items from "/src/components/on-track/Items.vue";

export default {
    components: { Items },
    setup() {
        const nonOptimizedTrack = ref([]);
        const optimizedTrack = ref([]);

        const collectionsNonOptimized = computed(
            () => {
                return Object.keys(collections).reduce((obj, key) => {
                    const item = { offset: collections[key].offset, data: collections[key].data };
                    obj[key] = item;
                    obj[collections[key].name] = item;

                    return obj;
                }, {});
            },
            {
                onTrack(e) {
                    nonOptimizedTrack.value.push(e);
                },
            }
        );

        const collectionsOptimized = computed(
            () => {
                return Object.keys(collections).reduce((obj, key) => {
                    const item = collections[key];
                    obj[key] = item;
                    obj[item.name] = item;

                    return obj;
                }, {});
            },
            {
                onTrack(e) {
                    optimizedTrack.value.push(e);
                },
            }
        );

        return {
            collectionsNonOptimized,
            collectionsOptimized,
            nonOptimizedTrack,
            optimizedTrack,
        };
    },
};
</script>
