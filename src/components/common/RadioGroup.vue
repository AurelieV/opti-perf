<template>
    <div role="radiogroup" class="flex mt-4">
        <div
            v-for="option in options"
            :key="option.value"
            @click="$emit('update:modelValue', option.value)"
            class="px-3 py-2 transition-colors cursor-pointer"
            :class="[modelValue === option.value ? 'bg-gray-700' : '', header ? 'rounded-t' : 'rounded']"
            role="radio"
        >
            {{ option.label }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: { type: Array, required: true },
        modelValue: { type: [String, Number], required: true },
        header: { type: Boolean, default: false },
    },
    emits: ["update:modelValue"],
};
</script>
