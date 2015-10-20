angular.module('Medicare')
        .controller('PayCtrl', ["$scope", "$location", function($scope, $location) {
                $scope.confirm = function() {
                        $location.path("/payment_confirm").search({card_no: $scope.card_no, identity_no: $scope.identity_no});
                };
        }]);
