<template>
    <li class="p-2 bg-gray-800 rounded">
        {{ data[id] }}
    </li>
</template>

<script>
import { toRef } from "vue";
import { useDataProperty } from "./store.js";

export default {
    props: { selectedProp: { type: String, required: true }, id: { type: String, required: true } },
    setup(props) {
        return {
            data: useDataProperty(toRef(props, "selectedProp")),
        };
    },
};
</script>
