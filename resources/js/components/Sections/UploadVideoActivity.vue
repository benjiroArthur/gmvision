<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <v-card>
                    <v-form v-model="valid" @submit.prevent="editMode ? updateVideo() : saveVideo()">
                        <v-card-title class="justify-content-center text-center h5" style="border-bottom: 2px solid grey">
                            {{editMode ? 'Edit Video' : 'Add Video'}}
                        </v-card-title>
                        <v-card-text>
                            <v-alert
                                v-show="showAlert"
                                outlined
                                :type="alertType"
                                text
                            >
                                {{alertMessage}}
                            </v-alert>
                            <v-text-field
                                v-model="videoForm.title"
                                name="title"
                                filled id="title"
                                rounded rquired
                                dense
                                placeholder="Title"
                                class="rounded-0"
                            ></v-text-field>
                            <v-text-field
                                v-model="videoForm.url"
                                name="url" rquired
                                filled id="url"
                                rounded
                                dense
                                placeholder="Video Url"
                                class="rounded-0"
                            ></v-text-field>
                            <v-textarea
                                class="rounded-0"
                                filled id="description"
                                rounded v-model="videoForm.description"
                                dense
                                name="description"
                                placeholder="Description"
                            ></v-textarea>
                            <v-card-actions class="text-right">
                                <v-btn @click="cancelFormFill" color="grey" class="text-white">Cancel</v-btn>
                                <v-btn type="submit" color="primary" class="text-white">Save</v-btn>
                            </v-card-actions>
                        </v-card-text>
                    </v-form>
                </v-card>
            </div>
            <div class="col-md-8"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UploadVideoActivity",
        data: () => ({
            editMode: false,
            valid: false,
            alertType: 'success',
            alertMessage: '',
            showAlert: false,
            videoForm: new Form({
                id: null,
                title: '',
                description: '',
                url: ''
            })
        }),
        methods: {
            cancelFormFill(){
                this.videoForm.reset()
            },
            saveVideo(){
                axios.post('/activity-video', this.videoForm).then((response) => {
                    if(response.data.message === 'success'){
                        this.videoForm.reset()
                        this.alertMessage = 'Record Saved Successfully'
                        this.alertType = 'success'
                        this.showAlert = true
                        this.closeAlert()
                    } else {
                        this.alertMessage = response.data.message
                        this.alertType = 'warning'
                        this.showAlert = true
                        this.closeAlert()
                    }
                }).catch((error) => {
                    this.alertMessage = error.response.data.error
                    this.alertType = 'error'
                    this.showAlert = true
                    this.closeAlert()
                })
            },
            updateVideo(){},
            closeAlert(){
                setTimeout(() => {
                    this.alertMessage = ''
                    this.showAlert = false
                }, 4000)
            }
        }
    }
</script>

<style scoped>

</style>
