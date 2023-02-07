<template>
    <BaseDemo title="Activable Effect">
        <template #description>
            <p>
                Sometime a computed or any other effects are costly to recalculate, but needed only when a condition is
                "active".
            </p>
            <p>
                <a class="externalLink" href="https://vuejs.org/api/reactivity-advanced.html#effectscope"
                    >effectScope</a
                >
                is very usefull to create all the needed effects only when needed, and then release it when not needed
                anymore
            </p>
            <p>
                Here you can activate an item in the list. When an item is active, it display the distance to the
                selected item (you can select by clicking on an item)
            </p>
            <p>
                The computation for the distance is artifically heavy, you should feel a lag when selected item in the
                non optimized version, whereas it should be smooth in the optimized version
            </p>
        </template>
        <template #default="{ isOptimized }">
            <div class="grid grid-cols-4 gap-3 max-h-[500px] overflow-auto">
                <template v-if="isOptimized">
                    <ItemOpti
                        v-for="id in items"
                        :key="id"
                        :id="id"
                        :is-selected="store.selectedId === id"
                        :is-active="store.activeId === id"
                    ></ItemOpti>
                </template>
                <template v-else>
                    <Item
                        v-for="id in items"
                        :key="id"
                        :id="id"
                        :is-selected="store.selectedId === id"
                        :is-active="store.activeId === id"
                    ></Item>
                </template>
            </div>
        </template>
    </BaseDemo>
</template>

<script>
import Item from "/src/components/activable-effect/Item.vue";
import ItemOpti from "/src/components/activable-effect/ItemOpti.vue";
import { store } from "/src/components/activable-effect/store";

export default {
    components: { Item, ItemOpti },
    setup() {
        return {
            items: Array(1000)
                .fill(null)
                .map((_, index) => index + 1),
            store,
        };
    },
};
</script>
