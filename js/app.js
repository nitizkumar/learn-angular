module = angular.module('myapp',[]);

module.controller('testController',['$scope',function($scope){
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';

    $scope.items = [
        {name:'Eddard'},
        {name:'Robb'},
        {name:'Sansa'},
        {name:'Arya'},
        {name:'Brandon'},
        {name:'Rickon'},
        {name:'John Snow'},

    ];
}]);

module.controller('greetingController',['$scope',function($scope) {
    $scope.greeting = 'Good Morning';
}]);