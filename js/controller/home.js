'use strict';
function HomeCtrl(MetadataService, $timeout) {
    MetadataService.setMetaTags({
        title: 'Home Rentals Reinvented | Trintals',
        description: 'Trintals.com is a secure online platform that makes renting easy for landlords and tenants. The Trintals application connects landlords, real estate agents and renters to a suite of integrated home rental services including Property Marketing, Tenant Screening, Application Management, Lease Preparation, Payment Automation',
        keywords:'credit and background check, electronic lease, free property management software, online maintenance, online rent collection, property management software for real estate agents, rental lease, rental marketing, room rental tenant screening, universal rental application'
    });

    $timeout(loadSync, 0, false);
     
    function loadSync() {
        $('#whatwedocarousel').owlCarousel({
            center: true,
            loop: true,
            responsiveClass: true,
            dots: true,
            navText: ['', ''],
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            //animateOut: 'fadeOut',
            fluidSpeed: true,
            smartSpeed: 500,
            margin: 0,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,

                },
                420: {
                    items: 1,
                    margin: 90,
                    stagePadding: 67,
                },
                768: {
                    items: 1,
                    margin: 50,
                    stagePadding: 240,

                },
                1024: {
                    items: 2,
                    margin: 30,
                    stagePadding: 220,

                },
                1200: {
                    items: 3,
                    margin: 50,
                    stagePadding: 220,

                },
                1440: {
                    items: 5,
                    margin: 30,
                    stagePadding: 0,
                },
                1920: {
                    items: 6,
                    margin: 70,
                    stagePadding: 0,
                },
                2560: {
                    items: 7,
                    margin: 50,
                    stagePadding: 220,
                }
            }

        });
        ///TESTMONIALS///
        $("#testimonals").owlCarousel({
            center: true,
            loop: true,
            responsiveClass: true,
            dots: true,
            navText: ['', ''],
            nav: false,
            autoplay: true,
            autoplayTimeout: 6000,
            fluidSpeed: true,
            smartSpeed: 1000,
            margin: 15,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                },

                1024: {
                    items: 2,
                    margin: -200,
                },
                1200: {
                    items: 3,
                },
                1920: {
                    items: 3
                }
            }

        });

        //CHECK CLASSES
        checkClasses();

        $("#testimonals").on('translate.owl.carousel', function (event) {
            checkClasses();
            $('#testimonals .owl-stage .owl-item').css({ "opacity": "0.3", "transform": "scale(.7)" });
        });
        $("#testimonals").on('translated.owl.carousel', function (event) {
            checkClasses();
            $('#testimonals .owl-stage .owl-item').css({ "opacity": "1", "transform": "scale(1)" });
        });
        $("#testimonals").on('drag.owl.carousel', function (event) {
            checkClasses();
            $('#testimonals .owl-stage .owl-item').css({ "opacity": "0.3", "transform": "scale(.7)" });
        });
        $("#testimonals").on('dragged.owl.carousel', function (event) {
            checkClasses();
            $('#testimonals .owl-stage .owl-item').css({ "opacity": "1", "transform": "scale(1)" });
        });



        function checkClasses() {
            var total = $('#testimonals .owl-stage .owl-item.active').length
            $('#testimonals .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');
            $('#testimonals .owl-stage .owl-item.active').each(function (index) {
                if (index === 0) {
                    $(this).addClass('firstActiveItem');
                }
                if (index === total - 1 && total > 1) {
                    $(this).addClass('lastActiveItem');
                }
            });
        }
    };









    


   
}
angular.module('app').controller('HomeCtrl', HomeCtrl);