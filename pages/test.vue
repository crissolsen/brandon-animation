<template>
    <div>
        {{ listed }}
    </div>
</template>

<script>
export default {
    async asyncData({ $cloudinary }) {
        const listed = await $cloudinary.video.url()

        return {
            listed
        }
    }
}
</script>