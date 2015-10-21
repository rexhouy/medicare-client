angular.module('Medicare')
        .controller('SuggestionCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
                $scope.suggestion = {
                        content: ""
                };
                $scope.showInfo = false;

                $http({
                        method: 'GET',
                        url: 'http://medicare.tenhs.com/suggestions.json',
                        data: $scope.suggestion
                }).then(function successCallback(response) {
                        $scope.showInfo = true;
                        $scope.suggestion = response;
                }, function errorCallback(response) {
                        console.log(response);
                });


                $.ajax({
                        type:"GET",
                        dataType: "json",
                        url: "http://medicare.tenhs.com/suggestions.json",
                        success: function (result) {
                                $(".alert").html(result);
                        },
                        error: function (result) {
                                $(".alert").html(result);
                        }
                });

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
