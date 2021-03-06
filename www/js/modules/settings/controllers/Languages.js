angular.module('settings')

.controller('Languages', [
    '$scope',
    '$translate',
    'setting',
    function ($scope, $translate, setting) {
        $scope.setting = setting;

        $scope.$watch('setting.language', function (newLanguage, oldLanguage) {
            if (newLanguage && newLanguage !== oldLanguage) {
                $translate.use(newLanguage);
                $scope.setting.$save();
            }
        });
    }
]);
