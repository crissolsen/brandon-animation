<template>
    <nav>
        <h1 id="barwise-heading">Brandon Barwise Animation</h1>
        <div class="category-nav">
            <NuxtLink :to="`/modelling`"><h2>Character and Prop Modelling</h2></NuxtLink>
        </div>
        <div class="category-nav">
            <NuxtLink :to="`/scenes`"><h2>Animated Scenes</h2></NuxtLink>
        </div>
        <div class="category-nav">
            <NuxtLink :to="`/contact`"><h2>Get Your Animation</h2></NuxtLink>
        </div>
    </nav>
</template>


<style scoped>
    nav {
        margin-top: 1em;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-bottom: 1em;
    }

    #barwise-heading {
        font-size: 2em;
    }

    .category-nav {
        border-radius: 0.4em;
        border-bottom: 2px solid gray;
        padding: 0.7em;
        justify-self: center;
    }

    .category-nav a {
        text-decoration: none;
        color: black;
    }

    .category-nav a h2 {
        font-weight: 400;
    }

    .category-nav:nth-child(4) {
        background: rgb(0,207,255,0.6);
    }
</style>