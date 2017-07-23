(function () {

'use strict';

angular.module('TooMuchApp', [])

.controller('TooMuchController', function ($scope) {
    $scope.menu = "";
    $scope.message = "";
    $scope.error = "";
    $scope.checkMenu = function () {
        var lunchMenu = ($scope.menu).split(',');
        if ($scope.menu == "") {
            $scope.message = "Please enter data first";
            $scope.error = " error";
        } else {
            $scope.message = (lunchMenu.length > 3)?"Too much!":"Enjoy!";
            $scope.error = "";
        }
    };
});

})();
