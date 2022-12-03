<template>
    <article>
        <header>
            <h1 class="ml-2 text-lg">{{ title }}</h1>
            <RadioGroup
                v-model="activeTab"
                :options="[
                    { label: 'Non optimized', value: 0 },
                    { label: 'Optimized', value: 1 },
                ]"
            ></RadioGroup>
        </header>
        <section class="mt-4">
            <slot v-bind="{ isOptimized }"></slot>
        </section>
    </article>
</template>

<script>
export default {
    props: { title: { type: String, required: true } },
    expose: ["isOptimized"],
    data() {
        return {
            activeTab: 0,
        };
    },
    computed: {
        isOptimized() {
            return this.activeTab !== 0;
        },
    },
};
</script>
