//sounder.service('$http',function(){

//});


var app = angular.module('sounds');

app.service('soundService', function($http) {

  this.getArtist = function(artist) {
    return $http({
      method: 'GET',

  url: 'http://api.soundcloud.com/users/' + artist + '/tracks.json?client_id=e612801dd1e2dca42b6fcf01ba971cf3'
    })
  };

})