<template>
    <article>
        <header class="border-b-2 border-gray-700">
            <div class="flex items-baseline mb-1">
                <h1 class="text-xl">{{ title }}</h1>
                <a class="ml-3 link" href="github">(Github Link)</a>
            </div>

            <div class="flex items-center cursor-pointer text-md" @click="isDescriptionOpen = !isDescriptionOpen">
                <h2>Description</h2>
                <Icon
                    icon="mdi:chevron-right"
                    class="ml-2 -mb-[3px] transition-transform"
                    :class="isDescriptionOpen && 'rotate-90'"
                ></Icon>
            </div>
            <ExpandTransition>
                <section class="mt-2" v-show="isDescriptionOpen">
                    <slot name="description"></slot>
                </section>
            </ExpandTransition>
            <RadioGroup
                class="mt-4"
                v-model="activeTab"
                header
                :options="[
                    { label: 'Non optimized', value: 0 },
                    { label: 'Optimized', value: 1 },
                ]"
            ></RadioGroup>
        </header>
        <section class="px-3 py-4">
            <slot v-bind="{ isOptimized }"></slot>
        </section>
    </article>
</template>

<script>
import ExpandTransition from "./ExpandTransition.vue";

export default {
    components: { ExpandTransition },
    props: { title: { type: String, required: true } },
    expose: ["isOptimized"],
    data() {
        return {
            activeTab: 0,
            isDescriptionOpen: false,
        };
    },
    computed: {
        isOptimized() {
            return this.activeTab !== 0;
        },
    },
};
</script>
