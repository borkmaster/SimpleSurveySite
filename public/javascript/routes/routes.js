app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/partials/login.html",
            controller : "MainController"
        })
        .otherwise("/", {
            templateUrl : "/partials/login.html"
        });
});
