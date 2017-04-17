angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('accueil', {
    url: '/accueil',
    templateUrl: 'templates/accueil.html',
    controller: 'accueilCtrl'
  })

  .state('informations', {
    url: '/infos',
    templateUrl: 'templates/informations.html',
    controller: 'informationsCtrl'
  })

  .state('golfDesRochersSVign', {
    url: '/vitre',
    templateUrl: 'templates/golfDesRochersSVign.html',
    controller: 'golfDesRochersSVignCtrl'
  })

  .state('golfDeCesson', {
    url: '/cesson',
    templateUrl: 'templates/golfDeCesson.html',
    controller: 'golfDeCessonCtrl'
  })

  .state('golfDeRennesSaintJacques', {
    url: '/saintjacques',
    templateUrl: 'templates/golfDeRennesSaintJacques.html',
    controller: 'golfDeRennesSaintJacquesCtrl'
  })

  .state('golfDeSaintMalo', {
    url: '/tronchet',
    templateUrl: 'templates/golfDeSaintMalo.html',
    controller: 'golfDeSaintMaloCtrl'
  })

  .state('capMaloLeGolf', {
    url: '/melesse',
    templateUrl: 'templates/capMaloLeGolf.html',
    controller: 'capMaloLeGolfCtrl'
  })

  .state('dinardGolf', {
    url: '/saintbriac',
    templateUrl: 'templates/dinardGolf.html',
    controller: 'dinardGolfCtrl'
  })

  .state('golfDeCiceBlossac', {
    url: '/bruz',
    templateUrl: 'templates/golfDeCiceBlossac.html',
    controller: 'golfDeCiceBlossacCtrl'
  })

  .state('golfDuDomaineDesOrmes', {
    url: '/doldebretagne',
    templateUrl: 'templates/golfDuDomaineDesOrmes.html',
    controller: 'golfDuDomaineDesOrmesCtrl'
  })

  .state('golfDeLaFreslonniere', {
    url: '/renneslerheu',
    templateUrl: 'templates/golfDeLaFreslonniere.html',
    controller: 'golfDeLaFreslonniereCtrl'
  })

  .state('nouvellePartie', {
    url: '/newgame',
    templateUrl: 'templates/nouvellePartie.html',
    controller: 'nouvellePartieCtrl'
  })

  .state('statistiques', {
    url: '/statgeneral',
    templateUrl: 'templates/statistiques.html',
    controller: 'statistiquesCtrl'
  })

  .state('nouvellePartie2', {
    url: '/9Trous32',
    templateUrl: 'templates/nouvellePartie2.html',
    controller: 'nouvellePartie2Ctrl'
  })

  .state('nouvellePartie3', {
    url: '/9TrousC',
    templateUrl: 'templates/nouvellePartie3.html',
    controller: 'nouvellePartie3Ctrl'
  })

  .state('nouvellePartie4', {
    url: '/18Trous',
    templateUrl: 'templates/nouvellePartie4.html',
    controller: 'nouvellePartie4Ctrl'
  })

  .state('statistiques2', {
    url: '/statistiques9TC',
    templateUrl: 'templates/statistiques2.html',
    controller: 'statistiques2Ctrl'
  })

  .state('statistiques3', {
    url: '/9T32',
    templateUrl: 'templates/statistiques3.html',
    controller: 'statistiques3Ctrl'
  })

  .state('statistiques4', {
    url: '/18T72',
    templateUrl: 'templates/statistiques4.html',
    controller: 'statistiques4Ctrl'
  })

  .state('aide', {
    url: '/help',
    templateUrl: 'templates/aide.html',
    controller: 'aideCtrl'
  })

  .state('parameters', {
    url: '/param',
    templateUrl: 'templates/paramTres.html',
    controller: 'paramCtrl',
  })
        
  .state('tableauDeScore1', {
    url: '/statistiques2',
    templateUrl: 'templates/tableauDeScore9trou32.html',
    controller: 'tableauDeScore1Ctrl'
    })
        
  .state('tableauDeScore2', {
    url: '/statistiques3',
    templateUrl: 'templates/tableauDeScore9trouC.html',
    controller: 'tableauDeScore2Ctrl'
    })
        
  .state('tableauDeScore3', {
    url: '/statistiques4',
    templateUrl: 'templates/tableauDeScore18trou.html',
    controller: 'tableauDeScore3Ctrl'
    })
        

 
        

  .state('statistiquesgeneral', {
    url: '/statistiquesgeneral',
    templateUrl: 'templates/statistiquesgeneral.html',
    controller: 'statistiquesgeneralCtrl',
  })
        
        


$urlRouterProvider.otherwise('/accueil')

  

});
