document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
        document.addEventListener("backbutton", function(e){
                e.preventDefault();
                navigator.app.exitApp();
        }, false);
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
                .otherwise({
                        redirectTo: "/"
                });
});
