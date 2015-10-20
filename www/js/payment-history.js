angular.module('Medicare')
        .controller('PaymentHistoryCtrl', ["$scope", "$routeParams", function($scope, $routeParams) {
                $scope.paid = $routeParams.from == "confirm";
        }]);
