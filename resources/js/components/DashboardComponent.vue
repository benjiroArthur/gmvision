<template>
<div class="pt-15">
    <v-card min-height="400">
        <v-toolbar
            color="primary"
            dark
            flat
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <template v-slot:extension>
                <v-tabs
                    v-model="tab"
                    align-with-title
                >
                    <v-tabs-slider color="white"></v-tabs-slider>

                    <v-tab
                        v-for="item in items"
                        :key="item"
                    >
                        {{ item }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
            <v-tab-item
            >
                <v-card flat>
                    <v-card-text >
                        <UploadVideoActivity></UploadVideoActivity>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item
            >
                <v-card flat>
                    <v-card-text>Gallery</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</div>
</template>

<script>
    import UploadVideoActivity from './Sections/UploadVideoActivity'
    export default {
        name: "DashboardComponent",
        components: {UploadVideoActivity},
        data () {
            return {
                tab: null,
                items: [
                    'Add Videos', 'Gallery'
                ],
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
