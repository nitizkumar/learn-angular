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

module.directive('status', function () {
    return{
        restrict:'A',
        scope:{
            name:'@'
        },
        controller: function($scope,$element,$attrs){
            console.log($scope.name);
            var dead = ['Eddard','Robb'];
            if(dead.indexOf($scope.name) === -1){
                $element.addClass('alive');
            }else{
                $element.addClass('dead');
            }
        }
    }
});