<template>
    <h1 class="text-xl">Welcome to this demo application</h1>
    <nav class="mt-8" v-once>
        <ul class="grid grid-cols-3 gap-3">
            <li v-for="(item, index) in items" :key="index" class="bg-gray-800 rounded shadow-md">
                <router-link :to="item.to" class="flex flex-col card p-4">
                    <h2 class="text-lg font-bold text-transparent">{{ item.title }}</h2>
                    <p class="mt-2">{{ item.description }}</p>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    setup() {
        return {
            items: [
                {
                    title: "Share heavy computed",
                    to: "heavy-computed",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit tincidunt ligula. Proin consectetur tortor tincidunt risus suscipit ornare. Proin nec porttitor sapien. Suspendisse potenti. Morbi feugiat hendrerit lorem, id cursus augue feugiat nec.",
                },
            ],
        };
    },
};
</script>

<style scoped lang="postcss">
.card {
    background-image: linear-gradient(to right, white, white 50%, theme(colors.orange.500) 50%);
    background-size: 200% 100%;
    background-position: 0;
    background-clip: text;
    transition: all 0.3s ease-in-out;
}
.card:hover {
    background-position: -100%;
}
</style>
