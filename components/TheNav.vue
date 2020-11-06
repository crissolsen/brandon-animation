<template>
    <nav>
        <div class="category-nav">
            <NuxtLink :to="`/modelling`"><h2>Character and Prop Modelling</h2></NuxtLink>
        </div>
        <div class="category-nav">
            <NuxtLink :to="`/scenes`"><h2>Animated Scenes</h2></NuxtLink>
        </div>
        <div class="category-nav">
            <h2>Get Your Animation</h2>
        </div>
    </nav>
</template>


<style scoped>
    nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-bottom: 1em;
    }

    .category-nav {
        border-radius: 0.4em;
        border-bottom: 2px solid gray;
        border-right: 2px solid gray;
        padding: 0.7em;
    }

    .category-nav a {
        text-decoration: none;
        color: black;
    }

    .category-nav a h2 {
        font-weight: 400;
    }

    .category-nav:nth-child(3) {
        background: rgb(0,207,255,0.6);
    }
</style>