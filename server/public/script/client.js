let myApp = angular.module('myApp', []);

myApp.controller('AppController', function ($http) {
    let vm = this;
    console.log('NG');
    // send tasks to server
    
    vm.allTask = [];

    vm.sendTask = function () {
        // Making the object to send to server
        let taskToSend = {
            task: vm.taskIn
        }
        $http({
            method: 'post',
            url: '/tasks',
            data: taskToSend
        }).then(function (response) {
            console.log('in Post', response.data);
            vm.appendTask();
        }).catch(function (error) {
            alert('error in  post', error);
        })
    }
    vm.appendTask = function () {
        
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function (response) {
            console.log(response.data);
            vm.allTask = response.data;
        }).catch(function (error) {
            alert('Error in appendtask GET', error);
        })
    }



  

 
})


