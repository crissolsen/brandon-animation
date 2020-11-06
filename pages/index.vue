<template>
  <div class="container">
    <TheNav />
    <main>
        <div id="animations-container">
        </div>
        <video id="showcase-reel" controls>
          <source src= "https://res.cloudinary.com/dvwsiufhl/video/upload/q_auto,f_auto/v1604672715/BrandonAnimation/6VpYiEj-EvC_576_jbni0y.mp4">
        </video>
    </main>
    <AboutMe />
  </div>
</template>

<script>
export default {

}
</script>

<style>
  
  
  #showcase-reel {
    width: 100%;
    min-width: 300px;
    border-radius: 1em;
    padding: 1em;
    box-shadow: 0 1em 3em gray;
    animation: slow-fade 2s linear;
    margin: 0 auto;
  }

  #showcase-reel:focus {
    outline: none;
  }

  @keyframes slow-fade {
    0% {opacity: 0}
    100% {opacity: 1}
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  main {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

</style>
