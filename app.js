/**
 * Created by Sufiyan on 4/28/2016.
 */
var app=angular.module('WatchApp',[]);

app.controller('watchCtrl', function ($scope) {
$scope.count=0;
$scope.b=[
    {value:1},
    {value:2},
    {value:3},
    {value:4},
    {value:5},
    {value:6}
];

    $scope.$watch('b', function () {

        $scope.count+=1;


    },true);




});