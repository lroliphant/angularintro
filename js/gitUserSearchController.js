githubUserSearch.controller('GitUserSearchController', [ 'Search', 'OmdbSearch', function(Search, OmdbSearch) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      });
    OmdbSearch.query(self.searchTerm)
      .then(function(response) {
        self.omdbResult = response.data;
      });
  };

}]);