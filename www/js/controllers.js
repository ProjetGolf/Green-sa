angular.module('app.controllers', [])
  



.controller('accueilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('informationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDesRochersSVignCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDeCessonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDeRennesSaintJacquesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDeSaintMaloCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('capMaloLeGolfCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dinardGolfCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDeCiceBlossacCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDuDomaineDesOrmesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('golfDeLaFreslonniereCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('nouvellePartieCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('statistiquesCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('nouvellePartie2Ctrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams) {

}])
   
.controller('nouvellePartie3Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams, $cordovaGeolocation) {
  
    var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });

}])
   
.controller('nouvellePartie4Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams, $cordovaGeolocation) {

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });

}])
   
.controller('statistiques2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('statistiques3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('statistiques4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aideCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('paramCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tableauDeScore1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
                                  
                                  
}])

.controller('tableauDeScore2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller               // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
                                    
}])

.controller('tableauDeScore3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
                                    
}])

.controller('statistiquesgeneralCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) { 
                                    
}])

.controller('Trou1Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 
     
     var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });

}])

.controller('Trou2Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

.controller('Trou3Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 
  
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });

}])

.controller('Trou4Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

.controller('Trou5Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

.controller('Trou6Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

.controller('Trou7Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

.controller('Trou8Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

.controller('Trou9Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller                // You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaGeolocation) { 

  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });
    });
 
  }, function(error){
    console.log("Could not get location");
  });
                                    
}])

 
 
 
  
.controller('StatistiquesCtrl', function ($scope, $stateParams, $ionicPopup, $state, ShotTableScore) {
    $scope.$on('$ionicView.enter', function(e) {
      initForm()
    })
 
    function initForm(){
      if($stateParams.id){
        ShotTableScore.getById($stateParams.id, function(item){
          $scope.shotForm = item
        })
      } else {
        $scope.shotForm = {}
      }
    }
    function onSaveSuccess(){
      $state.go('statistiques')
    }
    $scope.saveShot = function(id){
 
      if(!$scope.shotForm.id){
        ShotTableScore.createShot($scope.shotForm).then(onSaveSuccess)
      } else {
        ShotTableScore.updateShot($scope.shotForm).then(onSaveSuccess)
      }
    }
 
    $scope.confirmDelete = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Supprimer',
        template: 'êtes vous sûr de vouloir supprimer ?'
      })
 
      confirmPopup.then(function(res) {
        if(res) {
          ShotTableScore.deleteDatabase().then(onSaveSuccess)
        }
      })
    }
 
 
  })



