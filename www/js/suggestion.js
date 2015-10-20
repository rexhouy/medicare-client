angular.module('Medicare')
        .controller('SuggestionCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
                $scope.suggestion = {
                        content: ""
                };
                $scope.showInfo = false;
                $scope.create = function() {
                        $http({
                                method: 'POST',
                                url: 'http://medicare.tenhs.com/suggestions.json',
                                data: $scope.suggestion
                        }).then(function successCallback(response) {
                                $scope.showInfo = true;
                        }, function errorCallback(response) {
                                console.log(response);
                        });

                };

        }]);
