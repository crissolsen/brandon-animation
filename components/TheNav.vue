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
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap?&family=Exo&display=swap');
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
        font-family: 'Rock Salt', sans-serif;
        text-align: center;
  }

    .category-nav {
        border-radius: 0.4em;
        border-bottom: 2px solid gray;
        justify-self: center;
        align-self: center;
        padding: 0.2em;
        font-family: 'Exo', sans-serif;
        margin-top: 0.5em;
    }

    .category-nav a {
        text-decoration: none;
        color: black;
    }

    .category-nav a h2 {
        font-weight: 400;
        font-size: 1.3em;
    }

    .category-nav:nth-child(4) {
        border: 2px solid  rgb(0,207,255,0.6);
    }
</style>