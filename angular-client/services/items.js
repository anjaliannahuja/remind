angular.module('app')
.service('messagesService', function($http) {
  this.registerUser = function(callback) {
    $http.post('/register')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});