'use strict';
function page2Ctrl(MetadataService) {
    $('.owl-carousel').owlCarousel({ loop: true });
    MetadataService.setMetaTags({
    title: 'page 2',
        description: 'Bla Desc',
        keywords: 'balca keywelrjlk'
    });
}
angular.module('app').controller('page2Ctrl', page2Ctrl);