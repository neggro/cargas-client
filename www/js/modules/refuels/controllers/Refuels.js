angular.module('refuels')

.controller('Refuels', [
    '$scope',
    '$ionicPopup',
    '$ionicListDelegate',
    'Refuel',
    'refuels',
    'fuels',
    function ($scope, $ionicPopup, $ionicListDelegate, Refuel, refuels, fuels) {

        // sort refuels by date (newest first)
        $scope.refuels = refuels;
        $scope.fuels = fuels;

        $scope.delete = function (refuel) {
            $ionicPopup.confirm({
                title: 'Delete Refuel',
                template: 'Are you sure you want to remove this refuel?'
            }).then(function (yes) {
                if (yes) {
                    refuel.$remove(function () {
                        $scope.refuels = Refuel.query();
                    });
                }
                $ionicListDelegate.closeOptionButtons();
            });
        };

    }
]);
