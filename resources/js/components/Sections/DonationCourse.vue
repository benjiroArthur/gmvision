<template>
    <div class="container">
        <ul class="row counters">
            <li class="col-md-3 col-sm-6 sm-padding">
                <div class="counter-content">
                    <i class="ti-money"></i>
                    <h3 class="counter">GH¢{{donationInfo.donationAmount || '0.00'}}</h3>
                    <h4 class="text-white">Money Donated</h4>
                </div>
            </li>
            <li class="col-md-3 col-sm-6 sm-padding">
                <div class="counter-content">
                    <i class="ti-face-smile"></i>
                    <h3 class="counter">285</h3>
                    <h4 class="text-white">Volunteer Around The World</h4>
                </div>
            </li>
            <li class="col-md-3 col-sm-6 sm-padding">
                <div class="counter-content">
                    <i class="ti-user"></i>
                    <h3 class="counter">50177</h3>
                    <h4 class="text-white">People Impacted</h4>
                </div>
            </li>
            <li class="col-md-3 col-sm-6 sm-padding">
                <div class="counter-content">
                    <i class="ti-comments"></i>
                    <h3 class="counter">{{donationInfo.donors || '0'}}</h3>
                    <h4 class="text-white">Donors Around The World</h4>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DonationCourse",
        props: ['backgroundImageUrl'],
        data: () => ({
            donationInfo: {}
        }),
        methods: {
            getDonationInfo(){
                axios.get('/payment/payment-info').then((response) => {
                    this.donationInfo = response.data
                })
            }
        },
        created() {
            this.getDonationInfo()
        }
    }
</script>

<style scoped>

</style>
