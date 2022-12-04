<template>
    <div>Object {{ id }} have property {{ prop }} equal to {{ value }}</div>
</template>

<script>
import { onUpdated, toRef } from 'vue'
import { useConfigurationByProp } from './store.js'

export default {
    props: { id: { type: String }, prop: { type: String } },
    emits: ['updated'],
    setup(props, ctx) {
        onUpdated(() => ctx.emit('updated', new Date()))

        return {
            value: useConfigurationByProp(props.id, toRef(props, 'prop')),
        }
    },
}
</script>
