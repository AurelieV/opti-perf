<template>
    <div>Object {{ id }} have property {{ prop }} equal to {{ value }}</div>
</template>

<script>
import { toRef } from "vue";
import { useConfigurationByPropOpti } from "./store.js";

export default {
    props: { id: { type: String }, prop: { type: String } },
    setup(props) {
        return {
            value: useConfigurationByPropOpti(props.id, toRef(props, "prop")),
        };
    },
};
</script>
