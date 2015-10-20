angular.module('Medicare')
        .controller('MedicineCtrl', ["$scope", "$location", function($scope, $location) {
                $scope.searchResult = false;
                $scope.search = function() {
                        $scope.searchResult = $scope.searchText;
                };
        }]);
