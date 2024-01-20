var testApp = angular.module('vacationsApp', []);

testApp.controller('vacationsController', function ($rootScope, $scope){
    $scope.title = 'Vacations'

    // for the destinations the user will enter
    $scope.vacations = [];

    // object to store each new destination before its added
    $scope.vacation = {
        city: undefined,
        country: undefined
    };

    // function to add new destinations to list of destinations
    $scope.addVacation = function() {
        $scope.vacations.push(
            {
                city: $scope.vacation.city,
                country: $scope.vacation.country
            }
        );
    }
})