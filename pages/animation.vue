<template>
    <div>
        <TheNav />
        <h1 style="text-align: center;font-family: 'Architects Daughter', sans-serif;">Portfolio of Animations</h1>
        <div id="selectTags">
            <div id="main-buttons">
                <div @click= "updateTagName(tags[0]), pandora=false, initialFetch=true"> General</div>
                <div @click= "updateTagName(tags[1]), pandora=true, initialFetch=true"> Pandora (Game) </div>
                <!-- <div @click= "getFromFetch = 'image', images=true, updateTagName(tags[1]), initialFetch=true, pandora='false'"> Pandora Images </div> -->
            </div>
        </div>
            <div id="pandora-options" v-if= "pandora">
                <div v-if="pandora" @click= "changeFromImgToVid(), updateTagName(tags[4])"> Pandora</div>
                <div v-if="pandora" @click= "getFromFetch = 'image', images=true, updateTagName(tags[4])"> Pandora Images</div>
                <div v-if="pandora" @click= "changeFromImgToVid(), updateTagName(tags[5])"> Athena</div>
                <div v-if="pandora" @click= "changeFromImgToVid(), updateTagName(tags[2])"> Human</div>
                <div v-if="pandora" @click= "changeFromImgToVid(), updateTagName(tags[3])"> Mermaid</div>
            </div>
        <div v-if= "initialFetch">
            <div v-if="$fetchState.pending" id="loading"></div>
            <h2 v-else-if="$fetchState.error" id="error">An error occurred, please try again</h2>
            <div v-else-if= "images" id="image-container">
                <a  v-for= "img in displayVids.resources" :key= "img.public_id" :href="vidURI(img.public_id)" target="_blank"><img :src= "vidURI(img.public_id)" /></a>
            </div>
            <div v-else id= "video-container">
                <video v-for= "vid in displayVids.resources" :key= "vid.public_id" controls>
                    <source :src= "vidURI(vid.public_id)" alt="animated video" />
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
            tags: [ "general", "pandora-game", "pandora-npc_human", "pandora-npc_mermaid", "pandora-pandora", "pandora-athena"],
            vidsTag: "general",
            pandora: false,
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
    #selectTags {
        display: flex;
        justify-content: center;
    }

    #main-buttons {
        display: flex;
        cursor: pointer;
    }

    #pandora-options {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        cursor: pointer;
    }

    #main-buttons div, #pandora-options div {
        padding: 0.5em;
        background: black;
        color: white;
        font-family: 'Architects Daughter', sans-serif;
        font-size: 1.3em;
        margin: 1em;
        flex-wrap: wrap;
        border-radius: 0.4em;
    }

    #video-container, #image-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        width: 90%;
        margin: 1em auto;
        justify-items: center;
    }

    #video-container video, #image-container img {
        width: 100%;
        border-radius: 1em;
        outline: none;
        box-shadow: 0.2em 0.2em 0.4em gray;
    }

    #loading, #error {
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

    @keyframes load {
        0% {transform: rotateZ(320deg); background: white; height: 10em; width: 10em;}
    }
</style>