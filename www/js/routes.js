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
    controller: 'statistiquesCtrl',
    params: {
        id: {value: null},
      },
  })

  .state('nouvellePartie2', {
    url: '/9Trous32',
    templateUrl: 'templates/nouvellePartie2.html',
    abstract: true,
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

  .state('NouvellePartie2.Trou1', {
    url: '/trou1',
    views : {
      'Trou1': {
        templateUrl: 'templates/Trou1.html',
        controller: 'Trou1Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou2', {
    url: '/trou2',
    views: {
      'Trou2': {
        templateUrl: 'templates/Trou2.html',
        controller: 'Trou2Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou3', {
    url: '/trou3',
    views: {
      'Trou3':{
        templateUrl: 'templates/Trou3.html',
        controller: 'Trou3Ctrl'
      }   
    } 
  })

  .state('NouvellePartie2.Trou4', {
    url: '/trou4',
    views: {
      'Trou4': {
        templateUrl: 'templates/Trou4.html',
        controller: 'Trou4Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou5', {
    url: '/trou5',
    views: {
      'Trou5':{
        templateUrl: 'templates/Trou5.html',
        controller: 'Trou5Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou6', {
    url: '/trou6',
    views: {
      'Trou6': {
        templateUrl: 'templates/Trou6.html',
        controller: 'Trou6Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou7', {
    url: '/trou7',
    views: {
      'Trou7': {
        templateUrl: 'templates/Trou7.html',
        controller: 'Trou7Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou8', {
    url: '/trou8',
    views: {
      'Trou8': {
        templateUrl: 'templates/Trou8.html',
        controller: 'Trou8Ctrl'
      }
    }
  })

  .state('NouvellePartie2.Trou9', {
    url: '/trou9',
    views: {
      'Trou9': {
        templateUrl: 'templates/Trou9.html',
        controller: 'Trou9Ctrl'
      }
    }
  })


        
        


$urlRouterProvider.otherwise('/accueil')

}); 


