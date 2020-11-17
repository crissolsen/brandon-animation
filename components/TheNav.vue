<template>
    <nav>
        <NuxtLink :to= "`/`" id="barwise-heading"><h1 >Brandon Barwise Animation</h1></NuxtLink>
        <div class="category-nav">
            <NuxtLink :to="`/animation`"><h2>Portfolio of Work</h2></NuxtLink>
        </div>
        <div class="category-nav">
            <NuxtLink :to="`/contact`"><h2>Get Your Animation</h2></NuxtLink>
        </div>
    </nav>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap?&family=Exo&display=swap');    
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
        margin-bottom: 1em;
        font-family: 'Architects Daughter', sans-serif;
        text-align: center;
        color: black;
        text-decoration: none;
  }

  #barwise-heading h1 {
      border-radius: 0.5em;
      padding: 0.7em;
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
        border-bottom: 2px solid  rgb(0,207,255,0.6);
    }
</style>