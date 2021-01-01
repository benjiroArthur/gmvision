<template>
    <div v-if="events.length > 0" id="event-carousel" class="events-wrap owl-Carousel">
        <div v-for="(event, i) in events" :key="`event-list_${i}`" class="row">
            <div class="event-thumb col-md-4">
                <img :src="`${event.image}`" alt="events">
            </div>
            <div class="event-details col-md-8">
                <h3>{{event.title}}</h3>
                <div class="event-info">
                    <p><i class="ti-calendar"></i>Started On: {{event.start_date}}</p>
                    <p><i class="ti-location-pin"></i>{{event.venue}}, {{event.country}}</p>
                </div>
                <p>{{event.description}}</p>
                <a href="#" class="default-btn">Read More</a>
            </div>
        </div><!-- Event-loop -->
    </div>
    <div v-else class="text-center">
        <h3>No Events Available</h3>
    </div>
</template>

<script>
    export default {
        name: "EventsComponent",
        data () {
            return {
                events: [
                    {
                        title: 'Let\'s talk about the poor children education.',
                        start_date: '12:00 PM.',
                        end_date: '',
                        country: 'Dubai',
                        venue: 'Grand Mahal',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries',
                        image: ''
                    },
                    {
                        title: 'Insure clean water to everyone in Africa.',
                        start_date: '12:00 PM.',
                        end_date: '',
                        country: 'Dubai',
                        venue: 'Grand Mahal',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries',
                        image: ''
                    },
                    {
                        title: 'Nepal Earthquake Clean Water Initiative.',
                        start_date: '12:00 PM.',
                        end_date: '',
                        country: 'Dubai',
                        venue: 'Grand Mahal',
                        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries',
                        image: ''
                    }
                ]
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
