angular.module('Medicare')
        .controller('SearchCtrl', ["$scope", "$routeParams", function($scope, $routeParams) {
                $scope.searchText = $routeParams.searchText;
        }]);
