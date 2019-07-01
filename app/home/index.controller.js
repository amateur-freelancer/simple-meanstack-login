(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller($scope, $http, UserService) {
        var vm = this;

        vm.user = null;
        vm.data = null;
        $scope.hideinfo = false;
        initController();
        autocompleteController();
        //autocomplete
        function initController() {
            // get all user
            UserService.GetAll().then(function (users) {
                vm.users = users;
            });
            UserService.GetData().then(function (data) {
                vm.data = data;
            });
        }
        function autocompleteController() {
            $scope.$watch('vm.data', function () {
                $scope.usr_list = vm.data;
                $scope.search_name = $scope.usr_list;
            })
            $scope.total = function (string) {
                $scope.hideinfo = false;
                var output = [];
                angular.forEach($scope.usr_list, function (usr) {
                    if (usr.commit.author.name.toLowerCase().indexOf(string.toLowerCase()) >= 0) {
                        output.push(usr);
                    }
                });
                $scope.search_name = output;
            }
            vm.choose_textbox = function (string) {
                $scope.username = string;
                $scope.hideinfo = true;
            }
        }
    }
})();