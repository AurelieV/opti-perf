<template>
    <div
        ref="el"
        v-bind="$attrs"
        class="box-border h-[100px] grid grid-cols-2 overflow-hidden bg-gray-700 rounded"
        :class="{ border: isSelected }"
    >
        <div v-for="i in 500" :key="i" class="flex items-center justify-center p-3">{{ i }}</div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    inheritAttrs: false,
    props: { isSelected: { type: Boolean, default: false } },
    emits: ["update:positionStyle"],
    setup() {
        return {
            positionStyle: ref({}),
        };
    },
    watch: {
        isSelected(value) {
            if (value) {
                requestAnimationFrame(() => this.calcMenuPosition());
            }
        },
        positionStyle() {
            this.$emit("update:positionStyle", this.positionStyle);
        },
    },
    methods: {
        calcMenuPosition() {
            if (!this.isSelected) return;
            const { height, width } = this.$refs.el.getBoundingClientRect();
            this.positionStyle = {
                height: `${height}px`,
                width: `${width}px`,
            };
            requestAnimationFrame(() => this.calcMenuPosition());
        },
    },
};
</script>
