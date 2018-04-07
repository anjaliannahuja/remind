angular.module('app')
.service('messagesService', function($http) {
  this.getAll = function(callback) {
    $http.get('/register')
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