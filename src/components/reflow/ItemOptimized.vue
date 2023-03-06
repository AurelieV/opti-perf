<template>
    <div
        ref="el"
        class="box-border h-[100px] grid grid-cols-2 overflow-hidden bg-gray-700 rounded"
        :class="{ border: isSelected }"
    >
        <div v-for="i in 50" :key="i" class="flex items-center justify-center p-3">{{ i }}</div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
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
                if (this.observer) {
                    this.observer.disconnect();
                }
                this.observer = new ResizeObserver((entries) => {
                    for (const entry of entries) {
                        const rect = entry.contentRect;
                        this.positionStyle = {
                            height: `${rect.height}px`,
                            width: `${rect.width}px`,
                        };
                    }
                });
                this.observer.observe(this.$refs.el);
            } else {
                if (this.observer) {
                    this.observer.disconnect();
                }
                this.observer = null;
            }
        },
        positionStyle() {
            this.$emit("update:positionStyle", this.positionStyle);
        },
    },
};
</script>
