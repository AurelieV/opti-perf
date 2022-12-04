import { ref } from 'vue'

const start = ref(0)
const elapsed = ref(0)

export default function () {
    function setStart() {
        start.value = new Date().getTime()
    }

    function setEnd() {
        elapsed.value = new Date().getTime() - start.value
    }

    const getTimeElapsed = elapsed

    return {
        setStart,
        setEnd,
        getTimeElapsed,
    }
}
