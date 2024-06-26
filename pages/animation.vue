<template>
    <div>
        <TheNav />
        <h1 style="text-align: center;font-family: 'Architects Daughter', sans-serif;">Portfolio of Animations</h1>
        <div id="selectTags">
            <div id="main-buttons">
                <div @click="changeFromImgToVid(), updateTagName(tags[0]), pandora = false, initialFetch = true"> General
                </div>
                <div @click="updateTagName(tags[1]), pandora = true, initialFetch = true"> Pandora (Game) </div>
                <div @click="appealStudios = true, pandora = false "> Appeal Studios</div>
                <!-- <div @click= "getFromFetch = 'image', images=true, updateTagName(tags[1]), initialFetch=true, pandora='false'"> Pandora Images </div> -->
            </div>
        </div>
        <div id="pandora-options" v-if="pandora">
            <div @click="changeFromImgToVid(), updateTagName(tags[4])"> Pandora</div>
            <div @click="getFromFetch = 'image', images = true, updateTagName(tags[4])"> Pandora Stills</div>
            <div @click="changeFromImgToVid(), updateTagName(tags[5])"> Athena</div>
            <div @click="changeFromImgToVid(), updateTagName(tags[2])"> Human</div>
            <div @click="changeFromImgToVid(), updateTagName(tags[3])"> Mermaid</div>
        </div>
        <div id="pandora-button">
            <a v-if="pandora" href="https://store.steampowered.com/app/791260/Pandora_Chains_of_Chaos/"
                target="_blank"><img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/791260/header.jpg?t=1606172618"
                    alt="pandora logo" />
                <p>Click to view on Steam</p>
            </a>
        </div>
        <div id="appeal-options" v-if="appealStudios">
            <!-- <div @click= "changeFromImgToVid(), updateTagName(tags[7])"> Appeal Studios</div> -->
            <!-- <div @click= "getFromFetch = 'image', images=true, updateTagName(tags[7])"> Appeal Studios</div> -->
            <div @click="changeFromImgToVid(), updateTagName(tags[7]), initialFetch = true"> Gameplay NPC</div>
            <div @click="changeFromImgToVid(), updateTagName(tags[8]), initialFetch = true"> Mocap Cleanup</div>
            <div @click="changeFromImgToVid(), updateTagName(tags[9]), initialFetch = true"> Outcast a New Beginning</div>

        </div>
        <div v-if="initialFetch" id="animations-container">
            <div v-if="$fetchState.pending" id="loading"></div>
            <h2 v-else-if="$fetchState.error" id="error">An error occurred, please try again</h2>
            <div v-else-if="images" id="image-container">
                <a v-for="img in displayVids.resources" :key="img.public_id" :href="vidURI(img.public_id)"
                    target="_blank"><img :src="vidURI(img.public_id)" alt="stills" loading="lazy" /></a>
            </div>
            <div v-else id="video-container">
                <video v-for="vid in displayVids.resources" :key="vid.public_id" controls preload="none">
                    <source :src="vidURI(vid.public_id)" alt="animated video" />
                </video>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: ["general", "pandora-game", "pandora-npc_human", "pandora-npc_mermaid", "pandora-pandora", "pandora-athena", "Appeal_Studios", "Gameplay-NPC", "Mocap-Cleanup", "Outcast_A_New_Beginning"],
            vidsTag: "general",
            pandora: false,
            appealStudios: false,
            displayVids: [],
            getFromFetch: "video",
            images: false,
            initialFetch: false
        }
    },
    async fetch() {
        this.displayVids = []
        this.displayVids = await fetch(`https://res.cloudinary.com/bbarwise/${this.getFromFetch}/list/${this.vidsTag}.json`)
            .then(res => res.json())
    },
    methods: {
        vidURI(name) {
            return (`https://res.cloudinary.com/bbarwise/${this.getFromFetch}/upload/q_auto,f_auto/v1604995017/${name}`)
        },
        updateTagName(tag) {
            this.vidsTag = tag
            this.$fetch()
        },
        changeFromImgToVid() {
            this.getFromFetch = 'video'
            this.images = false
        }
    }
}
</script>


<style scoped>
#animations-container {
    width: 80%;
    margin: 0 auto
}

#selectTags {
    display: flex;
    justify-content: center;
}

#main-buttons {
    display: flex;
    cursor: pointer;
}

#pandora-options,
#appeal-options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer;
}

#main-buttons div,
#pandora-options div,
#appeal-options div {
    padding: 0.5em;
    background: black;
    color: white;
    font-family: 'Architects Daughter', sans-serif;
    font-size: 1.3em;
    margin: 1em;
    flex-wrap: wrap;
    border-radius: 0.4em;
}

#video-container,
#image-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    width: 90%;
    margin: 1em auto;
    justify-items: center;
}

#video-container video,
#image-container img {
    width: 100%;
    border-radius: 1em;
    outline: none;
    box-shadow: 0.2em 0.2em 0.4em gray;
}

#loading,
#error {
    text-align: center;
}

#loading {
    width: 4em;
    height: 4em;
    background: black;
    animation: load 1s infinite;
    margin: 1em auto;
    border-radius: 50%;
}

#pandora-button {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

#pandora-button p {
    width: 100%;
    text-align: center;
    font-family: 'Architects Daughter', sans-serif;
    color: black !important;
}

@keyframes load {
    0% {
        transform: rotateZ(320deg);
        background: white;
        height: 10em;
        width: 10em;
    }
}
</style>