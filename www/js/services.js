

angular.module('app.services', [])
  .factory('ShotTableScore', function ($cordovaSQLite, $ionicPlatform) {
    var db, dbName = "ShotTableScore.db"
 
    function useWebSql() {
      db = window.openDatabase(dbName, "1.0", "Shot database", 200000)
      console.info('Using webSql')
    }
 
    function useSqlLite() {
      db = $cordovaSQLite.openDB({name: dbName, location : 1})
      console.info('Using SQLITE')
    }
 
    function initDatabase(){
      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS SCORE_SHOT (id integer primary key,id_course_hole, id_hole, id_course, id_club, coord_LAT_start, coord_LONG_start, coor_LAT_end_theo, coord_LONG_end_theo, coor_LAT_end_reel ,coord_LONG_end_reel, distance, angle, wind, date)')
        .then(function(res){
 
        }, onErrorQuery)
    }

    function deleteDatabase(){
    	$cordovaSQLite.execute(db, 'DROP TABLE IF EXISTS SCORE_SHOT ')
        .then(function(res){
 
        }, onErrorQuery)
    }
 
    $ionicPlatform.ready(function () {
      if(window.cordova){
        useSqlLite()
      } else {
        useWebSql()
      }
       
      initDatabase()
    })
 
    function onErrorQuery(err){
      console.error(err)
    }
 
    return {
      createShot: function (shot) {
        return $cordovaSQLite.execute(db, 'INSERT INTO SCORE_SHOT (id_course_hole, id_hole, id_course, id_club, coord_LAT_start, coord_LONG_start, coor_LAT_end_theo, coord_LONG_end_theo, coor_LAT_end_reel ,coord_LONG_end_reel, distance, angle, wind, date) VALUES(?, ?)', [shot.id_course_hole, shot.id_hole, shot.id_course, shot.id_club, shot.coord_LAT_start, shot.coord_LONG_start, shot.coor_LAT_end_theo, shot.coord_LONG_end_theo, shot.coor_LAT_end_reel, shot.coord_LONG_end_reel, shot.distance, shot.angle, shot.wind, shot.date])
      },
      updateShot: function(shot){
        return $cordovaSQLite.execute(db, 'UPDATE SCORE_SHOT set id_course_hole=?, id_hole=?, id_course=?, id_club=?, coord_LAT_start=?, coord_LONG_start=?, coor_LAT_end_theo=?, coord_LONG_end_theo=?, coor_LAT_end_reel=? ,coord_LONG_end_reel=?, distance=? angle=?, wind=?, date=? where id = ?', [shot.id_course_hole, shot.id_hole, shot.id_course, shot.id_club, shot.coord_LAT_start, shot.coord_LONG_start, shot.coor_LAT_end_theo, shot.coord_LONG_end_theo, shot.coor_LAT_end_reel, shot.coord_LONG_end_reel, shot.distance, shot.angle, shot.wind, shot.date, shot.id])
      },
      getAll: function(callback){
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM SCORE_SHOT').then(function (results) {
            var data = []
 
            for (i = 0, max = results.rows.length; i < max; i++) {
              data.push(results.rows.item(i))
            }
 
            callback(data)
          }, onErrorQuery)
        })
      },
 
      getById: function(id, callback){
        $ionicPlatform.ready(function () {
          $cordovaSQLite.execute(db, 'SELECT * FROM SCORE_SHOT where id = ?', [id]).then(function (results) {
            callback(results.rows.item(0))
          })
        })
      },

      getAngle: function(callback){
        $ionicPlatform.ready(function(){
          $cordovaSQLite.execute(db, 'SELECT angle FROM SCORE_SHOT').then(function (results) {
            var data = []
 
            for (i = 0, max = results.rows.length; i < max; i++) {
              data.push(results.rows.item(i))
            }

            callback(data)
          }, onErrorQuery)
        })
      },

      getDistance: function(callback){
        $ionicPlatform.ready(function(){
          $cordovaSQLite.execute(db, 'SELECT distance FROM SCORE_SHOT').then(function (results) {
            var data = []
 
            for (i = 0, max = results.rows.length; i < max; i++) {
              data.push(results.rows.item(i))
            }

            callback(data)
          }, onErrorQuery)
        })
      },

      getLastDate: function(){
        $ionicPlatform.ready(function(){
          $cordovaSQLite.execute(db, 'SELECT date FROM SCORE_SHOT where id=max(id)').then(function(results){
            callback(results.rows.item(0))
          })
        })
      }
    }
  })