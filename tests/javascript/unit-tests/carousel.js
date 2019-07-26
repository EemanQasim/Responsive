﻿(function($d, w, d, test, module) {

    "use strict";

    var carouselHtml = "<div id=\"carousel\" class=\"carousel\">" +
        "<ol><li></li><li></li><li></li></ol>" +
        "<figure class=\"carousel-active\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p></figure>" +
        "<figure><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p></figure>" +
        "<figure><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p></figure>" +
        "<button>&lt;</button>" +
        "<button class=\"forward\">&gt;</button>" +
        "</div>";

    module("carousel");

    // Ensure the plugin is present and accounted for.
    test("Carousel plugin should be defined on global rbp object", function(assert) {
        assert.ok(w.$rbp.carousel, "carousel() method is defined.");
    });

    // // Initialisation code.
    // module("carousel.plugin", {
    //     beforeEach: function() {
    //         // Run all tests in noConflict mode. This allows us to test the reassignment functionality.
    //         $.fn.responsiveCarousel = $.fn.carousel.noConflict();
    //     },
    //     afterEach: function() {
    //         // Reassign and cleanup.
    //         $.fn.carousel = $.fn.responsiveCarousel;
    //         delete $.fn.responsiveCarousel;
    //     }
    // });

    // // No conflict.
    // test("Carousel plugin should provide noConflict() function.", function() {
    //     strictEqual($.fn.carousel, undefined, "Carousel plugin was set to undefined.");
    // });

    // Data
    // test("Carousel plugin should assign data to target element.", function() {

    //     var $fixture = $d.id("qunit-fixture");
    //     var $carousel = $d.fromHtml(carouselHtml);
    //     $d.append($fixture, $carousel);
    //     var rbpCarousel = w.$rbp.carousel($carousel)[0];
    //     console.log(rbpCarousel.dataOptions());

    //     var $carousel = $(carouselHtml).appendTo("#qunit-fixture")
    //         .responsiveCarousel();

    //     notEqual($carousel.data("r.carousel"), undefined, "Carousel target has data assigned.");
    //     equal(typeof($carousel.data("r.carousel")), "object", "Carousel target has data assigned.");
    //     equal($carousel.data("r.carousel").constructor, $.fn.responsiveCarousel.Constructor, "Carousel target has data assigned with the correct type.");
    // });

    // Events
    test("Carousel plugin should fire slide and slid events.", function(assert) {

        var $fixture = $d.id("qunit-fixture");
        var $carousel = $d.fromHtml(carouselHtml);
        $d.append($fixture, $carousel);
        var rbpCarousel = w.$rbp.carousel($carousel, { interval: 1, wrap: false })[0];

        var done = assert.async();
        // $(carouselHtml).appendTo("#qunit-fixture")
        $d.one($carousel, "slide.rbp.carousel", null, function(e) {
            assert.ok(true, "Slide event fired.");
        });

        $d.one($carousel, "slid.rbp.carousel", null, function(e) {
            assert.ok(true, "Slid event fired.");
            done();
        });
    });

    // test("Carousel plugin should not fire slid event when slide event is prevented.", function(assert) {

    //     var done = assert.async();
    //     $(carouselHtml).appendTo("#qunit-fixture")
    //         .one("slide.r.carousel", function(event) {
    //             event.preventDefault();
    //             ok(true, "Slide event fired.");
    //             done();
    //         })
    //         .one("slid.r.carousel", function() {
    //             ok(false, "Slid event fired.");
    //         })
    //         .responsiveCarousel({ interval: 1, wrap: false });
    // });

    // // Accessibility
    // test("Carousel plugin should have role and aria-live attributes added.", function() {

    //     var $carouselHtml = $(carouselHtml).appendTo("#qunit-fixture")
    //         .responsiveCarousel({ wrap: false });

    //     equal($carouselHtml.attr("role"), "listbox", "Carousel has role = listbox.");
    //     equal($carouselHtml.attr("aria-live"), "polite", "Carousel has aria-live = polite.");

    // });

    // test("Selected pane should have aria-selected equal to true.", function() {

    //     var $carouselHtml = $(carouselHtml).appendTo("#qunit-fixture")
    //         .responsiveCarousel({ wrap: false });

    //     equal($carouselHtml.find("figure.carousel-active").attr("aria-selected"), "true", "Shown pane has aria-selected = true.");
    //     equal($carouselHtml.find("figure:not(.carousel-active)").attr("aria-selected"), "false", "Hidden pane has aria-selected = false.");

    // });

    // test("Carousel plugin should have aria-controls attributes added.", function() {

    //     var $carouselHtml = $(carouselHtml).appendTo("#qunit-fixture")
    //         .responsiveCarousel({ wrap: false });

    //     var id = $carouselHtml.attr("id");

    //     equal($carouselHtml.find("> ol > li").attr("aria-controls"), id, "Indicators control carousel via aria-controls.");
    //     equal($carouselHtml.find("> button").attr("aria-controls"), id, "Buttons control carousel via aria-controls.");

    // });
}(window.$d, window, document, QUnit.test, QUnit.module))