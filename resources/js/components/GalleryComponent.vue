<template>
    <div>
        <stack
            :column-min-width="300"
            :gutter-width="15"
            :gutter-height="15"
            monitor-images-loaded
        >
            <stack-item
                v-for="(image, i) in images"
                :key="i"
                style="transition: transform 300ms"
            >
                <img :src="image.src" :alt="image.alt_description" />
            </stack-item>
        </stack>
    </div>
</template>

<script>
    import { Stack, StackItem } from "vue-stack-grid";
    export default {
        name: "GalleryComponent",
        components: {
            Stack,
            StackItem
        },
        data () {
            return {
                images: []
            }
        }
    }
</script>

<style scoped>

</style>
