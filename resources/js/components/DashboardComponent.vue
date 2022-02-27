<template>
<div>
    <v-card>
    <v-toolbar>
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
            <v-tab-item
            >
                <v-card flat>
                    <div class="row">
                        <div class="col-md-12 py-3">
                            <v-card-title class="text-center justify-content-center">
                                Daily Visitors Statistics
                            </v-card-title>
                            <v-card-text>
                                <area-chart height="500px" :data="dailyStatistics" xtitle="Date" ytitle="Number Of Visitors"></area-chart>
                            </v-card-text>
                        </div>
                        <div class="col-md-12 py-3">
                            <v-card-title class="text-center justify-content-center">
                                Monthly Visitors Statistics
                            </v-card-title>
                            <v-card-text>
                                <area-chart height="500px" :data="monthlyStatistics" xtitle="Date" ytitle="Number Of Visitors"></area-chart>
                            </v-card-text>
                        </div>
                    </div>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</div>
</template>

<script>
    export default {
        name: "DashboardComponent",
        components: {UploadVideoActivity},
        data () {
            return {
                tab: null,
                items: [
                    'Add Videos', 'Gallery', 'Statistics'
                ],
                dailyStatistics: [],
                monthlyStatistics: [],
                trials: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        methods: {
            getStatistics(){
                axios.get('/statistics')
                .then((response) => {
                    let dailyRecords = response.data.daily || []
                    let monthlyRecords = response.data.monthly || []
                    dailyRecords.forEach((record) => {
                        let rec = []
                        rec.push(record.date)
                        rec.push(record.count)
                        this.dailyStatistics.push(rec)
                    })
                    monthlyRecords.forEach((record) => {
                        let rec = []
                        rec.push(record.date)
                        rec.push(record.count)
                        this.monthlyStatistics.push(rec)
                    })
                })
                .catch((error) => {
                    this.trials++
                    if(this.trials < 5){
                        this.getStatistics()
                    }
                })
            }
        },
        mounted() {
        },
        created() {
            this.getStatistics()
        }
    }
</script>

<style scoped>

</style>
