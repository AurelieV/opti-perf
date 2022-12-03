<template>
    <div role="radiogroup" class="flex mt-4 space-x-4">
        <div
            v-for="option in options"
            :key="option.value"
            @click="$emit('update:modelValue', option.value)"
            class="p-2 transition-colors rounded cursor-pointer"
            :class="modelValue === option.value ? ['bg-gray-700'] : []"
            role="radio"
        >
            {{ option.label }}
        </div>
    </div>
</template>

<script>
export default {
    props: { options: { type: Array, required: true }, modelValue: { type: [String, Number], required: true } },
    emits: ["update:modelValue"],
};
</script>
