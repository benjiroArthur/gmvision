window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');
    window.Popper = require('popper.js').default;
    require('bootstrap');

    // import('./vendor/imagesloaded.pkgd.min')
    // import('./vendor/jquery.ajaxchimp.min')
    // import('./vendor/jquery.counterup.min')
    // import('./vendor/jquery.isotope.v3.0.2')
    import('./vendor/jquery.nivo.slider.pack')
    import('./vendor/jquery.slicknav.min')
    // import('./vendor/jquery.waypoints.v2.0.3.min')
    import('./vendor/letteranimation.min')
    // import('./vendor/modernizr-2.8.3-respond-1.4.2.min')
    import('./vendor/owl.carousel.min')
    import('./vendor/smooth-scroll.min')
    import('./vendor/tether.min')
    import('./vendor/venobox.min')
    import('./vendor/wow.min')

    import('./main.js');
    // import('./contact.js');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

