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
   
.controller('nouvellePartie2Ctrl', ['$scope', '$stateParams','$cordovaGeolocation',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams, $cordovaGeolocation) {

   var options = {timeout: 10000, enableHighAccuracy: true};

   var posTrou1 = {lat : 48.070325, lng : -1.746956};
   var posTrou2 = {lat : 48.06957, lng : -1.744317};
   var posTrou3 = {lat : 48.068987, lng : -1.74351};
   var posTrou4 = {lat : 48.071311, lng : -1.74638};
   var posTrou5 = {lat : 48.071182, lng : -1.747844};
   var posTrou6 = {lat : 48.069631, lng : -1.748327};
   var posTrou7 = {lat : 48.072125, lng : -1.748555};
   var posTrou8 = {lat : 48.07246, lng : -1.749323};
   var posTrou9 = {lat : 48.068859, lng : -1.749293};
   var item=1;
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


    var text="posTrou"+item.toString();

    var pos = eval(text);

    //var distance = google.maps.geometry.spherical.computeDistanceBetween(pos, latLng);
 
    var mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);


    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var text="posTrou"+item.toString();

      var pos = eval(text);
 
      var marker1 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });

      var marker2 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: pos,
        draggable: true
      });

      var optionsPolylineDistance = {
          map: $scope.map,
          path:[marker2.getPosition(), latLng],
          geodesic:true,
          draggable: true
        };

      var polylineDistance = new google.maps.Polyline( optionsPolylineDistance );

      $scope.increment = function(){
        item=item+ 1;
        if (item==9){item=1;}

        var text="posTrou"+item.toString();

        var pos = eval(text);

        marker2.setPosition(pos);
        polylineDistance.setPath([pos, latLng]);
      }

      $scope.save = function() {

        // execute INSERT statement with parameter
        $cordovaSQLite.execute(db, 'INSERT INTO shot_score (shot) VALUES (?)', [newShot])
            .then(function(result) {
                $scope.statusMessage = "Shot saved successful, cheers!";
            }, function(error) {
                $scope.statusMessage = "Error on saving: " + error.shot;
            })
      }
    }); 
 
  }, function(error){
    console.log("Could not get location");
  });


}])
   
.controller('nouvellePartie3Ctrl', ['$scope', '$stateParams', '$cordovaGeolocation', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function($scope, $stateParams, $cordovaGeolocation) {
  
   var options = {timeout: 10000, enableHighAccuracy: true};

   var posTrou1 = {lat : 48.070325 , lng : -1.746956};
   var posTrou2 = {lat : 48.06957, lng : -1.744317};
   var posTrou3 = {lat : 48.068987, lng : -1.74351};
   var posTrou4 = {lat : 48.071311, lng : -1.74638};
   var posTrou5 = {lat : 48.071182, lng : -1.747844};
   var posTrou6 = {lat : 48.069631, lng : -1.748327};
   var posTrou7 = {lat : 48.072125, lng : -1.748555};
   var posTrou8 = {lat : 48.07246, lng : -1.749323};
   var posTrou9 = {lat : 48.068859, lng : -1.749293};
   var item=1;

   var newShot;
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


    var text="posTrou"+item.toString();

    var pos = eval(text);

    //var distance = google.maps.geometry.spherical.computeDistanceBetween(pos, latLng);
 
    var mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);


    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var text="posTrou"+item.toString();

      var pos = eval(text);
 
      var marker1 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });

      var marker2 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: pos,
        draggable: true
      });

      var optionsPolylineDistance = {
          map: $scope.map,
          path:[pos, latLng],
          geodesic:true,
          draggable: true
        };

      var polylineDistance = new google.maps.Polyline( optionsPolylineDistance );

      $scope.increment = function(){
        item=item+ 1;
        if (item==9){item=1;}

        var text="posTrou"+item.toString();

        var pos = eval(text);

        marker2.setPosition(pos);
        polylineDistance.setPath([pos, latLng]);
      }

      $scope.save = function() {

        // execute INSERT statement with parameter
        $cordovaSQLite.execute(db, 'INSERT INTO shot_score (shot) VALUES (?)', [newShot])
            .then(function(result) {
                $scope.statusMessage = "Shot saved successful, cheers!";
            }, function(error) {
                $scope.statusMessage = "Error on saving: " + error.shot;
            })
      }

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

   var posTrou1 = {lat : 48.067001, lng : -1.741196};
   var posTrou2 = {lat : 48.06511045391539, lng : -1.7384228110313416};
   var posTrou3 = {lat : 48.06191124481533, lng : -1.7402896285057068};
   var posTrou4 = {lat : 48.06191682208731, lng : -1.7423482239246368};
   var posTrou5 = {lat : 48.064552761422526, lng : -1.7475530505180359};
   var posTrou6 = {lat : 48.06192696256268, lng : -1.745017021894455};
   var posTrou7 = {lat : 48.06523415940042, lng : -1.7449117451906204};
   var posTrou8 = {lat : 48.06514594323316, lng : -1.7483684420585632};
   var posTrou9 = {lat : 48.067265118137264, lng : -1.7493769526481628};
   var posTrou10 = {lat : 48.06686968056081, lng : -1.7427840828895569};
   var posTrou11 = {lat : 48.06626130932234, lng : -1.7406007647514343};
   var posTrou12 = {lat : 48.062286439683504, lng : -1.7416200041770935};
   var posTrou13 = {lat : 48.06523213147448, lng : -1.7402628064155579};
   var posTrou14 = {lat : 48.061439712251634, lng : -1.7438247799873352};
   var posTrou15 = {lat : 48.06404119994884, lng : -1.7446012794971466};
   var posTrou16 = {lat : 48.065678280295536, lng : -1.7409548163414001};
   var posTrou17 = {lat : 48.06590642296597, lng : -1.7435082793235779};
   var posTrou18 = {lat : 448.06719971917654, lng : -1.7486514151096344};
   var item=1;
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


    var text="posTrou"+item.toString();

    var pos = eval(text);

    //var distance = google.maps.geometry.spherical.computeDistanceBetween(pos, latLng);
 
    var mapOptions = {
      center: latLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);


    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var text="posTrou"+item.toString();

      var pos = eval(text);
 
      var marker1 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
      });

      var marker2 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: pos,
        draggable: true
      });

      var optionsPolylineDistance = {
          map: $scope.map,
          path:[pos, latLng],
          geodesic:true,
          draggable: true
        };

      var polylineDistance = new google.maps.Polyline( optionsPolylineDistance );

      $scope.increment = function(){
        item=item+ 1;
        if (item==18){item=1;}

        var text="posTrou"+item.toString();

        var pos = eval(text);

        marker2.setPosition(pos);
        polylineDistance.setPath([pos, latLng]);
      }

      $scope.save = function() {

        // execute INSERT statement with parameter
        $cordovaSQLite.execute(db, 'INSERT INTO shot_score (shot) VALUES (?)', [newShot])
            .then(function(result) {
                $scope.statusMessage = "Shot saved successful, cheers!";
            }, function(error) {
                $scope.statusMessage = "Error on saving: " + error.shot;
            })
      }

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

  $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40],
      [28, 48, -40, 19, 86, 27, 90]
    ];
    $scope.datasetOverride = [
      {
        label: "Bar chart",
        borderWidth: 1,
        type: 'bar'
      },
      {
        label: "Line chart",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line'
      }
    ]; 
                                    
}])

 
 
 
  
.controller('StatistiquesCtrl', function ($scope, $stateParams) {

  $scope.save = function(newShot) {

        // execute INSERT statement with parameter
        $cordovaSQLite.execute(db, 'INSERT INTO shot_score (shot) VALUES (?)', [newShot])
            .then(function(result) {
                $scope.statusMessage = "Shot saved successful, cheers!";
            }, function(error) {
                $scope.statusMessage = "Error on saving: " + error.shot;
            })

    }

    $scope.load = function() {

        // Execute SELECT statement to load message from database.
        $cordovaSQLite.execute(db, 'SELECT * FROM shot_score ORDER BY id DESC')
            .then(
                function(res) {

                    if (res.rows.length > 0) {

                        $scope.newShot = res.rows.item(0).shot;
                        $scope.statusShot = "Shot loaded successful, cheers!";
                    }
                    console.log(bonjour);
                },
                function(error) {
                    $scope.statusShot = "Error on loading: " + error.shot;
                }
            );
    }
    
 
  })

.controller('angleDeDeviation1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.labels =["Parfait", "Trop à droite", "", "", "", "", "Trop à gauche"];

  $scope.data = [
    [132, 59, 10, 0, 0, 10, 80],
  
  ];


}])

.controller('angleDeDeviation2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

   $scope.labels =["Parfait", "Trop à droite", "", "", "", "", "Trop à gauche"];

  $scope.data = [
    [112, 59, 12, 0, 0, 13, 40],
  
  ];


}])

.controller('angleDeDeviation3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

   $scope.labels =["Parfait", "Trop à droite", "", "", "", "", "Trop à gauche"];

  $scope.data = [
    [112, 52, 13, 0, 0, 19, 82],
  
  ];


}])

.controller('distance1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.labels = ['Driver', 'Bois 3', 'Bois 5', 'Fer 5', 'Fer 7', 'Fer 9', 'Putter'];
  $scope.series = ['Distance moyenne','Distance Max'];

  $scope.data = [
    [213, 187, 173, 143, 124, 103, 6],
    [263, 230, 208, 167, 146, 127, 13]

  ];


}])

.controller('distance2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.labels = ['Driver', 'Bois 3', 'Bois 5', 'Fer 5', 'Fer 7', 'Fer 9', 'Putter'];
  $scope.series = ['Distance moyenne','Distance Max'];

  $scope.data = [
    [213, 187, 173, 143, 124, 103, 6],
    [263, 230, 208, 167, 146, 127, 13]

  ];

}])

.controller('distance3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.labels = ['Driver', 'Bois 3', 'Bois 5', 'Fer 5', 'Fer 7', 'Fer 9', 'Putter'];
  $scope.series = ['Distance moyenne','Distance Max'];

  $scope.data = [
    [213, 187, 173, 143, 124, 103, 6],
    [263, 230, 208, 167, 146, 127, 13]

  ];


}])




