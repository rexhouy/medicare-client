angular.module('Medicare')
        .controller('PaymentConfirmCtrl', ["$scope", "$routeParams", "$location", function($scope, $routeParams, $location) {
                $scope.payment = "alipay";
                $scope.card_no = $routeParams.card_no;
                $scope.identity_no = $routeParams.identity_no;
                $scope.confirm = function() {
                        $location.path("/payment_history").search({from: "confirm"});
                };
        }]);
