<template>
    <BaseDemo title="Shared Effect">
        <template #description>
            <p>
                When a computed or any other effects are costly to create or recalculate, but are use by several
                components, it can be usefull to share it between them
            </p>
            <p>
                <a class="externalLink" href="https://vuejs.org/api/reactivity-advanced.html#effectscope"
                    >effectScope</a
                >
                is very usefull to create all the needed effects only when needed, and then release it when not needed
                anymore (important for memory leak !)
            </p>
            <p>
                Here we have a bunch of elements, with some of them having the same configuration id. The computed to
                get the value of the key is arbitrary slow. When changing the prop display, in the non optimized version
                we can feel the application is laggy. This lag dissappears in the optimized version which use common ref
            </p>
            <p>You can find the code to this demo <a class="externalLink" href="">here</a></p>
        </template>
        <template #default="{ isOptimized }">
            <RadioGroup
                v-model="selectedProp"
                :options="[
                    { label: 'Name', value: 'name' },
                    { label: 'Job', value: 'job' },
                ]"
            ></RadioGroup>
            <ul v-if="isOptimized" class="grid grid-cols-3 gap-2 overflow-auto max-h-[300px] mt-4 nice-scroll">
                <ItemOpti v-for="id in ids" :key="id" :selectedProp="selectedProp" :id="id"></ItemOpti>
            </ul>
            <ul v-else class="grid grid-cols-3 gap-2 overflow-auto max-h-[300px] mt-4 nice-scroll">
                <Item v-for="id in ids" :key="id" :selectedProp="selectedProp" :id="id"></Item>
            </ul>
        </template>
    </BaseDemo>
</template>

<script>
import { ref } from "vue";
import shuffle from "lodash.shuffle";
import RadioGroup from "/src/components/common/RadioGroup.vue";
import Item from "/src/components/shared-effect/Item.vue";
import ItemOpti from "/src/components/shared-effect/ItemOpti.vue";
import persons from "/src/assets/persons.json";

export default {
    components: { Item, ItemOpti, RadioGroup },
    setup() {
        return {
            selectedProp: ref("name"),
            ids: [...shuffle(persons.map((person) => person.id))],
        };
    },
};
</script>
