<template>
  <div class="container">
    <h1 id="barwise-heading">Brandon Barwise Animation</h1>
    <TheNav />
    <main>
        <div id="animations-container">
        </div>
        <video id="showcase-reel" controls>
          <source src= "https://adobeprod-a.akamaihd.net/6VpYiEj-EvC/rend/6VpYiEj-EvC_576.mp4?hdnea=st%3D1604647234%7Eexp%3D1604906434%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F6VpYiEj-EvC%2Frend%2F*%21%2Fi%2F6VpYiEj-EvC%2Frend%2F*%21%2F6VpYiEj-EvC%2Frend%2F*%21%2F6VpYiEj-EvC%2Fimage%2F*%7Ehmac%3D52b7a39624b9905096a33736f58a569b0ec8771e1cdc7d44e53d735b8a43dce9" type="video/mp4">
        </video>
        <!-- <video controls>
          <source src="https://adobeprod-a.akamaihd.net/MoETUQDuZcy/rend/MoETUQDuZcy_576.mp4?hdnea=st%3D1604647707%7Eexp%3D1604906907%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FMoETUQDuZcy%2Frend%2F*%21%2Fi%2FMoETUQDuZcy%2Frend%2F*%21%2FMoETUQDuZcy%2Frend%2F*%21%2FMoETUQDuZcy%2Fimage%2F*%7Ehmac%3D7ca652147bafac185952375618bd43e7d8683487886c3bd4e29930c55e45f6e4" type="video/mp4">
        </video> -->
    </main>
    <AboutMe />
  </div>
</template>

<script>
export default {

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap');
  
  #showcase-reel {
    width: 80%;
    border-radius: 1em;
    padding: 1em;
    box-shadow: 0 1em 3em gray;
    animation: slow-fade 2s linear;
    margin: 0 auto;
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

  #barwise-heading {
    font-family: 'Rock Salt', sans-serif;
    text-align: center;
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
