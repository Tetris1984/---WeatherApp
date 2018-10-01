(function(){

    var cityService = function($http){


      var getUsers = function(username){
            return $http.get("https://api.github.com/users")
                        .then(function(response){
                           return response.data;
                        });
      };

      return {
          get: getUsers
      };

    };

    var module = angular.module("weatherApp");
    module.factory("cityService", cityService);

}());
