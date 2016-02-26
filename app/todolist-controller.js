function TodolistController($scope) {

    $scope.name = "Pascal";
    $scope.newTodo = "";
    $scope.hideFinished = false;
    $scope.todolist = [{
        text: "learn angular",
        finished: false,
    }];

    $scope.addTodo = function () {
        $scope.todolist.push({
            text: $scope.newTodo,
            finished: false
        });
    };

}

angular.module("todoApp", ["ngMaterial"]).controller("TodolistController", TodolistController);