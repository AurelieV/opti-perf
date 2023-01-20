<template>
    <li
        class="px-2 transition transform rounded cursor-pointer aspect-square"
        :style="{ backgroundColor: getBackgroundColor() }"
        :class="{ 'rotate-3': isSelected }"
    ></li>
</template>

<script>
import { useLazyRef } from "./useLazyRef";
import { useVisualRerender } from "/src/components/common/useVisualRerender.js";

export default {
    props: { id: { type: Number, required: true } },
    setup(props) {
        const { getBackgroundColor } = useVisualRerender(true);
        const isSelected = useLazyRef(props.id);

        return { isSelected, getBackgroundColor };
    },
};
</script>
