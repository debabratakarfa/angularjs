(function(){
    var app = angular.module('profile', []);
    app.controller('ProfileController', function()
                   {
                       this.profiles = gem;
                   });
    
    var gem = {
        name: 'Debabrata Karfa',
        hourly: 16,
        work: 'Wordpress Developer',
    }
})();