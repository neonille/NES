<template>
    <header>
        <div class="center">
            <h1>Nick The Nerd</h1>
        </div>
        <nav class="center">
            <button type="button" class="nes-btn is-primary" v-on:click="clicked(0)">Games</button>
            <button type="button" class="nes-btn is-primary" v-on:click="clicked(1)">App</button>
            <button type="button" class="nes-btn is-primary" v-on:click="clicked(2)">Primary</button>
            <button type="button" class="nes-btn is-primary" v-on:click="clicked(3)">Primary</button>
        </nav>
    </header>
    <div class="center">
        <div class="routerView">
            <span>asd</span>
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { createApp, onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import router from './router';

onMounted(() => {
    console.log("aaaa");
})


function clicked(view) {
    router.push("");
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

header {
    padding-top: 25px;
}

.routerView {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: aliceblue;
    padding: 400px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    gap: 20px;
    margin: 55px 55px;
}

header img {
    height: 100px;
    width: auto;
}

body {
    margin: 0;
}

#app {
    background-color: beige;
    height: 100vh;
}
</style>