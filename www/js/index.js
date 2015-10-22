document.addEventListener("deviceready", onDeviceReady, true);
function onDeviceReady(){
        document.addEventListener("backbutton", function(e){
                e.preventDefault();
                navigator.app.exitApp();
        }, false);
        angular.element(document).ready(function() {
                angular.bootstrap(document);
        });
}

var medicare = angular.module('Medicare', [
        'ngAnimate',
        'ngRoute'
]).config(function ($routeProvider) {
        $routeProvider
                .when("/", {
                        templateUrl: 'home.html',
                        controller: 'HomeCtrl'
                })
                .when("/pay", {
                        templateUrl: 'pay.html',
                        controller: 'PayCtrl'
                })
                .when("/book", {
                        templateUrl: 'book.html',
                        controller: 'BookCtrl'
                })
                .when("/info", {
                        templateUrl: 'info.html',
                        controller: 'InfoCtrl'
                })
                .when("/info/company", {
                        templateUrl: 'info-company.html',
                        controller: 'InfoCompanyCtrl'
                })
                .when("/qa", {
                        templateUrl: 'qa.html',
                        controller: 'QaCtrl'
                })
                .when("/navigation", {
                        templateUrl: 'navigation.html',
                        controller: 'NavigationCtrl'
                })
                .when("/status", {
                        templateUrl: 'status.html',
                        controller: 'StatusCtrl'
                })
                .when("/news", {
                        templateUrl: 'news.html',
                        controller: 'NewsCtrl'
                })
                .when("/school", {
                        templateUrl: 'school.html',
                        controller: 'SchoolCtrl'
                })
                .when("/department", {
                        templateUrl: 'department.html',
                        controller: 'DepartmentCtrl'
                })
                .when("/sign_in", {
                        templateUrl: 'sign_in.html',
                        controller: 'SignInCtrl'
                })
                .when("/suggestion", {
                        templateUrl: 'suggestion.html',
                        controller: 'SuggestionCtrl'
                })
                .when("/me", {
                        templateUrl: 'me.html',
                        controller: 'MeCtrl'
                })
                .when("/near", {
                        templateUrl: 'near.html',
                        controller: 'NearCtrl'
                })
                .when("/payment_history", {
                        templateUrl: 'payment_history.html',
                        controller: 'PaymentHistoryCtrl'
                })
                .when("/payment_confirm", {
                        templateUrl: 'payment_confirm.html',
                        controller: 'PaymentConfirmCtrl'
                })
                .when("/search", {
                        templateUrl: 'search.html',
                        controller: 'SearchCtrl'
                })
                .when("/medicine", {
                        templateUrl: 'medicine.html',
                        controller: 'MedicineCtrl'
                })
                .when("/suggestion_success", {
                        templateUrl: 'suggestion_success.html',
                        controller: 'SuggestionCtrl'
                })
                .when("/account_history", {
                        templateUrl: 'account_history.html',
                        controller: 'AccountHistoryCtrl'
                })
                .when("/book_success", {
                        templateUrl: 'book_success.html',
                        controller: 'BookSuccessCtrl'
                })
                .otherwise({
                        redirectTo: "/"
                });
}).run(function($rootScope, $location) {
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
                $rootScope.loading = true;
        });
        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
                $rootScope.loading = false;
        });
});

$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
