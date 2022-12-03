<template>
    <div class="fixed top-0 left-0 right-0 flex items-center h-12 p-2 text-xl text-white bg-gray-800 shadow-md">
        <router-link :to="{ name: 'home' }" class="flex items-center"
            ><Icon inline icon="mdi:home" class="mr-2 -mb-[2px]" />
            <div class="">Demo</div></router-link
        >
    </div>
    <main class="px-2 md:px-4 pt-12 mt-2 max-w-[1200px] w-full mx-auto">
        <router-view></router-view>
    </main>
</template>
