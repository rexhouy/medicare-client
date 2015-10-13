var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
            app.receivedEvent('deviceready');
            document.addEventListener("backbutton", function(e){
                    navigator.app.exitApp();
            }, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

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
app.initialize();
