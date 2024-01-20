describe('AngularJS App Test Suite', function () {
    const isObjectEmpty = (object) => {
        return Object.keys(object).length === 0 && object.constructor === Object;
    }

    beforeEach(module('vacationsApp'));

    describe('AngularJS App Controller Tests', function () {
        var scope, controller;

        // SETUP
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('vacationsController', {$scope: scope});
        }));

        // TEAR DOWN
        afterEach(function () {
            // Cleanup
            console.log('Before cleanup scope is empty: ', isObjectEmpty(scope));
            console.log('Before cleanup controller is empty:', isObjectEmpty(controller));

            scope = {};
            controller = {};

            console.log('After cleanup scope is empty: ', isObjectEmpty(scope));
            console.log('After cleanup controller is empty:',  isObjectEmpty(controller));
        });

        it('should initialize the title in the scope', function () {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Vacations');
        });

        it('should add a vacation to the vacations list', function () {
            // first ensure that the vacations list is empty when the controller is initialised
            expect(scope.vacations).toBeDefined();
            expect(scope.vacations.length).toBe(0);

            //create a new vacation object in the scope
            scope.vacation = {
                city: "Leicester",
                country: "Britain"
            }

            // add the vacation to the vacations list
            scope.addVacation();

            // change the vacation data
            scope.vacation.city = "New York";
            scope.vacation.country = "America";

            // add the updated vacation to vacations list
            scope.addVacation();

            // now we should expect 2 vacations in the array
            expect(scope.vacations.length).toBe(2);

            // the order of the vacations matter
            expect(scope.vacations[0].city).toBe("Leicester");
            expect(scope.vacations[0].country).toBe("Britain");

            expect(scope.vacations[1].city).toBe("New York");
            expect(scope.vacations[1].country).toBe("America");
        })
    });
});


