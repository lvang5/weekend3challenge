console.log('JS');

let myApp = angular.module('myApp', []);

myApp.controller('AppController', function ($http) {
    let vm = this;

    console.log('NG');

    vm.allTask = [];

    vm.addTask = {
        task: vm.task
    }

    // send tasks to server
    vm.sendTask = function (value) {
        console.log('in sendTask', value);
        $http({
            method: 'POST',
            url: '/tasks',
            data: value
        }).then(function (response) {
            console.log('success', response.data);
            vm.addtask.task = '';
        }).catch(function (error) {
            alert('Uh Oh something is wrong in the POST function', error);
        });
    }



})


