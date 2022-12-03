<template>
    <BaseDemo title="Heavy Computed">
        <template #default="{ isOptimized }">
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
            <RadioGroup
                v-model="selectedProp"
                :options="[
                    { label: 'Name', value: 'name' },
                    { label: 'Color', value: 'color' },
                ]"
            ></RadioGroup>
            <ul class="grid grid-cols-3 gap-2 overflow-auto max-h-[300px] mt-4">
                <li
                    class="p-2 bg-gray-800 rounded"
                    v-for="(id, index) in items"
                    :key="index"
                    :prop="selectedProp"
                    :id="id"
                >
                    <Opti v-if="isOptimized" :prop="selectedProp" :id="id"></Opti>
                    <NonOpti v-else :prop="selectedProp" :id="id"></NonOpti>
                </li>
            </ul>
        </template>
    </BaseDemo>
</template>

<script>
import { ref } from "vue";
import RadioGroup from "../components/common/RadioGroup.vue";
import NonOpti from "../components/heavy-computed/NonOpti.vue";
import Opti from "../components/heavy-computed/Opti.vue";

export default {
    components: { NonOpti, RadioGroup, Opti },
    setup() {
        const items = Array(1000)
            .fill(null)
            .map((_, i) => `${i % 3}`);
        return {
            items,
            selectedProp: ref("name"),
        };
    },
};
</script>
