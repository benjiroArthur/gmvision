/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import moment from "moment";

require('./bootstrap');

import store from "./store";
import vuetify from "./plugins/vuetify";
window.Vue = require('vue');
Vue.use(vuetify);


import {
    Form,
} from 'vform';

window.Form = Form;
window.Fire = new Vue();

import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('event-component', require('./components/EventsComponent.vue').default);
Vue.component('gallery-component', require('./components/GalleryComponent.vue').default);
Vue.component('dash-component', require('./components/DashboardComponent.vue').default);
Vue.component('about-ceo', require('./components/AboutCeo.vue').default);
Vue.component('donation-course', require('./components/Sections/DonationCourse').default);
Vue.component('images-dialog-component', require('./components/ImagesDialogComponent').default);
Vue.component('apply-now-component', require('./components/NursesSection/ApplyNowComponent').default);



/**
 * Vue Filters
 */
Vue.filter('longDate', function (text) {
    return text ? moment(text).format('Do MMMM, YYYY') : ''
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    vuetify: vuetify,
    store
});
