angular.module('Medicare')
        .controller('BookCtrl', ["$scope", "$routeParams", "$location", function($scope, $routeParams, $location) {
                $scope.type = "common";
                $scope.specialist = 1;

                var getSpecialist = function() {
                        if ($scope.type == "commont") {
                                return null;
                        }
                        switch($scope.specialist) {
                        case 1:
                                return "专家A";
                        case 2:
                                return "专家B";
                        case 3:
                                return "专家C";
                        }
                        return null;
                };

                $scope.confirm = function() {
                        $location.path("/book_success").search({
                                hospital: $scope.hospital,
                                department: $scope.department,
                                specialist: getSpecialist(),
                                date: $scope.date,
                                cardNo: $scope.cardNo
                        });
                };
        }])
        .controller('BookSuccessCtrl', ["$scope", "$routeParams", "$location", function($scope, $routeParams, $location) {
                $scope.hospital = $routeParams.hospital;
                $scope.department = $routeParams.department;
                $scope.specialist = $routeParams.specialist;
                $scope.date = $routeParams.date;
                $scope.cardNo = $routeParams.cardNo;
        }]);
