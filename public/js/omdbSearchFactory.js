githubUserSearch.factory('OmdbSearch', ['$http', function($http) {
  var queryUrl = "http://www.omdbapi.com/";
  return {
    query: function(searchTerm) {

      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          's': searchTerm
        }
      });

    }
  };

}]);