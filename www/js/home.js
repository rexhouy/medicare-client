angular.module('Medicare')
        .controller('HomeCtrl', ["$scope", "$location", function($scope, $location) {
                $scope.searchInput = false;

                $scope.showSearch = function() {
                        if ($scope.searchInput && $scope.searchText)  {
                                $scope.search();
                        }
                        $scope.searchInput = !$scope.searchInput;
                };

                $scope.search = function() {
                        $location.path("/search").search({searchText: $scope.searchText});
                };
        }]);
