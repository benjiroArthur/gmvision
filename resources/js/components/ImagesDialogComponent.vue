<template>
    <div class="text-center">
        <v-btn
            v-if="imageList.length > 0"
            color="primary"
            dark
            @click="openDialog"
        >
            View Images
        </v-btn>
        <v-dialog
            v-model="dialog"
            width="700"
        >
            <v-card class="py-2">
                <v-card-text>
                    <v-row >
                        <v-col
                            v-for="(image, i) in imageList"
                            :key="i+'-soap-image'"
                            class="d-flex child-flex"
                            cols="4"
                        >
                            <v-img
                                :src="image"
                                aspect-ratio="1"
                                class="grey lighten-2"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                        class="fill-height ma-0"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                        ></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="closeDialog"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "ImagesDialogComponent",
    props: ['folderName'],
    data(){
        return{
            imageList: [],
            trials: 0,
            dialog: false
        }
    },
    methods: {
        getImageList(){
            //"img/soap_making/all-images"
            this.trials++
            axios.post('/files/get-images', {folderName: this.folderName})
                .then((response) => {
                    this.imageList = response.data
                })
                .catch((error) => {
                    if(this.trials <= 5){
                        this.getImageList()
                    }
                })
        },
        openDialog(){
            this.dialog = true
        },
        closeDialog(){
            this.dialog = false
        }
    },
    created() {
        this.getImageList()
    }
}
</script>

<style scoped>

</style>
