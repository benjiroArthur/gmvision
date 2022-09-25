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
                    v-model="dashboardTab"
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

        <v-tabs-items v-model="dashboardTab">
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
                    <NurseRegistrationComponent :registrationRoute="registrationRoute" :csrfToken="csrfToken"></NurseRegistrationComponent>
                </v-card>
            </v-tab-item>
            <v-tab-item
            >
                <v-card flat>
                    <div class="row pt-2">
                        <div class="col-md-12 justify-content-end d-flex py-2">
                            <v-btn @click="getStatistics" color="primary">Update Records</v-btn>
                        </div>
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
    import UploadVideoActivity from './Sections/UploadVideoActivity'
    import NurseRegistrationComponent from './Admin/NurseRegistrationComponent'
    export default {
        name: "DashboardComponent",
        props: ['registrationRoute', 'csrfToken'],
        components: {UploadVideoActivity, NurseRegistrationComponent},
        data () {
            return {
                tab: null,
                items: [
                    'Add Videos', 'Nurse Registration', 'Statistics'
                ],
                dailyStatistics: [],
                monthlyStatistics: [],
                trials: 0,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        },
        computed: {
            dashboardTab: {
                get(){
                    return this.$store.getters.dashboardTab
                },
                set(val){
                    this.$store.dispatch('getDashboardTab', val)
                }
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
