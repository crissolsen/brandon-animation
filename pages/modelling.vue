<template>
    <div>
        <TheNav />
        <div id= "video-container">
            <video v-for= "modelVid in modelVids" :key= "modelVid.public_id" controls>
                <source :src= "vidURI(modelVid.public_id)" alt="animated video" />
            </video>
        </div>
        <TheFooter />
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const modelVids = await $axios.get("https://res.cloudinary.com/dvwsiufhl/video/list/brand-char.json")
        .then(res => res.data.resources)
        .catch(err => console.error(err))

        return {
            modelVids
        }
    },
    methods: {
        vidURI(name) {
            return ("https://res.cloudinary.com/dvwsiufhl/video/upload/q_auto,f_auto/v1604995017/"+name)
        }
    }
}
</script>

<style scoped>
    #video-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        width: 90%;
        margin: 1em auto;
    }

    #video-container video {
        width: 100%;
        border-radius: 1em;
        outline: none;
        box-shadow: 0.2em 0.2em 0.4em gray;
    }

</style>