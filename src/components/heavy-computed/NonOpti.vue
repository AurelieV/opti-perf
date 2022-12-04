<template>
    <div>Object {{ id }} have property {{ prop }} equal to {{ value }}</div>
</template>

<script>
import { onUpdated, toRef } from 'vue'
import { useConfigurationByProp } from './store.js'
import benchmark from '../../uses/benchmark'

export default {
    props: { id: { type: String }, prop: { type: String } },

    setup(props) {
        const { setEnd } = benchmark()
        onUpdated(() => setEnd())

        return {
            value: useConfigurationByProp(props.id, toRef(props, 'prop')),
        }
    },
}
</script>
