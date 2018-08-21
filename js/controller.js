'use strict';
angular.module('app').controller('AppCtrl', ['$scope',
    function AppCtrl($scope) {
        var vm = this;
        vm.app = {
            name: 'Trintals'           
        };
    }
]).service('MetadataService', ['$window', function ($window) {
    var self = this;
    self.setMetaTags = function (tagData) {      
        $window.document.title = tagData.title
        $window.document.getElementsByName('description')[0].content = tagData.description;
        $window.document.getElementsByName('keywords')[0].content = tagData.keywords;
    };
}]);

 