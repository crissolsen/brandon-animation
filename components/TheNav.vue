<template>
    <nav>
        <NuxtLink :to= "`/`" id="barwise-heading"><h1 >Brandon Barwise Animation</h1></NuxtLink>
        <div class="category-nav">
            <NuxtLink :to="`/animation`"><h2>Portfolio</h2></NuxtLink>
        </div>
        <div class="category-nav">
            <NuxtLink :to="`/contact`"><h2>Contact</h2></NuxtLink>
        </div>
    </nav>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap?&family=Exo&display=swap');    
    nav {
        width: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 1em auto;
        gap: 1em;

    }

    nav:hover {
        bottom: 3px;
    }

    #barwise-heading {
        font-size: 2em;
        margin-bottom: 0.2em;
        font-family: 'Architects Daughter', sans-serif;
        color: black;
        text-decoration: none;
        flex-grow: 1;
  }

  @media screen and (max-width: 600px) {
    #barwise-heading {
        font-size: 1.5em;
        text-align: center;
    }
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
        position: relative;
        transition: all 0.8s ease;
        bottom: 0;
    }

    .category-nav:hover {
        border-bottom: 2px solid  rgb(0,207,255,0.6);
        bottom: 5px;
    }

    .category-nav a {
        text-decoration: none;
        color: black;
    }

    .category-nav a h2 {
        font-weight: 400;
        font-size: 1.3em;
    }

    .category-nav:nth-child(3) {
        border-bottom: 2px solid  rgb(0,207,255,0.6);
    }
</style>