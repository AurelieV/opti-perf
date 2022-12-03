<template>
    <div>Object {{ id }} have property {{ prop }} equal to {{ value }}</div>
</template>

<script>
import { toRef } from "vue";
import { useConfigurationByProp } from "./store.js";

export default {
    props: { id: { type: String }, prop: { type: String } },
    setup(props) {
        return {
            value: useConfigurationByProp(props.id, toRef(props, "prop")),
        };
    },
};
</script>
