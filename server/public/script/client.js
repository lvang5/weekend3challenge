console.log('JS');

let myApp = angular.module('myApp', []);

myApp.controller('AppController', function($http){
let vm = this;
console.log('NG');
vm.addTask = function(){
    console.log(vm.task);
}




})