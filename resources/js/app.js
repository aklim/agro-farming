/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Required by theme
require('isotope-layout');
require('jquery-appear-original');
require('jquery-countto');
require('owl.carousel');
require('./lib/device');
require('./lib/jarallax.min');
require('./lib/jquery.easypiechart');
require('./lib/jquery.fs.boxer.min');
require('./lib/vegas.2.3');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });

let _fixed_menu;

(function ($) {

    /*-- Strict mode enabled --*/
    'use strict';

    let nHtmlNode = document.documentElement,
        jWindow = $(window),
        animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    /* fixed menu
     ================================================== */
    _fixed_menu = function _fixed_menu() {
        let nTopBar = document.getElementById('top-bar'),
            jTopBar = $(nTopBar),
            iTop = jTopBar.next('header').innerHeight() - 80,
            bHeaderSticky = false;

        window.onscroll = function () {
            if ((window.pageYOffset || document.documentElement.scrollTop) >= iTop) {

                if (!bHeaderSticky) {
                    jTopBar
                        .off(animationEnd)
                        .addClass('fixed in')
                        .one(animationEnd, function () {
                            jTopBar.removeClass('in');
                        });

                    bHeaderSticky = !bHeaderSticky;
                }

            }
            else if (bHeaderSticky) {

                jTopBar
                    .addClass('out')
                    .off(animationEnd)
                    .one(animationEnd, function () {
                        jTopBar.removeClass('fixed out');
                    });

                bHeaderSticky = !bHeaderSticky;
            }
        };
    };

    /* main menu
     ================================================== */
    function _main_menu() {
        let nTopBar = document.getElementById('top-bar'),
            nMenuToggler = document.getElementById('top-bar__navigation-toggler'),
            nNav = document.getElementById('top-bar__navigation'),

            jTopBar = $(nTopBar),
            jMenuToggler = $(nMenuToggler),
            jNav = $(nNav),

            jLink = jNav.find('li a'),
            jSubMenu = jNav.find('.submenu'),
            bMenuOpen = false,
            TopBarHeight = 0;

        if (jSubMenu.length) {
            jSubMenu.parents('li').addClass('has-children');
        }

        TopBarHeight = jMenuToggler.is(':visible') ? 70 : 80;

        jLink.on('touchend click', function () {

            let $this = $(this),
                $parent = $this.parent();

            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top - TopBarHeight
                    }, 1000);
                }

                if (jMenuToggler.is(':visible')) {
                    jTopBar.removeClass('expanded');
                    jMenuToggler.removeClass('active');
                }
                return false;
            }

            if (jMenuToggler.is(':visible') && $this.next(jSubMenu).length) {
                if ($this.next().is(':visible')) {
                    $parent.removeClass('drop_active');
                    $this.next().slideUp('fast');

                }
                else {

                    $this.closest('ul').find('li').removeClass('drop_active');
                    $this.closest('ul').find('.submenu').slideUp('fast');
                    $parent.addClass('drop_active');
                    $this.next().slideDown('fast');
                }
                return false;
            }
        });

        jMenuToggler.on('touchend click', function (e) {
            e.preventDefault();

            let $this = $(this);

            if (bMenuOpen) {
                $this.removeClass('active');
                jTopBar.removeClass('expanded');
                nHtmlNode.style.overflow = '';
                bMenuOpen = !bMenuOpen;
            }
            else {
                $this.addClass('active');
                jTopBar.addClass('expanded');
                nHtmlNode.style.overflow = 'hidden';
                bMenuOpen = !bMenuOpen;
            }

            return false;
        });

        jWindow.on('resize', debounce(function () {

            if (window.innerWidth > 767) {
                jTopBar.removeClass('expanded');
                jMenuToggler.removeClass('active');
                jSubMenu.removeAttr('style');
                nHtmlNode.style.overflow = '';
                bMenuOpen = false;
            }
        }, 100));
    }

    /* owl carousel
     ================================================== */
    function _owl_carousel() {
        let fSlider = $('.feedbacks--slider');

        if (fSlider.length > 0) {
            // noinspection JSUnresolvedFunction
            fSlider.children('.owl-carousel').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
                autoHeight: true,
                smartSpeed: 1000,
                margin: 30,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            });
        }
    }

    /* isotope sorting
     ================================================== */
    function _isotope_sorting() {
        let nOptionSets = document.getElementById('gallery-set'),
            jOptionSets = $(nOptionSets);

        if (jOptionSets.length > 0) {
            let jIsoContainer = $('.js-isotope'),
                jOptionLinks = jOptionSets.find('a');

            jOptionLinks.on('click', function () {
                let $this = $(this),
                    currentOption = $this.data('cat');

                jOptionSets.find('.selected').removeClass('selected');
                $this.addClass('selected');

                if (currentOption !== '*') {
                    currentOption = '.' + currentOption;
                }

                // noinspection JSUnresolvedFunction
                jIsoContainer.isotope({filter: currentOption});

                return false;
            });
        }
    }

    /* chart
     ================================================== */
    function _chart() {
        $('.skill__item').appear(function () {
            let _self = $(this);

            setTimeout(function () {
                _chartInit(_self);
            }, 200);
        });

        function _chartInit(el) {
            $('.js-chart', el).each(function () {
                // noinspection JSUnresolvedFunction,JSUnusedGlobalSymbols
                $(this).easyPieChart({
                    easing: 'easeOutElastic',
                    delay: 3000,
                    barColor: '#369670',
                    trackColor: '',
                    scaleColor: false,
                    lineWidth: 12,
                    trackWidth: 12,
                    size: 175,
                    lineCap: 'butt',
                    onStep: function (from, to, percent) {
                        this.el.children[0].innerHTML = Math.round(percent);
                    }
                });
            });
        }
    }

    /* counters
     ================================================== */
    function _count() {
        $('.counter__item').appear(function () {
            let _self = $(this);

            setTimeout(function () {
                _countInit(_self);
            }, 200);
        });

        function _countInit(el) {
            $('.js-count', el).each(function () {
                if (!$(this).hasClass('animate')) {
                    // noinspection JSUnresolvedFunction,JSUnusedGlobalSymbols
                    $(this).countTo({
                        from: 0,
                        speed: 2000,
                        refreshInterval: 100,
                        onComplete: function () {
                            $(this).addClass('animate');
                        }
                    });
                }
            });
        }
    }

    /* google map
     ================================================== */
    function _g_map() {
        let maps = $('.g_map');

        if (maps.length > 0) {
            let apiKey = maps.attr('data-api-key'),
                apiURL;

            if (apiKey) {
                apiURL = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey;
            }
            else {
                apiURL = 'https://maps.google.com/maps/api/js?sensor=false';
            }

            $.getScript(apiURL, function () {

                maps.each(function () {
                    // noinspection JSUnresolvedVariable,JSUnresolvedFunction
                    const current_map = $(this),
                        latLng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude')),
                        point = current_map.attr('data-marker'),

                        myOptions = {
                            zoom: 14,
                            center: latLng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false,
                            scrollWheel: false,
                            draggable: true,
                            panControl: false,
                            zoomControl: false,
                            disableDefaultUI: true
                        },

                        stylez = [
                            {
                                featureType: "all",
                                elementType: "all",
                                stylers: [
                                    {saturation: -100} // <-- THIS
                                ]
                            }
                        ];

                    // noinspection JSUnresolvedVariable
                    let map = new google.maps.Map(current_map[0], myOptions);

                    // noinspection JSUnresolvedVariable,JSUnresolvedFunction
                    let mapType = new google.maps.StyledMapType(stylez, {name: "Grayscale"});
                    // noinspection JSUnresolvedVariable
                    map.mapTypes.set('Grayscale', mapType);
                    // noinspection JSUnresolvedFunction
                    map.setMapTypeId('Grayscale');

                    // noinspection JSUnresolvedVariable,JSUnresolvedFunction,JSUnusedLocalSymbols
                    const marker = new google.maps.Marker({
                        map: map,
                        icon: {
                            size: new google.maps.Size(59, 69),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(0, 69),
                            url: point
                        },
                        position: latLng
                    });

                    // noinspection JSUnresolvedVariable,JSUnresolvedFunction
                    google.maps.event.addDomListener(window, "resize", function () {
                        // noinspection JSUnresolvedFunction
                        let center = map.getCenter();
                        // noinspection JSUnresolvedVariable
                        google.maps.event.trigger(map, "resize");
                        // noinspection JSUnresolvedFunction
                        map.setCenter(center);
                    });
                });
            });
        }
    }

    /* parallax
     ================================================== */
    function _parallax() {
        const nParallax = document.querySelectorAll('.jarallax');

        // noinspection JSUnresolvedVariable,JSUnresolvedFunction
        if (device.desktop() && nParallax.length > 0) {
            // noinspection JSUnresolvedFunction
            jarallax(nParallax, {
                type: 'scroll', // scroll, scale, opacity, scroll-opacity, scale-opacity
                zIndex: -20
            });
        }
    }

    /* scroll to top
     ================================================== */
    function _scrollTop() {
        let nBtnToTopWrap = document.getElementById('btn-to-top-wrap'),
            jBtnToTopWrap = $(nBtnToTopWrap);

        if (jBtnToTopWrap.length > 0) {
            let nBtnToTop = document.getElementById('btn-to-top'),
                jBtnToTop = $(nBtnToTop),
                iOffset = jBtnToTop.data('visible-offset');

            jBtnToTop.on('click', function (e) {
                e.preventDefault();

                $('body,html').stop().animate({scrollTop: 0}, 1500);

                return false;
            });

            jWindow.on('scroll', throttle(function () {

                if (jWindow.scrollTop() > iOffset) {
                    if (jBtnToTopWrap.is(":hidden")) {
                        jBtnToTopWrap.fadeIn();
                    }
                }
                else {
                    if (jBtnToTopWrap.is(":visible")) {
                        jBtnToTopWrap.fadeOut();
                    }
                }
            }, 400)).scroll();
        }
    }

    /* boxer gall
     ================================================== */
    function _gall() {
        let galleryElement = $("a[data-gallery]");

        if (galleryElement.length > 0) {
            // noinspection JSUnresolvedFunction
            galleryElement.boxer({
                fixed: true,
                videoWidth: 1000
            });
        }
    }

    /* contact form
     ================================================== */
    function _contactForm() {
        let jForm = $('.js-contact-form');

        if (jForm.length > 0) {
            jForm.each(function (i, form) {
                let $this = $(form);

                $this.on('submit', function () {
                    let $this = $(this),
                        str = $this.serialize(),
                        note = $this.find('.form__note');

                    $.ajax({
                        type: "POST",
                        url: "send_mail/contact_process.php",
                        data: str,
                        success: function () {

                            let result = '<span style="color: green"><br/>Your message has been sent. Thank you!</span>';

                            note.html(result);

                            $this.get(0).reset();

                            setTimeout(function () { note.html('') }, 3000);
                        },
                        error: function (err) {
                            // noinspection JSUnresolvedVariable
                            let result = '<span style="color: red"><br/>Your message not sent! Error: "' + err.responseJSON.message + '"</span>';

                            note.html(result);
                        },
                        complete: function () {
                        }
                    });

                    return false;
                });
            });
        }
    }

    $(document).ready(function () {

        /* fixed menu
         ================================================== */
        _fixed_menu();

        /* main menu
         ================================================== */
        _main_menu();

        /* owl carousel
         ================================================== */
        _owl_carousel();

        /* isotopeSort
         ================================================== */
        _isotope_sorting();

        /* chart
         ================================================== */
        _chart();

        /* counters
         ================================================== */
        _count();

        /* parallax
         ================================================== */
        _parallax();

        /* scroll to top
         ================================================== */
        _scrollTop();

        /* boxer gall
         ================================================== */
        _gall();

        /* contact form
         ================================================== */
        _contactForm();
    });

    jWindow.on('load', function () {

        let jIsotope = $('.js-isotope');

        if (jIsotope.length) {
            // noinspection JSUnresolvedFunction
            jIsotope.isotope('layout');
        }

        /* google map
         ================================================== */
        _g_map();
    });

    // Create a safe reference to the Underscore object for use below.
    function now() {
        return new Date().getTime();
    }

    function throttle(func, wait, options) {
        let timeout, context, args, result;
        let previous = 0;

        if (!options) options = {};

        let later = function later() {
            previous = options.leading === false ? 0 : now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };

        let throttled = function throttled() {
            let at = now();
            if (!previous && options.leading === false) previous = at;
            let remaining = wait - (at - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = at;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
            else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };

        throttled.cancel = function () {
            clearTimeout(timeout);
            previous = 0;
            timeout = context = args = null;
        };

        return throttled;
    }

    //  Pure js debounce function to optimize resize method
    function debounce(func, wait, immediate) {
        let timeout;

        return function () {
            let context = this,
                args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(function () {
                timeout = null;

                if (!immediate) func.apply(context, args);
            }, wait);

            if (immediate && !timeout) func.apply(context, args);
        };
    }
}(jQuery));
